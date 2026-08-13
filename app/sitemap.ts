import type { MetadataRoute } from "next";
import { cases, services } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://isdreamya.com";
  return [
    {url:base,changeFrequency:"weekly",priority:1},
    {url:`${base}/creators`,changeFrequency:"weekly",priority:.9},
    {url:`${base}/about`,changeFrequency:"monthly",priority:.7},
    {url:`${base}/contact`,changeFrequency:"monthly",priority:.8},
    ...services.map(item=>({url:`${base}/services/${item.slug}`,changeFrequency:"monthly" as const,priority:.8})),
    ...cases.map(item=>({url:`${base}/cases/${item.slug}`,changeFrequency:"monthly" as const,priority:.85})),
  ];
}
