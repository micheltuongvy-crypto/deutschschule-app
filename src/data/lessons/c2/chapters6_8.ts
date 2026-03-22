// C2 Chapters 6-8: Wissenschaftstheorie, Soziolinguistik, Wirtschaftsphilosophie

import type { ContentBlock, Lesson } from "../a1/chapters1_3";

export const c2LessonsCh6_8: Lesson[] = [
  // ============================================================
  // KAPITEL 6: Wissenschaftstheorie & Epistemologie
  // ============================================================

  // --- Kapitel 6, Lektion 1: Wissenschaftliche Methoden ---
  {
    id: "c2-ch6-l1",
    chapterId: 6,
    lessonNumber: 1,
    title: "Wissenschaftliche Methoden",
    titleVi: "Phương pháp khoa học",
    type: "Einführung",
    objectives: [
      "Beherrschen der Fachterminologie wissenschaftlicher Methodik auf muttersprachlichem Niveau",
      "Differenzierte Darstellung deduktiver und induktiver Forschungsansätze",
      "Kritische Auseinandersetzung mit Gütekriterien empirischer Forschung",
      "Verfassen wissenschaftlicher Abstracts und Exposés"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Grundlagen der Wissenschaftstheorie",
        titleVi: "Cơ sở lý thuyết khoa học",
        textDe: "Die Wissenschaftstheorie — auch Wissenschaftsphilosophie genannt — befasst sich mit den Bedingungen, unter denen Aussagen als wissenschaftlich gelten können. Sie unterscheidet zwischen deskriptiven und normativen Ansätzen: Während die deskriptive Wissenschaftstheorie beschreibt, wie Wissenschaft tatsächlich betrieben wird, formuliert die normative Wissenschaftstheorie Kriterien dafür, wie Wissenschaft betrieben werden sollte. Zentrale Begriffe sind dabei Verifikation, Falsifikation, Reliabilität, Validität und Objektivität.",
        textVi: "Lý thuyết khoa học — còn gọi là triết học khoa học — nghiên cứu các điều kiện mà theo đó các phát biểu có thể được coi là khoa học. Nó phân biệt giữa các phương pháp tiếp cận mô tả và quy phạm: Trong khi lý thuyết khoa học mô tả (deskriptiv) miêu tả cách khoa học thực sự được tiến hành, thì lý thuyết khoa học quy phạm (normativ) đề ra các tiêu chí về cách khoa học nên được tiến hành. Các khái niệm trung tâm bao gồm xác minh (Verifikation), phản chứng (Falsifikation), độ tin cậy (Reliabilität), tính hợp lệ (Validität) và tính khách quan (Objektivität)."
      },
      {
        type: "vocabulary",
        titleDe: "Fachterminologie der Forschungsmethodik",
        titleVi: "Thuật ngữ chuyên ngành phương pháp nghiên cứu",
        words: [
          { de: "Falsifikation", vi: "sự phản chứng", article: "die" },
          { de: "Verifikation", vi: "sự xác minh", article: "die" },
          { de: "Hypothese", vi: "giả thuyết", article: "die" },
          { de: "Empirie", vi: "thực nghiệm", article: "die" },
          { de: "Deduktion", vi: "phép suy diễn", article: "die" },
          { de: "Induktion", vi: "phép quy nạp", article: "die" },
          { de: "Reliabilität", vi: "độ tin cậy", article: "die" },
          { de: "Validität", vi: "tính hợp lệ", article: "die" },
          { de: "Paradigma", vi: "hệ hình / mô thức", article: "das" },
          { de: "Epistemologie", vi: "nhận thức luận", article: "die" },
          { de: "Kausalität", vi: "quan hệ nhân quả", article: "die" },
          { de: "Operationalisierung", vi: "sự thao tác hóa", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nominalstil in wissenschaftlichen Texten",
        titleVi: "Phong cách danh từ hóa trong văn bản khoa học",
        rule: "In wissenschaftlichen Texten dominiert der Nominalstil: Verben werden zu Substantiven umgeformt, um Prozesse abstrakt und verdichtet darzustellen. Beispiel: 'Die Forschenden untersuchen' → 'Die Untersuchung der Forschenden'. Häufige Suffixe: -ung, -heit, -keit, -tion, -ismus, -ität. Der Nominalstil erhöht die Informationsdichte, kann aber die Lesbarkeit erschweren.",
        ruleVi: "Trong văn bản khoa học tiếng Đức, phong cách danh từ hóa (Nominalstil) chiếm ưu thế: Động từ được chuyển thành danh từ để trình bày các quá trình một cách trừu tượng và cô đọng. Ví dụ: 'Die Forschenden untersuchen' (Các nhà nghiên cứu khảo sát) → 'Die Untersuchung der Forschenden' (Sự khảo sát của các nhà nghiên cứu). Các hậu tố phổ biến: -ung, -heit, -keit, -tion, -ismus, -ität. Phong cách này tăng mật độ thông tin nhưng có thể làm giảm khả năng đọc hiểu.",
        examples: [
          { de: "Die Operationalisierung der Variablen erfolgt durch standardisierte Fragebögen.", vi: "Việc thao tác hóa các biến số được thực hiện thông qua bảng câu hỏi chuẩn hóa." },
          { de: "Die Falsifizierbarkeit einer Hypothese ist Voraussetzung für ihren wissenschaftlichen Charakter.", vi: "Khả năng phản chứng của một giả thuyết là điều kiện tiên quyết cho tính khoa học của nó." },
          { de: "Unter Berücksichtigung der methodischen Einschränkungen lässt sich konstatieren, dass...", vi: "Xét đến những hạn chế về mặt phương pháp, có thể khẳng định rằng..." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Forschungskolloquium: Methodendiskussion",
        titleVi: "Hội thảo nghiên cứu: Thảo luận phương pháp",
        lines: [
          { speaker: "Prof. Weber", de: "Frau Nguyễn, könnten Sie Ihr methodisches Vorgehen etwas näher erläutern?", vi: "Cô Nguyễn, cô có thể trình bày chi tiết hơn về phương pháp nghiên cứu của mình không?" },
          { speaker: "Linh", de: "Selbstverständlich. Meiner Arbeit liegt ein mixed-methods-Design zugrunde, das qualitative Leitfadeninterviews mit einer quantitativen Fragebogenerhebung trianguliert.", vi: "Tất nhiên ạ. Công trình của tôi dựa trên thiết kế phương pháp hỗn hợp (mixed-methods), kết hợp phỏng vấn bán cấu trúc định tính với khảo sát bảng câu hỏi định lượng." },
          { speaker: "Prof. Weber", de: "Wie gewährleisten Sie die Intersubjektivität Ihrer qualitativen Auswertung?", vi: "Cô đảm bảo tính liên chủ thể trong phân tích định tính như thế nào?" },
          { speaker: "Linh", de: "Durch konsensuelles Kodieren im Forschungsteam und die transparente Dokumentation des gesamten Auswertungsprozesses.", vi: "Thông qua mã hóa đồng thuận trong nhóm nghiên cứu và tài liệu hóa minh bạch toàn bộ quá trình phân tích." }
        ]
      },
      {
        type: "practice",
        titleDe: "Wissenschaftliches Exposé verfassen",
        titleVi: "Viết đề cương nghiên cứu khoa học",
        instruction: "Verfassen Sie ein kurzes Exposé (ca. 200 Wörter) zu einem fiktiven Forschungsprojekt. Gliedern Sie es in: Forschungsfrage, theoretischer Rahmen, methodisches Vorgehen, erwartete Ergebnisse. Verwenden Sie durchgehend den Nominalstil und Fachterminologie.",
        instructionVi: "Hãy viết một đề cương ngắn (khoảng 200 từ) cho một dự án nghiên cứu giả định. Cấu trúc: Câu hỏi nghiên cứu, khung lý thuyết, phương pháp, kết quả dự kiến. Sử dụng xuyên suốt phong cách danh từ hóa và thuật ngữ chuyên ngành."
      }
    ]
  },

  // --- Kapitel 6, Lektion 2: Paradigmenwechsel (Kuhn) ---
  {
    id: "c2-ch6-l2",
    chapterId: 6,
    lessonNumber: 2,
    title: "Paradigmenwechsel (Kuhn)",
    titleVi: "Sự chuyển đổi hệ hình (Kuhn)",
    type: "Grammatik",
    objectives: [
      "Thomas Kuhns Theorie der wissenschaftlichen Revolutionen sprachlich präzise darstellen",
      "Begriffe wie Paradigma, Normalwissenschaft und Anomalie kontextualisieren",
      "Komplexe Argumentationsketten im wissenschaftstheoretischen Diskurs nachvollziehen",
      "Konjunktiv I und II in der indirekten Rede auf C2-Niveau beherrschen"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Thomas Kuhns Paradigmentheorie",
        titleVi: "Lý thuyết hệ hình của Thomas Kuhn",
        textDe: "Thomas S. Kuhn vertrat in seinem epochalen Werk 'Die Struktur wissenschaftlicher Revolutionen' (1962) die These, dass Wissenschaft sich nicht linear-kumulativ entwickle, sondern in Schüben — sogenannten Paradigmenwechseln. Ein Paradigma definiert dabei das gemeinsame Weltbild einer wissenschaftlichen Gemeinschaft: Es legt fest, welche Fragen als relevant gelten, welche Methoden als zulässig erachtet werden und welche Antworten als befriedigend akzeptiert werden. In Phasen der Normalwissenschaft arbeiten Forschende innerhalb des herrschenden Paradigmas. Erst wenn sich Anomalien häufen — also Phänomene, die das bestehende Paradigma nicht erklären kann — entsteht eine Krise, die schließlich zu einer wissenschaftlichen Revolution führen kann.",
        textVi: "Thomas S. Kuhn trong tác phẩm mang tính bước ngoặt 'Cấu trúc các cuộc cách mạng khoa học' (1962) đã đưa ra luận điểm rằng khoa học không phát triển tuyến tính-tích lũy, mà theo từng đợt — gọi là các cuộc chuyển đổi hệ hình (Paradigmenwechsel). Một hệ hình (Paradigma) xác định thế giới quan chung của một cộng đồng khoa học: Nó quy định những câu hỏi nào được coi là phù hợp, phương pháp nào được xem là hợp lệ, và câu trả lời nào được chấp nhận là thỏa đáng. Trong các giai đoạn khoa học bình thường (Normalwissenschaft), các nhà nghiên cứu làm việc trong khuôn khổ hệ hình thống trị. Chỉ khi các dị thường (Anomalien) tích tụ — tức các hiện tượng mà hệ hình hiện tại không thể giải thích — mới phát sinh khủng hoảng, cuối cùng có thể dẫn đến một cuộc cách mạng khoa học."
      },
      {
        type: "vocabulary",
        titleDe: "Kuhns Terminologie",
        titleVi: "Thuật ngữ của Kuhn",
        words: [
          { de: "Paradigmenwechsel", vi: "sự chuyển đổi hệ hình", article: "der" },
          { de: "Normalwissenschaft", vi: "khoa học bình thường", article: "die" },
          { de: "Anomalie", vi: "dị thường / bất thường", article: "die" },
          { de: "Inkommensurabilität", vi: "tính bất khả so sánh", article: "die" },
          { de: "Rätsel lösen (puzzle-solving)", vi: "giải câu đố (trong khuôn khổ hệ hình)", article: "" },
          { de: "wissenschaftliche Revolution", vi: "cuộc cách mạng khoa học", article: "die" },
          { de: "Krise", vi: "khủng hoảng", article: "die" },
          { de: "Forschergemeinschaft", vi: "cộng đồng nghiên cứu", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Konjunktiv I in der Wissenschaftssprache",
        titleVi: "Thức giả định I trong ngôn ngữ khoa học",
        rule: "In wissenschaftlichen Texten wird der Konjunktiv I verwendet, um Positionen anderer Autoren wiederzugeben, ohne sich mit ihnen zu identifizieren. Bei Formgleichheit mit dem Indikativ weicht man auf den Konjunktiv II aus. Beispiel: Kuhn behauptet, Wissenschaft entwickle sich nicht linear. (Konj. I) — Laut Kuhn seien Paradigmen inkommensurabel. (Konj. I) — Popper meinte, eine Theorie müsse falsifizierbar sein. (Konj. II als Ersatz)",
        ruleVi: "Trong văn bản khoa học, Konjunktiv I được sử dụng để truyền đạt quan điểm của tác giả khác mà không đồng nhất với quan điểm đó. Khi hình thức Konjunktiv I trùng với Indikativ, người ta chuyển sang dùng Konjunktiv II. Ví dụ: Kuhn behauptet, Wissenschaft entwickle sich nicht linear. (Konj. I) — Laut Kuhn seien Paradigmen inkommensurabel. (Konj. I) — Popper meinte, eine Theorie müsse falsifizierbar sein. (Konj. II thay thế). Lưu ý: Tiếng Việt không có thức giả định — đây là khái niệm hoàn toàn mới, đòi hỏi luyện tập nhiều.",
        examples: [
          { de: "Kuhn argumentiert, die Normalwissenschaft sei durch das herrschende Paradigma bestimmt.", vi: "Kuhn lập luận rằng khoa học bình thường được xác định bởi hệ hình thống trị." },
          { de: "Dem Autor zufolge führe die Anhäufung von Anomalien unweigerlich zu einer Krise.", vi: "Theo tác giả, sự tích tụ các dị thường tất yếu dẫn đến khủng hoảng." },
          { de: "Popper hingegen vertrat die Auffassung, wissenschaftlicher Fortschritt vollziehe sich durch Falsifikation.", vi: "Ngược lại, Popper cho rằng tiến bộ khoa học diễn ra thông qua phản chứng." }
        ]
      },
      {
        type: "practice",
        titleDe: "Kritische Stellungnahme",
        titleVi: "Bài luận phản biện",
        instruction: "Nehmen Sie kritisch Stellung zu Kuhns These der Inkommensurabilität von Paradigmen. Verwenden Sie den Konjunktiv I zur Wiedergabe von Kuhns Position und formulieren Sie mindestens zwei Gegenargumente. Achten Sie auf einen durchgehend wissenschaftlichen Duktus.",
        instructionVi: "Hãy viết bài phản biện về luận điểm bất khả so sánh của các hệ hình theo Kuhn. Sử dụng Konjunktiv I để truyền đạt quan điểm của Kuhn và đưa ra ít nhất hai phản biện. Chú ý giữ phong cách khoa học xuyên suốt."
      }
    ]
  },

  // --- Kapitel 6, Lektion 3: Wissenschaftsethik ---
  {
    id: "c2-ch6-l3",
    chapterId: 6,
    lessonNumber: 3,
    title: "Wissenschaftsethik",
    titleVi: "Đạo đức khoa học",
    type: "Fertigkeit",
    objectives: [
      "Ethische Dilemmata in der Forschung differenziert erörtern",
      "Fachsprachliche Argumentation zu Themen wie Plagiat, Datenfälschung und informierte Einwilligung",
      "Verfassen eines Positionspapiers zu einem wissenschaftsethischen Thema",
      "Modale Satzkonstruktionen auf höchstem Niveau verwenden"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Ethik in der wissenschaftlichen Praxis",
        titleVi: "Đạo đức trong thực hành khoa học",
        textDe: "Wissenschaftsethik umfasst die Reflexion über moralische Normen und Werte im Forschungsprozess. Zu den zentralen Prinzipien gehören die Redlichkeit (Ehrlichkeit in der Datenerhebung und -auswertung), die Achtung der Menschenwürde (insbesondere bei Humanexperimenten), die Vermeidung von Interessenkonflikten sowie die Transparenz der Forschungsfinanzierung. Aktuelle Debatten betreffen unter anderem die ethischen Implikationen von Künstlicher Intelligenz, die CRISPR-Genomeditierung sowie die Reproduzierbarkeitskrise in den Sozialwissenschaften. Die Deutsche Forschungsgemeinschaft (DFG) hat hierzu verbindliche Leitlinien zur guten wissenschaftlichen Praxis formuliert.",
        textVi: "Đạo đức khoa học bao gồm sự phản tư về các chuẩn mực và giá trị đạo đức trong quá trình nghiên cứu. Các nguyên tắc trung tâm bao gồm sự trung thực (Redlichkeit — thành thật trong thu thập và phân tích dữ liệu), tôn trọng nhân phẩm (đặc biệt trong thí nghiệm trên người), tránh xung đột lợi ích và minh bạch trong tài trợ nghiên cứu. Các cuộc tranh luận hiện tại liên quan đến hàm ý đạo đức của Trí tuệ nhân tạo, chỉnh sửa gen CRISPR, cũng như khủng hoảng tái lập trong khoa học xã hội. Quỹ Nghiên cứu Đức (DFG) đã ban hành các hướng dẫn bắt buộc về thực hành khoa học tốt."
      },
      {
        type: "vocabulary",
        titleDe: "Wissenschaftsethische Schlüsselbegriffe",
        titleVi: "Thuật ngữ then chốt về đạo đức khoa học",
        words: [
          { de: "Redlichkeit", vi: "sự trung thực / liêm chính", article: "die" },
          { de: "Plagiat", vi: "đạo văn", article: "das" },
          { de: "Datenfälschung", vi: "giả mạo dữ liệu", article: "die" },
          { de: "informierte Einwilligung", vi: "sự đồng ý sau khi được thông tin", article: "die" },
          { de: "Interessenkonflikt", vi: "xung đột lợi ích", article: "der" },
          { de: "Reproduzierbarkeit", vi: "khả năng tái lập", article: "die" },
          { de: "Forschungsfreiheit", vi: "tự do nghiên cứu", article: "die" },
          { de: "Ethikkommission", vi: "hội đồng đạo đức", article: "die" },
          { de: "Dual-Use-Problematik", vi: "vấn đề sử dụng kép", article: "die" },
          { de: "Whistleblower", vi: "người tố giác", article: "der" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Modale Konstruktionen: haben/sein + zu + Infinitiv",
        titleVi: "Cấu trúc tình thái: haben/sein + zu + Infinitiv",
        rule: "In der Wissenschaftssprache werden modale Infinitivkonstruktionen häufig als Alternative zum Passiv mit Modalverb verwendet. 'sein + zu + Infinitiv' drückt eine Möglichkeit oder Notwendigkeit aus (passivisch). 'haben + zu + Infinitiv' drückt eine Verpflichtung aus (aktivisch). Diese Konstruktionen verleihen dem Text einen höheren Formalitätsgrad.",
        ruleVi: "Trong ngôn ngữ khoa học, cấu trúc nguyên thể tình thái thường được dùng thay thế cho bị động với động từ tình thái. 'sein + zu + Infinitiv' diễn tả khả năng hoặc sự cần thiết (bị động). 'haben + zu + Infinitiv' diễn tả nghĩa vụ (chủ động). Các cấu trúc này mang lại mức độ trang trọng cao hơn cho văn bản.",
        examples: [
          { de: "Die ethischen Implikationen sind sorgfältig abzuwägen.", vi: "Các hàm ý đạo đức cần được cân nhắc kỹ lưỡng." },
          { de: "Forschende haben die Grundsätze guter wissenschaftlicher Praxis einzuhalten.", vi: "Các nhà nghiên cứu có nghĩa vụ tuân thủ các nguyên tắc thực hành khoa học tốt." },
          { de: "Die Ergebnisse sind vor dem Hintergrund methodischer Limitationen zu interpretieren.", vi: "Kết quả cần được diễn giải trong bối cảnh các hạn chế phương pháp." }
        ]
      },
      {
        type: "practice",
        titleDe: "Positionspapier zur Forschungsethik",
        titleVi: "Bài luận lập trường về đạo đức nghiên cứu",
        instruction: "Verfassen Sie ein Positionspapier (ca. 250 Wörter) zum Thema 'Dürfen Forschungsergebnisse mit Dual-Use-Potenzial veröffentlicht werden?'. Nutzen Sie modale Infinitivkonstruktionen und den Konjunktiv I/II. Argumentieren Sie sowohl Pro als auch Contra.",
        instructionVi: "Hãy viết một bài luận lập trường (khoảng 250 từ) về chủ đề 'Kết quả nghiên cứu có tiềm năng sử dụng kép có nên được công bố không?'. Sử dụng cấu trúc nguyên thể tình thái và Konjunktiv I/II. Lập luận cả hai phía ủng hộ và phản đối."
      }
    ]
  },

  // --- Kapitel 6, Lektion 4: Pragmatische Kompetenz (Ironie, Euphemismus) ---
  {
    id: "c2-ch6-l4",
    chapterId: 6,
    lessonNumber: 4,
    title: "Pragmatische Kompetenz (Ironie, Euphemismus)",
    titleVi: "Năng lực ngữ dụng (Mỉa mai, Uyển ngữ)",
    type: "Integration",
    objectives: [
      "Ironie, Sarkasmus und Understatement im Deutschen erkennen und selbst einsetzen",
      "Euphemismen in verschiedenen Kontexten (Politik, Medien, Alltag) entschlüsseln",
      "Pragmatische Nuancen wie indirekte Sprechakte und konversationelle Implikaturen beherrschen",
      "Kulturspezifische Unterschiede in der Pragmatik zwischen Deutsch und Vietnamesisch reflektieren"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Pragmatische Kompetenz auf C2-Niveau",
        titleVi: "Năng lực ngữ dụng ở trình độ C2",
        textDe: "Pragmatische Kompetenz bezeichnet die Fähigkeit, sprachliche Äußerungen kontextangemessen zu interpretieren und zu produzieren. Auf C2-Niveau umfasst dies das Erkennen und Verwenden von Ironie, Sarkasmus, Understatement, Euphemismen und indirekten Sprechakten. Ironie liegt vor, wenn das Gesagte das Gegenteil des Gemeinten ausdrückt — 'Das hast du ja toll gemacht!' (bei einem Fehler). Euphemismen beschönigen unangenehme Sachverhalte — 'von uns gegangen' statt 'gestorben'. Deutsche Ironie ist oft subtiler als in anderen Kulturen und kann für Nicht-Muttersprachler eine besondere Herausforderung darstellen.",
        textVi: "Năng lực ngữ dụng là khả năng diễn giải và tạo ra các phát ngôn phù hợp với ngữ cảnh. Ở trình độ C2, điều này bao gồm nhận biết và sử dụng mỉa mai (Ironie), châm biếm (Sarkasmus), nói giảm (Understatement), uyển ngữ (Euphemismus) và hành vi ngôn ngữ gián tiếp. Mỉa mai xảy ra khi điều nói ra trái ngược với điều muốn nói — 'Das hast du ja toll gemacht!' (Bạn làm tốt lắm nhỉ! — khi ai đó mắc lỗi). Uyển ngữ làm nhẹ đi những sự việc khó chịu — 'von uns gegangen' (đã rời xa chúng ta) thay vì 'gestorben' (đã chết). Sự mỉa mai trong tiếng Đức thường tinh tế hơn so với các nền văn hóa khác và có thể là thách thức đặc biệt đối với người không phải bản ngữ."
      },
      {
        type: "vocabulary",
        titleDe: "Euphemismen im Deutschen",
        titleVi: "Uyển ngữ trong tiếng Đức",
        words: [
          { de: "von uns gegangen (= gestorben)", vi: "đã rời xa chúng ta (= đã chết)" },
          { de: "freigesetzt werden (= entlassen werden)", vi: "được giải phóng (= bị sa thải)" },
          { de: "Kollateralschaden (= zivile Opfer)", vi: "thiệt hại phụ (= nạn nhân dân sự)" },
          { de: "nachhaltig (inflationär gebraucht)", vi: "bền vững (được sử dụng quá mức)" },
          { de: "Herausforderung (= Problem)", vi: "thách thức (= vấn đề)" },
          { de: "zeitnah (= bald, aber unbestimmt)", vi: "trong thời gian tới (= sớm, nhưng không xác định)" },
          { de: "nicht unproblematisch (= problematisch)", vi: "không phải là không có vấn đề (= có vấn đề)" },
          { de: "Optimierungspotenzial (= Mangel)", vi: "tiềm năng tối ưu hóa (= thiếu sót)" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Litotes und doppelte Verneinung als Stilmittel",
        titleVi: "Phép giảm nhẹ và phủ định kép như biện pháp tu từ",
        rule: "Die Litotes ist eine rhetorische Figur, bei der durch doppelte Verneinung eine Bejahung ausgedrückt wird, oft mit abschwächender oder ironischer Wirkung. 'nicht unerheblich' = erheblich, aber vorsichtig formuliert. 'keineswegs unproblematisch' = sehr problematisch. 'nicht selten' = häufig. Diese Konstruktionen sind typisch für formelle Register und akademische Texte.",
        ruleVi: "Litotes là một biện pháp tu từ trong đó phủ định kép diễn tả sự khẳng định, thường với tác dụng giảm nhẹ hoặc mỉa mai. 'nicht unerheblich' (không phải không đáng kể) = đáng kể, nhưng diễn đạt thận trọng. 'keineswegs unproblematisch' (hoàn toàn không phải không có vấn đề) = rất có vấn đề. 'nicht selten' (không hiếm) = thường xuyên. Các cấu trúc này điển hình cho phong cách trang trọng và văn bản học thuật.",
        examples: [
          { de: "Die Ergebnisse sind nicht unerheblich für die weitere Forschung.", vi: "Kết quả có ý nghĩa không nhỏ (= khá quan trọng) cho nghiên cứu tiếp theo." },
          { de: "Sein Beitrag zum Projekt war keineswegs unbedeutend.", vi: "Đóng góp của anh ấy cho dự án hoàn toàn không phải không quan trọng (= rất quan trọng)." },
          { de: "Es kommt nicht selten vor, dass Studierende die Ironie nicht erkennen.", vi: "Không hiếm khi (= thường xuyên) sinh viên không nhận ra sự mỉa mai." }
        ]
      },
      {
        type: "practice",
        titleDe: "Ironie und Euphemismus erkennen und einsetzen",
        titleVi: "Nhận biết và sử dụng mỉa mai và uyển ngữ",
        instruction: "Lesen Sie die folgenden Aussagen und identifizieren Sie, ob es sich um Ironie, Euphemismus, Litotes oder Sarkasmus handelt. Formulieren Sie dann jeweils drei eigene Beispiele für jede Kategorie, eingebettet in realistische Kontexte (Arbeitsplatz, Universität, Medien).",
        instructionVi: "Đọc các phát biểu sau và xác định xem đó là mỉa mai, uyển ngữ, phép giảm nhẹ hay châm biếm. Sau đó, hãy tự tạo ba ví dụ cho mỗi loại, đặt trong các ngữ cảnh thực tế (nơi làm việc, đại học, truyền thông)."
      }
    ]
  },

  // ============================================================
  // KAPITEL 7: Soziolinguistik & Mehrsprachigkeit
  // ============================================================

  // --- Kapitel 7, Lektion 1: Sprachvariation & Soziolekte ---
  {
    id: "c2-ch7-l1",
    chapterId: 7,
    lessonNumber: 1,
    title: "Sprachvariation & Soziolekte",
    titleVi: "Biến thể ngôn ngữ & Phương ngữ xã hội",
    type: "Einführung",
    objectives: [
      "Konzepte wie Soziolekt, Regiolekt, Ethnolekt und Jugendsprache differenziert beschreiben",
      "Die Beziehung zwischen Sprache und sozialer Identität analysieren",
      "Verschiedene sprachliche Register situationsadäquat einsetzen",
      "Linguistische Fachsprache auf C2-Niveau verwenden"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Sprache als soziales Phänomen",
        titleVi: "Ngôn ngữ như một hiện tượng xã hội",
        textDe: "Die Soziolinguistik untersucht den Zusammenhang zwischen Sprache und Gesellschaft. Sprache ist nie einheitlich — sie variiert je nach Region (Dialekte, Regiolekte), sozialer Schicht (Soziolekte), Alter (Jugendsprache, Seniorensprache), Beruf (Fachsprachen) und ethnischer Zugehörigkeit (Ethnolekte). In Deutschland zeigt sich diese Variation besonders deutlich: Vom Bairischen über das Sächsische bis zum Plattdeutschen existieren zahlreiche Dialekte, die teils für Sprecher anderer Regionen kaum verständlich sind. Hinzu kommt das sogenannte Kiezdeutsch — eine multiethnische Jugendsprache in urbanen Ballungsräumen.",
        textVi: "Ngôn ngữ học xã hội nghiên cứu mối liên hệ giữa ngôn ngữ và xã hội. Ngôn ngữ không bao giờ đồng nhất — nó thay đổi theo vùng miền (phương ngữ, Regiolekte), tầng lớp xã hội (phương ngữ xã hội, Soziolekte), tuổi tác (ngôn ngữ giới trẻ, ngôn ngữ người cao tuổi), nghề nghiệp (ngôn ngữ chuyên ngành) và dân tộc (phương ngữ dân tộc, Ethnolekte). Ở Đức, sự biến thiên này đặc biệt rõ nét: Từ tiếng Bayern qua tiếng Sachsen đến tiếng Plattdeutsch, tồn tại vô số phương ngữ đôi khi hầu như không thể hiểu được đối với người nói từ vùng khác. Ngoài ra còn có Kiezdeutsch — ngôn ngữ giới trẻ đa dân tộc ở các khu vực đô thị đông đúc."
      },
      {
        type: "vocabulary",
        titleDe: "Soziolinguistische Terminologie",
        titleVi: "Thuật ngữ ngôn ngữ học xã hội",
        words: [
          { de: "Soziolekt", vi: "phương ngữ xã hội", article: "der" },
          { de: "Regiolekt", vi: "phương ngữ vùng miền", article: "der" },
          { de: "Ethnolekt", vi: "phương ngữ dân tộc", article: "der" },
          { de: "Idiolekt", vi: "phương ngữ cá nhân", article: "der" },
          { de: "Register", vi: "ngữ vực / phong cách ngôn ngữ", article: "das" },
          { de: "Diglossie", vi: "song ngữ phân tầng", article: "die" },
          { de: "Varietät", vi: "biến thể ngôn ngữ", article: "die" },
          { de: "Prestige", vi: "uy tín (ngôn ngữ)", article: "das" },
          { de: "Stigmatisierung", vi: "sự kỳ thị (ngôn ngữ)", article: "die" },
          { de: "Kiezdeutsch", vi: "tiếng Đức khu phố (ngôn ngữ giới trẻ đô thị)", article: "das" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Diskussion: Dialekt als Identitätsmarker",
        titleVi: "Thảo luận: Phương ngữ như dấu hiệu nhận dạng",
        lines: [
          { speaker: "Dr. Müller", de: "Inwiefern fungiert Dialekt als sozialer Marker? Frau Trần, Sie forschen doch zu diesem Thema.", vi: "Phương ngữ đóng vai trò đánh dấu xã hội như thế nào? Cô Trần, cô đang nghiên cứu về chủ đề này phải không?" },
          { speaker: "Hoa", de: "In der Tat. Meine Untersuchungen zeigen, dass Dialektsprecher in beruflichen Kontexten häufig stigmatisiert werden, obwohl Dialekt in informellen Situationen Authentizität und regionale Zugehörigkeit signalisiert.", vi: "Đúng vậy. Nghiên cứu của tôi cho thấy người nói phương ngữ thường bị kỳ thị trong bối cảnh nghề nghiệp, mặc dù phương ngữ trong tình huống không trang trọng lại thể hiện sự chân thực và thuộc về vùng miền." },
          { speaker: "Dr. Müller", de: "Das erinnert an Bourdieus Konzept des sprachlichen Kapitals. Die Standardsprache wird zum Distinktionsinstrument.", vi: "Điều này gợi nhớ đến khái niệm vốn ngôn ngữ của Bourdieu. Ngôn ngữ chuẩn trở thành công cụ phân biệt." },
          { speaker: "Hoa", de: "Exakt. Und im vietnamesischen Kontext lässt sich Ähnliches beobachten — die Nordvarietät genießt ein höheres Prestige als südliche Varianten, was soziolinguistisch hochinteressant ist.", vi: "Chính xác. Và trong bối cảnh Việt Nam, có thể quan sát điều tương tự — biến thể miền Bắc có uy tín cao hơn so với biến thể miền Nam, điều này rất thú vị về mặt ngôn ngữ học xã hội." }
        ]
      },
      {
        type: "practice",
        titleDe: "Registerwechsel analysieren",
        titleVi: "Phân tích sự chuyển đổi phong cách ngôn ngữ",
        instruction: "Formulieren Sie denselben Sachverhalt ('Ich habe meinen Job verloren und brauche finanzielle Unterstützung') in vier verschiedenen Registern: 1) formelles Behördendeutsch, 2) umgangssprachlich, 3) Jugendsprache, 4) wissenschaftlicher Nominalstil. Reflektieren Sie die pragmatischen Unterschiede.",
        instructionVi: "Hãy diễn đạt cùng một nội dung ('Tôi mất việc và cần hỗ trợ tài chính') trong bốn phong cách khác nhau: 1) tiếng Đức hành chính trang trọng, 2) khẩu ngữ, 3) ngôn ngữ giới trẻ, 4) phong cách danh từ hóa khoa học. Phản tư về sự khác biệt ngữ dụng."
      }
    ]
  },

  // --- Kapitel 7, Lektion 2: Mehrsprachigkeit & Code-Switching ---
  {
    id: "c2-ch7-l2",
    chapterId: 7,
    lessonNumber: 2,
    title: "Mehrsprachigkeit & Code-Switching",
    titleVi: "Đa ngôn ngữ & Chuyển mã",
    type: "Grammatik",
    objectives: [
      "Theorien der Mehrsprachigkeit auf Deutsch darstellen und diskutieren",
      "Code-Switching und Code-Mixing analysieren und kategorisieren",
      "Die eigene mehrsprachige Biografie reflektieren",
      "Partizipialkonstruktionen als Stilmittel wissenschaftlicher Texte verwenden"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Mehrsprachigkeit als Normalfall",
        titleVi: "Đa ngôn ngữ như một hiện tượng bình thường",
        textDe: "Entgegen einer weit verbreiteten Annahme ist Einsprachigkeit historisch und global betrachtet eher die Ausnahme als die Regel. Die Mehrheit der Weltbevölkerung ist zwei- oder mehrsprachig. Code-Switching — der Wechsel zwischen zwei oder mehr Sprachen innerhalb einer Konversation oder eines Satzes — ist dabei kein Zeichen mangelnder Sprachkompetenz, sondern eine hochkomplexe kommunikative Strategie. Man unterscheidet zwischen intersententialem Code-Switching (Sprachwechsel zwischen Sätzen) und intrasententialem Code-Switching (Sprachwechsel innerhalb eines Satzes). Für vietnamesische Deutschlernende ist das Phänomen der Dreisprachigkeit (Vietnamesisch-Englisch-Deutsch) besonders relevant.",
        textVi: "Trái với một quan niệm phổ biến, đơn ngữ xét về mặt lịch sử và toàn cầu là ngoại lệ hơn là quy tắc. Đa số dân số thế giới là song ngữ hoặc đa ngữ. Chuyển mã (Code-Switching) — sự chuyển đổi giữa hai hoặc nhiều ngôn ngữ trong một cuộc hội thoại hoặc câu — không phải là dấu hiệu của năng lực ngôn ngữ kém, mà là một chiến lược giao tiếp phức tạp cao. Người ta phân biệt giữa chuyển mã liên câu (intersentential — chuyển ngôn ngữ giữa các câu) và chuyển mã nội câu (intrasentential — chuyển ngôn ngữ trong một câu). Đối với người Việt học tiếng Đức, hiện tượng ba ngôn ngữ (Việt-Anh-Đức) đặc biệt có liên quan."
      },
      {
        type: "grammar",
        titleDe: "Erweiterte Partizipialkonstruktionen",
        titleVi: "Cấu trúc phân từ mở rộng",
        rule: "Erweiterte Partizipialkonstruktionen ersetzen in der Schriftsprache häufig Relativsätze und verdichten die Information. Sie stehen vor dem Nomen und können sehr lang werden. Partizip I (aktiv, gleichzeitig): die den Sprachwechsel auslösenden Faktoren. Partizip II (passiv, vorzeitig): die von Grosjean durchgeführte Studie. Diese Konstruktionen sind ein Kennzeichen gehobener Wissenschaftssprache.",
        ruleVi: "Cấu trúc phân từ mở rộng trong văn viết thường thay thế mệnh đề quan hệ và cô đọng thông tin. Chúng đứng trước danh từ và có thể rất dài. Phân từ I (chủ động, đồng thời): die den Sprachwechsel auslösenden Faktoren (các yếu tố kích hoạt sự chuyển mã). Phân từ II (bị động, trước đó): die von Grosjean durchgeführte Studie (nghiên cứu được Grosjean thực hiện). Các cấu trúc này là đặc trưng của ngôn ngữ khoa học cao cấp.",
        examples: [
          { de: "Die in mehrsprachigen Gemeinschaften häufig zu beobachtende Praxis des Code-Switchings...", vi: "Thực tiễn chuyển mã thường được quan sát thấy trong các cộng đồng đa ngôn ngữ..." },
          { de: "Die von der Sprachpolitik beeinflussten, sich stetig wandelnden Einstellungen zur Mehrsprachigkeit...", vi: "Các thái độ đối với đa ngôn ngữ, chịu ảnh hưởng bởi chính sách ngôn ngữ và liên tục thay đổi..." },
          { de: "Ein auf Grosjeans Modell basierender, interkulturell ausgerichteter Forschungsansatz...", vi: "Một phương pháp nghiên cứu dựa trên mô hình của Grosjean, hướng đến liên văn hóa..." }
        ]
      },
      {
        type: "practice",
        titleDe: "Sprachbiografie verfassen",
        titleVi: "Viết tiểu sử ngôn ngữ",
        instruction: "Verfassen Sie Ihre persönliche Sprachbiografie (ca. 300 Wörter) auf akademischem Niveau. Reflektieren Sie Ihre Erfahrungen mit Code-Switching zwischen Vietnamesisch, Englisch und Deutsch. Verwenden Sie erweiterte Partizipialkonstruktionen und Fachterminologie der Mehrsprachigkeitsforschung.",
        instructionVi: "Hãy viết tiểu sử ngôn ngữ cá nhân của bạn (khoảng 300 từ) ở cấp độ học thuật. Phản tư về trải nghiệm chuyển mã giữa tiếng Việt, tiếng Anh và tiếng Đức. Sử dụng cấu trúc phân từ mở rộng và thuật ngữ chuyên ngành nghiên cứu đa ngôn ngữ."
      }
    ]
  },

  // --- Kapitel 7, Lektion 3: Sprachpolitik in Europa ---
  {
    id: "c2-ch7-l3",
    chapterId: 7,
    lessonNumber: 3,
    title: "Sprachpolitik in Europa",
    titleVi: "Chính sách ngôn ngữ ở châu Âu",
    type: "Fertigkeit",
    objectives: [
      "Die europäische Sprachenpolitik und den Gemeinsamen Europäischen Referenzrahmen (GER) kritisch analysieren",
      "Sprachminderheiten und ihre Rechte in der EU differenziert darstellen",
      "Argumentative Erörterung zu sprachpolitischen Fragen verfassen",
      "Konnektoren und Satzverknüpfungen auf höchstem Niveau beherrschen"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Europäische Sprachenpolitik",
        titleVi: "Chính sách ngôn ngữ châu Âu",
        textDe: "Die Europäische Union bekennt sich offiziell zum Prinzip der Mehrsprachigkeit: 24 Amtssprachen sind gleichberechtigt, und die Charta der Regional- oder Minderheitensprachen schützt sprachliche Vielfalt. In der Praxis dominiert jedoch zunehmend das Englische als Lingua franca — ein Trend, der durch den Brexit paradoxerweise kaum gebremst wurde. Der Gemeinsame Europäische Referenzrahmen für Sprachen (GER), der Sprachkompetenzen von A1 bis C2 einstuft, ist zu einem globalen Standard geworden, wurde aber auch kritisiert: Er reduziere Sprache auf messbare Kompetenzen und vernachlässige kulturelle, ästhetische und identitätsstiftende Dimensionen.",
        textVi: "Liên minh Châu Âu chính thức cam kết nguyên tắc đa ngôn ngữ: 24 ngôn ngữ chính thức có quyền bình đẳng, và Hiến chương các ngôn ngữ khu vực hoặc thiểu số bảo vệ sự đa dạng ngôn ngữ. Tuy nhiên trong thực tế, tiếng Anh ngày càng thống trị như một lingua franca — một xu hướng mà nghịch lý thay, Brexit hầu như không làm chậm lại. Khung tham chiếu chung châu Âu về ngôn ngữ (GER), phân loại năng lực ngôn ngữ từ A1 đến C2, đã trở thành tiêu chuẩn toàn cầu nhưng cũng bị phê phán: Nó rút gọn ngôn ngữ thành các năng lực đo lường được và bỏ qua các chiều kích văn hóa, thẩm mỹ và tạo dựng bản sắc."
      },
      {
        type: "vocabulary",
        titleDe: "Sprachpolitische Fachbegriffe",
        titleVi: "Thuật ngữ chính sách ngôn ngữ",
        words: [
          { de: "Amtssprache", vi: "ngôn ngữ chính thức", article: "die" },
          { de: "Minderheitensprache", vi: "ngôn ngữ thiểu số", article: "die" },
          { de: "Lingua franca", vi: "ngôn ngữ giao tiếp chung", article: "die" },
          { de: "Spracherhalt", vi: "bảo tồn ngôn ngữ", article: "der" },
          { de: "Sprachtod", vi: "sự chết của ngôn ngữ", article: "der" },
          { de: "Sprachplanung", vi: "quy hoạch ngôn ngữ", article: "die" },
          { de: "Korpusplanung", vi: "quy hoạch hệ thống ngôn ngữ", article: "die" },
          { de: "Statusplanung", vi: "quy hoạch vị thế ngôn ngữ", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Komplexe Satzverknüpfungen und Konnektoren",
        titleVi: "Liên kết câu phức tạp và từ nối",
        rule: "Auf C2-Niveau werden differenzierte Konnektoren erwartet, die über 'aber/weil/obwohl' hinausgehen. Konzessiv: wenngleich, wenn auch, unbeschadet der Tatsache, dass. Adversativ: wohingegen, während (adversativ), demgegenüber. Konsekutiv: infolgedessen, was dazu führt, dass; so ... dass. Kausal: zumal, insofern als, angesichts der Tatsache, dass. Restriktiv: insofern, sofern, es sei denn.",
        ruleVi: "Ở trình độ C2, các từ nối phân biệt được kỳ vọng, vượt xa 'aber/weil/obwohl'. Nhượng bộ: wenngleich, wenn auch, unbeschadet der Tatsache, dass. Đối lập: wohingegen, während (đối lập), demgegenüber. Hệ quả: infolgedessen, was dazu führt, dass; so ... dass. Nguyên nhân: zumal, insofern als, angesichts der Tatsache, dass. Hạn chế: insofern, sofern, es sei denn.",
        examples: [
          { de: "Wenngleich die EU Mehrsprachigkeit propagiert, dominiert de facto das Englische.", vi: "Mặc dù EU tuyên truyền đa ngôn ngữ, trên thực tế tiếng Anh chiếm ưu thế." },
          { de: "Der GER hat die Sprachausbildung standardisiert, wohingegen Kritiker eine Verengung des Sprachbegriffs monieren.", vi: "GER đã chuẩn hóa đào tạo ngôn ngữ, trong khi các nhà phê bình chỉ trích sự thu hẹp khái niệm ngôn ngữ." },
          { de: "Insofern als Sprache identitätsstiftend wirkt, ist Sprachpolitik stets auch Identitätspolitik.", vi: "Trong chừng mực ngôn ngữ có tác dụng tạo dựng bản sắc, chính sách ngôn ngữ luôn đồng thời là chính sách bản sắc." }
        ]
      },
      {
        type: "practice",
        titleDe: "Erörterung: Braucht Europa eine gemeinsame Sprache?",
        titleVi: "Bài luận: Châu Âu có cần một ngôn ngữ chung không?",
        instruction: "Verfassen Sie eine differenzierte Erörterung (ca. 350 Wörter) zur Frage: 'Sollte die EU eine einzige offizielle Verkehrssprache einführen?' Verwenden Sie mindestens sechs verschiedene komplexe Konnektoren und berücksichtigen Sie linguistische, politische und kulturelle Argumente.",
        instructionVi: "Hãy viết một bài luận phân tích (khoảng 350 từ) về câu hỏi: 'EU có nên áp dụng một ngôn ngữ giao tiếp chính thức duy nhất không?' Sử dụng ít nhất sáu từ nối phức tạp khác nhau và xem xét các luận điểm ngôn ngữ học, chính trị và văn hóa."
      }
    ]
  },

  // --- Kapitel 7, Lektion 4: Textlinguistik & Diskursanalyse ---
  {
    id: "c2-ch7-l4",
    chapterId: 7,
    lessonNumber: 4,
    title: "Textlinguistik & Diskursanalyse",
    titleVi: "Ngôn ngữ học văn bản & Phân tích diễn ngôn",
    type: "Integration",
    objectives: [
      "Grundbegriffe der Textlinguistik (Kohäsion, Kohärenz, Textsorte) beherrschen",
      "Kritische Diskursanalyse nach Fairclough und Foucault anwenden",
      "Mediale Diskurse dekonstruieren und sprachliche Machtmechanismen offenlegen",
      "Eigene diskursanalytische Untersuchungen auf Deutsch durchführen"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Von der Textlinguistik zur Diskursanalyse",
        titleVi: "Từ ngôn ngữ học văn bản đến phân tích diễn ngôn",
        textDe: "Die Textlinguistik untersucht Texte als komplexe sprachliche Einheiten jenseits der Satzebene. Zentrale Kriterien der Textualität nach de Beaugrande und Dressler sind Kohäsion (grammatische Verknüpfung), Kohärenz (inhaltlicher Zusammenhang), Intentionalität, Akzeptabilität, Informativität, Situationalität und Intertextualität. Die Diskursanalyse geht darüber hinaus und fragt, wie durch Sprache Wissen produziert, Macht ausgeübt und Identitäten konstruiert werden. Die Kritische Diskursanalyse (CDA) nach Norman Fairclough verbindet linguistische Textanalyse mit soziologischer Gesellschaftskritik.",
        textVi: "Ngôn ngữ học văn bản nghiên cứu văn bản như các đơn vị ngôn ngữ phức tạp vượt ra ngoài cấp độ câu. Các tiêu chí trung tâm về tính văn bản theo de Beaugrande và Dressler là: liên kết hình thức (Kohäsion), mạch lạc nội dung (Kohärenz), tính chủ đích (Intentionalität), tính chấp nhận được (Akzeptabilität), tính thông tin (Informativität), tính tình huống (Situationalität) và liên văn bản (Intertextualität). Phân tích diễn ngôn đi xa hơn và đặt câu hỏi: ngôn ngữ tạo ra tri thức, thực thi quyền lực và kiến tạo bản sắc như thế nào. Phân tích diễn ngôn phê phán (CDA) theo Norman Fairclough kết hợp phân tích ngôn ngữ văn bản với phê phán xã hội học."
      },
      {
        type: "vocabulary",
        titleDe: "Textlinguistische und diskursanalytische Begriffe",
        titleVi: "Thuật ngữ ngôn ngữ học văn bản và phân tích diễn ngôn",
        words: [
          { de: "Kohäsion", vi: "liên kết hình thức", article: "die" },
          { de: "Kohärenz", vi: "mạch lạc nội dung", article: "die" },
          { de: "Textsorte", vi: "thể loại văn bản", article: "die" },
          { de: "Diskurs", vi: "diễn ngôn", article: "der" },
          { de: "Intertextualität", vi: "tính liên văn bản", article: "die" },
          { de: "Machtdiskurs", vi: "diễn ngôn quyền lực", article: "der" },
          { de: "Hegemonie", vi: "bá quyền", article: "die" },
          { de: "Dekonstruktion", vi: "giải cấu trúc", article: "die" },
          { de: "Narrativ", vi: "tường thuật / cốt truyện", article: "das" },
          { de: "Framing", vi: "đóng khung (thông tin)", article: "das" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Freie Relativsätze und weiterführende Relativsätze",
        titleVi: "Mệnh đề quan hệ tự do và mệnh đề quan hệ mở rộng",
        rule: "Freie Relativsätze haben kein Bezugswort und fungieren als Subjekt oder Objekt: 'Wer Diskurse kontrolliert, kontrolliert die Gesellschaft.' — 'Was Foucault unter Diskurs versteht, geht weit über den alltagssprachlichen Begriff hinaus.' Weiterführende Relativsätze beziehen sich auf den gesamten vorherigen Satz und werden mit 'was/worüber/weshalb' eingeleitet: 'Die CDA verbindet Linguistik und Soziologie, was ihren interdisziplinären Charakter ausmacht.'",
        ruleVi: "Mệnh đề quan hệ tự do không có từ tham chiếu và đóng vai trò chủ ngữ hoặc tân ngữ: 'Wer Diskurse kontrolliert, kontrolliert die Gesellschaft.' (Ai kiểm soát diễn ngôn, kiểm soát xã hội.) Mệnh đề quan hệ mở rộng tham chiếu đến toàn bộ câu trước và được dẫn nhập bằng 'was/worüber/weshalb': 'Die CDA verbindet Linguistik und Soziologie, was ihren interdisziplinären Charakter ausmacht.' (CDA kết hợp ngôn ngữ học và xã hội học, điều tạo nên tính chất liên ngành của nó.)",
        examples: [
          { de: "Wer die Sprache einer Gesellschaft analysiert, gewinnt Einblicke in deren Machtstrukturen.", vi: "Ai phân tích ngôn ngữ của một xã hội, người đó có được cái nhìn sâu sắc về cấu trúc quyền lực." },
          { de: "Was in den Medien als Wahrheit dargestellt wird, ist stets diskursiv konstruiert.", vi: "Những gì được trình bày là sự thật trong truyền thông luôn được kiến tạo qua diễn ngôn." },
          { de: "Foucault revolutionierte die Geisteswissenschaften, weshalb sein Einfluss bis heute nachwirkt.", vi: "Foucault đã cách mạng hóa khoa học nhân văn, vì vậy ảnh hưởng của ông kéo dài đến ngày nay." }
        ]
      },
      {
        type: "practice",
        titleDe: "Kritische Diskursanalyse eines Medientextes",
        titleVi: "Phân tích diễn ngôn phê phán một bài báo",
        instruction: "Wählen Sie einen aktuellen deutschsprachigen Zeitungsartikel zum Thema Migration oder Klimawandel. Analysieren Sie den Text nach den Kriterien der Kritischen Diskursanalyse: Welche Metaphern werden verwendet? Welche Akteure werden wie dargestellt? Welche Perspektiven werden marginalisiert? Verfassen Sie Ihre Analyse in akademischem Deutsch (ca. 400 Wörter).",
        instructionVi: "Chọn một bài báo tiếng Đức hiện tại về chủ đề di cư hoặc biến đổi khí hậu. Phân tích văn bản theo các tiêu chí của Phân tích diễn ngôn phê phán: Những ẩn dụ nào được sử dụng? Các tác nhân được trình bày như thế nào? Những góc nhìn nào bị gạt ra bên lề? Viết phân tích bằng tiếng Đức học thuật (khoảng 400 từ)."
      }
    ]
  },

  // ============================================================
  // KAPITEL 8: Wirtschaftsphilosophie & Kapitalismuskritik
  // ============================================================

  // --- Kapitel 8, Lektion 1: Wirtschaftstheorien (Marx, Weber, Keynes) ---
  {
    id: "c2-ch8-l1",
    chapterId: 8,
    lessonNumber: 1,
    title: "Wirtschaftstheorien (Marx, Weber, Keynes)",
    titleVi: "Các lý thuyết kinh tế (Marx, Weber, Keynes)",
    type: "Einführung",
    objectives: [
      "Zentrale Wirtschaftstheorien auf Deutsch differenziert darstellen",
      "Die Positionen von Marx, Weber und Keynes kontrastieren",
      "Fachsprache der Wirtschaftsphilosophie auf C2-Niveau beherrschen",
      "Konzessive und adversative Strukturen für den Theorienvergleich einsetzen"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Drei Denker, drei Perspektiven",
        titleVi: "Ba nhà tư tưởng, ba góc nhìn",
        textDe: "Karl Marx analysierte den Kapitalismus als ein System der Ausbeutung, in dem die Bourgeoisie die Arbeiterklasse durch die Aneignung des Mehrwerts unterdrückt. Max Weber hingegen untersuchte den Zusammenhang zwischen protestantischer Ethik und dem Geist des Kapitalismus und betonte die Rolle kultureller Faktoren für wirtschaftliche Entwicklung. John Maynard Keynes wiederum argumentierte gegen die neoklassische Annahme selbstregulierender Märkte und plädierte für staatliche Intervention in Krisenzeiten. Diese drei Perspektiven prägen bis heute die wirtschaftspolitische Debatte — von der Frage nach Vermögensungleichheit über die Kulturabhängigkeit wirtschaftlichen Handelns bis zur Rolle des Staates in der Ökonomie.",
        textVi: "Karl Marx phân tích chủ nghĩa tư bản như một hệ thống bóc lột, trong đó giai cấp tư sản áp bức giai cấp công nhân thông qua chiếm đoạt giá trị thặng dư. Ngược lại, Max Weber nghiên cứu mối liên hệ giữa đạo đức Tin lành và tinh thần tư bản chủ nghĩa, nhấn mạnh vai trò của các yếu tố văn hóa đối với phát triển kinh tế. John Maynard Keynes lại phản bác giả định tân cổ điển về thị trường tự điều chỉnh và ủng hộ sự can thiệp của nhà nước trong thời kỳ khủng hoảng. Ba góc nhìn này định hình cuộc tranh luận chính sách kinh tế cho đến ngày nay — từ câu hỏi về bất bình đẳng tài sản, qua sự phụ thuộc văn hóa của hành vi kinh tế, đến vai trò của nhà nước trong nền kinh tế."
      },
      {
        type: "vocabulary",
        titleDe: "Wirtschaftsphilosophische Schlüsselbegriffe",
        titleVi: "Thuật ngữ then chốt triết học kinh tế",
        words: [
          { de: "Mehrwert", vi: "giá trị thặng dư", article: "der" },
          { de: "Produktionsmittel", vi: "tư liệu sản xuất", article: "das (Pl.: die)" },
          { de: "Entfremdung", vi: "sự tha hóa", article: "die" },
          { de: "Bourgeoisie", vi: "giai cấp tư sản", article: "die" },
          { de: "Proletariat", vi: "giai cấp vô sản", article: "das" },
          { de: "Rationalisierung", vi: "sự hợp lý hóa", article: "die" },
          { de: "Bürokratisierung", vi: "sự quan liêu hóa", article: "die" },
          { de: "deficit spending", vi: "chi tiêu thâm hụt", article: "das" },
          { de: "Konjunkturpolitik", vi: "chính sách kinh tế theo chu kỳ", article: "die" },
          { de: "Markversagen", vi: "thất bại thị trường", article: "das" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Konzessive und adversative Strukturen im Theorienvergleich",
        titleVi: "Cấu trúc nhượng bộ và đối lập trong so sánh lý thuyết",
        rule: "Für differenzierte Theorienvergleiche benötigt man ein breites Repertoire an konzessiven und adversativen Strukturen. Konzessiv: Mag Marx auch die Klassenverhältnisse überzeichnet haben, so bleibt seine Analyse der Entfremdung aktuell. Bei aller Kritik an Keynes... Wie berechtigt Webers Analyse auch sein mag... Adversativ: Während Marx strukturell argumentiert, setzt Weber auf kulturelle Erklärungsmuster. Im Gegensatz zu... Im Unterschied zu... Anders als...",
        ruleVi: "Để so sánh lý thuyết một cách tinh tế, cần một kho cấu trúc nhượng bộ và đối lập phong phú. Nhượng bộ: Mag Marx auch die Klassenverhältnisse überzeichnet haben, so... (Dù Marx có phóng đại quan hệ giai cấp, thì...) Bei aller Kritik an Keynes... (Dù có mọi phê phán đối với Keynes...) Đối lập: Während Marx strukturell argumentiert, setzt Weber auf kulturelle Erklärungsmuster. (Trong khi Marx lập luận cấu trúc, Weber dựa vào mô hình giải thích văn hóa.)",
        examples: [
          { de: "Mag Marx auch den Untergang des Kapitalismus voreilig prognostiziert haben, so bleibt seine Analyse der Entfremdung von bestechender Aktualität.", vi: "Dù Marx có thể đã quá vội vàng tiên đoán sự sụp đổ của chủ nghĩa tư bản, phân tích của ông về sự tha hóa vẫn có tính thời sự đáng ngạc nhiên." },
          { de: "Während Keynes staatliche Intervention befürwortete, plädierte Hayek für die Selbstregulierung des Marktes.", vi: "Trong khi Keynes ủng hộ sự can thiệp của nhà nước, Hayek lại ủng hộ sự tự điều chỉnh của thị trường." },
          { de: "Bei aller Anerkennung für Webers Beitrag zur Soziologie ist seine These von der protestantischen Ethik nicht unumstritten.", vi: "Dù ghi nhận mọi đóng góp của Weber cho xã hội học, luận điểm về đạo đức Tin lành của ông không phải không gây tranh cãi." }
        ]
      },
      {
        type: "practice",
        titleDe: "Theorienvergleich: Essay",
        titleVi: "So sánh lý thuyết: Tiểu luận",
        instruction: "Verfassen Sie einen vergleichenden Essay (ca. 300 Wörter), in dem Sie die Positionen von Marx und Keynes zur Rolle des Staates in der Wirtschaft kontrastieren. Verwenden Sie mindestens vier verschiedene konzessive oder adversative Strukturen und den Konjunktiv I zur Wiedergabe der Autorenpostionen.",
        instructionVi: "Hãy viết một tiểu luận so sánh (khoảng 300 từ) đối chiếu quan điểm của Marx và Keynes về vai trò của nhà nước trong nền kinh tế. Sử dụng ít nhất bốn cấu trúc nhượng bộ hoặc đối lập khác nhau và Konjunktiv I để truyền đạt quan điểm của các tác giả."
      }
    ]
  },

  // --- Kapitel 8, Lektion 2: Kapitalismuskritik & Alternativen ---
  {
    id: "c2-ch8-l2",
    chapterId: 8,
    lessonNumber: 2,
    title: "Kapitalismuskritik & Alternativen",
    titleVi: "Phê phán chủ nghĩa tư bản & Các mô hình thay thế",
    type: "Grammatik",
    objectives: [
      "Zeitgenössische Kapitalismuskritik differenziert auf Deutsch darstellen",
      "Alternative Wirtschaftsmodelle analysieren und bewerten",
      "Irreale Konditionalsätze und Wunschsätze auf höchstem Niveau verwenden",
      "Differenzierte Stellungnahme zu kontroversen wirtschaftspolitischen Fragen formulieren"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Zeitgenössische Kapitalismuskritik",
        titleVi: "Phê phán chủ nghĩa tư bản đương đại",
        textDe: "Die zeitgenössische Kapitalismuskritik speist sich aus verschiedenen Quellen. Thomas Piketty wies in 'Das Kapital im 21. Jahrhundert' nach, dass die Kapitalrendite (r) langfristig die Wachstumsrate der Wirtschaft (g) übersteigt, was zwangsläufig zu wachsender Ungleichheit führe. Die Postwachstumsbewegung (Degrowth) stellt das Paradigma permanenten Wirtschaftswachstums grundsätzlich infrage und plädiert für eine Ökonomie des Genug. Die Gemeinwohl-Ökonomie nach Christian Felber misst den Erfolg von Unternehmen nicht am Gewinn, sondern am Beitrag zum Gemeinwohl. Auch die Donut-Ökonomie Kate Raworths — die ökonomisches Handeln zwischen einem sozialen Fundament und einer ökologischen Obergrenze verortet — hat breite Aufmerksamkeit erregt.",
        textVi: "Phê phán chủ nghĩa tư bản đương đại bắt nguồn từ nhiều nguồn. Thomas Piketty trong 'Tư bản trong thế kỷ 21' đã chứng minh rằng lợi nhuận từ vốn (r) về lâu dài vượt tỷ lệ tăng trưởng kinh tế (g), điều tất yếu dẫn đến bất bình đẳng gia tăng. Phong trào hậu tăng trưởng (Degrowth) đặt câu hỏi căn bản về mô thức tăng trưởng kinh tế vĩnh viễn và ủng hộ nền kinh tế vừa đủ. Kinh tế vì lợi ích chung (Gemeinwohl-Ökonomie) theo Christian Felber đo lường thành công doanh nghiệp không bằng lợi nhuận mà bằng đóng góp cho lợi ích chung. Kinh tế học hình bánh donut của Kate Raworth — định vị hành động kinh tế giữa nền tảng xã hội và giới hạn sinh thái — cũng thu hút sự chú ý rộng rãi."
      },
      {
        type: "vocabulary",
        titleDe: "Kapitalismuskritisches Vokabular",
        titleVi: "Từ vựng phê phán chủ nghĩa tư bản",
        words: [
          { de: "Postwachstum / Degrowth", vi: "hậu tăng trưởng", article: "das" },
          { de: "Gemeinwohl-Ökonomie", vi: "kinh tế lợi ích chung", article: "die" },
          { de: "Vermögensungleichheit", vi: "bất bình đẳng tài sản", article: "die" },
          { de: "Kapitalrendite", vi: "lợi nhuận từ vốn", article: "die" },
          { de: "Externalisierung", vi: "ngoại hóa (chi phí)", article: "die" },
          { de: "Commons / Gemeingüter", vi: "tài nguyên chung", article: "die (Pl.)" },
          { de: "Ökologischer Fußabdruck", vi: "dấu chân sinh thái", article: "der" },
          { de: "Systemtransformation", vi: "chuyển đổi hệ thống", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Irreale Konditionalsätze der Vergangenheit und Gegenwart",
        titleVi: "Câu điều kiện không thực ở quá khứ và hiện tại",
        rule: "Auf C2-Niveau werden irreale Bedingungssätze differenziert eingesetzt. Gegenwart: Konjunktiv II (würde + Infinitiv oder synthetische Form). Vergangenheit: Konjunktiv II + Perfekt (hätte/wäre + Partizip II). Mischung: Hätte man damals investiert, wäre die Wirtschaft heute stabiler. Varianten ohne 'wenn': Wäre der Kapitalismus reformierbar, bedürfte es keiner Systemalternative. Irrealer Wunsch: Wenn doch...! / Hätte man nur...!",
        ruleVi: "Ở trình độ C2, câu điều kiện không thực được sử dụng một cách tinh tế. Hiện tại: Konjunktiv II (würde + nguyên thể hoặc dạng tổng hợp). Quá khứ: Konjunktiv II + hoàn thành (hätte/wäre + Partizip II). Kết hợp: Hätte man damals investiert, wäre die Wirtschaft heute stabiler. (Nếu lúc đó đầu tư, kinh tế hôm nay sẽ ổn định hơn.) Biến thể không có 'wenn': đảo động từ lên đầu câu. Ước muốn không thực: Wenn doch...! / Hätte man nur...!",
        examples: [
          { de: "Hätte man die Finanzmärkte rechtzeitig reguliert, wäre die Krise von 2008 möglicherweise abwendbar gewesen.", vi: "Nếu người ta đã điều tiết thị trường tài chính kịp thời, cuộc khủng hoảng 2008 có lẽ đã có thể tránh được." },
          { de: "Wäre das Wirtschaftssystem auf Gemeinwohl statt auf Profit ausgerichtet, sähe die Welt anders aus.", vi: "Nếu hệ thống kinh tế hướng đến lợi ích chung thay vì lợi nhuận, thế giới sẽ khác đi." },
          { de: "Wenn doch nur die externen Kosten der Produktion eingepreist würden!", vi: "Giá mà chi phí ngoại sinh của sản xuất được tính vào giá!" }
        ]
      },
      {
        type: "practice",
        titleDe: "Debatte: Kapitalismus reformieren oder überwinden?",
        titleVi: "Tranh luận: Cải cách hay vượt qua chủ nghĩa tư bản?",
        instruction: "Bereiten Sie eine mündliche Debatte vor zum Thema 'Der Kapitalismus lässt sich reformieren — eine Systemalternative ist nicht nötig.' Formulieren Sie je drei Argumente für und gegen diese These. Verwenden Sie irreale Konditionalsätze, den Konjunktiv I für Autorenwiedergabe und differenzierte Konnektoren.",
        instructionVi: "Hãy chuẩn bị một cuộc tranh luận về chủ đề 'Chủ nghĩa tư bản có thể cải cách — không cần mô hình thay thế hệ thống.' Đưa ra ba luận điểm ủng hộ và ba luận điểm phản đối. Sử dụng câu điều kiện không thực, Konjunktiv I để truyền đạt quan điểm tác giả và từ nối tinh tế."
      }
    ]
  },

  // --- Kapitel 8, Lektion 3: Ökonomische Texte analysieren ---
  {
    id: "c2-ch8-l3",
    chapterId: 8,
    lessonNumber: 3,
    title: "Ökonomische Texte analysieren",
    titleVi: "Phân tích văn bản kinh tế",
    type: "Fertigkeit",
    objectives: [
      "Komplexe wirtschaftswissenschaftliche Texte auf Deutsch verstehen und kritisch analysieren",
      "Argumentationsstrukturen in ökonomischen Fachtexten identifizieren",
      "Zusammenfassungen und Rezensionen wirtschaftswissenschaftlicher Texte verfassen",
      "Funktionsverbgefüge in der Wirtschaftssprache beherrschen"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Ökonomische Fachtexte lesen und analysieren",
        titleVi: "Đọc và phân tích văn bản chuyên ngành kinh tế",
        textDe: "Wirtschaftswissenschaftliche Fachtexte zeichnen sich durch eine hohe Informationsdichte, einen ausgeprägten Nominalstil, zahlreiche Fremdwörter und Anglizismen sowie durch spezifische Argumentationsmuster aus. Beim analytischen Lesen sollte man erstens die zentrale These identifizieren, zweitens die Argumentationsstruktur nachzeichnen (empirische Evidenz, theoretische Begründung, normative Schlussfolgerung), drittens die methodischen Prämissen hinterfragen und viertens den Text im breiteren Diskurs verorten. Besonders relevant ist die Fähigkeit, zwischen deskriptiven und normativen Aussagen zu unterscheiden — eine Unterscheidung, die in ökonomischen Texten oft verwischt wird.",
        textVi: "Văn bản chuyên ngành kinh tế đặc trưng bởi mật độ thông tin cao, phong cách danh từ hóa nổi bật, nhiều từ ngoại lai và từ mượn tiếng Anh, cũng như các mô hình lập luận đặc thù. Khi đọc phân tích, cần: thứ nhất, xác định luận điểm trung tâm; thứ hai, lần theo cấu trúc lập luận (bằng chứng thực nghiệm, lý giải lý thuyết, kết luận quy phạm); thứ ba, đặt câu hỏi về các tiền đề phương pháp; thứ tư, đặt văn bản trong diễn ngôn rộng hơn. Đặc biệt quan trọng là khả năng phân biệt giữa phát biểu mô tả và quy phạm — một sự phân biệt thường bị làm mờ trong văn bản kinh tế."
      },
      {
        type: "vocabulary",
        titleDe: "Funktionsverbgefüge in der Wirtschaftssprache",
        titleVi: "Cụm động từ chức năng trong ngôn ngữ kinh tế",
        words: [
          { de: "eine Maßnahme ergreifen", vi: "thực hiện một biện pháp" },
          { de: "in Kraft treten", vi: "có hiệu lực" },
          { de: "Einfluss ausüben auf", vi: "tác động lên" },
          { de: "zur Verfügung stehen", vi: "sẵn có / có thể sử dụng" },
          { de: "in Betracht ziehen", vi: "xem xét / cân nhắc" },
          { de: "Rechnung tragen", vi: "tính đến / lưu ý" },
          { de: "zum Ausdruck bringen", vi: "thể hiện / biểu đạt" },
          { de: "in Frage stellen", vi: "đặt câu hỏi / nghi vấn" },
          { de: "Stellung nehmen zu", vi: "đưa ra lập trường về" },
          { de: "unter Beweis stellen", vi: "chứng minh" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Funktionsverbgefüge vs. Vollverben",
        titleVi: "Cụm động từ chức năng so với động từ đầy đủ",
        rule: "Funktionsverbgefüge (FVG) bestehen aus einem bedeutungsarmen Verb (Funktionsverb) und einem Nomen, das die Hauptbedeutung trägt. Sie sind typisch für formelle und fachsprachliche Register. FVG drücken oft Aktionsarten aus: inchoativ (in Gang kommen = beginnen), durativ (in Betrieb sein = funktionieren), kausativ (in Gang setzen = bewirken, dass etwas beginnt). Im Vergleich zum Vollverb wirken FVG formeller und differenzierter.",
        ruleVi: "Cụm động từ chức năng (FVG) gồm một động từ ít ý nghĩa (động từ chức năng) và một danh từ mang ý nghĩa chính. Chúng điển hình cho phong cách trang trọng và chuyên ngành. FVG thường diễn tả các loại hành động: khởi phát (in Gang kommen = bắt đầu), tiếp diễn (in Betrieb sein = hoạt động), gây khiến (in Gang setzen = làm cho bắt đầu). So với động từ đầy đủ, FVG mang tính trang trọng và tinh tế hơn.",
        examples: [
          { de: "Die Regierung hat eine Reihe von Maßnahmen ergriffen, um der Inflation entgegenzuwirken.", vi: "Chính phủ đã thực hiện một loạt biện pháp để chống lại lạm phát." },
          { de: "Das neue Handelsabkommen tritt am 1. Januar in Kraft.", vi: "Hiệp định thương mại mới có hiệu lực từ ngày 1 tháng 1." },
          { de: "Die EZB übt erheblichen Einfluss auf die Geldpolitik der Mitgliedsstaaten aus.", vi: "ECB tác động đáng kể lên chính sách tiền tệ của các nước thành viên." }
        ]
      },
      {
        type: "practice",
        titleDe: "Rezension eines Wirtschaftstextes",
        titleVi: "Viết bài phê bình một văn bản kinh tế",
        instruction: "Lesen Sie einen Auszug aus einem aktuellen wirtschaftswissenschaftlichen Werk (z.B. Piketty, Mazzucato oder Raworth). Verfassen Sie eine kritische Rezension (ca. 300 Wörter), die folgende Elemente enthält: 1) Zusammenfassung der Hauptthese, 2) Analyse der Argumentationsstruktur, 3) Kritische Würdigung. Verwenden Sie mindestens fünf Funktionsverbgefüge.",
        instructionVi: "Đọc một trích đoạn từ một tác phẩm kinh tế hiện đại (ví dụ: Piketty, Mazzucato hoặc Raworth). Viết một bài phê bình (khoảng 300 từ) bao gồm: 1) Tóm tắt luận điểm chính, 2) Phân tích cấu trúc lập luận, 3) Đánh giá phê phán. Sử dụng ít nhất năm cụm động từ chức năng."
      }
    ]
  },

  // --- Kapitel 8, Lektion 4: Varietätenlinguistik ---
  {
    id: "c2-ch8-l4",
    chapterId: 8,
    lessonNumber: 4,
    title: "Varietätenlinguistik",
    titleVi: "Ngôn ngữ học biến thể",
    type: "Integration",
    objectives: [
      "Das Varietätenmodell des Deutschen verstehen und anwenden",
      "Nationale Varietäten (Deutschland, Österreich, Schweiz) differenziert beschreiben",
      "Sprachpurismus vs. Sprachdynamik kritisch reflektieren",
      "Komplexe Textproduktion: Vergleichende Analyse sprachlicher Varietäten"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Deutsch als plurizentrische Sprache",
        titleVi: "Tiếng Đức như một ngôn ngữ đa trung tâm",
        textDe: "Das Deutsche ist eine plurizentrische Sprache mit mehreren Standardvarietäten: dem bundesdeutschen, dem österreichischen und dem schweizerischen Standarddeutsch. Diese Varietäten unterscheiden sich auf allen sprachlichen Ebenen — phonologisch (die Aussprache des 'R'), lexikalisch (Brötchen/Semmel/Weggli), morphologisch (das E-Mail vs. die E-Mail) und pragmatisch (unterschiedliche Höflichkeitskonventionen). Das plurizentrische Modell nach Ammon erkennt an, dass keine Varietät der anderen überlegen ist — auch wenn das bundesdeutsche Deutsch aufgrund der Bevölkerungszahl und medialen Dominanz ein 'asymmetrisches' Prestige genießt.",
        textVi: "Tiếng Đức là một ngôn ngữ đa trung tâm với nhiều biến thể chuẩn: tiếng Đức chuẩn Đức, Áo và Thụy Sĩ. Các biến thể này khác nhau ở mọi cấp độ ngôn ngữ — âm vị (cách phát âm chữ 'R'), từ vựng (Brötchen/Semmel/Weggli — bánh mì tròn nhỏ), hình thái (das E-Mail vs. die E-Mail) và ngữ dụng (các quy ước lịch sự khác nhau). Mô hình đa trung tâm theo Ammon công nhận rằng không biến thể nào vượt trội hơn biến thể khác — mặc dù tiếng Đức Đức có uy tín 'bất đối xứng' do dân số đông và sự thống trị truyền thông."
      },
      {
        type: "vocabulary",
        titleDe: "Nationale Varianten im Vergleich",
        titleVi: "So sánh biến thể quốc gia",
        words: [
          { de: "Brötchen (DE) / Semmel (AT) / Weggli (CH)", vi: "bánh mì tròn nhỏ" },
          { de: "Kartoffel (DE) / Erdapfel (AT)", vi: "khoai tây" },
          { de: "Fahrrad (DE) / Velo (CH)", vi: "xe đạp" },
          { de: "Abitur (DE) / Matura (AT, CH)", vi: "kỳ thi tốt nghiệp phổ thông" },
          { de: "Tüte (DE) / Sackerl (AT) / Sack (CH)", vi: "túi" },
          { de: "Januar (DE) / Jänner (AT)", vi: "tháng Giêng" },
          { de: "dieses Jahr (DE) / heuer (AT, süddt.)", vi: "năm nay" },
          { de: "Stuhl (DE) / Sessel (AT)", vi: "ghế" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Appositionen und eingeschobene Erklärungen",
        titleVi: "Đồng vị ngữ và giải thích chèn",
        rule: "Appositionen sind eingeschobene Erklärungen, die ein Bezugswort näher bestimmen. Sie stehen im gleichen Kasus wie das Bezugswort und werden durch Kommas abgetrennt. In wissenschaftlichen Texten dienen sie der Verdichtung: 'Ammon, der Begründer der plurizentrischen Theorie, unterscheidet...' Erweiterte Appositionen: 'Das Österreichische Deutsch, eine der drei anerkannten Standardvarietäten des Deutschen, weist...' Auch satzwertige Einschübe sind möglich: 'Die Standardvarietäten — so die zentrale These — sind gleichwertig.'",
        ruleVi: "Đồng vị ngữ (Apposition) là các giải thích chèn bổ sung ý nghĩa cho từ tham chiếu. Chúng đứng cùng cách với từ tham chiếu và được phân tách bằng dấu phẩy. Trong văn bản khoa học, chúng dùng để cô đọng thông tin: 'Ammon, der Begründer der plurizentrischen Theorie, unterscheidet...' (Ammon, người sáng lập lý thuyết đa trung tâm, phân biệt...) Đồng vị ngữ mở rộng và các chèn câu cũng có thể sử dụng.",
        examples: [
          { de: "Peter Auer, einer der führenden Soziolinguisten Deutschlands, untersucht Dialekt-Standard-Dynamiken.", vi: "Peter Auer, một trong những nhà ngôn ngữ học xã hội hàng đầu của Đức, nghiên cứu động lực phương ngữ-chuẩn." },
          { de: "Das Schweizerdeutsche, eine Gruppe alemannischer Dialekte, unterscheidet sich erheblich vom Schriftdeutschen.", vi: "Tiếng Đức Thụy Sĩ, một nhóm phương ngữ Alemannisch, khác biệt đáng kể so với tiếng Đức viết." },
          { de: "Die sogenannte Binnendifferenzierung — ein Konzept, das die interne Variation einer Sprache erfasst — spielt eine zentrale Rolle.", vi: "Sự phân hóa nội bộ — một khái niệm nắm bắt sự biến thiên nội tại của một ngôn ngữ — đóng vai trò trung tâm." }
        ]
      },
      {
        type: "practice",
        titleDe: "Vergleichende Varietätenanalyse: Deutsch und Vietnamesisch",
        titleVi: "Phân tích biến thể so sánh: tiếng Đức và tiếng Việt",
        instruction: "Vergleichen Sie die plurizentrische Situation des Deutschen (DE/AT/CH) mit der diatopischen Variation des Vietnamesischen (Nord-/Mittel-/Südvarietät). Analysieren Sie Gemeinsamkeiten und Unterschiede hinsichtlich Prestige, Standardisierung und Identitätsfunktion. Verfassen Sie Ihren Text (ca. 400 Wörter) mit Appositionen, erweiterten Partizipialkonstruktionen und Funktionsverbgefügen.",
        instructionVi: "So sánh tình hình đa trung tâm của tiếng Đức (DE/AT/CH) với biến thể theo vùng của tiếng Việt (Bắc/Trung/Nam). Phân tích điểm chung và khác biệt về uy tín, chuẩn hóa và chức năng bản sắc. Viết bài (khoảng 400 từ) sử dụng đồng vị ngữ, cấu trúc phân từ mở rộng và cụm động từ chức năng."
      }
    ]
  }
];
