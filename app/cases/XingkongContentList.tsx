"use client";

import { useMemo, useState } from "react";
import type { XingkongContent } from "./xingkong-content";

export function XingkongContentList({contents}: {contents: XingkongContent[]}) {
  const [query, setQuery] = useState("");
  const visible = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return contents.filter(item => !keyword || `${item.name} ${item.title}`.toLowerCase().includes(keyword));
  }, [contents, query]);

  return <>
    <div className="delivery-toolbar">
      <label htmlFor="xingkong-search">搜索案例内容</label>
      <input id="xingkong-search" value={query} onChange={event => setQuery(event.target.value)} placeholder="输入博主名称或文章关键词" />
      <span>{visible.length} 篇</span>
    </div>
    <div className="delivery-list xingkong-list">
      {visible.map((item, index) => <article className="delivery-item" key={`${item.name}-${item.title}`}>
        <span className="delivery-index">{String(index + 1).padStart(2,"0")}</span>
        <div className="delivery-main">
          <div className="delivery-meta"><strong>{item.name}</strong><span>已发布</span><time>{item.date}</time></div>
          <h3>{item.title}</h3>
        </div>
        <div className="delivery-links">{item.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} ↗</a>)}</div>
      </article>)}
      {visible.length === 0 && <p className="creator-empty">没有找到匹配的案例内容。</p>}
    </div>
  </>;
}
