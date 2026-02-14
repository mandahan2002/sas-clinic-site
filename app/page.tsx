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
                SAS CPAP オンラインクリニック
              </div>
              <div className="text-xs text-slate-500 font-normal mt-0.5">
                オンライン中心のCPAP継続フォロー外来
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#transfer" className="hover:text-[#0B1F3A] transition-colors">
              転院について
            </a>
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
              クリニックについて
            </a>
          </nav>
          <a
            href="#reserve"
            className="rounded-xl bg-[#0B1F3A] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#0a2847] transition-colors"
          >
            オンライン診療予約
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50/80"
        aria-label="メイン"
      >
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:items-start">
            <div className="text-center max-w-3xl mx-auto md:max-w-none md:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-[#0B1F3A] md:text-4xl">
              通院が難しい安定期のCPAPユーザーへ
              <span className="block mt-2">オンライン中心の定期フォロー外来</span>
            </h1>
            <p className="mt-4 inline-flex items-center rounded-full border bg-white/70 px-3 py-1 text-xs text-slate-700">
              CPAP継続フォロー中心
            </p>
            <p className="mt-4 text-sm text-slate-600">
              すでにCPAP治療を継続中の方へ（安定期の定期フォロー）
            </p>
            <p className="mt-2 text-sm text-slate-600">
              すでにCPAP治療を受けており、状態が安定している方を対象に、オンラインでの定期フォローを中心に診療を行います。3ヶ月ごとの定期フォローにも対応しています。症状や医師の判断により、対面診療をご案内する場合があります（必要に応じて当院での対応、または適切な医療機関をご案内します）。
            </p>

            <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
              <div className="rounded-xl border border-slate-100 bg-white/70 p-5">
                <div className="text-sm font-semibold text-slate-900">診療スタイル</div>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
                    状態が安定している方は、3ヶ月ごとの定期フォローにも対応
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
                    オンライン中心で通院負担を軽減
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
                    システム管理料などの追加費用は原則不要
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-100 bg-white/70 p-5">
                <div className="text-sm font-semibold text-slate-900">対象患者</div>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
                    現在CPAPをご使用中の方の転院にも対応
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-100 bg-white/70 p-5">
                <div className="text-sm font-semibold text-slate-900">機器対応</div>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
                    各種CPAP機器対応
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
                    機器会社様との連携にも配慮し、継続使用を重視
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#reserve"
                className="inline-block rounded-xl bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0a2847] transition-colors"
              >
                オンライン診療予約
              </a>
              <a
                href="#eligibility"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-semibold text-[#0B1F3A] shadow-sm hover:bg-slate-50 transition-colors"
              >
                対象か確認する（受診可否の相談）
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              ※診療内容のご相談はオンライン診察にて承っております（メールでの個別医療相談は行っていません）。
            </p>
            </div>
            <div className="space-y-4 flex flex-col">
              <div className="flex-1 rounded-xl border border-slate-200 bg-white/70 p-5">
                <div className="text-sm font-semibold text-slate-900">CPAP通院の負担を減らしたい方へ。</div>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                  状態が安定している方は、3ヶ月ごとの定期フォローにも対応しています。
                </p>
              </div>
              <div className="flex-1 rounded-xl border border-slate-200 bg-white/70 p-5">
                <div className="text-sm font-semibold text-slate-900">現在ご使用中のCPAP機器のままご相談いただける場合があります。</div>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                  オンライン診療を中心に、継続使用を重視した診療を行っています。
                </p>
              </div>
              <div className="flex-1 rounded-xl border border-slate-200 bg-white/70 p-5">
                <div className="text-sm font-semibold text-slate-900">遠隔モニタリングを活用し、</div>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                  通院負担に配慮しながら、安心して続けられるフォロー体制を整えています。
                </p>
              </div>
              <a
                href="#eligibility"
                className="inline-flex items-center text-sm font-medium text-slate-900 underline underline-offset-4 hover:text-slate-700"
              >
                受診対象か確認する
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="eligibility"
        className="mx-auto max-w-5xl px-6 py-14 scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-[#0B1F3A]">受診対象の確認（目安）</h2>
        <p className="mt-3 text-sm text-slate-700">
          当院は「安定期のCPAP継続フォロー」を中心としています。迷う場合は予約枠で医師にご相談ください。
        </p>
        <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-slate-700">
          <li>すでにCPAP治療を継続している</li>
          <li>状態が安定している（急な悪化や強い症状がない）</li>
          <li>3ヶ月ごとの定期フォローを希望している</li>
          <li>緊急性の高い症状がない</li>
          <li>オンライン診療が可能（ビデオ通話・本人確認等）</li>
        </ul>
        <p className="mt-4 text-xs text-slate-500">
          緊急性が疑われる場合は、速やかに対面受診または救急をご検討ください。
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#reserve"
            className="inline-block rounded-xl bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0a2847] transition-colors"
          >
            オンライン診療予約
          </a>
        </div>
      </section>

      {/* Target Audience */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">こんな方へ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-[#0B1F3A]">通院が大変</div>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-[#0B1F3A]">仕事・育児で受診時間が合わない</div>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-[#0B1F3A]">今の医療機関がオンライン未対応</div>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-[#0B1F3A]">CPAPは続けたい（継続したい）</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-slate-100 bg-slate-50/50 scroll-mt-24">
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

          <div className="mt-8 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-[#0B1F3A] mb-3">機材について</div>
            <div className="space-y-2 text-sm text-slate-700">
              <p>各種CPAP機器に対応</p>
              <p>現在ご使用中の機器のまま継続フォロー可能</p>
              <p>機材に関するご相談にも対応</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="border-t border-slate-100 bg-white scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">診療フロー</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { n: "1", t: "WEB予約" },
              { n: "2", t: "オンライン診察（状況確認）" },
              { n: "3", t: "データ確認・継続フォロー" },
            ].map((s) => (
              <div
                key={s.n}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <div className="text-xs font-medium text-slate-500">STEP {s.n}</div>
                <div className="mt-1 text-sm font-semibold text-[#0B1F3A]">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transfer */}
      <section id="transfer" className="border-t border-slate-100 bg-slate-50/50 scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">現在CPAPをご使用中の方へ（転院対応）</h2>
          <div className="mt-6 space-y-3">
            <div className="flex gap-2 text-sm text-slate-700">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
              <span>紹介状がなくても受診可能ですが、これまでの検査結果や診療情報をご用意いただくとスムーズです。</span>
            </div>
            <div className="flex gap-2 text-sm text-slate-700">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
              <span>現在の機器メーカーに関わらずご相談可能</span>
            </div>
            <div className="flex gap-2 text-sm text-slate-700">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
              <span>通院負担を減らしながら継続フォロー</span>
            </div>
            <div className="flex gap-2 text-sm text-slate-700">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
              <span>必要に応じて地域医療機関への受診をご案内</span>
            </div>
            <div className="flex gap-2 text-sm text-slate-700">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
              <span>機器会社様との連携にも配慮し、継続使用を重視</span>
            </div>
          </div>
          <div className="mt-6 rounded-xl border border-slate-200 bg-white/70 p-5 shadow-sm">
            <div className="text-sm font-semibold text-slate-900">
              予約前のご準備（任意）
            </div>
            <ul className="mt-3 space-y-1.5 list-disc pl-5 text-sm text-slate-700">
              <li>睡眠検査結果（PSG・簡易検査など）</li>
              <li>現在使用中のCPAP機器情報</li>
              <li>直近の診療内容や設定変更の記録</li>
              <li>紹介状（お持ちの場合）</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              紹介状がなくても受診可能ですが、情報があると診療がスムーズです。
            </p>
          </div>
          <div className="mt-8">
            <a
              href="#reserve"
              className="inline-block rounded-xl bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0a2847] transition-colors"
            >
              オンライン診療予約
            </a>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="border-t border-slate-100 bg-white scroll-mt-24">
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

      {/* Schedule */}
      <section className="border-t border-slate-100 bg-slate-50/50">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">診療日・体制</h2>
          <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-[#0B1F3A] mb-3">定期フォロー枠</div>
            <p className="text-sm text-slate-700">水曜・土曜（完全予約制）</p>
            <p className="mt-3 text-sm text-slate-700">継続患者様のご相談はオンライン診察にて対応</p>
          </div>
        </div>
      </section>

      {/* Reserve */}
      <section id="reserve" className="border-t border-slate-100 bg-slate-50/50 scroll-mt-24">
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
                オンライン診療予約
              </a>
              <a
                href="#access"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-semibold text-[#0B1F3A] shadow-sm hover:bg-slate-50 transition-colors"
              >
                クリニックの情報を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Online Safety */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">全国対応について</h2>
          <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-sm leading-relaxed text-slate-700">
              必要に応じて患者様のお住まいの地域の医療機関への受診をご案内し、安心して治療を継続できる体制を整えています。
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-slate-100 bg-slate-50/50">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">お問い合わせ（事務連絡）</h2>
          <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-sm text-slate-700 mb-3">
              ※診療内容に関するご相談はオンライン診察にて承っております。
            </p>
            <p className="text-sm text-slate-700">
              ※機器会社様からのご連絡にも対応しております。
            </p>
          </div>
        </div>
      </section>

      {/* Access / Legal */}
      <section id="access" className="border-t border-slate-100 bg-white scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">クリニックについて</h2>
          <p className="mt-2 text-sm text-slate-700">
            医療広告上の基本情報を明示します（地図・内観写真の掲載は任意です）。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 text-sm shadow-sm">
              <div className="font-semibold text-slate-900">医療機関名</div>
              <div className="mt-1 text-slate-700">SAS CPAP オンラインクリニック</div>

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
            © {new Date().getFullYear()} SAS CPAP オンラインクリニック
          </footer>
        </div>
      </section>

      {/* SAS General Info */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">SAS（睡眠時無呼吸症候群）について</h2>
          <div className="mt-6 space-y-6 text-sm text-slate-700">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="font-semibold text-[#0B1F3A] mb-3">SASとは</div>
              <p className="leading-relaxed">
                睡眠時無呼吸症候群（SAS）は、睡眠中に呼吸が繰り返し停止する病気です。主な症状として、いびき、日中の眠気、起床時の頭痛などがあります。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="font-semibold text-[#0B1F3A] mb-3">検査について</div>
              <p className="leading-relaxed">
                必要に応じて、自宅での簡易検査や医療機関での精密検査を検討します。検査結果に基づき、適切な治療方針をご提案します。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="font-semibold text-[#0B1F3A] mb-3">CPAP治療について</div>
              <p className="leading-relaxed">
                CPAP（Continuous Positive Airway Pressure）は、SASの代表的な治療法の一つです。就寝時にマスクを装着し、空気を送り込むことで気道を確保します。継続的な使用により、症状の改善が期待できます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-slate-100 bg-slate-50/50">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">CPAP継続フォロー・転院相談</h2>
            <p className="mt-3 text-sm text-slate-700">
              オンライン中心の診療で、通院負担を減らしながら継続フォローを行います
            </p>
            <div className="mt-8">
              <a
                href="#reserve"
                className="inline-block rounded-xl bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white hover:bg-[#0a2847] transition-colors"
              >
                CPAP継続フォロー・転院相談（診療予約）
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              ※診療内容のご相談はオンライン診察にて承っております（メールでの個別医療相談は行っていません）。
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
