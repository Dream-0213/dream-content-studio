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

type ExportRow = {
  "博主名称": string;
  "CSDN粉丝数": string;
  "公众号粉丝数": string;
  "内容方向": string;
  "CSDN主页": string;
  "掘金主页": string;
  "知乎主页": string;
  "公众号文章": string;
  "小红书主页": string;
};

export function CreatorsExportButton({creators, wechatCreators}: {creators: Creator[]; wechatCreators: WechatCreator[]}) {
  const [exporting, setExporting] = useState(false);

  async function exportExcel() {
    setExporting(true);
    try {
      const XLSX = await import("xlsx");
      const merged = new Map<string, ExportRow>();

      creators.forEach(creator => merged.set(creator.name, {
        "博主名称": creator.name,
        "CSDN粉丝数": creator.csdn ? creator.followers : "",
        "公众号粉丝数": "",
        "内容方向": "",
        "CSDN主页": creator.csdn ?? "",
        "掘金主页": creator.juejin ?? "",
        "知乎主页": creator.zhihu ?? "",
        "公众号文章": creator.wechat ?? "",
        "小红书主页": creator.xiaohongshu ?? "",
      }));

      wechatCreators.forEach(creator => {
        const current = merged.get(creator.name);
        merged.set(creator.name, {
          "博主名称": creator.name,
          "CSDN粉丝数": current?.["CSDN粉丝数"] ?? "",
          "公众号粉丝数": creator.followers,
          "内容方向": creator.category,
          "CSDN主页": current?.["CSDN主页"] ?? "",
          "掘金主页": current?.["掘金主页"] ?? "",
          "知乎主页": current?.["知乎主页"] ?? "",
          "公众号文章": current?.["公众号文章"] || creator.wechat,
          "小红书主页": current?.["小红书主页"] ?? "",
        });
      });

      const worksheet = XLSX.utils.json_to_sheet([...merged.values()]);
      worksheet["!cols"] = [
        {wch:24}, {wch:14}, {wch:16}, {wch:16}, {wch:48}, {wch:48}, {wch:48}, {wch:58}, {wch:48},
      ];
      worksheet["!autofilter"] = {ref: worksheet["!ref"] ?? "A1:I1"};
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "合作博主名单");
      XLSX.writeFile(workbook, `Dream工作室合作博主名单-${new Date().toISOString().slice(0,10)}.xlsx`);
    } finally {
      setExporting(false);
    }
  }

  return <button type="button" className="creator-export-button" onClick={exportExcel} disabled={exporting}>
    {exporting ? "正在生成 Excel…" : "一键导出博主名单（Excel） ↓"}
  </button>;
}
