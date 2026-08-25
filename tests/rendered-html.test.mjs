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
  assert.match(html, /Lucifer 三思而后行/);
  assert.match(html, /心无旁骛~/);
  assert.match(html, /计算机魔术师/);
  assert.match(html, /wei_shuo/);
  assert.match(html, /艾派森/);
  assert.match(html, /Want595/);
  assert.match(html, /独立开发日记/);
  assert.match(html, /小虚竹说技术/);
  assert.match(html, /编程探秘阁/);
  assert.match(html, /一点一木AI实验室/);
  assert.match(html, /数学建模岛/);
  assert.match(html, /智网研习社/);
  assert.match(html, /宝哥AGI/);
  assert.match(html, /阿Q说代码/);
  assert.match(html, /稻草人/);
  assert.match(html, /小妖同学学AI/);
  assert.match(html, /MaynorAI编程出海/);
  assert.match(html, /TechFanyi/);
  assert.match(html, /键舞风云/);
  assert.match(html, /倔强的石头编程说/);
  assert.match(html, /落鱼科技/);
  assert.match(html, /欢喜长随关耳/);
  assert.match(html, /金尘马/);
  assert.match(html, /木马人AI/);
  assert.match(html, /AI前沿的短裤哥/);
  assert.match(html, /2\.3W\+/);
  assert.match(html, /1\.4W\+/);
  assert.match(html, /1\.3W\+/);
  assert.match(html, /1\.2W\+/);
  assert.match(html, /百度星河/);
  assert.match(html, /开源中国/);
});

test("公众号矩阵包含墨鱼Dev且不重复", async () => {
  const response = await render("/creators");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.equal((html.match(/<h3>墨鱼Dev<\/h3>/g) ?? []).length, 1);
  assert.match(html, /oBISQyFgosCUWj-2jojiFQ/);
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
  assert.match(html, /350 位/);
  assert.match(html, /总阅读量达 200W\+/);
  assert.match(html, /华为昇腾及鲲鹏/);
  assert.match(html, /1000W\+/);
});

test("飞算 JavaAI 案例展示总阅读量", async () => {
  const response = await render("/cases/feisuan-javaai");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /项目总阅读量/);
  assert.match(html, /200W\+/);
  assert.match(html, /350/);
});

test("飞算 JavaAI 案例合并新增 50 篇公开内容", async () => {
  const response = await render("/cases/feisuan-javaai");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /200.*篇公开内容/s);
  assert.match(html, /600.*个多平台发布链接/s);
  assert.match(html, /飞算JavaAI计费精度比Kimi-K2强吗/);
  assert.match(html, /飞算JavaAI能搞定带7种状态和9层校验的用电调度系统吗/);
  assert.match(html, /163844428/);
  assert.match(html, /163917901/);
  assert.match(html, /万粉博主/);
  assert.match(html, /千粉博主/);
  assert.match(html, /百粉博主/);
});

test("首页与案例详情展示新增阅读成果", async () => {
  const homeResponse = await render();
  const homeHtml = await homeResponse.text();
  assert.match(homeHtml, /项目总阅读量/);
  assert.match(homeHtml, /100W\+/);
  assert.match(homeHtml, /篇均阅读量/);
  assert.match(homeHtml, /2W\+/);
  assert.match(homeHtml, /1000W\+/);

  const todeskResponse = await render("/cases/todesk-distribution");
  assert.match(await todeskResponse.text(), /项目总阅读量 100W\+/);

  const huaweiResponse = await render("/cases/huawei-kunpeng-ascend");
  const huaweiHtml = await huaweiResponse.text();
  assert.match(huaweiHtml, /篇均阅读量 2W\+/);
  assert.match(huaweiHtml, /项目总阅读量 1000W\+/);
});

