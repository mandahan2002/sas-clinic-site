import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CPAP継続フォローのオンライン診療｜SAS CPAP オンラインクリニック",
  description:
    "CPAP治療中（安定期）の方を対象に、医師が遠隔データを確認しながらオンライン中心で継続フォローを行います。初診後1ヶ月フォロー、安定後は約3ヶ月ごとの定期管理。必要時は対面医療機関をご案内します。",
  alternates: {
    canonical: "https://sas-cpap.jp/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
