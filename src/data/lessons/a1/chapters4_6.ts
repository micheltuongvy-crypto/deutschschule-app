// A1 Chapters 4-6: Wohnung & Möbel, Alltag & Tagesablauf, Einkaufen & Kleidung

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

export const a1Chapters4_6: Lesson[] = [
  // ============================================================
  // CHAPTER 4: Wohnung & Möbel
  // ============================================================

  // --- Chapter 4, Lesson 1: Meine Wohnung ---
  {
    id: "a1-ch4-l1",
    chapterId: 4,
    lessonNumber: 1,
    title: "Meine Wohnung",
    titleVi: "Căn hộ của tôi",
    type: "Einführung",
    objectives: [
      "Nắm được từ vựng về các phòng trong nhà",
      "Mô tả đồ nội thất cơ bản",
      "Sử dụng câu hỏi 'Wo ist...?' để hỏi vị trí đồ vật"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Die Wohnung",
        titleVi: "Căn hộ",
        textDe: "In Deutschland wohnen viele Menschen in einer Wohnung. Eine Wohnung hat verschiedene Zimmer: das Wohnzimmer, das Schlafzimmer, die Küche, das Badezimmer und den Flur. Manche Wohnungen haben auch einen Balkon oder eine Terrasse.",
        textVi: "Ở Đức, nhiều người sống trong một căn hộ. Một căn hộ có nhiều phòng khác nhau: phòng khách, phòng ngủ, nhà bếp, phòng tắm và hành lang. Một số căn hộ còn có ban công hoặc sân hiên."
      },
      {
        type: "vocabulary",
        titleDe: "Zimmer in der Wohnung",
        titleVi: "Các phòng trong căn hộ",
        words: [
          { de: "Wohnzimmer", vi: "phòng khách", article: "das" },
          { de: "Schlafzimmer", vi: "phòng ngủ", article: "das" },
          { de: "Küche", vi: "nhà bếp", article: "die" },
          { de: "Badezimmer", vi: "phòng tắm", article: "das" },
          { de: "Toilette", vi: "nhà vệ sinh", article: "die" },
          { de: "Flur", vi: "hành lang", article: "der" },
          { de: "Balkon", vi: "ban công", article: "der" },
          { de: "Kinderzimmer", vi: "phòng trẻ em", article: "das" },
          { de: "Arbeitszimmer", vi: "phòng làm việc", article: "das" },
          { de: "Keller", vi: "tầng hầm", article: "der" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Möbel",
        titleVi: "Đồ nội thất",
        words: [
          { de: "Sofa", vi: "ghế sofa", article: "das" },
          { de: "Tisch", vi: "bàn", article: "der" },
          { de: "Stuhl", vi: "ghế", article: "der" },
          { de: "Bett", vi: "giường", article: "das" },
          { de: "Schrank", vi: "tủ", article: "der" },
          { de: "Regal", vi: "kệ sách", article: "das" },
          { de: "Lampe", vi: "đèn", article: "die" },
          { de: "Fernseher", vi: "tivi", article: "der" },
          { de: "Kühlschrank", vi: "tủ lạnh", article: "der" },
          { de: "Waschmaschine", vi: "máy giặt", article: "die" },
          { de: "Herd", vi: "bếp nấu", article: "der" },
          { de: "Spiegel", vi: "gương", article: "der" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Wo ist...?",
        titleVi: "...ở đâu?",
        lines: [
          { speaker: "Anna", de: "Willkommen in meiner Wohnung!", vi: "Chào mừng đến căn hộ của tôi!" },
          { speaker: "Minh", de: "Danke! Die Wohnung ist sehr schön. Wo ist das Wohnzimmer?", vi: "Cảm ơn! Căn hộ rất đẹp. Phòng khách ở đâu?" },
          { speaker: "Anna", de: "Das Wohnzimmer ist hier links. Und rechts ist die Küche.", vi: "Phòng khách ở bên trái đây. Và bên phải là nhà bếp." },
          { speaker: "Minh", de: "Und wo ist das Badezimmer?", vi: "Còn phòng tắm ở đâu?" },
          { speaker: "Anna", de: "Das Badezimmer ist am Ende vom Flur.", vi: "Phòng tắm ở cuối hành lang." },
          { speaker: "Minh", de: "Du hast auch einen Balkon! Toll!", vi: "Bạn cũng có ban công! Tuyệt vời!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Wo ist...? / Wo sind...?",
        titleVi: "...ở đâu?",
        rule: "Wo ist + Singular? / Wo sind + Plural? — Antwort mit Ortsangabe: hier, dort, links, rechts, oben, unten.",
        ruleVi: "Wo ist + danh từ số ít? / Wo sind + danh từ số nhiều? — Trả lời bằng chỉ dẫn nơi chốn: ở đây, ở đó, bên trái, bên phải, ở trên, ở dưới.",
        examples: [
          { de: "Wo ist der Tisch? — Der Tisch ist im Wohnzimmer.", vi: "Cái bàn ở đâu? — Cái bàn ở trong phòng khách." },
          { de: "Wo ist die Lampe? — Die Lampe ist auf dem Tisch.", vi: "Cái đèn ở đâu? — Cái đèn ở trên bàn." },
          { de: "Wo sind die Stühle? — Die Stühle sind in der Küche.", vi: "Những cái ghế ở đâu? — Những cái ghế ở trong bếp." }
        ]
      },
      {
        type: "practice",
        titleDe: "Beschreibe deine Wohnung",
        titleVi: "Mô tả căn hộ của bạn",
        instruction: "Beschreibe deine Wohnung oder dein Haus. Wie viele Zimmer hast du? Welche Möbel hast du? Benutze: Meine Wohnung hat... / In meinem Wohnzimmer ist/sind...",
        instructionVi: "Hãy mô tả căn hộ hoặc ngôi nhà của bạn. Bạn có bao nhiêu phòng? Bạn có những đồ nội thất nào? Sử dụng: Meine Wohnung hat... / In meinem Wohnzimmer ist/sind..."
      }
    ]
  },

  // --- Chapter 4, Lesson 2: Dativ mit Präpositionen ---
  {
    id: "a1-ch4-l2",
    chapterId: 4,
    lessonNumber: 2,
    title: "Dativ mit Präpositionen",
    titleVi: "Giới từ với cách Dativ",
    type: "Grammatik",
    objectives: [
      "Hiểu và sử dụng các giới từ chỉ vị trí: in, auf, unter, neben, zwischen",
      "Nắm được khái niệm Wechselpräpositionen (giới từ hai cách)",
      "Chia mạo từ ở cách Dativ khi trả lời câu hỏi Wo?"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Wechselpräpositionen — Wo? (Dativ)",
        titleVi: "Giới từ hai cách — Wo? (Dativ)",
        textDe: "Die Wechselpräpositionen sind: in, auf, unter, neben, zwischen, vor, hinter, an, über. Bei der Frage 'Wo?' (Position) benutzen wir den Dativ.",
        textVi: "Giới từ hai cách gồm: in (trong), auf (trên), unter (dưới), neben (bên cạnh), zwischen (giữa), vor (trước), hinter (sau), an (ở sát), über (phía trên). Khi hỏi 'Wo?' (vị trí, ở đâu), chúng ta dùng cách Dativ. Đây là điểm ngữ pháp quan trọng: cùng một giới từ nhưng dùng Dativ khi nói về vị trí (đứng yên) và Akkusativ khi nói về hướng di chuyển (sẽ học sau)."
      },
      {
        type: "grammar",
        titleDe: "Dativ-Formen mit Artikeln",
        titleVi: "Hình thức Dativ với mạo từ",
        rule: "Dativ: der → dem, die → der, das → dem, Plural die → den (+n). Beispiel: in + dem = im, an + dem = am.",
        ruleVi: "Dativ: der → dem (giống đực), die → der (giống cái), das → dem (trung tính), số nhiều die → den (thêm -n vào danh từ). Rút gọn: in + dem = im, an + dem = am.",
        examples: [
          { de: "Das Buch ist auf dem Tisch. (der Tisch → dem Tisch)", vi: "Cuốn sách ở trên bàn. (der Tisch → dem Tisch)" },
          { de: "Die Katze ist unter dem Bett. (das Bett → dem Bett)", vi: "Con mèo ở dưới giường. (das Bett → dem Bett)" },
          { de: "Die Lampe ist neben der Tür. (die Tür → der Tür)", vi: "Cái đèn ở bên cạnh cửa. (die Tür → der Tür)" },
          { de: "Das Bild hängt zwischen den Fenstern. (die Fenster → den Fenstern)", vi: "Bức tranh treo giữa các cửa sổ. (die Fenster → den Fenstern)" },
          { de: "Die Schuhe sind im Flur. (in + dem = im)", vi: "Đôi giày ở trong hành lang. (in + dem = im)" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Präpositionen im Detail",
        titleVi: "Chi tiết các giới từ",
        rule: "in = trong, auf = trên (bề mặt), unter = dưới, neben = bên cạnh, zwischen = giữa (hai vật), vor = trước, hinter = sau, an = sát bên, über = phía trên (không chạm).",
        ruleVi: "in = trong (không gian kín, ví dụ: trong phòng), auf = trên (bề mặt, ví dụ: trên bàn), unter = dưới (phía dưới), neben = bên cạnh, zwischen = ở giữa (hai vật thể), vor = phía trước, hinter = phía sau, an = sát bên (ví dụ: trên tường), über = phía trên (không chạm vào).",
        examples: [
          { de: "Der Teppich liegt auf dem Boden.", vi: "Tấm thảm nằm trên sàn." },
          { de: "Die Jacke hängt an der Tür.", vi: "Cái áo khoác treo ở cửa." },
          { de: "Der Hund liegt vor dem Sofa.", vi: "Con chó nằm trước ghế sofa." },
          { de: "Das Fahrrad steht hinter dem Haus.", vi: "Chiếc xe đạp đứng sau nhà." },
          { de: "Die Uhr hängt über dem Fernseher.", vi: "Đồng hồ treo phía trên tivi." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Wo sind meine Sachen?",
        titleVi: "Đồ của tôi ở đâu?",
        lines: [
          { speaker: "Linh", de: "Mama, wo ist mein Handy?", vi: "Mẹ ơi, điện thoại của con ở đâu?" },
          { speaker: "Mutter", de: "Dein Handy ist auf dem Schreibtisch.", vi: "Điện thoại của con ở trên bàn làm việc." },
          { speaker: "Linh", de: "Und wo sind meine Schlüssel?", vi: "Còn chìa khóa của con ở đâu?" },
          { speaker: "Mutter", de: "Die Schlüssel sind in der Schublade, neben dem Bett.", vi: "Chìa khóa ở trong ngăn kéo, bên cạnh giường." },
          { speaker: "Linh", de: "Ah, und meine Tasche?", vi: "À, còn cái túi của con?" },
          { speaker: "Mutter", de: "Die Tasche steht unter dem Tisch im Flur.", vi: "Cái túi ở dưới bàn trong hành lang." }
        ]
      },
      {
        type: "practice",
        titleDe: "Wo ist was?",
        titleVi: "Cái gì ở đâu?",
        instruction: "Schau dich in deinem Zimmer um. Beschreibe 5 Dinge mit einer Präposition: Der/Die/Das ... ist in/auf/unter/neben/zwischen dem/der...",
        instructionVi: "Hãy nhìn quanh phòng bạn. Mô tả 5 đồ vật với giới từ chỉ vị trí: Der/Die/Das ... ist in/auf/unter/neben/zwischen dem/der... Nhớ chia mạo từ sang Dativ!"
      }
    ]
  },

  // --- Chapter 4, Lesson 3: Wohnungsanzeigen lesen ---
  {
    id: "a1-ch4-l3",
    chapterId: 4,
    lessonNumber: 3,
    title: "Wohnungsanzeigen lesen",
    titleVi: "Đọc tin rao cho thuê nhà",
    type: "Fertigkeit",
    objectives: [
      "Hiểu các viết tắt thường gặp trong tin rao nhà ở Đức",
      "Đọc hiểu thông tin về giá cả, diện tích, vị trí",
      "So sánh các căn hộ dựa trên thông tin rao vặt"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Wohnungsanzeigen in Deutschland",
        titleVi: "Tin rao nhà ở Đức",
        textDe: "In Deutschland suchen viele Menschen ihre Wohnung über Anzeigen im Internet oder in der Zeitung. Die Anzeigen haben viele Abkürzungen. Man muss die Abkürzungen kennen, um die Anzeigen zu verstehen.",
        textVi: "Ở Đức, nhiều người tìm nhà qua các tin rao trên mạng hoặc trên báo. Các tin rao có rất nhiều từ viết tắt. Bạn cần biết các từ viết tắt này để hiểu được tin rao."
      },
      {
        type: "vocabulary",
        titleDe: "Abkürzungen in Wohnungsanzeigen",
        titleVi: "Các từ viết tắt trong tin rao nhà",
        words: [
          { de: "ZKB", vi: "Zimmer, Küche, Bad (phòng, bếp, tắm)" },
          { de: "Zi.", vi: "Zimmer (phòng)" },
          { de: "qm / m²", vi: "Quadratmeter (mét vuông)" },
          { de: "EG", vi: "Erdgeschoss (tầng trệt)" },
          { de: "OG", vi: "Obergeschoss (tầng trên)" },
          { de: "DG", vi: "Dachgeschoss (tầng áp mái)" },
          { de: "KM", vi: "Kaltmiete (tiền thuê chưa gồm phí phụ)" },
          { de: "WM", vi: "Warmmiete (tiền thuê đã gồm phí phụ)" },
          { de: "NK", vi: "Nebenkosten (phí phụ: nước, sưởi, rác...)" },
          { de: "Kt.", vi: "Kaution (tiền đặt cọc)" },
          { de: "Blk.", vi: "Balkon (ban công)" },
          { de: "möbl.", vi: "möbliert (có nội thất)" },
          { de: "unmöbl.", vi: "unmöbliert (không nội thất)" },
          { de: "AB", vi: "Altbau (nhà cũ/cổ)" },
          { de: "NB", vi: "Neubau (nhà mới xây)" }
        ]
      },
      {
        type: "explanation",
        titleDe: "Beispiel-Anzeigen",
        titleVi: "Ví dụ tin rao",
        textDe: "Anzeige 1: 2-ZKB, 55 qm, 3. OG, Blk., KM 450€ + NK 120€, Kt. 2 MM, ab 01.04. frei. Zentrale Lage, Nähe U-Bahn.\n\nAnzeige 2: 1-Zi.-Whg., möbl., 30 qm, EG, WM 550€, Kt. 1 MM, ab sofort. Ruhige Lage, Garten.",
        textVi: "Tin rao 1: 2 phòng, bếp, tắm; 55 mét vuông; tầng 3; có ban công; tiền thuê lạnh 450€ + phí phụ 120€; đặt cọc 2 tháng tiền thuê; từ 01.04 có thể vào ở. Vị trí trung tâm, gần tàu điện ngầm.\n\nTin rao 2: Căn hộ 1 phòng; có nội thất; 30 mét vuông; tầng trệt; tiền thuê nóng 550€; đặt cọc 1 tháng tiền thuê; vào ở ngay. Vị trí yên tĩnh, có vườn."
      },
      {
        type: "grammar",
        titleDe: "Nützliche Ausdrücke",
        titleVi: "Các cách diễn đạt hữu ích",
        rule: "Die Wohnung kostet... / Die Wohnung hat... / Die Wohnung ist... qm groß / Die Wohnung liegt in...",
        ruleVi: "Căn hộ có giá... / Căn hộ có... / Căn hộ rộng... mét vuông / Căn hộ nằm ở...",
        examples: [
          { de: "Die Wohnung kostet 450 Euro Kaltmiete.", vi: "Căn hộ có giá thuê lạnh 450 Euro." },
          { de: "Die Wohnung hat 2 Zimmer, eine Küche und ein Bad.", vi: "Căn hộ có 2 phòng, một bếp và một phòng tắm." },
          { de: "Die Wohnung ist 55 Quadratmeter groß.", vi: "Căn hộ rộng 55 mét vuông." },
          { de: "Die Kaution beträgt zwei Monatsmieten.", vi: "Tiền đặt cọc là hai tháng tiền thuê." }
        ]
      },
      {
        type: "practice",
        titleDe: "Anzeige verstehen",
        titleVi: "Hiểu tin rao",
        instruction: "Lies die Anzeige und beantworte die Fragen: '3-ZKB, 70 qm, 2. OG, Blk., unmöbl., KM 600€ + NK 150€, Kt. 3 MM, ab 01.06. Gute Lage, Nähe Supermarkt.' — Wie viele Zimmer hat die Wohnung? Wie teuer ist die Warmmiete? Wie hoch ist die Kaution?",
        instructionVi: "Đọc tin rao và trả lời các câu hỏi: '3-ZKB, 70 qm, 2. OG, Blk., unmöbl., KM 600€ + NK 150€, Kt. 3 MM, ab 01.06. Gute Lage, Nähe Supermarkt.' — Căn hộ có bao nhiêu phòng? Tiền thuê nóng (Warmmiete) là bao nhiêu? Tiền đặt cọc là bao nhiêu?"
      }
    ]
  },

  // --- Chapter 4, Lesson 4: Wohnung einrichten ---
  {
    id: "a1-ch4-l4",
    chapterId: 4,
    lessonNumber: 4,
    title: "Wohnung einrichten",
    titleVi: "Trang trí căn hộ",
    type: "Integration",
    objectives: [
      "Sử dụng từ vựng về màu sắc để mô tả đồ nội thất",
      "Mô tả các phòng trong nhà một cách chi tiết",
      "Thực hành hội thoại mua sắm tại cửa hàng nội thất"
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Farben",
        titleVi: "Màu sắc",
        words: [
          { de: "rot", vi: "đỏ" },
          { de: "blau", vi: "xanh dương" },
          { de: "grün", vi: "xanh lá" },
          { de: "gelb", vi: "vàng" },
          { de: "weiß", vi: "trắng" },
          { de: "schwarz", vi: "đen" },
          { de: "braun", vi: "nâu" },
          { de: "grau", vi: "xám" },
          { de: "orange", vi: "cam" },
          { de: "lila", vi: "tím" },
          { de: "rosa", vi: "hồng" },
          { de: "hell", vi: "sáng (nhạt)" },
          { de: "dunkel", vi: "tối (đậm)" }
        ]
      },
      {
        type: "explanation",
        titleDe: "Zimmer beschreiben",
        titleVi: "Mô tả phòng",
        textDe: "Um ein Zimmer zu beschreiben, sagen wir: Im Wohnzimmer steht ein großes Sofa. Das Sofa ist blau. An der Wand hängt ein Bild. Der Teppich ist rot und liegt auf dem Boden.",
        textVi: "Để mô tả một căn phòng, chúng ta nói: Trong phòng khách có một ghế sofa lớn. Ghế sofa màu xanh dương. Trên tường treo một bức tranh. Tấm thảm màu đỏ và nằm trên sàn. Lưu ý các động từ: stehen (đứng), liegen (nằm), hängen (treo) dùng để mô tả vị trí đồ vật."
      },
      {
        type: "dialogue",
        titleDe: "Im Möbelgeschäft",
        titleVi: "Tại cửa hàng nội thất",
        lines: [
          { speaker: "Verkäufer", de: "Guten Tag! Kann ich Ihnen helfen?", vi: "Xin chào! Tôi có thể giúp gì cho bạn?" },
          { speaker: "Linh", de: "Ja, ich suche einen Schreibtisch für mein Arbeitszimmer.", vi: "Vâng, tôi đang tìm một bàn làm việc cho phòng làm việc." },
          { speaker: "Verkäufer", de: "Wir haben viele Schreibtische. Welche Farbe möchten Sie?", vi: "Chúng tôi có nhiều bàn làm việc. Bạn muốn màu gì?" },
          { speaker: "Linh", de: "Ich möchte einen weißen Schreibtisch. Nicht zu groß.", vi: "Tôi muốn một bàn làm việc màu trắng. Không quá lớn." },
          { speaker: "Verkäufer", de: "Dieser hier ist 120 cm breit. Er kostet 149 Euro.", vi: "Cái này rộng 120 cm. Giá 149 Euro." },
          { speaker: "Linh", de: "Das ist gut. Ich brauche auch einen Stuhl. Haben Sie bequeme Bürostühle?", vi: "Tốt đấy. Tôi cũng cần một cái ghế. Bạn có ghế văn phòng thoải mái không?" },
          { speaker: "Verkäufer", de: "Ja, natürlich. Dieser schwarze Stuhl hier ist sehr bequem. Er kostet 89 Euro.", vi: "Vâng, dĩ nhiên. Cái ghế đen này rất thoải mái. Giá 89 Euro." },
          { speaker: "Linh", de: "Gut, ich nehme den Schreibtisch und den Stuhl. Kann man das liefern lassen?", vi: "Tốt, tôi lấy cái bàn và cái ghế. Có thể giao hàng được không?" },
          { speaker: "Verkäufer", de: "Ja, die Lieferung kostet 29 Euro.", vi: "Vâng, phí giao hàng là 29 Euro." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Adjektive mit Farben",
        titleVi: "Tính từ với màu sắc",
        rule: "Prädikativ (nach sein): Das Sofa ist blau. Attributiv (vor Nomen): ein blaues Sofa, der rote Teppich, die weiße Lampe.",
        ruleVi: "Dùng làm vị ngữ (sau sein): Das Sofa ist blau. (Ghế sofa màu xanh.) Dùng làm định ngữ (trước danh từ): ein blaues Sofa, der rote Teppich, die weiße Lampe. Khi đứng trước danh từ, tính từ phải thêm đuôi (sẽ học chi tiết hơn sau).",
        examples: [
          { de: "Das Bett ist weiß.", vi: "Cái giường màu trắng." },
          { de: "Ich möchte einen roten Teppich.", vi: "Tôi muốn một tấm thảm đỏ." },
          { de: "Die blaue Lampe gefällt mir.", vi: "Tôi thích cái đèn xanh dương." },
          { de: "Wir haben ein neues, braunes Regal.", vi: "Chúng tôi có một kệ sách mới, màu nâu." }
        ]
      },
      {
        type: "practice",
        titleDe: "Mein Traumzimmer",
        titleVi: "Căn phòng mơ ước của tôi",
        instruction: "Beschreibe dein Traumzimmer. Welche Möbel hast du? Welche Farben haben die Möbel? Wo stehen/liegen/hängen sie? Schreibe mindestens 5 Sätze.",
        instructionVi: "Mô tả căn phòng mơ ước của bạn. Bạn có những đồ nội thất nào? Chúng màu gì? Chúng đứng/nằm/treo ở đâu? Viết ít nhất 5 câu."
      }
    ]
  },

  // ============================================================
  // CHAPTER 5: Alltag & Tagesablauf
  // ============================================================

  // --- Chapter 5, Lesson 1: Mein Tag ---
  {
    id: "a1-ch5-l1",
    chapterId: 5,
    lessonNumber: 1,
    title: "Mein Tag",
    titleVi: "Một ngày của tôi",
    type: "Einführung",
    objectives: [
      "Mô tả các hoạt động hàng ngày bằng tiếng Đức",
      "Sử dụng các cách diễn đạt thời gian: um 7 Uhr, morgens, abends",
      "Kể về thói quen hàng ngày của mình"
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Tagesablauf — Aktivitäten",
        titleVi: "Sinh hoạt hàng ngày — Các hoạt động",
        words: [
          { de: "aufstehen", vi: "thức dậy" },
          { de: "duschen", vi: "tắm vòi sen" },
          { de: "frühstücken", vi: "ăn sáng" },
          { de: "zur Arbeit fahren", vi: "đi làm" },
          { de: "arbeiten", vi: "làm việc" },
          { de: "Mittagessen", vi: "ăn trưa", article: "das" },
          { de: "einkaufen", vi: "đi mua sắm" },
          { de: "kochen", vi: "nấu ăn" },
          { de: "Abendessen", vi: "ăn tối", article: "das" },
          { de: "fernsehen", vi: "xem tivi" },
          { de: "lesen", vi: "đọc sách" },
          { de: "schlafen gehen", vi: "đi ngủ" },
          { de: "Zähne putzen", vi: "đánh răng" },
          { de: "sich anziehen", vi: "mặc quần áo" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Tageszeiten und Zeitausdrücke",
        titleVi: "Các buổi trong ngày và cách diễn đạt thời gian",
        words: [
          { de: "morgens", vi: "buổi sáng (thói quen)" },
          { de: "vormittags", vi: "buổi sáng muộn" },
          { de: "mittags", vi: "buổi trưa" },
          { de: "nachmittags", vi: "buổi chiều" },
          { de: "abends", vi: "buổi tối" },
          { de: "nachts", vi: "ban đêm" },
          { de: "um 7 Uhr", vi: "lúc 7 giờ" },
          { de: "von ... bis ...", vi: "từ ... đến ..." },
          { de: "dann", vi: "sau đó" },
          { de: "danach", vi: "sau đó" },
          { de: "zuerst", vi: "đầu tiên" },
          { de: "am Morgen", vi: "vào buổi sáng" },
          { de: "am Abend", vi: "vào buổi tối" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Mein Tag",
        titleVi: "Một ngày của tôi",
        lines: [
          { speaker: "Interviewer", de: "Hoa, erzähl mal: Wie sieht dein Tag aus?", vi: "Hoa, kể đi: Một ngày của bạn như thế nào?" },
          { speaker: "Hoa", de: "Ich stehe um 6 Uhr auf. Zuerst dusche ich und putze meine Zähne.", vi: "Tôi thức dậy lúc 6 giờ. Đầu tiên tôi tắm và đánh răng." },
          { speaker: "Interviewer", de: "Und dann?", vi: "Rồi sau đó?" },
          { speaker: "Hoa", de: "Dann frühstücke ich um halb sieben. Ich trinke Kaffee und esse Brot.", vi: "Sau đó tôi ăn sáng lúc 6 giờ rưỡi. Tôi uống cà phê và ăn bánh mì." },
          { speaker: "Interviewer", de: "Wann fährst du zur Arbeit?", vi: "Khi nào bạn đi làm?" },
          { speaker: "Hoa", de: "Um 7 Uhr fahre ich mit dem Bus zur Arbeit. Ich arbeite von 8 bis 17 Uhr.", vi: "Lúc 7 giờ tôi đi xe buýt đi làm. Tôi làm việc từ 8 đến 17 giờ." },
          { speaker: "Interviewer", de: "Was machst du abends?", vi: "Buổi tối bạn làm gì?" },
          { speaker: "Hoa", de: "Abends koche ich und esse mit meiner Familie. Danach sehe ich fern oder lese ein Buch. Um 22 Uhr gehe ich schlafen.", vi: "Buổi tối tôi nấu ăn và ăn cùng gia đình. Sau đó tôi xem tivi hoặc đọc sách. Lúc 22 giờ tôi đi ngủ." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Zeitangaben im Satz",
        titleVi: "Cách đặt thời gian trong câu",
        rule: "Zeitangabe am Satzanfang → Verb auf Position 2: Um 7 Uhr stehe ich auf. Morgens trinke ich Kaffee.",
        ruleVi: "Khi đặt thời gian ở đầu câu, động từ phải ở vị trí thứ 2 (đảo ngữ): Um 7 Uhr stehe ich auf. Morgens trinke ich Kaffee. Đây là quy tắc quan trọng trong tiếng Đức: động từ luôn ở vị trí thứ 2 trong câu trần thuật.",
        examples: [
          { de: "Um 6 Uhr stehe ich auf.", vi: "Lúc 6 giờ tôi thức dậy." },
          { de: "Morgens dusche ich.", vi: "Buổi sáng tôi tắm." },
          { de: "Am Abend lese ich ein Buch.", vi: "Vào buổi tối tôi đọc sách." },
          { de: "Von 8 bis 12 Uhr arbeite ich.", vi: "Từ 8 đến 12 giờ tôi làm việc." }
        ]
      },
      {
        type: "practice",
        titleDe: "Erzähle deinen Tagesablauf",
        titleVi: "Kể về một ngày của bạn",
        instruction: "Schreibe deinen typischen Tagesablauf auf. Benutze Zeitangaben (um ... Uhr, morgens, abends) und Konnektoren (zuerst, dann, danach). Schreibe mindestens 8 Sätze.",
        instructionVi: "Viết về một ngày điển hình của bạn. Sử dụng các cách diễn đạt thời gian (um ... Uhr, morgens, abends) và các từ nối (zuerst, dann, danach). Viết ít nhất 8 câu."
      }
    ]
  },

  // --- Chapter 5, Lesson 2: Trennbare Verben ---
  {
    id: "a1-ch5-l2",
    chapterId: 5,
    lessonNumber: 2,
    title: "Trennbare Verben",
    titleVi: "Động từ tách được",
    type: "Grammatik",
    objectives: [
      "Hiểu khái niệm động từ tách được (trennbare Verben)",
      "Nắm được cấu trúc Satzklammer (khung câu)",
      "Chia và sử dụng các động từ tách được phổ biến"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Was sind trennbare Verben?",
        titleVi: "Động từ tách được là gì?",
        textDe: "Trennbare Verben bestehen aus einem Präfix und einem Verb. Im Hauptsatz steht das konjugierte Verb auf Position 2 und das Präfix am Satzende. Beispiel: aufstehen → Ich stehe um 7 Uhr auf.",
        textVi: "Động từ tách được gồm một tiền tố (Präfix) và một động từ. Trong câu chính, động từ được chia ở vị trí thứ 2, còn tiền tố đặt ở cuối câu. Ví dụ: aufstehen (thức dậy) → Ich stehe um 7 Uhr auf. Cấu trúc này gọi là Satzklammer (khung câu) — động từ chia và tiền tố tạo thành một 'khung' bao quanh phần còn lại của câu."
      },
      {
        type: "vocabulary",
        titleDe: "Wichtige trennbare Verben",
        titleVi: "Các động từ tách được quan trọng",
        words: [
          { de: "aufstehen", vi: "thức dậy (auf|stehen)" },
          { de: "ankommen", vi: "đến nơi (an|kommen)" },
          { de: "einkaufen", vi: "mua sắm (ein|kaufen)" },
          { de: "aufräumen", vi: "dọn dẹp (auf|räumen)" },
          { de: "anrufen", vi: "gọi điện (an|rufen)" },
          { de: "fernsehen", vi: "xem tivi (fern|sehen)" },
          { de: "mitkommen", vi: "đi cùng (mit|kommen)" },
          { de: "zurückkommen", vi: "quay về (zurück|kommen)" },
          { de: "abfahren", vi: "khởi hành (ab|fahren)" },
          { de: "ausgehen", vi: "đi ra ngoài (aus|gehen)" },
          { de: "zumachen", vi: "đóng lại (zu|machen)" },
          { de: "aufmachen", vi: "mở ra (auf|machen)" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Satzklammer — Die Struktur",
        titleVi: "Khung câu — Cấu trúc",
        rule: "Position 1 + Verb (konjugiert) + Mittelfeld + Präfix (am Ende). Trennbare Präfixe sind betont: AUFstehen, ANkommen, EINkaufen.",
        ruleVi: "Vị trí 1 + Động từ (đã chia) + Phần giữa câu + Tiền tố (ở cuối). Các tiền tố tách được luôn được nhấn mạnh khi phát âm: AUFstehen, ANkommen, EINkaufen. Các tiền tố phổ biến: ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-, zurück-.",
        examples: [
          { de: "Ich stehe jeden Tag um 6 Uhr auf.", vi: "Tôi thức dậy mỗi ngày lúc 6 giờ." },
          { de: "Der Zug kommt um 10 Uhr an.", vi: "Tàu đến lúc 10 giờ." },
          { de: "Wir kaufen am Samstag ein.", vi: "Chúng tôi đi mua sắm vào thứ Bảy." },
          { de: "Er räumt sein Zimmer auf.", vi: "Anh ấy dọn dẹp phòng." },
          { de: "Kommst du heute Abend mit?", vi: "Tối nay bạn đi cùng không?" },
          { de: "Ich rufe dich morgen an.", vi: "Ngày mai tôi gọi điện cho bạn." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Ein normaler Samstag",
        titleVi: "Một ngày thứ Bảy bình thường",
        lines: [
          { speaker: "Tuan", de: "Was machst du am Samstag?", vi: "Thứ Bảy bạn làm gì?" },
          { speaker: "Maria", de: "Ich stehe spät auf, um 9 Uhr. Dann räume ich die Wohnung auf.", vi: "Tôi dậy muộn, lúc 9 giờ. Sau đó tôi dọn dẹp căn hộ." },
          { speaker: "Tuan", de: "Und nachmittags?", vi: "Còn buổi chiều?" },
          { speaker: "Maria", de: "Nachmittags kaufe ich im Supermarkt ein. Kommst du mit?", vi: "Buổi chiều tôi đi mua sắm ở siêu thị. Bạn đi cùng không?" },
          { speaker: "Tuan", de: "Ja, gerne! Wann fährst du los?", vi: "Vâng, rất sẵn lòng! Khi nào bạn khởi hành?" },
          { speaker: "Maria", de: "Um 14 Uhr. Ich rufe dich vorher an.", vi: "Lúc 14 giờ. Tôi sẽ gọi cho bạn trước đó." },
          { speaker: "Tuan", de: "Super! Abends gehen wir vielleicht noch aus?", vi: "Tuyệt! Buổi tối có lẽ chúng ta đi ra ngoài?" },
          { speaker: "Maria", de: "Gute Idee! Wir kommen bestimmt nicht vor Mitternacht zurück.", vi: "Ý hay! Chắc chắn chúng ta không về trước nửa đêm." }
        ]
      },
      {
        type: "practice",
        titleDe: "Sätze bilden mit trennbaren Verben",
        titleVi: "Đặt câu với động từ tách được",
        instruction: "Bilde Sätze mit diesen trennbaren Verben: 1) aufstehen (ich/6:30) 2) einkaufen (wir/Samstag) 3) anrufen (du/mich/morgen) 4) fernsehen (er/abends) 5) mitkommen (ihr/heute?). Achte auf die Satzklammer!",
        instructionVi: "Đặt câu với các động từ tách được sau: 1) aufstehen (ich/6:30) 2) einkaufen (wir/thứ Bảy) 3) anrufen (du/tôi/ngày mai) 4) fernsehen (er/buổi tối) 5) mitkommen (ihr/hôm nay?). Chú ý cấu trúc khung câu — tiền tố ở cuối câu!"
      }
    ]
  },

  // --- Chapter 5, Lesson 3: Uhrzeiten ---
  {
    id: "a1-ch5-l3",
    chapterId: 5,
    lessonNumber: 3,
    title: "Uhrzeiten",
    titleVi: "Giờ giấc",
    type: "Fertigkeit",
    objectives: [
      "Nói và hiểu giờ chính thức (offizielle Uhrzeit) và giờ thông dụng (informelle Uhrzeit)",
      "Nắm được các ngày trong tuần và các tháng trong năm",
      "Hỏi và trả lời về giờ giấc trong giao tiếp hàng ngày"
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Offizielle Uhrzeit (24-Stunden)",
        titleVi: "Giờ chính thức (24 giờ)",
        rule: "Es ist + Stunde + Uhr + Minuten. Benutzt im Radio, Fernsehen, Fahrplan, offiziellen Situationen.",
        ruleVi: "Es ist + giờ + Uhr + phút. Dùng trong đài phát thanh, tivi, lịch tàu xe, các tình huống chính thức. Cách nói này giống tiếng Việt, rất dễ hiểu.",
        examples: [
          { de: "Es ist 7 Uhr 30. (sieben Uhr dreißig)", vi: "Bây giờ là 7 giờ 30." },
          { de: "Es ist 14 Uhr 15. (vierzehn Uhr fünfzehn)", vi: "Bây giờ là 14 giờ 15." },
          { de: "Es ist 20 Uhr. (zwanzig Uhr)", vi: "Bây giờ là 20 giờ." },
          { de: "Es ist 0 Uhr. (null Uhr / Mitternacht)", vi: "Bây giờ là 0 giờ. (nửa đêm)" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Informelle Uhrzeit (12-Stunden)",
        titleVi: "Giờ thông dụng (12 giờ)",
        rule: "halb = 30 Minuten VOR der nächsten Stunde. Viertel vor = 15 Minuten vor. Viertel nach = 15 Minuten nach. nach = Minuten nach der vollen Stunde. vor = Minuten vor der nächsten Stunde.",
        ruleVi: "halb = nửa, nhưng CHÚ Ý: halb sieben = 6:30 (nửa tiếng TRƯỚC 7 giờ, không phải 7:30!). Đây là lỗi rất phổ biến của người Việt học tiếng Đức. Viertel vor = 15 phút trước. Viertel nach = 15 phút sau. nach = phút sau giờ chẵn. vor = phút trước giờ tiếp theo.",
        examples: [
          { de: "halb sieben = 6:30", vi: "6 giờ 30 (nửa tiếng trước 7 giờ)" },
          { de: "Viertel nach drei = 3:15", vi: "3 giờ 15 (15 phút sau 3 giờ)" },
          { de: "Viertel vor acht = 7:45", vi: "7 giờ 45 (15 phút trước 8 giờ)" },
          { de: "zehn nach sechs = 6:10", vi: "6 giờ 10" },
          { de: "zwanzig vor fünf = 4:40", vi: "4 giờ 40 (20 phút trước 5 giờ)" },
          { de: "fünf vor halb neun = 8:25", vi: "8 giờ 25 (5 phút trước nửa 9)" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Wochentage und Monate",
        titleVi: "Các ngày trong tuần và các tháng",
        words: [
          { de: "Montag", vi: "thứ Hai" },
          { de: "Dienstag", vi: "thứ Ba" },
          { de: "Mittwoch", vi: "thứ Tư" },
          { de: "Donnerstag", vi: "thứ Năm" },
          { de: "Freitag", vi: "thứ Sáu" },
          { de: "Samstag", vi: "thứ Bảy" },
          { de: "Sonntag", vi: "Chủ nhật" },
          { de: "Januar", vi: "tháng Giêng" },
          { de: "Februar", vi: "tháng Hai" },
          { de: "März", vi: "tháng Ba" },
          { de: "April", vi: "tháng Tư" },
          { de: "Mai", vi: "tháng Năm" },
          { de: "Juni", vi: "tháng Sáu" },
          { de: "Juli", vi: "tháng Bảy" },
          { de: "August", vi: "tháng Tám" },
          { de: "September", vi: "tháng Chín" },
          { de: "Oktober", vi: "tháng Mười" },
          { de: "November", vi: "tháng Mười Một" },
          { de: "Dezember", vi: "tháng Mười Hai" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Zeitangaben mit am / im / um",
        titleVi: "Cách dùng am / im / um với thời gian",
        rule: "am + Wochentag/Tageszeit: am Montag, am Abend. im + Monat/Jahreszeit: im Januar, im Sommer. um + Uhrzeit: um 8 Uhr.",
        ruleVi: "am + ngày trong tuần/buổi trong ngày: am Montag (vào thứ Hai), am Abend (vào buổi tối). im + tháng/mùa: im Januar (vào tháng Giêng), im Sommer (vào mùa hè). um + giờ: um 8 Uhr (lúc 8 giờ). Ngoại lệ: in der Nacht (vào ban đêm).",
        examples: [
          { de: "Am Montag habe ich Deutschkurs.", vi: "Thứ Hai tôi có lớp tiếng Đức." },
          { de: "Im Juli fahre ich nach Vietnam.", vi: "Tháng Bảy tôi đi Việt Nam." },
          { de: "Um 8 Uhr beginnt die Arbeit.", vi: "Lúc 8 giờ bắt đầu làm việc." },
          { de: "Am Wochenende schlafe ich lange.", vi: "Cuối tuần tôi ngủ dài." }
        ]
      },
      {
        type: "practice",
        titleDe: "Wie spät ist es?",
        titleVi: "Bây giờ là mấy giờ?",
        instruction: "Sage die Uhrzeit offiziell und informell: 1) 8:30 2) 15:45 3) 11:15 4) 6:50 5) 21:00. Dann schreibe 3 Sätze mit am/im/um über deinen Terminplan diese Woche.",
        instructionVi: "Nói giờ theo cách chính thức và thông dụng: 1) 8:30 2) 15:45 3) 11:15 4) 6:50 5) 21:00. Sau đó viết 3 câu với am/im/um về lịch của bạn tuần này."
      }
    ]
  },

  // --- Chapter 5, Lesson 4: Termine machen ---
  {
    id: "a1-ch5-l4",
    chapterId: 5,
    lessonNumber: 4,
    title: "Termine machen",
    titleVi: "Hẹn lịch",
    type: "Integration",
    objectives: [
      "Đặt lịch hẹn qua điện thoại hoặc trực tiếp",
      "Sử dụng từ vựng liên quan đến lịch hẹn và thời gian",
      "Thực hành hội thoại tại phòng khám bác sĩ"
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Termine und Kalender",
        titleVi: "Lịch hẹn và lịch",
        words: [
          { de: "Termin", vi: "cuộc hẹn, lịch hẹn", article: "der" },
          { de: "Kalender", vi: "lịch", article: "der" },
          { de: "Arztpraxis", vi: "phòng khám bác sĩ", article: "die" },
          { de: "Sprechstunde", vi: "giờ khám bệnh", article: "die" },
          { de: "Wartezeit", vi: "thời gian chờ", article: "die" },
          { de: "vereinbaren", vi: "sắp xếp, đặt lịch" },
          { de: "absagen", vi: "hủy hẹn" },
          { de: "verschieben", vi: "dời lịch" },
          { de: "passen", vi: "phù hợp, tiện" },
          { de: "frei haben", vi: "rảnh" },
          { de: "Zeit haben", vi: "có thời gian" },
          { de: "Wann passt es Ihnen?", vi: "Khi nào tiện cho bạn/anh chị?" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Termin beim Arzt",
        titleVi: "Đặt lịch hẹn bác sĩ",
        lines: [
          { speaker: "Sprechstundenhilfe", de: "Praxis Dr. Müller, guten Tag. Was kann ich für Sie tun?", vi: "Phòng khám bác sĩ Müller, xin chào. Tôi có thể giúp gì cho anh/chị?" },
          { speaker: "Thanh", de: "Guten Tag, ich möchte einen Termin vereinbaren.", vi: "Xin chào, tôi muốn đặt lịch hẹn." },
          { speaker: "Sprechstundenhilfe", de: "Ja, natürlich. Waren Sie schon einmal bei uns?", vi: "Vâng, dĩ nhiên. Anh/chị đã khám ở đây lần nào chưa?" },
          { speaker: "Thanh", de: "Nein, ich bin ein neuer Patient.", vi: "Chưa, tôi là bệnh nhân mới." },
          { speaker: "Sprechstundenhilfe", de: "Okay. Wann passt es Ihnen? Geht Mittwoch um 10 Uhr?", vi: "Được. Khi nào tiện cho anh/chị? Thứ Tư lúc 10 giờ được không?" },
          { speaker: "Thanh", de: "Mittwoch kann ich leider nicht. Geht es am Donnerstag?", vi: "Thứ Tư tôi không được. Thứ Năm được không ạ?" },
          { speaker: "Sprechstundenhilfe", de: "Am Donnerstag habe ich um 14 Uhr 30 noch einen Termin frei.", vi: "Thứ Năm tôi còn trống lịch lúc 14 giờ 30." },
          { speaker: "Thanh", de: "Ja, das passt gut. Donnerstag, 14 Uhr 30.", vi: "Vâng, tiện lắm. Thứ Năm, 14 giờ 30." },
          { speaker: "Sprechstundenhilfe", de: "Gut. Bringen Sie bitte Ihre Versicherungskarte mit.", vi: "Tốt. Xin mang theo thẻ bảo hiểm." },
          { speaker: "Thanh", de: "Mache ich. Vielen Dank!", vi: "Tôi sẽ mang. Cảm ơn nhiều!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nützliche Sätze für Termine",
        titleVi: "Các câu hữu ích khi hẹn lịch",
        rule: "Ich möchte einen Termin vereinbaren. / Wann passt es Ihnen? / Geht es am...? / ... kann ich leider nicht. / Das passt gut. / Ich muss den Termin absagen/verschieben.",
        ruleVi: "Tôi muốn đặt lịch hẹn. / Khi nào tiện cho bạn? / ...được không? / ...tôi tiếc là không được. / Vậy tiện lắm. / Tôi phải hủy/dời lịch hẹn.",
        examples: [
          { de: "Ich möchte einen Termin für nächste Woche.", vi: "Tôi muốn đặt lịch hẹn cho tuần sau." },
          { de: "Haben Sie am Freitag noch einen Termin frei?", vi: "Thứ Sáu bạn còn lịch trống không?" },
          { de: "Tut mir leid, Montag passt mir nicht.", vi: "Xin lỗi, thứ Hai tôi không tiện." },
          { de: "Kann ich den Termin auf Dienstag verschieben?", vi: "Tôi có thể dời lịch hẹn sang thứ Ba được không?" },
          { de: "Ich muss meinen Termin leider absagen.", vi: "Tiếc là tôi phải hủy lịch hẹn." }
        ]
      },
      {
        type: "explanation",
        titleDe: "Beim Arzt in Deutschland",
        titleVi: "Khám bác sĩ ở Đức",
        textDe: "In Deutschland braucht man meistens einen Termin beim Arzt. Man ruft vorher in der Praxis an. Wichtig: Bringen Sie immer Ihre Versicherungskarte mit! Am Empfang melden Sie sich an und warten im Wartezimmer.",
        textVi: "Ở Đức, bạn thường cần đặt lịch hẹn trước khi đi khám bác sĩ. Bạn gọi điện đến phòng khám trước. Quan trọng: Luôn mang theo thẻ bảo hiểm y tế (Versicherungskarte)! Ở quầy tiếp tân bạn đăng ký và ngồi chờ trong phòng chờ (Wartezimmer). Khác với ở Việt Nam, ở Đức bạn không thể đến phòng khám mà không có hẹn trước."
      },
      {
        type: "practice",
        titleDe: "Einen Termin vereinbaren",
        titleVi: "Đặt lịch hẹn",
        instruction: "Rollenspiel: Du möchtest einen Termin beim Zahnarzt (Nha sĩ). Ruf an und vereinbare einen Termin. Benutze: Ich möchte einen Termin... / Wann passt...? / Geht es am...? Schreibe den Dialog auf.",
        instructionVi: "Đóng vai: Bạn muốn đặt lịch hẹn nha sĩ (Zahnarzt). Gọi điện và đặt hẹn. Sử dụng: Ich möchte einen Termin... / Wann passt...? / Geht es am...? Viết lại đoạn hội thoại."
      }
    ]
  },

  // ============================================================
  // CHAPTER 6: Einkaufen & Kleidung
  // ============================================================

  // --- Chapter 6, Lesson 1: Im Kaufhaus ---
  {
    id: "a1-ch6-l1",
    chapterId: 6,
    lessonNumber: 1,
    title: "Im Kaufhaus",
    titleVi: "Trong trung tâm thương mại",
    type: "Einführung",
    objectives: [
      "Nắm được từ vựng về quần áo, kích cỡ và màu sắc",
      "Hỏi về sản phẩm trong cửa hàng quần áo",
      "Diễn đạt sở thích về quần áo"
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Kleidung",
        titleVi: "Quần áo",
        words: [
          { de: "Hose", vi: "quần dài", article: "die" },
          { de: "Jeans", vi: "quần jean", article: "die" },
          { de: "Rock", vi: "váy", article: "der" },
          { de: "Kleid", vi: "đầm/váy liền", article: "das" },
          { de: "Hemd", vi: "áo sơ mi (nam)", article: "das" },
          { de: "Bluse", vi: "áo sơ mi (nữ)", article: "die" },
          { de: "T-Shirt", vi: "áo phông", article: "das" },
          { de: "Pullover", vi: "áo len", article: "der" },
          { de: "Jacke", vi: "áo khoác ngắn", article: "die" },
          { de: "Mantel", vi: "áo khoác dài", article: "der" },
          { de: "Schuhe", vi: "giày (số nhiều)", article: "die" },
          { de: "Stiefel", vi: "ủng/bốt", article: "die" },
          { de: "Socken", vi: "tất/vớ (số nhiều)", article: "die" },
          { de: "Mütze", vi: "mũ len", article: "die" },
          { de: "Schal", vi: "khăn quàng cổ", article: "der" },
          { de: "Handschuhe", vi: "găng tay (số nhiều)", article: "die" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Größen und Beschreibungen",
        titleVi: "Kích cỡ và mô tả",
        words: [
          { de: "Größe", vi: "kích cỡ, size", article: "die" },
          { de: "klein (S)", vi: "nhỏ" },
          { de: "mittel (M)", vi: "trung bình" },
          { de: "groß (L)", vi: "lớn" },
          { de: "eng", vi: "chật" },
          { de: "weit", vi: "rộng" },
          { de: "kurz", vi: "ngắn" },
          { de: "lang", vi: "dài" },
          { de: "schick", vi: "thanh lịch" },
          { de: "bequem", vi: "thoải mái" },
          { de: "günstig", vi: "giá rẻ" },
          { de: "teuer", vi: "đắt" },
          { de: "Sonderangebot", vi: "khuyến mãi", article: "das" },
          { de: "Umkleidekabine", vi: "phòng thử đồ", article: "die" }
        ]
      },
      {
        type: "explanation",
        titleDe: "Einkaufen in Deutschland",
        titleVi: "Mua sắm ở Đức",
        textDe: "In Deutschland gibt es Kaufhäuser (z.B. Galeria), Modeketten (z.B. H&M, Zara) und kleine Boutiquen. Die Größen sind: XS, S, M, L, XL oder 34, 36, 38, 40, 42 für Damen und 46, 48, 50, 52 für Herren. Achtung: Deutsche Größen sind anders als asiatische Größen!",
        textVi: "Ở Đức có các trung tâm thương mại (ví dụ: Galeria), chuỗi thời trang (ví dụ: H&M, Zara) và các cửa hàng nhỏ. Kích cỡ: XS, S, M, L, XL hoặc 34, 36, 38, 40, 42 cho nữ và 46, 48, 50, 52 cho nam. Lưu ý: Size Đức khác với size châu Á! Thông thường bạn cần lấy size nhỏ hơn so với ở Việt Nam."
      },
      {
        type: "dialogue",
        titleDe: "Im Kaufhaus",
        titleVi: "Trong trung tâm thương mại",
        lines: [
          { speaker: "Verkäuferin", de: "Guten Tag! Kann ich Ihnen helfen?", vi: "Xin chào! Tôi có thể giúp gì?" },
          { speaker: "Mai", de: "Ja, ich suche eine Jacke.", vi: "Vâng, tôi đang tìm một cái áo khoác." },
          { speaker: "Verkäuferin", de: "Welche Größe haben Sie?", vi: "Bạn mặc size mấy?" },
          { speaker: "Mai", de: "Größe S oder 36.", vi: "Size S hoặc 36." },
          { speaker: "Verkäuferin", de: "Welche Farbe möchten Sie?", vi: "Bạn muốn màu gì?" },
          { speaker: "Mai", de: "Haben Sie etwas in Blau oder Schwarz?", vi: "Bạn có gì màu xanh dương hoặc đen không?" },
          { speaker: "Verkäuferin", de: "Ja, hier ist eine blaue Jacke in Größe S. Sie kostet 79 Euro.", vi: "Vâng, đây là áo khoác xanh dương size S. Giá 79 Euro." },
          { speaker: "Mai", de: "Kann ich die anprobieren?", vi: "Tôi có thể thử được không?" },
          { speaker: "Verkäuferin", de: "Natürlich! Die Umkleidekabine ist dort hinten.", vi: "Dĩ nhiên! Phòng thử đồ ở phía sau kia." },
          { speaker: "Mai", de: "Die Jacke passt gut und gefällt mir. Ich nehme sie!", vi: "Áo khoác vừa vặn và tôi thích. Tôi lấy cái này!" }
        ]
      },
      {
        type: "practice",
        titleDe: "Was trägst du heute?",
        titleVi: "Hôm nay bạn mặc gì?",
        instruction: "Beschreibe deine Kleidung heute. Was trägst du? Welche Farbe hat die Kleidung? Beispiel: Ich trage eine blaue Jeans und ein weißes T-Shirt. Meine Schuhe sind schwarz.",
        instructionVi: "Mô tả quần áo bạn mặc hôm nay. Bạn đang mặc gì? Quần áo màu gì? Ví dụ: Ich trage eine blaue Jeans und ein weißes T-Shirt. Meine Schuhe sind schwarz."
      }
    ]
  },

  // --- Chapter 6, Lesson 2: Personalpronomen im Akkusativ ---
  {
    id: "a1-ch6-l2",
    chapterId: 6,
    lessonNumber: 2,
    title: "Personalpronomen im Akkusativ",
    titleVi: "Đại từ nhân xưng ở cách Akkusativ",
    type: "Grammatik",
    objectives: [
      "Nắm được đại từ nhân xưng ở cách Akkusativ",
      "Sử dụng tính từ làm vị ngữ (prädikativ)",
      "Thay thế danh từ bằng đại từ trong câu"
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Personalpronomen im Akkusativ",
        titleVi: "Đại từ nhân xưng cách Akkusativ",
        rule: "ich → mich, du → dich, er → ihn, sie → sie, es → es, wir → uns, ihr → euch, sie/Sie → sie/Sie.",
        ruleVi: "Khi đại từ nhân xưng làm tân ngữ trực tiếp (Akkusativ), chúng thay đổi hình thức: ich → mich (tôi), du → dich (bạn), er → ihn (anh ấy), sie → sie (cô ấy, không đổi), es → es (nó, không đổi), wir → uns (chúng tôi), ihr → euch (các bạn), sie/Sie → sie/Sie (họ/quý vị, không đổi).",
        examples: [
          { de: "Ich sehe dich. (du → dich)", vi: "Tôi nhìn thấy bạn." },
          { de: "Kennst du mich? (ich → mich)", vi: "Bạn biết tôi không?" },
          { de: "Der Pullover? Ich nehme ihn. (er → ihn)", vi: "Cái áo len á? Tôi lấy nó." },
          { de: "Die Jacke? Ich kaufe sie. (sie → sie)", vi: "Cái áo khoác á? Tôi mua nó." },
          { de: "Er besucht uns am Sonntag. (wir → uns)", vi: "Anh ấy thăm chúng tôi vào Chủ nhật." },
          { de: "Ich lade euch ein. (ihr → euch)", vi: "Tôi mời các bạn." }
        ]
      },
      {
        type: "explanation",
        titleDe: "Pronomen ersetzen Nomen",
        titleVi: "Đại từ thay thế danh từ",
        textDe: "Wir benutzen Pronomen, um Wiederholungen zu vermeiden. Der Artikel bestimmt das Pronomen: der → ihn, die → sie, das → es. Beispiel: Wie findest du den Rock? — Ich finde ihn schön.",
        textVi: "Chúng ta dùng đại từ để tránh lặp lại danh từ. Mạo từ quyết định đại từ thay thế: der (giống đực) → ihn, die (giống cái) → sie, das (trung tính) → es. Ví dụ: Wie findest du den Rock? (Bạn thấy cái váy thế nào?) — Ich finde ihn schön. (Tôi thấy nó đẹp.) Vì Rock là der Rock (giống đực), nên dùng ihn."
      },
      {
        type: "grammar",
        titleDe: "Adjektive prädikativ (nach sein/finden/werden)",
        titleVi: "Tính từ làm vị ngữ (sau sein/finden/werden)",
        rule: "Nach sein, finden, werden stehen Adjektive ohne Endung: Das Kleid ist schön. Ich finde den Pullover bequem. Das Wetter wird kalt.",
        ruleVi: "Sau các động từ sein (là), finden (thấy/cho rằng), werden (trở nên), tính từ KHÔNG thêm đuôi: Das Kleid ist schön. (Cái đầm đẹp.) Ich finde den Pullover bequem. (Tôi thấy áo len thoải mái.) Das Wetter wird kalt. (Thời tiết trở nên lạnh.) Đây là cách dùng đơn giản nhất của tính từ.",
        examples: [
          { de: "Die Hose ist zu eng.", vi: "Cái quần chật quá." },
          { de: "Ich finde die Schuhe schick.", vi: "Tôi thấy đôi giày thanh lịch." },
          { de: "Der Mantel ist zu teuer.", vi: "Cái áo khoác dài đắt quá." },
          { de: "Die Bluse ist sehr günstig.", vi: "Cái áo sơ mi nữ rẻ lắm." },
          { de: "Ich finde das T-Shirt zu groß.", vi: "Tôi thấy cái áo phông quá lớn." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Einkaufen mit einer Freundin",
        titleVi: "Mua sắm với bạn gái",
        lines: [
          { speaker: "Lan", de: "Wie findest du diesen Rock?", vi: "Bạn thấy cái váy này thế nào?" },
          { speaker: "Hoa", de: "Ich finde ihn sehr schön! Probier ihn mal an!", vi: "Tôi thấy nó rất đẹp! Thử nó đi!" },
          { speaker: "Lan", de: "Okay... Er passt mir gut. Aber er ist teuer — 69 Euro.", vi: "Okay... Nó vừa tôi lắm. Nhưng đắt quá — 69 Euro." },
          { speaker: "Hoa", de: "Schau mal, diese Bluse hier. Sie ist im Angebot!", vi: "Nhìn này, cái áo sơ mi này. Nó đang giảm giá!" },
          { speaker: "Lan", de: "Oh, sie gefällt mir. Und sie ist günstig — nur 19 Euro.", vi: "Ồ, tôi thích nó. Và giá rẻ — chỉ 19 Euro." },
          { speaker: "Hoa", de: "Nimm sie! Und die Schuhe dort — findest du sie schön?", vi: "Mua đi! Còn đôi giày kia — bạn thấy đẹp không?" },
          { speaker: "Lan", de: "Ja, ich finde sie toll. Aber ich brauche sie nicht.", vi: "Ừ, tôi thấy chúng tuyệt. Nhưng tôi không cần chúng." }
        ]
      },
      {
        type: "practice",
        titleDe: "Ersetze das Nomen durch ein Pronomen",
        titleVi: "Thay danh từ bằng đại từ",
        instruction: "Ersetze das unterstrichene Nomen durch ein Pronomen im Akkusativ: 1) Ich kaufe den Pullover. → Ich kaufe ___. 2) Siehst du die Jacke? → Siehst du ___? 3) Wir nehmen das Kleid. → Wir nehmen ___. 4) Er findet die Schuhe schön. → Er findet ___ schön. 5) Ich brauche den Schal. → Ich brauche ___.",
        instructionVi: "Thay danh từ được gạch chân bằng đại từ Akkusativ: 1) Ich kaufe den Pullover. → Ich kaufe ___. (ihn) 2) Siehst du die Jacke? → Siehst du ___? (sie) 3) Wir nehmen das Kleid. → Wir nehmen ___. (es) 4) Er findet die Schuhe schön. → Er findet ___ schön. (sie) 5) Ich brauche den Schal. → Ich brauche ___. (ihn)"
      }
    ]
  },

  // --- Chapter 6, Lesson 3: Kleidung kaufen ---
  {
    id: "a1-ch6-l3",
    chapterId: 6,
    lessonNumber: 3,
    title: "Kleidung kaufen",
    titleVi: "Mua quần áo",
    type: "Fertigkeit",
    objectives: [
      "Thử quần áo và diễn đạt ý kiến về size, kiểu dáng",
      "Hỏi về kích cỡ, giá cả và thanh toán",
      "Thực hành hội thoại mua quần áo hoàn chỉnh"
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Im Geschäft — nützliche Wörter",
        titleVi: "Trong cửa hàng — từ vựng hữu ích",
        words: [
          { de: "anprobieren", vi: "thử (quần áo)" },
          { de: "passen", vi: "vừa vặn" },
          { de: "gefallen", vi: "thích, ưa" },
          { de: "stehen", vi: "hợp (với ai đó)" },
          { de: "umtauschen", vi: "đổi hàng" },
          { de: "zurückgeben", vi: "trả lại hàng" },
          { de: "bar bezahlen", vi: "trả tiền mặt" },
          { de: "mit Karte bezahlen", vi: "trả bằng thẻ" },
          { de: "Kasse", vi: "quầy thanh toán", article: "die" },
          { de: "Quittung", vi: "hóa đơn", article: "die" },
          { de: "Kassenbon", vi: "biên lai", article: "der" },
          { de: "Rabatt", vi: "giảm giá", article: "der" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nützliche Sätze beim Einkaufen",
        titleVi: "Các câu hữu ích khi mua sắm",
        rule: "Kann ich ... anprobieren? / Haben Sie das in Größe...? / Das steht Ihnen gut! / Das passt (nicht). / Ich nehme ... / Was kostet...? / Kann ich mit Karte bezahlen?",
        ruleVi: "Tôi có thể thử...không? / Bạn có cái này size...không? / Cái này hợp với bạn lắm! / Cái này vừa (không vừa). / Tôi lấy... / ...giá bao nhiêu? / Tôi có thể trả bằng thẻ không?",
        examples: [
          { de: "Kann ich diese Hose anprobieren?", vi: "Tôi có thể thử cái quần này không?" },
          { de: "Haben Sie das in Größe 38?", vi: "Bạn có cái này size 38 không?" },
          { de: "Die Jacke steht Ihnen sehr gut!", vi: "Cái áo khoác hợp với bạn lắm!" },
          { de: "Die Hose passt nicht. Sie ist zu eng.", vi: "Cái quần không vừa. Nó chật quá." },
          { de: "Was kostet der Pullover?", vi: "Cái áo len giá bao nhiêu?" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Kleidung anprobieren und kaufen",
        titleVi: "Thử và mua quần áo",
        lines: [
          { speaker: "Duc", de: "Entschuldigung, kann ich diese Jeans in Größe 32 haben?", vi: "Xin lỗi, tôi có thể lấy quần jean này size 32 không?" },
          { speaker: "Verkäufer", de: "Moment, ich schaue nach... Ja, hier bitte. Die Umkleidekabine ist dort.", vi: "Chờ chút, để tôi xem... Vâng, mời. Phòng thử đồ ở kia." },
          { speaker: "Duc", de: "Hmm, die Jeans ist ein bisschen zu lang. Haben Sie die auch kürzer?", vi: "Hmm, quần jean hơi dài. Bạn có loại ngắn hơn không?" },
          { speaker: "Verkäufer", de: "Probieren Sie mal Größe 31. Die ist etwas kürzer.", vi: "Bạn thử size 31 xem. Size đó ngắn hơn một chút." },
          { speaker: "Duc", de: "Ja, die passt perfekt! Was kostet sie?", vi: "Vâng, vừa hoàn hảo! Giá bao nhiêu?" },
          { speaker: "Verkäufer", de: "49,99 Euro. Heute haben wir 20% Rabatt, also nur 39,99 Euro.", vi: "49,99 Euro. Hôm nay giảm giá 20%, nên chỉ còn 39,99 Euro." },
          { speaker: "Duc", de: "Super! Ich nehme sie. Kann ich mit Karte bezahlen?", vi: "Tuyệt! Tôi lấy. Tôi trả bằng thẻ được không?" },
          { speaker: "Verkäufer", de: "Ja, natürlich. Bitte an der Kasse. Möchten Sie eine Tüte?", vi: "Vâng, dĩ nhiên. Mời ra quầy thanh toán. Bạn có cần túi không?" },
          { speaker: "Duc", de: "Nein danke, ich habe meinen Rucksack dabei.", vi: "Không, cảm ơn, tôi có ba lô rồi." },
          { speaker: "Verkäufer", de: "Hier ist Ihr Kassenbon. Sie können die Jeans innerhalb von 14 Tagen umtauschen.", vi: "Đây là biên lai. Bạn có thể đổi quần jean trong vòng 14 ngày." }
        ]
      },
      {
        type: "explanation",
        titleDe: "Umtausch und Rückgabe",
        titleVi: "Đổi và trả hàng",
        textDe: "In Deutschland kann man Kleidung meistens innerhalb von 14 Tagen umtauschen oder zurückgeben. Man braucht den Kassenbon. Die Kleidung muss sauber sein und das Etikett muss noch dran sein.",
        textVi: "Ở Đức, bạn thường có thể đổi hoặc trả lại quần áo trong vòng 14 ngày. Bạn cần giữ biên lai (Kassenbon). Quần áo phải sạch và còn nguyên nhãn mác (Etikett). Đây là quyền lợi của người tiêu dùng ở Đức, rất khác so với nhiều cửa hàng ở Việt Nam."
      },
      {
        type: "practice",
        titleDe: "Einkaufsdialog schreiben",
        titleVi: "Viết hội thoại mua sắm",
        instruction: "Schreibe einen Dialog: Du möchtest ein Kleid (oder ein Hemd) kaufen. Frage nach der Größe, probiere es an, frage nach dem Preis und bezahle. Der Dialog soll mindestens 8 Zeilen haben.",
        instructionVi: "Viết một đoạn hội thoại: Bạn muốn mua một cái đầm (hoặc áo sơ mi). Hỏi về size, thử đồ, hỏi giá và thanh toán. Đoạn hội thoại cần ít nhất 8 dòng."
      }
    ]
  },

  // --- Chapter 6, Lesson 4: Online-Shopping ---
  {
    id: "a1-ch6-l4",
    chapterId: 6,
    lessonNumber: 4,
    title: "Online-Shopping",
    titleVi: "Mua sắm trực tuyến",
    type: "Integration",
    objectives: [
      "Đọc hiểu mô tả sản phẩm trực tuyến bằng tiếng Đức",
      "Viết email trả hàng (Rücksendung) đơn giản",
      "Sử dụng tổng hợp từ vựng và ngữ pháp đã học"
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Online-Shopping — Vokabeln",
        titleVi: "Mua sắm trực tuyến — Từ vựng",
        words: [
          { de: "bestellen", vi: "đặt hàng" },
          { de: "Bestellung", vi: "đơn đặt hàng", article: "die" },
          { de: "liefern", vi: "giao hàng" },
          { de: "Lieferung", vi: "việc giao hàng", article: "die" },
          { de: "Versandkosten", vi: "phí vận chuyển (số nhiều)", article: "die" },
          { de: "kostenloser Versand", vi: "miễn phí vận chuyển" },
          { de: "Warenkorb", vi: "giỏ hàng", article: "der" },
          { de: "Rücksendung", vi: "trả hàng", article: "die" },
          { de: "zurückschicken", vi: "gửi trả lại" },
          { de: "Kundennummer", vi: "mã khách hàng", article: "die" },
          { de: "Bestellnummer", vi: "mã đơn hàng", article: "die" },
          { de: "Produktbeschreibung", vi: "mô tả sản phẩm", article: "die" },
          { de: "verfügbar", vi: "còn hàng" },
          { de: "ausverkauft", vi: "hết hàng" }
        ]
      },
      {
        type: "explanation",
        titleDe: "Eine Produktbeschreibung lesen",
        titleVi: "Đọc mô tả sản phẩm",
        textDe: "Winterjacke Damen — Farbe: Dunkelblau — Größen: S, M, L, XL — Material: 100% Polyester, Futter: Fleece — Waschen: Maschinenwäsche bei 30°C — Preis: 89,99 € (statt 129,99 €) — Versandkostenfrei ab 50 € — Lieferzeit: 3-5 Werktage — Kostenlose Rücksendung innerhalb von 30 Tagen.",
        textVi: "Áo khoác mùa đông nữ — Màu: Xanh đậm — Kích cỡ: S, M, L, XL — Chất liệu: 100% Polyester, lót: Fleece — Giặt: Giặt máy ở 30°C — Giá: 89,99 € (giá gốc 129,99 €) — Miễn phí vận chuyển cho đơn từ 50 € — Thời gian giao: 3-5 ngày làm việc — Trả hàng miễn phí trong vòng 30 ngày."
      },
      {
        type: "grammar",
        titleDe: "Eine E-Mail schreiben: Rücksendung",
        titleVi: "Viết email: Trả hàng",
        rule: "Betreff: Rücksendung — Bestellnummer... / Sehr geehrte Damen und Herren, / ich möchte... zurückschicken, weil... / Der Grund ist: ... passt nicht / ... gefällt mir nicht / ... ist kaputt. / Mit freundlichen Grüßen",
        ruleVi: "Tiêu đề: Rücksendung — Mã đơn hàng... / Kính gửi quý ông bà, / tôi muốn trả lại... vì... / Lý do: ... không vừa / ... tôi không thích / ... bị hỏng. / Trân trọng. Đây là cấu trúc email trang trọng chuẩn ở Đức.",
        examples: [
          { de: "Ich möchte die Jacke zurückschicken.", vi: "Tôi muốn gửi trả lại áo khoác." },
          { de: "Die Hose passt leider nicht. Sie ist zu groß.", vi: "Tiếc là quần không vừa. Nó quá lớn." },
          { de: "Bitte überweisen Sie den Betrag zurück.", vi: "Xin chuyển lại số tiền." },
          { de: "Meine Bestellnummer ist 12345.", vi: "Mã đơn hàng của tôi là 12345." }
        ]
      },
      {
        type: "explanation",
        titleDe: "Beispiel-E-Mail",
        titleVi: "Email mẫu",
        textDe: "Betreff: Rücksendung — Bestellnummer 98765\n\nSehr geehrte Damen und Herren,\n\nam 15. März habe ich eine Winterjacke in Größe M bestellt (Bestellnummer 98765). Leider passt die Jacke nicht — sie ist zu klein. Ich möchte sie gerne zurückschicken und bitte um Erstattung.\n\nMeine Kundennummer ist KD-2024-4567.\n\nMit freundlichen Grüßen\nNguyen Van Thanh",
        textVi: "Tiêu đề: Trả hàng — Mã đơn hàng 98765\n\nKính gửi quý ông bà,\n\nvào ngày 15 tháng 3, tôi đã đặt một áo khoác mùa đông size M (mã đơn hàng 98765). Tiếc là áo khoác không vừa — nó quá nhỏ. Tôi muốn gửi trả lại và xin hoàn tiền.\n\nMã khách hàng của tôi là KD-2024-4567.\n\nTrân trọng,\nNguyen Van Thanh"
      },
      {
        type: "dialogue",
        titleDe: "Über Online-Shopping sprechen",
        titleVi: "Nói chuyện về mua sắm trực tuyến",
        lines: [
          { speaker: "Linh", de: "Kaufst du oft Kleidung im Internet?", vi: "Bạn có hay mua quần áo trên mạng không?" },
          { speaker: "Tom", de: "Ja, ziemlich oft. Es ist bequem und oft günstiger.", vi: "Có, khá thường xuyên. Tiện lợi và thường rẻ hơn." },
          { speaker: "Linh", de: "Aber man kann die Kleidung nicht anprobieren!", vi: "Nhưng mình không thể thử quần áo được!" },
          { speaker: "Tom", de: "Stimmt, aber man kann sie zurückschicken. Das ist in Deutschland kostenlos.", vi: "Đúng, nhưng mình có thể trả lại. Ở Đức trả hàng miễn phí." },
          { speaker: "Linh", de: "Ach so! Das wusste ich nicht. Wo kaufst du am liebsten ein?", vi: "À ra vậy! Tôi không biết. Bạn hay mua ở đâu nhất?" },
          { speaker: "Tom", de: "Ich bestelle meistens bei Zalando. Die Lieferung ist schnell — in 2-3 Tagen.", vi: "Tôi thường đặt ở Zalando. Giao hàng nhanh — 2-3 ngày." },
          { speaker: "Linh", de: "Und die Versandkosten?", vi: "Còn phí vận chuyển?" },
          { speaker: "Tom", de: "Bei Zalando ist der Versand kostenlos. Und Rücksendungen auch!", vi: "Ở Zalando miễn phí vận chuyển. Và trả hàng cũng miễn phí!" }
        ]
      },
      {
        type: "practice",
        titleDe: "Schreibe eine Rücksendungs-E-Mail",
        titleVi: "Viết email trả hàng",
        instruction: "Du hast online Schuhe bestellt (Bestellnummer 54321), aber sie sind zu klein. Schreibe eine E-Mail an den Online-Shop. Benutze: Sehr geehrte Damen und Herren / Bestellnummer / zurückschicken / passt nicht / zu klein / Erstattung / Mit freundlichen Grüßen.",
        instructionVi: "Bạn đã đặt mua giày trực tuyến (mã đơn hàng 54321), nhưng giày quá nhỏ. Viết email cho cửa hàng trực tuyến. Sử dụng: Sehr geehrte Damen und Herren / Bestellnummer / zurückschicken / passt nicht / zu klein / Erstattung / Mit freundlichen Grüßen."
      }
    ]
  }
];
