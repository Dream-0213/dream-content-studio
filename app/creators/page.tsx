import type { Metadata } from "next";
import { PageShell } from "../components";
import { CreatorsDirectory, CreatorsExportButton, WechatCreatorsDirectory } from "./CreatorsDirectory";
import { creators, wechatCreators } from "./creators-data";

function followerValue(value: string) {
  const number = Number.parseFloat(value.replace(/[^\d.]/g, "")) || 0;
  return /w/i.test(value) ? number * 10000 : number;
}

const [dream, ...others] = creators;
const rankedCreators = [dream, ...others.sort((a, b) => followerValue(b.followers) - followerValue(a.followers))];
const rankedWechatCreators = [...wechatCreators].sort((a, b) => followerValue(b.followers) - followerValue(a.followers));

export const metadata: Metadata = {
  title:"合作博主名单",
  description:"Dream内容推广工作室合作技术博主名单，覆盖 CSDN、掘金、知乎、微信公众号等平台。",
  alternates:{canonical:"/creators"},
};

export default function CreatorsPage(){return <PageShell>
  <section className="subhero creator-hero"><div className="subhero-inner"><p className="eyebrow">CREATOR NETWORK</p><h1>合作博主名单</h1><p className="lead">覆盖公众号、CSDN、掘金、知乎等技术内容平台。品牌方可查看公开主页，自主选择匹配的合作创作者。</p><a className="creator-hero-link" href="#wechat-creators">优先查看公众号矩阵 ↓</a></div></section>
  <section className="section wechat-creators-section" id="wechat-creators"><div className="wechat-feature-head"><div><p className="eyebrow">WECHAT CREATOR NETWORK</p><h2>公众号博主矩阵</h2><p>精选展示部分公众号博主，矩阵总规模 100+，覆盖 AI / 人工智能与 IT 技术方向。</p></div><div className="wechat-feature-count"><strong>100+</strong><span>公众号合作博主</span></div></div><WechatCreatorsDirectory creators={rankedWechatCreators}/><p className="creator-note">本页为部分公众号博主展示，按粉丝数量从高到低排列。粉丝数据为整理时的公开数据，可能随平台变化。</p></section>
  <section className="section creators-section"><div className="section-heading creator-directory-heading"><div><p className="eyebrow">MULTI-PLATFORM CREATORS</p><h2>技术博主矩阵</h2></div><p>精选展示部分合作博主，CSDN 等技术内容平台博主矩阵总规模 500+。</p></div><CreatorsDirectory creators={rankedCreators}/><p className="creator-note">本页为部分技术博主展示。是Dream呀固定展示在首位，其余博主按粉丝数量从高到低排列。粉丝数据为整理时的公开数据，可能随平台变化；具体档期、报价与合作形式请联系 Dream 内容推广工作室确认。</p></section>
  <section className="section creator-export-section"><div><p className="eyebrow light">EXPORT CREATOR DIRECTORY</p><h2>导出完整博主名单</h2><p>下载 Excel 文件，统一查看博主名称、粉丝数、内容方向及各平台公开主页。CSDN 与公众号同名博主会自动合并。</p></div><CreatorsExportButton creators={rankedCreators} wechatCreators={rankedWechatCreators}/></section>
 </PageShell>}
