import Image from "next/image";

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/logo.png"
                alt="SAS CPAP オンラインクリニック ロゴ"
                width={48}
                height={48}
                className="h-10 w-10 md:h-12 md:w-12 rounded-xl border border-slate-200 bg-white p-1 object-contain"
              />
              <div className="leading-tight">
                <div className="text-xs text-slate-500">sas-cpap.jp</div>
                <div className="text-base font-bold text-[#0B1F3A] md:text-lg">
                  SAS CPAP オンラインクリニック
                </div>
              </div>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="hidden rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#0B1F3A] shadow-sm hover:bg-slate-50 sm:inline-flex"
            >
              患者さま向けLP
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-[#0B1F3A] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] to-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full bg-[#0B1F3A]/5 px-3 py-1 text-xs font-semibold text-[#0B1F3A]">
              機器代理店・DMEの方向け
            </div>
            <h1 className="mt-6 text-3xl font-bold tracking-tight text-[#0B1F3A] md:text-4xl md:leading-tight">
              CPAP導入済み患者の継続フォローを
              <br />
              オンライン中心で支援します
            </h1>
            <p className="mt-6 text-base leading-relaxed text-slate-700 md:text-lg">
              新規導入ではなく、すでに導入済みで安定期の継続管理が主対象です。
              <br className="hidden md:inline" />
              原則として「患者さまご本人による予約」で完結するため、
              代理店様の事務負担を最小限に抑えながら、適切な医療連携を実現します。
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#reserve"
                className="inline-flex items-center justify-center rounded-xl bg-[#0B1F3A] px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0a2847] transition-colors"
              >
                患者さま向けLPを見る（予約導線）
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-[#0B1F3A] shadow-sm hover:bg-slate-50 transition-colors"
              >
                代理店事務連絡・お問い合わせ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-slate-100 bg-white py-16 scroll-mt-24" id="benefits">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">
            代理店様との連携メリット
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0B1F3A] shadow-sm border border-slate-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#0B1F3A]">オペレーションが増えない</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                患者さまご本人によるオンライン予約を基本としています。代理店様による予約代行や複雑な入力作業は不要です。
              </p>
            </div>
            {/* Card 2 */}
            <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0B1F3A] shadow-sm border border-slate-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#0B1F3A]">継続率に配慮</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                医師が可能な範囲で遠隔データを確認し、治療継続をサポートします。通院負担によるドロップアウトを防ぎます。
              </p>
            </div>
            {/* Card 3 */}
            <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-[#0B1F3A] shadow-sm border border-slate-100 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.854 1.591-2.16 1.722-.566 2.91-2.164 2.91-4.018 0-2.28-1.786-4.14-3.957-4.226a6.002 6.002 0 01-2.073-3.415m0 12.636a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M9.75 18v-.192c0-.983-.658-1.854-1.591-2.16-1.722-.566-2.91-2.164-2.91-4.018 0-2.28 1.786-4.14 3.957-4.226a6.002 6.002 0 002.073-3.415m-1.5 6.442a6.002 6.002 0 01-1.28-1.838" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-[#0B1F3A]">揉めにくい責任分界</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                診療判断は医療機関が、機器の手続き等は患者さまが行います。役割分担を明確にし、トラブルを予防します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Flow */}
      <section className="border-t border-slate-100 bg-[#F4F7FA] py-16 scroll-mt-24" id="flow">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">連携方法（3STEP）</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* STEP 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-bold text-[#0B1F3A] mb-1">STEP 1</div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">患者さまへLP案内</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                患者さまへ、当院のウェブサイト（URL）をご案内ください。
              </p>
            </div>
            {/* STEP 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-bold text-[#0B1F3A] mb-1">STEP 2</div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">患者さま本人が予約</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                患者さまご自身のスマホ等から、オンライン診療の予約を行っていただきます。
              </p>
            </div>
            {/* STEP 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs font-bold text-[#0B1F3A] mb-1">STEP 3</div>
              <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">必要情報の提供</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                必要に応じて、検査結果や現在の機器設定情報等の提供をお願いする場合があります（任意）。
              </p>
            </div>
          </div>

          {/* Template */}
          <div className="mt-10">
            <h3 className="text-base font-bold text-[#0B1F3A] mb-3">
              患者さま案内用テンプレート（コピーしてご利用ください）
            </h3>
            <div className="relative rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-inner">
              <pre className="whitespace-pre-wrap text-sm text-slate-700 font-sans leading-relaxed select-all">
{`CPAP治療継続中で通院が負担になっている方へ、オンライン中心の継続フォロー外来があります。
予約はご本人から行っていただく必要があります。
ご興味があれば、下記のクリニック公式サイトをご確認ください。

■SAS CPAP オンラインクリニック
https://sas-cpap.jp

※紹介状がなくてもご相談いただける場合がありますが、これまでの検査結果やお薬手帳などがあると診療がスムーズです。`}
              </pre>
              <div className="absolute top-4 right-4 text-xs text-slate-400 font-medium">
                Select All & Copy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Division */}
      <section className="border-t border-slate-100 bg-white py-16 scroll-mt-24" id="roles">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">役割分担について</h2>
          <p className="mt-4 text-sm text-slate-700 leading-relaxed max-w-2xl">
            医療機関としての責任範囲と、患者さまご自身に行っていただく手続きを明確に分けています。
            代理店様に患者情報の入力代行などを求めることはありません。
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[#0B1F3A] mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1F3A]/10 text-sm">医</span>
                医療機関（当院）
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#0B1F3A] mt-0.5">●</span>
                  <span>オンライン診療・医学的判断</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0B1F3A] mt-0.5">●</span>
                  <span>遠隔データの確認（可能な範囲）</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0B1F3A] mt-0.5">●</span>
                  <span>必要時の対面医療機関への案内</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0B1F3A] mt-0.5">●</span>
                  <span>処方指示・治療方針の決定</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="flex items-center gap-2 text-lg font-bold text-[#0B1F3A] mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm">患</span>
                患者さまご本人
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">●</span>
                  <span>診療予約・本人確認・保険証登録</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">●</span>
                  <span>必要書類（紹介状等）のアップロード</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">●</span>
                  <span>DME等に関する契約・返却等の手続き</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 mt-0.5">●</span>
                  <span>オンライン診療環境の準備</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Quick Check */}
      <section className="border-t border-slate-100 bg-[#F8FAFC] scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">
            紹介判断のクイックチェック（約1分）
          </h2>

          <p className="mt-3 text-sm text-slate-700">
            以下に多く当てはまる場合、当院のオンライン継続フォローをご案内いただける可能性があります。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              "CPAP導入済みで状態が安定している",
              "通院が負担になっている",
              "オンライン診療に抵抗がない",
              "強い眠気や急な悪化がない",
              "予約・手続きを本人で対応できる",
              "現在の機器を継続使用したい",
            ].map((item)=>(
              <div key={item} className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm text-sm text-slate-700">
                ✓ {item}
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-500">
            ※あくまで目安です。最終的な診療可否は医師が判断します。
          </p>
        </div>
      </section>

      {/* Not Suitable Cases */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">
            紹介をおすすめしないケース（目安）
          </h2>

          <div className="mt-6 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
            <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700">
              <li>CPAP導入直後で状態が不安定</li>
              <li>強い日中の眠気・急な症状悪化がある</li>
              <li>対面検査や処置が必要と考えられる場合</li>
            </ul>

            <p className="mt-4 text-xs text-slate-500">
              当院では安全性を最優先とし、オンライン診療が適さない場合は対面医療機関の受診をご案内します。
            </p>
          </div>
        </div>
      </section>

      {/* Print Friendly Note */}
      <section className="border-t border-slate-100 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-6 pb-14">
          <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold text-[#0B1F3A]">
              患者さまへそのままお渡しいただけます
            </div>

            <p className="mt-3 text-sm text-slate-700 leading-relaxed">
              本ページは、患者さまへ印刷してお渡しいただける形式を想定しています。
              詳細は患者向けLPをご案内ください。
            </p>

            <div className="mt-4 text-xs text-slate-500">
              ※予約・個別相談は患者さまご本人からお願いいたします。
            </div>
          </div>
        </div>
      </section>

      {/* Partner FAQ */}
      <section className="border-t border-slate-100 bg-white scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">
            よくあるご質問（代理店様）
          </h2>

          <div className="mt-8 space-y-4">
            {[
              {
                q:"代理店側で予約を取る必要はありますか？",
                a:"原則として患者さまご本人からの予約をお願いしています。代理店様側での入力作業が増えない設計です。"
              },
              {
                q:"紹介状は必須ですか？",
                a:"必須ではありません。検査結果や機器情報がある場合は、診療がよりスムーズになります。"
              },
              {
                q:"機器メーカーが異なっていても紹介できますか？",
                a:"はい。現在ご使用中の機器のままご相談いただける場合があります。"
              },
              {
                q:"代理店側に責任が発生することはありますか？",
                a:"診療判断は医療機関が行います。代理店様には患者様へのご案内のみをお願いする想定です。"
              },
              {
                q:"すべてオンラインで完結しますか？",
                a:"症状や状況により、医師の判断で対面医療機関の受診をご案内する場合があります。"
              },
            ].map((item,idx)=>(
              <details
                key={idx}
                className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
              >
                <summary className="flex cursor-pointer items-center justify-between list-none">
                  <span className="text-sm font-semibold text-[#0B1F3A]">
                    {item.q}
                  </span>
                  <span className="text-[#0B1F3A] transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <div className="mt-4 text-sm leading-relaxed text-slate-700">
                  {item.a}
                </div>
              </details>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-500">
            ※本ページは一般的な運用の目安です。個別の診療判断は医師が行います。
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-slate-100 bg-white py-16 scroll-mt-24" id="contact">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">事務連絡・お問い合わせ</h2>
          <p className="mt-4 text-sm text-slate-700 leading-relaxed max-w-2xl mx-auto">
            代理店様からの運用に関するお問い合わせはこちらからお願いいたします。<br />
            <span className="text-slate-500 text-xs">※患者さま個別の診療内容に関するご相談は、個人情報保護および安全管理の観点から、患者さまご本人によるオンライン診療内にて承ります。</span>
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/#reserve"
              className="w-full sm:w-auto rounded-xl border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-[#0B1F3A] shadow-sm hover:bg-slate-50 transition-colors"
            >
              患者さま向けLPを確認
            </a>
            <a
              href="mailto:info@sas-cpap.jp"
              className="w-full sm:w-auto rounded-xl bg-[#0B1F3A] px-8 py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#0a2847] transition-colors"
            >
              メールで問い合わせ（事務局）
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200/80 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-slate-500">
              © {new Date().getFullYear()} SAS CPAP オンラインクリニック
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a className="text-slate-600 hover:text-slate-900" href="/">
                トップページ
              </a>
              <a className="text-slate-600 hover:text-slate-900" href="/#reserve">
                診療予約
              </a>
            </div>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            本ページは医療機器代理店様・DME事業者様向けの情報提供ページです。診療内容・対象可否は個別の医学的判断によります。
          </p>
        </div>
      </footer>
    </main>
  );
}