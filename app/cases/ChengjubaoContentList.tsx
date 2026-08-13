"use client";

import { useMemo, useState } from "react";
import type { ChengjubaoContent } from "./chengjubao-content";

function platformName(url: string) {
  const host = new URL(url).hostname.replace(/^www\./, "");
  if (host.includes("csdn.net")) return "CSDN";
  if (host.includes("zhihu.com")) return "知乎";
  if (host.includes("juejin.cn")) return "掘金";
  if (host.includes("weixin.qq.com")) return "公众号";
  if (host.includes("toutiao.com")) return "今日头条";
  if (host.includes("51cto.com")) return "51CTO";
  return "查看内容";
}

export function ChengjubaoContentList({contents}: {contents: ChengjubaoContent[]}) {
  const [query, setQuery] = useState("");
  const visible = useMemo(() => contents.filter(item => item.name.toLowerCase().includes(query.trim().toLowerCase())), [contents, query]);
  return <>
    <div className="delivery-toolbar">
      <label htmlFor="chengjubao-search">搜索投放博主</label>
      <input id="chengjubao-search" value={query} onChange={event => setQuery(event.target.value)} placeholder="输入博主名称" />
      <span>{visible.length} 位</span>
    </div>
    <div className="delivery-list chengjubao-list">
      {visible.map((item, index) => <article className="delivery-item" key={item.name}>
        <span className="delivery-index">{String(index + 1).padStart(2,"0")}</span>
        <div className="delivery-main"><div className="delivery-meta"><strong>{item.name}</strong><span>已发布</span></div><h3>程聚宝开发者内容推广</h3></div>
        <div className="delivery-links">{item.links.map(link => <a key={link} href={link} target="_blank" rel="noreferrer">{platformName(link)} ↗</a>)}</div>
      </article>)}
    </div>
  </>;
}
