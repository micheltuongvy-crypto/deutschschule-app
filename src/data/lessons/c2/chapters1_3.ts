// C2 German Lessons — Chapters 1–3
// Complete lesson content for Vietnamese learners
// Sprachphilosophie, Geopolitik, Neurowissenschaft

import type { Lesson, ContentBlock } from "../a1/chapters1_3";

export const c2LessonsCh1_3: Lesson[] = [
  // =====================================================================
  // KAPITEL 1: Sprachphilosophie & Semiotik
  // =====================================================================

  // --- Kapitel 1, Lektion 1 ---
  {
    id: "c2-ch1-l1",
    chapterId: 1,
    lessonNumber: 1,
    title: "Sprache & Denken — Die Sapir-Whorf-Hypothese",
    titleVi: "Ngôn ngữ & Tư duy — Giả thuyết Sapir-Whorf",
    type: "Einführung",
    objectives: [
      "Hiểu và phân tích giả thuyết Sapir-Whorf (phiên bản mạnh và yếu)",
      "Thảo luận về mối quan hệ giữa ngôn ngữ, tư duy và thực tại",
      "Sử dụng từ vựng học thuật trong lĩnh vực triết học ngôn ngữ",
      "So sánh cách tiếng Đức và tiếng Việt định hình tư duy khác nhau",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Linguistischer Determinismus und Relativismus",
        titleVi: "Thuyết quyết định luận và tương đối luận ngôn ngữ",
        textDe:
          "Die Sapir-Whorf-Hypothese postuliert, dass die Sprache, die wir sprechen, unser Denken und unsere Wahrnehmung der Welt maßgeblich beeinflusst. In ihrer starken Fassung — dem linguistischen Determinismus — bestimmt Sprache das Denken vollständig; in ihrer schwachen Fassung — dem linguistischen Relativismus — beeinflusst sie es lediglich. Edward Sapir und Benjamin Lee Whorf entwickelten diese Theorie im frühen 20. Jahrhundert, wobei Whorf sich insbesondere auf die Hopi-Sprache stützte. Obwohl die starke Fassung heute weitgehend als widerlegt gilt, findet die schwache Fassung durch neuere empirische Studien (z. B. zur Farbwahrnehmung oder zum Zeitverständnis) durchaus Bestätigung.",
        textVi:
          "Giả thuyết Sapir-Whorf đặt ra luận điểm rằng ngôn ngữ mà chúng ta nói ảnh hưởng đáng kể đến tư duy và nhận thức của chúng ta về thế giới. Ở phiên bản mạnh — thuyết quyết định luận ngôn ngữ — ngôn ngữ quyết định hoàn toàn tư duy; ở phiên bản yếu — thuyết tương đối luận ngôn ngữ — nó chỉ ảnh hưởng đến tư duy. Edward Sapir và Benjamin Lee Whorf phát triển lý thuyết này vào đầu thế kỷ 20, trong đó Whorf đặc biệt dựa vào ngôn ngữ Hopi. Mặc dù phiên bản mạnh ngày nay phần lớn bị bác bỏ, phiên bản yếu vẫn được xác nhận qua các nghiên cứu thực nghiệm gần đây (ví dụ: về nhận thức màu sắc hoặc cách hiểu thời gian).",
      },
      {
        type: "vocabulary",
        titleDe: "Fachbegriffe der Sprachphilosophie",
        titleVi: "Thuật ngữ chuyên ngành triết học ngôn ngữ",
        words: [
          { de: "die Sapir-Whorf-Hypothese", vi: "giả thuyết Sapir-Whorf" },
          { de: "der linguistische Determinismus", vi: "thuyết quyết định luận ngôn ngữ" },
          { de: "der linguistische Relativismus", vi: "thuyết tương đối luận ngôn ngữ" },
          { de: "die Wahrnehmung", vi: "nhận thức, tri giác" },
          { de: "die Weltanschauung", vi: "thế giới quan" },
          { de: "das Sprachsystem", vi: "hệ thống ngôn ngữ" },
          { de: "die Kognition", vi: "nhận thức (quá trình tư duy)" },
          { de: "der Begriffsapparat", vi: "hệ thống khái niệm" },
          { de: "die Denkstruktur", vi: "cấu trúc tư duy" },
          { de: "die Empirie", vi: "thực nghiệm, kinh nghiệm" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Akademische Diskussion im Seminar",
        titleVi: "Thảo luận học thuật trong buổi hội thảo",
        lines: [
          {
            speaker: "Prof. Weber",
            de: "Inwieweit determiniert die Muttersprache unser Denken? Frau Nguyen, Sie als Zweisprachige haben sicherlich eine differenzierte Perspektive.",
            vi: "Ngôn ngữ mẹ đẻ quyết định tư duy của chúng ta đến mức nào? Chị Nguyễn, với tư cách là người song ngữ, chắc chắn chị có một góc nhìn sâu sắc.",
          },
          {
            speaker: "Linh",
            de: "Meiner Erfahrung nach beeinflusst die Sprache sehr wohl mein Denken, ohne es jedoch vollständig zu determinieren. Im Vietnamesischen denke ich beispielsweise anders über Zeitlichkeit als im Deutschen — die fehlende Tempusflexion verlagert den Fokus auf den Kontext.",
            vi: "Theo kinh nghiệm của tôi, ngôn ngữ quả thực ảnh hưởng đến tư duy, nhưng không hoàn toàn quyết định nó. Ví dụ, trong tiếng Việt tôi suy nghĩ khác về tính thời gian so với trong tiếng Đức — việc không có biến đổi thì chuyển trọng tâm sang ngữ cảnh.",
          },
          {
            speaker: "Prof. Weber",
            de: "Ein ausgezeichnetes Beispiel. Damit stützen Sie eher die schwache Fassung der Hypothese.",
            vi: "Một ví dụ xuất sắc. Với điều đó, chị ủng hộ phiên bản yếu của giả thuyết.",
          },
          {
            speaker: "Linh",
            de: "Genau. Ich würde sogar so weit gehen zu behaupten, dass Zweisprachigkeit das kognitive Repertoire erweitert, anstatt es einzuschränken.",
            vi: "Đúng vậy. Tôi thậm chí dám khẳng định rằng tính song ngữ mở rộng kho tàng nhận thức thay vì giới hạn nó.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Essay — Sprache als Denkgefängnis?",
        titleVi: "Bài tập: Luận văn — Ngôn ngữ như nhà tù tư duy?",
        instruction:
          "Verfassen Sie einen argumentativen Essay (ca. 500 Wörter) zur These: 'Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt' (Wittgenstein). Beziehen Sie die Sapir-Whorf-Hypothese ein und illustrieren Sie Ihre Argumentation mit Beispielen aus dem Vietnamesischen und dem Deutschen.",
        instructionVi:
          "Viết một bài luận tranh luận (khoảng 500 từ) về luận đề: 'Giới hạn ngôn ngữ của tôi là giới hạn thế giới của tôi' (Wittgenstein). Hãy đưa giả thuyết Sapir-Whorf vào và minh họa lập luận của bạn bằng các ví dụ từ tiếng Việt và tiếng Đức.",
      },
    ],
  },

  // --- Kapitel 1, Lektion 2 ---
  {
    id: "c2-ch1-l2",
    chapterId: 1,
    lessonNumber: 2,
    title: "Zeichentheorie & Bedeutung",
    titleVi: "Lý thuyết ký hiệu & Ý nghĩa",
    type: "Einführung",
    objectives: [
      "Hiểu mô hình ký hiệu của Saussure (cái biểu đạt / cái được biểu đạt)",
      "Phân tích lý thuyết ký hiệu của Peirce (biểu tượng, chỉ mục, ký hiệu)",
      "Áp dụng các khái niệm ký hiệu học vào phân tích ngôn ngữ",
      "Thảo luận về tính tùy ý của ký hiệu ngôn ngữ",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Ferdinand de Saussure und die strukturalistische Zeichentheorie",
        titleVi: "Ferdinand de Saussure và lý thuyết ký hiệu cấu trúc luận",
        textDe:
          "Ferdinand de Saussure, der als Begründer der modernen Linguistik gilt, unterschied grundlegend zwischen 'Signifikant' (Bezeichnendes, die Lautgestalt) und 'Signifikat' (Bezeichnetes, die Vorstellung). Das sprachliche Zeichen ist für Saussure arbiträr — es besteht kein natürlicher Zusammenhang zwischen dem Wort 'Baum' und dem Konzept eines Baumes. Darüber hinaus betonte Saussure die Differenzialität sprachlicher Zeichen: Ein Zeichen gewinnt seine Bedeutung nicht aus sich selbst, sondern durch seine Unterscheidung von anderen Zeichen im System. Sprache ist demnach ein System von Differenzen.",
        textVi:
          "Ferdinand de Saussure, được coi là cha đẻ của ngôn ngữ học hiện đại, đã phân biệt căn bản giữa 'Signifikant' (cái biểu đạt, hình thức âm thanh) và 'Signifikat' (cái được biểu đạt, khái niệm). Ký hiệu ngôn ngữ đối với Saussure là tùy ý — không có mối liên hệ tự nhiên giữa từ 'Baum' (cây) và khái niệm cái cây. Ngoài ra, Saussure nhấn mạnh tính phân biệt của ký hiệu ngôn ngữ: một ký hiệu có được ý nghĩa không phải từ bản thân nó, mà thông qua sự khác biệt với các ký hiệu khác trong hệ thống. Ngôn ngữ, do đó, là một hệ thống của sự khác biệt.",
      },
      {
        type: "vocabulary",
        titleDe: "Semiotische Grundbegriffe",
        titleVi: "Các khái niệm cơ bản trong ký hiệu học",
        words: [
          { de: "das Zeichen", vi: "ký hiệu" },
          { de: "der Signifikant (das Bezeichnende)", vi: "cái biểu đạt" },
          { de: "das Signifikat (das Bezeichnete)", vi: "cái được biểu đạt" },
          { de: "die Arbitrarität", vi: "tính tùy ý" },
          { de: "die Differenzialität", vi: "tính phân biệt" },
          { de: "die Konvention", vi: "quy ước" },
          { de: "das Ikon", vi: "biểu tượng hình ảnh (ikon)" },
          { de: "der Index", vi: "chỉ mục, dấu hiệu" },
          { de: "das Symbol", vi: "ký hiệu tượng trưng" },
          { de: "die Referenz", vi: "sự quy chiếu" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Diskurs über die Natur sprachlicher Zeichen",
        titleVi: "Diễn ngôn về bản chất của ký hiệu ngôn ngữ",
        lines: [
          {
            speaker: "Dozent",
            de: "Saussure behauptet, das sprachliche Zeichen sei arbiträr. Lässt sich diese These ohne Einschränkung aufrechterhalten?",
            vi: "Saussure khẳng định rằng ký hiệu ngôn ngữ là tùy ý. Liệu luận đề này có thể được duy trì mà không có giới hạn không?",
          },
          {
            speaker: "Tuan",
            de: "Nicht uneingeschränkt. Onomatopoetika wie 'klingeln' oder 'zischen' weisen sehr wohl eine gewisse Ikonizität auf. Im Vietnamesischen ist dies mit Ausdrücken wie 'rào rào' oder 'leng keng' sogar noch deutlicher ausgeprägt.",
            vi: "Không thể hoàn toàn. Các từ tượng thanh như 'klingeln' (reo) hoặc 'zischen' (xì) quả thực thể hiện một mức độ tính hình ảnh nhất định. Trong tiếng Việt, điều này còn rõ ràng hơn với các biểu đạt như 'rào rào' hay 'leng keng'.",
          },
          {
            speaker: "Dozent",
            de: "Sehr gut. Und wie verhält es sich mit Peirces Zeichenklassifikation? Wo würden Sie diese Onomatopoetika einordnen?",
            vi: "Rất tốt. Và trong hệ thống phân loại ký hiệu của Peirce thì sao? Bạn sẽ xếp các từ tượng thanh này vào đâu?",
          },
          {
            speaker: "Tuan",
            de: "Bei Peirce handelte es sich um Ikone — Zeichen, die ihrem Objekt durch Ähnlichkeit zugeordnet sind. Der Klang des Wortes ähnelt dem bezeichneten Geräusch.",
            vi: "Theo Peirce, đó là các ikon — ký hiệu được gán cho đối tượng thông qua sự tương đồng. Âm thanh của từ giống với tiếng động được biểu đạt.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Semiotische Analyse eines Werbetextes",
        titleVi: "Bài tập: Phân tích ký hiệu học một văn bản quảng cáo",
        instruction:
          "Wählen Sie einen deutschsprachigen Werbetext (Print oder digital) und analysieren Sie ihn semiotisch. Identifizieren Sie die verwendeten Zeichentypen (nach Peirce), untersuchen Sie die Beziehung zwischen Signifikant und Signifikat (nach Saussure) und erörtern Sie, inwiefern die Bedeutung kulturell kodiert ist.",
        instructionVi:
          "Chọn một văn bản quảng cáo tiếng Đức (in ấn hoặc kỹ thuật số) và phân tích nó theo ký hiệu học. Xác định các loại ký hiệu được sử dụng (theo Peirce), kiểm tra mối quan hệ giữa cái biểu đạt và cái được biểu đạt (theo Saussure) và thảo luận về mức độ mà ý nghĩa được mã hóa theo văn hóa.",
      },
    ],
  },

  // --- Kapitel 1, Lektion 3 ---
  {
    id: "c2-ch1-l3",
    chapterId: 1,
    lessonNumber: 3,
    title: "Sprachkritik & politische Sprache",
    titleVi: "Phê bình ngôn ngữ & Ngôn ngữ chính trị",
    type: "Fertigkeit",
    objectives: [
      "Phân tích các chiến lược tu từ trong ngôn ngữ chính trị",
      "Nhận diện uyển ngữ, biệt ngữ kỹ thuật quan liêu và ngôn ngữ tuyên truyền",
      "Áp dụng các phương pháp phê bình ngôn ngữ vào phân tích diễn ngôn",
      "Viết một bài phân tích phê bình ngôn ngữ",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Sprache als Machtinstrument",
        titleVi: "Ngôn ngữ như công cụ quyền lực",
        textDe:
          "Politische Sprache ist stets strategisch. Sie dient nicht nur der Information, sondern vor allem der Persuasion und der Konstruktion von Wirklichkeit. Victor Klemperer analysierte in 'LTI — Notizbuch eines Philologen' die Sprache des Nationalsozialismus und zeigte, wie Sprache Denken und Wahrnehmung manipulieren kann. Euphemismen verschleiern (z. B. 'Freisetzung' statt 'Entlassung'), Dysphemismen diskreditieren, und Framing lenkt die Interpretation. In der modernen politischen Kommunikation spielen zudem Narrative eine zentrale Rolle: Wer die Geschichte kontrolliert, kontrolliert die Deutungsmacht.",
        textVi:
          "Ngôn ngữ chính trị luôn mang tính chiến lược. Nó không chỉ phục vụ việc thông tin, mà trước hết là thuyết phục và kiến tạo thực tại. Victor Klemperer đã phân tích ngôn ngữ của Chủ nghĩa Quốc xã trong 'LTI — Sổ tay của một nhà ngữ văn' và chỉ ra cách ngôn ngữ có thể thao túng tư duy và nhận thức. Uyển ngữ che đậy (ví dụ: 'Freisetzung' thay vì 'Entlassung' — 'giải phóng' thay vì 'sa thải'), nghịch ngữ bôi nhọ, và khung diễn giải (framing) điều hướng cách hiểu. Trong giao tiếp chính trị hiện đại, các tự sự (narrative) cũng đóng vai trò trung tâm: ai kiểm soát câu chuyện sẽ kiểm soát quyền lực diễn giải.",
      },
      {
        type: "vocabulary",
        titleDe: "Sprachkritischer Wortschatz",
        titleVi: "Từ vựng phê bình ngôn ngữ",
        words: [
          { de: "der Euphemismus", vi: "uyển ngữ" },
          { de: "der Dysphemismus", vi: "nghịch ngữ (nói xấu hơn thực tế)" },
          { de: "das Framing", vi: "khung diễn giải" },
          { de: "die Persuasion", vi: "sự thuyết phục" },
          { de: "das Narrativ", vi: "tự sự, câu chuyện kể" },
          { de: "die Deutungsmacht", vi: "quyền lực diễn giải" },
          { de: "die Verschleierung", vi: "sự che đậy" },
          { de: "die Propaganda", vi: "tuyên truyền" },
          { de: "der Sprachgebrauch", vi: "cách sử dụng ngôn ngữ" },
          { de: "die Diskursanalyse", vi: "phân tích diễn ngôn" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Analyse einer politischen Rede",
        titleVi: "Phân tích một bài diễn văn chính trị",
        lines: [
          {
            speaker: "Prof. Klein",
            de: "Betrachten wir die rhetorische Strategie dieser Bundestagsrede. Welche sprachlichen Mittel fallen Ihnen auf?",
            vi: "Hãy xem xét chiến lược tu từ của bài diễn văn Quốc hội này. Bạn nhận ra những phương tiện ngôn ngữ nào?",
          },
          {
            speaker: "Hoa",
            de: "Auffällig ist zunächst die durchgängige Verwendung von Euphemismen: 'Herausforderungen' statt 'Probleme', 'Anpassungen' statt 'Kürzungen'. Dadurch wird die Schärfe der Maßnahmen sprachlich abgemildert.",
            vi: "Điều nổi bật trước hết là việc sử dụng xuyên suốt các uyển ngữ: 'Herausforderungen' (thách thức) thay vì 'Probleme' (vấn đề), 'Anpassungen' (điều chỉnh) thay vì 'Kürzungen' (cắt giảm). Qua đó, mức độ nghiêm trọng của các biện pháp được giảm nhẹ về mặt ngôn ngữ.",
          },
          {
            speaker: "Prof. Klein",
            de: "Und welches Narrativ wird konstruiert?",
            vi: "Và tự sự nào được kiến tạo?",
          },
          {
            speaker: "Hoa",
            de: "Ein Fortschrittsnarrativ: Die Regierung stellt sich als handlungsfähig und zukunftsorientiert dar. Durch die Metapher des 'gemeinsamen Weges' wird zudem ein Gemeinschaftsgefühl evoziert, das Kritik als Spaltung erscheinen lässt.",
            vi: "Một tự sự tiến bộ: Chính phủ tự thể hiện mình là có năng lực hành động và hướng tới tương lai. Thông qua ẩn dụ 'con đường chung', cảm giác cộng đồng được khơi gợi, khiến sự phê bình trông như sự chia rẽ.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Sprachkritische Analyse einer Nachrichtensendung",
        titleVi: "Bài tập: Phân tích phê bình ngôn ngữ một bản tin thời sự",
        instruction:
          "Analysieren Sie eine Nachrichtensendung oder einen Zeitungsartikel sprachkritisch. Identifizieren Sie mindestens fünf rhetorische Strategien (Euphemismen, Metaphern, Framing, Passivkonstruktionen zur Verantwortungsvermeidung, nominalisierter Stil usw.) und erläutern Sie deren persuasive Funktion.",
        instructionVi:
          "Phân tích một bản tin thời sự hoặc bài báo theo hướng phê bình ngôn ngữ. Xác định ít nhất năm chiến lược tu từ (uyển ngữ, ẩn dụ, khung diễn giải, cấu trúc bị động để tránh trách nhiệm, phong cách danh từ hóa v.v.) và giải thích chức năng thuyết phục của chúng.",
      },
    ],
  },

  // --- Kapitel 1, Lektion 4 ---
  {
    id: "c2-ch1-l4",
    chapterId: 1,
    lessonNumber: 4,
    title: "Gehobener Konjunktiv",
    titleVi: "Thức giả định nâng cao",
    type: "Grammatik",
    objectives: [
      "Thành thạo Konjunktiv I trong lời nói gián tiếp ở mọi thì",
      "Sử dụng Konjunktiv II trong các cấu trúc giả định phức tạp",
      "Phân biệt sắc thái giữa Konjunktiv I và II trong văn phong học thuật",
      "Áp dụng Konjunktiv trong bài viết hàn lâm và báo chí chất lượng cao",
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Konjunktiv I — Indirekte Rede auf höchstem Niveau",
        titleVi: "Konjunktiv I — Lời nói gián tiếp ở cấp độ cao nhất",
        rule:
          "Der Konjunktiv I dient primär der indirekten Rede und signalisiert Distanz zum Gesagten. In der gehobenen Schriftsprache wird er konsequent verwendet: 'Er sagte, er sei krank.' Wenn die Konjunktiv-I-Form mit dem Indikativ identisch ist, wird Konjunktiv II als Ersatzform eingesetzt: 'Sie sagten, sie hätten keine Zeit.' (statt: sie haben). In der Vergangenheit: 'Er behauptete, er habe alles getan.' (Perfekt im Konjunktiv I).",
        ruleVi:
          "Konjunktiv I phục vụ chủ yếu cho lời nói gián tiếp và tín hiệu khoảng cách với điều được nói. Trong văn viết nâng cao, nó được sử dụng nhất quán: 'Er sagte, er sei krank.' (Anh ấy nói rằng anh ấy bị ốm.) Khi dạng Konjunktiv I trùng với Indikativ, Konjunktiv II được dùng thay thế: 'Sie sagten, sie hätten keine Zeit.' (Họ nói rằng họ không có thời gian.) Ở thì quá khứ: 'Er behauptete, er habe alles getan.' (Anh ấy khẳng định rằng anh ấy đã làm tất cả — Perfekt trong Konjunktiv I).",
        examples: [
          { de: "Der Minister erklärte, die Lage sei unter Kontrolle.", vi: "Bộ trưởng tuyên bố rằng tình hình nằm trong tầm kiểm soát." },
          { de: "Die Forscherin betonte, man müsse die Ergebnisse differenzierter betrachten.", vi: "Nhà nghiên cứu nhấn mạnh rằng người ta phải xem xét kết quả một cách tinh tế hơn." },
          { de: "Er gab an, er habe zu keinem Zeitpunkt davon gewusst.", vi: "Ông ấy khai rằng ông ấy chưa từng biết về điều đó." },
          { de: "Sie berichteten, die Verhandlungen seien gescheitert.", vi: "Họ báo cáo rằng các cuộc đàm phán đã thất bại." },
          { de: "Wäre die Hypothese zutreffend, so ergäben sich daraus weitreichende Konsequenzen.", vi: "Nếu giả thuyết đúng, thì từ đó sẽ phát sinh những hệ quả sâu rộng." },
        ],
      },
      {
        type: "grammar",
        titleDe: "Konjunktiv II — Irrealis und gehobene Hypothesen",
        titleVi: "Konjunktiv II — Giả định phi thực và giả thuyết nâng cao",
        rule:
          "Auf C2-Niveau werden die synthetischen (einteiligen) Formen des Konjunktiv II bevorzugt: 'hülfe' statt 'würde helfen', 'böte' statt 'würde bieten', 'stürbe' statt 'würde sterben'. Besonders in wissenschaftlichen und literarischen Texten signalisieren diese Formen stilistische Kompetenz. Irreale Vergleiche (als ob/als wenn + Konj. II), irreale Wunschsätze und konzessive Konstruktionen gehören zum aktiven Repertoire.",
        ruleVi:
          "Ở trình độ C2, các dạng tổng hợp (một phần) của Konjunktiv II được ưa chuộng hơn: 'hülfe' thay vì 'würde helfen', 'böte' thay vì 'würde bieten', 'stürbe' thay vì 'würde sterben'. Đặc biệt trong các văn bản khoa học và văn học, những dạng này thể hiện năng lực phong cách. So sánh phi thực (als ob/als wenn + Konj. II), câu ước phi thực và cấu trúc nhượng bộ thuộc về kho tàng sử dụng chủ động.",
        examples: [
          { de: "Es wäre wünschenswert, man böte den Betroffenen mehr Unterstützung.", vi: "Sẽ là điều đáng mong muốn nếu người ta cung cấp nhiều hỗ trợ hơn cho những người bị ảnh hưởng." },
          { de: "Gälte dieses Prinzip universal, so bedürfte es keiner weiteren Begründung.", vi: "Nếu nguyên tắc này có giá trị phổ quát, thì không cần lý giải thêm." },
          { de: "Er sprach, als wüsste er von nichts.", vi: "Ông ấy nói như thể ông ấy không biết gì." },
          { de: "Hätte man die Warnsignale ernst genommen, wäre die Katastrophe vermeidbar gewesen.", vi: "Nếu người ta đã coi trọng các tín hiệu cảnh báo, thảm họa đã có thể tránh được." },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Wissenschaftlicher Bericht in indirekter Rede",
        titleVi: "Bài tập: Báo cáo khoa học bằng lời nói gián tiếp",
        instruction:
          "Fassen Sie eine wissenschaftliche Studie in indirekter Rede zusammen (ca. 300 Wörter). Verwenden Sie konsequent Konjunktiv I (und Konjunktiv II als Ersatzform). Integrieren Sie mindestens drei irreale Hypothesen im Konjunktiv II. Verwenden Sie dabei bevorzugt synthetische Formen.",
        instructionVi:
          "Tóm tắt một nghiên cứu khoa học bằng lời nói gián tiếp (khoảng 300 từ). Sử dụng nhất quán Konjunktiv I (và Konjunktiv II làm dạng thay thế). Tích hợp ít nhất ba giả thuyết phi thực bằng Konjunktiv II. Ưu tiên sử dụng các dạng tổng hợp.",
      },
    ],
  },

  // =====================================================================
  // KAPITEL 2: Geopolitik & Weltordnung
  // =====================================================================

  // --- Kapitel 2, Lektion 1 ---
  {
    id: "c2-ch2-l1",
    chapterId: 2,
    lessonNumber: 1,
    title: "Weltordnungsmodelle",
    titleVi: "Các mô hình trật tự thế giới",
    type: "Einführung",
    objectives: [
      "Phân tích các mô hình trật tự thế giới: đơn cực, đa cực, đa phương",
      "So sánh các trường phái lý luận quan hệ quốc tế (chủ nghĩa hiện thực, tự do, kiến tạo)",
      "Thảo luận về vai trò của EU, NATO, LHQ trong trật tự thế giới hiện đại",
      "Sử dụng từ vựng chuyên ngành quan hệ quốc tế ở trình độ bản ngữ",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Von der Bipolarität zur multipolaren Weltordnung",
        titleVi: "Từ lưỡng cực đến trật tự thế giới đa cực",
        textDe:
          "Nach dem Ende des Kalten Krieges und dem Zerfall der Sowjetunion 1991 prognostizierten Politikwissenschaftler wie Francis Fukuyama das 'Ende der Geschichte' — den Siegeszug der liberalen Demokratie und der Marktwirtschaft. Diese unipolare Phase unter US-amerikanischer Hegemonie erwies sich jedoch als kurzlebig. Der Aufstieg Chinas, die Rückkehr Russlands als geopolitischer Akteur, die wachsende Bedeutung regionaler Mächte (Indien, Brasilien, Türkei) und die zunehmende Fragmentierung internationaler Institutionen deuten auf eine multipolare Weltordnung hin, die durch Komplexität, Unsicherheit und den Wettbewerb unterschiedlicher Ordnungsvorstellungen gekennzeichnet ist.",
        textVi:
          "Sau khi Chiến tranh Lạnh kết thúc và Liên Xô sụp đổ năm 1991, các nhà khoa học chính trị như Francis Fukuyama đã dự đoán 'sự kết thúc của lịch sử' — chiến thắng của nền dân chủ tự do và kinh tế thị trường. Tuy nhiên, giai đoạn đơn cực dưới sự bá quyền của Hoa Kỳ tỏ ra ngắn ngủi. Sự trỗi dậy của Trung Quốc, sự trở lại của Nga với tư cách chủ thể địa chính trị, tầm quan trọng ngày càng tăng của các cường quốc khu vực (Ấn Độ, Brazil, Thổ Nhĩ Kỳ) và sự phân mảnh ngày càng tăng của các thể chế quốc tế cho thấy một trật tự thế giới đa cực, được đặc trưng bởi sự phức tạp, bất ổn và cạnh tranh giữa các hình dung trật tự khác nhau.",
      },
      {
        type: "vocabulary",
        titleDe: "Geopolitischer Fachwortschatz",
        titleVi: "Từ vựng chuyên ngành địa chính trị",
        words: [
          { de: "die Hegemonie", vi: "bá quyền" },
          { de: "die Bipolarität", vi: "tính lưỡng cực" },
          { de: "die Multipolarität", vi: "tính đa cực" },
          { de: "der Multilateralismus", vi: "chủ nghĩa đa phương" },
          { de: "die Machtbalance", vi: "cân bằng quyền lực" },
          { de: "das Völkerrecht", vi: "luật quốc tế" },
          { de: "die Souveränität", vi: "chủ quyền" },
          { de: "das Sicherheitsdilemma", vi: "tình thế nan giải an ninh" },
          { de: "die Einflusssphäre", vi: "phạm vi ảnh hưởng" },
          { de: "die Weltordnung", vi: "trật tự thế giới" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Podiumsdiskussion: Die Zukunft der Weltordnung",
        titleVi: "Thảo luận chuyên đề: Tương lai của trật tự thế giới",
        lines: [
          {
            speaker: "Moderator",
            de: "Befinden wir uns am Beginn einer neuen Ära der Multipolarität, oder erleben wir lediglich eine Phase des Übergangs?",
            vi: "Chúng ta đang ở đầu một kỷ nguyên mới của tính đa cực, hay chúng ta chỉ đang trải qua một giai đoạn chuyển tiếp?",
          },
          {
            speaker: "Dr. Fischer",
            de: "Ich vertrete die These, dass die regelbasierte internationale Ordnung, wie wir sie seit 1945 kennen, einer fundamentalen Erosion unterliegt. Die bestehenden Institutionen — allen voran die UNO — spiegeln die Machtverhältnisse des 20. Jahrhunderts wider, nicht die des 21.",
            vi: "Tôi bảo vệ luận đề rằng trật tự quốc tế dựa trên luật lệ, như chúng ta biết từ 1945, đang chịu sự xói mòn căn bản. Các thể chế hiện có — đứng đầu là LHQ — phản ánh tương quan quyền lực của thế kỷ 20, không phải thế kỷ 21.",
          },
          {
            speaker: "Prof. Tran",
            de: "Aus vietnamesischer bzw. südostasiatischer Perspektive möchte ich hinzufügen, dass die ASEAN-Staaten zunehmend eine eigenständige strategische Autonomie anstreben, anstatt sich einem der großen Machtblöcke unterzuordnen.",
            vi: "Từ góc nhìn Việt Nam hay Đông Nam Á, tôi muốn bổ sung rằng các quốc gia ASEAN ngày càng hướng tới tự chủ chiến lược độc lập, thay vì phục tùng một trong các khối quyền lực lớn.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Positionspapier zur Weltordnung",
        titleVi: "Bài tập: Bài viết lập trường về trật tự thế giới",
        instruction:
          "Verfassen Sie ein Positionspapier (ca. 600 Wörter), in dem Sie ein Weltordnungsmodell verteidigen. Berücksichtigen Sie die Perspektiven des Realismus, Liberalismus und Konstruktivismus und beziehen Sie die Rolle Vietnams und Deutschlands in der aktuellen geopolitischen Landschaft ein.",
        instructionVi:
          "Viết một bài lập trường (khoảng 600 từ), trong đó bạn bảo vệ một mô hình trật tự thế giới. Xem xét các góc nhìn của chủ nghĩa hiện thực, tự do và kiến tạo, đồng thời đề cập vai trò của Việt Nam và Đức trong bối cảnh địa chính trị hiện tại.",
      },
    ],
  },

  // --- Kapitel 2, Lektion 2 ---
  {
    id: "c2-ch2-l2",
    chapterId: 2,
    lessonNumber: 2,
    title: "Konflikte & Friedensforschung",
    titleVi: "Xung đột & Nghiên cứu hòa bình",
    type: "Einführung",
    objectives: [
      "Phân tích nguyên nhân và động lực của các xung đột quốc tế",
      "Hiểu các lý thuyết nghiên cứu hòa bình (hòa bình tiêu cực vs. tích cực)",
      "Thảo luận về các cơ chế giải quyết xung đột và ngoại giao",
      "Sử dụng ngôn ngữ phân tích phức tạp trong lĩnh vực xung đột",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Negativer und positiver Frieden nach Johan Galtung",
        titleVi: "Hòa bình tiêu cực và tích cực theo Johan Galtung",
        textDe:
          "Johan Galtung, der Begründer der modernen Friedens- und Konfliktforschung, unterschied zwischen 'negativem Frieden' (Abwesenheit direkter Gewalt) und 'positivem Frieden' (Abwesenheit struktureller und kultureller Gewalt). Strukturelle Gewalt bezeichnet systemische Ungleichheiten, die Menschen an der Entfaltung ihres Potenzials hindern — etwa Armut, Diskriminierung oder mangelnder Zugang zu Bildung. Kulturelle Gewalt umfasst jene Aspekte der Kultur (Religion, Ideologie, Kunst, Sprache), die direkte oder strukturelle Gewalt legitimieren. Ein nachhaltiger Frieden erfordert nach Galtung die Überwindung aller drei Gewaltformen.",
        textVi:
          "Johan Galtung, người sáng lập nghiên cứu hòa bình và xung đột hiện đại, phân biệt giữa 'hòa bình tiêu cực' (vắng mặt bạo lực trực tiếp) và 'hòa bình tích cực' (vắng mặt bạo lực cấu trúc và văn hóa). Bạo lực cấu trúc chỉ các bất bình đẳng mang tính hệ thống ngăn cản con người phát triển tiềm năng — như nghèo đói, phân biệt đối xử hoặc thiếu tiếp cận giáo dục. Bạo lực văn hóa bao gồm những khía cạnh của văn hóa (tôn giáo, ý thức hệ, nghệ thuật, ngôn ngữ) hợp pháp hóa bạo lực trực tiếp hoặc cấu trúc. Một nền hòa bình bền vững theo Galtung đòi hỏi vượt qua cả ba hình thức bạo lực.",
      },
      {
        type: "vocabulary",
        titleDe: "Vokabular der Friedens- und Konfliktforschung",
        titleVi: "Từ vựng nghiên cứu hòa bình và xung đột",
        words: [
          { de: "der negative Frieden", vi: "hòa bình tiêu cực" },
          { de: "der positive Frieden", vi: "hòa bình tích cực" },
          { de: "die strukturelle Gewalt", vi: "bạo lực cấu trúc" },
          { de: "die kulturelle Gewalt", vi: "bạo lực văn hóa" },
          { de: "die Konflikteskalation", vi: "sự leo thang xung đột" },
          { de: "die Vermittlung / Mediation", vi: "sự hòa giải / trung gian" },
          { de: "der Waffenstillstand", vi: "lệnh ngừng bắn" },
          { de: "die Versöhnung", vi: "sự hòa giải" },
          { de: "die Rüstungskontrolle", vi: "kiểm soát vũ trang" },
          { de: "die humanitäre Intervention", vi: "can thiệp nhân đạo" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Fachgespräch über Konfliktlösung",
        titleVi: "Đối thoại chuyên môn về giải quyết xung đột",
        lines: [
          {
            speaker: "Dr. Braun",
            de: "Die Frage ist doch, ob es eine moralische Pflicht zur humanitären Intervention gibt, wenn ein Staat seine eigene Bevölkerung systematisch unterdrückt.",
            vi: "Câu hỏi là liệu có nghĩa vụ đạo đức can thiệp nhân đạo khi một quốc gia đàn áp có hệ thống chính dân mình.",
          },
          {
            speaker: "Mai",
            de: "Das Konzept der 'Responsibility to Protect' versucht genau diesen Spagat zwischen staatlicher Souveränität und dem Schutz der Menschenrechte. Allerdings zeigt die Praxis — man denke an Libyen oder Syrien —, dass die Umsetzung hochproblematisch bleibt.",
            vi: "Khái niệm 'Trách nhiệm Bảo vệ' cố gắng chính xác cân bằng giữa chủ quyền quốc gia và bảo vệ nhân quyền. Tuy nhiên, thực tiễn cho thấy — hãy nghĩ đến Libya hay Syria — rằng việc thực hiện vẫn rất có vấn đề.",
          },
          {
            speaker: "Dr. Braun",
            de: "Zumal die Selektivität der Interventionen — man interveniert dort, wo es geopolitisch opportun erscheint — die Glaubwürdigkeit des gesamten Konzepts untergräbt.",
            vi: "Đặc biệt khi tính chọn lọc của các cuộc can thiệp — can thiệp ở nơi có lợi về địa chính trị — làm suy yếu uy tín của toàn bộ khái niệm.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Analyse eines aktuellen Konflikts",
        titleVi: "Bài tập: Phân tích một xung đột thời sự",
        instruction:
          "Wählen Sie einen aktuellen internationalen Konflikt und analysieren Sie ihn mithilfe der Begriffe Galtungs (strukturelle, kulturelle, direkte Gewalt). Erörtern Sie mögliche Lösungsansätze und bewerten Sie deren Erfolgsaussichten. Länge: ca. 500 Wörter.",
        instructionVi:
          "Chọn một xung đột quốc tế hiện tại và phân tích nó bằng các khái niệm của Galtung (bạo lực cấu trúc, văn hóa, trực tiếp). Thảo luận các phương án giải quyết khả thi và đánh giá triển vọng thành công của chúng. Độ dài: khoảng 500 từ.",
      },
    ],
  },

  // --- Kapitel 2, Lektion 3 ---
  {
    id: "c2-ch2-l3",
    chapterId: 2,
    lessonNumber: 3,
    title: "Migration & globale Gerechtigkeit",
    titleVi: "Di cư & Công bằng toàn cầu",
    type: "Fertigkeit",
    objectives: [
      "Phân tích các luận điểm ủng hộ và phản đối di cư mở",
      "Thảo luận về công bằng toàn cầu từ góc nhìn triết học và thực tiễn",
      "Liên hệ với kinh nghiệm di cư Việt Nam-Đức",
      "Viết một bài luận phản biện với nhiều góc nhìn",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Philosophie der Migration und globale Gerechtigkeit",
        titleVi: "Triết học di cư và công bằng toàn cầu",
        textDe:
          "Die ethische Debatte um Migration berührt fundamentale Fragen der Gerechtigkeit. Kosmopolitische Denker wie Joseph Carens argumentieren, dass offene Grenzen die logische Konsequenz liberaler Grundwerte seien — wenn wir an die moralische Gleichwertigkeit aller Menschen glauben, sei die Beschränkung der Freizügigkeit ebenso willkürlich wie die Einschränkung von Rechten aufgrund von Hautfarbe oder Geschlecht. Kommunitaristen wie Michael Walzer hingegen betonen das Recht einer politischen Gemeinschaft, über ihre Mitgliedschaft selbst zu bestimmen. Dazwischen existiert ein breites Spektrum von Positionen, die versuchen, zwischen universalen Menschenrechten und dem Selbstbestimmungsrecht souveräner Staaten zu vermitteln.",
        textVi:
          "Cuộc tranh luận đạo đức về di cư chạm đến những câu hỏi căn bản về công bằng. Các nhà tư tưởng thế giới công dân như Joseph Carens lập luận rằng biên giới mở là hệ quả logic của các giá trị tự do cơ bản — nếu chúng ta tin vào sự bình đẳng đạo đức của tất cả mọi người, thì việc hạn chế tự do di chuyển cũng tùy tiện như hạn chế quyền dựa trên màu da hay giới tính. Ngược lại, những người theo chủ nghĩa cộng đồng như Michael Walzer nhấn mạnh quyền của một cộng đồng chính trị tự quyết định về thành viên của mình. Giữa hai cực tồn tại một phổ rộng các quan điểm cố gắng trung gian giữa nhân quyền phổ quát và quyền tự quyết của các quốc gia có chủ quyền.",
      },
      {
        type: "vocabulary",
        titleDe: "Migrationsdiskurs — Gehobener Wortschatz",
        titleVi: "Diễn ngôn di cư — Từ vựng nâng cao",
        words: [
          { de: "der Kosmopolitismus", vi: "chủ nghĩa thế giới công dân" },
          { de: "der Kommunitarismus", vi: "chủ nghĩa cộng đồng" },
          { de: "die Freizügigkeit", vi: "tự do di chuyển" },
          { de: "das Asylrecht", vi: "quyền tị nạn" },
          { de: "die Diaspora", vi: "cộng đồng hải ngoại, diaspora" },
          { de: "die Integration", vi: "sự hội nhập" },
          { de: "die Assimilation", vi: "sự đồng hóa" },
          { de: "der Brain-Drain", vi: "chảy máu chất xám" },
          { de: "die Remittance (Rücküberweisungen)", vi: "kiều hối" },
          { de: "die transkulturelle Identität", vi: "bản sắc xuyên văn hóa" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Symposium: Migration zwischen Deutschland und Vietnam",
        titleVi: "Hội thảo: Di cư giữa Đức và Việt Nam",
        lines: [
          {
            speaker: "Prof. Richter",
            de: "Die vietnamesische Diaspora in Deutschland — sowohl die ehemaligen Vertragsarbeiter in Ostdeutschland als auch die Boat People im Westen — bietet ein faszinierendes Fallbeispiel für unterschiedliche Integrationspfade. Wie bewerten Sie diese Entwicklung, Frau Pham?",
            vi: "Cộng đồng hải ngoại Việt Nam tại Đức — cả các cựu lao động hợp đồng ở Đông Đức lẫn thuyền nhân ở phía Tây — cung cấp một trường hợp nghiên cứu hấp dẫn về các con đường hội nhập khác nhau. Chị đánh giá sự phát triển này thế nào, chị Phạm?",
          },
          {
            speaker: "Dr. Pham",
            de: "Es ist bemerkenswert, dass die zweite und dritte Generation trotz unterschiedlicher Ausgangsbedingungen überdurchschnittliche Bildungserfolge verzeichnet. Gleichwohl wäre es reduktionistisch, die vietnamesische Community als 'Musterminderheit' zu stilisieren — ein solches Narrativ blendet strukturelle Ungleichheiten und individuelle Bruchlinien systematisch aus.",
            vi: "Đáng chú ý là thế hệ thứ hai và thứ ba, bất chấp các điều kiện khởi đầu khác nhau, đều ghi nhận thành tích giáo dục trên mức trung bình. Tuy nhiên, sẽ là giản lược hóa nếu tô vẽ cộng đồng Việt Nam là 'thiểu số gương mẫu' — một tự sự như vậy có hệ thống che khuất bất bình đẳng cấu trúc và những đứt gãy cá nhân.",
          },
          {
            speaker: "Prof. Richter",
            de: "Ein wichtiger Einwand. Welche Rolle spielen dabei die transnationalen Verflechtungen — etwa Rücküberweisungen oder zirkuläre Migration?",
            vi: "Một phản biện quan trọng. Vai trò của các mối liên kết xuyên quốc gia — ví dụ kiều hối hoặc di cư tuần hoàn — là gì?",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Streitschrift zur globalen Gerechtigkeit",
        titleVi: "Bài tập: Bài viết tranh luận về công bằng toàn cầu",
        instruction:
          "Verfassen Sie eine differenzierte Streitschrift (ca. 600 Wörter) zu der Frage: 'Gibt es ein Menschenrecht auf Migration?' Beziehen Sie kosmopolitische und kommunitaristische Positionen ein, illustrieren Sie Ihre Argumentation mit dem Fallbeispiel der vietnamesischen Migration nach Deutschland, und formulieren Sie eine eigenständige, begründete Position.",
        instructionVi:
          "Viết một bài tranh luận có chiều sâu (khoảng 600 từ) về câu hỏi: 'Có tồn tại quyền con người về di cư không?' Đưa vào các quan điểm thế giới công dân và cộng đồng, minh họa lập luận bằng trường hợp di cư Việt Nam sang Đức, và đề xuất một quan điểm độc lập, có lý giải.",
      },
    ],
  },

  // --- Kapitel 2, Lektion 4 ---
  {
    id: "c2-ch2-l4",
    chapterId: 2,
    lessonNumber: 4,
    title: "Komplexe Satzperioden & Hypotaxe",
    titleVi: "Câu phức hợp & Cú pháp phụ thuộc",
    type: "Grammatik",
    objectives: [
      "Xây dựng các câu phức hợp nhiều tầng (Satzperioden) theo phong cách khoa học",
      "Thành thạo các cấu trúc phụ thuộc lồng nhau (Hypotaxe)",
      "Sử dụng các cấu trúc phân từ mở rộng (erweiterte Partizipialattribute)",
      "Biến đổi giữa phong cách parataktisch và hypotaktisch",
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Die Satzperiode — Komplexe Satzarchitekturen",
        titleVi: "Câu phức hợp — Kiến trúc câu phức tạp",
        rule:
          "Die Satzperiode ist eine kunstvoll verschachtelte Satzkonstruktion, die mehrere Haupt- und Nebensätze zu einer Einheit verbindet. In der gehobenen Schriftsprache signalisiert sie gedankliche Komplexität und stilistische Meisterschaft. Typische Strukturen umfassen: konzessive Einleitungen (Wenngleich..., so...), kausale Ketten (Da..., und weil..., ergibt sich...), finale Konstruktionen mit Partizipialattributen, und verschachtelte Relativsätze.",
        ruleVi:
          "Câu phức hợp (Satzperiode) là một cấu trúc câu lồng nhau tinh xảo, kết nối nhiều mệnh đề chính và phụ thành một thể thống nhất. Trong văn viết nâng cao, nó thể hiện tính phức tạp tư duy và trình độ phong cách bậc thầy. Các cấu trúc điển hình bao gồm: mở đầu nhượng bộ (Wenngleich..., so...), chuỗi nhân quả (Da..., und weil..., ergibt sich...), cấu trúc mục đích với trạng ngữ phân từ, và mệnh đề quan hệ lồng nhau.",
        examples: [
          {
            de: "Wenngleich die empirische Evidenz nahelegt, dass der Klimawandel menschengemacht ist, und obwohl die überwältigende Mehrheit der Wissenschaftler diese Position stützt, gibt es in der öffentlichen Debatte nach wie vor Stimmen, die — sei es aus Unwissenheit, sei es aus ökonomischem Kalkül — die Ergebnisse in Zweifel ziehen.",
            vi: "Mặc dù bằng chứng thực nghiệm cho thấy biến đổi khí hậu do con người gây ra, và mặc dù đại đa số nhà khoa học ủng hộ quan điểm này, trong cuộc tranh luận công khai vẫn tồn tại những tiếng nói — dù do thiếu hiểu biết hay do tính toán kinh tế — đặt nghi vấn về các kết quả.",
          },
          {
            de: "Die seit Jahrzehnten andauernde, von zahlreichen namhaften Wissenschaftlern kontrovers diskutierte und bis heute nicht abschließend geklärte Frage nach dem Ursprung des Bewusstseins bleibt eines der faszinierendsten Rätsel der Philosophie.",
            vi: "Câu hỏi kéo dài hàng thập kỷ, được nhiều nhà khoa học nổi tiếng tranh luận gay gắt và cho đến nay vẫn chưa được giải đáp dứt khoát về nguồn gốc của ý thức, vẫn là một trong những bí ẩn hấp dẫn nhất của triết học.",
          },
        ],
      },
      {
        type: "grammar",
        titleDe: "Erweiterte Partizipialattribute",
        titleVi: "Trạng ngữ phân từ mở rộng",
        rule:
          "Erweiterte Partizipialattribute sind ein Kennzeichen gehobener deutscher Schriftsprache. Sie stehen zwischen Artikel und Nomen und können sehr lang sein: 'die [von der Regierung seit langem angekündigte, aber bislang nicht umgesetzte] Reform'. Sie entsprechen im Deutschen einem komprimierten Relativsatz. Im Vietnamesischen gibt es keine direkte Entsprechung — die Information wird typischerweise in einem nachgestellten Nebensatz ausgedrückt.",
        ruleVi:
          "Trạng ngữ phân từ mở rộng là đặc trưng của văn viết tiếng Đức nâng cao. Chúng đứng giữa mạo từ và danh từ và có thể rất dài: 'die [von der Regierung seit langem angekündigte, aber bislang nicht umgesetzte] Reform' (cuộc cải cách [được chính phủ công bố từ lâu nhưng đến nay chưa thực hiện]). Trong tiếng Đức, chúng tương ứng với một mệnh đề quan hệ nén gọn. Trong tiếng Việt không có tương đương trực tiếp — thông tin thường được diễn đạt bằng mệnh đề phụ đặt sau.",
        examples: [
          {
            de: "Der vom Ausschuss einstimmig verabschiedete Antrag",
            vi: "Đề xuất được ủy ban thông qua nhất trí (= đề xuất mà ủy ban đã thông qua nhất trí)",
          },
          {
            de: "Die in der vergangenen Woche durch mehrere unabhängige Studien bestätigten Ergebnisse",
            vi: "Các kết quả được xác nhận trong tuần trước bởi nhiều nghiên cứu độc lập",
          },
          {
            de: "Ein seit Generationen überliefertes, tief im kulturellen Gedächtnis verankertes Narrativ",
            vi: "Một tự sự được truyền lại qua nhiều thế hệ, ăn sâu trong trí nhớ văn hóa",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Satzperioden und Partizipialattribute verfassen",
        titleVi: "Bài tập: Viết câu phức hợp và trạng ngữ phân từ mở rộng",
        instruction:
          "1) Verfassen Sie drei Satzperioden (jeweils mindestens 40 Wörter) zu geopolitischen Themen. Verwenden Sie verschachtelte Nebensätze, konzessive und kausale Strukturen. 2) Bilden Sie fünf Sätze mit erweiterten Partizipialattributen und formulieren Sie diese anschließend in Relativsätze um.",
        instructionVi:
          "1) Viết ba câu phức hợp (mỗi câu ít nhất 40 từ) về các chủ đề địa chính trị. Sử dụng mệnh đề phụ lồng nhau, cấu trúc nhượng bộ và nhân quả. 2) Tạo năm câu với trạng ngữ phân từ mở rộng và sau đó chuyển chúng thành mệnh đề quan hệ.",
      },
    ],
  },

  // =====================================================================
  // KAPITEL 3: Neurowissenschaft & Kognition
  // =====================================================================

  // --- Kapitel 3, Lektion 1 ---
  {
    id: "c2-ch3-l1",
    chapterId: 3,
    lessonNumber: 1,
    title: "Gehirn & Spracherwerb",
    titleVi: "Não bộ & Tiếp thu ngôn ngữ",
    type: "Einführung",
    objectives: [
      "Hiểu các cơ chế thần kinh của việc tiếp thu ngôn ngữ",
      "Phân tích giả thuyết thời kỳ tới hạn (Critical Period Hypothesis)",
      "Thảo luận về tính dẻo thần kinh và việc học ngôn ngữ ở người lớn",
      "Sử dụng từ vựng chuyên ngành khoa học thần kinh",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Neuronale Grundlagen des Spracherwerbs",
        titleVi: "Cơ sở thần kinh của việc tiếp thu ngôn ngữ",
        textDe:
          "Die neurowissenschaftliche Erforschung des Spracherwerbs hat unser Verständnis grundlegend verändert. Das Broca-Areal (im linken Frontallappen) ist für die Sprachproduktion zuständig, während das Wernicke-Areal (im linken Temporallappen) das Sprachverständnis verarbeitet. Die Critical Period Hypothesis von Eric Lenneberg besagt, dass es ein biologisch determiniertes Zeitfenster gibt, in dem der Erstspracherwerb mühelos erfolgt — typischerweise bis zur Pubertät. Neuere Forschungen zur Neuroplastizität zeigen jedoch, dass das Gehirn auch im Erwachsenenalter erstaunlich anpassungsfähig bleibt, wenngleich die Mechanismen des Zweitspracherwerbs sich qualitativ von denen des Erstspracherwerbs unterscheiden.",
        textVi:
          "Nghiên cứu khoa học thần kinh về tiếp thu ngôn ngữ đã thay đổi căn bản hiểu biết của chúng ta. Vùng Broca (ở thùy trán trái) phụ trách sản xuất ngôn ngữ, trong khi vùng Wernicke (ở thùy thái dương trái) xử lý hiểu ngôn ngữ. Giả thuyết Thời kỳ Tới hạn của Eric Lenneberg cho rằng có một cửa sổ thời gian được xác định về mặt sinh học, trong đó việc tiếp thu ngôn ngữ thứ nhất diễn ra dễ dàng — thường là đến tuổi dậy thì. Tuy nhiên, các nghiên cứu mới hơn về tính dẻo thần kinh cho thấy não bộ vẫn có khả năng thích ứng đáng kinh ngạc ở tuổi trưởng thành, mặc dù cơ chế tiếp thu ngôn ngữ thứ hai khác biệt về chất so với ngôn ngữ thứ nhất.",
      },
      {
        type: "vocabulary",
        titleDe: "Neurowissenschaftliche Fachbegriffe",
        titleVi: "Thuật ngữ chuyên ngành khoa học thần kinh",
        words: [
          { de: "das Broca-Areal", vi: "vùng Broca" },
          { de: "das Wernicke-Areal", vi: "vùng Wernicke" },
          { de: "die Neuroplastizität", vi: "tính dẻo thần kinh" },
          { de: "die Synapse", vi: "xi-náp (khớp thần kinh)" },
          { de: "die kritische Phase", vi: "giai đoạn tới hạn" },
          { de: "der Erstspracherwerb", vi: "tiếp thu ngôn ngữ thứ nhất" },
          { de: "der Zweitspracherwerb", vi: "tiếp thu ngôn ngữ thứ hai" },
          { de: "die Lateralisierung", vi: "sự thiên hóa bán cầu" },
          { de: "das neuronale Netzwerk", vi: "mạng lưới thần kinh" },
          { de: "die kognitive Neurowissenschaft", vi: "khoa học thần kinh nhận thức" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Fachvortrag: Spracherwerb und Gehirnentwicklung",
        titleVi: "Bài giảng chuyên đề: Tiếp thu ngôn ngữ và phát triển não bộ",
        lines: [
          {
            speaker: "Prof. Schneider",
            de: "Die bildgebenden Verfahren der letzten zwei Jahrzehnte — insbesondere die funktionelle Magnetresonanztomographie — haben gezeigt, dass der Spracherwerb weit verteilter stattfindet, als man lange annahm. Es sind keineswegs nur das Broca- und das Wernicke-Areal beteiligt.",
            vi: "Các phương pháp hình ảnh não trong hai thập kỷ qua — đặc biệt chụp cộng hưởng từ chức năng — đã cho thấy việc tiếp thu ngôn ngữ diễn ra phân tán rộng hơn nhiều so với giả định lâu nay. Không chỉ có vùng Broca và Wernicke tham gia.",
          },
          {
            speaker: "Thanh",
            de: "Inwiefern unterscheidet sich denn die neuronale Verarbeitung bei Zweisprachigen, die — wie ich — Vietnamesisch und Deutsch in unterschiedlichen Lebensabschnitten erworben haben?",
            vi: "Vậy xử lý thần kinh khác nhau như thế nào ở người song ngữ, những người — như tôi — đã tiếp thu tiếng Việt và tiếng Đức ở các giai đoạn cuộc đời khác nhau?",
          },
          {
            speaker: "Prof. Schneider",
            de: "Bei sukzessiver Zweisprachigkeit aktiviert die Zweitsprache teilweise andere neuronale Netzwerke als die Erstsprache. Entscheidend ist jedoch das Erwerbsalter und die Nutzungshäufigkeit: Je früher und intensiver der Kontakt, desto stärker überlappen die neuronalen Repräsentationen.",
            vi: "Ở tính song ngữ kế tiếp, ngôn ngữ thứ hai kích hoạt phần nào các mạng lưới thần kinh khác so với ngôn ngữ thứ nhất. Tuy nhiên, yếu tố quyết định là tuổi tiếp thu và tần suất sử dụng: tiếp xúc càng sớm và chuyên sâu, các biểu diễn thần kinh càng chồng chéo nhiều.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Fachartikel — Spracherwerb bei Erwachsenen",
        titleVi: "Bài tập: Bài báo chuyên ngành — Tiếp thu ngôn ngữ ở người lớn",
        instruction:
          "Verfassen Sie einen populärwissenschaftlichen Artikel (ca. 500 Wörter) über die Frage, ob und wie Erwachsene eine Fremdsprache auf muttersprachlichem Niveau erlernen können. Berücksichtigen Sie die Critical Period Hypothesis, neuere Erkenntnisse zur Neuroplastizität und persönliche Erfahrungen beim Deutschlernen.",
        instructionVi:
          "Viết một bài báo khoa học phổ thông (khoảng 500 từ) về câu hỏi liệu và bằng cách nào người lớn có thể học ngoại ngữ đạt trình độ bản ngữ. Xem xét Giả thuyết Thời kỳ Tới hạn, những phát hiện mới về tính dẻo thần kinh và kinh nghiệm cá nhân khi học tiếng Đức.",
      },
    ],
  },

  // --- Kapitel 3, Lektion 2 ---
  {
    id: "c2-ch3-l2",
    chapterId: 3,
    lessonNumber: 2,
    title: "Kognitive Verzerrungen",
    titleVi: "Thiên kiến nhận thức",
    type: "Einführung",
    objectives: [
      "Nhận diện và phân tích các thiên kiến nhận thức phổ biến",
      "Hiểu hệ thống tư duy kép (Kahneman: System 1 và System 2)",
      "Áp dụng kiến thức về thiên kiến vào phân tích phê phán",
      "Thảo luận về ảnh hưởng của thiên kiến đến việc ra quyết định",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Heuristiken und kognitive Verzerrungen",
        titleVi: "Heuristic và thiên kiến nhận thức",
        textDe:
          "Daniel Kahneman und Amos Tversky revolutionierten die Kognitionspsychologie mit ihrer Forschung zu Heuristiken — mentalen Abkürzungen, die das Denken beschleunigen, aber systematische Fehler (Biases) verursachen können. Kahneman unterscheidet zwischen System 1 (schnell, automatisch, intuitiv) und System 2 (langsam, bewusst, analytisch). Zu den wichtigsten kognitiven Verzerrungen zählen: der Bestätigungsfehler (Confirmation Bias — selektive Wahrnehmung bestätigender Informationen), die Verfügbarkeitsheuristik (Überschätzung der Wahrscheinlichkeit leicht verfügbarer Beispiele), der Ankereffekt (Beeinflussung durch einen Ausgangswert) und der Dunning-Kruger-Effekt (Überschätzung der eigenen Kompetenz bei geringem Wissen).",
        textVi:
          "Daniel Kahneman và Amos Tversky đã cách mạng hóa tâm lý học nhận thức với nghiên cứu về heuristic — các lối tắt tư duy giúp tăng tốc suy nghĩ nhưng có thể gây ra sai sót hệ thống (thiên kiến). Kahneman phân biệt giữa Hệ thống 1 (nhanh, tự động, trực giác) và Hệ thống 2 (chậm, có ý thức, phân tích). Các thiên kiến nhận thức quan trọng nhất bao gồm: thiên kiến xác nhận (Confirmation Bias — nhận thức chọn lọc các thông tin xác nhận), heuristic tính sẵn có (đánh giá quá cao xác suất của các ví dụ dễ nhớ), hiệu ứng neo (bị ảnh hưởng bởi giá trị ban đầu) và hiệu ứng Dunning-Kruger (đánh giá quá cao năng lực bản thân khi kiến thức hạn chế).",
      },
      {
        type: "vocabulary",
        titleDe: "Kognitionspsychologische Terminologie",
        titleVi: "Thuật ngữ tâm lý học nhận thức",
        words: [
          { de: "die Heuristik", vi: "heuristic (lối tắt tư duy)" },
          { de: "die kognitive Verzerrung / der Bias", vi: "thiên kiến nhận thức" },
          { de: "der Bestätigungsfehler", vi: "thiên kiến xác nhận" },
          { de: "die Verfügbarkeitsheuristik", vi: "heuristic tính sẵn có" },
          { de: "der Ankereffekt", vi: "hiệu ứng neo" },
          { de: "der Dunning-Kruger-Effekt", vi: "hiệu ứng Dunning-Kruger" },
          { de: "die Risikoaversion", vi: "sự né tránh rủi ro" },
          { de: "das Framing (kognitionspsychologisch)", vi: "hiệu ứng khung (tâm lý nhận thức)" },
          { de: "die Entscheidungsfindung", vi: "quá trình ra quyết định" },
          { de: "das metakognitive Bewusstsein", vi: "ý thức siêu nhận thức" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Workshop: Kognitive Verzerrungen im Alltag",
        titleVi: "Hội thảo thực hành: Thiên kiến nhận thức trong đời sống",
        lines: [
          {
            speaker: "Dr. Neumann",
            de: "Lassen Sie mich ein Experiment vorschlagen: In einer Urne befinden sich 90 Kugeln — 30 rote und 60, die entweder schwarz oder gelb sind. Wetten Sie lieber auf Rot oder auf Schwarz?",
            vi: "Cho tôi đề xuất một thí nghiệm: Trong một bình có 90 viên bi — 30 viên đỏ và 60 viên hoặc đen hoặc vàng. Bạn đặt cược vào đỏ hay đen?",
          },
          {
            speaker: "Duc",
            de: "Die meisten Menschen wählen Rot, obwohl die objektive Wahrscheinlichkeit für Schwarz identisch oder sogar höher sein könnte. Das illustriert die Ambiguitätsaversion — wir bevorzugen bekannte Risiken gegenüber unbekannten.",
            vi: "Hầu hết mọi người chọn đỏ, mặc dù xác suất khách quan cho đen có thể bằng hoặc thậm chí cao hơn. Điều này minh họa sự né tránh mơ hồ — chúng ta ưa thích rủi ro đã biết hơn rủi ro chưa biết.",
          },
          {
            speaker: "Dr. Neumann",
            de: "Exzellent. Und wie lässt sich dieses Phänomen im Kontext der Entscheidungstheorie einordnen? Welche Implikationen hat es für rationales Handeln?",
            vi: "Xuất sắc. Và hiện tượng này được xếp vào đâu trong bối cảnh lý thuyết quyết định? Nó có những hàm ý gì cho hành động lý trí?",
          },
          {
            speaker: "Duc",
            de: "Es zeigt, dass menschliche Rationalität begrenzt ist — Herbert Simon sprach von 'bounded rationality'. Wir maximieren nicht Nutzen im ökonomischen Sinne, sondern treffen zufriedenstellende Entscheidungen unter Unsicherheit.",
            vi: "Nó cho thấy rằng tính lý trí của con người có giới hạn — Herbert Simon gọi đó là 'tính lý trí giới hạn'. Chúng ta không tối đa hóa lợi ích theo nghĩa kinh tế, mà đưa ra các quyết định đủ tốt trong điều kiện bất ổn.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Selbstreflexion über eigene Denkfehler",
        titleVi: "Bài tập: Tự phản tỉnh về sai lầm tư duy của bản thân",
        instruction:
          "Verfassen Sie einen reflexiven Text (ca. 400 Wörter), in dem Sie drei kognitive Verzerrungen identifizieren, denen Sie selbst in Ihrem Alltag oder beim Deutschlernen unterliegen. Analysieren Sie die zugrunde liegenden Mechanismen und diskutieren Sie Strategien zur Überwindung dieser Biases.",
        instructionVi:
          "Viết một bài tự phản tỉnh (khoảng 400 từ), trong đó bạn xác định ba thiên kiến nhận thức mà chính bạn mắc phải trong cuộc sống hàng ngày hoặc khi học tiếng Đức. Phân tích các cơ chế nền tảng và thảo luận các chiến lược để vượt qua những thiên kiến này.",
      },
    ],
  },

  // --- Kapitel 3, Lektion 3 ---
  {
    id: "c2-ch3-l3",
    chapterId: 3,
    lessonNumber: 3,
    title: "Bewusstsein & freier Wille",
    titleVi: "Ý thức & Ý chí tự do",
    type: "Fertigkeit",
    objectives: [
      "Thảo luận về vấn đề ý thức trong triết học và khoa học thần kinh",
      "Phân tích cuộc tranh luận về ý chí tự do (thuyết quyết định vs. tự do)",
      "Hiểu thí nghiệm Libet và các hàm ý triết học của nó",
      "Viết bài luận triết học khoa học ở cấp độ bản ngữ",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das Hard Problem of Consciousness und die Willensfreiheit",
        titleVi: "Vấn đề khó của ý thức và tự do ý chí",
        textDe:
          "David Chalmers formulierte 1995 das 'Hard Problem of Consciousness': Warum und wie erzeugen physische Prozesse im Gehirn subjektive Erlebnisqualitäten (Qualia)? Warum fühlt sich Rot 'rot' an? Dieses Problem bleibt ungelöst. Parallel dazu stellt Benjamin Libets berühmtes Experiment (1983) die Willensfreiheit infrage: Das sogenannte Bereitschaftspotential — eine messbare Hirnaktivität — tritt bereits vor der bewussten Entscheidung zur Handlung auf. Deterministen folgern daraus, dass der freie Wille eine Illusion sei; Kompatibilisten argumentieren hingegen, dass Willensfreiheit und Determinismus vereinbar seien, sofern man Freiheit als Handeln gemäß den eigenen Wünschen ohne äußeren Zwang definiert.",
        textVi:
          "David Chalmers đã đặt ra năm 1995 'Vấn đề Khó của Ý thức': Tại sao và làm thế nào các quá trình vật lý trong não tạo ra các phẩm chất trải nghiệm chủ quan (Qualia)? Tại sao màu đỏ 'cảm thấy' đỏ? Vấn đề này vẫn chưa được giải quyết. Song song đó, thí nghiệm nổi tiếng của Benjamin Libet (1983) đặt câu hỏi về tự do ý chí: cái gọi là điện thế sẵn sàng — một hoạt động não có thể đo được — xuất hiện trước quyết định có ý thức về hành động. Những người theo thuyết quyết định kết luận rằng ý chí tự do là ảo tưởng; những người theo thuyết tương hợp thì lập luận rằng tự do ý chí và thuyết quyết định có thể hòa hợp, miễn là ta định nghĩa tự do là hành động theo mong muốn của chính mình mà không bị ép buộc bên ngoài.",
      },
      {
        type: "vocabulary",
        titleDe: "Philosophie des Geistes — Fachvokabular",
        titleVi: "Triết học tâm trí — Từ vựng chuyên ngành",
        words: [
          { de: "das Bewusstsein", vi: "ý thức" },
          { de: "die Qualia (Singular: das Quale)", vi: "qualia (phẩm chất trải nghiệm chủ quan)" },
          { de: "der freie Wille", vi: "ý chí tự do" },
          { de: "der Determinismus", vi: "thuyết quyết định" },
          { de: "der Kompatibilismus", vi: "thuyết tương hợp" },
          { de: "das Bereitschaftspotential", vi: "điện thế sẵn sàng" },
          { de: "die Introspektion", vi: "nội quan" },
          { de: "der Dualismus (Leib-Seele-Problem)", vi: "thuyết nhị nguyên (vấn đề thể xác-tâm hồn)" },
          { de: "der Physikalismus", vi: "thuyết vật lý" },
          { de: "die Emergenz", vi: "sự nổi trội (tính phát sinh)" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Philosophisches Streitgespräch: Haben wir einen freien Willen?",
        titleVi: "Cuộc tranh luận triết học: Chúng ta có ý chí tự do không?",
        lines: [
          {
            speaker: "Prof. Hartmann",
            de: "Wenn jede unserer Entscheidungen das Ergebnis neuronaler Prozesse ist, die den Gesetzen der Physik gehorchen — und daran kann nach heutigem Erkenntnisstand kaum gezweifelt werden —, wie können wir dann von Willensfreiheit sprechen?",
            vi: "Nếu mỗi quyết định của chúng ta là kết quả của các quá trình thần kinh tuân theo định luật vật lý — và điều đó khó có thể nghi ngờ theo hiểu biết hiện nay —, thì làm sao chúng ta có thể nói về tự do ý chí?",
          },
          {
            speaker: "Lan",
            de: "Ich würde die kompatibilistische Position einnehmen: Willensfreiheit muss nicht als Freiheit von kausaler Determination verstanden werden, sondern als Fähigkeit, gemäß den eigenen Überlegungen und Werten zu handeln, ohne äußeren Zwang. In diesem Sinne sind wir frei, auch wenn unsere Entscheidungen neuronal bedingt sind.",
            vi: "Tôi sẽ theo quan điểm tương hợp: Tự do ý chí không cần phải được hiểu là tự do khỏi quyết định nhân quả, mà là khả năng hành động theo suy nghĩ và giá trị của chính mình, không bị ép buộc bên ngoài. Theo nghĩa này, chúng ta tự do, ngay cả khi các quyết định của chúng ta được quy định bởi thần kinh.",
          },
          {
            speaker: "Prof. Hartmann",
            de: "Aber definieren Sie damit nicht Willensfreiheit so um, dass sie letztlich gehaltslos wird? Wenn unsere 'eigenen Überlegungen' selbst determiniert sind, was genau ist dann der Gehalt des Begriffs 'frei'?",
            vi: "Nhưng liệu bạn có đang định nghĩa lại tự do ý chí đến mức cuối cùng nó mất nội dung không? Nếu 'các suy nghĩ của chính mình' cũng bị quyết định, thì nội dung chính xác của khái niệm 'tự do' là gì?",
          },
          {
            speaker: "Lan",
            de: "Der Gehalt liegt in der Unterscheidung verschiedener Arten von Determination. Es ist ein Unterschied, ob ich handle, weil ich nach reiflicher Überlegung zu einem Schluss gekommen bin, oder ob jemand mich mit vorgehaltener Waffe zwingt. Beide sind kausal determiniert — aber nur Letzteres raubt mir die Freiheit in einem moralisch relevanten Sinne.",
            vi: "Nội dung nằm ở việc phân biệt các loại quyết định khác nhau. Có sự khác biệt giữa việc tôi hành động vì đã đi đến kết luận sau suy nghĩ kỹ lưỡng, và việc ai đó ép tôi bằng súng. Cả hai đều bị quyết định nhân quả — nhưng chỉ trường hợp sau mới tước đi tự do của tôi theo nghĩa đạo đức liên quan.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Philosophischer Essay — Freier Wille und Verantwortung",
        titleVi: "Bài tập: Luận văn triết học — Ý chí tự do và trách nhiệm",
        instruction:
          "Verfassen Sie einen philosophischen Essay (ca. 600 Wörter): 'Wenn der freie Wille eine Illusion ist, können wir dann noch von moralischer Verantwortung sprechen?' Erörtern Sie deterministische, kompatibilistische und libertarianische Positionen und beziehen Sie das Libet-Experiment ein.",
        instructionVi:
          "Viết một bài luận triết học (khoảng 600 từ): 'Nếu ý chí tự do là ảo tưởng, liệu chúng ta còn có thể nói về trách nhiệm đạo đức?' Thảo luận các quan điểm quyết định luận, tương hợp và tự do, và đề cập thí nghiệm Libet.",
      },
    ],
  },

  // --- Kapitel 3, Lektion 4 ---
  {
    id: "c2-ch3-l4",
    chapterId: 3,
    lessonNumber: 4,
    title: "Rhetorische Stilmittel",
    titleVi: "Phương tiện tu từ",
    type: "Grammatik",
    objectives: [
      "Nhận diện và sử dụng các phương tiện tu từ nâng cao trong tiếng Đức",
      "Phân tích tác dụng của các biện pháp tu từ trong văn bản khoa học và văn học",
      "Áp dụng chiasmus, anapher, tricolon và các hình thức tu từ khác",
      "Viết văn bản có phong cách tu từ tinh tế",
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Rhetorische Figuren für die gehobene Schriftsprache",
        titleVi: "Hình thức tu từ cho văn viết nâng cao",
        rule:
          "Rhetorische Stilmittel verleihen Texten Eleganz, Überzeugungskraft und Eindringlichkeit. Zu den wichtigsten gehören: Anapher (Wiederholung am Satzanfang), Chiasmus (Kreuzstellung: 'Die Kunst ist lang, und kurz ist unser Leben'), Tricolon (Dreiergruppe: 'Veni, vidi, vici'), Klimax (Steigerung), Antithese (Gegenüberstellung), Litotes (Untertreibung durch Verneinung: 'nicht unerheblich'), rhetorische Frage, Ellipse (Auslassung), Parallelismus (Gleichbau von Satzgliedern) und Hyperbel (Übertreibung).",
        ruleVi:
          "Các phương tiện tu từ mang lại cho văn bản sự thanh nhã, sức thuyết phục và tính ấn tượng. Quan trọng nhất bao gồm: Điệp ngữ đầu câu (Anapher), Đối xứng chéo (Chiasmus: 'Die Kunst ist lang, und kurz ist unser Leben' — Nghệ thuật thì dài, và cuộc đời ta ngắn), Tam liên (Tricolon: 'Veni, vidi, vici'), Tăng tiến (Klimax), Đối lập (Antithese), Nói giảm bằng phủ định (Litotes: 'nicht unerheblich' — không phải không đáng kể), Câu hỏi tu từ, Tỉnh lược (Ellipse), Song hành (Parallelismus) và Phóng đại (Hyperbel).",
        examples: [
          { de: "Ich kam, ich sah, ich siegte. (Tricolon + Klimax)", vi: "Tôi đến, tôi thấy, tôi chiến thắng. (Tam liên + Tăng tiến)" },
          { de: "Der Wahn ist kurz, die Reu ist lang. (Chiasmus + Antithese)", vi: "Cơn mê thì ngắn, sự hối hận thì dài. (Đối xứng chéo + Đối lập)" },
          { de: "Nicht wenige Experten vertreten diese Auffassung. (Litotes)", vi: "Không ít chuyên gia bảo vệ quan điểm này. (Nói giảm)" },
          { de: "Kein Licht. Kein Ton. Kein Leben. (Anapher + Ellipse)", vi: "Không ánh sáng. Không âm thanh. Không sự sống. (Điệp ngữ + Tỉnh lược)" },
          { de: "Ist es nicht an der Zeit, dass wir umdenken? (Rhetorische Frage)", vi: "Chẳng phải đã đến lúc chúng ta thay đổi tư duy sao? (Câu hỏi tu từ)" },
        ],
      },
      {
        type: "grammar",
        titleDe: "Stilistische Variation — Parataxe vs. Hypotaxe",
        titleVi: "Biến thể phong cách — Cú pháp đẳng lập vs. phụ thuộc",
        rule:
          "Meisterhafte Texte variieren zwischen parataktischem Stil (kurze, koordinierte Hauptsätze — wirkt direkt, kraftvoll, prägnant) und hypotaktischem Stil (verschachtelte Nebensätze — wirkt differenziert, komplex, akademisch). Die bewusste Wahl zwischen beiden Stilen ist ein Zeichen höchster sprachlicher Kompetenz. Parataxe eignet sich für emotionale Appelle und pointierte Aussagen; Hypotaxe für differenzierte Argumentationen und wissenschaftliche Darstellungen.",
        ruleVi:
          "Các văn bản bậc thầy biến đổi giữa phong cách đẳng lập (câu chính ngắn, phối hợp — tác dụng trực tiếp, mạnh mẽ, súc tích) và phong cách phụ thuộc (mệnh đề phụ lồng nhau — tác dụng tinh tế, phức tạp, học thuật). Sự lựa chọn có ý thức giữa hai phong cách là dấu hiệu của năng lực ngôn ngữ cao nhất. Đẳng lập phù hợp cho lời kêu gọi cảm xúc và phát biểu sắc nét; phụ thuộc cho lập luận tinh tế và trình bày khoa học.",
        examples: [
          {
            de: "Parataxe: Er kam. Er sah. Er verstand. Und er handelte. — Hypotaxe: Nachdem er gekommen war und gesehen hatte, was geschehen war, verstand er die Lage, woraufhin er unverzüglich handelte.",
            vi: "Đẳng lập: Anh ấy đến. Anh ấy thấy. Anh ấy hiểu. Và anh ấy hành động. — Phụ thuộc: Sau khi đến và thấy điều đã xảy ra, anh ấy hiểu tình hình, theo đó anh ấy hành động ngay lập tức.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Rhetorisch brillante Texte verfassen",
        titleVi: "Bài tập: Viết văn bản tu từ xuất sắc",
        instruction:
          "1) Verfassen Sie einen kurzen Text (ca. 200 Wörter) im parataktischen Stil zu einem Thema Ihrer Wahl — kraftvoll, direkt, rhetorisch wirkungsvoll. 2) Schreiben Sie denselben Inhalt im hypotaktischen Stil um. 3) Schreiben Sie eine kurze Rede (ca. 300 Wörter), in der Sie mindestens sechs verschiedene rhetorische Stilmittel bewusst einsetzen. Markieren Sie diese im Text.",
        instructionVi:
          "1) Viết một văn bản ngắn (khoảng 200 từ) theo phong cách đẳng lập về một chủ đề tự chọn — mạnh mẽ, trực tiếp, hiệu quả tu từ. 2) Viết lại cùng nội dung theo phong cách phụ thuộc. 3) Viết một bài diễn văn ngắn (khoảng 300 từ), trong đó bạn sử dụng có ý thức ít nhất sáu phương tiện tu từ khác nhau. Đánh dấu chúng trong văn bản.",
      },
    ],
  },
];
