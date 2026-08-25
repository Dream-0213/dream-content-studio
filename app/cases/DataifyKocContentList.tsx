"use client";

import { useMemo, useState } from "react";
import type { DataifyKocContent } from "./dataify-content";

export function DataifyKocContentList({contents}: {contents: DataifyKocContent[]}) {
  const [query,setQuery]=useState("");
  const keyword=query.trim().toLowerCase();
  const visible=useMemo(()=>contents.filter(item=>!keyword||`${item.name} ${item.title}`.toLowerCase().includes(keyword)),[contents,keyword]);
  return <>
    <div className="delivery-toolbar"><label htmlFor="dataify-koc-search">搜索 KOC 内容</label><input id="dataify-koc-search" value={query} onChange={event=>setQuery(event.target.value)} placeholder="输入博主名称或文章关键词"/><span>{visible.length} 篇</span></div>
    <div className="delivery-list dataify-koc-list">{visible.map((item,index)=><article className="delivery-item" key={`${item.name}-${item.title}`}>
      <span className="delivery-index">{String(index+1).padStart(2,"0")}</span>
      <div className="delivery-main"><div className="delivery-meta"><strong>{item.name}</strong><span>KOC 合作</span><time>{item.date}</time></div><h3>{item.title}</h3></div>
      <div className="delivery-links">{item.links.map(link=><a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>)}</div>
    </article>)}</div>
    {visible.length===0&&<p className="creator-empty">没有找到匹配的 KOC 内容。</p>}
  </>;
}
