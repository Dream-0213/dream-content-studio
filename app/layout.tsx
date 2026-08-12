import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://isdreamya.com"),
  title: { default: "Dream内容推广工作室｜技术内容营销与博主矩阵推广", template: "%s｜Dream内容推广工作室" },
  description: "面向人工智能、开发工具、云计算与企业软件品牌，提供原创技术内容、万粉博主推广、多平台分发和长期内容矩阵运营服务。",
  keywords: ["技术内容营销", "技术博主推广", "CSDN博主合作", "开发者营销", "AI产品推广", "技术文章代发"],
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "zh_CN", siteName: "Dream内容推广工作室", title: "Dream内容推广工作室", description: "用专业内容，连接技术品牌与开发者。", images:[{url:"/og.png",width:1200,height:630,alt:"Dream内容推广工作室"}] },
  twitter: {card:"summary_large_image",title:"Dream内容推广工作室",description:"用专业内容，连接技术品牌与开发者。",images:["/og.png"]},
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  const organization = {"@context":"https://schema.org","@type":"ProfessionalService","name":"Dream内容推广工作室","url":"https://isdreamya.com","description":"技术内容营销与博主矩阵推广服务","areaServed":"CN"};
  return <html lang="zh-CN"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(organization)}} /></body></html>;
}
