import type { Metadata } from "next";
import { PageShell } from "../components";
import { profileLinks } from "../data";

export const metadata: Metadata = {title:"关于我们",description:"了解 Dream内容推广工作室的技术背景、创作者资源与平台影响力。",alternates:{canonical:"/about"}};
export default function AboutPage(){return <PageShell>
  <section className="subhero"><div className="subhero-inner"><p className="eyebrow">ABOUT DREAM</p><h1>用技术理解力，<br/>做好每一次表达</h1><p className="lead">技术研发、内容创作与项目运营三种经验交汇，让复杂的产品能力被准确理解，也被自然传播。</p></div></section>
  <section className="section founder-section">
    <div className="founder-portrait"><img src="/dream-profile.png" alt="Dream内容推广工作室主理人 Dream" /></div>
    <div className="founder-copy"><p className="eyebrow">FOUNDER · DREAM</p><h2>主理人 Dream</h2><p>Dream 是一名技术内容创作者与技术品牌推广项目主理人，拥有 985 高校人工智能科班硕士背景及企业大模型算法开发经验。长期关注人工智能、大模型、开发工具、云计算与国产算力等方向，能够从开发者真实需求出发理解产品、策划内容。</p><p>全网粉丝 10 万+，获评 2025 年度 CSDN 全站 TOP 10 博主、2024 年度华为云十佳博主，并担任稀土掘金人工智能签约作者与 BPAA 算法大赛评委。</p></div>
  </section>
  <section className="section studio-intro">
    <div><p className="eyebrow light">DREAM CONTENT STUDIO</p><h2>Dream内容推广工作室</h2></div>
    <div><p>Dream内容推广工作室专注技术内容营销、万粉博主原创推广和多平台矩阵分发，长期服务人工智能、大模型、开发工具、云计算、数据服务及国产算力品牌。</p><p>工作室连接 300+ 位万粉技术博主、700+ 位内容分发博主及千人规模技术创作者社群，可统一完成选题策划、博主招募、技术培训、内容审核、发布排期与结果复盘，让品牌方通过一个接口推进大型内容项目。</p></div>
  </section>
  <section className="section about-grid"><div><p className="eyebrow">HOW WE WORK</p><h2>真正理解产品，<br/>而非复述资料</h2><p>我们从产品能力、实际使用过程与目标开发者的问题出发，把复杂技术转化为值得阅读、收藏、搜索和分享的内容。</p><p>既能完成硬核技术教程与产品测评，也能以案例故事、行业观察和横向对比等形式建立更自然的品牌认知。</p></div><div><p className="eyebrow">CREDENTIALS</p><ul className="credential-list"><li>2025 年度 CSDN 全站 TOP 10 博主</li><li>CSDN 终身合作伙伴、首席合作伙伴</li><li>稀土掘金人工智能签约作者</li><li>2024 年度华为云十佳博主</li><li>BPAA 算法大赛评委</li><li>千人规模技术创作者私域社群</li></ul></div></section>
  <section className="section services-section"><p className="eyebrow">FIND US</p><h2>全平台主页</h2><ul className="point-list">{profileLinks.map(([name,url])=><li key={name}><a href={url} target="_blank" rel="noreferrer">{name} ↗</a></li>)}</ul></section>
 </PageShell>}
