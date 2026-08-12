import type { Metadata } from "next";
import { PageShell } from "../components";
import { profileLinks } from "../data";

export const metadata: Metadata = {title:"关于我们",description:"了解 Dream内容推广工作室的技术背景、创作者资源与平台影响力。",alternates:{canonical:"/about"}};
export default function AboutPage(){return <PageShell>
  <section className="subhero"><div className="subhero-inner"><p className="eyebrow">ABOUT DREAM</p><h1>用技术理解力，<br/>做好每一次表达</h1><p className="lead">技术研发、内容创作与项目运营三种经验交汇，让复杂的产品能力被准确理解，也被自然传播。</p></div></section>
  <section className="section about-grid"><div><p className="eyebrow">WHO WE ARE</p><h2>真正理解产品，<br/>而非复述资料</h2><p>Dream内容推广工作室长期服务人工智能、大模型、开发工具、云计算、数据服务及国产算力等技术品牌。主理人拥有 985 高校人工智能科班硕士背景，并具备企业大模型算法开发经验。</p><p>全网粉丝 10 万+，长期站在开发者视角进行内容创作、产品体验与品牌传播。文章既可以技术硬核，也可以采用案例故事、行业观察和横向测评等形式。</p></div><div><p className="eyebrow">CREDENTIALS</p><ul className="credential-list"><li>2025 年度 CSDN 全站 TOP 10 博主</li><li>CSDN 终身合作伙伴、首席合作伙伴</li><li>稀土掘金人工智能签约作者</li><li>2024 年度华为云十佳博主</li><li>BPAA 算法大赛评委</li><li>千人规模技术创作者私域社群</li></ul></div></section>
  <section className="section services-section"><p className="eyebrow">FIND US</p><h2>全平台主页</h2><ul className="point-list">{profileLinks.map(([name,url])=><li key={name}><a href={url} target="_blank" rel="noreferrer">{name} ↗</a></li>)}</ul></section>
 </PageShell>}
