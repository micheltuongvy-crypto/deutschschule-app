// C1 Chapters 9-10: Literaturwissenschaft & Textanalyse, Prüfungsvorbereitung & akademisches Deutsch

import type { ContentBlock, Lesson } from "../a1/chapters1_3";

export const c1LessonsCh9_10: Lesson[] = [
  // ============================================================
  // CHAPTER 9: Literaturwissenschaft & Textanalyse
  // ============================================================

  // --- Chapter 9, Lesson 1: Literarische Epochen (Klassik bis Gegenwart) ---
  {
    id: "c1-ch9-l1",
    chapterId: 9,
    lessonNumber: 1,
    title: "Literarische Epochen (Klassik bis Gegenwart)",
    titleVi: "Các thời kỳ văn học (Cổ điển đến Đương đại)",
    type: "Einführung",
    objectives: [
      "Nắm được các thời kỳ văn học Đức quan trọng từ Klassik đến Gegenwartsliteratur",
      "Nhận biết đặc điểm phong cách và tư tưởng chủ đạo của mỗi thời kỳ",
      "Liên hệ bối cảnh lịch sử với sự phát triển văn học Đức"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Überblick über die literarischen Epochen",
        titleVi: "Tổng quan về các thời kỳ văn học",
        textDe: "Die deutschsprachige Literatur lässt sich in verschiedene Epochen einteilen, die jeweils durch bestimmte ästhetische, philosophische und gesellschaftliche Strömungen geprägt sind. Die Weimarer Klassik (ca. 1786–1832) mit ihren Hauptvertretern Goethe und Schiller strebte nach Harmonie, Humanität und dem Ideal der Antike. Die Romantik (ca. 1795–1848) setzte dagegen auf Gefühl, Fantasie und die Sehnsucht nach dem Unendlichen. Der Realismus (ca. 1848–1890) wandte sich der wirklichkeitsgetreuen Darstellung des Alltags zu, während der Naturalismus (ca. 1880–1900) die gesellschaftlichen Missstände schonungslos offenlegte. Im 20. Jahrhundert folgten Expressionismus, Exilliteratur, Nachkriegsliteratur und schließlich die Gegenwartsliteratur, die von Pluralismus und Individualisierung geprägt ist.",
        textVi: "Văn học tiếng Đức có thể được phân chia thành nhiều thời kỳ khác nhau, mỗi thời kỳ được định hình bởi các trào lưu thẩm mỹ, triết học và xã hội riêng. Thời kỳ Cổ điển Weimar (khoảng 1786–1832) với hai đại diện chính là Goethe và Schiller hướng đến sự hài hòa, nhân văn và lý tưởng cổ đại. Thời kỳ Lãng mạn (khoảng 1795–1848) đề cao cảm xúc, trí tưởng tượng và nỗi khao khát vô tận. Chủ nghĩa Hiện thực (khoảng 1848–1890) hướng đến việc miêu tả chân thực cuộc sống hàng ngày, trong khi Chủ nghĩa Tự nhiên (khoảng 1880–1900) phơi bày thẳng thắn các bất công xã hội. Trong thế kỷ 20, tiếp nối là Chủ nghĩa Biểu hiện, Văn học lưu vong, Văn học hậu chiến và cuối cùng là Văn học đương đại, được đặc trưng bởi sự đa nguyên và cá nhân hóa."
      },
      {
        type: "vocabulary",
        titleDe: "Epochen und Strömungen",
        titleVi: "Các thời kỳ và trào lưu",
        words: [
          { de: "die Weimarer Klassik", vi: "thời kỳ Cổ điển Weimar", article: "die" },
          { de: "die Romantik", vi: "thời kỳ Lãng mạn", article: "die" },
          { de: "der Realismus", vi: "chủ nghĩa Hiện thực", article: "der" },
          { de: "der Naturalismus", vi: "chủ nghĩa Tự nhiên", article: "der" },
          { de: "der Expressionismus", vi: "chủ nghĩa Biểu hiện", article: "der" },
          { de: "die Exilliteratur", vi: "văn học lưu vong", article: "die" },
          { de: "die Nachkriegsliteratur", vi: "văn học hậu chiến", article: "die" },
          { de: "die Gegenwartsliteratur", vi: "văn học đương đại", article: "die" },
          { de: "die Epoche", vi: "thời kỳ, thời đại", article: "die" },
          { de: "die Strömung", vi: "trào lưu, dòng chảy", article: "die" },
          { de: "der Vertreter / die Vertreterin", vi: "đại diện (nam / nữ)", article: "der/die" },
          { de: "das Ideal", vi: "lý tưởng", article: "das" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Temporale Einordnung mit Präpositionalphrasen",
        titleVi: "Sắp xếp thời gian với cụm giới từ",
        rule: "Zur Einordnung literarischer Epochen verwendet man: in + Dativ (in der Romantik), während + Genitiv (während des Expressionismus), zu Beginn / am Ende + Genitiv, im Zuge + Genitiv (im Zuge der Aufklärung). Partizipialattribute: die von Goethe geprägte Epoche, der durch gesellschaftliche Umbrüche beeinflusste Realismus.",
        ruleVi: "Để sắp xếp các thời kỳ văn học theo thời gian, ta dùng: in + Dativ (trong thời kỳ Lãng mạn), während + Genitiv (trong suốt thời kỳ Biểu hiện), zu Beginn / am Ende + Genitiv (vào đầu / cuối...), im Zuge + Genitiv (trong quá trình của...). Định ngữ phân từ: die von Goethe geprägte Epoche (thời kỳ được định hình bởi Goethe), der durch gesellschaftliche Umbrüche beeinflusste Realismus (chủ nghĩa Hiện thực bị ảnh hưởng bởi các biến động xã hội).",
        examples: [
          { de: "In der Weimarer Klassik strebten Goethe und Schiller nach dem Ideal der Humanität.", vi: "Trong thời kỳ Cổ điển Weimar, Goethe và Schiller theo đuổi lý tưởng nhân văn." },
          { de: "Während des Expressionismus brachen die Autoren mit traditionellen Erzählformen.", vi: "Trong suốt thời kỳ Biểu hiện, các tác giả phá vỡ các hình thức tự sự truyền thống." },
          { de: "Die durch den Zweiten Weltkrieg geprägte Nachkriegsliteratur thematisierte Schuld und Trümmer.", vi: "Văn học hậu chiến được định hình bởi Thế chiến II đã đề cập đến chủ đề tội lỗi và đổ nát." }
        ]
      },
      {
        type: "practice",
        titleDe: "Epochen vergleichen",
        titleVi: "So sánh các thời kỳ văn học",
        instruction: "Wählen Sie zwei literarische Epochen und vergleichen Sie diese hinsichtlich ihrer zentralen Themen, Stilmerkmale und historischen Hintergründe. Verwenden Sie dabei Konnektoren wie: im Gegensatz zu, während, einerseits ... andererseits, sowohl ... als auch. Schreiben Sie mindestens 150 Wörter.",
        instructionVi: "Chọn hai thời kỳ văn học và so sánh chúng về các chủ đề trung tâm, đặc điểm phong cách và bối cảnh lịch sử. Sử dụng các liên từ như: im Gegensatz zu (trái ngược với), während (trong khi), einerseits ... andererseits (một mặt ... mặt khác), sowohl ... als auch (vừa ... vừa). Viết ít nhất 150 từ."
      }
    ]
  },

  // --- Chapter 9, Lesson 2: Textinterpretation & Stilmittel ---
  {
    id: "c1-ch9-l2",
    chapterId: 9,
    lessonNumber: 2,
    title: "Textinterpretation & Stilmittel",
    titleVi: "Phân tích văn bản & Biện pháp tu từ",
    type: "Grammatik",
    objectives: [
      "Nhận biết và phân tích các biện pháp tu từ (Stilmittel) quan trọng trong văn học Đức",
      "Áp dụng phương pháp phân tích văn bản một cách có hệ thống",
      "Diễn đạt nhận xét phân tích bằng ngôn ngữ chuyên ngành phù hợp"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Methoden der Textinterpretation",
        titleVi: "Phương pháp phân tích văn bản",
        textDe: "Eine systematische Textinterpretation folgt einem bestimmten Aufbau: Zunächst erfolgt die Einleitung mit bibliografischen Angaben (Autor, Titel, Erscheinungsjahr, Textsorte) und einer knappen Inhaltsangabe. Im Hauptteil analysiert man die sprachlichen und stilistischen Mittel sowie deren Wirkung auf den Leser. Man untersucht die Erzählperspektive, die Figurenkonstellation, die zeitliche Struktur und die thematischen Schwerpunkte. Im Schlussteil fasst man die Ergebnisse zusammen und ordnet den Text in den literaturhistorischen Kontext ein. Wichtig ist dabei, dass jede Interpretation durch Textstellen belegt wird — Zitate sind unverzichtbar.",
        textVi: "Một bài phân tích văn bản có hệ thống tuân theo một cấu trúc nhất định: Đầu tiên là phần mở đầu với các thông tin thư mục (tác giả, tiêu đề, năm xuất bản, thể loại) và tóm tắt nội dung ngắn gọn. Trong phần thân bài, ta phân tích các phương tiện ngôn ngữ và tu từ cùng tác động của chúng đến người đọc. Ta xem xét góc nhìn người kể, mối quan hệ giữa các nhân vật, cấu trúc thời gian và trọng tâm chủ đề. Trong phần kết, ta tổng hợp kết quả và đặt văn bản vào bối cảnh lịch sử văn học. Điều quan trọng là mỗi nhận định phải được chứng minh bằng trích dẫn từ văn bản — trích dẫn là không thể thiếu."
      },
      {
        type: "vocabulary",
        titleDe: "Stilmittel (Rhetorische Figuren)",
        titleVi: "Biện pháp tu từ",
        words: [
          { de: "die Metapher", vi: "ẩn dụ", article: "die" },
          { de: "der Vergleich", vi: "so sánh", article: "der" },
          { de: "die Personifikation", vi: "nhân hóa", article: "die" },
          { de: "die Alliteration", vi: "điệp phụ âm đầu", article: "die" },
          { de: "die Anapher", vi: "điệp ngữ đầu câu", article: "die" },
          { de: "die Ironie", vi: "mỉa mai, châm biếm", article: "die" },
          { de: "die Hyperbel", vi: "phóng đại", article: "die" },
          { de: "das Oxymoron", vi: "nghịch hợp", article: "das" },
          { de: "die Ellipse", vi: "câu tỉnh lược", article: "die" },
          { de: "der Euphemismus", vi: "uyển ngữ", article: "der" },
          { de: "die Erzählperspektive", vi: "góc nhìn người kể", article: "die" },
          { de: "die Figurenkonstellation", vi: "mối quan hệ nhân vật", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Analytische Redemittel",
        titleVi: "Cách diễn đạt phân tích văn học",
        rule: "Zur Textanalyse verwendet man: Der Autor bedient sich + Genitiv (der Metapher). Durch die Verwendung von + Dativ wird ... hervorgehoben. Das Stilmittel dient dazu, ... zu + Infinitiv. Es fällt auf, dass... / Auffällig ist, dass... Hierin zeigt sich... / Dies verdeutlicht...",
        ruleVi: "Để phân tích văn bản, ta dùng: Der Autor bedient sich + Genitiv (tác giả sử dụng...). Durch die Verwendung von + Dativ wird ... hervorgehoben (thông qua việc sử dụng ... được nhấn mạnh). Das Stilmittel dient dazu, ... zu + Infinitiv (biện pháp tu từ nhằm mục đích...). Es fällt auf, dass... (đáng chú ý là...) / Auffällig ist, dass... (nổi bật là...). Hierin zeigt sich... (qua đó cho thấy...) / Dies verdeutlicht... (điều này làm rõ...).",
        examples: [
          { de: "Der Autor bedient sich einer eindrucksvollen Metapher, um die Vergänglichkeit des Lebens zu veranschaulichen.", vi: "Tác giả sử dụng một ẩn dụ ấn tượng để minh họa sự phù du của cuộc sống." },
          { de: "Durch die Verwendung von Ironie wird die Scheinheiligkeit der Gesellschaft entlarvt.", vi: "Thông qua việc sử dụng mỉa mai, sự giả dối của xã hội bị phơi bày." },
          { de: "Auffällig ist, dass der Erzähler zwischen Innen- und Außenperspektive wechselt.", vi: "Đáng chú ý là người kể chuyện chuyển đổi giữa góc nhìn bên trong và bên ngoài." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Seminardiskussion: Analyse eines Gedichts",
        titleVi: "Thảo luận seminar: Phân tích một bài thơ",
        lines: [
          { speaker: "Dozentin", de: "Welche Stilmittel fallen Ihnen in der ersten Strophe auf?", vi: "Bạn nhận ra những biện pháp tu từ nào trong khổ thơ đầu tiên?" },
          { speaker: "Linh", de: "Mir fällt zunächst die Anapher auf: Die Wiederholung von 'Wer' am Versanfang erzeugt einen drängenden Rhythmus.", vi: "Trước hết tôi nhận ra điệp ngữ đầu câu: Sự lặp lại của 'Wer' ở đầu câu thơ tạo ra nhịp điệu thúc giục." },
          { speaker: "Dozentin", de: "Gut beobachtet. Und welche Wirkung hat die Metapher in Vers drei?", vi: "Quan sát tốt. Và ẩn dụ ở câu thơ thứ ba có tác dụng gì?" },
          { speaker: "Linh", de: "Die Metapher 'Meer der Stille' verweist auf die innere Einsamkeit des lyrischen Ichs. Sie steht im Kontrast zur äußeren Hektik, die in der zweiten Strophe beschrieben wird.", vi: "Ẩn dụ 'Meer der Stille' (biển im lặng) ám chỉ sự cô đơn nội tâm của chủ thể trữ tình. Nó đối lập với sự hối hả bên ngoài được mô tả trong khổ thơ thứ hai." },
          { speaker: "Dozentin", de: "Sehr überzeugend. Können Sie diese Deutung mit einer weiteren Textstelle belegen?", vi: "Rất thuyết phục. Bạn có thể chứng minh cách diễn giải này bằng một trích dẫn khác từ văn bản không?" }
        ]
      },
      {
        type: "practice",
        titleDe: "Stilmittel identifizieren und analysieren",
        titleVi: "Nhận biết và phân tích biện pháp tu từ",
        instruction: "Lesen Sie den folgenden Satz und identifizieren Sie das Stilmittel: 'Die Zeit frisst ihre Kinder.' Benennen Sie das Stilmittel, erklären Sie seine Wirkung und formulieren Sie eine Interpretation. Verwenden Sie die gelernten Redemittel: 'Der Autor bedient sich...', 'Durch die Verwendung von...', 'Dies verdeutlicht...'.",
        instructionVi: "Đọc câu sau và nhận biết biện pháp tu từ: 'Die Zeit frisst ihre Kinder' (Thời gian nuốt chửng con cái mình). Gọi tên biện pháp tu từ, giải thích tác dụng và viết một đoạn phân tích. Sử dụng các cách diễn đạt đã học: 'Der Autor bedient sich...', 'Durch die Verwendung von...', 'Dies verdeutlicht...'."
      }
    ]
  },

  // --- Chapter 9, Lesson 3: Literaturkritik schreiben ---
  {
    id: "c1-ch9-l3",
    chapterId: 9,
    lessonNumber: 3,
    title: "Literaturkritik schreiben",
    titleVi: "Viết phê bình văn học",
    type: "Fertigkeit",
    objectives: [
      "Nắm được cấu trúc và đặc điểm của một bài phê bình văn học (Literaturkritik/Rezension)",
      "Phân biệt giữa tóm tắt nội dung, phân tích và đánh giá cá nhân",
      "Viết một bài phê bình văn học hoàn chỉnh với lập luận có căn cứ"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Aufbau einer Literaturkritik",
        titleVi: "Cấu trúc bài phê bình văn học",
        textDe: "Eine Literaturkritik (auch Rezension genannt) bewertet ein literarisches Werk sachlich und begründet. Sie besteht aus: 1) Einleitung: Bibliografische Angaben, Einordnung des Werks. 2) Kurze Inhaltsangabe: Worum geht es? (Ohne zu viel zu verraten!) 3) Analyse: Sprachstil, Aufbau, Figurenzeichnung, zentrale Themen. 4) Bewertung: Persönliche Einschätzung mit Begründung — was überzeugt, was nicht? 5) Fazit: Leseempfehlung oder Gesamturteil. Wichtig ist der Unterschied zwischen subjektiver Meinung und argumentativer Begründung. Eine gute Kritik belegt ihre Urteile mit konkreten Beispielen aus dem Text.",
        textVi: "Bài phê bình văn học (còn gọi là Rezension) đánh giá một tác phẩm văn học một cách khách quan và có lý lẽ. Nó bao gồm: 1) Mở đầu: Thông tin thư mục, xếp loại tác phẩm. 2) Tóm tắt ngắn: Nội dung về gì? (Không tiết lộ quá nhiều!) 3) Phân tích: Phong cách ngôn ngữ, cấu trúc, xây dựng nhân vật, chủ đề trung tâm. 4) Đánh giá: Nhận xét cá nhân có lý do — điều gì thuyết phục, điều gì không? 5) Kết luận: Khuyến nghị đọc hoặc đánh giá tổng thể. Điều quan trọng là sự khác biệt giữa ý kiến chủ quan và lập luận có căn cứ. Một bài phê bình tốt chứng minh đánh giá bằng ví dụ cụ thể từ văn bản."
      },
      {
        type: "vocabulary",
        titleDe: "Wortschatz für Literaturkritik",
        titleVi: "Từ vựng cho phê bình văn học",
        words: [
          { de: "die Rezension", vi: "bài phê bình, bài đánh giá", article: "die" },
          { de: "die Leseempfehlung", vi: "khuyến nghị đọc", article: "die" },
          { de: "die Figurenzeichnung", vi: "cách xây dựng nhân vật", article: "die" },
          { de: "die Handlung", vi: "cốt truyện, hành động", article: "die" },
          { de: "der Spannungsbogen", vi: "đường cong kịch tính", article: "der" },
          { de: "überzeugend", vi: "thuyết phục" },
          { de: "einfallsreich", vi: "giàu sáng tạo" },
          { de: "klischeehaft", vi: "sáo mòn, khuôn mẫu" },
          { de: "vielschichtig", vi: "nhiều tầng, đa chiều" },
          { de: "anspruchsvoll", vi: "đòi hỏi cao, có chiều sâu" },
          { de: "das Gesamturteil", vi: "đánh giá tổng thể", article: "das" },
          { de: "der Handlungsstrang", vi: "tuyến truyện", article: "der" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Redemittel für Kritik und Bewertung",
        titleVi: "Cách diễn đạt phê bình và đánh giá",
        rule: "Bewertung: Besonders gelungen ist... / Weniger überzeugend wirkt... / Der Roman besticht durch + Akk. / Kritisch anzumerken ist, dass... Einschränkung: Wenngleich ... überzeugt, so bleibt ... hinter den Erwartungen zurück. Empfehlung: Das Buch sei all jenen empfohlen, die... / Für Leser, die ... schätzen, ist dieses Werk ein Muss.",
        ruleVi: "Đánh giá: Besonders gelungen ist... (đặc biệt thành công là...) / Weniger überzeugend wirkt... (kém thuyết phục hơn là...) / Der Roman besticht durch + Akk. (cuốn tiểu thuyết gây ấn tượng bởi...) / Kritisch anzumerken ist, dass... (cần phê bình rằng...). Hạn chế: Wenngleich ... überzeugt, so bleibt ... hinter den Erwartungen zurück (mặc dù ... thuyết phục, nhưng ... không đạt kỳ vọng). Khuyến nghị: Das Buch sei all jenen empfohlen, die... (cuốn sách được khuyên cho tất cả những ai...) / Für Leser, die ... schätzen, ist dieses Werk ein Muss (đối với độc giả trân trọng ..., tác phẩm này là điều bắt buộc phải đọc).",
        examples: [
          { de: "Besonders gelungen ist die vielschichtige Figurenzeichnung der Protagonistin.", vi: "Đặc biệt thành công là cách xây dựng nhân vật đa chiều của nhân vật chính nữ." },
          { de: "Wenngleich die Sprache stilistisch überzeugt, so bleibt die Handlung hinter den Erwartungen zurück.", vi: "Mặc dù ngôn ngữ thuyết phục về mặt phong cách, nhưng cốt truyện không đạt kỳ vọng." },
          { de: "Kritisch anzumerken ist, dass der Schluss etwas konstruiert wirkt.", vi: "Cần phê bình rằng phần kết có vẻ hơi gượng ép." }
        ]
      },
      {
        type: "practice",
        titleDe: "Eine Rezension verfassen",
        titleVi: "Viết một bài phê bình văn học",
        instruction: "Verfassen Sie eine Literaturkritik zu einem Buch, das Sie kürzlich gelesen haben (ca. 200–250 Wörter). Gliedern Sie Ihre Rezension in: Einleitung, Inhaltsangabe, Analyse, Bewertung und Fazit. Verwenden Sie mindestens drei der gelernten Redemittel und achten Sie auf den Unterschied zwischen Beschreibung, Analyse und Bewertung.",
        instructionVi: "Viết một bài phê bình văn học về một cuốn sách bạn đọc gần đây (khoảng 200–250 từ). Chia bài phê bình thành: Mở đầu, Tóm tắt nội dung, Phân tích, Đánh giá và Kết luận. Sử dụng ít nhất ba cách diễn đạt đã học và chú ý đến sự khác biệt giữa mô tả, phân tích và đánh giá."
      }
    ]
  },

  // --- Chapter 9, Lesson 4: Wissenschaftssprachliche Strukturen ---
  {
    id: "c1-ch9-l4",
    chapterId: 9,
    lessonNumber: 4,
    title: "Wissenschaftssprachliche Strukturen",
    titleVi: "Cấu trúc ngôn ngữ khoa học",
    type: "Integration",
    objectives: [
      "Nắm vững các cấu trúc ngữ pháp đặc trưng của ngôn ngữ khoa học Đức",
      "Sử dụng thành thạo Nominalstil, Passivkonstruktionen và Funktionsverbgefüge",
      "Chuyển đổi giữa văn phong nói và văn phong khoa học"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Merkmale der Wissenschaftssprache",
        titleVi: "Đặc điểm của ngôn ngữ khoa học",
        textDe: "Die deutsche Wissenschaftssprache zeichnet sich durch bestimmte sprachliche Merkmale aus, die sie von der Alltagssprache unterscheiden. Dazu gehören: 1) Nominalstil: Statt Verben werden Nomen bevorzugt (nicht 'man untersucht', sondern 'die Untersuchung von'). 2) Passivkonstruktionen und Passiversatzformen: 'Es wird davon ausgegangen, dass...' / 'Lässt sich feststellen, dass...'. 3) Funktionsverbgefüge: 'in Betracht ziehen', 'zur Diskussion stellen', 'Einfluss nehmen auf'. 4) Unpersönliche Ausdrucksweisen: Vermeidung von 'ich', stattdessen 'der Verfasser', 'es zeigt sich'. 5) Komplexe Satzstrukturen: Partizipialattribute, Relativsätze und Infinitivkonstruktionen mit 'zu'.",
        textVi: "Ngôn ngữ khoa học tiếng Đức được đặc trưng bởi một số đặc điểm ngôn ngữ khác biệt với ngôn ngữ hàng ngày. Bao gồm: 1) Phong cách danh từ hóa (Nominalstil): Ưu tiên danh từ thay vì động từ (không phải 'man untersucht' mà là 'die Untersuchung von'). 2) Cấu trúc bị động và thay thế bị động: 'Es wird davon ausgegangen, dass...' (Người ta cho rằng...) / 'Lässt sich feststellen, dass...' (Có thể xác định rằng...). 3) Cụm động từ chức năng (Funktionsverbgefüge): 'in Betracht ziehen' (xem xét), 'zur Diskussion stellen' (đưa ra thảo luận), 'Einfluss nehmen auf' (tạo ảnh hưởng lên). 4) Cách diễn đạt phi cá nhân: Tránh dùng 'ich' (tôi), thay bằng 'der Verfasser' (tác giả), 'es zeigt sich' (cho thấy). 5) Cấu trúc câu phức tạp: Định ngữ phân từ, mệnh đề quan hệ và cấu trúc nguyên thể với 'zu'."
      },
      {
        type: "grammar",
        titleDe: "Nominalstil vs. Verbalstil",
        titleVi: "Phong cách danh từ hóa vs. phong cách động từ",
        rule: "Verbalstil → Nominalstil: man analysiert → die Analyse von; man vergleicht → der Vergleich zwischen; man bewertet → die Bewertung von; etwas beeinflusst → die Beeinflussung durch; man wendet an → die Anwendung von. Der Nominalstil komprimiert Information und ist typisch für wissenschaftliche Texte, kann aber bei Übermaß die Lesbarkeit beeinträchtigen.",
        ruleVi: "Phong cách động từ → Phong cách danh từ: man analysiert → die Analyse von (phân tích → sự phân tích của); man vergleicht → der Vergleich zwischen (so sánh → sự so sánh giữa); man bewertet → die Bewertung von (đánh giá → sự đánh giá của); etwas beeinflusst → die Beeinflussung durch (ảnh hưởng → sự ảnh hưởng bởi); man wendet an → die Anwendung von (áp dụng → sự áp dụng của). Phong cách danh từ nén thông tin và là đặc trưng của văn bản khoa học, nhưng lạm dụng quá mức có thể ảnh hưởng đến khả năng đọc.",
        examples: [
          { de: "Verbal: Man untersucht den Einfluss der Medien. → Nominal: Die Untersuchung des Einflusses der Medien...", vi: "Động từ: Người ta nghiên cứu ảnh hưởng của truyền thông. → Danh từ: Sự nghiên cứu ảnh hưởng của truyền thông..." },
          { de: "Verbal: Der Autor stellt die These auf, dass... → Nominal: Die Aufstellung der These, dass...", vi: "Động từ: Tác giả đưa ra luận điểm rằng... → Danh từ: Sự đưa ra luận điểm rằng..." },
          { de: "Die Anwendung dieser Methode ermöglicht eine differenzierte Analyse der Ergebnisse.", vi: "Sự áp dụng phương pháp này cho phép phân tích kết quả một cách chi tiết." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Funktionsverbgefüge in der Wissenschaftssprache",
        titleVi: "Cụm động từ chức năng trong ngôn ngữ khoa học",
        rule: "Häufige Funktionsverbgefüge: in Betracht ziehen (erwägen), zur Diskussion stellen (diskutieren), in Frage stellen (bezweifeln), zum Ausdruck bringen (ausdrücken), Einfluss nehmen auf (beeinflussen), in Anspruch nehmen (beanspruchen), zu dem Ergebnis kommen (feststellen), unter Beweis stellen (beweisen).",
        ruleVi: "Các cụm động từ chức năng thường gặp: in Betracht ziehen = erwägen (xem xét), zur Diskussion stellen = diskutieren (đưa ra thảo luận), in Frage stellen = bezweifeln (đặt câu hỏi, nghi ngờ), zum Ausdruck bringen = ausdrücken (thể hiện), Einfluss nehmen auf = beeinflussen (tạo ảnh hưởng), in Anspruch nehmen = beanspruchen (sử dụng, đòi hỏi), zu dem Ergebnis kommen = feststellen (đi đến kết luận), unter Beweis stellen = beweisen (chứng minh).",
        examples: [
          { de: "Diese Hypothese ist in Betracht zu ziehen, da die empirischen Daten sie stützen.", vi: "Giả thuyết này cần được xem xét, vì dữ liệu thực nghiệm hỗ trợ nó." },
          { de: "Der Verfasser stellt die bisherige Forschungsmethode in Frage.", vi: "Tác giả đặt nghi vấn về phương pháp nghiên cứu hiện tại." },
          { de: "Die Studie kommt zu dem Ergebnis, dass ein signifikanter Zusammenhang besteht.", vi: "Nghiên cứu đi đến kết luận rằng tồn tại mối liên hệ có ý nghĩa." }
        ]
      },
      {
        type: "practice",
        titleDe: "Verbalstil in Nominalstil umwandeln",
        titleVi: "Chuyển đổi phong cách động từ sang phong cách danh từ",
        instruction: "Formulieren Sie die folgenden Sätze im Nominalstil um: 1) Man analysiert die Wirkung von Metaphern in lyrischen Texten. 2) Der Forscher vergleicht zwei verschiedene Interpretationsansätze. 3) Man stellt fest, dass die Ergebnisse die Hypothese bestätigen. 4) Der Autor drückt seine Kritik an der Gesellschaft aus. Verwenden Sie zusätzlich mindestens zwei Funktionsverbgefüge.",
        instructionVi: "Chuyển đổi các câu sau sang phong cách danh từ: 1) Man analysiert die Wirkung von Metaphern in lyrischen Texten. (Người ta phân tích tác dụng của ẩn dụ trong văn bản trữ tình.) 2) Der Forscher vergleicht zwei verschiedene Interpretationsansätze. (Nhà nghiên cứu so sánh hai cách tiếp cận phân tích khác nhau.) 3) Man stellt fest, dass die Ergebnisse die Hypothese bestätigen. (Người ta xác định rằng kết quả xác nhận giả thuyết.) 4) Der Autor drückt seine Kritik an der Gesellschaft aus. (Tác giả thể hiện sự phê bình đối với xã hội.) Sử dụng thêm ít nhất hai cụm động từ chức năng."
      }
    ]
  },

  // ============================================================
  // CHAPTER 10: Prüfungsvorbereitung & akademisches Deutsch
  // ============================================================

  // --- Chapter 10, Lesson 1: C1-Prüfungsstrategien ---
  {
    id: "c1-ch10-l1",
    chapterId: 10,
    lessonNumber: 1,
    title: "C1-Prüfungsstrategien (Goethe/ÖSD/telc/TestDaF)",
    titleVi: "Chiến lược thi C1 (Goethe/ÖSD/telc/TestDaF)",
    type: "Einführung",
    objectives: [
      "Nắm được cấu trúc và yêu cầu của các kỳ thi C1 phổ biến (Goethe-Zertifikat C1, ÖSD C1, telc Deutsch C1, TestDaF)",
      "Phát triển chiến lược làm bài hiệu quả cho từng phần thi",
      "Quản lý thời gian hợp lý trong phòng thi"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Überblick über C1-Prüfungen",
        titleVi: "Tổng quan về các kỳ thi C1",
        textDe: "Auf dem Niveau C1 gibt es mehrere anerkannte Prüfungen: Das Goethe-Zertifikat C1 besteht aus vier Modulen — Lesen (70 Min.), Hören (40 Min.), Schreiben (80 Min.) und Sprechen (15 Min.). Das ÖSD Zertifikat C1 hat einen ähnlichen Aufbau mit leicht abweichenden Zeitvorgaben. Die telc Deutsch C1 Prüfung legt besonderen Wert auf berufliche Sprachkompetenz. Der TestDaF (Test Deutsch als Fremdsprache) ist speziell für den Hochschulzugang konzipiert und prüft in vier Teilen: Leseverstehen, Hörverstehen, Schriftlicher Ausdruck und Mündlicher Ausdruck. Alle Prüfungen testen die Fähigkeit, komplexe Texte zu verstehen, sich fließend und strukturiert auszudrücken sowie sprachlich flexibel im akademischen und beruflichen Kontext zu agieren.",
        textVi: "Ở trình độ C1 có nhiều kỳ thi được công nhận: Goethe-Zertifikat C1 gồm bốn mô-đun — Đọc (70 phút), Nghe (40 phút), Viết (80 phút) và Nói (15 phút). ÖSD Zertifikat C1 có cấu trúc tương tự với thời gian hơi khác biệt. Kỳ thi telc Deutsch C1 đặc biệt chú trọng năng lực ngôn ngữ nghề nghiệp. TestDaF (Test Deutsch als Fremdsprache) được thiết kế đặc biệt cho việc nhập học đại học và kiểm tra bốn phần: Đọc hiểu, Nghe hiểu, Diễn đạt viết và Diễn đạt nói. Tất cả các kỳ thi đều kiểm tra khả năng hiểu văn bản phức tạp, diễn đạt trôi chảy và có cấu trúc cũng như vận dụng ngôn ngữ linh hoạt trong bối cảnh học thuật và nghề nghiệp."
      },
      {
        type: "vocabulary",
        titleDe: "Prüfungswortschatz",
        titleVi: "Từ vựng thi cử",
        words: [
          { de: "das Leseverstehen", vi: "đọc hiểu", article: "das" },
          { de: "das Hörverstehen", vi: "nghe hiểu", article: "das" },
          { de: "der Schriftliche Ausdruck", vi: "diễn đạt viết", article: "der" },
          { de: "der Mündliche Ausdruck", vi: "diễn đạt nói", article: "der" },
          { de: "die Zeitvorgabe", vi: "giới hạn thời gian", article: "die" },
          { de: "die Aufgabenstellung", vi: "đề bài, yêu cầu bài thi", article: "die" },
          { de: "die Musterlösung", vi: "bài giải mẫu", article: "die" },
          { de: "die Bewertungskriterien", vi: "tiêu chí đánh giá", article: "die" },
          { de: "das Modul", vi: "mô-đun", article: "das" },
          { de: "der Hochschulzugang", vi: "điều kiện nhập học đại học", article: "der" },
          { de: "die Prüfungsstrategie", vi: "chiến lược thi", article: "die" },
          { de: "das Zeitmanagement", vi: "quản lý thời gian", article: "das" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Strategien für den Prüfungsteil Lesen",
        titleVi: "Chiến lược cho phần thi Đọc hiểu",
        rule: "1) Globalverstehen: Zuerst den Text überfliegen (skimmen) → Thema und Hauptaussage erfassen. 2) Selektives Lesen: Gezielt nach Schlüsselwörtern aus den Aufgaben suchen. 3) Detailverstehen: Relevante Passagen genau lesen, auf Konnektoren und Signalwörter achten. 4) Negationen und Einschränkungen beachten: nicht, kaum, nur, lediglich, keineswegs. 5) Bei Multiple-Choice: Zuerst die Fragen lesen, dann den Text; Distraktoren erkennen.",
        ruleVi: "1) Hiểu tổng quát: Đầu tiên lướt qua văn bản (đọc nhanh) → nắm chủ đề và ý chính. 2) Đọc chọn lọc: Tìm kiếm có mục đích các từ khóa từ đề bài. 3) Hiểu chi tiết: Đọc kỹ các đoạn liên quan, chú ý liên từ và từ tín hiệu. 4) Chú ý phủ định và giới hạn: nicht (không), kaum (hầu như không), nur (chỉ), lediglich (chỉ), keineswegs (hoàn toàn không). 5) Với trắc nghiệm: Đọc câu hỏi trước, rồi đọc văn bản; nhận ra đáp án nhiễu (Distraktoren).",
        examples: [
          { de: "Achten Sie auf Signalwörter wie: jedoch, dennoch, trotzdem, allerdings — sie signalisieren einen Gegensatz.", vi: "Chú ý các từ tín hiệu như: jedoch, dennoch, trotzdem, allerdings — chúng báo hiệu sự đối lập." },
          { de: "Bei Lückentexten: Prüfen Sie die grammatische Kongruenz (Kasus, Numerus, Genus).", vi: "Với bài điền từ: Kiểm tra sự phù hợp ngữ pháp (cách, số, giống)." },
          { de: "Zeitmanagement: Verbringen Sie nicht mehr als 2 Minuten pro Aufgabe beim Leseverstehen.", vi: "Quản lý thời gian: Không dành quá 2 phút cho mỗi câu hỏi phần Đọc hiểu." }
        ]
      },
      {
        type: "practice",
        titleDe: "Prüfungssimulation: Leseverstehen",
        titleVi: "Mô phỏng thi: Đọc hiểu",
        instruction: "Wählen Sie einen beliebigen deutschen Zeitungsartikel (z.B. von ZEIT Online, Süddeutsche Zeitung oder FAZ) und wenden Sie die drei Lesestrategien an: 1) Überfliegen Sie den Text und notieren Sie das Hauptthema in einem Satz. 2) Formulieren Sie drei Detailfragen zum Text. 3) Beantworten Sie Ihre eigenen Fragen mit Belegen aus dem Text. Zeitvorgabe: maximal 15 Minuten.",
        instructionVi: "Chọn một bài báo tiếng Đức bất kỳ (ví dụ từ ZEIT Online, Süddeutsche Zeitung hoặc FAZ) và áp dụng ba chiến lược đọc: 1) Lướt qua văn bản và ghi lại chủ đề chính trong một câu. 2) Đặt ba câu hỏi chi tiết về văn bản. 3) Trả lời câu hỏi của chính bạn với bằng chứng từ văn bản. Thời gian: tối đa 15 phút."
      }
    ]
  },

  // --- Chapter 10, Lesson 2: Akademisches Schreiben ---
  {
    id: "c1-ch10-l2",
    chapterId: 10,
    lessonNumber: 2,
    title: "Akademisches Schreiben (Hausarbeit/Seminararbeit)",
    titleVi: "Viết học thuật (Bài tiểu luận / Bài seminar)",
    type: "Grammatik",
    objectives: [
      "Nắm vững cấu trúc và quy cách của bài viết học thuật Đức (Hausarbeit)",
      "Sử dụng đúng cách trích dẫn trực tiếp và gián tiếp với Konjunktiv I",
      "Viết được các phần quan trọng: Einleitung, Hauptteil, Fazit"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Aufbau einer wissenschaftlichen Hausarbeit",
        titleVi: "Cấu trúc bài tiểu luận khoa học",
        textDe: "Eine Hausarbeit an deutschen Hochschulen folgt einem standardisierten Aufbau: 1) Deckblatt (Titelseite mit Name, Matrikelnummer, Seminar, Dozent). 2) Inhaltsverzeichnis. 3) Einleitung: Vorstellung des Themas, Forschungsfrage, Methodik und Aufbau der Arbeit. 4) Hauptteil: Theoretischer Rahmen, Analyse, Argumentation — logisch gegliedert in Kapitel und Unterkapitel. 5) Fazit: Zusammenfassung der Ergebnisse, Beantwortung der Forschungsfrage, Ausblick. 6) Literaturverzeichnis: Alle verwendeten Quellen alphabetisch aufgelistet. Besonders wichtig ist die korrekte Zitierweise — direkte Zitate stehen in Anführungszeichen mit Quellenangabe, indirekte Zitate (Paraphrasen) werden im Konjunktiv I wiedergegeben.",
        textVi: "Bài tiểu luận tại các trường đại học Đức tuân theo cấu trúc chuẩn: 1) Trang bìa (trang tiêu đề với tên, mã số sinh viên, seminar, giảng viên). 2) Mục lục. 3) Mở đầu: Giới thiệu chủ đề, câu hỏi nghiên cứu, phương pháp và cấu trúc bài viết. 4) Phần thân: Khung lý thuyết, phân tích, lập luận — chia logic thành các chương và mục con. 5) Kết luận: Tóm tắt kết quả, trả lời câu hỏi nghiên cứu, triển vọng. 6) Danh mục tài liệu: Tất cả nguồn sử dụng được liệt kê theo thứ tự bảng chữ cái. Đặc biệt quan trọng là cách trích dẫn đúng — trích dẫn trực tiếp đặt trong ngoặc kép với nguồn, trích dẫn gián tiếp (diễn giải) được truyền đạt bằng Konjunktiv I."
      },
      {
        type: "grammar",
        titleDe: "Konjunktiv I in der indirekten Rede (Wissenschaftssprache)",
        titleVi: "Konjunktiv I trong lời nói gián tiếp (ngôn ngữ khoa học)",
        rule: "Konjunktiv I wird verwendet, um fremde Aussagen wiederzugeben, ohne sich mit ihnen zu identifizieren. Bildung: Verbstamm + Endungen (-e, -est, -e, -en, -et, -en). Wichtig: Wenn die Konjunktiv-I-Form identisch mit dem Indikativ ist, weicht man auf Konjunktiv II aus. Beispiel: er/sie komme, sie hätten (statt: sie haben), er sei (statt: er ist).",
        ruleVi: "Konjunktiv I được sử dụng để truyền đạt lại phát biểu của người khác mà không đồng nhất với nó. Cách chia: Gốc động từ + đuôi (-e, -est, -e, -en, -et, -en). Quan trọng: Khi dạng Konjunktiv I trùng với Indikativ (chỉ thị), ta chuyển sang Konjunktiv II. Ví dụ: er/sie komme (anh ấy/cô ấy đến), sie hätten (thay vì: sie haben — họ có), er sei (thay vì: er ist — anh ấy là).",
        examples: [
          { de: "Müller (2020) argumentiert, die Digitalisierung verändere die Arbeitswelt grundlegend.", vi: "Müller (2020) lập luận rằng số hóa thay đổi thế giới lao động một cách căn bản." },
          { de: "Laut Schmidt (2019) sei der Einfluss der sozialen Medien nicht zu unterschätzen.", vi: "Theo Schmidt (2019), ảnh hưởng của mạng xã hội không nên bị đánh giá thấp." },
          { de: "Die Autoren kommen zu dem Schluss, die Ergebnisse seien statistisch signifikant.", vi: "Các tác giả đi đến kết luận rằng kết quả có ý nghĩa thống kê." }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Redemittel für akademisches Schreiben",
        titleVi: "Cách diễn đạt trong viết học thuật",
        words: [
          { de: "die Forschungsfrage", vi: "câu hỏi nghiên cứu", article: "die" },
          { de: "die Hypothese", vi: "giả thuyết", article: "die" },
          { de: "der theoretische Rahmen", vi: "khung lý thuyết", article: "der" },
          { de: "die Quellenangabe", vi: "chú thích nguồn", article: "die" },
          { de: "das Literaturverzeichnis", vi: "danh mục tài liệu", article: "das" },
          { de: "die Fußnote", vi: "chú thích cuối trang", article: "die" },
          { de: "das Deckblatt", vi: "trang bìa", article: "das" },
          { de: "die Matrikelnummer", vi: "mã số sinh viên", article: "die" },
          { de: "paraphrasieren", vi: "diễn giải lại" },
          { de: "zitieren", vi: "trích dẫn" },
          { de: "belegen", vi: "chứng minh, dẫn chứng" },
          { de: "die indirekte Rede", vi: "lời nói gián tiếp", article: "die" }
        ]
      },
      {
        type: "practice",
        titleDe: "Einleitung einer Hausarbeit verfassen",
        titleVi: "Viết phần mở đầu của bài tiểu luận",
        instruction: "Verfassen Sie die Einleitung einer fiktiven Hausarbeit zum Thema 'Der Einfluss der Digitalisierung auf die deutsche Sprache' (ca. 150–200 Wörter). Ihre Einleitung soll enthalten: 1) Hinführung zum Thema, 2) Forschungsfrage, 3) Methodik, 4) Aufbau der Arbeit. Verwenden Sie mindestens eine indirekte Rede im Konjunktiv I, um auf eine Quelle zu verweisen.",
        instructionVi: "Viết phần mở đầu của bài tiểu luận giả định về chủ đề 'Ảnh hưởng của số hóa đối với tiếng Đức' (khoảng 150–200 từ). Phần mở đầu phải bao gồm: 1) Dẫn dắt vào chủ đề, 2) Câu hỏi nghiên cứu, 3) Phương pháp, 4) Cấu trúc bài viết. Sử dụng ít nhất một lời nói gián tiếp với Konjunktiv I để tham chiếu nguồn."
      }
    ]
  },

  // --- Chapter 10, Lesson 3: Mündliche Prüfung & Präsentationstechniken ---
  {
    id: "c1-ch10-l3",
    chapterId: 10,
    lessonNumber: 3,
    title: "Mündliche Prüfung & Präsentationstechniken",
    titleVi: "Thi nói & Kỹ thuật thuyết trình",
    type: "Fertigkeit",
    objectives: [
      "Nắm vững cấu trúc và yêu cầu của phần thi nói C1",
      "Phát triển kỹ thuật thuyết trình chuyên nghiệp bằng tiếng Đức",
      "Luyện phản xạ tranh luận và bày tỏ quan điểm có hệ thống"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Aufbau der mündlichen C1-Prüfung",
        titleVi: "Cấu trúc phần thi nói C1",
        textDe: "Die mündliche Prüfung auf C1-Niveau besteht typischerweise aus drei Teilen: 1) Präsentation: Sie halten einen kurzen Vortrag (3–5 Minuten) zu einem vorgegebenen Thema. Dabei sollen Sie das Thema strukturiert darstellen, Pro- und Kontra-Argumente abwägen und Ihre eigene Position begründen. 2) Diskussion: Anschließend diskutieren Sie mit dem Prüfer oder einem Mitprüfling über das Thema. Dabei geht es um Reaktionsfähigkeit, Argumentationskompetenz und sprachliche Flexibilität. 3) Gesprächsführung/Verhandlung: In manchen Prüfungen müssen Sie ein Problem lösen oder einen Kompromiss finden. Bewertet werden: Ausdrucksfähigkeit, Korrektheit, Flüssigkeit, Kohärenz und interaktive Kompetenz.",
        textVi: "Phần thi nói ở trình độ C1 thường gồm ba phần: 1) Thuyết trình: Bạn trình bày ngắn (3–5 phút) về một chủ đề cho sẵn. Bạn cần trình bày có cấu trúc, cân nhắc các luận điểm ủng hộ và phản đối, đồng thời lý giải quan điểm cá nhân. 2) Thảo luận: Tiếp theo bạn thảo luận với giám khảo hoặc thí sinh khác về chủ đề. Đây là về khả năng phản ứng, năng lực lập luận và sự linh hoạt ngôn ngữ. 3) Dẫn dắt hội thoại / Đàm phán: Trong một số kỳ thi, bạn phải giải quyết vấn đề hoặc tìm ra thỏa hiệp. Tiêu chí đánh giá: Khả năng diễn đạt, tính chính xác, sự trôi chảy, tính mạch lạc và năng lực tương tác."
      },
      {
        type: "vocabulary",
        titleDe: "Redemittel für Präsentation und Diskussion",
        titleVi: "Cách diễn đạt cho thuyết trình và thảo luận",
        words: [
          { de: "Einleitung: Ich möchte heute über ... sprechen / In meinem Vortrag geht es um...", vi: "Mở đầu: Hôm nay tôi muốn nói về... / Bài thuyết trình của tôi về..." },
          { de: "Gliederung: Zunächst werde ich ... darstellen, anschließend ... und abschließend...", vi: "Cấu trúc: Đầu tiên tôi sẽ trình bày..., tiếp theo... và cuối cùng..." },
          { de: "Überleitung: Damit komme ich zu meinem nächsten Punkt... / Nun möchte ich auf ... eingehen.", vi: "Chuyển ý: Qua đó tôi chuyển sang điểm tiếp theo... / Bây giờ tôi muốn đề cập đến..." },
          { de: "Argumentation: Dafür spricht, dass... / Dagegen lässt sich einwenden, dass...", vi: "Lập luận: Điểm ủng hộ là... / Ngược lại có thể phản bác rằng..." },
          { de: "Eigene Meinung: Meiner Einschätzung nach... / Ich vertrete die Auffassung, dass...", vi: "Quan điểm cá nhân: Theo đánh giá của tôi... / Tôi theo quan điểm rằng..." },
          { de: "Schluss: Zusammenfassend lässt sich sagen... / Abschließend möchte ich betonen...", vi: "Kết thúc: Tóm lại có thể nói... / Cuối cùng tôi muốn nhấn mạnh..." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Prüfungssimulation: Diskussion",
        titleVi: "Mô phỏng thi: Thảo luận",
        lines: [
          { speaker: "Prüfer", de: "Sie haben gerade über die Vor- und Nachteile des Homeoffice gesprochen. Wie stehen Sie persönlich dazu?", vi: "Bạn vừa nói về ưu và nhược điểm của làm việc tại nhà. Quan điểm cá nhân của bạn thế nào?" },
          { speaker: "Linh", de: "Meiner Einschätzung nach überwiegen die Vorteile, insbesondere die Flexibilität und die bessere Vereinbarkeit von Beruf und Privatleben.", vi: "Theo đánh giá của tôi, ưu điểm trội hơn, đặc biệt là sự linh hoạt và khả năng cân bằng tốt hơn giữa công việc và cuộc sống riêng." },
          { speaker: "Prüfer", de: "Aber gibt es nicht auch die Gefahr der sozialen Isolation?", vi: "Nhưng chẳng phải cũng có nguy cơ bị cô lập xã hội sao?" },
          { speaker: "Linh", de: "Das ist ein berechtigter Einwand. Allerdings lässt sich dem entgegenwirken, indem man hybride Modelle einführt — beispielsweise drei Tage Homeoffice und zwei Tage im Büro. So profitiert man von beiden Arbeitsformen.", vi: "Đó là phản biện chính đáng. Tuy nhiên có thể đối phó bằng cách áp dụng mô hình lai — ví dụ ba ngày làm ở nhà và hai ngày ở văn phòng. Như vậy ta được lợi từ cả hai hình thức." },
          { speaker: "Prüfer", de: "Und wie sehen Sie die Zukunft der Arbeit in zehn Jahren?", vi: "Và bạn thấy tương lai của công việc trong mười năm tới thế nào?" },
          { speaker: "Linh", de: "Ich gehe davon aus, dass die Digitalisierung die Arbeitswelt weiter transformieren wird. Vermutlich werden viele Routineaufgaben automatisiert, während kreative und zwischenmenschliche Kompetenzen an Bedeutung gewinnen.", vi: "Tôi cho rằng số hóa sẽ tiếp tục chuyển đổi thế giới lao động. Có lẽ nhiều công việc thường lệ sẽ được tự động hóa, trong khi năng lực sáng tạo và giao tiếp giữa người với người sẽ trở nên quan trọng hơn." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Techniken für die Prüfungspräsentation",
        titleVi: "Kỹ thuật cho bài thuyết trình trong thi",
        rule: "1) Strukturierung: Dreiteilung (Einleitung — Hauptteil — Schluss). Konnektoren zur Gliederung: zunächst, darüber hinaus, abschließend. 2) Argumentationstechnik: These aufstellen → Argument/Beispiel → Gegenargument einbeziehen → eigene Position. 3) Sprachliche Vielfalt: Variation der Satzanfänge, Nutzung von Partizipialstrukturen, Konjunktiv II für Hypothesen. 4) Flüssigkeit: Füllwörter vermeiden, stattdessen kurze Denkpausen nutzen.",
        ruleVi: "1) Cấu trúc: Chia ba (Mở đầu — Thân bài — Kết). Liên từ để sắp xếp: zunächst (đầu tiên), darüber hinaus (hơn nữa), abschließend (cuối cùng). 2) Kỹ thuật lập luận: Đưa ra luận điểm → Luận cứ/Ví dụ → Bao gồm phản biện → Quan điểm cá nhân. 3) Đa dạng ngôn ngữ: Thay đổi đầu câu, sử dụng cấu trúc phân từ, Konjunktiv II cho giả thuyết. 4) Trôi chảy: Tránh từ đệm, thay vào đó sử dụng khoảng dừng ngắn để suy nghĩ.",
        examples: [
          { de: "Einerseits lässt sich argumentieren, dass... Andererseits darf nicht außer Acht gelassen werden, dass...", vi: "Một mặt có thể lập luận rằng... Mặt khác không nên bỏ qua rằng..." },
          { de: "Würde man diese Maßnahme umsetzen, so könnte dies zu einer deutlichen Verbesserung führen.", vi: "Nếu thực hiện biện pháp này, nó có thể dẫn đến sự cải thiện đáng kể." },
          { de: "Abschließend möchte ich betonen, dass es keine einfache Lösung gibt, sondern ein differenzierter Ansatz erforderlich ist.", vi: "Cuối cùng tôi muốn nhấn mạnh rằng không có giải pháp đơn giản, mà cần một cách tiếp cận đa chiều." }
        ]
      },
      {
        type: "practice",
        titleDe: "Präsentation vorbereiten und halten",
        titleVi: "Chuẩn bị và thuyết trình",
        instruction: "Bereiten Sie eine 3–5-minütige Präsentation zum Thema 'Sollte Künstliche Intelligenz im Bildungswesen stärker eingesetzt werden?' vor. Gliedern Sie Ihren Vortrag in: Einleitung (Thema vorstellen), Hauptteil (Pro- und Kontra-Argumente), Schluss (eigene Position). Sprechen Sie die Präsentation laut und nehmen Sie sich dabei auf. Achten Sie auf: klare Gliederung, vielfältige Redemittel, Vermeidung von Wiederholungen.",
        instructionVi: "Chuẩn bị bài thuyết trình 3–5 phút về chủ đề 'Trí tuệ nhân tạo có nên được sử dụng nhiều hơn trong giáo dục không?'. Chia bài thuyết trình thành: Mở đầu (giới thiệu chủ đề), Thân bài (luận điểm ủng hộ và phản đối), Kết (quan điểm cá nhân). Nói to bài thuyết trình và ghi âm lại. Chú ý: cấu trúc rõ ràng, cách diễn đạt đa dạng, tránh lặp lại."
      }
    ]
  },

  // --- Chapter 10, Lesson 4: Rückblick & Ausblick auf C2 ---
  {
    id: "c1-ch10-l4",
    chapterId: 10,
    lessonNumber: 4,
    title: "Rückblick & Ausblick auf C2",
    titleVi: "Nhìn lại & Hướng tới C2",
    type: "Integration",
    objectives: [
      "Tổng kết và hệ thống hóa kiến thức toàn bộ trình độ C1",
      "Tự đánh giá điểm mạnh và điểm cần cải thiện",
      "Hiểu yêu cầu của trình độ C2 và lập kế hoạch học tập tiếp theo"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Rückblick auf das C1-Niveau",
        titleVi: "Nhìn lại trình độ C1",
        textDe: "Mit dem Abschluss des C1-Niveaus haben Sie beeindruckende Kompetenzen erworben: Sie können komplexe Texte aus verschiedenen Fachgebieten verstehen und deren implizite Bedeutung erfassen. Sie sind in der Lage, sich spontan, fließend und differenziert auszudrücken, ohne erkennbar nach Worten zu suchen. Sie beherrschen die Wissenschaftssprache und können akademische Texte verfassen. In den Bereichen Grammatik haben Sie fortgeschrittene Strukturen wie Partizipialattribute, Konjunktiv I und II, Nominalisierungen und komplexe Satzgefüge gemeistert. Ihre Sprachkompetenz umfasst nun: differenzierte Argumentation, Literaturanalyse, wissenschaftliches Schreiben, Medienanalyse und interkulturelle Kommunikation auf hohem Niveau.",
        textVi: "Với việc hoàn thành trình độ C1, bạn đã đạt được những năng lực ấn tượng: Bạn có thể hiểu các văn bản phức tạp từ nhiều lĩnh vực chuyên môn và nắm bắt ý nghĩa ngầm. Bạn có khả năng diễn đạt tự phát, trôi chảy và tinh tế mà không phải tìm kiếm từ ngữ một cách rõ ràng. Bạn nắm vững ngôn ngữ khoa học và có thể viết văn bản học thuật. Về ngữ pháp, bạn đã làm chủ các cấu trúc nâng cao như định ngữ phân từ, Konjunktiv I và II, danh từ hóa và cấu trúc câu phức. Năng lực ngôn ngữ của bạn giờ bao gồm: lập luận tinh tế, phân tích văn học, viết khoa học, phân tích truyền thông và giao tiếp liên văn hóa ở trình độ cao."
      },
      {
        type: "vocabulary",
        titleDe: "Selbstreflexion und Lernplanung",
        titleVi: "Tự phản ánh và lập kế hoạch học tập",
        words: [
          { de: "die Selbsteinschätzung", vi: "tự đánh giá", article: "die" },
          { de: "die Sprachkompetenz", vi: "năng lực ngôn ngữ", article: "die" },
          { de: "die Lernstrategie", vi: "chiến lược học tập", article: "die" },
          { de: "das Lernziel", vi: "mục tiêu học tập", article: "das" },
          { de: "die Stärke", vi: "điểm mạnh", article: "die" },
          { de: "der Verbesserungsbedarf", vi: "nhu cầu cải thiện", article: "der" },
          { de: "die Immersion", vi: "sự đắm chìm (trong ngôn ngữ)", article: "die" },
          { de: "der Muttersprachler / die Muttersprachlerin", vi: "người bản ngữ (nam / nữ)", article: "der/die" },
          { de: "die Nuancierung", vi: "sự tinh tế, sắc thái", article: "die" },
          { de: "die Ausdrucksfähigkeit", vi: "khả năng diễn đạt", article: "die" },
          { de: "das Sprachgefühl", vi: "cảm nhận ngôn ngữ", article: "das" },
          { de: "die Fehleranalyse", vi: "phân tích lỗi", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Was erwartet Sie auf C2-Niveau?",
        titleVi: "Điều gì chờ đợi ở trình độ C2?",
        rule: "C2 = Annähernd muttersprachliche Kompetenz. Neue Herausforderungen: 1) Feinste stilistische Nuancen erkennen und produzieren. 2) Idiomatische Wendungen und Redewendungen sicher beherrschen. 3) Komplexe Fachtexte mühelos verstehen. 4) Kreatives und literarisches Schreiben. 5) Spontane und nuancierte Stellungnahmen in jeder Situation. Grammatik: Schwerpunkt auf Stilistik, Register, implizite Bedeutung und sprachliche Eleganz.",
        ruleVi: "C2 = Năng lực gần như người bản ngữ. Thách thức mới: 1) Nhận biết và tạo ra các sắc thái phong cách tinh tế nhất. 2) Nắm vững thành ngữ và cách nói idiomatisch. 3) Hiểu dễ dàng các văn bản chuyên ngành phức tạp. 4) Viết sáng tạo và văn học. 5) Phát biểu tự phát và tinh tế trong mọi tình huống. Ngữ pháp: Tập trung vào phong cách, mức độ trang trọng, ý nghĩa ngầm và sự thanh lịch ngôn ngữ.",
        examples: [
          { de: "C1: Er hat seine Meinung geändert. → C2: Er ist von seiner ursprünglichen Position abgerückt.", vi: "C1: Anh ấy đã thay đổi ý kiến. → C2: Anh ấy đã từ bỏ quan điểm ban đầu." },
          { de: "C1: Das ist ein großes Problem. → C2: Darin liegt die eigentliche Crux der Angelegenheit.", vi: "C1: Đó là vấn đề lớn. → C2: Đó chính là mấu chốt của vấn đề." },
          { de: "C1: Ich stimme nicht zu. → C2: Diesen Standpunkt vermag ich nicht zu teilen.", vi: "C1: Tôi không đồng ý. → C2: Quan điểm này tôi không thể chia sẻ." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Beratungsgespräch: Wie geht es nach C1 weiter?",
        titleVi: "Tư vấn: Sau C1 tiếp tục thế nào?",
        lines: [
          { speaker: "Beraterin", de: "Herzlichen Glückwunsch zum Abschluss des C1-Niveaus! Wie fühlen Sie sich?", vi: "Chúc mừng bạn đã hoàn thành trình độ C1! Bạn cảm thấy thế nào?" },
          { speaker: "Linh", de: "Ich bin stolz auf meinen Fortschritt, aber ich merke, dass mir manchmal noch die sprachliche Feinheit fehlt — besonders bei Redewendungen und stilistischen Nuancen.", vi: "Tôi tự hào về tiến bộ của mình, nhưng nhận ra đôi khi vẫn thiếu sự tinh tế ngôn ngữ — đặc biệt về thành ngữ và sắc thái phong cách." },
          { speaker: "Beraterin", de: "Das ist eine sehr ehrliche und zutreffende Selbsteinschätzung. Genau das wird auf C2-Niveau vertieft. Was sind Ihre Ziele?", vi: "Đó là tự đánh giá rất trung thực và chính xác. Đúng những điều đó sẽ được đào sâu ở trình độ C2. Mục tiêu của bạn là gì?" },
          { speaker: "Linh", de: "Ich möchte an einer deutschen Universität studieren und irgendwann akademische Texte auf muttersprachlichem Niveau verfassen können.", vi: "Tôi muốn học tại một trường đại học Đức và một ngày nào đó có thể viết văn bản học thuật ở trình độ bản ngữ." },
          { speaker: "Beraterin", de: "Dann empfehle ich Ihnen neben dem C2-Kurs auch: viel deutsche Literatur lesen, deutsche Podcasts und Vorträge hören, und möglichst viel auf Deutsch schreiben. Immersion ist auf diesem Niveau der Schlüssel.", vi: "Vậy tôi khuyên bạn ngoài khóa C2 còn: đọc nhiều văn học Đức, nghe podcast và bài giảng tiếng Đức, và viết bằng tiếng Đức càng nhiều càng tốt. Đắm chìm trong ngôn ngữ là chìa khóa ở trình độ này." },
          { speaker: "Linh", de: "Vielen Dank für die Beratung. Ich werde auf jeden Fall weitermachen — C2 ist mein nächstes Ziel!", vi: "Cảm ơn nhiều về tư vấn. Tôi chắc chắn sẽ tiếp tục — C2 là mục tiêu tiếp theo của tôi!" }
        ]
      },
      {
        type: "practice",
        titleDe: "Selbstreflexion und Lernplan",
        titleVi: "Tự phản ánh và kế hoạch học tập",
        instruction: "Schreiben Sie einen Reflexionstext (ca. 200 Wörter) über Ihre C1-Lernerfahrung. Beantworten Sie dabei: 1) Was waren Ihre größten Fortschritte? 2) Welche Bereiche möchten Sie noch verbessern? 3) Welche Lernstrategien haben am besten funktioniert? 4) Was sind Ihre sprachlichen Ziele für die nächsten 6 Monate? Formulieren Sie abschließend drei konkrete Schritte für Ihren Weg zu C2.",
        instructionVi: "Viết một bài tự phản ánh (khoảng 200 từ) về trải nghiệm học C1 của bạn. Trả lời: 1) Tiến bộ lớn nhất của bạn là gì? 2) Những lĩnh vực nào bạn muốn cải thiện thêm? 3) Chiến lược học tập nào hiệu quả nhất? 4) Mục tiêu ngôn ngữ trong 6 tháng tới là gì? Cuối cùng, đề ra ba bước cụ thể cho con đường đến C2."
      }
    ]
  }
];
