import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseGrid, PageShell } from "../../components";
import { cases } from "../../data";

export function generateStaticParams() { return cases.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: {params:Promise<{slug:string}>}): Promise<Metadata> {
  const {slug}=await params; const item=cases.find(x=>x.slug===slug);
  return item ? {title:`${item.client}合作案例`,description:item.summary,alternates:{canonical:`/cases/${slug}`}} : {};
}
export default async function CasePage({params}: {params:Promise<{slug:string}>}) {
  const {slug}=await params; const item=cases.find(x=>x.slug===slug); if(!item) notFound();
  return <PageShell>
    <section className="subhero"><div className="subhero-inner"><p className="eyebrow">CASE STUDY · {item.tag}</p><h1>{item.client}</h1><p className="lead">{item.summary}</p></div></section>
    <section className="metrics-band">{item.metrics.map(x=><div key={x}><span>{x}</span></div>)}</section>
    <section className="section detail-layout"><aside className="detail-aside">SELECTED WORK</aside><div className="detail-content"><p className="eyebrow">项目成果</p><h2>{item.result} {item.resultLabel}</h2><p>{item.summary} Dream 工作室统一负责博主招募、内容方向、文章审核、发布时间安排及最终链接统计，让品牌方只需一个接口即可掌握整体进度。</p></div></section>
    <section className="section cases-section"><p className="eyebrow">MORE WORK</p><CaseGrid /></section>
  </PageShell>;
}
