import type { Metadata } from "next";
import { PageShell } from "../components";

export const metadata: Metadata = {title:"商务合作",description:"联系 Dream内容推广工作室，获取技术内容与博主矩阵推广方案。",alternates:{canonical:"/contact"}};
export default function ContactPage(){return <PageShell>
  <section className="subhero"><div className="subhero-inner"><h1>聊聊你的<br/>推广目标</h1><p className="lead">无论是一篇原创内容，还是数百位博主参与的大型项目，都可以根据产品方向、目标平台和预算制定方案。</p></div></section>
  <section className="section contact-grid" id="join-application"><div className="wechat-box"><div className="wechat-copy"><small>商务合作与加入我们</small><strong>183 0039 6393</strong><p>微信昵称：是Dream呀<br/>品牌合作请备注「品牌 / 产品名称」与推广方向。申请加入请备注「申请加入 + 擅长方向 / 主要平台」。</p></div><div className="wechat-qr"><img src="/wechat-qr.png" alt="是Dream呀商务合作与加入工作室微信二维码" width="958" height="1415"/><span>微信扫码添加好友</span></div></div><div className="contact-notes"><h2>准备这些信息，沟通会更高效</h2><ol><li>品牌或产品名称，以及核心技术方向</li><li>希望触达的开发者与目标平台</li><li>内容类型、计划数量与发布时间</li><li>可提供的产品资料、试用账号或技术文档</li><li>大致预算范围与评估指标</li></ol></div></section>
 </PageShell>}
