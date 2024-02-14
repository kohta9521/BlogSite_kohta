import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs超初心者入門",
  description: "SSR, SSG, ISRでブログを作成する。",
  openGraph: {
    title: "Nextjs超初心者入門",
    description: "SSR, SSG, ISRでブログを作成する。",
    url: "",
    siteName: "SSGブログ",
    images: [
      {
        width: "1200",
        height: "670",
        url: "/ogp-home.png",
      },
    ],
    locale: "jp",
    type: "website",
  },
};

export default function Home() {
  return <div className="text-[50px]">Next.js初心者入門</div>;
}
