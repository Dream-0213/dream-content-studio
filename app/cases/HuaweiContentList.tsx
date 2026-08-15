"use client";

import { useMemo, useState } from "react";
import type { HuaweiContent } from "./huawei-content";

export function HuaweiContentList({contents}: {contents: HuaweiContent[]}) {
  const topics = useMemo(() => ["全部技术方向", ...Array.from(new Set(contents.map(item => item.topic)))], [contents]);
  const [query, setQuery] = useState("");
  const [topic, setTopic] = useState("全部技术方向");
  const visible = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return contents.filter(item =>
      (topic === "全部技术方向" || item.topic === topic) &&
      (!keyword || `${item.name} ${item.title} ${item.topic}`.toLowerCase().includes(keyword))
    );
  }, [contents, query, topic]);

  return <>
    <div className="delivery-toolbar">
      <label htmlFor="huawei-delivery-search">搜索技术成果</label>
      <input id="huawei-delivery-search" value={query} onChange={event => setQuery(event.target.value)} placeholder="输入博主、文章标题或技术关键词" />
      <select aria-label="筛选华为项目技术方向" value={topic} onChange={event => setTopic(event.target.value)}>
        {topics.map(item => <option key={item}>{item}</option>)}
      </select>
      <span>{visible.length} 条</span>
    </div>
    <div className="delivery-list">
      {visible.map((item, index) => <article className="delivery-item" key={`${item.name}-${item.title}`}>
        <span className="delivery-index">{String(index + 1).padStart(3,"0")}</span>
        <div className="delivery-main">
          <div className="delivery-meta"><strong>{item.name}</strong><span>{item.topic}</span>{item.date && <time>{item.date}</time>}</div>
          <h3>{item.title}</h3>
        </div>
        <div className="delivery-links">
          {item.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>)}
        </div>
      </article>)}
      {visible.length === 0 && <p className="creator-empty">没有找到匹配的技术内容。</p>}
    </div>
  </>;
}
