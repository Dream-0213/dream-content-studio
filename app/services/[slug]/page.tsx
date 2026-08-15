import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Link, PageShell, ServiceGrid } from "../../components";
import { services } from "../../data";

export function generateStaticParams() { return services.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: {params: Promise<{slug:string}>}): Promise<Metadata> {
  const {slug} = await params; const item = services.find(x => x.slug === slug);
  return item ? {title:item.title, description:item.brief, alternates:{canonical:`/services/${slug}`}} : {};
}
export default async function ServicePage({params}: {params:Promise<{slug:string}>}) {
  const {slug} = await params; const item = services.find(x => x.slug === slug); if (!item) notFound();
  return <PageShell>
    <section className="subhero service-subhero"><div className="subhero-inner"><h1>{item.title}</h1><p className="lead">{item.brief}</p><div className="subhero-actions"><Link href="/contact" className="button button-primary">咨询这项服务</Link>{slug === "creator-campaign" && <Link href="/creators" className="button button-ghost">查看合作博主</Link>}</div></div></section>
    <section className="section detail-layout service-detail"><aside className="detail-aside">服务 {item.number}</aside><div className="detail-content"><h2>{item.outcome}</h2><p>{item.detail}</p><ul className="point-list">{item.points.map(x => <li key={x}>{x}</li>)}</ul></div></section>
    <section className="section service-method"><div><h2>合作前，先把三件事说清楚</h2><p>产品方向、目标开发者和内容规模明确后，我们再匹配创作者与执行方案。</p></div><ol><li><span>01</span><div><b>确认目标</b><p>明确希望触达的人群、平台与推广阶段。</p></div></li><li><span>02</span><div><b>选择资源</b><p>查看博主主页、历史内容与可执行档期。</p></div></li><li><span>03</span><div><b>统一交付</b><p>完成内容策划、审核、发布与链接回收。</p></div></li></ol></section>
    <section className="section service-next"><div><h2>把产品资料发来，<br/>一起判断怎么做更合适</h2><p>可以从单篇内容开始，也可以直接规划博主矩阵与长期传播。</p></div><Link href="/contact" className="button button-light">获取合作方案</Link></section>
    <section className="section services-section"><h2 className="compact-heading">看看其他服务</h2><ServiceGrid excludeSlug={slug} /></section>
  </PageShell>;
}
