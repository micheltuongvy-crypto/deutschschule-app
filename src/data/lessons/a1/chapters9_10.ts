// A1 Chapters 9-10: Arbeit & Beruf, Freizeit & Hobbys

export type ContentBlock =
  | { type: "explanation"; titleDe: string; titleVi: string; textDe: string; textVi: string }
  | { type: "dialogue"; titleDe: string; titleVi: string; lines: { speaker: string; de: string; vi: string }[] }
  | { type: "grammar"; titleDe: string; titleVi: string; rule: string; ruleVi: string; examples: { de: string; vi: string }[] }
  | { type: "vocabulary"; titleDe: string; titleVi: string; words: { de: string; vi: string; article?: string }[] }
  | { type: "practice"; titleDe: string; titleVi: string; instruction: string; instructionVi: string };

export interface Lesson {
  id: string;
  chapterId: number;
  lessonNumber: number;
  title: string;
  titleVi: string;
  type: "Einführung" | "Grammatik" | "Fertigkeit" | "Integration";
  objectives: string[];
  content: ContentBlock[];
}

export const a1Chapters9_10: Lesson[] = [
  // ============================================================
  // CHAPTER 9: Arbeit & Beruf
  // ============================================================

  // --- Chapter 9, Lesson 1: Berufe ---
  {
    id: "a1-ch9-l1",
    chapterId: 9,
    lessonNumber: 1,
    title: "Berufe",
    titleVi: "Nghề nghiệp",
    type: "Einführung",
    objectives: [
      "Nắm được từ vựng về các nghề nghiệp phổ biến",
      "Hỏi và trả lời về nghề nghiệp: 'Was sind Sie von Beruf?'",
      "Biết từ vựng về nơi làm việc và hoạt động nghề nghiệp"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Berufe in Deutschland",
        titleVi: "Nghề nghiệp ở Đức",
        textDe: "In Deutschland gibt es viele verschiedene Berufe. Manche Menschen arbeiten in einem Büro, andere in einem Krankenhaus, in einer Schule oder in einem Restaurant. Der Beruf ist ein wichtiges Thema, wenn man sich vorstellt. Man fragt: 'Was sind Sie von Beruf?' oder informell: 'Was machst du beruflich?' Bei Berufen gibt es oft eine männliche und eine weibliche Form: der Lehrer / die Lehrerin, der Arzt / die Ärztin.",
        textVi: "Ở Đức có rất nhiều nghề nghiệp khác nhau. Một số người làm việc trong văn phòng, một số khác trong bệnh viện, trong trường học hoặc trong nhà hàng. Nghề nghiệp là một chủ đề quan trọng khi giới thiệu bản thân. Người ta hỏi: 'Was sind Sie von Beruf?' (Anh/Chị làm nghề gì?) hoặc thân mật hơn: 'Was machst du beruflich?' (Bạn làm nghề gì?). Trong tiếng Đức, nghề nghiệp thường có dạng nam và dạng nữ: der Lehrer / die Lehrerin (thầy giáo / cô giáo), der Arzt / die Ärztin (bác sĩ nam / bác sĩ nữ)."
      },
      {
        type: "vocabulary",
        titleDe: "Berufe",
        titleVi: "Nghề nghiệp",
        words: [
          { de: "Lehrer / Lehrerin", vi: "giáo viên (nam / nữ)", article: "der/die" },
          { de: "Arzt / Ärztin", vi: "bác sĩ (nam / nữ)", article: "der/die" },
          { de: "Krankenpfleger / Krankenschwester", vi: "y tá (nam / nữ)", article: "der/die" },
          { de: "Ingenieur / Ingenieurin", vi: "kỹ sư (nam / nữ)", article: "der/die" },
          { de: "Koch / Köchin", vi: "đầu bếp (nam / nữ)", article: "der/die" },
          { de: "Verkäufer / Verkäuferin", vi: "nhân viên bán hàng (nam / nữ)", article: "der/die" },
          { de: "Kellner / Kellnerin", vi: "bồi bàn (nam / nữ)", article: "der/die" },
          { de: "Mechaniker / Mechanikerin", vi: "thợ cơ khí (nam / nữ)", article: "der/die" },
          { de: "Informatiker / Informatikerin", vi: "chuyên viên tin học (nam / nữ)", article: "der/die" },
          { de: "Friseur / Friseurin", vi: "thợ cắt tóc (nam / nữ)", article: "der/die" },
          { de: "Polizist / Polizistin", vi: "cảnh sát (nam / nữ)", article: "der/die" },
          { de: "Student / Studentin", vi: "sinh viên (nam / nữ)", article: "der/die" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Am Arbeitsplatz",
        titleVi: "Tại nơi làm việc",
        words: [
          { de: "Büro", vi: "văn phòng", article: "das" },
          { de: "Firma", vi: "công ty", article: "die" },
          { de: "Fabrik", vi: "nhà máy", article: "die" },
          { de: "Krankenhaus", vi: "bệnh viện", article: "das" },
          { de: "Schule", vi: "trường học", article: "die" },
          { de: "Restaurant", vi: "nhà hàng", article: "das" },
          { de: "Geschäft", vi: "cửa hàng", article: "das" },
          { de: "Werkstatt", vi: "xưởng sửa chữa", article: "die" },
          { de: "Kollege / Kollegin", vi: "đồng nghiệp (nam / nữ)", article: "der/die" },
          { de: "Chef / Chefin", vi: "sếp (nam / nữ)", article: "der/die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Was sind Sie von Beruf?",
        titleVi: "Anh/Chị làm nghề gì?",
        lines: [
          { speaker: "Herr Müller", de: "Guten Tag! Ich bin Thomas Müller. Was sind Sie von Beruf?", vi: "Xin chào! Tôi là Thomas Müller. Anh làm nghề gì?" },
          { speaker: "Minh", de: "Ich bin Informatiker. Ich arbeite bei einer Softwarefirma.", vi: "Tôi là chuyên viên tin học. Tôi làm việc ở một công ty phần mềm." },
          { speaker: "Herr Müller", de: "Interessant! Und wo arbeiten Sie?", vi: "Thú vị! Và anh làm việc ở đâu?" },
          { speaker: "Minh", de: "Ich arbeite in München. Und Sie? Was machen Sie beruflich?", vi: "Tôi làm việc ở München. Còn anh? Anh làm nghề gì?" },
          { speaker: "Herr Müller", de: "Ich bin Ingenieur. Ich arbeite bei BMW.", vi: "Tôi là kỹ sư. Tôi làm việc ở BMW." },
          { speaker: "Minh", de: "Arbeiten Sie gern dort?", vi: "Anh có thích làm việc ở đó không?" },
          { speaker: "Herr Müller", de: "Ja, sehr gern! Die Kollegen sind nett und die Arbeit ist interessant.", vi: "Có, rất thích! Đồng nghiệp dễ mến và công việc thú vị." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Über den Beruf sprechen",
        titleVi: "Nói về nghề nghiệp",
        rule: "Ich bin + Beruf (ohne Artikel!). Ich arbeite als + Beruf. Ich arbeite bei + Firma / in + Ort.",
        ruleVi: "Ich bin + nghề nghiệp (KHÔNG có mạo từ!). Ich arbeite als + nghề nghiệp (Tôi làm việc với tư cách là...). Ich arbeite bei + công ty / in + nơi chốn. Lưu ý: Trong tiếng Đức, khi nói nghề nghiệp với 'Ich bin', ta KHÔNG dùng mạo từ (khác với tiếng Anh 'I am a teacher').",
        examples: [
          { de: "Ich bin Lehrerin. (NICHT: Ich bin eine Lehrerin.)", vi: "Tôi là giáo viên. (KHÔNG nói: Ich bin eine Lehrerin.)" },
          { de: "Er arbeitet als Koch in einem Restaurant.", vi: "Anh ấy làm đầu bếp ở một nhà hàng." },
          { de: "Sie arbeitet bei Siemens.", vi: "Cô ấy làm việc ở Siemens." },
          { de: "Was sind Sie von Beruf? — Ich bin Ärztin.", vi: "Chị làm nghề gì? — Tôi là bác sĩ." }
        ]
      },
      {
        type: "practice",
        titleDe: "Erzähle über deinen Beruf",
        titleVi: "Hãy kể về nghề nghiệp của bạn",
        instruction: "Beantworte die Fragen: Was bist du von Beruf? Wo arbeitest du? Arbeitest du gern? Was machen deine Eltern beruflich? Benutze: Ich bin... / Ich arbeite bei/in... / Mein Vater/Meine Mutter ist...",
        instructionVi: "Trả lời các câu hỏi: Bạn làm nghề gì? Bạn làm việc ở đâu? Bạn có thích công việc không? Bố mẹ bạn làm nghề gì? Sử dụng: Ich bin... / Ich arbeite bei/in... / Mein Vater/Meine Mutter ist..."
      }
    ]
  },

  // --- Chapter 9, Lesson 2: Pronomen im Akkusativ und Dativ ---
  {
    id: "a1-ch9-l2",
    chapterId: 9,
    lessonNumber: 2,
    title: "Pronomen im Akkusativ und Dativ",
    titleVi: "Đại từ ở cách Akkusativ và Dativ",
    type: "Grammatik",
    objectives: [
      "Hiểu và sử dụng đại từ nhân xưng ở cách Akkusativ (mich, dich, ihn...)",
      "Hiểu và sử dụng đại từ nhân xưng ở cách Dativ (mir, dir, ihm...)",
      "Nắm được trật tự từ khi có đại từ trong câu"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Personalpronomen im Akkusativ",
        titleVi: "Đại từ nhân xưng ở cách Akkusativ",
        textDe: "Im Deutschen verändern sich die Personalpronomen je nach Fall. Im Akkusativ (wen? was?) benutzen wir: mich, dich, ihn, sie, es, uns, euch, sie/Sie. Der Akkusativ wird nach bestimmten Verben benutzt, zum Beispiel: sehen, kennen, fragen, brauchen, lieben.",
        textVi: "Trong tiếng Đức, đại từ nhân xưng thay đổi tùy theo cách (Kasus). Ở cách Akkusativ (hỏi wen? was? — ai? cái gì?), chúng ta dùng: mich (tôi), dich (bạn), ihn (anh ấy), sie (cô ấy), es (nó), uns (chúng tôi), euch (các bạn), sie/Sie (họ/Quý vị). Akkusativ được dùng sau một số động từ nhất định, ví dụ: sehen (nhìn thấy), kennen (biết), fragen (hỏi), brauchen (cần), lieben (yêu)."
      },
      {
        type: "grammar",
        titleDe: "Akkusativpronomen",
        titleVi: "Đại từ Akkusativ",
        rule: "ich → mich | du → dich | er → ihn | sie → sie | es → es | wir → uns | ihr → euch | sie/Sie → sie/Sie. Beispiel: Ich sehe dich. Er kennt mich. Wir brauchen euch.",
        ruleVi: "ich → mich | du → dich | er → ihn | sie → sie | es → es | wir → uns | ihr → euch | sie/Sie → sie/Sie. Lưu ý: Chỉ có ich → mich, du → dich, er → ihn và wir → uns, ihr → euch là thay đổi. Các đại từ sie (cô ấy), es (nó), sie (họ), Sie (Quý vị) giữ nguyên hình thức.",
        examples: [
          { de: "Siehst du mich? — Ja, ich sehe dich.", vi: "Bạn thấy tôi không? — Có, tôi thấy bạn." },
          { de: "Kennst du ihn? — Ja, ich kenne ihn gut.", vi: "Bạn biết anh ấy không? — Có, tôi biết anh ấy rõ." },
          { de: "Der Chef braucht uns morgen.", vi: "Sếp cần chúng tôi vào ngày mai." },
          { de: "Ich liebe dich.", vi: "Tôi yêu bạn (em / anh)." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Dativpronomen",
        titleVi: "Đại từ Dativ",
        rule: "ich → mir | du → dir | er → ihm | sie → ihr | es → ihm | wir → uns | ihr → euch | sie/Sie → ihnen/Ihnen. Dativ nach Verben wie: helfen, geben, gefallen, danken, gehören.",
        ruleVi: "ich → mir | du → dir | er → ihm | sie → ihr | es → ihm | wir → uns | ihr → euch | sie/Sie → ihnen/Ihnen. Dativ được dùng sau các động từ như: helfen (giúp), geben (cho), gefallen (hợp ý), danken (cảm ơn), gehören (thuộc về). Lưu ý sự khác biệt: ihr = đại từ Dativ cho 'sie' (cô ấy), nhưng ihr cũng là đại từ Nominativ cho 'các bạn'.",
        examples: [
          { de: "Kannst du mir helfen? — Ja, ich helfe dir.", vi: "Bạn có thể giúp tôi không? — Có, tôi giúp bạn." },
          { de: "Ich gebe ihm das Buch.", vi: "Tôi đưa quyển sách cho anh ấy." },
          { de: "Die Arbeit gefällt ihr.", vi: "Công việc hợp ý cô ấy." },
          { de: "Gehört das Ihnen? — Ja, das gehört mir.", vi: "Cái này thuộc về Quý vị à? — Vâng, nó thuộc về tôi." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Im Büro",
        titleVi: "Ở văn phòng",
        lines: [
          { speaker: "Lan", de: "Kannst du mir bitte helfen? Ich verstehe die E-Mail nicht.", vi: "Bạn có thể giúp mình không? Mình không hiểu email này." },
          { speaker: "Thomas", de: "Klar, ich helfe dir gern. Zeig sie mir.", vi: "Được chứ, mình giúp bạn. Cho mình xem đi." },
          { speaker: "Lan", de: "Hier, der Chef hat sie uns geschickt.", vi: "Đây, sếp đã gửi nó cho chúng ta." },
          { speaker: "Thomas", de: "Ah, er braucht uns morgen für ein Meeting. Er möchte uns etwas zeigen.", vi: "À, sếp cần chúng ta ngày mai cho một cuộc họp. Ông ấy muốn cho chúng ta xem gì đó." },
          { speaker: "Lan", de: "Okay, danke! Ohne dich verstehe ich nichts!", vi: "Được rồi, cảm ơn! Không có bạn thì mình chẳng hiểu gì hết!" },
          { speaker: "Thomas", de: "Das stimmt nicht! Dein Deutsch ist schon sehr gut.", vi: "Không đúng đâu! Tiếng Đức của bạn tốt lắm rồi." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Wortstellung mit Pronomen",
        titleVi: "Trật tự từ với đại từ",
        rule: "Bei zwei Pronomen: Akkusativ vor Dativ. Bei Nomen + Pronomen: Pronomen zuerst. Beispiel: Ich gebe es dir. Ich gebe dir das Buch.",
        ruleVi: "Khi có hai đại từ: Akkusativ đứng trước Dativ. Khi có danh từ + đại từ: đại từ đứng trước. Ví dụ: Ich gebe es dir. (Tôi đưa nó cho bạn — 'es' Akk đứng trước 'dir' Dat). Ich gebe dir das Buch. (Tôi đưa cho bạn quyển sách — đại từ 'dir' đứng trước danh từ 'das Buch').",
        examples: [
          { de: "Ich gebe dir das Buch. (Pronomen vor Nomen)", vi: "Tôi đưa cho bạn quyển sách. (Đại từ đứng trước danh từ)" },
          { de: "Ich gebe es dir. (Akkusativ-Pronomen vor Dativ-Pronomen)", vi: "Tôi đưa nó cho bạn. (Đại từ Akkusativ đứng trước đại từ Dativ)" },
          { de: "Er zeigt es uns morgen.", vi: "Anh ấy sẽ cho chúng tôi xem nó vào ngày mai." },
          { de: "Gibst du mir bitte den Stift?", vi: "Bạn đưa cho tôi cây bút được không?" }
        ]
      },
      {
        type: "practice",
        titleDe: "Ergänze die Pronomen",
        titleVi: "Điền đại từ thích hợp",
        instruction: "Ergänze die Sätze mit dem richtigen Pronomen (Akkusativ oder Dativ): 1) Ich sehe ___. (du) 2) Kannst du ___ helfen? (ich) 3) Der Lehrer fragt ___. (wir) 4) Die Blumen gefallen ___. (sie, Sg.) 5) Ich gebe ___ das Geld. (er) 6) Sie kennt ___ nicht. (ihr, Pl.)",
        instructionVi: "Điền đại từ đúng (Akkusativ hoặc Dativ) vào chỗ trống: 1) Ich sehe ___. (du → Akk) 2) Kannst du ___ helfen? (ich → Dat, vì helfen + Dativ) 3) Der Lehrer fragt ___. (wir → Akk) 4) Die Blumen gefallen ___. (sie Sg. → Dat, vì gefallen + Dativ) 5) Ich gebe ___ das Geld. (er → Dat, vì geben + Dat + Akk) 6) Sie kennt ___ nicht. (ihr Pl. → Akk)"
      }
    ]
  },

  // --- Chapter 9, Lesson 3: Bewerbung ---
  {
    id: "a1-ch9-l3",
    chapterId: 9,
    lessonNumber: 3,
    title: "Bewerbung",
    titleVi: "Ứng tuyển việc làm",
    type: "Fertigkeit",
    objectives: [
      "Đọc hiểu tin tuyển dụng đơn giản bằng tiếng Đức",
      "Viết sơ yếu lý lịch (Lebenslauf) cơ bản",
      "Nắm được các cụm từ quan trọng trong thư xin việc (Bewerbungsschreiben)"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Stellenanzeigen lesen",
        titleVi: "Đọc tin tuyển dụng",
        textDe: "Stellenanzeigen findet man in der Zeitung, im Internet (z.B. auf Indeed, StepStone) oder bei der Agentur für Arbeit. Eine Stellenanzeige hat meistens diese Teile: den Jobtitel, die Aufgaben, die Anforderungen (was man können muss), und die Kontaktinformation. Wichtige Wörter sind: Vollzeit, Teilzeit, ab sofort, Berufserfahrung, Bewerbung.",
        textVi: "Tin tuyển dụng (Stellenanzeige) có thể tìm thấy trên báo, trên mạng (ví dụ: Indeed, StepStone) hoặc ở Cơ quan Lao động (Agentur für Arbeit). Một tin tuyển dụng thường có các phần: tên vị trí (Jobtitel), nhiệm vụ (Aufgaben), yêu cầu (Anforderungen — những gì ứng viên cần biết), và thông tin liên hệ. Các từ quan trọng: Vollzeit (toàn thời gian), Teilzeit (bán thời gian), ab sofort (bắt đầu ngay), Berufserfahrung (kinh nghiệm làm việc), Bewerbung (hồ sơ ứng tuyển)."
      },
      {
        type: "vocabulary",
        titleDe: "Wörter in Stellenanzeigen",
        titleVi: "Từ vựng trong tin tuyển dụng",
        words: [
          { de: "Stellenanzeige", vi: "tin tuyển dụng", article: "die" },
          { de: "Bewerbung", vi: "hồ sơ ứng tuyển", article: "die" },
          { de: "Lebenslauf", vi: "sơ yếu lý lịch", article: "der" },
          { de: "Bewerbungsschreiben", vi: "thư xin việc", article: "das" },
          { de: "Berufserfahrung", vi: "kinh nghiệm làm việc", article: "die" },
          { de: "Ausbildung", vi: "đào tạo nghề", article: "die" },
          { de: "Vollzeit", vi: "toàn thời gian" },
          { de: "Teilzeit", vi: "bán thời gian" },
          { de: "Gehalt", vi: "lương", article: "das" },
          { de: "Vorstellungsgespräch", vi: "phỏng vấn xin việc", article: "das" },
          { de: "Anforderung", vi: "yêu cầu", article: "die" },
          { de: "Kenntnisse", vi: "kiến thức, kỹ năng", article: "die (Pl.)" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Eine Stellenanzeige",
        titleVi: "Một tin tuyển dụng",
        lines: [
          { speaker: "Anzeige", de: "Wir suchen: Kellner/Kellnerin (m/w/d)", vi: "Chúng tôi tìm: Bồi bàn (nam/nữ)" },
          { speaker: "Anzeige", de: "Restaurant 'Zum Goldenen Löwen', Berlin-Mitte", vi: "Nhà hàng 'Zum Goldenen Löwen', Berlin-Mitte" },
          { speaker: "Anzeige", de: "Ihre Aufgaben: Gäste bedienen, Bestellungen aufnehmen, Getränke servieren", vi: "Nhiệm vụ: Phục vụ khách, ghi order, phục vụ đồ uống" },
          { speaker: "Anzeige", de: "Anforderungen: Gute Deutschkenntnisse (mind. A2), freundlich, Erfahrung ist ein Plus", vi: "Yêu cầu: Tiếng Đức tốt (ít nhất A2), thân thiện, có kinh nghiệm là một lợi thế" },
          { speaker: "Anzeige", de: "Teilzeit oder Vollzeit, ab sofort. Gehalt: 12,50 € pro Stunde.", vi: "Bán thời gian hoặc toàn thời gian, bắt đầu ngay. Lương: 12,50 € / giờ." },
          { speaker: "Anzeige", de: "Bitte senden Sie Ihre Bewerbung an: jobs@goldener-loewe.de", vi: "Xin gửi hồ sơ ứng tuyển đến: jobs@goldener-loewe.de" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Der Lebenslauf",
        titleVi: "Sơ yếu lý lịch",
        rule: "Ein tabellarischer Lebenslauf hat diese Teile: Persönliche Daten (Name, Adresse, Geburtsdatum, Nationalität), Berufserfahrung (von-bis, Firma, Position), Ausbildung (Schule, Studium), Sprachkenntnisse (Deutsch A1, Englisch B2...), Besondere Kenntnisse.",
        ruleVi: "Sơ yếu lý lịch dạng bảng (tabellarischer Lebenslauf) gồm các phần: Persönliche Daten (thông tin cá nhân: tên, địa chỉ, ngày sinh, quốc tịch), Berufserfahrung (kinh nghiệm làm việc: từ-đến, công ty, vị trí), Ausbildung (đào tạo: trường, đại học), Sprachkenntnisse (trình độ ngôn ngữ: Deutsch A1, Englisch B2...), Besondere Kenntnisse (kỹ năng đặc biệt). Ở Đức, thứ tự thời gian thường là mới nhất lên đầu.",
        examples: [
          { de: "Persönliche Daten: Nguyen Van Minh, geboren am 15.03.1995 in Ho-Chi-Minh-Stadt, Vietnam", vi: "Thông tin cá nhân: Nguyen Van Minh, sinh ngày 15.03.1995 tại Thành phố Hồ Chí Minh, Việt Nam" },
          { de: "Berufserfahrung: 2020–2023 — Kellner im Restaurant Saigon, Berlin", vi: "Kinh nghiệm: 2020–2023 — Bồi bàn tại nhà hàng Saigon, Berlin" },
          { de: "Ausbildung: 2013–2017 — Studium Informatik, Universität Hanoi", vi: "Đào tạo: 2013–2017 — Ngành Tin học, Đại học Hà Nội" },
          { de: "Sprachkenntnisse: Vietnamesisch (Muttersprache), Deutsch (A1), Englisch (B1)", vi: "Ngôn ngữ: Tiếng Việt (tiếng mẹ đẻ), Tiếng Đức (A1), Tiếng Anh (B1)" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Wichtige Sätze im Bewerbungsschreiben",
        titleVi: "Các câu quan trọng trong thư xin việc",
        rule: "Anrede: Sehr geehrte Damen und Herren, / Sehr geehrter Herr..., Einleitung: Ich bewerbe mich um die Stelle als... Schluss: Über eine Einladung zu einem Vorstellungsgespräch freue ich mich. Mit freundlichen Grüßen, [Name]",
        ruleVi: "Lời chào: Sehr geehrte Damen und Herren, (Kính gửi Quý ông, Quý bà) / Sehr geehrter Herr... (Kính gửi Ông...). Mở đầu: Ich bewerbe mich um die Stelle als... (Tôi ứng tuyển vị trí...). Kết thúc: Über eine Einladung zu einem Vorstellungsgespräch freue ich mich. (Tôi rất vui được mời phỏng vấn.) Mit freundlichen Grüßen (Trân trọng), [Tên].",
        examples: [
          { de: "Sehr geehrte Damen und Herren, ich bewerbe mich um die Stelle als Kellner.", vi: "Kính gửi Quý ông, Quý bà, tôi ứng tuyển vị trí bồi bàn." },
          { de: "Ich habe zwei Jahre Erfahrung als Kellner.", vi: "Tôi có hai năm kinh nghiệm làm bồi bàn." },
          { de: "Ich spreche Vietnamesisch, Deutsch und Englisch.", vi: "Tôi nói tiếng Việt, tiếng Đức và tiếng Anh." },
          { de: "Über eine Einladung zu einem Vorstellungsgespräch freue ich mich sehr.", vi: "Tôi rất mong được mời đến phỏng vấn." }
        ]
      },
      {
        type: "practice",
        titleDe: "Schreibe deinen Lebenslauf",
        titleVi: "Viết sơ yếu lý lịch của bạn",
        instruction: "Schreibe einen einfachen tabellarischen Lebenslauf mit: Persönliche Daten, Berufserfahrung (oder Praktikum), Ausbildung, Sprachkenntnisse. Schreibe dann 3-4 Sätze für ein Bewerbungsschreiben: Ich bewerbe mich um... / Ich habe Erfahrung als... / Ich kann...",
        instructionVi: "Viết một sơ yếu lý lịch dạng bảng đơn giản gồm: Thông tin cá nhân, Kinh nghiệm (hoặc thực tập), Đào tạo, Trình độ ngôn ngữ. Sau đó viết 3-4 câu cho thư xin việc: Ich bewerbe mich um... / Ich habe Erfahrung als... / Ich kann..."
      }
    ]
  },

  // --- Chapter 9, Lesson 4: Vorstellungsgespräch ---
  {
    id: "a1-ch9-l4",
    chapterId: 9,
    lessonNumber: 4,
    title: "Vorstellungsgespräch",
    titleVi: "Phỏng vấn xin việc",
    type: "Integration",
    objectives: [
      "Hiểu các câu hỏi thường gặp trong phỏng vấn xin việc",
      "Trả lời về kinh nghiệm và kỹ năng bằng tiếng Đức",
      "Luyện tập hội thoại phỏng vấn hoàn chỉnh"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das Vorstellungsgespräch",
        titleVi: "Buổi phỏng vấn xin việc",
        textDe: "Ein Vorstellungsgespräch ist ein persönliches Gespräch zwischen dem Bewerber und dem Arbeitgeber. Man sollte pünktlich kommen, sich gut anziehen und höflich sein. Der Arbeitgeber stellt Fragen über die Person, die Erfahrung und die Motivation. Am Ende kann man auch selbst Fragen stellen, zum Beispiel über die Arbeitszeiten oder das Gehalt.",
        textVi: "Phỏng vấn xin việc (Vorstellungsgespräch) là cuộc trò chuyện trực tiếp giữa ứng viên (Bewerber) và nhà tuyển dụng (Arbeitgeber). Bạn nên đến đúng giờ, ăn mặc chỉnh tề và lịch sự. Nhà tuyển dụng sẽ hỏi về bản thân, kinh nghiệm và động lực. Cuối buổi, bạn cũng có thể đặt câu hỏi, ví dụ về giờ làm việc hoặc lương."
      },
      {
        type: "vocabulary",
        titleDe: "Wichtige Wörter für das Vorstellungsgespräch",
        titleVi: "Từ vựng quan trọng cho phỏng vấn",
        words: [
          { de: "Bewerber / Bewerberin", vi: "ứng viên (nam / nữ)", article: "der/die" },
          { de: "Arbeitgeber", vi: "nhà tuyển dụng", article: "der" },
          { de: "Stärke", vi: "điểm mạnh", article: "die" },
          { de: "Schwäche", vi: "điểm yếu", article: "die" },
          { de: "Motivation", vi: "động lực", article: "die" },
          { de: "Erfahrung", vi: "kinh nghiệm", article: "die" },
          { de: "Arbeitszeit", vi: "giờ làm việc", article: "die" },
          { de: "Probezeit", vi: "thời gian thử việc", article: "die" },
          { de: "pünktlich", vi: "đúng giờ" },
          { de: "zuverlässig", vi: "đáng tin cậy" },
          { de: "teamfähig", vi: "có khả năng làm việc nhóm" },
          { de: "fleißig", vi: "chăm chỉ" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Ein Vorstellungsgespräch",
        titleVi: "Một buổi phỏng vấn",
        lines: [
          { speaker: "Frau Schmidt", de: "Guten Tag, Herr Nguyen. Schön, dass Sie da sind. Bitte setzen Sie sich.", vi: "Xin chào, ông Nguyen. Rất vui vì ông đã đến. Mời ông ngồi." },
          { speaker: "Minh", de: "Guten Tag, Frau Schmidt. Vielen Dank für die Einladung.", vi: "Xin chào, bà Schmidt. Cảm ơn bà đã mời tôi." },
          { speaker: "Frau Schmidt", de: "Erzählen Sie mir bitte etwas über sich.", vi: "Xin ông hãy kể một chút về bản thân." },
          { speaker: "Minh", de: "Ich heiße Minh Nguyen. Ich komme aus Vietnam und lebe seit zwei Jahren in Deutschland. Ich habe in Vietnam Informatik studiert.", vi: "Tôi tên là Minh Nguyen. Tôi đến từ Việt Nam và đã sống ở Đức hai năm. Tôi đã học Tin học ở Việt Nam." },
          { speaker: "Frau Schmidt", de: "Haben Sie Berufserfahrung?", vi: "Ông có kinh nghiệm làm việc không?" },
          { speaker: "Minh", de: "Ja, ich habe ein Jahr als Kellner in einem vietnamesischen Restaurant gearbeitet.", vi: "Có, tôi đã làm bồi bàn một năm ở một nhà hàng Việt Nam." },
          { speaker: "Frau Schmidt", de: "Warum möchten Sie bei uns arbeiten?", vi: "Tại sao ông muốn làm việc ở công ty chúng tôi?" },
          { speaker: "Minh", de: "Ich finde Ihr Restaurant sehr schön. Ich arbeite gern mit Menschen und ich bin sehr fleißig und pünktlich.", vi: "Tôi thấy nhà hàng của bà rất đẹp. Tôi thích làm việc với mọi người và tôi rất chăm chỉ và đúng giờ." },
          { speaker: "Frau Schmidt", de: "Wann können Sie anfangen?", vi: "Ông có thể bắt đầu khi nào?" },
          { speaker: "Minh", de: "Ich kann ab nächster Woche anfangen.", vi: "Tôi có thể bắt đầu từ tuần tới." },
          { speaker: "Frau Schmidt", de: "Sehr gut. Haben Sie noch Fragen?", vi: "Rất tốt. Ông còn câu hỏi nào không?" },
          { speaker: "Minh", de: "Ja, wie sind die Arbeitszeiten?", vi: "Vâng, giờ làm việc như thế nào ạ?" },
          { speaker: "Frau Schmidt", de: "Sie arbeiten von 10 bis 18 Uhr, fünf Tage pro Woche.", vi: "Ông sẽ làm từ 10 đến 18 giờ, năm ngày một tuần." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Häufige Fragen und Antworten",
        titleVi: "Câu hỏi và câu trả lời thường gặp",
        rule: "Typische Fragen: Erzählen Sie über sich. / Haben Sie Erfahrung? / Warum möchten Sie hier arbeiten? / Was sind Ihre Stärken? / Wann können Sie anfangen?",
        ruleVi: "Các câu hỏi điển hình và cách trả lời: 1) Erzählen Sie über sich. → Ich heiße... Ich komme aus... Ich habe... studiert. 2) Haben Sie Erfahrung? → Ja, ich habe... gearbeitet. / Nein, aber ich lerne schnell. 3) Warum möchten Sie hier arbeiten? → Ich finde... interessant. / Ich arbeite gern... 4) Was sind Ihre Stärken? → Ich bin fleißig / pünktlich / teamfähig. 5) Wann können Sie anfangen? → Ich kann ab... anfangen.",
        examples: [
          { de: "Erzählen Sie über sich. — Ich komme aus Vietnam und lerne Deutsch seit einem Jahr.", vi: "Hãy kể về bản thân. — Tôi đến từ Việt Nam và học tiếng Đức được một năm." },
          { de: "Was sind Ihre Stärken? — Ich bin zuverlässig und teamfähig.", vi: "Điểm mạnh của ông là gì? — Tôi đáng tin cậy và có khả năng làm việc nhóm." },
          { de: "Haben Sie Erfahrung? — Nein, aber ich lerne sehr schnell.", vi: "Ông có kinh nghiệm không? — Không, nhưng tôi học rất nhanh." },
          { de: "Wann können Sie anfangen? — Ich kann sofort anfangen.", vi: "Ông có thể bắt đầu khi nào? — Tôi có thể bắt đầu ngay." }
        ]
      },
      {
        type: "practice",
        titleDe: "Dein Vorstellungsgespräch",
        titleVi: "Buổi phỏng vấn của bạn",
        instruction: "Spiele ein Vorstellungsgespräch. Beantworte diese Fragen: 1) Erzählen Sie etwas über sich. 2) Haben Sie Berufserfahrung? 3) Warum möchten Sie bei uns arbeiten? 4) Was sind Ihre Stärken? 5) Wann können Sie anfangen? 6) Haben Sie noch Fragen?",
        instructionVi: "Hãy đóng vai một buổi phỏng vấn. Trả lời các câu hỏi sau: 1) Hãy kể về bản thân. 2) Bạn có kinh nghiệm làm việc không? 3) Tại sao bạn muốn làm việc ở đây? 4) Điểm mạnh của bạn là gì? 5) Bạn có thể bắt đầu khi nào? 6) Bạn còn câu hỏi nào không?"
      },
      {
        type: "explanation",
        titleDe: "Tipps für das Vorstellungsgespräch",
        titleVi: "Mẹo cho buổi phỏng vấn",
        textDe: "1. Kommen Sie pünktlich (5-10 Minuten früher). 2. Ziehen Sie sich ordentlich an. 3. Geben Sie einen festen Händedruck. 4. Sprechen Sie langsam und deutlich. 5. Sagen Sie 'Sie' zum Arbeitgeber. 6. Lächeln Sie und sein Sie freundlich. 7. Stellen Sie am Ende eigene Fragen.",
        textVi: "1. Hãy đến đúng giờ (sớm 5-10 phút). 2. Ăn mặc chỉnh tề. 3. Bắt tay chắc chắn. 4. Nói chậm và rõ ràng. 5. Xưng hô 'Sie' (lịch sự) với nhà tuyển dụng. 6. Mỉm cười và thân thiện. 7. Cuối buổi hãy đặt câu hỏi cho nhà tuyển dụng (ví dụ: về giờ làm, về đội nhóm, về nhiệm vụ cụ thể). Điều này cho thấy bạn quan tâm đến công việc."
      }
    ]
  },

  // ============================================================
  // CHAPTER 10: Freizeit & Hobbys
  // ============================================================

  // --- Chapter 10, Lesson 1: Hobbys ---
  {
    id: "a1-ch10-l1",
    chapterId: 10,
    lessonNumber: 1,
    title: "Hobbys",
    titleVi: "Sở thích",
    type: "Einführung",
    objectives: [
      "Nắm được từ vựng về các sở thích phổ biến",
      "Hỏi và trả lời: 'Was machst du gern?'",
      "Sử dụng gern / lieber / am liebsten để so sánh sở thích"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Freizeit und Hobbys",
        titleVi: "Thời gian rảnh và sở thích",
        textDe: "In der Freizeit machen die Menschen verschiedene Dinge. Manche treiben Sport, andere lesen Bücher oder hören Musik. In Deutschland sind Wandern, Fahrradfahren und Fußball sehr beliebt. Man fragt: 'Was machst du in deiner Freizeit?' oder 'Was sind deine Hobbys?' Mit 'gern' sagt man, was man mag. Mit 'nicht gern' sagt man, was man nicht mag.",
        textVi: "Trong thời gian rảnh, mọi người làm nhiều điều khác nhau. Một số người chơi thể thao, một số khác đọc sách hoặc nghe nhạc. Ở Đức, đi bộ đường dài (Wandern), đi xe đạp (Fahrradfahren) và bóng đá (Fußball) rất phổ biến. Người ta hỏi: 'Was machst du in deiner Freizeit?' (Bạn làm gì trong thời gian rảnh?) hoặc 'Was sind deine Hobbys?' (Sở thích của bạn là gì?). Dùng 'gern' để nói điều bạn thích. Dùng 'nicht gern' để nói điều bạn không thích."
      },
      {
        type: "vocabulary",
        titleDe: "Hobbys und Freizeitaktivitäten",
        titleVi: "Sở thích và hoạt động giải trí",
        words: [
          { de: "lesen", vi: "đọc sách" },
          { de: "Musik hören", vi: "nghe nhạc" },
          { de: "kochen", vi: "nấu ăn" },
          { de: "schwimmen", vi: "bơi" },
          { de: "Fußball spielen", vi: "chơi bóng đá" },
          { de: "Fahrrad fahren", vi: "đi xe đạp" },
          { de: "wandern", vi: "đi bộ đường dài" },
          { de: "tanzen", vi: "nhảy / khiêu vũ" },
          { de: "fotografieren", vi: "chụp ảnh" },
          { de: "malen", vi: "vẽ" },
          { de: "Gitarre spielen", vi: "chơi guitar" },
          { de: "fernsehen", vi: "xem tivi" },
          { de: "ins Kino gehen", vi: "đi xem phim" },
          { de: "Freunde treffen", vi: "gặp bạn bè" },
          { de: "reisen", vi: "du lịch" },
          { de: "joggen", vi: "chạy bộ" }
        ]
      },
      {
        type: "grammar",
        titleDe: "gern — lieber — am liebsten",
        titleVi: "gern — lieber — am liebsten",
        rule: "gern = gerne (man mag etwas). lieber (man mag etwas mehr, Komparativ). am liebsten (man mag etwas am meisten, Superlativ). Position: nach dem Verb. Ich spiele gern Fußball. Ich schwimme lieber. Am liebsten koche ich.",
        ruleVi: "gern = gerne (thích làm gì đó). lieber (thích hơn — so sánh hơn). am liebsten (thích nhất — so sánh nhất). Vị trí: sau động từ. Ví dụ: Ich spiele gern Fußball. (Tôi thích chơi bóng đá.) Ich schwimme lieber. (Tôi thích bơi hơn.) Am liebsten koche ich. (Tôi thích nhất là nấu ăn.) Lưu ý: 'gern' đứng sau động từ chính, không phải sau chủ ngữ.",
        examples: [
          { de: "Ich lese gern Bücher.", vi: "Tôi thích đọc sách." },
          { de: "Ich höre lieber Musik.", vi: "Tôi thích nghe nhạc hơn." },
          { de: "Am liebsten spiele ich Gitarre.", vi: "Tôi thích nhất là chơi guitar." },
          { de: "Er kocht nicht gern.", vi: "Anh ấy không thích nấu ăn." },
          { de: "Was machst du am liebsten?", vi: "Bạn thích làm gì nhất?" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Was machst du gern?",
        titleVi: "Bạn thích làm gì?",
        lines: [
          { speaker: "Lan", de: "Was machst du in deiner Freizeit, Thomas?", vi: "Bạn làm gì trong thời gian rảnh, Thomas?" },
          { speaker: "Thomas", de: "Ich spiele gern Fußball und ich fahre gern Fahrrad. Und du?", vi: "Tôi thích chơi bóng đá và đi xe đạp. Còn bạn?" },
          { speaker: "Lan", de: "Ich koche gern vietnamesisch. Und ich lese gern.", vi: "Tôi thích nấu ăn Việt Nam. Và tôi thích đọc sách." },
          { speaker: "Thomas", de: "Kochst du lieber oder liest du lieber?", vi: "Bạn thích nấu ăn hơn hay đọc sách hơn?" },
          { speaker: "Lan", de: "Ich koche lieber. Aber am liebsten treffe ich Freunde.", vi: "Tôi thích nấu ăn hơn. Nhưng tôi thích nhất là gặp bạn bè." },
          { speaker: "Thomas", de: "Das finde ich auch toll. Wir können zusammen kochen!", vi: "Tôi cũng thấy điều đó tuyệt. Chúng ta có thể nấu ăn cùng nhau!" },
          { speaker: "Lan", de: "Gute Idee! Magst du vietnamesisches Essen?", vi: "Ý hay! Bạn có thích đồ ăn Việt Nam không?" },
          { speaker: "Thomas", de: "Ja, sehr! Phở ist mein Lieblingsessen.", vi: "Có, rất thích! Phở là món ăn yêu thích của tôi." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Über Hobbys sprechen — Satzstrukturen",
        titleVi: "Nói về sở thích — Cấu trúc câu",
        rule: "Mein Hobby ist + Nomen. Ich + Verb + gern. In meiner Freizeit + Verb + ich... Ich interessiere mich für + Akkusativ.",
        ruleVi: "Các cách nói về sở thích: 1) Mein Hobby ist + danh từ (Mein Hobby ist Kochen. — Sở thích của tôi là nấu ăn.) 2) Ich + động từ + gern (Ich tanze gern. — Tôi thích nhảy.) 3) In meiner Freizeit + động từ + ich... (In meiner Freizeit lese ich. — Trong thời gian rảnh tôi đọc sách.) 4) Ich interessiere mich für + Akk (Ich interessiere mich für Musik. — Tôi quan tâm đến âm nhạc.)",
        examples: [
          { de: "Mein Hobby ist Fotografieren.", vi: "Sở thích của tôi là chụp ảnh." },
          { de: "Ich jogge gern am Morgen.", vi: "Tôi thích chạy bộ vào buổi sáng." },
          { de: "In meiner Freizeit gehe ich oft ins Kino.", vi: "Trong thời gian rảnh tôi thường đi xem phim." },
          { de: "Ich interessiere mich für Fußball.", vi: "Tôi quan tâm đến bóng đá." }
        ]
      },
      {
        type: "practice",
        titleDe: "Erzähle über deine Hobbys",
        titleVi: "Kể về sở thích của bạn",
        instruction: "Beantworte die Fragen: 1) Was machst du in deiner Freizeit? 2) Was machst du gern / nicht gern? 3) Was machst du lieber: Sport oder Musik? 4) Was machst du am liebsten? Schreibe mindestens 5 Sätze.",
        instructionVi: "Trả lời các câu hỏi: 1) Bạn làm gì trong thời gian rảnh? 2) Bạn thích / không thích làm gì? 3) Bạn thích thể thao hơn hay âm nhạc? 4) Bạn thích nhất làm gì? Viết ít nhất 5 câu."
      }
    ]
  },

  // --- Chapter 10, Lesson 2: Wiederholung & Vertiefung ---
  {
    id: "a1-ch10-l2",
    chapterId: 10,
    lessonNumber: 2,
    title: "Wiederholung & Vertiefung",
    titleVi: "Ôn tập và Củng cố",
    type: "Grammatik",
    objectives: [
      "Ôn tập toàn bộ ngữ pháp A1 đã học",
      "Nhận diện và sửa các lỗi thường gặp của người Việt học tiếng Đức",
      "Củng cố kiến thức thông qua bài tập tổng hợp"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Überblick: A1-Grammatik",
        titleVi: "Tổng quan: Ngữ pháp A1",
        textDe: "In A1 haben wir viele wichtige Grammatikthemen gelernt: Verben und Konjugation (regelmäßig, unregelmäßig, trennbar, Modalverben), Nomen mit Artikeln (der, die, das), Kasus (Nominativ, Akkusativ, Dativ), Präpositionen, Satzstruktur (Hauptsatz, W-Fragen, Ja/Nein-Fragen), Negation (nicht/kein), Possessivpronomen, und Personalpronomen. Jetzt wiederholen wir alles!",
        textVi: "Trong A1, chúng ta đã học nhiều chủ đề ngữ pháp quan trọng: Động từ và chia động từ (quy tắc, bất quy tắc, tách được, động từ khuyết thiếu), Danh từ với mạo từ (der, die, das), Các cách (Nominativ, Akkusativ, Dativ), Giới từ, Cấu trúc câu (câu chính, câu hỏi W, câu hỏi Có/Không), Phủ định (nicht/kein), Đại từ sở hữu, và Đại từ nhân xưng. Bây giờ chúng ta ôn tập tất cả!"
      },
      {
        type: "grammar",
        titleDe: "Wiederholung: Verbkonjugation",
        titleVi: "Ôn tập: Chia động từ",
        rule: "Regelmäßig: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. Unregelmäßig (z.B. fahren, sprechen, lesen): Vokalwechsel bei du und er/sie/es. Trennbare Verben: Präfix am Satzende (Ich stehe um 7 Uhr auf). Modalverben: können, müssen, wollen, dürfen, sollen, möchten.",
        ruleVi: "Động từ quy tắc: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. Động từ bất quy tắc (vd: fahren, sprechen, lesen): đổi nguyên âm ở du và er/sie/es (du fährst, er spricht, sie liest). Động từ tách được: tiền tố đặt cuối câu (Ich stehe um 7 Uhr auf). Động từ khuyết thiếu: können (có thể), müssen (phải), wollen (muốn), dürfen (được phép), sollen (nên), möchten (muốn — lịch sự).",
        examples: [
          { de: "machen: ich mache, du machst, er macht", vi: "machen (làm): ich mache, du machst, er macht" },
          { de: "fahren: ich fahre, du fährst, er fährt", vi: "fahren (lái xe): ich fahre, du fährst, er fährt" },
          { de: "Ich muss morgen früh aufstehen.", vi: "Tôi phải dậy sớm ngày mai." },
          { de: "Kannst du mir helfen?", vi: "Bạn có thể giúp tôi không?" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Wiederholung: Artikel und Kasus",
        titleVi: "Ôn tập: Mạo từ và các cách",
        rule: "Nominativ (wer/was?): der/die/das/die — ein/eine/ein. Akkusativ (wen/was?): den/die/das/die — einen/eine/ein. Dativ (wem?): dem/der/dem/den — einem/einer/einem. Kein: wie ein, aber mit Negation: kein/keine/kein → keinen/keine/kein → keinem/keiner/keinem.",
        ruleVi: "Nominativ (ai/cái gì? — chủ ngữ): der/die/das/die — ein/eine/ein. Akkusativ (ai/cái gì? — tân ngữ trực tiếp): den/die/das/die — einen/eine/ein. Dativ (cho ai? — tân ngữ gián tiếp): dem/der/dem/den — einem/einer/einem. Lưu ý: Chỉ có giống đực (maskulin) thay đổi từ Nominativ sang Akkusativ (der → den, ein → einen). Giống cái và giống trung giữ nguyên.",
        examples: [
          { de: "Nominativ: Der Mann ist nett. Ein Kind spielt.", vi: "Nominativ: Người đàn ông dễ mến. Một đứa trẻ chơi." },
          { de: "Akkusativ: Ich sehe den Mann. Ich kaufe einen Tisch.", vi: "Akkusativ: Tôi thấy người đàn ông. Tôi mua một cái bàn." },
          { de: "Dativ: Ich gebe dem Kind das Buch.", vi: "Dativ: Tôi đưa quyển sách cho đứa trẻ." },
          { de: "Ich habe keinen Hund. (Akk., maskulin)", vi: "Tôi không có con chó. (Akk., giống đực)" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Häufige Fehler von Vietnamesen",
        titleVi: "Lỗi thường gặp của người Việt",
        rule: "1) Artikel vergessen (FALSCH: Ich kaufe Buch. RICHTIG: Ich kaufe ein Buch.) 2) Verbposition falsch (FALSCH: Ich morgen gehe. RICHTIG: Ich gehe morgen.) 3) Kein vs. nicht verwechseln 4) Adjektivendung vergessen 5) Trennbare Verben: Präfix vergessen",
        ruleVi: "1) Quên mạo từ: SAI: Ich kaufe Buch. ĐÚNG: Ich kaufe ein Buch. (Tiếng Việt không có mạo từ nên hay quên!) 2) Sai vị trí động từ: SAI: Ich morgen gehe. ĐÚNG: Ich gehe morgen. (Động từ luôn ở vị trí 2 trong câu chính!) 3) Nhầm kein và nicht: 'kein' dùng thay 'ein' trong câu phủ định (Ich habe ein Auto → Ich habe kein Auto). 'nicht' dùng cho mọi trường hợp khác. 4) Quên đuôi tính từ khi đứng trước danh từ. 5) Quên tách tiền tố của động từ tách được: SAI: Ich aufstehe um 7 Uhr. ĐÚNG: Ich stehe um 7 Uhr auf.",
        examples: [
          { de: "FALSCH: Ich habe nicht Auto. → RICHTIG: Ich habe kein Auto.", vi: "SAI: Ich habe nicht Auto. → ĐÚNG: Ich habe kein Auto." },
          { de: "FALSCH: Ich gestern bin gegangen. → RICHTIG: Ich bin gestern gegangen.", vi: "SAI: Ich gestern bin gegangen. → ĐÚNG: Ich bin gestern gegangen." },
          { de: "FALSCH: Das ist gut Buch. → RICHTIG: Das ist ein gutes Buch.", vi: "SAI: Das ist gut Buch. → ĐÚNG: Das ist ein gutes Buch." },
          { de: "FALSCH: Ich aufstehe um 7. → RICHTIG: Ich stehe um 7 Uhr auf.", vi: "SAI: Ich aufstehe um 7. → ĐÚNG: Ich stehe um 7 Uhr auf." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Wiederholung: Satzstruktur",
        titleVi: "Ôn tập: Cấu trúc câu",
        rule: "Hauptsatz: Subjekt + Verb (Position 2) + ... Zeitangabe auf Position 1: Morgen gehe ich ins Kino. W-Frage: W-Wort + Verb + Subjekt + ...? Ja/Nein-Frage: Verb + Subjekt + ...? Mit Modalverb: Subjekt + Modalverb + ... + Infinitiv.",
        ruleVi: "Câu chính: Chủ ngữ + Động từ (vị trí 2) + ... Khi thời gian đứng đầu câu: Morgen gehe ich ins Kino. (Ngày mai tôi đi xem phim — động từ vẫn ở vị trí 2, chủ ngữ lùi về sau). Câu hỏi W: Từ hỏi W + Động từ + Chủ ngữ? Câu hỏi Có/Không: Động từ + Chủ ngữ? Với động từ khuyết thiếu: Chủ ngữ + Modalverb + ... + Động từ nguyên mẫu (cuối câu).",
        examples: [
          { de: "Ich lerne jeden Tag Deutsch. (Hauptsatz)", vi: "Tôi học tiếng Đức mỗi ngày. (Câu chính)" },
          { de: "Morgen gehe ich zum Arzt. (Zeit auf Position 1)", vi: "Ngày mai tôi đi bác sĩ. (Thời gian ở vị trí 1)" },
          { de: "Wo wohnst du? (W-Frage)", vi: "Bạn ở đâu? (Câu hỏi W)" },
          { de: "Ich muss morgen arbeiten. (Modalverb + Infinitiv)", vi: "Tôi phải làm việc ngày mai. (Modalverb + động từ nguyên mẫu)" }
        ]
      },
      {
        type: "practice",
        titleDe: "Fehler korrigieren",
        titleVi: "Sửa lỗi sai",
        instruction: "Finde und korrigiere die Fehler in diesen Sätzen: 1) Ich bin Lehrer in Schule. 2) Morgen ich gehe einkaufen. 3) Er nicht kann schwimmen. 4) Ich habe nicht Bruder. 5) Sie aufsteht um 6 Uhr. 6) Wir essen gern Phở und trinken gern Kaffee vietnamesisch. 7) Gehst du morgen in Kino?",
        instructionVi: "Tìm và sửa lỗi trong các câu sau: 1) Ich bin Lehrer in Schule. (thiếu mạo từ cho Schule) 2) Morgen ich gehe einkaufen. (sai vị trí động từ) 3) Er nicht kann schwimmen. (sai vị trí nicht) 4) Ich habe nicht Bruder. (nên dùng kein) 5) Sie aufsteht um 6 Uhr. (động từ tách được) 6) Wir essen gern Phở und trinken gern Kaffee vietnamesisch. (sai vị trí tính từ) 7) Gehst du morgen in Kino? (thiếu mạo từ)"
      }
    ]
  },

  // --- Chapter 10, Lesson 3: Einladung & Verabredung ---
  {
    id: "a1-ch10-l3",
    chapterId: 10,
    lessonNumber: 3,
    title: "Einladung & Verabredung",
    titleVi: "Lời mời và Hẹn gặp",
    type: "Fertigkeit",
    objectives: [
      "Mời ai đó bằng tiếng Đức",
      "Chấp nhận hoặc từ chối lời mời một cách lịch sự",
      "Lên kế hoạch và hẹn gặp bạn bè"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Jemanden einladen",
        titleVi: "Mời ai đó",
        textDe: "In Deutschland verabredet man sich oft per Telefon, SMS oder WhatsApp. Man kann Freunde zum Essen, ins Kino, in ein Café oder zu einer Party einladen. Wenn man eine Einladung bekommt, kann man zusagen (ja sagen) oder absagen (nein sagen). Wenn man absagt, sollte man einen Grund nennen und höflich sein.",
        textVi: "Ở Đức, người ta thường hẹn gặp qua điện thoại, tin nhắn hoặc WhatsApp. Bạn có thể mời bạn bè đi ăn, đi xem phim, đi café hoặc đến tiệc. Khi nhận được lời mời, bạn có thể nhận lời (zusagen) hoặc từ chối (absagen). Khi từ chối, bạn nên nêu lý do và lịch sự."
      },
      {
        type: "vocabulary",
        titleDe: "Einladung und Verabredung",
        titleVi: "Mời và Hẹn gặp",
        words: [
          { de: "einladen", vi: "mời" },
          { de: "Einladung", vi: "lời mời", article: "die" },
          { de: "sich verabreden", vi: "hẹn gặp" },
          { de: "Verabredung", vi: "cuộc hẹn", article: "die" },
          { de: "zusagen", vi: "nhận lời" },
          { de: "absagen", vi: "từ chối" },
          { de: "Vorschlag", vi: "đề xuất", article: "der" },
          { de: "sich treffen", vi: "gặp nhau" },
          { de: "Lust haben", vi: "có hứng thú, muốn" },
          { de: "leider", vi: "tiếc là" },
          { de: "vielleicht", vi: "có lẽ" },
          { de: "zusammen", vi: "cùng nhau" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Jemanden einladen und antworten",
        titleVi: "Mời ai đó và trả lời",
        rule: "Einladen: Hast du Lust, ...? / Möchtest du ...? / Wollen wir ...? / Ich lade dich ein. Zusagen: Ja, gern! / Das ist eine tolle Idee! / Ja, ich komme gern. Absagen: Leider kann ich nicht. / Tut mir leid, ich habe keine Zeit. / Schade, aber ich muss...",
        ruleVi: "Mời: Hast du Lust, ...? (Bạn có muốn...?) / Möchtest du ...? (Bạn có muốn...?) / Wollen wir ...? (Chúng ta... nhé?) / Ich lade dich ein. (Tôi mời bạn.) Nhận lời: Ja, gern! (Có, sẵn lòng!) / Das ist eine tolle Idee! (Ý hay!) / Ja, ich komme gern. (Có, tôi đến.) Từ chối: Leider kann ich nicht. (Tiếc là tôi không thể.) / Tut mir leid, ich habe keine Zeit. (Xin lỗi, tôi không có thời gian.) / Schade, aber ich muss... (Tiếc quá, nhưng tôi phải...)",
        examples: [
          { de: "Hast du am Samstag Lust auf Kino?", vi: "Thứ Bảy bạn có muốn đi xem phim không?" },
          { de: "Möchtest du morgen zusammen kochen?", vi: "Ngày mai bạn có muốn nấu ăn cùng nhau không?" },
          { de: "Ja, gern! Wann treffen wir uns?", vi: "Có, sẵn lòng! Mấy giờ mình gặp nhau?" },
          { de: "Tut mir leid, ich muss am Samstag arbeiten.", vi: "Xin lỗi, thứ Bảy tôi phải làm việc." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Wollen wir ins Kino gehen?",
        titleVi: "Mình đi xem phim nhé?",
        lines: [
          { speaker: "Lan", de: "Hallo Thomas! Hast du am Samstag Zeit?", vi: "Chào Thomas! Thứ Bảy bạn có rảnh không?" },
          { speaker: "Thomas", de: "Hm, ich glaube ja. Warum?", vi: "Hm, chắc có. Sao vậy?" },
          { speaker: "Lan", de: "Ich möchte ins Kino gehen. Hast du Lust?", vi: "Mình muốn đi xem phim. Bạn có muốn đi không?" },
          { speaker: "Thomas", de: "Ja, gern! Welchen Film?", vi: "Có, sẵn lòng! Phim gì vậy?" },
          { speaker: "Lan", de: "Es gibt einen neuen deutschen Film. Er soll sehr lustig sein.", vi: "Có một phim Đức mới. Nghe nói rất hài." },
          { speaker: "Thomas", de: "Super! Wann fängt der Film an?", vi: "Tuyệt! Phim bắt đầu lúc mấy giờ?" },
          { speaker: "Lan", de: "Um 19 Uhr. Wollen wir uns um 18:30 Uhr vor dem Kino treffen?", vi: "Lúc 19 giờ. Mình gặp nhau trước rạp lúc 18:30 nhé?" },
          { speaker: "Thomas", de: "Perfekt! Bis Samstag dann.", vi: "Tuyệt! Vậy hẹn thứ Bảy." },
          { speaker: "Lan", de: "Bis dann! Ich freue mich.", vi: "Hẹn gặp! Mình rất mong." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Absage — Leider kann ich nicht",
        titleVi: "Từ chối — Tiếc là tôi không thể",
        lines: [
          { speaker: "Minh", de: "Hallo Lan! Wollen wir am Freitag zusammen essen gehen?", vi: "Chào Lan! Thứ Sáu mình đi ăn cùng nhau nhé?" },
          { speaker: "Lan", de: "Oh, das klingt schön! Aber leider kann ich am Freitag nicht.", vi: "Ồ, nghe hay đấy! Nhưng tiếc là thứ Sáu mình không được." },
          { speaker: "Minh", de: "Schade! Warum nicht?", vi: "Tiếc quá! Sao vậy?" },
          { speaker: "Lan", de: "Ich muss am Freitag arbeiten. Geht es am Samstag?", vi: "Thứ Sáu mình phải làm việc. Thứ Bảy được không?" },
          { speaker: "Minh", de: "Am Samstag habe ich leider schon einen Termin. Und Sonntag?", vi: "Thứ Bảy tiếc là mình đã có hẹn rồi. Còn Chủ Nhật?" },
          { speaker: "Lan", de: "Sonntag passt mir gut! Um wie viel Uhr?", vi: "Chủ Nhật hợp với mình! Mấy giờ?" },
          { speaker: "Minh", de: "Um 12 Uhr? Wir können vietnamesisch essen.", vi: "12 giờ nhé? Mình có thể đi ăn Việt Nam." },
          { speaker: "Lan", de: "Perfekt! Bis Sonntag!", vi: "Tuyệt vời! Hẹn Chủ Nhật!" }
        ]
      },
      {
        type: "practice",
        titleDe: "Schreibe eine Einladung",
        titleVi: "Viết một lời mời",
        instruction: "Schreibe eine WhatsApp-Nachricht an deinen Freund / deine Freundin. Lade ihn/sie ein: 1) zum Essen, 2) ins Kino, oder 3) zum Sport. Schreibe auch eine Antwort: einmal Zusage und einmal Absage mit Grund. Benutze: Hast du Lust...? / Wollen wir...? / Leider kann ich nicht, weil... / Ja, gern! Wann...?",
        instructionVi: "Viết tin nhắn WhatsApp cho bạn. Mời bạn ấy: 1) đi ăn, 2) đi xem phim, hoặc 3) đi chơi thể thao. Viết cả câu trả lời: một lần nhận lời và một lần từ chối có lý do. Sử dụng: Hast du Lust...? / Wollen wir...? / Leider kann ich nicht, weil... / Ja, gern! Wann...?"
      }
    ]
  },

  // --- Chapter 10, Lesson 4: Prüfungsvorbereitung ---
  {
    id: "a1-ch10-l4",
    chapterId: 10,
    lessonNumber: 4,
    title: "Prüfungsvorbereitung",
    titleVi: "Chuẩn bị cho kỳ thi",
    type: "Integration",
    objectives: [
      "Hiểu cấu trúc bài thi Goethe-Zertifikat A1",
      "Nắm được mẹo và chiến lược làm bài",
      "Luyện tập với các dạng bài thi thực tế"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Die Goethe-Prüfung A1: Start Deutsch 1",
        titleVi: "Kỳ thi Goethe A1: Start Deutsch 1",
        textDe: "Die Prüfung 'Goethe-Zertifikat A1: Start Deutsch 1' hat vier Teile: Hören (ca. 20 Minuten), Lesen (ca. 25 Minuten), Schreiben (ca. 20 Minuten) und Sprechen (ca. 15 Minuten). Zum Bestehen braucht man 60 von 100 Punkten. Die schriftliche Prüfung (Hören, Lesen, Schreiben) ist 65 Minuten lang. Die mündliche Prüfung (Sprechen) ist eine Gruppenprüfung mit 2-3 Teilnehmern.",
        textVi: "Kỳ thi 'Goethe-Zertifikat A1: Start Deutsch 1' có 4 phần: Nghe (khoảng 20 phút), Đọc (khoảng 25 phút), Viết (khoảng 20 phút) và Nói (khoảng 15 phút). Để đạt, bạn cần 60/100 điểm. Phần thi viết (Nghe, Đọc, Viết) kéo dài 65 phút. Phần thi nói là thi nhóm với 2-3 thí sinh."
      },
      {
        type: "grammar",
        titleDe: "Teil 1: Hören",
        titleVi: "Phần 1: Nghe",
        rule: "3 Teile: 1) Kurze Alltagsgespräche hören und Fragen beantworten (richtig/falsch oder Multiple Choice). 2) Durchsagen (Ansagen am Bahnhof, im Supermarkt...) hören. 3) Persönliche Nachrichten auf dem Anrufbeantworter hören. Man hört jeden Text zweimal.",
        ruleVi: "3 phần nhỏ: 1) Nghe các đoạn hội thoại ngắn hằng ngày và trả lời câu hỏi (đúng/sai hoặc trắc nghiệm). 2) Nghe thông báo (ở nhà ga, siêu thị...). 3) Nghe tin nhắn thoại cá nhân trên máy trả lời tự động. Mỗi đoạn được nghe 2 lần. Mẹo: Đọc câu hỏi TRƯỚC khi nghe. Tập trung vào từ khóa. Không cần hiểu mọi từ!",
        examples: [
          { de: "Typische Frage: Wann kommt der Zug? — a) um 9:00 b) um 9:15 c) um 9:30", vi: "Câu hỏi điển hình: Tàu đến lúc mấy giờ? — a) 9:00 b) 9:15 c) 9:30" },
          { de: "Richtig oder falsch: Der Supermarkt hat am Sonntag geöffnet.", vi: "Đúng hay sai: Siêu thị mở cửa vào Chủ Nhật." },
          { de: "Tipp: Lesen Sie die Fragen vor dem Hören!", vi: "Mẹo: Đọc câu hỏi trước khi nghe!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Teil 2: Lesen",
        titleVi: "Phần 2: Đọc",
        rule: "3 Teile: 1) Kurze Texte lesen (Schilder, Anzeigen, E-Mails) und Fragen beantworten. 2) Einen kurzen Text lesen und richtig/falsch-Aufgaben lösen. 3) Informationstafeln, Fahrpläne oder Formulare lesen.",
        ruleVi: "3 phần nhỏ: 1) Đọc các văn bản ngắn (biển báo, quảng cáo, email) và trả lời câu hỏi. 2) Đọc một đoạn văn ngắn và làm bài đúng/sai. 3) Đọc bảng thông tin, lịch trình hoặc biểu mẫu. Mẹo: Nhìn tổng quát trước, sau đó tìm thông tin cụ thể. Không cần hiểu từng từ — tìm từ khóa liên quan đến câu hỏi!",
        examples: [
          { de: "Beispiel: Lesen Sie das Schild. — 'Bibliothek: Mo–Fr 9–18 Uhr, Sa 10–14 Uhr, So geschlossen.'", vi: "Ví dụ: Đọc biển báo. — 'Thư viện: Thứ 2–6: 9–18 giờ, Thứ 7: 10–14 giờ, CN: đóng cửa.'" },
          { de: "Frage: Kann man am Sonntag in die Bibliothek gehen? — Nein.", vi: "Câu hỏi: Chủ Nhật có đi thư viện được không? — Không." },
          { de: "Tipp: Suchen Sie Schlüsselwörter im Text!", vi: "Mẹo: Tìm từ khóa trong văn bản!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Teil 3: Schreiben",
        titleVi: "Phần 3: Viết",
        rule: "2 Teile: 1) Ein Formular ausfüllen (Name, Adresse, Geburtsdatum...). 2) Eine kurze Nachricht schreiben (E-Mail, SMS, Notiz — ca. 30 Wörter). Themen: sich entschuldigen, um Hilfe bitten, einen Termin vereinbaren, eine Einladung beantworten.",
        ruleVi: "2 phần nhỏ: 1) Điền biểu mẫu (tên, địa chỉ, ngày sinh...). 2) Viết một tin nhắn ngắn (email, SMS, ghi chú — khoảng 30 từ). Chủ đề: xin lỗi, nhờ giúp đỡ, hẹn lịch, trả lời lời mời. Mẹo: Viết đơn giản! Dùng câu ngắn. Kiểm tra: Viết hoa danh từ? Động từ đúng vị trí? Đủ 30 từ?",
        examples: [
          { de: "Aufgabe: Sie können am Dienstag nicht zum Deutschkurs kommen. Schreiben Sie an Ihre Lehrerin.", vi: "Đề bài: Bạn không thể đến lớp tiếng Đức vào thứ Ba. Viết cho cô giáo." },
          { de: "Beispiel: Liebe Frau Müller, ich kann am Dienstag leider nicht zum Deutschkurs kommen. Ich bin krank. Kann ich die Hausaufgaben per E-Mail bekommen? Vielen Dank! Mit freundlichen Grüßen, Lan", vi: "Ví dụ: Cô Müller thân mến, tiếc là thứ Ba em không thể đến lớp tiếng Đức. Em bị bệnh. Em có thể nhận bài tập qua email không ạ? Cảm ơn cô nhiều! Trân trọng, Lan" },
          { de: "Tipp: Schreiben Sie einfache Sätze. Kontrollieren Sie die Großschreibung!", vi: "Mẹo: Viết câu đơn giản. Kiểm tra viết hoa danh từ!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Teil 4: Sprechen",
        titleVi: "Phần 4: Nói",
        rule: "3 Teile: 1) Sich vorstellen (Name, Alter, Land, Wohnort, Sprachen, Beruf/Studium, Hobbys). 2) Alltag: Bitten und Reagieren (z.B. 'Können Sie mir bitte helfen?', 'Wie spät ist es?'). 3) Bitten formulieren und auf Bitten reagieren.",
        ruleVi: "3 phần nhỏ: 1) Tự giới thiệu (tên, tuổi, quê, nơi ở, ngôn ngữ, nghề nghiệp/học tập, sở thích). 2) Đời thường: Nhờ vả và phản hồi (vd: 'Bạn giúp tôi được không?', 'Mấy giờ rồi?'). 3) Đặt câu hỏi nhờ vả và phản hồi lại. Mẹo: Nói rõ ràng, chậm là được. Không cần hoàn hảo! Thi nhóm 2-3 người. Luyện tập tự giới thiệu thuần thục vì phần 1 luôn có.",
        examples: [
          { de: "Teil 1: Ich heiße Lan Nguyen. Ich komme aus Vietnam. Ich wohne in Berlin. Ich bin 25 Jahre alt. Ich spreche Vietnamesisch, Deutsch und Englisch. Ich bin Studentin. Mein Hobby ist Kochen.", vi: "Phần 1: Tôi tên là Lan Nguyen. Tôi đến từ Việt Nam. Tôi sống ở Berlin. Tôi 25 tuổi. Tôi nói tiếng Việt, tiếng Đức và tiếng Anh. Tôi là sinh viên. Sở thích của tôi là nấu ăn." },
          { de: "Teil 2 — Karte: 'Mittagessen'. Sie fragen: Wollen wir zusammen Mittag essen?", vi: "Phần 2 — Thẻ: 'Bữa trưa'. Bạn hỏi: Mình đi ăn trưa cùng nhau nhé?" },
          { de: "Teil 3: Können Sie das bitte wiederholen? / Können Sie mir bitte helfen?", vi: "Phần 3: Bạn có thể nhắc lại được không? / Bạn có thể giúp tôi không?" }
        ]
      },
      {
        type: "practice",
        titleDe: "Prüfungssimulation",
        titleVi: "Mô phỏng thi thử",
        instruction: "Übe alle vier Teile: 1) HÖREN: Höre einen deutschen Podcast (z.B. 'Slow German') und beantworte: Wer spricht? Worüber? 2) LESEN: Lies eine deutsche E-Mail oder Anzeige und beantworte 3 Fragen. 3) SCHREIBEN: Schreibe eine E-Mail an deinen Lehrer (30 Wörter): Du kannst am Montag nicht kommen. 4) SPRECHEN: Stelle dich vor (7 Punkte: Name, Alter, Land, Wohnort, Sprachen, Beruf, Hobby). Übe laut!",
        instructionVi: "Luyện tập cả 4 phần: 1) NGHE: Nghe một podcast tiếng Đức (vd: 'Slow German') và trả lời: Ai nói? Nói về gì? 2) ĐỌC: Đọc một email hoặc quảng cáo tiếng Đức và trả lời 3 câu hỏi. 3) VIẾT: Viết email cho giáo viên (30 từ): Bạn không thể đến lớp thứ Hai. 4) NÓI: Tự giới thiệu bản thân (7 điểm: tên, tuổi, quê, nơi ở, ngôn ngữ, nghề, sở thích). Luyện nói to! Lưu ý: Goethe có sách luyện thi miễn phí trên goethe.de — hãy tải về và làm bài thi thử!"
      }
    ]
  }
];
