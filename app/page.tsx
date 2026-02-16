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

  // Medical Organization Data for Structured Data (JSON-LD)
  const medicalOrgStructuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "SAS CPAP オンラインクリニック",
    "medicalSpecialty": [
      "SleepMedicine",
      "Otolaryngologic"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "東京都",
      "addressLocality": "渋谷区",
      "streetAddress": "代々木2丁目23-1 ニューステートメナー1226"
    },
    "physician": {
      "@type": "Physician",
      "name": "廣瀬 有紀子"
    }
  };

  // FAQ Data for Structured Data (JSON-LD)
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "CPAP転院に紹介状は必要ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "紹介状がなくてもご相談いただける場合があります。これまでの検査結果や診療情報をお持ちいただくと、よりスムーズな診療が可能です。"
        }
      },
      {
        "@type": "Question",
        "name": "今の機器のまま使える？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、多くのメーカーの機器に対応しておりますので、現在の機器を継続してご使用いただける場合がほとんどです。予約時にメーカー名や機種名をお知らせください。"
        }
      },
      {
        "@type": "Question",
        "name": "オンラインだけで大丈夫？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "基本的にはオンラインで完結しますが、症状が不安定な場合や、医師が対面での検査が必要と判断した場合には、近隣の医療機関をご案内することがあります。"
        }
      },
      {
        "@type": "Question",
        "name": "眠気が強い場合は？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CPAP治療中でも眠気が強い場合は、治療圧の調整や他の睡眠障害の合併が考えられます。オンライン診察にて状況を詳細に伺い、適切な対応をご提案します。"
        }
      },
      {
        "@type": "Question",
        "name": "保険診療ですか？",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "はい、当院の診療は原則として保険診療となります。受診時には必ず健康保険証（またはマイナ保険証）をご用意ください。"
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

              {/* Specialty Outpatient Tag */}
              <div className="mt-4 inline-flex rounded-full bg-[#0B1F3A]/5 px-3 py-1 text-xs font-semibold text-[#0B1F3A]">
                睡眠時無呼吸症候群（SAS）継続フォロー専門外来
              </div>

              <ul className="mt-6 space-y-2 text-sm sm:text-base text-slate-700 text-left max-w-fit mx-auto md:mx-0">
                <li>✓ すでにCPAP治療を受けている方</li>
                <li>✓ 症状が安定しており、定期フォローが中心の方</li>
                <li>✓ 通院負担を減らしたい方</li>
              </ul>

              {/* Mobile optimized mini badges */}
              <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-x-3 gap-y-2 text-xs font-medium text-[#0B1F3A]">
                <span className="flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1">
                  ✓ 医師が遠隔データ確認
                </span>
                <span className="flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1">
                  ✓ 初回1ヶ月フォロー
                </span>
                <span className="flex items-center gap-1 rounded-md bg-blue-50 px-2 py-1">
                  ✓ 必要時は対面医療機関へ連携
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

              {/* SEO Internal Links (New Pages) */}
              <div className="mt-8 flex flex-col gap-3 text-xs text-slate-500 md:flex-row md:gap-6 md:justify-start border-t border-slate-200/50 pt-4">
                <a href="/cpap-transfer" className="hover:text-slate-800 underline underline-offset-4 flex items-center gap-1">
                  CPAP転院について詳しく見る <span className="text-slate-400">→</span>
                </a>
                <a href="/cpap-follow" className="hover:text-slate-800 underline underline-offset-4 flex items-center gap-1">
                  CPAP継続フォローの仕組み <span className="text-slate-400">→</span>
                </a>
                <a href="/online-cpap" className="hover:text-slate-800 underline underline-offset-4 flex items-center gap-1">
                  オンライン診療の対象について <span className="text-slate-400">→</span>
                </a>
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

      {/* Clinical Policy Statement */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-bold text-[#0B1F3A] md:text-2xl">
              当院の診療方針（継続治療を安全に続けるために）
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              当院は「CPAP治療を継続している方の定期フォロー」を中心に、オンライン診療の利便性と医療安全性の両立を重視しています。
              オンライン診療で適切な評価が難しいと医師が判断した場合は、対面診療や地域医療機関の受診をご案内します。
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                { t:"安全性優先", d:"オンラインで完結することより、医学的に安全な判断を優先します。" },
                { t:"継続性重視", d:"通院負担に配慮し、無理なく続けられるフォローを目指します。" },
                { t:"透明性", d:"費用・流れ・必要書類は事前に目安を提示し、同意の上で進めます。" },
              ].map((x,i)=>(
                <div key={i} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold text-[#0B1F3A]">{x.t}</div>
                  <p className="mt-3 text-sm text-slate-700 leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-500">
              ※本ページは一般的な情報提供であり、診断・治療効果を保証するものではありません。
            </p>
          </div>
        </div>
      </section>

      {/* H2: CPAP継続フォローとは（SEO強化・医療説明） */}
      <section className="bg-white border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">
            CPAP継続フォローとは
          </h2>
          <p className="mt-4 text-sm text-slate-700 leading-relaxed">
            CPAP治療では、使用状況の確認や副作用の評価を継続的に行うことが重要です。
            当院では遠隔モニタリングを活用し、オンライン中心でも安全性に配慮した管理を行っています。
          </p>
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

      {/* H2: 医療体制について */}
      <section className="border-t border-slate-100 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">医療体制について</h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
            当院では、オンライン診療であっても対面診療と同等の医療安全性を確保するため、以下のような体制を整えています。
            レビューや口コミに頼るのではなく、仕組みとしての「医療の質」を重視しています。
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-50 p-2 rounded-lg text-[#0B1F3A]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#0B1F3A]">医師が遠隔データ確認</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                毎月のCPAP使用状況やAHI（無呼吸低呼吸指数）のデータを、医師が必ず確認しています。
                異常値が見られた場合は、定期受診を待たずにご連絡し、早期対応を行います。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-50 p-2 rounded-lg text-[#0B1F3A]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0h18M5.25 12h13.5h-13.5zm1.5 8.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#0B1F3A]">初回1ヶ月フォロー</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                初診から1ヶ月後に必ず再診を行い、治療の適合性や体調変化をチェックします。
                導入初期や転院直後の不安を解消し、軌道に乗るまで丁寧にサポートします。
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-50 p-2 rounded-lg text-[#0B1F3A]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <h3 className="font-bold text-[#0B1F3A]">必要時は対面案内</h3>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed">
                オンライン診療の限界を理解し、無理な継続は行いません。
                症状が不安定な場合や詳細な検査が必要な場合は、速やかに適切な対面医療機関をご案内します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Trust Block */}
      <section className="border-t border-slate-100 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">
            CPAP継続フォロー専門外来としての体制
          </h2>

          <p className="mt-4 text-sm text-slate-700 leading-relaxed">
            当院では、睡眠時無呼吸症候群（SAS）の継続治療に特化し、
            医師による遠隔データ確認と医学的判断に基づいたフォロー体制を整えています。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                t: "遠隔モニタリング管理",
                d: "CPAP使用状況を医師が定期的に確認し、必要に応じて調整を行います。"
              },
              {
                t: "医学的判断を優先",
                d: "オンライン診療でも対面診療が必要と判断した場合は適切にご案内します。"
              },
              {
                t: "地域医療との連携",
                d: "必要に応じて対面医療機関への受診を提案し、安全性に配慮します。"
              }
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-[#0B1F3A]">{item.t}</div>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantitative Monitoring (New) */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">確認する主な指標（例）</h2>
          <p className="mt-3 text-sm text-slate-700 leading-relaxed">
            CPAP継続管理では、使用状況や自覚症状など複数の情報を総合して判断します。
            当院では、以下のような項目を確認しながらフォローを行います。
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { t: "使用状況", d: "使用日数・使用時間の目安など" },
              { t: "呼吸イベント指標", d: "AHI 等（機器や環境により取得可否は異なります）" },
              { t: "自覚症状", d: "眠気・睡眠の質・日中の支障など" },
              { t: "マスク関連", d: "装着感・リーク・皮膚トラブル等" },
              { t: "安全性", d: "症状変化がある場合は対面受診も含めて判断" },
              { t: "継続方針", d: "1ヶ月フォロー後、状態により定期管理へ" },
            ].map((x, i) => (
              <div key={i} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <div className="text-sm font-semibold text-[#0B1F3A]">{x.t}</div>
                <p className="mt-2 text-sm text-slate-700 leading-relaxed">{x.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-slate-500">
            ※上記は一例です。取得できるデータや判断材料は、機器・状況により異なります。
          </p>
        </div>
      </section>

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
              継続フォローの予約はこちら
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

      {/* Medical Safety Policy */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-xl font-bold text-[#0B1F3A]">
            医療安全への取り組み
          </h2>

          <ul className="mt-5 space-y-3 text-sm text-slate-700">
            <li>・医師がCPAPデータを定期的に確認します</li>
            <li>・運転業務など、眠気が重大な影響を及ぼし得る職種の方は、状態に応じてフォロー間隔を短く設定する場合があります</li>
            <li>・対面診療が必要と判断した場合は速やかにご案内します</li>
            <li>・医療広告ガイドラインに基づき誇張表現は行いません</li>
          </ul>
        </div>
      </section>

      {/* Operations Policy */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-xl font-bold text-[#0B1F3A]">診療の運用方針（ポリシー）</h2>
          <div className="mt-6 space-y-6">
            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="text-sm font-bold text-[#0B1F3A]">診療の独立性と中立性</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                当院は、特定の機器メーカーや代理店に依存しない中立的な立場を堅持します。
                医学的適応に基づき、患者様にとって最適な治療方針を提案します。
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="text-sm font-bold text-[#0B1F3A]">データ管理とプライバシー</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                オンライン診療における通信の安全性（セキュリティ）を重視し、
                患者様の個人情報および診療データは厳格な管理下で取り扱います。
              </p>
            </div>
            <div className="rounded-xl bg-slate-50 p-6">
              <h3 className="text-sm font-bold text-[#0B1F3A]">継続的な質向上</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                医学的知見の更新や診療プロセスの見直しを定期的に行い、
                安全で質の高いオンライン診療の提供に努めます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advertising Compliance */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-xl font-bold text-[#0B1F3A]">医療広告に関する表現について</h2>
          <p className="mt-4 text-sm text-slate-700 leading-relaxed">
            当院のウェブサイトは、医療法および医療広告ガイドラインを遵守し、
            適切な情報提供に努めています。
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
            <li>
              <span className="font-semibold text-[#0B1F3A]">比較優良広告の禁止：</span>
              「No.1」「最高」等の比較表現は使用しません。
            </li>
            <li>
              <span className="font-semibold text-[#0B1F3A]">誇大広告の禁止：</span>
              事実と異なる、または誤認を与える表現は行いません。
            </li>
            <li>
              <span className="font-semibold text-[#0B1F3A]">体験談の不掲載：</span>
              主観的な体験談や口コミによる誘導は行いません。
            </li>
            <li>
              <span className="font-semibold text-[#0B1F3A]">費用等の明示：</span>
              自由診療等の費用やリスクについても透明性を保ちます（当院は原則保険診療です）。
            </li>
          </ul>
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

      {/* Transparency Metrics */}
      <section className="border-t border-slate-100 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-6 py-14">
          <h2 className="text-2xl font-bold text-[#0B1F3A]">診療の目安（透明性）</h2>
          <p className="mt-3 text-sm text-slate-700">
            受診前にイメージが持てるよう、目安を提示します（個別状況により変動します）。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              { t:"診察時間の目安", v:"約10分", s:"※内容により前後します" },
              { t:"フォロー間隔の目安", v:"初回1ヶ月 → 安定後3ヶ月", s:"※医師が判断します" },
              { t:"必要アップロード（最小）", v:"保険情報＋任意書類", s:"※詳細は予約画面で案内" },
            ].map((x,i)=>(
              <div key={i} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="text-sm font-semibold text-[#0B1F3A]">{x.t}</div>
                <div className="mt-3 text-2xl font-bold text-slate-900">{x.v}</div>
                <div className="mt-2 text-xs text-slate-500">{x.s}</div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-xs text-slate-500">
            ※オンライン診療料等の算定可否や費用は、症状・診療内容により異なります。診療前に目安をご案内し同意のうえで進めます。
          </p>
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
                q:"運転の多い職種（業務運転など）でも受診できますか？",
                a:"職種や安全配慮の観点から、フォロー間隔が短くなる場合があります。具体的な間隔や対応可否は、診察時に医師が状況を確認して判断します。"
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalOrgStructuredData) }}
          />
        </div>
      </section>

      {/* Pre-Reservation Safety Block */}
      <section className="border-t border-slate-100 bg-[#F8FAFC]">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-[#0B1F3A] md:text-xl">
              ご予約前にご確認ください
            </h2>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  t:"現在の機器のまま相談可能",
                  d:"多くの場合、現在のCPAP機器のままご相談いただけます（個別状況によります）。",
                },
                {
                  t:"医師が遠隔データを確認",
                  d:"オンラインでも医師が状態を確認し、必要に応じて対面受診をご案内します。",
                },
                {
                  t:"いきなり転院を急がせません",
                  d:"初回は状況確認が中心です。転院手続きは医師判断の後でも問題ありません。",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-slate-100 bg-white p-5"
                >
                  <div className="text-sm font-semibold text-[#0B1F3A]">
                    {item.t}
                  </div>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                    {item.d}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-6 text-xs text-slate-500">
              ※診療内容や適応は医師が診察のうえ判断します。オンライン診療が適さない場合は、対面医療機関をご案内することがあります。
            </p>
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

      {/* 医師監修について */}
      <section className="bg-[#F8FAFC] border-t border-slate-100">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <h2 className="text-xl font-bold text-[#0B1F3A]">医師監修について</h2>
          <p className="mt-4 text-sm text-slate-700 leading-relaxed">
            本サイトの医療情報は、耳鼻咽喉科専門医が監修し、
            CPAP治療の継続管理に関する一般的な情報提供を目的としています。
            個別の診断や治療判断はオンライン診療にて行います。
          </p>
        </div>
      </section>

      {/* Access / Legal */}
      <section id="access" className="border-t border-slate-100 bg-[#F4F7FA] scroll-mt-24">
        <div className="mx-auto max-w-5xl px-6 py-14">
          
          {/* Trust Without Reviews */}
          <section className="mb-14 border-b border-slate-200 pb-14">
            <h2 className="text-2xl font-bold text-[#0B1F3A]">安心のための取り組み</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                { t:"医師が診療を担当", d:"医療判断は医師が行い、必要時は対面医療機関をご案内します。" },
                { t:"適応外を明示", d:"オンラインに適さないケースは受診をご案内しません（安全性優先）。" },
                { t:"費用の目安提示", d:"診療前に費用の目安を案内し、同意の上で進めます。" },
                { t:"書類負担を最小化", d:"必須アップロードは最小限とし、離脱を防ぎつつ安全に運用します。" },
              ].map((x,i)=>(
                <div key={i} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold text-[#0B1F3A]">{x.t}</div>
                  <p className="mt-2 text-sm text-slate-700 leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500">
              ※当院は広告目的の口コミ依頼は行いません。医療の質は個別状況により異なります。
            </p>
          </section>

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

      {/* Trust Signal / Transparency */}
      <section className="border-t border-slate-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-[#0B1F3A]">
                医療情報の透明性と信頼性
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
                当院は、適切な医療提供と透明性の確保に努めています。<br />
                ・適応外の治療や、医学的根拠の乏しい治療は行いません。<br />
                ・診療範囲（CPAP継続管理）を明確にし、専門外の領域については適切な医療機関へ紹介します。<br />
                ・医師法、医療法、および関連法規を遵守した運営を行っています。
              </p>
            </div>
            <div className="flex gap-4">
              <div className="rounded-lg bg-slate-50 px-3 py-2 text-center">
                <div className="text-[10px] font-semibold text-slate-400">Information</div>
                <div className="text-xs font-bold text-[#0B1F3A]">医療情報提供</div>
              </div>
              <div className="rounded-lg bg-slate-50 px-3 py-2 text-center">
                <div className="text-[10px] font-semibold text-slate-400">Compliance</div>
                <div className="text-xs font-bold text-[#0B1F3A]">法令遵守</div>
              </div>
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
