import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseGrid, PageShell } from "../../components";
import { cases } from "../../data";
import { FeisuanContentList } from "../FeisuanContentList";
import { feisuanContents } from "../feisuan-content";
import { HuaweiContentList } from "../HuaweiContentList";
import { huaweiContents } from "../huawei-content";
import { ChengjubaoContentList } from "../ChengjubaoContentList";
import { chengjubaoContents } from "../chengjubao-content";
import { XingkongContentList } from "../XingkongContentList";
import { xingkongContents } from "../xingkong-content";
import { threeSixtyContents } from "../three-sixty-content";
import { githubPromotionContents } from "../github-content";

export function generateStaticParams() { return cases.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: {params:Promise<{slug:string}>}): Promise<Metadata> {
  const {slug}=await params; const item=cases.find(x=>x.slug===slug);
  return item ? {title:`${item.client}合作案例`,description:item.summary,alternates:{canonical:`/cases/${slug}`}} : {};
}
export default async function CasePage({params}: {params:Promise<{slug:string}>}) {
  const {slug}=await params; const item=cases.find(x=>x.slug===slug); if(!item) notFound();
  return <PageShell>
    <section className="subhero"><div className="subhero-inner"><h1>{item.client}</h1><p className="lead">{item.summary}</p></div></section>
    <section className="metrics-band">{item.metrics.map(x=><div key={x}><span>{x}</span></div>)}</section>
    <section className="section detail-layout"><aside className="detail-aside">{item.tag}</aside><div className="detail-content"><h2>{item.result} {item.resultLabel}</h2><p>{item.summary} Dream 工作室统一负责博主招募、内容方向、文章审核、发布时间安排及最终链接统计，让品牌方只需一个接口即可掌握整体进度。</p></div></section>
    {slug === "feisuan-javaai" && <section className="section case-deliveries">
      <div className="section-heading"><div><h2>公开内容名单</h2></div><p>项目整体由 350 位万粉博主参与，总阅读量达 200W+。当前已整理 150 篇公开内容，收录 450 个多平台发布链接。</p></div>
      <div className="delivery-proof" aria-label="飞算 JavaAI 推广成果数据"><div><strong>200W+</strong><span>项目总阅读量</span></div><div><strong>350</strong><span>位万粉技术博主</span></div><div><strong>150</strong><span>篇公开内容</span></div><div><strong>450</strong><span>个多平台发布链接</span></div></div>
      <FeisuanContentList contents={feisuanContents} />
      <p className="creator-note">文章标题、发布日期和链接来自项目交付记录；外部平台内容可能因平台调整而发生变化。</p>
    </section>}
    {slug === "chengjubao-csdn-kol" && <section className="section case-deliveries chengjubao-deliveries">
      <div className="section-heading"><div><h2>CSDN KOL<br/>投放成果</h2></div><p>以高信任技术内容切入开发者决策链路，再通过多平台同步分发放大搜索覆盖和品牌触达。当前展示 19 位博主、57 个公开发布链接。</p></div>
      <div className="delivery-proof" aria-label="程聚宝投放成果数据"><div><strong>2W+</strong><span>平均单篇阅读量</span></div><div><strong>1000+</strong><span>平台日增长用户</span></div><div><strong>19</strong><span>位技术 KOL</span></div><div><strong>57</strong><span>个多平台发布链接</span></div></div>
      <ChengjubaoContentList contents={chengjubaoContents} />
      <p className="creator-note">本页展示当前整理的公开投放成果；外部平台内容可能因平台调整而发生变化。</p>
    </section>}
    {slug === "huawei-kunpeng-ascend" && <section className="section case-deliveries huawei-deliveries">
      <div className="section-heading"><div><h2>昇腾 × 鲲鹏<br/>技术成果库</h2></div><p>每篇文章都对应明确的课程或实操选题。内容覆盖模型迁移、推理部署、算子开发、性能调优和鲲鹏软件栈，可供开发者学习、复现与检索。</p></div>
      <div className="delivery-proof" aria-label="本批公开成果数据"><div><strong>114</strong><span>篇公开技术文章</span></div><div><strong>58</strong><span>位创作者成果</span></div><div><strong>16</strong><span>个核心技术专题</span></div><div><strong>227</strong><span>个多平台发布链接</span></div></div>
      <HuaweiContentList contents={huaweiContents} />
      <p className="creator-note">本页展示当前整理的公开成果，未展示博主粉丝量。文章标题、发布日期和链接来自项目交付记录；外部平台内容可能因平台调整而发生变化。</p>
    </section>}
    {slug === "xingkong-network" && <section className="section case-deliveries xingkong-deliveries">
      <div className="section-heading"><div><h2>真实组网场景<br/>持续内容增长</h2></div><p>从个人 NAS、远程办公到企业多门店互通，以连续发布的实测内容覆盖不同使用场景，让产品能力更容易被理解、搜索和验证。</p></div>
      <div className="delivery-proof" aria-label="星空组网推广成果数据"><div><strong>1000+</strong><span>公众号平均阅读量</span></div><div><strong>稳定增长</strong><span>平台用户表现</span></div><div><strong>11</strong><span>位技术博主</span></div><div><strong>44</strong><span>个内容及发布链接</span></div></div>
      <XingkongContentList contents={xingkongContents} />
      <p className="creator-note">文章标题、发布日期和链接来自项目交付记录；外部平台内容可能因平台调整而发生变化。</p>
    </section>}
    {slug === "360-ai" && <section className="section case-deliveries three-sixty-deliveries">
      <div className="section-heading"><div><h2>部分公开<br/>CSDN 内容</h2></div><p>围绕 GUI Agent 与 360 人工智能研究院技术成果，组织技术创作者从产品趋势、工作流落地和多模态研究等角度展开内容解读。以下展示部分已公开发布文章。</p></div>
      <div className="delivery-list three-sixty-list">
        {threeSixtyContents.map((item,index)=><article className="delivery-item" key={`${item.name}-${item.url}`}>
          <span className="delivery-index">{String(index+1).padStart(2,"0")}</span>
          <div className="delivery-main"><div className="delivery-meta"><strong>{item.name}</strong><span>已发布</span></div></div>
          <div className="delivery-links"><a href={item.url} target="_blank" rel="noreferrer">查看 CSDN 文章</a></div>
        </article>)}
      </div>
      <p className="creator-note">当前展示 19 条公开 CSDN 发布记录；未提供公开成稿链接的内容暂不展示。</p>
    </section>}
    {slug === "github-promotion" && <section className="section case-deliveries github-deliveries">
      <div className="section-heading"><div><h2>公开发布<br/>内容案例</h2></div><p>技术博主围绕开源项目展开真实体验与技术解读，并同步分发至主流开发者社区，形成更广泛的搜索覆盖与持续曝光。</p></div>
      <div className="delivery-proof" aria-label="GitHub 开源项目推广公开成果"><div><strong>10</strong><span>位技术博主</span></div><div><strong>30</strong><span>个公开发布链接</span></div><div><strong>10W+</strong><span>单篇内容曝光</span></div><div><strong>近20万</strong><span>项目累计 Star</span></div></div>
      <div className="delivery-list github-delivery-list">
        {githubPromotionContents.map((content,index)=><article className="delivery-item" key={`${content.name}-${content.date}`}>
          <span className="delivery-index">{String(index+1).padStart(2,"0")}</span>
          <div className="delivery-main"><div className="delivery-meta"><strong>{content.name}</strong><span>已发布</span><time>{content.date}</time></div></div>
          <div className="delivery-links">{content.links.map(link=><a key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label}</a>)}</div>
        </article>)}
      </div>
      <p className="creator-note">本页展示当前整理的公开发布成果；外部平台内容可能因平台调整而发生变化。</p>
    </section>}
    <section className="section cases-section"><h2 className="compact-heading">更多合作案例</h2><CaseGrid /></section>
  </PageShell>;
}
