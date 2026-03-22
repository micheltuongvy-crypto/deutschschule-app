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

export const a1ExercisesCh6_10: Exercise[] = [
  // ============================================================
  // KAPITEL 6: Einkaufen & Kleidung (17 Exercises)
  // ============================================================
  {
    id: "a1-ch6-001",
    chapterId: 6,
    type: "articleChoice",
    difficulty: 1,
    questionDe: "Welcher Artikel passt? ___ Kleid ist schön.",
    questionVi: "Mạo từ nào phù hợp? ___ Kleid (cái váy) đẹp.",
    options: ["der", "die", "das"],
    correctAnswer: "das",
    explanation:
      "'Kleid' (cái váy/đầm) là danh từ trung tính (das). Trong tiếng Đức, quần áo có giống khác nhau, cần học thuộc mạo từ.",
    hint: "Kleid là danh từ trung tính.",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-002",
    chapterId: 6,
    type: "multipleChoice",
    difficulty: 1,
    questionDe: "Was bedeutet 'die Hose'?",
    questionVi: "'die Hose' nghĩa là gì?",
    options: ["cái áo", "cái quần", "cái váy", "đôi giày"],
    correctAnswer: "cái quần",
    explanation:
      "'Die Hose' nghĩa là cái quần. Lưu ý: trong tiếng Đức dùng số ít (die Hose), không như tiếng Anh (pants/trousers) dùng số nhiều.",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-003",
    chapterId: 6,
    type: "fillBlank",
    difficulty: 1,
    questionDe: "Ich möchte dieses T-Shirt ___. (kaufen)",
    questionVi: "Tôi muốn ___ cái áo thun này. (mua)",
    correctAnswer: "kaufen",
    explanation:
      "Sau 'möchte' (muốn), động từ chính đứng ở cuối câu ở dạng nguyên thể (Infinitiv). 'Ich möchte ... kaufen' = Tôi muốn mua.",
    hint: "Sau möchte, động từ ở dạng nguyên thể và đứng cuối câu.",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-004",
    chapterId: 6,
    type: "translate",
    difficulty: 2,
    questionDe: "Übersetze: 'Wie viel kostet die Jacke?'",
    questionVi: "Dịch sang tiếng Việt: 'Wie viel kostet die Jacke?'",
    correctAnswer: "Cái áo khoác giá bao nhiêu?",
    explanation:
      "'Wie viel kostet...?' là câu hỏi giá rất phổ biến khi mua sắm. 'die Jacke' = cái áo khoác. 'kosten' = có giá.",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-005",
    chapterId: 6,
    type: "matching",
    difficulty: 1,
    questionDe: "Ordne zu: der Schuh, das Hemd, die Mütze, der Rock",
    questionVi:
      "Nối từ: der Schuh = ?, das Hemd = ?, die Mütze = ?, der Rock = ?",
    options: ["đôi giày", "cái áo sơ mi", "cái mũ", "cái chân váy"],
    correctAnswer:
      "der Schuh=đôi giày,das Hemd=cái áo sơ mi,die Mütze=cái mũ,der Rock=cái chân váy",
    explanation:
      "der Schuh = đôi giày, das Hemd = cái áo sơ mi (nam), die Mütze = cái mũ (len/vải), der Rock = cái chân váy. Lưu ý: 'der Rock' giống đực dù là chân váy!",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-006",
    chapterId: 6,
    type: "conjugation",
    difficulty: 2,
    questionDe: "Konjugiere 'tragen' (er/sie/es): Er ___ einen Anzug.",
    questionVi: "Chia động từ 'tragen' (mặc/mang) với er/sie/es: Er ___ einen Anzug.",
    correctAnswer: "trägt",
    explanation:
      "'tragen' (mặc, mang) là động từ bất quy tắc: ich trage, du trägst, er/sie/es trägt. Nguyên âm 'a' đổi thành 'ä' ở ngôi 2 và 3 số ít.",
    hint: "tragen đổi nguyên âm a -> ä ở du/er/sie/es.",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-007",
    chapterId: 6,
    type: "trueFalse",
    difficulty: 1,
    questionDe: "'Der Mantel' bedeutet 'cái áo khoác dài'.",
    questionVi: "'Der Mantel' có nghĩa là 'cái áo khoác dài' – đúng hay sai?",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    explanation:
      "Đúng! 'Der Mantel' = cái áo khoác dài (coat). Phân biệt: die Jacke = áo khoác ngắn, der Mantel = áo khoác dài.",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-008",
    chapterId: 6,
    type: "reorder",
    difficulty: 2,
    questionDe: "Ordne den Satz: möchte / ich / die / Schuhe / schwarzen / kaufen",
    questionVi: "Sắp xếp câu: möchte / ich / die / Schuhe / schwarzen / kaufen",
    correctAnswer: "Ich möchte die schwarzen Schuhe kaufen",
    explanation:
      "Trật tự: Chủ ngữ (Ich) + möchte + tân ngữ (die schwarzen Schuhe) + động từ nguyên thể cuối câu (kaufen). Tính từ 'schwarzen' đứng trước danh từ.",
    hint: "möchte ... kaufen tạo thành khung câu.",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-009",
    chapterId: 6,
    type: "multipleChoice",
    difficulty: 2,
    questionDe: "'Das ist zu teuer. Haben Sie etwas ___?'",
    questionVi: "'Cái này quá đắt. Bạn có cái gì ___ không?'",
    options: ["Billigeres", "billiger", "billigsten", "billige"],
    correctAnswer: "Billigeres",
    explanation:
      "'etwas Billigeres' = cái gì đó rẻ hơn. Sau 'etwas' dùng so sánh hơn viết hoa + đuôi -es (trung tính, vì 'etwas' là đại từ bất định).",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-010",
    chapterId: 6,
    type: "fillBlank",
    difficulty: 2,
    questionDe: "Die Bluse ___ 29 Euro. (kosten)",
    questionVi: "Cái áo cánh ___ 29 Euro. (có giá)",
    correctAnswer: "kostet",
    explanation:
      "'kosten' chia với ngôi 3 số ít (die Bluse): kostet. Đây là động từ quy tắc: ich koste, du kostest, er/sie/es kostet.",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-011",
    chapterId: 6,
    type: "articleChoice",
    difficulty: 1,
    questionDe: "Welcher Artikel? ___ Pullover ist warm.",
    questionVi: "Mạo từ nào? ___ Pullover (áo len) ấm.",
    options: ["der", "die", "das"],
    correctAnswer: "der",
    explanation:
      "'Der Pullover' (cái áo len) là danh từ giống đực. Nhiều từ mượn từ tiếng Anh giữ nguyên cách viết nhưng có mạo từ tiếng Đức.",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-012",
    chapterId: 6,
    type: "translate",
    difficulty: 2,
    questionDe: "Übersetze ins Deutsche: 'Tôi mặc một cái áo phông trắng.'",
    questionVi: "Dịch sang tiếng Đức: 'Tôi mặc một cái áo phông trắng.'",
    correctAnswer: "Ich trage ein weißes T-Shirt.",
    explanation:
      "'tragen' = mặc. 'ein weißes T-Shirt': vì T-Shirt là trung tính (das), tính từ sau 'ein' nhận đuôi -es. weiß = trắng.",
    hint: "T-Shirt là trung tính (das). Tính từ sau ein + trung tính có đuôi -es.",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-013",
    chapterId: 6,
    type: "multipleChoice",
    difficulty: 3,
    questionDe:
      "Im Geschäft: 'Kann ich ___ helfen?' – 'Ja, ich suche eine Hose.'",
    questionVi:
      "Trong cửa hàng: 'Tôi có thể giúp ___ không?' – 'Vâng, tôi tìm một cái quần.'",
    options: ["Sie", "Ihnen", "dir", "du"],
    correctAnswer: "Ihnen",
    explanation:
      "'helfen' (giúp) đòi hỏi Dativ. Dạng lịch sự (Sie) ở Dativ là 'Ihnen' (viết hoa). Trong cửa hàng luôn dùng dạng lịch sự.",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-014",
    chapterId: 6,
    type: "trueFalse",
    difficulty: 2,
    questionDe: "'Ich probiere die Hose an' bedeutet 'Tôi thử cái quần'.",
    questionVi:
      "'Ich probiere die Hose an' có nghĩa là 'Tôi thử cái quần' – đúng hay sai?",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    explanation:
      "Đúng! 'anprobieren' (thử đồ) là động từ tách: 'Ich probiere ... an'. Tiền tố 'an' tách ra và đứng cuối câu.",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-015",
    chapterId: 6,
    type: "conjugation",
    difficulty: 3,
    questionDe:
      "Konjugiere 'anprobieren' (du): ___ du den Mantel ___?",
    questionVi:
      "Chia động từ 'anprobieren' (thử đồ) với du: ___ du den Mantel ___?",
    correctAnswer: "Probierst ... an",
    explanation:
      "'anprobieren' là động từ tách. Ở câu hỏi: tiền tố 'an' tách ra cuối câu, phần gốc chia theo ngôi: 'Probierst du den Mantel an?'",
    hint: "Động từ tách: phần gốc chia bình thường, tiền tố đứng cuối.",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-016",
    chapterId: 6,
    type: "reorder",
    difficulty: 3,
    questionDe:
      "Ordne den Satz: gefällt / mir / das / rote / Kleid / gut",
    questionVi: "Sắp xếp câu: gefällt / mir / das / rote / Kleid / gut",
    correctAnswer: "Das rote Kleid gefällt mir gut",
    explanation:
      "'gefallen' (thích, hợp) dùng với Dativ: etwas gefällt mir = tôi thích cái gì. Trật tự: Chủ ngữ (Das rote Kleid) + động từ (gefällt) + Dativ (mir) + trạng từ (gut).",
    topic: "Einkaufen & Kleidung",
  },
  {
    id: "a1-ch6-017",
    chapterId: 6,
    type: "fillBlank",
    difficulty: 3,
    questionDe:
      "Ich nehme die Jacke. Kann ich mit ___ bezahlen? (Karte)",
    questionVi:
      "Tôi lấy cái áo khoác. Tôi có thể thanh toán bằng ___ không? (thẻ)",
    correctAnswer: "Karte",
    explanation:
      "'mit Karte bezahlen' = thanh toán bằng thẻ. 'mit' + Dativ, nhưng ở đây không cần mạo từ (cách nói cố định). Cũng có thể nói 'mit der Karte'.",
    hint: "mit + Dativ, nhưng cụm 'mit Karte' là cách nói cố định.",
    topic: "Einkaufen & Kleidung",
  },

  // ============================================================
  // KAPITEL 7: Körper & Gesundheit (17 Exercises)
  // ============================================================
  {
    id: "a1-ch7-001",
    chapterId: 7,
    type: "matching",
    difficulty: 1,
    questionDe: "Ordne zu: der Kopf, die Hand, das Auge, der Fuß",
    questionVi: "Nối từ: der Kopf = ?, die Hand = ?, das Auge = ?, der Fuß = ?",
    options: ["cái đầu", "bàn tay", "con mắt", "bàn chân"],
    correctAnswer:
      "der Kopf=cái đầu,die Hand=bàn tay,das Auge=con mắt,der Fuß=bàn chân",
    explanation:
      "der Kopf = cái đầu, die Hand = bàn tay, das Auge = con mắt, der Fuß = bàn chân. Lưu ý: 'der Fuß' viết với ß vì nguyên âm dài.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-002",
    chapterId: 7,
    type: "articleChoice",
    difficulty: 1,
    questionDe: "Welcher Artikel? ___ Nase ist klein.",
    questionVi: "Mạo từ nào? ___ Nase (cái mũi) nhỏ.",
    options: ["der", "die", "das"],
    correctAnswer: "die",
    explanation:
      "'Die Nase' (cái mũi) là danh từ giống cái. Hầu hết các bộ phận cơ thể có đuôi -e là giống cái.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-003",
    chapterId: 7,
    type: "multipleChoice",
    difficulty: 1,
    questionDe: "Was sagt man beim Arzt? 'Ich habe ___.'",
    questionVi: "Nói gì khi đi khám bệnh? 'Tôi bị ___.'",
    options: ["Kopfschmerzen", "Kopfschmerz", "Kopf Schmerzen", "Kopfschmerzung"],
    correctAnswer: "Kopfschmerzen",
    explanation:
      "'Kopfschmerzen' (đau đầu) luôn dùng số nhiều. Đây là từ ghép: Kopf (đầu) + Schmerzen (những cơn đau). Tiếng Đức rất hay ghép từ.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-004",
    chapterId: 7,
    type: "trueFalse",
    difficulty: 1,
    questionDe: "'Mir ist schlecht' bedeutet 'Tôi bị buồn nôn'.",
    questionVi: "'Mir ist schlecht' có nghĩa là 'Tôi bị buồn nôn' – đúng hay sai?",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    explanation:
      "Đúng! 'Mir ist schlecht' = Tôi bị buồn nôn / khó chịu. Cấu trúc Dativ + ist + tính từ dùng để diễn tả cảm giác cơ thể.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-005",
    chapterId: 7,
    type: "fillBlank",
    difficulty: 1,
    questionDe: "Mein ___ tut weh. (Bauch)",
    questionVi: "___ tôi đau. (bụng)",
    correctAnswer: "Bauch",
    explanation:
      "'Der Bauch' = cái bụng. 'Mein Bauch tut weh' = Bụng tôi đau. Cấu trúc: Körperteil + tut/tun weh = bộ phận cơ thể bị đau.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-006",
    chapterId: 7,
    type: "translate",
    difficulty: 2,
    questionDe: "Übersetze: 'Ich muss zum Arzt gehen.'",
    questionVi: "Dịch sang tiếng Việt: 'Ich muss zum Arzt gehen.'",
    correctAnswer: "Tôi phải đi khám bác sĩ.",
    explanation:
      "'müssen' = phải. 'zum Arzt' = zum = zu + dem (đến chỗ bác sĩ). 'gehen' đứng cuối câu vì có Modalverb 'muss'.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-007",
    chapterId: 7,
    type: "conjugation",
    difficulty: 2,
    questionDe: "Konjugiere 'müssen' (ich): Ich ___ Medikamente nehmen.",
    questionVi: "Chia động từ 'müssen' (phải) với ich: Ich ___ uống thuốc.",
    correctAnswer: "muss",
    explanation:
      "'müssen' (phải) chia với ich: muss. Động từ khiếm khuyết (Modalverb): ich muss, du musst, er muss, wir müssen. Nguyên âm đổi: ü -> u ở số ít.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-008",
    chapterId: 7,
    type: "reorder",
    difficulty: 2,
    questionDe: "Ordne den Satz: du / sollst / Tee / heißen / trinken",
    questionVi: "Sắp xếp câu: du / sollst / Tee / heißen / trinken",
    correctAnswer: "Du sollst heißen Tee trinken",
    explanation:
      "'sollen' = nên. Trật tự: Du (chủ ngữ) + sollst (Modalverb chia) + heißen Tee (tân ngữ với tính từ) + trinken (động từ chính cuối câu).",
    hint: "Modalverb chia đứng vị trí 2, động từ chính ở cuối.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-009",
    chapterId: 7,
    type: "multipleChoice",
    difficulty: 2,
    questionDe: "Der Arzt sagt: 'Sie ___ viel Wasser trinken.'",
    questionVi: "Bác sĩ nói: 'Bạn ___ uống nhiều nước.'",
    options: ["sollen", "sollt", "sollst", "soll"],
    correctAnswer: "sollen",
    explanation:
      "Dạng lịch sự 'Sie' (Bạn/Quý khách) chia giống 'sie' (họ): sollen. Bác sĩ dùng dạng lịch sự với bệnh nhân.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-010",
    chapterId: 7,
    type: "articleChoice",
    difficulty: 2,
    questionDe: "Welcher Artikel? ___ Rücken tut mir weh.",
    questionVi: "Mạo từ nào? ___ Rücken (lưng) của tôi đau.",
    options: ["der", "die", "das"],
    correctAnswer: "der",
    explanation:
      "'Der Rücken' (cái lưng) là danh từ giống đực. Cấu trúc: Der Rücken tut mir weh = Lưng tôi đau.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-011",
    chapterId: 7,
    type: "fillBlank",
    difficulty: 2,
    questionDe: "Ich habe ___ und Schnupfen. (Husten)",
    questionVi: "Tôi bị ___ và sổ mũi. (ho)",
    correctAnswer: "Husten",
    explanation:
      "'der Husten' = ho, 'der Schnupfen' = sổ mũi. Đây là hai triệu chứng cảm cúm (Erkältung) phổ biến.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-012",
    chapterId: 7,
    type: "translate",
    difficulty: 2,
    questionDe: "Übersetze ins Deutsche: 'Tay tôi đau.'",
    questionVi: "Dịch sang tiếng Đức: 'Tay tôi đau.'",
    correctAnswer: "Meine Hand tut weh.",
    explanation:
      "'die Hand' = bàn tay -> 'meine Hand' (tay tôi, giống cái nên dùng meine). 'tut weh' = đau (số ít). Nếu hai tay: 'Meine Hände tun weh.'",
    hint: "Hand là giống cái (die), nên đại từ sở hữu là meine.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-013",
    chapterId: 7,
    type: "matching",
    difficulty: 2,
    questionDe:
      "Ordne zu: die Tablette, das Rezept, die Apotheke, das Krankenhaus",
    questionVi:
      "Nối từ: die Tablette = ?, das Rezept = ?, die Apotheke = ?, das Krankenhaus = ?",
    options: ["viên thuốc", "đơn thuốc", "nhà thuốc", "bệnh viện"],
    correctAnswer:
      "die Tablette=viên thuốc,das Rezept=đơn thuốc,die Apotheke=nhà thuốc,das Krankenhaus=bệnh viện",
    explanation:
      "die Tablette = viên thuốc, das Rezept = đơn thuốc (từ bác sĩ), die Apotheke = nhà thuốc, das Krankenhaus = bệnh viện. Ở Đức cần đơn thuốc (Rezept) để mua nhiều loại thuốc.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-014",
    chapterId: 7,
    type: "trueFalse",
    difficulty: 3,
    questionDe:
      "'Ich bin erkältet' und 'Ich habe eine Erkältung' haben die gleiche Bedeutung.",
    questionVi:
      "'Ich bin erkältet' và 'Ich habe eine Erkältung' có cùng nghĩa – đúng hay sai?",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    explanation:
      "Đúng! Cả hai đều nghĩa là 'Tôi bị cảm'. 'erkältet sein' (tính từ + sein) và 'eine Erkältung haben' (danh từ + haben) đều dùng được.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-015",
    chapterId: 7,
    type: "conjugation",
    difficulty: 3,
    questionDe: "Konjugiere 'wehtun' (die Augen): Die Augen ___ mir ___.",
    questionVi: "Chia động từ 'wehtun' (đau) với die Augen: Mắt ___ tôi ___.",
    correctAnswer: "tun ... weh",
    explanation:
      "'wehtun' là động từ tách. Với chủ ngữ số nhiều (die Augen): 'Die Augen tun mir weh.' Số ít: tut weh, số nhiều: tun weh.",
    hint: "wehtun tách thành: tun ... weh. Chủ ngữ số nhiều -> tun.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-016",
    chapterId: 7,
    type: "multipleChoice",
    difficulty: 3,
    questionDe:
      "Beim Arzt: 'Wie lange haben Sie ___ die Schmerzen?'",
    questionVi: "Ở bác sĩ: 'Bạn đã bị đau ___ bao lâu rồi?'",
    options: ["schon", "noch", "erst", "immer"],
    correctAnswer: "schon",
    explanation:
      "'schon' (đã) dùng để hỏi về thời gian kéo dài: 'Wie lange haben Sie schon...?' = Bạn đã bị ... bao lâu rồi? Câu hỏi rất phổ biến khi khám bệnh.",
    topic: "Körper & Gesundheit",
  },
  {
    id: "a1-ch7-017",
    chapterId: 7,
    type: "reorder",
    difficulty: 3,
    questionDe:
      "Ordne den Satz: nehmen / dreimal / sollen / am Tag / Sie / die Tabletten",
    questionVi:
      "Sắp xếp câu: nehmen / dreimal / sollen / am Tag / Sie / die Tabletten",
    correctAnswer: "Sie sollen die Tabletten dreimal am Tag nehmen",
    explanation:
      "Trật tự: Sie (chủ ngữ) + sollen (Modalverb vị trí 2) + die Tabletten (tân ngữ) + dreimal am Tag (trạng từ thời gian) + nehmen (Infinitiv cuối câu). 'Dreimal am Tag' = 3 lần một ngày.",
    topic: "Körper & Gesundheit",
  },

  // ============================================================
  // KAPITEL 8: Stadt & Verkehr (17 Exercises)
  // ============================================================
  {
    id: "a1-ch8-001",
    chapterId: 8,
    type: "multipleChoice",
    difficulty: 1,
    questionDe: "Wo kauft man Brot? In der ___.",
    questionVi: "Mua bánh mì ở đâu? Ở ___.",
    options: ["Bäckerei", "Metzgerei", "Apotheke", "Bibliothek"],
    correctAnswer: "Bäckerei",
    explanation:
      "'Die Bäckerei' = tiệm bánh mì. Metzgerei = cửa hàng thịt, Apotheke = nhà thuốc, Bibliothek = thư viện. Đuôi -ei thường chỉ nơi sản xuất/bán.",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-002",
    chapterId: 8,
    type: "matching",
    difficulty: 1,
    questionDe:
      "Ordne zu: die Haltestelle, der Bahnhof, die Kreuzung, die Ampel",
    questionVi:
      "Nối từ: die Haltestelle = ?, der Bahnhof = ?, die Kreuzung = ?, die Ampel = ?",
    options: ["trạm xe buýt", "nhà ga", "ngã tư", "đèn giao thông"],
    correctAnswer:
      "die Haltestelle=trạm xe buýt,der Bahnhof=nhà ga,die Kreuzung=ngã tư,die Ampel=đèn giao thông",
    explanation:
      "die Haltestelle = trạm (xe buýt/tàu điện), der Bahnhof = nhà ga, die Kreuzung = ngã tư, die Ampel = đèn giao thông. Những từ này rất quan trọng khi hỏi đường.",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-003",
    chapterId: 8,
    type: "articleChoice",
    difficulty: 1,
    questionDe: "Welcher Artikel? ___ Straße ist lang.",
    questionVi: "Mạo từ nào? ___ Straße (con đường) dài.",
    options: ["der", "die", "das"],
    correctAnswer: "die",
    explanation:
      "'Die Straße' (con đường) là giống cái. Hầu hết danh từ có đuôi -e trong tiếng Đức là giống cái.",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-004",
    chapterId: 8,
    type: "fillBlank",
    difficulty: 1,
    questionDe: "Entschuldigung, wo ist der ___? (Supermarkt)",
    questionVi: "Xin lỗi, ___ ở đâu? (siêu thị)",
    correctAnswer: "Supermarkt",
    explanation:
      "'Entschuldigung, wo ist...?' = Xin lỗi, ... ở đâu? Đây là cách hỏi đường lịch sự nhất cho người mới học. 'der Supermarkt' = siêu thị.",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-005",
    chapterId: 8,
    type: "trueFalse",
    difficulty: 1,
    questionDe: "'Gehen Sie geradeaus' bedeutet 'Hãy đi thẳng'.",
    questionVi:
      "'Gehen Sie geradeaus' có nghĩa là 'Hãy đi thẳng' – đúng hay sai?",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    explanation:
      "Đúng! 'geradeaus' = thẳng. 'Gehen Sie geradeaus' = Hãy đi thẳng (dạng lịch sự). Các hướng khác: links = trái, rechts = phải.",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-006",
    chapterId: 8,
    type: "translate",
    difficulty: 2,
    questionDe: "Übersetze: 'Biegen Sie an der Ampel links ab.'",
    questionVi: "Dịch sang tiếng Việt: 'Biegen Sie an der Ampel links ab.'",
    correctAnswer: "Hãy rẽ trái ở đèn giao thông.",
    explanation:
      "'abbiegen' = rẽ (động từ tách: biegen ... ab). 'an der Ampel' = ở đèn giao thông (an + Dativ). 'links' = bên trái.",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-007",
    chapterId: 8,
    type: "multipleChoice",
    difficulty: 2,
    questionDe: "Ich fahre ___ dem Bus zur Arbeit.",
    questionVi: "Tôi đi ___ xe buýt đến chỗ làm.",
    options: ["mit", "in", "auf", "an"],
    correctAnswer: "mit",
    explanation:
      "'mit dem Bus fahren' = đi bằng xe buýt. 'mit' + Dativ chỉ phương tiện giao thông: mit dem Bus, mit der U-Bahn, mit dem Zug.",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-008",
    chapterId: 8,
    type: "conjugation",
    difficulty: 2,
    questionDe: "Konjugiere 'fahren' (du): ___ du mit dem Zug?",
    questionVi: "Chia động từ 'fahren' (đi/lái) với du: ___ du bằng tàu?",
    correctAnswer: "Fährst",
    explanation:
      "'fahren' là động từ bất quy tắc: ich fahre, du fährst, er/sie/es fährt. Nguyên âm 'a' đổi thành 'ä' ở ngôi 2 và 3 số ít.",
    hint: "fahren đổi a -> ä ở du và er/sie/es.",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-009",
    chapterId: 8,
    type: "reorder",
    difficulty: 2,
    questionDe:
      "Ordne den Satz: die / nächste / wo / U-Bahn-Station / ist / ?",
    questionVi: "Sắp xếp câu: die / nächste / wo / U-Bahn-Station / ist / ?",
    correctAnswer: "Wo ist die nächste U-Bahn-Station?",
    explanation:
      "Câu hỏi với W-Wort: Wo (ở đâu) + ist (động từ) + die nächste U-Bahn-Station (chủ ngữ)? 'nächste' = gần nhất. U-Bahn = tàu điện ngầm.",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-010",
    chapterId: 8,
    type: "fillBlank",
    difficulty: 2,
    questionDe: "Das Rathaus ist ___ dem Park. (gegenüber)",
    questionVi: "Tòa thị chính ở ___ công viên. (đối diện)",
    correctAnswer: "gegenüber",
    explanation:
      "'gegenüber' (đối diện) + Dativ: gegenüber dem Park. Đây là giới từ chỉ vị trí quan trọng khi chỉ đường. Có thể đứng trước hoặc sau danh từ.",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-011",
    chapterId: 8,
    type: "multipleChoice",
    difficulty: 2,
    questionDe:
      "Wie komme ich ___ Bahnhof? – Nehmen Sie die Linie 3.",
    questionVi: "Làm sao tôi đến ___ nhà ga? – Hãy đi tuyến 3.",
    options: ["zum", "zur", "zu dem", "bei dem"],
    correctAnswer: "zum",
    explanation:
      "'zum' = zu + dem (Dativ giống đực/trung tính). 'der Bahnhof' là giống đực -> 'zum Bahnhof'. Nếu giống cái: 'zur' (zu + der), ví dụ: zur Schule.",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-012",
    chapterId: 8,
    type: "articleChoice",
    difficulty: 2,
    questionDe: "Welcher Artikel? ___ Brücke ist alt.",
    questionVi: "Mạo từ nào? ___ Brücke (cây cầu) cũ.",
    options: ["der", "die", "das"],
    correctAnswer: "die",
    explanation:
      "'Die Brücke' (cây cầu) là giống cái. Đuôi -e một lần nữa cho thấy quy tắc: phần lớn danh từ có đuôi -e là giống cái (die).",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-013",
    chapterId: 8,
    type: "translate",
    difficulty: 3,
    questionDe:
      "Übersetze ins Deutsche: 'Bưu điện ở giữa nhà ga và siêu thị.'",
    questionVi:
      "Dịch sang tiếng Đức: 'Bưu điện ở giữa nhà ga và siêu thị.'",
    correctAnswer: "Die Post ist zwischen dem Bahnhof und dem Supermarkt.",
    explanation:
      "'zwischen' (giữa) + Dativ khi chỉ vị trí (wo?). 'dem Bahnhof' và 'dem Supermarkt' đều ở Dativ vì cả hai là giống đực.",
    hint: "zwischen + Dativ khi trả lời câu hỏi Wo? (ở đâu).",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-014",
    chapterId: 8,
    type: "trueFalse",
    difficulty: 2,
    questionDe:
      "'Die U-Bahn fährt alle 10 Minuten' bedeutet 'Tàu điện ngầm chạy mỗi 10 phút'.",
    questionVi:
      "'Die U-Bahn fährt alle 10 Minuten' nghĩa là 'Tàu điện ngầm chạy mỗi 10 phút' – đúng hay sai?",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    explanation:
      "Đúng! 'alle 10 Minuten' = mỗi 10 phút / cứ 10 phút một lần. 'alle' + thời gian = tần suất lặp lại.",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-015",
    chapterId: 8,
    type: "conjugation",
    difficulty: 3,
    questionDe:
      "Konjugiere 'aussteigen' (ich): Ich ___ an der nächsten Haltestelle ___.",
    questionVi:
      "Chia động từ 'aussteigen' (xuống xe) với ich: Ich ___ ở trạm tiếp theo ___.",
    correctAnswer: "steige ... aus",
    explanation:
      "'aussteigen' là động từ tách: aus- + steigen. 'Ich steige ... aus.' Tiền tố 'aus' đứng cuối câu. einsteigen = lên xe, aussteigen = xuống xe, umsteigen = chuyển tuyến.",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-016",
    chapterId: 8,
    type: "reorder",
    difficulty: 3,
    questionDe:
      "Ordne den Satz: müssen / an / Haltestelle / der / Sie / nächsten / umsteigen",
    questionVi:
      "Sắp xếp câu: müssen / an / Haltestelle / der / Sie / nächsten / umsteigen",
    correctAnswer: "Sie müssen an der nächsten Haltestelle umsteigen",
    explanation:
      "'umsteigen' = chuyển tuyến (động từ tách). Với Modalverb: Sie müssen (vị trí 2) + an der nächsten Haltestelle (trạng ngữ) + umsteigen (Infinitiv cuối câu, không tách).",
    hint: "Sau Modalverb, động từ tách giữ nguyên dạng nguyên thể (không tách).",
    topic: "Stadt & Verkehr",
  },
  {
    id: "a1-ch8-017",
    chapterId: 8,
    type: "fillBlank",
    difficulty: 3,
    questionDe:
      "Der Bus ___ um 8:15 Uhr am Marktplatz ___. (abfahren)",
    questionVi: "Xe buýt ___ lúc 8:15 ở quảng trường chợ ___. (khởi hành)",
    correctAnswer: "fährt ... ab",
    explanation:
      "'abfahren' là động từ tách: ab- + fahren. 'Der Bus fährt ... ab.' Vì chủ ngữ ngôi 3 số ít, 'fahren' đổi thành 'fährt' (a -> ä). Tiền tố 'ab' đứng cuối.",
    hint: "abfahren: fahren đổi a->ä ở ngôi 3, tiền tố ab đứng cuối.",
    topic: "Stadt & Verkehr",
  },

  // ============================================================
  // KAPITEL 9: Arbeit & Beruf (17 Exercises)
  // ============================================================
  {
    id: "a1-ch9-001",
    chapterId: 9,
    type: "matching",
    difficulty: 1,
    questionDe:
      "Ordne zu: der Lehrer, die Ärztin, der Ingenieur, die Verkäuferin",
    questionVi:
      "Nối từ: der Lehrer = ?, die Ärztin = ?, der Ingenieur = ?, die Verkäuferin = ?",
    options: ["giáo viên (nam)", "bác sĩ (nữ)", "kỹ sư (nam)", "nhân viên bán hàng (nữ)"],
    correctAnswer:
      "der Lehrer=giáo viên (nam),die Ärztin=bác sĩ (nữ),der Ingenieur=kỹ sư (nam),die Verkäuferin=nhân viên bán hàng (nữ)",
    explanation:
      "Trong tiếng Đức, nghề nghiệp phân biệt giống đực/cái. Dạng nữ thường thêm đuôi -in: Arzt -> Ärztin, Verkäufer -> Verkäuferin.",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-002",
    chapterId: 9,
    type: "multipleChoice",
    difficulty: 1,
    questionDe: "Was ___ Sie von Beruf?",
    questionVi: "Bạn làm nghề gì? (Chọn động từ đúng)",
    options: ["sind", "haben", "machen", "arbeiten"],
    correctAnswer: "sind",
    explanation:
      "'Was sind Sie von Beruf?' = Bạn làm nghề gì? (dạng lịch sự). Dùng 'sein' (là) vì câu trả lời: 'Ich bin Lehrer' (Tôi là giáo viên) – không có mạo từ trước nghề.",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-003",
    chapterId: 9,
    type: "trueFalse",
    difficulty: 1,
    questionDe: "'Ich bin Krankenschwester' bedeutet 'Tôi là y tá'.",
    questionVi:
      "'Ich bin Krankenschwester' có nghĩa là 'Tôi là y tá' – đúng hay sai?",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    explanation:
      "Đúng! 'die Krankenschwester' = y tá (nữ). Từ ghép: krank (ốm) + Schwester (chị em). Lưu ý: khi nói nghề với sein, không dùng mạo từ: Ich bin Krankenschwester (không phải 'eine Krankenschwester').",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-004",
    chapterId: 9,
    type: "articleChoice",
    difficulty: 1,
    questionDe: "Welcher Artikel? ___ Büro ist groß.",
    questionVi: "Mạo từ nào? ___ Büro (văn phòng) lớn.",
    options: ["der", "die", "das"],
    correctAnswer: "das",
    explanation:
      "'Das Büro' (văn phòng) là trung tính. Nhiều từ mượn có đuôi -o là trung tính: das Auto, das Kino, das Büro.",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-005",
    chapterId: 9,
    type: "fillBlank",
    difficulty: 1,
    questionDe: "Ich ___ bei Siemens. (arbeiten)",
    questionVi: "Tôi ___ ở Siemens. (làm việc)",
    correctAnswer: "arbeite",
    explanation:
      "'arbeiten' chia với ich: arbeite. Lưu ý đuôi -ten: ich arbeite, du arbeitest (thêm -e- trước -st), er arbeitet. Thêm -e- để dễ phát âm.",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-006",
    chapterId: 9,
    type: "translate",
    difficulty: 2,
    questionDe: "Übersetze: 'Ich arbeite von Montag bis Freitag.'",
    questionVi: "Dịch sang tiếng Việt: 'Ich arbeite von Montag bis Freitag.'",
    correctAnswer: "Tôi làm việc từ thứ Hai đến thứ Sáu.",
    explanation:
      "'von ... bis ...' = từ ... đến ... (dùng cho thời gian và địa điểm). Các ngày trong tuần luôn viết hoa trong tiếng Đức.",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-007",
    chapterId: 9,
    type: "conjugation",
    difficulty: 2,
    questionDe: "Konjugiere 'anfangen' (er): Er ___ um 8 Uhr ___.",
    questionVi:
      "Chia động từ 'anfangen' (bắt đầu) với er: Anh ấy ___ lúc 8 giờ ___.",
    correctAnswer: "fängt ... an",
    explanation:
      "'anfangen' là động từ tách + bất quy tắc: an- + fangen. Ngôi 3 số ít: fangen -> fängt (a -> ä). 'Er fängt um 8 Uhr an.' Tiền tố 'an' đứng cuối.",
    hint: "fangen đổi a -> ä, và tiền tố an tách ra cuối câu.",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-008",
    chapterId: 9,
    type: "multipleChoice",
    difficulty: 2,
    questionDe: "Mein Bruder ist ___. Er repariert Autos.",
    questionVi: "Anh trai tôi là ___. Anh ấy sửa xe ô tô.",
    options: ["Mechaniker", "Koch", "Kellner", "Friseur"],
    correctAnswer: "Mechaniker",
    explanation:
      "'der Mechaniker' = thợ cơ khí/thợ sửa xe. 'reparieren' = sửa chữa. Koch = đầu bếp, Kellner = phục vụ bàn, Friseur = thợ cắt tóc.",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-009",
    chapterId: 9,
    type: "reorder",
    difficulty: 2,
    questionDe:
      "Ordne den Satz: als / arbeitet / Programmiererin / meine / Schwester",
    questionVi:
      "Sắp xếp câu: als / arbeitet / Programmiererin / meine / Schwester",
    correctAnswer: "Meine Schwester arbeitet als Programmiererin",
    explanation:
      "'arbeiten als' = làm việc với tư cách / làm nghề. 'Meine Schwester arbeitet als Programmiererin.' = Chị tôi làm lập trình viên. Nghề nữ: Programmierer -> Programmiererin.",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-010",
    chapterId: 9,
    type: "fillBlank",
    difficulty: 2,
    questionDe: "Er hat eine ___ Stelle gefunden. (Vollzeit)",
    questionVi: "Anh ấy đã tìm được một công việc ___. (toàn thời gian)",
    correctAnswer: "Vollzeit",
    explanation:
      "'die Vollzeitstelle' = công việc toàn thời gian. Đối lập: 'die Teilzeitstelle' = công việc bán thời gian. Ở Đức, Vollzeit thường là 40 giờ/tuần.",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-011",
    chapterId: 9,
    type: "translate",
    difficulty: 2,
    questionDe:
      "Übersetze ins Deutsche: 'Tôi đang tìm việc làm.'",
    questionVi: "Dịch sang tiếng Đức: 'Tôi đang tìm việc làm.'",
    correctAnswer: "Ich suche eine Arbeit.",
    explanation:
      "'suchen' = tìm kiếm. 'eine Arbeit' = một công việc. Cũng có thể nói: 'Ich suche einen Job' hoặc 'Ich suche eine Stelle.'",
    hint: "suchen + Akkusativ. Arbeit là giống cái -> eine Arbeit.",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-012",
    chapterId: 9,
    type: "matching",
    difficulty: 2,
    questionDe:
      "Ordne zu: das Gehalt, der Urlaub, die Besprechung, der Kollege",
    questionVi:
      "Nối từ: das Gehalt = ?, der Urlaub = ?, die Besprechung = ?, der Kollege = ?",
    options: ["tiền lương", "kỳ nghỉ phép", "cuộc họp", "đồng nghiệp (nam)"],
    correctAnswer:
      "das Gehalt=tiền lương,der Urlaub=kỳ nghỉ phép,die Besprechung=cuộc họp,der Kollege=đồng nghiệp (nam)",
    explanation:
      "das Gehalt = lương, der Urlaub = nghỉ phép (ở Đức thường 24-30 ngày/năm), die Besprechung = cuộc họp, der Kollege = đồng nghiệp nam (nữ: die Kollegin).",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-013",
    chapterId: 9,
    type: "trueFalse",
    difficulty: 3,
    questionDe:
      "Man sagt 'Ich bin Studentin' (ohne Artikel) wenn man den Beruf nennt.",
    questionVi:
      "Khi nói nghề nghiệp, ta nói 'Ich bin Studentin' (không có mạo từ) – đúng hay sai?",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    explanation:
      "Đúng! Khi nói nghề với 'sein', không dùng mạo từ: 'Ich bin Studentin' (KHÔNG nói 'Ich bin eine Studentin'). Đây là quy tắc đặc biệt của tiếng Đức.",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-014",
    chapterId: 9,
    type: "multipleChoice",
    difficulty: 3,
    questionDe:
      "Wann ___ du Feierabend? – Um 17 Uhr.",
    questionVi: "Khi nào bạn ___ tan sở? – Lúc 17 giờ.",
    options: ["hast", "bist", "machst", "gehst"],
    correctAnswer: "hast",
    explanation:
      "'Feierabend haben' = tan sở, hết giờ làm. 'Wann hast du Feierabend?' = Khi nào bạn tan sở? 'Feierabend' là khái niệm rất Đức, chỉ thời điểm kết thúc công việc trong ngày.",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-015",
    chapterId: 9,
    type: "conjugation",
    difficulty: 3,
    questionDe:
      "Konjugiere 'werden' (ich): Ich ___ Informatiker.",
    questionVi:
      "Chia động từ 'werden' (trở thành) với ich: Tôi ___ kỹ sư tin học.",
    correctAnswer: "werde",
    explanation:
      "'werden' (trở thành): ich werde, du wirst, er/sie/es wird, wir werden. Bất quy tắc ở ngôi 2 và 3 số ít. 'Ich werde Informatiker' = Tôi sẽ trở thành kỹ sư tin học.",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-016",
    chapterId: 9,
    type: "reorder",
    difficulty: 3,
    questionDe:
      "Ordne den Satz: meine / schreiben / muss / Bewerbung / ich / noch",
    questionVi:
      "Sắp xếp câu: meine / schreiben / muss / Bewerbung / ich / noch",
    correctAnswer: "Ich muss noch meine Bewerbung schreiben",
    explanation:
      "'die Bewerbung' = đơn xin việc. Trật tự: Ich (chủ ngữ) + muss (Modalverb) + noch (trạng từ: còn/vẫn) + meine Bewerbung (tân ngữ) + schreiben (Infinitiv cuối).",
    topic: "Arbeit & Beruf",
  },
  {
    id: "a1-ch9-017",
    chapterId: 9,
    type: "fillBlank",
    difficulty: 3,
    questionDe:
      "Sie hat ein Vorstellungs___ bei einer Firma. (gespräch)",
    questionVi: "Cô ấy có một buổi phỏng vấn ___ ở một công ty. (xin việc)",
    correctAnswer: "gespräch",
    explanation:
      "'Das Vorstellungsgespräch' = buổi phỏng vấn xin việc. Từ ghép: Vorstellung (sự giới thiệu) + s (nối) + Gespräch (cuộc trò chuyện). Từ ghép dài là đặc trưng của tiếng Đức!",
    hint: "Gespräch = cuộc trò chuyện. Vorstellungsgespräch = phỏng vấn.",
    topic: "Arbeit & Beruf",
  },

  // ============================================================
  // KAPITEL 10: Freizeit & Hobbys (17 Exercises)
  // ============================================================
  {
    id: "a1-ch10-001",
    chapterId: 10,
    type: "multipleChoice",
    difficulty: 1,
    questionDe: "Was bedeutet 'schwimmen'?",
    questionVi: "'schwimmen' nghĩa là gì?",
    options: ["bơi", "chạy", "nhảy", "leo"],
    correctAnswer: "bơi",
    explanation:
      "'schwimmen' = bơi. Các hoạt động thể thao khác: laufen = chạy, springen = nhảy, klettern = leo trèo.",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-002",
    chapterId: 10,
    type: "matching",
    difficulty: 1,
    questionDe: "Ordne zu: lesen, kochen, tanzen, singen",
    questionVi: "Nối từ: lesen = ?, kochen = ?, tanzen = ?, singen = ?",
    options: ["đọc sách", "nấu ăn", "nhảy/khiêu vũ", "hát"],
    correctAnswer:
      "lesen=đọc sách,kochen=nấu ăn,tanzen=nhảy/khiêu vũ,singen=hát",
    explanation:
      "lesen = đọc, kochen = nấu ăn, tanzen = nhảy/khiêu vũ, singen = hát. Đây là những sở thích phổ biến để nói trong bài tự giới thiệu.",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-003",
    chapterId: 10,
    type: "fillBlank",
    difficulty: 1,
    questionDe: "In meiner Freizeit ___ ich gern Musik. (hören)",
    questionVi: "Lúc rảnh tôi thích ___ nhạc. (nghe)",
    correctAnswer: "höre",
    explanation:
      "'hören' chia với ich: höre. 'gern' = thích (đặt sau động từ). 'In meiner Freizeit' = trong thời gian rảnh của tôi.",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-004",
    chapterId: 10,
    type: "trueFalse",
    difficulty: 1,
    questionDe: "'Ich spiele gern Fußball' bedeutet 'Tôi thích chơi bóng đá'.",
    questionVi:
      "'Ich spiele gern Fußball' có nghĩa là 'Tôi thích chơi bóng đá' – đúng hay sai?",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    explanation:
      "Đúng! 'spielen' = chơi, 'gern' = thích. Với các môn thể thao dùng bóng: Fußball spielen, Basketball spielen. Không cần mạo từ!",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-005",
    chapterId: 10,
    type: "articleChoice",
    difficulty: 1,
    questionDe: "Welcher Artikel? ___ Kino ist in der Stadtmitte.",
    questionVi: "Mạo từ nào? ___ Kino (rạp chiếu phim) ở trung tâm thành phố.",
    options: ["der", "die", "das"],
    correctAnswer: "das",
    explanation:
      "'Das Kino' (rạp chiếu phim) là trung tính. Từ mượn có đuôi -o thường là trung tính: das Kino, das Auto, das Büro.",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-006",
    chapterId: 10,
    type: "conjugation",
    difficulty: 2,
    questionDe: "Konjugiere 'lesen' (er): Er ___ gern Krimis.",
    questionVi: "Chia động từ 'lesen' (đọc) với er: Anh ấy thích ___ truyện trinh thám.",
    correctAnswer: "liest",
    explanation:
      "'lesen' là động từ bất quy tắc: ich lese, du liest, er/sie/es liest. Nguyên âm 'e' đổi thành 'ie' ở ngôi 2 và 3 số ít. 'der Krimi' = truyện/phim trinh thám.",
    hint: "lesen: e -> ie ở du và er/sie/es.",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-007",
    chapterId: 10,
    type: "translate",
    difficulty: 2,
    questionDe: "Übersetze: 'Am Wochenende gehe ich oft ins Kino.'",
    questionVi:
      "Dịch sang tiếng Việt: 'Am Wochenende gehe ich oft ins Kino.'",
    correctAnswer: "Cuối tuần tôi hay đi xem phim.",
    explanation:
      "'am Wochenende' = vào cuối tuần (am = an + dem). 'oft' = thường, hay. 'ins Kino gehen' = đi xem phim (ins = in + das, Akkusativ vì có sự di chuyển).",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-008",
    chapterId: 10,
    type: "multipleChoice",
    difficulty: 2,
    questionDe: "Was passt? 'Ich ___ gern im Internet.'",
    questionVi: "Từ nào phù hợp? 'Tôi thích ___ trên mạng.'",
    options: ["surfe", "surfen", "surfst", "surft"],
    correctAnswer: "surfe",
    explanation:
      "'surfen' chia với ich: surfe. 'im Internet surfen' = lướt web. Đây là từ mượn từ tiếng Anh nhưng chia theo quy tắc tiếng Đức.",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-009",
    chapterId: 10,
    type: "reorder",
    difficulty: 2,
    questionDe:
      "Ordne den Satz: ins / möchtest / Schwimmbad / du / gehen / heute / ?",
    questionVi:
      "Sắp xếp câu: ins / möchtest / Schwimmbad / du / gehen / heute / ?",
    correctAnswer: "Möchtest du heute ins Schwimmbad gehen?",
    explanation:
      "Câu hỏi Ja/Nein: Động từ chia (Möchtest) đứng đầu + chủ ngữ (du) + trạng từ (heute) + tân ngữ (ins Schwimmbad) + Infinitiv cuối (gehen). 'das Schwimmbad' = bể bơi.",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-010",
    chapterId: 10,
    type: "fillBlank",
    difficulty: 2,
    questionDe: "Wir ___ am Samstag eine Party. (machen)",
    questionVi: "Chúng tôi ___ một bữa tiệc vào thứ Bảy. (tổ chức)",
    correctAnswer: "machen",
    explanation:
      "'machen' chia với wir: machen (giống nguyên thể). 'eine Party machen' = tổ chức tiệc. Cũng có thể nói 'eine Party feiern' hoặc 'eine Party veranstalten'.",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-011",
    chapterId: 10,
    type: "translate",
    difficulty: 2,
    questionDe:
      "Übersetze ins Deutsche: 'Bạn thích làm gì vào thời gian rảnh?'",
    questionVi:
      "Dịch sang tiếng Đức: 'Bạn thích làm gì vào thời gian rảnh?'",
    correctAnswer: "Was machst du gern in deiner Freizeit?",
    explanation:
      "'Was machst du gern?' = Bạn thích làm gì? 'in deiner Freizeit' = trong thời gian rảnh của bạn. Câu hỏi này rất phổ biến để làm quen.",
    hint: "gern đứng sau động từ chia. Freizeit là giống cái (die).",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-012",
    chapterId: 10,
    type: "multipleChoice",
    difficulty: 2,
    questionDe:
      "Ich spiele ___ Gitarre. (ohne Artikel)",
    questionVi: "Tôi chơi ___ guitar. (không có mạo từ)",
    options: ["—", "eine", "die", "das"],
    correctAnswer: "—",
    explanation:
      "Với nhạc cụ dùng 'spielen' không cần mạo từ: 'Ich spiele Gitarre / Klavier / Geige.' Nhưng: 'Ich spiele die Gitarre' cũng đúng khi nói cụ thể.",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-013",
    chapterId: 10,
    type: "trueFalse",
    difficulty: 2,
    questionDe:
      "'Ich sehe gern fern' ist richtig. (fernsehen = xem tivi)",
    questionVi:
      "'Ich sehe gern fern' là đúng ngữ pháp. (fernsehen = xem tivi) – đúng hay sai?",
    options: ["Richtig", "Falsch"],
    correctAnswer: "Richtig",
    explanation:
      "Đúng! 'fernsehen' là động từ tách: fern + sehen. 'Ich sehe gern fern.' 'gern' đứng giữa, 'fern' đứng cuối. sehen đổi e -> ie ở du/er nhưng không ở ich.",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-014",
    chapterId: 10,
    type: "matching",
    difficulty: 3,
    questionDe:
      "Ordne zu: der Verein, die Mannschaft, das Spiel, der Spieler",
    questionVi:
      "Nối từ: der Verein = ?, die Mannschaft = ?, das Spiel = ?, der Spieler = ?",
    options: ["câu lạc bộ", "đội", "trận đấu", "cầu thủ/người chơi"],
    correctAnswer:
      "der Verein=câu lạc bộ,die Mannschaft=đội,das Spiel=trận đấu,der Spieler=cầu thủ/người chơi",
    explanation:
      "der Verein = câu lạc bộ (rất quan trọng ở Đức, người Đức hay tham gia Verein), die Mannschaft = đội, das Spiel = trận đấu/trò chơi, der Spieler = cầu thủ/người chơi.",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-015",
    chapterId: 10,
    type: "conjugation",
    difficulty: 3,
    questionDe:
      "Konjugiere 'fernsehen' (ihr): ___ ihr jeden Abend ___?",
    questionVi:
      "Chia động từ 'fernsehen' (xem tivi) với ihr: Các bạn có ___ tivi mỗi tối ___?",
    correctAnswer: "Seht ... fern",
    explanation:
      "'fernsehen' tách: fern + sehen. Với ihr: 'Seht ihr jeden Abend fern?' sehen -> seht (quy tắc với ihr). Trong câu hỏi, động từ đứng đầu.",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-016",
    chapterId: 10,
    type: "reorder",
    difficulty: 3,
    questionDe:
      "Ordne den Satz: treffe / am / ich / Wochenende / Freunde / meine / gern",
    questionVi:
      "Sắp xếp câu: treffe / am / ich / Wochenende / Freunde / meine / gern",
    correctAnswer: "Am Wochenende treffe ich gern meine Freunde",
    explanation:
      "Khi trạng ngữ thời gian (Am Wochenende) đứng đầu câu, động từ (treffe) vẫn ở vị trí 2, chủ ngữ (ich) đứng sau động từ. Đây là quy tắc 'đảo ngữ' (Inversion).",
    hint: "Trạng ngữ đầu câu -> động từ vị trí 2 -> chủ ngữ vị trí 3.",
    topic: "Freizeit & Hobbys",
  },
  {
    id: "a1-ch10-017",
    chapterId: 10,
    type: "fillBlank",
    difficulty: 3,
    questionDe:
      "Hast du ___, heute Abend ins Konzert zu gehen? (Lust)",
    questionVi:
      "Bạn có ___ đi xem hòa nhạc tối nay không? (hứng thú)",
    correctAnswer: "Lust",
    explanation:
      "'Lust haben + zu + Infinitiv' = có hứng thú/muốn làm gì. 'Hast du Lust, ... zu gehen?' = Bạn có muốn đi ... không? Cấu trúc rất phổ biến khi rủ ai đó.",
    hint: "Lust haben = có hứng thú, muốn. Cấu trúc dùng khi mời/rủ.",
    topic: "Freizeit & Hobbys",
  },
];
