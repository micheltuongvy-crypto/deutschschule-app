// C1 German Lessons — Chapters 1–3
// Complete lesson content for Vietnamese learners

import type { Lesson, ContentBlock } from "../a1/chapters1_3";

export const c1LessonsCh1_3: Lesson[] = [
  // =====================================================================
  // CHAPTER 1: Sprachwissenschaft & Kommunikationstheorie
  // =====================================================================

  // --- Chapter 1, Lesson 1 ---
  {
    id: "c1-ch1-l1",
    chapterId: 1,
    lessonNumber: 1,
    title: "Sprachvarietäten im Deutschen",
    titleVi: "Các biến thể ngôn ngữ trong tiếng Đức",
    type: "Einführung",
    objectives: [
      "Phân biệt các biến thể ngôn ngữ: Standardsprache, Umgangssprache, Dialekte, Fachsprache, Jugendsprache",
      "Hiểu khái niệm 'Hochdeutsch' và sự khác biệt giữa các vùng miền",
      "Nhận diện đặc điểm của tiếng Đức Áo, Đức Thụy Sĩ và tiếng Đức chuẩn",
      "Phân tích ngữ vực (Register) và cách chuyển đổi phù hợp với ngữ cảnh",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Varietäten der deutschen Sprache",
        titleVi: "Các biến thể của tiếng Đức",
        textDe:
          "Die deutsche Sprache ist keineswegs homogen. Sie umfasst eine Vielzahl von Varietäten, die sich regional, sozial und funktional unterscheiden. Die Standardsprache (Hochdeutsch) dient als überregionale Verständigungsbasis, während Dialekte wie Bairisch, Schwäbisch oder Plattdeutsch starke regionale Prägungen aufweisen. Darüber hinaus existieren Soziolekte (z.B. Jugendsprache) und Fachsprachen (z.B. Rechtssprache, Medizinsprache), die jeweils spezifische Merkmale aufweisen.",
        textVi:
          "Tiếng Đức hoàn toàn không đồng nhất. Nó bao gồm nhiều biến thể khác nhau về mặt vùng miền, xã hội và chức năng. Tiếng Đức chuẩn (Hochdeutsch) đóng vai trò là cơ sở giao tiếp liên vùng, trong khi các phương ngữ như tiếng Bavaria, tiếng Schwaben hay tiếng Plattdeutsch mang đặc trưng vùng miền rõ rệt. Ngoài ra còn có các biến thể xã hội (ví dụ: ngôn ngữ giới trẻ) và ngôn ngữ chuyên ngành (ví dụ: ngôn ngữ pháp luật, ngôn ngữ y khoa) với những đặc điểm riêng biệt. Đối với người Việt học tiếng Đức, việc hiểu sự đa dạng này rất quan trọng vì bạn sẽ gặp nhiều cách nói khác nhau tùy vào vùng miền và môi trường giao tiếp.",
      },
      {
        type: "vocabulary",
        titleDe: "Fachbegriffe der Linguistik",
        titleVi: "Thuật ngữ ngôn ngữ học",
        words: [
          { de: "die Standardsprache", vi: "ngôn ngữ chuẩn", article: "die" },
          { de: "die Umgangssprache", vi: "ngôn ngữ thông tục / khẩu ngữ", article: "die" },
          { de: "der Dialekt", vi: "phương ngữ / tiếng địa phương", article: "der" },
          { de: "der Soziolekt", vi: "biến thể xã hội", article: "der" },
          { de: "die Fachsprache", vi: "ngôn ngữ chuyên ngành", article: "die" },
          { de: "das Register", vi: "ngữ vực (mức độ trang trọng)", article: "das" },
          { de: "die Varietät", vi: "biến thể ngôn ngữ", article: "die" },
          { de: "die Jugendsprache", vi: "ngôn ngữ giới trẻ", article: "die" },
          { de: "die Mundart", vi: "tiếng địa phương (đồng nghĩa với Dialekt)", article: "die" },
          { de: "die Hochsprache", vi: "ngôn ngữ chuẩn / ngôn ngữ cao", article: "die" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Gespräch über regionale Unterschiede",
        titleVi: "Cuộc trò chuyện về sự khác biệt vùng miền",
        lines: [
          {
            speaker: "Prof. Weber",
            de: "Können Sie mir ein Beispiel für einen regionalen Unterschied im Deutschen nennen?",
            vi: "Bạn có thể cho tôi một ví dụ về sự khác biệt vùng miền trong tiếng Đức không?",
          },
          {
            speaker: "Linh",
            de: "In Norddeutschland sagt man 'Samstag', in Süddeutschland eher 'Sonnabend' — oder umgekehrt?",
            vi: "Ở Bắc Đức người ta nói 'Samstag', ở Nam Đức thì 'Sonnabend' — hay ngược lại nhỉ?",
          },
          {
            speaker: "Prof. Weber",
            de: "Fast! 'Sonnabend' ist eher norddeutsch, 'Samstag' wird überall verstanden. Auch bei Brötchen gibt es Unterschiede: Semmel, Schrippe, Wecken — alles dasselbe Gebäck!",
            vi: "Gần đúng! 'Sonnabend' thiên về Bắc Đức, 'Samstag' được hiểu ở khắp nơi. Ngay cả với bánh mì nhỏ cũng có sự khác biệt: Semmel, Schrippe, Wecken — tất cả đều là cùng một loại bánh!",
          },
          {
            speaker: "Linh",
            de: "Das erinnert mich an Vietnam — in Hanoi sagt man 'quả' und in Saigon 'trái' für Obst.",
            vi: "Điều này nhắc em nhớ đến Việt Nam — ở Hà Nội nói 'quả' còn ở Sài Gòn nói 'trái' cho trái cây.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Sprachvarietäten erkennen",
        titleVi: "Bài tập: Nhận diện biến thể ngôn ngữ",
        instruction:
          "Lesen Sie die folgenden Sätze und ordnen Sie sie der passenden Varietät zu: Standardsprache, Umgangssprache, Dialekt oder Fachsprache. Begründen Sie Ihre Zuordnung.",
        instructionVi:
          "Đọc các câu sau và xếp chúng vào biến thể phù hợp: ngôn ngữ chuẩn, khẩu ngữ, phương ngữ hoặc ngôn ngữ chuyên ngành. Giải thích lý do phân loại của bạn.",
      },
    ],
  },

  // --- Chapter 1, Lesson 2 ---
  {
    id: "c1-ch1-l2",
    chapterId: 1,
    lessonNumber: 2,
    title: "Kommunikationsmodelle (Schulz von Thun)",
    titleVi: "Mô hình giao tiếp (Schulz von Thun)",
    type: "Einführung",
    objectives: [
      "Hiểu và áp dụng mô hình '4 tai' (Vier-Ohren-Modell) của Schulz von Thun",
      "Phân tích bốn mặt của một thông điệp: Sachinhalt, Selbstoffenbarung, Beziehung, Appell",
      "So sánh với cách giao tiếp gián tiếp trong văn hóa Việt Nam",
      "Áp dụng mô hình để phân tích hiểu lầm trong giao tiếp liên văn hóa",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das Vier-Ohren-Modell",
        titleVi: "Mô hình bốn tai",
        textDe:
          "Friedemann Schulz von Thun entwickelte das Kommunikationsquadrat, auch Vier-Ohren-Modell genannt. Demnach enthält jede Nachricht vier Ebenen: den Sachinhalt (worüber ich informiere), die Selbstoffenbarung (was ich von mir preisgebe), den Beziehungshinweis (was ich von dir halte) und den Appell (wozu ich dich veranlassen möchte). Missverständnisse entstehen häufig, wenn Sender und Empfänger unterschiedliche Ebenen betonen.",
        textVi:
          "Friedemann Schulz von Thun đã phát triển mô hình giao tiếp bốn mặt, còn gọi là 'Mô hình bốn tai'. Theo đó, mỗi thông điệp chứa bốn tầng: nội dung sự kiện (tôi thông tin về điều gì), sự tự bộc lộ (tôi tiết lộ gì về bản thân), mối quan hệ (tôi nghĩ gì về bạn) và lời kêu gọi hành động (tôi muốn bạn làm gì). Hiểu lầm thường xảy ra khi người gửi và người nhận nhấn mạnh các tầng khác nhau. Đối với người Việt, mô hình này đặc biệt hữu ích vì văn hóa Việt Nam thường giao tiếp gián tiếp — tầng 'quan hệ' và 'kêu gọi' thường được ẩn giấu.",
      },
      {
        type: "vocabulary",
        titleDe: "Kommunikationswissenschaft",
        titleVi: "Khoa học giao tiếp",
        words: [
          { de: "der Sachinhalt", vi: "nội dung sự kiện / thông tin khách quan", article: "der" },
          { de: "die Selbstoffenbarung", vi: "sự tự bộc lộ bản thân", article: "die" },
          { de: "der Beziehungshinweis", vi: "tín hiệu về mối quan hệ", article: "der" },
          { de: "der Appell", vi: "lời kêu gọi hành động", article: "der" },
          { de: "der Sender", vi: "người gửi (thông điệp)", article: "der" },
          { de: "der Empfänger", vi: "người nhận (thông điệp)", article: "der" },
          { de: "das Missverständnis", vi: "sự hiểu lầm", article: "das" },
          { de: "die Ebene", vi: "tầng / cấp độ", article: "die" },
          { de: "die Botschaft", vi: "thông điệp", article: "die" },
          { de: "das Kommunikationsquadrat", vi: "hình vuông giao tiếp (mô hình 4 mặt)", article: "das" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Analyse einer Alltagssituation",
        titleVi: "Phân tích một tình huống hàng ngày",
        lines: [
          {
            speaker: "Kollegin",
            de: "Es ist kalt hier drin.",
            vi: "Ở đây lạnh quá.",
          },
          {
            speaker: "Dozent",
            de: "Analysieren wir diese Aussage nach Schulz von Thun. Was ist der Sachinhalt?",
            vi: "Hãy phân tích câu nói này theo Schulz von Thun. Nội dung sự kiện là gì?",
          },
          {
            speaker: "Hoa",
            de: "Sachinhalt: Die Temperatur im Raum ist niedrig. Selbstoffenbarung: Mir ist kalt, ich friere.",
            vi: "Nội dung sự kiện: Nhiệt độ trong phòng thấp. Tự bộc lộ: Tôi thấy lạnh, tôi đang rét.",
          },
          {
            speaker: "Tuan",
            de: "Beziehung: Ich vertraue dir genug, um mein Unbehagen zu äußern. Appell: Mach bitte das Fenster zu oder dreh die Heizung auf!",
            vi: "Quan hệ: Tôi đủ tin tưởng bạn để bày tỏ sự khó chịu. Kêu gọi: Hãy đóng cửa sổ hoặc bật lò sưởi lên!",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Nachrichten auf vier Ebenen analysieren",
        titleVi: "Bài tập: Phân tích thông điệp trên bốn tầng",
        instruction:
          "Analysieren Sie die folgende Aussage eines Chefs an seinen Mitarbeiter auf allen vier Ebenen: 'Der Bericht hätte gestern fertig sein sollen.' Berücksichtigen Sie dabei interkulturelle Unterschiede.",
        instructionVi:
          "Phân tích câu nói sau của sếp với nhân viên trên cả bốn tầng: 'Der Bericht hätte gestern fertig sein sollen.' (Báo cáo lẽ ra phải xong ngày hôm qua.) Hãy xem xét cả sự khác biệt liên văn hóa — người Việt có thể hiểu câu này khác với người Đức.",
      },
    ],
  },

  // --- Chapter 1, Lesson 3 ---
  {
    id: "c1-ch1-l3",
    chapterId: 1,
    lessonNumber: 3,
    title: "Pragmatik & Sprechakte",
    titleVi: "Ngữ dụng học và hành vi ngôn ngữ",
    type: "Fertigkeit",
    objectives: [
      "Hiểu lý thuyết hành vi ngôn ngữ (Sprechakttheorie) của Austin và Searle",
      "Phân biệt các loại hành vi ngôn ngữ: assertiv, direktiv, kommissiv, expressiv, deklarativ",
      "Nhận diện hành vi ngôn ngữ gián tiếp trong tiếng Đức",
      "So sánh chiến lược lịch sự giữa tiếng Đức và tiếng Việt",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Sprechakttheorie nach Austin und Searle",
        titleVi: "Lý thuyết hành vi ngôn ngữ theo Austin và Searle",
        textDe:
          "Die Sprechakttheorie besagt, dass wir mit Sprache nicht nur Informationen übermitteln, sondern auch Handlungen vollziehen. John L. Austin unterschied zwischen lokutionärem Akt (das Gesagte), illokutionärem Akt (die Absicht) und perlokutionärem Akt (die Wirkung). Searle klassifizierte Sprechakte in fünf Kategorien: assertive (behauptende), direktive (auffordernde), kommissive (sich verpflichtende), expressive (gefühlsausdrückende) und deklarative (zustandsverändernde) Akte.",
        textVi:
          "Lý thuyết hành vi ngôn ngữ cho rằng khi nói, chúng ta không chỉ truyền đạt thông tin mà còn thực hiện hành động. John L. Austin phân biệt giữa hành vi phát ngôn (điều được nói ra), hành vi tại lời (ý định) và hành vi mượn lời (tác động). Searle phân loại hành vi ngôn ngữ thành năm loại: xác nhận (assertiv), chỉ đạo (direktiv), cam kết (kommissiv), biểu cảm (expressiv) và tuyên bố (deklarativ). Ví dụ: 'Könnten Sie das Fenster schließen?' hình thức là câu hỏi nhưng thực chất là lời yêu cầu (hành vi gián tiếp) — rất giống cách người Việt nói 'Anh đóng giúp cửa sổ được không?'",
      },
      {
        type: "vocabulary",
        titleDe: "Pragmatische Fachbegriffe",
        titleVi: "Thuật ngữ ngữ dụng học",
        words: [
          { de: "der Sprechakt", vi: "hành vi ngôn ngữ", article: "der" },
          { de: "die Illokution", vi: "lực tại lời / ý định giao tiếp", article: "die" },
          { de: "die Perlokution", vi: "hiệu quả mượn lời / tác động", article: "die" },
          { de: "die Implikatur", vi: "hàm ý", article: "die" },
          { de: "die Höflichkeitsstrategie", vi: "chiến lược lịch sự", article: "die" },
          { de: "der indirekte Sprechakt", vi: "hành vi ngôn ngữ gián tiếp", article: "der" },
          { de: "die Konversationsmaxime", vi: "phương châm hội thoại", article: "die" },
          { de: "die Präsupposition", vi: "tiền giả định", article: "die" },
          { de: "die Deixis", vi: "phép chỉ định (ngữ cảnh)", article: "die" },
          { de: "der Kontext", vi: "ngữ cảnh / bối cảnh", article: "der" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Indirekte Sprechakte im Alltag",
        titleVi: "Hành vi ngôn ngữ gián tiếp trong đời sống",
        lines: [
          {
            speaker: "Vermieterin",
            de: "Wissen Sie eigentlich, wie spät es ist?",
            vi: "Anh có biết mấy giờ rồi không?",
          },
          {
            speaker: "Dozent",
            de: "Ist das eine echte Frage nach der Uhrzeit?",
            vi: "Đây có phải là câu hỏi thật về giờ không?",
          },
          {
            speaker: "Linh",
            de: "Nein, das ist ein indirekter Sprechakt. Die Illokution ist eine Aufforderung — wahrscheinlich soll der Nachbar leiser sein, weil es schon spät ist.",
            vi: "Không, đây là hành vi ngôn ngữ gián tiếp. Lực tại lời là một yêu cầu — có lẽ người hàng xóm nên im lặng hơn vì đã khuya.",
          },
          {
            speaker: "Dozent",
            de: "Genau! In Vietnam würde man vielleicht sagen: 'Em ơi, khuya rồi đấy' — auch ein indirekter Sprechakt.",
            vi: "Chính xác! Ở Việt Nam người ta có thể nói: 'Em ơi, khuya rồi đấy' — cũng là một hành vi ngôn ngữ gián tiếp.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Sprechakte klassifizieren",
        titleVi: "Bài tập: Phân loại hành vi ngôn ngữ",
        instruction:
          "Klassifizieren Sie die folgenden Äußerungen nach Searles Kategorien und identifizieren Sie, ob es sich um direkte oder indirekte Sprechakte handelt: 1) 'Hiermit erkläre ich Sie zu Mann und Frau.' 2) 'Es wäre schön, wenn der Müll mal rausgebracht würde.' 3) 'Ich verspreche, pünktlich zu sein.'",
        instructionVi:
          "Phân loại các phát ngôn sau theo các danh mục của Searle và xác định đây là hành vi ngôn ngữ trực tiếp hay gián tiếp: 1) 'Hiermit erkläre ich Sie zu Mann und Frau.' (Tôi tuyên bố anh chị là vợ chồng.) 2) 'Es wäre schön, wenn der Müll mal rausgebracht würde.' (Sẽ tốt nếu ai đó đổ rác.) 3) 'Ich verspreche, pünktlich zu sein.' (Tôi hứa sẽ đúng giờ.)",
      },
    ],
  },

  // --- Chapter 1, Lesson 4 ---
  {
    id: "c1-ch1-l4",
    chapterId: 1,
    lessonNumber: 4,
    title: "Erweiterte Konjunktiv-Formen",
    titleVi: "Các dạng Konjunktiv nâng cao",
    type: "Grammatik",
    objectives: [
      "Nắm vững Konjunktiv I trong câu gián tiếp (indirekte Rede)",
      "Sử dụng Konjunktiv II trong các cấu trúc giả định phức tạp",
      "Phân biệt Konjunktiv I và II và biết khi nào dùng dạng nào",
      "Áp dụng Konjunktiv trong văn phong học thuật và báo chí",
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Konjunktiv I — Indirekte Rede",
        titleVi: "Konjunktiv I — Câu gián tiếp",
        rule:
          "Der Konjunktiv I wird hauptsächlich in der indirekten Rede verwendet, besonders in journalistischen und akademischen Texten. Er wird vom Präsensstamm gebildet: er sage, sie habe, er könne. Wenn die Konjunktiv-I-Form mit dem Indikativ identisch ist (z.B. 'sie sagen'), verwendet man den Konjunktiv II als Ersatz.",
        ruleVi:
          "Konjunktiv I được sử dụng chủ yếu trong câu gián tiếp, đặc biệt trong văn bản báo chí và học thuật. Nó được hình thành từ gốc thì hiện tại: er sage (anh ấy nói rằng), sie habe (cô ấy có), er könne (anh ấy có thể). Khi dạng Konjunktiv I trùng với dạng trực tiếp (Indikativ), ví dụ 'sie sagen', thì dùng Konjunktiv II thay thế. Trong tiếng Việt không có khái niệm tương đương — chúng ta chỉ dùng 'rằng/là' để dẫn lời gián tiếp. Ví dụ: 'Er sagt, er sei krank' = 'Anh ấy nói rằng anh ấy bị ốm' — 'sei' cho thấy đây là lời thuật lại, không phải xác nhận sự thật.",
        examples: [
          {
            de: "Der Minister sagte, die Wirtschaft wachse weiterhin.",
            vi: "Bộ trưởng nói rằng kinh tế tiếp tục tăng trưởng. (wachse = Konjunktiv I của wachsen)",
          },
          {
            de: "Die Forscherin erklärte, sie habe neue Ergebnisse erzielt.",
            vi: "Nhà nghiên cứu giải thích rằng bà đã đạt được kết quả mới. (habe = Konjunktiv I của haben)",
          },
          {
            de: "Es hieß, die Verhandlungen seien gescheitert.",
            vi: "Có tin cho biết, các cuộc đàm phán đã thất bại. (seien = Konjunktiv I của sein)",
          },
          {
            de: "Die Zeugen berichteten, sie hätten nichts gesehen.",
            vi: "Các nhân chứng khai rằng họ không thấy gì. (hätten = Konjunktiv II thay thế vì Konj. I 'haben' trùng Indikativ)",
          },
        ],
      },
      {
        type: "grammar",
        titleDe: "Konjunktiv II — Komplexe irreale Strukturen",
        titleVi: "Konjunktiv II — Cấu trúc giả định phức tạp",
        rule:
          "Über den einfachen Konjunktiv II hinaus gibt es komplexere Strukturen: Irreale Vergleichssätze (als ob/als wenn + Konjunktiv II), irreale Folgesätze (zu ... als dass), irreale Wunschsätze (Wenn ich doch nur ...) und die Vergangenheitsform des Konjunktiv II (hätte/wäre + Partizip II).",
        ruleVi:
          "Ngoài Konjunktiv II cơ bản, còn có các cấu trúc phức tạp hơn: Câu so sánh giả định (als ob/als wenn + Konjunktiv II — 'như thể'), câu hệ quả giả định (zu ... als dass — 'quá ... để mà'), câu ước giả định (Wenn ich doch nur ... — 'Giá như tôi...') và dạng quá khứ của Konjunktiv II (hätte/wäre + Partizip II — 'đáng lẽ đã...'). Tiếng Việt diễn đạt ý tương tự bằng 'giá mà', 'đáng lẽ', 'như thể' nhưng không thay đổi hình thức động từ.",
        examples: [
          {
            de: "Er tut so, als ob er alles verstanden hätte.",
            vi: "Anh ấy làm như thể đã hiểu hết. (als ob + Konjunktiv II Vergangenheit)",
          },
          {
            de: "Das Problem ist zu komplex, als dass man es einfach lösen könnte.",
            vi: "Vấn đề quá phức tạp để có thể giải quyết đơn giản. (zu ... als dass + Konjunktiv II)",
          },
          {
            de: "Hätte ich das früher gewusst, hätte ich anders gehandelt.",
            vi: "Giá như tôi biết điều đó sớm hơn, tôi đã hành động khác. (Irrealer Konditionalsatz Vergangenheit)",
          },
          {
            de: "Wenn sie doch nur mehr Zeit gehabt hätte!",
            vi: "Giá mà cô ấy có thêm thời gian! (Irrealer Wunschsatz)",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Konjunktiv in der Praxis",
        titleVi: "Bài tập: Konjunktiv trong thực hành",
        instruction:
          "Formen Sie die folgenden direkten Zitate in indirekte Rede mit Konjunktiv I um. Verwenden Sie bei Bedarf den Konjunktiv II als Ersatzform: 1) Der Präsident: 'Wir werden die Steuern senken.' 2) Die Ärztin: 'Die Patienten müssen mehr Bewegung bekommen.' 3) Die Demonstranten: 'Wir fordern mehr Klimaschutz.'",
        instructionVi:
          "Chuyển các trích dẫn trực tiếp sau sang câu gián tiếp với Konjunktiv I. Sử dụng Konjunktiv II thay thế khi cần: 1) Tổng thống: 'Chúng tôi sẽ giảm thuế.' 2) Bác sĩ: 'Bệnh nhân cần vận động nhiều hơn.' 3) Người biểu tình: 'Chúng tôi yêu cầu bảo vệ khí hậu nhiều hơn.'",
      },
    ],
  },

  // =====================================================================
  // CHAPTER 2: Internationale Beziehungen & Diplomatie
  // =====================================================================

  // --- Chapter 2, Lesson 1 ---
  {
    id: "c1-ch2-l1",
    chapterId: 2,
    lessonNumber: 1,
    title: "EU & internationale Organisationen",
    titleVi: "EU và các tổ chức quốc tế",
    type: "Einführung",
    objectives: [
      "Hiểu cấu trúc và chức năng của EU: Europäischer Rat, Europäisches Parlament, Europäische Kommission",
      "Nắm vững từ vựng về quan hệ quốc tế và tổ chức siêu quốc gia",
      "Thảo luận về vai trò của Đức trong EU và trên trường quốc tế",
      "Liên hệ với ASEAN và vai trò của Việt Nam trong khu vực",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Die Europäische Union und ihre Institutionen",
        titleVi: "Liên minh châu Âu và các thể chế",
        textDe:
          "Die Europäische Union ist ein einzigartiger politischer und wirtschaftlicher Zusammenschluss von 27 Mitgliedstaaten. Ihre wichtigsten Institutionen sind der Europäische Rat (Staats- und Regierungschefs), das Europäische Parlament (direkt gewählt), die Europäische Kommission (Exekutive) und der Europäische Gerichtshof. Deutschland ist als größte Volkswirtschaft der EU ein zentraler Akteur und hat maßgeblichen Einfluss auf die europäische Politik.",
        textVi:
          "Liên minh châu Âu là một liên kết chính trị và kinh tế độc đáo gồm 27 quốc gia thành viên. Các thể chế quan trọng nhất là Hội đồng châu Âu (nguyên thủ quốc gia và chính phủ), Nghị viện châu Âu (được bầu trực tiếp), Ủy ban châu Âu (cơ quan hành pháp) và Tòa án Công lý châu Âu. Đức là nền kinh tế lớn nhất EU và là một nhân tố trung tâm có ảnh hưởng quyết định đến chính trị châu Âu. Để so sánh: ASEAN là một tổ chức khu vực tương tự ở Đông Nam Á, nhưng mức độ hội nhập thấp hơn nhiều so với EU.",
      },
      {
        type: "vocabulary",
        titleDe: "Internationale Politik",
        titleVi: "Chính trị quốc tế",
        words: [
          { de: "die Mitgliedstaaten", vi: "các quốc gia thành viên", article: "die" },
          { de: "die Souveränität", vi: "chủ quyền", article: "die" },
          { de: "das Abkommen", vi: "hiệp định / thỏa thuận", article: "das" },
          { de: "die Ratifizierung", vi: "sự phê chuẩn", article: "die" },
          { de: "das Europäische Parlament", vi: "Nghị viện châu Âu", article: "das" },
          { de: "die Europäische Kommission", vi: "Ủy ban châu Âu", article: "die" },
          { de: "der Europäische Rat", vi: "Hội đồng châu Âu", article: "der" },
          { de: "die Supranationalität", vi: "tính siêu quốc gia", article: "die" },
          { de: "der Binnenmarkt", vi: "thị trường nội khối", article: "der" },
          { de: "die Subsidiarität", vi: "nguyên tắc bổ trợ (quyết định ở cấp thấp nhất phù hợp)", article: "die" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Podiumsgespräch über die EU",
        titleVi: "Thảo luận diễn đàn về EU",
        lines: [
          {
            speaker: "Moderatorin",
            de: "Welche Rolle spielt Deutschland Ihrer Meinung nach in der EU?",
            vi: "Theo ý kiến của bạn, Đức đóng vai trò gì trong EU?",
          },
          {
            speaker: "Tuan",
            de: "Deutschland ist zweifellos ein zentraler Akteur, allein schon aufgrund seiner wirtschaftlichen Stärke und seiner geographischen Lage im Herzen Europas.",
            vi: "Đức chắc chắn là một nhân tố trung tâm, đơn giản vì sức mạnh kinh tế và vị trí địa lý ngay trung tâm châu Âu.",
          },
          {
            speaker: "Moderatorin",
            de: "Sehen Sie Parallelen zwischen der EU und der ASEAN?",
            vi: "Bạn có thấy sự tương đồng giữa EU và ASEAN không?",
          },
          {
            speaker: "Tuan",
            de: "Gewissermaßen — beide streben wirtschaftliche Integration an. Allerdings ist die EU deutlich stärker integriert, mit einer gemeinsamen Währung und einer supranationalen Gesetzgebung, während ASEAN stärker auf dem Konsensprinzip und der Nichteinmischung basiert.",
            vi: "Ở một mức độ nhất định — cả hai đều hướng tới hội nhập kinh tế. Tuy nhiên, EU hội nhập sâu hơn nhiều, với đồng tiền chung và luật pháp siêu quốc gia, trong khi ASEAN dựa nhiều hơn vào nguyên tắc đồng thuận và không can thiệp.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: EU-Institutionen erklären",
        titleVi: "Bài tập: Giải thích các thể chế EU",
        instruction:
          "Erklären Sie in einem kurzen Aufsatz (ca. 200 Wörter) die Unterschiede zwischen dem Europäischen Rat, dem Rat der EU und dem Europäischen Parlament. Verwenden Sie dabei Fachvokabular und den Konjunktiv I für indirekte Rede.",
        instructionVi:
          "Viết một bài luận ngắn (khoảng 200 từ) giải thích sự khác biệt giữa Hội đồng châu Âu, Hội đồng Liên minh châu Âu và Nghị viện châu Âu. Sử dụng từ vựng chuyên ngành và Konjunktiv I cho câu gián tiếp.",
      },
    ],
  },

  // --- Chapter 2, Lesson 2 ---
  {
    id: "c1-ch2-l2",
    chapterId: 2,
    lessonNumber: 2,
    title: "Diplomatische Sprache",
    titleVi: "Ngôn ngữ ngoại giao",
    type: "Fertigkeit",
    objectives: [
      "Sử dụng ngôn ngữ ngoại giao: uyển ngữ, giảm nhẹ, tránh xung đột",
      "Hiểu cách diễn đạt trang trọng và gián tiếp trong văn bản chính trị",
      "Phân tích các tuyên bố chính trị và nhận diện chiến lược ngôn ngữ",
      "So sánh phong cách ngoại giao phương Tây và châu Á",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Merkmale diplomatischer Sprache",
        titleVi: "Đặc điểm của ngôn ngữ ngoại giao",
        textDe:
          "Diplomatische Sprache zeichnet sich durch Indirektheit, Euphemismen und Abschwächungen aus. Statt direkter Kritik verwendet man Formulierungen wie 'Wir haben mit Besorgnis zur Kenntnis genommen, dass...' oder 'Es bestehen nach wie vor Gesprächsbedarf in Bezug auf...'. Konjunktivformen, Passivkonstruktionen und Nominalisierungen sind typische Stilmittel. Die diplomatische Sprache dient dazu, Konflikte zu vermeiden, Gesicht zu wahren und Verhandlungsspielräume offenzuhalten.",
        textVi:
          "Ngôn ngữ ngoại giao đặc trưng bởi sự gián tiếp, uyển ngữ và giảm nhẹ. Thay vì phê bình trực tiếp, người ta dùng các cách diễn đạt như 'Chúng tôi đã ghi nhận với sự quan ngại rằng...' hoặc 'Vẫn còn nhu cầu thảo luận về...'. Các dạng Konjunktiv, cấu trúc bị động và danh từ hóa là những phương tiện tu từ điển hình. Ngôn ngữ ngoại giao nhằm tránh xung đột, giữ thể diện và giữ mở không gian đàm phán. Người Việt sẽ thấy quen thuộc vì văn hóa Việt cũng ưa chuộng sự gián tiếp và giữ hòa khí ('giữ thể diện' — tương đương 'das Gesicht wahren').",
      },
      {
        type: "vocabulary",
        titleDe: "Diplomatisches Vokabular",
        titleVi: "Từ vựng ngoại giao",
        words: [
          { de: "der Euphemismus", vi: "uyển ngữ / nói giảm nói tránh", article: "der" },
          { de: "die Abschwächung", vi: "sự giảm nhẹ", article: "die" },
          { de: "der Verhandlungsspielraum", vi: "không gian đàm phán", article: "der" },
          { de: "die Stellungnahme", vi: "tuyên bố lập trường", article: "die" },
          { de: "das Kommuniqué", vi: "thông cáo", article: "das" },
          { de: "die Resolution", vi: "nghị quyết", article: "die" },
          { de: "die Sanktion", vi: "biện pháp trừng phạt", article: "die" },
          { de: "das Memorandum", vi: "bản ghi nhớ", article: "das" },
          { de: "der Kompromiss", vi: "sự thỏa hiệp", article: "der" },
          { de: "die Vermittlung", vi: "sự hòa giải / trung gian", article: "die" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Pressekonferenz nach Verhandlungen",
        titleVi: "Họp báo sau đàm phán",
        lines: [
          {
            speaker: "Journalist",
            de: "Sind die Verhandlungen gescheitert?",
            vi: "Các cuộc đàm phán đã thất bại sao?",
          },
          {
            speaker: "Außenministerin",
            de: "Die Gespräche waren konstruktiv und intensiv. Beide Seiten haben sich darauf verständigt, den Dialog fortzusetzen.",
            vi: "Các cuộc đối thoại mang tính xây dựng và sâu sắc. Hai bên đã đồng ý tiếp tục đối thoại.",
          },
          {
            speaker: "Journalist",
            de: "Das heißt, es gibt keine Einigung?",
            vi: "Nghĩa là, chưa có thỏa thuận?",
          },
          {
            speaker: "Außenministerin",
            de: "Es wäre verfrüht, von einem Scheitern zu sprechen. Die Positionen liegen zwar noch auseinander, aber es gibt eine gemeinsame Bereitschaft, tragfähige Lösungen zu erarbeiten.",
            vi: "Còn quá sớm để nói về sự thất bại. Các lập trường tuy còn cách xa nhau, nhưng có sự sẵn sàng chung để tìm ra các giải pháp bền vững.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Diplomatisch umformulieren",
        titleVi: "Bài tập: Diễn đạt lại theo phong cách ngoại giao",
        instruction:
          "Formulieren Sie die folgenden direkten Aussagen in diplomatische Sprache um: 1) 'Ihr Vorschlag ist inakzeptabel.' 2) 'Das Land verletzt Menschenrechte.' 3) 'Wir lehnen Ihre Forderungen ab.' Achten Sie auf Konjunktiv, Passiv und Euphemismen.",
        instructionVi:
          "Diễn đạt lại các câu trực tiếp sau theo phong cách ngoại giao: 1) 'Đề xuất của quý vị không thể chấp nhận được.' 2) 'Đất nước đó vi phạm nhân quyền.' 3) 'Chúng tôi từ chối yêu cầu của quý vị.' Chú ý sử dụng Konjunktiv, bị động và uyển ngữ.",
      },
    ],
  },

  // --- Chapter 2, Lesson 3 ---
  {
    id: "c1-ch2-l3",
    chapterId: 2,
    lessonNumber: 3,
    title: "Verhandlungsführung",
    titleVi: "Kỹ năng đàm phán",
    type: "Fertigkeit",
    objectives: [
      "Nắm vững cấu trúc và các giai đoạn của một cuộc đàm phán bằng tiếng Đức",
      "Sử dụng chiến lược đàm phán: Win-Win, BATNA, Zugeständnisse",
      "Luyện kỹ năng lập luận và phản biện trong đàm phán",
      "Hiểu sự khác biệt văn hóa trong đàm phán giữa Đức và Việt Nam",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Phasen einer Verhandlung",
        titleVi: "Các giai đoạn của một cuộc đàm phán",
        textDe:
          "Eine professionelle Verhandlung gliedert sich in mehrere Phasen: Vorbereitung (Analyse der Interessen, BATNA bestimmen), Eröffnung (Positionen darlegen), Erkundung (Interessen hinter Positionen verstehen), Verhandlung (Zugeständnisse austauschen, Lösungen entwickeln) und Abschluss (Vereinbarung festhalten). Im deutschen Verhandlungsstil wird Wert auf Sachlichkeit, Vorbereitung und klare Argumentation gelegt.",
        textVi:
          "Một cuộc đàm phán chuyên nghiệp chia thành nhiều giai đoạn: Chuẩn bị (phân tích lợi ích, xác định BATNA — phương án thay thế tốt nhất), Khai mạc (trình bày lập trường), Khám phá (hiểu lợi ích đằng sau lập trường), Đàm phán (trao đổi nhượng bộ, phát triển giải pháp) và Kết thúc (ghi nhận thỏa thuận). Phong cách đàm phán Đức đề cao sự khách quan, chuẩn bị kỹ và lập luận rõ ràng. Khác với Việt Nam nơi mối quan hệ cá nhân (quan hệ) thường được xây dựng trước, người Đức thường đi thẳng vào vấn đề (zur Sache kommen).",
      },
      {
        type: "vocabulary",
        titleDe: "Verhandlungsvokabular",
        titleVi: "Từ vựng đàm phán",
        words: [
          { de: "das Zugeständnis", vi: "sự nhượng bộ", article: "das" },
          { de: "die Gegenleistung", vi: "sự đáp lại / đổi lại", article: "die" },
          { de: "der Verhandlungsspielraum", vi: "không gian đàm phán", article: "der" },
          { de: "die Kompromissbereitschaft", vi: "sự sẵn sàng thỏa hiệp", article: "die" },
          { de: "das Ultimatum", vi: "tối hậu thư", article: "das" },
          { de: "die Einigung", vi: "sự đồng thuận / thỏa thuận", article: "die" },
          { de: "der Interessenausgleich", vi: "sự cân bằng lợi ích", article: "der" },
          { de: "die Verhandlungsbasis", vi: "cơ sở đàm phán", article: "die" },
          { de: "das Entgegenkommen", vi: "sự nhân nhượng / thiện chí", article: "das" },
          { de: "die Pattsituation", vi: "thế bế tắc / ngõ cụt", article: "die" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Geschäftsverhandlung",
        titleVi: "Đàm phán kinh doanh",
        lines: [
          {
            speaker: "Herr Schmidt",
            de: "Wir schätzen Ihre langjährige Partnerschaft. Nichtsdestotrotz müssen wir über die Konditionen neu verhandeln.",
            vi: "Chúng tôi đánh giá cao sự hợp tác lâu năm. Tuy nhiên, chúng tôi cần đàm phán lại về các điều kiện.",
          },
          {
            speaker: "Frau Pham",
            de: "Wir sind selbstverständlich gesprächsbereit. Könnten Sie uns zunächst darlegen, welche Punkte Sie konkret ansprechen möchten?",
            vi: "Chúng tôi tất nhiên sẵn sàng đối thoại. Ông có thể trình bày trước những điểm cụ thể mà ông muốn thảo luận không?",
          },
          {
            speaker: "Herr Schmidt",
            de: "Es geht uns in erster Linie um die Lieferfristen. Wir würden eine Verkürzung auf 14 Tage anstreben.",
            vi: "Chúng tôi quan tâm trước hết đến thời hạn giao hàng. Chúng tôi muốn rút ngắn xuống 14 ngày.",
          },
          {
            speaker: "Frau Pham",
            de: "Das ist ein ambitioniertes Ziel. Wir wären bereit, Ihnen da entgegenzukommen, sofern wir uns bei den Zahlungsbedingungen einigen können.",
            vi: "Đó là một mục tiêu đầy tham vọng. Chúng tôi sẵn sàng nhượng bộ ở điểm này, miễn là chúng ta có thể thỏa thuận về điều kiện thanh toán.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Verhandlungssimulation",
        titleVi: "Bài tập: Mô phỏng đàm phán",
        instruction:
          "Simulieren Sie eine Verhandlung: Sie vertreten ein vietnamesisches Unternehmen, das seine Produkte in Deutschland vertreiben möchte. Ihr Verhandlungspartner fordert niedrigere Preise. Formulieren Sie: a) Ihre Eröffnungsposition, b) ein Zugeständnis, c) eine Gegenleistung.",
        instructionVi:
          "Mô phỏng một cuộc đàm phán: Bạn đại diện cho một doanh nghiệp Việt Nam muốn phân phối sản phẩm tại Đức. Đối tác yêu cầu giá thấp hơn. Hãy viết: a) Lập trường mở đầu, b) một nhượng bộ, c) một yêu cầu đổi lại.",
      },
    ],
  },

  // --- Chapter 2, Lesson 4 ---
  {
    id: "c1-ch2-l4",
    chapterId: 2,
    lessonNumber: 4,
    title: "Komplexe Partizipialkonstruktionen",
    titleVi: "Cấu trúc phân từ phức tạp",
    type: "Grammatik",
    objectives: [
      "Hiểu và sử dụng cấu trúc phân từ mở rộng (erweitertes Partizipialattribut)",
      "Chuyển đổi giữa mệnh đề quan hệ và cấu trúc phân từ",
      "Nhận diện cấu trúc phân từ trong văn bản học thuật và báo chí",
      "Phân biệt Partizip I (hiện tại) và Partizip II (quá khứ) trong vai trò tính từ",
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Erweiterte Partizipialattribute",
        titleVi: "Tính từ phân từ mở rộng",
        rule:
          "Im Deutschen können Partizipien als Attribute vor dem Nomen stehen und durch weitere Angaben erweitert werden. Diese Konstruktionen ersetzen Relativsätze und sind typisch für die Schriftsprache. Partizip I (Präsens): 'der laut weinende Mann' = 'der Mann, der laut weint'. Partizip II (Perfekt): 'das von Experten empfohlene Buch' = 'das Buch, das von Experten empfohlen wurde'. Die Erweiterung steht zwischen Artikel und Partizip.",
        ruleVi:
          "Trong tiếng Đức, phân từ có thể đứng trước danh từ như tính từ và được mở rộng bởi các thành phần bổ sung. Cấu trúc này thay thế mệnh đề quan hệ và rất phổ biến trong văn viết. Partizip I (hiện tại): 'der laut weinende Mann' = 'người đàn ông đang khóc to'. Partizip II (quá khứ): 'das von Experten empfohlene Buch' = 'cuốn sách được chuyên gia khuyến nghị'. Phần mở rộng đứng giữa mạo từ và phân từ. Cấu trúc này không có trong tiếng Việt — tiếng Việt dùng mệnh đề 'mà/được' sau danh từ. Đây là một đặc trưng quan trọng của tiếng Đức ở trình độ C1.",
        examples: [
          {
            de: "Die seit Jahren im Ausland lebenden Vietnamesen vermissen ihre Heimat.",
            vi: "Những người Việt sống ở nước ngoài từ nhiều năm nay nhớ quê hương. (Partizip I mở rộng)",
          },
          {
            de: "Das von der Regierung kürzlich verabschiedete Gesetz tritt morgen in Kraft.",
            vi: "Luật mới được chính phủ thông qua gần đây sẽ có hiệu lực vào ngày mai. (Partizip II mở rộng)",
          },
          {
            de: "Der auf der Konferenz intensiv diskutierte Vorschlag wurde schließlich angenommen.",
            vi: "Đề xuất được thảo luận sôi nổi tại hội nghị cuối cùng đã được thông qua. (Partizip II mở rộng)",
          },
          {
            de: "Die ständig steigenden Energiepreise belasten die Verbraucher.",
            vi: "Giá năng lượng không ngừng tăng gây áp lực cho người tiêu dùng. (Partizip I mở rộng)",
          },
        ],
      },
      {
        type: "grammar",
        titleDe: "Umformung: Relativsatz ↔ Partizipialattribut",
        titleVi: "Chuyển đổi: Mệnh đề quan hệ ↔ Tính từ phân từ",
        rule:
          "Relativsätze im Aktiv werden zu Partizip-I-Konstruktionen umgeformt, Relativsätze im Passiv zu Partizip-II-Konstruktionen. Wichtig: Das Partizip wird wie ein Adjektiv dekliniert und muss in Genus, Numerus und Kasus mit dem Bezugsnomen übereinstimmen.",
        ruleVi:
          "Mệnh đề quan hệ dạng chủ động chuyển thành cấu trúc Partizip I, mệnh đề quan hệ dạng bị động chuyển thành cấu trúc Partizip II. Quan trọng: Phân từ được biến cách như tính từ và phải phù hợp với danh từ về giống, số và cách. Mẹo: Đọc ngược từ danh từ ra ngoài để hiểu nghĩa — 'das von vielen Menschen gelesene Buch' → bắt đầu từ 'Buch' (sách), rồi đọc 'gelesene' (được đọc), 'von vielen Menschen' (bởi nhiều người) = 'cuốn sách được nhiều người đọc'.",
        examples: [
          {
            de: "Der Student, der fleißig lernt → der fleißig lernende Student",
            vi: "Sinh viên siêng năng học → sinh viên học siêng năng (Relativsatz → Partizip I)",
          },
          {
            de: "Das Haus, das im 18. Jahrhundert erbaut wurde → das im 18. Jahrhundert erbaute Haus",
            vi: "Ngôi nhà được xây vào thế kỷ 18 (Relativsatz Passiv → Partizip II)",
          },
          {
            de: "Die Probleme, die daraus entstehen → die daraus entstehenden Probleme",
            vi: "Các vấn đề phát sinh từ đó (Relativsatz → Partizip I)",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Partizipialkonstruktionen bilden und auflösen",
        titleVi: "Bài tập: Tạo và phân giải cấu trúc phân từ",
        instruction:
          "A) Formen Sie die Relativsätze in Partizipialattribute um: 1) 'Die Firma, die weltweit exportiert, hat ihren Sitz in München.' 2) 'Die Studie, die von der Universität durchgeführt wurde, zeigt interessante Ergebnisse.' B) Lösen Sie die Partizipialkonstruktionen in Relativsätze auf: 1) 'Die seit Monaten anhaltende Dürre...' 2) 'Die vom Parlament beschlossenen Maßnahmen...'",
        instructionVi:
          "A) Chuyển mệnh đề quan hệ thành tính từ phân từ: 1) 'Công ty xuất khẩu toàn cầu có trụ sở tại München.' 2) 'Nghiên cứu được đại học thực hiện cho thấy kết quả thú vị.' B) Phân giải cấu trúc phân từ thành mệnh đề quan hệ: 1) 'Hạn hán kéo dài nhiều tháng...' 2) 'Các biện pháp được Nghị viện thông qua...'",
      },
    ],
  },

  // =====================================================================
  // CHAPTER 3: Umweltpolitik & Klimaforschung
  // =====================================================================

  // --- Chapter 3, Lesson 1 ---
  {
    id: "c1-ch3-l1",
    chapterId: 3,
    lessonNumber: 1,
    title: "Klimaabkommen & Umweltgesetze",
    titleVi: "Hiệp định khí hậu và luật môi trường",
    type: "Einführung",
    objectives: [
      "Hiểu nội dung chính của Hiệp định Paris và các hiệp định khí hậu quốc tế",
      "Nắm vững từ vựng về chính sách môi trường và khí hậu",
      "Thảo luận về Energiewende (chuyển đổi năng lượng) của Đức",
      "Liên hệ với tác động biến đổi khí hậu ở Việt Nam (mực nước biển dâng, bão)",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das Pariser Klimaabkommen und die deutsche Klimapolitik",
        titleVi: "Hiệp định Khí hậu Paris và chính sách khí hậu của Đức",
        textDe:
          "Das Pariser Klimaabkommen von 2015 verpflichtet die Unterzeichnerstaaten, die globale Erwärmung auf deutlich unter 2 Grad Celsius, möglichst auf 1,5 Grad, zu begrenzen. Deutschland hat sich im Rahmen des Klimaschutzgesetzes (2019, novelliert 2021) das Ziel gesetzt, bis 2045 klimaneutral zu werden. Die Energiewende — der Umbau des Energiesystems hin zu erneuerbaren Energien — ist dabei ein zentrales Element. Instrumente wie der CO₂-Preis, das Erneuerbare-Energien-Gesetz (EEG) und der Emissionshandel sollen diesen Übergang beschleunigen.",
        textVi:
          "Hiệp định Khí hậu Paris năm 2015 bắt buộc các quốc gia ký kết hạn chế sự nóng lên toàn cầu dưới 2 độ C, tốt nhất là 1,5 độ. Đức đã đặt mục tiêu trung hòa khí hậu vào năm 2045 theo Luật Bảo vệ Khí hậu (2019, sửa đổi 2021). Chuyển đổi năng lượng (Energiewende) — việc cải tổ hệ thống năng lượng sang năng lượng tái tạo — là yếu tố trung tâm. Các công cụ như giá CO₂, Luật Năng lượng Tái tạo (EEG) và hệ thống giao dịch phát thải nhằm đẩy nhanh quá trình chuyển đổi này. Việt Nam là một trong những nước chịu ảnh hưởng nặng nhất bởi biến đổi khí hậu — đồng bằng sông Cửu Long đặc biệt dễ bị tổn thương trước mực nước biển dâng.",
      },
      {
        type: "vocabulary",
        titleDe: "Umwelt- und Klimapolitik",
        titleVi: "Chính sách môi trường và khí hậu",
        words: [
          { de: "der Klimawandel", vi: "biến đổi khí hậu", article: "der" },
          { de: "die Treibhausgasemission", vi: "lượng phát thải khí nhà kính", article: "die" },
          { de: "die Klimaneutralität", vi: "sự trung hòa khí hậu", article: "die" },
          { de: "die Energiewende", vi: "chuyển đổi năng lượng", article: "die" },
          { de: "die erneuerbaren Energien", vi: "năng lượng tái tạo", article: "die" },
          { de: "der Emissionshandel", vi: "hệ thống giao dịch phát thải", article: "der" },
          { de: "der CO₂-Fußabdruck", vi: "dấu chân carbon", article: "der" },
          { de: "die Dekarbonisierung", vi: "sự phi carbon hóa", article: "die" },
          { de: "das Klimaschutzgesetz", vi: "Luật Bảo vệ Khí hậu", article: "das" },
          { de: "die Anpassungsstrategie", vi: "chiến lược thích ứng", article: "die" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Diskussion über Klimapolitik",
        titleVi: "Thảo luận về chính sách khí hậu",
        lines: [
          {
            speaker: "Moderator",
            de: "Wie bewerten Sie die Fortschritte Deutschlands bei der Energiewende?",
            vi: "Bạn đánh giá thế nào về tiến bộ của Đức trong chuyển đổi năng lượng?",
          },
          {
            speaker: "Hoa",
            de: "Deutschland hat zweifellos eine Vorreiterrolle eingenommen, insbesondere beim Ausbau der erneuerbaren Energien. Allerdings bleibt der Kohleausstieg ein kontrovers diskutiertes Thema.",
            vi: "Đức chắc chắn đã đóng vai trò tiên phong, đặc biệt trong phát triển năng lượng tái tạo. Tuy nhiên, việc loại bỏ than đá vẫn là chủ đề gây tranh cãi.",
          },
          {
            speaker: "Moderator",
            de: "Und wie sieht es in Vietnam aus?",
            vi: "Còn tình hình ở Việt Nam thì sao?",
          },
          {
            speaker: "Hoa",
            de: "Vietnam steht vor einer doppelten Herausforderung: Einerseits ist das Land besonders vom Klimawandel betroffen — das Mekongdelta droht zu versinken. Andererseits wächst die Wirtschaft rasant und der Energiebedarf steigt. Die Regierung hat sich aber auf der COP26 zur Klimaneutralität bis 2050 verpflichtet.",
            vi: "Việt Nam đối mặt với thách thức kép: Một mặt, đất nước chịu ảnh hưởng đặc biệt bởi biến đổi khí hậu — đồng bằng sông Cửu Long có nguy cơ bị nhấn chìm. Mặt khác, kinh tế tăng trưởng nhanh và nhu cầu năng lượng tăng. Tuy nhiên, chính phủ đã cam kết trung hòa khí hậu vào 2050 tại COP26.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Stellungnahme zur Klimapolitik",
        titleVi: "Bài tập: Viết tuyên bố lập trường về chính sách khí hậu",
        instruction:
          "Verfassen Sie eine Stellungnahme (ca. 250 Wörter) zum Thema: 'Sollten Industrieländer wie Deutschland eine größere Verantwortung für den Klimaschutz übernehmen als Entwicklungsländer?' Berücksichtigen Sie Gegenargumente und verwenden Sie Konjunktiv I für indirekte Rede.",
        instructionVi:
          "Viết một bài lập trường (khoảng 250 từ) về chủ đề: 'Các nước công nghiệp như Đức có nên chịu trách nhiệm lớn hơn về bảo vệ khí hậu so với các nước đang phát triển không?' Xem xét các phản biện và sử dụng Konjunktiv I cho câu gián tiếp.",
      },
    ],
  },

  // --- Chapter 3, Lesson 2 ---
  {
    id: "c1-ch3-l2",
    chapterId: 3,
    lessonNumber: 2,
    title: "Wissenschaftliche Berichte analysieren",
    titleVi: "Phân tích báo cáo khoa học",
    type: "Fertigkeit",
    objectives: [
      "Đọc và phân tích cấu trúc báo cáo khoa học tiếng Đức",
      "Nhận diện phương pháp luận, kết quả và kết luận trong văn bản khoa học",
      "Sử dụng từ vựng khoa học và cách trích dẫn trong tiếng Đức",
      "Viết tóm tắt khoa học (Abstract) bằng tiếng Đức",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Aufbau und Analyse wissenschaftlicher Berichte",
        titleVi: "Cấu trúc và phân tích báo cáo khoa học",
        textDe:
          "Wissenschaftliche Berichte folgen einer standardisierten Struktur: Zusammenfassung (Abstract), Einleitung (Fragestellung und Forschungsstand), Methodik (Vorgehensweise), Ergebnisse (Daten und Befunde), Diskussion (Interpretation und Einordnung) und Fazit (Schlussfolgerungen). Beim Analysieren eines Berichts sollte man auf die Forschungsfrage, die Methodik, die Validität der Ergebnisse und die Schlüssigkeit der Argumentation achten. Kritisches Lesen bedeutet, zwischen Fakten, Interpretationen und Meinungen zu unterscheiden.",
        textVi:
          "Báo cáo khoa học tuân theo cấu trúc chuẩn: Tóm tắt (Abstract), Mở đầu (câu hỏi nghiên cứu và tổng quan), Phương pháp (cách tiến hành), Kết quả (dữ liệu và phát hiện), Thảo luận (giải thích và đánh giá) và Kết luận (các kết luận). Khi phân tích báo cáo, cần chú ý câu hỏi nghiên cứu, phương pháp, tính hợp lệ của kết quả và tính logic của lập luận. Đọc phê phán có nghĩa là phân biệt giữa sự kiện, cách giải thích và ý kiến.",
      },
      {
        type: "vocabulary",
        titleDe: "Wissenschaftssprache",
        titleVi: "Ngôn ngữ khoa học",
        words: [
          { de: "die Hypothese", vi: "giả thuyết", article: "die" },
          { de: "die Forschungsfrage", vi: "câu hỏi nghiên cứu", article: "die" },
          { de: "die Methodik", vi: "phương pháp luận", article: "die" },
          { de: "der Befund", vi: "phát hiện / kết quả khám phá", article: "der" },
          { de: "die Schlussfolgerung", vi: "kết luận", article: "die" },
          { de: "die Validität", vi: "tính hợp lệ / giá trị", article: "die" },
          { de: "die empirische Studie", vi: "nghiên cứu thực nghiệm", article: "die" },
          { de: "die Korrelation", vi: "tương quan", article: "die" },
          { de: "die Stichprobe", vi: "mẫu nghiên cứu", article: "die" },
          { de: "die Signifikanz", vi: "tính có ý nghĩa (thống kê)", article: "die" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Diskussion über einen Forschungsbericht",
        titleVi: "Thảo luận về một báo cáo nghiên cứu",
        lines: [
          {
            speaker: "Prof. Klein",
            de: "Was fällt Ihnen an der Methodik dieser Studie auf?",
            vi: "Bạn nhận thấy điều gì về phương pháp của nghiên cứu này?",
          },
          {
            speaker: "Linh",
            de: "Die Stichprobe erscheint mir relativ klein — nur 120 Teilnehmende. Das könnte die Generalisierbarkeit der Ergebnisse einschränken.",
            vi: "Mẫu nghiên cứu dường như khá nhỏ — chỉ 120 người tham gia. Điều đó có thể hạn chế khả năng khái quát hóa kết quả.",
          },
          {
            speaker: "Prof. Klein",
            de: "Guter Punkt. Und wie bewerten Sie die Schlussfolgerungen der Autoren?",
            vi: "Ý hay. Và bạn đánh giá thế nào về kết luận của các tác giả?",
          },
          {
            speaker: "Linh",
            de: "Die Autoren stellen eine Korrelation zwischen den Variablen fest, schließen aber meines Erachtens voreilig auf eine Kausalität. Es heißt ja bekanntlich: Korrelation impliziert nicht Kausalität.",
            vi: "Các tác giả xác nhận mối tương quan giữa các biến số, nhưng theo tôi, họ kết luận về quan hệ nhân quả một cách vội vàng. Như câu nói nổi tiếng: Tương quan không có nghĩa là nhân quả.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Ein Abstract verfassen",
        titleVi: "Bài tập: Viết tóm tắt khoa học",
        instruction:
          "Verfassen Sie ein Abstract (ca. 150 Wörter) zu einer fiktiven Studie über die Auswirkungen des Klimawandels auf die Landwirtschaft im Mekongdelta. Strukturieren Sie es nach: Hintergrund, Methodik, Ergebnisse, Schlussfolgerung. Verwenden Sie unpersönliche Konstruktionen und Fachvokabular.",
        instructionVi:
          "Viết một bản tóm tắt khoa học (khoảng 150 từ) cho một nghiên cứu giả định về tác động của biến đổi khí hậu đến nông nghiệp ở đồng bằng sông Cửu Long. Cấu trúc: Bối cảnh, Phương pháp, Kết quả, Kết luận. Sử dụng cấu trúc phi cá nhân và từ vựng chuyên ngành.",
      },
    ],
  },

  // --- Chapter 3, Lesson 3 ---
  {
    id: "c1-ch3-l3",
    chapterId: 3,
    lessonNumber: 3,
    title: "Podiumsdiskussionen führen",
    titleVi: "Dẫn dắt thảo luận diễn đàn",
    type: "Fertigkeit",
    objectives: [
      "Nắm vững kỹ năng dẫn dắt và tham gia thảo luận diễn đàn (Podiumsdiskussion)",
      "Sử dụng các cách mở đầu, chuyển tiếp và kết luận trong thảo luận",
      "Luyện kỹ năng ngắt lời lịch sự, phản biện và đồng tình",
      "Trình bày lập luận có cấu trúc về chủ đề môi trường",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Redemittel für Podiumsdiskussionen",
        titleVi: "Các cách diễn đạt cho thảo luận diễn đàn",
        textDe:
          "Eine erfolgreiche Podiumsdiskussion erfordert spezifische sprachliche Mittel. Zum Einleiten: 'Ich möchte zunächst darauf hinweisen, dass...', 'Lassen Sie mich einen Aspekt hervorheben...'. Zum Widersprechen: 'Da muss ich Ihnen leider widersprechen...', 'Das sehe ich grundlegend anders...'. Zum Zustimmen: 'Da bin ich ganz Ihrer Meinung...', 'Das kann ich nur unterstreichen...'. Zum Zusammenfassen: 'Zusammenfassend lässt sich sagen...', 'Um es auf den Punkt zu bringen...'.",
        textVi:
          "Một cuộc thảo luận diễn đàn thành công đòi hỏi các phương tiện ngôn ngữ cụ thể. Để mở đầu: 'Tôi muốn trước hết chỉ ra rằng...', 'Cho phép tôi nhấn mạnh một khía cạnh...'. Để phản đối: 'Tôi tiếc phải phản đối ý kiến của bạn...', 'Tôi nhìn nhận vấn đề này hoàn toàn khác...'. Để đồng ý: 'Tôi hoàn toàn đồng ý với bạn...', 'Tôi chỉ có thể nhấn mạnh thêm...'. Để tóm tắt: 'Tóm lại có thể nói...', 'Nói ngắn gọn...'. Lưu ý: Trong văn hóa Đức, việc tranh luận trực tiếp được coi là bình thường và không mang tính cá nhân — khác với Việt Nam nơi người ta thường tránh đối đầu trực tiếp.",
      },
      {
        type: "vocabulary",
        titleDe: "Diskussionsvokabular",
        titleVi: "Từ vựng thảo luận",
        words: [
          { de: "die Podiumsdiskussion", vi: "thảo luận diễn đàn / hội thảo bàn tròn", article: "die" },
          { de: "der Diskutant", vi: "người tham gia thảo luận", article: "der" },
          { de: "die Moderation", vi: "sự dẫn dắt / điều phối", article: "die" },
          { de: "das Gegenargument", vi: "phản biện / luận điểm đối lập", article: "das" },
          { de: "die Schlussfolgerung", vi: "kết luận", article: "die" },
          { de: "der Standpunkt", vi: "quan điểm / lập trường", article: "der" },
          { de: "die Kontroverse", vi: "sự tranh cãi", article: "die" },
          { de: "das Plädoyer", vi: "bài biện hộ / lời kêu gọi mạnh mẽ", article: "das" },
          { de: "der Konsens", vi: "sự đồng thuận", article: "der" },
          { de: "die Abwägung", vi: "sự cân nhắc / đánh giá", article: "die" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Podiumsdiskussion: Klimaschutz vs. Wirtschaftswachstum",
        titleVi: "Thảo luận diễn đàn: Bảo vệ khí hậu vs. Tăng trưởng kinh tế",
        lines: [
          {
            speaker: "Moderatorin",
            de: "Lässt sich Klimaschutz mit wirtschaftlichem Wachstum vereinbaren? Frau Nguyen, beginnen Sie bitte.",
            vi: "Bảo vệ khí hậu có thể kết hợp với tăng trưởng kinh tế không? Bà Nguyen, mời bà bắt đầu.",
          },
          {
            speaker: "Frau Nguyen",
            de: "Ich bin der festen Überzeugung, dass grünes Wachstum kein Widerspruch ist. Die Energiewende schafft Millionen neuer Arbeitsplätze — allein im Bereich der erneuerbaren Energien.",
            vi: "Tôi tin chắc rằng tăng trưởng xanh không phải là mâu thuẫn. Chuyển đổi năng lượng tạo ra hàng triệu việc làm mới — riêng trong lĩnh vực năng lượng tái tạo.",
          },
          {
            speaker: "Herr Braun",
            de: "Da muss ich Ihnen teilweise widersprechen. Die Transformation ist für viele Industriezweige existenzbedrohend. Man darf die sozialen Kosten nicht unterschätzen.",
            vi: "Tôi phải phản đối bà một phần. Sự chuyển đổi đe dọa sự tồn tại của nhiều ngành công nghiệp. Không nên đánh giá thấp chi phí xã hội.",
          },
          {
            speaker: "Frau Nguyen",
            de: "Diesen Einwand kann ich nachvollziehen, allerdings zeigen Studien, dass die Kosten des Nichthandelns die Kosten der Transformation bei weitem übersteigen.",
            vi: "Tôi có thể hiểu phản đối này, tuy nhiên các nghiên cứu cho thấy chi phí của việc không hành động vượt xa chi phí chuyển đổi.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Podiumsdiskussion vorbereiten",
        titleVi: "Bài tập: Chuẩn bị thảo luận diễn đàn",
        instruction:
          "Bereiten Sie einen dreiminütigen Beitrag für eine Podiumsdiskussion zum Thema 'Sollte Vietnam verstärkt auf Atomenergie setzen?' vor. Strukturieren Sie: These, drei Argumente mit Belegen, Antizipation eines Gegenarguments, Schlussappell. Verwenden Sie die gelernten Redemittel.",
        instructionVi:
          "Chuẩn bị một bài phát biểu ba phút cho thảo luận diễn đàn về chủ đề 'Việt Nam có nên đẩy mạnh sử dụng năng lượng hạt nhân không?' Cấu trúc: Luận điểm, ba luận cứ có bằng chứng, dự đoán một phản biện, lời kêu gọi kết thúc. Sử dụng các cách diễn đạt đã học.",
      },
    ],
  },

  // --- Chapter 3, Lesson 4 ---
  {
    id: "c1-ch3-l4",
    chapterId: 3,
    lessonNumber: 4,
    title: "Funktionsverbgefüge (erweitert)",
    titleVi: "Cụm động từ chức năng (nâng cao)",
    type: "Grammatik",
    objectives: [
      "Hiểu và sử dụng Funktionsverbgefüge nâng cao trong văn bản học thuật",
      "Phân biệt Funktionsverbgefüge với cụm từ thông thường",
      "Chuyển đổi giữa Funktionsverbgefüge và động từ đơn giản",
      "Nhận diện sắc thái nghĩa: bắt đầu hành động, đang diễn ra, kết thúc hành động",
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Erweiterte Funktionsverbgefüge",
        titleVi: "Cụm động từ chức năng nâng cao",
        rule:
          "Funktionsverbgefüge (FVG) bestehen aus einem Funktionsverb (das seine eigentliche Bedeutung verloren hat) und einem nominalen Teil, der die Hauptbedeutung trägt. Sie drücken Aspektunterschiede aus: Beginn (in Gang bringen/kommen, unter Druck setzen/geraten), Verlauf (in Betrieb sein, zur Verfügung stehen) und Ende (zum Abschluss bringen/kommen, zum Stillstand bringen/kommen). Die Wahl zwischen 'bringen' (kausativ) und 'kommen/geraten' (nicht-kausativ) ist bedeutungsunterscheidend.",
        ruleVi:
          "Cụm động từ chức năng (FVG) gồm một động từ chức năng (đã mất nghĩa gốc) và một phần danh từ mang nghĩa chính. Chúng diễn đạt các sắc thái hành động: Bắt đầu (in Gang bringen/kommen — khởi động, unter Druck setzen/geraten — gây/chịu áp lực), Đang diễn ra (in Betrieb sein — đang hoạt động, zur Verfügung stehen — sẵn có) và Kết thúc (zum Abschluss bringen/kommen — hoàn thành, zum Stillstand bringen/kommen — dừng hẳn). Phân biệt 'bringen' (chủ động gây ra) và 'kommen/geraten' (bị tác động) rất quan trọng. Tiếng Việt không có cấu trúc tương đương — FVG thuộc phong cách trang trọng, phổ biến trong văn bản hành chính và khoa học.",
        examples: [
          {
            de: "Die Regierung brachte das Reformprojekt in Gang.",
            vi: "Chính phủ đã khởi động dự án cải cách. (in Gang bringen = khởi động — kausativ)",
          },
          {
            de: "Die Verhandlungen kamen zum Stillstand.",
            vi: "Các cuộc đàm phán đã đi vào bế tắc. (zum Stillstand kommen = dừng lại — nicht-kausativ)",
          },
          {
            de: "Der Wissenschaftler stellte seine Daten zur Verfügung.",
            vi: "Nhà khoa học cung cấp dữ liệu của mình. (zur Verfügung stellen = cung cấp)",
          },
          {
            de: "Die Studie kam zu dem Ergebnis, dass der Klimawandel sich beschleunigt.",
            vi: "Nghiên cứu đi đến kết luận rằng biến đổi khí hậu đang tăng tốc. (zu dem Ergebnis kommen = đi đến kết luận)",
          },
        ],
      },
      {
        type: "grammar",
        titleDe: "FVG in der Wissenschafts- und Verwaltungssprache",
        titleVi: "FVG trong ngôn ngữ khoa học và hành chính",
        rule:
          "In wissenschaftlichen und administrativen Texten sind FVG besonders häufig, da sie präziser und formeller wirken als einfache Verben. Vergleich: 'beeinflussen' → 'Einfluss nehmen auf' (aktiver, gezielter); 'berücksichtigen' → 'Berücksichtigung finden' / 'in Betracht ziehen'; 'sich entwickeln' → 'eine Entwicklung nehmen/erfahren'. Oft drücken FVG auch Passivbedeutung aus: 'Anerkennung finden' = 'anerkannt werden'.",
        ruleVi:
          "Trong văn bản khoa học và hành chính, FVG đặc biệt phổ biến vì chúng mang tính chính xác và trang trọng hơn động từ đơn giản. So sánh: 'beeinflussen' → 'Einfluss nehmen auf' (chủ động hơn, có mục đích); 'berücksichtigen' → 'Berücksichtigung finden' / 'in Betracht ziehen' (xem xét); 'sich entwickeln' → 'eine Entwicklung nehmen/erfahren' (trải qua sự phát triển). FVG thường cũng diễn đạt nghĩa bị động: 'Anerkennung finden' = 'được công nhận'. Mẹo học: Hãy ghi nhớ FVG theo cặp kausativ/nicht-kausativ (bringen/kommen, setzen/geraten).",
        examples: [
          {
            de: "Die Maßnahme muss Berücksichtigung finden. (= muss berücksichtigt werden)",
            vi: "Biện pháp này phải được xem xét. (FVG với nghĩa bị động)",
          },
          {
            de: "Der Vorschlag fand breite Zustimmung. (= wurde breit zugestimmt)",
            vi: "Đề xuất nhận được sự đồng thuận rộng rãi. (FVG với nghĩa bị động)",
          },
          {
            de: "Die Regierung nahm Einfluss auf die Gesetzgebung.",
            vi: "Chính phủ đã tác động đến lập pháp. (Einfluss nehmen = tác động có chủ đích)",
          },
          {
            de: "Das Problem muss in Angriff genommen werden.",
            vi: "Vấn đề phải được giải quyết. (in Angriff nehmen = bắt tay giải quyết)",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: FVG anwenden und umformen",
        titleVi: "Bài tập: Áp dụng và chuyển đổi FVG",
        instruction:
          "A) Ersetzen Sie die einfachen Verben durch passende FVG: 1) 'Die Forschung beeinflusste die Politik.' 2) 'Die Umweltprobleme verschlimmern sich.' 3) 'Man muss die Risiken berücksichtigen.' B) Vereinfachen Sie die FVG zu einfachen Verben: 1) 'Die Maßnahme wurde in Kraft gesetzt.' 2) 'Die Diskussion kam zum Abschluss.' 3) 'Er brachte seine Kritik zum Ausdruck.'",
        instructionVi:
          "A) Thay thế động từ đơn giản bằng FVG phù hợp: 1) 'Nghiên cứu ảnh hưởng đến chính sách.' 2) 'Các vấn đề môi trường trở nên nghiêm trọng hơn.' 3) 'Người ta phải xem xét các rủi ro.' B) Đơn giản hóa FVG thành động từ đơn: 1) 'Biện pháp đã được đưa vào hiệu lực.' 2) 'Cuộc thảo luận đã kết thúc.' 3) 'Anh ấy bày tỏ sự phê bình.'",
      },
    ],
  },
];
