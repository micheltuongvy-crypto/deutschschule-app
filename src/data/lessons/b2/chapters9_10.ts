// B2 Chapters 9-10: Bildung & Erziehungswissenschaft, Zukunftstechnologien
// Complete lesson content for Vietnamese learners

import type { ContentBlock, Lesson } from "../a1/chapters1_3";

export const b2LessonsCh9_10: Lesson[] = [
  // ============================================================
  // CHAPTER 9: Bildung & Erziehungswissenschaft
  // ============================================================

  // --- Chapter 9, Lesson 1: Bildungssysteme vergleichen (D-A-CH vs Vietnam) ---
  {
    id: "b2-ch9-l1",
    chapterId: 9,
    lessonNumber: 1,
    title: "Bildungssysteme vergleichen",
    titleVi: "So sánh hệ thống giáo dục",
    type: "Einführung",
    objectives: [
      "So sánh được hệ thống giáo dục D-A-CH (Đức, Áo, Thụy Sĩ) với Việt Nam",
      "Nắm được từ vựng chuyên ngành giáo dục ở trình độ B2",
      "Thảo luận về ưu và nhược điểm của từng hệ thống giáo dục"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das Bildungssystem in D-A-CH und Vietnam",
        titleVi: "Hệ thống giáo dục ở D-A-CH và Việt Nam",
        textDe: "Das Bildungssystem in den deutschsprachigen Ländern unterscheidet sich grundlegend vom vietnamesischen System. In Deutschland werden Schüler nach der Grundschule (4. Klasse) in verschiedene Schulformen aufgeteilt: Hauptschule, Realschule und Gymnasium. Dieses dreigliedrige Schulsystem ist international umstritten, da die frühe Selektion die Chancengleichheit beeinträchtigen kann. In Österreich und der Schweiz gibt es ähnliche, aber nicht identische Strukturen. In Vietnam hingegen durchlaufen alle Schüler ein einheitliches System mit Grundschule (Tiểu học), Mittelschule (THCS) und Oberschule (THPT), gefolgt von einer zentralen Aufnahmeprüfung für die Universität.",
        textVi: "Hệ thống giáo dục ở các nước nói tiếng Đức khác biệt cơ bản so với hệ thống Việt Nam. Ở Đức, học sinh sau bậc tiểu học (lớp 4) được phân luồng vào các loại trường khác nhau: Hauptschule (trường phổ thông cơ bản), Realschule (trường thực hành) và Gymnasium (trường trung học phổ thông chuyên sâu). Hệ thống ba nhánh này gây tranh cãi quốc tế, vì việc phân loại sớm có thể ảnh hưởng đến bình đẳng cơ hội. Ở Áo và Thụy Sĩ có cấu trúc tương tự nhưng không hoàn toàn giống. Ở Việt Nam, tất cả học sinh đều đi qua hệ thống thống nhất: Tiểu học, THCS và THPT, sau đó là kỳ thi tuyển sinh đại học tập trung."
      },
      {
        type: "vocabulary",
        titleDe: "Bildungsbegriffe",
        titleVi: "Thuật ngữ giáo dục",
        words: [
          { de: "Bildungssystem", vi: "hệ thống giáo dục", article: "das" },
          { de: "Grundschule", vi: "trường tiểu học", article: "die" },
          { de: "Gymnasium", vi: "trường trung học phổ thông (hướng đại học)", article: "das" },
          { de: "Gesamtschule", vi: "trường tổng hợp", article: "die" },
          { de: "Berufsausbildung", vi: "đào tạo nghề", article: "die" },
          { de: "Duales System", vi: "hệ thống đào tạo kép (vừa học vừa làm)", article: "das" },
          { de: "Chancengleichheit", vi: "bình đẳng cơ hội", article: "die" },
          { de: "Schulpflicht", vi: "nghĩa vụ đi học", article: "die" },
          { de: "Abitur", vi: "kỳ thi tốt nghiệp phổ thông (để vào đại học)", article: "das" },
          { de: "Matura", vi: "kỳ thi tốt nghiệp phổ thông (Áo/Thụy Sĩ)", article: "die" },
          { de: "Lehrplan", vi: "chương trình giảng dạy", article: "der" },
          { de: "Selektion", vi: "sự phân loại/chọn lọc", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Diskussion über Bildungssysteme",
        titleVi: "Thảo luận về hệ thống giáo dục",
        lines: [
          { speaker: "Linh", de: "Was mich am deutschen Bildungssystem am meisten überrascht hat, ist die frühe Selektion nach der vierten Klasse.", vi: "Điều làm mình ngạc nhiên nhất về hệ thống giáo dục Đức là việc phân loại sớm sau lớp 4." },
          { speaker: "Stefan", de: "Ja, das wird hier auch kontrovers diskutiert. Viele Experten halten die frühe Trennung für problematisch.", vi: "Ừ, điều đó cũng được thảo luận gây tranh cãi ở đây. Nhiều chuyên gia cho rằng việc phân tách sớm là có vấn đề." },
          { speaker: "Linh", de: "In Vietnam haben wir zwar ein einheitliches System, aber der Leistungsdruck durch die Aufnahmeprüfungen ist enorm.", vi: "Ở Việt Nam tuy có hệ thống thống nhất, nhưng áp lực thành tích qua các kỳ thi tuyển sinh là rất lớn." },
          { speaker: "Stefan", de: "Dafür finde ich das duale Ausbildungssystem in Deutschland wirklich vorbildlich. Man lernt gleichzeitig in der Berufsschule und im Betrieb.", vi: "Nhưng bù lại, mình thấy hệ thống đào tạo kép ở Đức thực sự đáng noi theo. Người ta vừa học ở trường nghề vừa thực hành tại doanh nghiệp." },
          { speaker: "Linh", de: "Das stimmt. In Vietnam fehlt diese Verbindung zwischen Theorie und Praxis noch weitgehend.", vi: "Đúng vậy. Ở Việt Nam vẫn còn thiếu sự kết nối giữa lý thuyết và thực hành." },
          { speaker: "Stefan", de: "Andererseits bewundere ich den Fleiß und die Disziplin vietnamesischer Schüler. Das könnte hier manchmal nicht schaden.", vi: "Mặt khác, mình ngưỡng mộ sự chăm chỉ và kỷ luật của học sinh Việt Nam. Điều đó đôi khi cũng không thừa ở đây." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Vergleiche und Gegenüberstellungen formulieren",
        titleVi: "Diễn đạt so sánh và đối chiếu",
        rule: "Im Gegensatz zu + Dat / Während + Nebensatz / Verglichen mit + Dat / Einerseits ... andererseits / Zwar ... aber ... / Im Vergleich zu + Dat",
        ruleVi: "Im Gegensatz zu + Dat (Ngược lại với...) / Während + mệnh đề phụ (Trong khi...) / Verglichen mit + Dat (So với...) / Einerseits ... andererseits (Một mặt... mặt khác) / Zwar ... aber ... (Tuy... nhưng...) / Im Vergleich zu + Dat (So sánh với...). Đây là các cấu trúc quan trọng để so sánh và đối chiếu ở trình độ B2.",
        examples: [
          { de: "Im Gegensatz zum deutschen System gibt es in Vietnam keine frühe Selektion.", vi: "Ngược lại với hệ thống Đức, ở Việt Nam không có phân loại sớm." },
          { de: "Während in Deutschland die Berufsausbildung hoch angesehen ist, bevorzugen in Vietnam viele ein Studium.", vi: "Trong khi ở Đức đào tạo nghề được đánh giá cao, thì ở Việt Nam nhiều người ưa thích học đại học." },
          { de: "Das System ist zwar einheitlich, aber der Leistungsdruck ist enorm.", vi: "Hệ thống tuy thống nhất, nhưng áp lực thành tích rất lớn." },
          { de: "Verglichen mit Österreich hat die Schweiz ein dezentraleres Bildungssystem.", vi: "So với Áo, Thụy Sĩ có hệ thống giáo dục phi tập trung hơn." }
        ]
      },
      {
        type: "practice",
        titleDe: "Vergleiche die Bildungssysteme",
        titleVi: "Hãy so sánh các hệ thống giáo dục",
        instruction: "Schreibe einen kurzen Text (150–200 Wörter), in dem du das Bildungssystem in Vietnam mit dem in Deutschland vergleichst. Benutze mindestens vier der folgenden Strukturen: Im Gegensatz zu, Während, Verglichen mit, Einerseits ... andererseits, Zwar ... aber, Im Vergleich zu.",
        instructionVi: "Viết một đoạn văn ngắn (150–200 từ), trong đó bạn so sánh hệ thống giáo dục ở Việt Nam với Đức. Sử dụng ít nhất bốn trong các cấu trúc sau: Im Gegensatz zu, Während, Verglichen mit, Einerseits ... andererseits, Zwar ... aber, Im Vergleich zu."
      }
    ]
  },

  // --- Chapter 9, Lesson 2: Lebenslanges Lernen ---
  {
    id: "b2-ch9-l2",
    chapterId: 9,
    lessonNumber: 2,
    title: "Lebenslanges Lernen",
    titleVi: "Học tập suốt đời",
    type: "Grammatik",
    objectives: [
      "Hiểu và thảo luận về khái niệm học tập suốt đời (Lebenslanges Lernen)",
      "Sử dụng các cấu trúc phức tạp để trình bày quan điểm",
      "Nắm được từ vựng về đào tạo bổ sung và phát triển nghề nghiệp"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Lebenslanges Lernen in der modernen Gesellschaft",
        titleVi: "Học tập suốt đời trong xã hội hiện đại",
        textDe: "Lebenslanges Lernen (LLL) bezeichnet die Idee, dass Bildung nicht mit dem Schulabschluss oder dem Studium endet, sondern ein fortlaufender Prozess ist. In der sich schnell verändernden Arbeitswelt ist es unerlässlich, sich kontinuierlich weiterzubilden. In Deutschland gibt es ein breites Angebot an Weiterbildungsmöglichkeiten: Volkshochschulen (VHS), betriebliche Fortbildungen, Online-Kurse und berufsbegleitende Studiengänge. Das Konzept wird sowohl von der EU als auch von der deutschen Bundesregierung aktiv gefördert.",
        textVi: "Học tập suốt đời (Lebenslanges Lernen - LLL) là ý tưởng rằng giáo dục không kết thúc khi tốt nghiệp hoặc ra trường, mà là một quá trình liên tục. Trong thế giới việc làm thay đổi nhanh chóng, việc đào tạo bổ sung liên tục là không thể thiếu. Ở Đức có nhiều hình thức đào tạo bổ sung: Trung tâm giáo dục cộng đồng (VHS), đào tạo tại doanh nghiệp, khóa học trực tuyến và chương trình học vừa làm vừa học. Khái niệm này được cả EU lẫn chính phủ Đức tích cực hỗ trợ."
      },
      {
        type: "vocabulary",
        titleDe: "Weiterbildung und berufliche Entwicklung",
        titleVi: "Đào tạo bổ sung và phát triển nghề nghiệp",
        words: [
          { de: "Weiterbildung", vi: "đào tạo bổ sung / nâng cao", article: "die" },
          { de: "Fortbildung", vi: "bồi dưỡng chuyên môn", article: "die" },
          { de: "Umschulung", vi: "đào tạo lại (chuyển nghề)", article: "die" },
          { de: "Volkshochschule (VHS)", vi: "trung tâm giáo dục cộng đồng", article: "die" },
          { de: "berufsbegleitend", vi: "song song với công việc (vừa làm vừa học)" },
          { de: "Qualifikation", vi: "trình độ chuyên môn", article: "die" },
          { de: "Schlüsselkompetenz", vi: "năng lực then chốt", article: "die" },
          { de: "Fachkräftemangel", vi: "thiếu hụt lao động có chuyên môn", article: "der" },
          { de: "Selbststudium", vi: "tự học", article: "das" },
          { de: "Fernstudium", vi: "học từ xa", article: "das" },
          { de: "Zertifikat", vi: "chứng chỉ", article: "das" },
          { de: "Kompetenzentwicklung", vi: "phát triển năng lực", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nominalisierung von Verben und Adjektiven",
        titleVi: "Danh từ hóa động từ và tính từ",
        rule: "Verben → Nomen: lernen → das Lernen, sich weiterbilden → die Weiterbildung. Adjektive → Nomen: wichtig → die Wichtigkeit, bereit → die Bereitschaft. Endungen: -ung, -heit, -keit, -schaft, -nis, -tion.",
        ruleVi: "Động từ → Danh từ: lernen → das Lernen (việc học), sich weiterbilden → die Weiterbildung (sự đào tạo bổ sung). Tính từ → Danh từ: wichtig → die Wichtigkeit (tầm quan trọng), bereit → die Bereitschaft (sự sẵn sàng). Các đuôi danh từ hóa: -ung, -heit, -keit, -schaft, -nis, -tion. Đây là kỹ năng quan trọng để viết văn phong học thuật.",
        examples: [
          { de: "Das lebenslange Lernen gewinnt zunehmend an Bedeutung.", vi: "Việc học tập suốt đời ngày càng có ý nghĩa quan trọng." },
          { de: "Die Bereitschaft zur Weiterbildung ist entscheidend.", vi: "Sự sẵn sàng đào tạo bổ sung mang tính quyết định." },
          { de: "Die Globalisierung erfordert neue Qualifikationen.", vi: "Toàn cầu hóa đòi hỏi những trình độ chuyên môn mới." },
          { de: "Die Entwicklung digitaler Kompetenzen ist unerlässlich.", vi: "Sự phát triển năng lực kỹ thuật số là không thể thiếu." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Gespräch über Weiterbildung",
        titleVi: "Trò chuyện về đào tạo bổ sung",
        lines: [
          { speaker: "Hà", de: "Ich überlege, ob ich neben der Arbeit noch ein Fernstudium anfangen soll.", vi: "Mình đang cân nhắc liệu có nên bắt đầu học từ xa song song với công việc không." },
          { speaker: "Markus", de: "Das klingt anstrengend, aber es lohnt sich bestimmt. In welchem Bereich denn?", vi: "Nghe có vẻ vất vả, nhưng chắc chắn đáng giá. Trong lĩnh vực nào vậy?" },
          { speaker: "Hà", de: "Ich möchte mich im Bereich Projektmanagement weiterqualifizieren. Mein Arbeitgeber unterstützt das sogar finanziell.", vi: "Mình muốn nâng cao trình độ trong lĩnh vực quản lý dự án. Công ty mình còn hỗ trợ tài chính nữa." },
          { speaker: "Markus", de: "Das ist ein großer Vorteil. In Deutschland sind Arbeitgeber zunehmend bereit, in die Weiterbildung ihrer Mitarbeiter zu investieren.", vi: "Đó là một lợi thế lớn. Ở Đức, các nhà tuyển dụng ngày càng sẵn sàng đầu tư vào đào tạo bổ sung cho nhân viên." },
          { speaker: "Hà", de: "Stimmt. Ich finde es auch wichtig, dass man sich nicht auf dem bisherigen Wissen ausruht.", vi: "Đúng vậy. Mình cũng thấy quan trọng là không nên bằng lòng với kiến thức hiện có." },
          { speaker: "Markus", de: "Absolut. Wer aufhört zu lernen, fällt schnell zurück — besonders in der IT-Branche.", vi: "Hoàn toàn đồng ý. Ai ngừng học thì nhanh chóng bị tụt lại — đặc biệt trong ngành IT." }
        ]
      },
      {
        type: "practice",
        titleDe: "Erörterung: Lebenslanges Lernen",
        titleVi: "Bài luận: Học tập suốt đời",
        instruction: "Schreibe eine Erörterung (200–250 Wörter) zum Thema: 'Sollte der Staat lebenslanges Lernen stärker fördern?' Verwende Nominalisierungen und gliedere deinen Text in Einleitung, Argumente dafür, Argumente dagegen und Schluss.",
        instructionVi: "Viết một bài luận phản biện (200–250 từ) về chủ đề: 'Nhà nước có nên hỗ trợ mạnh mẽ hơn cho việc học tập suốt đời không?' Sử dụng danh từ hóa và phân chia bài viết thành: mở bài, luận điểm ủng hộ, luận điểm phản đối và kết luận."
      }
    ]
  },

  // --- Chapter 9, Lesson 3: Wissenschaftliches Schreiben (Grundlagen) ---
  {
    id: "b2-ch9-l3",
    chapterId: 9,
    lessonNumber: 3,
    title: "Wissenschaftliches Schreiben (Grundlagen)",
    titleVi: "Viết học thuật (Cơ bản)",
    type: "Fertigkeit",
    objectives: [
      "Nắm được các nguyên tắc cơ bản của viết học thuật tiếng Đức",
      "Biết cách trích dẫn và tham khảo nguồn tài liệu",
      "Phân biệt văn phong nói và viết học thuật"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Grundlagen des wissenschaftlichen Schreibens",
        titleVi: "Cơ bản về viết học thuật",
        textDe: "Wissenschaftliches Schreiben unterscheidet sich grundlegend von der Alltagssprache. Es zeichnet sich durch Objektivität, Sachlichkeit und Präzision aus. Im akademischen Kontext vermeidet man persönliche Meinungsäußerungen ('Ich finde...') und verwendet stattdessen unpersönliche Konstruktionen. Die Argumentation muss logisch aufgebaut und durch Quellen belegt sein. Wichtige Merkmale sind: Verwendung von Fachbegrffen, Passivkonstruktionen, Konjunktiv I für indirekte Rede und eine klare Gliederung (Einleitung, Hauptteil, Schluss).",
        textVi: "Viết học thuật khác biệt cơ bản so với ngôn ngữ hàng ngày. Nó đặc trưng bởi tính khách quan, tính thực tế và sự chính xác. Trong bối cảnh học thuật, người ta tránh diễn đạt ý kiến cá nhân ('Ich finde...' - Tôi thấy...) và thay vào đó sử dụng các cấu trúc vô nhân xưng. Lập luận phải được xây dựng logic và được chứng minh bằng nguồn tài liệu. Các đặc điểm quan trọng: sử dụng thuật ngữ chuyên ngành, cấu trúc bị động, Konjunktiv I cho lời nói gián tiếp và bố cục rõ ràng (mở bài, thân bài, kết luận)."
      },
      {
        type: "vocabulary",
        titleDe: "Redemittel für wissenschaftliches Schreiben",
        titleVi: "Cụm từ dùng trong viết học thuật",
        words: [
          { de: "laut + Dat / nach + Dat / zufolge", vi: "theo (ai / nguồn nào)" },
          { de: "Es ist davon auszugehen, dass...", vi: "Có thể giả định rằng..." },
          { de: "Es lässt sich feststellen, dass...", vi: "Có thể nhận định rằng..." },
          { de: "Im Folgenden wird... dargestellt.", vi: "Sau đây sẽ trình bày..." },
          { de: "Zusammenfassend lässt sich sagen, dass...", vi: "Tóm lại có thể nói rằng..." },
          { de: "Die vorliegende Arbeit untersucht...", vi: "Bài nghiên cứu này khảo sát..." },
          { de: "Daraus ergibt sich...", vi: "Từ đó cho thấy..." },
          { de: "Im Hinblick auf + Akk", vi: "Liên quan đến / Xét về mặt..." },
          { de: "In Bezug auf + Akk", vi: "Về vấn đề..." },
          { de: "Aus ... geht hervor, dass...", vi: "Từ ... cho thấy rằng..." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Passivkonstruktionen im wissenschaftlichen Kontext",
        titleVi: "Cấu trúc bị động trong bối cảnh học thuật",
        rule: "Vorgangspassiv: werden + Partizip II (Die Studie wurde durchgeführt). Zustandspassiv: sein + Partizip II (Die Ergebnisse sind bekannt). Passiv mit Modalverb: Es muss berücksichtigt werden. Passiversatzformen: sich lassen + Inf, -bar/-lich Adjektive.",
        ruleVi: "Bị động quá trình: werden + Partizip II (Nghiên cứu đã được thực hiện). Bị động trạng thái: sein + Partizip II (Kết quả đã được biết). Bị động với động từ khiếm khuyết: Es muss berücksichtigt werden (Cần phải được xem xét). Dạng thay thế bị động: sich lassen + Inf (lässt sich feststellen = có thể nhận định), tính từ đuôi -bar/-lich (messbar = đo được, verständlich = hiểu được).",
        examples: [
          { de: "In dieser Studie werden die Auswirkungen der Digitalisierung auf das Bildungssystem untersucht.", vi: "Trong nghiên cứu này, tác động của số hóa đến hệ thống giáo dục được khảo sát." },
          { de: "Es konnte nachgewiesen werden, dass frühkindliche Bildung langfristige Vorteile hat.", vi: "Có thể chứng minh rằng giáo dục mầm non có lợi ích lâu dài." },
          { de: "Dieses Phänomen lässt sich durch mehrere Faktoren erklären.", vi: "Hiện tượng này có thể được giải thích bằng nhiều yếu tố." },
          { de: "Die Ergebnisse sind mit früheren Studien vergleichbar.", vi: "Kết quả có thể so sánh được với các nghiên cứu trước đó." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Konjunktiv I — Indirekte Rede",
        titleVi: "Konjunktiv I — Lời nói gián tiếp",
        rule: "Konjunktiv I wird in der indirekten Rede verwendet, besonders im wissenschaftlichen Schreiben. Bildung: Verbstamm + -e, -est, -e, -en, -et, -en. Beispiel: er sage, sie habe, man könne. Wenn Konj. I = Indikativ, benutzt man Konj. II.",
        ruleVi: "Konjunktiv I được dùng trong lời nói gián tiếp, đặc biệt trong viết học thuật. Cách chia: gốc động từ + -e, -est, -e, -en, -et, -en. Ví dụ: er sage (anh ấy nói rằng), sie habe (cô ấy có), man könne (người ta có thể). Khi Konj. I trùng với Indikativ (chỉ thị cách), dùng Konj. II thay thế.",
        examples: [
          { de: "Laut Müller (2023) sei das Bildungssystem reformbedürftig.", vi: "Theo Müller (2023), hệ thống giáo dục cần được cải cách." },
          { de: "Die Autorin betont, die Ergebnisse seien eindeutig.", vi: "Tác giả nhấn mạnh rằng kết quả là rõ ràng." },
          { de: "Der Minister erklärte, man wolle mehr in Bildung investieren.", vi: "Bộ trưởng tuyên bố rằng người ta muốn đầu tư nhiều hơn vào giáo dục." },
          { de: "Die Forscher berichten, die Teilnehmer hätten positiv reagiert.", vi: "Các nhà nghiên cứu báo cáo rằng người tham gia đã phản ứng tích cực." }
        ]
      },
      {
        type: "practice",
        titleDe: "Wissenschaftlich umformulieren",
        titleVi: "Chuyển sang văn phong học thuật",
        instruction: "Formuliere die folgenden Alltagssätze in wissenschaftliche Sprache um. Verwende Passivkonstruktionen, Nominalisierungen und Konjunktiv I: 1) 'Ich finde, dass Kinder mehr Sport machen sollten.' 2) 'Viele Leute sagen, dass das Schulsystem schlecht ist.' 3) 'Man hat herausgefunden, dass Musik beim Lernen hilft.' 4) 'Der Professor hat gesagt, die Prüfung ist schwer.'",
        instructionVi: "Chuyển các câu giao tiếp hàng ngày sau sang văn phong học thuật. Sử dụng cấu trúc bị động, danh từ hóa và Konjunktiv I: 1) 'Ich finde, dass Kinder mehr Sport machen sollten.' → (Es ist davon auszugehen, dass...) 2) 'Viele Leute sagen, dass das Schulsystem schlecht ist.' → (Zahlreiche Studien weisen darauf hin...) 3) 'Man hat herausgefunden, dass Musik beim Lernen hilft.' → (Es konnte nachgewiesen werden...) 4) 'Der Professor hat gesagt, die Prüfung ist schwer.' → (Konjunktiv I verwenden)"
      }
    ]
  },

  // --- Chapter 9, Lesson 4: Komplexe Satzstrukturen ---
  {
    id: "b2-ch9-l4",
    chapterId: 9,
    lessonNumber: 4,
    title: "Komplexe Satzstrukturen",
    titleVi: "Cấu trúc câu phức tạp",
    type: "Integration",
    objectives: [
      "Sử dụng thành thạo các loại câu phức trong tiếng Đức",
      "Nắm được các liên từ và trạng từ liên kết nâng cao",
      "Viết các đoạn văn mạch lạc với cấu trúc câu đa dạng"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Komplexe Satzstrukturen auf B2-Niveau",
        titleVi: "Cấu trúc câu phức tạp ở trình độ B2",
        textDe: "Auf B2-Niveau wird erwartet, dass man nicht nur einfache Haupt- und Nebensätze bildet, sondern auch komplexe Satzgefüge beherrscht. Dazu gehören: mehrteilige Konnektoren (je ... desto, nicht nur ... sondern auch, sowohl ... als auch), Partizipialkonstruktionen, erweiterte Infinitivkonstruktionen und Relativsätze mit Präpositionen. Diese Strukturen sind besonders wichtig für das Schreiben von Aufsätzen, Berichten und akademischen Texten.",
        textVi: "Ở trình độ B2, người ta kỳ vọng không chỉ tạo được câu chính và câu phụ đơn giản, mà còn làm chủ các cấu trúc câu phức tạp. Bao gồm: liên từ nhiều phần (je ... desto, nicht nur ... sondern auch, sowohl ... als auch), cấu trúc phân từ, cấu trúc zu-Infinitiv mở rộng và mệnh đề quan hệ với giới từ. Các cấu trúc này đặc biệt quan trọng cho việc viết bài luận, báo cáo và văn bản học thuật."
      },
      {
        type: "grammar",
        titleDe: "Mehrteilige Konnektoren",
        titleVi: "Liên từ nhiều phần",
        rule: "je + Komparativ ..., desto/umso + Komparativ (proportional). nicht nur ... sondern auch (Addition). sowohl ... als auch (Addition). weder ... noch (Negation). entweder ... oder (Alternative). zwar ... aber (Einschränkung).",
        ruleVi: "je + so sánh hơn ..., desto/umso + so sánh hơn (tỉ lệ thuận — càng... càng...). nicht nur ... sondern auch (không chỉ... mà còn). sowohl ... als auch (cả... lẫn...). weder ... noch (không... cũng không). entweder ... oder (hoặc... hoặc). zwar ... aber (tuy... nhưng). Lưu ý: Sau je và desto, động từ chia đứng ở vị trí khác nhau!",
        examples: [
          { de: "Je mehr man liest, desto besser wird man im Schreiben.", vi: "Càng đọc nhiều, người ta càng viết giỏi hơn." },
          { de: "Nicht nur die Schüler, sondern auch die Lehrer profitieren von der Digitalisierung.", vi: "Không chỉ học sinh, mà cả giáo viên cũng hưởng lợi từ số hóa." },
          { de: "Weder die Theorie noch die Praxis allein reicht aus.", vi: "Cả lý thuyết lẫn thực hành đơn lẻ đều không đủ." },
          { de: "Das System ist zwar komplex, aber effektiv.", vi: "Hệ thống tuy phức tạp nhưng hiệu quả." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Partizipialkonstruktionen",
        titleVi: "Cấu trúc phân từ",
        rule: "Partizip I (Partizip Präsens): Infinitiv + d → als Adjektiv: die wachsende Bedeutung. Partizip II als Adjektiv: die durchgeführte Studie. Erweiterte Partizipialattribute ersetzen Relativsätze: die in Deutschland durchgeführte Studie = die Studie, die in Deutschland durchgeführt wurde.",
        ruleVi: "Partizip I (phân từ hiện tại): Infinitiv + d → dùng như tính từ: die wachsende Bedeutung (tầm quan trọng ngày càng tăng). Partizip II dùng như tính từ: die durchgeführte Studie (nghiên cứu đã được thực hiện). Thuộc tính phân từ mở rộng thay thế mệnh đề quan hệ: die in Deutschland durchgeführte Studie = die Studie, die in Deutschland durchgeführt wurde. Đây là đặc trưng của văn phong viết học thuật tiếng Đức.",
        examples: [
          { de: "Die zunehmende Digitalisierung verändert das Bildungswesen.", vi: "Số hóa ngày càng tăng đang thay đổi hệ thống giáo dục." },
          { de: "Die von der Regierung vorgeschlagenen Reformen sind umstritten.", vi: "Các cải cách do chính phủ đề xuất đang gây tranh cãi." },
          { de: "Die an der Universität Wien lehrende Professorin hat eine neue Studie veröffentlicht.", vi: "Nữ giáo sư đang giảng dạy tại Đại học Wien đã công bố một nghiên cứu mới." },
          { de: "Beeindruckt von den Ergebnissen, beschloss das Ministerium weitere Investitionen.", vi: "Ấn tượng với kết quả, bộ đã quyết định đầu tư thêm." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Seminar-Diskussion: Bildungsreformen",
        titleVi: "Thảo luận seminar: Cải cách giáo dục",
        lines: [
          { speaker: "Professor", de: "Welche Auswirkungen haben die in den letzten Jahren eingeführten Bildungsreformen Ihrer Meinung nach?", vi: "Theo ý kiến của bạn, các cải cách giáo dục được đưa vào trong những năm gần đây có tác động gì?" },
          { speaker: "Thuỷ", de: "Meiner Ansicht nach haben sie sowohl positive als auch negative Folgen. Einerseits wurde der Zugang zur Hochschulbildung erleichtert, andererseits ist die Qualität teilweise gesunken.", vi: "Theo quan điểm của mình, chúng có cả hậu quả tích cực lẫn tiêu cực. Một mặt, tiếp cận giáo dục đại học dễ dàng hơn, mặt khác chất lượng phần nào giảm sút." },
          { speaker: "Kommilitone", de: "Dem stimme ich nicht ganz zu. Je mehr Menschen studieren, desto höher ist das allgemeine Bildungsniveau.", vi: "Mình không hoàn toàn đồng ý. Càng nhiều người học đại học, trình độ giáo dục chung càng cao." },
          { speaker: "Thuỷ", de: "Das mag zwar stimmen, aber nicht nur die Quantität, sondern auch die Qualität muss berücksichtigt werden.", vi: "Điều đó tuy có thể đúng, nhưng không chỉ số lượng mà cả chất lượng cũng cần được xem xét." },
          { speaker: "Professor", de: "Eine differenzierte Betrachtung ist hier angebracht. Weder eine rein quantitative noch eine rein qualitative Perspektive greift zu kurz.", vi: "Một cái nhìn phân tích là phù hợp ở đây. Cả góc nhìn thuần định lượng lẫn thuần định tính đều không đủ." }
        ]
      },
      {
        type: "practice",
        titleDe: "Komplexe Sätze bilden",
        titleVi: "Tạo câu phức tạp",
        instruction: "Verbinde die einfachen Sätze zu komplexen Satzgefügen. Verwende die angegebenen Konnektoren: 1) Die Regierung investiert in Bildung. Die Wirtschaft profitiert davon. (je ... desto) 2) Man braucht Theorie. Man braucht auch Praxis. (sowohl ... als auch) 3) Die Studie wurde 2024 veröffentlicht. Die Studie zeigt interessante Ergebnisse. (Partizipialattribut) 4) Die Reform ist teuer. Die Reform ist notwendig. (zwar ... aber) 5) Die Schüler lernen im Unterricht. Die Schüler lernen auch zu Hause. (nicht nur ... sondern auch)",
        instructionVi: "Kết hợp các câu đơn giản thành cấu trúc câu phức tạp. Sử dụng các liên từ được chỉ định: 1) Je mehr ... desto mehr 2) sowohl ... als auch 3) Partizipialattribut (die 2024 veröffentlichte Studie...) 4) zwar ... aber 5) nicht nur ... sondern auch"
      }
    ]
  },

  // ============================================================
  // CHAPTER 10: Zukunftstechnologien
  // ============================================================

  // --- Chapter 10, Lesson 1: KI, Robotik & Automatisierung ---
  {
    id: "b2-ch10-l1",
    chapterId: 10,
    lessonNumber: 1,
    title: "KI, Robotik & Automatisierung",
    titleVi: "Trí tuệ nhân tạo, Robot & Tự động hóa",
    type: "Einführung",
    objectives: [
      "Nắm được từ vựng chuyên ngành về công nghệ tương lai",
      "Thảo luận về tác động của KI và tự động hóa đối với thị trường lao động",
      "Đọc hiểu các bài báo về công nghệ bằng tiếng Đức"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "KI, Robotik und Automatisierung im Alltag",
        titleVi: "KI, Robot và Tự động hóa trong đời sống",
        textDe: "Künstliche Intelligenz (KI), Robotik und Automatisierung verändern unsere Gesellschaft grundlegend. Von selbstfahrenden Autos über Sprachassistenten bis hin zu automatisierten Produktionsstraßen — diese Technologien sind längst keine Science-Fiction mehr. Deutschland als Industrieland setzt stark auf Industrie 4.0, die Vernetzung von Maschinen und Prozessen durch digitale Technologien. Gleichzeitig stellt sich die Frage, welche Auswirkungen diese Entwicklungen auf den Arbeitsmarkt haben: Werden Arbeitsplätze vernichtet oder entstehen neue Berufsfelder?",
        textVi: "Trí tuệ nhân tạo (KI), Robot và Tự động hóa đang thay đổi xã hội chúng ta một cách căn bản. Từ xe tự lái, trợ lý giọng nói đến dây chuyền sản xuất tự động — những công nghệ này từ lâu không còn là khoa học viễn tưởng. Đức với tư cách là nước công nghiệp đặt trọng tâm vào Công nghiệp 4.0, kết nối máy móc và quy trình thông qua công nghệ số. Đồng thời, câu hỏi đặt ra là những phát triển này tác động như thế nào đến thị trường lao động: Việc làm bị mất đi hay các lĩnh vực nghề nghiệp mới xuất hiện?"
      },
      {
        type: "vocabulary",
        titleDe: "Technologie und Digitalisierung",
        titleVi: "Công nghệ và số hóa",
        words: [
          { de: "Künstliche Intelligenz (KI)", vi: "trí tuệ nhân tạo (AI)", article: "die" },
          { de: "Maschinelles Lernen", vi: "học máy (Machine Learning)", article: "das" },
          { de: "Algorithmus", vi: "thuật toán", article: "der" },
          { de: "Automatisierung", vi: "tự động hóa", article: "die" },
          { de: "Robotik", vi: "kỹ thuật robot", article: "die" },
          { de: "Vernetzung", vi: "sự kết nối mạng", article: "die" },
          { de: "Industrie 4.0", vi: "Công nghiệp 4.0", article: "die" },
          { de: "Digitalisierung", vi: "số hóa", article: "die" },
          { de: "Datenverarbeitung", vi: "xử lý dữ liệu", article: "die" },
          { de: "Sprachassistent", vi: "trợ lý giọng nói", article: "der" },
          { de: "selbstfahrend", vi: "tự lái" },
          { de: "Produktionsstraße", vi: "dây chuyền sản xuất", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Podiumsdiskussion: Zukunft der Arbeit",
        titleVi: "Thảo luận hội thảo: Tương lai của lao động",
        lines: [
          { speaker: "Moderatorin", de: "Wie beurteilen Sie die Auswirkungen der KI auf den Arbeitsmarkt?", vi: "Bà đánh giá tác động của KI đối với thị trường lao động như thế nào?" },
          { speaker: "Dr. Nguyễn", de: "Ich bin davon überzeugt, dass KI mehr Arbeitsplätze schaffen wird, als sie vernichtet. Allerdings werden sich die Anforderungen grundlegend ändern.", vi: "Tôi tin chắc rằng KI sẽ tạo ra nhiều việc làm hơn là nó phá hủy. Tuy nhiên, các yêu cầu sẽ thay đổi căn bản." },
          { speaker: "Prof. Weber", de: "Da bin ich skeptischer. Besonders im Bereich der einfachen Bürotätigkeiten sehe ich ein erhebliches Automatisierungspotenzial.", vi: "Tôi hoài nghi hơn. Đặc biệt trong lĩnh vực công việc văn phòng đơn giản, tôi thấy tiềm năng tự động hóa đáng kể." },
          { speaker: "Dr. Nguyễn", de: "Das stimmt, aber gleichzeitig entstehen völlig neue Berufsbilder: KI-Trainer, Datenanalysten, Robotik-Ingenieure.", vi: "Đúng vậy, nhưng đồng thời xuất hiện các ngành nghề hoàn toàn mới: huấn luyện viên KI, chuyên viên phân tích dữ liệu, kỹ sư robot." },
          { speaker: "Moderatorin", de: "Und was bedeutet das für die Ausbildung? Müssen wir unser Bildungssystem anpassen?", vi: "Và điều đó có ý nghĩa gì cho đào tạo? Chúng ta có cần điều chỉnh hệ thống giáo dục không?" },
          { speaker: "Prof. Weber", de: "Unbedingt. Wir müssen schon in der Schule digitale Kompetenzen vermitteln und kritisches Denken fördern.", vi: "Nhất định. Chúng ta phải truyền đạt năng lực kỹ thuật số và khuyến khích tư duy phản biện ngay từ trường học." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Futur I und II — Prognosen und Vermutungen",
        titleVi: "Futur I và II — Dự đoán và phỏng đoán",
        rule: "Futur I: werden + Infinitiv (Prognose/Vermutung über die Zukunft). Futur II: werden + Partizip II + haben/sein (Vermutung über abgeschlossene Handlung). Modalverben verstärken: dürfte, könnte, wird wohl.",
        ruleVi: "Futur I: werden + Infinitiv (dự đoán/phỏng đoán về tương lai: KI wird den Arbeitsmarkt verändern). Futur II: werden + Partizip II + haben/sein (phỏng đoán về hành động đã hoàn tất: Bis 2030 werden viele Jobs verschwunden sein). Động từ khiếm khuyết tăng cường: dürfte (có lẽ), könnte (có thể), wird wohl (chắc sẽ).",
        examples: [
          { de: "Künstliche Intelligenz wird die Arbeitswelt grundlegend verändern.", vi: "Trí tuệ nhân tạo sẽ thay đổi căn bản thế giới lao động." },
          { de: "Bis 2035 werden viele Routinetätigkeiten automatisiert worden sein.", vi: "Đến năm 2035, nhiều công việc thường ngày sẽ đã được tự động hóa." },
          { de: "Diese Technologie dürfte in den nächsten Jahren an Bedeutung gewinnen.", vi: "Công nghệ này có lẽ sẽ ngày càng quan trọng hơn trong những năm tới." },
          { de: "Roboter werden wohl zunehmend in der Pflege eingesetzt werden.", vi: "Robot chắc sẽ ngày càng được sử dụng nhiều trong lĩnh vực chăm sóc." }
        ]
      },
      {
        type: "practice",
        titleDe: "Prognosen formulieren",
        titleVi: "Đưa ra dự đoán",
        instruction: "Formuliere Prognosen zu den folgenden Themen. Verwende Futur I, Futur II und Modalverben (dürfte, könnte, wird wohl): 1) Autonomes Fahren in 10 Jahren 2) KI im Gesundheitswesen 3) Roboter im Haushalt 4) Der Beruf des Übersetzers in der Zukunft 5) Bildung im Jahr 2040",
        instructionVi: "Đưa ra dự đoán về các chủ đề sau. Sử dụng Futur I, Futur II và các động từ khiếm khuyết (dürfte, könnte, wird wohl): 1) Xe tự lái trong 10 năm tới 2) KI trong y tế 3) Robot trong gia đình 4) Nghề phiên/biên dịch trong tương lai 5) Giáo dục năm 2040"
      }
    ]
  },

  // --- Chapter 10, Lesson 2: Ethik der Technologie ---
  {
    id: "b2-ch10-l2",
    chapterId: 10,
    lessonNumber: 2,
    title: "Ethik der Technologie",
    titleVi: "Đạo đức công nghệ",
    type: "Grammatik",
    objectives: [
      "Thảo luận các vấn đề đạo đức liên quan đến công nghệ",
      "Sử dụng Konjunktiv II để diễn đạt giả thuyết và điều kiện",
      "Lập luận về các chủ đề gây tranh cãi"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Ethische Fragen der modernen Technologie",
        titleVi: "Các câu hỏi đạo đức của công nghệ hiện đại",
        textDe: "Mit dem Fortschritt der Technologie stellen sich immer dringendere ethische Fragen. Wer trägt die Verantwortung, wenn ein selbstfahrendes Auto einen Unfall verursacht? Dürfen Algorithmen über Kreditvergabe oder Bewerbungen entscheiden? Wie schützen wir die Privatsphäre in einer zunehmend digitalisierten Welt? Diese Fragen erfordern eine gesellschaftliche Debatte, an der nicht nur Techniker, sondern auch Philosophen, Juristen und Bürger teilnehmen sollten. Die EU hat mit dem AI Act bereits einen ersten regulatorischen Rahmen geschaffen.",
        textVi: "Với sự tiến bộ của công nghệ, các câu hỏi đạo đức ngày càng cấp bách. Ai chịu trách nhiệm khi xe tự lái gây tai nạn? Thuật toán có được phép quyết định việc cấp tín dụng hay tuyển dụng không? Làm sao bảo vệ quyền riêng tư trong một thế giới ngày càng số hóa? Các câu hỏi này đòi hỏi cuộc tranh luận xã hội, với sự tham gia không chỉ của kỹ sư mà còn cả triết gia, luật gia và công dân. EU với đạo luật AI Act đã tạo ra khuôn khổ pháp lý đầu tiên."
      },
      {
        type: "vocabulary",
        titleDe: "Ethik und Gesellschaft",
        titleVi: "Đạo đức và xã hội",
        words: [
          { de: "Ethik", vi: "đạo đức (học)", article: "die" },
          { de: "Verantwortung", vi: "trách nhiệm", article: "die" },
          { de: "Privatsphäre", vi: "quyền riêng tư", article: "die" },
          { de: "Datenschutz", vi: "bảo vệ dữ liệu", article: "der" },
          { de: "Überwachung", vi: "giám sát", article: "die" },
          { de: "Algorithmus-Bias", vi: "thiên lệch thuật toán", article: "der" },
          { de: "Regulierung", vi: "sự điều tiết / quy định", article: "die" },
          { de: "Transparenz", vi: "tính minh bạch", article: "die" },
          { de: "Menschenwürde", vi: "nhân phẩm", article: "die" },
          { de: "Selbstbestimmung", vi: "quyền tự quyết", article: "die" },
          { de: "Haftung", vi: "trách nhiệm pháp lý", article: "die" },
          { de: "Missbrauch", vi: "sự lạm dụng", article: "der" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Konjunktiv II — Irreale Bedingungssätze",
        titleVi: "Konjunktiv II — Câu điều kiện không thực",
        rule: "Gegenwart: Wenn + Konj. II, Konj. II (Wenn KI Emotionen hätte, wäre das problematisch). Vergangenheit: Wenn + Konj. II Perfekt, Konj. II Perfekt (Wenn man das gewusst hätte, hätte man anders gehandelt). Ohne zu / Statt zu + Infinitiv.",
        ruleVi: "Hiện tại: Wenn + Konj. II, Konj. II (Nếu KI có cảm xúc, điều đó sẽ có vấn đề). Quá khứ: Wenn + Konj. II Perfekt, Konj. II Perfekt (Nếu người ta đã biết điều đó, người ta đã hành động khác). Lưu ý các dạng: wäre, hätte, würde + Infinitiv, könnte, sollte, müsste. Câu điều kiện không thực dùng để suy nghĩ về các kịch bản giả định — rất quan trọng trong thảo luận đạo đức.",
        examples: [
          { de: "Wenn Roboter ein Bewusstsein hätten, müssten wir ihnen Rechte zugestehen.", vi: "Nếu robot có ý thức, chúng ta sẽ phải trao quyền cho chúng." },
          { de: "Hätte man die Risiken früher erkannt, hätte man die Technologie anders entwickelt.", vi: "Nếu người ta đã nhận ra rủi ro sớm hơn, người ta đã phát triển công nghệ khác đi." },
          { de: "Ohne strenge Regulierung könnte KI leicht missbraucht werden.", vi: "Nếu không có quy định nghiêm ngặt, KI có thể dễ dàng bị lạm dụng." },
          { de: "An Ihrer Stelle würde ich die Datenschutzrichtlinien genauer prüfen.", vi: "Nếu ở vị trí của bạn, tôi sẽ kiểm tra kỹ hơn các quy định bảo vệ dữ liệu." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Debatte: Gesichtserkennung im öffentlichen Raum",
        titleVi: "Tranh luận: Nhận diện khuôn mặt ở nơi công cộng",
        lines: [
          { speaker: "Moderator", de: "Sollte Gesichtserkennung im öffentlichen Raum erlaubt sein? Frau Trần, was meinen Sie?", vi: "Nhận diện khuôn mặt ở nơi công cộng có nên được cho phép không? Chị Trần, ý kiến của chị?" },
          { speaker: "Trần", de: "Wenn es nach mir ginge, würde ich diese Technologie streng regulieren. Die Gefahr des Missbrauchs ist einfach zu groß.", vi: "Nếu theo ý tôi, tôi sẽ điều tiết công nghệ này một cách nghiêm ngặt. Nguy cơ lạm dụng quá lớn." },
          { speaker: "Herr Koch", de: "Aber wenn wir auf diese Technologie verzichten würden, könnten wir viele Verbrechen nicht aufklären.", vi: "Nhưng nếu chúng ta từ bỏ công nghệ này, chúng ta sẽ không thể phá nhiều vụ phạm tội." },
          { speaker: "Trần", de: "Das mag sein, aber müsste man nicht zuerst sicherstellen, dass die Algorithmen keine Minderheiten diskriminieren?", vi: "Điều đó có thể đúng, nhưng chẳng phải trước tiên phải đảm bảo rằng thuật toán không phân biệt đối xử với các nhóm thiểu số sao?" },
          { speaker: "Herr Koch", de: "Da haben Sie recht. Ohne Transparenz und unabhängige Kontrolle wäre der Einsatz tatsächlich unverantwortlich.", vi: "Chị nói đúng. Nếu không có minh bạch và kiểm soát độc lập, việc sử dụng thực sự sẽ là vô trách nhiệm." },
          { speaker: "Moderator", de: "Es scheint also, dass beide Seiten eine Regulierung befürworten, nur in unterschiedlichem Ausmaß.", vi: "Vậy có vẻ cả hai bên đều ủng hộ việc điều tiết, chỉ khác nhau về mức độ." }
        ]
      },
      {
        type: "practice",
        titleDe: "Ethische Dilemmata diskutieren",
        titleVi: "Thảo luận các tình huống khó xử về đạo đức",
        instruction: "Nimm Stellung zu einem der folgenden ethischen Dilemmata (200–250 Wörter). Verwende Konjunktiv II und die Redemittel: Wenn es nach mir ginge... / An Ihrer Stelle würde ich... / Hätte man..., dann hätte man... 1) Ein selbstfahrendes Auto muss zwischen zwei Unfällen wählen. 2) Eine KI entscheidet über Bewerbungen — ist das fair? 3) Sollten Staaten Social-Media-Plattformen stärker kontrollieren?",
        instructionVi: "Đưa ra quan điểm về một trong các tình huống khó xử đạo đức sau (200–250 từ). Sử dụng Konjunktiv II và các cụm từ: Wenn es nach mir ginge... / An Ihrer Stelle würde ich... / Hätte man..., dann hätte man... 1) Xe tự lái phải chọn giữa hai vụ tai nạn. 2) KI quyết định tuyển dụng — có công bằng không? 3) Nhà nước có nên kiểm soát mạng xã hội mạnh hơn không?"
      }
    ]
  },

  // --- Chapter 10, Lesson 3: Prüfungsvorbereitung B2 (Goethe/ÖSD/telc) ---
  {
    id: "b2-ch10-l3",
    chapterId: 10,
    lessonNumber: 3,
    title: "Prüfungsvorbereitung B2",
    titleVi: "Chuẩn bị thi B2 (Goethe/ÖSD/telc)",
    type: "Fertigkeit",
    objectives: [
      "Nắm được cấu trúc và yêu cầu của các kỳ thi B2 phổ biến",
      "Luyện tập các dạng bài thi: Lesen, Hören, Schreiben, Sprechen",
      "Nắm được các chiến lược làm bài thi hiệu quả"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Überblick: B2-Prüfungen",
        titleVi: "Tổng quan: Các kỳ thi B2",
        textDe: "Die wichtigsten B2-Prüfungen sind: Goethe-Zertifikat B2 (international anerkannt, vom Goethe-Institut), ÖSD Zertifikat B2 (besonders für Österreich) und telc Deutsch B2 (häufig für den Beruf). Alle Prüfungen testen vier Fertigkeiten: Lesen, Hören, Schreiben und Sprechen. Das Goethe-Zertifikat B2 besteht aus vier Modulen, die einzeln abgelegt werden können. Die Prüfung dauert insgesamt ca. 3,5 Stunden. Zum Bestehen braucht man mindestens 60% in jedem Modul.",
        textVi: "Các kỳ thi B2 quan trọng nhất: Goethe-Zertifikat B2 (được công nhận quốc tế, do Viện Goethe tổ chức), ÖSD Zertifikat B2 (đặc biệt cho Áo) và telc Deutsch B2 (thường cho nghề nghiệp). Tất cả đều kiểm tra bốn kỹ năng: Đọc, Nghe, Viết và Nói. Goethe-Zertifikat B2 gồm bốn module có thể thi riêng lẻ. Tổng thời gian thi khoảng 3,5 giờ. Để đỗ cần đạt ít nhất 60% ở mỗi module."
      },
      {
        type: "vocabulary",
        titleDe: "Prüfungswortschatz",
        titleVi: "Từ vựng kỳ thi",
        words: [
          { de: "Leseverstehen", vi: "đọc hiểu", article: "das" },
          { de: "Hörverstehen", vi: "nghe hiểu", article: "das" },
          { de: "Schriftlicher Ausdruck", vi: "diễn đạt viết", article: "der" },
          { de: "Mündlicher Ausdruck", vi: "diễn đạt nói", article: "der" },
          { de: "Erörterung", vi: "bài luận phản biện", article: "die" },
          { de: "Stellungnahme", vi: "bài trình bày quan điểm", article: "die" },
          { de: "Grafik beschreiben", vi: "mô tả biểu đồ" },
          { de: "Redemittel", vi: "cụm từ/mẫu câu", article: "das" },
          { de: "Modul", vi: "module (phần thi)", article: "das" },
          { de: "Bewertungskriterien", vi: "tiêu chí đánh giá (số nhiều)" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Redemittel für die mündliche Prüfung",
        titleVi: "Cụm từ cho phần thi nói",
        rule: "Einleitung: Ich möchte über das Thema ... sprechen. / Das Thema ... ist heutzutage besonders aktuell. Argumente: Dafür spricht, dass... / Dagegen spricht, dass... / Ein weiteres Argument ist... Schluss: Zusammenfassend lässt sich sagen, dass... / Abschließend möchte ich betonen, dass...",
        ruleVi: "Mở đầu: Ich möchte über das Thema ... sprechen. (Tôi muốn nói về chủ đề...) / Das Thema ... ist heutzutage besonders aktuell. (Chủ đề ... hiện nay đặc biệt thời sự.) Luận điểm: Dafür spricht, dass... (Điều ủng hộ là...) / Dagegen spricht, dass... (Điều phản đối là...) / Ein weiteres Argument ist... (Một luận điểm khác là...) Kết luận: Zusammenfassend lässt sich sagen, dass... (Tóm lại có thể nói rằng...) / Abschließend möchte ich betonen, dass... (Cuối cùng tôi muốn nhấn mạnh rằng...)",
        examples: [
          { de: "Ich möchte über das Thema 'Digitalisierung in der Bildung' sprechen.", vi: "Tôi muốn nói về chủ đề 'Số hóa trong giáo dục'." },
          { de: "Dafür spricht, dass digitale Medien den Unterricht abwechslungsreicher gestalten.", vi: "Điều ủng hộ là phương tiện kỹ thuật số làm cho bài giảng đa dạng hơn." },
          { de: "Dagegen spricht, dass nicht alle Schüler gleichen Zugang zu Technologie haben.", vi: "Điều phản đối là không phải tất cả học sinh đều có quyền truy cập công nghệ như nhau." },
          { de: "Zusammenfassend lässt sich sagen, dass die Digitalisierung Chancen und Risiken birgt.", vi: "Tóm lại có thể nói rằng số hóa mang lại cả cơ hội lẫn rủi ro." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Grafikbeschreibung — Redemittel",
        titleVi: "Mô tả biểu đồ — Cụm từ",
        rule: "Einleitung: Die Grafik zeigt... / Aus der Grafik geht hervor, dass... Beschreibung: Der Anteil ist von X auf Y gestiegen/gesunken. / Im Zeitraum von ... bis ... hat sich ... verdoppelt/halbiert. Vergleich: Im Vergleich zu ... ist ... deutlich höher/niedriger.",
        ruleVi: "Mở đầu: Die Grafik zeigt... (Biểu đồ cho thấy...) / Aus der Grafik geht hervor, dass... (Từ biểu đồ cho thấy rằng...) Mô tả: Der Anteil ist von X auf Y gestiegen/gesunken. (Tỷ lệ tăng/giảm từ X lên/xuống Y.) / Im Zeitraum von ... bis ... hat sich ... verdoppelt/halbiert. (Trong giai đoạn từ... đến... đã tăng gấp đôi/giảm một nửa.) So sánh: Im Vergleich zu ... ist ... deutlich höher/niedriger. (So với... thì... cao/thấp hơn rõ rệt.)",
        examples: [
          { de: "Die Grafik zeigt die Entwicklung der Internetnutzung in Deutschland von 2010 bis 2025.", vi: "Biểu đồ cho thấy sự phát triển của việc sử dụng internet ở Đức từ 2010 đến 2025." },
          { de: "Der Anteil der Online-Lernenden ist von 15% auf 45% gestiegen.", vi: "Tỷ lệ người học trực tuyến đã tăng từ 15% lên 45%." },
          { de: "Auffällig ist, dass die Nutzung bei jungen Menschen deutlich höher liegt.", vi: "Đáng chú ý là mức sử dụng ở người trẻ cao hơn rõ rệt." },
          { de: "Im Vergleich zu 2015 hat sich die Zahl der Fernstudierenden verdoppelt.", vi: "So với năm 2015, số lượng sinh viên học từ xa đã tăng gấp đôi." }
        ]
      },
      {
        type: "practice",
        titleDe: "Prüfungssimulation: Schriftlicher Ausdruck",
        titleVi: "Mô phỏng thi: Phần viết",
        instruction: "Schreibe eine Erörterung (250–300 Wörter) zum Thema: 'Sollten Universitäten vollständig auf Online-Lehre umstellen?' Gliederung: 1) Einleitung (Thema vorstellen) 2) Argumente dafür (mind. 2) 3) Argumente dagegen (mind. 2) 4) Eigene Stellungnahme 5) Schluss. Verwende Redemittel aus dieser Lektion und achte auf: Konnektoren, Konjunktiv II, Passiv, Nominalisierungen.",
        instructionVi: "Viết bài luận phản biện (250–300 từ) về chủ đề: 'Các trường đại học có nên chuyển hoàn toàn sang giảng dạy trực tuyến không?' Bố cục: 1) Mở bài (giới thiệu chủ đề) 2) Luận điểm ủng hộ (ít nhất 2) 3) Luận điểm phản đối (ít nhất 2) 4) Quan điểm cá nhân 5) Kết luận. Sử dụng các cụm từ trong bài và chú ý: liên từ, Konjunktiv II, bị động, danh từ hóa."
      }
    ]
  },

  // --- Chapter 10, Lesson 4: Rückblick & Ausblick auf C1 ---
  {
    id: "b2-ch10-l4",
    chapterId: 10,
    lessonNumber: 4,
    title: "Rückblick & Ausblick auf C1",
    titleVi: "Nhìn lại & Hướng tới C1",
    type: "Integration",
    objectives: [
      "Tổng hợp lại kiến thức ngữ pháp và từ vựng B2",
      "Tự đánh giá trình độ hiện tại theo khung CEFR",
      "Hiểu được yêu cầu của trình độ C1 và cách chuẩn bị"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Rückblick auf das B2-Niveau",
        titleVi: "Nhìn lại trình độ B2",
        textDe: "Herzlichen Glückwunsch! Du hast das B2-Niveau erreicht. Das bedeutet: Du kannst die Hauptinhalte komplexer Texte verstehen, dich spontan und fließend verständigen, dich zu einem breiten Themenspektrum klar und detailliert ausdrücken und deinen Standpunkt erläutern. In den letzten Kapiteln hast du gelernt: komplexe Satzstrukturen, wissenschaftliches Schreiben, Argumentation, Konjunktiv I und II, Passivkonstruktionen, Nominalisierungen und vieles mehr. Diese Kompetenzen bilden das Fundament für das C1-Niveau.",
        textVi: "Chúc mừng! Bạn đã đạt trình độ B2. Điều đó có nghĩa: Bạn có thể hiểu nội dung chính của các văn bản phức tạp, giao tiếp tự phát và trôi chảy, diễn đạt rõ ràng và chi tiết về nhiều chủ đề, giải thích quan điểm của mình. Trong các chương vừa qua, bạn đã học: cấu trúc câu phức tạp, viết học thuật, lập luận, Konjunktiv I và II, cấu trúc bị động, danh từ hóa và nhiều hơn nữa. Các năng lực này tạo nền tảng cho trình độ C1."
      },
      {
        type: "vocabulary",
        titleDe: "Schlüsselbegriffe B2 — Zusammenfassung",
        titleVi: "Thuật ngữ then chốt B2 — Tổng hợp",
        words: [
          { de: "Erörterung", vi: "bài luận phản biện", article: "die" },
          { de: "Stellungnahme", vi: "quan điểm / ý kiến", article: "die" },
          { de: "Nominalisierung", vi: "danh từ hóa", article: "die" },
          { de: "Partizipialkonstruktion", vi: "cấu trúc phân từ", article: "die" },
          { de: "Konjunktiv I (indirekte Rede)", vi: "Konjunktiv I (lời nói gián tiếp)" },
          { de: "Konjunktiv II (irreale Bedingung)", vi: "Konjunktiv II (điều kiện không thực)" },
          { de: "Passivkonstruktion", vi: "cấu trúc bị động", article: "die" },
          { de: "Konnektoren", vi: "liên từ (số nhiều)" },
          { de: "Redemittel", vi: "cụm từ / mẫu câu", article: "das" },
          { de: "Grafikbeschreibung", vi: "mô tả biểu đồ", article: "die" }
        ]
      },
      {
        type: "explanation",
        titleDe: "Ausblick auf C1: Was kommt als Nächstes?",
        titleVi: "Hướng tới C1: Điều gì tiếp theo?",
        textDe: "Auf C1-Niveau wirst du: ein breites Spektrum anspruchsvoller, längerer Texte verstehen und auch implizite Bedeutungen erfassen; dich spontan und fließend ausdrücken, ohne öfter deutlich erkennbar nach Worten suchen zu müssen; die Sprache im gesellschaftlichen und beruflichen Leben wirksam und flexibel gebrauchen; dich klar, strukturiert und ausführlich zu komplexen Sachverhalten äußern. Neue Schwerpunkte werden sein: differenzierte Argumentation, Stilistik, Textsorten (Kommentar, Rezension, Fachtext), gehobene Grammatik und Wortschatzvertiefung.",
        textVi: "Ở trình độ C1, bạn sẽ: hiểu được nhiều loại văn bản dài và đòi hỏi, kể cả ý nghĩa hàm ẩn; diễn đạt tự phát và trôi chảy mà không cần tìm từ rõ ràng; sử dụng ngôn ngữ hiệu quả và linh hoạt trong đời sống xã hội và nghề nghiệp; diễn đạt rõ ràng, có cấu trúc và chi tiết về các vấn đề phức tạp. Trọng tâm mới: lập luận tinh tế, phong cách học, các thể loại văn bản (bình luận, đánh giá, văn bản chuyên ngành), ngữ pháp nâng cao và mở rộng từ vựng chuyên sâu."
      },
      {
        type: "grammar",
        titleDe: "Selbsteinschätzung: B2-Grammatik",
        titleVi: "Tự đánh giá: Ngữ pháp B2",
        rule: "Checkliste B2-Grammatik: ✓ Konjunktiv I (indirekte Rede) ✓ Konjunktiv II (irreale Bedingungen, Wünsche, höfliche Bitten) ✓ Passiv (Vorgangs-, Zustandspassiv, mit Modalverben) ✓ Nominalisierung / Verbalisierung ✓ Partizipialkonstruktionen ✓ Mehrteilige Konnektoren ✓ Futur I und II ✓ Relativsätze mit Präpositionen",
        ruleVi: "Danh sách kiểm tra ngữ pháp B2: ✓ Konjunktiv I (lời nói gián tiếp) ✓ Konjunktiv II (điều kiện không thực, mong muốn, yêu cầu lịch sự) ✓ Bị động (bị động quá trình, trạng thái, với động từ khiếm khuyết) ✓ Danh từ hóa / Động từ hóa ✓ Cấu trúc phân từ ✓ Liên từ nhiều phần ✓ Futur I và II ✓ Mệnh đề quan hệ với giới từ. Hãy tự đánh giá: bạn đã nắm vững mỗi điểm này chưa?",
        examples: [
          { de: "Konjunktiv I: Der Autor behauptet, das System sei veraltet.", vi: "Konjunktiv I: Tác giả khẳng định rằng hệ thống đã lỗi thời." },
          { de: "Konjunktiv II: Wenn ich mehr Zeit hätte, würde ich ein Fernstudium beginnen.", vi: "Konjunktiv II: Nếu tôi có nhiều thời gian hơn, tôi sẽ bắt đầu học từ xa." },
          { de: "Passiv: Die Reform wurde 2024 beschlossen und soll 2026 umgesetzt werden.", vi: "Bị động: Cải cách đã được quyết định năm 2024 và dự kiến thực hiện năm 2026." },
          { de: "Partizipialattribut: Die von der EU verabschiedete Verordnung betrifft alle Mitgliedstaaten.", vi: "Thuộc tính phân từ: Quy định được EU thông qua ảnh hưởng đến tất cả các quốc gia thành viên." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Gespräch: Wie geht es weiter?",
        titleVi: "Trò chuyện: Tiếp theo sẽ như thế nào?",
        lines: [
          { speaker: "Minh", de: "Ich kann kaum glauben, dass ich schon B2 geschafft habe! Als ich angefangen habe, konnte ich kein Wort Deutsch.", vi: "Mình không thể tin là đã đạt B2 rồi! Lúc bắt đầu, mình không biết một từ tiếng Đức nào." },
          { speaker: "Lehrerin", de: "Du hast wirklich große Fortschritte gemacht. Dein Deutsch ist jetzt auf einem Niveau, mit dem du an einer deutschen Universität studieren könntest.", vi: "Em đã tiến bộ rất nhiều. Tiếng Đức của em bây giờ ở trình độ mà em có thể học ở một trường đại học Đức." },
          { speaker: "Minh", de: "Danke! Aber ich merke, dass mir manchmal noch die richtigen Wörter fehlen, besonders bei Fachtexten.", vi: "Cảm ơn cô! Nhưng em nhận thấy đôi khi vẫn thiếu từ đúng, đặc biệt với văn bản chuyên ngành." },
          { speaker: "Lehrerin", de: "Das ist völlig normal. Auf C1 wirst du genau daran arbeiten: differenzierterer Wortschatz, subtilere Ausdrucksweisen und komplexere Textsorten.", vi: "Điều đó hoàn toàn bình thường. Ở C1, em sẽ làm việc chính xác với điều đó: từ vựng phân biệt hơn, cách diễn đạt tinh tế hơn và các thể loại văn bản phức tạp hơn." },
          { speaker: "Minh", de: "Ich bin motiviert! Hätte mir jemand vor zwei Jahren gesagt, dass ich auf Deutsch über Bildungspolitik und KI-Ethik diskutieren kann, hätte ich das nie geglaubt.", vi: "Em rất có động lực! Nếu hai năm trước ai đó nói với em rằng em có thể thảo luận về chính sách giáo dục và đạo đức KI bằng tiếng Đức, em sẽ không bao giờ tin." },
          { speaker: "Lehrerin", de: "Und genau das ist der Beweis, dass lebenslanges Lernen funktioniert! Auf zu C1!", vi: "Và chính điều đó là bằng chứng rằng học tập suốt đời có hiệu quả! Tiến tới C1 nào!" }
        ]
      },
      {
        type: "practice",
        titleDe: "Selbstreflexion und Lernplan",
        titleVi: "Tự phản ánh và kế hoạch học tập",
        instruction: "Schreibe einen Reflexionstext (200–250 Wörter) über deine Deutschlernreise. Beantworte dabei: 1) Was waren deine größten Herausforderungen auf dem Weg von A1 bis B2? 2) Welche Grammatikthemen findest du noch schwierig? 3) Was sind deine Ziele für C1? 4) Wie möchtest du dein Deutsch weiter verbessern? Verwende möglichst viele B2-Strukturen: Konjunktiv II, Nominalisierungen, komplexe Konnektoren.",
        instructionVi: "Viết một bài tự phản ánh (200–250 từ) về hành trình học tiếng Đức của bạn. Trả lời: 1) Thách thức lớn nhất trên đường từ A1 đến B2 là gì? 2) Chủ đề ngữ pháp nào bạn vẫn thấy khó? 3) Mục tiêu của bạn cho C1 là gì? 4) Bạn muốn cải thiện tiếng Đức tiếp theo như thế nào? Sử dụng càng nhiều cấu trúc B2 càng tốt: Konjunktiv II, danh từ hóa, liên từ phức tạp."
      }
    ]
  }
];
