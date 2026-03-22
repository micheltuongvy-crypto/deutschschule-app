export interface GrammarTopic {
  id: string;
  title: string;
  titleVi: string;
  chapter: number;
  order: number;
  level: "B1";
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

export const b1Grammar: GrammarTopic[] = [
  // ============================================================
  // TOPIC 1: Plusquamperfekt & temporale Nebensaetze (Kapitel 1)
  // ============================================================
  {
    id: "b1-gram-01",
    title: "Plusquamperfekt & temporale Nebensätze",
    titleVi: "Thì quá khứ hoàn thành & mệnh đề phụ chỉ thời gian",
    chapter: 1,
    order: 1,
    level: "B1",
    explanation:
      "Das Plusquamperfekt beschreibt eine Handlung, die vor einer anderen Handlung in der Vergangenheit stattfand. Es wird mit 'hatte/war' + Partizip II gebildet. Temporale Nebensätze mit 'nachdem', 'bevor', 'als', 'während' verbinden zwei Handlungen zeitlich miteinander.\n\nThì Plusquamperfekt (quá khứ hoàn thành) diễn tả một hành động xảy ra TRƯỚC một hành động khác trong quá khứ. Được tạo bằng 'hatte/war' + Partizip II. Các mệnh đề phụ chỉ thời gian với 'nachdem' (sau khi), 'bevor' (trước khi), 'als' (khi), 'während' (trong khi) nối hai hành động theo trình tự thời gian.",
    rules: [
      {
        rule: "Bildung: hatte/war + Partizip II. 'hatte' für Verben mit Akkusativobjekt, 'war' für Bewegungs- und Zustandsverben.",
        ruleVi:
          "Cách tạo: hatte/war + Partizip II. Dùng 'hatte' cho động từ có tân ngữ Akkusativ, 'war' cho động từ chuyển động và trạng thái.",
        examples: [
          {
            de: "Ich hatte das Buch gelesen, bevor ich den Film sah.",
            vi: "Tôi đã đọc xong cuốn sách trước khi xem phim.",
          },
          {
            de: "Er war nach Hause gegangen, als ich ankam.",
            vi: "Anh ấy đã về nhà khi tôi đến.",
          },
          {
            de: "Wir hatten schon gegessen, bevor die Gäste kamen.",
            vi: "Chúng tôi đã ăn xong trước khi khách đến.",
          },
        ],
      },
      {
        rule: "'Nachdem' + Plusquamperfekt im Nebensatz, Präteritum/Perfekt im Hauptsatz.",
        ruleVi:
          "'Nachdem' (sau khi) + Plusquamperfekt ở mệnh đề phụ, Präteritum/Perfekt ở mệnh đề chính.",
        examples: [
          {
            de: "Nachdem ich gefrühstückt hatte, ging ich zur Arbeit.",
            vi: "Sau khi ăn sáng xong, tôi đi làm.",
          },
          {
            de: "Nachdem sie angekommen war, rief sie mich an.",
            vi: "Sau khi cô ấy đến nơi, cô ấy gọi cho tôi.",
          },
          {
            de: "Nachdem wir den Vertrag unterschrieben hatten, feierten wir.",
            vi: "Sau khi chúng tôi ký hợp đồng xong, chúng tôi ăn mừng.",
          },
        ],
      },
      {
        rule: "'Bevor' und 'als' stehen oft mit gleicher Zeitform in beiden Sätzen, oder mit Plusquamperfekt für die frühere Handlung.",
        ruleVi:
          "'Bevor' (trước khi) và 'als' (khi) thường dùng cùng thì ở cả hai mệnh đề, hoặc dùng Plusquamperfekt cho hành động xảy ra trước.",
        examples: [
          {
            de: "Bevor er abreiste, hatte er alles gepackt.",
            vi: "Trước khi anh ấy khởi hành, anh ấy đã gói xong mọi thứ.",
          },
          {
            de: "Als ich aufwachte, war mein Mann schon weggegangen.",
            vi: "Khi tôi thức dậy, chồng tôi đã đi rồi.",
          },
          {
            de: "Bevor wir ins Kino gingen, hatten wir Karten reserviert.",
            vi: "Trước khi chúng tôi đi xem phim, chúng tôi đã đặt vé.",
          },
        ],
      },
      {
        rule: "'Während' drückt Gleichzeitigkeit aus – beide Handlungen passieren zur selben Zeit.",
        ruleVi:
          "'Während' (trong khi) diễn tả sự đồng thời – hai hành động xảy ra cùng lúc.",
        examples: [
          {
            de: "Während ich kochte, räumte er die Wohnung auf.",
            vi: "Trong khi tôi nấu ăn, anh ấy dọn dẹp nhà.",
          },
          {
            de: "Während sie studierte, arbeitete sie als Kellnerin.",
            vi: "Trong khi cô ấy học đại học, cô ấy làm bồi bàn.",
          },
        ],
      },
      {
        rule: "Im Nebensatz steht das konjugierte Verb am Ende.",
        ruleVi:
          "Trong mệnh đề phụ, động từ chia luôn đứng ở cuối câu.",
        examples: [
          {
            de: "Nachdem er die Prüfung bestanden hatte, machte er Urlaub.",
            vi: "Sau khi anh ấy đã thi đỗ, anh ấy đi nghỉ.",
          },
          {
            de: "Bevor sie nach Deutschland gezogen war, hatte sie Deutsch gelernt.",
            vi: "Trước khi cô ấy chuyển sang Đức, cô ấy đã học tiếng Đức.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Nachdem ich frühstückte, ging ich zur Arbeit.",
        correct: "Nachdem ich gefrühstückt hatte, ging ich zur Arbeit.",
        explanation:
          "Nach 'nachdem' muss Plusquamperfekt stehen, wenn der Hauptsatz im Präteritum steht. / Sau 'nachdem' phải dùng Plusquamperfekt khi mệnh đề chính ở Präteritum.",
      },
      {
        wrong: "Nachdem ich hatte gefrühstückt, ging ich zur Arbeit.",
        correct: "Nachdem ich gefrühstückt hatte, ging ich zur Arbeit.",
        explanation:
          "Im Nebensatz steht das konjugierte Verb (hatte) am Ende, nicht vor dem Partizip II. / Trong mệnh đề phụ, động từ chia (hatte) đứng cuối, không đứng trước Partizip II.",
      },
      {
        wrong: "Er war das Buch gelesen.",
        correct: "Er hatte das Buch gelesen.",
        explanation:
          "'Lesen' braucht 'hatte' (nicht 'war'), weil es ein transitives Verb ist. / 'Lesen' dùng 'hatte' (không phải 'war') vì nó là động từ có tân ngữ trực tiếp.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt không có thì quá khứ hoàn thành riêng biệt. Thay vào đó, tiếng Việt dùng các từ chỉ thời gian như 'đã...rồi', 'đã...xong' hoặc 'trước khi', 'sau khi' để diễn tả trình tự. Ví dụ: 'Tôi đã ăn xong rồi khi anh ấy đến' = 'Ich hatte schon gegessen, als er kam.' Trong tiếng Đức, bạn PHẢI thay đổi dạng động từ (hatte/war + Partizip II) để chỉ hành động nào xảy ra trước. Đây là điểm khác biệt lớn nhất.",
    exercises: [
      {
        type: "fillBlank",
        question:
          "Nachdem er die E-Mail _____ (schreiben), schickte er sie ab.",
        questionVi: "Sau khi anh ấy viết xong email, anh ấy gửi đi.",
        answer: "geschrieben hatte",
        explanation:
          "Nach 'nachdem' steht Plusquamperfekt: geschrieben hatte. Das Verb steht am Ende des Nebensatzes.",
      },
      {
        type: "multipleChoice",
        question:
          "Bevor wir ins Restaurant gingen, _____ wir einen Tisch reserviert.",
        questionVi:
          "Trước khi chúng tôi đi nhà hàng, chúng tôi đã đặt bàn.",
        options: ["haben", "hatten", "waren", "sind"],
        answer: "hatten",
        explanation:
          "Die frühere Handlung (Tisch reservieren) steht im Plusquamperfekt: hatten...reserviert.",
      },
      {
        type: "reorder",
        question:
          "nachdem / hatte / er / gegessen / , / machte / einen Spaziergang / er",
        questionVi:
          "Sắp xếp: Sau khi anh ấy ăn xong, anh ấy đi dạo.",
        answer:
          "Nachdem er gegessen hatte, machte er einen Spaziergang.",
        explanation:
          "Im Nebensatz mit 'nachdem' steht das konjugierte Verb 'hatte' am Ende.",
      },
      {
        type: "trueFalse",
        question:
          "'Während ich schlief, hatte mein Bruder aufgeräumt.' – Ist der Satz korrekt?",
        questionVi:
          "'Trong khi tôi ngủ, anh tôi đã dọn dẹp xong.' – Câu này đúng không?",
        answer: "Falsch",
        explanation:
          "'Während' drückt Gleichzeitigkeit aus, deshalb sollte der Hauptsatz im Präteritum stehen: 'Während ich schlief, räumte mein Bruder auf.'",
      },
      {
        type: "translate",
        question: "Sau khi tôi học xong tiếng Đức, tôi chuyển sang Đức.",
        questionVi: "Dịch sang tiếng Đức.",
        answer:
          "Nachdem ich Deutsch gelernt hatte, zog ich nach Deutschland.",
        explanation:
          "'Nachdem' + Plusquamperfekt (gelernt hatte), Hauptsatz im Präteritum (zog).",
      },
    ],
  },

  // ============================================================
  // TOPIC 2: Infinitivsaetze (ohne/statt/um...zu) (Kapitel 2)
  // ============================================================
  {
    id: "b1-gram-02",
    title: "Infinitivsätze (ohne/statt/um...zu)",
    titleVi: "Câu nguyên thể (không/thay vì/để...mà)",
    chapter: 2,
    order: 1,
    level: "B1",
    explanation:
      "Infinitivsätze sind Nebensätze mit 'zu + Infinitiv'. Besondere Formen sind 'um...zu' (Zweck/Ziel), 'ohne...zu' (fehlende Begleithandlung) und '(an)statt...zu' (Alternative). Das Subjekt im Infinitivsatz ist immer gleich wie im Hauptsatz.\n\nCâu nguyên thể là mệnh đề phụ với 'zu + động từ nguyên thể'. Các dạng đặc biệt: 'um...zu' (mục đích), 'ohne...zu' (không làm gì đó kèm theo), '(an)statt...zu' (thay vì). Chủ ngữ trong câu nguyên thể luôn giống với mệnh đề chính.",
    rules: [
      {
        rule: "'Um...zu + Infinitiv' drückt einen Zweck oder ein Ziel aus. Es antwortet auf die Frage 'Wozu?'.",
        ruleVi:
          "'Um...zu + động từ nguyên thể' diễn tả mục đích. Nó trả lời câu hỏi 'Để làm gì?'.",
        examples: [
          {
            de: "Ich lerne Deutsch, um in Deutschland zu studieren.",
            vi: "Tôi học tiếng Đức để du học ở Đức.",
          },
          {
            de: "Er fährt nach Berlin, um seine Freundin zu besuchen.",
            vi: "Anh ấy đi Berlin để thăm bạn gái.",
          },
          {
            de: "Sie spart Geld, um ein Auto zu kaufen.",
            vi: "Cô ấy tiết kiệm tiền để mua xe hơi.",
          },
        ],
      },
      {
        rule: "'Ohne...zu + Infinitiv' bedeutet, dass eine erwartete Handlung nicht stattfindet.",
        ruleVi:
          "'Ohne...zu + động từ nguyên thể' nghĩa là một hành động được mong đợi không xảy ra (mà không...).",
        examples: [
          {
            de: "Er ging weg, ohne sich zu verabschieden.",
            vi: "Anh ấy đi mà không chào tạm biệt.",
          },
          {
            de: "Sie bestand die Prüfung, ohne viel zu lernen.",
            vi: "Cô ấy đỗ kỳ thi mà không học nhiều.",
          },
          {
            de: "Er kaufte das Auto, ohne es vorher zu testen.",
            vi: "Anh ấy mua xe mà không thử trước.",
          },
        ],
      },
      {
        rule: "'(An)statt...zu + Infinitiv' drückt eine Alternative aus – etwas wird gemacht statt etwas anderes.",
        ruleVi:
          "'(An)statt...zu + động từ nguyên thể' diễn tả sự thay thế – làm việc này thay vì việc kia.",
        examples: [
          {
            de: "Statt zu arbeiten, spielte er Computerspiele.",
            vi: "Thay vì làm việc, anh ấy chơi game.",
          },
          {
            de: "Anstatt den Bus zu nehmen, ging sie zu Fuß.",
            vi: "Thay vì đi xe buýt, cô ấy đi bộ.",
          },
          {
            de: "Statt fernzusehen, liest er ein Buch.",
            vi: "Thay vì xem tivi, anh ấy đọc sách.",
          },
        ],
      },
      {
        rule: "Bei trennbaren Verben steht 'zu' zwischen Vorsilbe und Verb: an-zu-fangen, auf-zu-stehen.",
        ruleVi:
          "Với động từ tách, 'zu' đứng giữa tiền tố và động từ: an-zu-fangen, auf-zu-stehen.",
        examples: [
          {
            de: "Es ist wichtig, früh aufzustehen.",
            vi: "Điều quan trọng là dậy sớm.",
          },
          {
            de: "Ich habe vor, morgen anzufangen.",
            vi: "Tôi dự định bắt đầu ngày mai.",
          },
          {
            de: "Er versucht, das Fenster aufzumachen.",
            vi: "Anh ấy cố mở cửa sổ.",
          },
        ],
      },
      {
        rule: "Infinitivsätze sind nur möglich, wenn das Subjekt in beiden Satzteilen gleich ist. Sonst braucht man 'damit', 'ohne dass', 'anstatt dass'.",
        ruleVi:
          "Câu nguyên thể chỉ dùng khi chủ ngữ ở cả hai phần câu giống nhau. Nếu khác chủ ngữ, dùng 'damit', 'ohne dass', 'anstatt dass'.",
        examples: [
          {
            de: "Ich lerne, um die Prüfung zu bestehen. (gleich: ich)",
            vi: "Tôi học để đỗ kỳ thi. (cùng chủ ngữ: tôi)",
          },
          {
            de: "Ich lerne, damit meine Eltern stolz sind. (verschieden: ich / Eltern)",
            vi: "Tôi học để bố mẹ tự hào. (khác chủ ngữ: tôi / bố mẹ)",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Ich lerne Deutsch um in Deutschland studieren.",
        correct: "Ich lerne Deutsch, um in Deutschland zu studieren.",
        explanation:
          "Man braucht 'zu' vor dem Infinitiv und ein Komma vor 'um'. / Cần 'zu' trước động từ nguyên thể và dấu phẩy trước 'um'.",
      },
      {
        wrong: "Er ging weg, ohne zu sich verabschieden.",
        correct: "Er ging weg, ohne sich zu verabschieden.",
        explanation:
          "'Zu' steht direkt vor dem Infinitiv, reflexive Pronomen stehen davor. / 'Zu' đứng ngay trước động từ nguyên thể, đại từ phản thân đứng trước 'zu'.",
      },
      {
        wrong: "Statt zu fernsehen, liest er ein Buch.",
        correct: "Statt fernzusehen, liest er ein Buch.",
        explanation:
          "Bei trennbaren Verben steht 'zu' zwischen Vorsilbe und Verb: fern-zu-sehen. / Với động từ tách, 'zu' đứng giữa: fern-zu-sehen.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt diễn tả mục đích bằng 'để', thay thế bằng 'thay vì', và thiếu hành động bằng 'mà không'. Cấu trúc khá giống tiếng Đức nhưng đơn giản hơn nhiều vì không cần 'zu', không cần thay đổi vị trí động từ, và không cần phân biệt động từ tách. Lưu ý quan trọng: tiếng Việt cho phép khác chủ ngữ ('Tôi học để bố mẹ vui'), nhưng tiếng Đức bắt buộc dùng 'damit' khi khác chủ ngữ.",
    exercises: [
      {
        type: "fillBlank",
        question: "Sie ging zum Supermarkt, _____ Milch _____ kaufen.",
        questionVi: "Cô ấy đi siêu thị để mua sữa.",
        answer: "um ... zu",
        explanation:
          "'Um...zu' drückt den Zweck aus. 'Um' steht am Anfang des Infinitivsatzes, 'zu' vor dem Infinitiv.",
      },
      {
        type: "multipleChoice",
        question:
          "Er verließ das Haus, _____ einen Regenschirm mitzunehmen.",
        questionVi: "Anh ấy rời nhà mà không mang theo ô.",
        options: ["um", "ohne", "statt", "damit"],
        answer: "ohne",
        explanation:
          "'Ohne...zu' = mà không. Er hat keinen Regenschirm mitgenommen.",
      },
      {
        type: "transform",
        question:
          "Schreibe mit Infinitivsatz: Er lernt. Er will die Prüfung bestehen.",
        questionVi: "Viết lại bằng câu nguyên thể.",
        answer: "Er lernt, um die Prüfung zu bestehen.",
        explanation: "'Um...zu' verbindet Handlung und Zweck.",
      },
      {
        type: "errorCorrection",
        question: "Anstatt zu fernsehen, liest sie ein Buch.",
        questionVi: "Tìm và sửa lỗi trong câu.",
        answer: "Anstatt fernzusehen, liest sie ein Buch.",
        explanation:
          "'Fernsehen' ist trennbar, also: fern-zu-sehen → fernzusehen.",
      },
      {
        type: "translate",
        question: "Thay vì ngủ, anh ấy học tiếng Đức.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Statt zu schlafen, lernt er Deutsch.",
        explanation:
          "'Statt...zu + Infinitiv' = thay vì. 'Schlafen' ist nicht trennbar, also: statt zu schlafen.",
      },
    ],
  },

  // ============================================================
  // TOPIC 3: Adjektivdeklination alle Faelle (Kapitel 3)
  // ============================================================
  {
    id: "b1-gram-03",
    title: "Adjektivdeklination alle Fälle",
    titleVi: "Biến cách tính từ tất cả các cách",
    chapter: 3,
    order: 1,
    level: "B1",
    explanation:
      "In B1 werden alle drei Deklinationstypen zusammengeführt: nach bestimmtem Artikel (der/die/das), nach unbestimmtem Artikel (ein/eine) und ohne Artikel. Die Endung hängt von Genus, Kasus und Artikeltyp ab.\n\nỞ B1, ba loại biến cách tính từ được tổng hợp: sau mạo từ xác định (der/die/das), sau mạo từ bất định (ein/eine), và không có mạo từ. Đuôi tính từ phụ thuộc vào giống, cách, và loại mạo từ.",
    rules: [
      {
        rule: "Nach bestimmtem Artikel: Endung ist '-e' im Nominativ (alle Genera) und Akkusativ (fem./neutr.), sonst '-en'.",
        ruleVi:
          "Sau mạo từ xác định: đuôi '-e' ở Nominativ (mọi giống) và Akkusativ (giống cái/trung), còn lại '-en'.",
        examples: [
          {
            de: "Der kleine Hund spielt im Garten. (Nom. mask.)",
            vi: "Con chó nhỏ chơi trong vườn.",
          },
          {
            de: "Ich sehe die schöne Frau. (Akk. fem.)",
            vi: "Tôi nhìn thấy người phụ nữ đẹp.",
          },
          {
            de: "Er hilft dem alten Mann. (Dat. mask.)",
            vi: "Anh ấy giúp ông già.",
          },
        ],
      },
      {
        rule: "Nach unbestimmtem Artikel: Das Adjektiv übernimmt die Signalendung, die dem Artikel fehlt (ein großer Mann, eine große Frau, ein großes Kind).",
        ruleVi:
          "Sau mạo từ bất định: tính từ mang đuôi tín hiệu mà mạo từ thiếu (ein großer Mann, eine große Frau, ein großes Kind).",
        examples: [
          {
            de: "Ein junger Mann wartet draußen. (Nom. mask.)",
            vi: "Một người đàn ông trẻ đợi bên ngoài.",
          },
          {
            de: "Sie hat einen neuen Job. (Akk. mask.)",
            vi: "Cô ấy có việc làm mới.",
          },
          {
            de: "Er wohnt in einer kleinen Wohnung. (Dat. fem.)",
            vi: "Anh ấy sống trong một căn hộ nhỏ.",
          },
        ],
      },
      {
        rule: "Ohne Artikel: Das Adjektiv bekommt die starke Endung (wie der bestimmte Artikel selbst): kalter Kaffee, frische Milch, warmes Wasser.",
        ruleVi:
          "Không có mạo từ: tính từ mang đuôi mạnh (giống đuôi mạo từ xác định): kalter Kaffee, frische Milch, warmes Wasser.",
        examples: [
          {
            de: "Kaltes Bier schmeckt gut im Sommer.",
            vi: "Bia lạnh ngon vào mùa hè.",
          },
          {
            de: "Frische Brötchen gibt es in der Bäckerei.",
            vi: "Bánh mì tươi có ở tiệm bánh.",
          },
          {
            de: "Mit großer Freude nahm sie das Geschenk an.",
            vi: "Với niềm vui lớn, cô ấy nhận quà.",
          },
        ],
      },
      {
        rule: "Im Genitiv: Nach bestimmtem und unbestimmtem Artikel immer '-en'. Ohne Artikel auch '-en' (mit Ausnahme fem. Sg. '-er').",
        ruleVi:
          "Ở Genitiv: Sau mạo từ xác định và bất định luôn '-en'. Không mạo từ cũng '-en' (ngoại trừ giống cái số ít '-er').",
        examples: [
          {
            de: "Der Preis des neuen Autos ist hoch. (Gen. neutr.)",
            vi: "Giá của chiếc xe mới rất cao.",
          },
          {
            de: "Wegen schlechten Wetters blieben wir zu Hause.",
            vi: "Vì thời tiết xấu, chúng tôi ở nhà.",
          },
          {
            de: "Die Farbe eines roten Kleides gefällt mir.",
            vi: "Tôi thích màu của chiếc váy đỏ.",
          },
        ],
      },
      {
        rule: "Merkhilfe: Wenn der Artikel die Kasusinformation zeigt, bekommt das Adjektiv '-e' oder '-en'. Wenn nicht, muss das Adjektiv die Information tragen.",
        ruleVi:
          "Mẹo ghi nhớ: Khi mạo từ đã chỉ thông tin cách, tính từ chỉ cần '-e' hoặc '-en'. Khi không, tính từ phải mang thông tin đó.",
        examples: [
          {
            de: "Der große Baum (Artikel zeigt mask. Nom. → Adj. -e)",
            vi: "Cái cây lớn (mạo từ chỉ giống đực Nom. → tính từ -e)",
          },
          {
            de: "Ein großer Baum ('ein' zeigt nicht mask. Nom. → Adj. -er)",
            vi: "Một cái cây lớn ('ein' không chỉ giống đực Nom. → tính từ -er)",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Ich trinke gern kalte Kaffee.",
        correct: "Ich trinke gern kalten Kaffee.",
        explanation:
          "'Kaffee' ist maskulin, Akkusativ ohne Artikel → starke Endung '-en'. / 'Kaffee' giống đực, Akkusativ không mạo từ → đuôi mạnh '-en'.",
      },
      {
        wrong: "Der kleiner Junge spielt draußen.",
        correct: "Der kleine Junge spielt draußen.",
        explanation:
          "Nach bestimmtem Artikel im Nominativ maskulin → '-e', nicht '-er'. / Sau mạo từ xác định ở Nominativ giống đực → '-e', không phải '-er'.",
      },
      {
        wrong: "Sie hat ein neuer Kleid.",
        correct: "Sie hat ein neues Kleid.",
        explanation:
          "'Kleid' ist Neutrum, Akkusativ. 'Ein' zeigt nicht Neutrum → Adjektiv braucht '-es'. / 'Kleid' giống trung, Akkusativ. 'Ein' không chỉ trung → tính từ cần '-es'.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt không biến cách tính từ – tính từ luôn giữ nguyên hình dạng bất kể giống, cách, hay mạo từ. Ví dụ: 'con chó nhỏ', 'người phụ nữ nhỏ', 'cái nhà nhỏ' – 'nhỏ' không thay đổi. Đây là một trong những thử thách lớn nhất cho người Việt học tiếng Đức. Mẹo: Học theo cụm (der alte Mann, einen alten Mann, altem Mann) thay vì học bảng biến cách riêng lẻ.",
    exercises: [
      {
        type: "fillBlank",
        question: "Ich möchte ein kalt___ Bier, bitte.",
        questionVi: "Tôi muốn một ly bia lạnh.",
        answer: "kaltes",
        explanation:
          "'Bier' ist Neutrum, Akkusativ. 'Ein' zeigt nicht Neutrum → Adjektiv braucht '-es': kaltes.",
      },
      {
        type: "multipleChoice",
        question: "Die Lehrerin gibt dem neu___ Schüler ein Buch.",
        questionVi: "Cô giáo đưa cho học sinh mới một cuốn sách.",
        options: ["-e", "-en", "-er", "-em"],
        answer: "-en",
        explanation:
          "Dativ maskulin nach bestimmtem Artikel → Endung '-en'.",
      },
      {
        type: "fillBlank",
        question: "Frisch___ Obst ist gesund.",
        questionVi: "Trái cây tươi tốt cho sức khỏe.",
        answer: "Frisches",
        explanation:
          "Ohne Artikel, Nominativ Neutrum ('Obst') → starke Endung '-es': Frisches.",
      },
      {
        type: "errorCorrection",
        question: "Er trägt einen schwarze Anzug zur Hochzeit.",
        questionVi: "Tìm và sửa lỗi.",
        answer: "Er trägt einen schwarzen Anzug zur Hochzeit.",
        explanation:
          "Akkusativ maskulin nach 'einen' → '-en': schwarzen Anzug.",
      },
      {
        type: "translate",
        question: "Tôi cần một chiếc túi lớn cho chuyến đi.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Ich brauche eine große Tasche für die Reise.",
        explanation:
          "'Tasche' ist feminin, Akkusativ nach 'eine' → '-e': große Tasche.",
      },
    ],
  },

  // ============================================================
  // TOPIC 4: Zweiteilige Konjunktionen (Kapitel 4)
  // ============================================================
  {
    id: "b1-gram-04",
    title: "Zweiteilige Konjunktionen",
    titleVi: "Liên từ kép",
    chapter: 4,
    order: 1,
    level: "B1",
    explanation:
      "Zweiteilige Konjunktionen verbinden zwei gleichwertige Satzteile oder Sätze. Die wichtigsten sind: 'sowohl...als auch' (cả...và), 'entweder...oder' (hoặc...hoặc), 'weder...noch' (không...cũng không), 'nicht nur...sondern auch' (không chỉ...mà còn), 'zwar...aber' (tuy...nhưng), 'je...desto/umso' (càng...càng).\n\nLiên từ kép nối hai phần câu hoặc hai câu ngang hàng. Chúng giúp văn nói và viết phong phú, tự nhiên hơn.",
    rules: [
      {
        rule: "'Sowohl...als auch' = 'cả...lẫn/và'. Verbindet zwei positive Aussagen.",
        ruleVi:
          "'Sowohl...als auch' = 'cả...lẫn/và'. Nối hai phát biểu khẳng định.",
        examples: [
          {
            de: "Er spricht sowohl Deutsch als auch Englisch.",
            vi: "Anh ấy nói cả tiếng Đức lẫn tiếng Anh.",
          },
          {
            de: "Sowohl Kinder als auch Erwachsene lieben Eis.",
            vi: "Cả trẻ em lẫn người lớn đều thích kem.",
          },
          {
            de: "Sie ist sowohl intelligent als auch fleißig.",
            vi: "Cô ấy vừa thông minh vừa chăm chỉ.",
          },
        ],
      },
      {
        rule: "'Entweder...oder' = 'hoặc...hoặc'. Drückt eine Wahl zwischen zwei Möglichkeiten aus.",
        ruleVi:
          "'Entweder...oder' = 'hoặc...hoặc'. Diễn tả sự lựa chọn giữa hai khả năng.",
        examples: [
          {
            de: "Entweder du kommst mit oder du bleibst hier.",
            vi: "Hoặc bạn đi cùng hoặc bạn ở lại đây.",
          },
          {
            de: "Wir essen entweder Pizza oder Pasta.",
            vi: "Chúng tôi ăn hoặc pizza hoặc mì Ý.",
          },
          {
            de: "Entweder regnet es morgen, oder die Sonne scheint.",
            vi: "Hoặc ngày mai trời mưa, hoặc trời nắng.",
          },
        ],
      },
      {
        rule: "'Weder...noch' = 'không...cũng không'. Verneint beide Aussagen.",
        ruleVi:
          "'Weder...noch' = 'không...cũng không'. Phủ định cả hai phát biểu.",
        examples: [
          {
            de: "Er trinkt weder Kaffee noch Tee.",
            vi: "Anh ấy không uống cà phê cũng không uống trà.",
          },
          {
            de: "Weder das Hotel noch das Restaurant war gut.",
            vi: "Cả khách sạn lẫn nhà hàng đều không tốt.",
          },
          {
            de: "Sie hat weder Zeit noch Geld für Urlaub.",
            vi: "Cô ấy không có thời gian cũng không có tiền để đi nghỉ.",
          },
        ],
      },
      {
        rule: "'Nicht nur...sondern auch' = 'không chỉ...mà còn'. Verstärkt eine Aussage.",
        ruleVi:
          "'Nicht nur...sondern auch' = 'không chỉ...mà còn'. Nhấn mạnh, bổ sung thông tin.",
        examples: [
          {
            de: "Er ist nicht nur klug, sondern auch lustig.",
            vi: "Anh ấy không chỉ thông minh mà còn hài hước.",
          },
          {
            de: "Nicht nur Studenten, sondern auch Berufstätige nutzen die App.",
            vi: "Không chỉ sinh viên mà cả người đi làm cũng dùng app.",
          },
          {
            de: "Sie kann nicht nur singen, sondern auch tanzen.",
            vi: "Cô ấy không chỉ hát được mà còn nhảy được.",
          },
        ],
      },
      {
        rule: "'Je...desto/umso' = 'càng...càng'. 'Je' + Komparativ im Nebensatz (Verb am Ende), 'desto/umso' + Komparativ im Hauptsatz (Verb an Position 2).",
        ruleVi:
          "'Je...desto/umso' = 'càng...càng'. 'Je' + so sánh hơn trong mệnh đề phụ (động từ cuối), 'desto/umso' + so sánh hơn trong mệnh đề chính (động từ vị trí 2).",
        examples: [
          {
            de: "Je mehr du übst, desto besser wirst du.",
            vi: "Càng luyện tập nhiều, bạn càng giỏi hơn.",
          },
          {
            de: "Je älter man wird, umso weiser wird man.",
            vi: "Càng già, người ta càng khôn ngoan.",
          },
          {
            de: "Je früher du aufstehst, desto mehr Zeit hast du.",
            vi: "Càng dậy sớm, bạn càng có nhiều thời gian.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Weder er trinkt Kaffee noch Tee.",
        correct: "Er trinkt weder Kaffee noch Tee.",
        explanation:
          "'Weder' steht vor dem ersten verneinten Element, nicht am Satzanfang vor dem Subjekt. / 'Weder' đứng trước phần tử bị phủ định đầu tiên.",
      },
      {
        wrong: "Je mehr du lernst, desto du besser wirst.",
        correct: "Je mehr du lernst, desto besser wirst du.",
        explanation:
          "Nach 'desto' kommt der Komparativ, dann das Verb, dann das Subjekt. / Sau 'desto' là so sánh hơn, rồi động từ, rồi chủ ngữ.",
      },
      {
        wrong: "Er ist nicht nur klug sondern auch lustig.",
        correct: "Er ist nicht nur klug, sondern auch lustig.",
        explanation:
          "Vor 'sondern' steht immer ein Komma. / Trước 'sondern' luôn có dấu phẩy.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng có liên từ kép tương tự: 'cả...lẫn', 'hoặc...hoặc', 'không...cũng không', 'không chỉ...mà còn', 'càng...càng'. Cấu trúc tiếng Việt khá giống về nghĩa nhưng trật tự từ đơn giản hơn. Điểm khó nhất là 'je...desto' vì tiếng Đức yêu cầu mệnh đề phụ (động từ cuối) sau 'je' và đảo ngữ sau 'desto'.",
    exercises: [
      {
        type: "fillBlank",
        question: "_____ du mehr liest, _____ besser wird dein Deutsch.",
        questionVi: "Càng đọc nhiều, tiếng Đức của bạn càng tốt hơn.",
        answer: "Je ... desto",
        explanation:
          "'Je...desto' = càng...càng. 'Je' im Nebensatz, 'desto' im Hauptsatz.",
      },
      {
        type: "multipleChoice",
        question: "Sie ist _____ freundlich _____ hilfsbereit.",
        questionVi: "Cô ấy vừa thân thiện vừa hay giúp đỡ.",
        options: [
          "sowohl...als auch",
          "weder...noch",
          "entweder...oder",
          "zwar...aber",
        ],
        answer: "sowohl...als auch",
        explanation:
          "Beide Eigenschaften sind positiv → 'sowohl...als auch'.",
      },
      {
        type: "transform",
        question:
          "Verbinde: Er spielt kein Tennis. Er spielt kein Golf. (weder...noch)",
        questionVi: "Nối hai câu bằng 'weder...noch'.",
        answer: "Er spielt weder Tennis noch Golf.",
        explanation:
          "'Weder...noch' verneint beide Aktivitäten in einem Satz.",
      },
      {
        type: "errorCorrection",
        question:
          "Je schneller du fährst, desto die Fahrt ist gefährlicher.",
        questionVi: "Tìm và sửa lỗi.",
        answer:
          "Je schneller du fährst, desto gefährlicher ist die Fahrt.",
        explanation:
          "Nach 'desto' kommt der Komparativ direkt, dann Verb, dann Subjekt.",
      },
      {
        type: "translate",
        question: "Anh ấy không chỉ nói tiếng Đức mà còn nói tiếng Pháp.",
        questionVi: "Dịch sang tiếng Đức.",
        answer:
          "Er spricht nicht nur Deutsch, sondern auch Französisch.",
        explanation:
          "'Nicht nur...sondern auch' = không chỉ...mà còn.",
      },
    ],
  },

  // ============================================================
  // TOPIC 5: Passiv mit Modalverben (Kapitel 5)
  // ============================================================
  {
    id: "b1-gram-05",
    title: "Passiv mit Modalverben",
    titleVi: "Câu bị động với động từ khiếm khuyết",
    chapter: 5,
    order: 1,
    level: "B1",
    explanation:
      "Das Passiv mit Modalverben kombiniert die Passivkonstruktion mit Modalverben (können, müssen, sollen, dürfen). Bildung: Modalverb (konjugiert) + Partizip II + werden (Infinitiv). Dies ist besonders häufig in formellen Texten, Regeln und Anweisungen.\n\nCâu bị động với động từ khiếm khuyết kết hợp cấu trúc bị động với các động từ khiếm khuyết (có thể, phải, nên, được phép). Cấu trúc: động từ khiếm khuyết (chia) + Partizip II + werden (nguyên thể). Rất phổ biến trong văn bản trang trọng, quy tắc và hướng dẫn.",
    rules: [
      {
        rule: "Präsens Passiv mit Modalverb: Subjekt + Modalverb (konjugiert) + Partizip II + werden.",
        ruleVi:
          "Bị động hiện tại với động từ khiếm khuyết: Chủ ngữ + động từ khiếm khuyết (chia) + Partizip II + werden.",
        examples: [
          {
            de: "Das Auto muss repariert werden.",
            vi: "Chiếc xe phải được sửa.",
          },
          {
            de: "Die Hausaufgaben müssen gemacht werden.",
            vi: "Bài tập về nhà phải được làm.",
          },
          {
            de: "Der Brief kann morgen geschickt werden.",
            vi: "Bức thư có thể được gửi ngày mai.",
          },
        ],
      },
      {
        rule: "Präteritum Passiv mit Modalverb: Subjekt + Modalverb (Präteritum) + Partizip II + werden.",
        ruleVi:
          "Bị động quá khứ với động từ khiếm khuyết: Chủ ngữ + động từ khiếm khuyết (Präteritum) + Partizip II + werden.",
        examples: [
          {
            de: "Das Fenster musste geschlossen werden.",
            vi: "Cửa sổ phải được đóng lại.",
          },
          {
            de: "Die Rechnung konnte nicht bezahlt werden.",
            vi: "Hóa đơn không thể được thanh toán.",
          },
          {
            de: "Der Patient sollte sofort operiert werden.",
            vi: "Bệnh nhân cần được phẫu thuật ngay.",
          },
        ],
      },
      {
        rule: "'Dürfen' im Passiv drückt Erlaubnis oder Verbot aus. Negation: 'darf nicht... werden' = Verbot.",
        ruleVi:
          "'Dürfen' trong bị động diễn tả sự cho phép hoặc cấm. Phủ định: 'darf nicht... werden' = bị cấm.",
        examples: [
          {
            de: "Hier darf nicht geraucht werden.",
            vi: "Ở đây không được hút thuốc.",
          },
          {
            de: "Das Dokument darf nicht kopiert werden.",
            vi: "Tài liệu không được sao chép.",
          },
          {
            de: "Die Blumen dürfen nicht gepflückt werden.",
            vi: "Hoa không được hái.",
          },
        ],
      },
      {
        rule: "'Sollen' im Passiv drückt eine Empfehlung oder Erwartung aus.",
        ruleVi:
          "'Sollen' trong bị động diễn tả lời khuyên hoặc kỳ vọng.",
        examples: [
          {
            de: "Das Formular soll bis Freitag ausgefüllt werden.",
            vi: "Đơn nên được điền xong trước thứ Sáu.",
          },
          {
            de: "Die Miete soll pünktlich bezahlt werden.",
            vi: "Tiền thuê nhà nên được trả đúng hạn.",
          },
        ],
      },
      {
        rule: "Im Nebensatz steht das Modalverb am Ende: ...dass das Auto repariert werden muss.",
        ruleVi:
          "Trong mệnh đề phụ, động từ khiếm khuyết đứng cuối: ...dass das Auto repariert werden muss.",
        examples: [
          {
            de: "Ich weiß, dass der Bericht geschrieben werden muss.",
            vi: "Tôi biết rằng báo cáo phải được viết.",
          },
          {
            de: "Er sagt, dass das Problem gelöst werden kann.",
            vi: "Anh ấy nói rằng vấn đề có thể được giải quyết.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Das Auto muss werden repariert.",
        correct: "Das Auto muss repariert werden.",
        explanation:
          "'Werden' steht am Ende als Infinitiv, Partizip II steht davor. / 'Werden' đứng cuối dạng nguyên thể, Partizip II đứng trước.",
      },
      {
        wrong: "Das Auto muss repariert geworden.",
        correct: "Das Auto muss repariert werden.",
        explanation:
          "Mit Modalverben verwendet man 'werden' (Infinitiv), nicht 'geworden'. / Với động từ khiếm khuyết dùng 'werden' (nguyên thể), không phải 'geworden'.",
      },
      {
        wrong: "Die Tür kann geöffnet wird.",
        correct: "Die Tür kann geöffnet werden.",
        explanation:
          "Nach dem Modalverb steht der Infinitiv 'werden', nicht die konjugierte Form 'wird'. / Sau động từ khiếm khuyết là nguyên thể 'werden', không phải dạng chia 'wird'.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt dùng 'được' hoặc 'bị' để tạo câu bị động: 'Xe phải được sửa' = 'Das Auto muss repariert werden.' Tiếng Việt phân biệt bị động tích cực ('được') và tiêu cực ('bị'), nhưng tiếng Đức không phân biệt. Điểm khó nhất là thứ tự từ: Partizip II + werden luôn đứng ở cuối câu (trong câu chính), và trong mệnh đề phụ thì Modalverb đứng cuối cùng.",
    exercises: [
      {
        type: "fillBlank",
        question: "Die Rechnung _____ sofort bezahlt _____.",
        questionVi: "Hóa đơn phải được thanh toán ngay.",
        answer: "muss ... werden",
        explanation:
          "Passiv + Modalverb: muss (konjugiert) + Partizip II + werden (Infinitiv am Ende).",
      },
      {
        type: "multipleChoice",
        question: "Hier _____ nicht geparkt werden.",
        questionVi: "Ở đây không được đậu xe.",
        options: ["muss", "darf", "soll", "will"],
        answer: "darf",
        explanation:
          "Verbot = 'darf nicht'. 'Hier darf nicht geparkt werden' = Cấm đậu xe ở đây.",
      },
      {
        type: "transform",
        question:
          "Aktiv → Passiv: Man muss die Fenster putzen.",
        questionVi: "Chuyển sang bị động.",
        answer: "Die Fenster müssen geputzt werden.",
        explanation:
          "'Man muss' → Subjekt wird Nominativ + 'müssen' (Plural) + Partizip II + werden.",
      },
      {
        type: "errorCorrection",
        question: "Der Brief kann morgen geschickt geworden.",
        questionVi: "Tìm và sửa lỗi.",
        answer: "Der Brief kann morgen geschickt werden.",
        explanation:
          "Mit Modalverb braucht man 'werden' (Infinitiv), nicht 'geworden'.",
      },
      {
        type: "translate",
        question: "Tài liệu này không được sao chép.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Dieses Dokument darf nicht kopiert werden.",
        explanation:
          "Verbot: 'darf nicht' + Partizip II + 'werden'.",
      },
    ],
  },

  // ============================================================
  // TOPIC 6: Konjunktiv I / Indirekte Rede (Kapitel 6)
  // ============================================================
  {
    id: "b1-gram-06",
    title: "Konjunktiv I / Indirekte Rede",
    titleVi: "Konjunktiv I / Lời nói gián tiếp",
    chapter: 6,
    order: 1,
    level: "B1",
    explanation:
      "Der Konjunktiv I wird hauptsächlich für die indirekte Rede verwendet – wenn man wiedergibt, was jemand anderes gesagt hat. Bildung: Verbstamm + Konjunktiv-Endungen (-e, -est, -e, -en, -et, -en). In der Alltagssprache wird oft Konjunktiv II oder 'würde' benutzt.\n\nKonjunktiv I chủ yếu dùng cho lời nói gián tiếp – khi thuật lại lời người khác nói. Cách tạo: gốc động từ + đuôi Konjunktiv (-e, -est, -e, -en, -et, -en). Trong đời thường, người Đức thường dùng Konjunktiv II hoặc 'würde'.",
    rules: [
      {
        rule: "Bildung Konjunktiv I: Verbstamm + -e, -est, -e, -en, -et, -en. 'Sein' ist unregelmäßig: ich sei, du seist, er sei, wir seien, ihr seiet, sie seien.",
        ruleVi:
          "Cách tạo Konjunktiv I: Gốc động từ + -e, -est, -e, -en, -et, -en. 'Sein' bất quy tắc: ich sei, du seist, er sei, wir seien, ihr seiet, sie seien.",
        examples: [
          {
            de: "er komme, er habe, er könne, er müsse",
            vi: "anh ấy đến (gián tiếp), anh ấy có, anh ấy có thể, anh ấy phải",
          },
          {
            de: "Er sagte, er sei krank.",
            vi: "Anh ấy nói anh ấy bị ốm.",
          },
          {
            de: "Sie behauptete, sie habe nichts gewusst.",
            vi: "Cô ấy khẳng định cô ấy không biết gì.",
          },
        ],
      },
      {
        rule: "Indirekte Rede: Einleitungsverb (sagen, berichten, meinen...) + Nebensatz mit 'dass' oder ohne 'dass' (dann Verb an Position 2).",
        ruleVi:
          "Lời nói gián tiếp: Động từ dẫn nhập (nói, báo cáo, cho rằng...) + mệnh đề phụ với 'dass' hoặc không có 'dass' (động từ ở vị trí 2).",
        examples: [
          {
            de: "Er sagt, dass er morgen komme. / Er sagt, er komme morgen.",
            vi: "Anh ấy nói rằng anh ấy sẽ đến ngày mai.",
          },
          {
            de: "Sie berichtete, sie habe den Unfall gesehen.",
            vi: "Cô ấy báo cáo rằng cô ấy đã nhìn thấy vụ tai nạn.",
          },
          {
            de: "Der Arzt meinte, der Patient solle mehr Wasser trinken.",
            vi: "Bác sĩ nói rằng bệnh nhân nên uống nhiều nước hơn.",
          },
        ],
      },
      {
        rule: "Wenn Konjunktiv I = Indikativ (z.B. 'ich komme' = 'ich komme'), benutzt man Konjunktiv II als Ersatz (ich käme).",
        ruleVi:
          "Khi Konjunktiv I giống Indikativ (ví dụ 'ich komme' = 'ich komme'), dùng Konjunktiv II thay thế (ich käme).",
        examples: [
          {
            de: "Sie sagten, sie hätten keine Zeit. (nicht: sie haben)",
            vi: "Họ nói họ không có thời gian. (hätten thay cho haben)",
          },
          {
            de: "Er sagte, ich solle pünktlich kommen. (nicht: ich soll)",
            vi: "Anh ấy nói tôi nên đến đúng giờ.",
          },
        ],
      },
      {
        rule: "Konjunktiv I Vergangenheit: habe/sei + Partizip II.",
        ruleVi:
          "Konjunktiv I quá khứ: habe/sei + Partizip II.",
        examples: [
          {
            de: "Er sagte, er habe das Buch gelesen.",
            vi: "Anh ấy nói anh ấy đã đọc cuốn sách.",
          },
          {
            de: "Sie behauptete, sie sei pünktlich gewesen.",
            vi: "Cô ấy khẳng định cô ấy đã đúng giờ.",
          },
        ],
      },
      {
        rule: "In der gesprochenen Sprache und informellen Texten wird Konjunktiv I oft durch 'würde + Infinitiv' oder Indikativ ersetzt.",
        ruleVi:
          "Trong tiếng nói hàng ngày và văn bản không trang trọng, Konjunktiv I thường được thay bằng 'würde + nguyên thể' hoặc Indikativ.",
        examples: [
          {
            de: "Formal: Er sagte, er komme morgen. → Informal: Er hat gesagt, er kommt morgen.",
            vi: "Trang trọng: Anh ấy nói anh ấy đến ngày mai. → Thường: Anh ấy nói anh ấy đến ngày mai.",
          },
          {
            de: "Zeitung: Die Regierung erklärte, sie werde Maßnahmen ergreifen.",
            vi: "Báo chí: Chính phủ tuyên bố sẽ thực hiện các biện pháp.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Er sagte, er ist krank.",
        correct: "Er sagte, er sei krank.",
        explanation:
          "In der indirekten Rede verwendet man Konjunktiv I (sei), nicht Indikativ (ist) – besonders in formellen Texten. / Trong lời nói gián tiếp dùng Konjunktiv I (sei), không phải Indikativ (ist).",
      },
      {
        wrong: "Sie sagten, sie seien keine Zeit gehabt.",
        correct: "Sie sagten, sie hätten keine Zeit gehabt.",
        explanation:
          "Für Vergangenheit mit 'haben': Konjunktiv I von 'haben' (→ hätten, weil 'sie haben' = Indikativ) + Partizip II. / Quá khứ với 'haben': dùng hätten + Partizip II.",
      },
      {
        wrong: "Er sagte, er habe krank.",
        correct: "Er sagte, er sei krank.",
        explanation:
          "'Krank sein' → Konjunktiv I von 'sein': 'sei'. 'Haben' passt nicht zu Adjektiven. / 'Krank sein' → Konjunktiv I của 'sein': 'sei'.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt không thay đổi dạng động từ cho lời nói gián tiếp. Ví dụ: 'Anh ấy nói: Tôi ốm' → 'Anh ấy nói anh ấy ốm.' Động từ 'ốm' không đổi. Tiếng Đức bắt buộc đổi sang Konjunktiv I (sei) trong văn phong trang trọng. Konjunktiv I chủ yếu xuất hiện trong báo chí, tin tức, và văn bản học thuật. Trong giao tiếp hàng ngày, người Đức thường dùng 'Er hat gesagt, er ist krank' (Indikativ).",
    exercises: [
      {
        type: "transform",
        question:
          "Direkte → Indirekte Rede: Maria sagt: 'Ich bin müde.'",
        questionVi: "Chuyển sang lời nói gián tiếp.",
        answer: "Maria sagt, sie sei müde.",
        explanation:
          "'Ich bin' → 'sie sei' (Konjunktiv I von 'sein').",
      },
      {
        type: "multipleChoice",
        question: "Der Lehrer sagte, die Schüler _____ mehr lernen.",
        questionVi: "Thầy giáo nói học sinh nên học nhiều hơn.",
        options: ["sollen", "sollten", "solltet", "solle"],
        answer: "sollten",
        explanation:
          "'Die Schüler sollen' = Indikativ, daher Konjunktiv II 'sollten' als Ersatz.",
      },
      {
        type: "fillBlank",
        question:
          "Er behauptete, er _____ das Geld nicht genommen. (haben, Konj. I)",
        questionVi: "Anh ấy khẳng định anh ấy không lấy tiền.",
        answer: "habe",
        explanation:
          "Konjunktiv I von 'haben' für 3. Person Singular: habe.",
      },
      {
        type: "errorCorrection",
        question: "Sie sagte, sie habe nach Berlin gefahren.",
        questionVi: "Tìm và sửa lỗi.",
        answer: "Sie sagte, sie sei nach Berlin gefahren.",
        explanation:
          "'Fahren' verwendet 'sein' als Hilfsverb → Konjunktiv I: 'sei gefahren', nicht 'habe gefahren'.",
      },
      {
        type: "translate",
        question:
          "Bác sĩ nói rằng tôi nên nghỉ ngơi nhiều hơn. (formal)",
        questionVi: "Dịch sang tiếng Đức (formal).",
        answer:
          "Der Arzt sagte, ich solle mich mehr ausruhen.",
        explanation:
          "'Sollen' Konjunktiv I: solle (ich solle = Konjunktiv I).",
      },
    ],
  },

  // ============================================================
  // TOPIC 7: Nominalisierung & Verbalisierung (Kapitel 7)
  // ============================================================
  {
    id: "b1-gram-07",
    title: "Nominalisierung & Verbalisierung",
    titleVi: "Danh từ hóa & Động từ hóa",
    chapter: 7,
    order: 1,
    level: "B1",
    explanation:
      "Nominalisierung bedeutet, ein Verb oder Adjektiv in ein Nomen umzuwandeln. Verbalisierung ist das Gegenteil. Nominalisierungen machen Texte formeller und kompakter, sind aber in der Alltagssprache weniger üblich.\n\nDanh từ hóa nghĩa là biến động từ hoặc tính từ thành danh từ. Động từ hóa là ngược lại. Danh từ hóa làm văn bản trang trọng và ngắn gọn hơn, nhưng ít dùng trong giao tiếp hàng ngày.",
    rules: [
      {
        rule: "Verb → Nomen: Oft durch Suffixe wie -ung, -tion, -heit, -keit, -nis, -e, oder durch den Infinitiv als Nomen (das Lesen, das Essen).",
        ruleVi:
          "Động từ → Danh từ: Thường qua hậu tố -ung, -tion, -heit, -keit, -nis, -e, hoặc dùng nguyên thể làm danh từ (das Lesen, das Essen).",
        examples: [
          {
            de: "entwickeln → die Entwicklung",
            vi: "phát triển → sự phát triển",
          },
          {
            de: "prüfen → die Prüfung",
            vi: "kiểm tra → bài kiểm tra/cuộc kiểm tra",
          },
          {
            de: "lesen → das Lesen (Infinitiv als Nomen)",
            vi: "đọc → việc đọc",
          },
        ],
      },
      {
        rule: "Adjektiv → Nomen: Oft durch -heit, -keit, -igkeit: schön → die Schönheit, möglich → die Möglichkeit.",
        ruleVi:
          "Tính từ → Danh từ: Thường qua -heit, -keit, -igkeit: đẹp → vẻ đẹp, khả thi → khả năng.",
        examples: [
          {
            de: "krank → die Krankheit",
            vi: "ốm → bệnh tật",
          },
          {
            de: "wichtig → die Wichtigkeit",
            vi: "quan trọng → tầm quan trọng",
          },
          {
            de: "frei → die Freiheit",
            vi: "tự do (adj.) → sự tự do (n.)",
          },
        ],
      },
      {
        rule: "Nominalisierung in Sätzen: Verb-Satz wird zu Nomen-Satz mit Präposition. 'Weil er krank ist' → 'Wegen seiner Krankheit'.",
        ruleVi:
          "Danh từ hóa trong câu: Câu có động từ biến thành câu có danh từ với giới từ. 'Vì anh ấy ốm' → 'Vì bệnh của anh ấy'.",
        examples: [
          {
            de: "Weil es stark regnet → Wegen des starken Regens",
            vi: "Vì trời mưa to → Vì cơn mưa to",
          },
          {
            de: "Bevor er abreist → Vor seiner Abreise",
            vi: "Trước khi anh ấy khởi hành → Trước chuyến đi của anh ấy",
          },
          {
            de: "Während sie studiert → Während ihres Studiums",
            vi: "Trong khi cô ấy học → Trong thời gian học của cô ấy",
          },
        ],
      },
      {
        rule: "Verbalisierung: Nomen-Ausdruck zurück in Verb-Satz. 'Trotz seiner Müdigkeit' → 'Obwohl er müde ist'.",
        ruleVi:
          "Động từ hóa: Biến cụm danh từ thành câu có động từ. 'Mặc dù sự mệt mỏi của anh ấy' → 'Mặc dù anh ấy mệt'.",
        examples: [
          {
            de: "Trotz des schlechten Wetters → Obwohl das Wetter schlecht ist",
            vi: "Mặc dù thời tiết xấu → Mặc dù thời tiết xấu",
          },
          {
            de: "Nach seiner Ankunft → Nachdem er angekommen ist",
            vi: "Sau khi anh ấy đến → Sau khi anh ấy đã đến",
          },
        ],
      },
      {
        rule: "Häufige Entsprechungen: weil → wegen (+Gen.), bevor → vor (+Dat.), nachdem → nach (+Dat.), während → während (+Gen.), obwohl → trotz (+Gen.).",
        ruleVi:
          "Các cặp tương ứng thường gặp: weil → wegen (+Gen.), bevor → vor (+Dat.), nachdem → nach (+Dat.), während → während (+Gen.), obwohl → trotz (+Gen.).",
        examples: [
          {
            de: "Weil er fleißig ist → Wegen seines Fleißes",
            vi: "Vì anh ấy chăm chỉ → Vì sự chăm chỉ của anh ấy",
          },
          {
            de: "Obwohl er krank ist → Trotz seiner Krankheit",
            vi: "Mặc dù anh ấy ốm → Mặc dù bệnh của anh ấy",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Wegen er krank ist, bleibt er zu Hause.",
        correct: "Wegen seiner Krankheit bleibt er zu Hause. / Weil er krank ist, bleibt er zu Hause.",
        explanation:
          "'Wegen' braucht ein Nomen (+ Genitiv), nicht einen ganzen Satz. Für einen Nebensatz: 'weil'. / 'Wegen' cần danh từ (+ Genitiv), không phải một câu. Dùng 'weil' cho mệnh đề phụ.",
      },
      {
        wrong: "Die Entwickelung der Technologie ist schnell.",
        correct: "Die Entwicklung der Technologie ist schnell.",
        explanation:
          "Das Nomen von 'entwickeln' ist 'Entwicklung' (ohne 'e' vor -lung). / Danh từ của 'entwickeln' là 'Entwicklung'.",
      },
      {
        wrong: "Trotz er müde ist, arbeitet er weiter.",
        correct: "Trotz seiner Müdigkeit arbeitet er weiter.",
        explanation:
          "'Trotz' + Nomen (Genitiv), nicht + Satz. Für Nebensatz: 'Obwohl er müde ist'. / 'Trotz' + danh từ (Genitiv), không phải + câu.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng có danh từ hóa nhưng đơn giản hơn: thêm 'sự', 'việc', 'cuộc' trước động từ (sự phát triển, việc học, cuộc thi). Không cần thay đổi dạng từ như tiếng Đức (-ung, -heit, -keit). Điểm khó cho người Việt: (1) phải nhớ hậu tố đúng, (2) phải dùng đúng giới từ kèm theo (wegen + Gen., trotz + Gen., vor + Dat.).",
    exercises: [
      {
        type: "transform",
        question:
          "Nominalisierung: Weil er pünktlich ist, bekommt er den Job.",
        questionVi: "Danh từ hóa câu này.",
        answer:
          "Wegen seiner Pünktlichkeit bekommt er den Job.",
        explanation:
          "'Weil' → 'wegen' + Genitiv. 'Pünktlich' → 'die Pünktlichkeit'.",
      },
      {
        type: "multipleChoice",
        question: "_____ des starken Regens blieben wir zu Hause.",
        questionVi: "Vì mưa to, chúng tôi ở nhà.",
        options: ["Weil", "Wegen", "Trotz", "Obwohl"],
        answer: "Wegen",
        explanation:
          "'Wegen' + Nomen (Genitiv) = vì lý do gì. + 'des starken Regens'.",
      },
      {
        type: "fillBlank",
        question: "prüfen → die _____; entscheiden → die _____",
        questionVi: "Hãy viết dạng danh từ.",
        answer: "Prüfung; Entscheidung",
        explanation:
          "Beide Verben bilden Nomen mit '-ung': prüfen → Prüfung, entscheiden → Entscheidung.",
      },
      {
        type: "transform",
        question:
          "Verbalisierung: Trotz seiner Krankheit ging er zur Arbeit.",
        questionVi: "Động từ hóa câu này.",
        answer:
          "Obwohl er krank war, ging er zur Arbeit.",
        explanation:
          "'Trotz' + Nomen → 'obwohl' + Nebensatz. 'Krankheit' → 'krank sein'.",
      },
      {
        type: "errorCorrection",
        question: "Wegen des schlecht Wetters bleiben wir zu Hause.",
        questionVi: "Tìm và sửa lỗi.",
        answer: "Wegen des schlechten Wetters bleiben wir zu Hause.",
        explanation:
          "Nach 'des' (Genitiv) braucht das Adjektiv die Endung '-en': schlechten.",
      },
    ],
  },

  // ============================================================
  // TOPIC 8: Partizip I und II als Adjektiv (Kapitel 8)
  // ============================================================
  {
    id: "b1-gram-08",
    title: "Partizip I und II als Adjektiv",
    titleVi: "Phân từ I và II dùng như tính từ",
    chapter: 8,
    order: 1,
    level: "B1",
    explanation:
      "Partizip I (Infinitiv + -d: spielend, lachend) und Partizip II (ge- + Stamm + -t/-en: gespielt, gelesen) können als Adjektive vor Nomen verwendet werden. Partizip I hat aktive Bedeutung (laufend = der gerade läuft), Partizip II hat passive Bedeutung (geöffnet = wurde geöffnet).\n\nPhân từ I (nguyên thể + -d: spielend, lachend) và Phân từ II (ge- + gốc + -t/-en: gespielt, gelesen) có thể dùng như tính từ trước danh từ. Phân từ I mang nghĩa chủ động (đang chạy), Phân từ II mang nghĩa bị động (đã được mở).",
    rules: [
      {
        rule: "Partizip I = Infinitiv + d: laufen → laufend, schlafen → schlafend. Es beschreibt eine gleichzeitige, aktive Handlung.",
        ruleVi:
          "Phân từ I = Nguyên thể + d: laufen → laufend, schlafen → schlafend. Nó mô tả hành động đang xảy ra, chủ động.",
        examples: [
          {
            de: "Das spielende Kind lacht laut. (= Das Kind, das spielt, ...)",
            vi: "Đứa trẻ đang chơi cười to.",
          },
          {
            de: "Der bellende Hund macht mir Angst.",
            vi: "Con chó đang sủa làm tôi sợ.",
          },
          {
            de: "Die wartenden Passagiere wurden ungeduldig.",
            vi: "Các hành khách đang chờ trở nên mất kiên nhẫn.",
          },
        ],
      },
      {
        rule: "Partizip II als Adjektiv hat passive Bedeutung: Das geöffnete Fenster (= Das Fenster, das geöffnet wurde).",
        ruleVi:
          "Phân từ II dùng như tính từ mang nghĩa bị động: Cửa sổ đã được mở.",
        examples: [
          {
            de: "Das gekochte Ei ist fertig.",
            vi: "Quả trứng đã luộc xong rồi.",
          },
          {
            de: "Der geschriebene Brief liegt auf dem Tisch.",
            vi: "Bức thư đã được viết nằm trên bàn.",
          },
          {
            de: "Die gebrauchten Bücher sind billiger.",
            vi: "Sách đã qua sử dụng rẻ hơn.",
          },
        ],
      },
      {
        rule: "Als Adjektiv vor Nomen bekommen Partizipien Adjektivendungen: der laufende Mann, ein laufender Mann, laufende Männer.",
        ruleVi:
          "Khi đứng trước danh từ, phân từ nhận đuôi tính từ: der laufende Mann, ein laufender Mann, laufende Männer.",
        examples: [
          {
            de: "Ich höre die singende Frau. (Akk. fem. nach best. Art. → -e)",
            vi: "Tôi nghe người phụ nữ đang hát.",
          },
          {
            de: "Er kauft ein gebrauchtes Auto. (Akk. neutr. nach unbest. Art. → -es)",
            vi: "Anh ấy mua một chiếc xe đã qua sử dụng.",
          },
          {
            de: "Mit lächelndem Gesicht begrüßte sie mich. (Dat. neutr. ohne Art. → -em)",
            vi: "Với khuôn mặt mỉm cười, cô ấy chào tôi.",
          },
        ],
      },
      {
        rule: "Partizip I vs. II: Partizip I = aktiv/gleichzeitig, Partizip II = passiv/abgeschlossen. 'Die kochende Suppe' (= Suppe kocht gerade) vs. 'Die gekochte Suppe' (= Suppe wurde gekocht, ist fertig).",
        ruleVi:
          "Phân từ I vs. II: Phân từ I = chủ động/đang diễn ra, Phân từ II = bị động/đã hoàn thành. 'Nồi canh đang sôi' vs. 'Nồi canh đã nấu xong'.",
        examples: [
          {
            de: "Das brennende Haus (= Haus brennt) vs. Das verbrannte Haus (= Haus ist verbrannt)",
            vi: "Ngôi nhà đang cháy vs. Ngôi nhà đã cháy",
          },
          {
            de: "Die weinende Frau (= Frau weint) vs. Die gewonnene Frau (passt nicht!)",
            vi: "Người phụ nữ đang khóc (Phân từ I phù hợp vì chủ động)",
          },
        ],
      },
      {
        rule: "Partizipien können auch erweitert werden: 'Der seit Stunden im Regen wartende Mann' = 'Der Mann, der seit Stunden im Regen wartet'.",
        ruleVi:
          "Phân từ có thể được mở rộng: 'Người đàn ông đợi dưới mưa hàng giờ' – cả cụm đứng trước danh từ.",
        examples: [
          {
            de: "Die gut bezahlte Arbeit ist selten.",
            vi: "Công việc được trả lương tốt hiếm có.",
          },
          {
            de: "Der frisch gebackene Kuchen duftet herrlich.",
            vi: "Cái bánh mới nướng xong thơm tuyệt vời.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Das geöffnende Fenster lässt frische Luft herein.",
        correct: "Das geöffnete Fenster lässt frische Luft herein.",
        explanation:
          "Das Fenster wurde geöffnet (passiv) → Partizip II: geöffnet. Partizip I (öffnend) wäre aktiv. / Cửa sổ đã được mở (bị động) → Phân từ II.",
      },
      {
        wrong: "Der geschlafen Mann liegt auf dem Sofa.",
        correct: "Der schlafende Mann liegt auf dem Sofa.",
        explanation:
          "Der Mann schläft gerade (aktiv, gleichzeitig) → Partizip I: schlafend. / Người đàn ông đang ngủ (chủ động) → Phân từ I.",
      },
      {
        wrong: "Die kochte Suppe schmeckt gut.",
        correct: "Die gekochte Suppe schmeckt gut.",
        explanation:
          "Partizip II braucht die Vorsilbe 'ge-': gekocht, nicht 'kocht'. / Phân từ II cần tiền tố 'ge-': gekocht.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng dùng phân từ nhưng đơn giản hơn: 'đang' (chủ động/hiện tại) và 'đã' (hoàn thành/bị động). 'Đứa trẻ đang chơi' = 'das spielende Kind', 'Trứng đã luộc' = 'das gekochte Ei'. Điểm khó: (1) trong tiếng Đức, phân từ đứng TRƯỚC danh từ và nhận đuôi tính từ, (2) cần phân biệt rõ Partizip I (chủ động) và Partizip II (bị động).",
    exercises: [
      {
        type: "multipleChoice",
        question: "Der _____ Hund bellt laut. (schlafen/bellen)",
        questionVi: "Con chó đang sủa to.",
        options: ["bellende", "gebellte", "bellte", "gebellende"],
        answer: "bellende",
        explanation:
          "Der Hund bellt gerade (aktiv) → Partizip I: bellend + Adjektivendung '-e': bellende.",
      },
      {
        type: "fillBlank",
        question:
          "Die _____ (reparieren) Maschine funktioniert wieder.",
        questionVi: "Máy đã được sửa hoạt động lại.",
        answer: "reparierte",
        explanation:
          "Die Maschine wurde repariert (passiv) → Partizip II: repariert + '-e': reparierte.",
      },
      {
        type: "transform",
        question:
          "Schreibe mit Partizip: Das Kind, das weint, sucht seine Mutter.",
        questionVi: "Viết lại bằng phân từ.",
        answer: "Das weinende Kind sucht seine Mutter.",
        explanation:
          "'Das Kind, das weint' = aktiv → Partizip I: weinend + '-e': weinende.",
      },
      {
        type: "errorCorrection",
        question: "Die schlafende Suppe steht auf dem Herd.",
        questionVi: "Tìm và sửa lỗi.",
        answer: "Die kochende Suppe steht auf dem Herd.",
        explanation:
          "Suppe schläft nicht! Suppe kocht → Partizip I: kochend + '-e': kochende.",
      },
      {
        type: "translate",
        question: "Những cuốn sách đã qua sử dụng rẻ hơn.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Die gebrauchten Bücher sind billiger.",
        explanation:
          "Passiv (đã qua sử dụng) → Partizip II: gebraucht + '-en' (Nom. Plural nach best. Art.).",
      },
    ],
  },

  // ============================================================
  // TOPIC 9: Konnektoren & Textzusammenhang (Kapitel 9)
  // ============================================================
  {
    id: "b1-gram-09",
    title: "Konnektoren & Textzusammenhang",
    titleVi: "Từ nối & liên kết văn bản",
    chapter: 9,
    order: 1,
    level: "B1",
    explanation:
      "Konnektoren verbinden Sätze und schaffen Textzusammenhang. Es gibt verschiedene Typen: Hauptsatz-Konnektoren (Position 0: und, aber, denn, oder, sondern), Adverbien (Position 1: deshalb, trotzdem, außerdem, stattdessen) und Nebensatz-Konnektoren (Verb am Ende: weil, obwohl, damit, falls).\n\nTừ nối liên kết các câu và tạo mạch văn. Có nhiều loại: liên từ chính (vị trí 0), trạng từ nối (vị trí 1, đảo ngữ), và liên từ phụ (động từ cuối).",
    rules: [
      {
        rule: "Hauptsatz-Konnektoren (Position 0): und, aber, denn, oder, sondern – keine Veränderung der Wortstellung.",
        ruleVi:
          "Liên từ chính (vị trí 0): und, aber, denn, oder, sondern – không thay đổi trật tự từ.",
        examples: [
          {
            de: "Ich bin müde, aber ich muss noch arbeiten.",
            vi: "Tôi mệt nhưng tôi vẫn phải làm việc.",
          },
          {
            de: "Er kommt nicht, denn er ist krank.",
            vi: "Anh ấy không đến vì anh ấy ốm.",
          },
          {
            de: "Sie ist nicht dumm, sondern faul.",
            vi: "Cô ấy không ngu mà lười.",
          },
        ],
      },
      {
        rule: "Adverbiale Konnektoren (Position 1): deshalb, trotzdem, außerdem, stattdessen, folglich, dennoch – danach kommt das Verb.",
        ruleVi:
          "Trạng từ nối (vị trí 1): deshalb, trotzdem, außerdem, stattdessen, folglich, dennoch – sau đó là động từ (đảo ngữ).",
        examples: [
          {
            de: "Es regnet. Deshalb bleibe ich zu Hause.",
            vi: "Trời mưa. Vì vậy tôi ở nhà.",
          },
          {
            de: "Er ist krank. Trotzdem geht er zur Arbeit.",
            vi: "Anh ấy ốm. Tuy vậy anh ấy vẫn đi làm.",
          },
          {
            de: "Das Essen war schlecht. Außerdem war es teuer.",
            vi: "Đồ ăn dở. Ngoài ra nó còn đắt.",
          },
        ],
      },
      {
        rule: "Nebensatz-Konnektoren (Verb am Ende): weil, obwohl, damit, falls, wenn, als, nachdem, bevor, während, seit, bis.",
        ruleVi:
          "Liên từ phụ (động từ cuối): weil (vì), obwohl (mặc dù), damit (để), falls (nếu), wenn (khi/nếu), als (khi), nachdem (sau khi), bevor (trước khi), während (trong khi), seit (từ khi), bis (cho đến khi).",
        examples: [
          {
            de: "Ich bleibe zu Hause, weil es regnet.",
            vi: "Tôi ở nhà vì trời mưa.",
          },
          {
            de: "Obwohl er krank ist, geht er zur Arbeit.",
            vi: "Mặc dù anh ấy ốm, anh ấy vẫn đi làm.",
          },
          {
            de: "Falls du Fragen hast, ruf mich an.",
            vi: "Nếu bạn có câu hỏi, hãy gọi cho tôi.",
          },
        ],
      },
      {
        rule: "Kausale Konnektoren: weil/da (Nebensatz), denn (Hauptsatz), deshalb/daher/deswegen (Adverb). Alle drücken 'Grund' aus.",
        ruleVi:
          "Từ nối nguyên nhân: weil/da (mệnh đề phụ), denn (mệnh đề chính), deshalb/daher/deswegen (trạng từ). Tất cả diễn tả lý do.",
        examples: [
          {
            de: "Weil es kalt ist, ziehe ich eine Jacke an.",
            vi: "Vì trời lạnh, tôi mặc áo khoác.",
          },
          {
            de: "Es ist kalt, deshalb ziehe ich eine Jacke an.",
            vi: "Trời lạnh, vì vậy tôi mặc áo khoác.",
          },
          {
            de: "Es ist kalt, denn der Winter kommt.",
            vi: "Trời lạnh vì mùa đông đến.",
          },
        ],
      },
      {
        rule: "Konzessive Konnektoren: obwohl/obgleich (Nebensatz), trotzdem/dennoch (Adverb). Drücken Widerspruch aus.",
        ruleVi:
          "Từ nối nhượng bộ: obwohl/obgleich (mệnh đề phụ), trotzdem/dennoch (trạng từ). Diễn tả sự mâu thuẫn.",
        examples: [
          {
            de: "Obwohl er reich ist, lebt er bescheiden.",
            vi: "Mặc dù anh ấy giàu, anh ấy sống giản dị.",
          },
          {
            de: "Er ist reich. Trotzdem lebt er bescheiden.",
            vi: "Anh ấy giàu. Tuy vậy anh ấy sống giản dị.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Es regnet, deshalb ich bleibe zu Hause.",
        correct: "Es regnet, deshalb bleibe ich zu Hause.",
        explanation:
          "'Deshalb' steht auf Position 1, danach kommt das Verb auf Position 2: deshalb bleibe ich. / 'Deshalb' ở vị trí 1, sau đó động từ ở vị trí 2.",
      },
      {
        wrong: "Weil es regnet, deshalb bleibe ich zu Hause.",
        correct: "Weil es regnet, bleibe ich zu Hause. / Es regnet, deshalb bleibe ich zu Hause.",
        explanation:
          "Man kann nicht 'weil' und 'deshalb' im gleichen Satz verwenden – sie haben die gleiche Funktion. / Không dùng 'weil' và 'deshalb' cùng lúc.",
      },
      {
        wrong: "Obwohl er ist krank, geht er zur Arbeit.",
        correct: "Obwohl er krank ist, geht er zur Arbeit.",
        explanation:
          "Nach 'obwohl' (Nebensatz) steht das Verb am Ende. / Sau 'obwohl' (mệnh đề phụ) động từ đứng cuối.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt cũng có nhiều từ nối tương tự: 'vì/bởi vì' (weil), 'vì vậy/cho nên' (deshalb), 'mặc dù' (obwohl), 'tuy vậy' (trotzdem), 'ngoài ra' (außerdem). Tuy nhiên, trật tự từ tiếng Việt không thay đổi. Điểm khó nhất: (1) phân biệt vị trí 0, 1 và mệnh đề phụ, (2) nhớ đảo ngữ sau trạng từ nối (deshalb bleibe ICH, không phải deshalb ich bleibe).",
    exercises: [
      {
        type: "multipleChoice",
        question:
          "Er hat Kopfschmerzen, _____ nimmt er eine Tablette.",
        questionVi: "Anh ấy đau đầu, vì vậy anh ấy uống thuốc.",
        options: ["weil", "deshalb", "obwohl", "trotzdem"],
        answer: "deshalb",
        explanation:
          "'Deshalb' (vì vậy) verbindet Ursache und Folge als Adverb auf Position 1.",
      },
      {
        type: "fillBlank",
        question:
          "_____ er müde ist, kann er nicht einschlafen.",
        questionVi: "Mặc dù anh ấy mệt, anh ấy không ngủ được.",
        answer: "Obwohl",
        explanation:
          "'Obwohl' (mặc dù) leitet einen Nebensatz ein (Verb am Ende: ist).",
      },
      {
        type: "transform",
        question:
          "Zwei Sätze → ein Satz: Er ist krank. Er geht trotzdem zur Arbeit. (obwohl)",
        questionVi: "Nối hai câu bằng 'obwohl'.",
        answer: "Obwohl er krank ist, geht er zur Arbeit.",
        explanation:
          "'Obwohl' + Nebensatz (Verb am Ende), Komma, Hauptsatz (Verb Position 2).",
      },
      {
        type: "errorCorrection",
        question:
          "Weil es regnet, deshalb nehme ich einen Regenschirm mit.",
        questionVi: "Tìm và sửa lỗi.",
        answer:
          "Weil es regnet, nehme ich einen Regenschirm mit.",
        explanation:
          "'Weil' und 'deshalb' zusammen ist doppelt. Nur eins verwenden.",
      },
      {
        type: "translate",
        question:
          "Ngoài ra, cô ấy còn nói được tiếng Pháp.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Außerdem spricht sie Französisch.",
        explanation:
          "'Außerdem' (ngoài ra) steht auf Position 1, Verb auf Position 2: spricht sie.",
      },
    ],
  },

  // ============================================================
  // TOPIC 10: Komplexe Satzstrukturen (Kapitel 10)
  // ============================================================
  {
    id: "b1-gram-10",
    title: "Komplexe Satzstrukturen",
    titleVi: "Cấu trúc câu phức tạp",
    chapter: 10,
    order: 1,
    level: "B1",
    explanation:
      "In B1 lernt man, mehrere Nebensätze zu kombinieren und komplexe Satzgefüge zu bilden. Dazu gehören Relativsätze, indirekte Fragesätze, Konditionalsätze und die Kombination verschiedener Nebensatztypen.\n\nỞ B1, bạn học cách kết hợp nhiều mệnh đề phụ và tạo cấu trúc câu phức tạp. Bao gồm mệnh đề quan hệ, câu hỏi gián tiếp, câu điều kiện, và sự kết hợp các loại mệnh đề phụ khác nhau.",
    rules: [
      {
        rule: "Relativsätze: Das Relativpronomen richtet sich nach Genus/Numerus des Bezugsworts und nach dem Kasus im Relativsatz.",
        ruleVi:
          "Mệnh đề quan hệ: Đại từ quan hệ phụ thuộc vào giống/số của danh từ được bổ nghĩa và cách trong mệnh đề quan hệ.",
        examples: [
          {
            de: "Der Mann, der dort steht, ist mein Lehrer. (Nom. mask.)",
            vi: "Người đàn ông đứng ở đó là thầy giáo tôi.",
          },
          {
            de: "Die Frau, die ich gestern getroffen habe, ist Ärztin. (Akk. fem.)",
            vi: "Người phụ nữ mà tôi gặp hôm qua là bác sĩ.",
          },
          {
            de: "Das Kind, dem ich geholfen habe, war dankbar. (Dat. neutr.)",
            vi: "Đứa trẻ mà tôi đã giúp đỡ rất biết ơn.",
          },
        ],
      },
      {
        rule: "Indirekte Fragesätze: Einleitungswort (ob / W-Frage) + Verb am Ende. 'Weißt du, ob er kommt?' / 'Ich weiß nicht, wann er kommt.'",
        ruleVi:
          "Câu hỏi gián tiếp: Từ dẫn nhập (ob / từ hỏi W) + động từ cuối. 'Bạn có biết anh ấy có đến không?' / 'Tôi không biết khi nào anh ấy đến.'",
        examples: [
          {
            de: "Können Sie mir sagen, wo der Bahnhof ist?",
            vi: "Ông/bà có thể nói cho tôi nhà ga ở đâu không?",
          },
          {
            de: "Ich frage mich, ob das richtig ist.",
            vi: "Tôi tự hỏi liệu điều đó có đúng không.",
          },
          {
            de: "Weißt du, warum er nicht gekommen ist?",
            vi: "Bạn có biết tại sao anh ấy không đến không?",
          },
        ],
      },
      {
        rule: "Konditionalsätze mit 'wenn' (real) und 'falls' (unsicher): Nebensatz + Hauptsatz oder umgekehrt.",
        ruleVi:
          "Câu điều kiện với 'wenn' (có thật) và 'falls' (không chắc): mệnh đề phụ + mệnh đề chính hoặc ngược lại.",
        examples: [
          {
            de: "Wenn es morgen regnet, bleiben wir zu Hause.",
            vi: "Nếu ngày mai trời mưa, chúng tôi ở nhà.",
          },
          {
            de: "Falls du Hilfe brauchst, ruf mich an.",
            vi: "Nếu bạn cần giúp đỡ, hãy gọi cho tôi.",
          },
          {
            de: "Ich komme mit, wenn ich Zeit habe.",
            vi: "Tôi sẽ đi cùng nếu tôi có thời gian.",
          },
        ],
      },
      {
        rule: "Kombination mehrerer Nebensätze: Man kann mehrere Nebensätze in einem Satz verbinden.",
        ruleVi:
          "Kết hợp nhiều mệnh đề phụ: Có thể nối nhiều mệnh đề phụ trong một câu.",
        examples: [
          {
            de: "Ich weiß, dass er kommt, weil er es mir gesagt hat.",
            vi: "Tôi biết rằng anh ấy sẽ đến vì anh ấy đã nói với tôi.",
          },
          {
            de: "Der Mann, den ich kenne, der in Berlin wohnt, ist Ingenieur.",
            vi: "Người đàn ông mà tôi quen, người sống ở Berlin, là kỹ sư.",
          },
          {
            de: "Wenn du willst, dass ich dir helfe, musst du mich fragen.",
            vi: "Nếu bạn muốn tôi giúp, bạn phải hỏi tôi.",
          },
        ],
      },
      {
        rule: "Relativsätze mit Präposition: Die Präposition steht vor dem Relativpronomen. 'Der Mann, mit dem ich gesprochen habe.'",
        ruleVi:
          "Mệnh đề quan hệ với giới từ: Giới từ đứng trước đại từ quan hệ. 'Người đàn ông mà tôi đã nói chuyện với.'",
        examples: [
          {
            de: "Die Stadt, in der ich wohne, ist sehr schön.",
            vi: "Thành phố mà tôi sống rất đẹp.",
          },
          {
            de: "Der Freund, auf den ich warte, kommt gleich.",
            vi: "Người bạn mà tôi đợi sắp đến.",
          },
          {
            de: "Das Thema, über das wir sprechen, ist wichtig.",
            vi: "Chủ đề mà chúng ta nói về rất quan trọng.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Der Mann, den dort steht, ist mein Lehrer.",
        correct: "Der Mann, der dort steht, ist mein Lehrer.",
        explanation:
          "Das Relativpronomen ist Subjekt (Nominativ) im Relativsatz → 'der', nicht 'den' (Akkusativ). / Đại từ quan hệ là chủ ngữ → 'der', không phải 'den'.",
      },
      {
        wrong: "Weißt du, wo ist der Bahnhof?",
        correct: "Weißt du, wo der Bahnhof ist?",
        explanation:
          "Im indirekten Fragesatz steht das Verb am Ende: 'wo der Bahnhof ist'. / Trong câu hỏi gián tiếp, động từ đứng cuối.",
      },
      {
        wrong: "Die Stadt, in die ich wohne, ist schön.",
        correct: "Die Stadt, in der ich wohne, ist schön.",
        explanation:
          "'In' + Dativ (wo?) für Ort → 'in der' (fem. Dat.), nicht 'in die' (Akk.). / 'In' + Dativ cho nơi chốn → 'in der'.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt dùng 'mà' cho hầu hết mệnh đề quan hệ, không phân biệt giống, cách: 'Người mà tôi gặp', 'Người mà tôi nói chuyện với'. Tiếng Đức yêu cầu đại từ quan hệ khác nhau (der, die, das, dem, den, dessen, deren) tùy theo giống, số, và cách. Câu hỏi gián tiếp trong tiếng Việt không đổi trật tự từ, nhưng tiếng Đức đưa động từ xuống cuối.",
    exercises: [
      {
        type: "fillBlank",
        question:
          "Die Frau, _____ ich gestern geholfen habe, hat sich bedankt.",
        questionVi: "Người phụ nữ mà tôi đã giúp hôm qua đã cảm ơn.",
        answer: "der",
        explanation:
          "'Helfen' + Dativ. 'Frau' ist feminin → Dativ feminin Relativpronomen: 'der'.",
      },
      {
        type: "multipleChoice",
        question: "Können Sie mir sagen, _____ der Zug abfährt?",
        questionVi: "Ông/bà có thể nói cho tôi tàu khởi hành lúc nào?",
        options: ["wann", "ob", "dass", "wie"],
        answer: "wann",
        explanation:
          "Frage nach Zeitpunkt → 'wann' (khi nào). Verb am Ende: abfährt.",
      },
      {
        type: "transform",
        question:
          "Zwei Sätze → Relativsatz: Ich kenne den Mann. Der Mann wohnt neben mir.",
        questionVi: "Nối bằng mệnh đề quan hệ.",
        answer: "Ich kenne den Mann, der neben mir wohnt.",
        explanation:
          "'Der Mann' ist Subjekt im Relativsatz → 'der'. Verb am Ende: wohnt.",
      },
      {
        type: "errorCorrection",
        question: "Ich weiß nicht, ob kommt er morgen.",
        questionVi: "Tìm và sửa lỗi.",
        answer: "Ich weiß nicht, ob er morgen kommt.",
        explanation:
          "Im Nebensatz mit 'ob' steht das Verb am Ende: ob er morgen kommt.",
      },
      {
        type: "translate",
        question:
          "Thành phố mà tôi sống ở rất đẹp.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Die Stadt, in der ich wohne, ist sehr schön.",
        explanation:
          "'In' + Dativ (wo?) + feminin → 'in der'. Verb am Ende im Relativsatz: wohne.",
      },
    ],
  },

  // ============================================================
  // TOPIC 11: Genitiv (Kapitel 3)
  // ============================================================
  {
    id: "b1-gram-11",
    title: "Genitiv",
    titleVi: "Cách sở hữu (Genitiv)",
    chapter: 3,
    order: 2,
    level: "B1",
    explanation:
      "Der Genitiv ist der vierte Kasus im Deutschen. Er drückt Besitz und Zugehörigkeit aus und wird nach bestimmten Präpositionen und Verben verwendet. Maskuline und neutrale Nomen bekommen die Endung '-s' oder '-es'.\n\nGenitiv là cách thứ tư trong tiếng Đức. Nó diễn tả sự sở hữu và thuộc về, được dùng sau một số giới từ và động từ nhất định. Danh từ giống đực và trung tính thêm đuôi '-s' hoặc '-es'.",
    rules: [
      {
        rule: "Genitiv-Formen: des Mannes, der Frau, des Kindes, der Kinder. Maskulin/Neutrum: -s (bei mehrsilbigen Wörtern) oder -es (bei einsilbigen).",
        ruleVi:
          "Dạng Genitiv: des Mannes, der Frau, des Kindes, der Kinder. Giống đực/trung: -s (nhiều âm tiết) hoặc -es (một âm tiết).",
        examples: [
          {
            de: "Das Auto des Nachbarn ist neu. (mask. schwach)",
            vi: "Xe của người hàng xóm mới.",
          },
          {
            de: "Die Farbe des Hauses gefällt mir. (neutr. → des Hauses)",
            vi: "Tôi thích màu của ngôi nhà.",
          },
          {
            de: "Der Titel des Buches ist interessant.",
            vi: "Tựa đề cuốn sách thú vị.",
          },
        ],
      },
      {
        rule: "Genitiv-Präpositionen: wegen, trotz, während, statt, außerhalb, innerhalb, aufgrund, anstelle.",
        ruleVi:
          "Giới từ đi với Genitiv: wegen (vì), trotz (mặc dù), während (trong khi), statt (thay vì), außerhalb (bên ngoài), innerhalb (bên trong), aufgrund (do), anstelle (thay cho).",
        examples: [
          {
            de: "Wegen des Regens bleiben wir zu Hause.",
            vi: "Vì mưa, chúng tôi ở nhà.",
          },
          {
            de: "Trotz des schlechten Wetters gingen wir spazieren.",
            vi: "Mặc dù thời tiết xấu, chúng tôi đi dạo.",
          },
          {
            de: "Während des Unterrichts darf man nicht telefonieren.",
            vi: "Trong giờ học không được gọi điện.",
          },
        ],
      },
      {
        rule: "Adjektive im Genitiv: Nach bestimmtem Artikel immer '-en'. Nach unbestimmtem Artikel auch '-en'. Ohne Artikel meist '-en' (Ausnahme: fem. Sg. '-er').",
        ruleVi:
          "Tính từ ở Genitiv: Sau mạo từ xác định luôn '-en'. Sau mạo từ bất định cũng '-en'. Không mạo từ thường '-en' (ngoại trừ giống cái số ít '-er').",
        examples: [
          {
            de: "Die Meinung des neuen Lehrers ist wichtig.",
            vi: "Ý kiến của thầy giáo mới quan trọng.",
          },
          {
            de: "Trotz guten Wetters blieb er drinnen.",
            vi: "Mặc dù thời tiết tốt, anh ấy ở trong nhà.",
          },
          {
            de: "Das Ergebnis einer langen Diskussion war positiv.",
            vi: "Kết quả của cuộc thảo luận dài tích cực.",
          },
        ],
      },
      {
        rule: "In der Umgangssprache wird der Genitiv oft durch 'von + Dativ' ersetzt: 'Das Auto von meinem Nachbarn' statt 'Das Auto meines Nachbarn'.",
        ruleVi:
          "Trong tiếng nói hàng ngày, Genitiv thường được thay bằng 'von + Dativ': 'Xe của hàng xóm tôi' (dùng von thay vì Genitiv).",
        examples: [
          {
            de: "Formal: Das Haus meines Bruders. → Informal: Das Haus von meinem Bruder.",
            vi: "Trang trọng: Nhà của anh trai tôi. → Thường: Nhà của anh trai tôi.",
          },
          {
            de: "Formal: Die Mutter des Kindes. → Informal: Die Mutter von dem Kind.",
            vi: "Trang trọng: Mẹ của đứa trẻ. → Thường: Mẹ của đứa trẻ.",
          },
        ],
      },
      {
        rule: "Eigennamen im Genitiv: Eigennamen bekommen '-s' ohne Apostroph: Annas Buch, Berlins Sehenswürdigkeiten. Bei Namen auf -s/-z: Apostroph: Thomas' Buch.",
        ruleVi:
          "Tên riêng ở Genitiv: Tên riêng thêm '-s' không có dấu nháy: Annas Buch. Tên kết thúc bằng -s/-z dùng dấu nháy: Thomas' Buch.",
        examples: [
          {
            de: "Annas Tasche ist rot.",
            vi: "Túi của Anna màu đỏ.",
          },
          {
            de: "Deutschlands Hauptstadt ist Berlin.",
            vi: "Thủ đô của Đức là Berlin.",
          },
          {
            de: "Thomas' Fahrrad ist kaputt.",
            vi: "Xe đạp của Thomas bị hỏng.",
          },
        ],
      },
    ],
    commonMistakes: [
      {
        wrong: "Wegen dem Regen bleiben wir zu Hause.",
        correct: "Wegen des Regens bleiben wir zu Hause.",
        explanation:
          "'Wegen' verlangt Genitiv: 'des Regens', nicht Dativ 'dem Regen'. (In der Umgangssprache wird Dativ oft akzeptiert, aber formal ist Genitiv korrekt.) / 'Wegen' yêu cầu Genitiv.",
      },
      {
        wrong: "Das Auto des Nachbar ist neu.",
        correct: "Das Auto des Nachbarn ist neu.",
        explanation:
          "'Nachbar' ist ein N-Deklination-Nomen: des Nachbarn (nicht 'Nachbar'). / 'Nachbar' thuộc biến cách N: des Nachbarn.",
      },
      {
        wrong: "Das ist Anna's Buch.",
        correct: "Das ist Annas Buch.",
        explanation:
          "Im Deutschen kein Apostroph vor Genitiv-s bei Eigennamen: Annas, nicht Anna's. / Tiếng Đức không dùng dấu nháy trước -s sở hữu.",
      },
    ],
    vietnameseComparison:
      "Tiếng Việt diễn tả sở hữu bằng 'của': 'xe của bố', 'nhà của bạn'. Rất đơn giản vì không cần thay đổi dạng từ. Tiếng Đức yêu cầu: (1) thay đổi mạo từ (der → des, die → der), (2) thêm -s/-es vào danh từ giống đực/trung, (3) biến cách tính từ. Mẹo: Genitiv giống 'của' trong tiếng Việt nhưng phải thay đổi nhiều thứ xung quanh.",
    exercises: [
      {
        type: "fillBlank",
        question: "Das Büro _____ Chefs ist im dritten Stock. (der Chef)",
        questionVi: "Văn phòng của sếp ở tầng ba.",
        answer: "des Chefs",
        explanation:
          "'Chef' ist maskulin → Genitiv: 'des Chefs' (+ -s bei einsilbigem Wort auf Konsonant).",
      },
      {
        type: "multipleChoice",
        question: "_____ des Gewitters blieben alle zu Hause.",
        questionVi: "Vì bão, tất cả ở nhà.",
        options: ["Wegen", "Trotz", "Während", "Statt"],
        answer: "Wegen",
        explanation:
          "'Wegen' (vì) + Genitiv passt zum Kontext: Grund für zu Hause bleiben.",
      },
      {
        type: "fillBlank",
        question: "Die Meinung _____ neu___ Kollegin ist wichtig. (die Kollegin)",
        questionVi: "Ý kiến của đồng nghiệp nữ mới quan trọng.",
        answer: "der neuen",
        explanation:
          "'Kollegin' ist feminin → Genitiv: 'der' + Adjektiv '-en': der neuen Kollegin.",
      },
      {
        type: "errorCorrection",
        question: "Trotz dem schlechten Wetter gingen wir spazieren.",
        questionVi: "Tìm và sửa lỗi.",
        answer: "Trotz des schlechten Wetters gingen wir spazieren.",
        explanation:
          "'Trotz' + Genitiv: 'des schlechten Wetters'. 'Wetter' → 'Wetters' (Genitiv Neutrum).",
      },
      {
        type: "translate",
        question: "Thủ đô của Việt Nam là Hà Nội.",
        questionVi: "Dịch sang tiếng Đức.",
        answer: "Die Hauptstadt Vietnams ist Hanoi.",
        explanation:
          "Eigenname + -s für Genitiv: Vietnams (kein Artikel nötig bei Ländernamen ohne Artikel).",
      },
    ],
  },
];
