export interface GrammarTopic {
  id: string;
  title: string;
  titleVi: string;
  chapter: number;
  order: number;
  level: "B2";
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

export const b2GrammarTopics: GrammarTopic[] = [
  // ============================================================
  // TOPIC 1: Konjunktiv II Vergangenheit (Kapitel 1)
  // ============================================================
  {
    id: "b2-gram-01",
    title: "Konjunktiv II Vergangenheit (hätte/wäre + Partizip II)",
    titleVi: "Giả định cách II quá khứ (hätte/wäre + Partizip II)",
    chapter: 1,
    order: 1,
    level: "B2",
    explanation:
      "Der Konjunktiv II Vergangenheit drückt irreale Situationen in der Vergangenheit aus: Was wäre passiert, wenn...? Er wird mit 'hätte/wäre + Partizip II' gebildet. Er kommt häufig in Bedingungssätzen, Wunschsätzen und bei Bedauern vor.\n\nGiả định cách II quá khứ diễn tả tình huống không thực trong quá khứ: Chuyện gì đã xảy ra nếu...? Được tạo bằng 'hätte/wäre + Partizip II'. Thường gặp trong câu điều kiện, câu ước, và diễn đạt sự tiếc nuối.",
    rules: [
      {
        rule: "Bildung: hätte + Partizip II für transitive Verben und die meisten intransitiven Verben.",
        ruleVi:
          "Cách tạo: hätte + Partizip II cho động từ ngoại động và hầu hết động từ nội động.",
        examples: [
          {
            de: "Ich hätte das Buch gelesen, wenn ich Zeit gehabt hätte.",
            vi: "Tôi đã đọc cuốn sách nếu tôi có thời gian.",
          },
          {
            de: "Er hätte den Job bekommen, wenn er sich beworben hätte.",
            vi: "Anh ấy đã được việc nếu anh ấy ứng tuyển.",
          },
          {
            de: "Wir hätten das Problem gelöst, wenn wir zusammengearbeitet hätten.",
            vi: "Chúng tôi đã giải quyết vấn đề nếu chúng tôi hợp tác.",
          },
        ],
      },
      {
        rule: "Bildung: wäre + Partizip II für Bewegungsverben und Zustandsänderungen (sein, werden, bleiben, gehen, fahren, fliegen usw.).",
        ruleVi:
          "Cách tạo: wäre + Partizip II cho động từ chuyển động và thay đổi trạng thái (sein, werden, bleiben, gehen, fahren, fliegen v.v.).",
        examples: [
          {
            de: "Wenn ich nicht krank gewesen wäre, wäre ich zur Party gegangen.",
            vi: "Nếu tôi không bị ốm, tôi đã đến bữa tiệc.",
          },
          {
            de: "Sie wäre nach Japan geflogen, wenn sie genug Geld gehabt hätte.",
            vi: "Cô ấy đã bay sang Nhật nếu cô ấy có đủ tiền.",
          },
          {
            de: "Er wäre länger geblieben, wenn das Konzert besser gewesen wäre.",
            vi: "Anh ấy đã ở lại lâu hơn nếu buổi hòa nhạc hay hơn.",
          },
        ],
      },
      {
        rule: "Bei Modalverben: hätte + Infinitiv + Modalverb im Infinitiv (Doppelter Infinitiv / Ersatzinfinitiv).",
        ruleVi:
          "Với động từ khiếm khuyết: hätte + Infinitiv + động từ khiếm khuyết ở nguyên mẫu (Infinitiv kép).",
        examples: [
          {
            de: "Er hätte kommen können, aber er wollte nicht.",
            vi: "Anh ấy đã có thể đến, nhưng anh ấy không muốn.",
          },
          {
            de: "Sie hätte das nicht sagen sollen.",
            vi: "Cô ấy không nên nói điều đó.",
          },
          {
            de: "Wir hätten früher anfangen müssen.",
            vi: "Chúng tôi đáng lẽ phải bắt đầu sớm hơn.",
          },
        ],
      },
      {
        rule: "Wunschsätze mit 'Wenn ... doch nur ...!' oder 'Hätte ich doch ...!' drücken Bedauern aus.",
        ruleVi:
          "Câu ước với 'Wenn ... doch nur ...!' hoặc 'Hätte ich doch ...!' diễn tả sự tiếc nuối.",
        examples: [
          {
            de: "Wenn ich doch nur besser aufgepasst hätte!",
            vi: "Giá mà tôi chú ý hơn!",
          },
          {
            de: "Hätte ich doch den Zug nicht verpasst!",
            vi: "Giá mà tôi không lỡ tàu!",
          },
          {
            de: "Wäre sie doch nur früher gekommen!",
            vi: "Giá mà cô ấy đến sớm hơn!",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Wenn ich das gewusst habe, hätte ich anders gehandelt.",
        correct: "Wenn ich das gewusst hätte, hätte ich anders gehandelt.",
        explanation:
          "Im irrealen Bedingungssatz muss 'hätte' (nicht 'habe') stehen. / Trong câu điều kiện không thực phải dùng 'hätte' (không phải 'habe').",
      },
      {
        wrong: "Er hätte gekonnt kommen.",
        correct: "Er hätte kommen können.",
        explanation:
          "Bei Modalverben steht der Doppelter Infinitiv: hätte + Infinitiv + Modalverb im Infinitiv. / Với động từ khiếm khuyết dùng infinitiv kép: hätte + Infinitiv + động từ khiếm khuyết nguyên mẫu.",
      },
      {
        wrong: "Ich wäre das Buch gelesen.",
        correct: "Ich hätte das Buch gelesen.",
        explanation:
          "'Lesen' ist transitiv und braucht 'hätte', nicht 'wäre'. / 'Lesen' là ngoại động từ, dùng 'hätte', không phải 'wäre'.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt không chia động từ theo thì. Để diễn tả điều kiện không thực trong quá khứ, tiếng Việt dùng 'giá mà', 'nếu mà... thì đã...', hoặc 'đáng lẽ ra'. Ví dụ: 'Giá mà tôi biết trước' = 'Hätte ich das gewusst'. Trong tiếng Đức, bạn PHẢI thay đổi cấu trúc động từ (hätte/wäre + Partizip II). Đặc biệt chú ý vị trí động từ trong mệnh đề phụ: động từ chia đứng cuối cùng.",
    exercises: [
      {
        type: "fillBlank",
        question:
          "Wenn ich mehr Zeit gehabt _____, _____ ich dich besucht.",
        questionVi: "Nếu tôi có nhiều thời gian hơn, tôi đã đến thăm bạn.",
        answer: "hätte, hätte",
        explanation:
          "Cả hai chỗ đều dùng 'hätte': hätte + gehabt (mệnh đề phụ), hätte + besucht (mệnh đề chính).",
      },
      {
        type: "multipleChoice",
        question:
          "Wenn sie rechtzeitig _____, hätte sie den Zug noch erreicht.",
        questionVi:
          "Nếu cô ấy _____ đúng giờ, cô ấy đã kịp tàu.",
        options: [
          "losgegangen wäre",
          "losgegangen hätte",
          "losging",
          "losgehen würde",
        ],
        answer: "losgegangen wäre",
        explanation:
          "'Losgehen' là động từ chuyển động, dùng 'wäre + Partizip II'. Trong mệnh đề phụ, 'wäre' đứng cuối.",
      },
      {
        type: "translate",
        question: "Giá mà tôi đã học tiếng Đức sớm hơn!",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Hätte ich doch nur früher Deutsch gelernt!",
        explanation:
          "Câu ước quá khứ: 'Hätte ich doch nur + Partizip II'. 'Doch nur' nhấn mạnh sự tiếc nuối.",
      },
      {
        type: "errorCorrection",
        question:
          "Finde den Fehler: 'Wenn er nicht so müde gewesen hätte, wäre er mitgekommen.'",
        questionVi:
          "Tìm lỗi sai: 'Wenn er nicht so müde gewesen hätte, wäre er mitgekommen.'",
        answer:
          "Wenn er nicht so müde gewesen wäre, wäre er mitgekommen.",
        explanation:
          "'Müde sein' → 'gewesen wäre' (nicht 'gewesen hätte'), weil 'sein' mit 'wäre' konjugiert wird.",
      },
      {
        type: "reorder",
        question:
          "hätte / ich / das / gewusst / , / hätte / ich / mich / anders / entschieden",
        questionVi: "Sắp xếp: Nếu tôi biết điều đó, tôi đã quyết định khác.",
        answer: "Hätte ich das gewusst, hätte ich mich anders entschieden.",
        explanation:
          "Câu điều kiện không dùng 'wenn': động từ chia đứng đầu câu (Inversion).",
      },
    ],
  },

  // ============================================================
  // TOPIC 2: Partizipialkonstruktionen (Kapitel 2)
  // ============================================================
  {
    id: "b2-gram-02",
    title: "Partizipialkonstruktionen",
    titleVi: "Cấu trúc phân từ (Partizip I & II làm tính từ)",
    chapter: 2,
    order: 2,
    level: "B2",
    explanation:
      "Partizipialkonstruktionen verwenden Partizip I (Infinitiv + d) oder Partizip II als erweiterte Adjektive vor dem Nomen. Sie ersetzen Relativsätze und kommen besonders in der Schriftsprache vor.\n\nCấu trúc phân từ dùng Partizip I (Infinitiv + d) hoặc Partizip II làm tính từ mở rộng trước danh từ. Chúng thay thế mệnh đề quan hệ (Relativsatz) và thường gặp trong văn viết.",
    rules: [
      {
        rule: "Partizip I (Präsenspartizip): Infinitiv + d → drückt eine gleichzeitige, aktive Handlung aus.",
        ruleVi:
          "Partizip I (phân từ hiện tại): Infinitiv + d → diễn tả hành động đồng thời, chủ động.",
        examples: [
          {
            de: "Der schlafende Hund liegt auf dem Sofa. (= Der Hund, der schläft, ...)",
            vi: "Con chó đang ngủ nằm trên sofa. (= Con chó mà đang ngủ...)",
          },
          {
            de: "Die im Park spielenden Kinder sind laut.",
            vi: "Những đứa trẻ đang chơi trong công viên rất ồn.",
          },
          {
            de: "Der am Tisch sitzende Mann liest eine Zeitung.",
            vi: "Người đàn ông ngồi ở bàn đang đọc báo.",
          },
        ],
      },
      {
        rule: "Partizip II als Adjektiv: drückt eine abgeschlossene oder passive Handlung aus.",
        ruleVi:
          "Partizip II làm tính từ: diễn tả hành động đã hoàn thành hoặc bị động.",
        examples: [
          {
            de: "Das reparierte Auto fährt wieder. (= Das Auto, das repariert wurde, ...)",
            vi: "Chiếc xe đã được sửa chạy lại. (= Chiếc xe mà đã được sửa...)",
          },
          {
            de: "Der von der Polizei gesuchte Mann wurde gefunden.",
            vi: "Người đàn ông bị cảnh sát truy tìm đã được tìm thấy.",
          },
          {
            de: "Die gut vorbereitete Präsentation war ein Erfolg.",
            vi: "Bài thuyết trình được chuẩn bị kỹ đã thành công.",
          },
        ],
      },
      {
        rule: "Erweiterte Partizipialkonstruktionen: Zusätzliche Informationen stehen zwischen Artikel und Nomen.",
        ruleVi:
          "Cấu trúc phân từ mở rộng: Thông tin bổ sung đứng giữa mạo từ và danh từ.",
        examples: [
          {
            de: "Die seit drei Jahren in Berlin lebende Frau spricht fließend Deutsch.",
            vi: "Người phụ nữ sống ở Berlin từ ba năm nay nói tiếng Đức trôi chảy.",
          },
          {
            de: "Der von vielen Kritikern hoch gelobte Film gewann den Preis.",
            vi: "Bộ phim được nhiều nhà phê bình khen ngợi đã giành giải.",
          },
        ],
      },
      {
        rule: "Umwandlung: Relativsatz ↔ Partizipialkonstruktion. Aktiv → Partizip I, Passiv/Perfekt → Partizip II.",
        ruleVi:
          "Chuyển đổi: Mệnh đề quan hệ ↔ Cấu trúc phân từ. Chủ động → Partizip I, Bị động/Hoàn thành → Partizip II.",
        examples: [
          {
            de: "Das Kind, das weint → Das weinende Kind",
            vi: "Đứa trẻ mà đang khóc → Đứa trẻ đang khóc",
          },
          {
            de: "Der Brief, der geschrieben wurde → Der geschriebene Brief",
            vi: "Lá thư mà đã được viết → Lá thư đã được viết",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Der geschlafene Mann wachte auf.",
        correct: "Der schlafende Mann wachte auf.",
        explanation:
          "Intransitive Verben ohne Zustandsänderung bilden kein Partizip II als Adjektiv. Hier Partizip I verwenden. / Động từ nội động không thay đổi trạng thái không tạo Partizip II làm tính từ. Dùng Partizip I.",
      },
      {
        wrong: "Die in Berlin lebte Frau...",
        correct: "Die in Berlin lebende Frau...",
        explanation:
          "Partizip I wird mit Infinitiv + d gebildet: lebend + Adjektivendung. / Partizip I tạo bằng Infinitiv + d: lebend + đuôi tính từ.",
      },
      {
        wrong: "Die gekochte Suppe Frau bringt den Kindern.",
        correct: "Die von der Frau gekochte Suppe...",
        explanation:
          "In der Partizipialkonstruktion muss die Wortstellung korrekt sein: alle Erweiterungen stehen vor dem Partizip. / Trong cấu trúc phân từ, trật tự từ phải đúng: mọi bổ ngữ đứng trước phân từ.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng có thể đặt cụm từ bổ nghĩa trước danh từ, nhưng đơn giản hơn vì không cần chia đuôi tính từ. Ví dụ: 'đứa trẻ đang khóc' = 'das weinende Kind'. Tuy nhiên, trong tiếng Đức, phân từ phải được chia theo giống, số, cách (Gender, Numerus, Kasus) giống như tính từ. Cấu trúc phân từ mở rộng (extended) là điểm khó nhất vì tiếng Việt thường đặt bổ ngữ SAU danh từ, còn tiếng Đức đặt tất cả TRƯỚC danh từ.",
    exercises: [
      {
        type: "transform",
        question:
          "Forme den Relativsatz um: 'Der Mann, der am Fenster steht, ist mein Chef.'",
        questionVi: "Chuyển mệnh đề quan hệ thành cấu trúc phân từ.",
        answer: "Der am Fenster stehende Mann ist mein Chef.",
        explanation:
          "'Der steht' (aktiv, gleichzeitig) → Partizip I: stehend + Adjektivendung -e.",
      },
      {
        type: "multipleChoice",
        question:
          "Die von der Regierung _____ Maßnahmen sind umstritten.",
        questionVi: "Các biện pháp được chính phủ _____ gây tranh cãi.",
        options: ["beschlossenen", "beschließenden", "beschließen", "beschloss"],
        answer: "beschlossenen",
        explanation:
          "Passiv → Partizip II: beschlossen + Adjektivendung -en (Plural, Nominativ).",
      },
      {
        type: "fillBlank",
        question:
          "Das seit Wochen _____ (warten) Paket ist endlich angekommen.",
        questionVi: "Gói hàng được chờ đợi từ nhiều tuần đã đến.",
        answer: "erwartete",
        explanation:
          "Passiv/abgeschlossen: 'erwartete' (Partizip II von 'erwarten' + Adjektivendung -e).",
      },
      {
        type: "translate",
        question: "Người phụ nữ đang đọc sách ở thư viện là giáo viên của tôi.",
        questionVi: "Dịch sang tiếng Đức (dùng cấu trúc phân từ).",
        answer:
          "Die in der Bibliothek lesende Frau ist meine Lehrerin.",
        explanation:
          "Aktiv, gleichzeitig → Partizip I: lesend + Adjektivendung -e.",
      },
      {
        type: "errorCorrection",
        question:
          "Finde den Fehler: 'Die gut organisiert Konferenz war ein Erfolg.'",
        questionVi: "Tìm lỗi: 'Die gut organisiert Konferenz war ein Erfolg.'",
        answer: "Die gut organisierte Konferenz war ein Erfolg.",
        explanation:
          "Partizip II als Adjektiv braucht eine Endung: organisiert + e (Femininum, Nominativ, bestimmter Artikel).",
      },
    ],
  },

  // ============================================================
  // TOPIC 3: Nomen-Verb-Verbindungen (Kapitel 3)
  // ============================================================
  {
    id: "b2-gram-03",
    title: "Nomen-Verb-Verbindungen",
    titleVi: "Kết hợp danh từ - động từ (Funktionsverbgefüge)",
    chapter: 3,
    order: 3,
    level: "B2",
    explanation:
      "Nomen-Verb-Verbindungen (Funktionsverbgefüge) sind feste Kombinationen aus einem Nomen und einem Funktionsverb. Das Verb verliert seine ursprüngliche Bedeutung, die Hauptbedeutung liegt im Nomen. Sie sind typisch für formelle Sprache und Schriftsprache.\n\nKết hợp danh từ - động từ (Funktionsverbgefüge) là các tổ hợp cố định gồm danh từ và động từ chức năng. Động từ mất nghĩa gốc, nghĩa chính nằm ở danh từ. Chúng đặc trưng cho ngôn ngữ trang trọng và văn viết.",
    rules: [
      {
        rule: "Häufige Funktionsverben: stellen, nehmen, bringen, kommen, stehen, treffen, führen, leisten, geben, ziehen.",
        ruleVi:
          "Các động từ chức năng phổ biến: stellen, nehmen, bringen, kommen, stehen, treffen, führen, leisten, geben, ziehen.",
        examples: [
          {
            de: "eine Frage stellen (= fragen)",
            vi: "đặt câu hỏi (= hỏi)",
          },
          {
            de: "Rücksicht nehmen auf (= berücksichtigen)",
            vi: "quan tâm/chiếu cố đến (= cân nhắc)",
          },
          {
            de: "in Betrieb nehmen (= starten)",
            vi: "đưa vào vận hành (= khởi động)",
          },
        ],
      },
      {
        rule: "Nomen-Verb-Verbindungen mit Präposition: Verb + Präposition + Nomen.",
        ruleVi:
          "Kết hợp danh từ - động từ với giới từ: Động từ + Giới từ + Danh từ.",
        examples: [
          {
            de: "zur Verfügung stehen (= verfügbar sein)",
            vi: "có sẵn (= sẵn có)",
          },
          {
            de: "in Frage kommen (= möglich sein)",
            vi: "có thể được xem xét (= khả thi)",
          },
          {
            de: "unter Druck stehen (= gestresst sein)",
            vi: "chịu áp lực (= bị stress)",
          },
          {
            de: "in Anspruch nehmen (= nutzen/beanspruchen)",
            vi: "sử dụng/tận dụng",
          },
        ],
      },
      {
        rule: "Aktiv- und Passivbedeutung: 'in Betrieb nehmen' (aktiv) vs. 'in Betrieb sein' (Zustand).",
        ruleVi:
          "Nghĩa chủ động và bị động: 'in Betrieb nehmen' (chủ động) vs. 'in Betrieb sein' (trạng thái).",
        examples: [
          {
            de: "Die Firma hat die neue Maschine in Betrieb genommen. (aktiv)",
            vi: "Công ty đã đưa máy mới vào vận hành. (chủ động)",
          },
          {
            de: "Die Maschine ist seit gestern in Betrieb. (Zustand)",
            vi: "Máy đã hoạt động từ hôm qua. (trạng thái)",
          },
          {
            de: "Er bringt das Thema zur Sprache. (aktiv) / Das Thema kommt zur Sprache. (passivisch)",
            vi: "Anh ấy đưa chủ đề ra bàn. (chủ động) / Chủ đề được đưa ra bàn. (bị động)",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Ich mache eine Frage.",
        correct: "Ich stelle eine Frage.",
        explanation:
          "Das Funktionsverb für 'Frage' ist 'stellen', nicht 'machen'. / Động từ chức năng cho 'Frage' là 'stellen', không phải 'machen'.",
      },
      {
        wrong: "Er nimmt an der Diskussion Anteil.",
        correct: "Er nimmt an der Diskussion teil. / Er nimmt Anteil an seinem Schicksal.",
        explanation:
          "'Teilnehmen an' (tham gia) ≠ 'Anteil nehmen an' (chia sẻ/đồng cảm). Nicht verwechseln! / Không nhầm lẫn hai cấu trúc này!",
      },
      {
        wrong: "Das kommt nicht in die Frage.",
        correct: "Das kommt nicht in Frage.",
        explanation:
          "Feste Wendung ohne Artikel: 'in Frage kommen'. / Cụm cố định không có mạo từ: 'in Frage kommen'.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng có nhiều kết hợp danh từ - động từ tương tự: 'đặt câu hỏi' (eine Frage stellen), 'đưa ra quyết định' (eine Entscheidung treffen), 'chịu áp lực' (unter Druck stehen). Điểm khác biệt: trong tiếng Đức, bạn phải nhớ chính xác giới từ đi kèm và mạo từ (nếu có). Ví dụ: 'zur Verfügung stellen' (KHÔNG PHẢI 'zu Verfügung'). Ngoài ra, nhiều NVV tiếng Đức có thể chuyển thành một động từ đơn: 'eine Entscheidung treffen' = 'entscheiden'.",
    exercises: [
      {
        type: "matching",
        question:
          "Ordne zu: 1) eine Entscheidung __ 2) Kritik __ 3) in Kauf __ 4) zur Verfügung __",
        questionVi: "Nối: 1) ra quyết định 2) phê bình 3) chấp nhận 4) có sẵn",
        options: ["treffen", "üben", "nehmen", "stellen"],
        answer: "1-treffen, 2-üben, 3-nehmen, 4-stellen",
        explanation:
          "eine Entscheidung treffen, Kritik üben, in Kauf nehmen, zur Verfügung stellen – đây là các Funktionsverbgefüge cố định.",
      },
      {
        type: "fillBlank",
        question: "Der Arzt hat dem Patienten einen guten Rat _____.",
        questionVi: "Bác sĩ đã cho bệnh nhân một lời khuyên tốt.",
        answer: "gegeben",
        explanation:
          "'Einen Rat geben' = đưa ra lời khuyên. Funktionsverb: geben.",
      },
      {
        type: "transform",
        question:
          "Ersetze das Verb durch eine Nomen-Verb-Verbindung: 'Die Firma beeinflusst die Politik.'",
        questionVi: "Thay động từ bằng kết hợp danh từ - động từ.",
        answer: "Die Firma übt Einfluss auf die Politik aus.",
        explanation:
          "'Beeinflussen' → 'Einfluss ausüben auf + Akk'. Tách thành danh từ 'Einfluss' + động từ 'ausüben'.",
      },
      {
        type: "multipleChoice",
        question:
          "Welche Nomen-Verb-Verbindung bedeutet 'berücksichtigen'?",
        questionVi:
          "Kết hợp danh từ - động từ nào có nghĩa là 'cân nhắc/xem xét'?",
        options: [
          "Rücksicht nehmen auf",
          "in Betracht ziehen",
          "Bescheid geben",
          "Abschied nehmen",
        ],
        answer: "in Betracht ziehen",
        explanation:
          "'In Betracht ziehen' = berücksichtigen (cân nhắc). 'Rücksicht nehmen auf' = Rücksicht zeigen (quan tâm/chiếu cố).",
      },
      {
        type: "translate",
        question: "Chúng tôi phải đưa ra quyết định trước thứ Sáu.",
        questionVi: "Dịch sang tiếng Đức (dùng Nomen-Verb-Verbindung).",
        answer: "Wir müssen bis Freitag eine Entscheidung treffen.",
        explanation:
          "'Đưa ra quyết định' = 'eine Entscheidung treffen'. 'Bis Freitag' = trước/đến thứ Sáu.",
      },
    ],
  },

  // ============================================================
  // TOPIC 4: Erweiterte Passivformen (Kapitel 4)
  // ============================================================
  {
    id: "b2-gram-04",
    title: "Erweiterte Passivformen (Zustandspassiv, Passiv mit Modalverben)",
    titleVi: "Dạng bị động mở rộng (Bị động trạng thái, Bị động với động từ khiếm khuyết)",
    chapter: 4,
    order: 4,
    level: "B2",
    explanation:
      "Neben dem Vorgangspassiv (werden + Partizip II) gibt es das Zustandspassiv (sein + Partizip II), das einen Zustand als Ergebnis einer Handlung beschreibt. Außerdem können Passivkonstruktionen mit Modalverben kombiniert werden.\n\nNgoài bị động quá trình (werden + Partizip II) còn có bị động trạng thái (sein + Partizip II), mô tả trạng thái là kết quả của hành động. Ngoài ra, cấu trúc bị động có thể kết hợp với động từ khiếm khuyết.",
    rules: [
      {
        rule: "Zustandspassiv: sein + Partizip II → beschreibt das Ergebnis einer abgeschlossenen Handlung.",
        ruleVi:
          "Bị động trạng thái: sein + Partizip II → mô tả kết quả của hành động đã hoàn thành.",
        examples: [
          {
            de: "Die Tür ist geschlossen. (Zustandspassiv – Ergebnis)",
            vi: "Cửa đã đóng rồi. (Bị động trạng thái – kết quả)",
          },
          {
            de: "Die Tür wird geschlossen. (Vorgangspassiv – Vorgang)",
            vi: "Cửa đang được đóng. (Bị động quá trình – đang diễn ra)",
          },
          {
            de: "Das Essen ist schon vorbereitet.",
            vi: "Đồ ăn đã được chuẩn bị sẵn rồi.",
          },
        ],
      },
      {
        rule: "Passiv mit Modalverben Präsens: Modalverb + Partizip II + werden.",
        ruleVi:
          "Bị động với động từ khiếm khuyết thì hiện tại: Động từ khiếm khuyết + Partizip II + werden.",
        examples: [
          {
            de: "Das Formular muss ausgefüllt werden.",
            vi: "Mẫu đơn phải được điền.",
          },
          {
            de: "Die Hausaufgaben sollen bis morgen abgegeben werden.",
            vi: "Bài tập phải được nộp trước ngày mai.",
          },
          {
            de: "Der Patient kann operiert werden.",
            vi: "Bệnh nhân có thể được phẫu thuật.",
          },
        ],
      },
      {
        rule: "Passiv mit Modalverben Vergangenheit: Modalverb im Präteritum + Partizip II + werden.",
        ruleVi:
          "Bị động với ĐTKK quá khứ: ĐTKK ở Präteritum + Partizip II + werden.",
        examples: [
          {
            de: "Das Auto musste repariert werden.",
            vi: "Chiếc xe phải được sửa.",
          },
          {
            de: "Die Rechnung konnte nicht bezahlt werden.",
            vi: "Hóa đơn không thể được thanh toán.",
          },
        ],
      },
      {
        rule: "Subjektloses Passiv: Bei intransitiven Verben kann 'es' als formales Subjekt stehen.",
        ruleVi:
          "Bị động không chủ ngữ: Với động từ nội động, 'es' có thể đứng làm chủ ngữ hình thức.",
        examples: [
          {
            de: "Es wird hier nicht geraucht. / Hier wird nicht geraucht.",
            vi: "Ở đây không được hút thuốc.",
          },
          {
            de: "Es wurde die ganze Nacht getanzt.",
            vi: "Người ta nhảy cả đêm.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Die Tür wird geschlossen. (when describing a state)",
        correct: "Die Tür ist geschlossen.",
        explanation:
          "Zustandspassiv (sein +) für Ergebnis/Zustand, Vorgangspassiv (werden +) für den Prozess. / Bị động trạng thái (sein +) cho kết quả, bị động quá trình (werden +) cho quá trình.",
      },
      {
        wrong: "Das muss gemacht geworden.",
        correct: "Das muss gemacht werden.",
        explanation:
          "Im Passiv mit Modalverben steht 'werden' (Infinitiv), nicht 'geworden'. / Trong bị động với ĐTKK dùng 'werden' (nguyên mẫu), không phải 'geworden'.",
      },
      {
        wrong: "Der Brief ist von mir geschrieben worden.",
        correct:
          "Der Brief ist von mir geschrieben worden. (Perfekt Passiv) ODER Der Brief ist geschrieben. (Zustandspassiv)",
        explanation:
          "Nicht Perfekt Passiv mit Zustandspassiv verwechseln! Perfekt Passiv = ist + Partizip II + worden. / Không nhầm bị động hoàn thành với bị động trạng thái!",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt dùng 'được' (bị động tích cực) và 'bị' (bị động tiêu cực) để tạo câu bị động: 'Cửa được đóng' vs. 'Cửa bị đóng'. Tiếng Đức không phân biệt tích cực/tiêu cực mà phân biệt quá trình (werden) và trạng thái (sein). Ví dụ: 'Die Tür wird geschlossen' (đang được đóng – quá trình) vs. 'Die Tür ist geschlossen' (đã đóng – trạng thái). Điểm khó: kết hợp bị động với động từ khiếm khuyết vì tiếng Việt chỉ cần thêm 'phải/có thể/nên' + 'được/bị'.",
    exercises: [
      {
        type: "multipleChoice",
        question:
          "Der Computer _____ seit gestern repariert. (Zustandspassiv)",
        questionVi: "Máy tính đã được sửa từ hôm qua. (Bị động trạng thái)",
        options: ["ist", "wird", "wurde", "hat"],
        answer: "ist",
        explanation:
          "Zustandspassiv: sein + Partizip II. 'Ist repariert' = đã được sửa (trạng thái kết quả).",
      },
      {
        type: "fillBlank",
        question:
          "Die Prüfungsergebnisse _____ morgen bekannt _____ _____. (Passiv + Modalverb)",
        questionVi: "Kết quả thi sẽ được công bố ngày mai.",
        answer: "sollen morgen bekannt gegeben werden",
        explanation:
          "Passiv mit Modalverb: sollen + Partizip II (bekannt gegeben) + werden.",
      },
      {
        type: "transform",
        question:
          "Forme in Zustandspassiv um: 'Man hat die Rechnung bezahlt.'",
        questionVi: "Chuyển sang bị động trạng thái.",
        answer: "Die Rechnung ist bezahlt.",
        explanation:
          "Zustandspassiv: sein + Partizip II. Beschreibt den Zustand nach dem Bezahlen.",
      },
      {
        type: "errorCorrection",
        question:
          "Finde den Fehler: 'Das Fenster muss geöffnet geworden.'",
        questionVi: "Tìm lỗi: 'Das Fenster muss geöffnet geworden.'",
        answer: "Das Fenster muss geöffnet werden.",
        explanation:
          "Passiv + Modalverb: Modalverb + Partizip II + werden (Infinitiv, NICHT geworden).",
      },
      {
        type: "translate",
        question:
          "Bức thư này phải được gửi đi hôm nay.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Dieser Brief muss heute abgeschickt werden.",
        explanation:
          "Passiv + Modalverb: muss + Partizip II (abgeschickt) + werden.",
      },
    ],
  },

  // ============================================================
  // TOPIC 5: Subjektive Bedeutung der Modalverben (Kapitel 5)
  // ============================================================
  {
    id: "b2-gram-05",
    title: "Subjektive Bedeutung der Modalverben",
    titleVi: "Nghĩa chủ quan của động từ khiếm khuyết",
    chapter: 5,
    order: 5,
    level: "B2",
    explanation:
      "Modalverben haben neben ihrer objektiven Bedeutung (Fähigkeit, Erlaubnis, Pflicht) auch eine subjektive Bedeutung: Sie drücken Vermutungen, Behauptungen oder Überzeugungen des Sprechers aus.\n\nĐộng từ khiếm khuyết ngoài nghĩa khách quan (khả năng, phép, bổn phận) còn có nghĩa chủ quan: diễn tả sự phỏng đoán, khẳng định hoặc niềm tin của người nói.",
    rules: [
      {
        rule: "'Müssen' subjektiv: starke Vermutung / hohe Sicherheit (ca. 95%).",
        ruleVi:
          "'Müssen' chủ quan: phỏng đoán mạnh / độ chắc chắn cao (khoảng 95%).",
        examples: [
          {
            de: "Er muss krank sein. (= Ich bin fast sicher, dass er krank ist.)",
            vi: "Anh ấy chắc hẳn bị ốm. (= Tôi gần như chắc chắn anh ấy bị ốm.)",
          },
          {
            de: "Sie muss die Prüfung bestanden haben. (Vergangenheit)",
            vi: "Cô ấy chắc hẳn đã đỗ kỳ thi. (Quá khứ)",
          },
        ],
      },
      {
        rule: "'Dürfte' subjektiv: Vermutung mit hoher Wahrscheinlichkeit (ca. 80-85%).",
        ruleVi:
          "'Dürfte' chủ quan: phỏng đoán với xác suất cao (khoảng 80-85%).",
        examples: [
          {
            de: "Das dürfte stimmen. (= Das ist wahrscheinlich richtig.)",
            vi: "Điều đó có lẽ đúng. (= Có lẽ đúng.)",
          },
          {
            de: "Er dürfte schon angekommen sein.",
            vi: "Anh ấy có lẽ đã đến rồi.",
          },
        ],
      },
      {
        rule: "'Können' subjektiv: Möglichkeit / Vermutung (ca. 50%).",
        ruleVi:
          "'Können' chủ quan: khả năng / phỏng đoán (khoảng 50%).",
        examples: [
          {
            de: "Er kann recht haben. (= Es ist möglich, dass er recht hat.)",
            vi: "Anh ấy có thể đúng. (= Có thể anh ấy đúng.)",
          },
          {
            de: "Das kann nicht wahr sein! (Negation = Unmöglichkeit)",
            vi: "Điều đó không thể đúng! (Phủ định = không thể)",
          },
        ],
      },
      {
        rule: "'Sollen' subjektiv: Wiedergabe einer fremden Behauptung (Hörensagen).",
        ruleVi:
          "'Sollen' chủ quan: truyền đạt lại lời người khác (nghe nói).",
        examples: [
          {
            de: "Er soll sehr reich sein. (= Man sagt, dass er sehr reich ist.)",
            vi: "Nghe nói anh ấy rất giàu. (= Người ta nói anh ấy rất giàu.)",
          },
          {
            de: "Das Restaurant soll ausgezeichnet sein.",
            vi: "Nghe nói nhà hàng đó tuyệt vời.",
          },
        ],
      },
      {
        rule: "'Wollen' subjektiv: Wiedergabe einer eigenen Behauptung (unbestätigt/zweifelhaft).",
        ruleVi:
          "'Wollen' chủ quan: truyền đạt lại lời tự xưng của ai đó (chưa xác nhận/đáng nghi).",
        examples: [
          {
            de: "Er will Arzt sein. (= Er behauptet, Arzt zu sein.)",
            vi: "Anh ấy tự xưng là bác sĩ. (= Anh ấy tuyên bố mình là bác sĩ.)",
          },
          {
            de: "Sie will das nicht gewusst haben.",
            vi: "Cô ấy tuyên bố là không biết điều đó.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Er muss krank gewesen. (Vergangenheit)",
        correct: "Er muss krank gewesen sein.",
        explanation:
          "Subjektive Bedeutung in der Vergangenheit: Modalverb + Partizip II + haben/sein. / Nghĩa chủ quan ở quá khứ: ĐTKK + Partizip II + haben/sein.",
      },
      {
        wrong: "Er soll reich ist.",
        correct: "Er soll reich sein.",
        explanation:
          "Nach dem Modalverb steht der Infinitiv, nicht die konjugierte Form. / Sau ĐTKK là nguyên mẫu, không phải dạng chia.",
      },
      {
        wrong: "'Er will Arzt sein' = Er möchte Arzt werden.",
        correct: "'Er will Arzt sein' (subjektiv) = Er behauptet, Arzt zu sein.",
        explanation:
          "Nicht die subjektive Bedeutung von 'wollen' (Behauptung) mit der objektiven (Wunsch) verwechseln! / Không nhầm nghĩa chủ quan (tuyên bố) với nghĩa khách quan (muốn)!",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt dùng các trạng từ để diễn đạt mức độ phỏng đoán: 'chắc hẳn' (müssen), 'có lẽ' (dürfte), 'có thể' (können), 'nghe nói' (sollen), 'tự xưng là' (wollen). Trong tiếng Đức, những nghĩa này được diễn đạt bằng chính động từ khiếm khuyết. Điểm khó nhất là phân biệt nghĩa khách quan và chủ quan dựa vào ngữ cảnh. Ví dụ: 'Er muss arbeiten' (khách quan = anh ấy phải làm việc) vs. 'Er muss krank sein' (chủ quan = anh ấy chắc hẳn ốm).",
    exercises: [
      {
        type: "multipleChoice",
        question:
          "Anna ist heute nicht im Büro. Sie _____ krank sein.",
        questionVi: "Anna hôm nay không ở văn phòng. Cô ấy _____ bị ốm.",
        options: ["muss", "soll", "will", "mag"],
        answer: "muss",
        explanation:
          "'Muss' (chủ quan) = chắc hẳn, phỏng đoán mạnh (95%). Người nói gần như chắc chắn.",
      },
      {
        type: "fillBlank",
        question:
          "Das neue Restaurant _____ sehr gut sein. Viele Leute empfehlen es. (Hörensagen)",
        questionVi: "Nghe nói nhà hàng mới rất ngon. Nhiều người giới thiệu.",
        answer: "soll",
        explanation:
          "'Soll' (chủ quan) = nghe nói, truyền đạt thông tin từ người khác.",
      },
      {
        type: "transform",
        question:
          "Forme um mit subjektivem Modalverb: 'Wahrscheinlich hat er den Brief nicht gelesen.'",
        questionVi: "Chuyển đổi dùng ĐTKK chủ quan.",
        answer: "Er dürfte den Brief nicht gelesen haben.",
        explanation:
          "'Wahrscheinlich' → 'dürfte' (phỏng đoán xác suất cao). Quá khứ: dürfte + Partizip II + haben.",
      },
      {
        type: "errorCorrection",
        question:
          "Finde den Fehler: 'Sie will eine berühmte Sängerin gewesen haben.' – Ist das korrekt?",
        questionVi:
          "Tìm lỗi: 'Sie will eine berühmte Sängerin gewesen haben.'",
        answer:
          "Der Satz ist korrekt. 'Wollen' subjektiv + Perfekt-Infinitiv: Sie behauptet, eine berühmte Sängerin gewesen zu sein.",
        explanation:
          "Câu đúng. 'Wollen' chủ quan + Infinitiv Perfekt: cô ấy tuyên bố từng là ca sĩ nổi tiếng.",
      },
      {
        type: "translate",
        question:
          "Anh ấy chắc hẳn đã quên cuộc hẹn.",
        questionVi: "Dịch sang tiếng Đức (dùng ĐTKK chủ quan).",
        answer: "Er muss den Termin vergessen haben.",
        explanation:
          "'Chắc hẳn' → 'muss' (chủ quan). Quá khứ: muss + Partizip II (vergessen) + haben.",
      },
    ],
  },

  // ============================================================
  // TOPIC 6: Erweiterte Konnektoren (Kapitel 6)
  // ============================================================
  {
    id: "b2-gram-06",
    title: "Erweiterte Konnektoren (je...desto, sowohl...als auch, weder...noch)",
    titleVi: "Liên từ mở rộng (je...desto, sowohl...als auch, weder...noch)",
    chapter: 6,
    order: 6,
    level: "B2",
    explanation:
      "Erweiterte Konnektoren verbinden Sätze oder Satzteile auf komplexe Weise. Zweiteilige Konnektoren (Doppelkonjunktionen) wie 'je...desto', 'sowohl...als auch', 'weder...noch', 'nicht nur...sondern auch', 'entweder...oder', 'zwar...aber' ermöglichen differenzierte Aussagen.\n\nLiên từ mở rộng nối câu hoặc thành phần câu theo cách phức tạp. Liên từ kép như 'je...desto', 'sowohl...als auch', 'weder...noch', 'nicht nur...sondern auch', 'entweder...oder', 'zwar...aber' giúp diễn đạt chính xác hơn.",
    rules: [
      {
        rule: "'Je + Komparativ ..., desto/umso + Komparativ ...': proportionaler Vergleich. Im je-Satz steht das Verb am Ende, im desto-Satz an zweiter Stelle.",
        ruleVi:
          "'Je + so sánh hơn ..., desto/umso + so sánh hơn ...': so sánh tỷ lệ thuận. Trong mệnh đề je, động từ ở cuối; trong mệnh đề desto, động từ ở vị trí thứ 2.",
        examples: [
          {
            de: "Je mehr ich lerne, desto besser verstehe ich die Grammatik.",
            vi: "Tôi càng học nhiều, tôi càng hiểu ngữ pháp tốt hơn.",
          },
          {
            de: "Je älter man wird, umso weiser wird man.",
            vi: "Càng già càng khôn ngoan.",
          },
          {
            de: "Je früher du kommst, desto mehr Zeit haben wir.",
            vi: "Bạn đến càng sớm, chúng ta càng có nhiều thời gian.",
          },
        ],
      },
      {
        rule: "'Sowohl ... als auch': Beide Elemente gelten. Verb im Plural, wenn zwei Subjekte verbunden werden.",
        ruleVi:
          "'Sowohl ... als auch' (cả ... lẫn ...): cả hai yếu tố đều đúng. Động từ chia số nhiều khi nối hai chủ ngữ.",
        examples: [
          {
            de: "Sowohl mein Bruder als auch meine Schwester studieren in Berlin.",
            vi: "Cả anh trai lẫn chị gái tôi đều học ở Berlin.",
          },
          {
            de: "Er spricht sowohl Deutsch als auch Englisch fließend.",
            vi: "Anh ấy nói trôi chảy cả tiếng Đức lẫn tiếng Anh.",
          },
        ],
      },
      {
        rule: "'Weder ... noch': Negation beider Elemente. Verb nach 'weder' kann invertiert stehen.",
        ruleVi:
          "'Weder ... noch' (không ... cũng không ...): phủ định cả hai. Động từ sau 'weder' có thể đảo.",
        examples: [
          {
            de: "Er trinkt weder Kaffee noch Tee.",
            vi: "Anh ấy không uống cà phê cũng không uống trà.",
          },
          {
            de: "Weder hat er angerufen, noch hat er geschrieben.",
            vi: "Anh ấy không gọi điện cũng không viết thư.",
          },
        ],
      },
      {
        rule: "'Nicht nur ... sondern auch': Steigerung/Erweiterung. 'Zwar ... aber': Einschränkung/Gegenargument.",
        ruleVi:
          "'Nicht nur ... sondern auch' (không chỉ ... mà còn): nâng cao/mở rộng. 'Zwar ... aber' (tuy ... nhưng): hạn chế/phản bác.",
        examples: [
          {
            de: "Sie ist nicht nur intelligent, sondern auch fleißig.",
            vi: "Cô ấy không chỉ thông minh mà còn chăm chỉ.",
          },
          {
            de: "Die Wohnung ist zwar klein, aber sehr gemütlich.",
            vi: "Căn hộ tuy nhỏ nhưng rất ấm cúng.",
          },
          {
            de: "Entweder du kommst mit, oder du bleibst zu Hause.",
            vi: "Hoặc bạn đi cùng, hoặc bạn ở nhà.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Je mehr ich lerne, je besser verstehe ich.",
        correct: "Je mehr ich lerne, desto besser verstehe ich.",
        explanation:
          "Der zweite Teil braucht 'desto' oder 'umso', nicht 'je'. / Phần thứ hai cần 'desto' hoặc 'umso', không phải 'je'.",
      },
      {
        wrong: "Je mehr ich lerne, desto ich verstehe besser.",
        correct: "Je mehr ich lerne, desto besser verstehe ich.",
        explanation:
          "Nach 'desto + Komparativ' steht das Verb an zweiter Stelle (Inversion). / Sau 'desto + so sánh hơn', động từ đứng vị trí thứ 2 (đảo ngữ).",
      },
      {
        wrong: "Sowohl mein Bruder als auch meine Schwester studiert...",
        correct: "Sowohl mein Bruder als auch meine Schwester studieren...",
        explanation:
          "Bei zwei Subjekten mit 'sowohl...als auch' steht das Verb im Plural. / Khi nối hai chủ ngữ, động từ chia số nhiều.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt có cấu trúc tương tự: 'càng...càng...' (je...desto), 'cả...lẫn...' (sowohl...als auch), 'không...cũng không...' (weder...noch), 'không chỉ...mà còn...' (nicht nur...sondern auch). Điểm khác: trong tiếng Đức, vị trí động từ thay đổi theo loại liên từ. Đặc biệt với 'je...desto': mệnh đề 'je' có động từ ở cuối (như mệnh đề phụ), mệnh đề 'desto' có động từ ở vị trí 2 (sau 'desto + Komparativ').",
    exercises: [
      {
        type: "fillBlank",
        question:
          "_____ mehr du übst, _____ schneller wirst du Fortschritte machen.",
        questionVi: "Bạn càng luyện tập nhiều, bạn càng tiến bộ nhanh.",
        answer: "Je, desto",
        explanation:
          "'Je + Komparativ ..., desto + Komparativ ...': so sánh tỷ lệ thuận.",
      },
      {
        type: "multipleChoice",
        question:
          "Er spricht _____ Französisch _____ Spanisch.",
        questionVi: "Anh ấy không nói tiếng Pháp cũng không nói tiếng Tây Ban Nha.",
        options: [
          "weder ... noch",
          "sowohl ... als auch",
          "entweder ... oder",
          "nicht nur ... sondern auch",
        ],
        answer: "weder ... noch",
        explanation:
          "'Weder...noch' = không...cũng không (phủ định cả hai).",
      },
      {
        type: "reorder",
        question:
          "ist / zwar / Die Prüfung / schwer / , / aber / machbar / sie / ist",
        questionVi: "Sắp xếp: Kỳ thi tuy khó nhưng có thể làm được.",
        answer: "Die Prüfung ist zwar schwer, aber sie ist machbar.",
        explanation:
          "'Zwar...aber': 'zwar' đứng sau động từ chia trong mệnh đề chính, 'aber' nối mệnh đề thứ hai.",
      },
      {
        type: "transform",
        question:
          "Verbinde: 'Er ist intelligent.' + 'Er ist faul.' (zwar...aber)",
        questionVi: "Nối hai câu dùng 'zwar...aber'.",
        answer: "Er ist zwar intelligent, aber faul.",
        explanation:
          "'Zwar...aber' = tuy...nhưng. 'Zwar' đứng sau động từ chia.",
      },
      {
        type: "translate",
        question: "Cô ấy không chỉ đẹp mà còn rất thông minh.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Sie ist nicht nur schön, sondern auch sehr intelligent.",
        explanation:
          "'Nicht nur...sondern auch' = không chỉ...mà còn.",
      },
    ],
  },

  // ============================================================
  // TOPIC 7: Verben mit Präpositionen fortgeschritten (Kapitel 7)
  // ============================================================
  {
    id: "b2-gram-07",
    title: "Verben mit Präpositionen (fortgeschritten)",
    titleVi: "Động từ với giới từ (nâng cao)",
    chapter: 7,
    order: 7,
    level: "B2",
    explanation:
      "Auf B2-Niveau werden komplexere Verben mit festen Präpositionen gelernt. Besonders wichtig sind die Pronominaladverbien (da(r)- + Präposition) und Fragewörter (wo(r)- + Präposition) als Ersatz für Präposition + Pronomen.\n\nỞ trình độ B2, học các động từ với giới từ cố định phức tạp hơn. Đặc biệt quan trọng là các trạng từ đại từ (da(r)- + giới từ) và từ hỏi (wo(r)- + giới từ) thay thế cho giới từ + đại từ.",
    rules: [
      {
        rule: "Wichtige B2-Verben mit Präpositionen: verfügen über + Akk, beruhen auf + Dat, bestehen auf + Dat, hinweisen auf + Akk, beitragen zu + Dat, neigen zu + Dat.",
        ruleVi:
          "Các động từ B2 quan trọng với giới từ: verfügen über + Akk (có/sở hữu), beruhen auf + Dat (dựa trên), bestehen auf + Dat (khăng khăng), hinweisen auf + Akk (chỉ ra), beitragen zu + Dat (đóng góp vào), neigen zu + Dat (có xu hướng).",
        examples: [
          {
            de: "Die Firma verfügt über moderne Technologie.",
            vi: "Công ty sở hữu công nghệ hiện đại.",
          },
          {
            de: "Sein Erfolg beruht auf harter Arbeit.",
            vi: "Thành công của anh ấy dựa trên sự làm việc chăm chỉ.",
          },
          {
            de: "Sie besteht auf einer schriftlichen Bestätigung.",
            vi: "Cô ấy khăng khăng đòi xác nhận bằng văn bản.",
          },
        ],
      },
      {
        rule: "Pronominaladverbien (da(r)-): Ersetzen 'Präposition + Pronomen' für Sachen. 'dar-' vor Vokalen, 'da-' vor Konsonanten.",
        ruleVi:
          "Trạng từ đại từ (da(r)-): Thay thế 'giới từ + đại từ' cho vật. 'dar-' trước nguyên âm, 'da-' trước phụ âm.",
        examples: [
          {
            de: "Ich denke an die Prüfung. → Ich denke daran.",
            vi: "Tôi nghĩ về kỳ thi. → Tôi nghĩ về nó.",
          },
          {
            de: "Er hat sich über das Geschenk gefreut. → Er hat sich darüber gefreut.",
            vi: "Anh ấy vui về món quà. → Anh ấy vui về điều đó.",
          },
          {
            de: "Wir haben mit dem Problem gerechnet. → Wir haben damit gerechnet.",
            vi: "Chúng tôi đã tính đến vấn đề. → Chúng tôi đã tính đến điều đó.",
          },
        ],
      },
      {
        rule: "Fragewörter (wo(r)-): 'Woran denkst du?' statt 'An was denkst du?' (formell bevorzugt).",
        ruleVi:
          "Từ hỏi (wo(r)-): 'Woran denkst du?' thay vì 'An was denkst du?' (trang trọng hơn).",
        examples: [
          {
            de: "Worüber sprechen Sie? (= Über was sprechen Sie?)",
            vi: "Quý vị đang nói về điều gì?",
          },
          {
            de: "Wofür interessierst du dich?",
            vi: "Bạn quan tâm đến điều gì?",
          },
          {
            de: "Womit beschäftigst du dich beruflich?",
            vi: "Bạn làm công việc gì?",
          },
        ],
      },
      {
        rule: "da(r)- + Nebensatz: Pronominaladverb als Verweis auf einen dass-Satz oder Infinitivsatz.",
        ruleVi:
          "da(r)- + mệnh đề phụ: Trạng từ đại từ chỉ dẫn đến mệnh đề dass hoặc mệnh đề zu + Infinitiv.",
        examples: [
          {
            de: "Ich freue mich darauf, dich zu sehen.",
            vi: "Tôi mong được gặp bạn.",
          },
          {
            de: "Er hat sich daran gewöhnt, früh aufzustehen.",
            vi: "Anh ấy đã quen với việc dậy sớm.",
          },
          {
            de: "Wir sind davon überzeugt, dass er unschuldig ist.",
            vi: "Chúng tôi tin rằng anh ấy vô tội.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Ich denke an es.",
        correct: "Ich denke daran.",
        explanation:
          "Für Sachen benutzt man Pronominaladverbien (daran), nicht 'an es'. / Cho vật dùng trạng từ đại từ (daran), không phải 'an es'.",
      },
      {
        wrong: "Ich freue mich darauf, dass ich sehe dich.",
        correct: "Ich freue mich darauf, dich zu sehen.",
        explanation:
          "Bei gleichem Subjekt: Infinitivsatz mit 'zu'. Im dass-Satz: Verb am Ende. / Cùng chủ ngữ: dùng zu + Infinitiv. Trong mệnh đề dass: động từ cuối.",
      },
      {
        wrong: "Er verfügt auf gute Kenntnisse.",
        correct: "Er verfügt über gute Kenntnisse.",
        explanation:
          "'Verfügen über + Akk' (nicht 'auf'). Giới từ cố định cho mỗi động từ – phải học thuộc.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt không có hệ thống giới từ cố định đi kèm động từ như tiếng Đức. Ví dụ: 'nghĩ về' (denken an), 'phụ thuộc vào' (abhängen von), 'tin vào' (glauben an) – giới từ tiếng Việt và tiếng Đức thường KHÔNG tương ứng. Bạn phải học mỗi động từ kèm giới từ của nó. Đặc biệt, hệ thống da(r)-/wo(r)- không có tương đương trong tiếng Việt, vì tiếng Việt đơn giản lặp lại giới từ: 'nghĩ về điều đó' thay vì 'daran denken'.",
    exercises: [
      {
        type: "fillBlank",
        question: "Ich habe mich _____ gewöhnt, jeden Morgen joggen zu gehen.",
        questionVi: "Tôi đã quen với việc chạy bộ mỗi sáng.",
        answer: "daran",
        explanation:
          "'Sich gewöhnen an + Akk' → 'daran' (trạng từ đại từ) + zu-Infinitiv.",
      },
      {
        type: "multipleChoice",
        question: "_____ hängt der Erfolg ab?",
        questionVi: "Thành công phụ thuộc vào điều gì?",
        options: ["Wovon", "Worauf", "Wozu", "Womit"],
        answer: "Wovon",
        explanation:
          "'Abhängen von + Dat' → Fragewort: 'wovon'. 'Von' + 'wo' = 'wovon'.",
      },
      {
        type: "transform",
        question:
          "Ersetze durch Pronominaladverb: 'Er hat sich über die Nachricht gefreut.'",
        questionVi: "Thay bằng trạng từ đại từ.",
        answer: "Er hat sich darüber gefreut.",
        explanation:
          "'Über die Nachricht' (Sache) → 'darüber'. 'dar-' vì 'über' bắt đầu bằng nguyên âm.",
      },
      {
        type: "matching",
        question:
          "Ordne zu: 1) verfügen __ 2) beitragen __ 3) bestehen __ 4) hinweisen __",
        questionVi: "Nối giới từ: 1) sở hữu 2) đóng góp 3) khăng khăng 4) chỉ ra",
        options: ["über + Akk", "zu + Dat", "auf + Dat", "auf + Akk"],
        answer: "1-über + Akk, 2-zu + Dat, 3-auf + Dat, 4-auf + Akk",
        explanation:
          "Mỗi động từ có giới từ cố định riêng. 'Bestehen auf + Dat' vs. 'hinweisen auf + Akk' – cùng giới từ nhưng khác cách (Kasus).",
      },
      {
        type: "translate",
        question: "Tôi mong chờ kỳ nghỉ.",
        questionVi: "Dịch sang tiếng Đức (dùng trạng từ đại từ).",
        answer: "Ich freue mich darauf, Urlaub zu machen.",
        explanation:
          "'Sich freuen auf + Akk' → 'darauf' + zu-Infinitiv. 'Mong chờ' = sich freuen auf.",
      },
    ],
  },

  // ============================================================
  // TOPIC 8: Indirekte Rede / Konjunktiv I erweitert (Kapitel 8)
  // ============================================================
  {
    id: "b2-gram-08",
    title: "Indirekte Rede (Konjunktiv I erweitert)",
    titleVi: "Lời nói gián tiếp (Giả định cách I mở rộng)",
    chapter: 8,
    order: 8,
    level: "B2",
    explanation:
      "Der Konjunktiv I wird in der indirekten Rede verwendet, um die Aussagen anderer Personen wiederzugeben, ohne deren Wahrheit zu bestätigen. Er kommt besonders in Nachrichten, wissenschaftlichen Texten und formeller Sprache vor. Wenn Konjunktiv I = Indikativ, weicht man auf Konjunktiv II aus.\n\nGiả định cách I dùng trong lời nói gián tiếp để truyền đạt phát ngôn của người khác mà không xác nhận tính đúng đắn. Thường gặp trong tin tức, văn bản khoa học và ngôn ngữ trang trọng. Khi Konjunktiv I = Indikativ, dùng Konjunktiv II thay thế.",
    rules: [
      {
        rule: "Bildung Konjunktiv I: Infinitivstamm + Endungen (-e, -est, -e, -en, -et, -en). Besonders bei 'er/sie/es' erkennbar.",
        ruleVi:
          "Cách tạo Konjunktiv I: Gốc Infinitiv + đuôi (-e, -est, -e, -en, -et, -en). Dễ nhận biết nhất ở ngôi 'er/sie/es'.",
        examples: [
          {
            de: "Er sagt, er habe keine Zeit. (haben → habe)",
            vi: "Anh ấy nói rằng anh ấy không có thời gian.",
          },
          {
            de: "Sie behauptet, sie sei unschuldig. (sein → sei)",
            vi: "Cô ấy khẳng định cô ấy vô tội.",
          },
          {
            de: "Der Minister erklärt, die Wirtschaft wachse. (wachsen → wachse)",
            vi: "Bộ trưởng tuyên bố kinh tế đang tăng trưởng.",
          },
        ],
      },
      {
        rule: "Wenn Konjunktiv I = Indikativ → Konjunktiv II verwenden. Häufig bei 'ich' und 'sie (Plural)'.",
        ruleVi:
          "Khi Konjunktiv I = Indikativ → dùng Konjunktiv II thay thế. Thường gặp ở ngôi 'ich' và 'sie (số nhiều)'.",
        examples: [
          {
            de: "Sie sagen, sie hätten kein Geld. (haben: Konj. I 'haben' = Indikativ → Konj. II 'hätten')",
            vi: "Họ nói rằng họ không có tiền.",
          },
          {
            de: "Ich sagte, ich käme morgen. (kommen: Konj. I 'komme' = Indikativ → Konj. II 'käme')",
            vi: "Tôi nói rằng tôi sẽ đến ngày mai.",
          },
        ],
      },
      {
        rule: "Zeitverschiebung in der indirekten Rede: Direkte Rede Perfekt/Präteritum → Konjunktiv I Vergangenheit (habe/sei + Partizip II).",
        ruleVi:
          "Chuyển thì trong lời nói gián tiếp: Lời nói trực tiếp Perfekt/Präteritum → Konjunktiv I quá khứ (habe/sei + Partizip II).",
        examples: [
          {
            de: "Er sagte: 'Ich habe das gemacht.' → Er sagte, er habe das gemacht.",
            vi: "Anh ấy nói: 'Tôi đã làm điều đó.' → Anh ấy nói rằng anh ấy đã làm điều đó.",
          },
          {
            de: "Sie sagte: 'Ich bin nach Berlin gefahren.' → Sie sagte, sie sei nach Berlin gefahren.",
            vi: "Cô ấy nói: 'Tôi đã đi Berlin.' → Cô ấy nói rằng cô ấy đã đi Berlin.",
          },
        ],
      },
      {
        rule: "Einleitende Verben: sagen, berichten, erklären, behaupten, meinen, betonen, mitteilen, verkünden.",
        ruleVi:
          "Động từ dẫn nhập: sagen (nói), berichten (tường thuật), erklären (giải thích), behaupten (khẳng định), meinen (cho rằng), betonen (nhấn mạnh), mitteilen (thông báo), verkünden (công bố).",
        examples: [
          {
            de: "Der Sprecher betonte, die Situation sei unter Kontrolle.",
            vi: "Người phát ngôn nhấn mạnh tình hình đang được kiểm soát.",
          },
          {
            de: "Die Zeitung berichtet, der Präsident habe einen neuen Plan vorgestellt.",
            vi: "Báo đưa tin tổng thống đã trình bày kế hoạch mới.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Er sagt, er hat keine Zeit.",
        correct: "Er sagt, er habe keine Zeit.",
        explanation:
          "In der indirekten Rede (formell) steht Konjunktiv I, nicht Indikativ. / Trong lời nói gián tiếp (trang trọng) dùng Konjunktiv I, không phải Indikativ.",
      },
      {
        wrong: "Sie sagen, sie haben kein Geld. (formelle Sprache)",
        correct: "Sie sagen, sie hätten kein Geld.",
        explanation:
          "'Haben' (Konj. I) = 'haben' (Indikativ) bei 'sie' (Plural) → Ersatzform Konjunktiv II: hätten. / Vì trùng Indikativ ở ngôi 'sie' số nhiều → dùng Konj. II: hätten.",
      },
      {
        wrong: "Er sagte, er sei gekommen gestern.",
        correct: "Er sagte, er sei gestern gekommen.",
        explanation:
          "Die Wortstellung im Nebensatz bleibt: Partizip II steht am Ende (nach dem Zeitadverb). / Trật tự từ: Partizip II đứng cuối (sau trạng từ thời gian).",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt truyền đạt lời nói gián tiếp rất đơn giản: chỉ cần thêm 'rằng' sau động từ nói. Ví dụ: 'Anh ấy nói rằng anh ấy bận' – không cần thay đổi dạng động từ. Trong tiếng Đức, bạn phải đổi sang Konjunktiv I (hoặc II nếu trùng Indikativ). Đây là điểm khó nhất vì người Việt không quen thay đổi dạng động từ khi truyền đạt lời người khác. Ngoài ra, đại từ nhân xưng cũng phải thay đổi (ich → er/sie).",
    exercises: [
      {
        type: "transform",
        question:
          "Setze in indirekte Rede: Der Chef sagt: 'Ich bin mit den Ergebnissen zufrieden.'",
        questionVi: "Chuyển sang lời nói gián tiếp.",
        answer: "Der Chef sagt, er sei mit den Ergebnissen zufrieden.",
        explanation:
          "'Ich bin' → 'er sei' (Konjunktiv I von 'sein', ngôi 3). Đổi đại từ 'ich' → 'er'.",
      },
      {
        type: "multipleChoice",
        question:
          "Die Ministerin erklärte, die Maßnahmen _____ notwendig.",
        questionVi: "Bà bộ trưởng giải thích rằng các biện pháp là cần thiết.",
        options: ["seien", "sind", "wären", "sein"],
        answer: "seien",
        explanation:
          "Konjunktiv I von 'sein' im Plural: seien. Dùng trong lời nói gián tiếp trang trọng.",
      },
      {
        type: "fillBlank",
        question:
          "Er behauptete, er _____ das Geld nicht _____ . (nehmen – Vergangenheit)",
        questionVi: "Anh ấy khẳng định anh ấy không lấy tiền.",
        answer: "habe, genommen",
        explanation:
          "Konjunktiv I Vergangenheit: habe + Partizip II (genommen). 'Er habe ... genommen'.",
      },
      {
        type: "errorCorrection",
        question:
          "Finde den Fehler: 'Die Studenten sagen, sie haben die Aufgabe erledigt.'",
        questionVi: "Tìm lỗi trong câu gián tiếp.",
        answer:
          "Die Studenten sagen, sie hätten die Aufgabe erledigt.",
        explanation:
          "'Sie haben' (Konj. I) = 'sie haben' (Indikativ) → Ersatz: Konjunktiv II 'hätten'. Quá khứ: hätten + erledigt.",
      },
      {
        type: "translate",
        question:
          "Báo đưa tin rằng nền kinh tế đang tăng trưởng.",
        questionVi: "Dịch sang tiếng Đức (dùng Konjunktiv I).",
        answer:
          "Die Zeitung berichtet, die Wirtschaft wachse.",
        explanation:
          "'Wachsen' → Konjunktiv I: 'wachse' (ngôi 3 số ít). Động từ dẫn nhập: berichten.",
      },
    ],
  },

  // ============================================================
  // TOPIC 9: Komplexe Satzstrukturen (Kapitel 9)
  // ============================================================
  {
    id: "b2-gram-09",
    title: "Komplexe Satzstrukturen (Satzklammer, Ausklammerung)",
    titleVi: "Cấu trúc câu phức tạp (Khung câu, Tách khung câu)",
    chapter: 9,
    order: 9,
    level: "B2",
    explanation:
      "Die deutsche Satzklammer ist ein zentrales Strukturprinzip: Das konjugierte Verb steht an Position 2, weitere Verbteile am Ende. Ausklammerung bedeutet, dass Satzglieder aus der Klammer herausgestellt werden (nach rechts). Auf B2-Niveau werden verschachtelte Sätze und erweiterte Klammerstrukturen behandelt.\n\nKhung câu (Satzklammer) là nguyên tắc cấu trúc trung tâm trong tiếng Đức: động từ chia đứng vị trí 2, các phần động từ còn lại ở cuối. Ausklammerung là việc đưa thành phần câu ra ngoài khung (sang phải). Ở trình độ B2, học các câu lồng ghép và cấu trúc khung mở rộng.",
    rules: [
      {
        rule: "Satzklammer im Hauptsatz: Konjugiertes Verb (Position 2) ... trennbarer Präfix / Infinitiv / Partizip II (Ende).",
        ruleVi:
          "Khung câu ở mệnh đề chính: Động từ chia (vị trí 2) ... tiền tố tách / Infinitiv / Partizip II (cuối).",
        examples: [
          {
            de: "Er hat gestern den ganzen Tag im Büro gearbeitet.",
            vi: "Hôm qua anh ấy đã làm việc cả ngày ở văn phòng. ('hat...gearbeitet' = khung câu)",
          },
          {
            de: "Sie ruft ihre Mutter jeden Abend an.",
            vi: "Cô ấy gọi cho mẹ mỗi tối. ('ruft...an' = khung câu)",
          },
        ],
      },
      {
        rule: "Ausklammerung: Bestimmte Elemente dürfen nach der rechten Klammer stehen (Vergleiche, Nebensätze, Präpositionalphrasen).",
        ruleVi:
          "Tách khung câu: Một số thành phần có thể đứng sau khung câu phải (so sánh, mệnh đề phụ, cụm giới từ).",
        examples: [
          {
            de: "Er hat mehr geleistet als alle anderen.",
            vi: "Anh ấy đã làm được nhiều hơn tất cả những người khác. ('als alle anderen' ngoài khung)",
          },
          {
            de: "Ich habe mich entschieden, nach Berlin zu ziehen.",
            vi: "Tôi đã quyết định chuyển đến Berlin. (Infinitivsatz ngoài khung)",
          },
        ],
      },
      {
        rule: "Verschachtelte Nebensätze: Nebensatz im Nebensatz. Das Verb des inneren Nebensatzes steht am Ende seines Teilsatzes.",
        ruleVi:
          "Mệnh đề phụ lồng ghép: Mệnh đề phụ trong mệnh đề phụ. Động từ của mệnh đề phụ bên trong đứng cuối phần mệnh đề đó.",
        examples: [
          {
            de: "Ich weiß, dass er, der gestern angekommen ist, morgen abreist.",
            vi: "Tôi biết rằng anh ấy, người hôm qua đến, ngày mai sẽ đi.",
          },
          {
            de: "Sie sagte, dass sie komme, sobald sie mit der Arbeit fertig sei.",
            vi: "Cô ấy nói rằng cô ấy sẽ đến ngay khi xong việc.",
          },
        ],
      },
      {
        rule: "Mittelfeld-Ordnung: Te-Ka-Mo-Lo (Temporal – Kausal – Modal – Lokal) als Orientierung für die Wortstellung im Mittelfeld.",
        ruleVi:
          "Trật tự Mittelfeld: Te-Ka-Mo-Lo (Thời gian – Nguyên nhân – Cách thức – Địa điểm) là quy tắc trật tự từ trong phần giữa câu.",
        examples: [
          {
            de: "Er fährt morgen wegen der Konferenz mit dem Zug nach München.",
            vi: "Anh ấy ngày mai vì hội nghị đi bằng tàu đến München. (T-K-M-L)",
          },
          {
            de: "Sie hat gestern aus Neugier allein ins Museum gegangen.",
            vi: "Hôm qua cô ấy vì tò mò đi một mình đến bảo tàng.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Er hat gearbeitet gestern im Büro.",
        correct: "Er hat gestern im Büro gearbeitet.",
        explanation:
          "Das Partizip II muss am Ende der Satzklammer stehen. / Partizip II phải đứng cuối khung câu.",
      },
      {
        wrong: "Ich weiß, dass er morgen, der gestern angekommen ist, abreist.",
        correct: "Ich weiß, dass er, der gestern angekommen ist, morgen abreist.",
        explanation:
          "Der eingeschobene Relativsatz steht direkt nach dem Bezugswort, nicht nach dem Zeitadverb. / Mệnh đề quan hệ chèn đứng ngay sau từ được bổ nghĩa.",
      },
      {
        wrong: "Er fährt mit dem Zug morgen nach München wegen der Konferenz.",
        correct: "Er fährt morgen wegen der Konferenz mit dem Zug nach München.",
        explanation:
          "TeKaMoLo: Temporal (morgen) – Kausal (wegen der Konferenz) – Modal (mit dem Zug) – Lokal (nach München).",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt có trật tự từ SVO (Chủ - Động - Tân) khá cố định và đơn giản hơn. Tiếng Đức có hệ thống khung câu (Satzklammer) phức tạp: động từ chia ở vị trí 2, phần còn lại ở cuối. Điều này rất khác với tiếng Việt. Ví dụ: 'Tôi đã đọc xong cuốn sách' vs. 'Ich habe das Buch gelesen' (habe...gelesen bao quanh tân ngữ). Quy tắc TeKaMoLo cũng khác: tiếng Việt thường đặt địa điểm trước thời gian, tiếng Đức ngược lại.",
    exercises: [
      {
        type: "reorder",
        question:
          "hat / er / gestern / wegen des Regens / mit dem Taxi / zur Arbeit / gefahren",
        questionVi: "Sắp xếp: Hôm qua anh ấy vì mưa đi taxi đến chỗ làm.",
        answer:
          "Er hat gestern wegen des Regens mit dem Taxi zur Arbeit gefahren.",
        explanation:
          "TeKaMoLo: gestern (T) – wegen des Regens (K) – mit dem Taxi (M) – zur Arbeit (L). 'Hat...gefahren' = khung câu.",
      },
      {
        type: "multipleChoice",
        question:
          "Welche Wortstellung ist korrekt?",
        questionVi: "Trật tự từ nào đúng?",
        options: [
          "Sie ist gestern aus Langeweile allein ins Kino gegangen.",
          "Sie ist allein gestern ins Kino aus Langeweile gegangen.",
          "Sie ist ins Kino gestern allein aus Langeweile gegangen.",
          "Sie ist aus Langeweile gestern allein ins Kino gegangen.",
        ],
        answer: "Sie ist gestern aus Langeweile allein ins Kino gegangen.",
        explanation:
          "TeKaMoLo: gestern (T) – aus Langeweile (K) – allein (M) – ins Kino (L).",
      },
      {
        type: "fillBlank",
        question:
          "Ich weiß, _____ er, _____ letzte Woche aus Vietnam zurückgekommen ist, heute wieder abreist.",
        questionVi: "Tôi biết rằng anh ấy, người tuần trước trở về từ Việt Nam, hôm nay lại đi.",
        answer: "dass, der",
        explanation:
          "'Dass' mở mệnh đề phụ chính, 'der' mở mệnh đề quan hệ chèn (Relativsatz).",
      },
      {
        type: "errorCorrection",
        question:
          "Finde den Fehler: 'Er hat viel gelernt mehr als seine Mitschüler.'",
        questionVi: "Tìm lỗi sai.",
        answer: "Er hat viel mehr gelernt als seine Mitschüler.",
        explanation:
          "'Viel mehr' đứng trước Partizip II 'gelernt'. 'Als seine Mitschüler' là Ausklammerung (tách khung).",
      },
      {
        type: "transform",
        question:
          "Verbinde zu einem komplexen Satz: 'Ich glaube, dass er kommt.' + 'Er hat es versprochen.'",
        questionVi: "Nối thành câu phức tạp.",
        answer:
          "Ich glaube, dass er kommt, weil er es versprochen hat.",
        explanation:
          "Mệnh đề phụ lồng ghép: dass + mệnh đề chính, weil + mệnh đề phụ. Động từ chia ở cuối mỗi mệnh đề phụ.",
      },
    ],
  },

  // ============================================================
  // TOPIC 10: Nominalisierung & Verbalisierung (Kapitel 10)
  // ============================================================
  {
    id: "b2-gram-10",
    title: "Nominalisierung & Verbalisierung (fortgeschritten)",
    titleVi: "Danh từ hóa & Động từ hóa (nâng cao)",
    chapter: 10,
    order: 10,
    level: "B2",
    explanation:
      "Nominalisierung verwandelt Verben und Adjektive in Nomen, Verbalisierung macht das Gegenteil. Nominalisierung ist typisch für formelle Sprache, Fachsprache und Schriftsprache. Auf B2-Niveau werden komplexe Umformungen mit Präpositionen und Nebensätzen geübt.\n\nDanh từ hóa biến động từ và tính từ thành danh từ, động từ hóa làm ngược lại. Danh từ hóa đặc trưng cho ngôn ngữ trang trọng, chuyên ngành và văn viết. Ở B2, luyện chuyển đổi phức tạp với giới từ và mệnh đề phụ.",
    rules: [
      {
        rule: "Verb → Nomen: Infinitiv als Nomen (immer Neutrum): das Lernen, das Arbeiten. Oder mit Suffixen: -ung, -tion, -heit, -keit, -nis.",
        ruleVi:
          "Động từ → Danh từ: Infinitiv làm danh từ (luôn trung tính): das Lernen, das Arbeiten. Hoặc với hậu tố: -ung, -tion, -heit, -keit, -nis.",
        examples: [
          {
            de: "Wir müssen die Umwelt schützen. → Der Schutz der Umwelt ist wichtig.",
            vi: "Chúng ta phải bảo vệ môi trường. → Việc bảo vệ môi trường rất quan trọng.",
          },
          {
            de: "Er hat sich verbessert. → Die Verbesserung ist deutlich.",
            vi: "Anh ấy đã cải thiện. → Sự cải thiện rõ rệt.",
          },
          {
            de: "Sie entschied sich schnell. → Ihre schnelle Entscheidung überraschte alle.",
            vi: "Cô ấy quyết định nhanh. → Quyết định nhanh của cô ấy làm mọi người ngạc nhiên.",
          },
        ],
      },
      {
        rule: "Nebensatz → Nominalisierung mit Präposition: weil → wegen + Gen, obwohl → trotz + Gen, wenn → bei + Dat, damit → zu + Dat.",
        ruleVi:
          "Mệnh đề phụ → Danh từ hóa với giới từ: weil → wegen + Gen, obwohl → trotz + Gen, wenn → bei + Dat, damit → zu + Dat.",
        examples: [
          {
            de: "Weil es stark regnete, blieben wir zu Hause. → Wegen des starken Regens blieben wir zu Hause.",
            vi: "Vì mưa to, chúng tôi ở nhà. → Vì cơn mưa to, chúng tôi ở nhà.",
          },
          {
            de: "Obwohl er krank war, ging er arbeiten. → Trotz seiner Krankheit ging er arbeiten.",
            vi: "Mặc dù ốm, anh ấy đi làm. → Bất chấp bệnh, anh ấy đi làm.",
          },
          {
            de: "Damit die Umwelt geschützt wird, ... → Zum Schutz der Umwelt ...",
            vi: "Để bảo vệ môi trường... → Vì sự bảo vệ môi trường...",
          },
        ],
      },
      {
        rule: "Verbalisierung: Nomen + Präposition → Nebensatz. Nominale Ausdrücke in verbale umwandeln.",
        ruleVi:
          "Động từ hóa: Danh từ + Giới từ → Mệnh đề phụ. Chuyển biểu thức danh từ sang biểu thức động từ.",
        examples: [
          {
            de: "Trotz des schlechten Wetters ... → Obwohl das Wetter schlecht war, ...",
            vi: "Bất chấp thời tiết xấu... → Mặc dù thời tiết xấu...",
          },
          {
            de: "Bei der Ankunft des Zuges ... → Als der Zug ankam, ...",
            vi: "Khi tàu đến... → Khi tàu đến...",
          },
          {
            de: "Zur Verbesserung der Situation ... → Um die Situation zu verbessern, ...",
            vi: "Để cải thiện tình hình... → Để cải thiện tình hình...",
          },
        ],
      },
      {
        rule: "Achtung bei Genitiv-Konstruktionen: Der Nominalisierung folgt oft Genitiv oder ein Adjektiv.",
        ruleVi:
          "Chú ý cấu trúc Genitiv: Sau danh từ hóa thường là Genitiv hoặc tính từ.",
        examples: [
          {
            de: "Die Entwicklung der Technologie schreitet voran.",
            vi: "Sự phát triển của công nghệ đang tiến bộ.",
          },
          {
            de: "Die zunehmende Globalisierung verändert die Wirtschaft.",
            vi: "Sự toàn cầu hóa ngày càng tăng đang thay đổi nền kinh tế.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Wegen er krank war, blieb er zu Hause.",
        correct: "Wegen seiner Krankheit blieb er zu Hause. ODER Weil er krank war, blieb er zu Hause.",
        explanation:
          "'Wegen' ist eine Präposition und braucht ein Nomen (+ Genitiv), keinen Nebensatz. / 'Wegen' là giới từ, cần danh từ (+ Genitiv), không phải mệnh đề phụ.",
      },
      {
        wrong: "Die Verbesserung von die Situation...",
        correct: "Die Verbesserung der Situation...",
        explanation:
          "Nach Nominalisierung steht Genitiv: 'der Situation' (nicht 'von die Situation'). / Sau danh từ hóa dùng Genitiv: 'der Situation'.",
      },
      {
        wrong: "Der Schutz für die Umwelt...",
        correct: "Der Schutz der Umwelt...",
        explanation:
          "In formeller Sprache steht Genitiv (nicht 'für + Akk'): 'der Umwelt'. / Trong văn trang trọng dùng Genitiv: 'der Umwelt'.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng có danh từ hóa bằng cách thêm 'sự', 'việc', 'cách' trước động từ: 'sự phát triển' (die Entwicklung), 'việc học' (das Lernen). Tuy nhiên, tiếng Đức phức tạp hơn vì: 1) Phải biết hậu tố đúng (-ung, -keit, -heit, -nis, -tion), 2) Phải dùng Genitiv sau danh từ hóa, 3) Giới từ phải thay đổi khi chuyển từ mệnh đề phụ sang cụm danh từ. Ví dụ: 'weil es regnet' → 'wegen des Regens' – giới từ và cách thay đổi hoàn toàn.",
    exercises: [
      {
        type: "transform",
        question:
          "Nominalisiere: 'Weil die Preise gestiegen sind, kaufen die Leute weniger.'",
        questionVi: "Chuyển sang dạng danh từ hóa.",
        answer:
          "Wegen des Preisanstiegs kaufen die Leute weniger.",
        explanation:
          "'Weil' → 'wegen + Genitiv'. 'Die Preise sind gestiegen' → 'des Preisanstiegs'.",
      },
      {
        type: "transform",
        question:
          "Verbalisiere: 'Trotz seiner langen Erfahrung bekam er die Stelle nicht.'",
        questionVi: "Chuyển sang dạng động từ hóa (mệnh đề phụ).",
        answer:
          "Obwohl er lange Erfahrung hatte, bekam er die Stelle nicht.",
        explanation:
          "'Trotz + Genitiv' → 'Obwohl + Nebensatz'. Tính từ 'langer' → trạng từ 'lange'.",
      },
      {
        type: "multipleChoice",
        question:
          "_____ der zunehmenden Digitalisierung verändert sich die Arbeitswelt.",
        questionVi: "Do sự số hóa ngày càng tăng, thế giới lao động thay đổi.",
        options: ["Wegen", "Trotz", "Bei", "Zur"],
        answer: "Wegen",
        explanation:
          "'Wegen + Genitiv' = vì, do. Diễn tả nguyên nhân (thay cho 'weil').",
      },
      {
        type: "fillBlank",
        question:
          "_____ der Ankunft des Ministers begannen die Verhandlungen. (= Als der Minister ankam, ...)",
        questionVi: "Khi bộ trưởng đến, cuộc đàm phán bắt đầu.",
        answer: "Bei",
        explanation:
          "'Bei + Dat' thay cho 'als/wenn + Nebensatz' (khi). 'Bei der Ankunft' = khi đến.",
      },
      {
        type: "errorCorrection",
        question:
          "Finde den Fehler: 'Wegen dem schlechten Wetter blieben wir drinnen.'",
        questionVi: "Tìm lỗi sai.",
        answer:
          "Wegen des schlechten Wetters blieben wir drinnen.",
        explanation:
          "'Wegen' + Genitiv (formell): 'des schlechten Wetters', nicht Dativ 'dem schlechten Wetter'.",
      },
    ],
  },

  // ============================================================
  // TOPIC 11: Modalpartikeln (Kapitel 11)
  // ============================================================
  {
    id: "b2-gram-11",
    title: "Modalpartikeln (doch, ja, mal, halt, eben, schon)",
    titleVi: "Tiểu từ tình thái (doch, ja, mal, halt, eben, schon)",
    chapter: 11,
    order: 11,
    level: "B2",
    explanation:
      "Modalpartikeln sind kleine Wörter, die die Einstellung des Sprechers ausdrücken. Sie verändern nicht die Bedeutung des Satzes, sondern den Ton und die Nuance. Sie sind typisch für gesprochene Sprache und machen das Deutsch natürlicher.\n\nTiểu từ tình thái là những từ nhỏ thể hiện thái độ của người nói. Chúng không thay đổi nghĩa câu mà thay đổi giọng điệu và sắc thái. Chúng đặc trưng cho tiếng Đức nói và giúp nghe tự nhiên hơn.",
    rules: [
      {
        rule: "'Doch': Widerspruch, Ermutigung, Bekräftigung. Betont eine Gegenposition oder ermutigt.",
        ruleVi:
          "'Doch': phản bác, khuyến khích, nhấn mạnh. Nhấn mạnh quan điểm ngược hoặc khuyến khích.",
        examples: [
          {
            de: "Komm doch mit! (Ermutigung)",
            vi: "Đi cùng đi! (khuyến khích)",
          },
          {
            de: "Das ist doch nicht wahr! (Widerspruch)",
            vi: "Đó không đúng mà! (phản bác)",
          },
          {
            de: "Du weißt doch, dass ich Recht habe. (Bekräftigung)",
            vi: "Bạn biết rồi mà, tôi đúng mà. (nhấn mạnh)",
          },
        ],
      },
      {
        rule: "'Ja': Bekanntes bestätigen, Erstaunen. Unterstreicht, dass etwas bekannt oder überraschend ist.",
        ruleVi:
          "'Ja': xác nhận điều đã biết, ngạc nhiên. Nhấn mạnh điều gì đó đã biết hoặc bất ngờ.",
        examples: [
          {
            de: "Das ist ja toll! (Überraschung/Freude)",
            vi: "Tuyệt thật! (ngạc nhiên/vui)",
          },
          {
            de: "Du bist ja schon da! (Überraschung)",
            vi: "Bạn đến rồi à! (ngạc nhiên)",
          },
          {
            de: "Berlin ist ja die Hauptstadt. (bekannt)",
            vi: "Berlin là thủ đô mà. (điều ai cũng biết)",
          },
        ],
      },
      {
        rule: "'Mal': Abschwächung, macht Bitten freundlicher und informeller.",
        ruleVi:
          "'Mal': làm nhẹ nhàng, làm cho yêu cầu thân thiện và thân mật hơn.",
        examples: [
          {
            de: "Kannst du mir mal helfen? (freundliche Bitte)",
            vi: "Bạn giúp mình một chút được không? (yêu cầu thân thiện)",
          },
          {
            de: "Schau mal! (Aufmerksamkeit erregen)",
            vi: "Nhìn này! (gây chú ý)",
          },
          {
            de: "Komm mal her! (informelle Aufforderung)",
            vi: "Lại đây! (yêu cầu thân mật)",
          },
        ],
      },
      {
        rule: "'Halt/eben': Resignation, Akzeptanz, 'es ist nun mal so'. Beide sind oft austauschbar.",
        ruleVi:
          "'Halt/eben': cam chịu, chấp nhận, 'đành vậy thôi'. Hai từ này thường thay thế được cho nhau.",
        examples: [
          {
            de: "Das ist halt so. / Das ist eben so. (Akzeptanz)",
            vi: "Nó là vậy thôi. (chấp nhận)",
          },
          {
            de: "Dann müssen wir halt warten. (Resignation)",
            vi: "Thì chúng ta đành phải đợi thôi. (cam chịu)",
          },
          {
            de: "Er ist eben ein Perfektionist. (Erklärung/Akzeptanz)",
            vi: "Anh ấy vốn là người cầu toàn mà. (giải thích/chấp nhận)",
          },
        ],
      },
      {
        rule: "'Schon': Zuversicht, Einschränkung, 'irgendwann wird es'. Tröstet oder relativiert.",
        ruleVi:
          "'Schon': tự tin, hạn chế, 'rồi sẽ...'. An ủi hoặc tương đối hóa.",
        examples: [
          {
            de: "Das wird schon klappen. (Zuversicht/Trost)",
            vi: "Rồi sẽ ổn thôi. (tự tin/an ủi)",
          },
          {
            de: "Das stimmt schon, aber... (Einschränkung)",
            vi: "Đúng là vậy, nhưng... (hạn chế)",
          },
          {
            de: "Wer will schon in so einer Stadt leben? (rhetorische Frage)",
            vi: "Ai mà muốn sống ở thành phố như vậy? (câu hỏi tu từ)",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Using 'doch' as 'yes' when it should be a modal particle.",
        correct: "Context determines whether 'doch' is a modal particle or means 'yes (contradicting a negative)'.",
        explanation:
          "'Doch' als Modalpartikel steht unbetont im Mittelfeld. 'Doch' als 'doch-Antwort' steht betont am Satzanfang. / 'Doch' làm tiểu từ tình thái không nhấn, đứng giữa câu. 'Doch' nghĩa 'có chứ' nhấn mạnh, đứng đầu câu.",
      },
      {
        wrong: "Overusing modal particles in formal writing.",
        correct: "Modal particles are primarily used in spoken language and informal writing.",
        explanation:
          "Modalpartikeln gehören zur gesprochenen Sprache. In formellen Texten (Bewerbungen, wissenschaftliche Arbeiten) sollte man sie vermeiden. / Tiểu từ tình thái thuộc ngôn ngữ nói. Trong văn bản trang trọng nên tránh.",
      },
      {
        wrong: "Placing the modal particle at the wrong position.",
        correct: "Modal particles usually stand in the Mittelfeld (middle field), after the verb and pronouns.",
        explanation:
          "Modalpartikeln stehen im Mittelfeld, meist nach dem Verb und den Pronomen. / Tiểu từ tình thái đứng ở Mittelfeld, thường sau động từ và đại từ.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng có nhiều tiểu từ tình thái tương tự: 'mà' (doch/ja), 'đi' (mal/doch trong mệnh lệnh), 'thôi' (halt/eben), 'à/ư/nhỉ/nhé' (cuối câu). Sự tương đồng: cả hai ngôn ngữ đều dùng tiểu từ nhỏ để thay đổi sắc thái. Sự khác biệt: tiểu từ tiếng Việt thường đứng cuối câu, còn tiểu từ tiếng Đức đứng giữa câu (Mittelfeld). Ví dụ: 'Đi cùng đi!' = 'Komm doch mit!' – 'đi' ở cuối, 'doch' ở giữa.",
    exercises: [
      {
        type: "multipleChoice",
        question:
          "Welche Modalpartikel passt? 'Das wird _____ klappen, mach dir keine Sorgen.'",
        questionVi: "Tiểu từ nào phù hợp? 'Rồi sẽ ổn thôi, đừng lo.'",
        options: ["schon", "halt", "ja", "doch"],
        answer: "schon",
        explanation:
          "'Schon' an ủi và tạo sự tự tin: 'Rồi sẽ ổn thôi' = Das wird schon klappen.",
      },
      {
        type: "fillBlank",
        question:
          "Komm _____ mit! Es wird bestimmt lustig.",
        questionVi: "Đi cùng _____ ! Chắc chắn sẽ vui lắm.",
        answer: "doch",
        explanation:
          "'Doch' trong mệnh lệnh = khuyến khích. 'Komm doch mit!' = Đi cùng đi!",
      },
      {
        type: "matching",
        question:
          "Ordne zu: 1) Du bist __ schon da! 2) Das ist __ so. 3) Kannst du mir __ helfen? 4) Das ist __ nicht wahr!",
        questionVi: "Nối tiểu từ phù hợp.",
        options: ["ja", "halt/eben", "mal", "doch"],
        answer: "1-ja, 2-halt/eben, 3-mal, 4-doch",
        explanation:
          "ja (ngạc nhiên), halt/eben (chấp nhận), mal (yêu cầu nhẹ nhàng), doch (phản bác).",
      },
      {
        type: "translate",
        question: "Nó là vậy thôi, mình không thể thay đổi được.",
        questionVi: "Dịch sang tiếng Đức (dùng Modalpartikel).",
        answer: "Das ist halt/eben so, man kann es nicht ändern.",
        explanation:
          "'Halt' hoặc 'eben' diễn tả sự chấp nhận, cam chịu. 'Đành vậy thôi'.",
      },
      {
        type: "multipleChoice",
        question:
          "Was drückt 'ja' in diesem Satz aus? 'Du bist ja ganz nass!'",
        questionVi: "'Ja' trong câu này diễn tả gì?",
        options: [
          "Überraschung",
          "Zustimmung",
          "Ermutigung",
          "Resignation",
        ],
        answer: "Überraschung",
        explanation:
          "'Ja' ở đây diễn tả sự ngạc nhiên: 'Bạn ướt hết rồi à!' Người nói bất ngờ.",
      },
    ],
  },
];
