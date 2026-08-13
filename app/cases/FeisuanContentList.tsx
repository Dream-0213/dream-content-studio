"use client";

import { useMemo, useState } from "react";
import type { FeisuanContent } from "./feisuan-content";

const directions = ["全部方向", "方向一", "方向二", "方向三", "方向四"];

function platformName(url: string) {
  const host = new URL(url).hostname.replace(/^www\./, "");
  if (host.includes("csdn.net")) return "CSDN";
  if (host.includes("zhihu.com")) return "知乎";
  if (host.includes("ifclub.com.cn")) return "IFCLUB";
  if (host.includes("mp.weixin.qq.com")) return "公众号";
  if (host.includes("cloud.tencent.com")) return "腾讯云";
  if (host.includes("51cto.com")) return "51CTO";
  if (host.includes("modelscope.cn")) return "魔搭社区";
  if (host.includes("volcengine.com")) return "火山引擎";
  if (host.includes("cnblogs.com")) return "博客园";
  if (host.includes("weibo.com")) return "微博";
  if (host.includes("baijiahao.baidu.com")) return "百家号";
  if (host.includes("toutiao.com")) return "今日头条";
  if (host.includes("infoq.cn")) return "InfoQ";
  return host;
}

export function FeisuanContentList({contents}: {contents: FeisuanContent[]}) {
  const [query, setQuery] = useState("");
  const [direction, setDirection] = useState("全部方向");
  const visible = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return contents.filter(item =>
      (direction === "全部方向" || item.direction === direction) &&
      (!keyword || `${item.name} ${item.title}`.toLowerCase().includes(keyword))
    );
  }, [contents, direction, query]);

  return <>
    <div className="delivery-toolbar">
      <label htmlFor="delivery-search">搜索公开内容</label>
      <input id="delivery-search" value={query} onChange={event => setQuery(event.target.value)} placeholder="输入博主名称或文章标题" />
      <select aria-label="筛选内容方向" value={direction} onChange={event => setDirection(event.target.value)}>
        {directions.map(item => <option key={item}>{item}</option>)}
      </select>
      <span>{visible.length} 条</span>
    </div>
    <div className="delivery-list">
      {visible.map((item, index) => <article className="delivery-item" key={`${item.name}-${item.title}`}>
        <span className="delivery-index">{String(index + 1).padStart(2,"0")}</span>
        <div className="delivery-main">
          <div className="delivery-meta"><strong>{item.name}</strong><span>{item.direction}</span><time>{item.date}</time></div>
          <h3>{item.title}</h3>
        </div>
        <div className="delivery-links">
          {item.links.map(url => <a key={url} href={url} target="_blank" rel="noreferrer">{platformName(url)} ↗</a>)}
        </div>
      </article>)}
      {visible.length === 0 && <p className="creator-empty">没有找到匹配的公开内容。</p>}
    </div>
  </>;
}
