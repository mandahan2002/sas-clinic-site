"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsPastHero(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FAQ Data for Structured Data (JSON-LD)
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "保険診療ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、当院の診療は原則として保険診療となります。受診時には必ず健康保険証（またはマイナ保険証）をご用意ください。"
        }
      },
      {
        "@type": "Question",
        "name": "紹介状は必要ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "紹介状がなくてもご相談いただけます。これまでの検査結果や診療情報をお持ちいただくと、よりスムーズな診療が可能です。"
        }
      },
      {
        "@type": "Question",
        "name": "今のCPAP機器のまま受診できますか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、多くのメーカーの機器に対応しておりますので、現在の機器を継続してご使用いただける場合がほとんどです。予約時にメーカー名や機種名をお知らせください。"
        }
      },
      {
        "@type": "Question",
        "name": "支払い方法は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "クレジットカードによるオンライン決済に対応しております。診療完了後、登録いただいたカードから自動的に決済が行われます。"
        }
      },
      {
        "@type": "Question",
        "name": "診察時間はどれくらいですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "オンライン診察自体は通常10分程度で終了します。通院や待ち時間の負担なく、効率的に受診いただけます。"
        }
      },
      {
        "@type": "Question",
        "name": "対面受診が必要になるのはどんな時ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "症状が不安定な場合、重篤な合併症が疑われる場合、または医師が対面での検査や診察が必要と判断した場合には、近隣の医療機関をご案内することがあります。"
        }
      }
    ]
  };

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
            <a href="#faq" className="hover:text-slate-900 transition-colors">
              よくある質問
            </a>
            <a href="#access" className="hover:text-slate-900 transition-colors">
              クリニックについて
            </a>
          </nav>
          <a
            href="#reserve"
            className="rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-[#0B1F3A] hover:bg-slate-50 transition-colors"
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
        <div className="mx-auto max-w-5xl px-6 py-10 md:py-24">
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

              {/* Mobile optimized mini badges */}
              <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-2 text-xs font-medium text-[#0B1F3A]">
                <span className="flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1">
                  ✓ 医師が確認
                </span>
                <span className="flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1">
                  ✓ 初回1ヶ月
                </span>
                <span className="flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1">
                  ✓ 3ヶ月ごと
                </span>
              </div>

              {/* Internal Links (SEO & Navigation) */}
              <div className="mt-4 hidden md:flex gap-4 text-xs font-medium text-slate-500 underline underline-offset-4">
                 <a href="#transfer" className="hover:text-slate-800">転院の方はこちら</a>
                 <a href="#faq" className="hover:text-slate-800">よくある質問</a>
              </div>

              {/* CTA Area (Moved Up) */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center justify-center md:justify-start">
                <a
                  href="#reserve"
                  className="inline-block rounded-xl bg-[#0B1F3A] px-6 py-3.5 text-sm font-semibold tracking-wide text-white shadow-sm hover:bg-[#0a2847] transition-colors"
                >
                  継続フォローの予約はこちら
                </a>
                <a
                  href="#eligibility"
                  className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-center text-sm font-semibold text-[#0B1F3A] shadow-sm hover:bg-slate-50 transition-colors"
                >
                  対象か確認する
                </a>
              </div>
              
              {/* Mobile Only Link */}
              <div className="mt-3 md:hidden text-center">
                <a href="#transfer" className="text-xs text-slate-500 underline underline-offset-4">転院の方はこちら</a>
              </div>

              {/* Quantitative Info Line */}
              <p className="mt-3 text-xs text-slate-500 text-center md:text-left">
                オンライン診察：目安10分｜初診後1ヶ月フォロー｜安定後は約3ヶ月ごと
              </p>

              {/* Shortened Description */}
              <p className="mt-6 text-sm text-slate-700 leading-relaxed text-left">
                CPAP治療中（安定期）の方を対象に、医師が遠隔データを確認しながらオンライン中心で継続フォローを行います。
                初診後1ヶ月で再診し、安定後は約3ヶ月ごとの定期管理へ移行します。
              </p>
              <p className="mt-2 text-xs text-slate-500 text-left">
                ※医学的判断により対面受診をご案内する場合があります。
              </p>

              {/* Details (Folded) */}
              <details className="mt-4 text-left group">
                <summary className="cursor-pointer text-xs font-medium text-slate-500 hover:text-slate-700 select-none flex items-center gap-1">
                  <span className="group-open:rotate-90 transition-transform">
                    ▶
                  </span>
                  診療方針の詳細・注意事項を見る
                </summary>
                <div className="mt-3 rounded-lg bg-slate-50 p-4 text-xs text-slate-600 space-y-2">
                  <p>
                    ・対面診療をご案内する場合：症状が不安定な場合や、対面での検査が必要と医師が判断した場合は、近隣の医療機関や提携クリニックをご案内します。
                  </p>
                  <p>
                    ・システム管理料について：原則として追加費用はかかりませんが、発生する場合は事前に明示し、ご同意いただいた上で進めます。
                  </p>
                  <p>
                    ・メール医療相談は不可：診療内容に関するご相談は、安全管理のためオンライン診察の時間内にて承っております。
                  </p>
                  <p>
                    ・当院では、患者様の安全性と継続性を重視し、医学的判断に基づいたオンラインフォローを行っています。
                  </p>
                </div>
              </details>

              {/* Cards (Scrollable on mobile) */}
              <div className="mt-8 flex gap-3 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:items-stretch md:overflow-visible md:pb-0 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
                {/* Card 1 */}
                <div className="min-w-[160px] md:min-w-0 flex-1 rounded-xl border border-slate-200/70 bg-white/70 p-4 md:p-5 flex flex-col justify-center h-auto">
                  <div className="text-xs md:text-sm font-semibold text-slate-900 mb-2">
                    医師が遠隔データ確認
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-[#0B1F3A]" />
                      毎月のデータ確認
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-[#0B1F3A]" />
                      治療継続をサポート
                    </li>
                  </ul>
                </div>
                {/* Card 2 */}
                <div className="min-w-[160px] md:min-w-0 flex-1 rounded-xl border border-slate-200/70 bg-white/70 p-4 md:p-5 flex flex-col justify-center h-auto">
                  <div className="text-xs md:text-sm font-semibold text-slate-900 mb-2">
                    初回1ヶ月フォロー
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-[#0B1F3A]" />
                      導入・転院初期の確認
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-[#0B1F3A]" />
                      安心して開始
                    </li>
                  </ul>
                </div>
                {/* Card 3 */}
                <div className="min-w-[160px] md:min-w-0 flex-1 rounded-xl border border-slate-200/70 bg-white/70 p-4 md:p-5 flex flex-col justify-center h-auto">
                  <div className="text-xs md:text-sm font-semibold text-slate-900 mb-2">
                    安定後は約3ヶ月ごと
                  </div>
                  <ul className="space-y-1 text-xs text-slate-700">
                    <li className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-[#0B1F3A]" />
                      通院負担を軽減
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-[#0B1F3A]" />
                      オンライン中心
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6 flex flex-col">
              {/* Hero image (patient side) */}
              <div className="rounded-3xl border border-slate-200/70 bg-white shadow-md overflow-hidden">
                <div className="relative">
                  <Image
                    src="/online-patient.png"
                    alt="オンライン診療（CPAP継続フォロー）のイメージ"
                    width={1200}
                    height={800}
                    className="w-full h-[220px] md:h-[300px] object-cover object-[center_30%]"
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
                <div className="text-sm font-semibold text-slate-900">
                  遠隔モニタリングを活用し、
                </div>
                <p className="mt-1 text-sm text-slate-700 leading-relaxed">
                  通院負担に配慮しながら、安心して続けられるフォロー体制を整えています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* H2: CPAP継続フォロー（オンライン中心） */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0B1F3A] md:text-2xl">
              CPAP継続フォロー（オンライン中心）
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              当院では、CPAP治療が安定している方を対象に、通院の負担を軽減するオンライン診療を行っています。毎月のデータは医師が遠隔で確認し、3ヶ月に1回の定期受診で経過をフォローします。対面での検査が必要な場合は、適切な医療機関をご案内する安全な体制を整えています。忙しい方でも無理なく治療を継続できる環境を提供します。
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
                  className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5 shadow-sm"
                >
                  <div className="text-sm font-semibold text-[#0B1F3A]">{item.t}</div>
                  <div className="mt-3 text-sm text-slate-700 leading-relaxed">
                    {item.d}
                  </div>
                </div>
              ))}
            </div>

            {/* Eligibility Check (Integrated here) */}
            <div id="eligibility" className="mt-10 border-t border-slate-100 pt-8">
              <h3 className="text-lg font-bold text-[#0B1F3A]">受診対象の確認（目安）</h3>
              <p className="mt-2 text-sm text-slate-700">
                当院は「安定期のCPAP継続フォロー」を中心としています。
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
            </div>
          </div>
        </div>
      </section>

      {/* H2: CPAPの転院をご検討の方へ */}
      <section id="transfer" className="border-t border-slate-100 bg-[#F4F7FA] scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">CPAPの転院をご検討の方へ</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            転院や里帰り等で医療機関の変更をご検討の方も、紹介状の有無に関わらずご相談いただけます。現在の設定やデータを引き継ぎ、スムーズに継続治療へ移行できるようサポートします。フィリップスやレスメドなど、主要な機器メーカーを問わず対応可能ですので、まずはお気軽にお問い合わせください。
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#0B1F3A] mb-3">紹介状について</h3>
              <p className="text-sm leading-relaxed text-slate-700">
                紹介状がなくてもご相談いただける場合があります。これまでの検査結果（PSG・簡易検査）や直近の診療情報（設定圧など）をご用意いただくと、よりスムーズな診療が可能です。
              </p>
            </div>
            
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#0B1F3A] mb-3">事前の準備</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>・現在使用中のCPAP機器情報</li>
                <li>・お薬手帳（お持ちの場合）</li>
                <li>・健康保険証</li>
                <li>・クレジットカード</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-base font-bold text-[#0B1F3A] mb-3">転院の手順</h3>
              <ol className="space-y-2 text-sm text-slate-700 list-decimal pl-4">
                <li>オンライン予約時に「転院希望」を選択</li>
                <li>問診票に現在の状況を入力</li>
                <li>必要資料をアップロード</li>
                <li>オンライン診察で医師と相談</li>
              </ol>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="#reserve"
              className="inline-block rounded-xl bg-[#0B1F3A] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0a2847] transition-colors"
            >
              転院の相談・予約はこちら
            </a>
          </div>
        </div>
      </section>

      {/* H2: オンライン診療でできること・できないこと */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0B1F3A] md:text-2xl">
              オンライン診療でできること・できないこと
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              オンライン診療は利便性が高い一方、触診や聴診、対面での検査ができません。症状が不安定な場合や、緊急性が高いと判断される場合は、安全のために近隣の対面医療機関への受診をお願いすることがあります。患者様の健康を最優先に考え、医学的な判断に基づいた適切な受診方法をご提案します。
            </p>
            
            <div className="mt-6">
              <h3 className="text-sm font-bold text-[#0B1F3A] mb-2">当院で対応が難しいケース</h3>
              <ul className="list-disc space-y-2 pl-5 text-sm text-slate-700">
                <li>CPAP導入直後で状態が不安定な場合</li>
                <li>強い眠気や症状の急な悪化がある場合</li>
                <li>重篤な合併症が疑われる場合</li>
                <li>医師が対面診察が必要と判断した場合</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="border-t border-slate-100 bg-[#F4F7FA] scroll-mt-24">
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
        </div>
      </section>

      {/* H2: 料金と保険診療について */}
      <section id="fees" className="border-t border-slate-100 bg-white scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">料金と保険診療について</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            当院は原則として保険診療を行います。システム利用料などの追加費用は基本的に発生しません。費用の目安は3割負担の方で月額4,300円〜5,000円程度（3ヶ月に1回受診の場合）です。詳細は予約時にご案内します。クレジットカードによるオンライン決済に対応しており、会計の待ち時間もありません。
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

      {/* H2: よくある質問（FAQ） */}
      <section id="faq" className="border-t border-slate-100 bg-[#F4F7FA] scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">よくある質問（FAQ）</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            診療の流れや費用、機器の取り扱いなど、患者様からよくいただくご質問をまとめました。不安な点やご不明な点がある場合は、こちらをご確認いただくか、初診時のオンライン診察にて医師に直接ご相談ください。初めての方でも安心して受診いただけるよう、丁寧な説明を心がけています。
          </p>

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
              {
                q: "対面受診が必要になるのはどんな時ですか？",
                a: "症状が不安定な場合、重篤な合併症が疑われる場合、または医師が対面での検査や診察が必要と判断した場合には、近隣の医療機関をご案内することがあります。",
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
          
          {/* JSON-LD Script */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
          />
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

      {/* Access / Legal */}
      <section id="access" className="border-t border-slate-100 bg-[#F4F7FA] scroll-mt-24">
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

              <div className="mt-4 font-semibold text-slate-900">連絡先</div>
              <div className="mt-1 text-sm text-slate-700">
                TEL：03-XXXX-XXXX（事務連絡のみ）
                <span className="block mt-1">※診療内容のご相談はオンライン診察にて承ります</span>
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

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200/70 pt-8 text-xs text-slate-500">
        <div className="mx-auto max-w-5xl px-6 pb-24 md:pb-8">
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
        </div>
      </footer>

      {/* Mobile Fixed CTA */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden transition-transform duration-300 ${isPastHero ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="mx-auto flex max-w-md gap-3">
          <a
            href="#reserve"
            className="flex-1 rounded-xl bg-[#0B1F3A]/90 backdrop-blur py-3 text-center text-sm font-semibold text-white shadow-sm"
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
