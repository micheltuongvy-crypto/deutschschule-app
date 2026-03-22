// A2 Chapters 4-6: Natur & Umwelt, Kultur & Feste, Wohnen & Haushalt

import type { ContentBlock, Lesson } from "../a1/chapters4_6";

export const a2LessonsCh4_6: Lesson[] = [
  // ============================================================
  // CHAPTER 4: Natur & Umwelt
  // ============================================================

  // --- Chapter 4, Lesson 1: Wetter & Jahreszeiten ---
  {
    id: "a2-ch4-l1",
    chapterId: 4,
    lessonNumber: 1,
    title: "Wetter & Jahreszeiten",
    titleVi: "Thời tiết & Các mùa trong năm",
    type: "Einführung",
    objectives: [
      "Mô tả thời tiết chi tiết bằng tiếng Đức",
      "Nắm từ vựng về các mùa và hiện tượng thời tiết",
      "Sử dụng câu phụ với 'wenn' để nói về thời tiết"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das Wetter in Deutschland",
        titleVi: "Thời tiết ở Đức",
        textDe: "Deutschland hat vier Jahreszeiten: Frühling, Sommer, Herbst und Winter. Das Wetter ändert sich oft. Im Sommer kann es sehr heiß werden, im Winter schneit es manchmal. Der Frühling ist mild und im Herbst regnet es oft. Die Deutschen sprechen gern über das Wetter — es ist ein beliebtes Gesprächsthema.",
        textVi: "Nước Đức có bốn mùa: mùa xuân, mùa hè, mùa thu và mùa đông. Thời tiết thường thay đổi. Mùa hè có thể rất nóng, mùa đông đôi khi có tuyết. Mùa xuân ôn hòa và mùa thu thường mưa. Người Đức thích nói về thời tiết — đó là một chủ đề trò chuyện phổ biến."
      },
      {
        type: "vocabulary",
        titleDe: "Die Jahreszeiten",
        titleVi: "Các mùa trong năm",
        words: [
          { de: "Frühling", vi: "mùa xuân", article: "der" },
          { de: "Sommer", vi: "mùa hè", article: "der" },
          { de: "Herbst", vi: "mùa thu", article: "der" },
          { de: "Winter", vi: "mùa đông", article: "der" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Das Wetter",
        titleVi: "Thời tiết",
        words: [
          { de: "Sonne", vi: "mặt trời", article: "die" },
          { de: "Regen", vi: "mưa", article: "der" },
          { de: "Schnee", vi: "tuyết", article: "der" },
          { de: "Wind", vi: "gió", article: "der" },
          { de: "Gewitter", vi: "giông bão", article: "das" },
          { de: "Nebel", vi: "sương mù", article: "der" },
          { de: "Wolke", vi: "mây", article: "die" },
          { de: "Temperatur", vi: "nhiệt độ", article: "die" },
          { de: "Grad", vi: "độ (nhiệt độ)", article: "das" },
          { de: "Eis", vi: "băng", article: "das" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Adjektive zum Wetter",
        titleVi: "Tính từ về thời tiết",
        words: [
          { de: "sonnig", vi: "nắng" },
          { de: "regnerisch", vi: "mưa (tính từ)" },
          { de: "bewölkt", vi: "nhiều mây" },
          { de: "windig", vi: "nhiều gió" },
          { de: "neblig", vi: "sương mù (tính từ)" },
          { de: "heiß", vi: "nóng" },
          { de: "warm", vi: "ấm" },
          { de: "kühl", vi: "mát" },
          { de: "kalt", vi: "lạnh" },
          { de: "feucht", vi: "ẩm ướt" },
          { de: "trocken", vi: "khô" },
          { de: "stürmisch", vi: "bão tố" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Wie ist das Wetter heute?",
        titleVi: "Hôm nay thời tiết thế nào?",
        lines: [
          { speaker: "Linh", de: "Wie ist das Wetter heute?", vi: "Hôm nay thời tiết thế nào?" },
          { speaker: "Thomas", de: "Es ist bewölkt und ziemlich kühl. Nur 12 Grad.", vi: "Trời nhiều mây và khá mát. Chỉ 12 độ." },
          { speaker: "Linh", de: "Soll ich eine Jacke mitnehmen?", vi: "Tôi có nên mang theo áo khoác không?" },
          { speaker: "Thomas", de: "Ja, nimm lieber eine Jacke mit. Wenn es regnet, brauchst du auch einen Regenschirm.", vi: "Có, bạn nên mang theo áo khoác. Nếu trời mưa, bạn cũng cần một chiếc ô." },
          { speaker: "Linh", de: "In Vietnam ist es jetzt bestimmt viel wärmer!", vi: "Ở Việt Nam bây giờ chắc chắn ấm hơn nhiều!" },
          { speaker: "Thomas", de: "Ja, aber im Sommer wird es hier auch schön warm.", vi: "Đúng, nhưng mùa hè ở đây cũng ấm áp đẹp trời." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nebensätze mit 'wenn'",
        titleVi: "Câu phụ với 'wenn' (khi/nếu)",
        rule: "Wenn + Subjekt + ... + Verb (am Ende). 'Wenn' bedeutet 'wenn/falls' (Bedingung) oder 'wenn/als' (Zeit). Im Nebensatz steht das Verb am Ende.",
        ruleVi: "'Wenn' có nghĩa là 'khi' hoặc 'nếu'. Trong câu phụ với 'wenn', động từ đứng ở cuối câu. Cấu trúc: Wenn + chủ ngữ + ... + động từ (cuối câu). Đây là một điểm ngữ pháp quan trọng ở trình độ A2.",
        examples: [
          { de: "Wenn es regnet, bleibe ich zu Hause.", vi: "Khi trời mưa, tôi ở nhà." },
          { de: "Wenn die Sonne scheint, gehen wir spazieren.", vi: "Khi trời nắng, chúng tôi đi dạo." },
          { de: "Ich nehme einen Regenschirm mit, wenn es bewölkt ist.", vi: "Tôi mang theo ô khi trời nhiều mây." },
          { de: "Wenn es im Winter schneit, fahren die Kinder Schlitten.", vi: "Khi mùa đông có tuyết, bọn trẻ đi xe trượt tuyết." }
        ]
      },
      {
        type: "practice",
        titleDe: "Beschreibe das Wetter",
        titleVi: "Hãy mô tả thời tiết",
        instruction: "Beschreibe das Wetter in deiner Heimatstadt in Vietnam und vergleiche es mit dem Wetter in Deutschland. Benutze Nebensätze mit 'wenn'. Beispiel: Wenn es in Vietnam regnet, ist es trotzdem warm.",
        instructionVi: "Hãy mô tả thời tiết ở quê hương bạn ở Việt Nam và so sánh với thời tiết ở Đức. Sử dụng câu phụ với 'wenn'. Ví dụ: Khi trời mưa ở Việt Nam, trời vẫn ấm."
      }
    ]
  },

  // --- Chapter 4, Lesson 2: Tiere & Pflanzen ---
  {
    id: "a2-ch4-l2",
    chapterId: 4,
    lessonNumber: 2,
    title: "Tiere & Pflanzen",
    titleVi: "Động vật & Thực vật",
    type: "Grammatik",
    objectives: [
      "Học từ vựng về động vật và thực vật phổ biến",
      "Sử dụng mạo từ chính xác với danh từ chỉ động vật",
      "Mô tả đặc điểm của động vật bằng tính từ"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Tiere in Deutschland",
        titleVi: "Động vật ở Đức",
        textDe: "In Deutschland gibt es viele verschiedene Tiere. In den Wäldern leben Rehe, Füchse und Wildschweine. Viele Deutsche haben Haustiere: Hunde und Katzen sind am beliebtesten. In den Parks sieht man oft Eichhörnchen, Enten und Schwäne. Auch Vögel wie Amseln, Spatzen und Rotkehlchen sind sehr häufig.",
        textVi: "Ở Đức có nhiều loài động vật khác nhau. Trong rừng có nai, cáo và lợn rừng. Nhiều người Đức nuôi thú cưng: chó và mèo là phổ biến nhất. Trong công viên thường thấy sóc, vịt và thiên nga. Các loài chim như chim sáo đen, chim sẻ và chim cổ đỏ cũng rất phổ biến."
      },
      {
        type: "vocabulary",
        titleDe: "Haustiere & Wildtiere",
        titleVi: "Thú cưng & Động vật hoang dã",
        words: [
          { de: "Hund", vi: "chó", article: "der" },
          { de: "Katze", vi: "mèo", article: "die" },
          { de: "Vogel", vi: "chim", article: "der" },
          { de: "Fisch", vi: "cá", article: "der" },
          { de: "Kaninchen", vi: "thỏ", article: "das" },
          { de: "Pferd", vi: "ngựa", article: "das" },
          { de: "Kuh", vi: "bò cái", article: "die" },
          { de: "Schwein", vi: "heo/lợn", article: "das" },
          { de: "Fuchs", vi: "cáo", article: "der" },
          { de: "Reh", vi: "nai", article: "das" },
          { de: "Eichhörnchen", vi: "sóc", article: "das" },
          { de: "Schmetterling", vi: "bướm", article: "der" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Pflanzen & Natur",
        titleVi: "Thực vật & Thiên nhiên",
        words: [
          { de: "Baum", vi: "cây (lớn)", article: "der" },
          { de: "Blume", vi: "hoa", article: "die" },
          { de: "Gras", vi: "cỏ", article: "das" },
          { de: "Wald", vi: "rừng", article: "der" },
          { de: "Wiese", vi: "đồng cỏ", article: "die" },
          { de: "Rose", vi: "hoa hồng", article: "die" },
          { de: "Sonnenblume", vi: "hoa hướng dương", article: "die" },
          { de: "Pilz", vi: "nấm", article: "der" },
          { de: "Blatt", vi: "lá", article: "das" },
          { de: "Wurzel", vi: "rễ", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Adjektivdeklination mit bestimmtem Artikel",
        titleVi: "Biến cách tính từ với mạo từ xác định",
        rule: "Nominativ: der große Hund / die kleine Katze / das junge Pferd. Akkusativ: den großen Hund / die kleine Katze / das junge Pferd. Dativ: dem großen Hund / der kleinen Katze / dem jungen Pferd.",
        ruleVi: "Khi tính từ đứng trước danh từ và có mạo từ xác định (der/die/das), tính từ phải thêm đuôi biến cách. Nominativ: -e (tất cả giống). Akkusativ: -en (der → den), -e (die/das). Dativ: -en (tất cả giống). Đây là quy tắc quan trọng ở A2!",
        examples: [
          { de: "Der große Hund spielt im Garten.", vi: "Con chó lớn chơi trong vườn." },
          { de: "Ich sehe die kleine Katze.", vi: "Tôi thấy con mèo nhỏ." },
          { de: "Das junge Pferd läuft schnell.", vi: "Con ngựa non chạy nhanh." },
          { de: "Er gibt dem alten Hund Wasser.", vi: "Anh ấy cho con chó già nước." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Im Tierpark",
        titleVi: "Ở vườn thú",
        lines: [
          { speaker: "Hoa", de: "Schau mal, der große Bär dort!", vi: "Nhìn kìa, con gấu lớn ở đó!" },
          { speaker: "Stefan", de: "Ja, und die kleinen Affen sind auch lustig.", vi: "Ừ, và những con khỉ nhỏ cũng vui nhộn." },
          { speaker: "Hoa", de: "In Vietnam haben wir viele verschiedene Tiere, zum Beispiel Wasserbüffel.", vi: "Ở Việt Nam chúng tôi có nhiều động vật khác nhau, ví dụ trâu nước." },
          { speaker: "Stefan", de: "Habt ihr auch Eichhörnchen?", vi: "Các bạn cũng có sóc không?" },
          { speaker: "Hoa", de: "Ja, aber sie sehen anders aus als die deutschen Eichhörnchen.", vi: "Có, nhưng chúng trông khác so với sóc ở Đức." }
        ]
      },
      {
        type: "practice",
        titleDe: "Beschreibe ein Tier",
        titleVi: "Hãy mô tả một con vật",
        instruction: "Wähle ein Tier und beschreibe es mit Adjektiven. Benutze die Adjektivdeklination. Beispiel: Der schöne Schmetterling fliegt über die bunte Wiese. Die schnelle Katze fängt den kleinen Vogel.",
        instructionVi: "Chọn một con vật và mô tả nó bằng tính từ. Sử dụng biến cách tính từ. Ví dụ: Con bướm đẹp bay qua đồng cỏ nhiều màu sắc. Con mèo nhanh bắt con chim nhỏ."
      }
    ]
  },

  // --- Chapter 4, Lesson 3: Umweltschutz ---
  {
    id: "a2-ch4-l3",
    chapterId: 4,
    lessonNumber: 3,
    title: "Umweltschutz",
    titleVi: "Bảo vệ môi trường",
    type: "Fertigkeit",
    objectives: [
      "Nắm từ vựng về chủ đề môi trường",
      "Nói về các vấn đề môi trường và giải pháp",
      "Sử dụng 'man sollte' và 'man muss' để đưa ra lời khuyên"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Umweltschutz in Deutschland",
        titleVi: "Bảo vệ môi trường ở Đức",
        textDe: "Umweltschutz ist in Deutschland sehr wichtig. Die Deutschen trennen ihren Müll in verschiedene Tonnen: Papier, Plastik, Glas und Restmüll. Viele Menschen fahren mit dem Fahrrad oder benutzen öffentliche Verkehrsmittel. Es gibt auch das Pfandsystem: Man bringt leere Flaschen zurück und bekommt Geld dafür. Seit einigen Jahren gibt es keine kostenlosen Plastiktüten mehr in den Geschäften.",
        textVi: "Bảo vệ môi trường rất quan trọng ở Đức. Người Đức phân loại rác vào các thùng khác nhau: giấy, nhựa, thủy tinh và rác thải còn lại. Nhiều người đi xe đạp hoặc sử dụng phương tiện giao thông công cộng. Cũng có hệ thống đặt cọc chai: mang chai rỗng trả lại và nhận tiền. Từ vài năm nay không còn túi nhựa miễn phí trong các cửa hàng."
      },
      {
        type: "vocabulary",
        titleDe: "Umwelt & Recycling",
        titleVi: "Môi trường & Tái chế",
        words: [
          { de: "Umwelt", vi: "môi trường", article: "die" },
          { de: "Müll", vi: "rác", article: "der" },
          { de: "Mülltrennung", vi: "phân loại rác", article: "die" },
          { de: "Recycling", vi: "tái chế", article: "das" },
          { de: "Pfandflasche", vi: "chai có đặt cọc", article: "die" },
          { de: "Plastiktüte", vi: "túi nhựa", article: "die" },
          { de: "Energie", vi: "năng lượng", article: "die" },
          { de: "Strom", vi: "điện", article: "der" },
          { de: "Wasser sparen", vi: "tiết kiệm nước" },
          { de: "Luftverschmutzung", vi: "ô nhiễm không khí", article: "die" },
          { de: "Klimawandel", vi: "biến đổi khí hậu", article: "der" },
          { de: "erneuerbare Energie", vi: "năng lượng tái tạo" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Mülltonnen in Deutschland",
        titleVi: "Các thùng rác ở Đức",
        words: [
          { de: "Papiertonne (blau)", vi: "thùng giấy (xanh dương)" },
          { de: "Gelber Sack / Gelbe Tonne", vi: "túi/thùng vàng (nhựa & kim loại)" },
          { de: "Biotonne (braun)", vi: "thùng rác hữu cơ (nâu)" },
          { de: "Restmüll (schwarz)", vi: "rác thải còn lại (đen)" },
          { de: "Glascontainer", vi: "thùng thủy tinh", article: "der" },
          { de: "Sperrmüll", vi: "rác cồng kềnh", article: "der" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Man sollte / Man muss / Man darf nicht",
        titleVi: "Người ta nên / phải / không được",
        rule: "'Man sollte' + Infinitiv = Empfehlung. 'Man muss' + Infinitiv = Pflicht. 'Man darf nicht' + Infinitiv = Verbot.",
        ruleVi: "'Man sollte' + động từ nguyên mẫu = lời khuyên (nên). 'Man muss' + động từ nguyên mẫu = bắt buộc (phải). 'Man darf nicht' + động từ nguyên mẫu = cấm (không được). 'Man' ở đây là đại từ bất định, nghĩa là 'người ta'.",
        examples: [
          { de: "Man sollte Wasser sparen.", vi: "Người ta nên tiết kiệm nước." },
          { de: "Man muss den Müll trennen.", vi: "Người ta phải phân loại rác." },
          { de: "Man darf nicht Müll auf die Straße werfen.", vi: "Người ta không được vứt rác ra đường." },
          { de: "Man sollte öfter mit dem Fahrrad fahren.", vi: "Người ta nên đi xe đạp thường xuyên hơn." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Mülltrennung erklärt",
        titleVi: "Giải thích phân loại rác",
        lines: [
          { speaker: "Trang", de: "Ich verstehe die Mülltrennung nicht. In Vietnam trennen wir den Müll nicht so.", vi: "Tôi không hiểu việc phân loại rác. Ở Việt Nam chúng tôi không phân loại rác như vậy." },
          { speaker: "Maria", de: "Kein Problem, ich erkläre es dir. Papier kommt in die blaue Tonne.", vi: "Không vấn đề, tôi sẽ giải thích cho bạn. Giấy bỏ vào thùng xanh dương." },
          { speaker: "Trang", de: "Und wohin kommt die Plastikverpackung?", vi: "Còn bao bì nhựa bỏ đi đâu?" },
          { speaker: "Maria", de: "Die kommt in den Gelben Sack. Und Essensreste kommen in die Biotonne.", vi: "Bỏ vào túi vàng. Còn thức ăn thừa bỏ vào thùng rác hữu cơ." },
          { speaker: "Trang", de: "Und die Glasflaschen?", vi: "Còn chai thủy tinh?" },
          { speaker: "Maria", de: "Die bringst du zum Glascontainer. Aber Pfandflaschen bringst du in den Supermarkt zurück!", vi: "Bạn mang đến thùng thủy tinh. Nhưng chai có đặt cọc thì mang trả lại siêu thị!" }
        ]
      },
      {
        type: "practice",
        titleDe: "Umwelttipps geben",
        titleVi: "Đưa ra lời khuyên về môi trường",
        instruction: "Schreibe fünf Tipps für den Umweltschutz. Benutze 'Man sollte...', 'Man muss...' und 'Man darf nicht...'. Vergleiche auch die Situation in Deutschland und Vietnam.",
        instructionVi: "Viết năm lời khuyên về bảo vệ môi trường. Sử dụng 'Man sollte...', 'Man muss...' và 'Man darf nicht...'. Cũng so sánh tình hình ở Đức và Việt Nam."
      }
    ]
  },

  // --- Chapter 4, Lesson 4: Komparativ & Superlativ ---
  {
    id: "a2-ch4-l4",
    chapterId: 4,
    lessonNumber: 4,
    title: "Komparativ & Superlativ",
    titleVi: "So sánh hơn & So sánh nhất",
    type: "Integration",
    objectives: [
      "Hiểu và sử dụng dạng so sánh hơn (Komparativ)",
      "Hiểu và sử dụng dạng so sánh nhất (Superlativ)",
      "Áp dụng so sánh trong ngữ cảnh thiên nhiên và môi trường"
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Komparativ: Vergleiche machen",
        titleVi: "So sánh hơn: Thực hiện phép so sánh",
        rule: "Adjektiv + -er + als. Beispiel: groß → größer als. Einsilbige Adjektive mit a/o/u bekommen oft einen Umlaut: alt → älter, groß → größer, jung → jünger. Unregelmäßig: gut → besser, viel → mehr, gern → lieber.",
        ruleVi: "Tính từ + -er + als (hơn). Ví dụ: groß (lớn) → größer als (lớn hơn). Tính từ một âm tiết có a/o/u thường thêm Umlaut: alt (già) → älter (già hơn), groß (lớn) → größer (lớn hơn), jung (trẻ) → jünger (trẻ hơn). Bất quy tắc: gut (tốt) → besser (tốt hơn), viel (nhiều) → mehr (nhiều hơn), gern (thích) → lieber (thích hơn).",
        examples: [
          { de: "Der Sommer ist wärmer als der Winter.", vi: "Mùa hè ấm hơn mùa đông." },
          { de: "Ein Elefant ist größer als ein Hund.", vi: "Một con voi lớn hơn một con chó." },
          { de: "Ich finde Katzen schöner als Hunde.", vi: "Tôi thấy mèo đẹp hơn chó." },
          { de: "Radfahren ist besser für die Umwelt als Autofahren.", vi: "Đi xe đạp tốt hơn cho môi trường hơn đi ô tô." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Superlativ: Das Beste!",
        titleVi: "So sánh nhất: Tốt nhất!",
        rule: "am + Adjektiv + -sten. Beispiel: am größten, am schönsten. Vor Nomen: der/die/das + Adjektiv + -ste. Unregelmäßig: am besten, am meisten, am liebsten.",
        ruleVi: "am + tính từ + -sten. Ví dụ: am größten (lớn nhất), am schönsten (đẹp nhất). Trước danh từ: der/die/das + tính từ + -ste. Bất quy tắc: am besten (tốt nhất), am meisten (nhiều nhất), am liebsten (thích nhất).",
        examples: [
          { de: "Der Sommer ist die wärmste Jahreszeit.", vi: "Mùa hè là mùa ấm nhất." },
          { de: "Der Mount Everest ist der höchste Berg der Welt.", vi: "Núi Everest là ngọn núi cao nhất thế giới." },
          { de: "Hunde sind die beliebtesten Haustiere.", vi: "Chó là thú cưng được yêu thích nhất." },
          { de: "Am liebsten mag ich den Frühling.", vi: "Tôi thích nhất là mùa xuân." }
        ]
      },
      {
        type: "explanation",
        titleDe: "Vergleiche mit 'so ... wie' und 'genauso ... wie'",
        titleVi: "So sánh bằng với 'so ... wie' và 'genauso ... wie'",
        textDe: "Wenn zwei Dinge gleich sind, benutzen wir 'so ... wie' oder 'genauso ... wie'. Beispiel: Der Frühling ist genauso schön wie der Herbst. Vietnam ist fast so groß wie Deutschland.",
        textVi: "Khi hai thứ bằng nhau, chúng ta dùng 'so ... wie' hoặc 'genauso ... wie' (cũng ... như). Ví dụ: Mùa xuân cũng đẹp như mùa thu. Việt Nam gần bằng Đức (về diện tích)."
      },
      {
        type: "dialogue",
        titleDe: "Natur in Deutschland und Vietnam vergleichen",
        titleVi: "So sánh thiên nhiên ở Đức và Việt Nam",
        lines: [
          { speaker: "Duc", de: "Was gefällt dir am besten an der deutschen Natur?", vi: "Bạn thích nhất điều gì ở thiên nhiên Đức?" },
          { speaker: "Sabine", de: "Am schönsten finde ich den Herbst, wenn die Blätter bunt werden.", vi: "Tôi thấy đẹp nhất là mùa thu, khi lá cây đổi màu." },
          { speaker: "Duc", de: "In Vietnam ist es im Sommer heißer als hier. Manchmal über 40 Grad!", vi: "Ở Việt Nam mùa hè nóng hơn ở đây. Đôi khi trên 40 độ!" },
          { speaker: "Sabine", de: "Das ist viel heißer als in Deutschland! Hier wird es selten wärmer als 35 Grad.", vi: "Nóng hơn nhiều so với Đức! Ở đây hiếm khi ấm hơn 35 độ." },
          { speaker: "Duc", de: "Aber die deutschen Wälder sind größer und grüner als ich gedacht habe.", vi: "Nhưng rừng ở Đức lớn hơn và xanh hơn so với tôi nghĩ." },
          { speaker: "Sabine", de: "Ja, der Schwarzwald ist einer der schönsten Wälder in Deutschland.", vi: "Đúng, Rừng Đen là một trong những khu rừng đẹp nhất ở Đức." }
        ]
      },
      {
        type: "practice",
        titleDe: "Vergleiche anstellen",
        titleVi: "Thực hiện các phép so sánh",
        instruction: "Vergleiche Deutschland und Vietnam: Wetter, Natur, Tiere, Umweltschutz. Benutze Komparativ (wärmer als), Superlativ (am schönsten) und Gleichheit (genauso ... wie). Schreibe mindestens sechs Sätze.",
        instructionVi: "So sánh Đức và Việt Nam: thời tiết, thiên nhiên, động vật, bảo vệ môi trường. Sử dụng so sánh hơn (wärmer als), so sánh nhất (am schönsten) và so sánh bằng (genauso ... wie). Viết ít nhất sáu câu."
      }
    ]
  },

  // ============================================================
  // CHAPTER 5: Kultur & Feste
  // ============================================================

  // --- Chapter 5, Lesson 1: Deutsche Feiertage ---
  {
    id: "a2-ch5-l1",
    chapterId: 5,
    lessonNumber: 1,
    title: "Deutsche Feiertage",
    titleVi: "Các ngày lễ ở Đức",
    type: "Einführung",
    objectives: [
      "Biết các ngày lễ quan trọng ở Đức",
      "Nắm từ vựng về lễ hội và ngày lễ",
      "So sánh văn hóa lễ hội Đức và Việt Nam"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Feiertage in Deutschland",
        titleVi: "Ngày lễ ở Đức",
        textDe: "Deutschland hat viele Feiertage. An Feiertagen arbeiten die meisten Menschen nicht und die Geschäfte sind oft geschlossen. Die wichtigsten Feiertage sind: Weihnachten (25. und 26. Dezember), Ostern (im Frühling), Silvester und Neujahr, Tag der Deutschen Einheit (3. Oktober) und Pfingsten. Jedes Bundesland kann auch eigene Feiertage haben, zum Beispiel den Reformationstag oder Allerheiligen.",
        textVi: "Nước Đức có nhiều ngày lễ. Vào ngày lễ, hầu hết mọi người không làm việc và các cửa hàng thường đóng cửa. Các ngày lễ quan trọng nhất là: Giáng sinh (25 và 26 tháng 12), Lễ Phục sinh (vào mùa xuân), Giao thừa và Năm mới, Ngày Thống nhất nước Đức (3 tháng 10) và Lễ Hiện xuống. Mỗi bang cũng có thể có ngày lễ riêng, ví dụ ngày Cải cách hay Lễ Các Thánh."
      },
      {
        type: "vocabulary",
        titleDe: "Wichtige Feiertage",
        titleVi: "Các ngày lễ quan trọng",
        words: [
          { de: "Weihnachten", vi: "Giáng sinh", article: "das" },
          { de: "Ostern", vi: "Lễ Phục sinh", article: "das" },
          { de: "Silvester", vi: "Giao thừa", article: "das" },
          { de: "Neujahr", vi: "Năm mới", article: "das" },
          { de: "Karneval / Fasching", vi: "Lễ hội hóa trang" },
          { de: "Tag der Deutschen Einheit", vi: "Ngày Thống nhất nước Đức" },
          { de: "Pfingsten", vi: "Lễ Hiện xuống", article: "das" },
          { de: "Nikolaustag", vi: "Ngày Thánh Nicholas (6.12.)" },
          { de: "Heiligabend", vi: "Đêm Giáng sinh (24.12.)", article: "der" },
          { de: "Feiertag", vi: "ngày lễ", article: "der" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Wörter rund um Feste",
        titleVi: "Từ vựng liên quan đến lễ hội",
        words: [
          { de: "feiern", vi: "ăn mừng, kỷ niệm" },
          { de: "Geschenk", vi: "quà tặng", article: "das" },
          { de: "Weihnachtsbaum", vi: "cây thông Giáng sinh", article: "der" },
          { de: "Osterhase", vi: "thỏ Phục sinh", article: "der" },
          { de: "Osterei", vi: "trứng Phục sinh", article: "das" },
          { de: "Feuerwerk", vi: "pháo hoa", article: "das" },
          { de: "Kerze", vi: "nến", article: "die" },
          { de: "Dekoration", vi: "trang trí", article: "die" },
          { de: "Gottesdienst", vi: "buổi lễ nhà thờ", article: "der" },
          { de: "Tradition", vi: "truyền thống", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Weihnachten erklären",
        titleVi: "Giải thích Giáng sinh",
        lines: [
          { speaker: "Mai", de: "Was macht ihr an Weihnachten?", vi: "Các bạn làm gì vào Giáng sinh?" },
          { speaker: "Jens", de: "Am Heiligabend essen wir zusammen mit der Familie. Wir haben einen Weihnachtsbaum und tauschen Geschenke aus.", vi: "Vào đêm Giáng sinh chúng tôi ăn cùng gia đình. Chúng tôi có cây thông Giáng sinh và trao đổi quà tặng." },
          { speaker: "Mai", de: "Das klingt schön! In Vietnam feiern wir Tết — das vietnamesische Neujahrsfest.", vi: "Nghe hay quá! Ở Việt Nam chúng tôi ăn Tết — lễ Năm mới của Việt Nam." },
          { speaker: "Jens", de: "Wann ist Tết?", vi: "Tết vào khi nào?" },
          { speaker: "Mai", de: "Tết ist im Januar oder Februar, nach dem Mondkalender. Wir besuchen die Familie, essen besonderes Essen und die Kinder bekommen Geld in roten Umschlägen.", vi: "Tết vào tháng 1 hoặc 2, theo lịch âm. Chúng tôi thăm gia đình, ăn món ăn đặc biệt và trẻ em được nhận tiền trong phong bao đỏ." },
          { speaker: "Jens", de: "Das ist ja ähnlich wie bei uns zu Weihnachten!", vi: "Giống như ở chúng tôi vào Giáng sinh nhỉ!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Temporale Präpositionen: an, in, zu",
        titleVi: "Giới từ chỉ thời gian: an, in, zu",
        rule: "An + Dativ: an Weihnachten, am Montag, am Wochenende. In + Dativ: im Sommer, im Januar, in der Nacht. Zu + Dativ: zu Ostern, zu Weihnachten (alternativ).",
        ruleVi: "An + Dativ: vào dịp Giáng sinh, vào thứ Hai, vào cuối tuần. In + Dativ: vào mùa hè, vào tháng Giêng, vào ban đêm. Zu + Dativ: vào dịp Phục sinh, vào Giáng sinh (dùng thay thế cho 'an'). Lưu ý: 'an dem' → 'am', 'in dem' → 'im'.",
        examples: [
          { de: "An Weihnachten besuche ich meine Familie.", vi: "Vào Giáng sinh tôi thăm gia đình." },
          { de: "Im Winter ist es kalt.", vi: "Vào mùa đông trời lạnh." },
          { de: "Am Silvesterabend gibt es Feuerwerk.", vi: "Vào đêm Giao thừa có pháo hoa." },
          { de: "Zu Ostern suchen die Kinder Ostereier.", vi: "Vào Lễ Phục sinh trẻ em tìm trứng Phục sinh." }
        ]
      },
      {
        type: "practice",
        titleDe: "Feiertage vergleichen",
        titleVi: "So sánh các ngày lễ",
        instruction: "Vergleiche einen deutschen Feiertag mit einem vietnamesischen Fest. Was ist ähnlich? Was ist anders? Benutze Sätze wie: An Weihnachten / Zu Tết macht man... In Deutschland / In Vietnam feiert man...",
        instructionVi: "So sánh một ngày lễ ở Đức với một ngày lễ ở Việt Nam. Điểm nào giống nhau? Điểm nào khác? Dùng câu như: Vào Giáng sinh / Vào Tết người ta... Ở Đức / Ở Việt Nam người ta ăn mừng..."
      }
    ]
  },

  // --- Chapter 5, Lesson 2: Traditionen & Bräuche ---
  {
    id: "a2-ch5-l2",
    chapterId: 5,
    lessonNumber: 2,
    title: "Traditionen & Bräuche",
    titleVi: "Truyền thống & Phong tục",
    type: "Grammatik",
    objectives: [
      "Nắm từ vựng về truyền thống và phong tục Đức",
      "Sử dụng thì Perfekt để kể về trải nghiệm",
      "Hiểu các phong tục phổ biến ở Đức"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Deutsche Traditionen",
        titleVi: "Truyền thống Đức",
        textDe: "Deutschland hat viele Traditionen und Bräuche. Im Advent (die vier Wochen vor Weihnachten) gibt es Adventskränze mit vier Kerzen und Adventskalender. Auf den Weihnachtsmärkten kann man Glühwein trinken und Lebkuchen essen. An Karneval verkleiden sich die Menschen und feiern auf der Straße. Am 1. Mai stellen junge Männer in manchen Regionen einen Maibaum vor das Haus ihrer Freundin. Das Oktoberfest in München ist das größte Volksfest der Welt.",
        textVi: "Nước Đức có nhiều truyền thống và phong tục. Trong mùa Advent (bốn tuần trước Giáng sinh) có vòng hoa Advent với bốn ngọn nến và lịch Advent. Tại các chợ Giáng sinh có thể uống rượu nóng và ăn bánh gừng. Vào lễ hội hóa trang, mọi người hóa trang và ăn mừng ngoài đường. Ngày 1 tháng 5, ở một số vùng, chàng trai trẻ dựng cây tháng Năm trước nhà bạn gái. Lễ hội bia Oktoberfest ở Munich là lễ hội dân gian lớn nhất thế giới."
      },
      {
        type: "vocabulary",
        titleDe: "Traditionen & Bräuche",
        titleVi: "Truyền thống & Phong tục",
        words: [
          { de: "Brauch", vi: "phong tục", article: "der" },
          { de: "Tradition", vi: "truyền thống", article: "die" },
          { de: "Adventskranz", vi: "vòng hoa Advent", article: "der" },
          { de: "Adventskalender", vi: "lịch Advent", article: "der" },
          { de: "Weihnachtsmarkt", vi: "chợ Giáng sinh", article: "der" },
          { de: "Glühwein", vi: "rượu nóng", article: "der" },
          { de: "Lebkuchen", vi: "bánh gừng", article: "der" },
          { de: "Kostüm", vi: "trang phục hóa trang", article: "das" },
          { de: "Volksfest", vi: "lễ hội dân gian", article: "das" },
          { de: "Oktoberfest", vi: "Lễ hội bia tháng Mười", article: "das" },
          { de: "Maibaum", vi: "cây tháng Năm", article: "der" },
          { de: "sich verkleiden", vi: "hóa trang" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Perfekt mit 'haben' und 'sein' (Wiederholung & Erweiterung)",
        titleVi: "Thì Perfekt với 'haben' và 'sein' (Ôn tập & Mở rộng)",
        rule: "Perfekt = haben/sein + Partizip II. Mit 'sein': Verben der Bewegung (gehen, fahren, fliegen) und Zustandsveränderung (werden, sterben, aufwachen). Mit 'haben': die meisten anderen Verben. Trennbare Verben: auf|machen → aufgemacht. Verben auf -ieren: telefonieren → telefoniert (ohne ge-).",
        ruleVi: "Perfekt = haben/sein + Partizip II (quá khứ phân từ). Dùng 'sein': động từ chỉ chuyển động (gehen, fahren, fliegen) và thay đổi trạng thái (werden, sterben, aufwachen). Dùng 'haben': hầu hết các động từ khác. Động từ tách: auf|machen → aufgemacht. Động từ đuôi -ieren: telefonieren → telefoniert (không thêm ge-).",
        examples: [
          { de: "Ich habe den Weihnachtsmarkt besucht.", vi: "Tôi đã đi chợ Giáng sinh." },
          { de: "Wir sind zum Oktoberfest gefahren.", vi: "Chúng tôi đã đi đến Lễ hội bia." },
          { de: "Die Kinder haben sich als Piraten verkleidet.", vi: "Bọn trẻ đã hóa trang thành cướp biển." },
          { de: "Er hat Glühwein getrunken und Lebkuchen gegessen.", vi: "Anh ấy đã uống rượu nóng và ăn bánh gừng." },
          { de: "Wir haben den Adventskranz dekoriert.", vi: "Chúng tôi đã trang trí vòng hoa Advent." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Auf dem Weihnachtsmarkt",
        titleVi: "Tại chợ Giáng sinh",
        lines: [
          { speaker: "Lan", de: "Ich bin zum ersten Mal auf einem Weihnachtsmarkt. Es ist so schön!", vi: "Tôi đến chợ Giáng sinh lần đầu tiên. Đẹp quá!" },
          { speaker: "Peter", de: "Ja, ich komme jedes Jahr hierher. Hast du schon Glühwein probiert?", vi: "Ừ, tôi đến đây mỗi năm. Bạn đã thử rượu nóng chưa?" },
          { speaker: "Lan", de: "Nein, noch nicht. Was ist das genau?", vi: "Chưa. Đó chính xác là gì?" },
          { speaker: "Peter", de: "Das ist heißer Rotwein mit Gewürzen. Er schmeckt süß und wärmt von innen.", vi: "Đó là rượu vang đỏ nóng với gia vị. Nó có vị ngọt và sưởi ấm từ bên trong." },
          { speaker: "Lan", de: "Lecker! Und was sind das für Kekse dort?", vi: "Ngon! Còn bánh quy kia là gì?" },
          { speaker: "Peter", de: "Das sind Lebkuchen — typisch für die Weihnachtszeit. Hast du in Vietnam auch solche Traditionen?", vi: "Đó là bánh gừng — đặc trưng cho mùa Giáng sinh. Ở Việt Nam bạn cũng có truyền thống như vậy không?" },
          { speaker: "Lan", de: "Ja! Zu Tết essen wir Bánh chưng — das ist ein besonderer Reiskuchen.", vi: "Có! Vào Tết chúng tôi ăn bánh chưng — đó là một loại bánh gạo đặc biệt." }
        ]
      },
      {
        type: "practice",
        titleDe: "Erzähle von einem Fest",
        titleVi: "Hãy kể về một lễ hội",
        instruction: "Erzähle im Perfekt von einem Fest, das du besucht hast (in Deutschland oder in Vietnam). Was hast du gemacht? Was hast du gegessen und getrunken? Wen hast du getroffen? Schreibe mindestens fünf Sätze im Perfekt.",
        instructionVi: "Kể lại bằng thì Perfekt về một lễ hội mà bạn đã tham dự (ở Đức hoặc ở Việt Nam). Bạn đã làm gì? Bạn đã ăn và uống gì? Bạn đã gặp ai? Viết ít nhất năm câu bằng thì Perfekt."
      }
    ]
  },

  // --- Chapter 5, Lesson 3: Musik, Film & Kunst ---
  {
    id: "a2-ch5-l3",
    chapterId: 5,
    lessonNumber: 3,
    title: "Musik, Film & Kunst",
    titleVi: "Âm nhạc, Phim ảnh & Nghệ thuật",
    type: "Fertigkeit",
    objectives: [
      "Nắm từ vựng về âm nhạc, phim ảnh và nghệ thuật",
      "Diễn đạt sở thích văn hóa và ý kiến",
      "Sử dụng câu phụ với 'dass' và 'weil'"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Kultur in Deutschland",
        titleVi: "Văn hóa ở Đức",
        textDe: "Deutschland hat eine reiche Kulturgeschichte. In der Musik kennt man Beethoven, Bach und Mozart (Österreich). Heute hören viele junge Deutsche Pop, Hip-Hop und elektronische Musik. Im Kino sind deutsche Filme wie 'Das Leben der Anderen' oder 'Good Bye, Lenin!' international bekannt. Deutschland hat auch viele berühmte Museen, Theater und Opernhäuser. In jeder Stadt gibt es kulturelle Angebote: Konzerte, Ausstellungen, Lesungen und Festivals.",
        textVi: "Nước Đức có lịch sử văn hóa phong phú. Trong âm nhạc, nổi tiếng có Beethoven, Bach và Mozart (Áo). Ngày nay nhiều thanh niên Đức nghe nhạc Pop, Hip-Hop và nhạc điện tử. Trong điện ảnh, phim Đức như 'Das Leben der Anderen' hay 'Good Bye, Lenin!' nổi tiếng quốc tế. Đức cũng có nhiều bảo tàng, nhà hát và nhà hát opera nổi tiếng. Ở mỗi thành phố đều có các hoạt động văn hóa: hòa nhạc, triển lãm, buổi đọc sách và lễ hội."
      },
      {
        type: "vocabulary",
        titleDe: "Musik, Film & Kunst",
        titleVi: "Âm nhạc, Phim ảnh & Nghệ thuật",
        words: [
          { de: "Konzert", vi: "buổi hòa nhạc", article: "das" },
          { de: "Lied", vi: "bài hát", article: "das" },
          { de: "Sänger/in", vi: "ca sĩ", article: "der/die" },
          { de: "Band", vi: "ban nhạc", article: "die" },
          { de: "Film", vi: "phim", article: "der" },
          { de: "Kino", vi: "rạp phim", article: "das" },
          { de: "Schauspieler/in", vi: "diễn viên", article: "der/die" },
          { de: "Regisseur/in", vi: "đạo diễn", article: "der/die" },
          { de: "Museum", vi: "bảo tàng", article: "das" },
          { de: "Ausstellung", vi: "triển lãm", article: "die" },
          { de: "Gemälde", vi: "bức tranh", article: "das" },
          { de: "Theater", vi: "nhà hát", article: "das" },
          { de: "Oper", vi: "nhà hát opera / vở opera", article: "die" },
          { de: "Bühne", vi: "sân khấu", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nebensätze mit 'dass' und 'weil'",
        titleVi: "Câu phụ với 'dass' (rằng) và 'weil' (vì)",
        rule: "'Dass' leitet einen Nebensatz ein (Verb am Ende): Ich finde, dass deutsche Filme interessant sind. 'Weil' gibt einen Grund an (Verb am Ende): Ich mag diesen Film, weil er spannend ist.",
        ruleVi: "'Dass' (rằng) dẫn nhập một câu phụ, động từ đứng cuối: Ich finde, dass... (Tôi thấy rằng...). 'Weil' (vì) nêu lý do, động từ cũng đứng cuối: Ich mag..., weil... (Tôi thích..., vì...). Đây là hai liên từ phụ thuộc (Subjunktionen) quan trọng nhất ở A2.",
        examples: [
          { de: "Ich finde, dass Beethoven der beste Komponist ist.", vi: "Tôi thấy rằng Beethoven là nhà soạn nhạc giỏi nhất." },
          { de: "Ich glaube, dass der Film sehr gut ist.", vi: "Tôi tin rằng bộ phim rất hay." },
          { de: "Ich mag Popmusik, weil sie fröhlich ist.", vi: "Tôi thích nhạc pop vì nó vui vẻ." },
          { de: "Er geht oft ins Museum, weil er Kunst liebt.", vi: "Anh ấy thường đi bảo tàng vì anh ấy yêu nghệ thuật." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Was hörst du gern?",
        titleVi: "Bạn thích nghe gì?",
        lines: [
          { speaker: "Minh", de: "Welche Musik hörst du am liebsten?", vi: "Bạn thích nghe nhạc gì nhất?" },
          { speaker: "Lisa", de: "Ich höre am liebsten Pop und Indie-Musik. Und du?", vi: "Tôi thích nghe nhạc Pop và Indie nhất. Còn bạn?" },
          { speaker: "Minh", de: "Ich höre gern V-Pop, weil ich die vietnamesischen Texte mag.", vi: "Tôi thích nghe V-Pop vì tôi thích lời bài hát tiếng Việt." },
          { speaker: "Lisa", de: "Interessant! Ich finde, dass Musik eine gute Möglichkeit ist, eine Sprache zu lernen.", vi: "Thú vị! Tôi thấy rằng âm nhạc là một cách tốt để học ngôn ngữ." },
          { speaker: "Minh", de: "Stimmt! Ich höre jetzt auch deutsche Lieder, weil ich mein Deutsch verbessern möchte.", vi: "Đúng! Bây giờ tôi cũng nghe bài hát tiếng Đức vì tôi muốn cải thiện tiếng Đức." },
          { speaker: "Lisa", de: "Ich empfehle dir Mark Forster und AnnenMayKantereit. Die Texte sind nicht so schwer.", vi: "Tôi giới thiệu cho bạn Mark Forster và AnnenMayKantereit. Lời bài hát không quá khó." }
        ]
      },
      {
        type: "practice",
        titleDe: "Deine Meinung über Kultur",
        titleVi: "Ý kiến của bạn về văn hóa",
        instruction: "Schreibe über deine kulturellen Interessen. Was für Musik hörst du gern und warum? Gehst du gern ins Kino oder ins Museum? Benutze Nebensätze mit 'dass' und 'weil'. Beispiel: Ich finde, dass... / Ich gehe gern..., weil...",
        instructionVi: "Viết về sở thích văn hóa của bạn. Bạn thích nghe nhạc gì và tại sao? Bạn có thích đi xem phim hoặc đi bảo tàng không? Sử dụng câu phụ với 'dass' và 'weil'. Ví dụ: Ich finde, dass... / Ich gehe gern..., weil..."
      }
    ]
  },

  // --- Chapter 5, Lesson 4: Einladungen & Verabredungen ---
  {
    id: "a2-ch5-l4",
    chapterId: 5,
    lessonNumber: 4,
    title: "Einladungen & Verabredungen",
    titleVi: "Lời mời & Hẹn gặp",
    type: "Integration",
    objectives: [
      "Viết và trả lời lời mời bằng tiếng Đức",
      "Hẹn gặp và thỏa thuận thời gian, địa điểm",
      "Sử dụng Konjunktiv II với 'würde' để lịch sự"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Einladungen in Deutschland",
        titleVi: "Lời mời ở Đức",
        textDe: "In Deutschland ist es üblich, Freunde zu sich nach Hause einzuladen. Wenn man eingeladen ist, bringt man oft ein kleines Geschenk mit: Blumen, Wein oder Schokolade. Es ist wichtig, pünktlich zu sein — nicht zu früh und nicht zu spät. Bei formellen Einladungen antwortet man schriftlich (per E-Mail oder Karte). Bei informellen Treffen reicht eine Nachricht per Handy.",
        textVi: "Ở Đức, thường hay mời bạn bè đến nhà. Khi được mời, thường mang theo một món quà nhỏ: hoa, rượu vang hoặc sô cô la. Quan trọng là phải đúng giờ — không quá sớm và không quá muộn. Với lời mời trang trọng, người ta trả lời bằng văn bản (qua email hoặc thiệp). Với buổi gặp mặt thân mật, một tin nhắn qua điện thoại là đủ."
      },
      {
        type: "vocabulary",
        titleDe: "Einladung & Verabredung",
        titleVi: "Lời mời & Hẹn gặp",
        words: [
          { de: "Einladung", vi: "lời mời", article: "die" },
          { de: "einladen", vi: "mời" },
          { de: "Verabredung", vi: "cuộc hẹn", article: "die" },
          { de: "sich verabreden", vi: "hẹn gặp" },
          { de: "zusagen", vi: "nhận lời" },
          { de: "absagen", vi: "từ chối" },
          { de: "verschieben", vi: "hoãn lại" },
          { de: "pünktlich", vi: "đúng giờ" },
          { de: "Gastgeber/in", vi: "chủ nhà", article: "der/die" },
          { de: "Gast", vi: "khách", article: "der" },
          { de: "Mitbringsel", vi: "quà mang theo (khi đến thăm)", article: "das" },
          { de: "Bescheid geben", vi: "thông báo" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Konjunktiv II mit 'würde' (höfliche Bitten)",
        titleVi: "Konjunktiv II với 'würde' (yêu cầu lịch sự)",
        rule: "Ich würde + Infinitiv = höfliche Form. Würdest du...? = höfliche Frage. Auch: könnte (könnte ich...?), hätte (hätte gern...), wäre (wäre schön).",
        ruleVi: "Ich würde + động từ nguyên mẫu = dạng lịch sự. Würdest du...? = câu hỏi lịch sự. Ngoài ra: könnte (có thể), hätte (muốn có), wäre (sẽ là). Dạng Konjunktiv II giúp bạn nói lịch sự hơn — rất quan trọng trong văn hóa Đức!",
        examples: [
          { de: "Würdest du am Samstag zu meiner Party kommen?", vi: "Bạn có đến bữa tiệc của tôi vào thứ Bảy không?" },
          { de: "Ich würde gern ins Kino gehen.", vi: "Tôi muốn đi xem phim." },
          { de: "Könnten wir uns um 18 Uhr treffen?", vi: "Chúng ta có thể gặp nhau lúc 18 giờ không?" },
          { de: "Es wäre schön, wenn du kommen könntest.", vi: "Sẽ thật vui nếu bạn có thể đến." },
          { de: "Hätten Sie am Freitag Zeit?", vi: "Ông/Bà có thời gian vào thứ Sáu không?" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Eine Einladung zum Abendessen",
        titleVi: "Lời mời ăn tối",
        lines: [
          { speaker: "Klaus", de: "Hallo Linh! Ich möchte dich am Samstag zum Abendessen einladen. Hättest du Lust?", vi: "Chào Linh! Tôi muốn mời bạn ăn tối vào thứ Bảy. Bạn có muốn không?" },
          { speaker: "Linh", de: "Oh, das ist nett! Ich würde sehr gern kommen. Um wie viel Uhr?", vi: "Ồ, tốt quá! Tôi rất muốn đến. Mấy giờ?" },
          { speaker: "Klaus", de: "Um 19 Uhr. Ich koche etwas Deutsches. Isst du alles?", vi: "Lúc 19 giờ. Tôi sẽ nấu món Đức. Bạn ăn mọi thứ không?" },
          { speaker: "Linh", de: "Ja, ich esse alles. Soll ich etwas mitbringen?", vi: "Có, tôi ăn mọi thứ. Tôi có nên mang theo gì không?" },
          { speaker: "Klaus", de: "Wenn du möchtest, könntest du einen Nachtisch mitbringen.", vi: "Nếu bạn muốn, bạn có thể mang theo món tráng miệng." },
          { speaker: "Linh", de: "Gern! Ich bringe einen vietnamesischen Nachtisch mit. Bis Samstag!", vi: "Vui lòng! Tôi sẽ mang theo món tráng miệng Việt Nam. Hẹn thứ Bảy!" }
        ]
      },
      {
        type: "explanation",
        titleDe: "Kulturhinweis: Gastgeschenke",
        titleVi: "Ghi chú văn hóa: Quà khi đến thăm",
        textDe: "In Deutschland bringt man als Gast oft ein kleines Geschenk mit: Blumen (aber keine weißen Lilien!), eine Flasche Wein oder Pralinen. In Vietnam bringt man oft Obst oder Süßigkeiten mit. In beiden Kulturen zeigt ein Mitbringsel Respekt und Dankbarkeit.",
        textVi: "Ở Đức, khi đến thăm thường mang theo quà nhỏ: hoa (nhưng không phải hoa huệ trắng!), một chai rượu vang hoặc sô cô la. Ở Việt Nam, thường mang theo trái cây hoặc bánh kẹo. Ở cả hai nền văn hóa, quà mang theo thể hiện sự tôn trọng và biết ơn."
      },
      {
        type: "practice",
        titleDe: "Eine Einladung schreiben",
        titleVi: "Viết một lời mời",
        instruction: "Schreibe eine Einladung: Lade einen Freund/eine Freundin zu einem Fest oder Abendessen ein. Gib Datum, Uhrzeit und Ort an. Schreibe dann eine Antwort: einmal eine Zusage und einmal eine höfliche Absage. Benutze den Konjunktiv II.",
        instructionVi: "Viết một lời mời: Mời một người bạn đến dự tiệc hoặc ăn tối. Ghi ngày, giờ và địa điểm. Sau đó viết phản hồi: một lần nhận lời và một lần từ chối lịch sự. Sử dụng Konjunktiv II."
      }
    ]
  },

  // ============================================================
  // CHAPTER 6: Wohnen & Haushalt
  // ============================================================

  // --- Chapter 6, Lesson 1: Wohnungssuche & Anzeigen ---
  {
    id: "a2-ch6-l1",
    chapterId: 6,
    lessonNumber: 1,
    title: "Wohnungssuche & Anzeigen",
    titleVi: "Tìm nhà & Tin đăng",
    type: "Einführung",
    objectives: [
      "Hiểu các tin đăng cho thuê nhà bằng tiếng Đức",
      "Nắm từ viết tắt phổ biến trong tin cho thuê",
      "Viết email hỏi về căn hộ"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Wohnungssuche in Deutschland",
        titleVi: "Tìm nhà ở Đức",
        textDe: "Eine Wohnung in Deutschland zu finden, ist oft schwierig, besonders in großen Städten wie München, Berlin oder Hamburg. Man sucht auf Internetportalen (z.B. ImmobilienScout24, WG-Gesucht), in Zeitungen oder über Freunde. Die Mietpreise sind sehr unterschiedlich: In München und Frankfurt sind sie am höchsten. Man muss oft eine Kaution bezahlen (meistens drei Monatsmieten). Wichtig: In Deutschland mietet man oft eine Wohnung ohne Küche — die muss man selbst einbauen!",
        textVi: "Tìm nhà ở Đức thường rất khó, đặc biệt ở các thành phố lớn như Munich, Berlin hay Hamburg. Người ta tìm trên các trang web (ví dụ ImmobilienScout24, WG-Gesucht), trên báo hoặc qua bạn bè. Giá thuê rất khác nhau: ở Munich và Frankfurt cao nhất. Thường phải đặt cọc (thường là ba tháng tiền thuê). Lưu ý: Ở Đức, thường thuê nhà không có bếp — phải tự lắp đặt!"
      },
      {
        type: "vocabulary",
        titleDe: "Wohnungsanzeige",
        titleVi: "Tin đăng cho thuê nhà",
        words: [
          { de: "Wohnung", vi: "căn hộ", article: "die" },
          { de: "Miete", vi: "tiền thuê nhà", article: "die" },
          { de: "Kaltmiete", vi: "tiền thuê chưa gồm phụ phí", article: "die" },
          { de: "Warmmiete", vi: "tiền thuê gồm phụ phí", article: "die" },
          { de: "Nebenkosten (NK)", vi: "phụ phí (điện, nước, sưởi)", article: "die" },
          { de: "Kaution", vi: "tiền đặt cọc", article: "die" },
          { de: "Quadratmeter (qm / m²)", vi: "mét vuông" },
          { de: "Zimmer (Zi.)", vi: "phòng" },
          { de: "Einbauküche (EBK)", vi: "bếp lắp sẵn", article: "die" },
          { de: "Balkon (Blk.)", vi: "ban công", article: "der" },
          { de: "Erdgeschoss (EG)", vi: "tầng trệt", article: "das" },
          { de: "Obergeschoss (OG)", vi: "tầng trên", article: "das" },
          { de: "Vermieter/in", vi: "chủ nhà (cho thuê)", article: "der/die" },
          { de: "Mieter/in", vi: "người thuê nhà", article: "der/die" }
        ]
      },
      {
        type: "explanation",
        titleDe: "Eine Wohnungsanzeige lesen",
        titleVi: "Đọc một tin đăng cho thuê nhà",
        textDe: "Beispiel: '3-Zi.-Whg., 75 qm, 2. OG, EBK, Blk., Kaltmiete 850€ + NK 200€, Kaution 3 MM, ab sofort frei.' Das bedeutet: Drei-Zimmer-Wohnung, 75 Quadratmeter, zweites Obergeschoss, mit Einbauküche und Balkon, Kaltmiete 850 Euro plus 200 Euro Nebenkosten, Kaution drei Monatsmieten, sofort verfügbar.",
        textVi: "Ví dụ: '3-Zi.-Whg., 75 qm, 2. OG, EBK, Blk., Kaltmiete 850€ + NK 200€, Kaution 3 MM, ab sofort frei.' Nghĩa là: Căn hộ 3 phòng, 75 mét vuông, tầng 2, có bếp lắp sẵn và ban công, tiền thuê chưa gồm phụ phí 850 Euro cộng 200 Euro phụ phí, đặt cọc 3 tháng tiền thuê, có sẵn ngay."
      },
      {
        type: "dialogue",
        titleDe: "Anruf wegen einer Wohnung",
        titleVi: "Gọi điện hỏi về căn hộ",
        lines: [
          { speaker: "Thanh", de: "Guten Tag, ich rufe wegen der Wohnungsanzeige an. Ist die Wohnung noch frei?", vi: "Xin chào, tôi gọi về tin đăng cho thuê nhà. Căn hộ còn trống không?" },
          { speaker: "Vermieter", de: "Ja, die Wohnung ist noch frei. Möchten Sie einen Besichtigungstermin?", vi: "Vâng, căn hộ vẫn còn trống. Ông/Bà muốn hẹn xem nhà không?" },
          { speaker: "Thanh", de: "Ja, gern. Können Sie mir noch sagen, ob Haustiere erlaubt sind?", vi: "Vâng, vui lòng. Ông/Bà có thể cho tôi biết thú cưng có được phép không?" },
          { speaker: "Vermieter", de: "Kleine Haustiere sind kein Problem. Wann hätten Sie Zeit für eine Besichtigung?", vi: "Thú cưng nhỏ không thành vấn đề. Khi nào ông/bà có thời gian xem nhà?" },
          { speaker: "Thanh", de: "Würde Samstag um 10 Uhr passen?", vi: "Thứ Bảy lúc 10 giờ có được không?" },
          { speaker: "Vermieter", de: "Samstag um 10 Uhr passt gut. Ich schicke Ihnen die Adresse per E-Mail.", vi: "Thứ Bảy 10 giờ được. Tôi sẽ gửi địa chỉ qua email." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Indirekte Fragen mit 'ob' und W-Fragewort",
        titleVi: "Câu hỏi gián tiếp với 'ob' và từ hỏi W",
        rule: "Ja/Nein-Frage → ob + Verb am Ende: Können Sie mir sagen, ob die Wohnung frei ist? W-Frage → W-Wort + Verb am Ende: Wissen Sie, wann ich einziehen kann?",
        ruleVi: "Câu hỏi Có/Không → ob (có ... không) + động từ cuối câu: Können Sie mir sagen, ob die Wohnung frei ist? (Ông có thể cho tôi biết căn hộ còn trống không?) Câu hỏi W → từ hỏi W + động từ cuối câu: Wissen Sie, wann ich einziehen kann? (Ông có biết khi nào tôi có thể chuyển vào không?)",
        examples: [
          { de: "Können Sie mir sagen, ob die Wohnung eine Einbauküche hat?", vi: "Ông/Bà có thể cho tôi biết căn hộ có bếp lắp sẵn không?" },
          { de: "Ich möchte wissen, wie hoch die Nebenkosten sind.", vi: "Tôi muốn biết phụ phí là bao nhiêu." },
          { de: "Wissen Sie, ob ein Parkplatz dabei ist?", vi: "Ông/Bà có biết có chỗ đỗ xe không?" },
          { de: "Können Sie mir sagen, wann die Wohnung frei wird?", vi: "Ông/Bà có thể cho tôi biết khi nào căn hộ trống không?" }
        ]
      },
      {
        type: "practice",
        titleDe: "E-Mail an den Vermieter",
        titleVi: "Viết email cho chủ nhà",
        instruction: "Du hast eine Wohnungsanzeige gefunden: 2-Zi.-Whg., 55 qm, 3. OG, ohne EBK, Kaltmiete 650€ + NK 150€. Schreibe eine höfliche E-Mail an den Vermieter. Stelle Fragen (ob, wann, wie). Benutze indirekte Fragen.",
        instructionVi: "Bạn tìm thấy một tin đăng: Căn hộ 2 phòng, 55 m², tầng 3, không có bếp, tiền thuê 650€ + phụ phí 150€. Viết một email lịch sự cho chủ nhà. Đặt câu hỏi (ob, wann, wie). Sử dụng câu hỏi gián tiếp."
      }
    ]
  },

  // --- Chapter 6, Lesson 2: Möbel & Einrichtung ---
  {
    id: "a2-ch6-l2",
    chapterId: 6,
    lessonNumber: 2,
    title: "Möbel & Einrichtung",
    titleVi: "Nội thất & Trang trí",
    type: "Grammatik",
    objectives: [
      "Mở rộng từ vựng về nội thất và trang trí nhà cửa",
      "Sử dụng giới từ chỉ vị trí với Dativ (Wo?) và Akkusativ (Wohin?)",
      "Mô tả vị trí đồ vật trong phòng"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Die Wohnung einrichten",
        titleVi: "Trang trí nhà cửa",
        textDe: "Wenn man in Deutschland eine neue Wohnung hat, muss man sie oft selbst einrichten. Viele Menschen kaufen Möbel bei IKEA oder auf Flohmärkten. Man kann auch gebrauchte Möbel auf eBay Kleinanzeigen finden. Die Wohnungseinrichtung ist den Deutschen wichtig: Alles soll gemütlich und praktisch sein. 'Gemütlichkeit' ist ein typisch deutsches Konzept — es bedeutet, dass man sich zu Hause wohl und behaglich fühlt.",
        textVi: "Khi có căn hộ mới ở Đức, thường phải tự trang trí. Nhiều người mua nội thất ở IKEA hoặc ở chợ đồ cũ. Cũng có thể tìm đồ nội thất đã qua sử dụng trên eBay Kleinanzeigen. Người Đức coi trọng việc trang trí nhà: mọi thứ phải ấm cúng và thực dụng. 'Gemütlichkeit' là một khái niệm đặc trưng của Đức — nghĩa là cảm thấy thoải mái và dễ chịu ở nhà."
      },
      {
        type: "vocabulary",
        titleDe: "Möbel & Einrichtung",
        titleVi: "Nội thất & Trang trí",
        words: [
          { de: "Schreibtisch", vi: "bàn làm việc", article: "der" },
          { de: "Bücherregal", vi: "kệ sách", article: "das" },
          { de: "Kommode", vi: "tủ ngăn kéo", article: "die" },
          { de: "Gardine / Vorhang", vi: "rèm cửa", article: "die / der" },
          { de: "Teppich", vi: "thảm", article: "der" },
          { de: "Bild", vi: "bức tranh/ảnh", article: "das" },
          { de: "Vase", vi: "lọ hoa", article: "die" },
          { de: "Kissen", vi: "gối/đệm trang trí", article: "das" },
          { de: "Decke", vi: "chăn / trần nhà", article: "die" },
          { de: "Steckdose", vi: "ổ cắm điện", article: "die" },
          { de: "Heizung", vi: "máy sưởi", article: "die" },
          { de: "Regal", vi: "kệ", article: "das" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Wechselpräpositionen: Wo? (Dativ) und Wohin? (Akkusativ)",
        titleVi: "Giới từ hai cách: Wo? (Dativ) và Wohin? (Akkusativ)",
        rule: "Die Wechselpräpositionen sind: in, an, auf, über, unter, vor, hinter, neben, zwischen. Wo ist etwas? → Dativ (Ort/Position). Wohin stelle/lege ich etwas? → Akkusativ (Richtung/Bewegung).",
        ruleVi: "Các giới từ hai cách là: in (trong), an (ở/trên bề mặt đứng), auf (trên), über (phía trên), unter (phía dưới), vor (phía trước), hinter (phía sau), neben (bên cạnh), zwischen (giữa). Ở đâu? → Dativ (vị trí). Đặt đi đâu? → Akkusativ (hướng/chuyển động).",
        examples: [
          { de: "Das Bild hängt an der Wand. (Wo? → Dativ)", vi: "Bức tranh treo trên tường. (Ở đâu? → Dativ)" },
          { de: "Ich hänge das Bild an die Wand. (Wohin? → Akkusativ)", vi: "Tôi treo bức tranh lên tường. (Đi đâu? → Akkusativ)" },
          { de: "Die Lampe steht auf dem Tisch. (Wo? → Dativ)", vi: "Cái đèn đứng trên bàn. (Ở đâu? → Dativ)" },
          { de: "Ich stelle die Lampe auf den Tisch. (Wohin? → Akkusativ)", vi: "Tôi đặt cái đèn lên bàn. (Đi đâu? → Akkusativ)" },
          { de: "Die Katze liegt unter dem Bett. (Wo? → Dativ)", vi: "Con mèo nằm dưới giường. (Ở đâu? → Dativ)" },
          { de: "Die Katze kriecht unter das Bett. (Wohin? → Akkusativ)", vi: "Con mèo chui xuống dưới giường. (Đi đâu? → Akkusativ)" }
        ]
      },
      {
        type: "grammar",
        titleDe: "stehen/stellen, liegen/legen, hängen, sitzen/setzen",
        titleVi: "Các cặp động từ vị trí",
        rule: "Position (Wo? + Dativ): stehen (đứng), liegen (nằm), hängen (treo), sitzen (ngồi). Aktion (Wohin? + Akkusativ): stellen (đặt đứng), legen (đặt nằm), hängen (treo lên), setzen (đặt ngồi).",
        ruleVi: "Vị trí (Wo? + Dativ): stehen (đứng), liegen (nằm), hängen (treo), sitzen (ngồi) — mô tả trạng thái. Hành động (Wohin? + Akkusativ): stellen (đặt đứng), legen (đặt nằm), hängen (treo lên), setzen (đặt ngồi) — mô tả chuyển động. Đây là điểm ngữ pháp khó nhưng rất quan trọng!",
        examples: [
          { de: "Das Buch liegt auf dem Regal. → Ich lege das Buch auf das Regal.", vi: "Quyển sách nằm trên kệ. → Tôi đặt quyển sách lên kệ." },
          { de: "Die Flasche steht im Kühlschrank. → Ich stelle die Flasche in den Kühlschrank.", vi: "Chai đứng trong tủ lạnh. → Tôi đặt chai vào tủ lạnh." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Die neue Wohnung einrichten",
        titleVi: "Trang trí căn hộ mới",
        lines: [
          { speaker: "Tuan", de: "Wohin soll ich das Sofa stellen?", vi: "Tôi nên đặt ghế sofa ở đâu?" },
          { speaker: "Sarah", de: "Stell es vor das Fenster. Und den Teppich kannst du unter den Tisch legen.", vi: "Đặt nó trước cửa sổ. Còn thảm bạn có thể đặt dưới bàn." },
          { speaker: "Tuan", de: "Gut. Und wo soll das Bild hängen?", vi: "Tốt. Còn bức tranh nên treo ở đâu?" },
          { speaker: "Sarah", de: "Häng es über das Sofa, an die Wand.", vi: "Treo nó phía trên ghế sofa, lên tường." },
          { speaker: "Tuan", de: "Und die Bücher? Die liegen noch auf dem Boden.", vi: "Còn sách? Sách vẫn còn nằm trên sàn." },
          { speaker: "Sarah", de: "Stell sie in das Bücherregal neben der Tür.", vi: "Xếp chúng vào kệ sách cạnh cửa." }
        ]
      },
      {
        type: "practice",
        titleDe: "Dein Traumzimmer beschreiben",
        titleVi: "Mô tả phòng trong mơ của bạn",
        instruction: "Beschreibe dein Traumzimmer. Welche Möbel gibt es? Wo stehen, liegen und hängen die Sachen? Benutze Wechselpräpositionen mit Dativ (Wo?) und schreibe mindestens sechs Sätze.",
        instructionVi: "Mô tả phòng trong mơ của bạn. Có những đồ nội thất nào? Các đồ vật đứng, nằm và treo ở đâu? Sử dụng giới từ hai cách với Dativ (Wo?) và viết ít nhất sáu câu."
      }
    ]
  },

  // --- Chapter 6, Lesson 3: Hausarbeit & Pflichten ---
  {
    id: "a2-ch6-l3",
    chapterId: 6,
    lessonNumber: 3,
    title: "Hausarbeit & Pflichten",
    titleVi: "Việc nhà & Nghĩa vụ",
    type: "Fertigkeit",
    objectives: [
      "Nắm từ vựng về việc nhà và công việc hàng ngày",
      "Phân chia công việc nhà bằng tiếng Đức",
      "Sử dụng trợ động từ 'sollen' và 'müssen'"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Hausarbeit in Deutschland",
        titleVi: "Việc nhà ở Đức",
        textDe: "In Deutschland teilen sich Paare und WG-Mitbewohner oft die Hausarbeit. Es gibt einen Putzplan, der regelt, wer was macht. Typische Hausarbeiten sind: putzen, kochen, Wäsche waschen, bügeln, staubsaugen, spülen und aufräumen. In einer WG (Wohngemeinschaft) ist es besonders wichtig, die Aufgaben gerecht zu verteilen. Auch die Kehrwoche — das Putzen des Treppenhauses — ist in manchen Regionen Pflicht für die Mieter.",
        textVi: "Ở Đức, các cặp đôi và bạn cùng phòng thường chia sẻ việc nhà. Có lịch dọn dẹp quy định ai làm gì. Các công việc nhà thông thường là: lau dọn, nấu ăn, giặt đồ, ủi đồ, hút bụi, rửa bát và dọn dẹp. Trong WG (ở chung phòng), đặc biệt quan trọng phải phân chia công việc công bằng. Kehrwoche — dọn dẹp cầu thang — ở một số vùng là nghĩa vụ bắt buộc của người thuê nhà."
      },
      {
        type: "vocabulary",
        titleDe: "Hausarbeit",
        titleVi: "Việc nhà",
        words: [
          { de: "putzen", vi: "lau dọn" },
          { de: "staubsaugen", vi: "hút bụi" },
          { de: "aufräumen", vi: "dọn dẹp" },
          { de: "abwaschen / spülen", vi: "rửa bát" },
          { de: "kochen", vi: "nấu ăn" },
          { de: "Wäsche waschen", vi: "giặt đồ" },
          { de: "bügeln", vi: "ủi đồ" },
          { de: "einkaufen gehen", vi: "đi mua sắm" },
          { de: "den Müll rausbringen", vi: "đổ rác" },
          { de: "die Blumen gießen", vi: "tưới hoa" },
          { de: "das Bett machen", vi: "dọn giường" },
          { de: "fegen / kehren", vi: "quét nhà" },
          { de: "wischen", vi: "lau (sàn)" },
          { de: "Geschirr", vi: "bát đĩa", article: "das" },
          { de: "Staubsauger", vi: "máy hút bụi", article: "der" },
          { de: "Besen", vi: "chổi", article: "der" }
        ]
      },
      {
        type: "grammar",
        titleDe: "'Sollen' und 'müssen' im Vergleich",
        titleVi: "So sánh 'sollen' và 'müssen'",
        rule: "'Müssen' = eigene Notwendigkeit oder allgemeine Pflicht. 'Sollen' = Aufgabe/Pflicht von jemand anderem (Empfehlung, Auftrag). Konjugation: ich muss/soll, du musst/sollst, er/sie muss/soll, wir müssen/sollen, ihr müsst/sollt, sie/Sie müssen/sollen.",
        ruleVi: "'Müssen' (phải) = sự cần thiết của bản thân hoặc nghĩa vụ chung. 'Sollen' (cần/nên) = nhiệm vụ từ người khác giao (lời khuyên, chỉ thị). Chia: ich muss/soll, du musst/sollst, er/sie muss/soll, wir müssen/sollen, ihr müsst/sollt, sie/Sie müssen/sollen.",
        examples: [
          { de: "Ich muss heute die Wohnung putzen. (= Es ist nötig.)", vi: "Hôm nay tôi phải dọn nhà. (= Cần thiết.)" },
          { de: "Du sollst den Müll rausbringen. (= Jemand hat es dir gesagt.)", vi: "Bạn nên đổ rác. (= Ai đó đã nói với bạn.)" },
          { de: "Wir müssen einkaufen gehen — der Kühlschrank ist leer.", vi: "Chúng ta phải đi mua sắm — tủ lạnh trống rỗng." },
          { de: "Der Arzt sagt, ich soll mehr Wasser trinken.", vi: "Bác sĩ nói tôi nên uống nhiều nước hơn." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Aufgaben in der WG verteilen",
        titleVi: "Phân chia công việc trong nhà chung",
        lines: [
          { speaker: "Nga", de: "Wir müssen einen neuen Putzplan machen. Das Bad ist schmutzig!", vi: "Chúng ta phải lập lịch dọn dẹp mới. Phòng tắm bẩn quá!" },
          { speaker: "Felix", de: "Du hast recht. Ich kann am Montag das Bad putzen.", vi: "Bạn nói đúng. Tôi có thể dọn phòng tắm vào thứ Hai." },
          { speaker: "Nga", de: "Gut. Dann soll Tim die Küche aufräumen und das Geschirr spülen.", vi: "Tốt. Vậy Tim nên dọn bếp và rửa bát." },
          { speaker: "Felix", de: "Und wer bringt den Müll raus? Das muss jede Woche gemacht werden.", vi: "Còn ai đổ rác? Việc đó phải làm mỗi tuần." },
          { speaker: "Nga", de: "Wir können uns abwechseln. Diese Woche du, nächste Woche ich.", vi: "Chúng ta có thể thay phiên nhau. Tuần này bạn, tuần sau tôi." },
          { speaker: "Felix", de: "Einverstanden! Und staubsaugen soll jeder sein eigenes Zimmer.", vi: "Đồng ý! Còn hút bụi thì mỗi người tự lo phòng mình." }
        ]
      },
      {
        type: "practice",
        titleDe: "Einen Putzplan erstellen",
        titleVi: "Lập lịch dọn dẹp",
        instruction: "Du wohnst in einer WG mit zwei Mitbewohnern. Erstelle einen Putzplan für die Woche. Wer soll was machen? Benutze 'sollen' und 'müssen'. Beispiel: Am Montag soll Minh das Bad putzen. Am Dienstag muss ich die Küche aufräumen.",
        instructionVi: "Bạn sống trong nhà chung với hai bạn cùng phòng. Lập lịch dọn dẹp cho tuần. Ai nên làm gì? Sử dụng 'sollen' và 'müssen'. Ví dụ: Thứ Hai Minh nên dọn phòng tắm. Thứ Ba tôi phải dọn bếp."
      }
    ]
  },

  // --- Chapter 6, Lesson 4: Nachbarschaft & Zusammenleben ---
  {
    id: "a2-ch6-l4",
    chapterId: 6,
    lessonNumber: 4,
    title: "Nachbarschaft & Zusammenleben",
    titleVi: "Hàng xóm & Sống chung",
    type: "Integration",
    objectives: [
      "Nắm từ vựng và quy tắc sống chung ở Đức",
      "Hiểu Hausordnung (nội quy nhà)",
      "Viết tin nhắn cho hàng xóm và giải quyết vấn đề"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Nachbarschaft in Deutschland",
        titleVi: "Hàng xóm ở Đức",
        textDe: "In Deutschland gibt es klare Regeln für das Zusammenleben im Haus. Die Hausordnung regelt, wann man leise sein muss (Ruhezeiten: meist 22:00-6:00 Uhr und Sonntag ganztags). Lärm ist das häufigste Problem zwischen Nachbarn. Es ist üblich, sich bei den Nachbarn vorzustellen, wenn man neu einzieht. Manche Nachbarn sind sehr freundlich, andere möchten lieber ihre Ruhe haben. In Deutschland sagt man: 'Guter Nachbar ist besser als ferner Freund.'",
        textVi: "Ở Đức có quy tắc rõ ràng về sống chung trong nhà. Nội quy nhà quy định khi nào phải giữ yên lặng (giờ yên tĩnh: thường 22:00-6:00 và cả ngày Chủ nhật). Tiếng ồn là vấn đề phổ biến nhất giữa hàng xóm. Thường khi mới chuyển đến sẽ giới thiệu mình với hàng xóm. Một số hàng xóm rất thân thiện, số khác muốn được yên. Ở Đức có câu nói: 'Hàng xóm tốt còn hơn bạn xa.'"
      },
      {
        type: "vocabulary",
        titleDe: "Nachbarschaft & Hausordnung",
        titleVi: "Hàng xóm & Nội quy nhà",
        words: [
          { de: "Nachbar/in", vi: "hàng xóm", article: "der/die" },
          { de: "Nachbarschaft", vi: "khu phố, tình hàng xóm", article: "die" },
          { de: "Hausordnung", vi: "nội quy nhà", article: "die" },
          { de: "Ruhezeiten", vi: "giờ yên tĩnh", article: "die" },
          { de: "Lärm", vi: "tiếng ồn", article: "der" },
          { de: "Treppenhaus", vi: "cầu thang chung", article: "das" },
          { de: "Hof / Innenhof", vi: "sân trong", article: "der" },
          { de: "Hausverwaltung", vi: "quản lý tòa nhà", article: "die" },
          { de: "Beschwerde", vi: "khiếu nại", article: "die" },
          { de: "sich beschweren", vi: "phàn nàn, khiếu nại" },
          { de: "sich entschuldigen", vi: "xin lỗi" },
          { de: "Rücksicht nehmen", vi: "quan tâm, để ý (đến người khác)" },
          { de: "Grillparty", vi: "tiệc nướng", article: "die" },
          { de: "Kinderwagen", vi: "xe đẩy em bé", article: "der" }
        ]
      },
      {
        type: "explanation",
        titleDe: "Typische Regeln in der Hausordnung",
        titleVi: "Các quy tắc thường gặp trong nội quy nhà",
        textDe: "1. Ruhezeiten einhalten (22:00-6:00 Uhr und sonntags). 2. Das Treppenhaus sauber halten (Kehrwoche). 3. Keinen Müll im Treppenhaus abstellen. 4. Die Haustür nach 20:00 Uhr abschließen. 5. Keine laute Musik nach 22:00 Uhr. 6. Wäsche nicht sonntags im Gemeinschaftskeller waschen. 7. Fahrräder nur im Fahrradkeller abstellen.",
        textVi: "1. Giữ giờ yên tĩnh (22:00-6:00 và Chủ nhật). 2. Giữ cầu thang sạch (tuần dọn dẹp). 3. Không để rác ở cầu thang. 4. Khóa cửa chính sau 20:00. 5. Không mở nhạc to sau 22:00. 6. Không giặt đồ trong tầng hầm chung vào Chủ nhật. 7. Để xe đạp chỉ trong phòng xe đạp dưới tầng hầm."
      },
      {
        type: "grammar",
        titleDe: "Reflexive Verben im Kontext",
        titleVi: "Động từ phản thân trong ngữ cảnh",
        rule: "Reflexive Verben mit Akkusativ-Pronomen: sich beschweren, sich entschuldigen, sich vorstellen, sich freuen, sich ärgern. Ich beschwere mich, du beschwerst dich, er/sie beschwert sich, wir beschweren uns, ihr beschwert euch, sie beschweren sich.",
        ruleVi: "Động từ phản thân với đại từ Akkusativ: sich beschweren (phàn nàn), sich entschuldigen (xin lỗi), sich vorstellen (giới thiệu mình), sich freuen (vui mừng), sich ärgern (tức giận). Chia: ich ... mich, du ... dich, er/sie ... sich, wir ... uns, ihr ... euch, sie ... sich.",
        examples: [
          { de: "Ich möchte mich bei Ihnen vorstellen. Ich bin Ihr neuer Nachbar.", vi: "Tôi muốn giới thiệu mình. Tôi là hàng xóm mới của ông/bà." },
          { de: "Sie beschwert sich über den Lärm.", vi: "Cô ấy phàn nàn về tiếng ồn." },
          { de: "Ich entschuldige mich für die laute Musik gestern Abend.", vi: "Tôi xin lỗi vì nhạc to tối qua." },
          { de: "Wir freuen uns über die netten Nachbarn.", vi: "Chúng tôi vui vì có hàng xóm tốt." },
          { de: "Er ärgert sich über den Müll im Treppenhaus.", vi: "Anh ấy tức giận vì rác ở cầu thang." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Ein Problem mit dem Nachbarn",
        titleVi: "Vấn đề với hàng xóm",
        lines: [
          { speaker: "Phong", de: "Entschuldigung, darf ich Sie kurz sprechen?", vi: "Xin lỗi, tôi có thể nói chuyện với ông/bà một chút không?" },
          { speaker: "Frau Müller", de: "Ja, natürlich. Was gibt es denn?", vi: "Vâng, tất nhiên. Có chuyện gì vậy?" },
          { speaker: "Phong", de: "Es tut mir leid, aber gestern Abend war die Musik von Ihrer Wohnung sehr laut. Ich konnte nicht schlafen.", vi: "Tôi rất tiếc, nhưng tối qua nhạc từ căn hộ của bà rất to. Tôi không ngủ được." },
          { speaker: "Frau Müller", de: "Oh, das tut mir leid! Mein Sohn hatte Geburtstag. Das kommt nicht wieder vor.", vi: "Ồ, tôi xin lỗi! Con trai tôi mừng sinh nhật. Chuyện này sẽ không xảy ra nữa." },
          { speaker: "Phong", de: "Das verstehe ich natürlich. Könnten Sie bitte nach 22 Uhr die Musik leiser machen?", vi: "Tôi hiểu. Bà có thể vui lòng vặn nhạc nhỏ hơn sau 22 giờ không?" },
          { speaker: "Frau Müller", de: "Ja, selbstverständlich. Und nochmals Entschuldigung! Möchten Sie vielleicht ein Stück Geburtstagskuchen?", vi: "Vâng, tất nhiên. Và xin lỗi lần nữa! Ông có muốn một miếng bánh sinh nhật không?" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Sich bei neuen Nachbarn vorstellen",
        titleVi: "Giới thiệu mình với hàng xóm mới",
        lines: [
          { speaker: "Hanh", de: "Guten Tag! Ich bin Hanh, Ihre neue Nachbarin. Ich bin gerade eingezogen.", vi: "Xin chào! Tôi là Hạnh, hàng xóm mới của ông/bà. Tôi vừa chuyển đến." },
          { speaker: "Herr Schmidt", de: "Herzlich willkommen! Ich bin Herr Schmidt. Wenn Sie Fragen haben, können Sie gern klingeln.", vi: "Chào mừng! Tôi là ông Schmidt. Nếu bạn có câu hỏi gì, cứ bấm chuông." },
          { speaker: "Hanh", de: "Vielen Dank! Ich komme aus Vietnam und lerne noch Deutsch.", vi: "Cảm ơn nhiều! Tôi đến từ Việt Nam và đang học tiếng Đức." },
          { speaker: "Herr Schmidt", de: "Ihr Deutsch ist schon sehr gut! Wissen Sie schon, wie die Mülltrennung hier funktioniert?", vi: "Tiếng Đức của bạn đã rất tốt! Bạn đã biết phân loại rác ở đây hoạt động thế nào chưa?" },
          { speaker: "Hanh", de: "Noch nicht genau. Könnten Sie mir das erklären?", vi: "Chưa chính xác. Ông có thể giải thích cho tôi không?" },
          { speaker: "Herr Schmidt", de: "Natürlich! Kommen Sie am Wochenende auf einen Kaffee vorbei, dann erkläre ich Ihnen alles.", vi: "Tất nhiên! Cuối tuần ghé qua uống cà phê, tôi sẽ giải thích mọi thứ cho bạn." }
        ]
      },
      {
        type: "practice",
        titleDe: "Nachbarschaftssituationen",
        titleVi: "Các tình huống hàng xóm",
        instruction: "Schreibe drei kurze Nachrichten an deinen Nachbarn: 1) Stell dich als neuer Nachbar vor. 2) Beschwere dich höflich über ein Problem (z.B. Lärm, Müll). 3) Lade deinen Nachbarn zu einem kleinen Fest ein. Benutze reflexive Verben und höfliche Formen.",
        instructionVi: "Viết ba tin nhắn ngắn cho hàng xóm: 1) Giới thiệu mình là hàng xóm mới. 2) Phàn nàn lịch sự về một vấn đề (ví dụ tiếng ồn, rác). 3) Mời hàng xóm đến một bữa tiệc nhỏ. Sử dụng động từ phản thân và các dạng lịch sự."
      }
    ]
  }
];
