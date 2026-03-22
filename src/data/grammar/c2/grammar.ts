export interface GrammarTopic {
  id: string;
  title: string;
  titleVi: string;
  chapter: number;
  order: number;
  level: "C2";
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

export const c2GrammarTopics: GrammarTopic[] = [
  // ============================================================
  // TOPIC 1: Gehobener Konjunktiv (Konjunktiv I in allen Tempora)
  // ============================================================
  {
    id: "c2-gram-01",
    title: "Gehobener Konjunktiv (Konjunktiv I in allen Tempora)",
    titleVi: "Konjunktiv I nâng cao (ở tất cả các thì)",
    chapter: 1,
    order: 1,
    level: "C2",
    explanation:
      "Der Konjunktiv I wird in der gehobenen Sprache, in der indirekten Rede, in festen Wendungen und in der Wissenschaftssprache verwendet. Auf C2-Niveau beherrscht man alle Tempora: Präsens, Perfekt, Futur I und Futur II des Konjunktiv I. Er signalisiert Distanz zum Gesagten und ist in Zeitungen, Nachrichten und akademischen Texten unverzichtbar.\n\nKonjunktiv I được dùng trong ngôn ngữ trang trọng, lời nói gián tiếp, thành ngữ cố định và ngôn ngữ khoa học. Ở trình độ C2, bạn thành thạo tất cả các thì: hiện tại, hoàn thành, tương lai I và tương lai II của Konjunktiv I. Nó thể hiện sự giữ khoảng cách với lời nói được thuật lại và không thể thiếu trong báo chí, tin tức và văn bản học thuật.",
    rules: [
      {
        rule: "Konjunktiv I Präsens: Stamm des Infinitivs + Endungen -e, -est, -e, -en, -et, -en. Bei Identität mit Indikativ wird Konjunktiv II als Ersatzform verwendet.",
        ruleVi:
          "Konjunktiv I hiện tại: Gốc nguyên mẫu + đuôi -e, -est, -e, -en, -et, -en. Khi trùng với Indikativ thì dùng Konjunktiv II thay thế.",
        examples: [
          { de: "Er sagte, er habe keine Zeit.", vi: "Anh ấy nói rằng anh ấy không có thời gian." },
          { de: "Sie behauptet, sie wisse von nichts.", vi: "Cô ấy khẳng định cô ấy không biết gì." },
          { de: "Man nehme 200 g Mehl. (Rezeptsprache)", vi: "Lấy 200 g bột mì. (Ngôn ngữ công thức nấu ăn)" },
        ],
      },
      {
        rule: "Konjunktiv I Perfekt: habe/sei + Partizip II. Drückt abgeschlossene Handlungen in der indirekten Rede aus.",
        ruleVi:
          "Konjunktiv I hoàn thành: habe/sei + Partizip II. Diễn tả hành động đã hoàn thành trong lời nói gián tiếp.",
        examples: [
          { de: "Er berichtet, er habe das Dokument gelesen.", vi: "Anh ấy báo cáo rằng anh ấy đã đọc tài liệu." },
          { de: "Sie erzählt, sie sei nach Wien gereist.", vi: "Cô ấy kể rằng cô ấy đã đi Vienna." },
          { de: "Der Zeuge gab an, er habe den Unfall beobachtet.", vi: "Nhân chứng khai rằng ông ấy đã chứng kiến vụ tai nạn." },
        ],
      },
      {
        rule: "Konjunktiv I Futur I: werde + Infinitiv. Für zukünftige Aussagen in indirekter Rede.",
        ruleVi:
          "Konjunktiv I tương lai I: werde + Infinitiv. Cho phát biểu tương lai trong lời nói gián tiếp.",
        examples: [
          { de: "Der Minister erklärte, er werde zurücktreten.", vi: "Bộ trưởng tuyên bố ông sẽ từ chức." },
          { de: "Sie sagte, sie werde sich darum kümmern.", vi: "Cô ấy nói cô ấy sẽ lo việc đó." },
          { de: "Er versprach, er werde pünktlich sein.", vi: "Anh ấy hứa sẽ đúng giờ." },
        ],
      },
      {
        rule: "Konjunktiv I Futur II: werde + Partizip II + haben/sein. Für vermutete abgeschlossene Handlungen in der Zukunft.",
        ruleVi:
          "Konjunktiv I tương lai II: werde + Partizip II + haben/sein. Cho hành động được cho là đã hoàn thành trong tương lai.",
        examples: [
          { de: "Er meinte, er werde das Projekt bis Freitag abgeschlossen haben.", vi: "Anh ấy cho rằng anh ấy sẽ hoàn thành dự án trước thứ Sáu." },
          { de: "Sie sagte, sie werde bis dahin angekommen sein.", vi: "Cô ấy nói cô ấy sẽ đến nơi trước lúc đó." },
          { de: "Der Sprecher erklärte, man werde die Ergebnisse vorgelegt haben.", vi: "Phát ngôn viên tuyên bố người ta sẽ đã trình kết quả." },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Er sagte, er hat keine Zeit.",
        correct: "Er sagte, er habe keine Zeit.",
        explanation:
          "In der gehobenen Schriftsprache verlangt die indirekte Rede den Konjunktiv I. / Trong văn viết trang trọng, lời nói gián tiếp yêu cầu Konjunktiv I.",
      },
      {
        wrong: "Sie sagten, sie haben das gemacht.",
        correct: "Sie sagten, sie hätten das gemacht.",
        explanation:
          "Bei Identität mit dem Indikativ (sie haben = sie haben) muss Konjunktiv II als Ersatzform stehen. / Khi trùng với Indikativ phải dùng Konjunktiv II thay thế.",
      },
      {
        wrong: "Er sagte, er werde kommen wird.",
        correct: "Er sagte, er werde kommen.",
        explanation:
          "Doppelte Zukunftsmarkierung: 'werde' allein genügt. / Đánh dấu tương lai kép: chỉ cần 'werde' là đủ.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt không có hệ thống Konjunktiv. Lời nói gián tiếp trong tiếng Việt thường chỉ cần 'nói rằng' + câu gốc giữ nguyên. Trong tiếng Đức, bạn PHẢI đổi sang Konjunktiv I (hoặc II nếu trùng). Đây là điểm khác biệt lớn nhất: tiếng Việt giữ nguyên động từ, tiếng Đức thay đổi hình thái động từ để thể hiện khoảng cách với lời nói gốc.",
    exercises: [
      {
        type: "fillBlank",
        question: "Der Journalist berichtete, der Präsident _____ eine neue Reform angekündigt. (haben → Konj. I)",
        questionVi: "Nhà báo đưa tin rằng tổng thống đã công bố cải cách mới.",
        answer: "habe",
        explanation: "Konjunktiv I Perfekt: habe + angekündigt. 'Habe' là Konjunktiv I của 'haben'.",
      },
      {
        type: "multipleChoice",
        question: "Sie sagte, sie _____ morgen abreisen.",
        questionVi: "Cô ấy nói cô ấy sẽ khởi hành ngày mai.",
        options: ["werde", "wird", "würde", "wurde"],
        answer: "werde",
        explanation: "Konjunktiv I Futur I: werde + Infinitiv cho lời nói gián tiếp.",
      },
      {
        type: "transform",
        question: "Wandle in indirekte Rede um (Konj. I): Er sagt: 'Ich bin unschuldig.'",
        questionVi: "Chuyển sang lời nói gián tiếp: Anh ấy nói: 'Tôi vô tội.'",
        answer: "Er sagt, er sei unschuldig.",
        explanation: "'Bin' → 'sei' (Konjunktiv I von 'sein').",
      },
    ],
  },
  // ============================================================
  // TOPIC 2: Komplexe Satzperioden & Hypotaxe
  // ============================================================
  {
    id: "c2-gram-02",
    title: "Komplexe Satzperioden & Hypotaxe",
    titleVi: "Cấu trúc câu phức hợp & Hypotaxe (câu chính phụ nhiều tầng)",
    chapter: 2,
    order: 2,
    level: "C2",
    explanation:
      "Auf C2-Niveau wird erwartet, dass man lange, verschachtelte Satzperioden sowohl verstehen als auch produzieren kann. Die Hypotaxe (Unterordnung von Nebensätzen) ist das Kennzeichen gehobener deutscher Prosa. Man beherrscht mehrstufige Nebensatzkonstruktionen, Einschübe (Parenthesen), erweiterte Partizipialattribute und Satzklammern über mehrere Zeilen.\n\nỞ trình độ C2, bạn phải hiểu và tạo được những câu dài, lồng nhau nhiều tầng. Hypotaxe (câu phụ lồng vào câu chính) là đặc trưng của văn xuôi tiếng Đức trang trọng. Bạn thành thạo cấu trúc nhiều tầng mệnh đề phụ, câu chèn (Parenthese), thuộc tính phân từ mở rộng và khung câu kéo dài nhiều dòng.",
    rules: [
      {
        rule: "Mehrstufige Nebensätze: Ein Nebensatz kann einen weiteren Nebensatz enthalten (NS 1. Grades, 2. Grades, 3. Grades). Das finite Verb steht jeweils am Ende des eigenen Nebensatzes.",
        ruleVi:
          "Mệnh đề phụ nhiều tầng: Một mệnh đề phụ có thể chứa mệnh đề phụ khác (tầng 1, 2, 3). Động từ chia luôn đứng cuối mệnh đề phụ của nó.",
        examples: [
          { de: "Ich weiß, dass er glaubt, dass sie kommt, obwohl er es nicht beweisen kann.", vi: "Tôi biết rằng anh ấy tin rằng cô ấy sẽ đến, mặc dù anh ấy không thể chứng minh." },
          { de: "Der Bericht, den der Experte, der aus Berlin angereist war, verfasst hatte, wurde veröffentlicht.", vi: "Bản báo cáo mà chuyên gia, người đã đến từ Berlin, soạn thảo đã được công bố." },
          { de: "Es ist bekannt, dass Studien, die zeigen, dass Sport gesund ist, häufig zitiert werden.", vi: "Ai cũng biết rằng các nghiên cứu cho thấy thể thao tốt cho sức khỏe thường được trích dẫn." },
        ],
      },
      {
        rule: "Erweiterte Partizipialattribute: Partizip I oder II mit Erweiterungen vor dem Nomen, typisch für Fachsprache und Behördendeutsch.",
        ruleVi:
          "Thuộc tính phân từ mở rộng: Partizip I hoặc II với phần mở rộng đứng trước danh từ, đặc trưng của ngôn ngữ chuyên môn và hành chính.",
        examples: [
          { de: "Die von der Regierung seit Jahren geplante Reform wurde endlich umgesetzt.", vi: "Cuộc cải cách được chính phủ lên kế hoạch từ nhiều năm đã cuối cùng được thực hiện." },
          { de: "Der in der gestrigen Sitzung einstimmig beschlossene Antrag tritt sofort in Kraft.", vi: "Đề nghị được thông qua nhất trí trong phiên họp hôm qua có hiệu lực ngay." },
          { de: "Die seit Wochen auf eine Antwort wartenden Bürger verloren die Geduld.", vi: "Những công dân chờ đợi câu trả lời từ nhiều tuần đã mất kiên nhẫn." },
        ],
      },
      {
        rule: "Parenthesen (Einschübe): Zusätzliche Informationen werden durch Gedankenstriche oder Kommas in den Satz eingefügt, ohne die Satzstruktur zu verändern.",
        ruleVi:
          "Câu chèn (Parenthese): Thông tin bổ sung được chèn bằng dấu gạch ngang hoặc dấu phẩy mà không thay đổi cấu trúc câu.",
        examples: [
          { de: "Der Autor – ein bekannter Kritiker der Regierung – veröffentlichte sein neues Buch.", vi: "Tác giả – một nhà phê bình nổi tiếng của chính phủ – xuất bản cuốn sách mới." },
          { de: "Die Entscheidung, so umstritten sie auch sein mag, wurde demokratisch getroffen.", vi: "Quyết định, dù gây tranh cãi đến đâu, đã được đưa ra một cách dân chủ." },
          { de: "Sein Vorschlag – und das überraschte alle – wurde einstimmig angenommen.", vi: "Đề xuất của ông – và điều này làm mọi người ngạc nhiên – đã được chấp nhận nhất trí." },
        ],
      },
      {
        rule: "Korrelate (es, da-, dar-): Platzhalter im Hauptsatz, die auf einen nachfolgenden Nebensatz verweisen. Sie strukturieren komplexe Sätze.",
        ruleVi:
          "Từ tương quan (es, da-, dar-): Từ giữ chỗ trong câu chính, chỉ đến mệnh đề phụ theo sau. Chúng cấu trúc hóa các câu phức.",
        examples: [
          { de: "Es ist davon auszugehen, dass die Preise steigen werden.", vi: "Có thể cho rằng giá sẽ tăng." },
          { de: "Ich rechne damit, dass er sich verspätet.", vi: "Tôi dự tính rằng anh ấy sẽ đến muộn." },
          { de: "Es bleibt abzuwarten, ob die Maßnahmen wirken.", vi: "Còn phải chờ xem liệu các biện pháp có hiệu quả không." },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Der von der Regierung geplante seit Jahren Reform wurde umgesetzt.",
        correct: "Die von der Regierung seit Jahren geplante Reform wurde endlich umgesetzt.",
        explanation:
          "Im erweiterten Partizipialattribut stehen alle Erweiterungen VOR dem Partizip. / Trong thuộc tính phân từ mở rộng, tất cả phần mở rộng đứng TRƯỚC phân từ.",
      },
      {
        wrong: "Ich weiß, dass er glaubt, dass sie kommt obwohl er es nicht kann beweisen.",
        correct: "Ich weiß, dass er glaubt, dass sie kommt, obwohl er es nicht beweisen kann.",
        explanation:
          "In jedem Nebensatz steht das finite Verb am Ende. / Trong mỗi mệnh đề phụ, động từ chia đứng cuối.",
      },
      {
        wrong: "Es ist davon auszugehen, die Preise werden steigen.",
        correct: "Es ist davon auszugehen, dass die Preise steigen werden.",
        explanation:
          "Nach Korrelaten wie 'davon' folgt ein dass-Satz mit Verbendstellung. / Sau từ tương quan 'davon' phải là mệnh đề dass với động từ ở cuối.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt ưa dùng câu ngắn, đặt cạnh nhau (parataxis). Tiếng Đức, đặc biệt ở trình độ C2, ưa câu dài lồng nhau (hypotaxis). Người Việt thường gặp khó khăn khi: (1) xác định vị trí động từ trong nhiều tầng mệnh đề phụ, (2) hiểu thuộc tính phân từ mở rộng vì tiếng Việt đặt bổ nghĩa SAU danh từ. Mẹo: đọc từ trong ra ngoài, xác định từng mệnh đề phụ riêng biệt.",
    exercises: [
      {
        type: "reorder",
        question: "Ordne: wurde / der / von / Experten / seit / langem / erwartete / Durchbruch / gefeiert",
        questionVi: "Sắp xếp thành câu có thuộc tính phân từ mở rộng.",
        answer: "Der von Experten seit langem erwartete Durchbruch wurde gefeiert.",
        explanation: "Erweitetes Partizipialattribut: Artikel + Erweiterungen + Partizip II + Nomen.",
      },
      {
        type: "transform",
        question: "Verbinde zu einem Satz mit Relativsatz: Der Forscher hat die Studie veröffentlicht. Der Forscher arbeitet an der Universität München. Die Studie untersucht Klimawandel.",
        questionVi: "Nối thành một câu với mệnh đề quan hệ.",
        answer: "Der Forscher, der an der Universität München arbeitet, hat die Studie, die Klimawandel untersucht, veröffentlicht.",
        explanation: "Zwei Relativsätze eingebettet: einer bezieht sich auf 'Forscher', einer auf 'Studie'.",
      },
      {
        type: "fillBlank",
        question: "Die _____ _____ _____ _____ _____ Maßnahmen zeigen erste Wirkung. (von der EU im letzten Jahr beschlossenen)",
        questionVi: "Các biện pháp được EU quyết định năm ngoái cho thấy hiệu quả ban đầu.",
        answer: "von der EU im letzten Jahr beschlossenen",
        explanation: "Erweitertes Partizipialattribut: alle Erweiterungen stehen vor dem Partizip II 'beschlossenen'.",
      },
    ],
  },
  // ============================================================
  // TOPIC 3: Rhetorische Stilmittel & Figuren
  // ============================================================
  {
    id: "c2-gram-03",
    title: "Rhetorische Stilmittel & Figuren",
    titleVi: "Biện pháp tu từ & hình thái tu từ",
    chapter: 3,
    order: 3,
    level: "C2",
    explanation:
      "Auf C2-Niveau erkennt und verwendet man rhetorische Stilmittel in Texten, Reden und Argumentationen. Dazu gehören Metapher, Metonymie, Anapher, Chiasmus, Alliteration, Paradoxon, Klimax, Antithese und viele weitere. Diese Mittel machen Sprache überzeugender, lebendiger und wirkungsvoller.\n\nỞ trình độ C2, bạn nhận biết và sử dụng các biện pháp tu từ trong văn bản, diễn thuyết và lập luận. Bao gồm: ẩn dụ, hoán dụ, điệp ngữ đầu câu, đảo cấu trúc, điệp phụ âm đầu, nghịch lý, tăng tiến, đối lập và nhiều hơn nữa. Chúng làm ngôn ngữ thuyết phục hơn, sống động hơn và có sức tác động mạnh hơn.",
    rules: [
      {
        rule: "Metapher: Übertragung eines Wortes in einen anderen Bedeutungsbereich. Metonymie: Ersetzung durch ein verwandtes Konzept.",
        ruleVi:
          "Ẩn dụ: Chuyển từ sang nghĩa khác. Hoán dụ: Thay thế bằng khái niệm liên quan.",
        examples: [
          { de: "Das Feuer der Leidenschaft erlosch. (Metapher)", vi: "Ngọn lửa đam mê đã tắt. (Ẩn dụ)" },
          { de: "Er liest Goethe. (Metonymie: Autor statt Werk)", vi: "Anh ấy đọc Goethe. (Hoán dụ: tác giả thay cho tác phẩm)" },
          { de: "Die Krone hat entschieden. (Metonymie: Krone statt König)", vi: "Vương miện đã quyết định. (Hoán dụ: vương miện thay cho vua)" },
        ],
      },
      {
        rule: "Anapher: Wiederholung am Satzanfang. Chiasmus: Kreuzstellung (AB-BA). Klimax: Steigerung.",
        ruleVi:
          "Điệp ngữ đầu câu: Lặp lại ở đầu câu. Chiasmus: Cấu trúc chéo (AB-BA). Tăng tiến: Từ nhẹ đến mạnh.",
        examples: [
          { de: "Ich fordere Mut. Ich fordere Entschlossenheit. Ich fordere Taten. (Anapher + Klimax)", vi: "Tôi yêu cầu can đảm. Tôi yêu cầu quyết tâm. Tôi yêu cầu hành động. (Điệp ngữ + Tăng tiến)" },
          { de: "Die Kunst ist lang, und kurz ist unser Leben. (Chiasmus)", vi: "Nghệ thuật thì dài, mà cuộc đời ta ngắn ngủi. (Đảo cấu trúc)" },
          { de: "Er kam, sah und siegte. (Klimax)", vi: "Ông đến, thấy và chiến thắng. (Tăng tiến)" },
        ],
      },
      {
        rule: "Paradoxon: Scheinbarer Widerspruch, der eine tiefere Wahrheit enthält. Oxymoron: Verbindung zweier sich widersprechender Begriffe.",
        ruleVi:
          "Nghịch lý: Mâu thuẫn bề ngoài chứa đựng chân lý sâu xa. Oxymoron: Kết hợp hai khái niệm trái ngược.",
        examples: [
          { de: "Weniger ist mehr. (Paradoxon)", vi: "Ít hơn là nhiều hơn. (Nghịch lý)" },
          { de: "Ich weiß, dass ich nichts weiß. (Paradoxon)", vi: "Tôi biết rằng tôi không biết gì. (Nghịch lý)" },
          { de: "Ein beredtes Schweigen. (Oxymoron)", vi: "Sự im lặng hùng biện. (Oxymoron)" },
        ],
      },
      {
        rule: "Alliteration: Gleicher Anlaut aufeinanderfolgender Wörter. Antithese: Gegenüberstellung von Gegensätzen.",
        ruleVi:
          "Điệp phụ âm đầu: Phụ âm đầu giống nhau ở các từ liên tiếp. Đối lập: Đặt đối lập cạnh nhau.",
        examples: [
          { de: "Milch macht müde Männer munter. (Alliteration)", vi: "Sữa làm đàn ông mệt mỏi tỉnh táo. (Điệp phụ âm đầu)" },
          { de: "Der Geist ist willig, aber das Fleisch ist schwach. (Antithese)", vi: "Tinh thần thì sẵn sàng, nhưng thể xác thì yếu đuối. (Đối lập)" },
          { de: "Kind und Kegel (Alliteration)", vi: "Trẻ em và con cái (Điệp phụ âm đầu)" },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Verwechslung von Metapher und Vergleich: 'Er ist ein Löwe' vs. 'Er ist wie ein Löwe'.",
        correct: "Metapher: 'Er ist ein Löwe.' Vergleich: 'Er ist wie ein Löwe.'",
        explanation:
          "Eine Metapher setzt gleich (ohne 'wie'), ein Vergleich vergleicht (mit 'wie'). / Ẩn dụ đồng nhất (không có 'wie'), so sánh thì so sánh (có 'wie').",
      },
      {
        wrong: "Klimax und Antiklimax verwechseln: 'Er kam, siegte und sah.'",
        correct: "Klimax: 'Er kam, sah und siegte.' (Steigerung von schwach zu stark)",
        explanation:
          "Klimax steigert, Antiklimax fällt ab. Die Reihenfolge ist entscheidend. / Tăng tiến đi lên, giảm tiến đi xuống. Thứ tự rất quan trọng.",
      },
      {
        wrong: "Anapher mit Epipher verwechseln.",
        correct: "Anapher: Wiederholung am Anfang. Epipher: Wiederholung am Ende.",
        explanation:
          "Anapher = Anfang gleich, Epipher = Ende gleich. / Điệp đầu = đầu giống nhau, Điệp cuối = cuối giống nhau.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng rất giàu biện pháp tu từ: ẩn dụ, hoán dụ, nhân hóa, so sánh, điệp ngữ. Nhiều biện pháp có tương đương trực tiếp. Điểm khác: tiếng Đức có Alliteration (điệp phụ âm đầu) phổ biến hơn; tiếng Việt có phép đối rất phát triển trong thơ lục bát. Khi dịch, cần tìm biện pháp tu từ tương đương, không dịch từng từ.",
    exercises: [
      {
        type: "multipleChoice",
        question: "Welches Stilmittel liegt vor: 'Das Weiße Haus erklärte...'?",
        questionVi: "Đây là biện pháp tu từ nào: 'Nhà Trắng tuyên bố...'?",
        options: ["Metapher", "Metonymie", "Personifikation", "Allegorie"],
        answer: "Metonymie",
        explanation: "'Das Weiße Haus' steht für die US-Regierung → Metonymie (Ort statt Institution). / 'Nhà Trắng' thay cho chính phủ Mỹ → Hoán dụ.",
      },
      {
        type: "fillBlank",
        question: "Das Stilmittel in 'Ich fordere Gerechtigkeit. Ich fordere Freiheit. Ich fordere Frieden.' heißt _____.",
        questionVi: "Biện pháp tu từ trong câu trên là gì?",
        answer: "Anapher",
        explanation: "Wiederholung von 'Ich fordere' am Satzanfang = Anapher. / Lặp lại 'Ich fordere' ở đầu câu = Điệp ngữ đầu câu.",
      },
      {
        type: "transform",
        question: "Bilde einen Chiasmus aus: 'Die Jugend ist schön' und 'Das Alter ist weise'.",
        questionVi: "Tạo cấu trúc Chiasmus từ hai câu trên.",
        answer: "Die Jugend ist schön, und weise ist das Alter.",
        explanation: "Chiasmus: AB-BA Kreuzstellung. A=Subjekt B=Adjektiv → B=Adjektiv A=Subjekt.",
      },
    ],
  },
  // ============================================================
  // TOPIC 4: Archaische & literarische Formen
  // ============================================================
  {
    id: "c2-gram-04",
    title: "Archaische & literarische Formen",
    titleVi: "Hình thái cổ & văn chương",
    chapter: 4,
    order: 4,
    level: "C2",
    explanation:
      "Auf C2-Niveau begegnet man archaischen und literarischen Formen, die in der Alltagssprache nicht mehr gebräuchlich sind, aber in Literatur, Recht, Religion und feierlichen Reden vorkommen. Dazu gehören Genitivkonstruktionen, Verbzweitstellung nach 'und', altertümliche Konjunktivformen, das Futur I als Vermutung, und stilistisch markierte Wortstellungen.\n\nỞ trình độ C2, bạn gặp các hình thái cổ và văn chương không còn dùng trong đời thường nhưng xuất hiện trong văn học, luật pháp, tôn giáo và diễn thuyết trang trọng. Bao gồm: cấu trúc Genitiv, đảo ngữ, dạng Konjunktiv cổ, Futur I thể hiện suy đoán, và trật tự từ đặc biệt.",
    rules: [
      {
        rule: "Vorangestellter Genitiv (gehobener Stil): Des Nachts, eines Tages, meines Erachtens, des Weiteren.",
        ruleVi:
          "Genitiv đứng trước (phong cách trang trọng): Des Nachts, eines Tages, meines Erachtens, des Weiteren.",
        examples: [
          { de: "Des Nachts hört man die Eulen rufen.", vi: "Về đêm người ta nghe tiếng cú kêu." },
          { de: "Meines Erachtens ist dieser Ansatz falsch.", vi: "Theo ý kiến tôi, cách tiếp cận này sai." },
          { de: "Des Weiteren möchte ich auf Folgendes hinweisen.", vi: "Ngoài ra, tôi muốn lưu ý điều sau." },
        ],
      },
      {
        rule: "Literarische Inversion: Subjekt nach dem Verb zur Hervorhebung oder Dramatisierung.",
        ruleVi:
          "Đảo ngữ văn chương: Chủ ngữ sau động từ để nhấn mạnh hoặc kịch tính hóa.",
        examples: [
          { de: "Gekommen ist er, gesehen hat er, gesiegt hat er.", vi: "Đã đến, đã thấy, đã thắng." },
          { de: "Groß war die Freude, als die Nachricht eintraf.", vi: "Niềm vui lớn lao khi tin tức đến." },
          { de: "Nie zuvor hatte man so etwas gesehen.", vi: "Chưa bao giờ người ta thấy điều như vậy." },
        ],
      },
      {
        rule: "Archaische Verbformen: 'ward' (wurde), 'geucht' (gesucht), Konjunktiv I 'sei es, dass...', 'es lebe...'.",
        ruleVi:
          "Dạng động từ cổ: 'ward' (wurde), Konjunktiv I cố định 'sei es, dass...', 'es lebe...'.",
        examples: [
          { de: "Es ward Licht. (Bibel)", vi: "Hãy có ánh sáng. (Kinh Thánh)" },
          { de: "Es lebe die Freiheit!", vi: "Tự do muôn năm!" },
          { de: "Sei es, dass er krank ist, sei es, dass er keine Lust hat – er kommt nicht.", vi: "Dù anh ấy ốm hay không muốn – anh ấy không đến." },
        ],
      },
      {
        rule: "Futur I als Ausdruck der Vermutung/Annahme (epistemische Funktion): 'Er wird wohl schon zu Hause sein.'",
        ruleVi:
          "Futur I dùng thể hiện suy đoán (chức năng nhận thức): 'Er wird wohl schon zu Hause sein.'",
        examples: [
          { de: "Sie wird das wohl vergessen haben.", vi: "Có lẽ cô ấy đã quên." },
          { de: "Das wird schon stimmen.", vi: "Chắc là đúng rồi." },
          { de: "Er wird jetzt ungefähr 50 Jahre alt sein.", vi: "Anh ấy bây giờ chắc khoảng 50 tuổi." },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Des Nachts ich hörte die Eulen. (falsche Wortstellung)",
        correct: "Des Nachts hörte ich die Eulen.",
        explanation:
          "Nach dem vorangestellten Genitiv steht das Verb an Position 2 (Inversion). / Sau Genitiv đứng đầu, động từ ở vị trí 2 (đảo ngữ).",
      },
      {
        wrong: "Er wird wohl zu Hause gewesen haben sein.",
        correct: "Er wird wohl zu Hause gewesen sein.",
        explanation:
          "Futur II Vermutung: wird + Partizip II + sein/haben. Nicht doppelt. / Futur II suy đoán: wird + Partizip II + sein/haben. Không lặp đôi.",
      },
      {
        wrong: "'Es lebe die Freiheit' als Indikativ interpretieren.",
        correct: "'Es lebe die Freiheit!' ist Konjunktiv I (Wunsch/Aufforderung).",
        explanation:
          "'Lebe' ist Konjunktiv I von 'leben', nicht Imperativ. / 'Lebe' là Konjunktiv I của 'leben', không phải mệnh lệnh cách.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng có lớp từ cổ (Hán Việt) dùng trong văn viết trang trọng: 'thiên hạ' thay 'mọi người', 'bách chiến bách thắng' thay 'luôn thắng'. Tương tự, tiếng Đức có lớp từ/cấu trúc cổ dùng trong ngữ cảnh trang trọng. Người Việt có lợi thế vì hiểu khái niệm 'lớp từ trang trọng' so với 'lớp từ thông dụng'.",
    exercises: [
      {
        type: "multipleChoice",
        question: "Was bedeutet 'Er wird wohl schon zu Hause sein'?",
        questionVi: "Câu này nghĩa là gì?",
        options: ["Er ist definitiv zu Hause.", "Er ist vermutlich zu Hause.", "Er wird nach Hause gehen.", "Er war zu Hause."],
        answer: "Er ist vermutlich zu Hause.",
        explanation: "Futur I + 'wohl' = Vermutung über die Gegenwart. / Futur I + 'wohl' = suy đoán về hiện tại.",
      },
      {
        type: "fillBlank",
        question: "_____ Erachtens ist diese Lösung die beste. (meines/deines/seines)",
        questionVi: "Theo ý kiến tôi, đây là giải pháp tốt nhất.",
        answer: "Meines",
        explanation: "Gehobene Genitivkonstruktion: 'Meines Erachtens' = theo ý kiến tôi.",
      },
      {
        type: "transform",
        question: "Forme um in gehobenen Stil: 'In der Nacht hörte man die Wölfe.'",
        questionVi: "Chuyển sang phong cách trang trọng.",
        answer: "Des Nachts hörte man die Wölfe.",
        explanation: "'In der Nacht' → 'Des Nachts' (vorangestellter Genitiv, gehobener Stil).",
      },
    ],
  },
  // ============================================================
  // TOPIC 5: Fachsprachliche Syntax
  // ============================================================
  {
    id: "c2-gram-05",
    title: "Fachsprachliche Syntax",
    titleVi: "Cú pháp ngôn ngữ chuyên ngành",
    chapter: 5,
    order: 5,
    level: "C2",
    explanation:
      "Fachsprachen (Wissenschaft, Recht, Technik, Medizin) verwenden spezifische syntaktische Muster: Nominalisierungen, Passivkonstruktionen, unpersönliche Ausdrücke, Funktionsverbgefüge und komplexe Präpositionalphrasen. Auf C2-Niveau versteht und produziert man Fachtexte flüssig.\n\nNgôn ngữ chuyên ngành (khoa học, luật, kỹ thuật, y tế) dùng các mẫu cú pháp riêng: danh từ hóa, câu bị động, biểu đạt phi nhân xưng, cụm động từ chức năng và cụm giới từ phức hợp. Ở C2, bạn hiểu và viết văn bản chuyên ngành trôi chảy.",
    rules: [
      {
        rule: "Nominalisierung: Verben und Adjektive werden zu Nomen umgewandelt. Typisch: 'die Durchführung' statt 'durchführen', 'die Möglichkeit' statt 'möglich sein'.",
        ruleVi:
          "Danh từ hóa: Động từ và tính từ được chuyển thành danh từ. Điển hình: 'die Durchführung' thay cho 'durchführen'.",
        examples: [
          { de: "Die Durchführung der Studie erfolgte im Jahr 2024.", vi: "Việc thực hiện nghiên cứu diễn ra vào năm 2024." },
          { de: "Die Inanspruchnahme der Leistungen setzt einen Antrag voraus.", vi: "Việc sử dụng các dịch vụ đòi hỏi phải có đơn." },
          { de: "Unter Berücksichtigung aller Faktoren lässt sich Folgendes feststellen.", vi: "Xem xét tất cả các yếu tố, có thể nhận định như sau." },
        ],
      },
      {
        rule: "Funktionsverbgefüge (FVG): Verb + Nomen-Kombination, die eine spezifische Bedeutung hat: 'in Kraft treten', 'zur Verfügung stellen', 'in Betracht ziehen'.",
        ruleVi:
          "Cụm động từ chức năng: Kết hợp động từ + danh từ mang nghĩa riêng: 'in Kraft treten' (có hiệu lực), 'zur Verfügung stellen' (cung cấp).",
        examples: [
          { de: "Das Gesetz tritt am 1. Januar in Kraft.", vi: "Luật có hiệu lực từ ngày 1 tháng 1." },
          { de: "Die Ergebnisse werden zur Diskussion gestellt.", vi: "Kết quả được đưa ra thảo luận." },
          { de: "Man muss alle Optionen in Betracht ziehen.", vi: "Phải xem xét tất cả các phương án." },
        ],
      },
      {
        rule: "Passiversatzformen in Fachtexten: 'sich lassen + Infinitiv', 'sein + zu + Infinitiv', '-bar/-lich' Adjektive.",
        ruleVi:
          "Các dạng thay thế bị động trong văn chuyên ngành: 'sich lassen + Infinitiv', 'sein + zu + Infinitiv', tính từ '-bar/-lich'.",
        examples: [
          { de: "Diese Hypothese lässt sich empirisch überprüfen.", vi: "Giả thuyết này có thể được kiểm chứng thực nghiệm." },
          { de: "Die Frist ist einzuhalten. (= muss eingehalten werden)", vi: "Thời hạn phải được tuân thủ." },
          { de: "Die Ergebnisse sind reproduzierbar.", vi: "Kết quả có thể tái tạo được." },
        ],
      },
      {
        rule: "Komplexe Präpositionalphrasen: 'im Hinblick auf', 'in Anbetracht', 'unter Bezugnahme auf', 'vorbehaltlich'.",
        ruleVi:
          "Cụm giới từ phức hợp: 'im Hinblick auf' (về mặt), 'in Anbetracht' (xét đến), 'unter Bezugnahme auf' (căn cứ vào).",
        examples: [
          { de: "Im Hinblick auf die aktuelle Lage sind Maßnahmen erforderlich.", vi: "Xét tình hình hiện tại, cần có biện pháp." },
          { de: "In Anbetracht der Kosten wurde das Projekt verschoben.", vi: "Xét đến chi phí, dự án đã bị hoãn." },
          { de: "Vorbehaltlich der Genehmigung beginnen die Arbeiten nächste Woche.", vi: "Với điều kiện được phê duyệt, công việc bắt đầu tuần tới." },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Die Durchführung von der Studie...",
        correct: "Die Durchführung der Studie...",
        explanation:
          "Nominalisierungen verlangen meist Genitiv, nicht 'von + Dativ'. / Danh từ hóa thường yêu cầu Genitiv, không phải 'von + Dativ'.",
      },
      {
        wrong: "Das Gesetz tritt in Kraft an.",
        correct: "Das Gesetz tritt in Kraft.",
        explanation:
          "'In Kraft treten' ist ein FVG – kein trennbares Verb. / 'In Kraft treten' là cụm động từ chức năng – không phải động từ tách.",
      },
      {
        wrong: "Die Hypothese kann sich überprüfen lassen.",
        correct: "Die Hypothese lässt sich überprüfen.",
        explanation:
          "'Sich lassen + Infinitiv' ist bereits eine Passiversatzform – kein 'kann' nötig. / 'Sich lassen + Infinitiv' đã là dạng thay thế bị động – không cần 'kann'.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt chuyên ngành cũng dùng nhiều từ Hán Việt và cấu trúc phức tạp. Tương tự tiếng Đức dùng Nominalisierung, tiếng Việt dùng danh từ hóa ('sự thực hiện', 'việc nghiên cứu'). Tuy nhiên, tiếng Đức phức tạp hơn vì danh từ hóa mang theo giống (Genus), cách (Kasus) và số (Numerus). Mẹo: học FVG như một đơn vị cố định, giống học từ vựng.",
    exercises: [
      {
        type: "transform",
        question: "Nominalisiere: 'Man führt die Studie durch.' → 'Die _____ der Studie...'",
        questionVi: "Danh từ hóa câu trên.",
        answer: "Die Durchführung der Studie erfolgt.",
        explanation: "'Durchführen' → 'die Durchführung'. Genitiv 'der Studie' thay cho Akkusativ 'die Studie'.",
      },
      {
        type: "multipleChoice",
        question: "Welche Passiversatzform ist korrekt? 'Dieses Problem _____ leicht lösen.'",
        questionVi: "Dạng thay thế bị động nào đúng?",
        options: ["lässt sich", "wird sich", "hat sich", "kann sich"],
        answer: "lässt sich",
        explanation: "'Sich lassen + Infinitiv' = kann + Partizip werden. / 'Sich lassen + Infinitiv' = có thể được + động từ.",
      },
      {
        type: "fillBlank",
        question: "_____ der Genehmigung beginnen die Bauarbeiten. (Vorbehaltlich/Im Hinblick/Unter)",
        questionVi: "Với điều kiện được phê duyệt, công trình bắt đầu.",
        answer: "Vorbehaltlich",
        explanation: "'Vorbehaltlich' + Genitiv = với điều kiện, tùy thuộc vào.",
      },
    ],
  },
  // ============================================================
  // TOPIC 6: Pragmatische Kompetenz (Ironie, Euphemismus)
  // ============================================================
  {
    id: "c2-gram-06",
    title: "Pragmatische Kompetenz (Ironie, Euphemismus, Understatement)",
    titleVi: "Năng lực ngữ dụng (Mỉa mai, Uyển ngữ, Nói giảm)",
    chapter: 6,
    order: 6,
    level: "C2",
    explanation:
      "Pragmatische Kompetenz auf C2-Niveau bedeutet, die Absicht hinter Äußerungen zu erkennen, auch wenn sie nicht wörtlich gemeint sind. Dazu gehören Ironie, Sarkasmus, Euphemismen, Understatement, Litotes und implizite Sprechakte. Man versteht kulturelle Konventionen und kann zwischen den Zeilen lesen.\n\nNăng lực ngữ dụng ở C2 nghĩa là nhận ra ý định đằng sau lời nói, ngay cả khi không nói theo nghĩa đen. Bao gồm: mỉa mai, châm biếm, uyển ngữ, nói giảm nói tránh, phủ định kép (Litotes) và hành động ngôn ngữ gián tiếp. Bạn hiểu quy ước văn hóa và đọc được ý giữa các dòng.",
    rules: [
      {
        rule: "Ironie: Das Gegenteil von dem sagen, was man meint. Signale: Kontext, Tonfall, Übertreibung.",
        ruleVi:
          "Mỉa mai: Nói ngược lại ý mình. Dấu hiệu: ngữ cảnh, giọng điệu, phóng đại.",
        examples: [
          { de: "Das hast du ja toll gemacht! (wenn etwas schiefgegangen ist)", vi: "Bạn làm hay quá! (khi mọi thứ sai bét)" },
          { de: "Na, das ist ja eine schöne Bescherung! (ironisch: Ärger)", vi: "Ồ, quà đẹp quá nhỉ! (mỉa mai: bực bội)" },
          { de: "Herzlichen Glückwunsch, du hast gerade den Rekord im Zu-spät-Kommen gebrochen.", vi: "Chúc mừng, bạn vừa phá kỷ lục đến muộn." },
        ],
      },
      {
        rule: "Euphemismus: Beschönigende Umschreibung für unangenehme Sachverhalte. Typisch in Politik, Wirtschaft und Gesellschaft.",
        ruleVi:
          "Uyển ngữ: Cách nói giảm cho những điều khó nghe. Phổ biến trong chính trị, kinh tế và xã hội.",
        examples: [
          { de: "'Freisetzen' statt 'entlassen' (Wirtschaft)", vi: "'Giải phóng' thay cho 'sa thải' (Kinh tế)" },
          { de: "'Kollateralschaden' statt 'zivile Opfer' (Militär)", vi: "'Thiệt hại phụ' thay cho 'nạn nhân dân sự' (Quân sự)" },
          { de: "'Von uns gegangen' statt 'gestorben'", vi: "'Đã ra đi' thay cho 'đã chết'" },
        ],
      },
      {
        rule: "Litotes (doppelte Verneinung als Bejahung/Understatement): 'nicht uninteressant' = interessant, 'nicht schlecht' = gut.",
        ruleVi:
          "Litotes (phủ định kép = khẳng định/nói giảm): 'nicht uninteressant' = thú vị, 'nicht schlecht' = tốt.",
        examples: [
          { de: "Das ist nicht unproblematisch. (= Das ist problematisch.)", vi: "Điều đó không phải là không có vấn đề. (= Có vấn đề.)" },
          { de: "Er ist kein Dummkopf. (Understatement: Er ist klug.)", vi: "Anh ấy không phải đồ ngốc. (Nói giảm: Anh ấy thông minh.)" },
          { de: "Die Ergebnisse waren nicht unerheblich.", vi: "Kết quả không phải là không đáng kể." },
        ],
      },
      {
        rule: "Implizite Sprechakte: Die wörtliche Bedeutung weicht von der Intention ab. 'Können Sie mir das Salz reichen?' ist eine Bitte, keine Frage nach der Fähigkeit.",
        ruleVi:
          "Hành động ngôn ngữ gián tiếp: Nghĩa đen khác với ý định. 'Können Sie mir das Salz reichen?' là lời nhờ, không phải hỏi khả năng.",
        examples: [
          { de: "Es zieht hier. (= Mach bitte das Fenster zu.)", vi: "Ở đây có gió. (= Hãy đóng cửa sổ lại.)" },
          { de: "Wissen Sie, wie spät es ist? (= Sie sind zu spät.)", vi: "Bạn có biết mấy giờ rồi không? (= Bạn đến muộn rồi.)" },
          { de: "Das Essen ist aber interessant. (= Das Essen schmeckt seltsam.)", vi: "Đồ ăn thú vị nhỉ. (= Đồ ăn có vị lạ.)" },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Ironie wörtlich nehmen: 'Das hast du toll gemacht!' als Lob verstehen.",
        correct: "Kontextabhängig: Wenn etwas schiefging, ist es Ironie.",
        explanation:
          "Ironie erkennt man am Kontext, nicht am Wortlaut. / Mỉa mai nhận biết qua ngữ cảnh, không qua từ ngữ.",
      },
      {
        wrong: "Euphemismen in unangemessenen Kontexten verwenden.",
        correct: "Euphemismen passen in formelle/sensible Kontexte, nicht in Alltagsgespräche.",
        explanation:
          "Euphemismen in lockeren Gesprächen wirken unnatürlich oder unehrlich. / Uyển ngữ trong hội thoại thân mật nghe không tự nhiên.",
      },
      {
        wrong: "'Nicht uninteressant' als 'nicht interessant' verstehen.",
        correct: "'Nicht uninteressant' = durchaus interessant (Litotes).",
        explanation:
          "Doppelte Verneinung = abgeschwächte Bejahung. / Phủ định kép = khẳng định nhẹ.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng rất giàu biện pháp nói giảm nói tránh, mỉa mai và hành động ngôn ngữ gián tiếp. 'Anh ấy đi rồi' (= đã chết), 'Giỏi quá ha!' (mỉa mai). Tuy nhiên, tín hiệu mỉa mai khác nhau giữa hai ngôn ngữ: tiếng Đức dùng tiểu từ 'ja', 'doch', 'wohl', giọng điệu; tiếng Việt dùng 'quá ha', 'nhỉ', 'thật đấy'. Ở C2, bạn phải nhận ra tín hiệu mỉa mai ĐỨC, không chỉ dựa trên cảm giác tiếng Việt.",
    exercises: [
      {
        type: "multipleChoice",
        question: "Was meint jemand wirklich mit 'Das ist ja eine schöne Bescherung!'?",
        questionVi: "Người nói thực sự muốn nói gì?",
        options: ["Er freut sich über ein Geschenk.", "Er ist verärgert über eine Situation.", "Er findet etwas schön.", "Er beschreibt Weihnachten."],
        answer: "Er ist verärgert über eine Situation.",
        explanation: "Ironische Redewendung: 'schöne Bescherung' = unangenehme Überraschung. / Thành ngữ mỉa mai: 'quà đẹp' = bất ngờ khó chịu.",
      },
      {
        type: "transform",
        question: "Ersetze den Euphemismus: 'Das Unternehmen hat 500 Mitarbeiter freigesetzt.'",
        questionVi: "Thay uyển ngữ bằng cách nói trực tiếp.",
        answer: "Das Unternehmen hat 500 Mitarbeiter entlassen.",
        explanation: "'Freisetzen' = Euphemismus für 'entlassen'. / 'Giải phóng' = uyển ngữ cho 'sa thải'.",
      },
      {
        type: "fillBlank",
        question: "Litotes: 'Sein Beitrag war nicht _____.' (= Sein Beitrag war erheblich.)",
        questionVi: "Điền từ để tạo Litotes.",
        answer: "unerheblich",
        explanation: "'Nicht unerheblich' = erheblich (Litotes, doppelte Verneinung). / 'Không phải không đáng kể' = đáng kể.",
      },
    ],
  },
  // ============================================================
  // TOPIC 7: Textlinguistik & Diskursanalyse
  // ============================================================
  {
    id: "c2-gram-07",
    title: "Textlinguistik & Diskursanalyse",
    titleVi: "Ngôn ngữ học văn bản & Phân tích diễn ngôn",
    chapter: 7,
    order: 7,
    level: "C2",
    explanation:
      "Textlinguistik untersucht, wie Texte aufgebaut sind und zusammenhängen. Auf C2-Niveau analysiert man Kohäsion (sprachliche Verknüpfungen), Kohärenz (inhaltlicher Zusammenhang), Thema-Rhema-Gliederung, Textsortenkonventionen und argumentative Strukturen. Man erkennt und verwendet Konnektoren, Proformen und thematische Progression bewusst.\n\nNgôn ngữ học văn bản nghiên cứu cách văn bản được xây dựng và liên kết. Ở C2, bạn phân tích liên kết hình thức (Kohäsion), liên kết nội dung (Kohärenz), cấu trúc Thema-Rhema, quy ước thể loại văn bản và cấu trúc lập luận.",
    rules: [
      {
        rule: "Kohäsionsmittel: Pronominale Verweise (dieser, jener, derselbe), Konnektoren (dennoch, nichtsdestotrotz, infolgedessen), Rekurrenz (Wiederaufnahme durch Synonyme).",
        ruleVi:
          "Phương tiện liên kết hình thức: Đại từ chỉ định (dieser, jener, derselbe), liên từ (dennoch, nichtsdestotrotz, infolgedessen), tái xuất hiện (dùng từ đồng nghĩa).",
        examples: [
          { de: "Die Regierung beschloss eine Reform. Diese soll 2025 in Kraft treten.", vi: "Chính phủ quyết định cải cách. Cải cách này sẽ có hiệu lực năm 2025." },
          { de: "Die Kosten stiegen; infolgedessen musste gespart werden.", vi: "Chi phí tăng; do đó phải tiết kiệm." },
          { de: "Der Wissenschaftler... Der Forscher... Der Experte... (Rekurrenz durch Synonyme)", vi: "Nhà khoa học... Nhà nghiên cứu... Chuyên gia... (Tái xuất hiện qua từ đồng nghĩa)" },
        ],
      },
      {
        rule: "Thema-Rhema-Gliederung: Das Thema (bekannte Information) steht meist am Satzanfang, das Rhema (neue Information) am Satzende.",
        ruleVi:
          "Cấu trúc Thema-Rhema: Thema (thông tin đã biết) thường đứng đầu câu, Rhema (thông tin mới) cuối câu.",
        examples: [
          { de: "Die Universität (Thema) wurde 1386 gegründet (Rhema).", vi: "Đại học (Thema) được thành lập năm 1386 (Rhema)." },
          { de: "Im Jahr 1386 (Thema) wurde die Universität Heidelberg gegründet (Rhema).", vi: "Năm 1386 (Thema) đại học Heidelberg được thành lập (Rhema)." },
          { de: "Bekannt ist Heidelberg (Thema) vor allem für seine Altstadt (Rhema).", vi: "Heidelberg nổi tiếng (Thema) chủ yếu vì phố cổ (Rhema)." },
        ],
      },
      {
        rule: "Argumentative Konnektoren auf C2-Niveau: 'zumal', 'zugegebenermaßen', 'nichtsdestoweniger', 'gleichwohl', 'immerhin', 'geschweige denn'.",
        ruleVi:
          "Liên từ lập luận ở C2: 'zumal' (nhất là vì), 'zugegebenermaßen' (phải thừa nhận), 'nichtsdestoweniger' (tuy vậy), 'gleichwohl' (tuy thế), 'geschweige denn' (chứ đừng nói).",
        examples: [
          { de: "Er kann kaum Deutsch, geschweige denn Japanisch.", vi: "Anh ấy gần như không biết tiếng Đức, chứ đừng nói tiếng Nhật." },
          { de: "Zugegebenermaßen war der Plan nicht perfekt, gleichwohl war er effektiv.", vi: "Phải thừa nhận kế hoạch không hoàn hảo, tuy vậy nó hiệu quả." },
          { de: "Die Reise lohnt sich, zumal das Wetter gut sein soll.", vi: "Chuyến đi đáng giá, nhất là vì thời tiết sẽ tốt." },
        ],
      },
      {
        rule: "Textsorten und ihre Konventionen: Wissenschaftlicher Aufsatz (Hypothese-Analyse-Fazit), Erörterung (These-Antithese-Synthese), Kommentar (Meinung + Argumentation).",
        ruleVi:
          "Thể loại văn bản và quy ước: Bài luận khoa học (giả thuyết-phân tích-kết luận), bài nghị luận (luận đề-phản đề-tổng hợp), bình luận (ý kiến + lập luận).",
        examples: [
          { de: "These: Die Digitalisierung verändert die Bildung. Antithese: Traditionelle Methoden sind weiterhin wichtig. Synthese: Ein Mischansatz ist ideal.", vi: "Luận đề: Số hóa thay đổi giáo dục. Phản đề: Phương pháp truyền thống vẫn quan trọng. Tổng hợp: Phương pháp kết hợp là lý tưởng." },
          { de: "Fazit: Zusammenfassend lässt sich feststellen, dass...", vi: "Kết luận: Tóm lại có thể nhận định rằng..." },
          { de: "Einleitung → Hauptteil → Schluss (Grundstruktur aller Textsorten)", vi: "Mở bài → Thân bài → Kết bài (Cấu trúc cơ bản mọi thể loại)" },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Konnektoren ohne logischen Zusammenhang verwenden: 'Es regnet. Infolgedessen esse ich Pizza.'",
        correct: "Konnektoren müssen zum logischen Verhältnis passen: 'Es regnet. Infolgedessen bleibe ich zu Hause.'",
        explanation:
          "Konnektoren signalisieren logische Beziehungen – sie müssen zum Inhalt passen. / Liên từ thể hiện quan hệ logic – phải phù hợp nội dung.",
      },
      {
        wrong: "Neue Information am Satzanfang, bekannte am Ende (gegen Thema-Rhema).",
        correct: "Bekannte Information (Thema) zuerst, neue (Rhema) am Ende.",
        explanation:
          "Thema-Rhema-Prinzip: Vom Bekannten zum Neuen. / Nguyên tắc Thema-Rhema: từ đã biết đến mới.",
      },
      {
        wrong: "'Geschweige denn' in positiven Sätzen: 'Er spricht gut Deutsch, geschweige denn Japanisch.'",
        correct: "'Geschweige denn' nur in negativen/einschränkenden Kontexten: 'Er spricht kaum Deutsch, geschweige denn Japanisch.'",
        explanation:
          "'Geschweige denn' verstärkt eine Negation. / 'Geschweige denn' tăng cường phủ định.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng có hệ thống liên kết văn bản phong phú: 'vì vậy', 'tuy nhiên', 'mặc dù', 'hơn nữa'. Cấu trúc Thema-Rhema tương tự: thông tin cũ trước, mới sau. Điểm khác: tiếng Đức đánh dấu Thema-Rhema qua trật tự từ VÀ cách (Kasus), tiếng Việt chủ yếu qua trật tự từ. 'Geschweige denn' tương đương 'chứ đừng nói đến' trong tiếng Việt.",
    exercises: [
      {
        type: "fillBlank",
        question: "Er kann sich kaum konzentrieren, _____ _____ _____ einen Roman schreiben.",
        questionVi: "Anh ấy gần như không thể tập trung, chứ đừng nói viết tiểu thuyết.",
        answer: "geschweige denn",
        explanation: "'Geschweige denn' = chứ đừng nói đến. Tăng cường phủ định 'kaum'.",
      },
      {
        type: "multipleChoice",
        question: "Welcher Konnektor passt? '_____ war der Vortrag lang, _____ war er informativ.'",
        questionVi: "Liên từ nào phù hợp?",
        options: ["Zugegebenermaßen ... gleichwohl", "Infolgedessen ... dennoch", "Zumal ... geschweige denn", "Obwohl ... zumal"],
        answer: "Zugegebenermaßen ... gleichwohl",
        explanation: "'Zugegebenermaßen' (thừa nhận) + 'gleichwohl' (tuy vậy) = Einräumung + Gegenargument.",
      },
      {
        type: "transform",
        question: "Verbessere die Kohäsion: 'Die Forscherin machte eine Entdeckung. Die Forscherin veröffentlichte die Entdeckung.'",
        questionVi: "Cải thiện liên kết hình thức.",
        answer: "Die Forscherin machte eine Entdeckung. Diese veröffentlichte sie umgehend.",
        explanation: "Pronominale Verweise (diese, sie) statt Wiederholung verbessern die Kohäsion.",
      },
    ],
  },
  // ============================================================
  // TOPIC 8: Varietätenlinguistik (Dialekte, Soziolekte)
  // ============================================================
  {
    id: "c2-gram-08",
    title: "Varietätenlinguistik (Dialekte, Soziolekte, Register)",
    titleVi: "Ngôn ngữ học biến thể (Phương ngữ, ngữ vực xã hội, ngữ vực)",
    chapter: 8,
    order: 8,
    level: "C2",
    explanation:
      "Auf C2-Niveau versteht man die Vielfalt des Deutschen: Dialekte (Bairisch, Schwäbisch, Sächsisch, Plattdeutsch), nationale Varietäten (Österreichisches Deutsch, Schweizerdeutsch, Bundesdeutsches Deutsch), Soziolekte (Jugendsprache, Fachsprache, Kiezdeutsch) und Register (formell, informell, umgangssprachlich). Man erkennt regionale und soziale Markierungen.\n\nỞ C2, bạn hiểu sự đa dạng của tiếng Đức: phương ngữ (Bayern, Schwaben, Sachsen, Platt), biến thể quốc gia (Đức-Áo, Đức-Thụy Sĩ, Đức chuẩn), ngữ vực xã hội (tiếng trẻ, ngôn ngữ chuyên ngành, Kiezdeutsch) và ngữ vực (trang trọng, thân mật, khẩu ngữ).",
    rules: [
      {
        rule: "Nationale Varietäten: Österreich (Erdäpfel, Paradeiser, Jänner, heuer), Schweiz (Velo, Natel, parkieren, grillieren), Deutschland (Kartoffeln, Tomaten, Januar, dieses Jahr).",
        ruleVi:
          "Biến thể quốc gia: Áo (Erdäpfel=khoai tây, Paradeiser=cà chua), Thụy Sĩ (Velo=xe đạp, Natel=điện thoại di động), Đức (Kartoffeln, Tomaten).",
        examples: [
          { de: "AT: Ich hab heuer Erdäpfel im Garten angebaut. / DE: Ich habe dieses Jahr Kartoffeln im Garten angebaut.", vi: "Năm nay tôi trồng khoai tây trong vườn. (Áo vs. Đức)" },
          { de: "CH: Ich parkiere das Velo vor dem Haus. / DE: Ich stelle das Fahrrad vor dem Haus ab.", vi: "Tôi để xe đạp trước nhà. (Thụy Sĩ vs. Đức)" },
          { de: "AT: Das Obers für den Kaffee. / DE: Die Sahne für den Kaffee.", vi: "Kem cho cà phê. (Áo: Obers / Đức: Sahne)" },
        ],
      },
      {
        rule: "Wichtige Dialektmerkmale: Bairisch (Grüß Gott, -l Diminutiv), Norddeutsch (moin, tschüs, Plattdeutsch-Einflüsse), Schwäbisch (schaffe, Käpsele).",
        ruleVi:
          "Đặc trưng phương ngữ: Bayern (Grüß Gott, hậu tố -l), Bắc Đức (moin, tschüs), Schwaben (schaffe=làm việc).",
        examples: [
          { de: "Bairisch: 'I mog di.' = Hochdeutsch: 'Ich mag dich.'", vi: "Bayern: 'I mog di.' = Đức chuẩn: 'Ich mag dich.' (Tôi thích bạn)" },
          { de: "Schwäbisch: 'Schaffe, schaffe, Häusle baue.' = 'Arbeiten, arbeiten, ein Häuschen bauen.'", vi: "Schwaben: 'Làm, làm, xây nhà.' (Phương châm người Schwaben)" },
          { de: "Plattdeutsch: 'Moin Moin!' = 'Guten Tag!'", vi: "Bắc Đức: 'Moin Moin!' = 'Xin chào!' (dùng cả ngày)" },
        ],
      },
      {
        rule: "Soziolekte und Register: Jugendsprache (cringe, lost, Ehrenmann), Beamtendeutsch (hiermit, zwecks, bezüglich), Umgangssprache (echt, halt, irgendwie).",
        ruleVi:
          "Ngữ vực xã hội: Tiếng trẻ (cringe, lost, Ehrenmann), tiếng hành chính (hiermit, zwecks, bezüglich), khẩu ngữ (echt, halt, irgendwie).",
        examples: [
          { de: "Jugendsprache: 'Das ist mega cringe.' = 'Das ist sehr peinlich.'", vi: "Tiếng trẻ: 'Mega cringe.' = 'Rất xấu hổ.'" },
          { de: "Beamtendeutsch: 'Hiermit wird Ihnen mitgeteilt, dass...' = 'Wir teilen Ihnen mit, dass...'", vi: "Tiếng hành chính: 'Bằng văn bản này thông báo rằng...' = 'Chúng tôi thông báo rằng...'" },
          { de: "Umgangssprache: 'Ich hab halt irgendwie keinen Bock.' = 'Ich habe keine Lust.'", vi: "Khẩu ngữ: 'Tôi kiểu chả muốn.' = 'Tôi không muốn.'" },
        ],
      },
      {
        rule: "Registerwechsel erkennen und anwenden: Vom formellen zum informellen Register, und umgekehrt. Kontext bestimmt das Register.",
        ruleVi:
          "Nhận biết và áp dụng chuyển đổi ngữ vực: Từ trang trọng sang thân mật và ngược lại. Ngữ cảnh quyết định ngữ vực.",
        examples: [
          { de: "Formell: 'Ich möchte Sie darauf hinweisen, dass...' → Informell: 'Hör mal, du...'", vi: "Trang trọng: 'Tôi muốn lưu ý quý vị rằng...' → Thân mật: 'Này, bạn...'" },
          { de: "Formell: 'Wir bedauern, Ihnen mitteilen zu müssen...' → Informell: 'Tut mir leid, aber...'", vi: "Trang trọng: 'Chúng tôi lấy làm tiếc phải thông báo...' → Thân mật: 'Xin lỗi, nhưng...'" },
          { de: "SMS: 'hdl' = 'hab dich lieb' → Brief: 'Mit herzlichen Grüßen'", vi: "SMS: 'hdl' = 'yêu bạn' → Thư: 'Trân trọng'" },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Österreichische Wörter in einer Prüfung in Deutschland verwenden (oder umgekehrt).",
        correct: "Alle drei Standardvarietäten sind korrekt, aber Konsistenz ist wichtig.",
        explanation:
          "Im Kontext konsequent bleiben. In Deutschland 'Kartoffeln', nicht 'Erdäpfel'. / Nhất quán trong ngữ cảnh.",
      },
      {
        wrong: "Jugendsprache in einem formellen Text verwenden.",
        correct: "Register muss zum Kontext passen: Jugendsprache nur in informellen Kontexten.",
        explanation:
          "Registerverletzung wirkt unprofessionell. / Dùng sai ngữ vực gây ấn tượng không chuyên nghiệp.",
      },
      {
        wrong: "Dialekt als 'falsches Deutsch' betrachten.",
        correct: "Dialekte sind gleichwertige Varietäten mit eigener Grammatik und Geschichte.",
        explanation:
          "Dialekte sind nicht defizitär, sondern regional. Hochdeutsch ist nur eine Varietät. / Phương ngữ không kém, chỉ là vùng miền.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng có ba vùng phương ngữ chính: Bắc, Trung, Nam. 'Quả' (Bắc) = 'trái' (Nam), 'bát' (Bắc) = 'chén' (Nam). Tương tự Đức-Áo-Thụy Sĩ! Người Việt hiểu khái niệm phương ngữ rất tốt. Điểm khác: phương ngữ Đức có thể khác nhau đến mức không hiểu nhau (Plattdeutsch vs. Bairisch), còn phương ngữ Việt dễ hiểu hơn nhờ cùng chữ viết.",
    exercises: [
      {
        type: "matching",
        question: "Ordne zu: 1) Erdäpfel 2) Velo 3) Kartoffeln 4) Fahrrad → a) Deutschland b) Österreich c) Schweiz",
        questionVi: "Ghép từ với quốc gia.",
        answer: "1-b, 2-c, 3-a, 4-a",
        explanation: "Erdäpfel=AT, Velo=CH, Kartoffeln=DE, Fahrrad=DE. Cùng nghĩa, khác biến thể.",
      },
      {
        type: "transform",
        question: "Übersetze in Standarddeutsch: 'I mog di ned.' (Bairisch)",
        questionVi: "Dịch sang tiếng Đức chuẩn.",
        answer: "Ich mag dich nicht.",
        explanation: "Bairisch: I=Ich, mog=mag, di=dich, ned=nicht.",
      },
      {
        type: "multipleChoice",
        question: "Welches Register passt in ein Bewerbungsschreiben?",
        questionVi: "Ngữ vực nào phù hợp cho đơn xin việc?",
        options: ["'Ich hab voll Bock auf den Job.'", "'Hiermit bewerbe ich mich um die ausgeschriebene Stelle.'", "'Hey, ich will den Job.'", "'Yo, gebt mir den Job.'"],
        answer: "'Hiermit bewerbe ich mich um die ausgeschriebene Stelle.'",
        explanation: "Bewerbungsschreiben = formelles Register. 'Hiermit bewerbe ich mich...' ist Standard.",
      },
    ],
  },
  // ============================================================
  // TOPIC 9: Übersetzungswissenschaft (Deutsch-Vietnamesisch)
  // ============================================================
  {
    id: "c2-gram-09",
    title: "Übersetzungswissenschaft (Deutsch-Vietnamesisch)",
    titleVi: "Dịch thuật học (Đức-Việt)",
    chapter: 9,
    order: 9,
    level: "C2",
    explanation:
      "Auf C2-Niveau kann man kompetent zwischen Deutsch und Vietnamesisch übersetzen und dolmetschen. Man versteht Übersetzungsstrategien: wörtliche vs. freie Übersetzung, Äquivalenz auf Wort-/Satz-/Textebene, kulturelle Adaptation und Unübersetzbarkeit. Besonders wichtig sind die strukturellen Unterschiede zwischen dem analytischen Vietnamesisch und dem synthetischen Deutsch.\n\nỞ C2, bạn có thể dịch và phiên dịch thành thạo giữa Đức và Việt. Bạn hiểu chiến lược dịch: dịch sát vs. dịch thoáng, tương đương ở cấp từ/câu/văn bản, thích ứng văn hóa và tính không thể dịch. Đặc biệt quan trọng là sự khác biệt cấu trúc giữa tiếng Việt phân tích và tiếng Đức tổng hợp.",
    rules: [
      {
        rule: "Wörtliche Übersetzung (Wort-für-Wort) ist bei strukturellen Unterschieden oft unmöglich. Man muss auf Satz- oder Textebene äquivalent übersetzen.",
        ruleVi:
          "Dịch sát (từng từ) thường không thể khi cấu trúc khác nhau. Phải dịch tương đương ở cấp câu hoặc văn bản.",
        examples: [
          { de: "DE: 'Es regnet.' → VI wörtlich: 'Nó mưa.' → VI korrekt: 'Trời mưa.'", vi: "'Es' có chức năng ngữ pháp, không dịch thành 'nó'." },
          { de: "DE: 'Mir ist kalt.' → VI wörtlich: 'Tôi là lạnh.' → VI korrekt: 'Tôi thấy lạnh.'", vi: "Dativ-Konstruktion → Tiếng Việt dùng 'thấy' + tính từ." },
          { de: "VI: 'Ăn cơm chưa?' → DE wörtlich: 'Reis gegessen schon?' → DE korrekt: 'Hast du schon gegessen?'", vi: "Câu chào Việt → Dịch thoáng sang Đức." },
        ],
      },
      {
        rule: "Grammatische Kategorien ohne Äquivalent: Deutsch hat Genus, Kasus, Konjunktiv, Passiv mit Morphologie. Vietnamesisch drückt dies durch Wortstellung, Partikeln und Kontext aus.",
        ruleVi:
          "Phạm trù ngữ pháp không tương đương: Đức có giống, cách, Konjunktiv, bị động bằng hình thái. Việt dùng trật tự từ, tiểu từ và ngữ cảnh.",
        examples: [
          { de: "Genus: der Tisch (m.), die Lampe (f.), das Buch (n.) → VI: cái bàn, cái đèn, cuốn sách (kein Genus, aber Klassifikatoren)", vi: "Tiếng Việt dùng loại từ (cái, con, cuốn) thay cho giống ngữ pháp." },
          { de: "Konjunktiv II: 'Hätte ich Geld, würde ich reisen.' → VI: 'Nếu tôi có tiền, tôi sẽ đi du lịch.' (kein Konjunktiv)", vi: "Tiếng Việt không thay đổi hình thái động từ, chỉ dùng 'nếu'." },
          { de: "Passiv: 'Das Buch wurde geschrieben.' → VI: 'Cuốn sách được viết.' ('được' als Passivmarker)", vi: "Tiếng Việt dùng 'được/bị' để đánh dấu bị động." },
        ],
      },
      {
        rule: "Kulturelle Adaptation: Redewendungen, Sprichwörter und kulturelle Referenzen müssen durch äquivalente Konzepte in der Zielsprache ersetzt werden.",
        ruleVi:
          "Thích ứng văn hóa: Thành ngữ, tục ngữ và tham chiếu văn hóa phải được thay bằng khái niệm tương đương trong ngôn ngữ đích.",
        examples: [
          { de: "DE: 'Da liegt der Hund begraben.' → VI: 'Đó mới là vấn đề.' (nicht wörtlich übersetzen!)", vi: "Thành ngữ Đức → Dịch ý, không dịch từng từ." },
          { de: "DE: 'Morgenstund hat Gold im Mund.' → VI: 'Đầu hôm không lo, cuối hôm xấu hổ.' (äquivalentes Sprichwort)", vi: "Tục ngữ Đức → Tìm tục ngữ Việt tương đương." },
          { de: "VI: 'Một con sáo không làm nên mùa xuân.' → DE: 'Eine Schwalbe macht noch keinen Sommer.'", vi: "Tục ngữ Việt → Tục ngữ Đức tương đương (sáo→Schwalbe, xuân→Sommer)." },
        ],
      },
      {
        rule: "Übersetzung von Partikeln: Deutsche Modalpartikeln (doch, mal, ja, halt, eben, wohl) und vietnamesische Partikeln (à, ạ, nhé, nhỉ, đi, chứ) haben keine 1:1-Entsprechung.",
        ruleVi:
          "Dịch tiểu từ: Tiểu từ tình thái Đức (doch, mal, ja, halt) và tiểu từ Việt (à, ạ, nhé, nhỉ) không có tương đương 1:1.",
        examples: [
          { de: "'Komm doch mal vorbei!' → 'Ghé chơi nhé!' (doch mal → nhé)", vi: "'Doch mal' thể hiện lời mời thân thiện → 'nhé' trong tiếng Việt." },
          { de: "'Das ist ja interessant!' → 'Thú vị nhỉ!' (ja → nhỉ)", vi: "'Ja' thể hiện ngạc nhiên → 'nhỉ' trong tiếng Việt." },
          { de: "'Das ist halt so.' → 'Nó là vậy thôi.' (halt → thôi)", vi: "'Halt' thể hiện chấp nhận → 'thôi' trong tiếng Việt." },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Wörtlich übersetzen: 'Ich habe Hunger' → 'Tôi có đói'.",
        correct: "'Ich habe Hunger' → 'Tôi đói.' (Vietnamesisch: kein 'haben' für Zustände).",
        explanation:
          "Deutsche 'haben'-Konstruktionen für Zustände werden im Vietnamesischen anders ausgedrückt. / Cấu trúc 'haben' cho trạng thái trong tiếng Đức diễn đạt khác trong tiếng Việt.",
      },
      {
        wrong: "Sprichwörter wörtlich übersetzen: 'Der Hund ist dort begraben.'",
        correct: "Sprichwörter/Redewendungen durch Äquivalente ersetzen oder umschreiben.",
        explanation:
          "Wörtliche Übersetzung von Idiomen ergibt oft Unsinn. / Dịch sát thành ngữ thường vô nghĩa.",
      },
      {
        wrong: "Modalpartikeln ignorieren oder alle mit einem Wort übersetzen.",
        correct: "Partikeln tragen wichtige pragmatische Bedeutung – kontextabhängig übersetzen.",
        explanation:
          "Jede Partikel hat mehrere Funktionen je nach Kontext. / Mỗi tiểu từ có nhiều chức năng tùy ngữ cảnh.",
      },
    ],
    vietnameseComparison:
      "Đây là chương đặc biệt quan trọng cho người Việt học tiếng Đức! Hai ngôn ngữ khác nhau cơ bản: Đức = tổng hợp (thay đổi hình thái từ), Việt = phân tích (dùng từ riêng biệt). Khi dịch, KHÔNG BAO GIỜ dịch từng từ. Luôn dịch ý. Nắm vững: Genus→loại từ, Kasus→trật tự từ, Konjunktiv→'nếu/giá mà', Passiv→'được/bị', Artikel→ngữ cảnh.",
    exercises: [
      {
        type: "translate",
        question: "Übersetze sinngemäß ins Deutsche: 'Ăn quả nhớ kẻ trồng cây.'",
        questionVi: "Dịch thoáng sang tiếng Đức.",
        answer: "Wer die Frucht genießt, soll an den denken, der den Baum gepflanzt hat. / Wes Brot ich ess, des Lied ich sing.",
        explanation: "Kulturelle Adaptation: Nicht wörtlich, sondern sinngemäß oder durch deutsches Äquivalent.",
      },
      {
        type: "multipleChoice",
        question: "Wie übersetzt man 'Es regnet.' am besten ins Vietnamesische?",
        questionVi: "Dịch 'Es regnet.' sang tiếng Việt như thế nào?",
        options: ["Nó mưa.", "Trời mưa.", "Mưa nó.", "Cái mưa."],
        answer: "Trời mưa.",
        explanation: "'Es' ist Scheinsubjekt (giả chủ ngữ) – im Vietnamesischen: 'Trời' (Himmel/Wetter) als Subjekt.",
      },
      {
        type: "transform",
        question: "Übersetze die Modalpartikel: 'Mach doch mal das Fenster auf!' → Vietnamesisch?",
        questionVi: "Dịch tiểu từ tình thái sang tiếng Việt.",
        answer: "Mở cửa sổ ra đi!",
        explanation: "'Doch mal' = freundliche Aufforderung → 'đi' in Vietnamesisch.",
      },
    ],
  },
  // ============================================================
  // TOPIC 10: Fehlerfreies Deutsch (Interferenzfehler)
  // ============================================================
  {
    id: "c2-gram-10",
    title: "Fehlerfreies Deutsch (Interferenzfehler Vietnamesisch-Deutsch)",
    titleVi: "Tiếng Đức không lỗi (Lỗi giao thoa Việt-Đức)",
    chapter: 10,
    order: 10,
    level: "C2",
    explanation:
      "Interferenzfehler entstehen, wenn Strukturen der Muttersprache (Vietnamesisch) auf das Deutsche übertragen werden. Auf C2-Niveau eliminiert man diese systematisch. Die häufigsten Bereiche: Artikelgebrauch, Genus, Kasus, Präpositionen, Wortstellung, Tempus und fehlende Morphologie.\n\nLỗi giao thoa xảy ra khi cấu trúc tiếng mẹ đẻ (Việt) được áp dụng sang tiếng Đức. Ở C2, bạn loại bỏ chúng một cách có hệ thống. Các lĩnh vực phổ biến nhất: mạo từ, giống, cách, giới từ, trật tự từ, thì và hình thái từ thiếu.",
    rules: [
      {
        rule: "Artikelfehler: Vietnamesisch hat keine Artikel. Deutsche Artikel (der/die/das, ein/eine) müssen immer stehen, außer bei Ausnahmen (Eigennamen, Stoffnamen ohne Artikel).",
        ruleVi:
          "Lỗi mạo từ: Tiếng Việt không có mạo từ. Mạo từ Đức (der/die/das, ein/eine) phải luôn có mặt, trừ ngoại lệ.",
        examples: [
          { de: "Falsch: 'Ich gehe in Schule.' → Richtig: 'Ich gehe in die Schule.'", vi: "Thiếu mạo từ 'die' trước 'Schule'." },
          { de: "Falsch: 'Er ist Student an der Universität Hanoi.' → Richtig (wenn kein Artikel nötig): 'Er ist Student an der Universität Hanoi.'", vi: "Manchmal ist der Satz korrekt – Genus und Kontext prüfen." },
          { de: "Falsch: 'Ich trinke der Kaffee.' → Richtig: 'Ich trinke Kaffee.' (Nullartikel bei Stoffnamen)", vi: "Kaffee ohne Artikel bei allgemeiner Aussage." },
        ],
      },
      {
        rule: "Genusfehler: Vietnamesisch hat kein grammatisches Genus. Im Deutschen muss man das Genus jedes Nomens lernen.",
        ruleVi:
          "Lỗi giống: Tiếng Việt không có giống ngữ pháp. Trong tiếng Đức phải học giống của mỗi danh từ.",
        examples: [
          { de: "Falsch: 'das Tisch' → Richtig: 'der Tisch' (maskulin)", vi: "'Tisch' là giống đực, không phải trung." },
          { de: "Falsch: 'der Mädchen' → Richtig: 'das Mädchen' (neutrum, wegen Diminutiv -chen)", vi: "'Mädchen' là giống trung vì có hậu tố -chen (dạng thu nhỏ)." },
          { de: "Falsch: 'die Universität' → Richtig: 'die Universität' (feminin, Endung -tät immer feminin)", vi: "Đuôi -tät luôn giống cái. Quy tắc giúp nhớ giống." },
        ],
      },
      {
        rule: "Wortstellungsfehler: Vietnamesisch hat SVO-Wortstellung ohne Inversion. Im Deutschen steht das Verb an Position 2, mit Inversion nach Adverbien und in Nebensätzen am Ende.",
        ruleVi:
          "Lỗi trật tự từ: Tiếng Việt có trật tự SVO không đảo. Tiếng Đức: động từ ở vị trí 2, đảo ngữ sau trạng từ, và ở cuối trong mệnh đề phụ.",
        examples: [
          { de: "Falsch: 'Gestern ich bin gegangen.' → Richtig: 'Gestern bin ich gegangen.' (Inversion)", vi: "Sau trạng từ thời gian, chủ ngữ và động từ đảo vị trí." },
          { de: "Falsch: 'Ich weiß, dass er hat das gemacht.' → Richtig: 'Ich weiß, dass er das gemacht hat.' (Verb am Ende)", vi: "Trong mệnh đề phụ, động từ chia đứng cuối." },
          { de: "Falsch: 'Er nicht kann kommen.' → Richtig: 'Er kann nicht kommen.'", vi: "'Nicht' đứng sau động từ khiếm khuyết, trước động từ chính." },
        ],
      },
      {
        rule: "Präpositionsfehler: Vietnamesische Präpositionen entsprechen nicht 1:1 den deutschen. 'Ở' kann 'in', 'an', 'auf', 'bei' sein. Jede deutsche Präposition hat einen festen Kasus.",
        ruleVi:
          "Lỗi giới từ: Giới từ Việt không tương ứng 1:1 với Đức. 'Ở' có thể là 'in', 'an', 'auf', 'bei'. Mỗi giới từ Đức đi với cách cố định.",
        examples: [
          { de: "Falsch: 'Ich wohne in Vietnam.' → Richtig: 'Ich wohne in Vietnam.' (korrekt!) aber: 'Ich wohne auf dem Land.' (nicht 'in dem Land')", vi: "'Auf dem Land' = ở nông thôn, không dùng 'in'." },
          { de: "Falsch: 'Ich freue mich auf dich.' (Zukunft) vs. 'Ich freue mich über dich.' (Gegenwart)", vi: "'Auf' = mong đợi (tương lai), 'über' = vui vì (hiện tại). Giới từ thay đổi nghĩa!" },
          { de: "Falsch: 'Ich denke auf dich.' → Richtig: 'Ich denke an dich.'", vi: "'Denken an' = nghĩ đến. Giới từ cố định, phải học thuộc." },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Tempora vermischen: 'Gestern ich gehe ins Kino.'",
        correct: "Gestern bin ich ins Kino gegangen. (Perfekt für Vergangenheit)",
        explanation:
          "Vietnamesisch hat keine Tempusmarkierung am Verb. Im Deutschen MUSS das Verb die Zeit anzeigen. / Tiếng Việt không chia thì ở động từ. Tiếng Đức PHẢI chia thì.",
      },
      {
        wrong: "Adjektivdeklination weglassen: 'ein groß Haus'",
        correct: "'Ein großes Haus' (Adjektivdeklination im Deutschen obligatorisch)",
        explanation:
          "Im Vietnamesischen werden Adjektive nicht dekliniert. Im Deutschen tragen sie Endungen je nach Genus/Kasus/Artikel. / Tiếng Việt không chia tính từ. Tiếng Đức chia theo giống/cách/mạo từ.",
      },
      {
        wrong: "Pluralbildung raten: 'die Kinds' statt 'die Kinder'.",
        correct: "Deutschen Plural immer mitlernen: das Kind → die Kinder.",
        explanation:
          "Vietnamesisch hat keine Pluralmarkierung. Deutsche Pluralbildung ist unregelmäßig – mitlernen! / Tiếng Việt không đánh dấu số nhiều. Số nhiều Đức bất quy tắc – phải học kèm!",
      },
    ],
    vietnameseComparison:
      "Chương này là TÓM TẮT TẤT CẢ lỗi giao thoa Việt-Đức. Tiếng Việt = phân tích (không chia động từ, không giống, không cách, không mạo từ). Tiếng Đức = tổng hợp (chia động từ, 3 giống, 4 cách, mạo từ bắt buộc). Mỗi sự khác biệt tạo ra một loại lỗi. Ở C2, bạn phải nhận diện và sửa TẤT CẢ lỗi này tự động, không cần suy nghĩ.",
    exercises: [
      {
        type: "errorCorrection",
        question: "Korrigiere: 'Gestern ich habe gegangen in die Stadt und ich habe gekauft ein schön Kleid.'",
        questionVi: "Sửa lỗi (có nhiều lỗi).",
        answer: "Gestern bin ich in die Stadt gegangen und habe ein schönes Kleid gekauft.",
        explanation: "Lỗi: 1) Inversion fehlt, 2) 'gegangen' mit 'bin', 3) Wortstellung, 4) Adjektivdeklination 'schönes'.",
      },
      {
        type: "multipleChoice",
        question: "Welcher Satz ist korrekt?",
        questionVi: "Câu nào đúng?",
        options: ["Ich freue mich auf das Wochenende.", "Ich freue mich zu das Wochenende.", "Ich freue mich für das Wochenende.", "Ich freue mich in das Wochenende."],
        answer: "Ich freue mich auf das Wochenende.",
        explanation: "'Sich freuen auf + Akk.' = mong đợi. Giới từ cố định, phải học thuộc.",
      },
      {
        type: "fillBlank",
        question: "Ich wohne _____ _____ Land, aber meine Schwester wohnt _____ der Stadt. (auf dem / in)",
        questionVi: "Tôi sống ở nông thôn, nhưng chị tôi sống ở thành phố.",
        answer: "auf dem, in",
        explanation: "'Auf dem Land' = ở nông thôn, 'in der Stadt' = ở thành phố. Giới từ khác nhau!",
      },
    ],
  },
  // ============================================================
  // TOPIC 11: Stilistik – Vom guten zum brillanten Deutsch
  // ============================================================
  {
    id: "c2-gram-11",
    title: "Stilistik: Vom guten zum brillanten Deutsch",
    titleVi: "Phong cách học: Từ tiếng Đức tốt đến tiếng Đức xuất sắc",
    chapter: 11,
    order: 11,
    level: "C2",
    explanation:
      "Auf C2-Niveau geht es nicht nur um Korrektheit, sondern um Eleganz, Präzision und stilistische Vielfalt. Man variiert Satzlänge und -struktur, wählt treffende Wörter statt allgemeiner, vermeidet Wiederholungen, nutzt Synonyme bewusst und findet den richtigen Ton für jeden Kontext. Das Ziel: Deutsch schreiben und sprechen wie ein gebildeter Muttersprachler.\n\nỞ C2, không chỉ đúng mà còn phải thanh lịch, chính xác và đa dạng phong cách. Bạn thay đổi độ dài và cấu trúc câu, chọn từ chính xác thay vì chung chung, tránh lặp lại, dùng từ đồng nghĩa có ý thức và tìm giọng điệu phù hợp cho mọi ngữ cảnh. Mục tiêu: viết và nói như người Đức có học.",
    rules: [
      {
        rule: "Wortschatzpräzision: Statt allgemeiner Verben (machen, tun, gehen) treffende Verben verwenden (anfertigen, bewerkstelligen, schlendern).",
        ruleVi:
          "Từ vựng chính xác: Thay vì dùng động từ chung (machen, tun, gehen), dùng động từ chính xác (anfertigen, bewerkstelligen, schlendern).",
        examples: [
          { de: "Statt: 'Er machte einen Kuchen.' → Besser: 'Er backte einen Kuchen.'", vi: "Thay vì 'làm bánh' → 'nướng bánh' (chính xác hơn)." },
          { de: "Statt: 'Sie ging durch den Park.' → Besser: 'Sie schlenderte durch den Park.'", vi: "Thay vì 'đi qua' → 'dạo bước qua' (gợi hình hơn)." },
          { de: "Statt: 'Das Buch ist gut.' → Besser: 'Das Buch ist fesselnd/aufschlussreich/packend.'", vi: "Thay vì 'tốt' → 'hấp dẫn/sáng tỏ/cuốn hút' (cụ thể hơn)." },
        ],
      },
      {
        rule: "Satzvariation: Kurze und lange Sätze wechseln. Nicht nur Hauptsätze, nicht nur lange Perioden. Rhythmus schaffen.",
        ruleVi:
          "Biến đổi câu: Xen kẽ câu ngắn và dài. Không chỉ câu chính, không chỉ câu dài. Tạo nhịp điệu.",
        examples: [
          { de: "Monoton: 'Er kam. Er sah. Er ging.' → Besser: 'Er kam und sah sich um. Dann ging er, ohne ein Wort zu sagen.'", vi: "Đơn điệu vs. Có nhịp điệu và sự kết nối." },
          { de: "Zu lang: Ein Satz über 5 Zeilen → Besser: In 2-3 Sätze aufteilen, mit Konnektoren verbinden.", vi: "Quá dài: Chia thành 2-3 câu, liên kết bằng liên từ." },
          { de: "Stilistisch: Kurzer Satz nach langem = Hervorhebung. 'Nach all den Jahren des Kampfes, der Entbehrung und der Hoffnung erreichte er sein Ziel. Endlich.'", vi: "Câu ngắn sau câu dài = nhấn mạnh. 'Cuối cùng.'" },
        ],
      },
      {
        rule: "Vermeidung von Wiederholungen durch Synonyme, Pronomen, Oberbegriffe und Umschreibungen.",
        ruleVi:
          "Tránh lặp lại bằng từ đồng nghĩa, đại từ, từ khái quát và diễn đạt vòng.",
        examples: [
          { de: "Statt: 'Der Hund bellte. Der Hund lief weg.' → 'Der Hund bellte. Das Tier lief weg.'", vi: "Dùng 'das Tier' (con vật) thay vì lặp 'der Hund' (con chó)." },
          { de: "Statt: 'Berlin ist schön. Berlin hat viele Sehenswürdigkeiten.' → 'Berlin ist schön. Die Hauptstadt hat viele Sehenswürdigkeiten.'", vi: "Dùng 'die Hauptstadt' (thủ đô) thay vì lặp 'Berlin'." },
          { de: "Statt: 'Er sagte... Er sagte... Er sagte...' → 'Er sagte... Er betonte... Er fügte hinzu...'", vi: "Dùng nhiều Verba dicendi: sagte, betonte, fügte hinzu, erklärte." },
        ],
      },
      {
        rule: "Nominalstil vs. Verbalstil: Nominalstil (viele Nominalisierungen) wirkt formell/bürokratisch. Verbalstil (mehr Verben) wirkt lebendig/dynamisch. C2-Sprecher wählen bewusst.",
        ruleVi:
          "Văn phong danh từ vs. động từ: Danh từ hóa nhiều = trang trọng/hành chính. Nhiều động từ = sống động/năng động. Ở C2, bạn chọn có ý thức.",
        examples: [
          { de: "Nominalstil: 'Die Durchführung der Überprüfung erfolgte unter Einhaltung der Vorschriften.'", vi: "Văn phong danh từ: nhiều danh từ hóa, trang trọng, cứng." },
          { de: "Verbalstil: 'Man überprüfte alles und hielt sich dabei an die Vorschriften.'", vi: "Văn phong động từ: nhiều động từ, tự nhiên, sống động." },
          { de: "Mischung (ideal): 'Die Überprüfung ergab, dass alle Vorschriften eingehalten wurden.'", vi: "Kết hợp (lý tưởng): cân bằng danh từ và động từ." },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Nur einfache Wörter verwenden: 'gut', 'schlecht', 'schön', 'machen'.",
        correct: "Präzise Alternativen: 'hervorragend', 'mangelhaft', 'bezaubernd', 'anfertigen'.",
        explanation:
          "Auf C2-Niveau wird ein differenzierter Wortschatz erwartet. / Ở C2, cần vốn từ vựng phong phú và chính xác.",
      },
      {
        wrong: "Immer gleiche Satzstruktur: S-V-O, S-V-O, S-V-O.",
        correct: "Variation: Adverb voran, Nebensatz zuerst, Partizipialphrase, rhetorische Frage.",
        explanation:
          "Monotone Satzstruktur wirkt langweilig. Variation zeigt Sprachbeherrschung. / Cấu trúc đơn điệu nhàm chán. Biến đổi thể hiện thành thạo.",
      },
      {
        wrong: "Zu viel Nominalstil in kreativen Texten.",
        correct: "Nominalstil für Fachtexte, Verbalstil für kreative/narrative Texte.",
        explanation:
          "Der Stil muss zur Textsorte passen. / Phong cách phải phù hợp thể loại văn bản.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng phân biệt văn phong: văn viết vs. văn nói, Hán Việt vs. thuần Việt. 'Phụ nữ' (trang trọng) vs. 'đàn bà' (bình dân), 'quốc gia' vs. 'nước'. Nguyên tắc tương tự: chọn từ phù hợp ngữ cảnh. Ở C2 tiếng Đức, bạn cần CẢM NHẬN được sắc thái từ vựng như người bản ngữ: 'schauen' (trung tính) vs. 'gaffen' (tiêu cực) vs. 'betrachten' (trung tính-trang trọng).",
    exercises: [
      {
        type: "transform",
        question: "Verbessere stilistisch: 'Er machte die Tür auf und ging in das Zimmer. Das Zimmer war groß. Er machte das Licht an.'",
        questionVi: "Cải thiện phong cách.",
        answer: "Er öffnete die Tür und betrat das geräumige Zimmer. Dann schaltete er das Licht ein.",
        explanation: "'Machte auf'→'öffnete', 'ging in'→'betrat', 'groß'→'geräumig', 'machte an'→'schaltete ein'. Sätze verbunden.",
      },
      {
        type: "multipleChoice",
        question: "Welches Wort passt NICHT in einen formellen Text?",
        questionVi: "Từ nào KHÔNG phù hợp trong văn bản trang trọng?",
        options: ["infolgedessen", "demzufolge", "halt", "nichtsdestotrotz"],
        answer: "halt",
        explanation: "'Halt' ist eine umgangssprachliche Modalpartikel. / 'Halt' là tiểu từ khẩu ngữ, không dùng trong văn bản trang trọng.",
      },
      {
        type: "fillBlank",
        question: "Nominalstil → Verbalstil: 'Die Durchführung der Analyse...' → 'Man _____ ...'",
        questionVi: "Chuyển từ văn phong danh từ sang động từ.",
        answer: "analysierte",
        explanation: "'Die Durchführung der Analyse' → 'Man analysierte'. Verbalstil = trực tiếp hơn, sống động hơn.",
      },
    ],
  },
];
