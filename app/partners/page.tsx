// app/partners/page.tsx
import Image from "next/image";

export default function PartnersPage() {
    const cardBase =
      "rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm";
    const sectionBase = "py-16 sm:py-20";
    const containerBase = "mx-auto max-w-5xl px-6";
  
    return (
      <main className="min-h-screen bg-white text-[#171717]">
        {/* Header */}
        <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/95 backdrop-blur-sm">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-[#0B1F3A]" />
              <div className="leading-tight">
                <div className="text-sm text-slate-500">sas-cpap.jp</div>
                <div className="text-lg font-semibold text-[#0B1F3A]">
                  SAS CPAP オンラインクリニック
                </div>
                <div className="mt-0.5 text-xs font-normal text-slate-500">
                  オンライン中心のCPAP継続フォロー外来
                </div>
              </div>
            </div>
  
            <div className="flex items-center gap-3">
              <a
                href="/#reserve"
                className="hidden rounded-xl bg-[#0B1F3A] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-95 sm:inline-flex"
              >
                オンライン診療予約
              </a>
              <a
                href="/"
                className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#0B1F3A] shadow-sm hover:bg-slate-50"
              >
                患者さま向けLPへ
              </a>
            </div>
          </div>
        </header>
  
        {/* Hero */}
        <section className={`${sectionBase} bg-white`}>
          <div className={containerBase}>
            <div className="grid items-start gap-10 lg:grid-cols-2">
              {/* Left */}
              <div>
                <p className="text-sm font-semibold text-slate-500">
                  代理店（DME）様向け
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#0B1F3A] sm:text-4xl">
                  CPAP継続が難しくなりそうな患者さまの
                  <br className="hidden sm:block" />
                  「オンライン中心の継続フォロー」について
                </h1>
  
                <p className="mt-4 max-w-prose text-base leading-relaxed text-slate-700">
                  当院では、すでにCPAPをご利用中で状態が安定している患者さまを対象に、
                  オンライン中心の継続フォロー外来を行っております。
                  通院が負担になり、フォローが途切れそうな患者さまの受け皿として、
                  ご相談いただける場合があります。
                </p>
  
                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className={cardBase}>
                    <div className="text-sm font-semibold text-[#0B1F3A]">
                      対象（目安）
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      <li>・CPAP導入済みで安定期の方</li>
                      <li>・通院継続が負担になっている方</li>
                      <li>・転居・勤務状況の変化等で通院困難な方</li>
                    </ul>
                  </div>
  
                  <div className={cardBase}>
                    <div className="text-sm font-semibold text-[#0B1F3A]">
                      フォローの目安
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      <li>・オンライン中心の継続フォロー</li>
                      <li>・約3ヶ月に1回のフォローを目安</li>
                      <li>・必要に応じて情報提供をお願いする場合があります</li>
                    </ul>
                  </div>
                </div>
  
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="/#reserve"
                    className="inline-flex items-center justify-center rounded-xl bg-[#0B1F3A] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                  >
                    患者さまの予約導線を見る（LPへ）
                  </a>
                  <a
                    href="#how"
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#0B1F3A] shadow-sm hover:bg-slate-50"
                  >
                    連携方法を見る
                  </a>
                </div>
  
                <p className="mt-4 text-xs leading-relaxed text-slate-500">
                  ※本ページは代理店様向けの概要です。診療内容は個別の状態により判断いたします。
                </p>
              </div>
  
              {/* Right */}
              <div className="space-y-4">
                <div className={cardBase}>
                  <div className="text-sm font-semibold text-[#0B1F3A]">
                    代理店様側のメリット（例）
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li>・通院負担により離脱しそうな患者さまの受け皿</li>
                    <li>・継続フォローの途切れを予防する選択肢</li>
                    <li>・オンライン中心のため移動・時間の負担を軽減</li>
                  </ul>
                </div>
  
                <div className={cardBase}>
                  <div className="text-sm font-semibold text-[#0B1F3A]">
                    こんな患者さまをご案内いただく場面
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li>・「忙しくて通院が難しい」と相談があった</li>
                    <li>・転居・転勤で前医への通院が困難になった</li>
                    <li>・安定期でフォロー中心の体制を希望している</li>
                  </ul>
                </div>
  
                <div className={cardBase}>
                  <div className="text-sm font-semibold text-[#0B1F3A]">
                    追加費用の考え方（方針）
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    システム管理料などの追加費用は原則不要です。
                    何らかの費用が発生する場合は、事前に明示した上でご案内します。
                  </p>
                </div>

                <div className={cardBase}>
                  <div className="text-sm font-semibold text-[#0B1F3A]">管理者（医師）</div>
                  <div className="mt-3 flex items-center gap-4">
                    <Image
                      src="/doctor.png"
                      alt="管理者（医師）の写真"
                      width={80}
                      height={80}
                      className="rounded-2xl object-cover shadow-sm"
                    />
                    <div>
                      <div className="text-sm font-semibold text-slate-900">廣瀬 有紀子</div>
                      <div className="mt-1 text-xs text-slate-700">耳鼻咽喉科専門医</div>
                      <div className="text-xs text-slate-700">アレルギー科専門医</div>
                    </div>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-500">
                    ※診療内容・対象可否は個別の状態により判断いたします。
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-200/70 bg-[#F4F7FA] p-5">
                  <div className="text-sm font-semibold text-[#0B1F3A]">
                    ご案内用リンク（コピーして共有）
                  </div>
                  <div className="mt-3 space-y-2 text-sm text-slate-700">
                    <p>
                      ・患者さま向けLP：
                      <span className="ml-2 font-mono text-slate-600">https://sas-cpap.jp/</span>
                    </p>
                    <p>
                      ・予約導線：
                      <span className="ml-2 font-mono text-slate-600">https://sas-cpap.jp/#reserve</span>
                    </p>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-500">
                    ※実運用のURLに合わせて書き換えてください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* How to collaborate */}
        <section id="how" className={`${sectionBase} bg-[#F4F7FA]`}>
          <div className={containerBase}>
            <h2 className="text-2xl font-bold text-[#0B1F3A]">
              連携方法（シンプル運用）
            </h2>
            <p className="mt-3 max-w-prose text-base leading-relaxed text-slate-700">
              代理店様側のオペレーションが複雑にならないよう、
              原則として「患者さまご本人からのご予約」を基本としています。
            </p>
  
            <div className="mt-7 grid gap-4 lg:grid-cols-3">
              <div className={cardBase}>
                <div className="text-sm font-semibold text-[#0B1F3A]">
                  1. ご案内
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  患者さまへ、当院の患者向けLPをご案内ください。
                </p>
              </div>
  
              <div className={cardBase}>
                <div className="text-sm font-semibold text-[#0B1F3A]">
                  2. ご予約（患者さま）
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  患者さまご本人がオンライン診療予約を行います。
                </p>
              </div>
  
              <div className={cardBase}>
                <div className="text-sm font-semibold text-[#0B1F3A]">
                  3. 情報提供（必要に応じて）
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  検査結果・処方内容・機器情報等の提供をお願いする場合があります（あるとスムーズです）。
                </p>
              </div>
            </div>
  
            <div className="mt-8 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-[#0B1F3A]">
                よくある確認事項（代理店様側）
              </div>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>・新規導入目的ではなく、導入済み・安定期の継続フォローが中心です。</li>
                <li>・機器は原則そのままご利用いただける場合があります（個別状況によります）。</li>
                <li>・症状変化や対面対応が必要と判断した場合は、対面医療機関受診をご案内する場合があります。</li>
              </ul>
            </div>
          </div>
        </section>
  
        {/* Contact / Info */}
        <section className={`${sectionBase} bg-white`}>
          <div className={containerBase}>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-bold text-[#0B1F3A]">
                  代理店様からのお問い合わせ（任意）
                </h2>
                <p className="mt-3 max-w-prose text-base leading-relaxed text-slate-700">
                  連携の前提確認や運用のご相談がある場合は、医療機関様向けの窓口をご用意ください。
                  （患者さまからの個別相談は原則予約導線へ）
                </p>
  
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className={cardBase}>
                    <div className="text-sm font-semibold text-[#0B1F3A]">
                      連絡先（医療機関・代理店様用）
                    </div>
                    <p className="mt-3 text-sm text-slate-700">
                      メール：<span className="font-mono text-slate-600">xxxxx@example.com</span>
                    </p>
                    <p className="mt-2 text-sm text-slate-700">
                      電話：<span className="font-mono text-slate-600">03-XXXX-XXXX</span>
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-500">
                      ※「事務連絡のみ」など用途限定の表記を推奨します。
                    </p>
                  </div>
  
                  <div className={cardBase}>
                    <div className="text-sm font-semibold text-[#0B1F3A]">
                      関連ページ
                    </div>
                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      <li>
                        ・<a className="text-[#0B1F3A] underline-offset-4 hover:underline" href="/medical">
                          医療機関様向け
                        </a>
                      </li>
                      <li>
                        ・<a className="text-[#0B1F3A] underline-offset-4 hover:underline" href="/">
                          患者さま向けLP
                        </a>
                      </li>
                      <li>
                        ・<a className="text-[#0B1F3A] underline-offset-4 hover:underline" href="/#reserve">
                          予約導線（LP内）
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
  
              <div className="rounded-2xl border border-slate-200/70 bg-[#F4F7FA] p-6">
                <div className="text-sm font-semibold text-[#0B1F3A]">
                  そのまま使える“紹介時の一言”（例）
                </div>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
                  <p className="rounded-xl border border-slate-200/70 bg-white p-4 shadow-sm">
                    「通院が負担になっている方のために、オンライン中心で継続フォローをご相談できるクリニックがあるようです。ご本人から予約できます。」
                  </p>
                  <p className="rounded-xl border border-slate-200/70 bg-white p-4 shadow-sm">
                    「すでにCPAPをご利用中で安定している方向けに、約3ヶ月ごとのフォローを目安にしているそうです。詳細はLPをご確認ください。」
                  </p>
                </div>
                <p className="mt-4 text-xs leading-relaxed text-slate-500">
                  ※断定表現を避け、相談ベースの案内に寄せています。
                </p>
              </div>
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
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
                <a className="text-slate-600 hover:text-slate-900" href="/">
                  患者さま向けLP
                </a>
                <a className="text-slate-600 hover:text-slate-900" href="/medical">
                  医療機関様向け
                </a>
                <a className="text-slate-600 hover:text-slate-900" href="/#reserve">
                  オンライン診療予約
                </a>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-slate-500">
              本ページは代理店様向けの概要です。診療内容・対象可否は個別の状態により判断いたします。
            </p>
          </div>
        </footer>
      </main>
    );
  }
  