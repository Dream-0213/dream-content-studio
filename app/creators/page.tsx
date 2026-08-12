import type { Metadata } from "next";
import { PageShell } from "../components";
import { CreatorsDirectory } from "./CreatorsDirectory";
import { creators } from "./creators-data";

function followerValue(value: string) {
  const number = Number.parseFloat(value.replace(/[^\d.]/g, "")) || 0;
  return /w/i.test(value) ? number * 10000 : number;
}

const [dream, ...others] = creators;
const rankedCreators = [dream, ...others.sort((a, b) => followerValue(b.followers) - followerValue(a.followers))];

export const metadata: Metadata = {
  title:"合作博主名单",
  description:"Dream内容推广工作室合作技术博主名单，覆盖 CSDN、掘金、知乎、微信公众号等平台。",
  alternates:{canonical:"/creators"},
};

export default function CreatorsPage(){return <PageShell>
  <section className="subhero creator-hero"><div className="subhero-inner"><p className="eyebrow">CREATOR NETWORK</p><h1>合作博主名单</h1><p className="lead">覆盖人工智能、Java、Python、云计算、开发工具与数据服务等方向。品牌方可查看公开主页后自主选择合作创作者。</p></div></section>
  <section className="section creators-section"><CreatorsDirectory creators={rankedCreators}/><p className="creator-note">是Dream呀固定展示在首位，其余博主按粉丝数量从高到低排列。粉丝数据为整理时的公开数据，可能随平台变化；具体档期、报价与合作形式请联系 Dream 内容推广工作室确认。</p></section>
 </PageShell>}
