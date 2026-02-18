import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CPAP転院のオンライン相談｜SAS CPAP オンラインクリニック",
  description:
    "CPAP治療中で通院が難しい方向けに、オンライン中心の継続フォロー相談を行っています。紹介状の有無や準備についてもご案内します。",
  alternates: {
    canonical: "https://sas-cpap.jp/cpap-transfer",
  },
};

export default function CPAPTransferPage() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "CPAP転院に紹介状は必要ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "紹介状がなくてもご相談いただけます。これまでの検査結果や診療情報をお持ちいただくと、よりスムーズな診療が可能です。"
        }
      },
      {
        "@type": "Question",
        "name": "今のCPAP機器のまま転院できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、フィリップスやレスメドなど主要メーカーの機器に対応しており、多くの場合は現在の機器を継続してご使用いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "転院の手続きは難しいですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "オンライン予約時に「転院希望」を選択し、問診票に入力するだけで手続きは完了します。機器の管理会社（DME）への連絡も当院がサポートします。"
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-white text-[#171717] pb-20 md:pb-0">
      <div className="mx-auto max-w-3xl px-6 py-10 md:py-20">
        <h1 className="text-2xl md:text-3xl font-bold text-[#0B1F3A] mb-8">
          CPAP転院のご案内
        </h1>
        
        <p className="text-sm md:text-base text-slate-700 leading-relaxed mb-10">
          引っ越しやライフスタイルの変化により、通院が難しくなった方の転院相談を受け付けています。
          オンライン診療を活用することで、通院の負担を減らしながら適切な治療継続をサポートします。
        </p>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b border-slate-200">
            紹介状について
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            転院にあたり、前医からの紹介状（診療情報提供書）があることが望ましいですが、必須ではありません。
            お持ちでない場合でも、これまでの検査結果（PSG検査や簡易検査の結果）や、お薬手帳、直近のCPAPデータなどをご提示いただければ、
            スムーズに診療を引き継ぐことができます。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b border-slate-200">
            転院の手順
          </h2>
          <ol className="list-decimal pl-5 space-y-4 text-sm text-slate-700">
            <li>
              <span className="font-semibold text-[#0B1F3A]">オンライン予約</span>
              <p className="mt-1">
                予約フォームより「継続フォロー（転院）」を選択してご予約ください。
              </p>
            </li>
            <li>
              <span className="font-semibold text-[#0B1F3A]">事前問診・資料アップロード</span>
              <p className="mt-1">
                Web問診にて現在の治療状況を入力し、検査結果や保険証の画像をアップロードしてください。
              </p>
            </li>
            <li>
              <span className="font-semibold text-[#0B1F3A]">オンライン診察</span>
              <p className="mt-1">
                医師がビデオ通話にて状況を確認し、今後の治療計画をご説明します。
              </p>
            </li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b border-slate-200">
            機器メーカー（DME）との連携
          </h2>
          <p className="text-sm text-slate-700 leading-relaxed">
            当院では、フィリップス、レスメド、帝人など、主要なCPAP機器メーカー（DME事業者）と連携しています。
            転院後も同じ機器を使い続けられるよう、当院からDME事業者へ指示書を発行し、契約の切り替え手続きを行います。
            患者様ご自身で複雑な手続きを行っていただく必要はありません。
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-bold text-[#0B1F3A] mb-4 pb-2 border-b border-slate-200">
            オンライン完結型のメリット
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
            <li>通院時間や待ち時間がなくなります</li>
            <li>自宅や職場からスマホ一つで受診できます</li>
            <li>毎月のデータは遠隔モニタリングで医師が確認します</li>
            <li>処方箋やお薬が必要な場合も配送可能です</li>
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
