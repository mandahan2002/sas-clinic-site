import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#171717] pb-20 md:pb-0">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-start justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="SAS CPAP オンラインクリニック ロゴ"
              width={64}
              height={64}
              className="h-14 w-14 md:h-16 md:w-16 rounded-xl border border-slate-200 bg-white p-1.5 object-contain"
            />
            <div className="leading-tight">
              <div className="text-sm text-slate-500">sas-cpap.jp</div>
              <div className="text-xl font-semibold text-[#0B1F3A]">
                SAS CPAP オンラインクリニック
              </div>
              <div className="text-xs text-slate-500 font-normal mt-0.5">
                オンライン中心のCPAP継続フォロー外来
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-slate-700 md:flex">
            <a href="#transfer" className="hover:text-slate-900 transition-colors">
              転院について
            </a>
            <a href="#services" className="hover:text-slate-900 transition-colors">
              診療内容
            </a>
            <a href="#flow" className="hover:text-slate-900 transition-colors">
              診療の流れ
            </a>
            <a href="#fees" className="hover:text-slate-900 transition-colors">
              料金・保険
            </a>
            <a href="#access" className="hover:text-slate-900 transition-colors">
              クリニックについて
            </a>
          </nav>
          <a
            href="#reserve"
            className="rounded-xl bg-[#0B1F3A] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-[#0a2847] transition-colors"
          >
            継続フォローの予約はこちら
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white"
        aria-label="メイン"
      >
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24
">
          <div className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:gap-12 md:items-start">
            <div className="text-center max-w-3xl mx-auto md:max-w-none md:mx-0">
            <h1 className="text-3xl font-bold tracking-tight text-[#0B1F3A] md:text-4xl">
              <span className="block">通院が難しい</span>
              <span className="block">CPAP治療を継続中の方へ</span>
              <span className="block mt-4 text-lg md:text-2xl">
                <span className="font-semibold">医師が遠隔データを確認する</span>
                <br className="hidden md:inline" /> オンライン中心の継続フォロー外来
              </span>
            </h1>

            <ul className="mt-6 space-y-2 text-sm sm:text-base text-slate-700 text-left max-w-fit mx-auto md:mx-0">
              <li>✓ すでにCPAP治療を受けている方</li>
              <li>✓ 症状が安定しており、定期フォローが中心の方</li>
              <li>✓ 通院負担を減らしたい方</li>
            </ul>

            <p className="mt-4 text-sm text-slate-700 leading-relaxed">
              すでにCPAP治療を受けており、状態が安定している方を対象に、オンラインでの定期フォローを中心に診療を行います。3ヶ月ごとの定期フォローにも対応し、現在の機器のままご相談いただけます（医師の判断により、対面診療をご案内する場合があります）。
            </p>

            <div className="mt-8 grid gap-4 text-left md:grid-cols-3 md:items-stretch">
              <div className="rounded-xl border border-slate-200/70 bg-white/70 p-5 h-full">
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
                    <span className="block">
                      システム管理料などの追加費用は原則不要
                      <span className="block text-xs text-slate-500 mt-0.5">※発生する場合は事前に明示します</span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200/70 bg-white/70 p-5 h-full">
                <div className="text-sm font-semibold text-slate-900">対象患者</div>
                <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
                  <li className="flex gap-2">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
                    現在CPAPをご使用中の方の転院にも対応
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-slate-200/70 bg-white/70 p-5 h-full">
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

            <p className="mt-8 text-xs font-bold text-slate-500">
              完全予約制｜オンライン診療対応
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#reserve"
                className="inline-block rounded-xl bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0a2847] transition-colors"
              >
                継続フォローの予約はこちら
              </a>
              <a
                href="#eligibility"
                className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-semibold text-[#0B1F3A] shadow-sm hover:bg-slate-50 transition-colors"
              >
                対象か確認する（受診可否の相談）
              </a>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              当院では、患者様の安全性と継続性を重視し、医学的判断に基づいたオンラインフォローを行っています。
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-600">
              <span className="flex items-center gap-1">✓ 医師がデータを確認</span>
              <span className="flex items-center gap-1">✓ 初回1ヶ月フォローあり</span>
              <span className="flex items-center gap-1">✓ 現在の機器のまま相談可能</span>
              <span className="flex items-center gap-1">✓ 完全オンライン中心</span>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              ※現在のCPAP機器のままご相談いただける場合があります
            </p>
            <p className="mt-1 text-xs text-slate-500">
              ※診療前に費用の目安をご案内し、ご同意のうえで進めます
            </p>
            <p className="mt-3 text-xs text-slate-500">
              ※現在CPAP治療中の方を主な対象とした継続フォロー外来です。
            </p>
            <p className="mt-1 text-xs text-slate-500">
              ※診療内容のご相談はオンライン診察にて承っております（メールでの個別医療相談は行っていません）。
            </p>
            </div>
            <div className="space-y-6 flex flex-col">
              {/* Hero image (patient side) */}
              <div className="rounded-3xl border border-slate-200/70 bg-white shadow-md overflow-hidden">
                <div className="relative">
                  <Image
                    src="/online-patient.png"
                    alt="オンライン診療の様子（患者側）"
                    width={1200}
                    height={800}
                    className="w-full h-[240px] md:h-[300px] object-[center_30%]"
                    priority
                  />
                  <div className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#0B1F3A] shadow">
                    ✓ 医師による継続管理
                  </div>
                </div>
                <div className="px-4 py-3">
                  <p className="text-xs text-slate-600">
                    自宅から、医師による継続管理を受けられます
                  </p>
                </div>
              </div>
              <div className="flex-1 rounded-xl border border-slate-200/70 bg-[#FAFBFC] p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">遠隔モニタリングを活用し、</div>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                  通院負担に配慮しながら、安心して続けられるフォロー体制を整えています。
                </p>
              </div>
              <div className="flex-1 rounded-xl border border-slate-200/70 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">機器変更は必須ではありません</div>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                  現在ご使用中のCPAP機器のままご相談いただける場合があります。
                </p>
              </div>
              <div className="flex-1 rounded-xl border border-slate-200/70 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-slate-900">CPAP通院の負担を減らしたい方へ</div>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                  状態が安定している方は、3ヶ月ごとの定期フォローにも対応しています。
                </p>
              </div>
              <a
                href="#eligibility"
                className="mt-2 inline-flex items-center text-sm font-medium text-slate-900 underline underline-offset-4 hover:text-slate-700"
              >
                受診対象か確認する
              </a>
              <a
                href="#reserve"
                className="mt-2 inline-flex items-center text-sm font-medium text-[#0B1F3A] underline underline-offset-4 hover:text-[#0a2847]"
              >
                継続フォローの予約はこちら
              </a>
            </div>
          </div>
          <p className="mt-8 text-center text-xs text-slate-500">
            初診後約1ヶ月フォロー｜安定後は約3ヶ月ごとの定期診療
          </p>
          <div className="mt-4 text-center text-xs text-slate-500 leading-relaxed space-y-1">
            <p>当院では、オンライン診療の利便性と医療安全性のバランスを重視しています。</p>
            <p>必要に応じて対面医療機関とも連携し、無理のない継続治療を目指します。</p>
          </div>
        </div>
      </section>

      {/* Medical Management System */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0B1F3A] md:text-2xl">
              医師による継続管理体制
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              当院では、CPAP治療を継続して安全に続けることを重視し、オンライン中心でも医師による定期的な確認を行っています。
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  t: "医師が遠隔データ確認",
                  d: "毎月のCPAP使用状況やデータを医師が定期的に確認し、治療の継続をサポートします。",
                },
                {
                  t: "初回1ヶ月フォロー",
                  d: "初診から約1ヶ月後に再診を行い、状態が安定している場合は約3ヶ月ごとの定期管理に移行します。",
                },
                {
                  t: "必要時は対面医療へ連携",
                  d: "症状の変化や対面での検査が必要と判断された場合は、速やかに適切な医療機関をご案内します。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-[#0B1F3A]">{item.t}</div>
                  <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                    {item.d}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="eligibility"
        className="mx-auto max-w-5xl px-6 py-14 scroll-mt-24"
      >
        <h2 className="text-2xl font-bold text-[#0B1F3A]">受診対象の確認（目安）</h2>
        <p className="mt-2 text-sm text-slate-700">
          当院は「安定期のCPAP継続フォロー」を中心としています。迷う場合は、オンライン診療で医師にご相談ください。
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
            className="inline-block rounded-xl bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0a2847] transition-colors"
          >
            継続フォローの予約はこちら
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
      <section id="services" className="border-t border-slate-100 bg-[#F4F7FA] scroll-mt-24">
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
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">診療の流れ</h2>
            <p className="mt-3 text-sm font-medium text-slate-600">スマホだけで簡単にオンライン受診できます</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-4 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-slate-100 -z-10" />

            {/* STEP 1 */}
            <div className="relative bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#0B1F3A]/5 flex items-center justify-center mb-4 text-[#0B1F3A]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0h18M5.25 12h13.5h-13.5zm1.5 8.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                </svg>
              </div>
              <div className="text-xs font-bold text-[#0B1F3A] mb-1">STEP 1</div>
              <h3 className="text-base font-bold text-[#0B1F3A] mb-3">オンライン予約</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-left w-full">
                24時間いつでもスマホから予約できます。<br />
                初めての方でも簡単にお申し込みいただけます。
              </p>
            </div>

            {/* STEP 2 */}
            <div className="relative bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#0B1F3A]/5 flex items-center justify-center mb-4 text-[#0B1F3A]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <div className="text-xs font-bold text-[#0B1F3A] mb-1">STEP 2</div>
              <h3 className="text-base font-bold text-[#0B1F3A] mb-3">事前準備</h3>
              <div className="text-sm text-slate-600 leading-relaxed text-left w-full space-y-2">
                <p>保険証などの必要情報を予約画面からアップロードいただきます。</p>
                <p>現在CPAP治療中の方は、紹介状や検査結果があれば事前にご提出ください。</p>
                <p className="text-xs text-slate-500">※紹介状がなくても受診可能です</p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="relative bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#0B1F3A]/5 flex items-center justify-center mb-4 text-[#0B1F3A]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <div className="text-xs font-bold text-[#0B1F3A] mb-1">STEP 3</div>
              <h3 className="text-base font-bold text-[#0B1F3A] mb-3">オンライン診療</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-left w-full">
                ご自宅や職場から、スマホ・PCで医師とビデオ通話を行います。<br />
                来院の必要はありません。
              </p>
            </div>

            {/* STEP 4 */}
            <div className="relative bg-white rounded-2xl border border-slate-100 p-6 shadow-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#0B1F3A]/5 flex items-center justify-center mb-4 text-[#0B1F3A]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <div className="text-xs font-bold text-[#0B1F3A] mb-1">STEP 4</div>
              <h3 className="text-base font-bold text-[#0B1F3A] mb-3">CPAP継続フォロー</h3>
              <p className="text-sm text-slate-600 leading-relaxed text-left w-full">
                治療データを確認しながら、オンラインで継続サポートします。<br />
                転院相談だけでも可能です。
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 md:gap-6">
            {[
              "紹介状がなくてもOK",
              "来院不要",
              "全国対応",
            ].map((point) => (
              <div
                key={point}
                className="flex items-center gap-1.5 rounded-full bg-slate-50 px-4 py-2 text-xs font-medium text-slate-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[#0B1F3A]">
                  <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                </svg>
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Limitations */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0B1F3A] md:text-2xl">
              当院で対応が難しいケースについて
            </h2>
            <div className="mt-4 text-sm leading-relaxed text-slate-700">
              <p>
                オンライン診療は便利な一方で、すべてのケースに適しているわけではありません。
                <br />
                以下の場合は、対面医療機関での受診をご案内することがあります。
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>CPAP導入直後で状態が不安定な場合</li>
                <li>強い眠気や症状の急な悪化がある場合</li>
                <li>重篤な合併症が疑われる場合</li>
                <li>医師が対面診察が必要と判断した場合</li>
              </ul>
              <p className="mt-6 text-xs text-slate-500">
                当院では、患者様の安全を最優先に診療方針を判断しています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transfer */}
      <section id="transfer" className="border-t border-slate-100 bg-[#F4F7FA] scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">現在CPAPをご使用中の方へ（転院対応）</h2>
          <div className="mt-6 space-y-3">
            <div className="flex gap-2 text-sm text-slate-700">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#0B1F3A]" />
              <span>紹介状がなくてもご相談いただける場合があります。これまでの検査結果や診療情報をご用意いただくとスムーズです。</span>
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
              紹介状がなくてもご相談いただける場合があります。情報があると診療がスムーズです。
            </p>
          </div>
          <div className="mt-8">
            <a
              href="#reserve"
              className="inline-block rounded-xl bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0a2847] transition-colors"
            >
              継続フォローの予約はこちら
            </a>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="border-t border-slate-100 bg-white scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">料金・お支払い</h2>
          <p className="mt-2 text-sm text-slate-700">
            料金は保険診療の範囲・診療内容により異なります。詳細は予約時または診療時にご案内します。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-[#0B1F3A]">システム利用料など</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                当院ではシステム利用料等の追加費用は原則いただいていません。
                <span className="block text-xs text-slate-500 mt-1">※発生する場合は事前に明示します。</span>
              </p>
              <p className="mt-2 text-sm text-slate-700">
                お支払いはクレジットカードなどのオンライン決済に対応しています（詳細は予約時にご案内します）。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-[#0B1F3A]">保険診療について</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                オンライン診療・対面診療いずれも、適用条件や算定可否は症状・診療内容により異なります。
              </p>
              <p className="mt-3 text-xs text-slate-500">
                診療前に費用の目安をご案内し、ご同意のうえで診療を行います。
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm md:col-span-2">
              <div className="text-sm font-semibold text-[#0B1F3A]">月額換算の目安（3か月に1回受診した場合）</div>
              <div className="mt-2 space-y-1 text-sm leading-relaxed text-slate-700">
                <p>月額換算：4,300〜5,000円/月（目安）</p>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                ※自己負担割合（1割/2割/3割）、診療内容、算定可否（オンライン診療料等）により変動します。詳細は予約時または診療時にご案内します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-t border-slate-100 bg-[#F4F7FA] scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">よくある質問</h2>
          <div className="mt-8 space-y-4">
            {[
              {
                q: "保険診療ですか？",
                a: "はい、当院の診療は原則として保険診療となります。受診時には必ず健康保険証（またはマイナ保険証）をご用意ください。",
              },
              {
                q: "紹介状は必要ですか？",
                a: "紹介状がなくてもご相談いただけます。これまでの検査結果や診療情報をお持ちいただくと、よりスムーズな診療が可能です。",
              },
              {
                q: "今のCPAP機器のまま受診できますか？",
                a: "はい、多くのメーカーの機器に対応しておりますので、現在の機器を継続してご使用いただける場合がほとんどです。予約時にメーカー名や機種名をお知らせください。",
              },
              {
                q: "支払い方法は？",
                a: "クレジットカードによるオンライン決済に対応しております。診療完了後、登録いただいたカードから自動的に決済が行われます。",
              },
              {
                q: "診察時間はどれくらいですか？",
                a: "オンライン診察自体は通常10分程度で終了します。通院や待ち時間の負担なく、効率的に受診いただけます。",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all"
              >
                <summary className="flex cursor-pointer items-center justify-between list-none">
                  <span className="text-sm font-semibold text-[#0B1F3A]">{item.q}</span>
                  <span className="text-[#0B1F3A] transition-transform group-open:rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>
                <div className="mt-4 text-sm leading-relaxed text-slate-700">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="border-t border-slate-100 bg-[#F4F7FA]">
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
      <section id="reserve" className="border-t border-slate-100 bg-white scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">予約</h2>
            <p className="mt-2 text-sm text-slate-700">
              ここは後で予約システム（例：SOKUYAKU等）のリンクを設定します。
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#"
                className="rounded-xl bg-[#0B1F3A] px-5 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#0a2847] transition-colors"
              >
                継続フォローの予約はこちら
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
          <h2 className="text-2xl font-bold text-[#0B1F3A]">オンライン診療対応エリアについて</h2>
          <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-sm leading-relaxed text-slate-700">
              必要に応じて患者様のお住まいの地域の医療機関への受診をご案内し、安心して治療を継続できる体制を整えています。
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-slate-100 bg-[#F4F7FA]">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">お問い合わせ（事務連絡）</h2>
          <div className="mt-6 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <p className="text-xs text-slate-500 mb-3">
              ※診療内容に関するご相談はオンライン診察にて承っております。
            </p>
            <p className="text-xs text-slate-500">
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
              <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Image
                  src="/doctor.png"
                  alt="管理者（医師）の写真"
                  width={112}
                  height={112}
                  className="rounded-2xl object-cover shadow-sm"
                />
                <div>
                  <div className="text-sm font-semibold text-slate-900">管理者（医師）</div>
                  <div className="mt-1 text-base font-semibold text-slate-900">廣瀬 有紀子</div>
                  <ul className="mt-2 space-y-1 text-sm text-slate-700">
                    <li>・耳鼻咽喉科専門医</li>
                    <li>・アレルギー科専門医</li>
                    <li className="pt-1 text-xs text-slate-500">CPAP治療・耳鼻咽喉科領域を中心にオンライン診療を担当</li>
                  </ul>
                </div>
              </div>

              <div className="font-semibold text-slate-900">医療機関名</div>
              <div className="mt-1 text-slate-700">SAS CPAP オンラインクリニック</div>

              <div className="mt-4 font-semibold text-slate-900">所在地</div>
              <div className="mt-1 text-xs text-slate-500">東京都渋谷区代々木2丁目23-1 ニューステートメナー 1226</div>
              <p className="mt-1 text-xs text-slate-500">
                ※オンライン診療を主としているため、通常の来院受付は行っておりません。
              </p>
              <p className="mt-2 text-xs text-slate-500">
                新宿・代々木エリアに拠点を置き、
                <br />
                必要に応じて都内医療機関との連携も視野に入れた体制を整えています。
              </p>

              <div className="mt-4 font-semibold text-slate-900">連絡先</div>
              <div className="mt-1 text-sm text-slate-700">
                TEL：03-XXXX-XXXX（事務連絡のみ）
                <span className="block mt-1">※診療内容のご相談はオンライン診療にて承ります</span>
              </div>
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
        </div>
      </section>

      {/* SAS General Info */}
      <section className="border-t border-slate-100 bg-[#F4F7FA]">
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
      <section className="border-t border-slate-100 bg-[#F4F7FA]">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">CPAP継続フォロー・転院相談</h2>
            <p className="mt-2 text-sm text-slate-700">
              オンライン中心の診療で、通院負担を減らしながら継続フォローを行います
            </p>
            <div className="mt-8">
              <a
                href="#reserve"
                className="inline-block rounded-xl bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0a2847] transition-colors"
              >
                継続フォローの予約はこちら
              </a>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              ※診療内容のご相談はオンライン診察にて承っております（メールでの個別医療相談は行っていません）。
            </p>
          </div>
        </div>
      </section>
      
<footer className="mt-16 border-t border-slate-200/70 pt-8 text-xs text-slate-500">
  <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
    <div className="flex flex-col items-center gap-1 sm:items-start">
      <p className="mb-1">本サイトは医療機関による情報提供を目的としています。</p>
      <p>© {new Date().getFullYear()} SAS CPAP オンラインクリニック</p>
    </div>
    <a
      href="/partners"
      className="underline underline-offset-4 hover:text-slate-700"
    >
      機器代理店の方へ
    </a>
  </div>
</footer>

    {/* Mobile Fixed CTA */}
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md gap-3">
        <a
          href="#reserve"
          className="flex-1 rounded-xl bg-[#0B1F3A] py-3 text-center text-sm font-semibold text-white shadow-sm"
        >
          継続フォローの予約はこちら
        </a>
        <a
          href="#eligibility"
          className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-semibold text-[#0B1F3A]"
        >
          対象確認
        </a>
      </div>
    </div>

    </main>
  );
}
