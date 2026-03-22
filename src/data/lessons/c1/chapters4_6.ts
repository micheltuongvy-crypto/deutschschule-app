// C1 Chapters 4-6: Kulturwissenschaft & Identität, Wirtschaftsethik & Unternehmensführung, Medienethik & Journalismus

import type { Lesson, ContentBlock } from "../a1/chapters1_3";

export const c1LessonsCh4_6: Lesson[] = [
  // ============================================================
  // CHAPTER 4: Kulturwissenschaft & Identität
  // ============================================================

  // --- Chapter 4, Lesson 1: Kulturelle Identität & Migration ---
  {
    id: "c1-ch4-l1",
    chapterId: 4,
    lessonNumber: 1,
    title: "Kulturelle Identität & Migration",
    titleVi: "Bản sắc văn hóa & Di cư",
    type: "Einführung",
    objectives: [
      "Phân tích khái niệm bản sắc văn hóa trong bối cảnh di cư",
      "Thảo luận về quá trình hội nhập và đồng hóa văn hóa",
      "Sử dụng từ vựng chuyên ngành về xã hội học văn hóa"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Kulturelle Identität im Wandel",
        titleVi: "Bản sắc văn hóa trong sự biến đổi",
        textDe: "Kulturelle Identität ist kein starres Konstrukt, sondern ein dynamischer Prozess, der sich im Spannungsfeld zwischen Herkunftskultur und Aufnahmegesellschaft entfaltet. Migrantinnen und Migranten stehen vor der Herausforderung, ihre kulturellen Wurzeln zu bewahren und sich gleichzeitig in die neue Gesellschaft zu integrieren. Dieses Phänomen wird in der Soziologie als 'hybride Identität' bezeichnet — eine Identität, die Elemente verschiedener Kulturen in sich vereint.",
        textVi: "Bản sắc văn hóa không phải là một cấu trúc cứng nhắc, mà là một quá trình năng động, diễn ra trong trường lực giữa văn hóa gốc và xã hội tiếp nhận. Người di cư đứng trước thách thức phải bảo tồn gốc rễ văn hóa của mình, đồng thời hòa nhập vào xã hội mới. Hiện tượng này được xã hội học gọi là 'bản sắc lai' — một bản sắc kết hợp các yếu tố của nhiều nền văn hóa khác nhau."
      },
      {
        type: "vocabulary",
        titleDe: "Schlüsselbegriffe: Migration & Identität",
        titleVi: "Thuật ngữ chính: Di cư & Bản sắc",
        words: [
          { de: "die kulturelle Identität", vi: "bản sắc văn hóa", article: "die" },
          { de: "die Herkunftskultur", vi: "văn hóa gốc", article: "die" },
          { de: "die Aufnahmegesellschaft", vi: "xã hội tiếp nhận", article: "die" },
          { de: "die Integration", vi: "sự hội nhập", article: "die" },
          { de: "die Assimilation", vi: "sự đồng hóa", article: "die" },
          { de: "die hybride Identität", vi: "bản sắc lai", article: "die" },
          { de: "die Akkulturation", vi: "sự tiếp biến văn hóa", article: "die" },
          { de: "der Kulturschock", vi: "sốc văn hóa", article: "der" },
          { de: "die Diaspora", vi: "cộng đồng kiều bào", article: "die" },
          { de: "die Multikulturalität", vi: "đa văn hóa", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Podiumsdiskussion: Integration und Identität",
        titleVi: "Thảo luận diễn đàn: Hội nhập và Bản sắc",
        lines: [
          { speaker: "Moderatorin", de: "Frau Nguyễn, Sie leben seit 20 Jahren in Deutschland. Wie würden Sie Ihre kulturelle Identität beschreiben?", vi: "Chị Nguyễn, chị đã sống ở Đức 20 năm. Chị sẽ mô tả bản sắc văn hóa của mình như thế nào?" },
          { speaker: "Frau Nguyễn", de: "Ich würde sagen, ich habe eine hybride Identität entwickelt. Ich fühle mich sowohl der vietnamesischen als auch der deutschen Kultur zugehörig, ohne mich auf eine festlegen zu müssen.", vi: "Tôi có thể nói rằng tôi đã phát triển một bản sắc lai. Tôi cảm thấy mình thuộc về cả văn hóa Việt Nam lẫn văn hóa Đức, mà không cần phải chọn một bên." },
          { speaker: "Prof. Weber", de: "Das ist ein ausgezeichnetes Beispiel für das, was wir in der Kulturwissenschaft als 'dritter Raum' bezeichnen — ein Identitätsraum jenseits binärer Zuordnungen.", vi: "Đó là một ví dụ xuất sắc cho điều mà chúng tôi trong ngành văn hóa học gọi là 'không gian thứ ba' — một không gian bản sắc vượt ra ngoài sự phân loại nhị nguyên." },
          { speaker: "Frau Nguyễn", de: "Genau. Integration bedeutet für mich nicht, meine vietnamesischen Wurzeln aufzugeben, sondern sie in ein neues Gesamtbild einzufügen.", vi: "Chính xác. Hội nhập với tôi không có nghĩa là từ bỏ gốc rễ Việt Nam, mà là đưa chúng vào một bức tranh tổng thể mới." }
        ]
      },
      {
        type: "practice",
        titleDe: "Essayaufgabe: Kulturelle Identität",
        titleVi: "Bài luận: Bản sắc văn hóa",
        instruction: "Verfassen Sie einen argumentativen Essay (ca. 300 Wörter) zum Thema: 'Inwiefern verändert Migration die kulturelle Identität eines Menschen?' Beziehen Sie sich auf die Begriffe hybride Identität, Akkulturation und dritter Raum.",
        instructionVi: "Viết một bài luận lập luận (khoảng 300 từ) về chủ đề: 'Sự di cư thay đổi bản sắc văn hóa của một người đến mức nào?' Hãy sử dụng các khái niệm bản sắc lai, tiếp biến văn hóa và không gian thứ ba."
      }
    ]
  },

  // --- Chapter 4, Lesson 2: Postkoloniale Perspektiven ---
  {
    id: "c1-ch4-l2",
    chapterId: 4,
    lessonNumber: 2,
    title: "Postkoloniale Perspektiven",
    titleVi: "Góc nhìn hậu thuộc địa",
    type: "Einführung",
    objectives: [
      "Hiểu các khái niệm cơ bản của lý thuyết hậu thuộc địa",
      "Phân tích mối quan hệ quyền lực trong diễn ngôn văn hóa",
      "Thảo luận phản biện về di sản thuộc địa trong xã hội hiện đại"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Grundlagen der postkolonialen Theorie",
        titleVi: "Cơ sở lý thuyết hậu thuộc địa",
        textDe: "Die postkoloniale Theorie untersucht die kulturellen, politischen und ökonomischen Nachwirkungen des Kolonialismus. Zentrale Denker wie Edward Said, Gayatri Spivak und Homi Bhabha haben aufgezeigt, wie koloniale Machtverhältnisse bis heute in Sprache, Wissen und Institutionen fortbestehen. Saids Konzept des 'Orientalismus' beschreibt, wie der Westen den 'Orient' als das 'Andere' konstruiert hat, um die eigene Überlegenheit zu legitimieren.",
        textVi: "Lý thuyết hậu thuộc địa nghiên cứu các hệ quả văn hóa, chính trị và kinh tế của chủ nghĩa thực dân. Các nhà tư tưởng trung tâm như Edward Said, Gayatri Spivak và Homi Bhabha đã chỉ ra cách các quan hệ quyền lực thuộc địa vẫn tồn tại cho đến ngày nay trong ngôn ngữ, tri thức và thể chế. Khái niệm 'Chủ nghĩa phương Đông' của Said mô tả cách phương Tây đã xây dựng hình ảnh 'phương Đông' như là 'Kẻ khác' để hợp thức hóa sự vượt trội của chính mình."
      },
      {
        type: "vocabulary",
        titleDe: "Fachbegriffe: Postkolonialismus",
        titleVi: "Thuật ngữ chuyên ngành: Hậu thuộc địa",
        words: [
          { de: "der Postkolonialismus", vi: "chủ nghĩa hậu thuộc địa", article: "der" },
          { de: "der Orientalismus", vi: "chủ nghĩa phương Đông", article: "der" },
          { de: "die Subalternität", vi: "tính hạ đẳng/bị lề hóa", article: "die" },
          { de: "das Machtverhältnis", vi: "quan hệ quyền lực", article: "das" },
          { de: "die Hegemonie", vi: "bá quyền", article: "die" },
          { de: "der Diskurs", vi: "diễn ngôn", article: "der" },
          { de: "die Othering-Strategie", vi: "chiến lược tha hóa", article: "die" },
          { de: "die Dekolonisierung", vi: "phi thuộc địa hóa", article: "die" },
          { de: "das koloniale Erbe", vi: "di sản thuộc địa", article: "das" },
          { de: "die Repräsentationspolitik", vi: "chính trị đại diện", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nominalisierung komplexer Aussagen",
        titleVi: "Danh từ hóa các phát biểu phức tạp",
        rule: "Auf C1-Niveau wird häufig nominalisiert, um Texte wissenschaftlicher klingen zu lassen: Verb/Adjektiv → Nomen + Genitivattribut. Beispiel: 'Man konstruiert den Anderen' → 'Die Konstruktion des Anderen'.",
        ruleVi: "Ở trình độ C1, việc danh từ hóa thường được sử dụng để làm cho văn bản mang tính học thuật hơn: Động từ/Tính từ → Danh từ + thuộc cách sở hữu (Genitiv). Ví dụ: 'Người ta xây dựng hình ảnh Kẻ khác' → 'Sự kiến tạo hình ảnh Kẻ khác'.",
        examples: [
          { de: "Man unterdrückt die Minderheiten. → Die Unterdrückung der Minderheiten.", vi: "Người ta áp bức các dân tộc thiểu số. → Sự áp bức các dân tộc thiểu số." },
          { de: "Die Kolonialmächte beuteten die Ressourcen aus. → Die Ausbeutung der Ressourcen durch die Kolonialmächte.", vi: "Các cường quốc thuộc địa khai thác tài nguyên. → Sự khai thác tài nguyên bởi các cường quốc thuộc địa." },
          { de: "Die Kulturen beeinflussen sich gegenseitig. → Die gegenseitige Beeinflussung der Kulturen.", vi: "Các nền văn hóa ảnh hưởng lẫn nhau. → Sự ảnh hưởng lẫn nhau của các nền văn hóa." }
        ]
      },
      {
        type: "practice",
        titleDe: "Textanalyse: Postkoloniale Perspektive",
        titleVi: "Phân tích văn bản: Góc nhìn hậu thuộc địa",
        instruction: "Analysieren Sie einen aktuellen Zeitungsartikel über Migration aus postkolonialer Perspektive. Identifizieren Sie Othering-Strategien und diskutieren Sie, inwiefern koloniale Denkmuster in der medialen Darstellung von Migration fortbestehen.",
        instructionVi: "Phân tích một bài báo hiện đại về di cư từ góc nhìn hậu thuộc địa. Hãy nhận diện các chiến lược tha hóa và thảo luận xem các khuôn mẫu tư duy thuộc địa tồn tại như thế nào trong cách truyền thông mô tả hiện tượng di cư."
      }
    ]
  },

  // --- Chapter 4, Lesson 3: Interkulturelle Kompetenz ---
  {
    id: "c1-ch4-l3",
    chapterId: 4,
    lessonNumber: 3,
    title: "Interkulturelle Kompetenz",
    titleVi: "Năng lực giao tiếp liên văn hóa",
    type: "Fertigkeit",
    objectives: [
      "Phát triển năng lực giao tiếp liên văn hóa ở mức chuyên sâu",
      "Phân tích các mô hình giao tiếp liên văn hóa (Hofstede, Hall)",
      "Áp dụng chiến lược giao tiếp phù hợp trong bối cảnh đa văn hóa"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Modelle interkultureller Kommunikation",
        titleVi: "Các mô hình giao tiếp liên văn hóa",
        textDe: "Interkulturelle Kompetenz umfasst die Fähigkeit, in kulturell diversen Kontexten angemessen und effektiv zu kommunizieren. Geert Hofstedes Kulturdimensionen — wie Machtdistanz, Individualismus vs. Kollektivismus und Unsicherheitsvermeidung — bieten einen Rahmen, um kulturelle Unterschiede systematisch zu analysieren. Edward T. Halls Unterscheidung zwischen 'High-Context'- und 'Low-Context'-Kulturen erklärt, warum Kommunikation in einigen Kulturen stark auf implizite Botschaften setzt, während andere explizite Aussagen bevorzugen.",
        textVi: "Năng lực liên văn hóa bao gồm khả năng giao tiếp phù hợp và hiệu quả trong các bối cảnh đa dạng văn hóa. Các chiều văn hóa của Geert Hofstede — như khoảng cách quyền lực, chủ nghĩa cá nhân so với chủ nghĩa tập thể và mức độ né tránh sự bất định — cung cấp một khuôn khổ để phân tích có hệ thống các khác biệt văn hóa. Sự phân biệt của Edward T. Hall giữa văn hóa 'ngữ cảnh cao' và 'ngữ cảnh thấp' giải thích tại sao giao tiếp ở một số nền văn hóa dựa nhiều vào thông điệp ngầm, trong khi các nền văn hóa khác ưa chuộng phát ngôn rõ ràng."
      },
      {
        type: "vocabulary",
        titleDe: "Interkulturelle Kommunikation",
        titleVi: "Giao tiếp liên văn hóa",
        words: [
          { de: "die Machtdistanz", vi: "khoảng cách quyền lực", article: "die" },
          { de: "der Individualismus", vi: "chủ nghĩa cá nhân", article: "der" },
          { de: "der Kollektivismus", vi: "chủ nghĩa tập thể", article: "der" },
          { de: "die Unsicherheitsvermeidung", vi: "mức độ né tránh sự bất định", article: "die" },
          { de: "die High-Context-Kultur", vi: "văn hóa ngữ cảnh cao", article: "die" },
          { de: "die Low-Context-Kultur", vi: "văn hóa ngữ cảnh thấp", article: "die" },
          { de: "die Kulturdimension", vi: "chiều văn hóa", article: "die" },
          { de: "die interkulturelle Sensibilität", vi: "sự nhạy cảm liên văn hóa", article: "die" },
          { de: "das Kulturverständnis", vi: "sự hiểu biết văn hóa", article: "das" },
          { de: "der Perspektivwechsel", vi: "sự chuyển đổi góc nhìn", article: "der" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Interkulturelles Training im Unternehmen",
        titleVi: "Đào tạo liên văn hóa trong doanh nghiệp",
        lines: [
          { speaker: "Trainerin", de: "Stellen Sie sich vor: Ihr vietnamesischer Geschäftspartner nickt während der Verhandlung ständig, aber am Ende sagt er, er müsse sich noch beraten. Was ist passiert?", vi: "Hãy tưởng tượng: Đối tác kinh doanh Việt Nam của bạn liên tục gật đầu trong cuộc đàm phán, nhưng cuối cùng anh ấy nói phải tham khảo thêm. Điều gì đã xảy ra?" },
          { speaker: "Teilnehmer", de: "Vielleicht bedeutet das Nicken nicht unbedingt Zustimmung, sondern eher, dass er zuhört?", vi: "Có lẽ việc gật đầu không nhất thiết có nghĩa là đồng ý, mà chỉ là đang lắng nghe?" },
          { speaker: "Trainerin", de: "Genau. In vielen asiatischen High-Context-Kulturen signalisiert Nicken Aufmerksamkeit, nicht Zustimmung. Zudem spielt die kollektive Entscheidungsfindung eine wichtige Rolle — Einzelpersonen treffen selten allein verbindliche Entscheidungen.", vi: "Chính xác. Trong nhiều nền văn hóa ngữ cảnh cao ở châu Á, gật đầu thể hiện sự chú ý, không phải sự đồng ý. Ngoài ra, việc ra quyết định tập thể đóng vai trò quan trọng — cá nhân hiếm khi đưa ra quyết định ràng buộc một mình." },
          { speaker: "Teilnehmer", de: "Das erklärt einige Missverständnisse, die wir in der Zusammenarbeit mit unserem Team in Ho-Chi-Minh-Stadt hatten.", vi: "Điều đó giải thích một số hiểu lầm mà chúng tôi đã gặp trong quá trình hợp tác với nhóm ở Thành phố Hồ Chí Minh." }
        ]
      },
      {
        type: "practice",
        titleDe: "Fallstudie: Interkultureller Konflikt",
        titleVi: "Tình huống thực tế: Xung đột liên văn hóa",
        instruction: "Analysieren Sie folgende Situation: Ein deutsches Unternehmen klagt über mangelnde Initiative seiner vietnamesischen Mitarbeiter, während die vietnamesischen Mitarbeiter sich über den rüden Kommunikationsstil der deutschen Vorgesetzten beschweren. Erklären Sie die kulturellen Ursachen dieses Konflikts mithilfe der Hofstede-Dimensionen und schlagen Sie Lösungsansätze vor.",
        instructionVi: "Phân tích tình huống sau: Một công ty Đức phàn nàn về sự thiếu chủ động của nhân viên Việt Nam, trong khi nhân viên Việt Nam phàn nàn về phong cách giao tiếp thô lỗ của cấp trên người Đức. Hãy giải thích nguyên nhân văn hóa của xung đột này bằng các chiều Hofstede và đề xuất giải pháp."
      }
    ]
  },

  // --- Chapter 4, Lesson 4: Textkohäsion & Textgrammatik ---
  {
    id: "c1-ch4-l4",
    chapterId: 4,
    lessonNumber: 4,
    title: "Textkohäsion & Textgrammatik",
    titleVi: "Tính liên kết văn bản & Ngữ pháp văn bản",
    type: "Grammatik",
    objectives: [
      "Nắm vững các phương tiện tạo liên kết trong văn bản học thuật",
      "Sử dụng thành thạo các phương tiện thay thế (Pronominalisierung, Synonymie)",
      "Viết đoạn văn mạch lạc với cấu trúc liên kết chặt chẽ"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Kohäsionsmittel im wissenschaftlichen Text",
        titleVi: "Phương tiện liên kết trong văn bản học thuật",
        textDe: "Textkohäsion bezeichnet den formalen Zusammenhalt eines Textes durch sprachliche Mittel. Dazu gehören: Rekurrenz (Wiederaufnahme von Wörtern), Substitution (Ersetzung durch Synonyme oder Pronomen), Konnektoren (Verbindungswörter wie 'dennoch', 'infolgedessen'), Tempuskontinuität und thematische Progression. Ein kohäsiver Text führt den Leser logisch von einem Gedanken zum nächsten.",
        textVi: "Liên kết văn bản chỉ sự gắn kết hình thức của một văn bản thông qua các phương tiện ngôn ngữ. Bao gồm: sự lặp lại (tái sử dụng từ), sự thay thế (thay bằng từ đồng nghĩa hoặc đại từ), liên từ (từ nối như 'tuy nhiên', 'do đó'), tính liên tục thì và sự tiến triển chủ đề. Một văn bản có tính liên kết dẫn dắt người đọc một cách logic từ ý này sang ý khác."
      },
      {
        type: "grammar",
        titleDe: "Konnektoren für akademische Texte",
        titleVi: "Liên từ cho văn bản học thuật",
        rule: "Kausale Konnektoren: infolgedessen, folglich, daher. Konzessive: nichtsdestotrotz, gleichwohl, wenngleich. Adversative: hingegen, demgegenüber, indessen. Additive: darüber hinaus, ferner, überdies. Position: Konnektoren stehen meist auf Position 1 oder im Mittelfeld.",
        ruleVi: "Liên từ nguyên nhân: infolgedessen (do đó), folglich (vì vậy), daher (cho nên). Nhượng bộ: nichtsdestotrotz (tuy nhiên), gleichwohl (mặc dù vậy), wenngleich (dù rằng). Đối lập: hingegen (ngược lại), demgegenüber (trái lại), indessen (trong khi đó). Bổ sung: darüber hinaus (ngoài ra), ferner (hơn nữa), überdies (thêm vào đó). Vị trí: Liên từ thường đứng ở vị trí 1 hoặc ở giữa câu.",
        examples: [
          { de: "Die Studie zeigt positive Ergebnisse. Nichtsdestotrotz sind weitere Forschungen erforderlich.", vi: "Nghiên cứu cho thấy kết quả tích cực. Tuy nhiên, cần có thêm nghiên cứu khác." },
          { de: "Die Migration nimmt zu. Infolgedessen gewinnt interkulturelle Kompetenz an Bedeutung.", vi: "Di cư gia tăng. Do đó, năng lực liên văn hóa ngày càng quan trọng." },
          { de: "Deutschland setzt auf Integration. Demgegenüber bevorzugen andere Länder das Multikulturalismus-Modell.", vi: "Đức theo đuổi hội nhập. Trái lại, các quốc gia khác ưa chuộng mô hình đa văn hóa." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Thematische Progression",
        titleVi: "Tiến triển chủ đề",
        rule: "Lineare Progression: Das Rhema (neue Information) eines Satzes wird zum Thema (bekannte Information) des nächsten. Durchlaufendes Thema: Das gleiche Thema wird in aufeinanderfolgenden Sätzen beibehalten, aber mit neuem Rhema ergänzt.",
        ruleVi: "Tiến triển tuyến tính: Phần thuyết (thông tin mới) của câu này trở thành phần đề (thông tin đã biết) của câu tiếp theo. Chủ đề xuyên suốt: Cùng một chủ đề được duy trì trong các câu liên tiếp, nhưng được bổ sung bằng phần thuyết mới.",
        examples: [
          { de: "Migration verändert Gesellschaften. [Thema] Diese Veränderungen [Rhema→Thema] betreffen sowohl die Aufnahmeländer als auch die Herkunftsländer.", vi: "Di cư thay đổi các xã hội. [Đề] Những thay đổi này [Thuyết→Đề] ảnh hưởng đến cả nước tiếp nhận lẫn nước gốc." },
          { de: "Hofstede [Thema] entwickelte ein Modell der Kulturdimensionen. Er [Thema bleibt] identifizierte zunächst vier Dimensionen. Später [Thema bleibt] ergänzte er zwei weitere.", vi: "Hofstede [Đề] đã phát triển một mô hình các chiều văn hóa. Ông [Đề giữ nguyên] đã nhận diện ban đầu bốn chiều. Sau đó [Đề giữ nguyên] ông bổ sung thêm hai chiều nữa." }
        ]
      },
      {
        type: "practice",
        titleDe: "Textrevision: Kohäsion verbessern",
        titleVi: "Chỉnh sửa văn bản: Cải thiện tính liên kết",
        instruction: "Überarbeiten Sie den folgenden Text, indem Sie geeignete Konnektoren einfügen, Wiederholungen durch Synonyme oder Pronomen ersetzen und die thematische Progression verbessern: 'Migration ist ein globales Phänomen. Migration hat viele Ursachen. Die Ursachen sind wirtschaftlich und politisch. Viele Menschen migrieren. Die Menschen suchen ein besseres Leben.'",
        instructionVi: "Chỉnh sửa đoạn văn sau bằng cách thêm liên từ phù hợp, thay thế các lặp lại bằng từ đồng nghĩa hoặc đại từ, và cải thiện tiến triển chủ đề: 'Di cư là hiện tượng toàn cầu. Di cư có nhiều nguyên nhân. Các nguyên nhân mang tính kinh tế và chính trị. Nhiều người di cư. Người ta tìm kiếm cuộc sống tốt đẹp hơn.'"
      }
    ]
  },

  // ============================================================
  // CHAPTER 5: Wirtschaftsethik & Unternehmensführung
  // ============================================================

  // --- Chapter 5, Lesson 1: Corporate Social Responsibility ---
  {
    id: "c1-ch5-l1",
    chapterId: 5,
    lessonNumber: 1,
    title: "Corporate Social Responsibility",
    titleVi: "Trách nhiệm xã hội của doanh nghiệp",
    type: "Einführung",
    objectives: [
      "Hiểu khái niệm CSR và các mô hình trách nhiệm doanh nghiệp",
      "Phân tích báo cáo bền vững của doanh nghiệp Đức",
      "Thảo luận phản biện về hiện tượng Greenwashing"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "CSR: Verantwortung jenseits des Profits",
        titleVi: "CSR: Trách nhiệm vượt ra ngoài lợi nhuận",
        textDe: "Corporate Social Responsibility (CSR) bezeichnet die gesellschaftliche Verantwortung von Unternehmen, die über die reine Gewinnmaximierung hinausgeht. Das Drei-Säulen-Modell der Nachhaltigkeit — Ökonomie, Ökologie und Soziales — bildet die Grundlage moderner CSR-Strategien. In Deutschland verpflichtet das CSR-Richtlinie-Umsetzungsgesetz seit 2017 große Unternehmen zur nichtfinanziellen Berichterstattung über Umwelt-, Sozial- und Arbeitnehmerbelange.",
        textVi: "Trách nhiệm xã hội của doanh nghiệp (CSR) chỉ trách nhiệm xã hội của các công ty, vượt ra ngoài việc tối đa hóa lợi nhuận thuần túy. Mô hình ba trụ cột của phát triển bền vững — Kinh tế, Sinh thái và Xã hội — tạo nền tảng cho các chiến lược CSR hiện đại. Tại Đức, Luật thực thi Chỉ thị CSR từ năm 2017 bắt buộc các doanh nghiệp lớn phải báo cáo phi tài chính về các vấn đề môi trường, xã hội và lao động."
      },
      {
        type: "vocabulary",
        titleDe: "Wirtschaftsethik & CSR",
        titleVi: "Đạo đức kinh doanh & CSR",
        words: [
          { de: "die Nachhaltigkeit", vi: "tính bền vững", article: "die" },
          { de: "die Gewinnmaximierung", vi: "tối đa hóa lợi nhuận", article: "die" },
          { de: "die Stakeholder", vi: "các bên liên quan", article: "die" },
          { de: "die Lieferkette", vi: "chuỗi cung ứng", article: "die" },
          { de: "das Greenwashing", vi: "tẩy xanh (giả bền vững)", article: "das" },
          { de: "die nichtfinanzielle Berichterstattung", vi: "báo cáo phi tài chính", article: "die" },
          { de: "der CO₂-Fußabdruck", vi: "dấu chân carbon", article: "der" },
          { de: "die Sorgfaltspflicht", vi: "nghĩa vụ thẩm định", article: "die" },
          { de: "das Lieferkettengesetz", vi: "luật chuỗi cung ứng", article: "das" },
          { de: "die Kreislaufwirtschaft", vi: "kinh tế tuần hoàn", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Debatte: CSR — echtes Engagement oder Marketing?",
        titleVi: "Tranh luận: CSR — cam kết thực sự hay tiếp thị?",
        lines: [
          { speaker: "Prof. Müller", de: "Die Frage ist berechtigt: Nutzen Unternehmen CSR primär als Marketinginstrument, oder handelt es sich um ein aufrichtiges Engagement?", vi: "Câu hỏi rất chính đáng: Liệu doanh nghiệp sử dụng CSR chủ yếu như công cụ tiếp thị, hay đó là một cam kết chân thành?" },
          { speaker: "Studentin Lan", de: "Ich denke, beides schließt sich nicht aus. Selbst wenn ein Unternehmen aus Imagegründen nachhaltig handelt, hat das positive Auswirkungen auf Umwelt und Gesellschaft.", vi: "Tôi nghĩ cả hai không loại trừ nhau. Ngay cả khi một doanh nghiệp hành động bền vững vì hình ảnh, điều đó vẫn có tác động tích cực đến môi trường và xã hội." },
          { speaker: "Student Kai", de: "Aber Greenwashing ist ein echtes Problem. Wenn Konzerne ihre Nachhaltigkeitsberichte aufhübschen, ohne substanzielle Veränderungen vorzunehmen, werden Verbraucher in die Irre geführt.", vi: "Nhưng Greenwashing là vấn đề thực sự. Khi các tập đoàn tô điểm báo cáo bền vững mà không thực hiện thay đổi thực chất, người tiêu dùng bị đánh lừa." },
          { speaker: "Prof. Müller", de: "Daher brauchen wir verbindliche gesetzliche Rahmen wie das Lieferkettengesetz, das Unternehmen zur Einhaltung von Menschenrechtsstandards entlang der gesamten Wertschöpfungskette verpflichtet.", vi: "Vì vậy chúng ta cần khung pháp lý ràng buộc như Luật chuỗi cung ứng, bắt buộc doanh nghiệp tuân thủ các tiêu chuẩn nhân quyền dọc theo toàn bộ chuỗi giá trị." }
        ]
      },
      {
        type: "practice",
        titleDe: "Analyse eines Nachhaltigkeitsberichts",
        titleVi: "Phân tích báo cáo bền vững",
        instruction: "Wählen Sie den Nachhaltigkeitsbericht eines deutschen Unternehmens (z.B. Siemens, BMW, SAP). Analysieren Sie: (1) Welche konkreten Maßnahmen werden genannt? (2) Werden messbare Ziele definiert? (3) Gibt es Anzeichen für Greenwashing? Verfassen Sie eine kritische Stellungnahme (ca. 250 Wörter).",
        instructionVi: "Chọn báo cáo bền vững của một doanh nghiệp Đức (ví dụ: Siemens, BMW, SAP). Phân tích: (1) Những biện pháp cụ thể nào được đề cập? (2) Có mục tiêu đo lường được không? (3) Có dấu hiệu Greenwashing không? Viết một bài nhận định phản biện (khoảng 250 từ)."
      }
    ]
  },

  // --- Chapter 5, Lesson 2: Führungstheorien & Management ---
  {
    id: "c1-ch5-l2",
    chapterId: 5,
    lessonNumber: 2,
    title: "Führungstheorien & Management",
    titleVi: "Lý thuyết lãnh đạo & Quản trị",
    type: "Einführung",
    objectives: [
      "Nắm được các lý thuyết lãnh đạo cổ điển và hiện đại",
      "So sánh phong cách quản lý Đức và Việt Nam",
      "Trình bày quan điểm về phong cách lãnh đạo hiệu quả"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Von der klassischen zur transformationalen Führung",
        titleVi: "Từ lãnh đạo cổ điển đến lãnh đạo chuyển đổi",
        textDe: "Die Führungsforschung hat sich von einfachen Eigenschaftstheorien zu komplexen situativen und transformationalen Ansätzen entwickelt. Während der autoritäre Führungsstil auf Anweisung und Kontrolle basiert, setzt die transformationale Führung auf Inspiration, Motivation und die Förderung individueller Stärken. Im deutschen Wirtschaftskontext hat sich das Modell der 'Mitbestimmung' etabliert, bei dem Arbeitnehmervertreter in Aufsichtsräten und Betriebsräten an Entscheidungen beteiligt werden — ein weltweit nahezu einzigartiges System.",
        textVi: "Nghiên cứu về lãnh đạo đã phát triển từ các lý thuyết đặc điểm đơn giản đến các phương pháp tình huống và chuyển đổi phức tạp. Trong khi phong cách lãnh đạo độc đoán dựa trên chỉ thị và kiểm soát, lãnh đạo chuyển đổi đặt trọng tâm vào truyền cảm hứng, tạo động lực và phát huy thế mạnh cá nhân. Trong bối cảnh kinh tế Đức, mô hình 'đồng quyết định' đã được thiết lập, trong đó đại diện người lao động tham gia vào các quyết định thông qua hội đồng giám sát và hội đồng công nhân viên — một hệ thống gần như độc nhất trên thế giới."
      },
      {
        type: "vocabulary",
        titleDe: "Führung & Management",
        titleVi: "Lãnh đạo & Quản trị",
        words: [
          { de: "die transformationale Führung", vi: "lãnh đạo chuyển đổi", article: "die" },
          { de: "der autoritäre Führungsstil", vi: "phong cách lãnh đạo độc đoán", article: "der" },
          { de: "die Mitbestimmung", vi: "quyền đồng quyết định", article: "die" },
          { de: "der Betriebsrat", vi: "hội đồng công nhân viên", article: "der" },
          { de: "der Aufsichtsrat", vi: "hội đồng giám sát", article: "der" },
          { de: "die flache Hierarchie", vi: "hệ thống phân cấp phẳng", article: "die" },
          { de: "die Eigenverantwortung", vi: "trách nhiệm cá nhân", article: "die" },
          { de: "die Personalentwicklung", vi: "phát triển nhân sự", article: "die" },
          { de: "die Unternehmenskultur", vi: "văn hóa doanh nghiệp", article: "die" },
          { de: "die agile Führung", vi: "lãnh đạo linh hoạt", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Vergleich: Führungsstile in Deutschland und Vietnam",
        titleVi: "So sánh: Phong cách lãnh đạo ở Đức và Việt Nam",
        lines: [
          { speaker: "Herr Trần", de: "In Vietnam ist die Hierarchie in Unternehmen traditionell stärker ausgeprägt. Entscheidungen werden häufig von der Führungsspitze getroffen.", vi: "Ở Việt Nam, hệ thống phân cấp trong doanh nghiệp theo truyền thống rõ rệt hơn. Các quyết định thường được đưa ra bởi ban lãnh đạo cấp cao." },
          { speaker: "Frau Schmidt", de: "Das ist in Deutschland anders. Durch die Mitbestimmung haben Arbeitnehmer ein institutionalisiertes Mitspracherecht. In vielen Start-ups herrschen sogar sehr flache Hierarchien.", vi: "Ở Đức thì khác. Thông qua quyền đồng quyết định, người lao động có quyền phát biểu được thể chế hóa. Trong nhiều start-up, thậm chí còn có hệ thống phân cấp rất phẳng." },
          { speaker: "Herr Trần", de: "Das verändert sich auch bei uns. Junge vietnamesische Unternehmer setzen zunehmend auf partizipative Führung und agile Methoden.", vi: "Điều đó cũng đang thay đổi ở chúng tôi. Các doanh nhân trẻ Việt Nam ngày càng áp dụng lãnh đạo tham gia và phương pháp linh hoạt." },
          { speaker: "Frau Schmidt", de: "Das zeigt, dass Führungsstile nicht kulturell determiniert sind, sondern sich im globalen Austausch weiterentwickeln.", vi: "Điều đó cho thấy phong cách lãnh đạo không bị quy định bởi văn hóa, mà phát triển trong sự trao đổi toàn cầu." }
        ]
      },
      {
        type: "practice",
        titleDe: "Präsentation: Idealer Führungsstil",
        titleVi: "Thuyết trình: Phong cách lãnh đạo lý tưởng",
        instruction: "Bereiten Sie eine Kurzpräsentation (5 Minuten) vor: 'Welcher Führungsstil ist für ein deutsch-vietnamesisches Joint Venture am besten geeignet?' Berücksichtigen Sie kulturelle Faktoren, Mitbestimmung und moderne Managementansätze. Formulieren Sie Ihre Argumente auf C1-Niveau mit angemessener Fachterminologie.",
        instructionVi: "Chuẩn bị một bài thuyết trình ngắn (5 phút): 'Phong cách lãnh đạo nào phù hợp nhất cho một liên doanh Đức-Việt?' Hãy xem xét các yếu tố văn hóa, quyền đồng quyết định và các phương pháp quản lý hiện đại. Hãy trình bày lập luận ở trình độ C1 với thuật ngữ chuyên ngành phù hợp."
      }
    ]
  },

  // --- Chapter 5, Lesson 3: Geschäftsberichte analysieren ---
  {
    id: "c1-ch5-l3",
    chapterId: 5,
    lessonNumber: 3,
    title: "Geschäftsberichte analysieren",
    titleVi: "Phân tích báo cáo kinh doanh",
    type: "Fertigkeit",
    objectives: [
      "Đọc hiểu báo cáo thường niên của doanh nghiệp Đức",
      "Nhận diện các chiến lược tu từ trong báo cáo kinh doanh",
      "Tóm tắt và đánh giá phản biện thông tin tài chính"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Aufbau und Sprache von Geschäftsberichten",
        titleVi: "Cấu trúc và ngôn ngữ của báo cáo kinh doanh",
        textDe: "Ein Geschäftsbericht gliedert sich typischerweise in: Brief an die Aktionäre, Lagebericht, Jahresabschluss (Bilanz, Gewinn- und Verlustrechnung, Kapitalflussrechnung) und Anhang. Die Sprache zeichnet sich durch Nominalisierungen, Passivkonstruktionen und eine strategische Wortwahl aus. Positive Entwicklungen werden hervorgehoben, während negative Ergebnisse oft durch euphemistische Formulierungen abgemildert werden — etwa 'herausforderndes Marktumfeld' statt 'sinkende Umsätze'.",
        textVi: "Một báo cáo kinh doanh thường được chia thành: Thư gửi cổ đông, Báo cáo tình hình, Báo cáo tài chính (Bảng cân đối kế toán, Báo cáo lãi lỗ, Báo cáo lưu chuyển tiền tệ) và Phụ lục. Ngôn ngữ đặc trưng bởi danh từ hóa, cấu trúc bị động và lựa chọn từ ngữ chiến lược. Những phát triển tích cực được nhấn mạnh, trong khi kết quả tiêu cực thường được giảm nhẹ bằng các cách diễn đạt uyển ngữ — ví dụ 'môi trường thị trường đầy thách thức' thay vì 'doanh thu giảm'."
      },
      {
        type: "vocabulary",
        titleDe: "Sprache der Geschäftsberichte",
        titleVi: "Ngôn ngữ báo cáo kinh doanh",
        words: [
          { de: "der Lagebericht", vi: "báo cáo tình hình", article: "der" },
          { de: "die Bilanz", vi: "bảng cân đối kế toán", article: "die" },
          { de: "die Gewinn- und Verlustrechnung", vi: "báo cáo lãi lỗ", article: "die" },
          { de: "die Kapitalflussrechnung", vi: "báo cáo lưu chuyển tiền tệ", article: "die" },
          { de: "der Umsatz", vi: "doanh thu", article: "der" },
          { de: "die Rendite", vi: "tỷ suất lợi nhuận", article: "die" },
          { de: "das Marktumfeld", vi: "môi trường thị trường", article: "das" },
          { de: "die Wertschöpfungskette", vi: "chuỗi giá trị", article: "die" },
          { de: "die Eigenkapitalquote", vi: "tỷ lệ vốn chủ sở hữu", article: "die" },
          { de: "das operative Ergebnis", vi: "kết quả hoạt động kinh doanh", article: "das" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Euphemismen und Hedging in Geschäftsberichten",
        titleVi: "Uyển ngữ và cách nói giảm trong báo cáo kinh doanh",
        rule: "Geschäftsberichte nutzen Hedging-Strategien: Konjunktiv II (dürfte, könnte), Modalpartikeln (grundsätzlich, tendenziell), Passivkonstruktionen (es wird angestrebt) und Nominalisierungen. Euphemismen: 'Restrukturierung' (= Entlassungen), 'Ergebnisbelastung' (= Verlust), 'Wachstumspause' (= Stagnation).",
        ruleVi: "Báo cáo kinh doanh sử dụng chiến lược nói giảm: Konjunktiv II (dürfte = có lẽ sẽ, könnte = có thể), tiểu từ tình thái (grundsätzlich = về cơ bản, tendenziell = theo xu hướng), cấu trúc bị động (es wird angestrebt = được hướng tới) và danh từ hóa. Uyển ngữ: 'Tái cấu trúc' (= sa thải), 'Gánh nặng kết quả' (= thua lỗ), 'Tạm dừng tăng trưởng' (= trì trệ).",
        examples: [
          { de: "Der Umsatz dürfte im kommenden Geschäftsjahr moderat steigen. (= Wir sind nicht sicher, ob er steigt.)", vi: "Doanh thu có lẽ sẽ tăng vừa phải trong năm tài chính tới. (= Chúng tôi không chắc liệu nó có tăng hay không.)" },
          { de: "Im Zuge der Restrukturierung wurden Stellen abgebaut. (= Mitarbeiter wurden entlassen.)", vi: "Trong quá trình tái cấu trúc, các vị trí đã được cắt giảm. (= Nhân viên đã bị sa thải.)" },
          { de: "Das herausfordernde Marktumfeld hat das operative Ergebnis belastet. (= Die Firma hat weniger verdient.)", vi: "Môi trường thị trường đầy thách thức đã ảnh hưởng đến kết quả hoạt động. (= Công ty đã kiếm được ít hơn.)" }
        ]
      },
      {
        type: "practice",
        titleDe: "Geschäftsbericht dekodieren",
        titleVi: "Giải mã báo cáo kinh doanh",
        instruction: "Lesen Sie den folgenden Auszug und 'übersetzen' Sie die Euphemismen in klare Sprache: 'Angesichts des herausfordernden makroökonomischen Umfelds hat sich der Konzern zu einer strategischen Neuausrichtung entschlossen. Im Rahmen des Effizienzprogramms wurden Strukturanpassungen vorgenommen, die mittelfristig zu einer nachhaltigen Ergebnisverbesserung beitragen dürften.'",
        instructionVi: "Đọc đoạn trích sau và 'dịch' các uyển ngữ sang ngôn ngữ rõ ràng: 'Trước môi trường kinh tế vĩ mô đầy thách thức, tập đoàn đã quyết định tái định hướng chiến lược. Trong khuôn khổ chương trình hiệu quả, các điều chỉnh cấu trúc đã được thực hiện, có thể đóng góp vào việc cải thiện kết quả bền vững trong trung hạn.'"
      }
    ]
  },

  // --- Chapter 5, Lesson 4: Modalität & Modalwörter ---
  {
    id: "c1-ch5-l4",
    chapterId: 5,
    lessonNumber: 4,
    title: "Modalität & Modalwörter",
    titleVi: "Tình thái & Từ tình thái",
    type: "Grammatik",
    objectives: [
      "Phân biệt các loại tình thái: nhận thức, nghĩa vụ và động lực",
      "Sử dụng thành thạo từ tình thái và cụm từ tình thái trong văn bản học thuật",
      "Phân tích chức năng tình thái trong diễn ngôn kinh tế"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Modalität auf C1-Niveau",
        titleVi: "Tình thái ở trình độ C1",
        textDe: "Modalität drückt die Haltung des Sprechers zur Aussage aus. Man unterscheidet: epistemische Modalität (Grad der Gewissheit: sicherlich, vermutlich, möglicherweise), deontische Modalität (Pflicht/Erlaubnis: unbedingt, notwendigerweise) und dynamische Modalität (Fähigkeit/Bereitschaft). Modalwörter modifizieren die gesamte Aussage und stehen typisch im Mittelfeld des Satzes. Sie sind besonders in wissenschaftlichen und wirtschaftlichen Texten unverzichtbar, um Behauptungen abzustufen.",
        textVi: "Tình thái thể hiện thái độ của người nói đối với phát ngôn. Người ta phân biệt: tình thái nhận thức (mức độ chắc chắn: chắc chắn, có lẽ, có thể), tình thái nghĩa vụ (bổn phận/cho phép: nhất thiết, cần thiết) và tình thái động lực (khả năng/sẵn sàng). Từ tình thái điều chỉnh toàn bộ phát ngôn và thường đứng ở giữa câu. Chúng đặc biệt không thể thiếu trong các văn bản khoa học và kinh tế để phân cấp mức độ khẳng định."
      },
      {
        type: "grammar",
        titleDe: "Modalwörter: Abstufungen der Gewissheit",
        titleVi: "Từ tình thái: Các mức độ chắc chắn",
        rule: "Hohe Gewissheit: zweifellos, zweifelsfrei, unbestreitbar, fraglos. Mittlere Gewissheit: vermutlich, wahrscheinlich, voraussichtlich, wohl. Niedrige Gewissheit: möglicherweise, eventuell, unter Umständen, gegebenenfalls. Verneinung: keineswegs, mitnichten, schwerlich.",
        ruleVi: "Chắc chắn cao: zweifellos (không nghi ngờ), zweifelsfrei (chắc chắn), unbestreitbar (không thể phủ nhận), fraglos (rõ ràng). Chắc chắn trung bình: vermutlich (có lẽ), wahrscheinlich (có thể), voraussichtlich (dự kiến), wohl (chắc). Chắc chắn thấp: möglicherweise (có thể), eventuell (có thể), unter Umständen (trong một số trường hợp), gegebenenfalls (nếu cần). Phủ định: keineswegs (không hề), mitnichten (tuyệt nhiên không), schwerlich (khó mà).",
        examples: [
          { de: "Die Gewinne dürften voraussichtlich steigen.", vi: "Lợi nhuận dự kiến sẽ tăng." },
          { de: "Diese Strategie führt zweifellos zu besseren Ergebnissen.", vi: "Chiến lược này chắc chắn dẫn đến kết quả tốt hơn." },
          { de: "Die Investition könnte sich unter Umständen nicht rentieren.", vi: "Khoản đầu tư trong một số trường hợp có thể không sinh lời." },
          { de: "Die Vorwürfe sind keineswegs berechtigt.", vi: "Những cáo buộc hoàn toàn không có cơ sở." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Subjektiver Gebrauch der Modalverben",
        titleVi: "Cách dùng chủ quan của động từ tình thái",
        rule: "Modalverben können auf C1-Niveau subjektiv verwendet werden, um Vermutungen auszudrücken: müssen (hohe Wahrscheinlichkeit), dürften (mittlere Wahrscheinlichkeit), könnten/mögen (niedrige Wahrscheinlichkeit), wollen/sollen (Behauptung Dritter). Vergangenheit: Modalverb + Partizip II + haben/sein.",
        ruleVi: "Động từ tình thái ở trình độ C1 có thể được dùng chủ quan để thể hiện phỏng đoán: müssen (khả năng cao), dürften (khả năng trung bình), könnten/mögen (khả năng thấp), wollen/sollen (tuyên bố của bên thứ ba). Quá khứ: Động từ tình thái + Partizip II + haben/sein.",
        examples: [
          { de: "Der CEO muss von den Problemen gewusst haben. (= Ich bin fast sicher.)", vi: "CEO chắc hẳn đã biết về các vấn đề. (= Tôi gần như chắc chắn.)" },
          { de: "Die Firma dürfte Schwierigkeiten haben. (= Ich vermute.)", vi: "Công ty có lẽ đang gặp khó khăn. (= Tôi phỏng đoán.)" },
          { de: "Das könnte ein Fehler gewesen sein. (= Es ist möglich.)", vi: "Đó có thể đã là một sai lầm. (= Có khả năng.)" },
          { de: "Der Manager will nichts davon gewusst haben. (= Er behauptet das.)", vi: "Người quản lý tuyên bố không biết gì về điều đó. (= Anh ấy khẳng định vậy.)" }
        ]
      },
      {
        type: "practice",
        titleDe: "Modalität in Wirtschaftstexten",
        titleVi: "Tình thái trong văn bản kinh tế",
        instruction: "Formulieren Sie die folgenden Aussagen um, indem Sie verschiedene Grade der Gewissheit ausdrücken (hoch, mittel, niedrig): (1) Die Inflation sinkt nächstes Jahr. (2) Das Unternehmen hat die Vorschriften verletzt. (3) Die Fusion ist vorteilhaft. Verwenden Sie jeweils Modalwörter und/oder den subjektiven Gebrauch der Modalverben.",
        instructionVi: "Viết lại các phát biểu sau bằng cách thể hiện các mức độ chắc chắn khác nhau (cao, trung bình, thấp): (1) Lạm phát sẽ giảm năm tới. (2) Doanh nghiệp đã vi phạm quy định. (3) Việc sáp nhập có lợi. Sử dụng từ tình thái và/hoặc cách dùng chủ quan của động từ tình thái."
      }
    ]
  },

  // ============================================================
  // CHAPTER 6: Medienethik & Journalismus
  // ============================================================

  // --- Chapter 6, Lesson 1: Pressefreiheit & Medienrecht ---
  {
    id: "c1-ch6-l1",
    chapterId: 6,
    lessonNumber: 1,
    title: "Pressefreiheit & Medienrecht",
    titleVi: "Tự do báo chí & Luật truyền thông",
    type: "Einführung",
    objectives: [
      "Hiểu cơ sở pháp lý của tự do báo chí trong Hiến pháp Đức",
      "Phân tích ranh giới giữa tự do báo chí và bảo vệ nhân phẩm",
      "So sánh tình hình tự do báo chí ở Đức và Việt Nam"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Pressefreiheit im Grundgesetz",
        titleVi: "Tự do báo chí trong Hiến pháp Đức",
        textDe: "Artikel 5 des Grundgesetzes garantiert die Pressefreiheit als eines der fundamentalen Grundrechte: 'Jeder hat das Recht, seine Meinung in Wort, Schrift und Bild frei zu äußern und zu verbreiten und sich aus allgemein zugänglichen Quellen ungehindert zu unterrichten. Die Pressefreiheit und die Freiheit der Berichterstattung durch Rundfunk und Film werden gewährleistet.' Dieses Recht findet seine Schranken in den Vorschriften der allgemeinen Gesetze, dem Jugendschutz und dem Recht der persönlichen Ehre.",
        textVi: "Điều 5 Hiến pháp Đức bảo đảm tự do báo chí là một trong những quyền cơ bản: 'Mỗi người có quyền tự do bày tỏ và phổ biến ý kiến bằng lời nói, chữ viết và hình ảnh, cũng như tự do tìm hiểu thông tin từ các nguồn công khai. Tự do báo chí và tự do đưa tin qua phát thanh và phim ảnh được bảo đảm.' Quyền này bị giới hạn bởi các quy định của luật chung, bảo vệ thanh thiếu niên và quyền danh dự cá nhân."
      },
      {
        type: "vocabulary",
        titleDe: "Medienrecht & Pressefreiheit",
        titleVi: "Luật truyền thông & Tự do báo chí",
        words: [
          { de: "die Pressefreiheit", vi: "tự do báo chí", article: "die" },
          { de: "das Grundrecht", vi: "quyền cơ bản", article: "das" },
          { de: "die Meinungsfreiheit", vi: "tự do ngôn luận", article: "die" },
          { de: "der Quellenschutz", vi: "bảo vệ nguồn tin", article: "der" },
          { de: "das Persönlichkeitsrecht", vi: "quyền nhân thân", article: "das" },
          { de: "die Gegendarstellung", vi: "quyền đính chính", article: "die" },
          { de: "der Pressekodex", vi: "bộ quy tắc đạo đức báo chí", article: "der" },
          { de: "die Zensur", vi: "kiểm duyệt", article: "die" },
          { de: "der Informantenschutz", vi: "bảo vệ người cung cấp tin", article: "der" },
          { de: "die Sorgfaltspflicht (journalistische)", vi: "nghĩa vụ cẩn trọng (trong báo chí)", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Seminar: Grenzen der Pressefreiheit",
        titleVi: "Seminar: Giới hạn của tự do báo chí",
        lines: [
          { speaker: "Dozentin", de: "Wo endet die Pressefreiheit? Ein klassisches Spannungsfeld ist der Konflikt zwischen dem öffentlichen Informationsinteresse und dem Persönlichkeitsrecht des Einzelnen.", vi: "Tự do báo chí kết thúc ở đâu? Một trường lực kinh điển là xung đột giữa lợi ích thông tin công cộng và quyền nhân thân của cá nhân." },
          { speaker: "Student Hùng", de: "In Vietnam wird Pressefreiheit anders interpretiert. Es gibt zwar Medienvielfalt, aber die Berichterstattung unterliegt stärkerer staatlicher Regulierung.", vi: "Ở Việt Nam, tự do báo chí được diễn giải khác. Có sự đa dạng truyền thông, nhưng hoạt động đưa tin chịu sự quản lý chặt chẽ hơn của nhà nước." },
          { speaker: "Dozentin", de: "Das ist ein wichtiger Vergleich. Der Deutsche Presserat überwacht die Einhaltung des Pressekodex auf Basis der freiwilligen Selbstkontrolle — ein Modell, das auf Eigenverantwortung der Medien setzt.", vi: "Đó là một so sánh quan trọng. Hội đồng Báo chí Đức giám sát việc tuân thủ Bộ quy tắc Báo chí trên cơ sở tự kiểm soát — một mô hình dựa trên trách nhiệm tự thân của truyền thông." },
          { speaker: "Student Hùng", de: "Ist dieses Modell wirksam? Schließlich hat der Presserat keine rechtliche Sanktionsgewalt.", vi: "Mô hình này có hiệu quả không? Xét cho cùng, Hội đồng Báo chí không có quyền trừng phạt pháp lý." }
        ]
      },
      {
        type: "practice",
        titleDe: "Erörterung: Pressefreiheit und ihre Grenzen",
        titleVi: "Bài luận bàn luận: Tự do báo chí và giới hạn",
        instruction: "Verfassen Sie eine differenzierte Erörterung (ca. 350 Wörter): 'Sollte Pressefreiheit absolute Geltung haben, oder sind Einschränkungen zum Schutz der Persönlichkeitsrechte gerechtfertigt?' Strukturieren Sie Ihren Text mit These, Antithese und Synthese. Verwenden Sie konzessive und adversative Konnektoren.",
        instructionVi: "Viết một bài luận phân tích (khoảng 350 từ): 'Tự do báo chí có nên có hiệu lực tuyệt đối, hay các hạn chế để bảo vệ quyền nhân thân là chính đáng?' Cấu trúc bài viết với luận điểm, phản đề và tổng hợp. Sử dụng liên từ nhượng bộ và đối lập."
      }
    ]
  },

  // --- Chapter 6, Lesson 2: Investigativer Journalismus ---
  {
    id: "c1-ch6-l2",
    chapterId: 6,
    lessonNumber: 2,
    title: "Investigativer Journalismus",
    titleVi: "Báo chí điều tra",
    type: "Einführung",
    objectives: [
      "Hiểu phương pháp và đạo đức của báo chí điều tra",
      "Phân tích các vụ điều tra nổi tiếng trong báo chí Đức",
      "Thảo luận về vai trò của báo chí điều tra trong nền dân chủ"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Die vierte Gewalt: Investigativer Journalismus",
        titleVi: "Quyền lực thứ tư: Báo chí điều tra",
        textDe: "Investigativer Journalismus deckt Missstände auf, die Mächtige lieber verborgen halten würden. Er gilt als Kontrollinstanz der Demokratie — die sogenannte 'vierte Gewalt' neben Legislative, Exekutive und Judikative. Bekannte Beispiele sind die Enthüllungen des Spiegel im Rahmen der Spiegel-Affäre (1962), die Aufdeckung des CumEx-Skandals durch ein Netzwerk investigativer Journalisten oder die Panama Papers. Investigativer Journalismus erfordert akribische Recherche, Quellenschutz und die Bereitschaft, sich juristischen Auseinandersetzungen zu stellen.",
        textVi: "Báo chí điều tra phanh phui những bê bối mà giới quyền lực muốn che giấu. Nó được coi là cơ quan kiểm soát của nền dân chủ — cái gọi là 'quyền lực thứ tư' bên cạnh lập pháp, hành pháp và tư pháp. Các ví dụ nổi tiếng bao gồm các phát hiện của tạp chí Spiegel trong vụ Spiegel-Affäre (1962), việc phanh phui bê bối CumEx bởi một mạng lưới nhà báo điều tra, hay Hồ sơ Panama. Báo chí điều tra đòi hỏi nghiên cứu tỉ mỉ, bảo vệ nguồn tin và sẵn sàng đối mặt với các tranh chấp pháp lý."
      },
      {
        type: "vocabulary",
        titleDe: "Investigativer Journalismus",
        titleVi: "Báo chí điều tra",
        words: [
          { de: "die Enthüllung", vi: "sự phanh phui", article: "die" },
          { de: "der Missstand", vi: "tình trạng bất cập", article: "der" },
          { de: "die Recherche", vi: "sự điều tra/nghiên cứu", article: "die" },
          { de: "der Whistleblower", vi: "người tố giác", article: "der" },
          { de: "die Kontrollinstanz", vi: "cơ quan kiểm soát", article: "die" },
          { de: "die verdeckte Recherche", vi: "điều tra ngầm", article: "die" },
          { de: "der Informantenschutz", vi: "bảo vệ người cung cấp tin", article: "der" },
          { de: "die Faktentreue", vi: "sự trung thực với sự kiện", article: "die" },
          { de: "die Gegenrecherche", vi: "điều tra đối chứng", article: "die" },
          { de: "die redaktionelle Unabhängigkeit", vi: "tính độc lập biên tập", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Interview mit einer investigativen Journalistin",
        titleVi: "Phỏng vấn một nhà báo điều tra",
        lines: [
          { speaker: "Moderator", de: "Frau Fischer, Sie haben jahrelang zum CumEx-Skandal recherchiert. Was treibt Sie als investigative Journalistin an?", vi: "Chị Fischer, chị đã điều tra bê bối CumEx nhiều năm. Điều gì thúc đẩy chị với tư cách nhà báo điều tra?" },
          { speaker: "Frau Fischer", de: "Die Überzeugung, dass Transparenz das Fundament einer funktionierenden Demokratie ist. Wenn Banken den Staat um Milliarden betrügen, muss die Öffentlichkeit davon erfahren.", vi: "Niềm tin rằng minh bạch là nền tảng của một nền dân chủ hoạt động tốt. Khi các ngân hàng lừa đảo nhà nước hàng tỷ, công chúng phải được biết." },
          { speaker: "Moderator", de: "Wie schützen Sie Ihre Quellen?", vi: "Chị bảo vệ nguồn tin như thế nào?" },
          { speaker: "Frau Fischer", de: "Der Quellenschutz ist oberstes Gebot. Wir verwenden verschlüsselte Kommunikation, treffen Informanten nie am Arbeitsplatz und verwenden grundsätzlich keine Cloud-Dienste für sensible Dokumente. Im Zweifelsfall würde ich eher ins Gefängnis gehen, als eine Quelle preiszugeben.", vi: "Bảo vệ nguồn tin là nguyên tắc tối thượng. Chúng tôi sử dụng liên lạc mã hóa, không bao giờ gặp người cung cấp tin tại nơi làm việc và tuyệt đối không sử dụng dịch vụ đám mây cho tài liệu nhạy cảm. Trong trường hợp nghi ngờ, tôi thà vào tù còn hơn tiết lộ nguồn tin." }
        ]
      },
      {
        type: "practice",
        titleDe: "Diskussion: Ethische Grenzen investigativer Recherche",
        titleVi: "Thảo luận: Giới hạn đạo đức của điều tra báo chí",
        instruction: "Diskutieren Sie: Darf ein Journalist bei einer verdeckten Recherche seine Identität verschleiern und sich unter falschem Namen Zugang verschaffen? Unter welchen Bedingungen ist dies ethisch vertretbar? Formulieren Sie drei Pro- und drei Contra-Argumente auf C1-Niveau.",
        instructionVi: "Thảo luận: Một nhà báo có được phép che giấu danh tính và tiếp cận dưới tên giả trong quá trình điều tra ngầm không? Trong những điều kiện nào điều này có thể chấp nhận được về mặt đạo đức? Hãy đưa ra ba luận điểm ủng hộ và ba luận điểm phản đối ở trình độ C1."
      }
    ]
  },

  // --- Chapter 6, Lesson 3: Medienanalyse & Medienkritik ---
  {
    id: "c1-ch6-l3",
    chapterId: 6,
    lessonNumber: 3,
    title: "Medienanalyse & Medienkritik",
    titleVi: "Phân tích truyền thông & Phê bình truyền thông",
    type: "Fertigkeit",
    objectives: [
      "Áp dụng các phương pháp phân tích truyền thông khoa học",
      "Nhận diện thiên kiến và chiến lược khung (Framing) trong tin tức",
      "Viết bài phân tích truyền thông có cấu trúc học thuật"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Framing: Wie Medien unsere Wahrnehmung formen",
        titleVi: "Framing: Cách truyền thông định hình nhận thức của chúng ta",
        textDe: "Framing beschreibt, wie die Auswahl und Hervorhebung bestimmter Aspekte eines Themas die Interpretation der Rezipienten beeinflusst. Wenn ein Medium über Migration berichtet, kann es den Fokus auf 'Bereicherung der Gesellschaft' (Chancen-Frame) oder 'Belastung des Sozialsystems' (Problem-Frame) legen. Beide Darstellungen sind nicht falsch, betonen aber unterschiedliche Aspekte derselben Realität. Medienkompetente Leser erkennen diese Rahmungen und suchen aktiv nach alternativen Perspektiven.",
        textVi: "Framing mô tả cách việc lựa chọn và nhấn mạnh một số khía cạnh nhất định của một chủ đề ảnh hưởng đến cách diễn giải của người tiếp nhận. Khi truyền thông đưa tin về di cư, họ có thể đặt trọng tâm vào 'làm giàu cho xã hội' (khung cơ hội) hoặc 'gánh nặng cho hệ thống phúc lợi' (khung vấn đề). Cả hai cách trình bày đều không sai, nhưng nhấn mạnh các khía cạnh khác nhau của cùng một thực tế. Người đọc có năng lực truyền thông nhận ra những cách đóng khung này và chủ động tìm kiếm các góc nhìn thay thế."
      },
      {
        type: "vocabulary",
        titleDe: "Medienanalyse & Medienkritik",
        titleVi: "Phân tích & Phê bình truyền thông",
        words: [
          { de: "das Framing", vi: "đóng khung/định hình", article: "das" },
          { de: "die Medienkompetenz", vi: "năng lực truyền thông", article: "die" },
          { de: "die Berichterstattung", vi: "hoạt động đưa tin", article: "die" },
          { de: "die Nachrichtenauswahl", vi: "việc chọn lọc tin tức", article: "die" },
          { de: "der Bias (die Verzerrung)", vi: "thiên kiến (sự méo mó)", article: "der" },
          { de: "die Agenda-Setting-Theorie", vi: "lý thuyết thiết lập chương trình nghị sự", article: "die" },
          { de: "die Filterblase", vi: "bong bóng lọc thông tin", article: "die" },
          { de: "die Echokammer", vi: "buồng dội âm", article: "die" },
          { de: "die Desinformation", vi: "thông tin sai lệch", article: "die" },
          { de: "der Medienrezipient", vi: "người tiếp nhận truyền thông", article: "der" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Passiv-Ersatzformen in der Mediensprache",
        titleVi: "Các dạng thay thế bị động trong ngôn ngữ truyền thông",
        rule: "Neben dem werden-Passiv gibt es alternative Formen: sein + zu + Infinitiv (Der Artikel ist kritisch zu lesen.), sich lassen + Infinitiv (Der Bias lässt sich nachweisen.), sein + Adjektiv auf -bar/-lich (Die Aussage ist überprüfbar.). Diese Formen wirken stilistisch eleganter und sind typisch für Fach- und Mediensprache.",
        ruleVi: "Bên cạnh bị động với werden, còn có các dạng thay thế: sein + zu + Infinitiv (Bài báo cần được đọc phê phán.), sich lassen + Infinitiv (Thiên kiến có thể được chứng minh.), sein + tính từ -bar/-lich (Phát biểu có thể kiểm chứng.). Các dạng này mang tính phong cách thanh lịch hơn và đặc trưng cho ngôn ngữ chuyên ngành và truyền thông.",
        examples: [
          { de: "Die Quelle ist als glaubwürdig einzustufen. (= kann/muss als glaubwürdig eingestuft werden)", vi: "Nguồn tin cần được đánh giá là đáng tin cậy. (= có thể/phải được đánh giá là đáng tin cậy)" },
          { de: "Der Einfluss sozialer Medien lässt sich kaum überschätzen. (= kann kaum überschätzt werden)", vi: "Ảnh hưởng của mạng xã hội khó có thể bị đánh giá quá cao. (= gần như không thể bị đánh giá quá cao)" },
          { de: "Diese Behauptung ist leicht widerlegbar. (= kann leicht widerlegt werden)", vi: "Khẳng định này dễ dàng bị bác bỏ. (= có thể dễ dàng bị bác bỏ)" }
        ]
      },
      {
        type: "practice",
        titleDe: "Vergleichende Medienanalyse",
        titleVi: "Phân tích truyền thông so sánh",
        instruction: "Suchen Sie zwei Berichte aus unterschiedlichen deutschen Medien (z.B. Bild vs. Süddeutsche Zeitung) zum gleichen Thema. Analysieren Sie: (1) Welches Framing wird verwendet? (2) Welche Aspekte werden betont oder ausgelassen? (3) Welche sprachlichen Mittel (Wortwahl, Metaphern, Passivkonstruktionen) dienen der Perspektivierung? Verfassen Sie eine vergleichende Analyse (ca. 300 Wörter).",
        instructionVi: "Tìm hai bài báo từ các phương tiện truyền thông Đức khác nhau (ví dụ: Bild vs. Süddeutsche Zeitung) về cùng một chủ đề. Phân tích: (1) Framing nào được sử dụng? (2) Khía cạnh nào được nhấn mạnh hoặc bỏ qua? (3) Phương tiện ngôn ngữ nào (lựa chọn từ, ẩn dụ, cấu trúc bị động) phục vụ việc định hướng góc nhìn? Viết một bài phân tích so sánh (khoảng 300 từ)."
      }
    ]
  },

  // --- Chapter 6, Lesson 4: Wortbildung (Komposita, Derivation) ---
  {
    id: "c1-ch6-l4",
    chapterId: 6,
    lessonNumber: 4,
    title: "Wortbildung (Komposita, Derivation)",
    titleVi: "Cấu tạo từ (Từ ghép, Phái sinh)",
    type: "Grammatik",
    objectives: [
      "Nắm vững quy tắc cấu tạo từ ghép (Komposita) trong tiếng Đức",
      "Hiểu và áp dụng các tiền tố và hậu tố phái sinh phổ biến",
      "Giải mã từ ghép dài trong văn bản chuyên ngành truyền thông"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Deutsche Wortbildung: Ein produktives System",
        titleVi: "Cấu tạo từ tiếng Đức: Một hệ thống năng suất",
        textDe: "Die deutsche Sprache ist berühmt für ihre Fähigkeit, durch Zusammensetzung (Komposition) und Ableitung (Derivation) neue Wörter zu bilden. Ein Kompositum besteht aus mindestens zwei Morphemen: dem Grundwort (Determinatum), das die Wortart und das Genus bestimmt, und dem Bestimmungswort (Determinans), das das Grundwort näher definiert. Zwischen den Teilen können Fugenelemente stehen (-s-, -n-, -en-, -er-). Das Verständnis der Wortbildungsregeln ist auf C1-Niveau essenziell, um auch unbekannte Komposita erschließen zu können.",
        textVi: "Tiếng Đức nổi tiếng với khả năng tạo từ mới thông qua ghép (Komposition) và phái sinh (Derivation). Một từ ghép bao gồm ít nhất hai hình vị: từ gốc (Determinatum) quyết định loại từ và giống, và từ hạn định (Determinans) xác định cụ thể hơn từ gốc. Giữa các phần có thể có yếu tố nối (-s-, -n-, -en-, -er-). Hiểu quy tắc cấu tạo từ ở trình độ C1 là thiết yếu để có thể suy luận nghĩa của cả những từ ghép chưa biết."
      },
      {
        type: "grammar",
        titleDe: "Komposita: Struktur und Fugenelemente",
        titleVi: "Từ ghép: Cấu trúc và yếu tố nối",
        rule: "Struktur: Bestimmungswort + (Fugenelement) + Grundwort. Das Grundwort steht immer rechts und bestimmt Genus und Wortart. Fugenelemente: -s- (Meinung+s+freiheit), -n- (Schule+n+reform), -en- (Frau+en+rechte), -er- (Kind+er+schutz), -e- (Hund+e+hütte). Manchmal kein Fugenelement: Haus+tür.",
        ruleVi: "Cấu trúc: Từ hạn định + (Yếu tố nối) + Từ gốc. Từ gốc luôn đứng bên phải và quyết định giống và loại từ. Yếu tố nối: -s- (Meinung+s+freiheit = tự do ngôn luận), -n- (Schule+n+reform = cải cách trường học), -en- (Frau+en+rechte = quyền phụ nữ), -er- (Kind+er+schutz = bảo vệ trẻ em), -e- (Hund+e+hütte = chuồng chó). Đôi khi không có yếu tố nối: Haus+tür (cửa nhà).",
        examples: [
          { de: "die Medien+landschaft (Medien + Landschaft) → die Medienlandschaft", vi: "cảnh quan truyền thông (truyền thông + cảnh quan) → die Medienlandschaft" },
          { de: "die Presse+freiheit+s+gesetz (Presse + Freiheit + s + Gesetz) → das Pressefreiheitsgesetz", vi: "luật tự do báo chí (báo chí + tự do + s + luật) → das Pressefreiheitsgesetz" },
          { de: "der Nachrichten+sprecher (Nachrichten + Sprecher) → der Nachrichtensprecher", vi: "phát thanh viên tin tức (tin tức + người nói) → der Nachrichtensprecher" },
          { de: "die Rundfunk+gebühren+erhöhung → die Rundfunkgebührenerhöhung", vi: "việc tăng phí phát sóng → die Rundfunkgebührenerhöhung" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Derivation: Präfixe und Suffixe",
        titleVi: "Phái sinh: Tiền tố và hậu tố",
        rule: "Wichtige Präfixe: un- (Negation: unseriös), miss- (negativ: Missbrauch), ent- (Entfernung, Entdeckung), ver- (Veränderung), zer- (Zerstörung). Wichtige Suffixe: -ung (Nominalisierung: Berichterstattung), -keit/-heit (Eigenschaft: Unabhängigkeit), -lich (Adjektiv: verantwortlich), -bar (möglich: überprüfbar), -ismus (Lehre: Journalismus).",
        ruleVi: "Tiền tố quan trọng: un- (phủ định: unseriös = không nghiêm túc), miss- (tiêu cực: Missbrauch = lạm dụng), ent- (Entfernung = sự loại bỏ, Entdeckung = phát hiện), ver- (Veränderung = thay đổi), zer- (Zerstörung = phá hủy). Hậu tố quan trọng: -ung (danh từ hóa: Berichterstattung = đưa tin), -keit/-heit (tính chất: Unabhängigkeit = tính độc lập), -lich (tính từ: verantwortlich = có trách nhiệm), -bar (có thể: überprüfbar = có thể kiểm chứng), -ismus (học thuyết: Journalismus = báo chí).",
        examples: [
          { de: "berichten → die Berichterstattung (berichten + er + statt + ung)", vi: "đưa tin → hoạt động đưa tin" },
          { de: "verantworten → verantwortlich → die Verantwortlichkeit", vi: "chịu trách nhiệm → có trách nhiệm → tính trách nhiệm" },
          { de: "prüfen → überprüfen → überprüfbar → die Überprüfbarkeit", vi: "kiểm tra → kiểm chứng → có thể kiểm chứng → tính có thể kiểm chứng" },
          { de: "miss- + brauchen → missbrauchen → der Missbrauch", vi: "miss- + sử dụng → lạm dụng → sự lạm dụng" }
        ]
      },
      {
        type: "practice",
        titleDe: "Wortbildung in der Mediensprache",
        titleVi: "Cấu tạo từ trong ngôn ngữ truyền thông",
        instruction: "Zerlegen Sie die folgenden Komposita in ihre Bestandteile und erklären Sie die Bedeutung: (1) Rundfunkstaatsvertrag, (2) Nachrichtenberichterstattung, (3) Informationsfreiheitsgesetz, (4) Medienkonzentrationsrecht, (5) Öffentlich-rechtlicher Rundfunk. Bilden Sie dann selbst fünf medienrelevante Komposita und erklären Sie deren Bedeutung.",
        instructionVi: "Phân tích các từ ghép sau thành các thành phần và giải thích nghĩa: (1) Rundfunkstaatsvertrag (hiệp định phát sóng liên bang), (2) Nachrichtenberichterstattung (hoạt động đưa tin tức), (3) Informationsfreiheitsgesetz (luật tự do thông tin), (4) Medienkonzentrationsrecht (luật tập trung truyền thông), (5) Öffentlich-rechtlicher Rundfunk (phát sóng công). Sau đó hãy tự tạo năm từ ghép liên quan đến truyền thông và giải thích nghĩa của chúng."
      }
    ]
  }
];
