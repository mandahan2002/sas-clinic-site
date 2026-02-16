import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPAPオンライン診療の仕組み｜SAS CPAP オンラインクリニック",
  description:
    "完全オンラインで完結するCPAP診療モデルについて解説します。対面連携の安全性や、適応外となるケースについても明記しています。",
  alternates: {
    canonical: "https://sas-cpap.jp/online-cpap",
  },
};

export default function OnlineCPAPPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "オンライン診療だけで完結しますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "原則として、毎月の診察やCPAPデータの確認は全てオンラインで完結します。処方箋やお薬が必要な場合は郵送で対応します。"
        }
      },
      {
        "@type": "Question",
        "name": "対面での検査が必要な場合は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "症状が悪化した場合や、詳しい検査が必要と判断された場合は、速やかに連携する対面医療機関をご紹介します。"
        }
      },
      {
        "@type": "Question",
        "name": "オンライン診療の予約方法は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "24時間いつでもWeb予約が可能です。スマホやPCから空いている日時を選択してご予約ください。"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white text-[#171717] pb-20 md:pb-0">
      <div className="mx-auto max-w-3xl px-6 py-10 md:py-20">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-8">
          CPAPオンライン診療の仕組み
        </h1>
        
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-10">
          当院は、CPAP治療継続のためのオンライン診療に特化したクリニックです。
          従来の通院に伴う時間的・身体的負担を解消し、より快適な治療生活をサポートします。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b border-slate-200">
            完全オンラインモデル
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            予約から問診、診察、会計まで、全ての手順がオンライン上で完結します。
            CPAP機器のデータもクラウド経由で自動的に医師へ送られるため、SDカードを持参する必要もありません。
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
            <li>予約：24時間Web受付</li>
            <li>診察：ビデオ通話（スマホ・PC）</li>
            <li>会計：クレジットカード自動決済</li>
            <li>処方・書類：郵送対応</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b border-slate-200">
            安全設計（対面医療との連携）
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            オンライン診療の利便性を最大限に活かしつつ、医療としての安全性も重視しています。
            <br />
            万が一、症状の悪化や合併症の疑いがある場合は、無理にオンライン診療を継続せず、
            速やかに近隣の対面医療機関や専門病院へご紹介する体制を整えています。
            「オンラインで診るべきもの」と「対面で診るべきもの」を明確に区別し、患者様の健康を第一に考えます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b border-slate-200">
            適応外となるケース
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed mb-4">
            以下のような場合は、オンライン診療の適応外となり、対面受診をお願いすることがあります。
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
            <li>CPAP治療の導入直後で、設定調整が頻繁に必要な方</li>
            <li>重度の心疾患や呼吸器疾患など、合併症の管理が必要な方</li>
            <li>オンライン通話の環境が整わない方</li>
            <li>緊急の処置が必要な症状がある方</li>
          </ul>
        </section>

        <div className="mt-16 border-t border-slate-200 pt-8">
          <h3 className="text-sm font-bold text-slate-900 mb-2">SAS CPAP オンラインクリニック</h3>
          <p className="text-xs text-slate-500 mb-1">
            東京都渋谷区代々木2丁目23-1 ニューステートメナー 1226
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
