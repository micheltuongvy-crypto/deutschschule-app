export interface GrammarTopic {
  id: string;
  title: string;
  titleVi: string;
  chapter: number;
  order: number;
  level: "A1";
  explanation: string;
  rules: { rule: string; ruleVi: string; examples: { de: string; vi: string }[] }[];
  commonMistakes: { wrong: string; correct: string; explanation: string }[];
  vietnameseComparison: string;
  exercises: { type: string; question: string; questionVi: string; options?: string[]; answer: string; explanation: string }[];
}

export const a1GrammarTopics: GrammarTopic[] = [
  // ═══════════════════════════════════════════════════════════
  // TOPIC 1: Konjugation Präsens
  // ═══════════════════════════════════════════════════════════
  {
    id: "a1-gram-01-konjugation-praesens",
    title: "Konjugation Präsens",
    titleVi: "Chia động từ thì hiện tại",
    chapter: 1,
    order: 1,
    level: "A1",
    explanation: `Trong tiếng Đức, động từ phải được chia theo chủ ngữ — đây là điểm khác biệt rất lớn so với tiếng Việt. Ở tiếng Việt, động từ không bao giờ thay đổi hình thức: "tôi ăn", "bạn ăn", "họ ăn" — động từ "ăn" luôn giữ nguyên. Nhưng trong tiếng Đức, mỗi chủ ngữ đòi hỏi một đuôi (Endung) khác nhau cho động từ.

Mỗi động từ tiếng Đức có một dạng nguyên thể (Infinitiv), thường kết thúc bằng "-en" hoặc "-n", ví dụ: "kommen" (đến), "spielen" (chơi), "wandern" (đi bộ đường dài). Để chia động từ, ta bỏ đuôi "-en"/"-n" để lấy phần gốc (Stamm), rồi thêm đuôi phù hợp với chủ ngữ. Ví dụ: "kommen" → gốc "komm" → "ich komme", "du kommst", "er kommt".

Hai động từ quan trọng nhất là "sein" (là/ở) và "haben" (có). Chúng là động từ bất quy tắc, nghĩa là chúng không theo quy tắc chia thông thường mà phải học thuộc. "sein" tương đương "to be" trong tiếng Anh và được dùng rất nhiều: "Ich bin Student" (Tôi là sinh viên), "Du bist nett" (Bạn tốt bụng). "haben" tương đương "to have": "Ich habe ein Buch" (Tôi có một cuốn sách).

Đối với động từ có gốc kết thúc bằng -t, -d, -chn, -ffn, -gn, ta thêm chữ "e" trước đuôi -st và -t để dễ phát âm. Ví dụ: "arbeiten" (làm việc) → "du arbeitest" (không phải "du arbeitst"), "er arbeitet". Đây là quy tắc phát âm quan trọng cần nhớ.

Thì hiện tại trong tiếng Đức cũng được dùng để diễn tả tương lai gần, khác với tiếng Việt phải thêm "sẽ". Ví dụ: "Ich gehe morgen ins Kino" có thể dịch là "Ngày mai tôi đi xem phim" hoặc "Ngày mai tôi sẽ đi xem phim".`,
    rules: [
      {
        rule: "Regelmäßige Verben: Stamm + Endung (-e, -st, -t, -en, -t, -en)",
        ruleVi: "Động từ có quy tắc: Gốc + đuôi (-e, -st, -t, -en, -t, -en)",
        examples: [
          { de: "ich komme", vi: "tôi đến" },
          { de: "du kommst", vi: "bạn đến" },
          { de: "er/sie/es kommt", vi: "anh ấy/cô ấy/nó đến" },
          { de: "wir kommen", vi: "chúng tôi đến" },
          { de: "ihr kommt", vi: "các bạn đến" },
          { de: "sie/Sie kommen", vi: "họ/Quý vị đến" }
        ]
      },
      {
        rule: "Das Verb 'sein' ist unregelmäßig: bin, bist, ist, sind, seid, sind",
        ruleVi: "Động từ 'sein' (là/ở) bất quy tắc: bin, bist, ist, sind, seid, sind",
        examples: [
          { de: "Ich bin müde.", vi: "Tôi mệt." },
          { de: "Du bist aus Vietnam.", vi: "Bạn đến từ Việt Nam." },
          { de: "Er ist Lehrer.", vi: "Anh ấy là giáo viên." }
        ]
      },
      {
        rule: "Das Verb 'haben' ist unregelmäßig: habe, hast, hat, haben, habt, haben",
        ruleVi: "Động từ 'haben' (có) bất quy tắc: habe, hast, hat, haben, habt, haben",
        examples: [
          { de: "Ich habe zwei Kinder.", vi: "Tôi có hai đứa con." },
          { de: "Du hast ein Auto.", vi: "Bạn có một chiếc xe hơi." },
          { de: "Sie hat keine Zeit.", vi: "Cô ấy không có thời gian." }
        ]
      },
      {
        rule: "Verben mit Stamm auf -t/-d: Extra 'e' vor -st und -t (du arbeitest, er arbeitet)",
        ruleVi: "Động từ có gốc kết thúc bằng -t/-d: Thêm 'e' trước -st và -t",
        examples: [
          { de: "du arbeitest viel", vi: "bạn làm việc nhiều" },
          { de: "er findet das gut", vi: "anh ấy thấy điều đó tốt" },
          { de: "ihr redet zu laut", vi: "các bạn nói quá to" }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: "Ich kommen aus Vietnam.",
        correct: "Ich komme aus Vietnam.",
        explanation: "Với chủ ngữ 'ich' (tôi), động từ phải có đuôi '-e'. Đây là lỗi phổ biến vì tiếng Việt không chia động từ."
      },
      {
        wrong: "Er haben ein Hund.",
        correct: "Er hat einen Hund.",
        explanation: "Với chủ ngữ 'er' (anh ấy), 'haben' phải chia thành 'hat'. Ngoài ra 'Hund' là giống đực nên Akkusativ là 'einen Hund'."
      },
      {
        wrong: "Du findst das schön.",
        correct: "Du findest das schön.",
        explanation: "Gốc 'find-' kết thúc bằng -d, nên phải thêm 'e' trước đuôi '-st' → 'findest'."
      }
    ],
    vietnameseComparison: `Trong tiếng Việt, động từ hoàn toàn không thay đổi hình thức bất kể chủ ngữ là ai: "tôi ăn", "bạn ăn", "chúng tôi ăn". Tiếng Đức thì ngược lại — mỗi ngôi (ich, du, er, wir, ihr, sie) đều yêu cầu đuôi động từ khác nhau. Đây là thử thách lớn nhất với người Việt học tiếng Đức, vì phải luôn nghĩ đến chủ ngữ trước khi nói động từ. Mẹo: Hãy luyện tập chia động từ mỗi ngày như học bảng cửu chương — lặp đi lặp lại cho đến khi thành phản xạ tự nhiên.`,
    exercises: [
      {
        type: "fill-in",
        question: "Ich ___ (kommen) aus Vietnam.",
        questionVi: "Tôi ___ (đến) từ Việt Nam.",
        answer: "komme",
        explanation: "Với 'ich', động từ 'kommen' chia thành 'komme' (gốc 'komm' + đuôi '-e')."
      },
      {
        type: "fill-in",
        question: "Er ___ (sein) 25 Jahre alt.",
        questionVi: "Anh ấy ___ (là) 25 tuổi.",
        answer: "ist",
        explanation: "'sein' chia với 'er' thành 'ist'. Đây là động từ bất quy tắc phải học thuộc."
      },
      {
        type: "multiple-choice",
        question: "Welche Form ist richtig? Du ___ sehr gut Deutsch.",
        questionVi: "Dạng nào đúng? Bạn ___ tiếng Đức rất giỏi.",
        options: ["sprichst", "sprecht", "spreche", "sprechen"],
        answer: "sprichst",
        explanation: "'sprechen' là động từ đổi nguyên âm: e→i. Với 'du': 'sprichst'."
      },
      {
        type: "fill-in",
        question: "Wir ___ (haben) drei Katzen.",
        questionVi: "Chúng tôi ___ (có) ba con mèo.",
        answer: "haben",
        explanation: "Với 'wir', 'haben' giữ nguyên dạng 'haben' (gốc 'hab' + đuôi '-en')."
      },
      {
        type: "fill-in",
        question: "Ihr ___ (arbeiten) in Berlin.",
        questionVi: "Các bạn ___ (làm việc) ở Berlin.",
        answer: "arbeitet",
        explanation: "Gốc 'arbeit-' kết thúc bằng -t nên thêm 'e' trước đuôi '-t' → 'arbeitet'."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // TOPIC 2: W-Fragen und Ja/Nein-Fragen
  // ═══════════════════════════════════════════════════════════
  {
    id: "a1-gram-02-fragen",
    title: "W-Fragen und Ja/Nein-Fragen",
    titleVi: "Câu hỏi W và câu hỏi Có/Không",
    chapter: 1,
    order: 2,
    level: "A1",
    explanation: `Tiếng Đức có hai loại câu hỏi chính: câu hỏi W (W-Fragen) và câu hỏi Có/Không (Ja/Nein-Fragen). Hiểu cách đặt câu hỏi là kỹ năng cơ bản và quan trọng nhất để giao tiếp hàng ngày.

Câu hỏi W bắt đầu bằng một từ hỏi (W-Wort) như: "wer" (ai), "was" (cái gì), "wo" (ở đâu), "woher" (từ đâu), "wohin" (đi đâu), "wann" (khi nào), "warum" (tại sao), "wie" (như thế nào), "wie viel" (bao nhiêu). Sau từ hỏi, động từ đứng ở vị trí thứ 2, rồi đến chủ ngữ. Ví dụ: "Woher kommst du?" (Bạn đến từ đâu?). Thứ tự là: W-Wort + Verb + Subjekt.

Câu hỏi Có/Không không có từ hỏi — động từ đứng ở vị trí đầu tiên, trước chủ ngữ. Ví dụ: "Kommst du aus Vietnam?" (Bạn đến từ Việt Nam phải không?). Câu trả lời có thể là "Ja" (Vâng) hoặc "Nein" (Không). Thứ tự là: Verb + Subjekt + Rest.

Một điểm quan trọng: Trong câu kể (Aussagesatz) bình thường, động từ LUÔN ở vị trí thứ 2. Đây là quy tắc vàng trong tiếng Đức gọi là "Verbzweitstellung" (vị trí thứ 2 của động từ). Ví dụ: "Ich komme aus Vietnam" — "ich" ở vị trí 1, "komme" ở vị trí 2.

Ngoài ra, "wie" có thể kết hợp với tính từ để tạo câu hỏi cụ thể hơn: "wie alt" (bao nhiêu tuổi), "wie groß" (cao bao nhiêu), "wie lange" (bao lâu), "wie oft" (bao thường xuyên). Đây là cách mở rộng vốn câu hỏi rất hiệu quả.`,
    rules: [
      {
        rule: "W-Fragen: W-Wort + Verb (Position 2) + Subjekt + Rest",
        ruleVi: "Câu hỏi W: Từ hỏi W + Động từ (vị trí 2) + Chủ ngữ + Phần còn lại",
        examples: [
          { de: "Woher kommst du?", vi: "Bạn đến từ đâu?" },
          { de: "Was machst du beruflich?", vi: "Bạn làm nghề gì?" },
          { de: "Wann beginnt der Kurs?", vi: "Khóa học bắt đầu khi nào?" }
        ]
      },
      {
        rule: "Ja/Nein-Fragen: Verb (Position 1) + Subjekt + Rest",
        ruleVi: "Câu hỏi Có/Không: Động từ (vị trí 1) + Chủ ngữ + Phần còn lại",
        examples: [
          { de: "Sprichst du Deutsch?", vi: "Bạn nói tiếng Đức không?" },
          { de: "Wohnst du in Berlin?", vi: "Bạn sống ở Berlin không?" },
          { de: "Ist das dein Buch?", vi: "Đây là sách của bạn à?" }
        ]
      },
      {
        rule: "W-Wörter: wer, was, wo, woher, wohin, wann, warum, wie, wie viel(e)",
        ruleVi: "Các từ hỏi W: ai, cái gì, ở đâu, từ đâu, đi đâu, khi nào, tại sao, thế nào, bao nhiêu",
        examples: [
          { de: "Wer ist das? — Das ist mein Bruder.", vi: "Đó là ai? — Đó là anh trai tôi." },
          { de: "Wo wohnst du? — Ich wohne in München.", vi: "Bạn sống ở đâu? — Tôi sống ở München." },
          { de: "Wie heißen Sie? — Ich heiße Anna.", vi: "Quý vị tên gì? — Tôi tên Anna." }
        ]
      },
      {
        rule: "Aussagesatz: Subjekt + Verb (Position 2) + Rest",
        ruleVi: "Câu kể: Chủ ngữ + Động từ (vị trí 2) + Phần còn lại",
        examples: [
          { de: "Ich lerne Deutsch.", vi: "Tôi học tiếng Đức." },
          { de: "Morgen gehe ich ins Kino.", vi: "Ngày mai tôi đi xem phim." },
          { de: "In Berlin wohnt mein Freund.", vi: "Ở Berlin có bạn tôi sống." }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: "Woher du kommst?",
        correct: "Woher kommst du?",
        explanation: "Trong câu hỏi W, động từ phải ở vị trí thứ 2 (ngay sau từ hỏi), chủ ngữ đứng sau động từ. Người Việt hay đặt sai vì tiếng Việt không đảo vị trí."
      },
      {
        wrong: "Du sprichst Deutsch?",
        correct: "Sprichst du Deutsch?",
        explanation: "Câu hỏi Có/Không phải bắt đầu bằng động từ. Nếu giữ nguyên thứ tự 'du sprichst', đó là câu kể chứ không phải câu hỏi (trừ khi dùng ngữ điệu lên trong khẩu ngữ)."
      },
      {
        wrong: "Wo gehst du? (khi muốn hỏi 'đi đâu')",
        correct: "Wohin gehst du?",
        explanation: "Cần phân biệt 'wo' (ở đâu — vị trí tĩnh) và 'wohin' (đi đâu — hướng di chuyển). Tương tự, 'woher' là 'từ đâu' (nguồn gốc)."
      }
    ],
    vietnameseComparison: `Tiếng Việt đặt câu hỏi rất khác tiếng Đức. Trong tiếng Việt, câu hỏi Có/Không thường chỉ thêm "không", "phải không", "à" vào cuối câu mà không thay đổi trật tự từ: "Bạn là sinh viên phải không?" Nhưng tiếng Đức bắt buộc phải đảo động từ lên đầu: "Bist du Student?" Với câu hỏi W, tiếng Việt cũng linh hoạt hơn: từ hỏi có thể ở đầu hoặc cuối câu ("Bạn ở đâu?" = "Ở đâu bạn?"). Tiếng Đức thì cứng nhắc: từ hỏi W luôn ở đầu, động từ luôn ở vị trí 2. Hãy nhớ quy tắc này: Động từ tiếng Đức rất "kỷ luật" — nó luôn đứng đúng vị trí quy định.`,
    exercises: [
      {
        type: "reorder",
        question: "Ordnen Sie: du / woher / kommst / ?",
        questionVi: "Sắp xếp lại: du / woher / kommst / ?",
        answer: "Woher kommst du?",
        explanation: "Câu hỏi W: từ hỏi 'Woher' đứng đầu, động từ 'kommst' ở vị trí 2, chủ ngữ 'du' ở vị trí 3."
      },
      {
        type: "multiple-choice",
        question: "___ wohnst du?",
        questionVi: "Bạn sống ở ___?",
        options: ["Woher", "Wo", "Wohin", "Wann"],
        answer: "Wo",
        explanation: "'Wo' hỏi về vị trí (ở đâu). 'Woher' hỏi nguồn gốc (từ đâu). 'Wohin' hỏi hướng đi (đi đâu)."
      },
      {
        type: "transform",
        question: "Du lernst Deutsch. → Ja/Nein-Frage",
        questionVi: "Chuyển thành câu hỏi Có/Không.",
        answer: "Lernst du Deutsch?",
        explanation: "Đưa động từ 'lernst' lên đầu câu, chủ ngữ 'du' ra sau."
      },
      {
        type: "fill-in",
        question: "___ alt bist du? — Ich bin 20 Jahre alt.",
        questionVi: "Bạn bao nhiêu tuổi? — Tôi 20 tuổi.",
        answer: "Wie",
        explanation: "'Wie alt' = bao nhiêu tuổi. 'Wie' kết hợp với tính từ 'alt' để hỏi về tuổi."
      },
      {
        type: "multiple-choice",
        question: "___ ist dein Name?",
        questionVi: "Tên bạn ___ gì?",
        options: ["Was", "Wie", "Wer", "Wo"],
        answer: "Wie",
        explanation: "'Wie ist dein Name?' = Tên bạn là gì? Dùng 'wie' (thế nào) chứ không phải 'was' (cái gì) khi hỏi về tên."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // TOPIC 3: Artikel — der/die/das, ein/eine
  // ═══════════════════════════════════════════════════════════
  {
    id: "a1-gram-03-artikel",
    title: "Artikel: der/die/das, ein/eine",
    titleVi: "Mạo từ: der/die/das, ein/eine",
    chapter: 2,
    order: 3,
    level: "A1",
    explanation: `Mạo từ (Artikel) là một trong những khái niệm khó nhất cho người Việt học tiếng Đức, vì tiếng Việt hoàn toàn không có mạo từ. Trong tiếng Đức, mỗi danh từ đều có một giống (Genus): giống đực (maskulin — der), giống cái (feminin — die), hoặc giống trung (neutral — das). Giống của danh từ thường không theo logic tự nhiên, ví dụ: "das Mädchen" (cô gái) lại là giống trung, không phải giống cái!

Có hai loại mạo từ: mạo từ xác định (bestimmter Artikel: der, die, das) và mạo từ không xác định (unbestimmter Artikel: ein, eine, ein). Mạo từ xác định dùng khi nói về một thứ cụ thể, đã biết: "der Mann dort" (người đàn ông kia). Mạo từ không xác định dùng khi nói lần đầu hoặc không cụ thể: "ein Mann" (một người đàn ông). Điều này tương tự "the" và "a/an" trong tiếng Anh.

Số nhiều (Plural) luôn dùng mạo từ xác định "die", bất kể giống gì ở số ít. Ví dụ: "der Tisch" → "die Tische", "das Kind" → "die Kinder". Mạo từ không xác định không có dạng số nhiều — ta bỏ mạo từ: "ein Kind" → "Kinder" (không có mạo từ).

Có một số quy tắc giúp đoán giống danh từ: Danh từ kết thúc bằng -ung, -heit, -keit, -tion, -ie, -schaft thường là giống cái (die). Danh từ kết thúc bằng -er, -ling, -ismus thường là giống đực (der). Danh từ kết thúc bằng -chen, -lein, -ment, -um thường là giống trung (das). Tuy nhiên, cách tốt nhất là luôn học danh từ cùng với mạo từ của nó.

Phủ định của mạo từ không xác định là "kein/keine": "Ich habe ein Auto" → "Ich habe kein Auto" (Tôi không có xe hơi). "kein" chia giống như "ein".`,
    rules: [
      {
        rule: "Bestimmter Artikel: der (maskulin), die (feminin), das (neutral), die (Plural)",
        ruleVi: "Mạo từ xác định: der (giống đực), die (giống cái), das (giống trung), die (số nhiều)",
        examples: [
          { de: "der Mann", vi: "người đàn ông (giống đực)" },
          { de: "die Frau", vi: "người phụ nữ (giống cái)" },
          { de: "das Kind", vi: "đứa trẻ (giống trung)" },
          { de: "die Kinder", vi: "những đứa trẻ (số nhiều)" }
        ]
      },
      {
        rule: "Unbestimmter Artikel: ein (maskulin/neutral), eine (feminin), kein Plural",
        ruleVi: "Mạo từ không xác định: ein (giống đực/trung), eine (giống cái), không có dạng số nhiều",
        examples: [
          { de: "ein Tisch (der Tisch)", vi: "một cái bàn" },
          { de: "eine Lampe (die Lampe)", vi: "một cái đèn" },
          { de: "ein Buch (das Buch)", vi: "một cuốn sách" }
        ]
      },
      {
        rule: "Endungen helfen beim Genus: -ung/-heit/-keit → die, -er/-ling → der, -chen/-lein → das",
        ruleVi: "Đuôi danh từ giúp đoán giống: -ung/-heit/-keit → die, -er/-ling → der, -chen/-lein → das",
        examples: [
          { de: "die Wohnung, die Freiheit, die Möglichkeit", vi: "căn hộ, tự do, khả năng (đều giống cái)" },
          { de: "der Lehrer, der Frühling", vi: "giáo viên, mùa xuân (đều giống đực)" },
          { de: "das Mädchen, das Brötchen", vi: "cô gái, bánh mì nhỏ (đều giống trung)" }
        ]
      },
      {
        rule: "Negation mit 'kein/keine': wie ein/eine, aber negativ",
        ruleVi: "Phủ định với 'kein/keine': giống ein/eine nhưng mang nghĩa phủ định",
        examples: [
          { de: "Das ist kein Hund. Das ist eine Katze.", vi: "Đó không phải là con chó. Đó là con mèo." },
          { de: "Ich habe keine Zeit.", vi: "Tôi không có thời gian." },
          { de: "Hier gibt es keine Probleme.", vi: "Ở đây không có vấn đề gì." }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: "Ich habe ein Katze.",
        correct: "Ich habe eine Katze.",
        explanation: "'Katze' là giống cái (die Katze), nên mạo từ không xác định phải là 'eine', không phải 'ein'. Luôn học danh từ cùng mạo từ: die Katze."
      },
      {
        wrong: "Das Mädchen ist schön. Sie ist nett.",
        correct: "Das Mädchen ist schön. Es ist nett.",
        explanation: "'Mädchen' là giống trung (das), nên đại từ thay thế phải là 'es', không phải 'sie'. Dù 'Mädchen' nghĩa là cô gái, ngữ pháp vẫn theo giống trung."
      },
      {
        wrong: "Ich habe nicht Auto.",
        correct: "Ich habe kein Auto.",
        explanation: "Để phủ định danh từ có mạo từ không xác định, dùng 'kein/keine' chứ không dùng 'nicht'. 'nicht' dùng để phủ định động từ hoặc tính từ."
      }
    ],
    vietnameseComparison: `Tiếng Việt hoàn toàn không có khái niệm mạo từ hay giống của danh từ. Khi nói "cái bàn", "con mèo", "cuốn sách", các loại từ "cái", "con", "cuốn" là phân loại từ (classifier) dựa trên đặc điểm vật lý — khác hẳn với giống ngữ pháp trong tiếng Đức. Giống ngữ pháp tiếng Đức mang tính quy ước, không phải logic. Vì vậy, không có cách nào khác ngoài học thuộc giống của từng danh từ. Mẹo: Luôn ghi danh từ kèm mạo từ trong sổ tay, ví dụ ghi "der Tisch" chứ không chỉ ghi "Tisch". Dùng màu sắc để phân biệt: xanh cho der, đỏ cho die, xanh lá cho das.`,
    exercises: [
      {
        type: "multiple-choice",
        question: "___ Buch ist interessant.",
        questionVi: "Cuốn sách ___ thú vị.",
        options: ["Der", "Die", "Das", "Ein"],
        answer: "Das",
        explanation: "'Buch' là giống trung: das Buch."
      },
      {
        type: "fill-in",
        question: "Ich kaufe ___ (eine/ein) Tasche.",
        questionVi: "Tôi mua ___ cái túi.",
        answer: "eine",
        explanation: "'Tasche' là giống cái (die Tasche), nên mạo từ không xác định là 'eine'."
      },
      {
        type: "multiple-choice",
        question: "Ist das ___ Hund? — Nein, das ist ___ Katze.",
        questionVi: "Đó có phải ___ con chó không? — Không, đó là ___ con mèo.",
        options: ["ein...eine", "eine...ein", "ein...ein", "eine...eine"],
        answer: "ein...eine",
        explanation: "'Hund' là giống đực (der Hund) → ein. 'Katze' là giống cái (die Katze) → eine."
      },
      {
        type: "fill-in",
        question: "Ich habe ___ (kein/keine) Geschwister.",
        questionVi: "Tôi không có anh chị em.",
        answer: "keine",
        explanation: "'Geschwister' (anh chị em) ở dạng số nhiều, nên dùng 'keine'."
      },
      {
        type: "multiple-choice",
        question: "___ Universität ist groß.",
        questionVi: "Trường đại học ___ lớn.",
        options: ["Der", "Die", "Das", "Ein"],
        answer: "Die",
        explanation: "'Universität' kết thúc bằng '-tät', là đuôi giống cái → die Universität."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // TOPIC 4: Possessivartikel
  // ═══════════════════════════════════════════════════════════
  {
    id: "a1-gram-04-possessivartikel",
    title: "Possessivartikel",
    titleVi: "Mạo từ sở hữu",
    chapter: 2,
    order: 4,
    level: "A1",
    explanation: `Mạo từ sở hữu (Possessivartikel) trong tiếng Đức cho biết ai sở hữu một vật. Chúng tương đương với "của tôi", "của bạn", "của anh ấy"... trong tiếng Việt. Các mạo từ sở hữu là: mein (của tôi), dein (của bạn), sein (của anh ấy), ihr (của cô ấy), sein (của nó), unser (của chúng tôi), euer (của các bạn), ihr (của họ), Ihr (của Quý vị).

Điểm phức tạp nhất: mạo từ sở hữu phải thay đổi đuôi theo giống và số của danh từ mà nó đi kèm, KHÔNG phải theo giới tính của người sở hữu. Ví dụ: "sein Bruder" (anh trai của anh ấy) — dùng "sein" vì người sở hữu là nam, nhưng không có đuôi vì "Bruder" là giống đực. "seine Schwester" (chị gái của anh ấy) — vẫn dùng "sein" nhưng thêm đuôi "-e" vì "Schwester" là giống cái.

Quy tắc thêm đuôi: Mạo từ sở hữu chia giống như "ein/eine". Giống đực và giống trung: không thêm đuôi (mein Vater, mein Kind). Giống cái và số nhiều: thêm "-e" (meine Mutter, meine Kinder).

Lưu ý đặc biệt với "euer": khi thêm đuôi "-e", chữ "e" ở giữa bị mất → "eure" (không phải "euere"). Ví dụ: "euer Haus" nhưng "eure Wohnung".

Dễ nhầm lẫn nhất là "ihr" vì nó có ba nghĩa: "ihr" (của cô ấy), "ihr" (của họ), và "Ihr" (của Quý vị — viết hoa). Cần dựa vào ngữ cảnh để hiểu đúng.`,
    rules: [
      {
        rule: "Possessivartikel: mein, dein, sein, ihr, sein, unser, euer, ihr/Ihr",
        ruleVi: "Mạo từ sở hữu: của tôi, của bạn, của anh ấy, của cô ấy, của nó, của chúng tôi, của các bạn, của họ/của Quý vị",
        examples: [
          { de: "Das ist mein Buch.", vi: "Đó là sách của tôi." },
          { de: "Wo ist dein Schlüssel?", vi: "Chìa khóa của bạn ở đâu?" },
          { de: "Das ist unser Haus.", vi: "Đó là nhà của chúng tôi." }
        ]
      },
      {
        rule: "Endung wie ein/eine: maskulin/neutral = keine Endung, feminin/Plural = -e",
        ruleVi: "Đuôi giống ein/eine: giống đực/trung = không đuôi, giống cái/số nhiều = -e",
        examples: [
          { de: "mein Vater (der Vater)", vi: "bố của tôi (giống đực → không đuôi)" },
          { de: "meine Mutter (die Mutter)", vi: "mẹ của tôi (giống cái → thêm -e)" },
          { de: "mein Kind (das Kind)", vi: "con của tôi (giống trung → không đuôi)" },
          { de: "meine Kinder (Plural)", vi: "các con của tôi (số nhiều → thêm -e)" }
        ]
      },
      {
        rule: "'sein' für er/es, 'ihr' für sie (Singular), 'ihr' für sie (Plural)",
        ruleVi: "'sein' cho anh ấy/nó, 'ihr' cho cô ấy, 'ihr' cho họ",
        examples: [
          { de: "Er liebt seine Frau.", vi: "Anh ấy yêu vợ (của anh ấy)." },
          { de: "Sie liebt ihren Mann.", vi: "Cô ấy yêu chồng (của cô ấy)." },
          { de: "Die Kinder lieben ihre Eltern.", vi: "Bọn trẻ yêu bố mẹ (của chúng)." }
        ]
      },
      {
        rule: "Sonderform 'euer': euer (m/n), eure (f/Pl) — das 'e' in der Mitte fällt weg",
        ruleVi: "Dạng đặc biệt 'euer': euer (đực/trung), eure (cái/số nhiều) — mất chữ 'e' ở giữa",
        examples: [
          { de: "Wo ist euer Auto?", vi: "Xe hơi của các bạn ở đâu?" },
          { de: "Eure Wohnung ist schön.", vi: "Căn hộ của các bạn đẹp." },
          { de: "Euer Kind ist süß.", vi: "Con của các bạn dễ thương." }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: "Sie liebt sein Mann. (cô ấy yêu chồng cô ấy)",
        correct: "Sie liebt ihren Mann.",
        explanation: "Người sở hữu là 'sie' (cô ấy) nên dùng 'ihr', không phải 'sein'. Thêm nữa, 'Mann' ở Akkusativ giống đực nên thêm đuôi '-en' → 'ihren Mann'."
      },
      {
        wrong: "Das ist mein Schwester.",
        correct: "Das ist meine Schwester.",
        explanation: "'Schwester' là giống cái (die Schwester), nên mạo từ sở hữu phải thêm đuôi '-e' → 'meine Schwester'."
      },
      {
        wrong: "Das ist euere Lehrerin.",
        correct: "Das ist eure Lehrerin.",
        explanation: "Khi 'euer' thêm đuôi '-e', chữ 'e' ở giữa bị mất: euer → eure (không phải euere)."
      }
    ],
    vietnameseComparison: `Tiếng Việt dùng "của + đại từ" để diễn tả sở hữu: "sách của tôi", "nhà của bạn". Cấu trúc đơn giản và không thay đổi theo đặc điểm của vật được sở hữu. Tiếng Đức phức tạp hơn nhiều: mạo từ sở hữu phải thay đổi theo (1) người sở hữu và (2) giống/số của danh từ đi kèm. Ví dụ, "của anh ấy" trong tiếng Việt luôn là "của anh ấy", nhưng tiếng Đức có thể là "sein" (+ danh từ đực/trung) hoặc "seine" (+ danh từ cái/số nhiều). Ngoài ra, tiếng Việt đôi khi bỏ "của": "bố tôi" = "bố của tôi". Tiếng Đức KHÔNG BAO GIỜ bỏ mạo từ sở hữu.`,
    exercises: [
      {
        type: "fill-in",
        question: "Das ist ___ (ich) Handy.",
        questionVi: "Đó là điện thoại của tôi.",
        answer: "mein",
        explanation: "'Handy' là giống trung (das Handy), nên 'mein' không thêm đuôi."
      },
      {
        type: "fill-in",
        question: "Er besucht ___ (er) Großmutter.",
        questionVi: "Anh ấy thăm bà (của anh ấy).",
        answer: "seine",
        explanation: "Người sở hữu là 'er' → 'sein'. 'Großmutter' là giống cái → thêm '-e' → 'seine'."
      },
      {
        type: "multiple-choice",
        question: "___ Kinder spielen im Garten. (wir)",
        questionVi: "Các con ___ chơi trong vườn.",
        options: ["Unser", "Unsere", "Unseren", "Unserem"],
        answer: "Unsere",
        explanation: "'Kinder' là số nhiều → 'unser' thêm đuôi '-e' → 'Unsere'."
      },
      {
        type: "fill-in",
        question: "Frau Müller, ist das ___ (Sie) Tasche?",
        questionVi: "Bà Müller, đó có phải túi của bà không?",
        answer: "Ihre",
        explanation: "Dạng lịch sự 'Sie' → 'Ihr'. 'Tasche' là giống cái → thêm '-e' → 'Ihre'."
      },
      {
        type: "multiple-choice",
        question: "Anna liebt ___ Katze.",
        questionVi: "Anna yêu con mèo của cô ấy.",
        options: ["sein", "seine", "ihr", "ihre"],
        answer: "ihre",
        explanation: "Anna là nữ (sie) → 'ihr'. 'Katze' là giống cái → thêm '-e' → 'ihre'."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // TOPIC 5: Akkusativ
  // ═══════════════════════════════════════════════════════════
  {
    id: "a1-gram-05-akkusativ",
    title: "Akkusativ",
    titleVi: "Cách đối cách (Akkusativ)",
    chapter: 3,
    order: 5,
    level: "A1",
    explanation: `Akkusativ (cách 4 hay cách đối cách) là một trong bốn cách (Kasus) trong tiếng Đức. Nó được dùng cho tân ngữ trực tiếp — tức là đối tượng chịu tác động trực tiếp của hành động. Ví dụ: "Ich kaufe einen Tisch" — "einen Tisch" là tân ngữ trực tiếp (cái bàn là thứ được mua).

Tin vui: Chỉ có mạo từ giống đực thay đổi ở Akkusativ! "der" → "den", "ein" → "einen", "kein" → "keinen", "mein" → "meinen". Giống cái, giống trung và số nhiều giữ nguyên như Nominativ. Đây là quy tắc đơn giản nhất trong hệ thống cách của tiếng Đức.

Nhiều động từ quan trọng đi với Akkusativ: "haben" (có), "kaufen" (mua), "brauchen" (cần), "suchen" (tìm), "finden" (tìm thấy), "sehen" (thấy), "hören" (nghe), "lesen" (đọc), "essen" (ăn), "trinken" (uống), "nehmen" (lấy), "möchten" (muốn). Hầu hết các động từ thường dùng đều đi với Akkusativ.

Phủ định danh từ ở Akkusativ dùng "keinen" (giống đực), "keine" (giống cái/số nhiều), "kein" (giống trung). Ví dụ: "Ich habe keinen Bruder" (Tôi không có anh trai), "Ich habe keine Schwester" (Tôi không có chị gái), "Ich habe kein Auto" (Tôi không có xe hơi).

Câu hỏi cho Akkusativ: "wen?" (ai — cho người) và "was?" (cái gì — cho vật). "Wen siehst du?" — "Ich sehe den Lehrer." "Was trinkst du?" — "Ich trinke einen Kaffee."`,
    rules: [
      {
        rule: "Nur maskulin ändert sich: der → den, ein → einen, kein → keinen",
        ruleVi: "Chỉ giống đực thay đổi: der → den, ein → einen, kein → keinen",
        examples: [
          { de: "Ich sehe den Mann. (der Mann)", vi: "Tôi thấy người đàn ông." },
          { de: "Ich kaufe einen Computer. (ein Computer)", vi: "Tôi mua một chiếc máy tính." },
          { de: "Ich habe keinen Hund. (kein Hund)", vi: "Tôi không có con chó." }
        ]
      },
      {
        rule: "Feminin, neutral und Plural bleiben gleich wie im Nominativ",
        ruleVi: "Giống cái, giống trung và số nhiều giữ nguyên như Nominativ",
        examples: [
          { de: "Ich trinke die Milch. (die Milch)", vi: "Tôi uống sữa." },
          { de: "Ich lese das Buch. (das Buch)", vi: "Tôi đọc cuốn sách." },
          { de: "Ich sehe die Kinder. (die Kinder)", vi: "Tôi thấy bọn trẻ." }
        ]
      },
      {
        rule: "Verben mit Akkusativ: haben, kaufen, brauchen, suchen, sehen, essen, trinken, lesen, nehmen",
        ruleVi: "Động từ đi với Akkusativ: có, mua, cần, tìm, thấy, ăn, uống, đọc, lấy",
        examples: [
          { de: "Er braucht einen neuen Job.", vi: "Anh ấy cần một công việc mới." },
          { de: "Wir essen einen Apfel.", vi: "Chúng tôi ăn một quả táo." },
          { de: "Sie sucht ihre Brille.", vi: "Cô ấy tìm kính (của cô ấy)." }
        ]
      },
      {
        rule: "Fragen: Wen? (Personen), Was? (Sachen)",
        ruleVi: "Câu hỏi: Wen? (người), Was? (vật)",
        examples: [
          { de: "Wen liebst du? — Ich liebe meinen Mann.", vi: "Bạn yêu ai? — Tôi yêu chồng tôi." },
          { de: "Was trinkst du? — Ich trinke einen Tee.", vi: "Bạn uống gì? — Tôi uống trà." },
          { de: "Wen rufst du an? — Ich rufe meinen Freund an.", vi: "Bạn gọi cho ai? — Tôi gọi cho bạn tôi." }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: "Ich sehe der Lehrer.",
        correct: "Ich sehe den Lehrer.",
        explanation: "'Lehrer' là giống đực và đóng vai trò tân ngữ trực tiếp (Akkusativ), nên 'der' phải đổi thành 'den'."
      },
      {
        wrong: "Sie kauft ein Tasche.",
        correct: "Sie kauft eine Tasche.",
        explanation: "'Tasche' là giống cái (die Tasche). Ở Akkusativ giống cái giữ nguyên 'eine'. Lỗi ở đây là dùng sai giống, không phải sai cách."
      },
      {
        wrong: "Ich habe nicht Bruder.",
        correct: "Ich habe keinen Bruder.",
        explanation: "Phủ định danh từ dùng 'kein', không dùng 'nicht'. 'Bruder' giống đực ở Akkusativ → 'keinen Bruder'."
      }
    ],
    vietnameseComparison: `Tiếng Việt không có hệ thống cách (Kasus). Vai trò của danh từ trong câu được xác định bởi vị trí: chủ ngữ đứng trước động từ, tân ngữ đứng sau. Ví dụ: "Tôi thấy anh ấy" — "tôi" là chủ ngữ vì đứng trước "thấy", "anh ấy" là tân ngữ vì đứng sau. Danh từ và đại từ không thay đổi hình thức. Trong tiếng Đức, mạo từ phải thay đổi để cho biết danh từ là chủ ngữ (Nominativ) hay tân ngữ (Akkusativ). May mắn là chỉ giống đực thay đổi (der→den, ein→einen), nên quy tắc không quá phức tạp. Hãy nhớ: khi thấy động từ như "kaufen", "sehen", "haben", danh từ sau nó luôn ở Akkusativ.`,
    exercises: [
      {
        type: "fill-in",
        question: "Ich kaufe ___ (der) Computer.",
        questionVi: "Tôi mua ___ máy tính.",
        answer: "den",
        explanation: "'Computer' là giống đực (der Computer). Ở Akkusativ: der → den."
      },
      {
        type: "multiple-choice",
        question: "Er trinkt ___ Kaffee.",
        questionVi: "Anh ấy uống ___ cà phê.",
        options: ["ein", "einen", "eine", "einem"],
        answer: "einen",
        explanation: "'Kaffee' là giống đực (der Kaffee). Mạo từ không xác định giống đực ở Akkusativ: ein → einen."
      },
      {
        type: "fill-in",
        question: "Hast du ___ (kein) Geschwister?",
        questionVi: "Bạn không có anh chị em à?",
        answer: "keine",
        explanation: "'Geschwister' là số nhiều. Phủ định số nhiều ở Akkusativ: keine."
      },
      {
        type: "multiple-choice",
        question: "Siehst du ___ Frau dort?",
        questionVi: "Bạn có thấy ___ người phụ nữ ở kia không?",
        options: ["der", "den", "die", "das"],
        answer: "die",
        explanation: "'Frau' là giống cái (die Frau). Ở Akkusativ giống cái giữ nguyên: die."
      },
      {
        type: "fill-in",
        question: "Ich liebe ___ (mein) Mutter.",
        questionVi: "Tôi yêu mẹ tôi.",
        answer: "meine",
        explanation: "'Mutter' là giống cái. Mạo từ sở hữu giống cái ở Akkusativ: meine (giữ nguyên như Nominativ)."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // TOPIC 6: Trennbare Verben
  // ═══════════════════════════════════════════════════════════
  {
    id: "a1-gram-06-trennbare-verben",
    title: "Trennbare Verben",
    titleVi: "Động từ tách được",
    chapter: 5,
    order: 6,
    level: "A1",
    explanation: `Động từ tách được (trennbare Verben) là một đặc trưng thú vị của tiếng Đức mà không có trong tiếng Việt hay tiếng Anh. Đây là những động từ có tiền tố (Präfix) có thể tách ra khỏi gốc động từ và đứng ở cuối câu khi chia ở thì hiện tại. Ví dụ: "aufstehen" (thức dậy) → "Ich stehe um 7 Uhr auf." — tiền tố "auf" tách ra và nhảy xuống cuối câu.

Cấu trúc này gọi là "Satzklammer" (khung câu): động từ chia đứng ở vị trí 2, tiền tố tách ra đứng ở cuối câu, tạo thành một "khung" bao quanh các thành phần khác. Ví dụ: "Ich | rufe | dich morgen | an." — "rufe" ở vị trí 2, "an" ở cuối.

Các tiền tố tách được phổ biến: "an-" (anrufen — gọi điện), "auf-" (aufstehen — thức dậy, aufmachen — mở), "aus-" (ausgehen — đi ra ngoài), "ein-" (einkaufen — mua sắm, einladen — mời), "mit-" (mitkommen — đi cùng, mitbringen — mang theo), "zu-" (zumachen — đóng), "ab-" (abfahren — khởi hành), "um-" (umsteigen — đổi tàu), "vor-" (vorstellen — giới thiệu), "zurück-" (zurückkommen — quay lại).

Làm sao biết động từ có tách được hay không? Tiền tố tách được thường là giới từ hoặc trạng từ có thể đứng độc lập và được nhấn trọng âm: "ANrufen", "AUFstehen". Tiền tố không tách được (be-, er-, ver-, ent-, ge-, zer-, miss-, emp-) thường không nhấn trọng âm: "beKOMMen", "verSTEhen".

Lưu ý: Trong câu phụ (Nebensatz) với từ nối, động từ tách được KHÔNG tách ra mà viết liền ở cuối câu: "Ich weiß, dass er morgen ankommt." Nhưng ở trình độ A1, bạn chủ yếu chỉ cần biết dạng tách ở câu chính.`,
    rules: [
      {
        rule: "Satzklammer: Konjugiertes Verb auf Position 2, Präfix am Ende",
        ruleVi: "Khung câu: Động từ chia ở vị trí 2, tiền tố ở cuối câu",
        examples: [
          { de: "Ich stehe um 6 Uhr auf. (aufstehen)", vi: "Tôi thức dậy lúc 6 giờ." },
          { de: "Er ruft seine Mutter an. (anrufen)", vi: "Anh ấy gọi điện cho mẹ." },
          { de: "Wir kaufen im Supermarkt ein. (einkaufen)", vi: "Chúng tôi mua sắm ở siêu thị." }
        ]
      },
      {
        rule: "Häufige trennbare Präfixe: an-, auf-, aus-, ein-, mit-, zu-, ab-, um-, vor-, zurück-",
        ruleVi: "Các tiền tố tách được phổ biến: an-, auf-, aus-, ein-, mit-, zu-, ab-, um-, vor-, zurück-",
        examples: [
          { de: "Machst du bitte das Fenster auf? (aufmachen)", vi: "Bạn mở cửa sổ được không?" },
          { de: "Der Zug fährt um 8 Uhr ab. (abfahren)", vi: "Tàu khởi hành lúc 8 giờ." },
          { de: "Kommst du mit? (mitkommen)", vi: "Bạn đi cùng không?" }
        ]
      },
      {
        rule: "Trennbar = betonte Vorsilbe (ANrufen), Nicht trennbar = unbetonte Vorsilbe (verSTEhen)",
        ruleVi: "Tách được = tiền tố có trọng âm (ANrufen), Không tách = tiền tố không trọng âm (verSTEhen)",
        examples: [
          { de: "Er kommt morgen an. (ANkommen — tách được)", vi: "Anh ấy đến vào ngày mai." },
          { de: "Er bekommt ein Geschenk. (beKOMMen — không tách)", vi: "Anh ấy nhận được một món quà." },
          { de: "Ich verstehe das nicht. (verSTEhen — không tách)", vi: "Tôi không hiểu điều đó." }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: "Ich aufstehe um 7 Uhr.",
        correct: "Ich stehe um 7 Uhr auf.",
        explanation: "Động từ tách được phải tách ra: phần gốc chia ở vị trí 2 ('stehe'), tiền tố ('auf') đứng cuối câu."
      },
      {
        wrong: "Rufst du mich morgen?",
        correct: "Rufst du mich morgen an?",
        explanation: "Đừng quên đặt tiền tố tách ra ở cuối câu! 'anrufen' tách thành 'rufst...an'."
      },
      {
        wrong: "Ich stehe um 7 Uhr. (khi muốn nói 'thức dậy')",
        correct: "Ich stehe um 7 Uhr auf.",
        explanation: "'stehen' (đứng) và 'aufstehen' (thức dậy) có nghĩa hoàn toàn khác. Thiếu tiền tố 'auf' sẽ thay đổi nghĩa của câu."
      }
    ],
    vietnameseComparison: `Tiếng Việt không có khái niệm động từ tách được. Mỗi động từ tiếng Việt là một đơn vị hoàn chỉnh không bao giờ bị tách ra. Khái niệm gần nhất có thể là cụm động từ + bổ ngữ: "gọi điện" — "gọi" là động từ, "điện" là bổ ngữ, nhưng chúng luôn đứng cạnh nhau. Trong tiếng Đức, "anrufen" khi chia sẽ bị tách thành "rufe...an" với các thành phần khác xen vào giữa. Đây là một thử thách lớn vì người Việt phải nhớ đặt tiền tố ở cuối câu — rất dễ quên! Mẹo: Khi nói, hãy nghĩ đến tiền tố TRƯỚC khi bắt đầu câu, và "giữ chỗ" cho nó ở cuối câu.`,
    exercises: [
      {
        type: "reorder",
        question: "um 7 Uhr / ich / auf / stehe",
        questionVi: "Sắp xếp lại thành câu đúng.",
        answer: "Ich stehe um 7 Uhr auf.",
        explanation: "Động từ 'aufstehen' tách thành: 'stehe' ở vị trí 2, 'auf' ở cuối câu."
      },
      {
        type: "fill-in",
        question: "Wann ___ der Zug ___? (abfahren)",
        questionVi: "Tàu khởi hành khi nào?",
        answer: "fährt...ab",
        explanation: "'abfahren' tách thành 'fährt...ab'. Lưu ý: 'fahren' là động từ đổi nguyên âm a→ä."
      },
      {
        type: "multiple-choice",
        question: "Er ___ seine Freundin zum Essen ___.",
        questionVi: "Anh ấy mời bạn gái đi ăn.",
        options: ["ladet...ein", "lädt...ein", "einladet", "ladet ein"],
        answer: "lädt...ein",
        explanation: "'einladen' tách thành 'lädt...ein'. 'laden' đổi nguyên âm a→ä với er/sie/es."
      },
      {
        type: "fill-in",
        question: "Ich ___ dich morgen ___. (anrufen)",
        questionVi: "Tôi sẽ gọi điện cho bạn ngày mai.",
        answer: "rufe...an",
        explanation: "'anrufen' tách thành 'rufe...an': 'rufe' ở vị trí 2, 'an' ở cuối."
      },
      {
        type: "multiple-choice",
        question: "Welcher Satz ist richtig?",
        questionVi: "Câu nào đúng?",
        options: [
          "Ich kaufe im Supermarkt ein.",
          "Ich einkaufe im Supermarkt.",
          "Ich kaufe ein im Supermarkt.",
          "Im Supermarkt einkaufe ich."
        ],
        answer: "Ich kaufe im Supermarkt ein.",
        explanation: "Tiền tố tách ra luôn đứng ở cuối câu, sau tất cả các thành phần khác."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // TOPIC 7: Modalverben
  // ═══════════════════════════════════════════════════════════
  {
    id: "a1-gram-07-modalverben",
    title: "Modalverben",
    titleVi: "Động từ tình thái",
    chapter: 5,
    order: 7,
    level: "A1",
    explanation: `Động từ tình thái (Modalverben) diễn tả thái độ của chủ ngữ đối với hành động: có thể, phải, muốn, được phép... Có 6 động từ tình thái chính trong tiếng Đức: können (có thể — khả năng), müssen (phải — bắt buộc), wollen (muốn — ý chí mạnh), möchten (muốn — lịch sự), dürfen (được phép), sollen (nên — lời khuyên/nhiệm vụ).

Cấu trúc câu với Modalverben tạo thành khung câu (Satzklammer): Modalverb được chia ở vị trí 2, động từ chính ở dạng nguyên thể (Infinitiv) đứng cuối câu. Ví dụ: "Ich kann gut Deutsch sprechen." — "kann" (chia) ở vị trí 2, "sprechen" (nguyên thể) ở cuối. Đây giống cấu trúc khung câu của động từ tách được.

Đặc điểm chia: Modalverben bất quy tắc ở ngôi ich và er/sie/es — hai ngôi này có dạng giống nhau và KHÔNG có đuôi. Ví dụ: "ich kann, du kannst, er kann" (không phải "er kannt"). Ngoài ra, nguyên âm gốc thường thay đổi giữa số ít và số nhiều: "ich muss" nhưng "wir müssen".

Phân biệt "müssen" và "nicht müssen": "Ich muss arbeiten" = Tôi phải làm việc (bắt buộc). Nhưng "Ich muss nicht arbeiten" = Tôi không cần làm việc (không bắt buộc) — KHÔNG phải "không được phép". "Không được phép" = "Ich darf nicht arbeiten". Đây là lỗi rất phổ biến!

"möchten" là dạng lịch sự của "mögen" (thích) và được dùng rất nhiều trong giao tiếp hàng ngày, đặc biệt khi gọi đồ ăn/uống: "Ich möchte einen Kaffee, bitte." (Tôi muốn một ly cà phê.) Nó lịch sự hơn "wollen" rất nhiều.`,
    rules: [
      {
        rule: "Satzklammer: Modalverb (Position 2) + ... + Infinitiv (Ende)",
        ruleVi: "Khung câu: Động từ tình thái (vị trí 2) + ... + Nguyên thể (cuối câu)",
        examples: [
          { de: "Ich kann gut schwimmen.", vi: "Tôi có thể bơi giỏi." },
          { de: "Du musst jetzt lernen.", vi: "Bạn phải học bây giờ." },
          { de: "Wir möchten ein Eis essen.", vi: "Chúng tôi muốn ăn kem." }
        ]
      },
      {
        rule: "Konjugation: ich/er/sie/es haben die gleiche Form (keine Endung)",
        ruleVi: "Chia động từ: ich/er/sie/es có dạng giống nhau (không đuôi)",
        examples: [
          { de: "ich kann, du kannst, er kann, wir können, ihr könnt, sie können", vi: "können: tôi có thể, bạn có thể, anh ấy có thể..." },
          { de: "ich muss, du musst, er muss, wir müssen, ihr müsst, sie müssen", vi: "müssen: tôi phải, bạn phải, anh ấy phải..." },
          { de: "ich will, du willst, er will, wir wollen, ihr wollt, sie wollen", vi: "wollen: tôi muốn, bạn muốn, anh ấy muốn..." }
        ]
      },
      {
        rule: "Bedeutungsunterschiede: können (Fähigkeit), müssen (Pflicht), dürfen (Erlaubnis), wollen/möchten (Wunsch), sollen (Empfehlung)",
        ruleVi: "Khác biệt nghĩa: können (khả năng), müssen (nghĩa vụ), dürfen (sự cho phép), wollen/möchten (mong muốn), sollen (khuyến nghị)",
        examples: [
          { de: "Ich kann Klavier spielen. (Fähigkeit)", vi: "Tôi có thể chơi piano. (khả năng)" },
          { de: "Du musst zum Arzt gehen. (Pflicht)", vi: "Bạn phải đi bác sĩ. (nghĩa vụ)" },
          { de: "Hier darf man nicht rauchen. (Verbot)", vi: "Ở đây không được hút thuốc. (cấm)" }
        ]
      },
      {
        rule: "nicht müssen ≠ nicht dürfen: 'muss nicht' = nicht nötig, 'darf nicht' = verboten",
        ruleVi: "nicht müssen ≠ nicht dürfen: 'muss nicht' = không cần, 'darf nicht' = bị cấm",
        examples: [
          { de: "Du musst nicht kommen. (= Du kannst kommen, aber es ist nicht nötig.)", vi: "Bạn không cần đến. (Có thể đến nhưng không bắt buộc.)" },
          { de: "Du darfst nicht kommen. (= Es ist verboten.)", vi: "Bạn không được phép đến. (Bị cấm.)" },
          { de: "Man muss hier nicht bezahlen. vs. Man darf hier nicht parken.", vi: "Ở đây không cần trả tiền. vs. Ở đây không được đỗ xe." }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: "Ich kann schwimmen gut.",
        correct: "Ich kann gut schwimmen.",
        explanation: "Động từ nguyên thể (schwimmen) phải đứng ở cuối câu. Trạng từ 'gut' đứng trước nguyên thể."
      },
      {
        wrong: "Er muss nicht rauchen hier. (khi muốn nói 'không được phép')",
        correct: "Er darf hier nicht rauchen.",
        explanation: "'muss nicht' = không cần (không bắt buộc). 'darf nicht' = không được phép (bị cấm). Đây là hai nghĩa hoàn toàn khác nhau!"
      },
      {
        wrong: "Ich will einen Kaffee. (trong nhà hàng)",
        correct: "Ich möchte einen Kaffee, bitte.",
        explanation: "'wollen' nghe rất thô lỗ và đòi hỏi. Trong tình huống lịch sự (nhà hàng, cửa hàng), luôn dùng 'möchten'."
      }
    ],
    vietnameseComparison: `Tiếng Việt cũng có các từ tình thái tương tự: "có thể" (können), "phải" (müssen), "muốn" (wollen/möchten), "được" (dürfen), "nên" (sollen). Tuy nhiên, trong tiếng Việt các từ này đứng ngay trước động từ chính và cả hai đều không thay đổi hình thức: "Tôi có thể bơi", "Anh ấy có thể bơi". Tiếng Đức thì khác: (1) Modalverb phải chia theo chủ ngữ, (2) động từ chính phải ở dạng nguyên thể, (3) động từ chính phải nhảy xuống cuối câu. Cấu trúc khung câu (Satzklammer) này hoàn toàn xa lạ với người Việt và cần luyện tập nhiều.`,
    exercises: [
      {
        type: "fill-in",
        question: "Ich ___ (können) gut Deutsch sprechen.",
        questionVi: "Tôi ___ nói tiếng Đức giỏi.",
        answer: "kann",
        explanation: "'können' chia với 'ich' thành 'kann' (không đuôi, đổi nguyên âm ö→a)."
      },
      {
        type: "multiple-choice",
        question: "___ ich hier rauchen?",
        questionVi: "Tôi ___ hút thuốc ở đây không?",
        options: ["Kann", "Muss", "Darf", "Soll"],
        answer: "Darf",
        explanation: "Hỏi về sự cho phép dùng 'dürfen'. 'Darf ich...?' = Tôi được phép...không?"
      },
      {
        type: "reorder",
        question: "müssen / wir / Deutsch / lernen",
        questionVi: "Sắp xếp thành câu đúng.",
        answer: "Wir müssen Deutsch lernen.",
        explanation: "Modalverb 'müssen' ở vị trí 2, nguyên thể 'lernen' ở cuối câu."
      },
      {
        type: "multiple-choice",
        question: "Du ___ nicht kommen. Es ist nicht nötig.",
        questionVi: "Bạn ___ đến. Không cần thiết.",
        options: ["musst", "darfst", "sollst", "willst"],
        answer: "musst",
        explanation: "'muss nicht' = không cần (không bắt buộc). Phù hợp với 'Es ist nicht nötig'."
      },
      {
        type: "fill-in",
        question: "Er ___ (möchten) ein Bier bestellen.",
        questionVi: "Anh ấy muốn gọi một ly bia.",
        answer: "möchte",
        explanation: "'möchten' chia với 'er' thành 'möchte' (không đuôi)."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // TOPIC 8: Dativ
  // ═══════════════════════════════════════════════════════════
  {
    id: "a1-gram-08-dativ",
    title: "Dativ",
    titleVi: "Cách tặng cách (Dativ)",
    chapter: 4,
    order: 8,
    level: "A1",
    explanation: `Dativ (cách 3 hay cách tặng cách) được dùng cho tân ngữ gián tiếp — người nhận hành động. Ví dụ: "Ich gebe dem Kind einen Apfel" — "dem Kind" (đứa trẻ) là người nhận (Dativ), "einen Apfel" (quả táo) là vật được cho (Akkusativ). Trong tiếng Việt, tân ngữ gián tiếp thường đi với giới từ "cho": "Tôi cho đứa trẻ một quả táo."

Ở Dativ, TẤT CẢ các mạo từ đều thay đổi (khác Akkusativ chỉ có giống đực thay đổi). Mạo từ xác định: der→dem, die→der, das→dem, die (Pl.)→den (+n). Mạo từ không xác định: ein→einem, eine→einer, ein→einem. Quy tắc nhớ: Giống đực và trung → "dem/einem", giống cái → "der/einer", số nhiều → "den + danh từ thêm -n".

Một số động từ quan trọng đi với Dativ: "helfen" (giúp), "danken" (cảm ơn), "gefallen" (thích/ưa), "gehören" (thuộc về), "schmecken" (ngon), "antworten" (trả lời). Lưu ý: Những động từ này KHÔNG đi với Akkusativ — đây là điểm khác so với tiếng Việt và tiếng Anh! "Ich helfe dir" (Tôi giúp bạn) — KHÔNG phải "Ich helfe dich".

Nhiều giới từ luôn đi với Dativ: "mit" (với), "nach" (sau/đến), "aus" (từ/ra khỏi), "zu" (đến), "von" (từ/của), "bei" (ở chỗ/tại), "seit" (từ khi), "gegenüber" (đối diện). Ví dụ: "Ich fahre mit dem Bus" (Tôi đi bằng xe buýt), "Ich komme aus der Schule" (Tôi từ trường về).

Đặc biệt: Ở số nhiều Dativ, danh từ phải thêm "-n" nếu chưa kết thúc bằng "-n" hoặc "-s": "die Kinder" → "den Kindern", "die Freunde" → "den Freunden". Nhưng: "die Autos" → "den Autos" (đã có -s, không thêm -n).`,
    rules: [
      {
        rule: "Dativ-Artikel: der→dem, die→der, das→dem, die(Pl.)→den(+n)",
        ruleVi: "Mạo từ Dativ: der→dem, die→der, das→dem, die(số nhiều)→den(+n)",
        examples: [
          { de: "Ich gebe dem Mann das Buch. (der Mann)", vi: "Tôi đưa cho người đàn ông cuốn sách." },
          { de: "Ich helfe der Frau. (die Frau)", vi: "Tôi giúp người phụ nữ." },
          { de: "Er gibt den Kindern Schokolade. (die Kinder)", vi: "Anh ấy cho bọn trẻ sô-cô-la." }
        ]
      },
      {
        rule: "Unbestimmter Artikel Dativ: ein→einem, eine→einer, ein→einem",
        ruleVi: "Mạo từ không xác định Dativ: ein→einem, eine→einer, ein→einem",
        examples: [
          { de: "Sie gibt einem Kind einen Apfel.", vi: "Cô ấy cho một đứa trẻ một quả táo." },
          { de: "Er hilft einer Frau.", vi: "Anh ấy giúp một người phụ nữ." },
          { de: "Ich wohne bei einem Freund.", vi: "Tôi ở nhờ nhà một người bạn." }
        ]
      },
      {
        rule: "Verben mit Dativ: helfen, danken, gefallen, gehören, schmecken, antworten",
        ruleVi: "Động từ đi với Dativ: giúp, cảm ơn, thích, thuộc về, ngon, trả lời",
        examples: [
          { de: "Kannst du mir helfen?", vi: "Bạn có thể giúp tôi không?" },
          { de: "Das Essen schmeckt mir gut.", vi: "Đồ ăn ngon (đối với tôi)." },
          { de: "Das Buch gehört meinem Bruder.", vi: "Cuốn sách thuộc về anh trai tôi." }
        ]
      },
      {
        rule: "Präpositionen mit Dativ: mit, nach, aus, zu, von, bei, seit, gegenüber",
        ruleVi: "Giới từ đi với Dativ: với, sau/đến, từ, đến, từ/của, ở chỗ, từ khi, đối diện",
        examples: [
          { de: "Ich fahre mit dem Bus.", vi: "Tôi đi bằng xe buýt." },
          { de: "Sie kommt aus der Türkei.", vi: "Cô ấy đến từ Thổ Nhĩ Kỳ." },
          { de: "Ich gehe zum Arzt. (zu + dem = zum)", vi: "Tôi đi bác sĩ." }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: "Ich helfe dich.",
        correct: "Ich helfe dir.",
        explanation: "'helfen' đi với Dativ, không phải Akkusativ. Đại từ 'du' ở Dativ là 'dir', không phải 'dich' (Akkusativ)."
      },
      {
        wrong: "Ich fahre mit der Bus.",
        correct: "Ich fahre mit dem Bus.",
        explanation: "'mit' luôn đi với Dativ. 'Bus' là giống đực (der Bus) → Dativ: dem Bus."
      },
      {
        wrong: "Er gibt den Kinder Geschenke.",
        correct: "Er gibt den Kindern Geschenke.",
        explanation: "Ở Dativ số nhiều, danh từ phải thêm '-n': Kinder → Kindern."
      }
    ],
    vietnameseComparison: `Tiếng Việt diễn tả tân ngữ gián tiếp bằng giới từ "cho" hoặc bằng trật tự từ: "Tôi cho bạn cuốn sách" hoặc "Tôi đưa cuốn sách cho bạn." Danh từ và đại từ không thay đổi hình thức. Tiếng Đức thì phức tạp hơn: mạo từ phải biến đổi theo cách Dativ (dem, der, dem, den+n), và một số động từ đòi hỏi Dativ mà không có giới từ "cho" tương đương. Ví dụ: "Das gefällt mir" (Điều đó làm tôi thích) — không có "cho" nào cả, nhưng "mir" vẫn ở Dativ. Người Việt cần học thuộc danh sách động từ đi với Dativ vì chúng không theo logic của tiếng Việt.`,
    exercises: [
      {
        type: "fill-in",
        question: "Ich gebe ___ (die) Lehrerin die Hausaufgabe.",
        questionVi: "Tôi nộp bài tập cho cô giáo.",
        answer: "der",
        explanation: "'Lehrerin' là giống cái. Dativ giống cái: die → der."
      },
      {
        type: "multiple-choice",
        question: "Er fährt mit ___ Fahrrad zur Uni.",
        questionVi: "Anh ấy đi xe đạp đến trường đại học.",
        options: ["das", "dem", "den", "der"],
        answer: "dem",
        explanation: "'mit' đi với Dativ. 'Fahrrad' là giống trung (das) → Dativ: dem."
      },
      {
        type: "fill-in",
        question: "Kannst du ___ (ich) helfen?",
        questionVi: "Bạn có thể giúp tôi không?",
        answer: "mir",
        explanation: "'helfen' đi với Dativ. Đại từ 'ich' ở Dativ là 'mir'."
      },
      {
        type: "multiple-choice",
        question: "Das Kleid gefällt ___ Frau sehr gut.",
        questionVi: "Chiếc váy rất hợp với người phụ nữ.",
        options: ["die", "der", "dem", "den"],
        answer: "der",
        explanation: "'gefallen' đi với Dativ. 'Frau' giống cái → Dativ: der."
      },
      {
        type: "fill-in",
        question: "Sie kommt aus ___ (ein) kleinen Stadt.",
        questionVi: "Cô ấy đến từ một thành phố nhỏ.",
        answer: "einer",
        explanation: "'aus' đi với Dativ. 'Stadt' giống cái → einer."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // TOPIC 9: Perfekt
  // ═══════════════════════════════════════════════════════════
  {
    id: "a1-gram-09-perfekt",
    title: "Perfekt",
    titleVi: "Thì hoàn thành (Perfekt)",
    chapter: 7,
    order: 9,
    level: "A1",
    explanation: `Perfekt là thì quá khứ được dùng phổ biến nhất trong giao tiếp hàng ngày tiếng Đức. Khi kể về việc đã xảy ra, người Đức thường dùng Perfekt chứ không phải Präteritum (ngoại trừ "sein", "haben" và Modalverben). Ví dụ: "Ich habe gestern Fußball gespielt." (Hôm qua tôi đã chơi bóng đá.)

Cấu trúc Perfekt gồm hai phần: động từ trợ (Hilfsverb) "haben" hoặc "sein" được chia ở vị trí 2, và Partizip II (quá khứ phân từ) đứng ở cuối câu. Đây lại là cấu trúc khung câu (Satzklammer) quen thuộc: "Ich habe gestern Deutsch gelernt." — "habe" ở vị trí 2, "gelernt" ở cuối.

Partizip II của động từ có quy tắc: ge- + Stamm + -t. Ví dụ: machen → gemacht, lernen → gelernt, spielen → gespielt. Động từ kết thúc bằng -ieren KHÔNG thêm ge-: studieren → studiert, telefonieren → telefoniert. Động từ không tách được cũng KHÔNG thêm ge-: besuchen → besucht, verstehen → verstanden.

Partizip II của động từ bất quy tắc: ge- + Stamm (thay đổi) + -en. Ví dụ: trinken → getrunken, schreiben → geschrieben, lesen → gelesen, sehen → gesehen, essen → gegessen. Những dạng này phải học thuộc.

Hầu hết động từ dùng "haben" làm trợ động từ. Dùng "sein" với: (1) Động từ chỉ sự di chuyển/thay đổi vị trí: gehen→ist gegangen, fahren→ist gefahren, fliegen→ist geflogen, kommen→ist gekommen. (2) Động từ chỉ sự thay đổi trạng thái: aufwachen→ist aufgewacht, einschlafen→ist eingeschlafen, sterben→ist gestorben. (3) Hai động từ đặc biệt: sein→ist gewesen, bleiben→ist geblieben.`,
    rules: [
      {
        rule: "Perfekt = haben/sein (Position 2) + ... + Partizip II (Ende)",
        ruleVi: "Perfekt = haben/sein (vị trí 2) + ... + Partizip II (cuối câu)",
        examples: [
          { de: "Ich habe Deutsch gelernt.", vi: "Tôi đã học tiếng Đức." },
          { de: "Er ist nach Berlin gefahren.", vi: "Anh ấy đã đi Berlin." },
          { de: "Wir haben einen Film gesehen.", vi: "Chúng tôi đã xem một bộ phim." }
        ]
      },
      {
        rule: "Regelmäßige Verben: ge- + Stamm + -t (gemacht, gelernt, gespielt)",
        ruleVi: "Động từ có quy tắc: ge- + Gốc + -t",
        examples: [
          { de: "Ich habe Fußball gespielt. (spielen)", vi: "Tôi đã chơi bóng đá." },
          { de: "Sie hat lange gearbeitet. (arbeiten)", vi: "Cô ấy đã làm việc lâu." },
          { de: "Wir haben viel gelacht. (lachen)", vi: "Chúng tôi đã cười nhiều." }
        ]
      },
      {
        rule: "Unregelmäßige Verben: ge- + veränderter Stamm + -en (getrunken, geschrieben)",
        ruleVi: "Động từ bất quy tắc: ge- + Gốc thay đổi + -en",
        examples: [
          { de: "Ich habe Wasser getrunken. (trinken)", vi: "Tôi đã uống nước." },
          { de: "Er hat ein Buch gelesen. (lesen)", vi: "Anh ấy đã đọc một cuốn sách." },
          { de: "Sie hat eine E-Mail geschrieben. (schreiben)", vi: "Cô ấy đã viết một email." }
        ]
      },
      {
        rule: "Perfekt mit 'sein': Bewegung (gehen, fahren, fliegen) und Zustandsänderung (aufwachen, einschlafen)",
        ruleVi: "Perfekt với 'sein': Di chuyển (đi, lái xe, bay) và thay đổi trạng thái (thức dậy, ngủ thiếp)",
        examples: [
          { de: "Ich bin nach Hause gegangen.", vi: "Tôi đã đi về nhà." },
          { de: "Er ist gestern angekommen.", vi: "Anh ấy đã đến hôm qua." },
          { de: "Sie ist um 6 Uhr aufgewacht.", vi: "Cô ấy đã thức dậy lúc 6 giờ." }
        ]
      },
      {
        rule: "Kein ge- bei: Verben auf -ieren (studiert), untrennbaren Verben (besucht, verstanden)",
        ruleVi: "Không thêm ge-: Động từ đuôi -ieren (studiert), động từ không tách (besucht, verstanden)",
        examples: [
          { de: "Er hat in Berlin studiert. (studieren)", vi: "Anh ấy đã học đại học ở Berlin." },
          { de: "Ich habe meine Oma besucht. (besuchen)", vi: "Tôi đã thăm bà ngoại." },
          { de: "Hast du das verstanden? (verstehen)", vi: "Bạn đã hiểu chưa?" }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: "Ich bin Deutsch gelernt.",
        correct: "Ich habe Deutsch gelernt.",
        explanation: "'lernen' không phải động từ chỉ di chuyển hay thay đổi trạng thái, nên dùng 'haben', không phải 'sein'."
      },
      {
        wrong: "Er hat nach Berlin gefahren.",
        correct: "Er ist nach Berlin gefahren.",
        explanation: "'fahren' là động từ chỉ di chuyển (thay đổi vị trí), nên dùng 'sein', không phải 'haben'."
      },
      {
        wrong: "Ich habe gestern getelefoniert. → gestelefoniert",
        correct: "Ich habe gestern telefoniert.",
        explanation: "Động từ kết thúc bằng '-ieren' KHÔNG thêm 'ge-': telefonieren → telefoniert (không phải getelefoniert)."
      }
    ],
    vietnameseComparison: `Tiếng Việt diễn tả quá khứ bằng cách thêm "đã" trước động từ hoặc dùng trạng từ thời gian ("hôm qua", "năm ngoái") — động từ không hề thay đổi hình thức. Tiếng Đức phức tạp hơn nhiều: phải dùng trợ động từ (haben/sein) + Partizip II, và Partizip II thay đổi theo quy tắc hoặc bất quy tắc. Thêm vào đó, trợ động từ và Partizip II tách nhau ra theo cấu trúc khung câu. Mẹo cho người Việt: Hãy học thuộc Partizip II của mỗi động từ ngay khi học từ mới, ghi dạng ba (Infinitiv - Präteritum - Partizip II): trinken - trank - getrunken.`,
    exercises: [
      {
        type: "fill-in",
        question: "Ich ___ gestern einen Film ___ (sehen).",
        questionVi: "Hôm qua tôi đã xem một bộ phim.",
        answer: "habe...gesehen",
        explanation: "'sehen' bất quy tắc: gesehen. Dùng 'haben' vì không phải di chuyển."
      },
      {
        type: "multiple-choice",
        question: "Sie ___ nach Paris ___. (fliegen)",
        questionVi: "Cô ấy đã bay đến Paris.",
        options: ["hat...geflogen", "ist...geflogen", "hat...gefliegt", "ist...gefliegt"],
        answer: "ist...geflogen",
        explanation: "'fliegen' chỉ di chuyển → dùng 'sein'. Bất quy tắc: geflogen."
      },
      {
        type: "fill-in",
        question: "Er ___ in München ___ (studieren).",
        questionVi: "Anh ấy đã học đại học ở München.",
        answer: "hat...studiert",
        explanation: "'studieren' kết thúc -ieren → không thêm 'ge-': studiert. Dùng 'haben'."
      },
      {
        type: "multiple-choice",
        question: "Wir ___ lange ___ (schlafen).",
        questionVi: "Chúng tôi đã ngủ lâu.",
        options: ["haben...geschlafen", "sind...geschlafen", "haben...geschlaft", "sind...geschlaft"],
        answer: "haben...geschlafen",
        explanation: "'schlafen' (ngủ — trạng thái, không di chuyển) → dùng 'haben'. Bất quy tắc: geschlafen."
      },
      {
        type: "fill-in",
        question: "___ du schon ___ (essen)?",
        questionVi: "Bạn đã ăn chưa?",
        answer: "Hast...gegessen",
        explanation: "'essen' bất quy tắc: gegessen. Dùng 'haben'. Câu hỏi: 'Hast' đứng đầu."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // TOPIC 10: Imperativ
  // ═══════════════════════════════════════════════════════════
  {
    id: "a1-gram-10-imperativ",
    title: "Imperativ",
    titleVi: "Câu mệnh lệnh (Imperativ)",
    chapter: 8,
    order: 10,
    level: "A1",
    explanation: `Imperativ (câu mệnh lệnh) dùng để ra lệnh, yêu cầu, đề nghị hoặc khuyên bảo. Trong tiếng Đức có ba dạng Imperativ tùy theo đối tượng: du-Form (nói với một người thân/bạn bè), ihr-Form (nói với nhiều người thân/bạn bè), và Sie-Form (nói lịch sự với một hoặc nhiều người).

Du-Form: Lấy gốc động từ, bỏ đuôi "-st" của dạng chia với "du". Không dùng đại từ "du". Ví dụ: "du kommst" → "Komm!" (Đến đi!), "du machst" → "Mach!" (Làm đi!). Có thể thêm "-e" nhưng thường bỏ trong khẩu ngữ: "Komm!" hoặc "Komme!" đều đúng. Tuy nhiên, gốc kết thúc bằng -t, -d, -chn, -ffn, -gn BẮT BUỘC phải giữ "-e": "Arbeite!" (không phải "Arbeit!").

Ihr-Form: Giống hệt dạng chia với "ihr", nhưng bỏ đại từ "ihr". Ví dụ: "ihr kommt" → "Kommt!" (Các bạn đến đi!), "ihr macht" → "Macht!" (Các bạn làm đi!).

Sie-Form: Giống dạng chia với "Sie", nhưng đảo vị trí: động từ đứng trước "Sie". Ví dụ: "Sie kommen" → "Kommen Sie!" (Quý vị hãy đến!), "Sie machen" → "Machen Sie!" (Quý vị hãy làm!). Đây là dạng duy nhất giữ lại đại từ.

Động từ bất quy tắc đổi nguyên âm e→i/ie ở du-Form: "lesen" → "Lies!" (không phải "Les!"), "sprechen" → "Sprich!" (không phải "Sprech!"), "nehmen" → "Nimm!" (không phải "Nehm!"). Nhưng động từ đổi a→ä KHÔNG đổi ở Imperativ: "fahren" → "Fahr!" (không phải "Fähr!").`,
    rules: [
      {
        rule: "du-Form: Stamm (+ optional -e), ohne 'du'. Bei e→i/ie: Vokalwechsel",
        ruleVi: "Dạng du: Gốc (+ tùy chọn -e), không dùng 'du'. Nếu e→i/ie: đổi nguyên âm",
        examples: [
          { de: "Komm bitte herein! (kommen)", vi: "Mời vào!" },
          { de: "Lies das Buch! (lesen: e→ie)", vi: "Đọc cuốn sách đi!" },
          { de: "Sprich lauter! (sprechen: e→i)", vi: "Nói to hơn đi!" }
        ]
      },
      {
        rule: "ihr-Form: wie 'ihr'-Konjugation, ohne 'ihr'",
        ruleVi: "Dạng ihr: giống chia với 'ihr', bỏ 'ihr'",
        examples: [
          { de: "Kommt bitte herein! (ihr kommt)", vi: "Các bạn mời vào!" },
          { de: "Lest das Buch! (ihr lest)", vi: "Các bạn đọc cuốn sách đi!" },
          { de: "Macht die Tür zu! (ihr macht)", vi: "Các bạn đóng cửa đi!" }
        ]
      },
      {
        rule: "Sie-Form: wie 'Sie'-Konjugation, Verb vor 'Sie'",
        ruleVi: "Dạng Sie: giống chia với 'Sie', động từ đứng trước 'Sie'",
        examples: [
          { de: "Kommen Sie bitte herein!", vi: "Xin quý vị mời vào!" },
          { de: "Lesen Sie den Text!", vi: "Xin quý vị đọc bài văn!" },
          { de: "Nehmen Sie bitte Platz!", vi: "Xin quý vị hãy ngồi!" }
        ]
      },
      {
        rule: "Sonderformen: 'sein' → Sei! / Seid! / Seien Sie!",
        ruleVi: "Dạng đặc biệt: 'sein' → Sei! / Seid! / Seien Sie!",
        examples: [
          { de: "Sei ruhig! (du)", vi: "Im lặng đi!" },
          { de: "Seid bitte pünktlich! (ihr)", vi: "Các bạn hãy đúng giờ!" },
          { de: "Seien Sie bitte geduldig! (Sie)", vi: "Xin quý vị hãy kiên nhẫn!" }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: "Fähr langsamer! (du)",
        correct: "Fahr langsamer!",
        explanation: "Động từ đổi a→ä (fahren → du fährst) KHÔNG đổi nguyên âm ở Imperativ du-Form. Giữ nguyên 'a': Fahr!"
      },
      {
        wrong: "Lest Sie den Text!",
        correct: "Lesen Sie den Text!",
        explanation: "Sie-Form dùng dạng nguyên thể + Sie: 'Lesen Sie', không phải dạng 'ihr' (lest)."
      },
      {
        wrong: "Du komm hier!",
        correct: "Komm her!",
        explanation: "Imperativ du-Form KHÔNG dùng đại từ 'du'. Ngoài ra, dùng 'her' (về phía người nói) thay vì 'hier'."
      }
    ],
    vietnameseComparison: `Tiếng Việt tạo câu mệnh lệnh rất đơn giản — chỉ cần dùng động từ nguyên dạng, thêm "đi", "hãy", hoặc "xin" để thay đổi sắc thái: "Đi đi!", "Hãy ngồi xuống!", "Xin hãy chờ một chút!". Động từ không thay đổi hình thức và không cần phân biệt người nghe. Tiếng Đức phức tạp hơn: phải phân biệt ba dạng (du/ihr/Sie), động từ phải biến đổi theo dạng, và một số động từ bất quy tắc có Imperativ riêng. Điểm tương đồng: cả hai ngôn ngữ đều có thể thêm "bitte" (xin/làm ơn) để lịch sự hơn.`,
    exercises: [
      {
        type: "fill-in",
        question: "___ bitte die Tür ___! (zumachen, du-Form)",
        questionVi: "Đóng cửa lại đi!",
        answer: "Mach...zu",
        explanation: "'zumachen' tách ra ở Imperativ: 'Mach...zu'. Du-Form: gốc 'mach' + tiền tố 'zu' cuối câu."
      },
      {
        type: "multiple-choice",
        question: "___ bitte lauter! (sprechen, du-Form)",
        questionVi: "Nói to hơn đi!",
        options: ["Sprech", "Sprich", "Sprecht", "Sprechen"],
        answer: "Sprich",
        explanation: "'sprechen' đổi e→i ở du-Form Imperativ: Sprich! (không phải Sprech!)."
      },
      {
        type: "fill-in",
        question: "___ Sie bitte hier! (warten)",
        questionVi: "Xin quý vị vui lòng chờ ở đây!",
        answer: "Warten",
        explanation: "Sie-Form: dùng nguyên thể 'Warten' + 'Sie'."
      },
      {
        type: "multiple-choice",
        question: "___ ruhig, Kinder! (sein, ihr-Form)",
        questionVi: "Im lặng nào, các con! (sein, dạng ihr)",
        options: ["Seid", "Sei", "Seien", "Sind"],
        answer: "Seid",
        explanation: "'sein' ở Imperativ ihr-Form: Seid! (dạng đặc biệt, phải học thuộc)."
      },
      {
        type: "fill-in",
        question: "___ das Buch! (lesen, du-Form)",
        questionVi: "Đọc cuốn sách đi!",
        answer: "Lies",
        explanation: "'lesen' đổi e→ie ở du-Form Imperativ: Lies! (không phải Les!)."
      }
    ]
  },

  // ═══════════════════════════════════════════════════════════
  // TOPIC 11: Pronomen im Akkusativ und Dativ
  // ═══════════════════════════════════════════════════════════
  {
    id: "a1-gram-11-pronomen-akk-dat",
    title: "Pronomen im Akkusativ und Dativ",
    titleVi: "Đại từ ở Akkusativ và Dativ",
    chapter: 9,
    order: 11,
    level: "A1",
    explanation: `Đại từ nhân xưng (Personalpronomen) trong tiếng Đức thay đổi hình thức tùy theo cách (Kasus). Ở Nominativ: ich, du, er, sie, es, wir, ihr, sie, Sie. Ở Akkusativ: mich, dich, ihn, sie, es, uns, euch, sie, Sie. Ở Dativ: mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen.

Akkusativ-Pronomen thay thế cho tân ngữ trực tiếp. Ví dụ: "Ich sehe den Mann" → "Ich sehe ihn" (Tôi thấy anh ấy). Lưu ý: chỉ "er→ihn" và "ich→mich", "du→dich" thay đổi rõ rệt. "sie" (cô ấy), "es" (nó), "wir→uns", "sie" (họ), "Sie" (Quý vị) giữ nguyên hoặc thay đổi ít.

Dativ-Pronomen thay thế cho tân ngữ gián tiếp (người nhận). Ví dụ: "Ich gebe dem Kind einen Apfel" → "Ich gebe ihm einen Apfel" (Tôi cho nó một quả táo). Các dạng cần nhớ: mir (cho tôi), dir (cho bạn), ihm (cho anh ấy/nó), ihr (cho cô ấy), uns (cho chúng tôi), euch (cho các bạn), ihnen (cho họ), Ihnen (cho Quý vị).

Thứ tự trong câu khi có cả hai đại từ: Akkusativ trước Dativ nếu CẢ HAI là đại từ. Ví dụ: "Ich gebe es dir." (Tôi đưa nó cho bạn.) Nhưng nếu một là đại từ và một là danh từ: đại từ đứng trước danh từ. Ví dụ: "Ich gebe dir das Buch." (Đại từ 'dir' trước danh từ 'das Buch'.) hoặc "Ich gebe es dem Kind." (Đại từ 'es' trước danh từ 'dem Kind'.)

Đại từ ở Dativ rất hay dùng trong các cấu trúc cố định: "Wie geht es dir/Ihnen?" (Bạn/Quý vị khỏe không?), "Das gefällt mir" (Tôi thích điều đó), "Schmeckt es dir?" (Bạn thấy ngon không?), "Kannst du mir helfen?" (Bạn giúp tôi được không?).`,
    rules: [
      {
        rule: "Akkusativ-Pronomen: mich, dich, ihn, sie, es, uns, euch, sie, Sie",
        ruleVi: "Đại từ Akkusativ: mich, dich, ihn, sie, es, uns, euch, sie, Sie",
        examples: [
          { de: "Siehst du den Hund? — Ja, ich sehe ihn.", vi: "Bạn thấy con chó không? — Có, tôi thấy nó." },
          { de: "Liebst du mich? — Ja, ich liebe dich.", vi: "Bạn yêu tôi không? — Có, tôi yêu bạn." },
          { de: "Ich brauche die Tasche. Ich brauche sie.", vi: "Tôi cần cái túi. Tôi cần nó." }
        ]
      },
      {
        rule: "Dativ-Pronomen: mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen",
        ruleVi: "Đại từ Dativ: mir, dir, ihm, ihr, ihm, uns, euch, ihnen, Ihnen",
        examples: [
          { de: "Wie geht es dir? — Es geht mir gut.", vi: "Bạn khỏe không? — Tôi khỏe." },
          { de: "Kannst du mir bitte helfen?", vi: "Bạn có thể giúp tôi được không?" },
          { de: "Ich gebe ihm das Geschenk.", vi: "Tôi đưa cho anh ấy món quà." }
        ]
      },
      {
        rule: "Wortstellung: Zwei Pronomen → Akkusativ vor Dativ; Pronomen vor Nomen",
        ruleVi: "Thứ tự từ: Hai đại từ → Akkusativ trước Dativ; Đại từ trước danh từ",
        examples: [
          { de: "Ich gebe es dir. (es = Akk, dir = Dat)", vi: "Tôi đưa nó cho bạn." },
          { de: "Ich gebe dir das Buch. (dir = Pronomen vor Nomen)", vi: "Tôi đưa cho bạn cuốn sách." },
          { de: "Ich gebe es dem Kind. (es = Pronomen vor Nomen)", vi: "Tôi đưa nó cho đứa trẻ." }
        ]
      },
      {
        rule: "Häufige Wendungen mit Dativ-Pronomen: Wie geht es dir?, Das gefällt mir, Schmeckt es dir?",
        ruleVi: "Cụm từ thường dùng với đại từ Dativ: Bạn khỏe không?, Tôi thích điều đó, Bạn thấy ngon không?",
        examples: [
          { de: "Wie geht es Ihnen? — Danke, es geht mir gut.", vi: "Quý vị khỏe không? — Cảm ơn, tôi khỏe." },
          { de: "Das Kleid gefällt mir sehr.", vi: "Tôi rất thích chiếc váy đó." },
          { de: "Die Suppe schmeckt ihm nicht.", vi: "Anh ấy thấy súp không ngon." }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: "Ich helfe dich.",
        correct: "Ich helfe dir.",
        explanation: "'helfen' đi với Dativ, nên phải dùng 'dir' (Dativ) chứ không phải 'dich' (Akkusativ). Đây là lỗi cực kỳ phổ biến!"
      },
      {
        wrong: "Ich gebe dir es.",
        correct: "Ich gebe es dir.",
        explanation: "Khi có hai đại từ, Akkusativ (es) đứng trước Dativ (dir): 'Ich gebe es dir.'"
      },
      {
        wrong: "Das gefällt ich.",
        correct: "Das gefällt mir.",
        explanation: "'gefallen' đi với Dativ. 'ich' ở Dativ là 'mir'. Nominativ 'ich' không thể đứng sau 'gefallen'."
      }
    ],
    vietnameseComparison: `Tiếng Việt không thay đổi hình thức đại từ theo vai trò ngữ pháp. "Tôi" luôn là "tôi" dù là chủ ngữ, tân ngữ trực tiếp hay gián tiếp: "Tôi thấy bạn" và "Bạn thấy tôi" — "tôi" không đổi. Tiếng Đức thì khác hoàn toàn: "ich" (Nominativ) biến thành "mich" (Akkusativ) và "mir" (Dativ). Người Việt thường nhầm lẫn giữa ba dạng này vì trong tiếng mẹ đẻ không có sự phân biệt. Mẹo: Hãy học ba dạng cùng lúc như một bộ: ich-mich-mir, du-dich-dir, er-ihn-ihm. Lặp lại nhiều lần cho đến khi thành phản xạ.`,
    exercises: [
      {
        type: "fill-in",
        question: "Siehst du den Mann? — Ja, ich sehe ___.",
        questionVi: "Bạn thấy người đàn ông không? — Có, tôi thấy ___.",
        answer: "ihn",
        explanation: "'den Mann' (Akkusativ, giống đực) → đại từ Akkusativ: ihn."
      },
      {
        type: "multiple-choice",
        question: "Wie geht es ___? (du)",
        questionVi: "Bạn khỏe không?",
        options: ["du", "dich", "dir", "dein"],
        answer: "dir",
        explanation: "'Wie geht es...?' yêu cầu Dativ. 'du' ở Dativ là 'dir'."
      },
      {
        type: "fill-in",
        question: "Kannst du ___ (ich) das Buch geben?",
        questionVi: "Bạn có thể đưa cho tôi cuốn sách không?",
        answer: "mir",
        explanation: "'geben' yêu cầu Dativ cho người nhận. 'ich' ở Dativ là 'mir'."
      },
      {
        type: "multiple-choice",
        question: "Ich gebe ___ morgen. (das Buch + du)",
        questionVi: "Tôi sẽ đưa nó cho bạn ngày mai.",
        options: ["es dir", "dir es", "dich es", "es dich"],
        answer: "es dir",
        explanation: "Hai đại từ: Akkusativ (es) trước Dativ (dir) → 'es dir'."
      },
      {
        type: "fill-in",
        question: "Die Suppe schmeckt ___ (wir) sehr gut.",
        questionVi: "Chúng tôi thấy súp rất ngon.",
        answer: "uns",
        explanation: "'schmecken' đi với Dativ. 'wir' ở Dativ là 'uns'."
      }
    ]
  }
];
