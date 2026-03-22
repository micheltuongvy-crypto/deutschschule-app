// C1 Chapters 7-8: Soziologie & Gesellschaftsanalyse, Technologie & künstliche Intelligenz

import type { ContentBlock, Lesson } from "../a1/chapters1_3";

export const c1LessonsCh7_8: Lesson[] = [
  // ============================================================
  // CHAPTER 7: Soziologie & Gesellschaftsanalyse
  // ============================================================

  // --- Chapter 7, Lesson 1: Soziale Ungleichheit & Schichtmodelle ---
  {
    id: "c1-ch7-l1",
    chapterId: 7,
    lessonNumber: 1,
    title: "Soziale Ungleichheit & Schichtmodelle",
    titleVi: "Bất bình đẳng xã hội & Mô hình phân tầng",
    type: "Einführung",
    objectives: [
      "Phân tích các mô hình phân tầng xã hội trong xã hội học Đức",
      "Nắm vững thuật ngữ chuyên ngành về bất bình đẳng xã hội",
      "So sánh cấu trúc xã hội Đức và Việt Nam ở trình độ học thuật"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Soziale Schichtung in Deutschland",
        titleVi: "Phân tầng xã hội ở Đức",
        textDe: "Die deutsche Gesellschaft wird seit Jahrzehnten mithilfe verschiedener Schichtmodelle analysiert. Das Bolte-Zwiebel-Modell aus den 1960er-Jahren stellte die Gesellschaft als Zwiebel dar, wobei die breite Mittelschicht den Kern bildete. Neuere Modelle wie die Sinus-Milieus differenzieren stärker nach Lebensstilen und Wertorientierungen. Die zunehmende soziale Ungleichheit — gemessen am Gini-Koeffizienten — hat in den letzten zwei Jahrzehnten zu einer Erosion der Mittelschicht geführt, die in der soziologischen Forschung intensiv diskutiert wird.",
        textVi: "Xã hội Đức đã được phân tích bằng nhiều mô hình phân tầng khác nhau trong nhiều thập kỷ. Mô hình 'hành tây' của Bolte từ những năm 1960 mô tả xã hội như một củ hành, trong đó tầng lớp trung lưu rộng lớn tạo thành phần lõi. Các mô hình mới hơn như Sinus-Milieus phân biệt rõ hơn theo lối sống và định hướng giá trị. Sự bất bình đẳng xã hội ngày càng tăng — được đo bằng hệ số Gini — đã dẫn đến sự suy giảm tầng lớp trung lưu trong hai thập kỷ qua, một chủ đề được thảo luận sôi nổi trong nghiên cứu xã hội học."
      },
      {
        type: "vocabulary",
        titleDe: "Fachbegriffe: Soziale Ungleichheit",
        titleVi: "Thuật ngữ chuyên ngành: Bất bình đẳng xã hội",
        words: [
          { de: "Soziale Schichtung", vi: "phân tầng xã hội", article: "die" },
          { de: "Gini-Koeffizient", vi: "hệ số Gini", article: "der" },
          { de: "Einkommensverteilung", vi: "phân phối thu nhập", article: "die" },
          { de: "Vermögenskonzentration", vi: "tập trung tài sản", article: "die" },
          { de: "Aufstiegsmobilität", vi: "khả năng thăng tiến xã hội", article: "die" },
          { de: "Prekarisierung", vi: "sự bấp bênh hóa (lao động)", article: "die" },
          { de: "Transferleistung", vi: "trợ cấp xã hội", article: "die" },
          { de: "Bildungsgerechtigkeit", vi: "công bằng giáo dục", article: "die" },
          { de: "Milieuforschung", vi: "nghiên cứu môi trường xã hội", article: "die" },
          { de: "Statusinkonsistenz", vi: "sự không nhất quán về địa vị", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nominalisierungen im wissenschaftlichen Kontext",
        titleVi: "Danh từ hóa trong ngữ cảnh khoa học",
        rule: "In der Wissenschaftssprache werden Verben und Adjektive häufig nominalisiert, um abstrakte Konzepte auszudrücken. Typische Suffixe: -ung (die Verteilung), -keit/-heit (die Gerechtigkeit), -ierung (die Prekarisierung), -tion (die Konzentration). Diese Nominalisierungen verdichten Information und sind im akademischen Deutsch unverzichtbar.",
        ruleVi: "Trong ngôn ngữ khoa học, động từ và tính từ thường được danh từ hóa để diễn đạt các khái niệm trừu tượng. Các hậu tố điển hình: -ung (die Verteilung — sự phân phối), -keit/-heit (die Gerechtigkeit — sự công bằng), -ierung (die Prekarisierung — sự bấp bênh hóa), -tion (die Konzentration — sự tập trung). Các danh từ hóa này nén thông tin lại và không thể thiếu trong tiếng Đức học thuật. So với tiếng Việt, nơi danh từ hóa đơn giản hơn (thêm 'sự', 'việc'), tiếng Đức yêu cầu nhớ hậu tố và giống (Genus) tương ứng.",
        examples: [
          { de: "Die Prekarisierung der Arbeitsverhältnisse nimmt zu.", vi: "Sự bấp bênh hóa các quan hệ lao động đang gia tăng." },
          { de: "Die Konzentration des Vermögens in den oberen Schichten ist ein zentrales Thema.", vi: "Sự tập trung tài sản ở các tầng lớp trên là một chủ đề trung tâm." },
          { de: "Die Wahrnehmung sozialer Ungleichheit variiert je nach Milieu.", vi: "Nhận thức về bất bình đẳng xã hội thay đổi tùy theo môi trường xã hội." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Seminar: Soziale Ungleichheit in Deutschland",
        titleVi: "Seminar: Bất bình đẳng xã hội ở Đức",
        lines: [
          { speaker: "Prof. Weber", de: "Welches Schichtmodell halten Sie für die gegenwärtige Analyse am geeignetsten?", vi: "Bạn cho rằng mô hình phân tầng nào phù hợp nhất cho phân tích hiện tại?" },
          { speaker: "Linh", de: "Meiner Ansicht nach greifen die traditionellen Schichtmodelle zu kurz. Die Sinus-Milieus erfassen die Komplexität der heutigen Gesellschaft differenzierter.", vi: "Theo quan điểm của tôi, các mô hình phân tầng truyền thống quá đơn giản. Sinus-Milieus nắm bắt sự phức tạp của xã hội ngày nay một cách chi tiết hơn." },
          { speaker: "Prof. Weber", de: "Ein berechtigter Einwand. Allerdings lässt sich fragen, ob Lebensstilanalysen nicht die strukturellen Machtverhältnisse verschleiern.", vi: "Một phản biện hợp lý. Tuy nhiên, có thể đặt câu hỏi liệu phân tích lối sống có che đậy các quan hệ quyền lực cấu trúc hay không." },
          { speaker: "Linh", de: "Das ist ein valider Punkt. Man könnte beide Ansätze komplementär einsetzen — die vertikale Schichtung für strukturelle Analyse und die Milieus für die Binnendifferenzierung.", vi: "Đó là một điểm hợp lý. Có thể sử dụng cả hai cách tiếp cận bổ sung cho nhau — phân tầng dọc cho phân tích cấu trúc và milieu cho sự phân biệt nội bộ." }
        ]
      },
      {
        type: "practice",
        titleDe: "Analyse: Soziale Mobilität",
        titleVi: "Phân tích: Di động xã hội",
        instruction: "Verfassen Sie einen kurzen analytischen Text (ca. 150 Wörter), in dem Sie die Aufstiegsmobilität in Deutschland mit der in Vietnam vergleichen. Verwenden Sie mindestens fünf Fachbegriffe aus dieser Lektion sowie Nominalisierungen. Argumentieren Sie differenziert und benennen Sie strukturelle Faktoren.",
        instructionVi: "Viết một bài phân tích ngắn (khoảng 150 từ), trong đó bạn so sánh khả năng thăng tiến xã hội ở Đức với Việt Nam. Sử dụng ít nhất năm thuật ngữ chuyên ngành từ bài học này cùng với các danh từ hóa. Lập luận có sắc thái và nêu rõ các yếu tố cấu trúc."
      }
    ]
  },

  // --- Chapter 7, Lesson 2: Demographischer Wandel ---
  {
    id: "c1-ch7-l2",
    chapterId: 7,
    lessonNumber: 2,
    title: "Demographischer Wandel",
    titleVi: "Biến đổi nhân khẩu học",
    type: "Einführung",
    objectives: [
      "Phân tích các xu hướng nhân khẩu học ở Đức và tác động xã hội",
      "Thảo luận về già hóa dân số, nhập cư và hệ thống hưu trí",
      "Sử dụng số liệu thống kê trong văn bản lập luận"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Deutschlands demographische Herausforderung",
        titleVi: "Thách thức nhân khẩu học của Đức",
        textDe: "Deutschland gehört zu den am stärksten alternden Gesellschaften weltweit. Die Geburtenrate liegt seit Jahrzehnten unter dem Bestandserhaltungsniveau von 2,1 Kindern pro Frau. Gleichzeitig steigt die Lebenserwartung kontinuierlich. Diese doppelte Dynamik — weniger Geburten bei längerer Lebensdauer — verschiebt den Altersquotienten dramatisch. Das umlagefinanzierte Rentensystem gerät dadurch unter erheblichen Druck, da immer weniger Erwerbstätige die Renten einer wachsenden Zahl von Ruheständlern finanzieren müssen. Zuwanderung wird zunehmend als demographischer Stabilisierungsfaktor diskutiert.",
        textVi: "Đức thuộc nhóm các xã hội già hóa nhanh nhất thế giới. Tỷ lệ sinh đã ở dưới mức duy trì dân số 2,1 trẻ/phụ nữ trong nhiều thập kỷ. Đồng thời, tuổi thọ trung bình liên tục tăng. Động lực kép này — ít sinh hơn nhưng sống lâu hơn — làm thay đổi đáng kể hệ số phụ thuộc tuổi già. Hệ thống hưu trí theo mô hình phân phối (pay-as-you-go) chịu áp lực lớn, vì ngày càng ít người lao động phải tài trợ lương hưu cho số người nghỉ hưu ngày càng tăng. Nhập cư ngày càng được thảo luận như một yếu tố ổn định nhân khẩu học."
      },
      {
        type: "vocabulary",
        titleDe: "Fachbegriffe: Demographie",
        titleVi: "Thuật ngữ chuyên ngành: Nhân khẩu học",
        words: [
          { de: "Geburtenrate", vi: "tỷ lệ sinh", article: "die" },
          { de: "Lebenserwartung", vi: "tuổi thọ trung bình", article: "die" },
          { de: "Bestandserhaltungsniveau", vi: "mức duy trì dân số", article: "das" },
          { de: "Altersquotient", vi: "hệ số phụ thuộc tuổi già", article: "der" },
          { de: "Umlageverfahren", vi: "hệ thống phân phối (hưu trí)", article: "das" },
          { de: "Erwerbsbevölkerung", vi: "dân số trong độ tuổi lao động", article: "die" },
          { de: "Fachkräftemangel", vi: "thiếu hụt lao động có chuyên môn", article: "der" },
          { de: "Generationenvertrag", vi: "hợp đồng thế hệ (hưu trí)", article: "der" },
          { de: "Bevölkerungspyramide", vi: "kim tự tháp dân số", article: "die" },
          { de: "Zuwanderungssaldo", vi: "cán cân nhập cư ròng", article: "das" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Passiversatzformen im Sachtext",
        titleVi: "Các dạng thay thế bị động trong văn bản chuyên môn",
        rule: "Neben dem Vorgangspassiv (werden + Partizip II) gibt es im gehobenen Deutsch zahlreiche Passiversatzformen: 1) 'sich lassen' + Infinitiv: Das lässt sich belegen. 2) 'sein' + 'zu' + Infinitiv: Die Daten sind zu interpretieren. 3) Adjektive auf -bar/-lich: Die Entwicklung ist vorhersehbar. 4) 'es gilt zu' + Infinitiv: Es gilt zu berücksichtigen, dass... Diese Formen gelten als stilistisch eleganter als das werden-Passiv.",
        ruleVi: "Bên cạnh bị động quá trình (werden + Partizip II), tiếng Đức cấp cao có nhiều dạng thay thế bị động: 1) 'sich lassen' + nguyên thể: Das lässt sich belegen (Điều này có thể được chứng minh). 2) 'sein' + 'zu' + nguyên thể: Die Daten sind zu interpretieren (Dữ liệu cần được diễn giải). 3) Tính từ đuôi -bar/-lich: Die Entwicklung ist vorhersehbar (Sự phát triển có thể dự đoán được). 4) 'es gilt zu' + nguyên thể: Es gilt zu berücksichtigen (Cần phải xem xét). Các dạng này được coi là thanh lịch hơn về mặt phong cách so với bị động werden.",
        examples: [
          { de: "Der Fachkräftemangel lässt sich nicht allein durch Zuwanderung beheben.", vi: "Tình trạng thiếu hụt lao động có chuyên môn không thể được khắc phục chỉ bằng nhập cư." },
          { de: "Die langfristigen Folgen sind kaum abzuschätzen.", vi: "Hậu quả dài hạn hầu như không thể ước tính được." },
          { de: "Es gilt zu bedenken, dass die Bevölkerungsprognosen mit Unsicherheiten behaftet sind.", vi: "Cần lưu ý rằng các dự báo dân số chứa đựng nhiều bất định." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Podiumsdiskussion: Zukunft der Rente",
        titleVi: "Thảo luận nhóm: Tương lai hệ thống hưu trí",
        lines: [
          { speaker: "Moderator", de: "Der Altersquotient wird sich bis 2050 voraussichtlich verdoppeln. Wie bewerten Sie die Tragfähigkeit des Rentensystems?", vi: "Hệ số phụ thuộc tuổi già dự kiến sẽ tăng gấp đôi vào năm 2050. Bạn đánh giá khả năng duy trì hệ thống hưu trí như thế nào?" },
          { speaker: "Dr. Müller", de: "Das Umlageverfahren stößt an seine Grenzen. Ohne eine Kombination aus höherem Renteneintrittsalter und kapitalgedeckter Zusatzvorsorge wird das System nicht tragfähig bleiben.", vi: "Hệ thống phân phối đang chạm đến giới hạn. Không có sự kết hợp giữa tăng tuổi nghỉ hưu và bảo hiểm bổ sung dựa trên vốn, hệ thống sẽ không bền vững." },
          { speaker: "Linh", de: "Aus vergleichender Perspektive lässt sich anmerken, dass Vietnam vor ähnlichen Herausforderungen steht, allerdings bei deutlich geringerer sozialer Absicherung.", vi: "Từ góc nhìn so sánh, có thể nhận xét rằng Việt Nam đối mặt với thách thức tương tự, tuy nhiên với mức bảo đảm xã hội thấp hơn đáng kể." },
          { speaker: "Dr. Müller", de: "Ein interessanter Vergleich. In der Tat könnten beide Länder voneinander lernen — Deutschland von Vietnams familiärer Solidarität und Vietnam von Deutschlands institutionellen Sicherungssystemen.", vi: "Một so sánh thú vị. Thực tế, cả hai nước có thể học hỏi lẫn nhau — Đức từ tinh thần đoàn kết gia đình của Việt Nam và Việt Nam từ các hệ thống bảo đảm thể chế của Đức." }
        ]
      },
      {
        type: "practice",
        titleDe: "Statistikbasierte Argumentation",
        titleVi: "Lập luận dựa trên thống kê",
        instruction: "Schreiben Sie einen argumentativen Absatz (ca. 120 Wörter), in dem Sie die demographische Situation Deutschlands analysieren. Verwenden Sie mindestens drei Passiversatzformen und integrieren Sie fiktive Statistiken zur Untermauerung Ihrer Argumentation. Beispiel: Laut dem Statistischen Bundesamt lässt sich ein Rückgang der Erwerbsbevölkerung um 15 % bis 2040 prognostizieren.",
        instructionVi: "Viết một đoạn lập luận (khoảng 120 từ), trong đó bạn phân tích tình hình nhân khẩu học của Đức. Sử dụng ít nhất ba dạng thay thế bị động và tích hợp số liệu thống kê (có thể hư cấu) để củng cố lập luận. Ví dụ: Laut dem Statistischen Bundesamt lässt sich ein Rückgang der Erwerbsbevölkerung um 15 % bis 2040 prognostizieren."
      }
    ]
  },

  // --- Chapter 7, Lesson 3: Soziologische Studien interpretieren ---
  {
    id: "c1-ch7-l3",
    chapterId: 7,
    lessonNumber: 3,
    title: "Soziologische Studien interpretieren",
    titleVi: "Diễn giải các nghiên cứu xã hội học",
    type: "Fertigkeit",
    objectives: [
      "Đọc hiểu và phân tích các nghiên cứu xã hội học bằng tiếng Đức",
      "Đánh giá phương pháp nghiên cứu và độ tin cậy của kết quả",
      "Trình bày và phản biện kết quả nghiên cứu một cách học thuật"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Soziologische Studien lesen und bewerten",
        titleVi: "Đọc và đánh giá các nghiên cứu xã hội học",
        textDe: "Das kritische Lesen soziologischer Studien erfordert die Fähigkeit, Forschungsdesign, Methodik und Schlussfolgerungen systematisch zu hinterfragen. Zentrale Fragen sind: Ist die Stichprobe repräsentativ? Sind die Variablen operationalisiert? Werden Kausalitäten oder lediglich Korrelationen nachgewiesen? Wie werden Störvariablen kontrolliert? Die Unterscheidung zwischen deskriptiver Statistik und inferentieller Statistik ist dabei ebenso bedeutsam wie die Berücksichtigung des Konfidenzintervalls und der statistischen Signifikanz.",
        textVi: "Đọc phê phán các nghiên cứu xã hội học đòi hỏi khả năng đặt câu hỏi một cách có hệ thống về thiết kế nghiên cứu, phương pháp và kết luận. Các câu hỏi trung tâm là: Mẫu có đại diện không? Các biến có được thao tác hóa không? Quan hệ nhân quả hay chỉ là tương quan được chứng minh? Các biến nhiễu được kiểm soát như thế nào? Sự phân biệt giữa thống kê mô tả và thống kê suy luận cũng quan trọng như việc xem xét khoảng tin cậy và ý nghĩa thống kê."
      },
      {
        type: "vocabulary",
        titleDe: "Fachbegriffe: Forschungsmethodik",
        titleVi: "Thuật ngữ chuyên ngành: Phương pháp nghiên cứu",
        words: [
          { de: "Stichprobe", vi: "mẫu nghiên cứu", article: "die" },
          { de: "Repräsentativität", vi: "tính đại diện", article: "die" },
          { de: "Korrelation", vi: "tương quan", article: "die" },
          { de: "Kausalität", vi: "quan hệ nhân quả", article: "die" },
          { de: "Signifikanzniveau", vi: "mức ý nghĩa thống kê", article: "das" },
          { de: "Konfidenzintervall", vi: "khoảng tin cậy", article: "das" },
          { de: "Längsschnittstudie", vi: "nghiên cứu theo chiều dọc", article: "die" },
          { de: "Querschnittstudie", vi: "nghiên cứu cắt ngang", article: "die" },
          { de: "Operationalisierung", vi: "thao tác hóa (biến số)", article: "die" },
          { de: "Störvariable", vi: "biến nhiễu", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Konjunktiv I in der indirekten Rede — wissenschaftliches Referieren",
        titleVi: "Konjunktiv I trong lời nói gián tiếp — trích dẫn khoa học",
        rule: "In wissenschaftlichen Texten wird der Konjunktiv I verwendet, um fremde Forschungsergebnisse wiederzugeben und sich davon zu distanzieren. Bildung: Stamm + Konjunktiv-Endungen (-e, -est, -e, -en, -et, -en). Bei Formgleichheit mit Indikativ → Konjunktiv II verwenden. Signalverben: berichten, feststellen, argumentieren, konstatieren, postulieren. Wichtig: Der Konjunktiv I signalisiert, dass man die Aussage referiert, ohne sie sich zu eigen zu machen.",
        ruleVi: "Trong văn bản khoa học, Konjunktiv I được sử dụng để trình bày kết quả nghiên cứu của người khác và giữ khoảng cách với nội dung đó. Cách tạo: gốc từ + đuôi Konjunktiv (-e, -est, -e, -en, -et, -en). Khi hình thức giống Indikativ → dùng Konjunktiv II. Các động từ tín hiệu: berichten (báo cáo), feststellen (nhận định), argumentieren (lập luận), konstatieren (xác nhận), postulieren (đặt giả thuyết). Quan trọng: Konjunktiv I báo hiệu rằng người viết đang trích dẫn quan điểm, chứ không phải quan điểm của chính mình. Tiếng Việt không có dạng ngữ pháp tương đương — thường dùng 'theo X', 'X cho rằng'.",
        examples: [
          { de: "Laut der Studie sei die soziale Mobilität in den letzten Jahrzehnten zurückgegangen.", vi: "Theo nghiên cứu, di động xã hội đã giảm trong những thập kỷ gần đây." },
          { de: "Die Autoren konstatierten, der Zusammenhang zwischen Bildung und Einkommen habe sich verstärkt.", vi: "Các tác giả nhận định rằng mối liên hệ giữa giáo dục và thu nhập đã tăng cường." },
          { de: "Müller (2023) argumentiere, die bisherigen Modelle seien unzureichend.", vi: "Müller (2023) lập luận rằng các mô hình hiện tại là không đủ." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Forschungskolloquium: Kritische Diskussion einer Studie",
        titleVi: "Hội thảo nghiên cứu: Thảo luận phê phán một nghiên cứu",
        lines: [
          { speaker: "Prof. Klein", de: "Frau Nguyen, wie bewerten Sie die methodische Vorgehensweise der Studie von Hartmann zur Elitenreproduktion?", vi: "Chị Nguyễn, chị đánh giá phương pháp tiếp cận của nghiên cứu Hartmann về tái tạo giới tinh hoa như thế nào?" },
          { speaker: "Linh", de: "Die Studie liefert wertvolle Erkenntnisse, allerdings ist die Stichprobe mit 500 Befragten für bundesweite Aussagen meines Erachtens zu klein. Zudem fehlt eine Kontrollgruppe.", vi: "Nghiên cứu cung cấp những hiểu biết có giá trị, tuy nhiên theo tôi mẫu 500 người được khảo sát là quá nhỏ cho những nhận định trên toàn quốc. Hơn nữa, thiếu nhóm đối chứng." },
          { speaker: "Prof. Klein", de: "Sehr gut beobachtet. Was würden Sie hinsichtlich der Kausalitätsannahmen einwenden?", vi: "Quan sát rất tốt. Chị sẽ phản biện gì về các giả định nhân quả?" },
          { speaker: "Linh", de: "Hartmann postuliere einen kausalen Zusammenhang zwischen Herkunftsmilieu und Karriereerfolg. Jedoch handele es sich methodisch lediglich um Korrelationen. Die Studie kontrolliere wesentliche Störvariablen wie individuelle Begabung und Netzwerkeffekte nicht hinreichend.", vi: "Hartmann đặt giả thuyết về mối quan hệ nhân quả giữa môi trường xuất thân và thành công nghề nghiệp. Tuy nhiên, về mặt phương pháp, đây chỉ là tương quan. Nghiên cứu không kiểm soát đầy đủ các biến nhiễu quan trọng như năng khiếu cá nhân và hiệu ứng mạng lưới." }
        ]
      },
      {
        type: "practice",
        titleDe: "Kritische Analyse einer Studienaussage",
        titleVi: "Phân tích phê phán một nhận định nghiên cứu",
        instruction: "Referieren Sie die folgende Studienaussage im Konjunktiv I und formulieren Sie anschließend drei methodische Einwände: '72 % der befragten Deutschen gaben an, dass sie sich zur Mittelschicht zählen. Daraus lässt sich schließen, dass die Mittelschicht in Deutschland stabil ist.' Verwenden Sie Fachbegriffe wie Stichprobe, Repräsentativität, Operationalisierung.",
        instructionVi: "Trích dẫn nhận định nghiên cứu sau bằng Konjunktiv I và sau đó nêu ba phản biện về phương pháp: '72 % người Đức được hỏi cho biết họ tự xếp mình vào tầng lớp trung lưu. Từ đó có thể kết luận rằng tầng lớp trung lưu ở Đức ổn định.' Sử dụng các thuật ngữ chuyên ngành như Stichprobe, Repräsentativität, Operationalisierung."
      }
    ]
  },

  // --- Chapter 7, Lesson 4: Komplexe Attribute & Appositionen ---
  {
    id: "c1-ch7-l4",
    chapterId: 7,
    lessonNumber: 4,
    title: "Komplexe Attribute & Appositionen",
    titleVi: "Định ngữ phức tạp & Đồng vị ngữ",
    type: "Grammatik",
    objectives: [
      "Hiểu và sử dụng định ngữ mở rộng (erweitertes Attribut) trong văn bản học thuật",
      "Nắm vững cấu trúc đồng vị ngữ (Apposition) ở các cấp độ phức tạp",
      "Phân tích cú pháp câu dài trong văn bản khoa học xã hội"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Erweiterte Attribute und Appositionen",
        titleVi: "Định ngữ mở rộng và Đồng vị ngữ",
        textDe: "In wissenschaftlichen Texten werden Nominalgruppen häufig durch komplexe Attribute erweitert, die in der gesprochenen Sprache als Relativsätze formuliert würden. Das erweiterte Partizipialattribut steht zwischen Artikel und Nomen und kann selbst durch weitere Angaben ergänzt werden. Appositionen — eingeschobene Erläuterungen — stehen im gleichen Kasus wie ihr Bezugswort und werden durch Kommata abgetrennt. Beide Strukturen komprimieren Information und erhöhen die Informationsdichte eines Textes erheblich.",
        textVi: "Trong văn bản khoa học, các nhóm danh từ thường được mở rộng bằng các định ngữ phức tạp, mà trong ngôn ngữ nói sẽ được diễn đạt bằng mệnh đề quan hệ. Định ngữ phân từ mở rộng đứng giữa mạo từ và danh từ, và bản thân nó có thể được bổ sung thêm. Đồng vị ngữ — các lời giải thích chèn vào — đứng cùng cách (Kasus) với từ mà chúng bổ nghĩa và được tách bằng dấu phẩy. Cả hai cấu trúc đều nén thông tin và tăng đáng kể mật độ thông tin của văn bản. Đây là thách thức lớn cho người Việt học tiếng Đức vì tiếng Việt không có cấu trúc tương đương — tiếng Việt dùng các mệnh đề phụ với 'mà', 'được'."
      },
      {
        type: "grammar",
        titleDe: "Das erweiterte Partizipialattribut",
        titleVi: "Định ngữ phân từ mở rộng",
        rule: "Struktur: Artikel + [Erweiterungen + Partizip I/II (dekliniert)] + Nomen. Das Partizip I (Aktiv, gleichzeitig): der die Studie durchführende Forscher = der Forscher, der die Studie durchführt. Das Partizip II (Passiv, vorzeitig): die im Jahr 2023 veröffentlichte Studie = die Studie, die im Jahr 2023 veröffentlicht wurde. Die Erweiterungen können Adverbien, Präpositionalphrasen und Objekte umfassen.",
        ruleVi: "Cấu trúc: Mạo từ + [Phần mở rộng + Partizip I/II (biến cách)] + Danh từ. Partizip I (chủ động, đồng thời): der die Studie durchführende Forscher = nhà nghiên cứu đang thực hiện nghiên cứu. Partizip II (bị động, trước đó): die im Jahr 2023 veröffentlichte Studie = nghiên cứu được xuất bản năm 2023. Phần mở rộng có thể bao gồm trạng từ, cụm giới từ và tân ngữ. Mẹo cho người Việt: Đọc ngược từ danh từ → phân từ → phần mở rộng để hiểu nghĩa.",
        examples: [
          { de: "Die seit den 1990er-Jahren kontinuierlich zunehmende Einkommensungleichheit betrifft alle westlichen Industriestaaten.", vi: "Sự bất bình đẳng thu nhập liên tục gia tăng kể từ những năm 1990 ảnh hưởng đến tất cả các nước công nghiệp phương Tây." },
          { de: "Der von der Bundesregierung in Auftrag gegebene Armutsbericht dokumentiert die Entwicklung.", vi: "Báo cáo về nghèo đói được chính phủ liên bang ủy thác ghi nhận sự phát triển." },
          { de: "Die an 5.000 Haushalten durchgeführte Längsschnittstudie liefert belastbare Daten.", vi: "Nghiên cứu dọc được thực hiện trên 5.000 hộ gia đình cung cấp dữ liệu đáng tin cậy." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Appositionen im wissenschaftlichen Stil",
        titleVi: "Đồng vị ngữ trong phong cách khoa học",
        rule: "Appositionen stehen im gleichen Kasus wie ihr Bezugswort. Typen: 1) Erklärende Apposition: Pierre Bourdieu, ein französischer Soziologe, prägte den Begriff. 2) Einschränkende Apposition: Die Studie, eine der umfangreichsten ihrer Art, wurde 2022 publiziert. 3) Aufzählende Apposition: Mehrere Faktoren — Bildung, Einkommen und Herkunft — beeinflussen die Mobilität. Appositionen werden durch Kommata, Gedankenstriche oder Klammern abgetrennt.",
        ruleVi: "Đồng vị ngữ đứng cùng cách với từ mà chúng bổ nghĩa. Các loại: 1) Đồng vị ngữ giải thích: Pierre Bourdieu, một nhà xã hội học Pháp, đã đặt ra khái niệm này. 2) Đồng vị ngữ hạn định: Nghiên cứu, một trong những nghiên cứu toàn diện nhất thuộc loại này, được xuất bản năm 2022. 3) Đồng vị ngữ liệt kê: Nhiều yếu tố — giáo dục, thu nhập và nguồn gốc — ảnh hưởng đến di động xã hội. Đồng vị ngữ được tách bằng dấu phẩy, gạch ngang hoặc dấu ngoặc.",
        examples: [
          { de: "Der Gini-Koeffizient, ein Maß für die Ungleichverteilung, liegt in Deutschland bei 0,31.", vi: "Hệ số Gini, một thước đo cho sự phân phối bất bình đẳng, ở Đức là 0,31." },
          { de: "Ulrich Beck, einer der einflussreichsten deutschen Soziologen, entwickelte das Konzept der Risikogesellschaft.", vi: "Ulrich Beck, một trong những nhà xã hội học Đức có ảnh hưởng nhất, đã phát triển khái niệm xã hội rủi ro." },
          { de: "Drei Dimensionen — Bildung, Beruf und Einkommen — bestimmen nach Geißler den sozialen Status.", vi: "Ba chiều — giáo dục, nghề nghiệp và thu nhập — theo Geißler quyết định địa vị xã hội." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Textanalyse im Seminar",
        titleVi: "Phân tích văn bản trong seminar",
        lines: [
          { speaker: "Prof. Weber", de: "Analysieren Sie bitte den folgenden Satz syntaktisch: 'Die in den letzten zwei Dekaden von mehreren Forschungsinstituten unabhängig voneinander durchgeführten Untersuchungen bestätigen den Trend.'", vi: "Hãy phân tích cú pháp câu sau: 'Die in den letzten zwei Dekaden von mehreren Forschungsinstituten unabhängig voneinander durchgeführten Untersuchungen bestätigen den Trend.'" },
          { speaker: "Linh", de: "Der Kern ist: 'Die Untersuchungen bestätigen den Trend.' Zwischen Artikel und Nomen steht ein erweitertes Partizipialattribut mit dem Partizip II 'durchgeführten'. Die Erweiterungen umfassen eine temporale Angabe, eine agentive Präpositionalphrase und ein Modaladverb.", vi: "Phần lõi là: 'Die Untersuchungen bestätigen den Trend' (Các nghiên cứu xác nhận xu hướng). Giữa mạo từ và danh từ là một định ngữ phân từ mở rộng với Partizip II 'durchgeführten'. Các phần mở rộng bao gồm một bổ ngữ thời gian, một cụm giới từ chỉ tác nhân và một trạng từ chỉ cách thức." },
          { speaker: "Prof. Weber", de: "Ausgezeichnet. Und wie würden Sie diesen Satz in der gesprochenen Sprache umformulieren?", vi: "Xuất sắc. Và bạn sẽ diễn đạt lại câu này trong ngôn ngữ nói như thế nào?" },
          { speaker: "Linh", de: "Die Untersuchungen, die in den letzten zwei Dekaden von mehreren Forschungsinstituten unabhängig voneinander durchgeführt wurden, bestätigen den Trend.", vi: "Các nghiên cứu, mà đã được thực hiện một cách độc lập bởi nhiều viện nghiên cứu trong hai thập kỷ qua, xác nhận xu hướng." }
        ]
      },
      {
        type: "practice",
        titleDe: "Umformung: Relativsätze → erweiterte Attribute",
        titleVi: "Chuyển đổi: Mệnh đề quan hệ → Định ngữ mở rộng",
        instruction: "Formen Sie die folgenden Relativsätze in erweiterte Partizipialattribute um: 1) Die Studie, die von der Universität Heidelberg durchgeführt wurde, zeigt... 2) Die Maßnahmen, die von der Regierung beschlossenen werden, betreffen... 3) Der Soziologe, der sich seit Jahren mit Prekarisierung beschäftigt, veröffentlichte... Formulieren Sie anschließend zwei eigene Sätze mit erweiterten Attributen zum Thema Gesellschaftsanalyse.",
        instructionVi: "Chuyển các mệnh đề quan hệ sau thành định ngữ phân từ mở rộng: 1) Die Studie, die von der Universität Heidelberg durchgeführt wurde, zeigt... 2) Die Maßnahmen, die von der Regierung beschlossen werden, betreffen... 3) Der Soziologe, der sich seit Jahren mit Prekarisierung beschäftigt, veröffentlichte... Sau đó viết hai câu riêng với định ngữ mở rộng về chủ đề phân tích xã hội."
      }
    ]
  },

  // ============================================================
  // CHAPTER 8: Technologie & künstliche Intelligenz
  // ============================================================

  // --- Chapter 8, Lesson 1: KI-Ethik & Regulierung ---
  {
    id: "c1-ch8-l1",
    chapterId: 8,
    lessonNumber: 1,
    title: "KI-Ethik & Regulierung",
    titleVi: "Đạo đức AI & Quy định pháp lý",
    type: "Einführung",
    objectives: [
      "Thảo luận về các vấn đề đạo đức trong trí tuệ nhân tạo",
      "Phân tích khung pháp lý EU AI Act và các quy định của Đức",
      "Lập luận về cân bằng giữa đổi mới và quản lý rủi ro"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Künstliche Intelligenz: Ethische Dimensionen",
        titleVi: "Trí tuệ nhân tạo: Các chiều kích đạo đức",
        textDe: "Die rasante Entwicklung künstlicher Intelligenz wirft fundamentale ethische Fragen auf, die weit über technische Aspekte hinausgehen. Algorithmische Entscheidungssysteme beeinflussen zunehmend Kreditvergabe, Bewerbungsverfahren und strafrechtliche Prognosen. Die inhärente Intransparenz neuronaler Netze — das sogenannte Black-Box-Problem — erschwert die Nachvollziehbarkeit automatisierter Entscheidungen. Die Europäische Union hat mit dem AI Act den weltweit ersten umfassenden Rechtsrahmen für KI geschaffen, der einen risikobasierten Ansatz verfolgt: Je höher das Risiko eines KI-Systems, desto strenger die regulatorischen Anforderungen.",
        textVi: "Sự phát triển nhanh chóng của trí tuệ nhân tạo đặt ra những câu hỏi đạo đức cơ bản vượt xa các khía cạnh kỹ thuật. Các hệ thống quyết định thuật toán ngày càng ảnh hưởng đến việc cấp tín dụng, quy trình tuyển dụng và dự báo hình sự. Tính không minh bạch vốn có của mạng nơ-ron — cái gọi là vấn đề hộp đen — làm khó khăn việc truy xuất các quyết định tự động. Liên minh châu Âu đã tạo ra khung pháp lý toàn diện đầu tiên trên thế giới cho AI với AI Act, theo cách tiếp cận dựa trên rủi ro: Rủi ro của hệ thống AI càng cao, yêu cầu quản lý càng nghiêm ngặt."
      },
      {
        type: "vocabulary",
        titleDe: "Fachbegriffe: KI-Ethik & Regulierung",
        titleVi: "Thuật ngữ chuyên ngành: Đạo đức AI & Quy định",
        words: [
          { de: "Algorithmische Entscheidungsfindung", vi: "ra quyết định thuật toán", article: "die" },
          { de: "Erklärbarkeit", vi: "khả năng giải thích (của AI)", article: "die" },
          { de: "Nachvollziehbarkeit", vi: "khả năng truy xuất", article: "die" },
          { de: "Verzerrung (Bias)", vi: "thiên lệch (trong dữ liệu/thuật toán)", article: "die" },
          { de: "Risikoklassifizierung", vi: "phân loại rủi ro", article: "die" },
          { de: "Hochrisiko-KI-System", vi: "hệ thống AI rủi ro cao", article: "das" },
          { de: "Konformitätsbewertung", vi: "đánh giá sự phù hợp", article: "die" },
          { de: "Grundrechtsfolgenabschätzung", vi: "đánh giá tác động quyền cơ bản", article: "die" },
          { de: "Haftungsregelung", vi: "quy định trách nhiệm pháp lý", article: "die" },
          { de: "Menschliche Aufsicht", vi: "giám sát của con người", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Konzessive Strukturen auf C1-Niveau",
        titleVi: "Cấu trúc nhượng bộ ở trình độ C1",
        rule: "Differenzierte konzessive Konnektoren für akademisches Argumentieren: 1) 'Wenngleich/Obgleich' + Nebensatz (gehoben): Wenngleich KI enorme Chancen bietet, birgt sie auch Risiken. 2) 'Ungeachtet' + Genitiv: Ungeachtet der Fortschritte bleibt das Black-Box-Problem bestehen. 3) 'Sosehr ... auch': Sosehr man den Fortschritt begrüßt, so kritisch muss man die Risiken bewerten. 4) 'Nichtsdestotrotz/Nichtsdestoweniger' (Satzadverb): Die Risiken sind real. Nichtsdestotrotz überwiegen die Chancen.",
        ruleVi: "Các liên từ nhượng bộ tinh tế cho lập luận học thuật: 1) 'Wenngleich/Obgleich' + mệnh đề phụ (trang trọng): Mặc dù AI mang lại cơ hội lớn, nó cũng tiềm ẩn rủi ro. 2) 'Ungeachtet' + Genitiv: Bất chấp tiến bộ, vấn đề hộp đen vẫn tồn tại. 3) 'Sosehr ... auch': Dù người ta hoan nghênh tiến bộ đến đâu, thì cũng phải đánh giá rủi ro một cách phê phán. 4) 'Nichtsdestotrotz/Nichtsdestoweniger' (trạng từ câu): Rủi ro là thực. Tuy nhiên cơ hội vẫn lớn hơn. Tiếng Việt dùng 'mặc dù...nhưng', 'tuy...nhưng' — tiếng Đức phân biệt nhiều cấp độ trang trọng hơn.",
        examples: [
          { de: "Wenngleich der EU AI Act einen bedeutenden Fortschritt darstellt, bleiben zahlreiche Implementierungsfragen offen.", vi: "Mặc dù EU AI Act là một bước tiến đáng kể, nhiều câu hỏi về triển khai vẫn còn mở." },
          { de: "Ungeachtet der beeindruckenden Leistungsfähigkeit generativer KI sind die Halluzinationsprobleme noch nicht gelöst.", vi: "Bất chấp hiệu suất ấn tượng của AI tạo sinh, các vấn đề về ảo giác (hallucination) vẫn chưa được giải quyết." },
          { de: "Sosehr algorithmische Entscheidungssysteme die Effizienz steigern, so dringend bedarf es menschlicher Aufsicht.", vi: "Dù hệ thống quyết định thuật toán tăng hiệu quả đến đâu, thì nhu cầu giám sát của con người cũng cấp bách không kém." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Debatte: Soll KI reguliert werden?",
        titleVi: "Tranh luận: AI có nên được quản lý không?",
        lines: [
          { speaker: "Dr. Hoffmann", de: "Ich vertrete die Position, dass eine zu strenge Regulierung den Innovationsstandort Europa gefährdet. Wir dürfen nicht in eine Überregulierung verfallen, die uns im globalen Wettbewerb zurückwirft.", vi: "Tôi đại diện cho quan điểm rằng quy định quá nghiêm ngặt đe dọa vị thế đổi mới của châu Âu. Chúng ta không được rơi vào tình trạng quản lý quá mức khiến chúng ta bị tụt hậu trong cạnh tranh toàn cầu." },
          { speaker: "Linh", de: "Wenngleich ich Ihre Bedenken hinsichtlich der Wettbewerbsfähigkeit nachvollziehen kann, möchte ich darauf hinweisen, dass gerade der risikobasierte Ansatz des AI Acts einen differenzierten Mittelweg darstellt.", vi: "Mặc dù tôi có thể hiểu mối lo ngại của ông về khả năng cạnh tranh, tôi muốn chỉ ra rằng chính cách tiếp cận dựa trên rủi ro của AI Act là một con đường trung dung tinh tế." },
          { speaker: "Dr. Hoffmann", de: "Nichtsdestotrotz verzögern die Konformitätsbewertungsverfahren den Marktzugang erheblich. Start-ups können sich diesen bürokratischen Aufwand schlichtweg nicht leisten.", vi: "Tuy nhiên, các quy trình đánh giá sự phù hợp làm chậm đáng kể việc tiếp cận thị trường. Các start-up đơn giản là không thể gánh chịu chi phí hành chính này." },
          { speaker: "Linh", de: "Ungeachtet der kurzfristigen Kosten schaffen klare Regeln langfristig Rechtssicherheit und damit Vertrauen — eine unverzichtbare Voraussetzung für die breite gesellschaftliche Akzeptanz von KI.", vi: "Bất chấp chi phí ngắn hạn, các quy tắc rõ ràng tạo ra sự chắc chắn pháp lý dài hạn và từ đó tạo niềm tin — một điều kiện tiên quyết không thể thiếu cho sự chấp nhận rộng rãi của xã hội đối với AI." }
        ]
      },
      {
        type: "practice",
        titleDe: "Erörterung: KI-Regulierung",
        titleVi: "Bài luận: Quy định AI",
        instruction: "Verfassen Sie eine dialektische Erörterung (ca. 200 Wörter) zur Frage: 'Führt die Regulierung von KI zu mehr Sicherheit oder hemmt sie den Fortschritt?' Verwenden Sie mindestens drei verschiedene konzessive Konnektoren und positionieren Sie sich abschließend differenziert. Strukturieren Sie: These — Antithese — Synthese.",
        instructionVi: "Viết một bài luận biện chứng (khoảng 200 từ) cho câu hỏi: 'Việc quản lý AI dẫn đến an toàn hơn hay cản trở tiến bộ?' Sử dụng ít nhất ba liên từ nhượng bộ khác nhau và đưa ra quan điểm có sắc thái ở phần kết. Cấu trúc: Luận đề — Phản đề — Tổng hợp."
      }
    ]
  },

  // --- Chapter 8, Lesson 2: Datenschutz & digitale Rechte ---
  {
    id: "c1-ch8-l2",
    chapterId: 8,
    lessonNumber: 2,
    title: "Datenschutz & digitale Rechte",
    titleVi: "Bảo vệ dữ liệu & Quyền kỹ thuật số",
    type: "Einführung",
    objectives: [
      "Hiểu hệ thống bảo vệ dữ liệu của Đức và EU (DSGVO)",
      "Thảo luận về quyền riêng tư kỹ thuật số trong bối cảnh toàn cầu",
      "Sử dụng thuật ngữ pháp lý chính xác trong ngữ cảnh C1"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Die DSGVO und das deutsche Datenschutzverständnis",
        titleVi: "DSGVO và quan niệm bảo vệ dữ liệu của Đức",
        textDe: "Deutschland hat eine historisch gewachsene Datenschutztradition, die im Volkszählungsurteil des Bundesverfassungsgerichts von 1983 wurzelt. Das Recht auf informationelle Selbstbestimmung — ein vom Gericht entwickeltes Grundrecht — bildet das Fundament des deutschen und europäischen Datenschutzrechts. Die Datenschutz-Grundverordnung (DSGVO), die seit 2018 in der gesamten EU gilt, normiert Grundsätze wie Datenminimierung, Zweckbindung und Transparenz. Für die Verarbeitung personenbezogener Daten ist grundsätzlich eine Rechtsgrundlage erforderlich — sei es eine Einwilligung, ein Vertrag oder ein berechtigtes Interesse.",
        textVi: "Đức có truyền thống bảo vệ dữ liệu phát triển theo lịch sử, bắt nguồn từ phán quyết điều tra dân số của Tòa án Hiến pháp Liên bang năm 1983. Quyền tự quyết định thông tin — một quyền cơ bản do tòa án phát triển — tạo nền tảng cho luật bảo vệ dữ liệu Đức và châu Âu. Quy định Bảo vệ Dữ liệu Chung (DSGVO/GDPR), có hiệu lực trên toàn EU từ 2018, quy chuẩn hóa các nguyên tắc như tối thiểu hóa dữ liệu, ràng buộc mục đích và minh bạch. Để xử lý dữ liệu cá nhân, về nguyên tắc cần một cơ sở pháp lý — dù là sự đồng ý, hợp đồng hay lợi ích chính đáng."
      },
      {
        type: "vocabulary",
        titleDe: "Fachbegriffe: Datenschutzrecht",
        titleVi: "Thuật ngữ chuyên ngành: Luật bảo vệ dữ liệu",
        words: [
          { de: "Informationelle Selbstbestimmung", vi: "quyền tự quyết định thông tin", article: "die" },
          { de: "Datenschutz-Grundverordnung (DSGVO)", vi: "Quy định Bảo vệ Dữ liệu Chung (GDPR)", article: "die" },
          { de: "Datenminimierung", vi: "tối thiểu hóa dữ liệu", article: "die" },
          { de: "Zweckbindung", vi: "ràng buộc mục đích", article: "die" },
          { de: "Einwilligung", vi: "sự đồng ý (xử lý dữ liệu)", article: "die" },
          { de: "Berechtigtes Interesse", vi: "lợi ích chính đáng", article: "das" },
          { de: "Datenschutzfolgenabschätzung", vi: "đánh giá tác động bảo vệ dữ liệu", article: "die" },
          { de: "Recht auf Vergessenwerden", vi: "quyền được quên", article: "das" },
          { de: "Auftragsdatenverarbeitung", vi: "xử lý dữ liệu theo ủy thác", article: "die" },
          { de: "Datenschutzbeauftragter", vi: "nhân viên bảo vệ dữ liệu", article: "der" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Funktionsverbgefüge im Rechtskontext",
        titleVi: "Cụm động từ chức năng trong ngữ cảnh pháp lý",
        rule: "Funktionsverbgefüge (FVG) bestehen aus einem Funktionsverb + Nomen und ersetzen einfache Verben. Sie sind typisch für die Rechts- und Verwaltungssprache. Beispiele: in Kraft treten (= gelten), Anwendung finden (= angewendet werden), in Anspruch nehmen (= beanspruchen), zur Verfügung stellen (= bereitstellen), Einfluss nehmen auf (= beeinflussen), in Einklang bringen mit (= angleichen). FVG klingen formeller und ermöglichen differenziertere Aussagen durch Attribute zum Nomen.",
        ruleVi: "Cụm động từ chức năng (FVG) gồm một động từ chức năng + danh từ, thay thế các động từ đơn giản. Chúng đặc trưng cho ngôn ngữ pháp lý và hành chính. Ví dụ: in Kraft treten (= có hiệu lực), Anwendung finden (= được áp dụng), in Anspruch nehmen (= yêu cầu), zur Verfügung stellen (= cung cấp), Einfluss nehmen auf (= ảnh hưởng), in Einklang bringen mit (= làm phù hợp với). FVG nghe trang trọng hơn và cho phép diễn đạt chi tiết hơn thông qua các định ngữ cho danh từ. Người Việt cần lưu ý: FVG không thể dịch từng từ — phải học cả cụm.",
        examples: [
          { de: "Die DSGVO ist am 25. Mai 2018 in Kraft getreten.", vi: "DSGVO đã có hiệu lực vào ngày 25 tháng 5 năm 2018." },
          { de: "Das Recht auf Vergessenwerden findet unter bestimmten Voraussetzungen Anwendung.", vi: "Quyền được quên được áp dụng trong những điều kiện nhất định." },
          { de: "Die nationalen Regelungen sind mit dem EU-Recht in Einklang zu bringen.", vi: "Các quy định quốc gia cần được đưa vào phù hợp với luật EU." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Fachgespräch: DSGVO in der Praxis",
        titleVi: "Trao đổi chuyên môn: DSGVO trong thực tế",
        lines: [
          { speaker: "Herr Schmidt", de: "Als Datenschutzbeauftragter unseres Unternehmens muss ich eine Datenschutzfolgenabschätzung für das neue KI-Recruiting-Tool durchführen.", vi: "Với tư cách nhân viên bảo vệ dữ liệu của công ty, tôi phải thực hiện đánh giá tác động bảo vệ dữ liệu cho công cụ tuyển dụng AI mới." },
          { speaker: "Linh", de: "Welche Rechtsgrundlage ziehen Sie für die Verarbeitung der Bewerberdaten heran?", vi: "Ông sử dụng cơ sở pháp lý nào cho việc xử lý dữ liệu ứng viên?" },
          { speaker: "Herr Schmidt", de: "Wir stützen uns auf das berechtigte Interesse gemäß Art. 6 Abs. 1 lit. f DSGVO, da eine individuelle Einwilligung bei Tausenden von Bewerbungen praktisch nicht umsetzbar ist.", vi: "Chúng tôi dựa vào lợi ích chính đáng theo Điều 6 Khoản 1 mục f DSGVO, vì việc xin đồng ý cá nhân với hàng nghìn đơn ứng tuyển là không khả thi trong thực tế." },
          { speaker: "Linh", de: "Haben Sie dabei berücksichtigt, dass automatisierte Einzelentscheidungen gemäß Art. 22 DSGVO grundsätzlich unzulässig sind? Die betroffenen Personen haben ein Recht auf menschliche Überprüfung.", vi: "Ông đã xem xét rằng các quyết định cá nhân tự động theo Điều 22 DSGVO về nguyên tắc là không được phép chưa? Những người bị ảnh hưởng có quyền yêu cầu kiểm tra bởi con người." }
        ]
      },
      {
        type: "practice",
        titleDe: "Stellungnahme: Digitale Rechte",
        titleVi: "Bài luận quan điểm: Quyền kỹ thuật số",
        instruction: "Verfassen Sie eine Stellungnahme (ca. 150 Wörter) zu der Frage: 'Ist das europäische Datenschutzmodell ein Exportschlager oder ein Wettbewerbsnachteil?' Vergleichen Sie den europäischen Ansatz mit dem in Vietnam oder Asien. Verwenden Sie mindestens vier Funktionsverbgefüge und beziehen Sie sich auf konkrete Regelungen.",
        instructionVi: "Viết bài luận quan điểm (khoảng 150 từ) cho câu hỏi: 'Mô hình bảo vệ dữ liệu châu Âu là sản phẩm xuất khẩu thành công hay bất lợi cạnh tranh?' So sánh cách tiếp cận châu Âu với Việt Nam hoặc châu Á. Sử dụng ít nhất bốn cụm động từ chức năng và tham chiếu đến các quy định cụ thể."
      }
    ]
  },

  // --- Chapter 8, Lesson 3: Technologiefolgenabschätzung ---
  {
    id: "c1-ch8-l3",
    chapterId: 8,
    lessonNumber: 3,
    title: "Technologiefolgenabschätzung",
    titleVi: "Đánh giá tác động công nghệ",
    type: "Fertigkeit",
    objectives: [
      "Phân tích tác động đa chiều của công nghệ đối với xã hội",
      "Viết báo cáo đánh giá tác động công nghệ theo chuẩn học thuật",
      "Phát triển kỹ năng lập luận cân bằng giữa lợi ích và rủi ro"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Was ist Technologiefolgenabschätzung?",
        titleVi: "Đánh giá tác động công nghệ là gì?",
        textDe: "Technologiefolgenabschätzung (TA) ist ein systematischer Analyse- und Beratungsprozess, der die Auswirkungen neuer Technologien auf Gesellschaft, Wirtschaft und Umwelt untersucht — und zwar prospektiv, also bevor unerwünschte Folgen eintreten. In Deutschland ist das Büro für Technikfolgen-Abschätzung beim Deutschen Bundestag (TAB) die zentrale Institution. Die TA geht über rein technische Risikoanalysen hinaus und bezieht soziale, ethische, ökologische und ökonomische Dimensionen ein. Sie dient der politischen Entscheidungsfindung, indem sie Handlungsoptionen und deren Konsequenzen transparent macht.",
        textVi: "Đánh giá tác động công nghệ (TA) là một quy trình phân tích và tư vấn có hệ thống, nghiên cứu các tác động của công nghệ mới đối với xã hội, kinh tế và môi trường — và đặc biệt là một cách tiền cứu (prospektiv), tức là trước khi các hậu quả không mong muốn xảy ra. Ở Đức, Văn phòng Đánh giá Hệ quả Công nghệ tại Quốc hội Liên bang (TAB) là tổ chức trung tâm. TA vượt ra ngoài phân tích rủi ro kỹ thuật thuần túy và bao gồm các chiều kích xã hội, đạo đức, sinh thái và kinh tế. Nó phục vụ quá trình ra quyết định chính trị bằng cách làm minh bạch các lựa chọn hành động và hệ quả của chúng."
      },
      {
        type: "vocabulary",
        titleDe: "Fachbegriffe: Technologiefolgenabschätzung",
        titleVi: "Thuật ngữ chuyên ngành: Đánh giá tác động công nghệ",
        words: [
          { de: "Technologiefolgenabschätzung", vi: "đánh giá tác động công nghệ", article: "die" },
          { de: "Prospektive Analyse", vi: "phân tích tiền cứu", article: "die" },
          { de: "Handlungsoption", vi: "lựa chọn hành động", article: "die" },
          { de: "Vorsorgeprinzip", vi: "nguyên tắc phòng ngừa", article: "das" },
          { de: "Innovationsfolgenforschung", vi: "nghiên cứu hệ quả đổi mới", article: "die" },
          { de: "Stakeholder-Beteiligung", vi: "sự tham gia của các bên liên quan", article: "die" },
          { de: "Szenarioanalyse", vi: "phân tích kịch bản", article: "die" },
          { de: "Technikgestaltung", vi: "thiết kế công nghệ (có trách nhiệm)", article: "die" },
          { de: "Rebound-Effekt", vi: "hiệu ứng bật lại (tiêu thụ tăng)", article: "der" },
          { de: "Wertschöpfungskette", vi: "chuỗi giá trị", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Irreale Vergleiche und hypothetische Szenarien",
        titleVi: "So sánh phi thực và kịch bản giả định",
        rule: "Für Technologiefolgenabschätzung sind hypothetische Formulierungen unverzichtbar: 1) Konjunktiv II für irreale Szenarien: Würde KI flächendeckend eingesetzt, könnte dies... 2) 'als ob' + Konjunktiv II: Es scheint, als ob die Technologie alle Probleme lösen könnte. 3) Irrealer Vergleichssatz mit 'als': Die Risiken werden dargestellt, als wären sie beherrschbar. 4) 'Gesetzt den Fall, dass' / 'Angenommen, dass': Gesetzt den Fall, dass autonome Fahrzeuge zugelassen werden, ergäben sich...",
        ruleVi: "Đối với đánh giá tác động công nghệ, các công thức giả định là không thể thiếu: 1) Konjunktiv II cho kịch bản phi thực: Nếu AI được sử dụng rộng rãi, điều này có thể... 2) 'als ob' + Konjunktiv II: Dường như công nghệ có thể giải quyết mọi vấn đề. 3) Câu so sánh phi thực với 'als': Rủi ro được trình bày như thể chúng có thể kiểm soát được. 4) 'Gesetzt den Fall, dass' / 'Angenommen, dass' (Giả sử rằng): Giả sử xe tự hành được phép lưu hành, sẽ phát sinh... Tiếng Việt thường dùng 'nếu...thì', 'giả sử' — tiếng Đức phân biệt rõ giữa giả định có thể xảy ra (Konj. II với würde) và phi thực (Konj. II Präteritum).",
        examples: [
          { de: "Würde man sämtliche Routinetätigkeiten automatisieren, so wären Millionen Arbeitsplätze betroffen.", vi: "Nếu người ta tự động hóa toàn bộ các hoạt động thường ngày, hàng triệu việc làm sẽ bị ảnh hưởng." },
          { de: "Die Debatte verläuft, als ob technologischer Fortschritt zwangsläufig zu gesellschaftlichem Fortschritt führe.", vi: "Cuộc tranh luận diễn ra như thể tiến bộ công nghệ nhất thiết dẫn đến tiến bộ xã hội." },
          { de: "Gesetzt den Fall, dass generative KI im Bildungssystem flächendeckend eingesetzt würde, ergäben sich fundamentale Fragen zur Bewertung eigenständiger Leistungen.", vi: "Giả sử AI tạo sinh được sử dụng rộng rãi trong hệ thống giáo dục, sẽ phát sinh những câu hỏi cơ bản về đánh giá thành tích tự lập." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Workshop: Szenarioanalyse zur Automatisierung",
        titleVi: "Workshop: Phân tích kịch bản về tự động hóa",
        lines: [
          { speaker: "Moderatorin", de: "Lassen Sie uns drei Szenarien für die Automatisierung des Dienstleistungssektors bis 2040 durchspielen. Beginnen wir mit dem optimistischen Szenario.", vi: "Chúng ta hãy mô phỏng ba kịch bản cho tự động hóa ngành dịch vụ đến năm 2040. Hãy bắt đầu với kịch bản lạc quan." },
          { speaker: "Linh", de: "Im optimistischen Szenario würde die Automatisierung repetitive Tätigkeiten übernehmen und die Beschäftigten könnten sich auf kreative und beratende Aufgaben konzentrieren. Es käme zu einer Verschiebung, nicht zu einem Abbau von Arbeitsplätzen.", vi: "Trong kịch bản lạc quan, tự động hóa sẽ đảm nhận các công việc lặp đi lặp lại và người lao động có thể tập trung vào các nhiệm vụ sáng tạo và tư vấn. Sẽ xảy ra sự chuyển dịch, không phải cắt giảm việc làm." },
          { speaker: "Teilnehmer", de: "Angenommen, die Übergangsphase dauert nur fünf Jahre, so wären die sozialen Verwerfungen erheblich. Die Umschulungskapazitäten reichten bei Weitem nicht aus.", vi: "Giả sử giai đoạn chuyển đổi chỉ kéo dài năm năm, các xáo trộn xã hội sẽ rất đáng kể. Năng lực đào tạo lại sẽ hoàn toàn không đủ." },
          { speaker: "Linh", de: "Das ist ein zentraler Punkt. Im pessimistischen Szenario käme es zu einer Polarisierung: Hochqualifizierte profitierten, während Geringqualifizierte in prekäre Beschäftigungsverhältnisse abgedrängt würden — ein Rebound-Effekt der Digitalisierung.", vi: "Đó là một điểm trung tâm. Trong kịch bản bi quan, sẽ xảy ra phân cực: Người có trình độ cao hưởng lợi, trong khi người có trình độ thấp bị đẩy vào quan hệ lao động bấp bênh — một hiệu ứng bật lại của số hóa." }
        ]
      },
      {
        type: "practice",
        titleDe: "Mini-TA: Generative KI im Bildungswesen",
        titleVi: "TA thu nhỏ: AI tạo sinh trong giáo dục",
        instruction: "Erstellen Sie eine kompakte Technologiefolgenabschätzung (ca. 200 Wörter) zum Einsatz generativer KI (z. B. ChatGPT) im Bildungswesen. Strukturieren Sie: 1) Beschreibung der Technologie, 2) Chancen, 3) Risiken, 4) Handlungsempfehlungen. Verwenden Sie mindestens zwei hypothetische Formulierungen (Konjunktiv II, 'gesetzt den Fall') und beziehen Sie die Perspektive vietnamesischer Studierender in Deutschland ein.",
        instructionVi: "Tạo một đánh giá tác động công nghệ thu gọn (khoảng 200 từ) về việc sử dụng AI tạo sinh (ví dụ ChatGPT) trong giáo dục. Cấu trúc: 1) Mô tả công nghệ, 2) Cơ hội, 3) Rủi ro, 4) Khuyến nghị hành động. Sử dụng ít nhất hai công thức giả định (Konjunktiv II, 'gesetzt den Fall') và đưa vào góc nhìn của sinh viên Việt Nam tại Đức."
      }
    ]
  },

  // --- Chapter 8, Lesson 4: Satzadverbien & Kommentaradverbien ---
  {
    id: "c1-ch8-l4",
    chapterId: 8,
    lessonNumber: 4,
    title: "Satzadverbien & Kommentaradverbien",
    titleVi: "Trạng từ câu & Trạng từ bình luận",
    type: "Grammatik",
    objectives: [
      "Phân biệt và sử dụng chính xác các trạng từ câu và trạng từ bình luận",
      "Nắm vững vị trí và chức năng ngữ pháp của Satzadverbien trong tiếng Đức",
      "Ứng dụng Kommentaradverbien để diễn đạt quan điểm học thuật tinh tế"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Satzadverbien vs. Kommentaradverbien",
        titleVi: "Trạng từ câu vs. Trạng từ bình luận",
        textDe: "Satzadverbien (auch Modalwörter genannt) beziehen sich auf den gesamten Satz und drücken die Einstellung des Sprechers zur Aussage aus. Sie stehen im Mittelfeld oder im Vorfeld und sind nicht negierbar. Kommentaradverbien gehen noch einen Schritt weiter: Sie kommentieren die Art und Weise der Äußerung selbst. Die Unterscheidung ist für das akademische Schreiben auf C1-Niveau essenziell, da diese Adverbien Aussagen abstufen, einschränken oder bewerten — Fähigkeiten, die in wissenschaftlichen Texten unverzichtbar sind.",
        textVi: "Trạng từ câu (còn gọi là Modalwörter) liên quan đến toàn bộ câu và biểu thị thái độ của người nói đối với phát ngôn. Chúng đứng ở vị trí giữa câu (Mittelfeld) hoặc đầu câu (Vorfeld) và không thể bị phủ định. Trạng từ bình luận còn đi xa hơn: Chúng bình luận về cách thức của chính phát ngôn đó. Sự phân biệt này rất quan trọng cho viết học thuật ở trình độ C1, vì các trạng từ này phân cấp, hạn chế hoặc đánh giá phát ngôn — những kỹ năng không thể thiếu trong văn bản khoa học."
      },
      {
        type: "vocabulary",
        titleDe: "Satzadverbien nach Funktion",
        titleVi: "Trạng từ câu theo chức năng",
        words: [
          { de: "vermutlich / mutmaßlich", vi: "có lẽ / được cho là (phỏng đoán)" },
          { de: "zweifellos / unbestritten", vi: "không nghi ngờ gì / không thể tranh cãi" },
          { de: "bedauerlicherweise", vi: "đáng tiếc thay" },
          { de: "erfreulicherweise", vi: "đáng mừng thay" },
          { de: "bezeichnenderweise", vi: "đặc trưng / điển hình là" },
          { de: "erstaunlicherweise", vi: "đáng ngạc nhiên thay" },
          { de: "wohlgemerkt", vi: "xin lưu ý rằng" },
          { de: "zugegebenermaßen", vi: "phải thừa nhận rằng" },
          { de: "strenggenommen", vi: "nói cho đúng / nghiêm túc mà nói" },
          { de: "schlechterdings", vi: "hoàn toàn / dứt khoát (phủ định)" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Position und Funktion der Satzadverbien",
        titleVi: "Vị trí và chức năng của trạng từ câu",
        rule: "Satzadverbien können drei Positionen einnehmen: 1) Vorfeld (Position 1): Vermutlich wird die Technologie sich durchsetzen. 2) Mittelfeld (nach dem finiten Verb): Die Technologie wird sich vermutlich durchsetzen. 3) Nach dem Komma als Einschub: Die Technologie, vermutlich die bedeutendste Innovation, wird sich durchsetzen. Wichtig: Im Vorfeld steht das Satzadverb VOR dem finiten Verb (V2-Stellung bleibt). Kommentaradverbien stehen bevorzugt am Satzanfang, oft durch Komma abgetrennt: Offen gesagt, überzeugt mich das Argument nicht.",
        ruleVi: "Trạng từ câu có thể đứng ở ba vị trí: 1) Đầu câu (Vị trí 1): Vermutlich wird die Technologie sich durchsetzen. 2) Giữa câu (sau động từ chia): Die Technologie wird sich vermutlich durchsetzen. 3) Sau dấu phẩy như phần chèn: Die Technologie, vermutlich die bedeutendste Innovation, wird sich durchsetzen. Quan trọng: Ở đầu câu, trạng từ đứng TRƯỚC động từ chia (vị trí V2 vẫn giữ nguyên). Trạng từ bình luận thường đứng đầu câu, tách bằng dấu phẩy: Offen gesagt, überzeugt mich das Argument nicht (Nói thẳng, lập luận đó không thuyết phục tôi).",
        examples: [
          { de: "Bezeichnenderweise wurden die ethischen Implikationen erst nachträglich diskutiert.", vi: "Điển hình là, các hàm ý đạo đức chỉ được thảo luận sau đó." },
          { de: "Die Studie hat zugegebenermaßen methodische Schwächen.", vi: "Phải thừa nhận rằng nghiên cứu có những điểm yếu về phương pháp." },
          { de: "Strenggenommen handelt es sich nicht um künstliche Intelligenz, sondern um maschinelles Lernen.", vi: "Nói cho đúng, đây không phải là trí tuệ nhân tạo mà là học máy." },
          { de: "Offen gesagt, die bisherigen Regulierungsversuche greifen zu kurz.", vi: "Nói thẳng, các nỗ lực quản lý cho đến nay là chưa đủ." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Abstufung und Hedging mit Adverbien",
        titleVi: "Phân cấp và giảm nhẹ với trạng từ",
        rule: "Im akademischen Diskurs dienen Satzadverbien dem 'Hedging' — der vorsichtigen Abschwächung von Aussagen: Gewissheit: zweifellos, unbestritten, fraglos. Hohe Wahrscheinlichkeit: höchstwahrscheinlich, aller Voraussicht nach. Vermutung: vermutlich, mutmaßlich, möglicherweise. Einräumung: zugegebenermaßen, eingestandenermaßen. Einschränkung: strenggenommen, genaugenommen, im Grunde genommen. Bewertung: bedauerlicherweise, erfreulicherweise, bezeichnenderweise.",
        ruleVi: "Trong diễn ngôn học thuật, trạng từ câu phục vụ 'hedging' — sự giảm nhẹ thận trọng của phát ngôn: Chắc chắn: zweifellos, unbestritten, fraglos. Xác suất cao: höchstwahrscheinlich, aller Voraussicht nach. Phỏng đoán: vermutlich, mutmaßlich, möglicherweise. Thừa nhận: zugegebenermaßen, eingestandenermaßen. Hạn chế: strenggenommen, genaugenommen, im Grunde genommen. Đánh giá: bedauerlicherweise, erfreulicherweise, bezeichnenderweise. Người Việt cần chú ý: Trong văn hóa học thuật Đức, hedging rất quan trọng — phát biểu quá chắc chắn bị coi là thiếu khoa học.",
        examples: [
          { de: "Aller Voraussicht nach wird KI die Arbeitswelt grundlegend verändern.", vi: "Theo tất cả dự báo, AI sẽ thay đổi căn bản thế giới lao động." },
          { de: "Die Ergebnisse sind möglicherweise durch die Stichprobengröße verzerrt.", vi: "Kết quả có thể bị bóp méo bởi kích thước mẫu." },
          { de: "Zugegebenermaßen fehlen uns noch Langzeitdaten, nichtsdestoweniger lassen sich bereits Trends erkennen.", vi: "Phải thừa nhận chúng ta vẫn thiếu dữ liệu dài hạn, tuy vậy đã có thể nhận ra các xu hướng." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Akademische Diskussion: Nuanciert argumentieren",
        titleVi: "Thảo luận học thuật: Lập luận có sắc thái",
        lines: [
          { speaker: "Prof. Fischer", de: "Wie bewerten Sie die These, dass KI menschliche Kreativität ersetzen wird?", vi: "Bạn đánh giá luận điểm rằng AI sẽ thay thế sự sáng tạo của con người như thế nào?" },
          { speaker: "Linh", de: "Strenggenommen ist die These in dieser Absolutheit nicht haltbar. Erstaunlicherweise zeigen neuere Studien, dass KI-gestützte Kreativprozesse die menschliche Kreativität eher ergänzen als ersetzen.", vi: "Nói cho đúng, luận điểm này ở mức tuyệt đối như vậy là không bền vững. Đáng ngạc nhiên, các nghiên cứu mới hơn cho thấy quy trình sáng tạo được AI hỗ trợ bổ sung hơn là thay thế sự sáng tạo của con người." },
          { speaker: "Prof. Fischer", de: "Zugegebenermaßen ein differenzierter Standpunkt. Aber schließen Sie die Möglichkeit vollständig aus?", vi: "Phải thừa nhận đó là một quan điểm tinh tế. Nhưng bạn có loại trừ hoàn toàn khả năng đó không?" },
          { speaker: "Linh", de: "Schlechterdings nicht. Aller Voraussicht nach werden bestimmte kreative Routinetätigkeiten automatisiert. Bezeichnenderweise betrifft dies vor allem Bereiche, in denen Kreativität regelbasiert funktioniert — etwa Werbetext oder Standarddesign.", vi: "Hoàn toàn không. Theo tất cả dự báo, một số hoạt động sáng tạo thường ngày sẽ được tự động hóa. Điển hình, điều này ảnh hưởng chủ yếu đến các lĩnh vực mà sự sáng tạo hoạt động dựa trên quy tắc — chẳng hạn như bài viết quảng cáo hoặc thiết kế tiêu chuẩn." }
        ]
      },
      {
        type: "practice",
        titleDe: "Wissenschaftlicher Kommentar mit Satzadverbien",
        titleVi: "Bình luận khoa học với trạng từ câu",
        instruction: "Schreiben Sie einen wissenschaftlichen Kommentar (ca. 150 Wörter) zum Thema 'KI und die Zukunft der Arbeit in Vietnam und Deutschland'. Verwenden Sie mindestens sechs verschiedene Satzadverbien oder Kommentaradverbien aus dieser Lektion, um Ihre Aussagen abzustufen und zu nuancieren. Achten Sie auf die korrekte Position der Adverbien im Satz.",
        instructionVi: "Viết một bình luận khoa học (khoảng 150 từ) về chủ đề 'AI và tương lai lao động ở Việt Nam và Đức'. Sử dụng ít nhất sáu trạng từ câu hoặc trạng từ bình luận khác nhau từ bài học này để phân cấp và tạo sắc thái cho phát ngôn. Chú ý vị trí đúng của trạng từ trong câu."
      }
    ]
  }
];
