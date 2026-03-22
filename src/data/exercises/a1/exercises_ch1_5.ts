export interface Exercise {
  id: string;
  chapterId: number;
  type:
    | "multipleChoice"
    | "fillBlank"
    | "matching"
    | "reorder"
    | "trueFalse"
    | "translate"
    | "articleChoice"
    | "conjugation";
  difficulty: 1 | 2 | 3;
  questionDe: string;
  questionVi: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  hint?: string;
  topic: string;
}

export const a1ExercisesCh1_5: Exercise[] = [
  // ============================================================
  // CHAPTER 1: Begrüßung & Vorstellung (17 exercises)
  // ============================================================
  {
    id: "a1-ch1-01",
    chapterId: 1,
    type: "multipleChoice",
    difficulty: 1,
    questionDe: "Wie sagt man 'Xin chào' auf Deutsch am Morgen?",
    questionVi: "Buổi sáng, bạn chào bằng tiếng Đức như thế nào?",
    options: ["Guten Morgen", "Guten Abend", "Gute Nacht", "Tschüss"],
    correctAnswer: "Guten Morgen",
    explanation:
      "'Guten Morgen' nghĩa là 'Chào buổi sáng'. Dùng từ sáng sớm đến khoảng 10-11 giờ trưa.",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-02",
    chapterId: 1,
    type: "fillBlank",
    difficulty: 1,
    questionDe: "Hallo, ich ___ Maria. Und du?",
    questionVi: "Điền từ thích hợp: Xin chào, tôi ___ Maria. Còn bạn?",
    options: ["bin", "bist", "ist", "sind"],
    correctAnswer: "bin",
    explanation:
      "'ich bin' = 'tôi là'. Động từ 'sein' (là) chia với 'ich' thành 'bin'.",
    hint: "Động từ 'sein' chia với ngôi 'ich'",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-03",
    chapterId: 1,
    type: "matching",
    difficulty: 1,
    questionDe: "Nối câu chào với nghĩa tiếng Việt: Guten Tag",
    questionVi: "Nối 'Guten Tag' với nghĩa đúng:",
    options: [
      "Chào buổi chiều",
      "Chào buổi sáng",
      "Chúc ngủ ngon",
      "Tạm biệt",
    ],
    correctAnswer: "Chào buổi chiều",
    explanation:
      "'Guten Tag' dùng để chào ban ngày, tương đương 'Chào buổi chiều' hoặc 'Xin chào' (dùng chung trong ngày).",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-04",
    chapterId: 1,
    type: "translate",
    difficulty: 1,
    questionDe: "Dịch sang tiếng Đức: 'Tôi tên là Minh.'",
    questionVi: "Dịch câu sau sang tiếng Đức: 'Tôi tên là Minh.'",
    correctAnswer: "Ich heiße Minh.",
    explanation:
      "'Ich heiße ...' là cách giới thiệu tên phổ biến nhất. 'heißen' = 'tên là'.",
    hint: "heißen = tên là",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-05",
    chapterId: 1,
    type: "trueFalse",
    difficulty: 1,
    questionDe: "'Auf Wiedersehen' bedeutet 'Xin chào'. Richtig oder falsch?",
    questionVi:
      "'Auf Wiedersehen' có nghĩa là 'Xin chào'. Đúng hay sai?",
    correctAnswer: "falsch",
    explanation:
      "'Auf Wiedersehen' nghĩa là 'Tạm biệt' (lịch sự). 'Xin chào' = 'Hallo' hoặc 'Guten Tag'.",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-06",
    chapterId: 1,
    type: "conjugation",
    difficulty: 2,
    questionDe: "Konjugiere 'kommen' für 'du': Woher ___ du?",
    questionVi: "Chia động từ 'kommen' (đến) với 'du': Bạn đến từ đâu?",
    options: ["komme", "kommst", "kommt", "kommen"],
    correctAnswer: "kommst",
    explanation:
      "'du kommst' — Động từ 'kommen' chia với 'du' bỏ '-en', thêm '-st'.",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-07",
    chapterId: 1,
    type: "reorder",
    difficulty: 2,
    questionDe: "Ordne den Satz: komme / ich / Vietnam / aus",
    questionVi: "Sắp xếp thành câu đúng: komme / ich / Vietnam / aus",
    correctAnswer: "Ich komme aus Vietnam.",
    explanation:
      "Cấu trúc câu tiếng Đức: Chủ ngữ + Động từ + ... → 'Ich komme aus Vietnam.' (Tôi đến từ Việt Nam.)",
    hint: "Động từ luôn ở vị trí thứ 2 trong câu trần thuật",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-08",
    chapterId: 1,
    type: "multipleChoice",
    difficulty: 2,
    questionDe: "Wie fragt man nach dem Namen? (höflich/Sie)",
    questionVi: "Hỏi tên ai đó một cách lịch sự (dùng 'Sie') như thế nào?",
    options: [
      "Wie heißen Sie?",
      "Wie heißt du?",
      "Wer bist du?",
      "Was machst du?",
    ],
    correctAnswer: "Wie heißen Sie?",
    explanation:
      "'Wie heißen Sie?' là cách hỏi tên lịch sự. 'Sie' (viết hoa) = cách xưng hô trang trọng.",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-09",
    chapterId: 1,
    type: "fillBlank",
    difficulty: 2,
    questionDe: "Ich ___ aus Vietnam und ___ in Berlin.",
    questionVi:
      "Tôi ___ từ Việt Nam và ___ ở Berlin. (komme, wohne)",
    correctAnswer: "komme, wohne",
    explanation:
      "'Ich komme aus Vietnam' = Tôi đến từ Việt Nam. 'Ich wohne in Berlin' = Tôi sống ở Berlin.",
    hint: "kommen → komme, wohnen → wohne",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-10",
    chapterId: 1,
    type: "articleChoice",
    difficulty: 2,
    questionDe: "Wähle den richtigen Artikel: ___ Name",
    questionVi: "Chọn mạo từ đúng cho 'Name' (tên):",
    options: ["der", "die", "das"],
    correctAnswer: "der",
    explanation:
      "'der Name' — 'Name' là danh từ giống đực (maskulin). Trong tiếng Đức, mỗi danh từ có giống riêng, cần học thuộc.",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-11",
    chapterId: 1,
    type: "conjugation",
    difficulty: 2,
    questionDe: "Konjugiere 'sein' für 'er': Er ___ Student.",
    questionVi: "Chia 'sein' (là) với 'er' (anh ấy): Anh ấy ___ sinh viên.",
    options: ["bin", "bist", "ist", "sind"],
    correctAnswer: "ist",
    explanation: "'er ist' = 'anh ấy là'. Động từ 'sein' bất quy tắc: ich bin, du bist, er/sie/es ist.",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-12",
    chapterId: 1,
    type: "translate",
    difficulty: 2,
    questionDe: "Dịch sang tiếng Đức: 'Bạn sống ở đâu?'",
    questionVi: "Dịch câu sau sang tiếng Đức: 'Bạn sống ở đâu?'",
    correctAnswer: "Wo wohnst du?",
    explanation:
      "'Wo' = ở đâu, 'wohnst' = sống (chia với du), 'du' = bạn. Câu hỏi có từ hỏi: W-Wort + Verb + Subjekt.",
    hint: "wohnen = sống, wo = ở đâu",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-13",
    chapterId: 1,
    type: "multipleChoice",
    difficulty: 3,
    questionDe: "Welche Antwort passt? — 'Wie geht es Ihnen?'",
    questionVi: "Câu trả lời nào phù hợp với 'Wie geht es Ihnen?' (Bạn khỏe không - lịch sự)?",
    options: [
      "Danke, gut. Und Ihnen?",
      "Ich heiße Peter.",
      "Ich komme aus Deutschland.",
      "Tschüss!",
    ],
    correctAnswer: "Danke, gut. Und Ihnen?",
    explanation:
      "'Wie geht es Ihnen?' = 'Ngài/Bạn khỏe không?' (lịch sự). Trả lời: 'Danke, gut. Und Ihnen?' = 'Cảm ơn, tốt. Còn ngài?'",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-14",
    chapterId: 1,
    type: "reorder",
    difficulty: 3,
    questionDe: "Ordne den Satz: spreche / ich / Vietnamesisch / und / Deutsch",
    questionVi:
      "Sắp xếp thành câu: spreche / ich / Vietnamesisch / und / Deutsch",
    correctAnswer: "Ich spreche Vietnamesisch und Deutsch.",
    explanation:
      "'Ich spreche Vietnamesisch und Deutsch.' = 'Tôi nói tiếng Việt và tiếng Đức.' Động từ ở vị trí 2.",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-15",
    chapterId: 1,
    type: "fillBlank",
    difficulty: 3,
    questionDe:
      "— Guten Tag, mein Name ___ Müller. Ich ___ Lehrer. Und was ___ Sie von Beruf?",
    questionVi:
      "Điền 'ist', 'bin', hoặc 'sind': Xin chào, tên tôi ___ Müller. Tôi ___ giáo viên. Còn nghề nghiệp của ngài ___ gì?",
    correctAnswer: "ist, bin, sind",
    explanation:
      "'mein Name ist' (tên tôi là), 'ich bin' (tôi là), 'was sind Sie' (ngài là gì). 'sein' chia khác nhau theo ngôi.",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-16",
    chapterId: 1,
    type: "trueFalse",
    difficulty: 3,
    questionDe:
      "Man sagt 'Guten Abend' am Nachmittag (15 Uhr). Richtig oder falsch?",
    questionVi:
      "Người ta nói 'Guten Abend' vào buổi chiều (15 giờ). Đúng hay sai?",
    correctAnswer: "falsch",
    explanation:
      "'Guten Abend' dùng từ khoảng 18 giờ trở đi (buổi tối). Lúc 15 giờ dùng 'Guten Tag'.",
    topic: "Begrüßung & Vorstellung",
  },
  {
    id: "a1-ch1-17",
    chapterId: 1,
    type: "conjugation",
    difficulty: 3,
    questionDe:
      "Ergänze das Gespräch: 'Woher ___ ihr?' — 'Wir ___ aus Hanoi.'",
    questionVi:
      "Hoàn thành hội thoại: 'Các bạn ___ từ đâu?' — 'Chúng tôi ___ từ Hà Nội.' (kommen)",
    correctAnswer: "kommt, kommen",
    explanation:
      "'ihr kommt' (các bạn đến), 'wir kommen' (chúng tôi đến). Lưu ý: 'ihr' + Verb-t, 'wir' + Verb-en.",
    topic: "Begrüßung & Vorstellung",
  },

  // ============================================================
  // CHAPTER 2: Familie & Freunde (17 exercises)
  // ============================================================
  {
    id: "a1-ch2-01",
    chapterId: 2,
    type: "multipleChoice",
    difficulty: 1,
    questionDe: "Was bedeutet 'die Mutter'?",
    questionVi: "'die Mutter' nghĩa là gì?",
    options: ["Mẹ", "Bố", "Chị gái", "Bà"],
    correctAnswer: "Mẹ",
    explanation: "'die Mutter' = mẹ. Mạo từ 'die' cho thấy đây là danh từ giống cái (feminin).",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-02",
    chapterId: 2,
    type: "articleChoice",
    difficulty: 1,
    questionDe: "Wähle den richtigen Artikel: ___ Bruder",
    questionVi: "Chọn mạo từ đúng cho 'Bruder' (anh/em trai):",
    options: ["der", "die", "das"],
    correctAnswer: "der",
    explanation:
      "'der Bruder' — 'Bruder' là giống đực. Các thành viên nam trong gia đình thường dùng 'der'.",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-03",
    chapterId: 2,
    type: "fillBlank",
    difficulty: 1,
    questionDe: "Das ist mein ___. Er heißt Thomas. (Vater/Mutter/Schwester)",
    questionVi:
      "Đây là ___ tôi. Anh ấy tên Thomas. (Vater/Mutter/Schwester)",
    correctAnswer: "Vater",
    explanation:
      "'mein Vater' = bố tôi. Vì dùng 'Er' (anh ấy), nên phải là người nam → 'Vater' (bố).",
    hint: "'Er' = anh ấy (nam)",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-04",
    chapterId: 2,
    type: "matching",
    difficulty: 1,
    questionDe: "Nối: die Schwester",
    questionVi: "Nối 'die Schwester' với nghĩa đúng:",
    options: ["Chị/em gái", "Anh/em trai", "Mẹ", "Con gái"],
    correctAnswer: "Chị/em gái",
    explanation: "'die Schwester' = chị gái hoặc em gái. 'der Bruder' = anh/em trai.",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-05",
    chapterId: 2,
    type: "translate",
    difficulty: 1,
    questionDe: "Dịch sang tiếng Đức: 'Đây là bạn tôi.'",
    questionVi: "Dịch sang tiếng Đức: 'Đây là bạn tôi.' (nam)",
    correctAnswer: "Das ist mein Freund.",
    explanation:
      "'mein Freund' = bạn tôi (nam). Nếu là nữ: 'meine Freundin'. 'Das ist' = Đây là.",
    hint: "Freund = bạn (nam), Freundin = bạn (nữ)",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-06",
    chapterId: 2,
    type: "trueFalse",
    difficulty: 1,
    questionDe: "'Die Großeltern' bedeutet 'Ông bà'. Richtig oder falsch?",
    questionVi: "'Die Großeltern' có nghĩa là 'Ông bà'. Đúng hay sai?",
    correctAnswer: "richtig",
    explanation:
      "'die Großeltern' = ông bà. 'der Großvater' = ông, 'die Großmutter' = bà.",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-07",
    chapterId: 2,
    type: "multipleChoice",
    difficulty: 2,
    questionDe: "Welches Possessivpronomen ist richtig? Das ist ___ Schwester. (ich)",
    questionVi:
      "Đại từ sở hữu nào đúng? Đây là ___ chị gái. (của tôi)",
    options: ["mein", "meine", "meinen", "meinem"],
    correctAnswer: "meine",
    explanation:
      "'die Schwester' là giống cái → dùng 'meine'. Quy tắc: der → mein, die → meine, das → mein.",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-08",
    chapterId: 2,
    type: "conjugation",
    difficulty: 2,
    questionDe: "Konjugiere 'haben' für 'ich': Ich ___ zwei Geschwister.",
    questionVi: "Chia 'haben' (có) với 'ich': Tôi ___ hai anh chị em.",
    options: ["habe", "hast", "hat", "haben"],
    correctAnswer: "habe",
    explanation:
      "'ich habe' = tôi có. 'haben': ich habe, du hast, er/sie hat, wir haben.",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-09",
    chapterId: 2,
    type: "reorder",
    difficulty: 2,
    questionDe: "Ordne: Schwester / meine / alt / 20 Jahre / ist",
    questionVi: "Sắp xếp: Schwester / meine / alt / 20 Jahre / ist",
    correctAnswer: "Meine Schwester ist 20 Jahre alt.",
    explanation:
      "'Meine Schwester ist 20 Jahre alt.' = Chị tôi 20 tuổi. Cấu trúc: ... ist ... Jahre alt.",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-10",
    chapterId: 2,
    type: "fillBlank",
    difficulty: 2,
    questionDe: "Mein Vater ___ 50 Jahre alt und ___ als Ingenieur. (sein, arbeiten)",
    questionVi:
      "Bố tôi ___ 50 tuổi và ___ làm kỹ sư. (sein, arbeiten)",
    correctAnswer: "ist, arbeitet",
    explanation:
      "'er ist' (anh ấy là) và 'er arbeitet' (anh ấy làm việc). Ngôi ba số ít: sein → ist, arbeiten → arbeitet.",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-11",
    chapterId: 2,
    type: "articleChoice",
    difficulty: 2,
    questionDe: "Wähle den richtigen Artikel: ___ Kind",
    questionVi: "Chọn mạo từ đúng cho 'Kind' (đứa trẻ):",
    options: ["der", "die", "das"],
    correctAnswer: "das",
    explanation:
      "'das Kind' — 'Kind' là giống trung (neutral). Trẻ em trong tiếng Đức luôn dùng 'das', bất kể giới tính.",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-12",
    chapterId: 2,
    type: "multipleChoice",
    difficulty: 2,
    questionDe: "Was ist der Plural von 'das Kind'?",
    questionVi: "Dạng số nhiều của 'das Kind' (đứa trẻ) là gì?",
    options: ["die Kinder", "die Kinds", "die Kindes", "die Kindern"],
    correctAnswer: "die Kinder",
    explanation:
      "'das Kind' → 'die Kinder'. Số nhiều trong tiếng Đức luôn dùng mạo từ 'die'.",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-13",
    chapterId: 2,
    type: "translate",
    difficulty: 3,
    questionDe: "Dịch sang tiếng Đức: 'Gia đình tôi có 4 người.'",
    questionVi: "Dịch sang tiếng Đức: 'Gia đình tôi có 4 người.'",
    correctAnswer: "Meine Familie hat vier Personen.",
    explanation:
      "'Meine Familie' = gia đình tôi, 'hat' = có (chia với ngôi 3), 'vier Personen' = 4 người.",
    hint: "Familie = gia đình, Personen = người (số nhiều)",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-14",
    chapterId: 2,
    type: "conjugation",
    difficulty: 3,
    questionDe:
      "Ergänze mit 'sein': Meine Eltern ___ nett. Mein Bruder ___ lustig.",
    questionVi:
      "Điền 'sein': Bố mẹ tôi ___ tốt bụng. Anh trai tôi ___ vui tính.",
    correctAnswer: "sind, ist",
    explanation:
      "'Meine Eltern' (bố mẹ) = số nhiều → 'sind'. 'Mein Bruder' (anh trai) = ngôi 3 số ít → 'ist'.",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-15",
    chapterId: 2,
    type: "trueFalse",
    difficulty: 3,
    questionDe:
      "'Mein Schwester ist Ärztin.' — Ist dieser Satz grammatisch korrekt?",
    questionVi:
      "'Mein Schwester ist Ärztin.' — Câu này đúng ngữ pháp không?",
    correctAnswer: "falsch",
    explanation:
      "Sai vì 'Schwester' là giống cái (die), phải dùng 'Meine Schwester'. 'Mein' chỉ dùng cho der/das.",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-16",
    chapterId: 2,
    type: "reorder",
    difficulty: 3,
    questionDe:
      "Ordne: verheiratet / Eltern / sind / meine / und / zwei Kinder / haben",
    questionVi:
      "Sắp xếp: verheiratet / Eltern / sind / meine / und / zwei Kinder / haben",
    correctAnswer: "Meine Eltern sind verheiratet und haben zwei Kinder.",
    explanation:
      "'Meine Eltern sind verheiratet und haben zwei Kinder.' = Bố mẹ tôi đã kết hôn và có hai con.",
    topic: "Familie & Freunde",
  },
  {
    id: "a1-ch2-17",
    chapterId: 2,
    type: "fillBlank",
    difficulty: 3,
    questionDe:
      "Mein Onkel und ___ Tante wohnen in Saigon. ___ Kinder gehen zur Schule.",
    questionVi:
      "Chú tôi và ___ dì sống ở Sài Gòn. ___ con của họ đi học. (meine, Ihre/ihre)",
    correctAnswer: "meine, Ihre",
    explanation:
      "'meine Tante' = dì tôi (die Tante → meine). 'Ihre Kinder' = con của họ (số nhiều, trang trọng) hoặc 'ihre Kinder' (thân mật).",
    hint: "Tante = die (giống cái), Kinder = die (số nhiều)",
    topic: "Familie & Freunde",
  },

  // ============================================================
  // CHAPTER 3: Essen & Trinken (17 exercises)
  // ============================================================
  {
    id: "a1-ch3-01",
    chapterId: 3,
    type: "multipleChoice",
    difficulty: 1,
    questionDe: "Was bedeutet 'das Brot'?",
    questionVi: "'das Brot' nghĩa là gì?",
    options: ["Bánh mì", "Cơm", "Phở", "Sữa"],
    correctAnswer: "Bánh mì",
    explanation:
      "'das Brot' = bánh mì. Đây là thực phẩm chính của người Đức, tương tự cơm của người Việt.",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-02",
    chapterId: 3,
    type: "articleChoice",
    difficulty: 1,
    questionDe: "Wähle den richtigen Artikel: ___ Wasser",
    questionVi: "Chọn mạo từ đúng cho 'Wasser' (nước):",
    options: ["der", "die", "das"],
    correctAnswer: "das",
    explanation:
      "'das Wasser' — 'Wasser' là giống trung (neutral). Hầu hết đồ uống dùng 'das' hoặc 'der'.",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-03",
    chapterId: 3,
    type: "matching",
    difficulty: 1,
    questionDe: "Nối: der Kaffee",
    questionVi: "Nối 'der Kaffee' với nghĩa đúng:",
    options: ["Cà phê", "Trà", "Nước ép", "Bia"],
    correctAnswer: "Cà phê",
    explanation:
      "'der Kaffee' = cà phê. Người Đức uống rất nhiều cà phê — trung bình 4 tách mỗi ngày!",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-04",
    chapterId: 3,
    type: "fillBlank",
    difficulty: 1,
    questionDe: "Ich möchte einen ___, bitte. (Tee/Milch/Ei)",
    questionVi: "Tôi muốn một ___, xin cho. (trà)",
    options: ["Tee", "Milch", "Ei"],
    correctAnswer: "Tee",
    explanation:
      "'Ich möchte einen Tee, bitte.' = Tôi muốn một tách trà. 'möchte' = muốn, 'bitte' = xin vui lòng.",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-05",
    chapterId: 3,
    type: "trueFalse",
    difficulty: 1,
    questionDe: "'Der Reis' bedeutet 'Cơm/Gạo'. Richtig oder falsch?",
    questionVi: "'Der Reis' có nghĩa là 'Cơm/Gạo'. Đúng hay sai?",
    correctAnswer: "richtig",
    explanation:
      "'der Reis' = cơm, gạo. Giống đực (maskulin). Cơm rất quan trọng trong ẩm thực Việt Nam!",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-06",
    chapterId: 3,
    type: "translate",
    difficulty: 1,
    questionDe: "Dịch sang tiếng Đức: 'Tôi uống nước.'",
    questionVi: "Dịch sang tiếng Đức: 'Tôi uống nước.'",
    correctAnswer: "Ich trinke Wasser.",
    explanation:
      "'trinken' = uống. 'Ich trinke' — chia với 'ich' bỏ '-en', thêm '-e'.",
    hint: "trinken = uống",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-07",
    chapterId: 3,
    type: "multipleChoice",
    difficulty: 2,
    questionDe: "Was sagt man im Restaurant? — 'Die ___, bitte!'",
    questionVi: "Ở nhà hàng bạn nói gì? — '___, xin cho!'",
    options: ["Rechnung", "Küche", "Wohnung", "Arbeit"],
    correctAnswer: "Rechnung",
    explanation:
      "'Die Rechnung, bitte!' = 'Tính tiền, xin cho!' Đây là câu rất hữu ích khi ăn nhà hàng ở Đức.",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-08",
    chapterId: 3,
    type: "conjugation",
    difficulty: 2,
    questionDe: "Konjugiere 'essen' für 'du': Was ___ du gern?",
    questionVi: "Chia 'essen' (ăn) với 'du': Bạn thích ăn gì?",
    options: ["esse", "isst", "esst", "essen"],
    correctAnswer: "isst",
    explanation:
      "'du isst' — 'essen' là động từ bất quy tắc: ich esse, du isst, er/sie isst. Nguyên âm 'e' đổi thành 'i'.",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-09",
    chapterId: 3,
    type: "reorder",
    difficulty: 2,
    questionDe: "Ordne: gern / ich / Phở / esse",
    questionVi: "Sắp xếp: gern / ich / Phở / esse",
    correctAnswer: "Ich esse gern Phở.",
    explanation:
      "'Ich esse gern Phở.' = Tôi thích ăn phở. 'gern' = thích (đặt sau động từ).",
    hint: "'gern' đứng sau động từ",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-10",
    chapterId: 3,
    type: "fillBlank",
    difficulty: 2,
    questionDe: "Zum Frühstück esse ich ___ und trinke ___.",
    questionVi:
      "Bữa sáng tôi ăn ___ và uống ___. (Brot, Kaffee)",
    correctAnswer: "Brot, Kaffee",
    explanation:
      "'Zum Frühstück' = bữa sáng. Bữa sáng Đức điển hình: bánh mì (Brot) và cà phê (Kaffee).",
    hint: "Frühstück = bữa sáng",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-11",
    chapterId: 3,
    type: "articleChoice",
    difficulty: 2,
    questionDe: "Wähle den richtigen Artikel: ___ Milch",
    questionVi: "Chọn mạo từ đúng cho 'Milch' (sữa):",
    options: ["der", "die", "das"],
    correctAnswer: "die",
    explanation: "'die Milch' — 'Milch' là giống cái (feminin).",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-12",
    chapterId: 3,
    type: "multipleChoice",
    difficulty: 2,
    questionDe: "Welches Wort passt nicht? Apfel, Banane, Kartoffel, Orange",
    questionVi: "Từ nào không cùng nhóm? Apfel, Banane, Kartoffel, Orange",
    options: ["Kartoffel", "Apfel", "Banane", "Orange"],
    correctAnswer: "Kartoffel",
    explanation:
      "'Kartoffel' (khoai tây) là rau, không phải trái cây. Apfel = táo, Banane = chuối, Orange = cam — đều là trái cây (Obst).",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-13",
    chapterId: 3,
    type: "trueFalse",
    difficulty: 2,
    questionDe:
      "'Ich möchte ein Glas Wein.' bedeutet 'Tôi muốn một ly rượu vang.'",
    questionVi:
      "'Ich möchte ein Glas Wein.' nghĩa là 'Tôi muốn một ly rượu vang.' Đúng hay sai?",
    correctAnswer: "richtig",
    explanation:
      "'ein Glas' = một ly, 'der Wein' = rượu vang. 'möchte' = muốn (dạng lịch sự của 'mögen').",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-14",
    chapterId: 3,
    type: "translate",
    difficulty: 3,
    questionDe: "Dịch sang tiếng Đức: 'Tôi không ăn thịt. Tôi ăn chay.'",
    questionVi: "Dịch sang tiếng Đức: 'Tôi không ăn thịt. Tôi ăn chay.'",
    correctAnswer: "Ich esse kein Fleisch. Ich bin Vegetarier.",
    explanation:
      "'kein Fleisch' = không có thịt (phủ định danh từ không đếm được). 'Vegetarier' = người ăn chay.",
    hint: "kein + danh từ = không có..., Fleisch = thịt",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-15",
    chapterId: 3,
    type: "conjugation",
    difficulty: 3,
    questionDe:
      "Ergänze: Er ___ gern Bier, aber sie ___ lieber Wein. (trinken)",
    questionVi:
      "Anh ấy thích uống bia, nhưng cô ấy thích uống rượu vang hơn. (trinken)",
    correctAnswer: "trinkt, trinkt",
    explanation:
      "Cả 'er' và 'sie' (ngôi 3 số ít) đều chia 'trinken' thành 'trinkt'. 'gern' = thích, 'lieber' = thích hơn.",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-16",
    chapterId: 3,
    type: "reorder",
    difficulty: 3,
    questionDe:
      "Ordne: möchte / ich / eine Suppe / bestellen / und / einen Salat",
    questionVi:
      "Sắp xếp: möchte / ich / eine Suppe / bestellen / und / einen Salat",
    correctAnswer: "Ich möchte eine Suppe und einen Salat bestellen.",
    explanation:
      "'Ich möchte ... bestellen' = Tôi muốn đặt ... 'eine Suppe' = một bát súp, 'einen Salat' = một đĩa salad. Với 'möchte', động từ chính ở cuối câu.",
    topic: "Essen & Trinken",
  },
  {
    id: "a1-ch3-17",
    chapterId: 3,
    type: "fillBlank",
    difficulty: 3,
    questionDe:
      "Im Restaurant: 'Ich nehme ___ Schnitzel mit ___ Pommes und ___ Cola.'",
    questionVi:
      "Ở nhà hàng: 'Tôi lấy ___ schnitzel với ___ khoai tây chiên và ___ cola.' (ein/eine/einen, -, eine)",
    correctAnswer: "ein, -, eine",
    explanation:
      "'das Schnitzel' (trung) → 'ein Schnitzel'. 'die Pommes' (số nhiều) → không mạo từ. 'die Cola' (cái) → 'eine Cola'.",
    hint: "Schnitzel = das, Pommes = Plural, Cola = die",
    topic: "Essen & Trinken",
  },

  // ============================================================
  // CHAPTER 4: Wohnung & Möbel (17 exercises)
  // ============================================================
  {
    id: "a1-ch4-01",
    chapterId: 4,
    type: "multipleChoice",
    difficulty: 1,
    questionDe: "Was bedeutet 'die Küche'?",
    questionVi: "'die Küche' nghĩa là gì?",
    options: ["Nhà bếp", "Phòng ngủ", "Phòng khách", "Nhà tắm"],
    correctAnswer: "Nhà bếp",
    explanation: "'die Küche' = nhà bếp. Giống cái (feminin). Nơi nấu ăn trong nhà.",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-02",
    chapterId: 4,
    type: "articleChoice",
    difficulty: 1,
    questionDe: "Wähle den richtigen Artikel: ___ Tisch",
    questionVi: "Chọn mạo từ đúng cho 'Tisch' (bàn):",
    options: ["der", "die", "das"],
    correctAnswer: "der",
    explanation: "'der Tisch' — 'Tisch' (cái bàn) là giống đực (maskulin).",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-03",
    chapterId: 4,
    type: "matching",
    difficulty: 1,
    questionDe: "Nối: das Schlafzimmer",
    questionVi: "Nối 'das Schlafzimmer' với nghĩa đúng:",
    options: ["Phòng ngủ", "Phòng khách", "Nhà bếp", "Phòng tắm"],
    correctAnswer: "Phòng ngủ",
    explanation:
      "'das Schlafzimmer' = phòng ngủ. 'schlafen' = ngủ + 'Zimmer' = phòng. Tiếng Đức hay ghép từ!",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-04",
    chapterId: 4,
    type: "fillBlank",
    difficulty: 1,
    questionDe: "Ich wohne in ___ Wohnung. Sie ist klein aber schön.",
    questionVi: "Tôi sống trong ___ căn hộ. Nó nhỏ nhưng đẹp.",
    options: ["einer", "einem", "ein"],
    correctAnswer: "einer",
    explanation:
      "'die Wohnung' (giống cái) + 'in' (Dativ) → 'in einer Wohnung'. Dativ của 'eine' là 'einer'.",
    hint: "Wohnung = die → Dativ: einer",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-05",
    chapterId: 4,
    type: "trueFalse",
    difficulty: 1,
    questionDe: "'Das Bett' bedeutet 'Cái giường'. Richtig oder falsch?",
    questionVi: "'Das Bett' có nghĩa là 'Cái giường'. Đúng hay sai?",
    correctAnswer: "richtig",
    explanation:
      "'das Bett' = cái giường. Giống trung (neutral). Đồ nội thất thường phải học thuộc giống.",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-06",
    chapterId: 4,
    type: "translate",
    difficulty: 1,
    questionDe: "Dịch sang tiếng Đức: 'Phòng khách rất lớn.'",
    questionVi: "Dịch sang tiếng Đức: 'Phòng khách rất lớn.'",
    correctAnswer: "Das Wohnzimmer ist sehr groß.",
    explanation:
      "'das Wohnzimmer' = phòng khách (wohnen + Zimmer). 'sehr' = rất, 'groß' = lớn.",
    hint: "Wohnzimmer = phòng khách, groß = lớn",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-07",
    chapterId: 4,
    type: "multipleChoice",
    difficulty: 2,
    questionDe: "Wo steht normalerweise der Kühlschrank?",
    questionVi: "Tủ lạnh (Kühlschrank) thường đặt ở đâu?",
    options: [
      "In der Küche",
      "Im Schlafzimmer",
      "Im Badezimmer",
      "Im Garten",
    ],
    correctAnswer: "In der Küche",
    explanation:
      "'der Kühlschrank' (tủ lạnh) đặt trong 'die Küche' (nhà bếp). 'In der Küche' = trong nhà bếp (Dativ).",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-08",
    chapterId: 4,
    type: "conjugation",
    difficulty: 2,
    questionDe:
      "Konjugiere 'haben' für 'wir': Wir ___ eine große Wohnung.",
    questionVi: "Chia 'haben' với 'wir': Chúng tôi ___ một căn hộ lớn.",
    options: ["habe", "hast", "hat", "haben"],
    correctAnswer: "haben",
    explanation: "'wir haben' = chúng tôi có. 'haben' giữ nguyên với 'wir'.",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-09",
    chapterId: 4,
    type: "reorder",
    difficulty: 2,
    questionDe: "Ordne: ein Sofa / im Wohnzimmer / steht",
    questionVi: "Sắp xếp: ein Sofa / im Wohnzimmer / steht",
    correctAnswer: "Im Wohnzimmer steht ein Sofa.",
    explanation:
      "'Im Wohnzimmer steht ein Sofa.' = Trong phòng khách có một chiếc sofa. Khi bắt đầu bằng trạng từ nơi chốn, động từ vẫn ở vị trí 2.",
    hint: "Khi trạng ngữ đứng đầu, chủ ngữ đứng sau động từ",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-10",
    chapterId: 4,
    type: "articleChoice",
    difficulty: 2,
    questionDe: "Wähle den richtigen Artikel: ___ Lampe",
    questionVi: "Chọn mạo từ đúng cho 'Lampe' (đèn):",
    options: ["der", "die", "das"],
    correctAnswer: "die",
    explanation: "'die Lampe' — 'Lampe' là giống cái (feminin). Nhiều từ kết thúc bằng '-e' là giống cái.",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-11",
    chapterId: 4,
    type: "fillBlank",
    difficulty: 2,
    questionDe:
      "Die Wohnung hat drei ___: ein Schlafzimmer, ein Wohnzimmer und ein Arbeitszimmer.",
    questionVi:
      "Căn hộ có ba ___: một phòng ngủ, một phòng khách và một phòng làm việc.",
    correctAnswer: "Zimmer",
    explanation:
      "'das Zimmer' = phòng. Số nhiều: 'die Zimmer' (không đổi). 'Arbeitszimmer' = phòng làm việc.",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-12",
    chapterId: 4,
    type: "multipleChoice",
    difficulty: 2,
    questionDe:
      "Welches Möbelstück findet man im Badezimmer?",
    questionVi:
      "Đồ nội thất nào có trong phòng tắm (Badezimmer)?",
    options: ["Die Dusche", "Der Schreibtisch", "Das Regal", "Der Fernseher"],
    correctAnswer: "Die Dusche",
    explanation:
      "'die Dusche' = vòi sen / phòng tắm đứng. 'Schreibtisch' = bàn làm việc, 'Regal' = kệ sách, 'Fernseher' = tivi.",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-13",
    chapterId: 4,
    type: "translate",
    difficulty: 3,
    questionDe:
      "Dịch sang tiếng Đức: 'Trong phòng ngủ có một giường và một tủ quần áo.'",
    questionVi:
      "Dịch sang tiếng Đức: 'Trong phòng ngủ có một giường và một tủ quần áo.'",
    correctAnswer:
      "Im Schlafzimmer gibt es ein Bett und einen Schrank.",
    explanation:
      "'es gibt' = có (tồn tại). 'ein Bett' (das Bett, Akkusativ trung = ein). 'einen Schrank' (der Schrank, Akkusativ đực = einen).",
    hint: "es gibt + Akkusativ",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-14",
    chapterId: 4,
    type: "trueFalse",
    difficulty: 3,
    questionDe:
      "'Der Stuhl steht auf dem Tisch.' — Das ist eine normale Situation.",
    questionVi:
      "'Cái ghế đứng trên cái bàn.' — Đây là tình huống bình thường. Đúng hay sai?",
    correctAnswer: "falsch",
    explanation:
      "Ghế (Stuhl) thường đứng 'am Tisch' (cạnh bàn) hoặc 'vor dem Tisch' (trước bàn), không phải 'auf dem Tisch' (trên bàn).",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-15",
    chapterId: 4,
    type: "fillBlank",
    difficulty: 3,
    questionDe:
      "Die Lampe hängt ___ der Decke. Der Teppich liegt ___ dem Boden.",
    questionVi:
      "Đèn treo ___ trần. Thảm nằm ___ sàn. (an, auf)",
    correctAnswer: "an, auf",
    explanation:
      "'an der Decke' = trên trần (dính vào). 'auf dem Boden' = trên sàn (nằm trên bề mặt). Cả hai dùng Dativ vì chỉ vị trí.",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-16",
    chapterId: 4,
    type: "reorder",
    difficulty: 3,
    questionDe:
      "Ordne: kostet / die Wohnung / 500 Euro / pro Monat / Miete",
    questionVi:
      "Sắp xếp: kostet / die Wohnung / 500 Euro / pro Monat / Miete",
    correctAnswer: "Die Wohnung kostet 500 Euro Miete pro Monat.",
    explanation:
      "'Die Wohnung kostet 500 Euro Miete pro Monat.' = Căn hộ tốn 500 euro tiền thuê mỗi tháng. 'Miete' = tiền thuê.",
    topic: "Wohnung & Möbel",
  },
  {
    id: "a1-ch4-17",
    chapterId: 4,
    type: "conjugation",
    difficulty: 3,
    questionDe:
      "Ergänze: Die Kinder ___ im Kinderzimmer. (schlafen, Präsens)",
    questionVi:
      "Bọn trẻ ___ trong phòng trẻ em. Chia 'schlafen' ở thì hiện tại.",
    options: ["schlafen", "schläft", "schlafe", "schlaft"],
    correctAnswer: "schlafen",
    explanation:
      "'die Kinder' = số nhiều → 'schlafen' (giữ nguyên). 'schlafen' đổi nguyên âm chỉ ở ngôi 2, 3 số ít: du schläfst, er schläft.",
    topic: "Wohnung & Möbel",
  },

  // ============================================================
  // CHAPTER 5: Alltag & Tagesablauf (17 exercises)
  // ============================================================
  {
    id: "a1-ch5-01",
    chapterId: 5,
    type: "multipleChoice",
    difficulty: 1,
    questionDe: "Was bedeutet 'aufstehen'?",
    questionVi: "'aufstehen' nghĩa là gì?",
    options: ["Thức dậy", "Đi ngủ", "Ăn sáng", "Đi làm"],
    correctAnswer: "Thức dậy",
    explanation:
      "'aufstehen' = thức dậy, đứng dậy. Đây là động từ tách được (trennbares Verb): 'Ich stehe um 7 Uhr auf.'",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-02",
    chapterId: 5,
    type: "fillBlank",
    difficulty: 1,
    questionDe: "Ich stehe um 7 ___ auf.",
    questionVi: "Tôi thức dậy lúc 7 ___.",
    options: ["Uhr", "Tag", "Stunde", "Nacht"],
    correctAnswer: "Uhr",
    explanation:
      "'um 7 Uhr' = lúc 7 giờ. 'Uhr' dùng khi nói giờ cụ thể. 'Stunde' = tiếng (khoảng thời gian).",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-03",
    chapterId: 5,
    type: "matching",
    difficulty: 1,
    questionDe: "Nối: frühstücken",
    questionVi: "Nối 'frühstücken' với nghĩa đúng:",
    options: ["Ăn sáng", "Ăn trưa", "Ăn tối", "Nấu ăn"],
    correctAnswer: "Ăn sáng",
    explanation:
      "'frühstücken' = ăn sáng. 'das Frühstück' = bữa sáng. 'früh' = sớm + 'Stück' = miếng.",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-04",
    chapterId: 5,
    type: "trueFalse",
    difficulty: 1,
    questionDe: "'Ich gehe ins Bett' bedeutet 'Tôi đi ngủ'. Richtig oder falsch?",
    questionVi:
      "'Ich gehe ins Bett' có nghĩa là 'Tôi đi ngủ'. Đúng hay sai?",
    correctAnswer: "richtig",
    explanation:
      "'ins Bett gehen' = đi ngủ (nghĩa đen: đi vào giường). 'ins' = in + das.",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-05",
    chapterId: 5,
    type: "translate",
    difficulty: 1,
    questionDe: "Dịch sang tiếng Đức: 'Tôi đi làm.'",
    questionVi: "Dịch sang tiếng Đức: 'Tôi đi làm.'",
    correctAnswer: "Ich gehe zur Arbeit.",
    explanation:
      "'zur Arbeit gehen' = đi làm. 'zur' = zu + der (die Arbeit là giống cái).",
    hint: "Arbeit = công việc, zur = zu + der",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-06",
    chapterId: 5,
    type: "articleChoice",
    difficulty: 1,
    questionDe: "Wähle den richtigen Artikel: ___ Arbeit",
    questionVi: "Chọn mạo từ đúng cho 'Arbeit' (công việc):",
    options: ["der", "die", "das"],
    correctAnswer: "die",
    explanation: "'die Arbeit' — giống cái (feminin). 'arbeiten' = làm việc (động từ).",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-07",
    chapterId: 5,
    type: "conjugation",
    difficulty: 2,
    questionDe:
      "Trennbares Verb: Er ___ um 6 Uhr ___. (aufstehen)",
    questionVi:
      "Động từ tách: Anh ấy ___ lúc 6 giờ ___. (aufstehen)",
    correctAnswer: "steht, auf",
    explanation:
      "'aufstehen' tách thành: 'Er steht um 6 Uhr auf.' Phần 'auf-' đi xuống cuối câu, phần 'stehen' chia bình thường.",
    hint: "Động từ tách: tiền tố xuống cuối câu",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-08",
    chapterId: 5,
    type: "multipleChoice",
    difficulty: 2,
    questionDe: "Was macht man normalerweise am Morgen zuerst?",
    questionVi: "Buổi sáng người ta thường làm gì đầu tiên?",
    options: [
      "Aufstehen und duschen",
      "Zu Abend essen",
      "Ins Bett gehen",
      "Fernsehen",
    ],
    correctAnswer: "Aufstehen und duschen",
    explanation:
      "'Aufstehen' = thức dậy, 'duschen' = tắm. Đây là hoạt động buổi sáng. 'zu Abend essen' = ăn tối, 'fernsehen' = xem tivi.",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-09",
    chapterId: 5,
    type: "reorder",
    difficulty: 2,
    questionDe: "Ordne: ich / um 8 Uhr / frühstücke / morgens",
    questionVi: "Sắp xếp: ich / um 8 Uhr / frühstücke / morgens",
    correctAnswer: "Morgens frühstücke ich um 8 Uhr.",
    explanation:
      "'Morgens frühstücke ich um 8 Uhr.' = Buổi sáng tôi ăn sáng lúc 8 giờ. Khi trạng ngữ thời gian đứng đầu, chủ ngữ đứng sau động từ.",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-10",
    chapterId: 5,
    type: "fillBlank",
    difficulty: 2,
    questionDe:
      "Am Nachmittag ___ ich Deutsch und am Abend ___ ich fern. (lernen, sehen)",
    questionVi:
      "Buổi chiều tôi ___ tiếng Đức và buổi tối tôi ___ tivi. (lernen, fernsehen)",
    correctAnswer: "lerne, sehe",
    explanation:
      "'ich lerne' = tôi học. 'fernsehen' là động từ tách: 'ich sehe fern'. Nhưng ở đây 'fern' đã ở cuối nên chỉ cần 'sehe'.",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-11",
    chapterId: 5,
    type: "multipleChoice",
    difficulty: 2,
    questionDe: "Was bedeutet 'Es ist halb drei'?",
    questionVi: "'Es ist halb drei' nghĩa là mấy giờ?",
    options: ["2:30", "3:30", "2:00", "3:00"],
    correctAnswer: "2:30",
    explanation:
      "'halb drei' = nửa (đường đến) 3 = 2:30. Khác với tiếng Việt! 'halb' luôn trừ đi nửa tiếng từ số đằng sau.",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-12",
    chapterId: 5,
    type: "translate",
    difficulty: 2,
    questionDe: "Dịch sang tiếng Đức: 'Tôi tắm lúc 7 giờ rưỡi.'",
    questionVi: "Dịch sang tiếng Đức: 'Tôi tắm lúc 7 giờ rưỡi.'",
    correctAnswer: "Ich dusche um halb acht.",
    explanation:
      "7:30 = 'halb acht' (nửa đường đến 8). 'duschen' = tắm (vòi sen). 'um' dùng với giờ cụ thể.",
    hint: "7:30 trong tiếng Đức là 'halb acht' (không phải 'halb sieben')",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-13",
    chapterId: 5,
    type: "trueFalse",
    difficulty: 3,
    questionDe:
      "'Ich sehe gern fern' bedeutet: Ich schaue gern Fernsehen.",
    questionVi:
      "'Ich sehe gern fern' có nghĩa: Tôi thích xem tivi. Đúng hay sai?",
    correctAnswer: "richtig",
    explanation:
      "'fernsehen' = xem tivi. 'gern' = thích. 'Ich sehe gern fern' = 'Ich schaue gern Fernsehen'. Cả hai đều đúng.",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-14",
    chapterId: 5,
    type: "conjugation",
    difficulty: 3,
    questionDe:
      "Ergänze: Wir ___ jeden Tag Deutsch. Mein Freund ___ auch Englisch. (lernen, sprechen)",
    questionVi:
      "Chúng tôi ___ tiếng Đức mỗi ngày. Bạn tôi cũng ___ tiếng Anh. (lernen, sprechen)",
    correctAnswer: "lernen, spricht",
    explanation:
      "'wir lernen' (giữ nguyên). 'er spricht' — 'sprechen' bất quy tắc ở ngôi 3: e → i. (du sprichst, er spricht).",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-15",
    chapterId: 5,
    type: "reorder",
    difficulty: 3,
    questionDe:
      "Ordne: um 22 Uhr / ich / ins Bett / gehe / normalerweise",
    questionVi:
      "Sắp xếp: um 22 Uhr / ich / ins Bett / gehe / normalerweise",
    correctAnswer: "Normalerweise gehe ich um 22 Uhr ins Bett.",
    explanation:
      "'Normalerweise gehe ich um 22 Uhr ins Bett.' = Thường thì tôi đi ngủ lúc 22 giờ. Trạng từ đầu câu → đảo chủ ngữ.",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-16",
    chapterId: 5,
    type: "fillBlank",
    difficulty: 3,
    questionDe:
      "Mein Tagesablauf: Ich stehe um 6 Uhr ___. Dann ___ ich und frühstücke. Um 8 Uhr ___ ich zur Arbeit.",
    questionVi:
      "Lịch trình ngày của tôi: Tôi ___ dậy lúc 6 giờ. Sau đó tôi ___ và ăn sáng. Lúc 8 giờ tôi ___ đi làm. (auf, dusche, fahre)",
    correctAnswer: "auf, dusche, fahre",
    explanation:
      "'aufstehen' → 'stehe ... auf'. 'duschen' → 'dusche'. 'fahren' → 'fahre' (đi bằng phương tiện). Lưu ý 'fahren' dùng khi đi bằng xe.",
    topic: "Alltag & Tagesablauf",
  },
  {
    id: "a1-ch5-17",
    chapterId: 5,
    type: "multipleChoice",
    difficulty: 3,
    questionDe:
      "Welcher Satz beschreibt eine Routine? (Câu nào mô tả thói quen?)",
    questionVi: "Câu nào mô tả thói quen hàng ngày?",
    options: [
      "Jeden Tag stehe ich um 7 Uhr auf.",
      "Gestern bin ich um 9 Uhr aufgestanden.",
      "Morgen werde ich früh aufstehen.",
      "Ich möchte gern früh aufstehen.",
    ],
    correctAnswer: "Jeden Tag stehe ich um 7 Uhr auf.",
    explanation:
      "'Jeden Tag' (mỗi ngày) + thì hiện tại → diễn tả thói quen. 'Gestern' = hôm qua (quá khứ). 'Morgen' = ngày mai (tương lai). 'möchte' = muốn (nguyện vọng).",
    topic: "Alltag & Tagesablauf",
  },
];
