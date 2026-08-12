import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell, ServiceGrid } from "../../components";
import { services } from "../../data";

export function generateStaticParams() { return services.map(({slug}) => ({slug})); }
export async function generateMetadata({params}: {params: Promise<{slug:string}>}): Promise<Metadata> {
  const {slug} = await params; const item = services.find(x => x.slug === slug);
  return item ? {title:item.title, description:item.brief, alternates:{canonical:`/services/${slug}`}} : {};
}
export default async function ServicePage({params}: {params:Promise<{slug:string}>}) {
  const {slug} = await params; const item = services.find(x => x.slug === slug); if (!item) notFound();
  return <PageShell>
    <section className="subhero"><div className="subhero-inner"><p className="eyebrow">SERVICE {item.number}</p><h1>{item.title}</h1><p className="lead">{item.brief}</p></div></section>
    <section className="section detail-layout"><aside className="detail-aside">DREAM / {item.number}</aside><div className="detail-content"><p className="eyebrow">服务内容</p><h2>让内容从“发布”，走向真正的传播价值</h2><p>{item.detail}</p><ul className="point-list">{item.points.map(x => <li key={x}>{x}</li>)}</ul></div></section>
    <section className="section services-section"><p className="eyebrow">MORE SERVICES</p><ServiceGrid /></section>
  </PageShell>;
}