test("GitHub 推广项目突出展示曝光与 Star 成果", async () => {
  const homeResponse = await render();
  const homeHtml = await homeResponse.text();
  assert.match(homeHtml, /GitHub 开源项目推广/);
  assert.match(homeHtml, /单篇内容曝光/);
  assert.match(homeHtml, /10W\+/);
  assert.match(homeHtml, /近20万/);
  assert.match(homeHtml, /href="\/cases\/github-promotion"/);

  const caseResponse = await render("/cases/github-promotion");
  assert.equal(caseResponse.status, 200);
  const caseHtml = await caseResponse.text();
  assert.match(caseHtml, /助力项目累计收获近 20 万 Star/);
});

test("GitHub 推广案例展示博主与多平台发布链接", async () => {
  const response = await render("/cases/github-promotion");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /公开发布/);
  assert.match(html, /心无旁骛～/);
  assert.match(html, /是Dream呀/);
  assert.match(html, /163815850/);
  assert.match(html, /2072626761863533035/);
  assert.match(html, /30.*个公开发布链接/s);
});

test("ToDesk AI 卡片展示全站热榜成果", async () => {
  const homeResponse = await render();
  const homeHtml = await homeResponse.text();
  assert.match(homeHtml, /文章登顶全站热榜第一/);

  const caseResponse = await render("/cases/todesk-ai");
  assert.equal(caseResponse.status, 200);
  assert.match(await caseResponse.text(), /多篇文章登顶全站热榜第一/);
});

test("ToDesk AI 详情展示两篇热榜第一案例", async () => {
  const response = await render("/cases/todesk-ai");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /全站热榜.*第一案例/s);
  assert.match(html, /byte轻骑兵/);
  assert.match(html, /云边有个稻草人/);
  assert.match(html, /163734879/);
  assert.match(html, /163922162/);
  assert.match(html, /todesk-ai-byteqqb-hotlist\.jpg/);
  assert.match(html, /todesk-ai-scarecrow-hotlist\.jpg/);
  assert.equal((html.match(/CSDN 全站综合热榜第 1/g) ?? []).length >= 2, true);
});

test("ToDesk 长期代发详情展示 7 月 50 篇多平台公开案例", async () => {
  const response = await render("/cases/todesk-distribution");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /7 月公开/);
  assert.match(html, /50.*篇公开内容/s);
  assert.match(html, /150.*个多平台链接/s);
  assert.match(html, /2026 AI Agent横评：ToDesk AI凭什么打败codex和AutoClaw/);
  assert.match(html, /手机远程控制电脑教程：ToDesk跨设备协同完全指南/);
  assert.match(html, /162523850/);
  assert.match(html, /163376600/);
  assert.doesNotMatch(html, /feishu\.cn/);

  const aiResponse = await render("/cases/todesk-ai");
  const aiHtml = await aiResponse.text();
  assert.doesNotMatch(aiHtml, /162523850/);
  assert.doesNotMatch(aiHtml, /163376600/);
});

test("星空组网案例不展示内部内容稿", async () => {
  const response = await render("/cases/xingkong-network");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.doesNotMatch(html, /内容稿/);
  assert.doesNotMatch(html, /feishu\.cn/);
  assert.match(html, /查看|CSDN/);
});

test("Dataify 案例展示 KOL 文章与阅读成果", async () => {
  const response = await render("/cases/dataify");
  const html = await response.text();
  assert.equal(response.status, 200);
  assert.match(html, /70W\+/);
  assert.match(html, /11.*篇公开文章/s);
  assert.match(html, /是Dream呀/);
  assert.match(html, /硬核技术工作室/);
  assert.match(html, /162095320/);
  assert.match(html, /162440870/);
});

test("Dataify 案例区分 KOL 与 KOC 合作成果", async () => {
  const response = await render("/cases/dataify");
  const html = await response.text();
  assert.match(html, /KOL 高质量/);
  assert.match(html, /KOC 持续/);
  assert.match(html, /30.*位 KOC 创作者/s);
  assert.match(html, /90.*个多平台链接/s);
  assert.match(html, /做 AI 项目时，数据集质量往往比模型参数更先决定结果/);
  assert.match(html, /一份周报反复延期后，我把竞品数据采集改成了自动化任务/);
  assert.match(html, /163995396/);
});
