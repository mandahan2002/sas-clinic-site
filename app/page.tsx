export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* Header */}
      <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-[#0B1F3A]" />
            <div className="leading-tight">
              <div className="text-sm text-slate-500">sas-cpap.jp</div>
              <div className="text-lg font-semibold text-[#0B1F3A]">
                SAS・CPAPオンラインクリニック
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#services" className="hover:text-[#0B1F3A] transition-colors">
              診療内容
            </a>
            <a href="#flow" className="hover:text-[#0B1F3A] transition-colors">
              診療の流れ
            </a>
            <a href="#fees" className="hover:text-[#0B1F3A] transition-colors">
              料金・保険
            </a>
            <a href="#access" className="hover:text-[#0B1F3A] transition-colors">
              医療機関情報
            </a>
          </nav>
          <a
            href="#reserve"
            className="rounded-xl bg-[#0B1F3A] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#0a2847] transition-colors"
          >
            予約へ進む
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50/80"
        aria-label="メイン"
      >
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 inline-flex items-center rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs text-slate-600 shadow-sm">
                すでにCPAP治療を受けている方の継続フォローに対応
              </p>
              <h1 className="text-3xl font-bold tracking-tight text-[#0B1F3A] md:text-4xl">
                すでにCPAP治療を受けている方へ
                <span className="block">オンライン中心の継続フォロー外来</span>
              </h1>
              <p className="mt-5 text-base leading-relaxed text-slate-700">
                現在CPAP治療を受けている方を対象に、オンラインでの診療を中心に継続フォローを行います。
                <br />
                症状や医師の判断により、対面診療をご案内する場合があります。
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#reserve"
                  className="rounded-xl bg-[#0B1F3A] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#0a2847] transition-colors"
                >
                  初めての方：オンライン初診予約
                </a>
                <a
                  href="#services"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-semibold text-[#0B1F3A] shadow-sm hover:bg-slate-50 transition-colors"
                >
                  診療内容を見る
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-slate-700">
                <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <div className="font-semibold text-slate-900">診療日</div>
                  <div className="mt-1">水 15:00–19:00 / 土 9:00–17:00</div>
                </div>
                <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                  <div className="font-semibold text-slate-900">対象</div>
                  <div className="mt-1">SAS・CPAP / 相談（花粉症・鼻炎など）</div>
                </div>
              </div>
            </div>

            {/* Trust card */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-[#0B1F3A]">はじめての方へ</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  オンライン診療は、症状・既往・検査状況などを確認したうえで実施します。
                  緊急性がある症状や、対面での評価が必要と判断される場合は、対面受診をご案内します。
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
                    既にCPAPをご利用中の方：継続フォローの相談が可能です
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
                    受診前に、現在の治療状況や検査歴を簡単に確認します
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
                    自宅での睡眠検査（必要時）→結果説明→治療方針決定
                  </li>
                </ul>

                <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50/50 p-4 text-xs text-slate-600">
                  ※
                  本ページは一般的な情報提供を目的としており、診断・治療の効果を保証するものではありません。
                </div>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-[#0B1F3A]">対応目安</div>
                <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3 shadow-sm">
                    <div className="font-semibold text-slate-900">相談が多い内容</div>
                    <div className="mt-1">CPAP継続・通院負担・眠気/いびき</div>
                  </div>
                  <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-3 shadow-sm">
                    <div className="font-semibold text-slate-900">サブ外来</div>
                    <div className="mt-1">花粉症 / アレルギー性鼻炎（相談）</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">診療内容</h2>
          <p className="mt-2 text-sm text-slate-700">
            主軸はSAS・CPAPの継続管理です。耳鼻科領域（花粉症・舌下免疫など）はサブとして相談対応します。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-[#0B1F3A]">
                SAS（睡眠時無呼吸症候群）外来
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                問診・既往・検査状況を確認し、必要に応じて自宅検査や対面評価を検討します。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-[#0B1F3A]">
                CPAP管理（継続フォロー）
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                使用状況や困りごとを確認し、継続しやすい運用を一緒に調整します（医師の判断により対面案内あり）。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-[#0B1F3A]">
                花粉症・アレルギー（相談）
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                症状の経過を確認し、オンラインで対応可能な範囲で助言します。必要時は対面受診をご案内します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="border-t border-slate-100 bg-slate-50/50">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">診療の流れ</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { n: "1", t: "予約", d: "オンライン初診/再診の枠を選択します。" },
              { n: "2", t: "事前確認", d: "治療状況・検査歴・お困りごとを確認します。" },
              {
                n: "3",
                t: "オンライン診療",
                d: "医師が適応を判断し、必要時は検査や対面をご案内します。",
              },
              { n: "4", t: "フォロー", d: "継続管理（必要に応じて対面/紹介）を行います。" },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <div className="text-xs font-medium text-slate-500">STEP {s.n}</div>
                <div className="mt-1 text-sm font-semibold text-[#0B1F3A]">{s.t}</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{s.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-5 text-sm text-slate-700 shadow-sm">
            <span className="font-semibold text-slate-900">重要：</span>
            症状の内容により、オンラインでは十分な評価が難しい場合があります。その際は対面受診をご案内します。
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">料金・保険</h2>
          <p className="mt-2 text-sm text-slate-700">
            料金は保険診療の範囲・診療内容により異なります。詳細は予約時または診療時にご案内します。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-[#0B1F3A]">保険診療について</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                オンライン診療・対面診療いずれも、適用条件や算定可否は症状・診療内容により異なります。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-[#0B1F3A]">システム利用料など</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                プラットフォーム利用料等が発生する場合があります（発生する場合は事前に明示します）。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reserve */}
      <section id="reserve" className="border-t border-slate-100 bg-slate-50/50">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">予約</h2>
            <p className="mt-2 text-sm text-slate-700">
              ここは後で予約システム（例：SOKUYAKU等）のリンクを設定します。
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="rounded-xl bg-[#0B1F3A] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-[#0a2847] transition-colors"
              >
                予約ページへ（仮）
              </a>
              <a
                href="#access"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-semibold text-[#0B1F3A] shadow-sm hover:bg-slate-50 transition-colors"
              >
                医療機関情報を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Access / Legal */}
      <section id="access" className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">医療機関情報</h2>
          <p className="mt-2 text-sm text-slate-700">
            医療広告上の基本情報を明示します（地図・内観写真の掲載は任意です）。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 text-sm shadow-sm">
              <div className="font-semibold text-slate-900">医療機関名</div>
              <div className="mt-1 text-slate-700">SAS・CPAPオンラインクリニック</div>

              <div className="mt-4 font-semibold text-slate-900">管理者（医師）</div>
              <div className="mt-1 text-slate-700">（ここに医師名を記載）</div>

              <div className="mt-4 font-semibold text-slate-900">所在地</div>
              <div className="mt-1 text-slate-700">（ここに住所を記載）</div>

              <div className="mt-4 font-semibold text-slate-900">連絡先</div>
              <div className="mt-1 text-slate-700">（ここに電話番号/メール等）</div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 text-sm text-slate-700 shadow-sm">
              <div className="font-semibold text-slate-900">注意事項</div>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>
                  当院はオンライン診療を主としておりますが、医師の判断により対面診療を行う場合があります。
                </li>
                <li>
                  急を要する症状がある場合は、救急要請または近隣医療機関の受診をご検討ください。
                </li>
                <li>
                  本サイトは一般的な情報提供であり、診断・治療効果を保証するものではありません。
                </li>
              </ul>
            </div>
          </div>

          <footer className="mt-10 border-t border-slate-100 pt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} SAS・CPAPオンラインクリニック
          </footer>
        </div>
      </section>
    </main>
  );
}
