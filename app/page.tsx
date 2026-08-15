import { CaseGrid, Footer, Header, Link, PlatformStrip, ServiceGrid } from "./components";

const faqs = [
  ["Dream 内容推广工作室主要提供什么服务？", "提供技术内容策划与原创、CSDN KOL 投放、技术博主推广、公众号矩阵、多平台内容分发、大型征文招募和长期内容运营。"],
  ["适合哪些技术品牌合作？", "适合人工智能、AI Agent、开发工具、云计算、数据库、企业软件、数据服务和国产软硬件生态等需要触达开发者的品牌。"],
  ["可以只做 CSDN 或微信公众号推广吗？", "可以。既支持 CSDN、公众号等单平台投放，也可以组合知乎、掘金、华为云、腾讯云和 51CTO 等平台形成内容矩阵。"],
  ["如何选择合适的技术博主？", "品牌方可先查看博主主页、粉丝量和历史内容，再按产品方向、目标人群、预算及档期确定合作名单，由 Dream 工作室统一推进创作与交付。"],
  ["如何加入 Dream 工作室？", "如果你是有影响力的博主、技术专家、内容作者，或拥有可合作的行业资源，可以前往联系页面添加微信，备注「申请加入 + 擅长方向 / 主要平台」。"],
] as const;

export default function Home() {
  const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":faqs.map(([question,answer])=>({"@type":"Question","name":question,"acceptedAnswer":{"@type":"Answer","text":answer}}))};
  return <>
    <Header />
    <main>
      <section className="hero">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-copy">
          <p className="eyebrow">技术内容营销 · CSDN KOL 投放 · 开发者增长</p>
          <h1><span>技术内容营销</span><br />让好产品<br />被开发者看见</h1>
          <p className="hero-lead">Dream内容推广工作室，为 AI、开发工具、云计算与企业软件品牌提供技术内容策划、CSDN 博主推广、公众号矩阵和多平台分发服务。</p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-primary">获取推广方案 <span>↗</span></Link>
            <Link href="/creators" className="button button-ghost">挑选合作博主</Link>
          </div>
          <div className="hero-keywords" aria-label="热门服务"><Link href="/services/creator-campaign">CSDN KOL 投放</Link><Link href="/services/original-content">技术文章原创</Link><Link href="/services/distribution">公众号矩阵推广</Link></div>
        </div>
        <div className="hero-proof">
          <div className="hero-studio-proof"><span>CSDN</span><div><p>TRUST &amp; CREATOR NETWORK</p><strong>懂技术，也懂开发者传播</strong><small>终身合作伙伴 · 首席合作伙伴</small></div></div>
          <div className="proof-metrics">
            <div><strong>300+</strong><span>万粉技术博主</span></div>
            <div><strong>700+</strong><span>内容分发博主</span></div>
            <div><strong>100+</strong><span>公众号合作博主</span></div>
          </div>
        </div>
      </section>

      <PlatformStrip />

      <section className="result-ribbon" aria-label="代表性推广成果">
        <Link href="/cases/feisuan-javaai"><span>飞算 JavaAI</span><strong>300 位</strong><small>万粉博主参与</small></Link>
        <Link href="/cases/huawei-kunpeng-ascend"><span>华为昇腾及鲲鹏</span><strong>300+ 篇</strong><small>技术文章交付</small></Link>
        <Link href="/cases/todesk-distribution"><span>ToDesk</span><strong>500 篇</strong><small>长期矩阵发布</small></Link>
        <Link href="/creators"><span>创作者矩阵</span><strong>700+</strong><small>内容分发博主</small></Link>
      </section>

      <section className="section home-section intro-section">
        <div><p className="eyebrow">WHY TECH CONTENT MARKETING</p><h2>技术内容营销，<br />不只是发文章</h2></div>
        <div className="intro-copy">
          <p>开发者不会因为一条广告就信任复杂产品。真正有效的技术品牌推广，需要把产品能力写成可验证的教程、测评和应用实践，再通过可信的技术博主进入搜索结果与开发者社区。</p>
          <p>Dream 工作室把技术理解、内容策划、KOL 招募、审核发布和数据回收串成一条完整链路，让每篇内容同时承担品牌曝光、搜索沉淀和用户转化价值。</p>
          <Link href="/services/original-content" className="text-link">查看技术内容服务 <b>↗</b></Link>
        </div>
      </section>

      <section className="section home-section services-section" id="services">
        <div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>从一篇好内容，<br />到一场有声量的传播</h2></div><p>单篇合作、长期运营，或数百位博主参与的大型项目，都由一个接口统一推进。</p></div>
        <ServiceGrid />
      </section>

      <section className="section home-section cases-section" id="cases">
        <div className="section-heading"><div><p className="eyebrow">TECH MARKETING CASES</p><h2>真实技术推广案例，<br />链接与结果都能查看</h2></div><p>覆盖 CSDN KOL 投放、AI 开发工具、国产算力生态和长期内容矩阵，每个重点案例均可查看公开交付内容。</p></div>
        <CaseGrid />
      </section>

      <section className="section home-section identity-section">
        <div className="identity-image-wrap"><img src="/dream-profile.png" alt="Dream工作室技术内容推广与创作者资源介绍" /></div>
        <div className="identity-copy">
          <p className="eyebrow">TRUST &amp; REACH</p>
          <h2>懂技术的团队，<br />连接可信的创作者</h2>
          <p>主理人 Dream 拥有 985 高校人工智能科班背景与企业大模型算法开发经验，同时是 2025 年度 CSDN 全站 TOP 10 博主、CSDN 终身及首席合作伙伴、2024 年度华为云十佳博主。</p>
          <p>以技术理解力保障内容质量，以 300+ 位万粉技术博主、100+ 位公众号博主和 700+ 位内容分发博主保障项目执行。</p>
          <div className="identity-links"><Link href="/about" className="text-link">了解主理人与工作室 <b>↗</b></Link><Link href="/creators" className="text-link">查看合作博主矩阵 <b>↗</b></Link></div>
        </div>
      </section>

      <section className="section home-section join-section" id="join">
        <div className="join-intro">
          <p className="eyebrow">JOIN DREAM STUDIO</p>
          <h2>招贤纳士，<br />欢迎加入我们</h2>
          <p>如果你有可合作的行业资源，在某个领域拥有稳定影响力，或者擅长技术与内容创作，欢迎与 Dream 工作室建立连接，一起做有价值、能沉淀的内容。</p>
          <Link href="/contact#join-application" className="button button-primary">申请加入 <span>↗</span></Link>
          <small>添加微信时请备注「申请加入 + 擅长方向 / 主要平台」</small>
        </div>
        <div className="join-grid">
          <article><span>01</span><h3>资源合作伙伴</h3><p>拥有品牌、渠道、社区、活动或开发者生态等合作资源。</p></article>
          <article><span>02</span><h3>有影响力的博主</h3><p>活跃于 CSDN、公众号、知乎、掘金等平台，有稳定的内容输出与读者群体。</p></article>
          <article><span>03</span><h3>技术专家</h3><p>深耕 AI、大模型、Java、云计算、开发工具或国产软硬件等技术方向。</p></article>
          <article><span>04</span><h3>内容创作者</h3><p>擅长技术教程、产品测评、案例复盘、选题策划或深度写作。</p></article>
        </div>
      </section>

      <section className="workflow section home-section">
        <div className="workflow-head"><p className="eyebrow">HOW IT WORKS</p><h2>博主由你挑，<br />执行由我负责。</h2><p>从需求梳理到内容上线，每一步都有明确交付，让大型博主项目也能清晰推进。</p></div>
        <ol>
          <li><span>01</span><div><b>明确目标</b><p>了解产品、受众、平台与预算</p></div></li>
          <li><span>02</span><div><b>匹配资源</b><p>提供博主与内容方案供选择</p></div></li>
          <li><span>03</span><div><b>统一执行</b><p>策划、创作、审核、排期与发布</p></div></li>
          <li><span>04</span><div><b>数据复盘</b><p>汇总链接、表现与阶段结论</p></div></li>
        </ol>
      </section>

      <section className="section home-section faq-section" id="faq">
        <div className="section-heading"><div><p className="eyebrow">FREQUENTLY ASKED QUESTIONS</p><h2>技术品牌推广<br />常见问题</h2></div><p>从单篇原创到数百位博主参与的大型项目，都可以根据产品阶段、目标平台和预算灵活组合。</p></div>
        <div className="faq-list">{faqs.map(([question,answer],index)=><details key={question} open={index===0}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section className="section home-section final-cta">
        <p className="eyebrow light">START A CONVERSATION</p>
        <h2>下一个被开发者看见的<br />技术品牌，会是你吗？</h2>
        <p>告诉我们产品方向、目标平台和推广规模，获取匹配的内容与博主合作方案。</p>
        <Link href="/contact" className="button button-light">商务合作 <span>↗</span></Link>
      </section>
    </main>
    <Footer />
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(faqSchema)}} />
  </>;
}
