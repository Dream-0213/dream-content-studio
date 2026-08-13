import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseGrid, PageShell } from "../../components";
import { cases } from "../../data";
import { FeisuanContentList } from "../FeisuanContentList";
import { feisuanContents } from "../feisuan-content";
import { HuaweiContentList } from "../HuaweiContentList";
import { huaweiContents } from "../huawei-content";

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
    {slug === "feisuan-javaai" && <section className="section case-deliveries">
      <div className="section-heading"><div><p className="eyebrow">PUBLIC DELIVERABLES</p><h2>公开内容名单</h2></div><p>项目整体由 300 位万粉博主参与。以下为本批整理的 50 位创作者公开内容，共收录 150 个多平台发布链接。</p></div>
      <FeisuanContentList contents={feisuanContents} />
      <p className="creator-note">文章标题、发布日期和链接来自项目交付记录；外部平台内容可能因平台调整而发生变化。</p>
    </section>}
    {slug === "huawei-kunpeng-ascend" && <section className="section case-deliveries huawei-deliveries">
      <div className="section-heading"><div><p className="eyebrow">TECHNICAL CONTENT LIBRARY</p><h2>昇腾 × 鲲鹏<br/>技术成果库</h2></div><p>每篇文章都对应明确的课程或实操选题。内容覆盖模型迁移、推理部署、算子开发、性能调优和鲲鹏软件栈，可供开发者学习、复现与检索。</p></div>
      <div className="delivery-proof" aria-label="本批公开成果数据"><div><strong>114</strong><span>篇公开技术文章</span></div><div><strong>58</strong><span>位创作者成果</span></div><div><strong>16</strong><span>个核心技术专题</span></div><div><strong>227</strong><span>个多平台发布链接</span></div></div>
      <HuaweiContentList contents={huaweiContents} />
      <p className="creator-note">本页展示当前整理的公开成果，未展示博主粉丝量。文章标题、发布日期和链接来自项目交付记录；外部平台内容可能因平台调整而发生变化。</p>
    </section>}
    <section className="section cases-section"><p className="eyebrow">MORE WORK</p><CaseGrid /></section>
  </PageShell>;
}
