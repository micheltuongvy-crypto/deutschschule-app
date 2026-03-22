// C2 German Lessons — Chapters 4–5
// Complete lesson content for Vietnamese learners
// Ästhetik & Kunsttheorie, Rechtsphilosophie & Menschenrechte

import type { Lesson, ContentBlock } from "../a1/chapters1_3";

export const c2LessonsCh4_5: Lesson[] = [
  // =====================================================================
  // KAPITEL 4: Ästhetik & Kunsttheorie
  // =====================================================================

  // --- Kapitel 4, Lektion 1 ---
  {
    id: "c2-ch4-l1",
    chapterId: 4,
    lessonNumber: 1,
    title: "Ästhetische Theorien — Kant, Hegel, Adorno",
    titleVi: "Các lý thuyết mỹ học — Kant, Hegel, Adorno",
    type: "Einführung",
    objectives: [
      "Hiểu và so sánh các lý thuyết mỹ học của Kant, Hegel và Adorno",
      "Phân tích khái niệm 'phán đoán thẩm mỹ' (ästhetisches Urteil) của Kant",
      "Thảo luận về vai trò của nghệ thuật trong triết học Hegel và Adorno",
      "Sử dụng từ vựng triết học mỹ học ở trình độ C2",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Von Kants 'interesselosem Wohlgefallen' zu Adornos ästhetischer Theorie",
        titleVi: "Từ 'sự hài lòng vô tư' của Kant đến lý thuyết mỹ học của Adorno",
        textDe:
          "Immanuel Kant begründete in seiner 'Kritik der Urteilskraft' (1790) die moderne Ästhetik mit dem Begriff des 'interesselosen Wohlgefallens': Das ästhetische Urteil sei universell, aber subjektiv — es beanspruche Allgemeingültigkeit, ohne auf Begriffe rückführbar zu sein. Georg Wilhelm Friedrich Hegel hingegen verstand Kunst als sinnliches Scheinen der Idee und ordnete sie in sein dialektisches System ein: Die Kunst sei eine Stufe des absoluten Geistes, die jedoch von der Religion und schließlich der Philosophie überwunden werde. Theodor W. Adorno widersprach dieser These des 'Endes der Kunst' und entwickelte in seiner 'Ästhetischen Theorie' (1970) eine dialektische Ästhetik, in der das Kunstwerk gerade durch seine Autonomie gesellschaftskritisches Potenzial entfalte. Für Adorno ist authentische Kunst stets ein Widerspruch zur bestehenden Gesellschaft.",
        textVi:
          "Immanuel Kant đã sáng lập mỹ học hiện đại trong tác phẩm 'Phê phán năng lực phán đoán' (1790) với khái niệm 'sự hài lòng vô tư': phán đoán thẩm mỹ mang tính phổ quát nhưng chủ quan — nó đòi hỏi tính phổ biến mà không thể quy giản về khái niệm. Georg Wilhelm Friedrich Hegel, ngược lại, hiểu nghệ thuật là sự hiện lên cảm tính của ý niệm và xếp nó vào hệ thống biện chứng: nghệ thuật là một giai đoạn của tinh thần tuyệt đối, nhưng sẽ bị tôn giáo và cuối cùng là triết học vượt qua. Theodor W. Adorno phản bác luận đề 'sự kết thúc của nghệ thuật' và phát triển trong 'Lý thuyết mỹ học' (1970) một mỹ học biện chứng, trong đó tác phẩm nghệ thuật chính nhờ tính tự trị mà phát huy tiềm năng phê bình xã hội. Đối với Adorno, nghệ thuật đích thực luôn là một mâu thuẫn với xã hội hiện tồn.",
      },
      {
        type: "vocabulary",
        titleDe: "Grundbegriffe der philosophischen Ästhetik",
        titleVi: "Các khái niệm cơ bản của mỹ học triết học",
        words: [
          { de: "das interesselose Wohlgefallen", vi: "sự hài lòng vô tư (Kant)" },
          { de: "die Urteilskraft", vi: "năng lực phán đoán" },
          { de: "das ästhetische Urteil", vi: "phán đoán thẩm mỹ" },
          { de: "das Erhabene", vi: "cái cao cả, cái tráng lệ" },
          { de: "das sinnliche Scheinen der Idee", vi: "sự hiện lên cảm tính của ý niệm (Hegel)" },
          { de: "der absolute Geist", vi: "tinh thần tuyệt đối" },
          { de: "die Autonomie des Kunstwerks", vi: "tính tự trị của tác phẩm nghệ thuật" },
          { de: "die Kulturindustrie", vi: "công nghiệp văn hóa (Adorno/Horkheimer)" },
          { de: "die Dialektik", vi: "phép biện chứng" },
          { de: "das Wahrheitsmoment der Kunst", vi: "khoảnh khắc chân lý của nghệ thuật" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Seminar über ästhetische Theorien",
        titleVi: "Hội thảo về các lý thuyết mỹ học",
        lines: [
          {
            speaker: "Prof. Hartmann",
            de: "Kant spricht vom 'interesselosen Wohlgefallen'. Wie ist dieses Konzept vor dem Hintergrund der Kulturindustrie zu bewerten, Frau Tran?",
            vi: "Kant nói về 'sự hài lòng vô tư'. Khái niệm này cần được đánh giá như thế nào trước bối cảnh công nghiệp văn hóa, chị Trần?",
          },
          {
            speaker: "Mai",
            de: "Adorno würde argumentieren, dass ein wahrhaft interesseloses ästhetisches Urteil in einer durchkommerzialisierten Gesellschaft kaum noch möglich sei. Die Kulturindustrie präformiere unsere ästhetischen Urteile derart, dass selbst das vermeintlich autonome Geschmacksurteil bereits von Marktlogiken durchdrungen ist.",
            vi: "Adorno sẽ lập luận rằng một phán đoán thẩm mỹ thực sự vô tư hầu như không còn khả thi trong một xã hội hoàn toàn thương mại hóa. Công nghiệp văn hóa định hình trước các phán đoán thẩm mỹ của chúng ta đến mức ngay cả phán đoán thẩm mỹ được cho là tự trị cũng đã bị thấm nhuần bởi logic thị trường.",
          },
          {
            speaker: "Prof. Hartmann",
            de: "Und wie ließe sich Hegels These vom Ende der Kunst heute verstehen?",
            vi: "Và luận đề của Hegel về sự kết thúc của nghệ thuật ngày nay có thể được hiểu như thế nào?",
          },
          {
            speaker: "Mai",
            de: "Hegel meinte nicht das buchstäbliche Ende künstlerischer Produktion, sondern den Verlust der Kunst als höchste Form der Wahrheitserkenntnis. In gewisser Weise bestätigt sich dies: Kunst dient heute weniger der Wahrheitssuche als der Unterhaltung — wobei gerade darin, dialektisch gedacht, auch ein Moment der Wahrheit liegen könnte.",
            vi: "Hegel không có ý nói đến sự kết thúc theo nghĩa đen của sản xuất nghệ thuật, mà là sự mất mát của nghệ thuật với tư cách là hình thức cao nhất của nhận thức chân lý. Theo một cách nào đó, điều này được xác nhận: nghệ thuật ngày nay phục vụ giải trí hơn là tìm kiếm chân lý — tuy nhiên, chính trong điều đó, nếu suy nghĩ biện chứng, cũng có thể tiềm ẩn một khoảnh khắc chân lý.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Vergleichende Analyse ästhetischer Positionen",
        titleVi: "Bài tập: Phân tích so sánh các quan điểm mỹ học",
        instruction:
          "Verfassen Sie einen akademischen Text (ca. 600 Wörter), in dem Sie die ästhetischen Positionen von Kant, Hegel und Adorno vergleichen. Erörtern Sie insbesondere: 1) Wie definiert jeder Denker das Verhältnis von Kunst und Wahrheit? 2) Welche Rolle spielt die Autonomie des Kunstwerks? 3) Welche Position halten Sie für die überzeugendste — und warum?",
        instructionVi:
          "Viết một văn bản học thuật (khoảng 600 từ) so sánh các quan điểm mỹ học của Kant, Hegel và Adorno. Đặc biệt thảo luận: 1) Mỗi nhà tư tưởng định nghĩa mối quan hệ giữa nghệ thuật và chân lý như thế nào? 2) Tính tự trị của tác phẩm nghệ thuật đóng vai trò gì? 3) Bạn cho rằng quan điểm nào thuyết phục nhất — và tại sao?",
      },
    ],
  },

  // --- Kapitel 4, Lektion 2 ---
  {
    id: "c2-ch4-l2",
    chapterId: 4,
    lessonNumber: 2,
    title: "Moderne & zeitgenössische Kunst",
    titleVi: "Nghệ thuật hiện đại & đương đại",
    type: "Einführung",
    objectives: [
      "Phân tích các trào lưu chính của nghệ thuật hiện đại và đương đại bằng tiếng Đức",
      "Thảo luận về các khái niệm nghệ thuật từ chủ nghĩa ấn tượng đến nghệ thuật kỹ thuật số",
      "Sử dụng từ vựng chuyên ngành lịch sử nghệ thuật",
      "Viết bài phân tích nghệ thuật theo phong cách học thuật",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Vom Impressionismus zur digitalen Kunst — Paradigmenwechsel in der Kunst",
        titleVi: "Từ chủ nghĩa ấn tượng đến nghệ thuật số — Sự chuyển đổi mô hình trong nghệ thuật",
        textDe:
          "Die Geschichte der modernen Kunst lässt sich als eine Abfolge radikaler Brüche begreifen. Der Impressionismus verabschiedete sich von der akademischen Malerei und wandte sich dem flüchtigen Sinneseindruck zu. Der Expressionismus radikalisierte die subjektive Ausdruckskraft, während der Kubismus die perspektivische Einheit zertrümmerte. Marcel Duchamps Ready-mades stellten ab 1913 die ontologische Frage: Was macht ein Objekt zum Kunstwerk? Diese Frage durchzieht die gesamte zeitgenössische Kunst — von der Konzeptkunst über die Performance-Kunst bis hin zur digitalen und KI-generierten Kunst. Joseph Beuys erweiterte den Kunstbegriff mit seiner Formel 'Jeder Mensch ist ein Künstler' ins Soziale, während die Postmoderne jede Hierarchie zwischen Hoch- und Populärkultur infrage stellte.",
        textVi:
          "Lịch sử nghệ thuật hiện đại có thể được hiểu như một chuỗi các cuộc đoạn tuyệt triệt để. Chủ nghĩa ấn tượng từ biệt hội họa hàn lâm và hướng đến ấn tượng giác quan thoáng qua. Chủ nghĩa biểu hiện cực đoan hóa sức biểu đạt chủ quan, trong khi chủ nghĩa lập thể phá vỡ sự thống nhất phối cảnh. Các tác phẩm Ready-made của Marcel Duchamp từ năm 1913 đặt ra câu hỏi bản thể luận: Điều gì khiến một vật thể trở thành tác phẩm nghệ thuật? Câu hỏi này xuyên suốt toàn bộ nghệ thuật đương đại — từ nghệ thuật ý niệm qua nghệ thuật trình diễn đến nghệ thuật kỹ thuật số và nghệ thuật do AI tạo ra. Joseph Beuys mở rộng khái niệm nghệ thuật sang lĩnh vực xã hội với công thức 'Mỗi người đều là nghệ sĩ', trong khi chủ nghĩa hậu hiện đại đặt câu hỏi về mọi thứ bậc giữa văn hóa cao cấp và đại chúng.",
      },
      {
        type: "vocabulary",
        titleDe: "Kunstgeschichtliche Fachbegriffe",
        titleVi: "Thuật ngữ chuyên ngành lịch sử nghệ thuật",
        words: [
          { de: "der Impressionismus", vi: "chủ nghĩa ấn tượng" },
          { de: "der Expressionismus", vi: "chủ nghĩa biểu hiện" },
          { de: "der Kubismus", vi: "chủ nghĩa lập thể" },
          { de: "das Ready-made", vi: "vật phẩm sẵn có (nghệ thuật Duchamp)" },
          { de: "die Konzeptkunst", vi: "nghệ thuật ý niệm" },
          { de: "die Performance-Kunst", vi: "nghệ thuật trình diễn" },
          { de: "der Paradigmenwechsel", vi: "sự chuyển đổi mô hình" },
          { de: "die Avantgarde", vi: "tiên phong, tiền vệ" },
          { de: "der erweiterte Kunstbegriff", vi: "khái niệm nghệ thuật mở rộng (Beuys)" },
          { de: "die Rezeptionsästhetik", vi: "mỹ học tiếp nhận" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Diskussion im Museum für zeitgenössische Kunst",
        titleVi: "Thảo luận tại bảo tàng nghệ thuật đương đại",
        lines: [
          {
            speaker: "Kuratorin Dr. Schreiber",
            de: "Vor uns sehen Sie eine Installation, die mithilfe generativer KI erzeugt wurde. Ist das noch Kunst im emphatischen Sinne?",
            vi: "Trước mặt quý vị là một tác phẩm sắp đặt được tạo ra bằng AI sinh tạo. Liệu đây còn là nghệ thuật theo nghĩa mạnh?",
          },
          {
            speaker: "Duc",
            de: "Wenn wir Duchamps Ready-made als Kunst akzeptieren, dann verschiebt sich die Frage von der Produktion zur Intention und zum institutionellen Rahmen. Entscheidend wäre demnach nicht, wer oder was das Werk erzeugt hat, sondern in welchem Kontext es als Kunst rezipiert wird.",
            vi: "Nếu chúng ta chấp nhận Ready-made của Duchamp là nghệ thuật, thì câu hỏi chuyển từ sản xuất sang ý định và khuôn khổ thể chế. Theo đó, điều quyết định không phải là ai hoặc cái gì tạo ra tác phẩm, mà là trong bối cảnh nào nó được tiếp nhận như nghệ thuật.",
          },
          {
            speaker: "Kuratorin Dr. Schreiber",
            de: "Ein institutionalistisches Argument. Aber reicht der institutionelle Rahmen allein aus?",
            vi: "Một lập luận theo chủ nghĩa thể chế. Nhưng liệu khuôn khổ thể chế đơn thuần có đủ không?",
          },
          {
            speaker: "Duc",
            de: "Wahrscheinlich nicht. Adorno würde einwenden, dass dem KI-generierten Werk das Moment des subjektiven Leidens fehle — jene Spannung zwischen dem Individuum und der Gesellschaft, die für ihn den Wahrheitsgehalt authentischer Kunst ausmacht.",
            vi: "Có lẽ không. Adorno sẽ phản đối rằng tác phẩm do AI tạo thiếu khoảnh khắc đau khổ chủ quan — sự căng thẳng giữa cá nhân và xã hội, điều mà đối với ông tạo nên hàm lượng chân lý của nghệ thuật đích thực.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Kunstkritische Stellungnahme",
        titleVi: "Bài tập: Bài phê bình nghệ thuật",
        instruction:
          "Wählen Sie ein zeitgenössisches Kunstwerk (Installation, Performance, digitale Kunst o. Ä.) und verfassen Sie eine kunstkritische Stellungnahme (ca. 500 Wörter). Berücksichtigen Sie dabei: 1) Beschreibung und Kontextualisierung des Werks, 2) ästhetische Analyse unter Bezugnahme auf mindestens eine der behandelten Theorien, 3) Ihre eigene begründete Bewertung.",
        instructionVi:
          "Chọn một tác phẩm nghệ thuật đương đại (sắp đặt, trình diễn, nghệ thuật số v.v.) và viết một bài phê bình nghệ thuật (khoảng 500 từ). Lưu ý: 1) Mô tả và bối cảnh hóa tác phẩm, 2) Phân tích thẩm mỹ có tham chiếu đến ít nhất một lý thuyết đã học, 3) Đánh giá có lập luận của riêng bạn.",
      },
    ],
  },

  // --- Kapitel 4, Lektion 3 ---
  {
    id: "c2-ch4-l3",
    chapterId: 4,
    lessonNumber: 3,
    title: "Kunstkritik schreiben",
    titleVi: "Viết phê bình nghệ thuật",
    type: "Fertigkeit",
    objectives: [
      "Nắm vững cấu trúc và phong cách của bài phê bình nghệ thuật chuyên nghiệp",
      "Sử dụng các chiến lược lập luận phức tạp trong văn bản phê bình",
      "Phân biệt giữa mô tả, phân tích và đánh giá trong phê bình nghệ thuật",
      "Viết bài phê bình nghệ thuật đạt chuẩn xuất bản",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Aufbau und Rhetorik der professionellen Kunstkritik",
        titleVi: "Cấu trúc và tu từ của phê bình nghệ thuật chuyên nghiệp",
        textDe:
          "Die professionelle Kunstkritik bewegt sich zwischen objektiver Analyse und subjektiver Bewertung, zwischen Beschreibung und Interpretation. Ein gelungener kunstkritischer Text folgt einer klaren Struktur: Zunächst wird das Werk präzise beschrieben (Ekphrasis), dann in seinen kunst- und kulturhistorischen Kontext eingeordnet, anschließend analytisch durchdrungen und schließlich bewertet. Die Sprache der Kunstkritik zeichnet sich durch ein hohes Maß an Differenziertheit aus: Nuancierte Adjektive, präzise Fachterminologie und eine argumentative Klarheit, die das Subjektive der ästhetischen Erfahrung intersubjektiv nachvollziehbar macht. Dabei gilt es, den Feuilleton-Stil zu beherrschen — jene Mischung aus intellektueller Schärfe, stilistischer Eleganz und kultureller Belesenheit, die das deutschsprachige Feuilleton seit dem 19. Jahrhundert prägt.",
        textVi:
          "Phê bình nghệ thuật chuyên nghiệp di chuyển giữa phân tích khách quan và đánh giá chủ quan, giữa mô tả và diễn giải. Một bài phê bình nghệ thuật thành công tuân theo cấu trúc rõ ràng: Đầu tiên tác phẩm được mô tả chính xác (Ekphrasis), sau đó được đặt vào bối cảnh lịch sử nghệ thuật và văn hóa, tiếp theo được phân tích sâu và cuối cùng được đánh giá. Ngôn ngữ phê bình nghệ thuật nổi bật bởi mức độ tinh tế cao: tính từ có sắc thái, thuật ngữ chuyên ngành chính xác và sự rõ ràng trong lập luận, giúp trải nghiệm thẩm mỹ chủ quan trở nên có thể hiểu được giữa các chủ thể. Cần phải nắm vững phong cách feuilleton — sự kết hợp giữa sự sắc bén trí tuệ, sự thanh lịch phong cách và sự uyên bác văn hóa, đặc trưng của feuilleton tiếng Đức từ thế kỷ 19.",
      },
      {
        type: "vocabulary",
        titleDe: "Sprache der Kunstkritik",
        titleVi: "Ngôn ngữ phê bình nghệ thuật",
        words: [
          { de: "die Ekphrasis", vi: "mô tả nghệ thuật bằng ngôn từ" },
          { de: "das Feuilleton", vi: "mục văn hóa nghệ thuật (báo chí)" },
          { de: "die ästhetische Erfahrung", vi: "trải nghiệm thẩm mỹ" },
          { de: "die Kontextualisierung", vi: "sự bối cảnh hóa" },
          { de: "die Werkanalyse", vi: "phân tích tác phẩm" },
          { de: "der Deutungshorizont", vi: "chân trời diễn giải" },
          { de: "die Bildsprache", vi: "ngôn ngữ hình ảnh" },
          { de: "die Komposition", vi: "bố cục" },
          { de: "das Kolorit", vi: "sắc thái màu sắc" },
          { de: "die Aussagekraft", vi: "sức biểu đạt, tính thuyết phục" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Workshop: Kunstkritik verfassen",
        titleVi: "Hội thảo thực hành: Viết phê bình nghệ thuật",
        lines: [
          {
            speaker: "Dozentin Krüger",
            de: "Lesen wir diese Kritik aus der FAZ. Was macht sie stilistisch gelungen?",
            vi: "Hãy đọc bài phê bình này từ tờ FAZ. Điều gì làm cho nó thành công về mặt phong cách?",
          },
          {
            speaker: "Linh",
            de: "Der Autor beginnt mit einer provokanten These, die er dann systematisch entfaltet. Bemerkenswert ist die Verschränkung von präziser Werkbeschreibung und theoretischer Reflexion — beides durchdringt einander, ohne dass die Lesbarkeit darunter leidet.",
            vi: "Tác giả bắt đầu bằng một luận đề khiêu khích, sau đó triển khai có hệ thống. Đáng chú ý là sự đan xen giữa mô tả tác phẩm chính xác và suy tư lý thuyết — cả hai thẩm thấu vào nhau mà không làm giảm tính dễ đọc.",
          },
          {
            speaker: "Dozentin Krüger",
            de: "Und welche sprachlichen Mittel setzt er besonders wirkungsvoll ein?",
            vi: "Và tác giả sử dụng những phương tiện ngôn ngữ nào một cách hiệu quả nhất?",
          },
          {
            speaker: "Linh",
            de: "Auffällig sind die Oxymorona — 'stille Gewalt', 'sanfte Radikalität' — die die Ambivalenz des Werks sprachlich spiegeln. Zudem verwendet er eine parataktische Struktur in den beschreibenden Passagen, die dem Text eine gewisse Dringlichkeit verleiht, während die analytischen Abschnitte durch komplexe Hypotaxen geprägt sind.",
            vi: "Nổi bật là các nghịch hợp — 'bạo lực im lặng', 'sự cấp tiến nhẹ nhàng' — phản ánh bằng ngôn ngữ sự mâu thuẫn của tác phẩm. Ngoài ra, tác giả sử dụng cấu trúc đẳng lập trong các đoạn mô tả, tạo cho văn bản một sự cấp bách nhất định, trong khi các phần phân tích được đặc trưng bởi các câu phụ thuộc phức tạp.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Eigene Kunstkritik im Feuilleton-Stil",
        titleVi: "Bài tập: Viết bài phê bình nghệ thuật theo phong cách feuilleton",
        instruction:
          "Verfassen Sie eine Kunstkritik im Feuilleton-Stil (ca. 600 Wörter) über eine aktuelle Ausstellung oder ein einzelnes Kunstwerk. Achten Sie auf: 1) Einen packenden Einstieg (provokante These, szenische Beschreibung o. Ä.), 2) Eine gelungene Verschränkung von Ekphrasis und Analyse, 3) Mindestens drei kunsttheoretische Fachbegriffe, die organisch eingebettet sind, 4) Ein pointiertes Urteil am Schluss.",
        instructionVi:
          "Viết một bài phê bình nghệ thuật theo phong cách feuilleton (khoảng 600 từ) về một triển lãm hiện tại hoặc một tác phẩm nghệ thuật riêng lẻ. Chú ý: 1) Phần mở đầu hấp dẫn (luận đề khiêu khích, mô tả cảnh v.v.), 2) Sự kết hợp thành công giữa ekphrasis và phân tích, 3) Ít nhất ba thuật ngữ lý thuyết nghệ thuật được lồng ghép tự nhiên, 4) Một đánh giá sắc sảo ở phần kết.",
      },
    ],
  },

  // --- Kapitel 4, Lektion 4 ---
  {
    id: "c2-ch4-l4",
    chapterId: 4,
    lessonNumber: 4,
    title: "Archaische & literarische Formen",
    titleVi: "Các hình thức cổ xưa & văn chương",
    type: "Fertigkeit",
    objectives: [
      "Nhận biết và hiểu các hình thức ngôn ngữ cổ xưa trong văn học Đức",
      "Phân tích cách sử dụng ngôn ngữ văn chương cao cấp (gehobener Stil)",
      "Hiểu các cấu trúc ngữ pháp lỗi thời và sự tiến hóa ngôn ngữ",
      "Áp dụng phong cách văn chương vào bài viết sáng tạo",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Archaismen, gehobene Sprache und literarische Stilmittel",
        titleVi: "Từ cổ, ngôn ngữ trang trọng và phương tiện phong cách văn chương",
        textDe:
          "Die deutsche Literatursprache verfügt über ein reiches Repertoire archaischer und gehobener Formen, die in der Alltagssprache nicht mehr gebräuchlich sind, aber in literarischen Texten, Lyrik und feierlichen Kontexten fortleben. Dazu gehören der Konjunktiv I in seiner vollen Formenpracht ('er gehe', 'sie komme'), das Genitivobjekt ('des Todes harren'), vorangestellte Genitivattribute ('des Vaters Haus'), die Inversion zu stilistischen Zwecken ('Dunkel war's, der Mond schien helle') sowie archaische Pronomen und Verbformen ('ward' statt 'wurde', 'dünken' statt 'scheinen'). Die Kenntnis dieser Formen ist für das Verständnis der deutschsprachigen Literatur von Goethe bis Celan unerlässlich. Darüber hinaus begegnen sie dem Lernenden in juristischen Texten, religiösen Formeln und diplomatischer Korrespondenz.",
        textVi:
          "Ngôn ngữ văn học Đức sở hữu một kho tàng phong phú các hình thức cổ xưa và trang trọng, không còn được dùng trong ngôn ngữ hàng ngày nhưng vẫn tồn tại trong văn bản văn học, thơ ca và các ngữ cảnh trang nghiêm. Bao gồm: Konjunktiv I đầy đủ ('er gehe', 'sie komme'), tân ngữ sở hữu cách ('des Todes harren' — chờ đợi cái chết), bổ ngữ sở hữu cách đứng trước ('des Vaters Haus' — ngôi nhà của cha), đảo ngữ cho mục đích phong cách ('Dunkel war's, der Mond schien helle') cũng như đại từ và dạng động từ cổ ('ward' thay vì 'wurde', 'dünken' thay vì 'scheinen'). Việc biết các hình thức này là không thể thiếu để hiểu văn học tiếng Đức từ Goethe đến Celan. Ngoài ra, người học còn gặp chúng trong văn bản pháp luật, công thức tôn giáo và thư tín ngoại giao.",
      },
      {
        type: "vocabulary",
        titleDe: "Archaische und literarische Ausdrücke",
        titleVi: "Các biểu đạt cổ xưa và văn chương",
        words: [
          { de: "ward (wurde)", vi: "đã trở thành (dạng cổ)" },
          { de: "dünken (scheinen)", vi: "có vẻ như (cổ/văn chương)" },
          { de: "das Antlitz (das Gesicht)", vi: "dung nhan, gương mặt (trang trọng)" },
          { de: "harren (warten)", vi: "chờ đợi (văn chương)" },
          { de: "das Gemach (das Zimmer)", vi: "phòng, buồng (cổ)" },
          { de: "fürwahr (wirklich)", vi: "thật vậy (cổ/trang trọng)" },
          { de: "alsdann (dann)", vi: "khi đó (cổ)" },
          { de: "ob (über, wegen — veraltet)", vi: "vì, về (cổ, thường dùng trong thơ)" },
          { de: "die Mär / die Kunde (die Nachricht)", vi: "tin tức, câu chuyện (cổ/văn chương)" },
          { de: "sich erdreisten (sich trauen)", vi: "dám làm (trang trọng/cổ)" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Literarische Textanalyse: Archaismen bei Goethe und Celan",
        titleVi: "Phân tích văn bản văn học: Từ cổ trong Goethe và Celan",
        lines: [
          {
            speaker: "Prof. Richter",
            de: "Betrachten wir Goethes Vers: 'Über allen Gipfeln ist Ruh'. Welche sprachlichen Besonderheiten fallen Ihnen auf?",
            vi: "Hãy xem xét câu thơ của Goethe: 'Über allen Gipfeln ist Ruh'. Bạn nhận thấy những đặc điểm ngôn ngữ nào?",
          },
          {
            speaker: "Hanh",
            de: "Zunächst die Apokope bei 'Ruh' statt 'Ruhe' — ein typisches Mittel der Verssprache, das hier metrisch bedingt ist. Dann die Inversion: Das Subjekt 'Ruh' steht am Satzende, wodurch es besonderes Gewicht erhält. Die Schlichtheit der Sprache — ausschließlich einsilbige Wörter bis auf 'Gipfeln' — verstärkt die Stimmung der Stille.",
            vi: "Trước hết là hiện tượng rụng nguyên âm cuối ở 'Ruh' thay vì 'Ruhe' — một phương tiện đặc trưng của ngôn ngữ thơ, ở đây do nhịp thơ quy định. Sau đó là đảo ngữ: chủ ngữ 'Ruh' đứng cuối câu, nhờ đó được nhấn mạnh đặc biệt. Sự giản dị của ngôn ngữ — toàn bộ là từ đơn âm tiết ngoại trừ 'Gipfeln' — tăng cường bầu không khí tĩnh lặng.",
          },
          {
            speaker: "Prof. Richter",
            de: "Exzellent. Und wie unterscheidet sich Celans Umgang mit archaischen Elementen?",
            vi: "Xuất sắc. Và cách Celan sử dụng các yếu tố cổ xưa khác như thế nào?",
          },
          {
            speaker: "Hanh",
            de: "Celan bricht die archaischen Formen auf und verfremdert sie. Er verwendet etwa das Wort 'Angesicht' oder 'Asche', die eine biblisch-archaische Konnotation tragen, setzt sie aber in radikal moderne Kontexte. Dadurch entsteht eine Spannung zwischen der Tradition der Sprache und dem Unsagbaren der Shoah — die Sprache selbst wird zum Zeugnis des Bruches.",
            vi: "Celan phá vỡ các hình thức cổ xưa và lạ hóa chúng. Ông sử dụng những từ như 'Angesicht' (dung nhan) hay 'Asche' (tro tàn), mang hàm ý cổ xưa-kinh thánh, nhưng đặt chúng vào bối cảnh hiện đại cấp tiến. Qua đó tạo ra sự căng thẳng giữa truyền thống ngôn ngữ và cái không thể nói của Shoah — bản thân ngôn ngữ trở thành bằng chứng của sự đứt gãy.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Kreatives Schreiben mit archaischen Elementen",
        titleVi: "Bài tập: Viết sáng tạo với các yếu tố cổ xưa",
        instruction:
          "1) Verfassen Sie ein kurzes Prosagedicht (ca. 150 Wörter) im gehobenen Stil, in dem Sie mindestens fünf archaische oder literarische Formen verwenden. 2) Schreiben Sie eine 'Übersetzung' desselben Textes in zeitgenössisches Deutsch. 3) Analysieren Sie in einem kurzen Kommentar (ca. 200 Wörter), wie sich Tonfall, Rhythmus und Bedeutungsnuancen durch die 'Modernisierung' verändern.",
        instructionVi:
          "1) Viết một bài thơ văn xuôi ngắn (khoảng 150 từ) theo phong cách trang trọng, sử dụng ít nhất năm hình thức cổ xưa hoặc văn chương. 2) Viết một bản 'dịch' cùng văn bản sang tiếng Đức đương đại. 3) Phân tích trong một bình luận ngắn (khoảng 200 từ) cách giọng điệu, nhịp điệu và sắc thái ý nghĩa thay đổi qua việc 'hiện đại hóa'.",
      },
    ],
  },

  // =====================================================================
  // KAPITEL 5: Rechtsphilosophie & Menschenrechte
  // =====================================================================

  // --- Kapitel 5, Lektion 1 ---
  {
    id: "c2-ch5-l1",
    chapterId: 5,
    lessonNumber: 1,
    title: "Naturrecht vs. Rechtspositivismus",
    titleVi: "Luật tự nhiên vs. Thực chứng pháp lý",
    type: "Einführung",
    objectives: [
      "Hiểu và so sánh hai truyền thống lớn trong triết học pháp quyền",
      "Phân tích các luận điểm của luật tự nhiên (Naturrecht) và thực chứng pháp lý (Rechtspositivismus)",
      "Thảo luận về 'Công thức Radbruch' và vấn đề luật bất công",
      "Sử dụng từ vựng triết học pháp quyền ở trình độ C2",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Naturrecht und Rechtspositivismus — ein Grundlagenstreit der Rechtsphilosophie",
        titleVi: "Luật tự nhiên và thực chứng pháp lý — tranh luận nền tảng của triết học pháp quyền",
        textDe:
          "Die Frage, ob das Recht an überpositiven Maßstäben — an Gerechtigkeit, Vernunft oder Natur — gemessen werden muss oder ob es allein auf seine korrekte Setzung ankommt, durchzieht die gesamte abendländische Rechtsphilosophie. Das Naturrecht (von Thomas von Aquin über Hugo Grotius bis zu John Locke) postuliert, dass es dem positiven Recht vorgelagerte, universelle Rechtsprinzipien gibt, die unabhängig von menschlicher Setzung gelten. Der Rechtspositivismus (Hans Kelsen, H.L.A. Hart) behauptet hingegen, dass Recht ausschließlich durch seine ordnungsgemäße Setzung legitimiert wird — Recht ist, was als Recht gesetzt ist. Gustav Radbruch formulierte nach dem Zweiten Weltkrieg die berühmte 'Radbruchsche Formel': Wenn ein Gesetz so unerträglich ungerecht ist, dass es den Anspruch auf Geltung als Recht verliert, ist es kein Recht. Diese Formel spielt bis heute in der Aufarbeitung von Unrechtsregimen eine zentrale Rolle.",
        textVi:
          "Câu hỏi liệu pháp luật phải được đo lường bằng các tiêu chuẩn siêu thực định — bằng công lý, lý trí hay tự nhiên — hay chỉ cần dựa vào việc ban hành đúng quy trình, xuyên suốt toàn bộ triết học pháp quyền phương Tây. Luật tự nhiên (từ Thomas Aquinas qua Hugo Grotius đến John Locke) đặt ra rằng có những nguyên tắc pháp lý phổ quát, tồn tại trước luật thực định và có hiệu lực độc lập với sự ban hành của con người. Thực chứng pháp lý (Hans Kelsen, H.L.A. Hart) ngược lại khẳng định rằng pháp luật chỉ được hợp pháp hóa thông qua việc ban hành đúng quy trình — luật là cái được ban hành thành luật. Gustav Radbruch đã đưa ra 'Công thức Radbruch' nổi tiếng sau Thế chiến II: Khi một đạo luật bất công đến mức không thể chấp nhận được, nó mất đi quyền hiệu lực với tư cách là luật. Công thức này đóng vai trò trung tâm cho đến ngày nay trong việc xử lý các chế độ bất công.",
      },
      {
        type: "vocabulary",
        titleDe: "Rechtsphilosophische Grundbegriffe",
        titleVi: "Các khái niệm cơ bản triết học pháp quyền",
        words: [
          { de: "das Naturrecht", vi: "luật tự nhiên" },
          { de: "der Rechtspositivismus", vi: "thực chứng pháp lý" },
          { de: "die Radbruchsche Formel", vi: "Công thức Radbruch" },
          { de: "das positive Recht", vi: "luật thực định" },
          { de: "die Geltung", vi: "hiệu lực (pháp lý)" },
          { de: "die Setzung", vi: "sự ban hành, sự thiết lập" },
          { de: "das Unrechtsregime", vi: "chế độ bất công" },
          { de: "der überpositive Maßstab", vi: "tiêu chuẩn siêu thực định" },
          { de: "die Rechtmäßigkeit", vi: "tính hợp pháp" },
          { de: "die Gesetzgebung", vi: "việc lập pháp" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Rechtsphilosophisches Seminar: Naturrecht oder Positivismus?",
        titleVi: "Hội thảo triết học pháp quyền: Luật tự nhiên hay thực chứng?",
        lines: [
          {
            speaker: "Prof. Müller",
            de: "Die Radbruchsche Formel wurde bei der Aufarbeitung des DDR-Unrechts angewandt — insbesondere bei den Mauerschützenprozessen. War das rechtsphilosophisch überzeugend, Herr Pham?",
            vi: "Công thức Radbruch đã được áp dụng trong việc xử lý bất công của DDR — đặc biệt trong các phiên tòa xử lính bắn ở Bức tường Berlin. Điều đó có thuyết phục về mặt triết học pháp quyền không, anh Phạm?",
          },
          {
            speaker: "Minh",
            de: "Aus naturrechtlicher Perspektive durchaus: Die Mauerschützen beriefen sich zwar auf geltendes DDR-Recht, doch das Tötungsgebot an der Grenze verletzte fundamentale Menschenrechte so eklatant, dass es nach der Radbruchschen Formel kein Recht sein konnte. Die Rechtspositivisten hingegen sehen darin ein Problem der Rückwirkung.",
            vi: "Từ góc nhìn luật tự nhiên, hoàn toàn thuyết phục: Lính bắn ở bức tường tuy viện dẫn luật DDR đang có hiệu lực, nhưng lệnh bắn ở biên giới vi phạm quyền con người cơ bản nghiêm trọng đến mức theo Công thức Radbruch nó không thể là luật. Những người theo thực chứng pháp lý ngược lại thấy đây là vấn đề hồi tố.",
          },
          {
            speaker: "Prof. Müller",
            de: "Und wie beurteilen Sie dies vor dem Hintergrund des vietnamesischen Rechtssystems?",
            vi: "Và anh đánh giá điều này như thế nào trước bối cảnh hệ thống pháp luật Việt Nam?",
          },
          {
            speaker: "Minh",
            de: "Vietnam folgt einer sozialistischen Rechtstradition, die formal positivistisch ist, aber gleichzeitig moralische Prinzipien — etwa soziale Gerechtigkeit — als legitimierend erachtet. Es handelt sich um eine hybride Position, die weder dem reinen Naturrecht noch dem strengen Positivismus entspricht.",
            vi: "Việt Nam theo truyền thống pháp luật xã hội chủ nghĩa, về hình thức là thực chứng nhưng đồng thời coi các nguyên tắc đạo đức — chẳng hạn công bằng xã hội — là yếu tố hợp pháp hóa. Đây là một vị trí lai, không tương ứng với luật tự nhiên thuần túy cũng như thực chứng pháp lý nghiêm ngặt.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Stellungnahme zur Radbruchschen Formel",
        titleVi: "Bài tập: Phát biểu quan điểm về Công thức Radbruch",
        instruction:
          "Verfassen Sie eine akademische Stellungnahme (ca. 500 Wörter) zur Radbruchschen Formel. Erörtern Sie: 1) Unter welchen Umständen verliert ein Gesetz seine Geltung als Recht? 2) Ist die Formel ein notwendiges Korrektiv zum Rechtspositivismus oder ein gefährlicher Einfallstor für subjektive Gerechtigkeitsvorstellungen? 3) Nennen Sie ein historisches oder aktuelles Beispiel, auf das die Formel angewandt werden könnte.",
        instructionVi:
          "Viết một bài phát biểu quan điểm học thuật (khoảng 500 từ) về Công thức Radbruch. Thảo luận: 1) Trong hoàn cảnh nào một đạo luật mất hiệu lực với tư cách là luật? 2) Công thức này là một sự điều chỉnh cần thiết cho thực chứng pháp lý hay là một cánh cửa nguy hiểm cho các quan niệm công lý chủ quan? 3) Nêu một ví dụ lịch sử hoặc hiện tại mà công thức có thể được áp dụng.",
      },
    ],
  },

  // --- Kapitel 5, Lektion 2 ---
  {
    id: "c2-ch5-l2",
    chapterId: 5,
    lessonNumber: 2,
    title: "Menschenrechte & Völkerrecht",
    titleVi: "Nhân quyền & Luật quốc tế",
    type: "Einführung",
    objectives: [
      "Hiểu hệ thống nhân quyền quốc tế và cơ sở triết học của nó",
      "Phân tích các văn kiện nhân quyền quan trọng bằng tiếng Đức",
      "Thảo luận về tính phổ quát và tính tương đối văn hóa của nhân quyền",
      "Sử dụng ngôn ngữ pháp lý quốc tế ở trình độ C2",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Menschenrechte im Spannungsfeld von Universalismus und Kulturrelativismus",
        titleVi: "Nhân quyền trong trường căng thẳng giữa chủ nghĩa phổ quát và tương đối văn hóa",
        textDe:
          "Die Allgemeine Erklärung der Menschenrechte (1948) proklamiert universelle, unveräußerliche und unteilbare Rechte, die jedem Menschen kraft seiner Menschenwürde zukommen. Das Grundgesetz der Bundesrepublik Deutschland verankert in Artikel 1: 'Die Würde des Menschen ist unantastbar.' Doch die Universalität der Menschenrechte ist philosophisch und politisch umstritten. Vertreter des Kulturrelativismus — etwa in der 'Asian Values'-Debatte — argumentieren, dass Menschenrechte ein westliches Konstrukt seien und die kollektivistischen Wertvorstellungen anderer Kulturen nicht angemessen berücksichtigten. Im Völkerrecht hat sich ein differenzierter Ansatz durchgesetzt: Während die Menschenrechte als universelle Normen anerkannt werden, wird zugleich die kulturelle Vielfalt bei ihrer Interpretation berücksichtigt. Die sogenannten drei Generationen der Menschenrechte umfassen: bürgerlich-politische Rechte (1. Generation), wirtschaftlich-soziale Rechte (2. Generation) und kollektive Rechte wie das Recht auf Entwicklung (3. Generation).",
        textVi:
          "Tuyên ngôn Nhân quyền Phổ quát (1948) công bố các quyền phổ quát, không thể chuyển nhượng và không thể phân chia, thuộc về mỗi con người nhờ phẩm giá con người. Hiến pháp CHLB Đức ghi nhận tại Điều 1: 'Phẩm giá con người là bất khả xâm phạm.' Tuy nhiên, tính phổ quát của nhân quyền còn gây tranh cãi về triết học và chính trị. Người ủng hộ chủ nghĩa tương đối văn hóa — ví dụ trong cuộc tranh luận 'Giá trị châu Á' — lập luận rằng nhân quyền là một sản phẩm phương Tây và không tính đến đầy đủ các giá trị tập thể của các nền văn hóa khác. Trong luật quốc tế, một cách tiếp cận phân biệt đã chiếm ưu thế: Trong khi nhân quyền được công nhận là chuẩn mực phổ quát, sự đa dạng văn hóa cũng được xem xét trong việc diễn giải. Ba thế hệ nhân quyền bao gồm: quyền dân sự-chính trị (thế hệ 1), quyền kinh tế-xã hội (thế hệ 2) và quyền tập thể như quyền phát triển (thế hệ 3).",
      },
      {
        type: "vocabulary",
        titleDe: "Völkerrechtlicher Fachwortschatz",
        titleVi: "Từ vựng chuyên ngành luật quốc tế",
        words: [
          { de: "die Allgemeine Erklärung der Menschenrechte", vi: "Tuyên ngôn Nhân quyền Phổ quát" },
          { de: "die Menschenwürde", vi: "phẩm giá con người" },
          { de: "unveräußerlich", vi: "không thể chuyển nhượng" },
          { de: "unteilbar", vi: "không thể phân chia" },
          { de: "das Völkerrecht", vi: "luật quốc tế" },
          { de: "der Universalismus", vi: "chủ nghĩa phổ quát" },
          { de: "der Kulturrelativismus", vi: "chủ nghĩa tương đối văn hóa" },
          { de: "die Souveränität", vi: "chủ quyền" },
          { de: "das humanitäre Völkerrecht", vi: "luật nhân đạo quốc tế" },
          { de: "die Staatenverantwortlichkeit", vi: "trách nhiệm quốc gia" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Podiumsdiskussion: Universalität der Menschenrechte",
        titleVi: "Thảo luận hội đồng: Tính phổ quát của nhân quyền",
        lines: [
          {
            speaker: "Moderator",
            de: "Die 'Asian Values'-Debatte der 1990er Jahre stellte die Universalität der Menschenrechte infrage. Frau Le, wie beurteilen Sie diese Debatte aus heutiger Sicht?",
            vi: "Cuộc tranh luận 'Giá trị châu Á' những năm 1990 đặt câu hỏi về tính phổ quát của nhân quyền. Chị Lê, chị đánh giá cuộc tranh luận này từ góc nhìn ngày nay như thế nào?",
          },
          {
            speaker: "Thao",
            de: "Die Debatte war politisch instrumentalisiert — autoritäre Regierungen nutzten den Kulturrelativismus, um Menschenrechtsverletzungen zu rechtfertigen. Gleichwohl enthält sie einen berechtigten Kern: Die Umsetzung von Menschenrechten muss kulturelle Kontexte berücksichtigen, ohne den universellen Anspruch aufzugeben.",
            vi: "Cuộc tranh luận đã bị lợi dụng chính trị — các chính phủ độc đoán sử dụng chủ nghĩa tương đối văn hóa để biện minh cho vi phạm nhân quyền. Tuy nhiên, nó chứa một hạt nhân chính đáng: Việc thực hiện nhân quyền phải xem xét bối cảnh văn hóa mà không từ bỏ tính phổ quát.",
          },
          {
            speaker: "Moderator",
            de: "Und wie lässt sich dieser Spagat praktisch bewerkstelligen?",
            vi: "Và làm thế nào để thực hiện sự cân bằng này trên thực tế?",
          },
          {
            speaker: "Thao",
            de: "Durch einen dialogischen Universalismus: Die Menschenrechte werden als transkultureller Konsens verstanden, der durch interkulturellen Dialog stetig weiterentwickelt wird. So hat beispielsweise die vietnamesische Verfassung von 2013 einen umfassenden Menschenrechtskatalog aufgenommen — ein Zeichen dafür, dass Menschenrechte keineswegs als rein westlich empfunden werden, sondern als universelles Anliegen.",
            vi: "Thông qua chủ nghĩa phổ quát đối thoại: Nhân quyền được hiểu như sự đồng thuận xuyên văn hóa, được phát triển liên tục thông qua đối thoại liên văn hóa. Ví dụ, Hiến pháp Việt Nam 2013 đã đưa vào một danh mục nhân quyền toàn diện — dấu hiệu cho thấy nhân quyền hoàn toàn không bị coi là thuần phương Tây, mà là mối quan tâm phổ quát.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Analyse eines Menschenrechtsdokuments",
        titleVi: "Bài tập: Phân tích một văn kiện nhân quyền",
        instruction:
          "Analysieren Sie Artikel 1 des Grundgesetzes ('Die Würde des Menschen ist unantastbar') aus rechtsphilosophischer Perspektive (ca. 500 Wörter). Erörtern Sie: 1) Welche naturrechtlichen und positivistischen Elemente enthält dieser Artikel? 2) Wie verhält sich der deutsche Würdebegriff zu den Menschenrechten im Völkerrecht? 3) Vergleichen Sie den Menschenrechtskatalog des Grundgesetzes mit dem der vietnamesischen Verfassung von 2013.",
        instructionVi:
          "Phân tích Điều 1 Hiến pháp Đức ('Phẩm giá con người là bất khả xâm phạm') từ góc nhìn triết học pháp quyền (khoảng 500 từ). Thảo luận: 1) Điều khoản này chứa những yếu tố luật tự nhiên và thực chứng nào? 2) Khái niệm phẩm giá của Đức quan hệ thế nào với nhân quyền trong luật quốc tế? 3) So sánh danh mục nhân quyền của Hiến pháp Đức với Hiến pháp Việt Nam 2013.",
      },
    ],
  },

  // --- Kapitel 5, Lektion 3 ---
  {
    id: "c2-ch5-l3",
    chapterId: 5,
    lessonNumber: 3,
    title: "Ethische Grundsatzdebatten",
    titleVi: "Các cuộc tranh luận đạo đức cơ bản",
    type: "Fertigkeit",
    objectives: [
      "Tham gia các cuộc tranh luận đạo đức phức tạp bằng tiếng Đức ở trình độ C2",
      "Phân tích các lập trường đạo đức đối lập (nghĩa vụ luận vs. hệ quả luận)",
      "Sử dụng chiến lược lập luận phức tạp trong tranh luận đạo đức-pháp lý",
      "Viết bài luận tranh luận về các vấn đề đạo đức gây tranh cãi",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Deontologie, Konsequentialismus und Tugendethik in der Praxis",
        titleVi: "Nghĩa vụ luận, hệ quả luận và đạo đức đức hạnh trong thực tiễn",
        textDe:
          "Ethische Grundsatzdebatten — etwa über Sterbehilfe, Abtreibung, Todesstrafe oder die Grenzen der KI — erfordern die Fähigkeit, verschiedene ethische Positionen differenziert darzustellen und kritisch abzuwägen. Die drei großen ethischen Traditionen bieten hierfür unterschiedliche Zugänge: Die Deontologie (Kant) beurteilt Handlungen nach ihrer Übereinstimmung mit universalisierbaren Pflichten — unabhängig von den Konsequenzen. Der kategorische Imperativ verlangt: Handle nur nach derjenigen Maxime, durch die du zugleich wollen kannst, dass sie ein allgemeines Gesetz werde. Der Konsequentialismus (Bentham, Mill) bewertet Handlungen ausschließlich nach ihren Folgen — im Utilitarismus nach dem größtmöglichen Glück der größtmöglichen Zahl. Die Tugendethik (Aristoteles) fragt nicht primär nach Regeln oder Folgen, sondern nach dem Charakter: Was für ein Mensch sollte ich sein? In der Praxis greifen diese Positionen häufig ineinander und ergänzen sich.",
        textVi:
          "Các cuộc tranh luận đạo đức cơ bản — ví dụ về trợ tử, phá thai, án tử hình hay giới hạn của AI — đòi hỏi khả năng trình bày phân biệt các lập trường đạo đức khác nhau và cân nhắc phê phán. Ba truyền thống đạo đức lớn cung cấp các cách tiếp cận khác nhau: Nghĩa vụ luận (Kant) đánh giá hành động theo sự phù hợp với các nghĩa vụ có thể phổ quát hóa — không phụ thuộc vào hệ quả. Mệnh lệnh tuyệt đối yêu cầu: Chỉ hành động theo nguyên tắc mà bạn đồng thời có thể muốn nó trở thành luật phổ quát. Hệ quả luận (Bentham, Mill) đánh giá hành động chỉ theo kết quả — trong chủ nghĩa công lợi là hạnh phúc lớn nhất cho số đông lớn nhất. Đạo đức đức hạnh (Aristoteles) không hỏi chủ yếu về quy tắc hay hệ quả, mà về phẩm chất: Tôi nên là người như thế nào? Trong thực tiễn, các lập trường này thường đan xen và bổ sung cho nhau.",
      },
      {
        type: "vocabulary",
        titleDe: "Ethischer Fachwortschatz",
        titleVi: "Từ vựng chuyên ngành đạo đức học",
        words: [
          { de: "die Deontologie", vi: "nghĩa vụ luận" },
          { de: "der Konsequentialismus", vi: "hệ quả luận" },
          { de: "der Utilitarismus", vi: "chủ nghĩa công lợi" },
          { de: "die Tugendethik", vi: "đạo đức đức hạnh" },
          { de: "der kategorische Imperativ", vi: "mệnh lệnh tuyệt đối (Kant)" },
          { de: "die Sterbehilfe", vi: "trợ tử, an tử" },
          { de: "die Menschenwürde", vi: "phẩm giá con người" },
          { de: "die Abwägung", vi: "sự cân nhắc" },
          { de: "das Dilemma", vi: "thế tiến thoái lưỡng nan" },
          { de: "die Selbstbestimmung", vi: "quyền tự quyết" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Ethisches Streitgespräch: Sterbehilfe",
        titleVi: "Tranh luận đạo đức: Trợ tử",
        lines: [
          {
            speaker: "Prof. Wagner",
            de: "Das Bundesverfassungsgericht hat 2020 das Recht auf selbstbestimmtes Sterben anerkannt. Herr Vo, wie bewerten Sie dieses Urteil aus ethischer Perspektive?",
            vi: "Tòa án Hiến pháp Liên bang đã công nhận quyền tự quyết về cái chết vào năm 2020. Anh Võ, anh đánh giá phán quyết này từ góc nhìn đạo đức như thế nào?",
          },
          {
            speaker: "Khoi",
            de: "Aus deontologischer Sicht lässt sich argumentieren, dass die Autonomie des Individuums — das Recht auf Selbstbestimmung — ein kategorischer Wert ist, der nicht durch utilitaristische Erwägungen eingeschränkt werden darf. Andererseits könnte man mit Kant einwenden, dass die Selbsttötung die Menschenwürde in der eigenen Person verletze.",
            vi: "Từ quan điểm nghĩa vụ luận, có thể lập luận rằng tự trị cá nhân — quyền tự quyết — là một giá trị tuyệt đối không được bị hạn chế bởi các cân nhắc công lợi. Mặt khác, theo Kant có thể phản bác rằng tự tử vi phạm phẩm giá con người ở chính bản thân mình.",
          },
          {
            speaker: "Prof. Wagner",
            de: "Ein klassisches Spannungsfeld innerhalb der Deontologie. Wie sieht der konsequentialistische Gegeneinwand aus?",
            vi: "Một trường căng thẳng kinh điển trong nghĩa vụ luận. Phản biện từ hệ quả luận như thế nào?",
          },
          {
            speaker: "Khoi",
            de: "Der Utilitarist würde fragen: Maximiert die Sterbehilfe das Gesamtwohl? Wenn das Leid des Patienten unerträglich und unheilbar ist, könnte die Leidminimierung ethisch geboten sein. Allerdings müsste man die gesellschaftlichen Folgen berücksichtigen — etwa einen möglichen Dammbrucheffekt, bei dem vulnerable Gruppen unter Druck geraten, ihrem Leben ein Ende zu setzen.",
            vi: "Người theo chủ nghĩa công lợi sẽ hỏi: Trợ tử có tối đa hóa phúc lợi tổng thể không? Nếu nỗi đau của bệnh nhân không thể chịu đựng và không thể chữa được, giảm thiểu đau khổ có thể là nghĩa vụ đạo đức. Tuy nhiên, cần xem xét hệ quả xã hội — ví dụ hiệu ứng vỡ đập, khi các nhóm dễ bị tổn thương bị áp lực kết thúc cuộc sống.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Ethische Grundsatzdebatte — Pro und Contra",
        titleVi: "Bài tập: Tranh luận đạo đức cơ bản — Thuận và chống",
        instruction:
          "Wählen Sie eines der folgenden ethischen Themen: a) Sterbehilfe, b) Einsatz autonomer Waffen, c) Gentechnische Eingriffe am menschlichen Embryo. Verfassen Sie einen argumentativen Text (ca. 600 Wörter), in dem Sie: 1) Die deontologische Position darstellen und kritisch bewerten, 2) Die konsequentialistische Position darstellen und kritisch bewerten, 3) Eine eigene, differenzierte Stellungnahme formulieren, die beide Perspektiven berücksichtigt.",
        instructionVi:
          "Chọn một trong các chủ đề đạo đức sau: a) Trợ tử, b) Sử dụng vũ khí tự động, c) Can thiệp gen vào phôi người. Viết một bài tranh luận (khoảng 600 từ) trong đó: 1) Trình bày và đánh giá phê phán lập trường nghĩa vụ luận, 2) Trình bày và đánh giá phê phán lập trường hệ quả luận, 3) Đưa ra quan điểm riêng có sắc thái, xem xét cả hai góc nhìn.",
      },
    ],
  },

  // --- Kapitel 5, Lektion 4 ---
  {
    id: "c2-ch5-l4",
    chapterId: 5,
    lessonNumber: 4,
    title: "Fachsprachliche Syntax",
    titleVi: "Cú pháp ngôn ngữ chuyên ngành",
    type: "Fertigkeit",
    objectives: [
      "Nắm vững các cấu trúc cú pháp đặc trưng của ngôn ngữ pháp lý và học thuật",
      "Phân tích và sử dụng câu ghép phức tạp trong văn bản chuyên ngành",
      "Hiểu và áp dụng danh từ hóa, thể bị động mở rộng và cấu trúc chức năng động từ",
      "Viết văn bản pháp lý và học thuật với cú pháp chính xác ở trình độ C2",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Syntaktische Merkmale der Rechts- und Wissenschaftssprache",
        titleVi: "Đặc điểm cú pháp của ngôn ngữ pháp lý và khoa học",
        textDe:
          "Die Fachsprache des Rechts und der Wissenschaft weist charakteristische syntaktische Merkmale auf, die sie von der Alltagssprache deutlich unterscheiden. Zu den wichtigsten gehören: 1) Nominalstil — die Verdichtung von Sachverhalten durch Nominalisierungen ('die Inkaufnahme des Risikos' statt 'dass man das Risiko in Kauf nimmt'). 2) Funktionsverbgefüge ('in Kraft treten', 'Anwendung finden', 'unter Beweis stellen'). 3) Erweiterte Partizipialattribute ('die vom Gericht in erster Instanz abgewiesene Klage'). 4) Passivkonstruktionen und ihre Alternativen ('Es ist festzustellen, dass...'). 5) Komplexe hypotaktische Strukturen mit mehreren Nebensatzebenen. 6) Präpositionalattribute in Kettung ('die Verordnung des Ministers für die Angelegenheiten der inneren Sicherheit des Landes'). Diese Strukturen dienen der Präzision und Eindeutigkeit, können aber auch zur Unverständlichkeit führen — ein Spannungsfeld, das die juristische Sprachkritik seit Langem beschäftigt.",
        textVi:
          "Ngôn ngữ chuyên ngành pháp lý và khoa học có các đặc điểm cú pháp đặc trưng, phân biệt rõ ràng với ngôn ngữ hàng ngày. Quan trọng nhất bao gồm: 1) Phong cách danh từ — nén tình huống thông qua danh từ hóa ('die Inkaufnahme des Risikos' thay vì 'dass man das Risiko in Kauf nimmt'). 2) Cụm động từ chức năng ('in Kraft treten', 'Anwendung finden', 'unter Beweis stellen'). 3) Thuộc tính phân từ mở rộng ('die vom Gericht in erster Instanz abgewiesene Klage'). 4) Cấu trúc bị động và các lựa chọn thay thế ('Es ist festzustellen, dass...'). 5) Cấu trúc phụ thuộc phức tạp với nhiều cấp độ mệnh đề phụ. 6) Thuộc tính giới từ nối tiếp ('die Verordnung des Ministers für die Angelegenheiten der inneren Sicherheit des Landes'). Các cấu trúc này phục vụ sự chính xác và rõ ràng, nhưng cũng có thể dẫn đến khó hiểu — một trường căng thẳng mà phê bình ngôn ngữ pháp lý đã quan tâm từ lâu.",
      },
      {
        type: "vocabulary",
        titleDe: "Fachsprachliche Konstruktionen und Wendungen",
        titleVi: "Cấu trúc và cụm từ ngôn ngữ chuyên ngành",
        words: [
          { de: "der Nominalstil", vi: "phong cách danh từ" },
          { de: "das Funktionsverbgefüge", vi: "cụm động từ chức năng" },
          { de: "das erweiterte Partizipialattribut", vi: "thuộc tính phân từ mở rộng" },
          { de: "die Nominalisierung", vi: "danh từ hóa" },
          { de: "die Hypotaxe", vi: "câu phụ thuộc (phức)" },
          { de: "die Parataxe", vi: "câu đẳng lập (đơn)" },
          { de: "in Kraft treten", vi: "có hiệu lực" },
          { de: "Anwendung finden", vi: "được áp dụng" },
          { de: "unter Beweis stellen", vi: "chứng minh" },
          { de: "in Abrede stellen", vi: "phủ nhận" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Übung zur Umformung fachsprachlicher Texte",
        titleVi: "Bài tập chuyển đổi văn bản chuyên ngành",
        lines: [
          {
            speaker: "Prof. Fischer",
            de: "Nehmen wir diesen Satz aus einem Gerichtsurteil: 'Die vom Kläger gegen den Bescheid des Beklagten fristgerecht erhobene Anfechtungsklage ist zulässig, aber unbegründet.' Frau Nguyen, können Sie die syntaktische Struktur analysieren?",
            vi: "Hãy lấy câu này từ một phán quyết tòa án: 'Die vom Kläger gegen den Bescheid des Beklagten fristgerecht erhobene Anfechtungsklage ist zulässig, aber unbegründet.' Chị Nguyễn, chị có thể phân tích cấu trúc cú pháp không?",
          },
          {
            speaker: "Lan",
            de: "Das Subjekt ist 'die Anfechtungsklage', modifiziert durch ein erweitertes Partizipialattribut: 'vom Kläger gegen den Bescheid des Beklagten fristgerecht erhobene'. Dieses Attribut enthält seinerseits ein Präpositionalattribut ('gegen den Bescheid des Beklagten') mit einem Genitivattribut ('des Beklagten'). In Alltagssprache aufgelöst: 'Der Kläger hat fristgerecht eine Anfechtungsklage gegen den Bescheid des Beklagten erhoben. Diese Klage ist zulässig, aber unbegründet.'",
            vi: "Chủ ngữ là 'die Anfechtungsklage', được bổ nghĩa bởi thuộc tính phân từ mở rộng: 'vom Kläger gegen den Bescheid des Beklagten fristgerecht erhobene'. Thuộc tính này lại chứa một thuộc tính giới từ ('gegen den Bescheid des Beklagten') với một thuộc tính sở hữu cách ('des Beklagten'). Phân tách sang ngôn ngữ hàng ngày: 'Nguyên đơn đã nộp đơn kiện phản đối đúng hạn đối với quyết định của bị đơn. Đơn kiện này được chấp nhận nhưng không có cơ sở.'",
          },
          {
            speaker: "Prof. Fischer",
            de: "Hervorragend. Und warum bevorzugt die Rechtssprache diese verdichtete Form?",
            vi: "Xuất sắc. Và tại sao ngôn ngữ pháp lý ưu tiên hình thức cô đọng này?",
          },
          {
            speaker: "Lan",
            de: "Zum einen aus Gründen der Präzision: Alle relevanten Informationen werden in einem einzigen Satz gebündelt, was Mehrdeutigkeit minimiert. Zum anderen ist es eine Fachkonvention — der Nominalstil signalisiert Zugehörigkeit zur juristischen Diskursgemeinschaft. Allerdings geht dies oft zulasten der Verständlichkeit für Laien.",
            vi: "Thứ nhất vì lý do chính xác: Tất cả thông tin liên quan được gói gọn trong một câu duy nhất, giảm thiểu sự mơ hồ. Thứ hai là quy ước chuyên ngành — phong cách danh từ phát tín hiệu thuộc cộng đồng diễn ngôn pháp lý. Tuy nhiên, điều này thường gây khó hiểu cho người không chuyên.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Fachsprachliche Transformationen",
        titleVi: "Bài tập: Chuyển đổi ngôn ngữ chuyên ngành",
        instruction:
          "1) Nominalstil → Verbalstil: Formulieren Sie die folgenden Nominalisierungen in Verbalsätze um: a) 'Die Inanspruchnahme des Rechts auf freie Meinungsäußerung', b) 'Die Nichtbeachtung der Vorschriften zur Einhaltung der Meldepflicht', c) 'Die Geltendmachung von Schadensersatzansprüchen'. 2) Verbalstil → Nominalstil: Verdichten Sie die folgenden Sätze in nominalem Stil: a) 'Der Angeklagte hat gestanden, dass er die Tat begangen hat', b) 'Man muss prüfen, ob das Gesetz angewandt werden kann'. 3) Verfassen Sie einen kurzen juristischen Kommentar (ca. 300 Wörter) zu einem fiktiven Rechtsfall, in dem Sie bewusst erweiterte Partizipialattribute, Funktionsverbgefüge und komplexe Hypotaxen einsetzen.",
        instructionVi:
          "1) Phong cách danh từ → Phong cách động từ: Chuyển các danh từ hóa sau thành câu có động từ: a) 'Die Inanspruchnahme des Rechts auf freie Meinungsäußerung', b) 'Die Nichtbeachtung der Vorschriften zur Einhaltung der Meldepflicht', c) 'Die Geltendmachung von Schadensersatzansprüchen'. 2) Phong cách động từ → Phong cách danh từ: Cô đọng các câu sau theo phong cách danh từ: a) 'Der Angeklagte hat gestanden, dass er die Tat begangen hat', b) 'Man muss prüfen, ob das Gesetz angewandt werden kann'. 3) Viết một bình luận pháp lý ngắn (khoảng 300 từ) về một vụ án hư cấu, trong đó bạn có ý thức sử dụng thuộc tính phân từ mở rộng, cụm động từ chức năng và câu phụ thuộc phức tạp.",
      },
    ],
  },
];
