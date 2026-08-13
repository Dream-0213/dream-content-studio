"use client";

import { useMemo, useState } from "react";
import type { Creator, WechatCreator } from "./creators-data";

const platforms: Array<[keyof Creator, string]> = [
  ["csdn", "CSDN"], ["juejin", "掘金"], ["zhihu", "知乎"], ["wechat", "公众号"], ["xiaohongshu", "小红书"],
];

export function CreatorsDirectory({creators}: {creators: Creator[]}) {
  const [query, setQuery] = useState("");
  const visible = useMemo(() => creators.filter(item => item.name.toLowerCase().includes(query.trim().toLowerCase())), [creators, query]);
  return <>
    <div className="creator-toolbar">
      <label htmlFor="creator-search">搜索博主</label>
      <input id="creator-search" value={query} onChange={event => setQuery(event.target.value)} placeholder="输入博主名称" />
      <span>{visible.length} 位</span>
    </div>
    <div className="creator-list">
      {visible.map((creator, index) => <article className="creator-row" key={creator.name}>
        <span className="creator-index">{String(index + 1).padStart(2,"0")}</span>
        <div className="creator-name"><h2>{creator.name}</h2><strong>{creator.followers}</strong></div>
        <div className="creator-platforms">
          {platforms.map(([key,label]) => creator[key] ? <a key={key} href={creator[key]} target="_blank" rel="noreferrer">{label} ↗</a> : null)}
        </div>
      </article>)}
      {visible.length === 0 && <p className="creator-empty">没有找到匹配的博主。</p>}
    </div>
  </>;
}

export function WechatCreatorsDirectory({creators}: {creators: WechatCreator[]}) {
  return <div className="wechat-creator-list">
    {creators.map((creator, index) => <article className="wechat-creator-card" key={`${creator.name}-${creator.wechat}`}>
      <span className="creator-index">{String(index + 1).padStart(2,"0")}</span>
      <div><h3>{creator.name}</h3><span className="wechat-category">{creator.category}</span></div>
      <strong>{creator.followers}</strong>
      <a href={creator.wechat} target="_blank" rel="noreferrer">查看公众号文章 ↗</a>
    </article>)}
  </div>;
}
