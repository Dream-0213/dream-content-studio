"use client";

import { useMemo, useState } from "react";
import type { Creator, WechatCreator } from "./creators-data";

const platforms: Array<[keyof Creator, string]> = [
  ["csdn", "CSDN"], ["juejin", "掘金"], ["zhihu", "知乎"], ["wechat", "公众号"], ["xiaohongshu", "小红书"],
];

function followerValue(value: string) {
  const number = Number.parseFloat(value.replace(/[^\d.]/g, "")) || 0;
  return /w/i.test(value) ? number * 10000 : number;
}

export function CreatorsDirectory({creators}: {creators: Creator[]}) {
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const normalizedQuery = query.trim().toLowerCase();
  const matching = useMemo(() => creators.filter(item => item.name.toLowerCase().includes(normalizedQuery)), [creators, normalizedQuery]);
  const lowerFollowerCount = useMemo(() => creators.filter(item => followerValue(item.followers) < 10000).length, [creators]);
  const visible = normalizedQuery || showAll ? matching : matching.filter(item => followerValue(item.followers) >= 10000);
  return <>
    <div className="creator-toolbar">
      <label htmlFor="creator-search">搜索博主</label>
      <input id="creator-search" value={query} onChange={event => setQuery(event.target.value)} placeholder="输入博主名称" />
      <span>{normalizedQuery ? `${visible.length} 位匹配` : showAll ? `${visible.length} 位已展示` : `${visible.length} 位万粉以上`}</span>
    </div>
    <div className="creator-list">
      {visible.map((creator, index) => <article className="creator-row" key={`${creator.name}-${creator.csdn ?? creator.wechat ?? index}`}>
        <span className="creator-index">{String(index + 1).padStart(2,"0")}</span>
        <div className="creator-name"><h2>{creator.name}</h2><strong>{creator.followers}</strong></div>
        <div className="creator-platforms">
          {platforms.map(([key,label]) => creator[key] ? <a key={key} href={creator[key]} target="_blank" rel="noreferrer">{label} ↗</a> : null)}
        </div>
      </article>)}
      {visible.length === 0 && <p className="creator-empty">没有找到匹配的博主。</p>}
    </div>
    {!normalizedQuery && lowerFollowerCount > 0 && <div className="creator-expand-wrap">
      <button type="button" className="creator-expand-button" aria-expanded={showAll} onClick={() => setShowAll(value => !value)}>
        {showAll ? "收起万粉以下博主 ↑" : `查看万粉以下博主（${lowerFollowerCount} 位） ↓`}
      </button>
    </div>}
  </>;
}

export function WechatCreatorsDirectory({creators}: {creators: WechatCreator[]}) {
  const [showAll, setShowAll] = useState(false);
  const lowerFollowerCount = useMemo(() => creators.filter(item => followerValue(item.followers) < 3000).length, [creators]);
  const visible = showAll ? creators : creators.filter(item => followerValue(item.followers) >= 3000);
  return <>
    <div className="wechat-creator-list">
    {visible.map((creator, index) => <article className="wechat-creator-card" key={`${creator.name}-${creator.wechat}`}>
      <span className="creator-index">{String(index + 1).padStart(2,"0")}</span>
      <div><h3>{creator.name}</h3><span className="wechat-category">{creator.category}</span></div>
      <strong><small>粉丝</small>{creator.followers}</strong>
      <a href={creator.wechat} target="_blank" rel="noreferrer">查看公众号文章 ↗</a>
    </article>)}
    </div>
    {lowerFollowerCount > 0 && <div className="wechat-expand-wrap">
      <button type="button" className="wechat-expand-button" aria-expanded={showAll} onClick={() => setShowAll(value => !value)}>
        {showAll ? "收起更多公众号博主 ↑" : `查看更多公众号博主（${lowerFollowerCount} 位） ↓`}
      </button>
    </div>}
  </>;
}
