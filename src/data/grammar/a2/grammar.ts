export interface GrammarTopic {
  id: string;
  title: string;
  titleVi: string;
  chapter: number;
  order: number;
  level: "A2";
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

export const a2Grammar: GrammarTopic[] = [
  // ============================================================
  // 1. Nebensaetze mit weil/dass/wenn/ob
  // ============================================================
  {
    id: "a2-gram-01",
    title: "Nebensätze mit weil, dass, wenn, ob",
    titleVi: "Mệnh đề phụ với weil, dass, wenn, ob",
    chapter: 1,
    order: 1,
    level: "A2",
    explanation:
      "Trong tiếng Đức, mệnh đề phụ (Nebensatz) được nối với mệnh đề chính bằng các liên từ phụ thuộc. Đặc điểm quan trọng nhất: động từ chia luôn đứng ở cuối mệnh đề phụ. Bốn liên từ phổ biến nhất ở trình độ A2 là: weil (vì), dass (rằng), wenn (khi/nếu), ob (liệu có...không). Đây là một trong những cấu trúc quan trọng nhất trong tiếng Đức vì nó thay đổi hoàn toàn trật tự từ so với câu chính.",
    rules: [
      {
        rule: "weil – Kausalsatz: Das Verb steht am Ende des Nebensatzes.",
        ruleVi:
          "weil (vì) – Mệnh đề nguyên nhân: Động từ chia đứng ở cuối mệnh đề phụ.",
        examples: [
          {
            de: "Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.",
            vi: "Tôi học tiếng Đức vì tôi muốn làm việc ở Đức.",
          },
          {
            de: "Er bleibt zu Hause, weil er krank ist.",
            vi: "Anh ấy ở nhà vì anh ấy bị ốm.",
          },
          {
            de: "Wir essen früh, weil wir hungrig sind.",
            vi: "Chúng tôi ăn sớm vì chúng tôi đói.",
          },
        ],
      },
      {
        rule: "dass – Inhaltssatz: Drückt eine Aussage oder Meinung aus.",
        ruleVi:
          "dass (rằng) – Mệnh đề nội dung: Diễn đạt một phát biểu hoặc ý kiến.",
        examples: [
          {
            de: "Ich denke, dass Deutsch interessant ist.",
            vi: "Tôi nghĩ rằng tiếng Đức thú vị.",
          },
          {
            de: "Er sagt, dass er morgen kommt.",
            vi: "Anh ấy nói rằng anh ấy đến ngày mai.",
          },
          {
            de: "Es ist wichtig, dass du pünktlich bist.",
            vi: "Điều quan trọng là bạn đúng giờ.",
          },
        ],
      },
      {
        rule: "wenn – Konditionalsatz oder Temporalsatz: Bedeutet 'wenn' (Bedingung) oder 'wenn/als' (Zeit).",
        ruleVi:
          "wenn (khi/nếu) – Mệnh đề điều kiện hoặc thời gian: Nghĩa là 'nếu' (điều kiện) hoặc 'khi' (thời gian).",
        examples: [
          {
            de: "Wenn es regnet, bleibe ich zu Hause.",
            vi: "Khi/Nếu trời mưa, tôi ở nhà.",
          },
          {
            de: "Ich bin glücklich, wenn du kommst.",
            vi: "Tôi vui khi bạn đến.",
          },
          {
            de: "Wenn ich Zeit habe, lese ich ein Buch.",
            vi: "Khi tôi có thời gian, tôi đọc sách.",
          },
        ],
      },
      {
        rule: "ob – Indirekter Fragesatz: Leitet eine Ja/Nein-Frage ein.",
        ruleVi:
          "ob (liệu có...không) – Câu hỏi gián tiếp: Dẫn dắt câu hỏi Có/Không.",
        examples: [
          {
            de: "Ich weiß nicht, ob er kommt.",
            vi: "Tôi không biết liệu anh ấy có đến không.",
          },
          {
            de: "Kannst du mir sagen, ob der Zug pünktlich ist?",
            vi: "Bạn có thể nói cho tôi biết liệu tàu có đúng giờ không?",
          },
          {
            de: "Sie fragt, ob wir mitkommen wollen.",
            vi: "Cô ấy hỏi liệu chúng tôi có muốn đi cùng không.",
          },
        ],
      },
      {
        rule: "Wenn der Nebensatz zuerst steht, beginnt der Hauptsatz mit dem Verb.",
        ruleVi:
          "Khi mệnh đề phụ đứng trước, mệnh đề chính bắt đầu bằng động từ.",
        examples: [
          {
            de: "Weil ich müde bin, gehe ich ins Bett.",
            vi: "Vì tôi mệt, tôi đi ngủ.",
          },
          {
            de: "Wenn du willst, können wir ins Kino gehen.",
            vi: "Nếu bạn muốn, chúng ta có thể đi xem phim.",
          },
          {
            de: "Dass er kommt, freut mich.",
            vi: "Việc anh ấy đến làm tôi vui.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Ich lerne Deutsch, weil ich möchte in Deutschland arbeiten.",
        correct:
          "Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.",
        explanation:
          "Trong mệnh đề phụ, động từ chia (möchte) phải đứng ở cuối câu, không phải ở vị trí thứ hai.",
      },
      {
        wrong: "Weil ich bin müde, gehe ich ins Bett.",
        correct: "Weil ich müde bin, gehe ich ins Bett.",
        explanation:
          "Trong mệnh đề phụ với weil, động từ 'bin' phải đứng ở cuối.",
      },
      {
        wrong: "Wenn es regnet, ich bleibe zu Hause.",
        correct: "Wenn es regnet, bleibe ich zu Hause.",
        explanation:
          "Khi mệnh đề phụ đứng trước, mệnh đề chính bắt đầu bằng động từ (đảo ngữ). 'bleibe' đứng trước 'ich'.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt dùng các liên từ tương tự (vì, rằng, khi/nếu, liệu) nhưng trật tự từ không thay đổi. Trong tiếng Đức, điểm khác biệt lớn nhất là động từ chia luôn đứng cuối mệnh đề phụ. Ví dụ: 'Tôi ở nhà vì tôi ốm' -> 'Ich bleibe zu Hause, weil ich krank bin' (bin đứng cuối). Người Việt thường quên quy tắc này vì tiếng Việt không có sự thay đổi trật tự từ.",
    exercises: [
      {
        type: "fillBlank",
        question:
          "Ich bleibe zu Hause, ___ ich krank bin. (weil/dass/wenn/ob)",
        questionVi:
          "Tôi ở nhà ___ tôi bị ốm. (weil/dass/wenn/ob)",
        options: ["weil", "dass", "wenn", "ob"],
        answer: "weil",
        explanation:
          "Dùng 'weil' vì câu diễn đạt lý do (vì sao ở nhà).",
      },
      {
        type: "reorder",
        question:
          "Ordne: ich / dass / Deutsch / er / denke, / lernt",
        questionVi: "Sắp xếp: ich / dass / Deutsch / er / denke, / lernt",
        answer: "Ich denke, dass er Deutsch lernt.",
        explanation:
          "Trong mệnh đề phụ với 'dass', động từ 'lernt' đứng cuối.",
      },
      {
        type: "multipleChoice",
        question:
          "Welcher Satz ist richtig?",
        questionVi: "Câu nào đúng?",
        options: [
          "Wenn ich habe Zeit, lese ich.",
          "Wenn ich Zeit habe, lese ich.",
          "Wenn ich Zeit habe, ich lese.",
        ],
        answer: "Wenn ich Zeit habe, lese ich.",
        explanation:
          "Trong mệnh đề wenn, động từ đứng cuối (habe). Mệnh đề chính sau đó bắt đầu bằng động từ (lese).",
      },
      {
        type: "translate",
        question: "Übersetze: Tôi không biết liệu cô ấy có đến không.",
        questionVi: "Dịch sang tiếng Đức: Tôi không biết liệu cô ấy có đến không.",
        answer: "Ich weiß nicht, ob sie kommt.",
        explanation:
          "'ob' dùng cho câu hỏi gián tiếp Có/Không. Động từ 'kommt' đứng cuối.",
      },
      {
        type: "trueFalse",
        question:
          "Im Nebensatz steht das Verb an Position 2. (Richtig oder Falsch?)",
        questionVi:
          "Trong mệnh đề phụ, động từ đứng ở vị trí thứ 2. (Đúng hay Sai?)",
        answer: "Falsch",
        explanation:
          "Sai. Trong mệnh đề phụ, động từ chia luôn đứng ở cuối câu, không phải vị trí thứ 2.",
      },
    ],
  },

  // ============================================================
  // 2. Relativsaetze
  // ============================================================
  {
    id: "a2-gram-02",
    title: "Relativsätze",
    titleVi: "Mệnh đề quan hệ",
    chapter: 2,
    order: 2,
    level: "A2",
    explanation:
      "Mệnh đề quan hệ (Relativsätze) dùng để bổ sung thông tin cho một danh từ trong câu chính. Chúng bắt đầu bằng đại từ quan hệ (der, die, das, den, dem...) và động từ đứng ở cuối. Đại từ quan hệ phải phù hợp với giống (Genus) của danh từ nó thay thế và cách (Kasus) theo chức năng trong mệnh đề quan hệ.",
    rules: [
      {
        rule: "Der Relativsatz beginnt mit einem Relativpronomen und das Verb steht am Ende.",
        ruleVi:
          "Mệnh đề quan hệ bắt đầu bằng đại từ quan hệ và động từ đứng ở cuối.",
        examples: [
          {
            de: "Der Mann, der dort steht, ist mein Lehrer.",
            vi: "Người đàn ông đứng ở đó là thầy giáo của tôi.",
          },
          {
            de: "Die Frau, die Deutsch spricht, kommt aus Vietnam.",
            vi: "Người phụ nữ nói tiếng Đức đến từ Việt Nam.",
          },
          {
            de: "Das Kind, das spielt, ist mein Sohn.",
            vi: "Đứa trẻ đang chơi là con trai tôi.",
          },
        ],
      },
      {
        rule: "Das Relativpronomen richtet sich im Genus und Numerus nach dem Bezugswort, im Kasus nach seiner Funktion im Relativsatz.",
        ruleVi:
          "Đại từ quan hệ theo giống và số của danh từ nó thay thế, theo cách (Kasus) theo chức năng của nó trong mệnh đề quan hệ.",
        examples: [
          {
            de: "Der Film, den ich gesehen habe, war toll. (Akkusativ)",
            vi: "Bộ phim mà tôi đã xem rất hay. (Akkusativ)",
          },
          {
            de: "Die Lehrerin, der ich ein Geschenk gegeben habe, war nett. (Dativ)",
            vi: "Cô giáo mà tôi đã tặng quà rất tốt bụng. (Dativ)",
          },
          {
            de: "Das Buch, das auf dem Tisch liegt, gehört mir.",
            vi: "Cuốn sách nằm trên bàn là của tôi.",
          },
        ],
      },
      {
        rule: "Relativpronomen im Nominativ: der (m), die (f), das (n), die (Pl).",
        ruleVi:
          "Đại từ quan hệ ở Nominativ: der (giống đực), die (giống cái), das (trung tính), die (số nhiều).",
        examples: [
          {
            de: "Der Hund, der bellt, ist groß.",
            vi: "Con chó sủa to lớn.",
          },
          {
            de: "Die Kinder, die spielen, sind laut.",
            vi: "Những đứa trẻ đang chơi rất ồn ào.",
          },
          {
            de: "Das Auto, das rot ist, gehört meinem Vater.",
            vi: "Chiếc xe màu đỏ thuộc về bố tôi.",
          },
        ],
      },
      {
        rule: "Relativpronomen im Akkusativ: den (m), die (f), das (n), die (Pl).",
        ruleVi:
          "Đại từ quan hệ ở Akkusativ: den (giống đực), die (giống cái), das (trung tính), die (số nhiều).",
        examples: [
          {
            de: "Der Kuchen, den sie gebacken hat, schmeckt gut.",
            vi: "Chiếc bánh mà cô ấy nướng rất ngon.",
          },
          {
            de: "Die Tasche, die ich gekauft habe, ist blau.",
            vi: "Chiếc túi mà tôi mua màu xanh.",
          },
          {
            de: "Die Bücher, die ich lese, sind spannend.",
            vi: "Những cuốn sách mà tôi đọc rất hấp dẫn.",
          },
        ],
      },
      {
        rule: "Der Relativsatz steht direkt hinter dem Bezugswort und wird durch Kommas abgetrennt.",
        ruleVi:
          "Mệnh đề quan hệ đứng ngay sau danh từ nó bổ nghĩa và được ngăn cách bằng dấu phẩy.",
        examples: [
          {
            de: "Die Stadt, die ich besucht habe, war wunderschön.",
            vi: "Thành phố mà tôi đã thăm rất đẹp.",
          },
          {
            de: "Der Arzt, den wir kennen, arbeitet im Krankenhaus.",
            vi: "Bác sĩ mà chúng tôi quen làm việc ở bệnh viện.",
          },
          {
            de: "Das Restaurant, das wir mögen, ist heute geschlossen.",
            vi: "Nhà hàng mà chúng tôi thích hôm nay đóng cửa.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Der Mann, der ich kenne, ist nett.",
        correct: "Der Mann, den ich kenne, ist nett.",
        explanation:
          "Trong mệnh đề quan hệ, 'ich kenne den Mann' -> cần Akkusativ 'den', không phải Nominativ 'der'.",
      },
      {
        wrong: "Die Frau, das dort steht, ist meine Mutter.",
        correct: "Die Frau, die dort steht, ist meine Mutter.",
        explanation:
          "Đại từ quan hệ phải cùng giống với danh từ: 'Frau' là giống cái -> 'die', không phải 'das'.",
      },
      {
        wrong: "Das Kind das spielt ist mein Sohn.",
        correct: "Das Kind, das spielt, ist mein Sohn.",
        explanation:
          "Mệnh đề quan hệ phải được ngăn cách bằng dấu phẩy.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt dùng từ 'mà' hoặc bỏ qua hoàn toàn để nối mệnh đề quan hệ, ví dụ: 'Người đàn ông (mà) đứng ở đó'. Trong tiếng Đức, bắt buộc phải dùng đại từ quan hệ phù hợp với giống và cách. Đây là điểm khó cho người Việt vì tiếng Việt không phân biệt giống và không có hệ thống cách.",
    exercises: [
      {
        type: "fillBlank",
        question:
          "Die Frau, ___ Deutsch spricht, kommt aus Vietnam. (der/die/das)",
        questionVi:
          "Người phụ nữ ___ nói tiếng Đức đến từ Việt Nam.",
        options: ["der", "die", "das"],
        answer: "die",
        explanation:
          "'Frau' là giống cái, chủ ngữ trong mệnh đề quan hệ -> Nominativ 'die'.",
      },
      {
        type: "multipleChoice",
        question: "Der Film, ___ ich gesehen habe, war gut.",
        questionVi: "Bộ phim ___ tôi đã xem rất hay.",
        options: ["der", "den", "das", "die"],
        answer: "den",
        explanation:
          "'Film' là giống đực, tân ngữ trực tiếp trong mệnh đề quan hệ -> Akkusativ 'den'.",
      },
      {
        type: "reorder",
        question:
          "Ordne: das / Das Kind, / spielt, / mein Sohn / ist",
        questionVi: "Sắp xếp câu đúng.",
        answer: "Das Kind, das spielt, ist mein Sohn.",
        explanation:
          "'Kind' là trung tính, chủ ngữ -> đại từ quan hệ 'das'. Động từ 'spielt' đứng cuối mệnh đề quan hệ.",
      },
      {
        type: "translate",
        question:
          "Übersetze: Chiếc bánh mà cô ấy nướng rất ngon.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Der Kuchen, den sie gebacken hat, schmeckt gut.",
        explanation:
          "'Kuchen' giống đực, tân ngữ -> 'den'. Perfekt: 'gebacken hat' đứng cuối.",
      },
      {
        type: "trueFalse",
        question:
          "Das Relativpronomen hat immer den gleichen Kasus wie das Bezugswort.",
        questionVi:
          "Đại từ quan hệ luôn cùng cách với danh từ nó thay thế.",
        answer: "Falsch",
        explanation:
          "Sai. Đại từ quan hệ cùng giống và số với danh từ, nhưng cách (Kasus) phụ thuộc vào chức năng của nó trong mệnh đề quan hệ.",
      },
    ],
  },

  // ============================================================
  // 3. Adjektivdeklination Nom+Akk
  // ============================================================
  {
    id: "a2-gram-03",
    title: "Adjektivdeklination im Nominativ und Akkusativ",
    titleVi: "Biến cách tính từ ở Nominativ và Akkusativ",
    chapter: 3,
    order: 3,
    level: "A2",
    explanation:
      "Khi tính từ đứng trước danh từ trong tiếng Đức, nó phải được biến cách (thêm đuôi) tùy theo giống, số và cách của danh từ, cũng như loại mạo từ đi kèm. Ở trình độ A2, chúng ta tập trung vào Nominativ và Akkusativ. Có ba dạng biến cách: sau mạo từ xác định (der/die/das), sau mạo từ bất định (ein/eine), và không mạo từ.",
    rules: [
      {
        rule: "Nach bestimmtem Artikel (Nominativ): der große Mann, die kleine Frau, das neue Auto, die alten Häuser → Endung immer -e (Sg.) oder -en (Pl.).",
        ruleVi:
          "Sau mạo từ xác định (Nominativ): der große Mann, die kleine Frau, das neue Auto, die alten Häuser -> Đuôi luôn là -e (số ít) hoặc -en (số nhiều).",
        examples: [
          { de: "Der große Hund schläft.", vi: "Con chó lớn đang ngủ." },
          {
            de: "Die kleine Katze spielt.",
            vi: "Con mèo nhỏ đang chơi.",
          },
          {
            de: "Das neue Buch ist interessant.",
            vi: "Cuốn sách mới thú vị.",
          },
        ],
      },
      {
        rule: "Nach bestimmtem Artikel (Akkusativ): den großen Mann (m. ändert sich!), die kleine Frau, das neue Auto → Maskulin: -en, Rest wie Nominativ.",
        ruleVi:
          "Sau mạo từ xác định (Akkusativ): den großen Mann (giống đực thay đổi!), die kleine Frau, das neue Auto -> Giống đực: -en, còn lại giống Nominativ.",
        examples: [
          {
            de: "Ich sehe den großen Hund.",
            vi: "Tôi thấy con chó lớn.",
          },
          {
            de: "Er kauft die neue Tasche.",
            vi: "Anh ấy mua chiếc túi mới.",
          },
          {
            de: "Wir lesen das interessante Buch.",
            vi: "Chúng tôi đọc cuốn sách thú vị.",
          },
        ],
      },
      {
        rule: "Nach unbestimmtem Artikel (Nominativ): ein großer Mann, eine kleine Frau, ein neues Auto → Adjektiv zeigt das Genus.",
        ruleVi:
          "Sau mạo từ bất định (Nominativ): ein großer Mann, eine kleine Frau, ein neues Auto -> Tính từ thể hiện giống.",
        examples: [
          {
            de: "Ein großer Baum steht im Garten.",
            vi: "Một cái cây lớn đứng trong vườn.",
          },
          {
            de: "Eine schöne Blume blüht.",
            vi: "Một bông hoa đẹp đang nở.",
          },
          {
            de: "Ein kleines Kind weint.",
            vi: "Một đứa trẻ nhỏ đang khóc.",
          },
        ],
      },
      {
        rule: "Nach unbestimmtem Artikel (Akkusativ): einen großen Mann, eine kleine Frau, ein neues Auto → Maskulin: -en.",
        ruleVi:
          "Sau mạo từ bất định (Akkusativ): einen großen Mann, eine kleine Frau, ein neues Auto -> Giống đực: -en.",
        examples: [
          {
            de: "Ich habe einen guten Freund.",
            vi: "Tôi có một người bạn tốt.",
          },
          {
            de: "Sie trinkt eine heiße Suppe.",
            vi: "Cô ấy uống một bát canh nóng.",
          },
          {
            de: "Er möchte ein kaltes Bier.",
            vi: "Anh ấy muốn một cốc bia lạnh.",
          },
        ],
      },
      {
        rule: "Ohne Artikel: großer Mann, kalte Milch, frisches Brot → Adjektiv übernimmt die Endung des bestimmten Artikels.",
        ruleVi:
          "Không mạo từ: großer Mann, kalte Milch, frisches Brot -> Tính từ mang đuôi của mạo từ xác định.",
        examples: [
          { de: "Kalte Milch schmeckt gut.", vi: "Sữa lạnh ngon." },
          { de: "Frisches Brot ist lecker.", vi: "Bánh mì tươi ngon." },
          {
            de: "Ich trinke schwarzen Kaffee.",
            vi: "Tôi uống cà phê đen.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Ich sehe der große Hund.",
        correct: "Ich sehe den großen Hund.",
        explanation:
          "Sau 'sehen' cần Akkusativ. Giống đực Akkusativ: den großen (không phải der große).",
      },
      {
        wrong: "Ein kleine Kind spielt.",
        correct: "Ein kleines Kind spielt.",
        explanation:
          "Sau 'ein' với danh từ trung tính Nominativ, tính từ cần đuôi -es để thể hiện giống: kleines.",
      },
      {
        wrong: "Die großen Hund bellt.",
        correct: "Der große Hund bellt.",
        explanation:
          "'Hund' là giống đực số ít -> 'der' (không phải 'die'), tính từ đuôi -e (không phải -en).",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt không biến cách tính từ. 'Con chó lớn' luôn giống nhau dù ở chủ ngữ hay tân ngữ. Trong tiếng Đức, đuôi tính từ thay đổi tùy theo giống, số, cách và loại mạo từ. Đây là một trong những phần ngữ pháp khó nhất cho người Việt vì hoàn toàn không có tương đương trong tiếng Việt. Mẹo: học thuộc bảng đuôi tính từ như bảng cửu chương.",
    exercises: [
      {
        type: "fillBlank",
        question: "Der ___ (groß) Hund schläft im Garten.",
        questionVi: "Con chó lớn ngủ trong vườn.",
        answer: "große",
        explanation:
          "Sau mạo từ xác định 'der' (Nominativ, giống đực) -> đuôi -e: große.",
      },
      {
        type: "multipleChoice",
        question: "Ich kaufe einen ___ Mantel.",
        questionVi: "Tôi mua một cái áo khoác ___.",
        options: ["warmer", "warmen", "warmes", "warme"],
        answer: "warmen",
        explanation:
          "Sau 'einen' (Akkusativ, giống đực) -> đuôi -en: warmen.",
      },
      {
        type: "fillBlank",
        question: "Eine ___ (schön) Blume steht auf dem Tisch.",
        questionVi: "Một bông hoa đẹp đặt trên bàn.",
        answer: "schöne",
        explanation:
          "Sau 'eine' (Nominativ, giống cái) -> đuôi -e: schöne.",
      },
      {
        type: "translate",
        question: "Übersetze: Tôi thấy chiếc xe mới.",
        questionVi: "Dịch sang tiếng Đức: Tôi thấy chiếc xe mới.",
        answer: "Ich sehe das neue Auto.",
        explanation:
          "'Auto' trung tính, Akkusativ (giống Nominativ) -> 'das neue Auto'.",
      },
      {
        type: "multipleChoice",
        question: "Das ist ein ___ Buch.",
        questionVi: "Đó là một cuốn sách ___.",
        options: [
          "interessantes",
          "interessante",
          "interessanter",
          "interessanten",
        ],
        answer: "interessantes",
        explanation:
          "Sau 'ein' (Nominativ, trung tính) -> đuôi -es: interessantes.",
      },
    ],
  },

  // ============================================================
  // 4. Praeteritum
  // ============================================================
  {
    id: "a2-gram-04",
    title: "Präteritum (Einfache Vergangenheit)",
    titleVi: "Thì quá khứ đơn (Präteritum)",
    chapter: 4,
    order: 4,
    level: "A2",
    explanation:
      "Präteritum là thì quá khứ đơn trong tiếng Đức, thường dùng trong văn viết, kể chuyện và với các động từ hay dùng như sein, haben, và các Modalverben (können, müssen, wollen...). Trong giao tiếp hàng ngày, người Đức thường dùng Perfekt thay cho Präteritum, nhưng với sein/haben/Modalverben thì Präteritum phổ biến hơn cả trong nói lẫn viết.",
    rules: [
      {
        rule: "Regelmäßige Verben: Stamm + -te, -test, -te, -ten, -tet, -ten.",
        ruleVi:
          "Động từ có quy tắc: Gốc + -te, -test, -te, -ten, -tet, -ten.",
        examples: [
          {
            de: "ich machte, du machtest, er machte, wir machten",
            vi: "tôi đã làm, bạn đã làm, anh ấy đã làm, chúng tôi đã làm",
          },
          {
            de: "Sie spielten gestern Fußball.",
            vi: "Họ đã chơi bóng đá hôm qua.",
          },
          {
            de: "Ich lernte Deutsch in der Schule.",
            vi: "Tôi đã học tiếng Đức ở trường.",
          },
        ],
      },
      {
        rule: "sein: ich war, du warst, er/sie/es war, wir waren, ihr wart, sie/Sie waren.",
        ruleVi:
          "sein (là/ở): ich war, du warst, er war, wir waren, ihr wart, sie waren.",
        examples: [
          { de: "Ich war gestern in Berlin.", vi: "Hôm qua tôi ở Berlin." },
          { de: "Wir waren müde.", vi: "Chúng tôi đã mệt." },
          {
            de: "Es war ein schöner Tag.",
            vi: "Đó là một ngày đẹp.",
          },
        ],
      },
      {
        rule: "haben: ich hatte, du hattest, er/sie/es hatte, wir hatten, ihr hattet, sie/Sie hatten.",
        ruleVi:
          "haben (có): ich hatte, du hattest, er hatte, wir hatten, ihr hattet, sie hatten.",
        examples: [
          { de: "Ich hatte keine Zeit.", vi: "Tôi đã không có thời gian." },
          { de: "Er hatte Hunger.", vi: "Anh ấy đã đói." },
          {
            de: "Wir hatten viel Spaß.",
            vi: "Chúng tôi đã rất vui.",
          },
        ],
      },
      {
        rule: "Modalverben im Präteritum: konnte, musste, wollte, durfte, sollte (kein Umlaut!).",
        ruleVi:
          "Các Modalverben ở Präteritum: konnte, musste, wollte, durfte, sollte (không có Umlaut!).",
        examples: [
          {
            de: "Ich konnte nicht schlafen.",
            vi: "Tôi đã không thể ngủ.",
          },
          {
            de: "Wir mussten früh aufstehen.",
            vi: "Chúng tôi đã phải dậy sớm.",
          },
          {
            de: "Sie wollte nach Hause gehen.",
            vi: "Cô ấy đã muốn về nhà.",
          },
        ],
      },
      {
        rule: "Unregelmäßige Verben ändern den Stammvokal: gehen→ging, kommen→kam, schreiben→schrieb.",
        ruleVi:
          "Động từ bất quy tắc thay đổi nguyên âm gốc: gehen->ging, kommen->kam, schreiben->schrieb.",
        examples: [
          { de: "Er ging nach Hause.", vi: "Anh ấy đã đi về nhà." },
          { de: "Sie kam um 8 Uhr.", vi: "Cô ấy đã đến lúc 8 giờ." },
          {
            de: "Ich schrieb einen Brief.",
            vi: "Tôi đã viết một bức thư.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Ich wäre gestern in Berlin.",
        correct: "Ich war gestern in Berlin.",
        explanation:
          "'wäre' là Konjunktiv II (giả định), không phải Präteritum. Quá khứ đơn của 'sein' là 'war'.",
      },
      {
        wrong: "Er könnte nicht kommen. (meaning: past)",
        correct: "Er konnte nicht kommen.",
        explanation:
          "'könnte' là Konjunktiv II. Präteritum của 'können' là 'konnte' (không Umlaut).",
      },
      {
        wrong: "Ich gehte nach Hause.",
        correct: "Ich ging nach Hause.",
        explanation:
          "'gehen' là động từ bất quy tắc, Präteritum là 'ging', không phải 'gehte'.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt dùng từ 'đã' để chỉ quá khứ mà không cần chia động từ. Tiếng Đức có hai thì quá khứ: Perfekt (dùng trong nói) và Präteritum (dùng trong viết và với sein/haben/Modalverben). Người Việt cần nhớ: khi nói 'tôi đã ở' -> dùng 'ich war' (Präteritum) thay vì 'ich bin gewesen' (Perfekt) vì với 'sein', Präteritum tự nhiên hơn.",
    exercises: [
      {
        type: "conjugation",
        question: "Konjugiere 'sein' im Präteritum: ich ___, du ___, er ___",
        questionVi: "Chia động từ 'sein' ở Präteritum: ich ___, du ___, er ___",
        answer: "war, warst, war",
        explanation:
          "sein -> ich war, du warst, er/sie/es war.",
      },
      {
        type: "fillBlank",
        question: "Gestern ___ (haben) wir viel Spaß.",
        questionVi: "Hôm qua chúng tôi ___ (có) rất vui.",
        answer: "hatten",
        explanation: "haben -> Präteritum: wir hatten.",
      },
      {
        type: "multipleChoice",
        question: "Er ___ gestern nach Berlin.",
        questionVi: "Hôm qua anh ấy ___ đến Berlin.",
        options: ["fuhr", "fahrente", "gefahren", "fährt"],
        answer: "fuhr",
        explanation:
          "'fahren' bất quy tắc -> Präteritum: fuhr.",
      },
      {
        type: "translate",
        question: "Übersetze: Tôi đã không thể đến.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Ich konnte nicht kommen.",
        explanation:
          "können -> Präteritum: konnte (không Umlaut).",
      },
      {
        type: "trueFalse",
        question:
          "Im Präteritum haben Modalverben keinen Umlaut.",
        questionVi:
          "Ở Präteritum, các Modalverben không có Umlaut.",
        answer: "Richtig",
        explanation:
          "Đúng. können->konnte, müssen->musste, dürfen->durfte (không có ö, ü, ü).",
      },
    ],
  },

  // ============================================================
  // 5. Konjunktiv II
  // ============================================================
  {
    id: "a2-gram-05",
    title: "Konjunktiv II (Höflichkeit und Wünsche)",
    titleVi: "Konjunktiv II (Lịch sự và ước muốn)",
    chapter: 5,
    order: 5,
    level: "A2",
    explanation:
      "Konjunktiv II dùng để diễn đạt điều không thực, ước muốn, lời khuyên lịch sự và yêu cầu lịch sự. Ở A2, chúng ta tập trung vào các dạng phổ biến nhất: würde + Infinitiv, và các dạng riêng của hätte, wäre, könnte, müsste, sollte. Đây là cách nói lịch sự rất quan trọng trong văn hóa Đức.",
    rules: [
      {
        rule: "würde + Infinitiv: Die häufigste Form für die meisten Verben.",
        ruleVi:
          "würde + Infinitiv: Dạng phổ biến nhất cho hầu hết các động từ.",
        examples: [
          {
            de: "Ich würde gern nach Japan reisen.",
            vi: "Tôi muốn đi du lịch Nhật Bản.",
          },
          {
            de: "Würdest du mir bitte helfen?",
            vi: "Bạn có thể giúp tôi được không?",
          },
          {
            de: "Wir würden gern einen Tisch reservieren.",
            vi: "Chúng tôi muốn đặt bàn.",
          },
        ],
      },
      {
        rule: "hätte (Konjunktiv II von 'haben'): ich hätte, du hättest, er hätte, wir hätten.",
        ruleVi:
          "hätte (Konjunktiv II của 'haben'): ich hätte, du hättest, er hätte, wir hätten.",
        examples: [
          {
            de: "Ich hätte gern ein Glas Wasser.",
            vi: "Tôi muốn một ly nước.",
          },
          {
            de: "Hätten Sie einen Moment Zeit?",
            vi: "Ngài có một chút thời gian không?",
          },
          {
            de: "Wenn ich mehr Zeit hätte, würde ich Sport machen.",
            vi: "Nếu tôi có nhiều thời gian hơn, tôi sẽ tập thể thao.",
          },
        ],
      },
      {
        rule: "wäre (Konjunktiv II von 'sein'): ich wäre, du wärst, er wäre, wir wären.",
        ruleVi:
          "wäre (Konjunktiv II của 'sein'): ich wäre, du wärst, er wäre, wir wären.",
        examples: [
          {
            de: "Das wäre sehr nett von Ihnen.",
            vi: "Điều đó rất tốt bụng của ngài.",
          },
          {
            de: "Wenn ich reich wäre, würde ich ein Haus kaufen.",
            vi: "Nếu tôi giàu, tôi sẽ mua nhà.",
          },
          {
            de: "Es wäre schön, wenn du kommst.",
            vi: "Sẽ tốt nếu bạn đến.",
          },
        ],
      },
      {
        rule: "Modalverben im Konjunktiv II: könnte, müsste, sollte, dürfte.",
        ruleVi:
          "Modalverben ở Konjunktiv II: könnte, müsste, sollte, dürfte.",
        examples: [
          {
            de: "Könnten Sie das bitte wiederholen?",
            vi: "Ngài có thể lặp lại không ạ?",
          },
          {
            de: "Du solltest mehr Wasser trinken.",
            vi: "Bạn nên uống nhiều nước hơn.",
          },
          {
            de: "Dürfte ich Sie etwas fragen?",
            vi: "Tôi có thể hỏi ngài điều gì đó không?",
          },
        ],
      },
      {
        rule: "Irreale Bedingungssätze: Wenn + Konjunktiv II, ... würde/hätte/wäre.",
        ruleVi:
          "Câu điều kiện không thực: Wenn + Konjunktiv II, ... würde/hätte/wäre.",
        examples: [
          {
            de: "Wenn ich Deutsch könnte, würde ich in Deutschland arbeiten.",
            vi: "Nếu tôi biết tiếng Đức, tôi sẽ làm việc ở Đức.",
          },
          {
            de: "Wenn das Wetter schön wäre, würden wir spazieren gehen.",
            vi: "Nếu thời tiết đẹp, chúng tôi sẽ đi dạo.",
          },
          {
            de: "Wenn ich du wäre, würde ich das nicht machen.",
            vi: "Nếu tôi là bạn, tôi sẽ không làm điều đó.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Ich will gern ein Glas Wasser.",
        correct: "Ich hätte gern ein Glas Wasser.",
        explanation:
          "'Ich will' nghe trực tiếp và không lịch sự. Dùng 'hätte gern' để yêu cầu lịch sự.",
      },
      {
        wrong: "Können Sie mir helfen?",
        correct: "Könnten Sie mir helfen?",
        explanation:
          "'Können' là trực tiếp, 'Könnten' (Konjunktiv II) lịch sự hơn nhiều.",
      },
      {
        wrong: "Wenn ich reich bin, kaufe ich ein Haus.",
        correct: "Wenn ich reich wäre, würde ich ein Haus kaufen.",
        explanation:
          "Câu điều kiện không thực cần Konjunktiv II: wäre...würde, không phải Indikativ: bin...kaufe.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt không có dạng chia động từ riêng cho giả định. 'Nếu tôi giàu' trong tiếng Việt giống nhau dù thực hay không thực. Tiếng Đức phân biệt rõ: thực tế 'Wenn ich reich bin' vs. không thực 'Wenn ich reich wäre'. Konjunktiv II cũng dùng để nói lịch sự, giống như trong tiếng Việt thêm 'ạ', 'được không ạ' -> tiếng Đức dùng hätte, könnte, würde.",
    exercises: [
      {
        type: "multipleChoice",
        question: "Wie bestellt man höflich im Restaurant?",
        questionVi: "Cách gọi món lịch sự trong nhà hàng?",
        options: [
          "Ich will ein Bier.",
          "Ich hätte gern ein Bier.",
          "Gib mir ein Bier.",
        ],
        answer: "Ich hätte gern ein Bier.",
        explanation: "'hätte gern' là cách gọi món lịch sự nhất.",
      },
      {
        type: "fillBlank",
        question:
          "Wenn ich mehr Geld ___ (haben), würde ich reisen.",
        questionVi: "Nếu tôi có nhiều tiền hơn, tôi sẽ đi du lịch.",
        answer: "hätte",
        explanation:
          "Konjunktiv II của 'haben': hätte.",
      },
      {
        type: "translate",
        question: "Übersetze: Bạn có thể giúp tôi được không ạ?",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Könnten Sie mir bitte helfen?",
        explanation:
          "'Könnten' (Konjunktiv II) + 'bitte' rất lịch sự.",
      },
      {
        type: "reorder",
        question:
          "Ordne: würde / Wenn / schön / ich / wäre, / spazieren gehen / das Wetter",
        questionVi: "Sắp xếp câu.",
        answer:
          "Wenn das Wetter schön wäre, würde ich spazieren gehen.",
        explanation:
          "Câu điều kiện không thực: Wenn + Konjunktiv II, würde + Infinitiv.",
      },
      {
        type: "trueFalse",
        question:
          "'Ich würde gern' ist höflicher als 'Ich will'.",
        questionVi:
          "'Ich würde gern' lịch sự hơn 'Ich will'.",
        answer: "Richtig",
        explanation:
          "Đúng. Konjunktiv II (würde gern) lịch sự hơn nhiều so với 'will' (muốn).",
      },
    ],
  },

  // ============================================================
  // 6. Passiv Praesens
  // ============================================================
  {
    id: "a2-gram-06",
    title: "Passiv Präsens",
    titleVi: "Thể bị động ở thì hiện tại",
    chapter: 6,
    order: 6,
    level: "A2",
    explanation:
      "Thể bị động (Passiv) dùng khi muốn nhấn mạnh hành động hoặc đối tượng chịu tác động, thay vì người thực hiện. Passiv Präsens được tạo bằng: werden (chia theo chủ ngữ) + Partizip II. Ví dụ: Das Haus wird gebaut (Ngôi nhà được xây). Thể bị động rất phổ biến trong tiếng Đức, đặc biệt trong ngôn ngữ trang trọng, báo chí và hướng dẫn.",
    rules: [
      {
        rule: "Bildung: Subjekt + werden (konjugiert) + Partizip II.",
        ruleVi:
          "Cách tạo: Chủ ngữ + werden (chia) + Partizip II.",
        examples: [
          {
            de: "Das Buch wird gelesen.",
            vi: "Cuốn sách được đọc.",
          },
          {
            de: "Die Tür wird geöffnet.",
            vi: "Cánh cửa được mở.",
          },
          {
            de: "Die Briefe werden geschrieben.",
            vi: "Những bức thư được viết.",
          },
        ],
      },
      {
        rule: "Konjugation von 'werden': ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden.",
        ruleVi:
          "Chia 'werden': ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden.",
        examples: [
          {
            de: "Ich werde gefragt.",
            vi: "Tôi được hỏi.",
          },
          {
            de: "Du wirst eingeladen.",
            vi: "Bạn được mời.",
          },
          {
            de: "Wir werden informiert.",
            vi: "Chúng tôi được thông báo.",
          },
        ],
      },
      {
        rule: "Der Agens (wer die Handlung ausführt) steht mit 'von + Dativ'.",
        ruleVi:
          "Người thực hiện hành động đi với 'von + Dativ'.",
        examples: [
          {
            de: "Das Buch wird von dem Lehrer gelesen.",
            vi: "Cuốn sách được đọc bởi thầy giáo.",
          },
          {
            de: "Die Torte wird von meiner Mutter gebacken.",
            vi: "Chiếc bánh được nướng bởi mẹ tôi.",
          },
          {
            de: "Das Lied wird von den Kindern gesungen.",
            vi: "Bài hát được hát bởi bọn trẻ.",
          },
        ],
      },
      {
        rule: "Umwandlung Aktiv → Passiv: Das Akkusativobjekt wird zum Subjekt.",
        ruleVi:
          "Chuyển đổi Chủ động -> Bị động: Tân ngữ Akkusativ trở thành chủ ngữ.",
        examples: [
          {
            de: "Aktiv: Der Koch kocht die Suppe. → Passiv: Die Suppe wird (vom Koch) gekocht.",
            vi: "Chủ động: Đầu bếp nấu canh. -> Bị động: Canh được nấu (bởi đầu bếp).",
          },
          {
            de: "Aktiv: Man repariert das Auto. → Passiv: Das Auto wird repariert.",
            vi: "Chủ động: Người ta sửa xe. -> Bị động: Xe được sửa.",
          },
          {
            de: "Aktiv: Die Firma baut ein Haus. → Passiv: Ein Haus wird (von der Firma) gebaut.",
            vi: "Chủ động: Công ty xây nhà. -> Bị động: Nhà được xây (bởi công ty).",
          },
        ],
      },
      {
        rule: "Passiv ohne Subjekt (unpersönliches Passiv): Es wird getanzt. Hier wird nicht geraucht.",
        ruleVi:
          "Bị động không chủ ngữ (bị động vô nhân xưng): Es wird getanzt. Hier wird nicht geraucht.",
        examples: [
          {
            de: "Hier wird nicht geraucht.",
            vi: "Ở đây không được hút thuốc.",
          },
          {
            de: "Es wird viel gearbeitet.",
            vi: "Người ta làm việc nhiều.",
          },
          {
            de: "Samstags wird gefeiert.",
            vi: "Thứ bảy người ta ăn mừng.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Das Buch wird lesen.",
        correct: "Das Buch wird gelesen.",
        explanation:
          "Passiv cần Partizip II (gelesen), không phải Infinitiv (lesen).",
      },
      {
        wrong: "Die Suppe wird von der Koch gekocht.",
        correct: "Die Suppe wird vom Koch gekocht.",
        explanation:
          "'von' + Dativ: 'der Koch' -> 'dem Koch' -> 'vom Koch'.",
      },
      {
        wrong: "Das Haus werden gebaut.",
        correct: "Das Haus wird gebaut.",
        explanation:
          "'Haus' số ít -> 'wird' (không phải 'werden').",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt dùng 'được' hoặc 'bị' để diễn đạt thể bị động: 'Nhà được xây' hoặc 'Anh ấy bị phạt'. Trong tiếng Đức, bị động luôn dùng 'werden' + Partizip II, không phân biệt tích cực/tiêu cực như 'được/bị'. Cấu trúc tiếng Đức phức tạp hơn vì phải chia 'werden' và dùng đúng Partizip II.",
    exercises: [
      {
        type: "fillBlank",
        question: "Die Tür ___ (öffnen - Passiv) um 8 Uhr.",
        questionVi: "Cánh cửa ___ lúc 8 giờ.",
        answer: "wird geöffnet",
        explanation: "Passiv Präsens: wird + Partizip II (geöffnet).",
      },
      {
        type: "multipleChoice",
        question:
          "Aktiv: Der Lehrer korrigiert die Tests. → Passiv: Die Tests ___ vom Lehrer korrigiert.",
        questionVi: "Chuyển sang bị động.",
        options: ["wird", "werden", "ist", "sind"],
        answer: "werden",
        explanation:
          "'Tests' số nhiều -> 'werden' korrigiert.",
      },
      {
        type: "translate",
        question: "Übersetze: Chiếc bánh được nướng bởi mẹ tôi.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Der Kuchen wird von meiner Mutter gebacken.",
        explanation:
          "Passiv: wird + gebacken. 'von meiner Mutter' (Dativ).",
      },
      {
        type: "reorder",
        question: "Ordne: wird / Das Auto / repariert",
        questionVi: "Sắp xếp câu.",
        answer: "Das Auto wird repariert.",
        explanation: "Bị động: Chủ ngữ + wird + Partizip II.",
      },
      {
        type: "trueFalse",
        question:
          "Im Passiv benutzt man 'haben' + Partizip II.",
        questionVi:
          "Trong thể bị động, người ta dùng 'haben' + Partizip II.",
        answer: "Falsch",
        explanation:
          "Sai. Bị động dùng 'werden' + Partizip II, không phải 'haben'.",
      },
    ],
  },

  // ============================================================
  // 7. Reflexive Verben
  // ============================================================
  {
    id: "a2-gram-07",
    title: "Reflexive Verben",
    titleVi: "Động từ phản thân",
    chapter: 7,
    order: 7,
    level: "A2",
    explanation:
      "Động từ phản thân (reflexive Verben) là động từ đi kèm đại từ phản thân (sich). Hành động quay về chính chủ ngữ. Ví dụ: 'sich waschen' (tự rửa/tắm). Đại từ phản thân thay đổi theo ngôi: mich, dich, sich, uns, euch, sich. Một số động từ luôn đi với 'sich' (như sich freuen), một số chỉ đôi khi (wie waschen).",
    rules: [
      {
        rule: "Reflexivpronomen im Akkusativ: mich, dich, sich, uns, euch, sich.",
        ruleVi:
          "Đại từ phản thân Akkusativ: mich, dich, sich, uns, euch, sich.",
        examples: [
          {
            de: "Ich wasche mich.",
            vi: "Tôi tự rửa (tắm).",
          },
          {
            de: "Er zieht sich an.",
            vi: "Anh ấy tự mặc quần áo.",
          },
          {
            de: "Wir freuen uns auf den Urlaub.",
            vi: "Chúng tôi mong chờ kỳ nghỉ.",
          },
        ],
      },
      {
        rule: "Reflexivpronomen im Dativ: mir, dir, sich, uns, euch, sich (wenn ein Akkusativobjekt vorhanden ist).",
        ruleVi:
          "Đại từ phản thân Dativ: mir, dir, sich, uns, euch, sich (khi đã có tân ngữ Akkusativ).",
        examples: [
          {
            de: "Ich wasche mir die Hände.",
            vi: "Tôi rửa tay (của tôi).",
          },
          {
            de: "Er putzt sich die Zähne.",
            vi: "Anh ấy đánh răng.",
          },
          {
            de: "Sie kämmt sich die Haare.",
            vi: "Cô ấy chải tóc.",
          },
        ],
      },
      {
        rule: "Echte reflexive Verben: sich freuen, sich erholen, sich beeilen, sich erinnern (immer mit 'sich').",
        ruleVi:
          "Động từ phản thân thực sự: sich freuen, sich erholen, sich beeilen, sich erinnern (luôn đi với 'sich').",
        examples: [
          {
            de: "Ich freue mich über das Geschenk.",
            vi: "Tôi vui vì món quà.",
          },
          {
            de: "Beeil dich! Wir kommen zu spät.",
            vi: "Nhanh lên! Chúng ta sẽ trễ.",
          },
          {
            de: "Erinnerst du dich an den Urlaub?",
            vi: "Bạn có nhớ kỳ nghỉ không?",
          },
        ],
      },
      {
        rule: "sich freuen über (Akk) = sich freuen an etwas Vergangenem; sich freuen auf (Akk) = Vorfreude auf etwas Zukünftiges.",
        ruleVi:
          "sich freuen über + Akk = vui vì điều đã xảy ra; sich freuen auf + Akk = mong chờ điều sắp xảy ra.",
        examples: [
          {
            de: "Ich freue mich über das gute Ergebnis.",
            vi: "Tôi vui vì kết quả tốt.",
          },
          {
            de: "Wir freuen uns auf die Ferien.",
            vi: "Chúng tôi mong chờ kỳ nghỉ.",
          },
          {
            de: "Sie freut sich über die Blumen.",
            vi: "Cô ấy vui vì hoa.",
          },
        ],
      },
      {
        rule: "Wortstellung: Im Hauptsatz steht das Reflexivpronomen nach dem konjugierten Verb.",
        ruleVi:
          "Trật tự từ: Trong câu chính, đại từ phản thân đứng sau động từ chia.",
        examples: [
          {
            de: "Ich setze mich auf den Stuhl.",
            vi: "Tôi ngồi xuống ghế.",
          },
          {
            de: "Morgens dusche ich mich schnell.",
            vi: "Buổi sáng tôi tắm nhanh.",
          },
          {
            de: "Am Abend erholen wir uns.",
            vi: "Buổi tối chúng tôi nghỉ ngơi.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Ich wasche mich die Hände.",
        correct: "Ich wasche mir die Hände.",
        explanation:
          "Khi có thêm tân ngữ Akkusativ (die Hände), đại từ phản thân phải ở Dativ: mir.",
      },
      {
        wrong: "Er freut über das Geschenk.",
        correct: "Er freut sich über das Geschenk.",
        explanation:
          "'sich freuen' là động từ phản thân, không thể bỏ 'sich'.",
      },
      {
        wrong: "Ich erinnere auf den Film.",
        correct: "Ich erinnere mich an den Film.",
        explanation:
          "'sich erinnern an + Akk': cần đại từ phản thân 'mich' và giới từ 'an'.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt dùng 'tự' để diễn đạt phản thân: 'tự rửa', 'tự mặc'. Nhưng nhiều động từ phản thân tiếng Đức không có nghĩa phản thân rõ ràng trong tiếng Việt. Ví dụ: 'sich freuen' (vui) - người Việt không nói 'tự vui'. Ngoài ra, tiếng Đức phân biệt đại từ phản thân Akkusativ/Dativ, điều mà tiếng Việt không có.",
    exercises: [
      {
        type: "fillBlank",
        question: "Ich freue ___ auf die Party.",
        questionVi: "Tôi mong chờ bữa tiệc.",
        options: ["mich", "mir", "sich", "mein"],
        answer: "mich",
        explanation:
          "'sich freuen auf' + Akkusativ: ich freue mich.",
      },
      {
        type: "multipleChoice",
        question: "Er wäscht ___ die Hände.",
        questionVi: "Anh ấy rửa tay.",
        options: ["sich", "ihm", "ihn", "sein"],
        answer: "sich",
        explanation:
          "Có tân ngữ 'die Hände' (Akk) -> đại từ phản thân ở Dativ: sich (cho er).",
      },
      {
        type: "conjugation",
        question:
          "Konjugiere 'sich beeilen' im Präsens: ich ___, du ___, er ___.",
        questionVi: "Chia 'sich beeilen': ich ___, du ___, er ___.",
        answer: "beeile mich, beeilst dich, beeilt sich",
        explanation:
          "sich beeilen: ich beeile mich, du beeilst dich, er beeilt sich.",
      },
      {
        type: "translate",
        question: "Übersetze: Bạn có nhớ kỳ nghỉ không?",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Erinnerst du dich an den Urlaub?",
        explanation:
          "sich erinnern an + Akk: Erinnerst du dich an...",
      },
      {
        type: "trueFalse",
        question:
          "'sich freuen auf' und 'sich freuen über' bedeuten das Gleiche.",
        questionVi:
          "'sich freuen auf' và 'sich freuen über' có nghĩa giống nhau.",
        answer: "Falsch",
        explanation:
          "Sai. 'auf' = mong chờ (tương lai), 'über' = vui vì (đã xảy ra/hiện tại).",
      },
    ],
  },

  // ============================================================
  // 8. Komparativ & Superlativ
  // ============================================================
  {
    id: "a2-gram-08",
    title: "Komparativ und Superlativ",
    titleVi: "So sánh hơn và so sánh nhất",
    chapter: 8,
    order: 8,
    level: "A2",
    explanation:
      "Komparativ (so sánh hơn) dùng để so sánh hai thứ, Superlativ (so sánh nhất) để nói điều gì đó lớn nhất/nhỏ nhất... Komparativ: tính từ + -er (schneller). Superlativ: am + tính từ + -sten (am schnellsten) hoặc der/die/das + tính từ + -ste. So sánh bằng: genauso...wie. So sánh hơn: ...als.",
    rules: [
      {
        rule: "Komparativ: Adjektiv + -er. Vergleich mit 'als'.",
        ruleVi:
          "So sánh hơn: Tính từ + -er. So sánh với 'als' (hơn).",
        examples: [
          {
            de: "Berlin ist größer als München.",
            vi: "Berlin lớn hơn München.",
          },
          {
            de: "Er läuft schneller als ich.",
            vi: "Anh ấy chạy nhanh hơn tôi.",
          },
          {
            de: "Deutsch ist schwieriger als Englisch.",
            vi: "Tiếng Đức khó hơn tiếng Anh.",
          },
        ],
      },
      {
        rule: "Superlativ: am + Adjektiv + -sten (prädikativ) oder der/die/das + Adjektiv + -ste (attributiv).",
        ruleVi:
          "So sánh nhất: am + tính từ + -sten (vị ngữ) hoặc der/die/das + tính từ + -ste (trước danh từ).",
        examples: [
          {
            de: "Der Everest ist am höchsten.",
            vi: "Everest cao nhất.",
          },
          {
            de: "Das ist der größte See in Deutschland.",
            vi: "Đó là hồ lớn nhất ở Đức.",
          },
          {
            de: "Sie ist die beste Schülerin.",
            vi: "Cô ấy là học sinh giỏi nhất.",
          },
        ],
      },
      {
        rule: "Umlaut bei kurzen Adjektiven: alt→älter, groß→größer, jung→jünger, lang→länger, warm→wärmer.",
        ruleVi:
          "Umlaut với tính từ ngắn: alt->älter, groß->größer, jung->jünger, lang->länger, warm->wärmer.",
        examples: [
          {
            de: "Mein Bruder ist älter als ich.",
            vi: "Anh trai tôi lớn tuổi hơn tôi.",
          },
          {
            de: "Im Sommer sind die Tage länger.",
            vi: "Vào mùa hè những ngày dài hơn.",
          },
          {
            de: "Heute ist es wärmer als gestern.",
            vi: "Hôm nay ấm hơn hôm qua.",
          },
        ],
      },
      {
        rule: "Unregelmäßige Formen: gut→besser→am besten, viel→mehr→am meisten, gern→lieber→am liebsten.",
        ruleVi:
          "Dạng bất quy tắc: gut->besser->am besten, viel->mehr->am meisten, gern->lieber->am liebsten.",
        examples: [
          {
            de: "Dieses Buch ist besser als das andere.",
            vi: "Cuốn sách này hay hơn cuốn kia.",
          },
          {
            de: "Ich esse am liebsten Pho.",
            vi: "Tôi thích ăn phở nhất.",
          },
          {
            de: "Er verdient mehr als ich.",
            vi: "Anh ấy kiếm nhiều hơn tôi.",
          },
        ],
      },
      {
        rule: "Gleichheit: genauso + Adjektiv + wie. Ungleichheit: nicht so + Adjektiv + wie.",
        ruleVi:
          "So sánh bằng: genauso + tính từ + wie. Không bằng: nicht so + tính từ + wie.",
        examples: [
          {
            de: "Er ist genauso groß wie ich.",
            vi: "Anh ấy cao bằng tôi.",
          },
          {
            de: "Tee ist nicht so stark wie Kaffee.",
            vi: "Trà không mạnh bằng cà phê.",
          },
          {
            de: "Vietnam ist genauso schön wie Thailand.",
            vi: "Việt Nam đẹp bằng Thái Lan.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Berlin ist größer wie München.",
        correct: "Berlin ist größer als München.",
        explanation:
          "So sánh hơn dùng 'als' (không phải 'wie'). 'wie' chỉ dùng cho so sánh bằng.",
      },
      {
        wrong: "Er ist der guter Schüler.",
        correct: "Er ist der beste Schüler.",
        explanation:
          "Superlativ của 'gut' là 'beste' (bất quy tắc), không phải 'guter'.",
      },
      {
        wrong: "Sie ist mehr schön als ihre Schwester.",
        correct: "Sie ist schöner als ihre Schwester.",
        explanation:
          "Tiếng Đức thêm -er vào tính từ, không dùng 'mehr' trước tính từ (khác tiếng Việt 'đẹp hơn').",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt dùng 'hơn' sau tính từ (đẹp hơn) và 'nhất' (đẹp nhất). Tiếng Đức thêm đuôi -er/-sten vào tính từ. Lỗi phổ biến nhất của người Việt: dùng 'wie' thay vì 'als' (vì tiếng Việt dùng 'hơn' cho cả hai), và quên Umlaut. Người Việt cũng hay dùng 'mehr + tính từ' (giống 'more + adj' trong tiếng Anh) thay vì thêm đuôi -er.",
    exercises: [
      {
        type: "fillBlank",
        question: "Berlin ist ___ (groß) als Hamburg.",
        questionVi: "Berlin lớn hơn Hamburg.",
        answer: "größer",
        explanation: "groß -> größer (Komparativ với Umlaut).",
      },
      {
        type: "multipleChoice",
        question: "Das ist ___ Restaurant in der Stadt.",
        questionVi: "Đó là nhà hàng ___ trong thành phố.",
        options: [
          "das beste",
          "das besser",
          "das guter",
          "das am besten",
        ],
        answer: "das beste",
        explanation:
          "Superlativ trước danh từ: das beste (gut->besser->beste).",
      },
      {
        type: "fillBlank",
        question: "Er ist genauso alt ___ ich.",
        questionVi: "Anh ấy lớn tuổi bằng tôi.",
        options: ["als", "wie", "von", "mit"],
        answer: "wie",
        explanation: "So sánh bằng: genauso...wie.",
      },
      {
        type: "translate",
        question: "Übersetze: Tôi thích ăn phở nhất.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Ich esse am liebsten Pho.",
        explanation:
          "gern -> lieber -> am liebsten (bất quy tắc).",
      },
      {
        type: "reorder",
        question: "Ordne: schneller / als / Er / ich / läuft",
        questionVi: "Sắp xếp câu.",
        answer: "Er läuft schneller als ich.",
        explanation: "Komparativ: schneller + als.",
      },
    ],
  },

  // ============================================================
  // 9. Infinitiv mit zu / um...zu
  // ============================================================
  {
    id: "a2-gram-09",
    title: "Infinitiv mit zu / um...zu",
    titleVi: "Nguyên thể với zu / um...zu",
    chapter: 9,
    order: 9,
    level: "A2",
    explanation:
      "Cấu trúc 'Infinitiv mit zu' (nguyên thể với zu) dùng sau nhiều động từ, tính từ và danh từ. 'zu' đứng ngay trước động từ nguyên thể ở cuối câu. 'um...zu' diễn đạt mục đích (để làm gì). Với động từ tách: 'zu' xen giữa tiền tố và gốc từ (aufzustehen). Cấu trúc này thay thế mệnh đề phụ khi chủ ngữ giống nhau.",
    rules: [
      {
        rule: "Infinitiv mit zu nach bestimmten Verben: versuchen, beginnen, vergessen, hoffen, planen + zu + Infinitiv.",
        ruleVi:
          "Nguyên thể với zu sau các động từ: versuchen, beginnen, vergessen, hoffen, planen + zu + nguyên thể.",
        examples: [
          {
            de: "Ich versuche, Deutsch zu lernen.",
            vi: "Tôi cố gắng học tiếng Đức.",
          },
          {
            de: "Er beginnt, das Buch zu lesen.",
            vi: "Anh ấy bắt đầu đọc sách.",
          },
          {
            de: "Vergiss nicht, die Tür abzuschließen!",
            vi: "Đừng quên khóa cửa!",
          },
        ],
      },
      {
        rule: "Infinitiv mit zu nach Adjektiven: Es ist wichtig/schwer/leicht/schön + zu + Infinitiv.",
        ruleVi:
          "Nguyên thể với zu sau tính từ: Es ist wichtig/schwer/leicht/schön + zu + nguyên thể.",
        examples: [
          {
            de: "Es ist wichtig, pünktlich zu sein.",
            vi: "Điều quan trọng là đúng giờ.",
          },
          {
            de: "Es ist schwer, Deutsch zu lernen.",
            vi: "Học tiếng Đức khó.",
          },
          {
            de: "Es ist schön, dich zu sehen.",
            vi: "Rất vui được gặp bạn.",
          },
        ],
      },
      {
        rule: "um...zu + Infinitiv: Drückt einen Zweck/ein Ziel aus (= damit).",
        ruleVi:
          "um...zu + nguyên thể: Diễn đạt mục đích (= để).",
        examples: [
          {
            de: "Ich lerne Deutsch, um in Deutschland zu arbeiten.",
            vi: "Tôi học tiếng Đức để làm việc ở Đức.",
          },
          {
            de: "Er spart Geld, um ein Auto zu kaufen.",
            vi: "Anh ấy tiết kiệm tiền để mua xe.",
          },
          {
            de: "Sie geht ins Fitnessstudio, um fit zu bleiben.",
            vi: "Cô ấy đi phòng gym để giữ dáng.",
          },
        ],
      },
      {
        rule: "Bei trennbaren Verben steht 'zu' zwischen Präfix und Verb: auf-zu-stehen, an-zu-fangen, ein-zu-kaufen.",
        ruleVi:
          "Với động từ tách, 'zu' xen giữa tiền tố và động từ: auf-zu-stehen, an-zu-fangen, ein-zu-kaufen.",
        examples: [
          {
            de: "Es ist schwer, früh aufzustehen.",
            vi: "Dậy sớm thật khó.",
          },
          {
            de: "Ich habe vergessen, Milch einzukaufen.",
            vi: "Tôi đã quên mua sữa.",
          },
          {
            de: "Er versucht, das Fenster aufzumachen.",
            vi: "Anh ấy cố mở cửa sổ.",
          },
        ],
      },
      {
        rule: "Kein 'zu' nach Modalverben (können, müssen, wollen...) und nach lassen, sehen, hören.",
        ruleVi:
          "Không dùng 'zu' sau Modalverben (können, müssen, wollen...) và sau lassen, sehen, hören.",
        examples: [
          {
            de: "Ich kann Deutsch sprechen. (NICHT: zu sprechen)",
            vi: "Tôi có thể nói tiếng Đức.",
          },
          {
            de: "Ich muss arbeiten. (NICHT: zu arbeiten)",
            vi: "Tôi phải làm việc.",
          },
          {
            de: "Ich höre die Vögel singen.",
            vi: "Tôi nghe chim hót.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Ich versuche Deutsch lernen.",
        correct: "Ich versuche, Deutsch zu lernen.",
        explanation:
          "Sau 'versuchen' cần 'zu' + Infinitiv. Không thể bỏ 'zu'.",
      },
      {
        wrong: "Ich lerne Deutsch, um in Deutschland arbeiten.",
        correct:
          "Ich lerne Deutsch, um in Deutschland zu arbeiten.",
        explanation:
          "'um...zu' luôn cần 'zu' trước động từ nguyên thể ở cuối.",
      },
      {
        wrong: "Es ist schwer, früh zu aufstehen.",
        correct: "Es ist schwer, früh aufzustehen.",
        explanation:
          "Với động từ tách, 'zu' xen giữa: aufzustehen (không phải 'zu aufstehen').",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt dùng 'để' cho mục đích, tương tự 'um...zu': 'Tôi học để làm việc'. Tuy nhiên, tiếng Việt không có cấu trúc 'zu + nguyên thể' sau động từ. 'Tôi cố gắng học' trong tiếng Đức phải có 'zu': 'Ich versuche zu lernen'. Người Việt thường quên 'zu' vì tiếng Việt không cần nó.",
    exercises: [
      {
        type: "fillBlank",
        question:
          "Ich lerne Deutsch, ___ in Deutschland ___ arbeiten.",
        questionVi: "Tôi học tiếng Đức để làm việc ở Đức.",
        answer: "um ... zu",
        explanation: "um...zu diễn đạt mục đích (để).",
      },
      {
        type: "multipleChoice",
        question: "Es ist schwer, früh ___.",
        questionVi: "Dậy sớm thật khó.",
        options: [
          "aufzustehen",
          "zu aufstehen",
          "aufstehen zu",
          "aufstehen",
        ],
        answer: "aufzustehen",
        explanation:
          "Động từ tách: 'zu' xen giữa tiền tố và gốc -> aufzustehen.",
      },
      {
        type: "fillBlank",
        question: "Er versucht, das Problem ___ (lösen).",
        questionVi: "Anh ấy cố gắng giải quyết vấn đề.",
        answer: "zu lösen",
        explanation: "Sau versuchen: zu + Infinitiv.",
      },
      {
        type: "translate",
        question: "Übersetze: Điều quan trọng là đúng giờ.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Es ist wichtig, pünktlich zu sein.",
        explanation:
          "Es ist wichtig + zu + Infinitiv.",
      },
      {
        type: "trueFalse",
        question:
          "Nach Modalverben benutzt man 'zu' + Infinitiv.",
        questionVi:
          "Sau Modalverben, người ta dùng 'zu' + nguyên thể.",
        answer: "Falsch",
        explanation:
          "Sai. Sau Modalverben (können, müssen...) dùng Infinitiv KHÔNG có 'zu'.",
      },
    ],
  },

  // ============================================================
  // 10. Futur I
  // ============================================================
  {
    id: "a2-gram-10",
    title: "Futur I",
    titleVi: "Thì tương lai I",
    chapter: 10,
    order: 10,
    level: "A2",
    explanation:
      "Futur I dùng để diễn đạt kế hoạch, dự đoán hoặc lời hứa trong tương lai. Cấu trúc: werden (chia) + Infinitiv ở cuối câu. Tuy nhiên, trong giao tiếp hàng ngày, người Đức thường dùng Präsens + từ chỉ thời gian (morgen, nächste Woche) thay cho Futur I. Futur I cũng dùng để diễn đạt sự phỏng đoán: 'Er wird wohl krank sein' (Anh ấy chắc bị ốm).",
    rules: [
      {
        rule: "Bildung: Subjekt + werden (konjugiert) + ... + Infinitiv (am Ende).",
        ruleVi:
          "Cách tạo: Chủ ngữ + werden (chia) + ... + Infinitiv (ở cuối).",
        examples: [
          {
            de: "Ich werde morgen nach Berlin fahren.",
            vi: "Ngày mai tôi sẽ đi Berlin.",
          },
          {
            de: "Wir werden nächstes Jahr heiraten.",
            vi: "Năm sau chúng tôi sẽ kết hôn.",
          },
          {
            de: "Er wird Arzt werden.",
            vi: "Anh ấy sẽ trở thành bác sĩ.",
          },
        ],
      },
      {
        rule: "Konjugation von 'werden': ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden.",
        ruleVi:
          "Chia 'werden': ich werde, du wirst, er wird, wir werden, ihr werdet, sie werden.",
        examples: [
          {
            de: "Du wirst das schaffen!",
            vi: "Bạn sẽ làm được!",
          },
          {
            de: "Sie wird uns besuchen.",
            vi: "Cô ấy sẽ thăm chúng tôi.",
          },
          {
            de: "Ihr werdet viel lernen.",
            vi: "Các bạn sẽ học được nhiều.",
          },
        ],
      },
      {
        rule: "Futur I für Vermutungen: werden + wohl/wahrscheinlich + Infinitiv.",
        ruleVi:
          "Futur I cho sự phỏng đoán: werden + wohl/wahrscheinlich + Infinitiv.",
        examples: [
          {
            de: "Er wird wohl krank sein.",
            vi: "Anh ấy chắc bị ốm.",
          },
          {
            de: "Es wird wahrscheinlich regnen.",
            vi: "Trời có lẽ sẽ mưa.",
          },
          {
            de: "Sie wird wohl zu Hause sein.",
            vi: "Cô ấy chắc ở nhà.",
          },
        ],
      },
      {
        rule: "Futur I für Versprechen und Vorsätze.",
        ruleVi:
          "Futur I cho lời hứa và quyết tâm.",
        examples: [
          {
            de: "Ich werde dir helfen, versprochen!",
            vi: "Tôi sẽ giúp bạn, hứa!",
          },
          {
            de: "Ich werde mehr Sport machen.",
            vi: "Tôi sẽ tập thể thao nhiều hơn.",
          },
          {
            de: "Wir werden pünktlich sein.",
            vi: "Chúng tôi sẽ đúng giờ.",
          },
        ],
      },
      {
        rule: "Alternative: Präsens + Zeitangabe wird im Alltag häufiger benutzt.",
        ruleVi:
          "Thay thế: Präsens + từ chỉ thời gian được dùng phổ biến hơn trong đời sống.",
        examples: [
          {
            de: "Ich fahre morgen nach Berlin. (statt: Ich werde morgen fahren.)",
            vi: "Ngày mai tôi đi Berlin. (thay vì: Tôi sẽ đi.)",
          },
          {
            de: "Nächste Woche fliegen wir nach Vietnam.",
            vi: "Tuần sau chúng tôi bay về Việt Nam.",
          },
          {
            de: "Heute Abend koche ich.",
            vi: "Tối nay tôi nấu ăn.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Ich werde morgen nach Berlin gefahren.",
        correct: "Ich werde morgen nach Berlin fahren.",
        explanation:
          "Futur I dùng Infinitiv (fahren), không phải Partizip II (gefahren).",
      },
      {
        wrong: "Ich werde fahre nach Berlin.",
        correct: "Ich werde nach Berlin fahren.",
        explanation:
          "Infinitiv đứng ở cuối câu và không được chia: fahren (không phải fahre).",
      },
      {
        wrong: "Er wird kommen werden.",
        correct: "Er wird kommen.",
        explanation:
          "'werden' chỉ xuất hiện một lần (chia) + Infinitiv. Không cần 'werden' lần hai.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt dùng 'sẽ' trước động từ: 'Tôi sẽ đi'. Tiếng Đức dùng 'werden' (chia) + Infinitiv cuối câu. Giống tiếng Việt, tiếng Đức cũng thường bỏ cấu trúc tương lai khi có từ chỉ thời gian (morgen): 'Morgen fahre ich' = 'Ngày mai tôi đi'. Người Việt dễ hiểu Futur I nhưng hay quên đặt Infinitiv ở cuối câu.",
    exercises: [
      {
        type: "fillBlank",
        question: "Ich ___ morgen nach München fahren.",
        questionVi: "Ngày mai tôi sẽ đi München.",
        answer: "werde",
        explanation: "Futur I: ich werde + Infinitiv.",
      },
      {
        type: "multipleChoice",
        question: "Er ___ wohl krank sein.",
        questionVi: "Anh ấy chắc bị ốm.",
        options: ["werde", "wirst", "wird", "werden"],
        answer: "wird",
        explanation: "er/sie/es wird + Infinitiv.",
      },
      {
        type: "reorder",
        question:
          "Ordne: werden / Wir / Jahr / heiraten / nächstes",
        questionVi: "Sắp xếp câu.",
        answer: "Wir werden nächstes Jahr heiraten.",
        explanation:
          "Futur I: Subjekt + werden + ... + Infinitiv (cuối).",
      },
      {
        type: "translate",
        question: "Übersetze: Bạn sẽ làm được!",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Du wirst das schaffen!",
        explanation: "Futur I: du wirst + Infinitiv.",
      },
      {
        type: "trueFalse",
        question:
          "Futur I kann auch eine Vermutung ausdrücken.",
        questionVi:
          "Futur I cũng có thể diễn đạt sự phỏng đoán.",
        answer: "Richtig",
        explanation:
          "Đúng. 'Er wird wohl krank sein' = Anh ấy chắc bị ốm (phỏng đoán).",
      },
    ],
  },

  // ============================================================
  // 11. Indirekte Fragen
  // ============================================================
  {
    id: "a2-gram-11",
    title: "Indirekte Fragen",
    titleVi: "Câu hỏi gián tiếp",
    chapter: 10,
    order: 11,
    level: "A2",
    explanation:
      "Câu hỏi gián tiếp (indirekte Fragen) dùng khi muốn hỏi một cách lịch sự hơn hoặc kể lại câu hỏi. Cấu trúc: mệnh đề chính + từ hỏi/ob + chủ ngữ + ... + động từ (cuối). Câu hỏi có từ hỏi (W-Frage) giữ nguyên từ hỏi. Câu hỏi Có/Không dùng 'ob'. Quan trọng: câu hỏi gián tiếp không đảo ngữ, và thường không có dấu chấm hỏi nếu mệnh đề chính là câu trần thuật.",
    rules: [
      {
        rule: "W-Fragen: Hauptsatz + W-Wort + Subjekt + ... + Verb (Ende).",
        ruleVi:
          "Câu hỏi W: Mệnh đề chính + từ hỏi W + chủ ngữ + ... + động từ (cuối).",
        examples: [
          {
            de: "Können Sie mir sagen, wo der Bahnhof ist?",
            vi: "Ngài có thể nói cho tôi biết nhà ga ở đâu không?",
          },
          {
            de: "Ich weiß nicht, wann der Zug kommt.",
            vi: "Tôi không biết khi nào tàu đến.",
          },
          {
            de: "Weißt du, wie viel das kostet?",
            vi: "Bạn có biết cái đó giá bao nhiêu không?",
          },
        ],
      },
      {
        rule: "Ja/Nein-Fragen: Hauptsatz + ob + Subjekt + ... + Verb (Ende).",
        ruleVi:
          "Câu hỏi Có/Không: Mệnh đề chính + ob + chủ ngữ + ... + động từ (cuối).",
        examples: [
          {
            de: "Ich möchte wissen, ob der Laden offen ist.",
            vi: "Tôi muốn biết liệu cửa hàng có mở không.",
          },
          {
            de: "Können Sie mir sagen, ob es hier ein Hotel gibt?",
            vi: "Ngài có thể cho tôi biết ở đây có khách sạn không?",
          },
          {
            de: "Er fragt, ob wir mitkommen.",
            vi: "Anh ấy hỏi liệu chúng tôi có đi cùng không.",
          },
        ],
      },
      {
        rule: "Höfliche Einleitungen: Können Sie mir sagen, ...? / Wissen Sie, ...? / Ich möchte wissen, ... / Ich frage mich, ...",
        ruleVi:
          "Các cách mở đầu lịch sự: Können Sie mir sagen, ...? / Wissen Sie, ...? / Ich möchte wissen, ... / Ich frage mich, ...",
        examples: [
          {
            de: "Wissen Sie, wo ich Tickets kaufen kann?",
            vi: "Ngài có biết tôi có thể mua vé ở đâu không?",
          },
          {
            de: "Könnten Sie mir sagen, wie ich zum Rathaus komme?",
            vi: "Ngài có thể cho tôi biết cách đến tòa thị chính không?",
          },
          {
            de: "Ich frage mich, warum er nicht gekommen ist.",
            vi: "Tôi tự hỏi tại sao anh ấy không đến.",
          },
        ],
      },
      {
        rule: "Direkte → Indirekte Frage: Verbposition ändert sich von Position 1/2 auf die letzte Position.",
        ruleVi:
          "Câu hỏi trực tiếp -> gián tiếp: Vị trí động từ thay đổi từ vị trí 1/2 sang vị trí cuối.",
        examples: [
          {
            de: "Direkt: Wo ist der Bahnhof? → Indirekt: Wissen Sie, wo der Bahnhof ist?",
            vi: "Trực tiếp: Nhà ga ở đâu? -> Gián tiếp: Ngài có biết nhà ga ở đâu không?",
          },
          {
            de: "Direkt: Kommt er morgen? → Indirekt: Weißt du, ob er morgen kommt?",
            vi: "Trực tiếp: Anh ấy đến ngày mai? -> Gián tiếp: Bạn có biết liệu anh ấy có đến ngày mai không?",
          },
          {
            de: "Direkt: Was kostet das? → Indirekt: Können Sie mir sagen, was das kostet?",
            vi: "Trực tiếp: Cái đó giá bao nhiêu? -> Gián tiếp: Ngài có thể cho biết cái đó giá bao nhiêu?",
          },
        ],
      },
      {
        rule: "Kein Fragezeichen, wenn der Hauptsatz eine Aussage ist. Fragezeichen nur, wenn der Hauptsatz eine Frage ist.",
        ruleVi:
          "Không có dấu chấm hỏi khi mệnh đề chính là câu trần thuật. Chỉ có dấu hỏi khi mệnh đề chính là câu hỏi.",
        examples: [
          {
            de: "Ich weiß nicht, wo er wohnt. (kein Fragezeichen)",
            vi: "Tôi không biết anh ấy sống ở đâu. (không có dấu hỏi)",
          },
          {
            de: "Wissen Sie, wo er wohnt? (Fragezeichen)",
            vi: "Ngài có biết anh ấy sống ở đâu không? (có dấu hỏi)",
          },
          {
            de: "Er fragt, ob wir kommen. (kein Fragezeichen)",
            vi: "Anh ấy hỏi liệu chúng tôi có đến không. (không có dấu hỏi)",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Können Sie mir sagen, wo ist der Bahnhof?",
        correct: "Können Sie mir sagen, wo der Bahnhof ist?",
        explanation:
          "Trong câu hỏi gián tiếp, động từ đứng cuối (ist), không đảo ngữ.",
      },
      {
        wrong: "Ich weiß nicht, kommt er morgen.",
        correct: "Ich weiß nicht, ob er morgen kommt.",
        explanation:
          "Câu hỏi Có/Không gián tiếp cần 'ob' và động từ ở cuối.",
      },
      {
        wrong: "Weißt du, was kostet das?",
        correct: "Weißt du, was das kostet?",
        explanation:
          "Trong câu hỏi gián tiếp, trật tự là: từ hỏi + chủ ngữ + ... + động từ (cuối).",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt không thay đổi trật tự từ giữa câu hỏi trực tiếp và gián tiếp: 'Nhà ga ở đâu?' và 'Bạn biết nhà ga ở đâu không?' có cùng trật tự 'nhà ga ở đâu'. Trong tiếng Đức, trật tự thay đổi: 'Wo ist der Bahnhof?' -> 'wo der Bahnhof ist' (động từ về cuối). Đây là lỗi phổ biến nhất của người Việt.",
    exercises: [
      {
        type: "reorder",
        question:
          "Ordne: mir sagen, / der Bahnhof / wo / Können Sie / ist?",
        questionVi: "Sắp xếp câu hỏi gián tiếp.",
        answer: "Können Sie mir sagen, wo der Bahnhof ist?",
        explanation:
          "Câu hỏi gián tiếp: từ hỏi + chủ ngữ + ... + động từ (cuối).",
      },
      {
        type: "fillBlank",
        question:
          "Ich weiß nicht, ___ er morgen kommt. (ob/dass/weil)",
        questionVi:
          "Tôi không biết ___ anh ấy có đến ngày mai không.",
        options: ["ob", "dass", "weil"],
        answer: "ob",
        explanation:
          "Câu hỏi Có/Không gián tiếp dùng 'ob'.",
      },
      {
        type: "multipleChoice",
        question:
          "Direkt: Was kostet das? → Indirekt: Wissen Sie, ___?",
        questionVi: "Chuyển sang câu hỏi gián tiếp.",
        options: [
          "was kostet das",
          "was das kostet",
          "das was kostet",
        ],
        answer: "was das kostet",
        explanation:
          "Gián tiếp: từ hỏi + chủ ngữ + ... + động từ cuối.",
      },
      {
        type: "translate",
        question:
          "Übersetze: Bạn có biết cửa hàng mở lúc mấy giờ không?",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Weißt du, wann der Laden öffnet?",
        explanation:
          "Câu hỏi gián tiếp: wann + chủ ngữ + động từ cuối.",
      },
      {
        type: "trueFalse",
        question:
          "In indirekten Fragen steht das Verb an Position 2.",
        questionVi:
          "Trong câu hỏi gián tiếp, động từ đứng ở vị trí thứ 2.",
        answer: "Falsch",
        explanation:
          "Sai. Trong câu hỏi gián tiếp, động từ đứng ở cuối mệnh đề.",
      },
    ],
  },
];
