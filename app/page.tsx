import { CaseGrid, Footer, Header, Link, PlatformStrip, ServiceGrid } from "./components";

export default function Home() {
  return <>
    <Header />
    <main>
      <section className="hero">
        <div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" />
        <div className="hero-copy">
          <p className="eyebrow">TECH CONTENT · CREATOR NETWORK · GROWTH</p>
          <h1>用专业内容<br />连接<span>技术品牌</span><br />与开发者</h1>
          <p className="hero-lead">Dream内容推广工作室，为人工智能、开发工具、云计算与企业软件品牌，提供从内容策划到博主矩阵分发的一站式服务。</p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-primary">发起合作 <span>↗</span></Link>
            <Link href="#cases" className="button button-ghost">查看案例</Link>
          </div>
        </div>
        <div className="hero-proof">
          <div className="proof-stamp"><span>CSDN</span><b>终身合作伙伴<br />首席合作伙伴</b></div>
          <div className="proof-metrics">
            <div><strong>100+</strong><span>万粉技术博主</span></div>
            <div><strong>200+</strong><span>内容分发博主</span></div>
            <div><strong>1000+</strong><span>私域技术创作者</span></div>
          </div>
        </div>
      </section>

      <PlatformStrip />

      <section className="section intro-section">
        <div><p className="eyebrow">WHY DREAM</p><h2>懂技术，也懂<br />开发者如何做决定</h2></div>
        <div className="intro-copy">
          <p>我们不只是把品牌资料换一种说法。985 高校人工智能科班背景、企业大模型算法开发经验与长期技术创作积累，让我们能够真正理解复杂产品。</p>
          <p>从真实问题、使用过程与应用场景出发，把产品能力转化为开发者愿意阅读、收藏、搜索和分享的内容。</p>
          <Link href="/about" className="text-link">了解 Dream 工作室 <b>↗</b></Link>
        </div>
      </section>

      <section className="section identity-section">
        <div className="identity-image-wrap"><img src="/dream-profile.png" alt="Dream工作室技术内容推广与创作者资源介绍" /></div>
        <div className="identity-copy">
          <p className="eyebrow">TRUST &amp; REACH</p>
          <h2>专业背景与创作者网络，<br />让传播更可信</h2>
          <p>2025 年度 CSDN 全站 TOP 10 博主、CSDN 终身及首席合作伙伴、2024 年度华为云十佳博主、稀土掘金人工智能签约作者。</p>
          <p>以技术理解力保障内容质量，以百余位万粉博主和千人创作者社群保障项目执行。</p>
          <Link href="/about" className="text-link">查看完整介绍 <b>↗</b></Link>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="section-heading"><div><p className="eyebrow">WHAT WE DO</p><h2>从一篇好内容，<br />到一场有声量的传播</h2></div><p>单篇合作、长期运营，或数百位博主参与的大型项目，都由一个接口统一推进。</p></div>
        <ServiceGrid />
      </section>

      <section className="section cases-section" id="cases">
        <div className="section-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>结果，比承诺更有说服力</h2></div><p>从国产算力到 AI 开发工具，从单点原创到长期矩阵，我们用稳定交付建立长期合作。</p></div>
        <CaseGrid />
      </section>

      <section className="workflow section">
        <div className="workflow-head"><p className="eyebrow light">HOW IT WORKS</p><h2>博主由你挑，<br />执行由我负责。</h2></div>
        <ol>
          <li><span>01</span><div><b>明确目标</b><p>了解产品、受众、平台与预算</p></div></li>
          <li><span>02</span><div><b>匹配资源</b><p>提供博主与内容方案供选择</p></div></li>
          <li><span>03</span><div><b>统一执行</b><p>策划、创作、审核、排期与发布</p></div></li>
          <li><span>04</span><div><b>数据复盘</b><p>汇总链接、表现与阶段结论</p></div></li>
        </ol>
      </section>

      <section className="section final-cta">
        <p className="eyebrow">START A CONVERSATION</p>
        <h2>下一个被开发者看见的<br />技术品牌，会是你吗？</h2>
        <p>告诉我们产品方向、目标平台和推广规模，获取匹配的内容与博主合作方案。</p>
        <Link href="/contact" className="button button-primary">商务合作 <span>↗</span></Link>
      </section>
    </main>
    <Footer />
  </>;
}
