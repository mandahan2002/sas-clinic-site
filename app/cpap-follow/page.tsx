import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPAP継続フォロー（定期受診）｜SAS CPAP オンラインクリニック",
  description:
    "安定期のCPAP治療継続フォローを中心としたオンライン診療です。初診後1ヶ月フォロー、その後は3ヶ月ごとの定期管理を行います。",
  alternates: {
    canonical: "https://sas-cpap.jp/cpap-follow",
  },
};

export default function CPAPFollowPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "CPAP継続フォローの頻度は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "基本的には、初診から1ヶ月後に経過確認を行い、安定している場合は3ヶ月に1回の定期受診となります。"
        }
      },
      {
        "@type": "Question",
        "name": "毎月のデータは確認してくれますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、毎月のデータは医師が遠隔モニタリングで確認し、問題があればすぐにご連絡します。"
        }
      },
      {
        "@type": "Question",
        "name": "安定期以外でも受診できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "当院は安定期のCPAP継続フォローに特化しています。状態が不安定な場合や、導入直後の場合は対面診療をお勧めすることがあります。"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white text-[#171717] pb-20 md:pb-0">
      <div className="mx-auto max-w-3xl px-6 py-10 md:py-20">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-8">
          CPAP継続フォローについて
        </h1>
        
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-10">
          当院では、CPAP治療が安定している患者様を対象に、通院負担の少ないオンライン診療で継続的なフォローを行っています。
          仕事や家庭で忙しい方でも、無理なく治療を続けられる環境を提供します。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b border-slate-200">
            診療サイクル
          </h2>
          <div className="space-y-4 text-sm text-slate-700">
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <div className="font-semibold min-w-[120px]">初診</div>
              <p>オンライン問診と診察で現在の状況を確認し、治療方針を決定します。</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <div className="font-semibold min-w-[120px]">1ヶ月後</div>
              <p>CPAP使用状況や体調の変化を確認するための再診を行います。</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:items-center">
              <div className="font-semibold min-w-[120px]">安定期（3ヶ月ごと）</div>
              <p>
                状態が安定していると判断された場合、以降は約3ヶ月ごとの定期受診に移行します。
                これにより、年間の通院回数を大幅に減らすことができます。
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b border-slate-200">
            遠隔モニタリング
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            受診がない月でも、CPAP機器からクラウド経由で送られるデータを医師が定期的にチェックしています（遠隔モニタリング）。
            <br />
            AHI（無呼吸低呼吸指数）の悪化や使用時間の減少など、異常が見られた場合は速やかにご連絡し、早期の対応につなげます。
            患者様は安心して日常生活を送りながら、質の高い医療管理を受けられます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b border-slate-200">
            対象となる方
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
            <li>現在CPAP治療を継続中で、状態が安定している方</li>
            <li>通院のための時間を確保するのが難しい方</li>
            <li>定期的な処方や機器のメンテナンスが必要な方</li>
            <li>スマートフォンやPCでビデオ通話が可能な方</li>
          </ul>
        </section>

        <div className="mt-16 border-t border-slate-200 pt-8">
          <h3 className="text-sm font-bold text-slate-900 mb-2">SAS CPAP オンラインクリニック</h3>
          <p className="text-xs text-slate-500 mb-1">
            東京都渋谷区代々木2丁目23-1
          </p>
          <div className="mt-6">
            <a href="/" className="text-sm text-[#0B1F3A] underline underline-offset-4 hover:text-slate-600">
              トップページに戻る
            </a>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      </div>
    </main>
  );
}
