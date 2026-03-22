"use client";

import { useState, createContext, useContext } from "react";
import Link from "next/link";

/* ─── TRANSLATIONS ─── */
type Lang = "vi" | "de";
const LangContext = createContext<Lang>("vi");
function useLang() { return useContext(LangContext); }
function t(vi: string, de: string) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const lang = useLang();
  return lang === "vi" ? vi : de;
}

/* ─── ICONS ─── */
function CheckIcon() {
  return (
    <svg className="w-5 h-5 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
function XIcon() {
  return (
    <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

/* ─── LANGUAGE SWITCHER ─── */
function LangSwitcher({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div className="flex bg-white/90 backdrop-blur rounded-full shadow-sm border border-gray-200 p-1">
      <button
        onClick={() => setLang("vi")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          lang === "vi" ? "bg-blue-800 text-white" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        VN
      </button>
      <button
        onClick={() => setLang("de")}
        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
          lang === "de" ? "bg-blue-800 text-white" : "text-gray-600 hover:text-gray-900"
        }`}
      >
        DE
      </button>
    </div>
  );
}

/* ─── 1. HERO ─── */
function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 text-white">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          {t("Học tiếng Đức online", "Deutsch online lernen")}
          <br />
          <span className="text-yellow-300">
            {t("từ ZERO đến thi ĐẬU", "von ZERO bis zur BESTANDEN Prüfung")}
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
          {t(
            "Giáo viên AI dạy bạn 1-kèm-1, 24/7, bằng tiếng Việt.",
            "KI-Lehrer unterrichtet dich 1-zu-1, 24/7, auf Vietnamesisch."
          )}
          <br />
          {t("Luyện thi Goethe, ÖSD, TestDaF.", "Prüfungsvorbereitung Goethe, ÖSD, TestDaF.")}
        </p>
        <Link
          href="/kurse"
          className="mt-8 inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-lg px-10 py-4 rounded-full transition-colors"
        >
          {t("Bắt đầu học ngay", "Jetzt starten")}
        </Link>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-blue-100">
          <span className="flex items-center gap-2">
            <CheckIcon /> {t("Không cần biết trước tiếng Đức", "Keine Vorkenntnisse nötig")}
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon /> {t("Học mọi lúc, mọi nơi", "Lernen jederzeit, überall")}
          </span>
          <span className="flex items-center gap-2">
            <CheckIcon /> {t("Rẻ hơn 90% so với trường học", "90% günstiger als Sprachschulen")}
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─── 2. PROBLEM ─── */
function Problem() {
  const lang = useLang();
  const problems = lang === "vi"
    ? [
        "Học phí trường tiếng Đức: 15–30 triệu VND / khóa",
        "Phải đến lớp đúng giờ, đúng ngày",
        "Giáo viên dạy cả lớp 20 người — không ai quan tâm riêng bạn",
        "Không hiểu nhưng ngại hỏi trước lớp",
        "Hết khóa rồi vẫn không nói được",
        "Muốn ôn bài nhưng không có ai giúp",
      ]
    : [
        "Sprachschulgebühren: 15–30 Millionen VND / Kurs",
        "Feste Zeiten, feste Tage — kein flexibles Lernen",
        "Ein Lehrer für 20 Schüler — keine individuelle Betreuung",
        "Nicht verstanden, aber Angst vor der Klasse zu fragen",
        "Kurs beendet, aber Prüfung trotzdem nicht bestanden",
        "Lernen will man, aber niemand hilft außerhalb des Unterrichts",
      ];
  return (
    <section className="bg-red-50 py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          {t("Bạn đang gặp vấn đề này?", "Kennst du diese Probleme?")}
        </h2>
        <div className="mt-10 space-y-4">
          {problems.map((p) => (
            <div key={p} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
              <XIcon />
              <p className="text-gray-700">{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 3. LÖSUNG ─── */
function Solution() {
  const lang = useLang();
  const solutions = lang === "vi"
    ? [
        "Giáo viên AI dạy riêng bạn 1-kèm-1",
        "Học bất cứ lúc nào — 5h sáng hay 11h đêm",
        "AI nói tiếng Việt — giải thích mọi thứ bạn không hiểu",
        "Không bao giờ ngại hỏi — AI kiên nhẫn vô hạn",
        "Luyện thi theo đúng format Goethe/ÖSD/TestDaF",
        "Rẻ hơn 90% so với trường truyền thống",
      ]
    : [
        "KI-Lehrer unterrichtet dich persönlich 1-zu-1",
        "Lernen wann du willst — 5 Uhr morgens oder 23 Uhr abends",
        "KI spricht Vietnamesisch — erklärt alles, was du nicht verstehst",
        "Nie Angst zu fragen — die KI ist unendlich geduldig",
        "Prüfungsvorbereitung im exakten Goethe/ÖSD/TestDaF-Format",
        "90% günstiger als traditionelle Sprachschulen",
      ];

  const compare = lang === "vi"
    ? [
        { label: "Học phí A1→B1", school: "45–90 triệu", us: "Rẻ hơn 90%" },
        { label: "Thời gian", school: "Cố định", us: "24/7" },
        { label: "Giáo viên", school: "1:20", us: "1:1 AI" },
        { label: "Ngôn ngữ giảng", school: "Đức/Anh", us: "Tiếng Việt" },
        { label: "Luyện thi", school: "Có/Không", us: "Có (tất cả)" },
        { label: "Luyện nói", school: "Ít (lớp đông)", us: "Không giới hạn" },
        { label: "Kiên nhẫn", school: "Tùy giáo viên", us: "Vô hạn" },
        { label: "Theo dõi tiến độ", school: "Không", us: "Tự động" },
      ]
    : [
        { label: "Kosten A1→B1", school: "45–90 Mio. VND", us: "90% günstiger" },
        { label: "Lernzeit", school: "Feste Zeiten", us: "24/7" },
        { label: "Lehrer", school: "1:20", us: "1:1 KI" },
        { label: "Unterrichtssprache", school: "Deutsch/Englisch", us: "Vietnamesisch" },
        { label: "Prüfungsvorbereitung", school: "Teilweise", us: "Ja (alle Formate)" },
        { label: "Sprechen üben", school: "Wenig (große Klasse)", us: "Unbegrenzt" },
        { label: "Geduld", school: "Lehrerabhängig", us: "Unendlich" },
        { label: "Fortschrittsverfolgung", school: "Nein", us: "Automatisch" },
      ];

  return (
    <section className="bg-emerald-50 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          {t("Deutschschule Vietnam — Giải pháp của bạn", "Deutschschule Vietnam — Deine Lösung")}
        </h2>
        <div className="mt-10 space-y-3">
          {solutions.map((s) => (
            <div key={s} className="flex items-start gap-3">
              <CheckIcon />
              <p className="text-gray-700">{s}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-sm md:text-base rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-3 px-4 text-left"></th>
                <th className="py-3 px-4 text-center">{t("Trường học", "Sprachschule")}</th>
                <th className="py-3 px-4 text-center bg-emerald-600">Deutschschule</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((row, i) => (
                <tr key={row.label} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-3 px-4 font-medium">{row.label}</td>
                  <td className="py-3 px-4 text-center text-red-600">{row.school}</td>
                  <td className="py-3 px-4 text-center text-emerald-700 font-semibold bg-emerald-50">{row.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ─── 4. WIE ES FUNKTIONIERT ─── */
function HowItWorks() {
  const lang = useLang();
  const steps = lang === "vi"
    ? [
        { num: "1", title: "Đăng ký miễn phí", desc: "Tạo tài khoản trong 30 giây", icon: "📝" },
        { num: "2", title: "Làm bài kiểm tra trình độ", desc: "Hoặc bắt đầu từ zero — AI sẽ hướng dẫn", icon: "📋" },
        { num: "3", title: "Học với Thầy Max (AI)", desc: "Mỗi ngày 30 phút — AI dạy riêng bạn", icon: "🤖" },
        { num: "4", title: "Thi đậu!", desc: "Luyện thi → Mô phỏng thi → Thi thật → ĐẬU", icon: "🎓" },
      ]
    : [
        { num: "1", title: "Kostenlos registrieren", desc: "Konto in 30 Sekunden erstellen", icon: "📝" },
        { num: "2", title: "Einstufungstest machen", desc: "Oder bei Null starten — die KI hilft dir", icon: "📋" },
        { num: "3", title: "Mit Thầy Max (KI) lernen", desc: "Täglich 30 Minuten — KI unterrichtet nur dich", icon: "🤖" },
        { num: "4", title: "Prüfung bestehen!", desc: "Üben → Simulation → Echte Prüfung → BESTANDEN", icon: "🎓" },
      ];
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          {t("Chỉ 4 bước đơn giản", "Nur 4 einfache Schritte")}
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.num} className="relative text-center">
              <div className="text-5xl mb-4">{step.icon}</div>
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-800 text-white font-bold text-lg mb-3">
                {step.num}
              </div>
              <h3 className="font-bold text-lg text-gray-900">{step.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{step.desc}</p>
              {i < 3 && (
                <div className="hidden md:block absolute top-12 -right-4 text-3xl text-gray-300">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 5. FEATURES ─── */
function Features() {
  const lang = useLang();
  const features = lang === "vi"
    ? [
        { icon: "🤖", title: "Giáo viên AI — Thầy Max", points: ["Nói tiếng Việt, giải thích bằng tiếng Việt", "Dạy riêng bạn 1-kèm-1", "Kiên nhẫn vô hạn — hỏi bao nhiêu lần cũng được", "Nhớ điểm yếu của bạn và giúp bạn cải thiện", "Có mặt 24/7"] },
        { icon: "🎓", title: "Luyện thi chuyên sâu", points: ["Goethe-Zertifikat A1 đến C2", "ÖSD A1 đến B2", "TestDaF", "Mô phỏng thi thật (đúng thời gian, đúng format)", "AI chấm điểm theo tiêu chuẩn thi thật"] },
        { icon: "🎤", title: "Luyện nói không giới hạn", points: ["Nói chuyện với AI bằng giọng nói", "AI sửa phát âm ngay lập tức", "Luyện các tình huống: bác sĩ, cơ quan, mua sắm...", "So sánh phát âm của bạn với người bản xứ"] },
        { icon: "🌱", title: "Từ zero — không cần biết gì", points: ["Chưa biết gì về tiếng Đức? Hoàn toàn OK!", "Giai đoạn Pre-A1 dạy bạn từ bảng chữ cái", "100% tiếng Việt ở giai đoạn đầu", "Sau 2 tuần bạn đã nói được câu tiếng Đức đầu tiên"] },
        { icon: "📊", title: "Theo dõi tiến độ", points: ["Dashboard hiển thị tiến độ hàng ngày", "Biết điểm mạnh và điểm yếu", "Biết khi nào bạn sẵn sàng thi", "Nhắc nhở học bài tự động"] },
        { icon: "📱", title: "Học offline", points: ["Tải bài học về điện thoại", "Ôn từ vựng offline", "Làm bài tập không cần mạng", "Tự động đồng bộ khi có mạng lại"] },
      ]
    : [
        { icon: "🤖", title: "KI-Lehrer — Thầy Max", points: ["Spricht Vietnamesisch, erklärt auf Vietnamesisch", "Unterrichtet dich persönlich 1-zu-1", "Unendlich geduldig — frag so oft du willst", "Merkt sich deine Schwächen und hilft dir gezielt", "Verfügbar 24/7"] },
        { icon: "🎓", title: "Intensive Prüfungsvorbereitung", points: ["Goethe-Zertifikat A1 bis C2", "ÖSD A1 bis B2", "TestDaF", "Echte Prüfungssimulation (exakte Zeit, exaktes Format)", "KI bewertet nach echten Prüfungskriterien"] },
        { icon: "🎤", title: "Unbegrenztes Sprechen üben", points: ["Mit KI per Stimme sprechen", "KI korrigiert Aussprache sofort", "Situationen üben: Arzt, Behörde, Einkaufen...", "Vergleich deiner Aussprache mit Muttersprachlern"] },
        { icon: "🌱", title: "Ab Null — keine Vorkenntnisse nötig", points: ["Noch nie Deutsch gehört? Kein Problem!", "Pre-A1-Phase: ab dem Alphabet", "100% Vietnamesisch am Anfang", "Nach 2 Wochen sagst du deinen ersten deutschen Satz"] },
        { icon: "📊", title: "Fortschrittsverfolgung", points: ["Dashboard zeigt täglichen Fortschritt", "Stärken und Schwächen erkennen", "Wissen, wann du prüfungsbereit bist", "Automatische Lernerinnerungen"] },
        { icon: "📱", title: "Offline lernen", points: ["Lektionen aufs Handy laden", "Vokabeln offline wiederholen", "Übungen ohne Internet machen", "Automatische Synchronisation bei Verbindung"] },
      ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          {t("Tính năng nổi bật", "Herausragende Funktionen")}
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">{f.title}</h3>
              <ul className="space-y-2">
                {f.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-emerald-500 mt-0.5">&#8226;</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a href="#dangky" className="inline-block bg-blue-800 hover:bg-blue-700 text-white font-bold text-lg px-10 py-4 rounded-full transition-colors">
            {t("Bắt đầu ngay", "Jetzt starten")}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── 6. KURSÜBERSICHT ─── */
function CourseOverview() {
  const lang = useLang();
  const levels = lang === "vi"
    ? [
        { level: "Pre-A1", duration: "2–4 tuần", exam: "—", color: "bg-gray-100 border-gray-300" },
        { level: "A1", duration: "2–3 tháng", exam: "Goethe A1", color: "bg-blue-50 border-blue-300" },
        { level: "A2", duration: "2–3 tháng", exam: "Goethe A2", color: "bg-blue-100 border-blue-400" },
        { level: "B1", duration: "3–4 tháng", exam: "Goethe B1", color: "bg-indigo-50 border-indigo-300" },
        { level: "B2", duration: "4–6 tháng", exam: "Goethe B2", color: "bg-indigo-100 border-indigo-400" },
        { level: "C1/C2", duration: "6–12 tháng", exam: "Goethe C1/C2", color: "bg-purple-50 border-purple-300" },
      ]
    : [
        { level: "Pre-A1", duration: "2–4 Wochen", exam: "—", color: "bg-gray-100 border-gray-300" },
        { level: "A1", duration: "2–3 Monate", exam: "Goethe A1", color: "bg-blue-50 border-blue-300" },
        { level: "A2", duration: "2–3 Monate", exam: "Goethe A2", color: "bg-blue-100 border-blue-400" },
        { level: "B1", duration: "3–4 Monate", exam: "Goethe B1", color: "bg-indigo-50 border-indigo-300" },
        { level: "B2", duration: "4–6 Monate", exam: "Goethe B2", color: "bg-indigo-100 border-indigo-400" },
        { level: "C1/C2", duration: "6–12 Monate", exam: "Goethe C1/C2", color: "bg-purple-50 border-purple-300" },
      ];
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          {t("Lộ trình học từ A1 đến C2", "Lernpfad von A1 bis C2")}
        </h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {levels.map((l, i) => {
            const href = l.level === "Pre-A1" ? "/kurse/a1" : l.level === "C1/C2" ? "/kurse/c1" : `/kurse/${l.level.toLowerCase()}`;
            return (
              <div key={l.level} className="relative">
                <Link href={href} className={`${l.color} border-2 rounded-2xl p-4 text-center block hover:shadow-lg hover:-translate-y-1 transition-all`}>
                  <div className="text-2xl font-extrabold text-gray-900">{l.level}</div>
                  <div className="mt-2 text-sm text-gray-600">{l.duration}</div>
                  <div className="mt-1 text-xs font-medium text-blue-700">{l.exam}</div>
                </Link>
                {i < 5 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 text-xl text-gray-400">→</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── 7. STATISTIKEN ─── */
function Stats() {
  const lang = useLang();
  const stats = lang === "vi"
    ? [
        { num: "2.200+", label: "bài tập" },
        { num: "12.000+", label: "từ vựng" },
        { num: "51", label: "chủ đề ngữ pháp" },
        { num: "6", label: "cấp độ A1–C2" },
      ]
    : [
        { num: "2.200+", label: "Übungen" },
        { num: "12.000+", label: "Vokabeln" },
        { num: "51", label: "Grammatikthemen" },
        { num: "6", label: "Stufen A1–C2" },
      ];
  return (
    <section className="bg-blue-800 text-white py-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          {t("Con số nói lên tất cả", "Die Zahlen sprechen für sich")}
        </h2>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl md:text-5xl font-extrabold text-yellow-300">{s.num}</div>
              <div className="mt-2 text-blue-200">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 8. PREISE ─── */
function Pricing() {
  const lang = useLang();
  const plans = lang === "vi"
    ? [
        { name: "Cơ bản", price: "Miễn phí", highlight: false, features: [{ text: "Tất cả bài học", ok: true }, { text: "Bài tập cơ bản", ok: true }, { text: "Từ vựng", ok: true }, { text: "KI-Chat", ok: false }, { text: "Luyện nói", ok: false }, { text: "Mô phỏng thi", ok: false }] },
        { name: "Phổ biến", price: "Sắp công bố", highlight: true, features: [{ text: "Tất cả bài học", ok: true }, { text: "Bài tập nâng cao", ok: true }, { text: "Từ vựng", ok: true }, { text: "KI-Chat", ok: true }, { text: "Luyện nói", ok: true }, { text: "Mô phỏng thi", ok: true }] },
        { name: "Premium", price: "Sắp công bố", highlight: false, features: [{ text: "Tất cả bài học", ok: true }, { text: "Bài tập nâng cao", ok: true }, { text: "Từ vựng", ok: true }, { text: "KI-Chat VIP", ok: true }, { text: "Luyện nói", ok: true }, { text: "Mô phỏng thi + PDF", ok: true }] },
      ]
    : [
        { name: "Basis", price: "Kostenlos", highlight: false, features: [{ text: "Alle Lektionen", ok: true }, { text: "Grundübungen", ok: true }, { text: "Vokabeln", ok: true }, { text: "KI-Chat", ok: false }, { text: "Sprechen üben", ok: false }, { text: "Prüfungssimulation", ok: false }] },
        { name: "Beliebt", price: "Kommt bald", highlight: true, features: [{ text: "Alle Lektionen", ok: true }, { text: "Erweiterte Übungen", ok: true }, { text: "Vokabeln", ok: true }, { text: "KI-Chat", ok: true }, { text: "Sprechen üben", ok: true }, { text: "Prüfungssimulation", ok: true }] },
        { name: "Premium", price: "Kommt bald", highlight: false, features: [{ text: "Alle Lektionen", ok: true }, { text: "Erweiterte Übungen", ok: true }, { text: "Vokabeln", ok: true }, { text: "KI-Chat VIP", ok: true }, { text: "Sprechen üben", ok: true }, { text: "Simulation + PDF", ok: true }] },
      ];
  return (
    <section className="bg-slate-50 py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          {t("Chọn gói phù hợp với bạn", "Wähle deinen Plan")}
        </h2>
        <p className="mt-4 text-center text-gray-500">
          {t("7 ngày dùng thử miễn phí cho tất cả các gói", "7 Tage kostenlos testen für alle Pläne")}
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-6 ${plan.highlight ? "bg-blue-800 text-white ring-4 ring-blue-400 scale-105" : "bg-white text-gray-900 shadow-sm"}`}>
              {plan.highlight && (
                <div className="text-xs font-bold text-yellow-300 uppercase mb-2">
                  {t("Được chọn nhiều nhất", "Am beliebtesten")}
                </div>
              )}
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="mt-2 text-2xl font-extrabold">{plan.price}</div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-center gap-2 text-sm">
                    {f.ok ? <CheckIcon /> : <XIcon />}
                    <span className={f.ok ? "" : "opacity-50"}>{f.text}</span>
                  </li>
                ))}
              </ul>
              <a href="#dangky" className={`mt-6 block text-center py-3 rounded-full font-bold transition-colors ${plan.highlight ? "bg-yellow-400 text-blue-900 hover:bg-yellow-300" : "bg-blue-800 text-white hover:bg-blue-700"}`}>
                {t("Đăng ký", "Registrieren")}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 9. FAQ ─── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const lang = useLang();
  const faqs = lang === "vi"
    ? [
        { q: "Tôi chưa biết gì về tiếng Đức, có học được không?", a: "Hoàn toàn được! Chúng tôi có giai đoạn Pre-A1 dành riêng cho người mới bắt đầu. 100% tiếng Việt ở giai đoạn đầu." },
        { q: "AI có thay thế được giáo viên thật không?", a: "AI của chúng tôi được thiết kế đặc biệt cho người Việt học tiếng Đức. AI kiên nhẫn hơn, có mặt 24/7, và nhớ mọi điểm yếu của bạn." },
        { q: "Tôi có thể thi đậu chỉ với website này không?", a: "Có! Website của chúng tôi bao gồm tất cả nội dung cần thiết cho kỳ thi Goethe, ÖSD, và TestDaF." },
        { q: "Tôi cần bao lâu để đạt B1?", a: "Trung bình 6–10 tháng nếu học 30 phút mỗi ngày. Tốc độ phụ thuộc vào mỗi người." },
        { q: "Có thể học offline không?", a: "Có! Bạn có thể tải bài học và từ vựng về điện thoại để học offline." },
        { q: "Phương thức thanh toán nào?", a: "Chúng tôi hỗ trợ MoMo, ZaloPay, VNPay, chuyển khoản ngân hàng, và thẻ quốc tế." },
        { q: "Nếu không hài lòng?", a: "Bạn có thể hủy bất cứ lúc nào. Có chính sách hoàn tiền trong 14 ngày." },
        { q: "Dữ liệu của tôi có an toàn không?", a: "Có. Chúng tôi tuân thủ GDPR và không chia sẻ dữ liệu với bên thứ ba." },
      ]
    : [
        { q: "Ich kann kein Deutsch — kann ich trotzdem lernen?", a: "Absolut! Wir haben eine Pre-A1-Phase speziell für absolute Anfänger. Am Anfang ist alles auf Vietnamesisch." },
        { q: "Kann KI einen echten Lehrer ersetzen?", a: "Unsere KI ist speziell für Vietnamesen entwickelt, die Deutsch lernen. Sie ist geduldiger, 24/7 verfügbar und merkt sich alle Schwächen." },
        { q: "Kann ich nur mit dieser Website die Prüfung bestehen?", a: "Ja! Unsere Website enthält alle Inhalte für Goethe-, ÖSD- und TestDaF-Prüfungen." },
        { q: "Wie lange brauche ich bis B1?", a: "Durchschnittlich 6–10 Monate bei 30 Minuten täglich. Das Tempo hängt von jedem Einzelnen ab." },
        { q: "Kann ich offline lernen?", a: "Ja! Du kannst Lektionen und Vokabeln aufs Handy laden und offline üben." },
        { q: "Welche Zahlungsmethoden?", a: "Wir unterstützen MoMo, ZaloPay, VNPay, Banküberweisung und internationale Kreditkarten." },
        { q: "Was wenn ich nicht zufrieden bin?", a: "Du kannst jederzeit kündigen. Es gibt eine 14-Tage-Geld-zurück-Garantie." },
        { q: "Sind meine Daten sicher?", a: "Ja. Wir sind DSGVO-konform und teilen keine Daten mit Dritten." },
      ];
  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
          {t("Câu hỏi thường gặp", "Häufig gestellte Fragen")}
        </h2>
        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left px-5 py-4 flex items-center justify-between font-medium text-gray-900 hover:bg-gray-50 transition-colors"
              >
                {faq.q}
                <span className="ml-4 text-xl text-gray-400">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="px-5 pb-4 text-gray-600">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 10. FINALER CTA ─── */
function FinalCTA() {
  return (
    <section id="dangky" className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          {t("Bạn đã sẵn sàng học tiếng Đức chưa?", "Bist du bereit, Deutsch zu lernen?")}
        </h2>
        <p className="mt-4 text-lg text-blue-200">
          {t(
            "Hàng nghìn người Việt đã bắt đầu hành trình của họ.",
            "Tausende Vietnamesen haben ihre Reise bereits begonnen."
          )}
          <br />
          {t("Bây giờ là lượt bạn.", "Jetzt bist du dran.")}
        </p>
        <Link href="/kurse" className="mt-8 inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-lg px-10 py-4 rounded-full transition-colors">
          {t("Bắt đầu học miễn phí", "Kostenlos starten")}
        </Link>
        <p className="mt-4 text-sm text-blue-300">
          {t("Không cần thẻ tín dụng. Hủy bất cứ lúc nào.", "Keine Kreditkarte nötig. Jederzeit kündbar.")}
        </p>
      </div>
    </section>
  );
}

/* ─── 11. FOOTER ─── */
function Footer() {
  const lang = useLang();
  const links = lang === "vi"
    ? ["Về chúng tôi", "Khóa học", "Luyện thi", "Giá", "FAQ", "Liên hệ", "Hỗ trợ"]
    : ["Über uns", "Kurse", "Prüfungen", "Preise", "FAQ", "Kontakt", "Support"];
  const legal = lang === "vi"
    ? ["Điều khoản", "Chính sách bảo mật", "Impressum"]
    : ["AGB", "Datenschutz", "Impressum"];
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="text-xl font-bold text-white">Deutschschule Vietnam</div>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs">
          {legal.map((l) => (
            <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
          ))}
        </div>
        <div className="mt-8 text-xs text-gray-500">
          &copy; 2026 Deutschschule Vietnam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ─── LANDING NAV ─── */
function LandingNav({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <span className="flex items-center gap-2 font-bold text-xl text-blue-800">
          <span className="text-2xl">🇩🇪</span>
          <span className="hidden sm:inline">Deutschschule</span>
        </span>
        <div className="flex items-center gap-1 sm:gap-4 text-sm font-medium">
          <Link href="/kurse" className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700">
            {lang === "vi" ? "Khóa học" : "Kurse"}
          </Link>
          <Link href="/vokabeln/a1" className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hidden sm:block">
            {lang === "vi" ? "Từ vựng" : "Vokabeln"}
          </Link>
          <Link href="/grammatik/a1" className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hidden sm:block">
            {lang === "vi" ? "Ngữ pháp" : "Grammatik"}
          </Link>
          <Link href="/uebungen/a1" className="px-3 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hidden sm:block">
            {lang === "vi" ? "Bài tập" : "Übungen"}
          </Link>
          <LangSwitcher lang={lang} setLang={setLang} />
        </div>
      </div>
    </nav>
  );
}

/* ─── MAIN PAGE ─── */
export default function Home() {
  const [lang, setLang] = useState<Lang>("vi");
  return (
    <LangContext.Provider value={lang}>
      <LandingNav lang={lang} setLang={setLang} />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Features />
      <CourseOverview />
      <Stats />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </LangContext.Provider>
  );
}
