import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "代理店様向け資料 | SAS CPAP オンラインクリニック",
  description: "代理店様向けご案内資料（印刷用）",
  robots: "noindex",
};

export default function PartnersPrint() {
  const currentDate = new Date().toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="bg-white text-slate-900 font-sans print:bg-white print:text-black">
      {/* PAGE 1: 概要 */}
      <div className="relative flex min-h-[297mm] w-full flex-col bg-white px-12 py-10 print:break-after-page">
        {/* Header/Title Area */}
        <div className="mb-2 flex w-full justify-between border-b border-slate-200 py-2 text-xs text-slate-500">
          <div>SAS CPAP オンラインクリニック</div>
          <div>代理店様向け運用資料 / {currentDate}</div>
        </div>

        <div className="mb-12 mt-8">
          <h1 className="text-2xl font-bold text-[#0B1F3A]">代理店様向けご案内</h1>
          <div className="mt-8 mb-3 h-px w-full bg-slate-200" />
        </div>

        {/* Concept */}
        <div className="mb-8">
          <h2 className="mb-3 text-base font-semibold text-[#0B1F3A]">コンセプト</h2>
          <div className="mb-3 h-px w-full bg-slate-200" />
          <div className="rounded-xl border border-slate-200 p-6">
            <div className="flex flex-col gap-4 text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B1F3A] text-xs text-white">
                  ✓
                </span>
                完全オンライン継続フォロー外来
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B1F3A] text-xs text-white">
                  ✓
                </span>
                安定期CPAP患者が主対象
              </div>
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B1F3A] text-xs text-white">
                  ✓
                </span>
                DME様の運用を崩さない設計
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative Info Block */}
        <div className="mb-8 grid grid-cols-2 gap-4 rounded-lg border border-slate-200 p-3 text-xs text-slate-600">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-slate-500">オンライン診察</span>
            <span>目安 約10分</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-slate-500">初診後フォロー</span>
            <span>1ヶ月 → 安定後は3ヶ月毎（目安）</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-slate-500">主対象</span>
            <span>CPAP導入済み・安定期</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-slate-500">データ確認</span>
            <span>遠隔モニタリング（機種/状況による）</span>
          </div>
        </div>

        {/* Features (3 Columns) */}
        <div className="flex-grow">
          <h2 className="mb-3 text-base font-semibold text-[#0B1F3A]">特徴</h2>
          <div className="mb-3 h-px w-full bg-slate-200" />
          <div className="grid grid-cols-3 gap-6">
            {/* Col 1 */}
            <div className="flex flex-col rounded-xl border border-slate-200 p-5">
              <div className="mb-3 text-2xl text-[#0B1F3A]">01</div>
              <h3 className="mb-2 text-sm font-bold text-[#0B1F3A]">
                現在機器のままOK
              </h3>
              <p className="text-sm leading-relaxed text-slate-800">
                転院にあたり、現在使用中のCPAP機器を変更する必要はありません。
                患者様の負担を最小限に抑え、スムーズな移行が可能です。
              </p>
            </div>
            {/* Col 2 */}
            <div className="flex flex-col rounded-xl border border-slate-200 p-5">
              <div className="mb-3 text-2xl text-[#0B1F3A]">02</div>
              <h3 className="mb-2 text-sm font-bold text-[#0B1F3A]">
                APIデータ遠隔管理
              </h3>
              <p className="text-sm leading-relaxed text-slate-800">
                クラウドシステムと連携し、日々の治療データを医師が遠隔で確認。
                来院の手間を省きながら、適切な医療管理を実現します。
              </p>
            </div>
            {/* Col 3 */}
            <div className="flex flex-col rounded-xl border border-slate-200 p-5">
              <div className="mb-3 text-2xl text-[#0B1F3A]">03</div>
              <h3 className="mb-2 text-sm font-bold text-[#0B1F3A]">
                医療安全設計
              </h3>
              <p className="text-sm leading-relaxed text-slate-800">
                医学的判断に基づき、対面診療が必要な場合は適切に案内。
                オンラインの利便性と医療の安全性を両立した体制です。
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-auto flex justify-between border-t border-slate-200 pt-2 text-xs text-slate-500">
          <div>© SAS CPAP オンラインクリニック</div>
          <div>Page 1/2</div>
        </div>
      </div>

      {/* PAGE 2: 連携方法 */}
      <div className="relative flex min-h-[297mm] w-full flex-col bg-white px-12 py-10">
        {/* Header/Title Area */}
        <div className="mb-2 flex w-full justify-between border-b border-slate-200 py-2 text-xs text-slate-500">
          <div>SAS CPAP オンラインクリニック</div>
          <div>代理店様向け運用資料 / {currentDate}</div>
        </div>

        <div className="mb-12 mt-8">
          <h1 className="text-2xl font-bold text-[#0B1F3A]">
            連携方法・確認事項
          </h1>
          <div className="mt-8 mb-3 h-px w-full bg-slate-200" />
        </div>

        {/* Steps */}
        <div className="mb-10">
          <h2 className="mb-3 text-base font-semibold text-[#0B1F3A]">
            連携フロー
          </h2>
          <div className="mb-3 h-px w-full bg-slate-200" />
          <div className="grid grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="relative rounded-xl border border-slate-200 p-5">
              <div className="absolute -top-3 left-4 bg-[#0B1F3A] px-2 py-0.5 text-xs font-bold text-white rounded-full">
                STEP 1
              </div>
              <h3 className="mt-2 mb-2 text-sm font-bold text-[#0B1F3A]">
                LP案内
              </h3>
              <p className="text-sm leading-relaxed text-slate-800">
                対象となる患者様に当院のLPをご案内ください。
                <br />
                <span className="mt-1 block font-semibold text-[#0B1F3A]">
                  ・患者本人予約
                </span>
              </p>
            </div>
            {/* Step 2 */}
            <div className="relative rounded-xl border border-slate-200 p-5">
              <div className="absolute -top-3 left-4 bg-[#0B1F3A] px-2 py-0.5 text-xs font-bold text-white rounded-full">
                STEP 2
              </div>
              <h3 className="mt-2 mb-2 text-sm font-bold text-[#0B1F3A]">
                情報提供
              </h3>
              <p className="text-sm leading-relaxed text-slate-800">
                患者様が予約・受診されます。
                <br />
                <span className="mt-1 block font-semibold text-[#0B1F3A]">
                  ・必要時のみ情報提供
                </span>
                <span className="text-xs text-slate-500">
                  （紹介状や検査結果など）
                </span>
              </p>
            </div>
            {/* Step 3 */}
            <div className="relative rounded-xl border border-slate-200 p-5">
              <div className="absolute -top-3 left-4 bg-[#0B1F3A] px-2 py-0.5 text-xs font-bold text-white rounded-full">
                STEP 3
              </div>
              <h3 className="mt-2 mb-2 text-sm font-bold text-[#0B1F3A]">
                継続フォロー
              </h3>
              <p className="text-sm leading-relaxed text-slate-800">
                オンラインで定期的な診療を行います。
                <br />
                <span className="mt-1 block font-semibold text-[#0B1F3A]">
                  ・安定期フォロー中心
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Safety Block (Exclusion Criteria) */}
        <div className="mb-10 rounded-lg border border-slate-200 p-4">
          <h3 className="mb-3 text-xs font-bold text-slate-700">
            医療安全のため、以下は原則として対面受診をご案内します
          </h3>
          <ul className="list-disc space-y-1 pl-4 text-xs text-slate-600">
            <li>強い日中の眠気があり安全配慮が必要な職種等（個別に判断）</li>
            <li>急な症状悪化や強い自覚症状がある場合</li>
            <li>医師が対面評価を必要と判断した場合</li>
          </ul>
        </div>

        {/* FAQ / Confirmation */}
        <div className="flex-grow">
          <h2 className="mb-3 text-base font-semibold text-[#0B1F3A]">
            よくある確認事項
          </h2>
          <div className="mb-3 h-px w-full bg-slate-200" />
          <div className="space-y-4">
            <div className="flex items-start gap-4 border-b border-slate-100 pb-4">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">
                Q
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0B1F3A]">
                  新規導入は可能ですか？
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-800">
                  原則として「新規導入ではない」安定期の患者様を対象としています。
                  新規導入が必要な場合は、提携医療機関または近隣の専門医をご案内することがあります。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-slate-100 pb-4">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">
                Q
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0B1F3A]">
                  どのような患者様が対象ですか？
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-800">
                  CPAP治療が安定しており、定期的な通院負担を軽減したい方が中心です。
                  「安定期フォロー中心」となります。
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 border-b border-slate-100 pb-4">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-500">
                Q
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0B1F3A]">
                  対面診療はありますか？
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-800">
                  基本はオンラインですが、医学的に必要と判断した場合は「対面案内あり」です。
                  近隣の連携医療機関へ紹介を行います。
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-auto flex justify-between border-t border-slate-200 pt-2 text-xs text-slate-500">
          <div>© SAS CPAP オンラインクリニック</div>
          <div>Page 2/2</div>
        </div>
      </div>
    </div>
  );
}
