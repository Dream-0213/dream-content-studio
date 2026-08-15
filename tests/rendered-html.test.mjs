import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("首页呈现品牌、服务与可信成果", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /技术内容营销与CSDN博主推广/);
  assert.match(html, /让好产品被开发者看见/);
  assert.match(html, /300\+/);
  assert.match(html, /700\+/);
  assert.match(html, /公众号合作博主/);
  assert.match(html, /href="\/creators"/);
  assert.match(html, /href="\/contact"/);
  assert.match(html, /id="main-content"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/);
});

test("博主矩阵保留两个名单入口和导出功能", async () => {
  const response = await render("/creators");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /公众号博主矩阵/);
  assert.match(html, /技术博主矩阵/);
  assert.match(html, /id="wechat-creators"/);
  assert.match(html, /id="csdn-creators"/);
  assert.match(html, /一键导出博主名单/);
  assert.match(html, /输入博主名称/);
});

test("商务合作页保留微信联系与加入入口", async () => {
  const response = await render("/contact");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /聊聊你的/);
  assert.match(html, /183 0039 6393/);
  assert.match(html, /id="join-application"/);
  assert.match(html, /wechat-qr\.png/);
});

test("服务详情页提供明确行动入口且不重复当前服务", async () => {
  const response = await render("/services/creator-campaign");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /让合适的技术博主/);
  assert.match(html, /查看合作博主/);
  assert.match(html, /合作前，先把三件事说清楚/);
  assert.match(html, /看看其他服务/);
  assert.doesNotMatch(html, /href="\/services\/creator-campaign" class="service-card"/);
});

test("首页优先展示代表性大规模案例", async () => {
  const response = await render();
  const html = await response.text();
  assert.ok(html.indexOf("飞算 JavaAI") < html.indexOf("程聚宝 CSDN KOL 投放计划"));
});
