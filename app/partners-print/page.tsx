import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "代理店様向け資料 | SAS CPAP オンラインクリニック",
  description: "代理店様向けご案内資料（印刷用）",
  robots: "noindex",
};

export default function PartnersPrint() {
  return (
    <div className="bg-white text-slate-900 font-sans print:bg-white print:text-black">
      {/* PAGE 1: 概要 */}
      <div className="relative flex min-h-[297mm] w-full flex-col bg-white px-12 py-10 print:break-after-page">
        {/* Header/Title Area */}
        <div className="mb-12 border-b-2 border-[#0B1F3A] pb-6">
          <div className="text-sm font-bold text-slate-500">SAS CPAP オンラインクリニック</div>
          <h1 className="mt-2 text-3xl font-bold text-[#0B1F3A]">代理店様向けご案内</h1>
        </div>

        {/* Concept */}
        <div className="mb-12">
          <h2 className="mb-6 flex items-center text-xl font-bold text-[#0B1F3A]">
            <span className="mr-3 block h-6 w-2 bg-[#0B1F3A]"></span>
            コンセプト
          </h2>
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-8">
            <div className="flex flex-col gap-4 text-lg font-semibold text-slate-800">
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1F3A] text-white">✓</span>
                完全オンライン継続フォロー外来
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1F3A] text-white">✓</span>
                安定期CPAP患者が主対象
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1F3A] text-white">✓</span>
                DME様の運用を崩さない設計
              </div>
            </div>
          </div>
        </div>

        {/* Features (3 Columns) */}
        <div className="flex-grow">
          <h2 className="mb-6 flex items-center text-xl font-bold text-[#0B1F3A]">
            <span className="mr-3 block h-6 w-2 bg-[#0B1F3A]"></span>
            特徴
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {/* Col 1 */}
            <div className="flex flex-col rounded-xl border border-slate-200 p-6">
              <div className="mb-4 text-4xl text-[#0B1F3A]">01</div>
              <h3 className="mb-3 text-lg font-bold text-[#0B1F3A]">現在機器のままOK</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                転院にあたり、現在使用中のCPAP機器を変更する必要はありません。
                患者様の負担を最小限に抑え、スムーズな移行が可能です。
              </p>
            </div>
            {/* Col 2 */}
            <div className="flex flex-col rounded-xl border border-slate-200 p-6">
              <div className="mb-4 text-4xl text-[#0B1F3A]">02</div>
              <h3 className="mb-3 text-lg font-bold text-[#0B1F3A]">APIデータ遠隔管理</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                クラウドシステムと連携し、日々の治療データを医師が遠隔で確認。
                来院の手間を省きながら、適切な医療管理を実現します。
              </p>
            </div>
            {/* Col 3 */}
            <div className="flex flex-col rounded-xl border border-slate-200 p-6">
              <div className="mb-4 text-4xl text-[#0B1F3A]">03</div>
              <h3 className="mb-3 text-lg font-bold text-[#0B1F3A]">医療安全設計</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                医学的判断に基づき、対面診療が必要な場合は適切に案内。
                オンラインの利便性と医療の安全性を両立した体制です。
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-auto pt-8 text-right text-xs text-slate-400">
          本資料は代理店様向けの運用説明資料です
        </div>
      </div>

      {/* PAGE 2: 連携方法 */}
      <div className="relative flex min-h-[297mm] w-full flex-col bg-white px-12 py-10">
        {/* Header */}
        <div className="mb-12 border-b-2 border-[#0B1F3A] pb-6">
          <h1 className="text-3xl font-bold text-[#0B1F3A]">連携方法・確認事項</h1>
        </div>

        {/* Steps */}
        <div className="mb-12">
          <h2 className="mb-6 flex items-center text-xl font-bold text-[#0B1F3A]">
            <span className="mr-3 block h-6 w-2 bg-[#0B1F3A]"></span>
            連携フロー
          </h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="relative rounded-xl bg-slate-50 p-6">
              <div className="absolute -top-3 left-6 bg-[#0B1F3A] px-3 py-1 text-xs font-bold text-white rounded-full">STEP 1</div>
              <h3 className="mt-2 mb-3 text-lg font-bold text-[#0B1F3A]">LP案内</h3>
              <p className="text-sm text-slate-700">
                対象となる患者様に当院のLPをご案内ください。
                <br />
                <span className="mt-2 block font-semibold text-[#0B1F3A]">・患者本人予約</span>
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative rounded-xl bg-slate-50 p-6">
              <div className="absolute -top-3 left-6 bg-[#0B1F3A] px-3 py-1 text-xs font-bold text-white rounded-full">STEP 2</div>
              <h3 className="mt-2 mb-3 text-lg font-bold text-[#0B1F3A]">情報提供</h3>
              <p className="text-sm text-slate-700">
                患者様が予約・受診されます。
                <br />
                <span className="mt-2 block font-semibold text-[#0B1F3A]">・必要時のみ情報提供</span>
                <span className="text-xs text-slate-500">（紹介状や検査結果など）</span>
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative rounded-xl bg-slate-50 p-6">
              <div className="absolute -top-3 left-6 bg-[#0B1F3A] px-3 py-1 text-xs font-bold text-white rounded-full">STEP 3</div>
              <h3 className="mt-2 mb-3 text-lg font-bold text-[#0B1F3A]">継続フォロー</h3>
              <p className="text-sm text-slate-700">
                オンラインで定期的な診療を行います。
                <br />
                <span className="mt-2 block font-semibold text-[#0B1F3A]">・安定期フォロー中心</span>
              </p>
            </div>
          </div>
        </div>

        {/* FAQ / Confirmation */}
        <div className="flex-grow">
          <h2 className="mb-6 flex items-center text-xl font-bold text-[#0B1F3A]">
            <span className="mr-3 block h-6 w-2 bg-[#0B1F3A]"></span>
            よくある確認事項
          </h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 border-b border-slate-100 pb-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">Q</div>
              <div>
                <h3 className="font-bold text-[#0B1F3A]">新規導入は可能ですか？</h3>
                <p className="mt-1 text-sm text-slate-600">
                  原則として「新規導入ではない」安定期の患者様を対象としています。
                  新規導入が必要な場合は、提携医療機関または近隣の専門医をご案内することがあります。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-slate-100 pb-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">Q</div>
              <div>
                <h3 className="font-bold text-[#0B1F3A]">どのような患者様が対象ですか？</h3>
                <p className="mt-1 text-sm text-slate-600">
                  CPAP治療が安定しており、定期的な通院負担を軽減したい方が中心です。
                  「安定期フォロー中心」となります。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-slate-100 pb-4">
              <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200 text-xs font-bold text-slate-600">Q</div>
              <div>
                <h3 className="font-bold text-[#0B1F3A]">対面診療はありますか？</h3>
                <p className="mt-1 text-sm text-slate-600">
                  基本はオンラインですが、医学的に必要と判断した場合は「対面案内あり」です。
                  近隣の連携医療機関へ紹介を行います。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-auto pt-8 text-right text-xs text-slate-400">
          本資料は代理店様向けの運用説明資料です
        </div>
      </div>
    </div>
  );
}
