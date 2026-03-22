// B2 German Lessons — Chapters 1–3
// Complete lesson content for Vietnamese learners

import type { ContentBlock, Lesson } from "../a1/chapters1_3";

export const b2LessonsCh1_3: Lesson[] = [
  // =====================================================================
  // KAPITEL 1: Wissenschaft & Forschung
  // =====================================================================

  // --- Kapitel 1, Lektion 1 ---
  {
    id: "b2-ch1-l1",
    chapterId: 1,
    lessonNumber: 1,
    title: "Wissenschaftliche Texte verstehen",
    titleVi: "Đọc hiểu văn bản khoa học",
    type: "Einführung",
    objectives: [
      "Hiểu cấu trúc và đặc điểm của văn bản khoa học tiếng Đức",
      "Nhận biết các thuật ngữ chuyên ngành và cách diễn đạt học thuật",
      "Phân biệt giữa giả thuyết, luận điểm và kết luận trong văn bản",
      "Tóm tắt nội dung chính của một bài báo khoa học",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Aufbau wissenschaftlicher Texte",
        titleVi: "Cấu trúc văn bản khoa học",
        textDe:
          "Wissenschaftliche Texte im Deutschen folgen einer klaren Struktur: Einleitung, Hauptteil und Schluss. Die Einleitung stellt die Forschungsfrage vor, der Hauptteil präsentiert Methoden und Ergebnisse, und der Schluss fasst die wichtigsten Erkenntnisse zusammen. Typisch für wissenschaftliche Texte sind Passivkonstruktionen, Nominalisierungen und Fachbegriffe.",
        textVi:
          "Văn bản khoa học trong tiếng Đức tuân theo cấu trúc rõ ràng: Phần mở đầu (Einleitung), phần chính (Hauptteil) và phần kết (Schluss). Phần mở đầu giới thiệu câu hỏi nghiên cứu, phần chính trình bày phương pháp và kết quả, phần kết tóm tắt những phát hiện quan trọng nhất. Đặc trưng của văn bản khoa học là các cấu trúc bị động (Passiv), danh từ hóa (Nominalisierung) và thuật ngữ chuyên ngành (Fachbegriffe).",
      },
      {
        type: "vocabulary",
        titleDe: "Wissenschaftliche Fachbegriffe",
        titleVi: "Thuật ngữ khoa học",
        words: [
          { de: "die Forschung", vi: "nghiên cứu", article: "die" },
          { de: "die Hypothese", vi: "giả thuyết", article: "die" },
          { de: "die Studie", vi: "nghiên cứu / công trình", article: "die" },
          { de: "das Ergebnis", vi: "kết quả", article: "das" },
          { de: "die Methode", vi: "phương pháp", article: "die" },
          { de: "die Analyse", vi: "phân tích", article: "die" },
          { de: "die Erkenntnis", vi: "phát hiện / nhận thức", article: "die" },
          { de: "der Beweis", vi: "bằng chứng", article: "der" },
          { de: "die Schlussfolgerung", vi: "kết luận", article: "die" },
          { de: "die Quelle", vi: "nguồn tài liệu", article: "die" },
          { de: "der Fachbegriff", vi: "thuật ngữ chuyên ngành", article: "der" },
          { de: "die Zusammenfassung", vi: "tóm tắt", article: "die" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Diskussion über einen Fachartikel",
        titleVi: "Thảo luận về một bài báo chuyên ngành",
        lines: [
          {
            speaker: "Prof. Weber",
            de: "Haben Sie den Artikel über erneuerbare Energien gelesen?",
            vi: "Bạn đã đọc bài báo về năng lượng tái tạo chưa?",
          },
          {
            speaker: "Linh",
            de: "Ja, ich fand die Methodik besonders interessant. Die Forscher haben einen neuen Ansatz gewählt.",
            vi: "Vâng, em thấy phương pháp luận đặc biệt thú vị. Các nhà nghiên cứu đã chọn một cách tiếp cận mới.",
          },
          {
            speaker: "Prof. Weber",
            de: "Genau. Und was halten Sie von den Ergebnissen?",
            vi: "Đúng vậy. Và bạn nghĩ gì về kết quả?",
          },
          {
            speaker: "Linh",
            de: "Die Ergebnisse sind überzeugend, aber ich denke, die Stichprobe hätte größer sein können.",
            vi: "Kết quả khá thuyết phục, nhưng em nghĩ mẫu nghiên cứu lẽ ra có thể lớn hơn.",
          },
          {
            speaker: "Prof. Weber",
            de: "Das ist eine berechtigte Kritik. Können Sie das in der nächsten Sitzung genauer erläutern?",
            vi: "Đó là một phê bình hợp lý. Bạn có thể trình bày chi tiết hơn trong buổi họp tới không?",
          },
          {
            speaker: "Linh",
            de: "Selbstverständlich. Ich werde die relevanten Daten zusammenstellen.",
            vi: "Tất nhiên ạ. Em sẽ tổng hợp các dữ liệu liên quan.",
          },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Redemittel für akademische Diskussionen",
        titleVi: "Mẫu câu cho thảo luận học thuật",
        words: [
          { de: "Meiner Meinung nach...", vi: "Theo ý kiến của tôi..." },
          { de: "Die Studie zeigt, dass...", vi: "Nghiên cứu cho thấy rằng..." },
          { de: "Es ist zu beachten, dass...", vi: "Cần lưu ý rằng..." },
          { de: "Im Gegensatz dazu...", vi: "Ngược lại với điều đó..." },
          { de: "Zusammenfassend lässt sich sagen...", vi: "Tóm lại có thể nói rằng..." },
          { de: "Die Daten belegen, dass...", vi: "Dữ liệu chứng minh rằng..." },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Einen Fachartikel zusammenfassen",
        titleVi: "Bài tập: Tóm tắt một bài báo chuyên ngành",
        instruction:
          "Lesen Sie den folgenden Textausschnitt und fassen Sie die Hauptaussagen in 3-4 Sätzen zusammen. Verwenden Sie dabei wissenschaftliche Redemittel.",
        instructionVi:
          "Hãy đọc đoạn trích sau và tóm tắt các luận điểm chính trong 3-4 câu. Sử dụng các mẫu câu học thuật đã học như 'Die Studie zeigt, dass...' hoặc 'Zusammenfassend lässt sich sagen...'.",
      },
    ],
  },

  // --- Kapitel 1, Lektion 2 ---
  {
    id: "b2-ch1-l2",
    chapterId: 1,
    lessonNumber: 2,
    title: "Hypothesen formulieren",
    titleVi: "Xây dựng giả thuyết",
    type: "Fertigkeit",
    objectives: [
      "Biết cách đặt giả thuyết khoa học bằng tiếng Đức",
      "Sử dụng Konjunktiv II để diễn đạt giả thuyết và điều kiện",
      "Phân biệt giữa Vermutung (phỏng đoán) và Hypothese (giả thuyết)",
      "Trình bày giả thuyết một cách logic và có hệ thống",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Was ist eine Hypothese?",
        titleVi: "Giả thuyết là gì?",
        textDe:
          "Eine Hypothese ist eine begründete Annahme, die durch Forschung überprüft werden kann. Im Deutschen formuliert man Hypothesen oft mit Konjunktiv II oder mit bestimmten Redemitteln wie 'Es wird angenommen, dass...' oder 'Es lässt sich vermuten, dass...'. Eine gute Hypothese ist klar, überprüfbar und falsifizierbar.",
        textVi:
          "Giả thuyết (Hypothese) là một giả định có cơ sở, có thể được kiểm chứng qua nghiên cứu. Trong tiếng Đức, người ta thường xây dựng giả thuyết với Konjunktiv II hoặc với các mẫu câu nhất định như 'Es wird angenommen, dass...' (Người ta giả định rằng...) hoặc 'Es lässt sich vermuten, dass...' (Có thể suy đoán rằng...). Một giả thuyết tốt phải rõ ràng, có thể kiểm chứng và có thể bác bỏ được.",
      },
      {
        type: "grammar",
        titleDe: "Konjunktiv II für Hypothesen",
        titleVi: "Konjunktiv II cho giả thuyết",
        rule: "Hypothesen können mit Konjunktiv II formuliert werden: 'Wenn + Bedingung (Konjunktiv II), dann + Folge (Konjunktiv II)'. Beispiel: 'Wenn die Temperatur steigen würde, würde der Meeresspiegel steigen.'",
        ruleVi:
          "Giả thuyết có thể được diễn đạt bằng Konjunktiv II: 'Wenn + điều kiện (Konjunktiv II), dann + hệ quả (Konjunktiv II)'. Ví dụ: 'Nếu nhiệt độ tăng lên, thì mực nước biển sẽ tăng.' Lưu ý: Konjunktiv II tương tự thì giả định trong tiếng Việt ('nếu... thì sẽ...') nhưng mang tính giả thuyết mạnh hơn.",
        examples: [
          {
            de: "Wenn man die Dosis erhöhen würde, könnte sich die Wirkung verstärken.",
            vi: "Nếu tăng liều lượng, tác dụng có thể sẽ mạnh hơn.",
          },
          {
            de: "Es wäre denkbar, dass der Klimawandel die Migration beeinflusst.",
            vi: "Có thể hình dung rằng biến đổi khí hậu ảnh hưởng đến di cư.",
          },
          {
            de: "Falls die Hypothese zuträfe, müssten die Ergebnisse signifikant sein.",
            vi: "Nếu giả thuyết đúng, kết quả phải có ý nghĩa thống kê.",
          },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Redemittel zur Hypothesenformulierung",
        titleVi: "Mẫu câu để xây dựng giả thuyết",
        words: [
          { de: "Es wird angenommen, dass...", vi: "Người ta giả định rằng..." },
          { de: "Es lässt sich vermuten, dass...", vi: "Có thể suy đoán rằng..." },
          { de: "Man könnte davon ausgehen, dass...", vi: "Có thể cho rằng..." },
          { de: "Die Hypothese lautet...", vi: "Giả thuyết phát biểu rằng..." },
          { de: "Es ist wahrscheinlich, dass...", vi: "Có khả năng là..." },
          { de: "überprüfen", vi: "kiểm chứng" },
          { de: "bestätigen", vi: "xác nhận" },
          { de: "widerlegen", vi: "bác bỏ" },
          { de: "die Annahme", vi: "giả định", article: "die" },
          { de: "der Zusammenhang", vi: "mối liên hệ", article: "der" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Im Forschungsseminar",
        titleVi: "Trong buổi seminar nghiên cứu",
        lines: [
          {
            speaker: "Hà",
            de: "Meine Hypothese lautet: Wenn Studierende regelmäßig Sprachapps nutzen, verbessern sich ihre Sprachkenntnisse schneller.",
            vi: "Giả thuyết của em là: Nếu sinh viên sử dụng app ngôn ngữ thường xuyên, khả năng ngôn ngữ của họ cải thiện nhanh hơn.",
          },
          {
            speaker: "Dr. Schmidt",
            de: "Interessant. Wie wollen Sie das überprüfen?",
            vi: "Thú vị đấy. Bạn định kiểm chứng điều đó như thế nào?",
          },
          {
            speaker: "Hà",
            de: "Ich würde zwei Gruppen vergleichen: eine mit App-Nutzung und eine Kontrollgruppe ohne.",
            vi: "Em sẽ so sánh hai nhóm: một nhóm sử dụng app và một nhóm đối chứng không sử dụng.",
          },
          {
            speaker: "Dr. Schmidt",
            de: "Und welche Variable würden Sie messen?",
            vi: "Và bạn sẽ đo biến số nào?",
          },
          {
            speaker: "Hà",
            de: "Die Ergebnisse standardisierter Sprachtests vor und nach dem Experiment.",
            vi: "Kết quả các bài kiểm tra ngôn ngữ chuẩn hóa trước và sau thí nghiệm.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Eigene Hypothesen formulieren",
        titleVi: "Bài tập: Tự xây dựng giả thuyết",
        instruction:
          "Formulieren Sie drei Hypothesen zu einem Thema Ihrer Wahl. Verwenden Sie verschiedene Redemittel und den Konjunktiv II.",
        instructionVi:
          "Hãy xây dựng ba giả thuyết về một chủ đề bạn tự chọn. Sử dụng các mẫu câu khác nhau và Konjunktiv II. Ví dụ: 'Es wird angenommen, dass...', 'Wenn... würde..., dann würde...'.",
      },
    ],
  },

  // --- Kapitel 1, Lektion 3 ---
  {
    id: "b2-ch1-l3",
    chapterId: 1,
    lessonNumber: 3,
    title: "Statistiken beschreiben & interpretieren",
    titleVi: "Mô tả và diễn giải số liệu thống kê",
    type: "Fertigkeit",
    objectives: [
      "Mô tả biểu đồ, bảng số liệu bằng tiếng Đức",
      "Sử dụng các cấu trúc so sánh và xu hướng (tăng, giảm, ổn định)",
      "Diễn giải dữ liệu thống kê một cách khách quan",
      "Nắm vững từ vựng về số liệu: Anteil, Prozent, Durchschnitt...",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Statistiken beschreiben",
        titleVi: "Mô tả số liệu thống kê",
        textDe:
          "Beim Beschreiben von Statistiken ist es wichtig, objektiv zu bleiben und die Daten genau wiederzugeben. Man beginnt oft mit einer allgemeinen Beschreibung ('Die Grafik zeigt...') und geht dann auf Details ein. Trends werden mit Verben wie 'steigen', 'sinken', 'stagnieren' oder 'schwanken' beschrieben.",
        textVi:
          "Khi mô tả số liệu thống kê, điều quan trọng là phải khách quan và trình bày dữ liệu chính xác. Thường bắt đầu với mô tả tổng quát ('Die Grafik zeigt...' — Biểu đồ cho thấy...) rồi đi vào chi tiết. Xu hướng được mô tả bằng các động từ như 'steigen' (tăng), 'sinken' (giảm), 'stagnieren' (đình trệ) hoặc 'schwanken' (dao động).",
      },
      {
        type: "vocabulary",
        titleDe: "Wortschatz für Statistiken",
        titleVi: "Từ vựng cho số liệu thống kê",
        words: [
          { de: "die Grafik / das Diagramm", vi: "biểu đồ" },
          { de: "die Tabelle", vi: "bảng số liệu", article: "die" },
          { de: "der Anteil", vi: "tỷ lệ / phần", article: "der" },
          { de: "der Durchschnitt", vi: "trung bình", article: "der" },
          { de: "der Prozentsatz", vi: "phần trăm", article: "der" },
          { de: "steigen / zunehmen", vi: "tăng" },
          { de: "sinken / abnehmen", vi: "giảm" },
          { de: "stagnieren / gleichbleiben", vi: "đình trệ / giữ nguyên" },
          { de: "schwanken", vi: "dao động" },
          { de: "sich verdoppeln", vi: "tăng gấp đôi" },
          { de: "der Höchststand", vi: "mức cao nhất", article: "der" },
          { de: "der Tiefstand", vi: "mức thấp nhất", article: "der" },
        ],
      },
      {
        type: "grammar",
        titleDe: "Redemittel für Statistikbeschreibung",
        titleVi: "Mẫu câu mô tả thống kê",
        rule: "Statistiken werden mit spezifischen Redemitteln beschrieben: 'Die Grafik zeigt...' (Einleitung), 'Im Vergleich zu...' (Vergleich), 'Auffällig ist, dass...' (Hervorhebung). Zahlen werden mit Präpositionen verbunden: 'um 5% steigen', 'auf 30% sinken', 'von... auf...'.",
        ruleVi:
          "Thống kê được mô tả bằng các mẫu câu cụ thể: 'Die Grafik zeigt...' (mở đầu), 'Im Vergleich zu...' (so sánh), 'Auffällig ist, dass...' (nhấn mạnh). Số liệu được kết hợp với giới từ: 'um 5% steigen' (tăng 5%), 'auf 30% sinken' (giảm xuống 30%), 'von... auf...' (từ... đến...).",
        examples: [
          {
            de: "Die Grafik zeigt die Entwicklung der Bevölkerung von 2000 bis 2020.",
            vi: "Biểu đồ cho thấy sự phát triển dân số từ năm 2000 đến 2020.",
          },
          {
            de: "Der Anteil ist von 20% auf 35% gestiegen.",
            vi: "Tỷ lệ đã tăng từ 20% lên 35%.",
          },
          {
            de: "Im Vergleich zum Vorjahr ist die Arbeitslosenquote um 2% gesunken.",
            vi: "So với năm trước, tỷ lệ thất nghiệp đã giảm 2%.",
          },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Präsentation von Forschungsergebnissen",
        titleVi: "Trình bày kết quả nghiên cứu",
        lines: [
          {
            speaker: "Tùng",
            de: "Wie Sie in der Grafik sehen können, ist der Energieverbrauch in den letzten zehn Jahren um 15% gestiegen.",
            vi: "Như quý vị có thể thấy trong biểu đồ, mức tiêu thụ năng lượng đã tăng 15% trong mười năm qua.",
          },
          {
            speaker: "Tùng",
            de: "Auffällig ist, dass der Verbrauch erneuerbarer Energien sich im gleichen Zeitraum verdoppelt hat.",
            vi: "Đáng chú ý là mức tiêu thụ năng lượng tái tạo đã tăng gấp đôi trong cùng khoảng thời gian.",
          },
          {
            speaker: "Zuhörer",
            de: "Gibt es regionale Unterschiede?",
            vi: "Có sự khác biệt giữa các vùng không?",
          },
          {
            speaker: "Tùng",
            de: "Ja, im Norden liegt der Anteil erneuerbarer Energien bei 45%, während er im Süden nur 28% beträgt.",
            vi: "Có, ở miền Bắc tỷ lệ năng lượng tái tạo là 45%, trong khi ở miền Nam chỉ đạt 28%.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Eine Statistik beschreiben",
        titleVi: "Bài tập: Mô tả một biểu đồ thống kê",
        instruction:
          "Beschreiben Sie die folgende Statistik in mindestens 5 Sätzen. Verwenden Sie die gelernten Redemittel und achten Sie auf eine objektive Darstellung.",
        instructionVi:
          "Hãy mô tả biểu đồ thống kê sau trong ít nhất 5 câu. Sử dụng các mẫu câu đã học và chú ý trình bày khách quan. Bắt đầu bằng 'Die Grafik zeigt...' và sử dụng các từ chỉ xu hướng như steigen, sinken, schwanken.",
      },
    ],
  },

  // --- Kapitel 1, Lektion 4 ---
  {
    id: "b2-ch1-l4",
    chapterId: 1,
    lessonNumber: 4,
    title: "Konjunktiv II Vergangenheit",
    titleVi: "Konjunktiv II thì quá khứ",
    type: "Grammatik",
    objectives: [
      "Hiểu và sử dụng Konjunktiv II ở thì quá khứ (hätte/wäre + Partizip II)",
      "Diễn đạt điều kiện không có thật trong quá khứ",
      "Sử dụng trong ngữ cảnh khoa học và đời thường",
      "Phân biệt Konjunktiv II hiện tại và quá khứ",
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Konjunktiv II Vergangenheit: Bildung",
        titleVi: "Konjunktiv II quá khứ: Cách thành lập",
        rule: "Konjunktiv II Vergangenheit = hätte/wäre + Partizip II. 'Hätte' wird bei den meisten Verben verwendet, 'wäre' bei Verben der Bewegung und Zustandsveränderung (sein, gehen, fahren, werden...). Beispiel: 'Ich hätte das Experiment anders durchgeführt.' / 'Er wäre gern nach Deutschland geflogen.'",
        ruleVi:
          "Konjunktiv II quá khứ = hätte/wäre + Partizip II (quá khứ phân từ). 'Hätte' dùng với đa số động từ, 'wäre' dùng với động từ chuyển động và thay đổi trạng thái (sein, gehen, fahren, werden...). Ví dụ: 'Ich hätte das Experiment anders durchgeführt.' (Tôi lẽ ra đã tiến hành thí nghiệm khác đi.) So sánh với tiếng Việt: tương đương 'lẽ ra đã...', 'giá mà đã...'.",
        examples: [
          {
            de: "Wenn ich mehr Zeit gehabt hätte, hätte ich die Studie gründlicher analysiert.",
            vi: "Nếu tôi có nhiều thời gian hơn, tôi đã phân tích nghiên cứu kỹ lưỡng hơn.",
          },
          {
            de: "Wäre die Stichprobe größer gewesen, wären die Ergebnisse aussagekräftiger gewesen.",
            vi: "Nếu mẫu nghiên cứu lớn hơn, kết quả đã có ý nghĩa hơn.",
          },
          {
            de: "Er hätte die Deadline einhalten können, wenn er früher angefangen hätte.",
            vi: "Anh ấy đã có thể giữ đúng hạn, nếu anh ấy bắt đầu sớm hơn.",
          },
        ],
      },
      {
        type: "explanation",
        titleDe: "Konjunktiv II Gegenwart vs. Vergangenheit",
        titleVi: "So sánh Konjunktiv II hiện tại và quá khứ",
        textDe:
          "Der Konjunktiv II Gegenwart beschreibt irreale Situationen in der Gegenwart oder Zukunft ('Wenn ich reich wäre, würde ich reisen.'). Der Konjunktiv II Vergangenheit beschreibt irreale Situationen in der Vergangenheit ('Wenn ich reich gewesen wäre, hätte ich gereist.'). Beide Formen drücken aus, dass etwas nicht der Realität entspricht.",
        textVi:
          "Konjunktiv II hiện tại mô tả tình huống không có thật ở hiện tại hoặc tương lai ('Wenn ich reich wäre...' — Nếu tôi giàu...). Konjunktiv II quá khứ mô tả tình huống không có thật trong quá khứ ('Wenn ich reich gewesen wäre...' — Nếu tôi đã giàu...). Cả hai dạng đều diễn đạt điều không phải thực tế. Trong tiếng Việt, ta phân biệt bằng 'nếu... thì sẽ...' (hiện tại) và 'giá mà đã... thì đã...' (quá khứ).",
      },
      {
        type: "vocabulary",
        titleDe: "Wichtige Wendungen",
        titleVi: "Các cách diễn đạt quan trọng",
        words: [
          { de: "hätte + Partizip II", vi: "lẽ ra đã... (với động từ thường)" },
          { de: "wäre + Partizip II", vi: "lẽ ra đã... (với động từ chuyển động)" },
          { de: "Wenn ich gewusst hätte...", vi: "Nếu tôi đã biết..." },
          { de: "An deiner Stelle hätte ich...", vi: "Nếu ở vị trí của bạn, tôi đã..." },
          { de: "Das hätte nicht passieren dürfen.", vi: "Điều đó lẽ ra không được phép xảy ra." },
          { de: "Es wäre besser gewesen, wenn...", vi: "Sẽ tốt hơn nếu..." },
          { de: "Ich hätte das anders gemacht.", vi: "Tôi lẽ ra đã làm khác đi." },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Reflexion über ein Forschungsprojekt",
        titleVi: "Suy ngẫm về một dự án nghiên cứu",
        lines: [
          {
            speaker: "Lan",
            de: "Rückblickend hätte ich die Fragestellung präziser formulieren sollen.",
            vi: "Nhìn lại, lẽ ra em nên đặt câu hỏi nghiên cứu chính xác hơn.",
          },
          {
            speaker: "Dr. Braun",
            de: "Das stimmt. Und die Methode hätte auch angepasst werden können.",
            vi: "Đúng vậy. Và phương pháp cũng lẽ ra có thể được điều chỉnh.",
          },
          {
            speaker: "Lan",
            de: "Wenn wir mehr Probanden gehabt hätten, wären die Ergebnisse repräsentativer gewesen.",
            vi: "Nếu chúng ta có nhiều người tham gia hơn, kết quả đã mang tính đại diện hơn.",
          },
          {
            speaker: "Dr. Braun",
            de: "Trotzdem war es ein guter erster Versuch. Beim nächsten Mal können wir diese Punkte verbessern.",
            vi: "Dù sao đó cũng là một lần thử nghiệm tốt. Lần sau chúng ta có thể cải thiện những điểm này.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Was hätten Sie anders gemacht?",
        titleVi: "Bài tập: Bạn lẽ ra đã làm gì khác?",
        instruction:
          "Denken Sie an eine vergangene Situation und beschreiben Sie, was Sie anders gemacht hätten. Schreiben Sie mindestens 4 Sätze im Konjunktiv II Vergangenheit.",
        instructionVi:
          "Hãy nghĩ về một tình huống trong quá khứ và mô tả bạn lẽ ra đã làm gì khác. Viết ít nhất 4 câu sử dụng Konjunktiv II quá khứ (hätte/wäre + Partizip II).",
      },
    ],
  },

  // =====================================================================
  // KAPITEL 2: Wirtschaft & Globalisierung
  // =====================================================================

  // --- Kapitel 2, Lektion 1 ---
  {
    id: "b2-ch2-l1",
    chapterId: 2,
    lessonNumber: 1,
    title: "Wirtschaftsnachrichten analysieren",
    titleVi: "Phân tích tin tức kinh tế",
    type: "Einführung",
    objectives: [
      "Hiểu và phân tích bài báo kinh tế bằng tiếng Đức",
      "Nắm vững từ vựng kinh tế chuyên ngành",
      "Nhận diện cấu trúc và lập luận trong bài viết kinh tế",
      "Tóm tắt và đánh giá tin tức kinh tế",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Wirtschaftsnachrichten verstehen",
        titleVi: "Hiểu tin tức kinh tế",
        textDe:
          "Wirtschaftsnachrichten verwenden einen spezifischen Wortschatz und bestimmte Textstrukturen. Typisch sind Nominalisierungen (die Erhöhung statt 'erhöhen'), Passivkonstruktionen und Fachbegriffe. Um Wirtschaftstexte zu analysieren, sollte man die Hauptaussage identifizieren, Ursachen und Folgen erkennen und die Argumentation nachvollziehen.",
        textVi:
          "Tin tức kinh tế sử dụng vốn từ vựng đặc thù và cấu trúc văn bản nhất định. Đặc trưng là danh từ hóa (die Erhöhung thay vì 'erhöhen'), cấu trúc bị động và thuật ngữ chuyên ngành. Để phân tích bài viết kinh tế, cần xác định luận điểm chính, nhận ra nguyên nhân và hệ quả, và hiểu lập luận của tác giả.",
      },
      {
        type: "vocabulary",
        titleDe: "Wirtschaftswortschatz",
        titleVi: "Từ vựng kinh tế",
        words: [
          { de: "das Bruttoinlandsprodukt (BIP)", vi: "tổng sản phẩm quốc nội (GDP)", article: "das" },
          { de: "die Inflation", vi: "lạm phát", article: "die" },
          { de: "die Rezession", vi: "suy thoái", article: "die" },
          { de: "das Wirtschaftswachstum", vi: "tăng trưởng kinh tế", article: "das" },
          { de: "der Handelsüberschuss", vi: "thặng dư thương mại", article: "der" },
          { de: "das Handelsdefizit", vi: "thâm hụt thương mại", article: "das" },
          { de: "die Arbeitslosenquote", vi: "tỷ lệ thất nghiệp", article: "die" },
          { de: "der Leitzins", vi: "lãi suất chính sách", article: "der" },
          { de: "die Konjunktur", vi: "chu kỳ kinh tế", article: "die" },
          { de: "der Aktienmarkt", vi: "thị trường chứng khoán", article: "der" },
          { de: "die Investition", vi: "đầu tư", article: "die" },
          { de: "der Wettbewerb", vi: "cạnh tranh", article: "der" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Diskussion über aktuelle Wirtschaftslage",
        titleVi: "Thảo luận về tình hình kinh tế hiện tại",
        lines: [
          {
            speaker: "Moderator",
            de: "Wie bewerten Sie die aktuelle Wirtschaftslage in der EU?",
            vi: "Ông/bà đánh giá tình hình kinh tế hiện tại ở EU như thế nào?",
          },
          {
            speaker: "Experte",
            de: "Die Konjunktur hat sich zwar erholt, aber die Inflation bleibt ein Problem.",
            vi: "Chu kỳ kinh tế đã phục hồi, nhưng lạm phát vẫn là một vấn đề.",
          },
          {
            speaker: "Moderator",
            de: "Welche Maßnahmen wären Ihrer Meinung nach sinnvoll?",
            vi: "Theo ý ông/bà, biện pháp nào sẽ hợp lý?",
          },
          {
            speaker: "Experte",
            de: "Die Zentralbank sollte den Leitzins schrittweise senken und gleichzeitig Investitionen in die Infrastruktur fördern.",
            vi: "Ngân hàng trung ương nên giảm lãi suất chính sách từng bước và đồng thời thúc đẩy đầu tư vào cơ sở hạ tầng.",
          },
          {
            speaker: "Moderator",
            de: "Und wie sehen Sie die Prognosen für das nächste Quartal?",
            vi: "Và ông/bà thấy dự báo cho quý tiếp theo như thế nào?",
          },
          {
            speaker: "Experte",
            de: "Ich rechne mit einem moderaten Wachstum von etwa 1,5 Prozent.",
            vi: "Tôi dự tính một mức tăng trưởng vừa phải khoảng 1,5 phần trăm.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Wirtschaftsnachricht analysieren",
        titleVi: "Bài tập: Phân tích một bản tin kinh tế",
        instruction:
          "Lesen Sie eine aktuelle Wirtschaftsnachricht und beantworten Sie folgende Fragen: 1) Was ist die Hauptaussage? 2) Welche Ursachen werden genannt? 3) Welche Folgen werden beschrieben? 4) Welche Fachbegriffe werden verwendet?",
        instructionVi:
          "Hãy đọc một bản tin kinh tế và trả lời các câu hỏi sau: 1) Luận điểm chính là gì? 2) Những nguyên nhân nào được nêu ra? 3) Những hệ quả nào được mô tả? 4) Những thuật ngữ chuyên ngành nào được sử dụng?",
      },
    ],
  },

  // --- Kapitel 2, Lektion 2 ---
  {
    id: "b2-ch2-l2",
    chapterId: 2,
    lessonNumber: 2,
    title: "Vor- und Nachteile der Globalisierung",
    titleVi: "Ưu và nhược điểm của toàn cầu hóa",
    type: "Fertigkeit",
    objectives: [
      "Trình bày ưu và nhược điểm một cách có cấu trúc",
      "Sử dụng các liên từ và mẫu câu so sánh phức tạp",
      "Lập luận về các khía cạnh khác nhau của toàn cầu hóa",
      "Viết bài luận theo dạng Erörterung (bài nghị luận)",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Erörterung: Vor- und Nachteile abwägen",
        titleVi: "Nghị luận: Cân nhắc ưu và nhược điểm",
        textDe:
          "Eine Erörterung ist ein argumentativer Text, in dem man Vor- und Nachteile systematisch darstellt. Die Struktur umfasst: Einleitung (Thema vorstellen), Hauptteil (Pro-Argumente, Contra-Argumente mit Beispielen) und Schluss (eigene Meinung). Wichtig sind Konnektoren wie 'einerseits... andererseits', 'zwar... aber' und 'obwohl'.",
        textVi:
          "Erörterung (nghị luận) là một văn bản lập luận, trong đó trình bày ưu và nhược điểm một cách có hệ thống. Cấu trúc gồm: Mở đầu (giới thiệu chủ đề), Phần chính (luận điểm ủng hộ, luận điểm phản đối kèm ví dụ) và Kết luận (ý kiến cá nhân). Quan trọng là các liên từ như 'einerseits... andererseits' (một mặt... mặt khác), 'zwar... aber' (tuy... nhưng) và 'obwohl' (mặc dù).",
      },
      {
        type: "vocabulary",
        titleDe: "Wortschatz zur Globalisierung",
        titleVi: "Từ vựng về toàn cầu hóa",
        words: [
          { de: "die Globalisierung", vi: "toàn cầu hóa", article: "die" },
          { de: "der Freihandel", vi: "thương mại tự do", article: "der" },
          { de: "die Vernetzung", vi: "sự kết nối / mạng lưới hóa", article: "die" },
          { de: "der Wohlstand", vi: "sự thịnh vượng", article: "der" },
          { de: "die Ausbeutung", vi: "sự bóc lột", article: "die" },
          { de: "die Chancengleichheit", vi: "bình đẳng cơ hội", article: "die" },
          { de: "die Abhängigkeit", vi: "sự phụ thuộc", article: "die" },
          { de: "der Kulturverlust", vi: "mất bản sắc văn hóa", article: "der" },
          { de: "die Lieferkette", vi: "chuỗi cung ứng", article: "die" },
          { de: "nachhaltig", vi: "bền vững" },
        ],
      },
      {
        type: "grammar",
        titleDe: "Konnektoren für Argumentation",
        titleVi: "Liên từ lập luận",
        rule: "Für Pro-Argumente: 'Ein Vorteil ist, dass...', 'Darüber hinaus...', 'Außerdem...'. Für Contra-Argumente: 'Ein Nachteil ist, dass...', 'Allerdings...', 'Jedoch...'. Für Abwägung: 'Einerseits... andererseits...', 'Zwar... aber...', 'Obwohl... trotzdem...'.",
        ruleVi:
          "Cho luận điểm ủng hộ: 'Ein Vorteil ist, dass...' (Một ưu điểm là...), 'Darüber hinaus...' (Hơn nữa...), 'Außerdem...' (Ngoài ra...). Cho luận điểm phản đối: 'Ein Nachteil ist, dass...' (Một nhược điểm là...), 'Allerdings...' (Tuy nhiên...), 'Jedoch...' (Nhưng...). Cho cân nhắc: 'Einerseits... andererseits...' (Một mặt... mặt khác...), 'Zwar... aber...' (Tuy... nhưng...).",
        examples: [
          {
            de: "Einerseits fördert die Globalisierung den wirtschaftlichen Austausch, andererseits führt sie zu kultureller Uniformität.",
            vi: "Một mặt toàn cầu hóa thúc đẩy trao đổi kinh tế, mặt khác nó dẫn đến sự đồng nhất văn hóa.",
          },
          {
            de: "Zwar profitieren viele Länder vom Freihandel, aber die Vorteile sind ungleich verteilt.",
            vi: "Tuy nhiều nước được hưởng lợi từ thương mại tự do, nhưng lợi ích phân bổ không đều.",
          },
          {
            de: "Obwohl die Globalisierung Arbeitsplätze schafft, gehen in manchen Branchen auch Jobs verloren.",
            vi: "Mặc dù toàn cầu hóa tạo ra việc làm, trong một số ngành cũng mất đi việc làm.",
          },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Debatte über Globalisierung",
        titleVi: "Tranh luận về toàn cầu hóa",
        lines: [
          {
            speaker: "Thanh",
            de: "Ich bin der Meinung, dass die Globalisierung vor allem Vorteile bringt. Sie ermöglicht internationalen Austausch und fördert Innovation.",
            vi: "Em cho rằng toàn cầu hóa mang lại chủ yếu là lợi ích. Nó cho phép trao đổi quốc tế và thúc đẩy đổi mới.",
          },
          {
            speaker: "Maria",
            de: "Das stimmt teilweise, aber wir dürfen nicht vergessen, dass die Globalisierung auch Verlierer hat — besonders in Entwicklungsländern.",
            vi: "Điều đó đúng một phần, nhưng chúng ta không được quên rằng toàn cầu hóa cũng có những người thua cuộc — đặc biệt ở các nước đang phát triển.",
          },
          {
            speaker: "Thanh",
            de: "Einverstanden. Allerdings hat Vietnam als Beispiel stark von der Globalisierung profitiert.",
            vi: "Đồng ý. Tuy nhiên, Việt Nam là ví dụ đã hưởng lợi rất nhiều từ toàn cầu hóa.",
          },
          {
            speaker: "Maria",
            de: "Stimmt, aber zu welchem Preis? Die Umweltbelastung und die Arbeitsbedingungen sind oft problematisch.",
            vi: "Đúng, nhưng với cái giá nào? Ô nhiễm môi trường và điều kiện lao động thường rất có vấn đề.",
          },
          {
            speaker: "Thanh",
            de: "Da haben Sie recht. Deshalb ist eine nachhaltige Globalisierung so wichtig.",
            vi: "Bạn nói đúng. Vì thế toàn cầu hóa bền vững rất quan trọng.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Erörterung schreiben",
        titleVi: "Bài tập: Viết bài nghị luận",
        instruction:
          "Schreiben Sie eine Erörterung zum Thema 'Globalisierung: Chance oder Risiko?' Nennen Sie mindestens 3 Vorteile und 3 Nachteile mit Beispielen und formulieren Sie eine eigene Meinung im Schlussteil.",
        instructionVi:
          "Hãy viết một bài nghị luận về chủ đề 'Toàn cầu hóa: Cơ hội hay rủi ro?' Nêu ít nhất 3 ưu điểm và 3 nhược điểm kèm ví dụ, và đưa ra ý kiến cá nhân ở phần kết luận. Sử dụng các liên từ đã học.",
      },
    ],
  },

  // --- Kapitel 2, Lektion 3 ---
  {
    id: "b2-ch2-l3",
    chapterId: 2,
    lessonNumber: 3,
    title: "Unternehmenspräsentationen",
    titleVi: "Thuyết trình doanh nghiệp",
    type: "Fertigkeit",
    objectives: [
      "Trình bày một doanh nghiệp hoặc dự án bằng tiếng Đức",
      "Sử dụng cấu trúc thuyết trình chuyên nghiệp",
      "Nắm vững từ vựng về cơ cấu doanh nghiệp và kinh doanh",
      "Phản hồi câu hỏi trong buổi thuyết trình",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Aufbau einer Unternehmenspräsentation",
        titleVi: "Cấu trúc bài thuyết trình doanh nghiệp",
        textDe:
          "Eine professionelle Unternehmenspräsentation besteht aus: 1) Begrüßung und Vorstellung, 2) Überblick / Agenda, 3) Unternehmensvorstellung (Geschichte, Mission, Produkte), 4) Zahlen und Fakten, 5) Ausblick und Ziele, 6) Fragerunde. Wichtig sind klare Übergänge zwischen den Abschnitten und eine überzeugende Körpersprache.",
        textVi:
          "Một bài thuyết trình doanh nghiệp chuyên nghiệp gồm: 1) Chào hỏi và giới thiệu, 2) Tổng quan / Chương trình, 3) Giới thiệu doanh nghiệp (lịch sử, sứ mệnh, sản phẩm), 4) Số liệu và dữ kiện, 5) Triển vọng và mục tiêu, 6) Phần hỏi đáp. Quan trọng là có sự chuyển tiếp rõ ràng giữa các phần và ngôn ngữ cơ thể thuyết phục.",
      },
      {
        type: "vocabulary",
        titleDe: "Wortschatz für Präsentationen",
        titleVi: "Từ vựng cho thuyết trình",
        words: [
          { de: "das Unternehmen", vi: "doanh nghiệp / công ty", article: "das" },
          { de: "die Geschäftsführung", vi: "ban giám đốc", article: "die" },
          { de: "der Umsatz", vi: "doanh thu", article: "der" },
          { de: "der Gewinn", vi: "lợi nhuận", article: "der" },
          { de: "die Marktposition", vi: "vị thế thị trường", article: "die" },
          { de: "die Zielgruppe", vi: "nhóm khách hàng mục tiêu", article: "die" },
          { de: "der Wettbewerbsvorteil", vi: "lợi thế cạnh tranh", article: "der" },
          { de: "die Expansion", vi: "mở rộng", article: "die" },
          { de: "die Strategie", vi: "chiến lược", article: "die" },
          { de: "die Nachhaltigkeit", vi: "tính bền vững", article: "die" },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Redemittel für Präsentationen",
        titleVi: "Mẫu câu cho thuyết trình",
        words: [
          { de: "Ich möchte Ihnen heute... vorstellen.", vi: "Hôm nay tôi muốn giới thiệu với quý vị..." },
          { de: "Zunächst möchte ich auf... eingehen.", vi: "Trước tiên tôi muốn đề cập đến..." },
          { de: "Kommen wir nun zum nächsten Punkt.", vi: "Bây giờ chúng ta chuyển sang điểm tiếp theo." },
          { de: "Wie Sie sehen können...", vi: "Như quý vị có thể thấy..." },
          { de: "Abschließend möchte ich betonen, dass...", vi: "Để kết luận, tôi muốn nhấn mạnh rằng..." },
          { de: "Haben Sie noch Fragen?", vi: "Quý vị còn câu hỏi nào không?" },
          { de: "Das ist eine sehr gute Frage.", vi: "Đó là một câu hỏi rất hay." },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Unternehmenspräsentation: TechViet GmbH",
        titleVi: "Thuyết trình doanh nghiệp: TechViet GmbH",
        lines: [
          {
            speaker: "Phong",
            de: "Guten Tag, meine Damen und Herren. Ich freue mich, Ihnen heute unser Unternehmen TechViet vorstellen zu dürfen.",
            vi: "Xin chào quý vị. Tôi rất vui được giới thiệu với quý vị công ty TechViet của chúng tôi hôm nay.",
          },
          {
            speaker: "Phong",
            de: "TechViet wurde 2020 gegründet und ist auf IT-Dienstleistungen spezialisiert. Unser Umsatz beträgt aktuell 5 Millionen Euro.",
            vi: "TechViet được thành lập năm 2020 và chuyên về dịch vụ công nghệ thông tin. Doanh thu hiện tại của chúng tôi là 5 triệu Euro.",
          },
          {
            speaker: "Phong",
            de: "Unsere Strategie für die nächsten drei Jahre sieht eine Expansion nach Südostasien vor.",
            vi: "Chiến lược của chúng tôi cho ba năm tới dự kiến mở rộng sang Đông Nam Á.",
          },
          {
            speaker: "Investor",
            de: "Wie wollen Sie sich von der Konkurrenz abheben?",
            vi: "Các bạn dự định nổi bật so với đối thủ cạnh tranh bằng cách nào?",
          },
          {
            speaker: "Phong",
            de: "Unser Wettbewerbsvorteil liegt in der Kombination von deutscher Qualität und vietnamesischer Effizienz.",
            vi: "Lợi thế cạnh tranh của chúng tôi nằm ở sự kết hợp giữa chất lượng Đức và hiệu quả Việt Nam.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Ihre eigene Unternehmenspräsentation",
        titleVi: "Bài tập: Bài thuyết trình doanh nghiệp của bạn",
        instruction:
          "Erstellen Sie eine kurze Präsentation (ca. 2 Minuten) für ein reales oder fiktives Unternehmen. Verwenden Sie die gelernten Redemittel und strukturieren Sie Ihren Vortrag klar.",
        instructionVi:
          "Hãy chuẩn bị một bài thuyết trình ngắn (khoảng 2 phút) cho một doanh nghiệp thực hoặc hư cấu. Sử dụng các mẫu câu đã học và cấu trúc bài trình bày rõ ràng. Bao gồm: giới thiệu, số liệu, chiến lược và kết luận.",
      },
    ],
  },

  // --- Kapitel 2, Lektion 4 ---
  {
    id: "b2-ch2-l4",
    chapterId: 2,
    lessonNumber: 4,
    title: "Nomen-Verb-Verbindungen",
    titleVi: "Cụm danh từ - động từ cố định",
    type: "Grammatik",
    objectives: [
      "Hiểu và sử dụng các Nomen-Verb-Verbindungen (cụm cố định) thông dụng",
      "Phân biệt giữa động từ đơn và cụm danh từ - động từ tương ứng",
      "Áp dụng trong văn phong trang trọng và học thuật",
      "Nhận biết Nomen-Verb-Verbindungen trong văn bản kinh tế",
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Was sind Nomen-Verb-Verbindungen?",
        titleVi: "Cụm danh từ - động từ cố định là gì?",
        rule: "Nomen-Verb-Verbindungen (auch Funktionsverbgefüge) sind feste Verbindungen aus Nomen und Verb, die eine bestimmte Bedeutung haben. Sie werden oft in formeller Sprache verwendet. Beispiel: 'eine Entscheidung treffen' statt 'entscheiden', 'Kritik üben' statt 'kritisieren'. Das Verb in diesen Verbindungen hat oft seine ursprüngliche Bedeutung verloren.",
        ruleVi:
          "Nomen-Verb-Verbindungen (cụm danh từ - động từ cố định, còn gọi là Funktionsverbgefüge) là các kết hợp cố định giữa danh từ và động từ, mang nghĩa nhất định. Chúng thường được dùng trong ngôn ngữ trang trọng. Ví dụ: 'eine Entscheidung treffen' (đưa ra quyết định) thay vì 'entscheiden' (quyết định). Động từ trong các cụm này thường đã mất nghĩa gốc. Tương tự trong tiếng Việt: 'đưa ra quyết định' thay vì chỉ nói 'quyết định'.",
        examples: [
          {
            de: "Die Regierung hat eine Entscheidung getroffen. (= hat entschieden)",
            vi: "Chính phủ đã đưa ra quyết định. (= đã quyết định)",
          },
          {
            de: "Wir müssen Maßnahmen ergreifen. (= handeln)",
            vi: "Chúng ta phải thực hiện các biện pháp. (= hành động)",
          },
          {
            de: "Der Vertrag tritt am 1. Januar in Kraft. (= wird gültig)",
            vi: "Hợp đồng có hiệu lực từ ngày 1 tháng Giêng. (= trở nên có giá trị)",
          },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Wichtige Nomen-Verb-Verbindungen",
        titleVi: "Các cụm danh từ - động từ quan trọng",
        words: [
          { de: "eine Entscheidung treffen", vi: "đưa ra quyết định (= entscheiden)" },
          { de: "Maßnahmen ergreifen", vi: "thực hiện biện pháp (= handeln)" },
          { de: "in Kraft treten", vi: "có hiệu lực (= gültig werden)" },
          { de: "Kritik üben (an + Dat.)", vi: "phê bình (= kritisieren)" },
          { de: "einen Beitrag leisten", vi: "đóng góp (= beitragen)" },
          { de: "in Betracht ziehen", vi: "cân nhắc (= berücksichtigen)" },
          { de: "zur Verfügung stehen", vi: "có sẵn / sẵn sàng (= verfügbar sein)" },
          { de: "in Frage kommen", vi: "được xem xét / có thể (= möglich sein)" },
          { de: "Einfluss nehmen (auf + Akk.)", vi: "tác động / ảnh hưởng (= beeinflussen)" },
          { de: "in Anspruch nehmen", vi: "sử dụng / tận dụng (= nutzen)" },
          { de: "Bezug nehmen (auf + Akk.)", vi: "đề cập đến (= sich beziehen auf)" },
          { de: "zum Ausdruck bringen", vi: "bày tỏ (= ausdrücken)" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Geschäftsbesprechung",
        titleVi: "Cuộc họp kinh doanh",
        lines: [
          {
            speaker: "Frau Lehmann",
            de: "Wir müssen heute eine wichtige Entscheidung treffen.",
            vi: "Hôm nay chúng ta phải đưa ra một quyết định quan trọng.",
          },
          {
            speaker: "Herr Tran",
            de: "Richtig. Ich möchte zunächst auf den Vorschlag Bezug nehmen, den wir letzte Woche besprochen haben.",
            vi: "Đúng vậy. Trước tiên tôi muốn đề cập đến đề xuất mà chúng ta đã thảo luận tuần trước.",
          },
          {
            speaker: "Frau Lehmann",
            de: "Kommen für Sie beide Optionen in Frage?",
            vi: "Đối với ông, cả hai phương án đều có thể được xem xét không?",
          },
          {
            speaker: "Herr Tran",
            de: "Grundsätzlich ja, aber wir sollten die Risiken in Betracht ziehen, bevor wir Maßnahmen ergreifen.",
            vi: "Về cơ bản là có, nhưng chúng ta nên cân nhắc rủi ro trước khi thực hiện các biện pháp.",
          },
          {
            speaker: "Frau Lehmann",
            de: "Einverstanden. Die neuen Richtlinien treten nächsten Monat in Kraft. Bis dahin müssen wir handeln.",
            vi: "Đồng ý. Các quy định mới có hiệu lực từ tháng sau. Trước đó chúng ta phải hành động.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Nomen-Verb-Verbindungen anwenden",
        titleVi: "Bài tập: Áp dụng cụm danh từ - động từ",
        instruction:
          "Ersetzen Sie die einfachen Verben durch passende Nomen-Verb-Verbindungen: 1) Die Firma hat entschieden, den Standort zu wechseln. 2) Wir müssen handeln. 3) Das Gesetz wird morgen gültig. 4) Er hat das Projekt beeinflusst.",
        instructionVi:
          "Hãy thay thế các động từ đơn giản bằng cụm danh từ - động từ phù hợp: 1) Die Firma hat entschieden → ... eine Entscheidung getroffen. 2) Wir müssen handeln → ... Maßnahmen ergreifen. 3) Das Gesetz wird morgen gültig → ... tritt morgen in Kraft. 4) Er hat das Projekt beeinflusst → ... Einfluss genommen.",
      },
    ],
  },

  // =====================================================================
  // KAPITEL 3: Psychologie & Soziales
  // =====================================================================

  // --- Kapitel 3, Lektion 1 ---
  {
    id: "b2-ch3-l1",
    chapterId: 3,
    lessonNumber: 1,
    title: "Emotionen & Verhaltensweisen beschreiben",
    titleVi: "Mô tả cảm xúc và hành vi",
    type: "Einführung",
    objectives: [
      "Mô tả cảm xúc và trạng thái tâm lý phức tạp bằng tiếng Đức",
      "Sử dụng tính từ và danh từ chỉ cảm xúc ở trình độ nâng cao",
      "Phân tích hành vi con người trong các tình huống khác nhau",
      "Hiểu sự khác biệt văn hóa trong cách biểu đạt cảm xúc",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Emotionen differenziert ausdrücken",
        titleVi: "Diễn đạt cảm xúc một cách tinh tế",
        textDe:
          "Im B2-Niveau geht es nicht nur darum, grundlegende Emotionen wie 'froh' oder 'traurig' zu benennen, sondern Gefühle differenziert zu beschreiben. Statt 'Ich bin traurig' kann man sagen: 'Ich empfinde eine tiefe Melancholie' oder 'Mich überkommt ein Gefühl der Hilflosigkeit'. Auch die Beschreibung von Verhaltensmustern gehört dazu: 'Er neigt dazu, Konflikte zu vermeiden.'",
        textVi:
          "Ở trình độ B2, không chỉ gọi tên các cảm xúc cơ bản như 'vui' hay 'buồn', mà phải mô tả cảm xúc một cách tinh tế. Thay vì 'Ich bin traurig' (Tôi buồn), có thể nói: 'Ich empfinde eine tiefe Melancholie' (Tôi cảm thấy một nỗi u sầu sâu sắc) hoặc 'Mich überkommt ein Gefühl der Hilflosigkeit' (Tôi bị bao trùm bởi cảm giác bất lực). Đặc biệt trong tiếng Đức, cách diễn đạt cảm xúc thường trực tiếp hơn so với văn hóa Việt Nam.",
      },
      {
        type: "vocabulary",
        titleDe: "Differenzierter Emotionswortschatz",
        titleVi: "Từ vựng cảm xúc nâng cao",
        words: [
          { de: "die Begeisterung", vi: "sự hăng hái / phấn khích", article: "die" },
          { de: "die Melancholie", vi: "nỗi u sầu", article: "die" },
          { de: "die Eifersucht", vi: "sự ghen tị", article: "die" },
          { de: "die Gelassenheit", vi: "sự bình thản", article: "die" },
          { de: "die Verzweiflung", vi: "sự tuyệt vọng", article: "die" },
          { de: "die Zuversicht", vi: "sự lạc quan / tin tưởng", article: "die" },
          { de: "die Scham", vi: "sự xấu hổ", article: "die" },
          { de: "die Dankbarkeit", vi: "lòng biết ơn", article: "die" },
          { de: "die Überforderung", vi: "sự quá tải", article: "die" },
          { de: "die Geborgenheit", vi: "cảm giác an toàn / được che chở", article: "die" },
          { de: "empfinden", vi: "cảm nhận" },
          { de: "überkommen", vi: "bao trùm / ập đến" },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Verhaltensweisen beschreiben",
        titleVi: "Mô tả hành vi",
        words: [
          { de: "Er neigt dazu, ...", vi: "Anh ấy có xu hướng..." },
          { de: "Sie tendiert dazu, ...", vi: "Cô ấy có khuynh hướng..." },
          { de: "Er reagiert empfindlich auf...", vi: "Anh ấy phản ứng nhạy cảm với..." },
          { de: "Sie geht Konflikten aus dem Weg.", vi: "Cô ấy tránh xung đột." },
          { de: "Er sucht ständig Bestätigung.", vi: "Anh ấy liên tục tìm kiếm sự công nhận." },
          { de: "Sie verhält sich zurückhaltend.", vi: "Cô ấy cư xử dè dặt." },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Gespräch über Verhaltenspsychologie",
        titleVi: "Cuộc trò chuyện về tâm lý hành vi",
        lines: [
          {
            speaker: "Mai",
            de: "Ich habe gelesen, dass Menschen unter Stress dazu neigen, irrationale Entscheidungen zu treffen.",
            vi: "Em đã đọc rằng con người dưới áp lực có xu hướng đưa ra quyết định thiếu lý trí.",
          },
          {
            speaker: "Prof. Klein",
            de: "Das ist richtig. Man spricht von der sogenannten Stressreaktion. Die Emotionen übernehmen die Kontrolle.",
            vi: "Đúng vậy. Người ta gọi đó là phản ứng stress. Cảm xúc chiếm quyền kiểm soát.",
          },
          {
            speaker: "Mai",
            de: "In Vietnam wird oft erwartet, dass man seine Emotionen kontrolliert, besonders in der Öffentlichkeit.",
            vi: "Ở Việt Nam, người ta thường kỳ vọng rằng mình kiểm soát cảm xúc, đặc biệt ở nơi công cộng.",
          },
          {
            speaker: "Prof. Klein",
            de: "Das ist kulturell bedingt. In Deutschland ist es zunehmend akzeptiert, über Gefühle offen zu sprechen.",
            vi: "Điều đó do văn hóa. Ở Đức, việc nói chuyện cởi mở về cảm xúc ngày càng được chấp nhận.",
          },
          {
            speaker: "Mai",
            de: "Diese kulturellen Unterschiede empfinde ich als bereichernd, auch wenn sie manchmal zu Missverständnissen führen.",
            vi: "Em cảm thấy những khác biệt văn hóa này rất bổ ích, dù đôi khi chúng dẫn đến hiểu lầm.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Emotionen differenziert beschreiben",
        titleVi: "Bài tập: Mô tả cảm xúc tinh tế",
        instruction:
          "Beschreiben Sie drei verschiedene emotionale Situationen ausführlich. Verwenden Sie dabei den erweiterten Wortschatz und vermeiden Sie einfache Adjektive wie 'gut', 'schlecht', 'traurig'.",
        instructionVi:
          "Hãy mô tả chi tiết ba tình huống cảm xúc khác nhau. Sử dụng vốn từ vựng nâng cao đã học và tránh dùng các tính từ đơn giản như 'gut' (tốt), 'schlecht' (xấu), 'traurig' (buồn). Ví dụ: thay vì 'Ich war froh', viết 'Mich überkam ein Gefühl tiefer Dankbarkeit'.",
      },
    ],
  },

  // --- Kapitel 3, Lektion 2 ---
  {
    id: "b2-ch3-l2",
    chapterId: 3,
    lessonNumber: 2,
    title: "Soziale Medien & psychische Gesundheit",
    titleVi: "Mạng xã hội và sức khỏe tâm thần",
    type: "Fertigkeit",
    objectives: [
      "Thảo luận về tác động của mạng xã hội đến sức khỏe tâm thần",
      "Đọc hiểu và phân tích bài viết về chủ đề xã hội",
      "Trình bày quan điểm có cơ sở với dẫn chứng",
      "Sử dụng từ vựng chuyên ngành tâm lý - xã hội",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Der Einfluss sozialer Medien",
        titleVi: "Ảnh hưởng của mạng xã hội",
        textDe:
          "Soziale Medien sind aus dem Alltag nicht mehr wegzudenken. Studien zeigen jedoch, dass übermäßiger Konsum negative Auswirkungen auf die psychische Gesundheit haben kann: Vergleichsdruck, Suchtverhalten, Schlafstörungen und ein verzerrtes Selbstbild. Gleichzeitig bieten soziale Medien auch Vorteile wie soziale Vernetzung und Informationszugang.",
        textVi:
          "Mạng xã hội đã trở thành phần không thể thiếu trong cuộc sống hàng ngày. Tuy nhiên, các nghiên cứu cho thấy việc sử dụng quá mức có thể ảnh hưởng tiêu cực đến sức khỏe tâm thần: áp lực so sánh, hành vi nghiện, rối loạn giấc ngủ và hình ảnh bản thân bị méo mó. Đồng thời, mạng xã hội cũng mang lại lợi ích như kết nối xã hội và tiếp cận thông tin.",
      },
      {
        type: "vocabulary",
        titleDe: "Wortschatz: Soziale Medien & Psyche",
        titleVi: "Từ vựng: Mạng xã hội và tâm lý",
        words: [
          { de: "die psychische Gesundheit", vi: "sức khỏe tâm thần" },
          { de: "das Suchtverhalten", vi: "hành vi nghiện", article: "das" },
          { de: "der Vergleichsdruck", vi: "áp lực so sánh", article: "der" },
          { de: "das Selbstbild", vi: "hình ảnh bản thân", article: "das" },
          { de: "die Schlafstörung", vi: "rối loạn giấc ngủ", article: "die" },
          { de: "die Cybermobbing", vi: "bắt nạt trên mạng", article: "das" },
          { de: "die Informationsflut", vi: "bão thông tin / quá tải thông tin", article: "die" },
          { de: "die Bildschirmzeit", vi: "thời gian sử dụng màn hình", article: "die" },
          { de: "der Algorithmus", vi: "thuật toán", article: "der" },
          { de: "die Filterblase", vi: "bong bóng lọc (filter bubble)", article: "die" },
          { de: "die digitale Kompetenz", vi: "năng lực số" },
          { de: "der bewusste Umgang", vi: "cách sử dụng có ý thức" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Podiumsdiskussion: Social Media",
        titleVi: "Thảo luận bàn tròn: Mạng xã hội",
        lines: [
          {
            speaker: "Moderatorin",
            de: "Welchen Einfluss haben soziale Medien auf die psychische Gesundheit junger Menschen?",
            vi: "Mạng xã hội có ảnh hưởng gì đến sức khỏe tâm thần của giới trẻ?",
          },
          {
            speaker: "Dr. Vũ",
            de: "Zahlreiche Studien belegen einen Zusammenhang zwischen intensiver Social-Media-Nutzung und Angststörungen bei Jugendlichen.",
            vi: "Nhiều nghiên cứu chứng minh mối liên hệ giữa việc sử dụng mạng xã hội chuyên sâu và rối loạn lo âu ở thanh thiếu niên.",
          },
          {
            speaker: "Frau Berg",
            de: "Das sehe ich differenzierter. Soziale Medien können auch als Ressource dienen — für den Austausch mit Gleichgesinnten und zur Selbsthilfe.",
            vi: "Tôi nhìn nhận điều đó khác hơn. Mạng xã hội cũng có thể đóng vai trò là nguồn lực — để trao đổi với những người cùng chí hướng và tự giúp đỡ.",
          },
          {
            speaker: "Dr. Vũ",
            de: "Das stimmt, aber der bewusste Umgang damit muss gelernt werden. Viele Jugendliche verfügen nicht über ausreichende digitale Kompetenz.",
            vi: "Đúng vậy, nhưng cách sử dụng có ý thức cần phải được học. Nhiều thanh thiếu niên không có đủ năng lực số.",
          },
          {
            speaker: "Moderatorin",
            de: "Welche Maßnahmen schlagen Sie vor?",
            vi: "Quý vị đề xuất biện pháp nào?",
          },
          {
            speaker: "Dr. Vũ",
            de: "Medienerziehung sollte fest im Lehrplan verankert werden. Außerdem brauchen wir strengere Regulierungen für Plattformen.",
            vi: "Giáo dục truyền thông nên được đưa vào chương trình giảng dạy. Ngoài ra, chúng ta cần quy định nghiêm ngặt hơn cho các nền tảng.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Stellungnahme verfassen",
        titleVi: "Bài tập: Viết bài bày tỏ quan điểm",
        instruction:
          "Schreiben Sie eine Stellungnahme (ca. 200 Wörter) zum Thema: 'Sollte die Nutzung sozialer Medien für Kinder unter 14 Jahren verboten werden?' Begründen Sie Ihre Meinung mit mindestens drei Argumenten.",
        instructionVi:
          "Hãy viết một bài bày tỏ quan điểm (khoảng 200 từ) về chủ đề: 'Có nên cấm trẻ em dưới 14 tuổi sử dụng mạng xã hội không?' Lập luận ý kiến của bạn với ít nhất ba luận điểm.",
      },
    ],
  },

  // --- Kapitel 3, Lektion 3 ---
  {
    id: "b2-ch3-l3",
    chapterId: 3,
    lessonNumber: 3,
    title: "Beratungsgespräche führen",
    titleVi: "Thực hiện cuộc tư vấn",
    type: "Fertigkeit",
    objectives: [
      "Tiến hành một cuộc tư vấn / tham vấn bằng tiếng Đức",
      "Sử dụng ngôn ngữ đồng cảm và hỗ trợ",
      "Đưa ra lời khuyên một cách tế nhị và chuyên nghiệp",
      "Nắm vững cấu trúc và giai đoạn của cuộc tư vấn",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Struktur eines Beratungsgesprächs",
        titleVi: "Cấu trúc cuộc tư vấn",
        textDe:
          "Ein professionelles Beratungsgespräch folgt einer klaren Struktur: 1) Begrüßung und Vertrauensaufbau, 2) Problemanalyse (aktives Zuhören, Nachfragen), 3) Lösungsfindung (Vorschläge erarbeiten, Optionen abwägen), 4) Vereinbarung und Verabschiedung. Wichtig sind empathische Sprache, offene Fragen und eine wertschätzende Haltung.",
        textVi:
          "Một cuộc tư vấn chuyên nghiệp tuân theo cấu trúc rõ ràng: 1) Chào hỏi và xây dựng lòng tin, 2) Phân tích vấn đề (lắng nghe tích cực, hỏi thêm), 3) Tìm giải pháp (đề xuất, cân nhắc các lựa chọn), 4) Thỏa thuận và tạm biệt. Quan trọng là ngôn ngữ đồng cảm, câu hỏi mở và thái độ tôn trọng.",
      },
      {
        type: "vocabulary",
        titleDe: "Redemittel für Beratungsgespräche",
        titleVi: "Mẫu câu cho cuộc tư vấn",
        words: [
          { de: "Ich verstehe, dass das schwierig für Sie ist.", vi: "Tôi hiểu điều đó khó khăn cho bạn." },
          { de: "Können Sie mir genauer beschreiben, was passiert ist?", vi: "Bạn có thể mô tả chi tiết hơn chuyện gì đã xảy ra không?" },
          { de: "Wie fühlen Sie sich dabei?", vi: "Bạn cảm thấy thế nào về điều đó?" },
          { de: "Was haben Sie bisher versucht?", vi: "Bạn đã thử những gì cho đến nay?" },
          { de: "Ich würde Ihnen vorschlagen, ...", vi: "Tôi muốn gợi ý cho bạn..." },
          { de: "Eine Möglichkeit wäre, ...", vi: "Một khả năng là..." },
          { de: "Haben Sie schon mal daran gedacht, ...?", vi: "Bạn đã bao giờ nghĩ đến... chưa?" },
          { de: "Das klingt wirklich belastend.", vi: "Nghe thật sự rất nặng nề." },
          { de: "Lassen Sie uns gemeinsam nach Lösungen suchen.", vi: "Hãy cùng nhau tìm giải pháp." },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Beratungsgespräch: Studienstress",
        titleVi: "Tư vấn: Áp lực học tập",
        lines: [
          {
            speaker: "Beraterin",
            de: "Guten Tag. Schön, dass Sie da sind. Was führt Sie heute zu mir?",
            vi: "Xin chào. Rất vui vì bạn đã đến. Điều gì đưa bạn đến với tôi hôm nay?",
          },
          {
            speaker: "Dũng",
            de: "Ich fühle mich total überfordert mit dem Studium. Ich schaffe es nicht mehr, alles unter einen Hut zu bringen.",
            vi: "Em cảm thấy hoàn toàn quá tải với việc học. Em không còn xoay sở nổi mọi thứ nữa.",
          },
          {
            speaker: "Beraterin",
            de: "Das klingt wirklich belastend. Können Sie mir genauer beschreiben, was Sie am meisten stresst?",
            vi: "Nghe thật sự rất nặng nề. Bạn có thể mô tả chi tiết hơn điều gì khiến bạn stress nhất không?",
          },
          {
            speaker: "Dũng",
            de: "Die Prüfungen, der Nebenjob und dann noch die Sprachbarriere. Manchmal fühle ich mich einfach hilflos.",
            vi: "Các kỳ thi, công việc làm thêm và rào cản ngôn ngữ nữa. Đôi khi em cảm thấy thật sự bất lực.",
          },
          {
            speaker: "Beraterin",
            de: "Ich verstehe, dass das eine enorme Belastung ist. Haben Sie schon mal daran gedacht, Ihren Stundenplan anzupassen oder eine Prüfung zu verschieben?",
            vi: "Tôi hiểu đó là gánh nặng rất lớn. Bạn đã bao giờ nghĩ đến việc điều chỉnh thời khóa biểu hoặc dời lại một kỳ thi chưa?",
          },
          {
            speaker: "Dũng",
            de: "Daran habe ich noch nicht gedacht. Ist das möglich?",
            vi: "Em chưa nghĩ đến điều đó. Điều đó có thể được không?",
          },
          {
            speaker: "Beraterin",
            de: "Ja, natürlich. Lassen Sie uns gemeinsam nach der besten Lösung für Sie suchen.",
            vi: "Vâng, tất nhiên. Hãy cùng nhau tìm giải pháp tốt nhất cho bạn.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Ein Beratungsgespräch simulieren",
        titleVi: "Bài tập: Mô phỏng cuộc tư vấn",
        instruction:
          "Simulieren Sie ein Beratungsgespräch. Sie sind der/die Berater/in. Ein Kommilitone hat Probleme mit der Vereinbarkeit von Studium und Arbeit. Verwenden Sie empathische Sprache und die gelernten Redemittel.",
        instructionVi:
          "Hãy mô phỏng một cuộc tư vấn. Bạn là người tư vấn. Một bạn học gặp vấn đề trong việc cân bằng học tập và công việc. Sử dụng ngôn ngữ đồng cảm và các mẫu câu đã học. Viết ít nhất 8 câu thoại (4 cho mỗi vai).",
      },
    ],
  },

  // --- Kapitel 3, Lektion 4 ---
  {
    id: "b2-ch3-l4",
    chapterId: 3,
    lessonNumber: 4,
    title: "Partizipialkonstruktionen",
    titleVi: "Cấu trúc phân từ",
    type: "Grammatik",
    objectives: [
      "Hiểu và sử dụng Partizip I (Partizip Präsens) và Partizip II (Partizip Perfekt) làm tính từ",
      "Chuyển đổi mệnh đề quan hệ thành cấu trúc phân từ và ngược lại",
      "Nhận biết cấu trúc phân từ trong văn bản học thuật và báo chí",
      "Áp dụng trong viết văn trang trọng",
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Partizip I und Partizip II als Adjektive",
        titleVi: "Partizip I và Partizip II dùng làm tính từ",
        rule: "Partizip I (Partizip Präsens) = Infinitiv + d: 'schlafend' (đang ngủ), 'wachsend' (đang tăng). Drückt eine gleichzeitige, aktive Handlung aus. Partizip II = ge...t/ge...en: 'geschrieben' (đã viết), 'gelöst' (đã giải). Drückt einen abgeschlossenen, oft passiven Zustand aus. Beide können wie Adjektive vor Nomen stehen und werden dekliniert.",
        ruleVi:
          "Partizip I (phân từ hiện tại) = nguyên thể + d: 'schlafend' (đang ngủ), 'wachsend' (đang tăng). Diễn đạt hành động đồng thời, chủ động. Partizip II (quá khứ phân từ) = ge...t/ge...en: 'geschrieben' (đã được viết), 'gelöst' (đã được giải). Diễn đạt trạng thái hoàn thành, thường bị động. Cả hai đều có thể đứng trước danh từ như tính từ và được chia đuôi. So sánh: tiếng Việt dùng 'đang...' cho Partizip I và 'đã được...' cho Partizip II.",
        examples: [
          {
            de: "Die wachsende Bevölkerung stellt eine Herausforderung dar. (Partizip I)",
            vi: "Dân số đang tăng đặt ra một thách thức. (Partizip I — hành động đang diễn ra)",
          },
          {
            de: "Die veröffentlichte Studie hat großes Interesse geweckt. (Partizip II)",
            vi: "Nghiên cứu đã được công bố đã thu hút sự quan tâm lớn. (Partizip II — hành động đã hoàn thành)",
          },
          {
            de: "Der in Berlin lebende Wissenschaftler hat einen Preis gewonnen. (erweiterte Partizipialgruppe)",
            vi: "Nhà khoa học đang sống ở Berlin đã giành được giải thưởng. (nhóm phân từ mở rộng)",
          },
        ],
      },
      {
        type: "explanation",
        titleDe: "Relativsatz → Partizipialkonstruktion",
        titleVi: "Chuyển mệnh đề quan hệ → cấu trúc phân từ",
        textDe:
          "Partizipialkonstruktionen sind eine verkürzte Form von Relativsätzen und typisch für die Schriftsprache. Beispiel: 'Die Studie, die 2024 veröffentlicht wurde, zeigt...' → 'Die 2024 veröffentlichte Studie zeigt...' Die Umwandlung erfordert: 1) Relativpronomen weglassen, 2) Verb in Partizipform bringen, 3) vor das Nomen stellen.",
        textVi:
          "Cấu trúc phân từ là dạng rút gọn của mệnh đề quan hệ, đặc trưng cho văn viết. Ví dụ: 'Die Studie, die 2024 veröffentlicht wurde, zeigt...' → 'Die 2024 veröffentlichte Studie zeigt...' (Nghiên cứu được công bố năm 2024 cho thấy...). Cách chuyển đổi: 1) Bỏ đại từ quan hệ, 2) Chuyển động từ sang dạng phân từ, 3) Đặt trước danh từ.",
      },
      {
        type: "vocabulary",
        titleDe: "Häufige Partizipialkonstruktionen",
        titleVi: "Các cấu trúc phân từ thường gặp",
        words: [
          { de: "die zunehmende Digitalisierung", vi: "quá trình số hóa ngày càng tăng" },
          { de: "die betroffenen Personen", vi: "những người bị ảnh hưởng" },
          { de: "der oben genannte Punkt", vi: "điểm đã nêu ở trên" },
          { de: "die erwarteten Ergebnisse", vi: "các kết quả được kỳ vọng" },
          { de: "das laufende Projekt", vi: "dự án đang thực hiện" },
          { de: "die ansteigende Nachfrage", vi: "nhu cầu đang tăng" },
          { de: "der ausgebildete Fachmann", vi: "chuyên gia đã được đào tạo" },
          { de: "die entscheidende Frage", vi: "câu hỏi mang tính quyết định" },
          { de: "die vorgeschlagene Lösung", vi: "giải pháp được đề xuất" },
          { de: "der anhaltende Trend", vi: "xu hướng đang tiếp diễn" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Akademischer Vortrag mit Partizipialkonstruktionen",
        titleVi: "Bài giảng học thuật với cấu trúc phân từ",
        lines: [
          {
            speaker: "Dozentin",
            de: "Die in den letzten Jahren durchgeführten Untersuchungen zeigen einen klaren Trend.",
            vi: "Các cuộc điều tra được thực hiện trong những năm gần đây cho thấy một xu hướng rõ ràng.",
          },
          {
            speaker: "Dozentin",
            de: "Die zunehmende Urbanisierung hat weitreichende Folgen für die betroffenen Gemeinschaften.",
            vi: "Quá trình đô thị hóa ngày càng tăng có những hệ quả sâu rộng đối với các cộng đồng bị ảnh hưởng.",
          },
          {
            speaker: "Hương",
            de: "Könnten Sie die im Artikel erwähnten Gegenargumente näher erläutern?",
            vi: "Cô có thể giải thích chi tiết hơn các phản biện được đề cập trong bài viết không?",
          },
          {
            speaker: "Dozentin",
            de: "Natürlich. Die von Kritikern vorgebrachten Einwände betreffen hauptsächlich die verwendete Methodik.",
            vi: "Tất nhiên. Các phản đối được đưa ra bởi các nhà phê bình chủ yếu liên quan đến phương pháp luận được sử dụng.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Relativsätze in Partizipialkonstruktionen umwandeln",
        titleVi: "Bài tập: Chuyển mệnh đề quan hệ thành cấu trúc phân từ",
        instruction:
          "Wandeln Sie die folgenden Relativsätze in Partizipialkonstruktionen um: 1) Die Studie, die kürzlich veröffentlicht wurde, ist umstritten. 2) Die Kosten, die ständig steigen, belasten den Haushalt. 3) Die Lösung, die von Experten vorgeschlagen wurde, scheint vielversprechend.",
        instructionVi:
          "Hãy chuyển các mệnh đề quan hệ sau thành cấu trúc phân từ: 1) Die Studie, die kürzlich veröffentlicht wurde → Die kürzlich veröffentlichte Studie... 2) Die Kosten, die ständig steigen → Die ständig steigenden Kosten... 3) Die Lösung, die von Experten vorgeschlagen wurde → Die von Experten vorgeschlagene Lösung...",
      },
    ],
  },
];
