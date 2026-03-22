export interface GrammarTopic {
  id: string;
  title: string;
  titleVi: string;
  chapter: number;
  order: number;
  level: "C1";
  explanation: string;
  rules: {
    rule: string;
    ruleVi: string;
    examples: { de: string; vi: string }[];
  }[];
  commonMistakes: { wrong: string; correct: string; explanation: string }[];
  vietnameseComparison: string;
  exercises: {
    type: string;
    question: string;
    questionVi: string;
    options?: string[];
    answer: string;
    explanation: string;
  }[];
}

export const c1GrammarTopics: GrammarTopic[] = [
  // ============================================================
  // TOPIC 1: Erweiterte Konjunktiv-Formen (Kapitel 1)
  // ============================================================
  {
    id: "c1-gram-01",
    title: "Erweiterte Konjunktiv-Formen",
    titleVi: "Các dạng giả định cách mở rộng",
    chapter: 1,
    order: 1,
    level: "C1",
    explanation:
      "Neben dem Konjunktiv II gibt es den Konjunktiv I (indirekte Rede) und zahlreiche erweiterte Formen. Der Konjunktiv I wird hauptsächlich in der Schriftsprache und bei offizieller Berichterstattung verwendet. Wenn Konjunktiv I und Indikativ identisch sind, weicht man auf Konjunktiv II aus.\n\nNgoài giả định cách II, còn có giả định cách I (lời nói gián tiếp) và nhiều dạng mở rộng. Giả định cách I chủ yếu dùng trong văn viết và tường thuật chính thức. Khi giả định cách I trùng với thể trực tiếp, người ta chuyển sang giả định cách II.",
    rules: [
      {
        rule: "Konjunktiv I Bildung: Stamm des Infinitivs + Endungen (-e, -est, -e, -en, -et, -en). Besonders wichtig: 'sei' (von sein).",
        ruleVi:
          "Cách tạo giả định cách I: Gốc của nguyên mẫu + đuôi (-e, -est, -e, -en, -et, -en). Đặc biệt quan trọng: 'sei' (từ sein).",
        examples: [
          {
            de: "Er sagte, er sei krank. (= Er sagte: 'Ich bin krank.')",
            vi: "Anh ấy nói rằng anh ấy bị ốm.",
          },
          {
            de: "Die Ministerin erklärte, die Lage habe sich verbessert.",
            vi: "Bà bộ trưởng giải thích rằng tình hình đã cải thiện.",
          },
          {
            de: "Man berichtet, die Verhandlungen liefen gut.",
            vi: "Người ta báo cáo rằng các cuộc đàm phán diễn ra tốt đẹp.",
          },
        ],
      },
      {
        rule: "Ersatzformen: Wenn Konjunktiv I = Indikativ, verwendet man Konjunktiv II oder 'würde + Infinitiv'.",
        ruleVi:
          "Dạng thay thế: Khi giả định cách I = thể trực tiếp, dùng giả định cách II hoặc 'würde + Infinitiv'.",
        examples: [
          {
            de: "Sie sagten, sie hätten keine Zeit. (statt: sie haben → Konj. I 'haben' = Indikativ)",
            vi: "Họ nói rằng họ không có thời gian. (thay vì: 'haben' vì Konj. I trùng Indikativ)",
          },
          {
            de: "Er meinte, sie würden bald ankommen. (statt: sie kämen)",
            vi: "Anh ấy nghĩ rằng họ sẽ đến sớm.",
          },
          {
            de: "Die Zeitung schrieb, die Preise stiegen weiter.",
            vi: "Tờ báo viết rằng giá tiếp tục tăng.",
          },
        ],
      },
      {
        rule: "Konjunktiv I Vergangenheit: sei/habe + Partizip II. Wird für indirekte Rede in der Vergangenheit verwendet.",
        ruleVi:
          "Giả định cách I quá khứ: sei/habe + Partizip II. Dùng cho lời nói gián tiếp ở quá khứ.",
        examples: [
          {
            de: "Er sagte, er habe das Buch schon gelesen.",
            vi: "Anh ấy nói rằng anh ấy đã đọc cuốn sách rồi.",
          },
          {
            de: "Sie berichtete, sie sei gestern angekommen.",
            vi: "Cô ấy báo rằng cô ấy đã đến hôm qua.",
          },
          {
            de: "Man teilte mit, die Konferenz habe stattgefunden.",
            vi: "Người ta thông báo rằng hội nghị đã diễn ra.",
          },
        ],
      },
      {
        rule: "Konjunktiv I in festen Wendungen: 'Es lebe ...!', 'Man nehme ...', 'Gott sei Dank!'",
        ruleVi:
          "Giả định cách I trong thành ngữ cố định: 'Es lebe ...!' (... muôn năm!), 'Man nehme ...' (Hãy lấy...), 'Gott sei Dank!' (Tạ ơn Chúa!)",
        examples: [
          {
            de: "Es lebe die Freiheit!",
            vi: "Tự do muôn năm!",
          },
          {
            de: "Man nehme 200 Gramm Butter. (Rezeptsprache)",
            vi: "Lấy 200 gram bơ. (ngôn ngữ công thức nấu ăn)",
          },
          {
            de: "Gott sei Dank ist alles gut gegangen.",
            vi: "Tạ ơn Chúa mọi thứ đều ổn.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Er sagte, er ist krank.",
        correct: "Er sagte, er sei krank.",
        explanation:
          "In der indirekten Rede (Schriftsprache) muss der Konjunktiv I stehen, nicht der Indikativ. / Trong lời nói gián tiếp (văn viết) phải dùng giả định cách I, không phải thể trực tiếp.",
      },
      {
        wrong: "Sie sagten, sie haben keine Zeit.",
        correct: "Sie sagten, sie hätten keine Zeit.",
        explanation:
          "'Haben' im Konjunktiv I (3. Person Plural) ist identisch mit Indikativ → Konjunktiv II 'hätten'. / 'Haben' ở giả định cách I (ngôi 3 số nhiều) trùng thể trực tiếp → dùng giả định cách II 'hätten'.",
      },
      {
        wrong: "Er sagte, er wäre Lehrer. (wenn Konj. I möglich)",
        correct: "Er sagte, er sei Lehrer.",
        explanation:
          "Konjunktiv I hat Vorrang. Nur wenn Konj. I = Indikativ, weicht man auf Konj. II aus. / Giả định cách I được ưu tiên. Chỉ khi Konj. I = Indikativ mới chuyển sang Konj. II.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt không có giả định cách. Lời nói gián tiếp thường được diễn đạt bằng 'anh ấy nói rằng...', 'cô ấy kể là...' mà không thay đổi cấu trúc động từ. Trong tiếng Đức, khi tường thuật lại lời người khác trong văn viết trang trọng, bạn PHẢI dùng giả định cách I. Đây là một trong những điểm khó nhất với người Việt vì tiếng Việt hoàn toàn không có hệ thống chia động từ tương tự.",
    exercises: [
      {
        type: "fillBlank",
        question: "Der Sprecher sagte, er _____ sehr zufrieden mit dem Ergebnis. (sein)",
        questionVi: "Người phát ngôn nói rằng anh ấy rất hài lòng với kết quả.",
        answer: "sei",
        explanation: "'Sein' ở Konjunktiv I ngôi 3 số ít = 'sei'.",
      },
      {
        type: "multipleChoice",
        question: "Die Zeugin berichtete, sie _____ den Unfall genau gesehen.",
        questionVi: "Nhân chứng báo cáo rằng cô ấy đã nhìn thấy tai nạn rõ ràng.",
        options: ["habe", "hat", "hätte", "hatte"],
        answer: "habe",
        explanation: "Konjunktiv I Vergangenheit: habe + Partizip II. 'Habe' ≠ Indikativ 'hat', nên dùng Konj. I.",
      },
      {
        type: "errorCorrection",
        question: "Finde den Fehler: 'Er sagte, er hat morgen keine Zeit.'",
        questionVi: "Tìm lỗi sai.",
        answer: "Er sagte, er habe morgen keine Zeit.",
        explanation: "Lời nói gián tiếp trong văn viết trang trọng cần Konjunktiv I: 'habe' thay vì 'hat'.",
      },
      {
        type: "translate",
        question: "Anh ấy nói rằng anh ấy đã đến muộn vì tàu bị hoãn.",
        questionVi: "Dịch sang tiếng Đức (dùng Konjunktiv I).",
        answer: "Er sagte, er sei zu spät gekommen, weil der Zug Verspätung gehabt habe.",
        explanation: "'Sei gekommen' (Konj. I Vergangenheit với sein), 'gehabt habe' (Konj. I Vergangenheit với haben).",
      },
      {
        type: "reorder",
        question: "berichtet / Die Zeitung / , / die Regierung / habe / neue Maßnahmen / beschlossen",
        questionVi: "Sắp xếp: Tờ báo báo cáo rằng chính phủ đã quyết định các biện pháp mới.",
        answer: "Die Zeitung berichtet, die Regierung habe neue Maßnahmen beschlossen.",
        explanation: "Mệnh đề chính + dấu phẩy + Konjunktiv I (habe + beschlossen).",
      },
    ],
  },

  // ============================================================
  // TOPIC 2: Komplexe Partizipialkonstruktionen (Kapitel 2)
  // ============================================================
  {
    id: "c1-gram-02",
    title: "Komplexe Partizipialkonstruktionen",
    titleVi: "Cấu trúc phân từ phức tạp",
    chapter: 2,
    order: 2,
    level: "C1",
    explanation:
      "Auf C1-Niveau werden Partizipialkonstruktionen komplexer: mehrteilige erweiterte Attribute, verschachtelte Partizipien und Partizipien mit Negation oder Modalfunktion. Diese Strukturen kommen vor allem in akademischen Texten, Nachrichten und Fachtexten vor.\n\nỞ trình độ C1, cấu trúc phân từ phức tạp hơn: thuộc tính mở rộng nhiều phần, phân từ lồng nhau và phân từ với phủ định hoặc chức năng tình thái. Các cấu trúc này chủ yếu xuất hiện trong văn bản học thuật, tin tức và văn bản chuyên ngành.",
    rules: [
      {
        rule: "Mehrteilige erweiterte Partizipialattribute: Zwischen Artikel und Nomen können lange Partizipialkonstruktionen stehen.",
        ruleVi:
          "Thuộc tính phân từ mở rộng nhiều phần: Giữa mạo từ và danh từ có thể đặt cấu trúc phân từ dài.",
        examples: [
          {
            de: "Die seit Jahren von der Regierung geplante und nun endlich umgesetzte Reform...",
            vi: "Cuộc cải cách đã được chính phủ lên kế hoạch từ nhiều năm và cuối cùng đã được thực hiện...",
          },
          {
            de: "Der von vielen Experten als bahnbrechend bezeichnete Vorschlag wurde abgelehnt.",
            vi: "Đề xuất được nhiều chuyên gia gọi là đột phá đã bị từ chối.",
          },
          {
            de: "Die in der gestrigen Sitzung einstimmig beschlossenen Änderungen treten sofort in Kraft.",
            vi: "Các thay đổi được thông qua nhất trí trong cuộc họp hôm qua có hiệu lực ngay lập tức.",
          },
        ],
      },
      {
        rule: "Partizip I mit 'zu' (Gerundivum): drückt Möglichkeit oder Notwendigkeit aus (passivische Bedeutung).",
        ruleVi:
          "Partizip I với 'zu' (Gerundivum): diễn tả khả năng hoặc sự cần thiết (nghĩa bị động).",
        examples: [
          {
            de: "Die zu lösenden Aufgaben sind komplex. (= Aufgaben, die gelöst werden müssen)",
            vi: "Các nhiệm vụ cần được giải quyết rất phức tạp.",
          },
          {
            de: "Der nicht zu unterschätzende Einfluss der Medien...",
            vi: "Ảnh hưởng không thể đánh giá thấp của truyền thông...",
          },
          {
            de: "Die leicht zu bedienende Software wurde ein Bestseller.",
            vi: "Phần mềm dễ sử dụng trở thành sản phẩm bán chạy nhất.",
          },
        ],
      },
      {
        rule: "Absoluter Partizipialsatz: Partizip steht am Satzanfang als verkürzter Nebensatz, oft in gehobener Sprache.",
        ruleVi:
          "Mệnh đề phân từ tuyệt đối: Phân từ đứng đầu câu như mệnh đề phụ rút gọn, thường trong văn phong trang trọng.",
        examples: [
          {
            de: "Streng genommen ist das nicht korrekt.",
            vi: "Nói một cách nghiêm ngặt, điều đó không chính xác.",
          },
          {
            de: "Alle Faktoren berücksichtigend, kamen wir zu folgendem Ergebnis.",
            vi: "Xem xét tất cả các yếu tố, chúng tôi đi đến kết quả sau.",
          },
          {
            de: "Von diesem Standpunkt aus betrachtet, ergibt die Entscheidung Sinn.",
            vi: "Nhìn từ quan điểm này, quyết định có ý nghĩa.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Die zu lösende Aufgaben sind komplex.",
        correct: "Die zu lösenden Aufgaben sind komplex.",
        explanation:
          "Das Gerundivum muss wie ein Adjektiv dekliniert werden: Plural + Nominativ → '-en'. / Gerundivum phải biến cách như tính từ: số nhiều + chủ cách → '-en'.",
      },
      {
        wrong: "Der seit langem geplant Reform...",
        correct: "Die seit langem geplante Reform...",
        explanation:
          "Das Partizip II muss als Adjektiv dekliniert werden (feminin, Nominativ → '-e'). / Partizip II phải biến cách như tính từ (giống cái, chủ cách → '-e').",
      },
      {
        wrong: "Die nicht unterschätzende Einfluss...",
        correct: "Der nicht zu unterschätzende Einfluss...",
        explanation:
          "Das Gerundivum braucht 'zu' + Partizip I. Ohne 'zu' hat das Partizip I aktive Bedeutung. / Gerundivum cần 'zu' + Partizip I. Không có 'zu' thì Partizip I mang nghĩa chủ động.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt không có cấu trúc phân từ tương đương. Trong tiếng Việt, mệnh đề quan hệ ('mà', 'mà đã') được dùng thay thế. Ví dụ: 'cuốn sách được viết bởi...' thay vì 'das von ... geschriebene Buch'. Người Việt cần luyện tập đặc biệt để đọc hiểu các cấu trúc phân từ dài, vì trật tự thông tin ngược lại so với tiếng Việt.",
    exercises: [
      {
        type: "transform",
        question: "Formen Sie um: 'Die Aufgaben, die gelöst werden müssen, sind schwer.'",
        questionVi: "Chuyển đổi: dùng Gerundivum.",
        answer: "Die zu lösenden Aufgaben sind schwer.",
        explanation: "Mệnh đề quan hệ bị động + müssen → 'zu + Partizip I' (Gerundivum).",
      },
      {
        type: "fillBlank",
        question: "Der von der Polizei seit Wochen _____ Verdächtige wurde gefasst. (suchen)",
        questionVi: "Nghi phạm bị cảnh sát truy tìm từ nhiều tuần đã bị bắt.",
        answer: "gesuchte",
        explanation: "Partizip II als Adjektiv: 'gesuchte' (maskulin, Nominativ, schwach dekliniert).",
      },
      {
        type: "multipleChoice",
        question: "Die nicht zu _____ Risiken müssen diskutiert werden.",
        questionVi: "Các rủi ro không thể đánh giá thấp phải được thảo luận.",
        options: [
          "unterschätzenden",
          "unterschätzende",
          "unterschätzte",
          "unterschätzend",
        ],
        answer: "unterschätzenden",
        explanation: "Gerundivum: 'zu unterschätzend' + Adjektivdeklination Plural Nominativ → '-en'.",
      },
      {
        type: "translate",
        question: "Cuộc cải cách được thông qua hôm qua có hiệu lực ngay lập tức.",
        questionVi: "Dịch sang tiếng Đức (dùng Partizipialkonstruktion).",
        answer: "Die gestern beschlossene Reform tritt sofort in Kraft.",
        explanation: "Partizip II als erweitertes Attribut: 'die gestern beschlossene Reform'.",
      },
      {
        type: "errorCorrection",
        question: "Finde den Fehler: 'Die in der letzten Woche veröffentlicht Studie zeigt neue Ergebnisse.'",
        questionVi: "Tìm lỗi sai.",
        answer: "Die in der letzten Woche veröffentlichte Studie zeigt neue Ergebnisse.",
        explanation: "Partizip II trước danh từ phải biến cách: 'veröffentlichte' (feminin, Nominativ → -e).",
      },
    ],
  },

  // ============================================================
  // TOPIC 3: Funktionsverbgefüge erweitert (Kapitel 3)
  // ============================================================
  {
    id: "c1-gram-03",
    title: "Funktionsverbgefüge (erweitert)",
    titleVi: "Cụm động từ chức năng (mở rộng)",
    chapter: 3,
    order: 3,
    level: "C1",
    explanation:
      "Funktionsverbgefüge (FVG) bestehen aus einem 'bedeutungsarmen' Verb und einem nominalen Teil, der die Hauptbedeutung trägt. Auf C1-Niveau werden komplexere und weniger geläufige FVG behandelt, die in der Wissenschafts-, Verwaltungs- und Nachrichtensprache häufig vorkommen.\n\nCụm động từ chức năng (FVG) gồm một động từ 'ít nghĩa' và phần danh từ mang nghĩa chính. Ở trình độ C1, các FVG phức tạp hơn và ít phổ biến hơn được xử lý, thường gặp trong ngôn ngữ khoa học, hành chính và tin tức.",
    rules: [
      {
        rule: "FVG mit Präposition: 'in Anspruch nehmen', 'in Kauf nehmen', 'in Betracht ziehen', 'unter Beweis stellen'.",
        ruleVi:
          "FVG với giới từ: 'in Anspruch nehmen' (sử dụng/yêu cầu), 'in Kauf nehmen' (chấp nhận), 'in Betracht ziehen' (cân nhắc), 'unter Beweis stellen' (chứng minh).",
        examples: [
          {
            de: "Wir sollten alle Möglichkeiten in Betracht ziehen.",
            vi: "Chúng ta nên cân nhắc tất cả các khả năng.",
          },
          {
            de: "Sie hat ihre Kompetenz unter Beweis gestellt.",
            vi: "Cô ấy đã chứng minh năng lực của mình.",
          },
          {
            de: "Man muss gewisse Nachteile in Kauf nehmen.",
            vi: "Người ta phải chấp nhận một số bất lợi.",
          },
        ],
      },
      {
        rule: "FVG mit Aktiv-/Passiv-Bedeutung: 'in Gang setzen' (aktiv, = starten) vs. 'in Gang kommen' (passiv/intransitiv, = gestartet werden).",
        ruleVi:
          "FVG với nghĩa chủ động/bị động: 'in Gang setzen' (chủ động, = khởi động) vs. 'in Gang kommen' (bị động/nội động, = được khởi động).",
        examples: [
          {
            de: "Die Regierung hat die Reform in Gang gesetzt.",
            vi: "Chính phủ đã khởi động cuộc cải cách.",
          },
          {
            de: "Die Verhandlungen sind endlich in Gang gekommen.",
            vi: "Các cuộc đàm phán cuối cùng đã bắt đầu.",
          },
          {
            de: "Er brachte das Thema zur Sprache. (aktiv) / Das Thema kam zur Sprache. (passiv)",
            vi: "Anh ấy đề cập đến chủ đề. (chủ động) / Chủ đề được đề cập. (bị động)",
          },
        ],
      },
      {
        rule: "Nominalisierung durch FVG vs. einfaches Verb: Das FVG klingt formeller und ermöglicht genauere Nuancen.",
        ruleVi:
          "Danh từ hóa bằng FVG so với động từ đơn giản: FVG nghe trang trọng hơn và cho phép sắc thái chính xác hơn.",
        examples: [
          {
            de: "Kritik üben (formell) = kritisieren (neutral)",
            vi: "Đưa ra phê bình (trang trọng) = phê bình (trung tính)",
          },
          {
            de: "Einfluss nehmen auf (formell) = beeinflussen (neutral)",
            vi: "Gây ảnh hưởng lên (trang trọng) = ảnh hưởng (trung tính)",
          },
          {
            de: "Stellung nehmen zu (formell) = sich äußern zu (neutral)",
            vi: "Đưa ra lập trường về (trang trọng) = phát biểu về (trung tính)",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Er hat die Kritik in Kauf gezogen.",
        correct: "Er hat die Kritik in Kauf genommen.",
        explanation:
          "'In Kauf nehmen' (nicht 'ziehen'). Verwechslung mit 'in Betracht ziehen'. / 'In Kauf nehmen' (không phải 'ziehen'). Nhầm với 'in Betracht ziehen'.",
      },
      {
        wrong: "Sie stellte ihre Fähigkeiten unter Beweise.",
        correct: "Sie stellte ihre Fähigkeiten unter Beweis.",
        explanation:
          "'Unter Beweis stellen' — 'Beweis' bleibt im Singular ohne Artikel. / 'Unter Beweis stellen' — 'Beweis' giữ nguyên số ít không có mạo từ.",
      },
      {
        wrong: "Man muss in Betracht nehmen, dass...",
        correct: "Man muss in Betracht ziehen, dass...",
        explanation:
          "'In Betracht ziehen' (nicht 'nehmen'). Verwechslung mit 'in Anspruch nehmen'. / 'In Betracht ziehen' (không phải 'nehmen'). Nhầm với 'in Anspruch nehmen'.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng có cụm từ cố định tương tự FVG, ví dụ: 'đưa ra quyết định' (eine Entscheidung treffen), 'lên tiếng' (das Wort ergreifen). Tuy nhiên, FVG trong tiếng Đức phức tạp hơn vì động từ phải chia theo ngôi/thì và danh từ phải kèm giới từ, mạo từ đúng. Người Việt hay nhầm giới từ hoặc trộn lẫn các FVG với nhau.",
    exercises: [
      {
        type: "fillBlank",
        question: "Der Politiker nahm zu dem Vorwurf _____. (Stellung)",
        questionVi: "Chính trị gia đã đưa ra lập trường về cáo buộc.",
        answer: "Stellung",
        explanation: "'Stellung nehmen zu' = đưa ra lập trường về.",
      },
      {
        type: "multipleChoice",
        question: "Wir müssen alle Optionen in Betracht _____.",
        questionVi: "Chúng ta phải cân nhắc tất cả các lựa chọn.",
        options: ["ziehen", "nehmen", "stellen", "setzen"],
        answer: "ziehen",
        explanation: "'In Betracht ziehen' = cân nhắc. Không nhầm với 'in Kauf nehmen'.",
      },
      {
        type: "transform",
        question: "Ersetzen Sie das einfache Verb durch ein FVG: 'Er beeinflusste die Entscheidung.'",
        questionVi: "Thay động từ đơn bằng FVG.",
        answer: "Er nahm Einfluss auf die Entscheidung.",
        explanation: "'Beeinflussen' → 'Einfluss nehmen auf + Akk.'",
      },
      {
        type: "translate",
        question: "Cô ấy đã chứng minh năng lực của mình trong dự án.",
        questionVi: "Dịch sang tiếng Đức (dùng FVG).",
        answer: "Sie hat ihre Kompetenz in dem Projekt unter Beweis gestellt.",
        explanation: "'Unter Beweis stellen' = chứng minh (trang trọng hơn 'beweisen').",
      },
      {
        type: "errorCorrection",
        question: "Finde den Fehler: 'Die Diskussion wurde in Gang gebracht.'",
        questionVi: "Tìm lỗi sai.",
        answer: "Die Diskussion wurde in Gang gesetzt.",
        explanation: "'In Gang setzen' (không phải 'bringen'). Bị động: 'wurde in Gang gesetzt'.",
      },
    ],
  },

  // ============================================================
  // TOPIC 4: Textkohäsion & Textgrammatik (Kapitel 4)
  // ============================================================
  {
    id: "c1-gram-04",
    title: "Textkohäsion & Textgrammatik",
    titleVi: "Liên kết văn bản & Ngữ pháp văn bản",
    chapter: 4,
    order: 4,
    level: "C1",
    explanation:
      "Textkohäsion betrifft die sprachlichen Mittel, die einen Text zusammenhalten: Konnektoren, Pro-Formen, Wiederaufnahme und thematische Progression. Auf C1-Niveau lernen Sie, Texte logisch zu strukturieren und akademische Texte besser zu verstehen.\n\nLiên kết văn bản liên quan đến các phương tiện ngôn ngữ giúp văn bản mạch lạc: từ nối, đại từ thay thế, phép lặp và sự phát triển chủ đề. Ở trình độ C1, bạn học cách cấu trúc văn bản logic và hiểu văn bản học thuật tốt hơn.",
    rules: [
      {
        rule: "Zweiteilige Konnektoren: 'zwar ... aber', 'je ... desto/umso', 'weder ... noch', 'entweder ... oder', 'sowohl ... als auch', 'nicht nur ... sondern auch'.",
        ruleVi:
          "Từ nối hai phần: 'zwar ... aber' (tuy... nhưng), 'je ... desto/umso' (càng... càng), 'weder ... noch' (không... cũng không), 'entweder ... oder' (hoặc... hoặc), 'sowohl ... als auch' (cả... lẫn), 'nicht nur ... sondern auch' (không chỉ... mà còn).",
        examples: [
          {
            de: "Je mehr man übt, desto besser wird man.",
            vi: "Càng luyện tập nhiều, người ta càng giỏi hơn.",
          },
          {
            de: "Die Lösung ist zwar teuer, aber effektiv.",
            vi: "Giải pháp tuy đắt nhưng hiệu quả.",
          },
          {
            de: "Er hat weder angerufen noch geschrieben.",
            vi: "Anh ấy không gọi điện cũng không viết thư.",
          },
        ],
      },
      {
        rule: "Komplexe Konnektoren (C1): 'insofern als', 'zumal', 'geschweige denn', 'es sei denn', 'nichtsdestotrotz'.",
        ruleVi:
          "Từ nối phức tạp (C1): 'insofern als' (ở chỗ mà), 'zumal' (nhất là khi), 'geschweige denn' (chứ đừng nói đến), 'es sei denn' (trừ khi), 'nichtsdestotrotz' (tuy nhiên).",
        examples: [
          {
            de: "Er kann nicht einmal schwimmen, geschweige denn tauchen.",
            vi: "Anh ấy không biết bơi, chứ đừng nói đến lặn.",
          },
          {
            de: "Ich komme nicht, es sei denn, du holst mich ab.",
            vi: "Tôi không đến, trừ khi bạn đón tôi.",
          },
          {
            de: "Das ist problematisch, zumal die Ressourcen begrenzt sind.",
            vi: "Điều đó có vấn đề, nhất là khi nguồn lực hạn chế.",
          },
        ],
      },
      {
        rule: "Pro-Formen und Verweiswörter: 'dies', 'jene', 'dabei', 'dafür', 'hierbei', 'letztere', 'erstere' zur Textkohäsion.",
        ruleVi:
          "Đại từ thay thế và từ chỉ thị: 'dies' (điều này), 'jene' (điều kia), 'dabei' (trong đó), 'dafür' (cho điều đó), 'hierbei' (ở đây), 'letztere' (cái sau), 'erstere' (cái trước).",
        examples: [
          {
            de: "Es gibt Vor- und Nachteile. Erstere überwiegen.",
            vi: "Có ưu điểm và nhược điểm. Cái trước chiếm ưu thế.",
          },
          {
            de: "Die Studie zeigt neue Ergebnisse. Dabei ist besonders interessant, dass...",
            vi: "Nghiên cứu cho thấy kết quả mới. Trong đó đặc biệt thú vị là...",
          },
          {
            de: "Die Kosten steigen. Dies hat mehrere Ursachen.",
            vi: "Chi phí tăng. Điều này có nhiều nguyên nhân.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Je mehr man übt, je besser wird man.",
        correct: "Je mehr man übt, desto besser wird man.",
        explanation:
          "'Je ... desto/umso' (nicht 'je ... je'). Im zweiten Teil steht 'desto' oder 'umso'. / 'Je ... desto/umso' (không phải 'je ... je'). Phần hai dùng 'desto' hoặc 'umso'.",
      },
      {
        wrong: "Er kann nicht schwimmen, geschweige tauchen.",
        correct: "Er kann nicht schwimmen, geschweige denn tauchen.",
        explanation:
          "'Geschweige denn' ist eine feste Verbindung. 'denn' darf nicht weggelassen werden. / 'Geschweige denn' là cụm cố định, không bỏ 'denn'.",
      },
      {
        wrong: "Ich komme nicht, sei denn du holst mich ab.",
        correct: "Ich komme nicht, es sei denn, du holst mich ab.",
        explanation:
          "'Es sei denn' braucht 'es' am Anfang und Komma vor dem Nebensatz. / 'Es sei denn' cần 'es' ở đầu và dấu phẩy trước mệnh đề phụ.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng có các từ nối tương tự: 'tuy... nhưng', 'càng... càng', 'không chỉ... mà còn'. Tuy nhiên, trong tiếng Đức, từ nối ảnh hưởng đến VỊ TRÍ ĐỘNG TỪ. Ví dụ: sau 'desto' động từ chia đứng ngay sau. Đây là điểm khác biệt lớn với tiếng Việt, nơi từ nối không thay đổi trật tự câu.",
    exercises: [
      {
        type: "fillBlank",
        question: "_____ mehr man liest, _____ größer wird der Wortschatz.",
        questionVi: "Càng đọc nhiều, vốn từ vựng càng lớn.",
        answer: "Je, desto",
        explanation: "'Je ... desto' = càng... càng. Sau 'desto' động từ đứng vị trí 2.",
      },
      {
        type: "multipleChoice",
        question: "Sie hat das nicht verstanden, _____ erklären können.",
        questionVi: "Cô ấy không hiểu điều đó, chứ đừng nói đến giải thích.",
        options: ["geschweige denn", "es sei denn", "insofern als", "nichtsdestotrotz"],
        answer: "geschweige denn",
        explanation: "'Geschweige denn' = chứ đừng nói đến (dùng sau phủ định).",
      },
      {
        type: "translate",
        question: "Tôi sẽ không đi, trừ khi trời ngừng mưa.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Ich gehe nicht, es sei denn, es hört auf zu regnen.",
        explanation: "'Es sei denn' = trừ khi. Đi sau mệnh đề chính phủ định.",
      },
      {
        type: "reorder",
        question: "zwar / Die Lösung / ist / kompliziert / , / sie / aber / funktioniert",
        questionVi: "Sắp xếp: Giải pháp tuy phức tạp, nhưng nó hoạt động.",
        answer: "Die Lösung ist zwar kompliziert, aber sie funktioniert.",
        explanation: "'Zwar' đứng trong mệnh đề chính, 'aber' bắt đầu mệnh đề thứ hai.",
      },
      {
        type: "errorCorrection",
        question: "Finde den Fehler: 'Je schneller du fährst, desto die Gefahr ist größer.'",
        questionVi: "Tìm lỗi sai.",
        answer: "Je schneller du fährst, desto größer ist die Gefahr.",
        explanation: "Sau 'desto': tính từ so sánh + động từ + chủ ngữ (đảo ngữ). Không đặt mạo từ giữa 'desto' và tính từ.",
      },
    ],
  },

  // ============================================================
  // TOPIC 5: Modalität & Modalwörter (Kapitel 5)
  // ============================================================
  {
    id: "c1-gram-05",
    title: "Modalität & Modalwörter",
    titleVi: "Tình thái & Từ tình thái",
    chapter: 5,
    order: 5,
    level: "C1",
    explanation:
      "Modalität drückt die Einstellung des Sprechers zur Aussage aus: Sicherheit, Vermutung, Zweifel, Wunsch. Modalverben in subjektiver Bedeutung, Modalpartikeln und Modalwörter spielen auf C1-Niveau eine zentrale Rolle.\n\nTình thái diễn tả thái độ của người nói đối với phát ngôn: sự chắc chắn, phỏng đoán, nghi ngờ, mong muốn. Động từ tình thái ở nghĩa chủ quan, tiểu từ tình thái và từ tình thái đóng vai trò trung tâm ở trình độ C1.",
    rules: [
      {
        rule: "Subjektiver Gebrauch der Modalverben: 'müssen' (= sicher), 'dürfte' (= wahrscheinlich), 'könnte/mag' (= möglich), 'soll' (= Gerücht/Behauptung), 'will' (= Eigenbehauptung).",
        ruleVi:
          "Dùng chủ quan của động từ tình thái: 'müssen' (= chắc chắn), 'dürfte' (= có lẽ), 'könnte/mag' (= có thể), 'soll' (= nghe nói), 'will' (= tự tuyên bố).",
        examples: [
          {
            de: "Er muss krank sein. (= Ich bin sicher, dass er krank ist.)",
            vi: "Anh ấy chắc chắn bị ốm. (= Tôi chắc chắn rằng...)",
          },
          {
            de: "Sie dürfte etwa 40 Jahre alt sein. (= Wahrscheinlich ist sie 40.)",
            vi: "Cô ấy có lẽ khoảng 40 tuổi. (= Có lẽ cô ấy 40.)",
          },
          {
            de: "Er soll reich sein. (= Man sagt, er ist reich.)",
            vi: "Nghe nói anh ấy giàu. (= Người ta nói rằng...)",
          },
        ],
      },
      {
        rule: "Modalwörter/Satzadverbien der Sicherheit: 'zweifellos', 'vermutlich', 'angeblich', 'offensichtlich', 'anscheinend', 'womöglich'.",
        ruleVi:
          "Từ tình thái về mức độ chắc chắn: 'zweifellos' (chắc chắn), 'vermutlich' (có lẽ), 'angeblich' (được cho là), 'offensichtlich' (rõ ràng), 'anscheinend' (dường như), 'womöglich' (có thể).",
        examples: [
          {
            de: "Er hat vermutlich den Zug verpasst.",
            vi: "Anh ấy có lẽ đã lỡ tàu.",
          },
          {
            de: "Die Regierung hat angeblich neue Pläne.",
            vi: "Chính phủ được cho là có kế hoạch mới.",
          },
          {
            de: "Das Projekt ist offensichtlich gescheitert.",
            vi: "Dự án rõ ràng đã thất bại.",
          },
        ],
      },
      {
        rule: "Subjektive Modalverben in der Vergangenheit: Modalverb + Partizip II + haben/sein. Z.B.: 'Er muss krank gewesen sein.'",
        ruleVi:
          "Động từ tình thái chủ quan ở quá khứ: Động từ tình thái + Partizip II + haben/sein. VD: 'Er muss krank gewesen sein.' (Anh ấy chắc hẳn đã bị ốm.)",
        examples: [
          {
            de: "Sie muss den Brief bekommen haben. (= sicher)",
            vi: "Cô ấy chắc chắn đã nhận được thư.",
          },
          {
            de: "Er dürfte sich geirrt haben. (= wahrscheinlich)",
            vi: "Anh ấy có lẽ đã nhầm.",
          },
          {
            de: "Er will das nicht gesagt haben. (= Er behauptet, er hat das nicht gesagt.)",
            vi: "Anh ấy tuyên bố mình không nói điều đó.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Er muss krank gewesen haben.",
        correct: "Er muss krank gewesen sein.",
        explanation:
          "'Sein' (nicht 'haben'), weil 'krank sein' → 'gewesen sein'. / Dùng 'sein' (không phải 'haben') vì 'krank sein' → 'gewesen sein'.",
      },
      {
        wrong: "Sie könnte den Zug verpasst sein.",
        correct: "Sie könnte den Zug verpasst haben.",
        explanation:
          "'Verpassen' braucht 'haben' (nicht 'sein'): 'verpasst haben'. / 'Verpassen' cần 'haben' (không phải 'sein'): 'verpasst haben'.",
      },
      {
        wrong: "'Anscheinend' und 'scheinbar' sind gleich.",
        correct: "'Anscheinend' = es scheint so zu sein (wahrscheinlich wahr). 'Scheinbar' = es ist nur Schein (nicht wahr).",
        explanation:
          "'Anscheinend' = dường như (có vẻ đúng). 'Scheinbar' = chỉ bề ngoài (thực ra không đúng). Diese Unterscheidung ist wichtig!",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt dùng các từ như 'chắc chắn', 'có lẽ', 'nghe nói', 'dường như' để diễn tả tình thái. Tuy nhiên, tiếng Đức dùng ĐỘNG TỪ TÌNH THÁI thay đổi nghĩa (objektiv vs. subjektiv). 'Er muss arbeiten' (phải làm việc - khách quan) vs. 'Er muss krank sein' (chắc chắn bị ốm - chủ quan). Người Việt thường khó phân biệt hai cách dùng này.",
    exercises: [
      {
        type: "multipleChoice",
        question: "Sie _____ etwa 30 sein. (= Wahrscheinlich ist sie 30.)",
        questionVi: "Cô ấy có lẽ khoảng 30 tuổi.",
        options: ["dürfte", "muss", "soll", "will"],
        answer: "dürfte",
        explanation: "'Dürfte' = vermutlich/wahrscheinlich (mức độ chắc chắn vừa).",
      },
      {
        type: "fillBlank",
        question: "Er _____ sehr reich sein. (= Man sagt, er ist reich. / Gerücht)",
        questionVi: "Nghe nói anh ấy rất giàu. (Tin đồn)",
        answer: "soll",
        explanation: "'Soll' (subjektiv) = theo tin đồn/người ta nói. Không nhầm với 'sollen' (nên).",
      },
      {
        type: "transform",
        question: "Formen Sie um mit einem subjektiven Modalverb: 'Wahrscheinlich hat er den Zug verpasst.'",
        questionVi: "Chuyển đổi: dùng động từ tình thái chủ quan.",
        answer: "Er dürfte den Zug verpasst haben.",
        explanation: "'Dürfte + Partizip II + haben' = wahrscheinlich (quá khứ).",
      },
      {
        type: "translate",
        question: "Anh ấy chắc chắn đã ngủ quên. (dùng müssen)",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Er muss verschlafen haben.",
        explanation: "'Müssen' (subjektiv) + Partizip II + haben = chắc chắn (quá khứ).",
      },
      {
        type: "errorCorrection",
        question: "Finde den Fehler: 'Sie muss gestern hier gewesen haben.'",
        questionVi: "Tìm lỗi sai.",
        answer: "Sie muss gestern hier gewesen sein.",
        explanation: "'Gewesen' → 'sein' (không phải 'haben'). 'Hier sein' → 'hier gewesen sein'.",
      },
    ],
  },

  // ============================================================
  // TOPIC 6: Wortbildung (Kapitel 6)
  // ============================================================
  {
    id: "c1-gram-06",
    title: "Wortbildung (Komposita, Derivation, Konversion)",
    titleVi: "Cấu tạo từ (Từ ghép, Phái sinh, Chuyển loại)",
    chapter: 6,
    order: 6,
    level: "C1",
    explanation:
      "Die deutsche Wortbildung ist extrem produktiv. Auf C1-Niveau werden die systematischen Regeln für Komposition (Zusammensetzung), Derivation (Ableitung mit Präfixen/Suffixen) und Konversion (Wortartwechsel) behandelt. Diese Kenntnisse helfen enorm beim Leseverständnis.\n\nCấu tạo từ trong tiếng Đức cực kỳ linh hoạt. Ở trình độ C1, các quy tắc hệ thống về ghép từ (Komposition), phái sinh (Derivation với tiền tố/hậu tố) và chuyển loại (Konversion) được xử lý. Kiến thức này giúp rất nhiều cho việc đọc hiểu.",
    rules: [
      {
        rule: "Komposita: Bestimmungswort + Grundwort. Das Grundwort (letztes Element) bestimmt Genus und Wortart. Fugenelemente: -s-, -n-, -en-, -er-.",
        ruleVi:
          "Từ ghép: Từ xác định + Từ gốc. Từ gốc (phần cuối) quyết định giống và loại từ. Yếu tố nối: -s-, -n-, -en-, -er-.",
        examples: [
          {
            de: "die Arbeit + s + zeit = die Arbeitszeit (feminin, weil 'Zeit' feminin ist)",
            vi: "công việc + s + thời gian = thời gian làm việc (giống cái vì 'Zeit' giống cái)",
          },
          {
            de: "die Sonne + n + brille = die Sonnenbrille",
            vi: "mặt trời + n + kính = kính râm",
          },
          {
            de: "der Frühling + s + anfang = der Frühlingsanfang",
            vi: "mùa xuân + s + bắt đầu = đầu mùa xuân",
          },
        ],
      },
      {
        rule: "Derivation mit Präfixen: un- (Negation), ur- (ursprünglich), miss- (falsch), zer- (kaputt). Suffixe: -ung (Nomen), -lich/-ig/-bar (Adjektiv), -heit/-keit (Nomen).",
        ruleVi:
          "Phái sinh với tiền tố: un- (phủ định), ur- (nguyên thủy), miss- (sai), zer- (vỡ). Hậu tố: -ung (danh từ), -lich/-ig/-bar (tính từ), -heit/-keit (danh từ).",
        examples: [
          {
            de: "möglich → unmöglich, die Unmöglichkeit",
            vi: "có thể → không thể, sự bất khả thi",
          },
          {
            de: "verstehen → missverstehen, das Missverständnis",
            vi: "hiểu → hiểu nhầm, sự hiểu nhầm",
          },
          {
            de: "forschen → die Forschung, der Forscher, forschend",
            vi: "nghiên cứu → nghiên cứu (danh từ), nhà nghiên cứu, đang nghiên cứu",
          },
        ],
      },
      {
        rule: "Konversion: Wortartwechsel ohne Affix. Infinitiv → Nomen (das Lesen), Adjektiv → Nomen (der/die Kranke), Partizip → Adjektiv/Nomen.",
        ruleVi:
          "Chuyển loại: Chuyển đổi loại từ không cần tiền tố/hậu tố. Nguyên mẫu → Danh từ (das Lesen), Tính từ → Danh từ (der/die Kranke), Phân từ → Tính từ/Danh từ.",
        examples: [
          {
            de: "lesen → das Lesen (Infinitiv → Nomen, immer Neutrum)",
            vi: "đọc → việc đọc (nguyên mẫu → danh từ, luôn trung tính)",
          },
          {
            de: "krank → der Kranke / die Kranke (Adjektiv → Nomen, wird wie Adjektiv dekliniert)",
            vi: "ốm → bệnh nhân (tính từ → danh từ, biến cách như tính từ)",
          },
          {
            de: "angestellt → der/die Angestellte (Partizip II → Nomen)",
            vi: "được tuyển dụng → nhân viên (Partizip II → danh từ)",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "die Arbeitzeit",
        correct: "die Arbeitszeit",
        explanation:
          "Das Fugenelement '-s-' fehlt. Viele Komposita brauchen ein Fugenelement. / Thiếu yếu tố nối '-s-'. Nhiều từ ghép cần yếu tố nối.",
      },
      {
        wrong: "der Kranker ist hier.",
        correct: "Der Kranke ist hier.",
        explanation:
          "Substantivierte Adjektive werden wie Adjektive dekliniert: 'der Kranke' (mit bestimmtem Artikel → schwache Deklination). / Tính từ danh từ hóa biến cách như tính từ: 'der Kranke'.",
      },
      {
        wrong: "das Missverstand",
        correct: "das Missverständnis",
        explanation:
          "Das korrekte Suffix ist '-nis': Missverständnis. / Hậu tố đúng là '-nis': Missverständnis.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng ghép từ, nhưng thứ tự NGƯỢC lại: từ chính đứng trước, từ bổ nghĩa đứng sau (VD: 'máy giặt' = Waschmaschine). Trong tiếng Đức, từ gốc (quyết định nghĩa và giống) đứng CUỐI. Ngoài ra, tiếng Đức có hệ thống tiền tố/hậu tố phong phú mà tiếng Việt không có. Người Việt nên tập phân tích từ ghép từ phải sang trái.",
    exercises: [
      {
        type: "fillBlank",
        question: "die Wohnung + s + tür = die _____",
        questionVi: "căn hộ + s + cửa = _____",
        answer: "Wohnungstür",
        explanation: "Từ ghép với Fugenelement '-s-'. Giống cái vì 'Tür' là giống cái.",
      },
      {
        type: "multipleChoice",
        question: "Welches Wort ist durch Konversion entstanden?",
        questionVi: "Từ nào được tạo bằng chuyển loại?",
        options: ["das Lesen", "die Forschung", "unglücklich", "der Forscher"],
        answer: "das Lesen",
        explanation: "'Das Lesen' = Infinitiv → Nomen (chuyển loại). Các từ khác dùng hậu tố (phái sinh).",
      },
      {
        type: "transform",
        question: "Bilden Sie das Gegenteil mit einem Präfix: 'zufrieden'.",
        questionVi: "Tạo từ trái nghĩa bằng tiền tố: 'zufrieden'.",
        answer: "unzufrieden",
        explanation: "Tiền tố 'un-' tạo nghĩa phủ định: zufrieden → unzufrieden.",
      },
      {
        type: "translate",
        question: "Sự hiểu nhầm đã dẫn đến xung đột.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Das Missverständnis hat zu einem Konflikt geführt.",
        explanation: "'Missverständnis' (miss- + Verständnis) = sự hiểu nhầm.",
      },
      {
        type: "multipleChoice",
        question: "Welches Fugenelement passt? 'Geburt_____tag'",
        questionVi: "Yếu tố nối nào phù hợp?",
        options: ["-s-", "-n-", "-en-", "kein Fugenelement"],
        answer: "-s-",
        explanation: "'Geburtstag' — Fugenelement '-s-' sau 'Geburt'.",
      },
    ],
  },

  // ============================================================
  // TOPIC 7: Komplexe Attribute & Appositionen (Kapitel 7)
  // ============================================================
  {
    id: "c1-gram-07",
    title: "Komplexe Attribute & Appositionen",
    titleVi: "Thuộc tính phức tạp & Đồng vị ngữ",
    chapter: 7,
    order: 7,
    level: "C1",
    explanation:
      "Komplexe Attribute erweitern Nomen durch verschiedene Strukturen: Genitivattribute, Präpositionalattribute, erweiterte Partizipien und Appositionen. Auf C1-Niveau lernt man, diese Strukturen in akademischen Texten zu erkennen und selbst zu produzieren.\n\nThuộc tính phức tạp mở rộng danh từ bằng nhiều cấu trúc: thuộc tính sở hữu cách, thuộc tính giới từ, phân từ mở rộng và đồng vị ngữ. Ở trình độ C1, bạn học nhận diện và tự tạo các cấu trúc này trong văn bản học thuật.",
    rules: [
      {
        rule: "Genitivattribute (vorangestellt und nachgestellt): 'Goethes Werke' oder 'die Werke Goethes'. Nachgestellter Genitiv ist häufiger in der Schriftsprache.",
        ruleVi:
          "Thuộc tính sở hữu cách (đặt trước và sau): 'Goethes Werke' hoặc 'die Werke Goethes'. Sở hữu cách đặt sau phổ biến hơn trong văn viết.",
        examples: [
          {
            de: "Die Lösung des Problems erfordert Geduld.",
            vi: "Giải pháp cho vấn đề đòi hỏi sự kiên nhẫn.",
          },
          {
            de: "Der Einfluss der sozialen Medien auf die Jugend ist enorm.",
            vi: "Ảnh hưởng của mạng xã hội lên giới trẻ rất lớn.",
          },
          {
            de: "Aufgrund des schlechten Wetters wurde das Fest abgesagt.",
            vi: "Do thời tiết xấu, lễ hội đã bị hủy.",
          },
        ],
      },
      {
        rule: "Appositionen: Einschübe, die ein Nomen näher bestimmen. Sie stehen im gleichen Kasus wie das Bezugswort und werden durch Kommas abgetrennt.",
        ruleVi:
          "Đồng vị ngữ: Thành phần chêm, giải thích rõ hơn danh từ. Đứng cùng cách với từ được bổ nghĩa và được ngăn cách bằng dấu phẩy.",
        examples: [
          {
            de: "Herr Müller, der Leiter der Abteilung, hat zugestimmt.",
            vi: "Ông Müller, trưởng phòng, đã đồng ý.",
          },
          {
            de: "Berlin, die Hauptstadt Deutschlands, hat über 3 Millionen Einwohner.",
            vi: "Berlin, thủ đô nước Đức, có hơn 3 triệu dân.",
          },
          {
            de: "Ich habe mit Frau Schmidt, einer erfahrenen Anwältin, gesprochen.",
            vi: "Tôi đã nói chuyện với bà Schmidt, một luật sư giàu kinh nghiệm.",
          },
        ],
      },
      {
        rule: "Verschachtelte Attribute: Kombination aus Genitiv, Präpositionalattribut und Relativsatz in einem Satz.",
        ruleVi:
          "Thuộc tính lồng nhau: Kết hợp sở hữu cách, thuộc tính giới từ và mệnh đề quan hệ trong một câu.",
        examples: [
          {
            de: "Die Analyse der Auswirkungen des Klimawandels auf die Landwirtschaft in Südostasien...",
            vi: "Phân tích tác động của biến đổi khí hậu lên nông nghiệp ở Đông Nam Á...",
          },
          {
            de: "Die vom Minister vorgestellte Studie über den Zustand der Infrastruktur...",
            vi: "Nghiên cứu được bộ trưởng giới thiệu về tình trạng cơ sở hạ tầng...",
          },
          {
            de: "Der Bericht des Experten, der gestern veröffentlicht wurde, enthält neue Daten.",
            vi: "Báo cáo của chuyên gia, được công bố hôm qua, chứa dữ liệu mới.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Berlin, die Hauptstadt Deutschlands, haben über 3 Millionen Einwohner.",
        correct: "Berlin, die Hauptstadt Deutschlands, hat über 3 Millionen Einwohner.",
        explanation:
          "Das Verb richtet sich nach dem Subjekt 'Berlin' (Singular), nicht nach der Apposition. / Động từ chia theo chủ ngữ 'Berlin' (số ít), không theo đồng vị ngữ.",
      },
      {
        wrong: "Ich sprach mit Herrn Müller, der Leiter der Abteilung.",
        correct: "Ich sprach mit Herrn Müller, dem Leiter der Abteilung.",
        explanation:
          "Die Apposition steht im gleichen Kasus wie das Bezugswort: 'mit' + Dativ → 'dem Leiter'. / Đồng vị ngữ cùng cách với từ được bổ nghĩa: 'mit' + tặng cách → 'dem Leiter'.",
      },
      {
        wrong: "Die Lösung des Problem erfordert Geduld.",
        correct: "Die Lösung des Problems erfordert Geduld.",
        explanation:
          "Genitiv maskulin/neutrum Singular: '-s' am Nomen (des Problems). / Sở hữu cách giống đực/trung số ít: thêm '-s' vào danh từ.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt dùng 'của' cho sở hữu cách và không cần biến cách danh từ. Đồng vị ngữ trong tiếng Việt tương tự (VD: 'Berlin, thủ đô nước Đức'). Tuy nhiên, trong tiếng Đức, đồng vị ngữ PHẢI chia cùng cách (Kasus) với từ được bổ nghĩa — đây là điểm người Việt hay mắc lỗi vì tiếng Việt không có hệ thống cách.",
    exercises: [
      {
        type: "fillBlank",
        question: "Ich habe mit Professor Schmidt, _____ bekannten Forscher, gesprochen. (ein)",
        questionVi: "Tôi đã nói chuyện với giáo sư Schmidt, một nhà nghiên cứu nổi tiếng.",
        answer: "einem",
        explanation: "'Mit' + Dativ → đồng vị ngữ cũng ở Dativ: 'einem bekannten Forscher'.",
      },
      {
        type: "multipleChoice",
        question: "Die Analyse _____ Problems dauerte Wochen.",
        questionVi: "Việc phân tích vấn đề kéo dài hàng tuần.",
        options: ["des", "dem", "den", "der"],
        answer: "des",
        explanation: "Genitivattribut: 'die Analyse des Problems'. 'Problem' giống trung → 'des'.",
      },
      {
        type: "errorCorrection",
        question: "Finde den Fehler: 'Er gratulierte Frau Müller, eine hervorragende Wissenschaftlerin.'",
        questionVi: "Tìm lỗi sai.",
        answer: "Er gratulierte Frau Müller, einer hervorragenden Wissenschaftlerin.",
        explanation: "'Gratulieren' + Dativ → đồng vị ngữ cũng Dativ: 'einer hervorragenden Wissenschaftlerin'.",
      },
      {
        type: "translate",
        question: "Báo cáo của chuyên gia về tình hình kinh tế rất bi quan.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Der Bericht des Experten über die wirtschaftliche Lage ist sehr pessimistisch.",
        explanation: "Genitivattribut: 'des Experten' + Präpositionalattribut: 'über die wirtschaftliche Lage'.",
      },
      {
        type: "reorder",
        question: "der / Einfluss / sozialen / der / Medien / auf / Jugendliche / ist / enorm",
        questionVi: "Sắp xếp: Ảnh hưởng của mạng xã hội lên giới trẻ rất lớn.",
        answer: "Der Einfluss der sozialen Medien auf Jugendliche ist enorm.",
        explanation: "Genitivattribut 'der sozialen Medien' + Präpositionalattribut 'auf Jugendliche'.",
      },
    ],
  },

  // ============================================================
  // TOPIC 8: Satzadverbien & Kommentaradverbien (Kapitel 8)
  // ============================================================
  {
    id: "c1-gram-08",
    title: "Satzadverbien & Kommentaradverbien",
    titleVi: "Trạng từ câu & Trạng từ bình luận",
    chapter: 8,
    order: 8,
    level: "C1",
    explanation:
      "Satzadverbien kommentieren die gesamte Aussage (nicht nur das Verb). Sie drücken die Haltung des Sprechers aus und stehen oft im Vorfeld oder nach dem finiten Verb. Kommentaradverbien bewerten oder ordnen die Information ein.\n\nTrạng từ câu bình luận toàn bộ phát ngôn (không chỉ động từ). Chúng diễn tả thái độ của người nói và thường đứng ở đầu câu hoặc sau động từ chia. Trạng từ bình luận đánh giá hoặc sắp xếp thông tin.",
    rules: [
      {
        rule: "Satzadverbien der Bewertung: 'leider', 'glücklicherweise', 'bedauerlicherweise', 'erstaunlicherweise', 'bezeichnenderweise'.",
        ruleVi:
          "Trạng từ câu đánh giá: 'leider' (tiếc là), 'glücklicherweise' (may mắn là), 'bedauerlicherweise' (đáng tiếc là), 'erstaunlicherweise' (đáng ngạc nhiên là), 'bezeichnenderweise' (đáng chú ý là).",
        examples: [
          {
            de: "Bedauerlicherweise müssen wir das Projekt einstellen.",
            vi: "Đáng tiếc là chúng tôi phải dừng dự án.",
          },
          {
            de: "Erstaunlicherweise hat er die Prüfung bestanden.",
            vi: "Đáng ngạc nhiên là anh ấy đã đỗ kỳ thi.",
          },
          {
            de: "Das Ergebnis ist bezeichnenderweise nicht veröffentlicht worden.",
            vi: "Đáng chú ý là kết quả không được công bố.",
          },
        ],
      },
      {
        rule: "Ordnende Kommentaradverbien: 'einerseits ... andererseits', 'zunächst', 'schließlich', 'ferner', 'darüber hinaus', 'im Übrigen'.",
        ruleVi:
          "Trạng từ bình luận sắp xếp: 'einerseits ... andererseits' (một mặt... mặt khác), 'zunächst' (trước tiên), 'schließlich' (cuối cùng), 'ferner' (hơn nữa), 'darüber hinaus' (ngoài ra), 'im Übrigen' (ngoài ra/thêm vào đó).",
        examples: [
          {
            de: "Einerseits ist das Angebot günstig, andererseits fehlt die Qualität.",
            vi: "Một mặt giá rẻ, mặt khác thiếu chất lượng.",
          },
          {
            de: "Ferner ist zu beachten, dass die Frist am Freitag endet.",
            vi: "Hơn nữa cần lưu ý rằng hạn chót là thứ Sáu.",
          },
          {
            de: "Darüber hinaus wurden neue Maßnahmen beschlossen.",
            vi: "Ngoài ra, các biện pháp mới đã được thông qua.",
          },
        ],
      },
      {
        rule: "Position im Satz: Satzadverbien können im Vorfeld (Position 1), im Mittelfeld (nach finitem Verb) oder als Einschub stehen.",
        ruleVi:
          "Vị trí trong câu: Trạng từ câu có thể đứng ở vị trí 1 (đầu câu), giữa câu (sau động từ chia) hoặc làm thành phần chêm.",
        examples: [
          {
            de: "Vermutlich kommt er morgen. (Vorfeld)",
            vi: "Có lẽ anh ấy đến ngày mai. (đầu câu)",
          },
          {
            de: "Er kommt vermutlich morgen. (Mittelfeld)",
            vi: "Anh ấy có lẽ đến ngày mai. (giữa câu)",
          },
          {
            de: "Er kommt, vermutlich, erst morgen. (Einschub)",
            vi: "Anh ấy đến, có lẽ, mãi ngày mai. (chêm)",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Einerseits das Angebot ist günstig, andererseits fehlt die Qualität.",
        correct: "Einerseits ist das Angebot günstig, andererseits fehlt die Qualität.",
        explanation:
          "Nach 'einerseits' im Vorfeld kommt das finite Verb an Position 2 (Inversion). / Sau 'einerseits' ở đầu câu, động từ chia ở vị trí 2 (đảo ngữ).",
      },
      {
        wrong: "Leider, er kann nicht kommen.",
        correct: "Leider kann er nicht kommen.",
        explanation:
          "'Leider' im Vorfeld → Verb an Position 2 → Subjekt an Position 3. Kein Komma nach dem Satzadverb im Vorfeld. / 'Leider' ở đầu câu → động từ vị trí 2 → chủ ngữ vị trí 3. Không dấu phẩy.",
      },
      {
        wrong: "Ferner, wir sollten beachten, dass...",
        correct: "Ferner sollten wir beachten, dass...",
        explanation:
          "'Ferner' besetzt das Vorfeld, daher: Ferner + Verb + Subjekt. / 'Ferner' chiếm vị trí đầu, nên: Ferner + động từ + chủ ngữ.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng có trạng từ câu tương tự: 'may mắn là', 'tiếc là', 'một mặt... mặt khác'. Tuy nhiên, trong tiếng Việt, trạng từ câu KHÔNG ảnh hưởng đến trật tự từ. Trong tiếng Đức, khi trạng từ câu đứng đầu câu (Vorfeld), động từ chia PHẢI đứng ngay sau (vị trí 2). Đây là quy tắc V2 đặc trưng của tiếng Đức.",
    exercises: [
      {
        type: "fillBlank",
        question: "_____ hat sie die Stelle bekommen, obwohl sie wenig Erfahrung hat. (đáng ngạc nhiên là)",
        questionVi: "Đáng ngạc nhiên là cô ấy đã được việc dù ít kinh nghiệm.",
        answer: "Erstaunlicherweise",
        explanation: "'Erstaunlicherweise' = đáng ngạc nhiên là. Ở Vorfeld → động từ 'hat' ở vị trí 2.",
      },
      {
        type: "multipleChoice",
        question: "_____ ist die neue Regelung sinnvoll, _____ bringt sie Probleme mit sich.",
        questionVi: "Một mặt quy định mới hợp lý, mặt khác nó gây ra vấn đề.",
        options: [
          "Einerseits ... andererseits",
          "Zwar ... aber",
          "Weder ... noch",
          "Sowohl ... als auch",
        ],
        answer: "Einerseits ... andererseits",
        explanation: "'Einerseits ... andererseits' = một mặt... mặt khác (đối lập cân bằng).",
      },
      {
        type: "reorder",
        question: "Bedauerlicherweise / wir / müssen / mitteilen / , / dass / das Konzert / abgesagt / wurde",
        questionVi: "Sắp xếp: Đáng tiếc là chúng tôi phải thông báo buổi hòa nhạc bị hủy.",
        answer: "Bedauerlicherweise müssen wir mitteilen, dass das Konzert abgesagt wurde.",
        explanation: "'Bedauerlicherweise' ở Vorfeld → 'müssen' ở vị trí 2 → 'wir' ở vị trí 3.",
      },
      {
        type: "translate",
        question: "Hơn nữa, cần lưu ý rằng thời hạn đã qua.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Ferner ist zu beachten, dass die Frist abgelaufen ist.",
        explanation: "'Ferner' = hơn nữa. 'Ist zu beachten' = cần lưu ý (Passiversatzform).",
      },
      {
        type: "errorCorrection",
        question: "Finde den Fehler: 'Glücklicherweise, das Wetter war schön.'",
        questionVi: "Tìm lỗi sai.",
        answer: "Glücklicherweise war das Wetter schön.",
        explanation: "Trạng từ câu ở Vorfeld: không dấu phẩy, động từ chia ở vị trí 2. 'Glücklicherweise war...'",
      },
    ],
  },

  // ============================================================
  // TOPIC 9: Wissenschaftssprachliche Strukturen (Kapitel 9)
  // ============================================================
  {
    id: "c1-gram-09",
    title: "Wissenschaftssprachliche Strukturen",
    titleVi: "Cấu trúc ngôn ngữ khoa học",
    chapter: 9,
    order: 9,
    level: "C1",
    explanation:
      "Die deutsche Wissenschaftssprache hat eigene grammatische Merkmale: Passivkonstruktionen, unpersönliche Ausdrücke, Nominalisierungen und komplexe Satzgefüge. Diese Strukturen sind für Studium und akademisches Schreiben unverzichtbar.\n\nNgôn ngữ khoa học tiếng Đức có các đặc điểm ngữ pháp riêng: cấu trúc bị động, diễn đạt vô nhân xưng, danh từ hóa và câu phức. Các cấu trúc này không thể thiếu cho việc học đại học và viết học thuật.",
    rules: [
      {
        rule: "Passiversatzformen: 'sein + zu + Infinitiv', 'sich lassen + Infinitiv', '-bar/-lich'-Adjektive als Alternative zum Passiv.",
        ruleVi:
          "Dạng thay thế bị động: 'sein + zu + Infinitiv', 'sich lassen + Infinitiv', tính từ '-bar/-lich' thay thế cho bị động.",
        examples: [
          {
            de: "Das Problem ist leicht zu lösen. (= kann leicht gelöst werden)",
            vi: "Vấn đề dễ giải quyết. (= có thể được giải quyết dễ dàng)",
          },
          {
            de: "Die Ergebnisse lassen sich folgendermaßen interpretieren.",
            vi: "Kết quả có thể được giải thích như sau.",
          },
          {
            de: "Die Daten sind vergleichbar. (= können verglichen werden)",
            vi: "Dữ liệu có thể so sánh được.",
          },
        ],
      },
      {
        rule: "Unpersönliche Konstruktionen: 'es ist festzustellen', 'es lässt sich sagen', 'es zeigt sich', 'es sei darauf hingewiesen'.",
        ruleVi:
          "Cấu trúc vô nhân xưng: 'es ist festzustellen' (cần nhận thấy), 'es lässt sich sagen' (có thể nói), 'es zeigt sich' (cho thấy), 'es sei darauf hingewiesen' (cần chỉ ra).",
        examples: [
          {
            de: "Es ist festzustellen, dass die Ergebnisse signifikant sind.",
            vi: "Cần nhận thấy rằng kết quả có ý nghĩa thống kê.",
          },
          {
            de: "Es lässt sich zusammenfassen, dass die Hypothese bestätigt wurde.",
            vi: "Có thể tóm tắt rằng giả thuyết đã được xác nhận.",
          },
          {
            de: "Es sei darauf hingewiesen, dass weitere Forschung nötig ist.",
            vi: "Cần chỉ ra rằng cần nghiên cứu thêm.",
          },
        ],
      },
      {
        rule: "Nominalisierung in der Wissenschaftssprache: Verbale Aussagen werden in nominale Strukturen umgewandelt für einen kompakteren Stil.",
        ruleVi:
          "Danh từ hóa trong ngôn ngữ khoa học: Phát ngôn dùng động từ được chuyển sang cấu trúc danh từ để văn phong ngắn gọn hơn.",
        examples: [
          {
            de: "Verbal: 'Weil die Bevölkerung wächst, ...' → Nominal: 'Aufgrund des Bevölkerungswachstums...'",
            vi: "Dùng động từ: 'Vì dân số tăng...' → Danh từ hóa: 'Do sự tăng trưởng dân số...'",
          },
          {
            de: "Verbal: 'Man hat die Daten analysiert.' → Nominal: 'Die Analyse der Daten ergab...'",
            vi: "Dùng động từ: 'Người ta đã phân tích dữ liệu.' → Danh từ hóa: 'Việc phân tích dữ liệu cho thấy...'",
          },
          {
            de: "Verbal: 'Die Forscher haben beobachtet, dass...' → Nominal: 'Die Beobachtung der Forscher zeigt, dass...'",
            vi: "Dùng động từ: 'Các nhà nghiên cứu đã quan sát rằng...' → Danh từ hóa: 'Quan sát của các nhà nghiên cứu cho thấy...'",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Das Problem lässt leicht lösen.",
        correct: "Das Problem lässt sich leicht lösen.",
        explanation:
          "'Sich lassen + Infinitiv' braucht das Reflexivpronomen 'sich'. / 'Sich lassen + Infinitiv' cần đại từ phản thân 'sich'.",
      },
      {
        wrong: "Es ist zu feststellen, dass...",
        correct: "Es ist festzustellen, dass...",
        explanation:
          "Bei trennbaren Verben steht 'zu' zwischen Präfix und Verbstamm: 'fest-zu-stellen'. / Với động từ tách, 'zu' đứng giữa tiền tố và gốc: 'fest-zu-stellen'.",
      },
      {
        wrong: "Aufgrund des Bevölkerung Wachstums...",
        correct: "Aufgrund des Bevölkerungswachstums...",
        explanation:
          "Es ist ein Kompositum: 'Bevölkerungswachstum' (ein Wort). Genitiv: 'des Bevölkerungswachstums'. / Đây là từ ghép: 'Bevölkerungswachstum' (một từ). Sở hữu cách: 'des Bevölkerungswachstums'.",
      },
    ],
    vietnameseComparison:
      "Ngôn ngữ khoa học tiếng Việt cũng trang trọng hơn ngôn ngữ hàng ngày, nhưng không thay đổi cấu trúc ngữ pháp nhiều. Trong tiếng Đức, ngôn ngữ khoa học dùng NHIỀU bị động, danh từ hóa và cấu trúc vô nhân xưng hơn hẳn. Người Việt viết bài học thuật tiếng Đức thường viết quá 'nói' (mündlich) — cần tập chuyển sang phong cách danh từ hóa và bị động.",
    exercises: [
      {
        type: "transform",
        question: "Wandeln Sie ins Passiv um: 'Man kann das Problem leicht lösen.'",
        questionVi: "Chuyển sang dạng thay thế bị động.",
        answer: "Das Problem lässt sich leicht lösen. / Das Problem ist leicht zu lösen.",
        explanation: "Hai dạng thay thế bị động: 'sich lassen + Inf.' hoặc 'sein + zu + Inf.'",
      },
      {
        type: "fillBlank",
        question: "Es ist _____, dass die Ergebnisse keine Signifikanz zeigen. (feststellen)",
        questionVi: "Cần nhận thấy rằng kết quả không có ý nghĩa thống kê.",
        answer: "festzustellen",
        explanation: "'Es ist festzustellen' — trennbares Verb: 'zu' giữa tiền tố và gốc.",
      },
      {
        type: "multipleChoice",
        question: "Welcher Ausdruck ist NICHT wissenschaftssprachlich?",
        questionVi: "Biểu đạt nào KHÔNG phải ngôn ngữ khoa học?",
        options: [
          "Ich finde, das ist total cool.",
          "Es lässt sich feststellen, dass...",
          "Aufgrund der Ergebnisse...",
          "Es sei darauf hingewiesen, dass...",
        ],
        answer: "Ich finde, das ist total cool.",
        explanation: "'Ich finde' và 'total cool' là ngôn ngữ nói. Khoa học dùng các cấu trúc vô nhân xưng.",
      },
      {
        type: "translate",
        question: "Do thiếu dữ liệu, không thể đưa ra kết luận rõ ràng.",
        questionVi: "Dịch sang tiếng Đức (ngôn ngữ khoa học).",
        answer: "Aufgrund fehlender Daten lässt sich keine eindeutige Schlussfolgerung ziehen.",
        explanation: "'Aufgrund' + Genitiv (fehlender Daten) + 'sich lassen' (Passiversatzform).",
      },
      {
        type: "transform",
        question: "Nominalisieren Sie: 'Weil die Kosten gestiegen sind, musste man sparen.'",
        questionVi: "Danh từ hóa.",
        answer: "Aufgrund des Kostenanstiegs musste man sparen.",
        explanation: "'Weil die Kosten gestiegen sind' → 'Aufgrund des Kostenanstiegs' (danh từ hóa).",
      },
    ],
  },

  // ============================================================
  // TOPIC 10: Stilistik & Register (Kapitel 10)
  // ============================================================
  {
    id: "c1-gram-10",
    title: "Stilistik & Register",
    titleVi: "Phong cách & Ngữ vực",
    chapter: 10,
    order: 10,
    level: "C1",
    explanation:
      "Auf C1-Niveau muss man verschiedene Stilebenen (Register) erkennen und bewusst einsetzen: Umgangssprache, Standardsprache, gehobene Sprache und Fachsprache. Die Wahl des Registers hängt von Kontext, Adressat und Textsorte ab.\n\nỞ trình độ C1, bạn phải nhận biết và sử dụng có ý thức các cấp độ phong cách (ngữ vực): ngôn ngữ thông tục, ngôn ngữ chuẩn, ngôn ngữ trang trọng và ngôn ngữ chuyên ngành. Việc chọn ngữ vực phụ thuộc vào ngữ cảnh, người nghe và loại văn bản.",
    rules: [
      {
        rule: "Register erkennen: Umgangssprache (Partikeln, Kurzformen, Slang) vs. Standardsprache vs. gehobene Sprache (Konjunktiv I, Passiv, Nominalisierung).",
        ruleVi:
          "Nhận biết ngữ vực: Ngôn ngữ thông tục (tiểu từ, dạng rút gọn, tiếng lóng) vs. Ngôn ngữ chuẩn vs. Ngôn ngữ trang trọng (Konjunktiv I, bị động, danh từ hóa).",
        examples: [
          {
            de: "Umgangssprache: 'Ich hab keinen Bock drauf.' → Standard: 'Ich habe keine Lust darauf.' → Gehoben: 'Ich verspüre keinerlei Neigung dazu.'",
            vi: "Thông tục: 'Tao chả thích.' → Chuẩn: 'Tôi không muốn.' → Trang trọng: 'Tôi không có hứng thú nào về điều đó.'",
          },
          {
            de: "Umgangssprache: 'Das ist voll krass!' → Standard: 'Das ist sehr beeindruckend.' → Gehoben: 'Das ist in hohem Maße bemerkenswert.'",
            vi: "Thông tục: 'Điên quá!' → Chuẩn: 'Rất ấn tượng.' → Trang trọng: 'Điều này vô cùng đáng chú ý.'",
          },
          {
            de: "Umgangssprache: 'Klar, mach ich!' → Standard: 'Ja, das mache ich gerne.' → Gehoben: 'Selbstverständlich werde ich dem nachkommen.'",
            vi: "Thông tục: 'OK, làm liền!' → Chuẩn: 'Vâng, tôi sẵn lòng.' → Trang trọng: 'Đương nhiên tôi sẽ thực hiện.'",
          },
        ],
      },
      {
        rule: "Formelle Schriftsprache: Passiv, Konjunktiv I, Funktionsverbgefüge, Nominalisierungen, unpersönliche Konstruktionen.",
        ruleVi:
          "Ngôn ngữ viết trang trọng: Bị động, Konjunktiv I, cụm động từ chức năng, danh từ hóa, cấu trúc vô nhân xưng.",
        examples: [
          {
            de: "Informell: 'Man hat die Studie gemacht.' → Formell: 'Die Studie wurde durchgeführt.'",
            vi: "Không trang trọng: 'Người ta đã làm nghiên cứu.' → Trang trọng: 'Nghiên cứu đã được thực hiện.'",
          },
          {
            de: "Informell: 'Er sagt, er kommt.' → Formell: 'Er teilte mit, er komme / werde kommen.'",
            vi: "Không trang trọng: 'Anh ấy nói anh ấy đến.' → Trang trọng: 'Anh ấy thông báo rằng anh ấy sẽ đến.'",
          },
          {
            de: "Informell: 'Wir müssen das Problem lösen.' → Formell: 'Das Problem bedarf einer Lösung.'",
            vi: "Không trang trọng: 'Chúng ta phải giải quyết vấn đề.' → Trang trọng: 'Vấn đề cần một giải pháp.'",
          },
        ],
      },
      {
        rule: "Stilistische Mittel: Ironie, Euphemismus, Understatement, rhetorische Fragen und ihre grammatischen Merkmale.",
        ruleVi:
          "Phương tiện tu từ: Mỉa mai, nói giảm nói tránh, nói nhẹ hơn thực tế, câu hỏi tu từ và các đặc điểm ngữ pháp của chúng.",
        examples: [
          {
            de: "Euphemismus: 'Er ist von uns gegangen.' (= Er ist gestorben.)",
            vi: "Nói giảm: 'Anh ấy đã ra đi.' (= Anh ấy đã chết.)",
          },
          {
            de: "Rhetorische Frage: 'Wer hätte das gedacht?' (= Niemand hätte das gedacht.)",
            vi: "Câu hỏi tu từ: 'Ai mà nghĩ được?' (= Không ai nghĩ được.)",
          },
          {
            de: "Ironie: 'Na, das hast du ja toll gemacht!' (= Das war schlecht.)",
            vi: "Mỉa mai: 'Ồ, anh làm tuyệt lắm!' (= Làm tệ.)",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "In einer Bewerbung: 'Ich hab voll Bock auf den Job!'",
        correct: "In einer Bewerbung: 'Ich bin sehr motiviert und interessiere mich für die Stelle.'",
        explanation:
          "Umgangssprache in formellen Kontexten ist unangemessen. Bewerbungen erfordern Standardsprache oder gehobene Sprache. / Ngôn ngữ thông tục trong ngữ cảnh trang trọng không phù hợp.",
      },
      {
        wrong: "In einem Gespräch mit Freunden: 'Es ist festzustellen, dass das Essen vorzüglich ist.'",
        correct: "In einem Gespräch mit Freunden: 'Das Essen schmeckt super!'",
        explanation:
          "Wissenschaftssprache unter Freunden klingt unnatürlich und distanziert. / Ngôn ngữ khoa học giữa bạn bè nghe không tự nhiên.",
      },
      {
        wrong: "In einer E-Mail an den Professor: 'Hey Prof, ich brauch mal Hilfe.'",
        correct: "In einer E-Mail an den Professor: 'Sehr geehrter Herr Professor, ich würde Sie gerne um Unterstützung bitten.'",
        explanation:
          "E-Mails an Professoren erfordern formelle Anrede und höfliche Sprache. / Email cho giáo sư cần xưng hô trang trọng và ngôn ngữ lịch sự.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng có các cấp độ phong cách: ngôn ngữ thông tục ('tao, mày'), ngôn ngữ chuẩn ('tôi, bạn'), ngôn ngữ trang trọng ('quý vị, quý ông bà'). Tuy nhiên, sự khác biệt chủ yếu ở ĐẠI TỪ NHÂN XƯNG. Trong tiếng Đức, sự khác biệt nằm ở CẤU TRÚC NGỮ PHÁP (bị động vs. chủ động, danh từ hóa vs. động từ, Konjunktiv vs. Indikativ).",
    exercises: [
      {
        type: "multipleChoice",
        question: "Welcher Satz passt in eine wissenschaftliche Arbeit?",
        questionVi: "Câu nào phù hợp trong bài viết khoa học?",
        options: [
          "Die Ergebnisse lassen den Schluss zu, dass...",
          "Ich finde, die Ergebnisse sind echt krass.",
          "Also, die Ergebnisse sind super.",
          "Die Ergebnisse? Nicht schlecht!",
        ],
        answer: "Die Ergebnisse lassen den Schluss zu, dass...",
        explanation: "Ngôn ngữ khoa học: cấu trúc vô nhân xưng, trang trọng. Các lựa chọn khác là thông tục.",
      },
      {
        type: "transform",
        question: "Formulieren Sie formeller um: 'Man muss das Problem schnell lösen.'",
        questionVi: "Chuyển sang phong cách trang trọng hơn.",
        answer: "Das Problem bedarf einer umgehenden Lösung.",
        explanation: "'Bedarf + Genitiv' = cần (trang trọng). 'Umgehend' = schnell (trang trọng).",
      },
      {
        type: "fillBlank",
        question: "In einer Bewerbung: 'Ich _____ mich sehr über eine Einladung zum Vorstellungsgespräch _____.' (freuen)",
        questionVi: "Trong đơn xin việc: Tôi sẽ rất vui được mời phỏng vấn.",
        answer: "würde, freuen",
        explanation: "Konjunktiv II: 'würde mich freuen' — lịch sự, trang trọng cho đơn xin việc.",
      },
      {
        type: "translate",
        question: "Cần chỉ ra rằng kết quả vẫn cần xác minh.",
        questionVi: "Dịch sang tiếng Đức (ngôn ngữ khoa học).",
        answer: "Es sei darauf hingewiesen, dass die Ergebnisse noch der Überprüfung bedürfen.",
        explanation: "'Es sei darauf hingewiesen' (Konj. I, trang trọng) + 'bedürfen + Gen.' (cần).",
      },
      {
        type: "errorCorrection",
        question: "Kontext: Wissenschaftliche Arbeit. Finde den Stilfehler: 'Die Forscher haben rausgefunden, dass das Zeug echt gut wirkt.'",
        questionVi: "Tìm lỗi phong cách trong bài viết khoa học.",
        answer: "Die Forscher haben herausgefunden, dass die Substanz eine signifikante Wirkung zeigt.",
        explanation: "'Rausgefunden' → 'herausgefunden', 'das Zeug' → 'die Substanz', 'echt gut wirkt' → 'eine signifikante Wirkung zeigt'.",
      },
    ],
  },

  // ============================================================
  // TOPIC 11: Fehleranalyse & Interferenzphänomene (Vietnamesisch-Deutsch) (Kapitel 10)
  // ============================================================
  {
    id: "c1-gram-11",
    title: "Fehleranalyse & Interferenzphänomene (Vietnamesisch-Deutsch)",
    titleVi: "Phân tích lỗi & Hiện tượng giao thoa (Việt-Đức)",
    chapter: 10,
    order: 11,
    level: "C1",
    explanation:
      "Auf C1-Niveau werden typische Fehler analysiert, die durch den Einfluss des Vietnamesischen entstehen (Interferenz). Dazu gehören: fehlende Artikel, keine Verbkonjugation, falsche Wortstellung, fehlende Kasus und Genusfehler. Diese bewusste Analyse hilft, fossile Fehler zu überwinden.\n\nỞ trình độ C1, các lỗi điển hình do ảnh hưởng của tiếng Việt (giao thoa ngôn ngữ) được phân tích. Bao gồm: thiếu mạo từ, không chia động từ, sai trật tự từ, thiếu cách và lỗi giống. Phân tích có ý thức này giúp khắc phục lỗi hóa thạch.",
    rules: [
      {
        rule: "Interferenz bei Artikeln: Vietnamesisch hat keine Artikel. Typische Fehler: fehlende oder falsche Artikel, falsches Genus.",
        ruleVi:
          "Giao thoa về mạo từ: Tiếng Việt không có mạo từ. Lỗi điển hình: thiếu hoặc sai mạo từ, sai giống.",
        examples: [
          {
            de: "Fehler: 'Ich kaufe Buch.' → Korrekt: 'Ich kaufe ein Buch / das Buch.'",
            vi: "Lỗi: 'Tôi mua sách.' → Đúng: 'Tôi mua một cuốn sách / cuốn sách đó.'",
          },
          {
            de: "Fehler: 'Der Mädchen spielt.' → Korrekt: 'Das Mädchen spielt.' (Neutrum!)",
            vi: "Lỗi: đoán giống theo nghĩa (bé gái → giống cái). → Đúng: 'das Mädchen' (giống trung!).",
          },
          {
            de: "Fehler: 'Ich mag Musik.' → Besser: 'Ich mag Musik.' (hier OK, weil unzählbar/generisch)",
            vi: "Chú ý: Danh từ không đếm được/khái quát có thể không cần mạo từ: 'Ich mag Musik.' (đúng)",
          },
        ],
      },
      {
        rule: "Interferenz bei Wortstellung: Vietnamesisch hat SVO-Struktur ohne V2-Regel. Typische Fehler: Verb nicht an Position 2, falscher Nebensatz.",
        ruleVi:
          "Giao thoa về trật tự từ: Tiếng Việt có cấu trúc SVO không có quy tắc V2. Lỗi điển hình: động từ không ở vị trí 2, sai mệnh đề phụ.",
        examples: [
          {
            de: "Fehler: 'Gestern ich habe Deutsch gelernt.' → Korrekt: 'Gestern habe ich Deutsch gelernt.'",
            vi: "Lỗi: Sau trạng ngữ đầu câu, quên đảo chủ ngữ-động từ. → Đúng: V2-Regel!",
          },
          {
            de: "Fehler: 'Ich weiß, er kommt morgen.' → Korrekt: 'Ich weiß, dass er morgen kommt.'",
            vi: "Lỗi: Thiếu 'dass' và sai trật tự (mệnh đề phụ: động từ cuối).",
          },
          {
            de: "Fehler: 'Weil ich bin müde, gehe ich schlafen.' → Korrekt: 'Weil ich müde bin, gehe ich schlafen.'",
            vi: "Lỗi: Trong mệnh đề phụ, động từ chia phải ở CUỐI câu.",
          },
        ],
      },
      {
        rule: "Interferenz bei Tempus und Aspekt: Vietnamesisch markiert Tempus nicht durch Verbkonjugation, sondern durch Kontextwörter (đã, đang, sẽ).",
        ruleVi:
          "Giao thoa về thì và thể: Tiếng Việt không đánh dấu thì bằng chia động từ, mà bằng từ ngữ cảnh (đã, đang, sẽ).",
        examples: [
          {
            de: "Fehler: 'Gestern ich gehen Schule.' → Korrekt: 'Gestern bin ich zur Schule gegangen.'",
            vi: "Lỗi: Không chia động từ theo thì. → Đúng: Perfekt 'bin gegangen' vì là quá khứ.",
          },
          {
            de: "Fehler: 'Ich wohne seit 5 Jahren hier.' (korrekt!) — Aber: 'Ich habe seit 5 Jahren hier gewohnt.' (falsch!)",
            vi: "Chú ý: 'Seit' + Präsens (không phải Perfekt). 'Tôi sống ở đây 5 năm rồi' = Präsens!",
          },
          {
            de: "Fehler: 'Wenn ich werde alt, ...' → Korrekt: 'Wenn ich alt werde, ...'",
            vi: "Lỗi: Trong mệnh đề phụ (wenn), động từ chia ở cuối: 'alt werde' (không phải 'werde alt').",
          },
        ],
      },
      {
        rule: "Interferenz bei Kasus: Vietnamesisch hat kein Kasussystem. Typische Fehler: falscher Kasus nach Präpositionen und Verben.",
        ruleVi:
          "Giao thoa về cách: Tiếng Việt không có hệ thống cách. Lỗi điển hình: sai cách sau giới từ và động từ.",
        examples: [
          {
            de: "Fehler: 'Ich helfe der Mann.' → Korrekt: 'Ich helfe dem Mann.' (helfen + Dativ!)",
            vi: "Lỗi: 'Helfen' yêu cầu Dativ, không phải Nominativ. 'Dem Mann' (Dativ).",
          },
          {
            de: "Fehler: 'Ich gehe in die Schule.' vs. 'Ich bin in die Schule.' → Korrekt: 'Ich bin in der Schule.'",
            vi: "Lỗi: Wechselpräposition: 'in + Akk.' (chuyển động) vs. 'in + Dat.' (vị trí).",
          },
          {
            de: "Fehler: 'Wegen der Regen...' → Korrekt: 'Wegen des Regens...' (Genitiv!)",
            vi: "Lỗi: 'Wegen' + Genitiv: 'des Regens' (không phải 'der Regen').",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Ich habe eine Hund. Er ist sehr süß.",
        correct: "Ich habe einen Hund. Er ist sehr süß.",
        explanation:
          "'Haben' + Akkusativ: 'einen Hund' (maskulin, Akkusativ). / 'Haben' + đối cách: 'einen Hund' (giống đực, đối cách).",
      },
      {
        wrong: "Obwohl ich habe keine Zeit, komme ich trotzdem.",
        correct: "Obwohl ich keine Zeit habe, komme ich trotzdem.",
        explanation:
          "In Nebensätzen mit 'obwohl' steht das konjugierte Verb am Ende. / Trong mệnh đề phụ với 'obwohl', động từ chia đứng cuối.",
      },
      {
        wrong: "Seit 2020 ich habe in Deutschland gelebt.",
        correct: "Seit 2020 lebe ich in Deutschland.",
        explanation:
          "1) V2-Regel: 'Seit 2020' im Vorfeld → Verb an Position 2. 2) 'Seit' + Präsens (nicht Perfekt), weil die Handlung noch andauert. / 1) V2: 'Seit 2020' đầu câu → động từ vị trí 2. 2) 'Seit' + hiện tại (không phải quá khứ).",
      },
    ],
    vietnameseComparison:
      "Chương này tập trung hoàn toàn vào sự giao thoa Việt-Đức. Những điểm khác biệt cơ bản: 1) Tiếng Việt không chia động từ, tiếng Đức chia theo ngôi/thì; 2) Tiếng Việt không có mạo từ/giống, tiếng Đức có 3 giống; 3) Tiếng Việt SVO cố định, tiếng Đức V2 + Verbklammer; 4) Tiếng Việt không có cách, tiếng Đức có 4 cách. Ở trình độ C1, bạn cần ý thức rõ về những giao thoa này để tránh lỗi hóa thạch (fossilierte Fehler).",
    exercises: [
      {
        type: "errorCorrection",
        question: "Finde alle Fehler: 'Gestern ich habe gehen zu der Markt und kaufe viel Obst.'",
        questionVi: "Tìm tất cả lỗi.",
        answer: "Gestern bin ich zum Markt gegangen und habe viel Obst gekauft.",
        explanation: "V2 (bin ich), Perfekt (bin gegangen, habe gekauft), 'zum' (zu + dem), 'der Markt' → maskulin.",
      },
      {
        type: "multipleChoice",
        question: "Welcher Fehler ist typisch für vietnamesische Deutschlerner?",
        questionVi: "Lỗi nào điển hình cho người Việt học tiếng Đức?",
        options: [
          "Fehlender Artikel und falsches Genus",
          "Falscher Konjunktiv",
          "Zu viel Passiv",
          "Zu formeller Stil",
        ],
        answer: "Fehlender Artikel und falsches Genus",
        explanation: "Tiếng Việt không có mạo từ và giống → đây là lỗi giao thoa phổ biến nhất.",
      },
      {
        type: "errorCorrection",
        question: "Finde den Fehler: 'Weil ich bin müde, ich gehe schlafen.'",
        questionVi: "Tìm lỗi sai.",
        answer: "Weil ich müde bin, gehe ich schlafen.",
        explanation: "1) Mệnh đề 'weil': V-cuối → 'müde bin'. 2) Mệnh đề chính sau 'weil': V2 → 'gehe ich'.",
      },
      {
        type: "translate",
        question: "Tôi sống ở Đức từ năm 2020. (Chú ý thì!)",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Ich lebe seit 2020 in Deutschland.",
        explanation: "'Seit' + Präsens (không phải Perfekt!) vì hành động vẫn tiếp diễn. Tiếng Việt dùng 'từ' nhưng không chia thì.",
      },
      {
        type: "transform",
        question: "Korrigieren Sie den typischen Interferenzfehler: 'Ich helfe mein Freund.'",
        questionVi: "Sửa lỗi giao thoa.",
        answer: "Ich helfe meinem Freund.",
        explanation: "'Helfen' + Dativ: 'meinem Freund'. Tiếng Việt 'giúp bạn tôi' không đánh dấu cách.",
      },
    ],
  },
];
