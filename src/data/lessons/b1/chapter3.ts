// B1 German Lessons — Chapter 3: Wissenschaft & Technik
// Complete lesson content for Vietnamese learners

import type { Lesson, ContentBlock } from "../a1/chapters1_3";

export const b1LessonsCh3: Lesson[] = [
  // =====================================================================
  // CHAPTER 3: Wissenschaft & Technik
  // =====================================================================

  // --- Chapter 3, Lesson 1: Einführung ---
  {
    id: "b1-ch3-l1",
    chapterId: 3,
    lessonNumber: 1,
    title: "Erfindungen & Entdeckungen",
    titleVi: "Phát minh & Khám phá",
    type: "Einführung",
    objectives: [
      "Kennen berühmte deutsche Erfindungen und Entdeckungen",
      "Wissenschaftlichen Wortschatz verwenden",
      "Prozesse und Abläufe beschreiben können",
      "Über wissenschaftliche Themen auf B1-Niveau sprechen",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Deutsche Erfindungen, die die Welt verändert haben",
        titleVi: "Những phát minh của Đức đã thay đổi thế giới",
        textDe:
          "Deutschland ist als Land der Dichter und Denker bekannt. Viele wichtige Erfindungen stammen aus Deutschland: Das Automobil wurde 1886 von Karl Benz erfunden. Johannes Gutenberg entwickelte um 1440 den Buchdruck mit beweglichen Lettern. Der Dieselmotor wurde von Rudolf Diesel konstruiert. Albert Einstein formulierte die Relativitätstheorie. Wilhelm Conrad Röntgen entdeckte die Röntgenstrahlen. Diese Erfindungen haben die moderne Welt maßgeblich geprägt.",
        textVi:
          "Nước Đức được biết đến là đất nước của các nhà thơ và nhà tư tưởng. Nhiều phát minh quan trọng bắt nguồn từ Đức: Ô tô được Karl Benz phát minh năm 1886. Johannes Gutenberg đã phát triển kỹ thuật in ấn bằng chữ rời vào khoảng năm 1440. Động cơ diesel được Rudolf Diesel chế tạo. Albert Einstein đã xây dựng thuyết tương đối. Wilhelm Conrad Röntgen phát hiện ra tia X. Những phát minh này đã định hình thế giới hiện đại một cách đáng kể.",
      },
      {
        type: "vocabulary",
        titleDe: "Wissenschaftliche Grundbegriffe",
        titleVi: "Các thuật ngữ khoa học cơ bản",
        words: [
          { de: "die Erfindung", vi: "phát minh", article: "die" },
          { de: "die Entdeckung", vi: "khám phá, phát hiện", article: "die" },
          { de: "der Forscher / die Forscherin", vi: "nhà nghiên cứu", article: "der" },
          { de: "der Wissenschaftler / die Wissenschaftlerin", vi: "nhà khoa học", article: "der" },
          { de: "das Experiment", vi: "thí nghiệm", article: "das" },
          { de: "die Forschung", vi: "nghiên cứu", article: "die" },
          { de: "die Theorie", vi: "lý thuyết", article: "die" },
          { de: "der Versuch", vi: "thử nghiệm, nỗ lực", article: "der" },
          { de: "das Ergebnis", vi: "kết quả", article: "das" },
          { de: "die Entwicklung", vi: "sự phát triển", article: "die" },
          { de: "der Fortschritt", vi: "sự tiến bộ", article: "der" },
          { de: "die Technologie", vi: "công nghệ", article: "die" },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Verben der Wissenschaft",
        titleVi: "Các động từ trong khoa học",
        words: [
          { de: "erfinden (erfand, erfunden)", vi: "phát minh" },
          { de: "entdecken (entdeckte, entdeckt)", vi: "khám phá, phát hiện" },
          { de: "entwickeln (entwickelte, entwickelt)", vi: "phát triển" },
          { de: "forschen (forschte, geforscht)", vi: "nghiên cứu" },
          { de: "konstruieren (konstruierte, konstruiert)", vi: "thiết kế, chế tạo" },
          { de: "beweisen (bewies, bewiesen)", vi: "chứng minh" },
          { de: "untersuchen (untersuchte, untersucht)", vi: "điều tra, kiểm tra" },
          { de: "herstellen (stellte her, hergestellt)", vi: "sản xuất" },
          { de: "verbessern (verbesserte, verbessert)", vi: "cải thiện" },
          { de: "funktionieren (funktionierte, funktioniert)", vi: "hoạt động, vận hành" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Im Deutschen Museum",
        titleVi: "Tại Bảo tàng Đức (München)",
        lines: [
          {
            speaker: "Linh",
            de: "Wow, das Deutsche Museum ist riesig! Was möchtest du dir zuerst anschauen?",
            vi: "Wow, Bảo tàng Đức lớn thật! Bạn muốn xem gì trước?",
          },
          {
            speaker: "Stefan",
            de: "Lass uns zur Abteilung für Automobiltechnik gehen. Weißt du, dass das erste Auto in Deutschland erfunden wurde?",
            vi: "Hãy đi đến khu trưng bày kỹ thuật ô tô. Bạn có biết chiếc ô tô đầu tiên được phát minh ở Đức không?",
          },
          {
            speaker: "Linh",
            de: "Ja, von Karl Benz, oder? Das war 1886, wenn ich mich richtig erinnere.",
            vi: "Đúng rồi, bởi Karl Benz, phải không? Đó là năm 1886, nếu tôi nhớ không nhầm.",
          },
          {
            speaker: "Stefan",
            de: "Genau! Und hier siehst du ein Modell des ersten Benz Patent-Motorwagens.",
            vi: "Chính xác! Và ở đây bạn thấy mô hình chiếc xe hơi Patent-Motorwagen đầu tiên của Benz.",
          },
          {
            speaker: "Linh",
            de: "Faszinierend! Wie funktionierte der Motor damals?",
            vi: "Thú vị thật! Động cơ hoạt động như thế nào vào thời đó?",
          },
          {
            speaker: "Stefan",
            de: "Der Motor wurde mit Benzin betrieben. Er hatte nur 0,75 PS — weniger als ein modernes E-Bike!",
            vi: "Động cơ chạy bằng xăng. Nó chỉ có 0,75 mã lực — ít hơn cả một xe đạp điện hiện đại!",
          },
          {
            speaker: "Linh",
            de: "Unglaublich, wie sich die Technologie seitdem entwickelt hat.",
            vi: "Thật không thể tin được công nghệ đã phát triển thế nào kể từ đó.",
          },
        ],
      },
      {
        type: "explanation",
        titleDe: "Prozesse beschreiben",
        titleVi: "Mô tả quy trình",
        textDe:
          "Um einen Prozess oder eine Entwicklung zu beschreiben, verwenden wir bestimmte Ausdrücke: Zuerst / Am Anfang... (Đầu tiên), Dann / Danach... (Sau đó), Anschließend... (Tiếp theo), Schließlich / Am Ende... (Cuối cùng). Außerdem benutzen wir das Passiv: 'Das Automobil wurde erfunden' (Ô tô đã được phát minh). Temporale Angaben sind wichtig: 'im Jahr 1886', 'vor 100 Jahren', 'seitdem'.",
        textVi:
          "Để mô tả một quy trình hoặc sự phát triển, chúng ta sử dụng các cách diễn đạt nhất định: Zuerst / Am Anfang... (Đầu tiên), Dann / Danach... (Sau đó), Anschließend... (Tiếp theo), Schließlich / Am Ende... (Cuối cùng). Ngoài ra, chúng ta dùng câu bị động: 'Das Automobil wurde erfunden' (Ô tô đã được phát minh). Các chỉ dẫn thời gian rất quan trọng: 'im Jahr 1886' (vào năm 1886), 'vor 100 Jahren' (cách đây 100 năm), 'seitdem' (kể từ đó). Lưu ý: Trong tiếng Việt không có dạng bị động rõ ràng như tiếng Đức, nên đây là điểm cần luyện tập nhiều.",
      },
      {
        type: "practice",
        titleDe: "Übung: Eine Erfindung beschreiben",
        titleVi: "Bài tập: Mô tả một phát minh",
        instruction:
          "Wähle eine Erfindung (z.B. den Buchdruck, das Telefon, den Computer) und beschreibe den Prozess: Wer hat es erfunden? Wann? Wie funktioniert es? Warum ist es wichtig? Benutze die Redemittel: 'Zuerst wurde... entwickelt. Dann hat man... verbessert. Schließlich konnte man...'",
        instructionVi:
          "Hãy chọn một phát minh (ví dụ: kỹ thuật in, điện thoại, máy tính) và mô tả quy trình: Ai đã phát minh ra nó? Khi nào? Nó hoạt động như thế nào? Tại sao nó quan trọng? Sử dụng các mẫu câu: 'Zuerst wurde... entwickelt.' (Đầu tiên... đã được phát triển.) 'Dann hat man... verbessert.' (Sau đó người ta đã cải thiện...) 'Schließlich konnte man...' (Cuối cùng người ta có thể...)",
      },
    ],
  },

  // --- Chapter 3, Lesson 2: Fertigkeit ---
  {
    id: "b1-ch3-l2",
    chapterId: 3,
    lessonNumber: 2,
    title: "Digitalisierung im Alltag",
    titleVi: "Số hóa trong đời sống hàng ngày",
    type: "Fertigkeit",
    objectives: [
      "Wortschatz zum Thema Digitalisierung und Technik erweitern",
      "Über Apps, Smart Home und digitale Gewohnheiten sprechen",
      "Vergleiche zwischen analogem und digitalem Leben anstellen",
      "Eigene digitale Gewohnheiten beschreiben können",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Die digitale Revolution",
        titleVi: "Cuộc cách mạng kỹ thuật số",
        textDe:
          "Die Digitalisierung verändert unseren Alltag grundlegend. Wir benutzen Smartphones, um zu kommunizieren, einzukaufen und uns zu informieren. Smart-Home-Systeme steuern Heizung, Licht und Sicherheit. Online-Banking hat den Gang zur Bank ersetzt. Streaming-Dienste haben die Art verändert, wie wir Filme schauen und Musik hören. In Deutschland wird die Digitalisierung manchmal kritisch gesehen — der Datenschutz ist besonders wichtig.",
        textVi:
          "Số hóa đang thay đổi cuộc sống hàng ngày của chúng ta một cách căn bản. Chúng ta sử dụng điện thoại thông minh để giao tiếp, mua sắm và tìm kiếm thông tin. Hệ thống nhà thông minh điều khiển hệ thống sưởi, đèn và an ninh. Ngân hàng trực tuyến đã thay thế việc đến ngân hàng. Dịch vụ phát trực tuyến đã thay đổi cách chúng ta xem phim và nghe nhạc. Ở Đức, số hóa đôi khi bị nhìn nhận một cách phê phán — bảo vệ dữ liệu đặc biệt quan trọng. Lưu ý: Từ 'Datenschutz' (bảo vệ dữ liệu) là khái niệm rất quan trọng trong văn hóa Đức.",
      },
      {
        type: "vocabulary",
        titleDe: "Digitale Welt",
        titleVi: "Thế giới kỹ thuật số",
        words: [
          { de: "das Smartphone", vi: "điện thoại thông minh", article: "das" },
          { de: "die App (die Apps)", vi: "ứng dụng", article: "die" },
          { de: "das WLAN", vi: "Wi-Fi", article: "das" },
          { de: "die Daten (Pl.)", vi: "dữ liệu" },
          { de: "der Datenschutz", vi: "bảo vệ dữ liệu", article: "der" },
          { de: "die Künstliche Intelligenz (KI)", vi: "trí tuệ nhân tạo (AI)", article: "die" },
          { de: "das Passwort", vi: "mật khẩu", article: "das" },
          { de: "der Bildschirm", vi: "màn hình", article: "der" },
          { de: "die Cloud", vi: "đám mây (lưu trữ)", article: "die" },
          { de: "der Algorithmus", vi: "thuật toán", article: "der" },
          { de: "die Suchmaschine", vi: "công cụ tìm kiếm", article: "die" },
          { de: "das Update", vi: "bản cập nhật", article: "das" },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Smart Home & Technik im Haushalt",
        titleVi: "Nhà thông minh & Công nghệ trong gia đình",
        words: [
          { de: "das Smart Home", vi: "nhà thông minh", article: "das" },
          { de: "der Sprachassistent", vi: "trợ lý giọng nói", article: "der" },
          { de: "der Staubsaugerroboter", vi: "robot hút bụi", article: "der" },
          { de: "die Smartwatch", vi: "đồng hồ thông minh", article: "die" },
          { de: "die Überwachungskamera", vi: "camera giám sát", article: "die" },
          { de: "der Sensor", vi: "cảm biến", article: "der" },
          { de: "steuern", vi: "điều khiển" },
          { de: "vernetzen", vi: "kết nối mạng" },
          { de: "herunterladen", vi: "tải xuống" },
          { de: "aktualisieren", vi: "cập nhật" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Gespräch über digitale Gewohnheiten",
        titleVi: "Cuộc trò chuyện về thói quen kỹ thuật số",
        lines: [
          {
            speaker: "Hoa",
            de: "Hast du schon mal einen Sprachassistenten benutzt?",
            vi: "Bạn đã bao giờ sử dụng trợ lý giọng nói chưa?",
          },
          {
            speaker: "Julia",
            de: "Ja, ich benutze Alexa jeden Tag. Ich frage sie nach dem Wetter, stelle Timer und höre Musik damit.",
            vi: "Có, tôi sử dụng Alexa mỗi ngày. Tôi hỏi thời tiết, đặt hẹn giờ và nghe nhạc qua nó.",
          },
          {
            speaker: "Hoa",
            de: "Ist das nicht komisch, mit einem Gerät zu sprechen? Und was ist mit dem Datenschutz?",
            vi: "Nói chuyện với một thiết bị không kỳ lạ sao? Và vấn đề bảo vệ dữ liệu thì sao?",
          },
          {
            speaker: "Julia",
            de: "Am Anfang war es ungewohnt, aber jetzt finde ich es sehr praktisch. Den Datenschutz nehme ich aber ernst — ich habe das Mikrofon manchmal ausgeschaltet.",
            vi: "Ban đầu thì lạ lẫm, nhưng bây giờ tôi thấy nó rất tiện. Nhưng tôi coi trọng bảo vệ dữ liệu — tôi thỉnh thoảng tắt micro.",
          },
          {
            speaker: "Hoa",
            de: "In Vietnam benutzen viele Leute auch Apps für alles — zum Bezahlen, Essen bestellen, sogar für Behördengänge.",
            vi: "Ở Việt Nam nhiều người cũng dùng ứng dụng cho mọi thứ — để thanh toán, đặt đồ ăn, thậm chí làm thủ tục hành chính.",
          },
          {
            speaker: "Julia",
            de: "In Deutschland ist das noch nicht so weit. Viele Leute bezahlen immer noch lieber bar. Die Deutschen sind beim Thema Digitalisierung manchmal etwas vorsichtiger.",
            vi: "Ở Đức chưa đến mức đó. Nhiều người vẫn thích trả tiền mặt hơn. Người Đức đôi khi thận trọng hơn một chút về chủ đề số hóa.",
          },
          {
            speaker: "Hoa",
            de: "Das stimmt. Aber ich finde es gut, dass man hier so viel Wert auf Datenschutz legt.",
            vi: "Đúng vậy. Nhưng tôi thấy tốt là ở đây người ta coi trọng bảo vệ dữ liệu như vậy.",
          },
        ],
      },
      {
        type: "explanation",
        titleDe: "Nützliche Ausdrücke zum Thema Digitalisierung",
        titleVi: "Các cách diễn đạt hữu ích về chủ đề số hóa",
        textDe:
          "Um über Technik zu sprechen, braucht man bestimmte Ausdrücke: 'Ich benutze... regelmäßig/täglich/selten.' — 'Diese App ist nützlich/praktisch/überflüssig.' — 'Ich könnte nicht ohne... leben.' — 'Ich finde es wichtig, dass...' — 'Der Vorteil/Nachteil ist, dass...' — 'Im Vergleich zu früher...'",
        textVi:
          "Để nói về công nghệ, chúng ta cần các cách diễn đạt nhất định: 'Ich benutze... regelmäßig/täglich/selten.' (Tôi sử dụng... thường xuyên/hàng ngày/hiếm khi.) — 'Diese App ist nützlich/praktisch/überflüssig.' (Ứng dụng này hữu ích/tiện lợi/thừa.) — 'Ich könnte nicht ohne... leben.' (Tôi không thể sống thiếu...) — 'Ich finde es wichtig, dass...' (Tôi thấy quan trọng là...) — 'Der Vorteil/Nachteil ist, dass...' (Ưu điểm/Nhược điểm là...) — 'Im Vergleich zu früher...' (So với trước đây...)",
      },
      {
        type: "practice",
        titleDe: "Übung: Mein digitaler Alltag",
        titleVi: "Bài tập: Cuộc sống kỹ thuật số hàng ngày của tôi",
        instruction:
          "Beschreibe deinen digitalen Alltag: Welche Apps benutzt du täglich? Könntest du eine Woche ohne Smartphone leben? Was findest du positiv und negativ an der Digitalisierung? Verwende die Redemittel aus dieser Lektion.",
        instructionVi:
          "Hãy mô tả cuộc sống kỹ thuật số hàng ngày của bạn: Bạn sử dụng ứng dụng nào mỗi ngày? Bạn có thể sống một tuần không có điện thoại thông minh không? Bạn thấy gì là tích cực và tiêu cực về số hóa? Sử dụng các mẫu câu trong bài học này. Ví dụ: 'Ich benutze WhatsApp täglich, weil ich damit mit meiner Familie in Vietnam kommuniziere.'",
      },
    ],
  },

  // --- Chapter 3, Lesson 3: Fertigkeit ---
  {
    id: "b1-ch3-l3",
    chapterId: 3,
    lessonNumber: 3,
    title: "Vor- und Nachteile erörtern",
    titleVi: "Thảo luận ưu và nhược điểm",
    type: "Fertigkeit",
    objectives: [
      "Argumentationsstruktur für Erörterungen beherrschen",
      "Redemittel für Pro- und Contra-Argumente verwenden",
      "Meinungen begründen und auf Gegenargumente reagieren",
      "An Diskussionen über Wissenschaft und Technik teilnehmen",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Aufbau einer Erörterung",
        titleVi: "Cấu trúc của một bài luận giải",
        textDe:
          "Eine gute Erörterung hat drei Teile: 1) Einleitung — Das Thema vorstellen und die Fragestellung nennen. 2) Hauptteil — Pro-Argumente und Contra-Argumente mit Beispielen darstellen. 3) Schluss — Die eigene Meinung zusammenfassen. Wichtig: Man sollte immer beide Seiten betrachten, auch wenn man eine klare Meinung hat. In Deutschland wird sachliche Argumentation sehr geschätzt.",
        textVi:
          "Một bài luận giải tốt có ba phần: 1) Mở bài — Giới thiệu chủ đề và nêu câu hỏi cần thảo luận. 2) Thân bài — Trình bày các lập luận ủng hộ (Pro) và phản đối (Contra) kèm ví dụ. 3) Kết bài — Tóm tắt ý kiến cá nhân. Quan trọng: Luôn phải xem xét cả hai phía, ngay cả khi bạn có ý kiến rõ ràng. Ở Đức, lập luận khách quan, có logic được đánh giá rất cao. Đây là kỹ năng quan trọng trong kỳ thi B1!",
      },
      {
        type: "vocabulary",
        titleDe: "Redemittel: Meinung ausdrücken",
        titleVi: "Mẫu câu: Bày tỏ ý kiến",
        words: [
          { de: "Meiner Meinung nach...", vi: "Theo ý kiến của tôi..." },
          { de: "Ich bin der Meinung, dass...", vi: "Tôi có ý kiến rằng..." },
          { de: "Ich finde / Ich denke, dass...", vi: "Tôi thấy / Tôi nghĩ rằng..." },
          { de: "Ich bin (nicht) davon überzeugt, dass...", vi: "Tôi (không) tin rằng..." },
          { de: "Aus meiner Sicht...", vi: "Từ góc nhìn của tôi..." },
          { de: "Soweit ich weiß...", vi: "Theo như tôi biết..." },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Redemittel: Argumente und Gegenargumente",
        titleVi: "Mẫu câu: Lập luận và phản biện",
        words: [
          { de: "Ein Vorteil ist, dass...", vi: "Một ưu điểm là..." },
          { de: "Ein Nachteil ist, dass...", vi: "Một nhược điểm là..." },
          { de: "Einerseits... andererseits...", vi: "Một mặt... mặt khác..." },
          { de: "Dafür spricht, dass...", vi: "Điều ủng hộ cho điều đó là..." },
          { de: "Dagegen spricht, dass...", vi: "Điều phản đối điều đó là..." },
          { de: "Zwar... aber...", vi: "Tuy... nhưng..." },
          { de: "Trotzdem / Dennoch...", vi: "Tuy nhiên / Dù vậy..." },
          { de: "Im Gegensatz dazu...", vi: "Ngược lại với điều đó..." },
          { de: "Außerdem / Darüber hinaus...", vi: "Ngoài ra..." },
          { de: "Zusammenfassend lässt sich sagen, dass...", vi: "Tóm lại có thể nói rằng..." },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Redemittel: Auf andere reagieren",
        titleVi: "Mẫu câu: Phản hồi ý kiến người khác",
        words: [
          { de: "Da stimme ich dir/Ihnen zu.", vi: "Tôi đồng ý với bạn/quý vị." },
          { de: "Da bin ich anderer Meinung.", vi: "Tôi có ý kiến khác." },
          { de: "Das sehe ich anders.", vi: "Tôi thấy khác." },
          { de: "Das stimmt, aber...", vi: "Đúng vậy, nhưng..." },
          { de: "Da hast du / haben Sie recht, allerdings...", vi: "Bạn/Quý vị nói đúng, tuy nhiên..." },
          { de: "Ich verstehe deinen/Ihren Standpunkt, aber...", vi: "Tôi hiểu quan điểm của bạn/quý vị, nhưng..." },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Diskussion: Sollten Kinder Smartphones benutzen?",
        titleVi: "Thảo luận: Trẻ em có nên sử dụng điện thoại thông minh?",
        lines: [
          {
            speaker: "Moderator",
            de: "Unser heutiges Thema: Sollten Kinder unter 12 Jahren ein eigenes Smartphone haben? Tuan, was denkst du?",
            vi: "Chủ đề hôm nay của chúng ta: Trẻ em dưới 12 tuổi có nên có điện thoại thông minh riêng không? Tuấn, bạn nghĩ sao?",
          },
          {
            speaker: "Tuan",
            de: "Meiner Meinung nach sollten Kinder kein eigenes Smartphone haben. Ein Nachteil ist, dass sie zu viel Zeit am Bildschirm verbringen und sich nicht genug bewegen.",
            vi: "Theo ý kiến tôi, trẻ em không nên có điện thoại riêng. Một nhược điểm là chúng dành quá nhiều thời gian trước màn hình và không vận động đủ.",
          },
          {
            speaker: "Katja",
            de: "Da bin ich anderer Meinung. Einerseits verstehe ich die Sorge, andererseits ist es wichtig, dass Kinder den Umgang mit Technik früh lernen.",
            vi: "Tôi có ý kiến khác. Một mặt tôi hiểu mối lo, mặt khác điều quan trọng là trẻ em học cách sử dụng công nghệ sớm.",
          },
          {
            speaker: "Tuan",
            de: "Das stimmt, aber man kann den Umgang mit Technik auch ohne eigenes Smartphone lernen — zum Beispiel am Computer in der Schule.",
            vi: "Đúng vậy, nhưng người ta có thể học sử dụng công nghệ mà không cần có điện thoại riêng — ví dụ trên máy tính ở trường.",
          },
          {
            speaker: "Katja",
            de: "Da hast du recht, allerdings brauchen viele Kinder ein Handy, um ihre Eltern zu erreichen, wenn sie allein unterwegs sind.",
            vi: "Bạn nói đúng, tuy nhiên nhiều trẻ em cần điện thoại để liên lạc với bố mẹ khi đi một mình.",
          },
          {
            speaker: "Tuan",
            de: "Zwar ist das ein gutes Argument, aber dafür reicht ein einfaches Handy ohne Internet.",
            vi: "Tuy đó là một lập luận tốt, nhưng cho việc đó một điện thoại đơn giản không có Internet là đủ.",
          },
          {
            speaker: "Katja",
            de: "Zusammenfassend denke ich, dass es auf die Eltern ankommt. Sie sollten die Nutzung kontrollieren und Regeln aufstellen.",
            vi: "Tóm lại tôi nghĩ rằng điều đó phụ thuộc vào bố mẹ. Họ nên kiểm soát việc sử dụng và đặt ra quy tắc.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Pro und Contra diskutieren",
        titleVi: "Bài tập: Thảo luận ủng hộ và phản đối",
        instruction:
          "Wähle ein Thema und schreibe jeweils 3 Pro- und 3 Contra-Argumente: a) Künstliche Intelligenz im Unterricht, b) Bargeld abschaffen, c) Soziale Medien verbieten für Jugendliche. Benutze die Redemittel aus dieser Lektion: 'Einerseits... andererseits...', 'Ein Vorteil/Nachteil ist, dass...', 'Zwar... aber...'",
        instructionVi:
          "Chọn một chủ đề và viết 3 lập luận ủng hộ và 3 lập luận phản đối: a) Trí tuệ nhân tạo trong giảng dạy, b) Bỏ tiền mặt, c) Cấm mạng xã hội cho thanh thiếu niên. Sử dụng các mẫu câu trong bài: 'Einerseits... andererseits...' (Một mặt... mặt khác...), 'Ein Vorteil/Nachteil ist, dass...' (Một ưu/nhược điểm là...), 'Zwar... aber...' (Tuy... nhưng...). Sau đó viết một đoạn kết luận với 'Zusammenfassend lässt sich sagen, dass...'",
      },
    ],
  },

  // --- Chapter 3, Lesson 4: Grammatik ---
  {
    id: "b1-ch3-l4",
    chapterId: 3,
    lessonNumber: 4,
    title: "Relativsätze",
    titleVi: "Mệnh đề quan hệ",
    type: "Grammatik",
    objectives: [
      "Relativpronomen (der, die, das, dem, den, deren) korrekt verwenden",
      "Relativsätze im Nominativ, Akkusativ, Dativ und Genitiv bilden",
      "Relativsätze mit Präpositionen verstehen und anwenden",
      "Komplexere Sätze bilden, um Informationen zu verbinden",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Was ist ein Relativsatz?",
        titleVi: "Mệnh đề quan hệ là gì?",
        textDe:
          "Ein Relativsatz gibt zusätzliche Informationen über ein Nomen im Hauptsatz. Er beginnt mit einem Relativpronomen (der, die, das...) und das Verb steht am Ende des Nebensatzes. Beispiel: 'Das ist der Forscher, der die Theorie entwickelt hat.' Der Relativsatz 'der die Theorie entwickelt hat' beschreibt 'den Forscher' genauer.",
        textVi:
          "Mệnh đề quan hệ cung cấp thông tin bổ sung về một danh từ trong câu chính. Nó bắt đầu bằng đại từ quan hệ (der, die, das...) và động từ đứng ở cuối mệnh đề phụ. Ví dụ: 'Das ist der Forscher, der die Theorie entwickelt hat.' (Đó là nhà nghiên cứu, người đã phát triển lý thuyết đó.) Mệnh đề quan hệ 'der die Theorie entwickelt hat' mô tả chi tiết hơn về 'nhà nghiên cứu'. Trong tiếng Việt, chúng ta dùng 'mà', 'người mà', 'cái mà' tương tự. Nhưng khác với tiếng Việt, tiếng Đức thay đổi đại từ quan hệ theo giống, số và cách (Fall).",
      },
      {
        type: "grammar",
        titleDe: "Relativpronomen — Übersichtstabelle",
        titleVi: "Đại từ quan hệ — Bảng tổng quan",
        rule:
          "Nominativ: der (m), die (f), das (n), die (Pl.) | Akkusativ: den (m), die (f), das (n), die (Pl.) | Dativ: dem (m), der (f), dem (n), denen (Pl.) | Genitiv: dessen (m), deren (f), dessen (n), deren (Pl.)",
        ruleVi:
          "Đại từ quan hệ thay đổi tùy theo giống (m/f/n), số (số ít/số nhiều) và cách (Nominativ/Akkusativ/Dativ/Genitiv). Cách xác định: 1) Tìm danh từ mà mệnh đề quan hệ bổ nghĩa → xác định giống và số. 2) Xác định vai trò của đại từ quan hệ TRONG mệnh đề phụ → xác định cách. Bảng: Nominativ (chủ ngữ): der/die/das/die | Akkusativ (tân ngữ trực tiếp): den/die/das/die | Dativ (tân ngữ gián tiếp): dem/der/dem/denen | Genitiv (sở hữu): dessen/deren/dessen/deren. Lưu ý: Bảng này giống hệt với mạo từ xác định, ngoại trừ Dativ số nhiều (denen) và tất cả Genitiv (dessen/deren).",
        examples: [
          {
            de: "Das ist der Mann, der das Auto erfunden hat. (Nominativ, m)",
            vi: "Đó là người đàn ông, người đã phát minh ra ô tô. (Chủ cách, giống đực)",
          },
          {
            de: "Die App, die ich täglich benutze, ist sehr praktisch. (Akkusativ, f)",
            vi: "Ứng dụng mà tôi sử dụng hàng ngày rất tiện lợi. (Đối cách, giống cái)",
          },
          {
            de: "Das ist das Buch, das auf dem Tisch liegt. (Nominativ, n)",
            vi: "Đó là cuốn sách mà nằm trên bàn. (Chủ cách, giống trung)",
          },
          {
            de: "Die Kinder, die im Park spielen, sind laut. (Nominativ, Pl.)",
            vi: "Những đứa trẻ mà chơi trong công viên rất ồn. (Chủ cách, số nhiều)",
          },
        ],
      },
      {
        type: "grammar",
        titleDe: "Relativsätze im Akkusativ und Dativ",
        titleVi: "Mệnh đề quan hệ ở Akkusativ và Dativ",
        rule:
          "Akkusativ: 'Der Forscher, den ich gestern getroffen habe, ist berühmt.' — Dativ: 'Die Frau, der ich geholfen habe, ist Wissenschaftlerin.' — Das Relativpronomen richtet sich nach seiner Funktion im Relativsatz, nicht im Hauptsatz!",
        ruleVi:
          "Akkusativ (tân ngữ trực tiếp): 'Der Forscher, den ich gestern getroffen habe, ist berühmt.' (Nhà nghiên cứu mà tôi đã gặp hôm qua rất nổi tiếng.) — Ở đây 'den' vì 'Forscher' là giống đực và là tân ngữ trực tiếp trong mệnh đề phụ (ich habe DEN Forscher getroffen). Dativ (tân ngữ gián tiếp): 'Die Frau, der ich geholfen habe, ist Wissenschaftlerin.' (Người phụ nữ mà tôi đã giúp là nhà khoa học.) — Ở đây 'der' vì 'Frau' là giống cái và động từ 'helfen' đòi hỏi Dativ. Mẹo: Đại từ quan hệ phụ thuộc vào vai trò của nó TRONG mệnh đề phụ, không phải trong câu chính!",
        examples: [
          {
            de: "Den Computer, den ich gekauft habe, ist sehr schnell. (Akk., m)",
            vi: "Máy tính mà tôi đã mua rất nhanh. (Đối cách, giống đực)",
          },
          {
            de: "Die Theorie, die Einstein entwickelt hat, war revolutionär. (Akk., f)",
            vi: "Lý thuyết mà Einstein đã phát triển mang tính cách mạng. (Đối cách, giống cái)",
          },
          {
            de: "Der Kollege, dem ich das Buch geliehen habe, hat es zurückgegeben. (Dat., m)",
            vi: "Đồng nghiệp mà tôi đã cho mượn sách đã trả lại nó. (Tặng cách, giống đực)",
          },
          {
            de: "Die Studenten, denen der Professor das Ergebnis erklärt hat, haben alles verstanden. (Dat., Pl.)",
            vi: "Các sinh viên mà giáo sư đã giải thích kết quả đã hiểu hết. (Tặng cách, số nhiều)",
          },
        ],
      },
      {
        type: "grammar",
        titleDe: "Relativsätze im Genitiv",
        titleVi: "Mệnh đề quan hệ ở Genitiv (sở hữu cách)",
        rule:
          "Genitiv-Relativpronomen: dessen (m/n), deren (f/Pl.). Sie ersetzen ein Possessivpronomen. 'Der Forscher, dessen Theorie berühmt ist, lebt in Berlin.' = 'Seine Theorie ist berühmt.'",
        ruleVi:
          "Đại từ quan hệ sở hữu cách: dessen (giống đực/trung), deren (giống cái/số nhiều). Chúng thay thế đại từ sở hữu. 'Der Forscher, dessen Theorie berühmt ist, lebt in Berlin.' (Nhà nghiên cứu mà lý thuyết của ông ấy nổi tiếng sống ở Berlin.) = 'Seine Theorie ist berühmt.' (Lý thuyết của ông ấy nổi tiếng.) Lưu ý: Sau 'dessen/deren' KHÔNG có mạo từ. So sánh: 'seine Theorie' nhưng 'dessen Theorie' (không phải 'dessen seine Theorie').",
        examples: [
          {
            de: "Die Wissenschaftlerin, deren Forschung preisgekrönt ist, hält morgen einen Vortrag. (Gen., f)",
            vi: "Nhà khoa học nữ mà nghiên cứu của bà ấy đoạt giải sẽ thuyết trình vào ngày mai. (Sở hữu cách, giống cái)",
          },
          {
            de: "Das Unternehmen, dessen Produkte weltweit bekannt sind, wurde in Deutschland gegründet. (Gen., n)",
            vi: "Doanh nghiệp mà sản phẩm của nó nổi tiếng toàn cầu đã được thành lập ở Đức. (Sở hữu cách, giống trung)",
          },
          {
            de: "Die Erfinder, deren Ideen die Welt verändert haben, kamen aus verschiedenen Ländern. (Gen., Pl.)",
            vi: "Các nhà phát minh mà ý tưởng của họ đã thay đổi thế giới đến từ các nước khác nhau. (Sở hữu cách, số nhiều)",
          },
        ],
      },
      {
        type: "grammar",
        titleDe: "Relativsätze mit Präpositionen",
        titleVi: "Mệnh đề quan hệ với giới từ",
        rule:
          "Wenn das Verb eine Präposition verlangt, steht die Präposition VOR dem Relativpronomen. 'Der Forscher, mit dem ich gesprochen habe...' (sprechen mit + Dativ). 'Das Thema, über das wir diskutiert haben...' (diskutieren über + Akkusativ). 'Die Stadt, in der ich wohne...' (wohnen in + Dativ).",
        ruleVi:
          "Khi động từ đòi hỏi một giới từ, giới từ đứng TRƯỚC đại từ quan hệ. 'Der Forscher, mit dem ich gesprochen habe...' (Nhà nghiên cứu mà tôi đã nói chuyện với...) — 'sprechen mit' + Dativ. 'Das Thema, über das wir diskutiert haben...' (Chủ đề mà chúng tôi đã thảo luận về...) — 'diskutieren über' + Akkusativ. 'Die Stadt, in der ich wohne...' (Thành phố mà tôi sống ở...) — 'wohnen in' + Dativ. Mẹo: Giới từ quyết định cách (Akkusativ hay Dativ) của đại từ quan hệ, không phải vai trò trong câu!",
        examples: [
          {
            de: "Das ist das Labor, in dem die Experimente durchgeführt werden.",
            vi: "Đó là phòng thí nghiệm mà các thí nghiệm được thực hiện trong đó.",
          },
          {
            de: "Die Kollegin, mit der ich an dem Projekt arbeite, ist sehr kompetent.",
            vi: "Đồng nghiệp nữ mà tôi làm việc cùng trong dự án rất có năng lực.",
          },
          {
            de: "Das Problem, über das wir gestern gesprochen haben, ist gelöst.",
            vi: "Vấn đề mà chúng tôi đã nói về hôm qua đã được giải quyết.",
          },
          {
            de: "Der Computer, auf den ich lange gewartet habe, ist endlich da.",
            vi: "Chiếc máy tính mà tôi đã đợi lâu cuối cùng đã đến.",
          },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Gespräch über eine Technologie-Messe",
        titleVi: "Cuộc trò chuyện về hội chợ công nghệ",
        lines: [
          {
            speaker: "Nam",
            de: "Warst du auf der Messe? Hast du den Roboter gesehen, der Kaffee kochen kann?",
            vi: "Bạn có đi hội chợ không? Bạn có thấy cái robot mà có thể pha cà phê không?",
          },
          {
            speaker: "Laura",
            de: "Ja! Das ist die Firma, deren Produkte ich schon seit Jahren verfolge. Die machen unglaubliche Sachen.",
            vi: "Có! Đó là công ty mà tôi đã theo dõi sản phẩm của họ nhiều năm. Họ làm những thứ đáng kinh ngạc.",
          },
          {
            speaker: "Nam",
            de: "Ich habe auch mit einem Ingenieur gesprochen, mit dem ich mich über Künstliche Intelligenz unterhalten habe. Sehr interessant!",
            vi: "Tôi cũng đã nói chuyện với một kỹ sư mà tôi đã trao đổi về trí tuệ nhân tạo. Rất thú vị!",
          },
          {
            speaker: "Laura",
            de: "Die Präsentation, über die alle geredet haben, war die zum Thema autonomes Fahren.",
            vi: "Bài trình bày mà mọi người đều nói về là bài về chủ đề lái xe tự động.",
          },
          {
            speaker: "Nam",
            de: "Stimmt! Das Auto, in dem keine Person saß, ist einfach durch die Halle gefahren. Das war beeindruckend.",
            vi: "Đúng vậy! Chiếc xe mà không có ai ngồi trong đã chạy qua hội trường. Thật ấn tượng.",
          },
          {
            speaker: "Laura",
            de: "Die Zukunft, auf die wir uns freuen können, wird spannend!",
            vi: "Tương lai mà chúng ta có thể mong đợi sẽ rất hấp dẫn!",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Relativsätze bilden",
        titleVi: "Bài tập: Tạo mệnh đề quan hệ",
        instruction:
          "Verbinde die Sätze mit Relativpronomen: 1) 'Das ist die App. Ich benutze die App jeden Tag.' → 'Das ist die App, die ich jeden Tag benutze.' 2) 'Der Wissenschaftler ist berühmt. Seine Entdeckung hat die Medizin verändert.' → ? 3) 'Das ist das Museum. Wir waren gestern in dem Museum.' → ? 4) 'Die Kollegin ist nett. Ich arbeite mit der Kollegin zusammen.' → ? 5) 'Der Computer ist neu. Ich habe den Computer letzte Woche gekauft.' → ? Achte auf den richtigen Fall (Nominativ, Akkusativ, Dativ oder Genitiv)!",
        instructionVi:
          "Nối các câu bằng đại từ quan hệ: 1) 'Das ist die App. Ich benutze die App jeden Tag.' → 'Das ist die App, die ich jeden Tag benutze.' (Đó là ứng dụng mà tôi sử dụng mỗi ngày.) 2) 'Der Wissenschaftler ist berühmt. Seine Entdeckung hat die Medizin verändert.' → ? (Nhà khoa học nổi tiếng. Phát hiện của ông ấy đã thay đổi y học.) 3) 'Das ist das Museum. Wir waren gestern in dem Museum.' → ? (Đó là bảo tàng. Chúng tôi đã ở trong bảo tàng hôm qua.) 4) 'Die Kollegin ist nett. Ich arbeite mit der Kollegin zusammen.' → ? (Đồng nghiệp nữ tốt bụng. Tôi làm việc cùng cô ấy.) 5) 'Der Computer ist neu. Ich habe den Computer letzte Woche gekauft.' → ? (Máy tính mới. Tôi đã mua nó tuần trước.) Chú ý cách đúng (Nominativ, Akkusativ, Dativ hoặc Genitiv)!",
      },
    ],
  },
];
