// C2 Chapters 9-10: Medientheorie & digitale Kultur, Meisterklasse Deutsch

import type { ContentBlock, Lesson } from "../a1/chapters1_3";

export const c2LessonsCh9_10: Lesson[] = [
  // ============================================================
  // KAPITEL 9: Medientheorie & digitale Kultur
  // ============================================================

  // --- Kapitel 9, Lektion 1: Medientheorien (McLuhan, Baudrillard) ---
  {
    id: "c2-ch9-l1",
    chapterId: 9,
    lessonNumber: 1,
    title: "Medientheorien — McLuhan, Baudrillard und das Ende der Realität",
    titleVi: "Các lý thuyết truyền thông — McLuhan, Baudrillard và sự kết thúc của thực tại",
    type: "Einführung",
    objectives: [
      "Hiểu và phân tích lý thuyết truyền thông của Marshall McLuhan ('The medium is the message')",
      "Nắm vững khái niệm 'Simulacrum' và 'Hyperrealität' của Jean Baudrillard",
      "So sánh bối cảnh truyền thông tại Đức và Việt Nam dưới góc nhìn lý thuyết",
      "Sử dụng từ vựng học thuật trong lĩnh vực lý thuyết truyền thông ở trình độ C2",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Von McLuhan zu Baudrillard: Das Medium, die Botschaft und die Simulation",
        titleVi: "Từ McLuhan đến Baudrillard: Phương tiện, thông điệp và sự mô phỏng",
        textDe:
          "Marshall McLuhan prägte 1964 die These 'The medium is the message' — das Medium selbst, nicht der transportierte Inhalt, verändert die Gesellschaft grundlegend. Das Fernsehen erzeugte laut McLuhan ein 'globales Dorf', in dem die Menschheit durch elektronische Medien wieder zusammenrückt. Jean Baudrillard radikalisierte diese Überlegungen: In seiner Simulationstheorie (1981) argumentiert er, dass die Zeichen sich von ihren Referenten gelöst haben und wir in einer Welt der 'Simulakren' leben — Kopien ohne Original. Die 'Hyperrealität' beschreibt einen Zustand, in dem die Simulation realer erscheint als die Realität selbst. Baudrillards provokante Behauptung, der Golfkrieg habe 'nicht stattgefunden', illustriert die mediale Konstruktion von Wirklichkeit.",
        textVi:
          "Marshall McLuhan đã đưa ra luận đề 'The medium is the message' (Phương tiện chính là thông điệp) năm 1964 — bản thân phương tiện truyền thông, chứ không phải nội dung được truyền tải, thay đổi xã hội một cách căn bản. Theo McLuhan, truyền hình tạo ra một 'ngôi làng toàn cầu', nơi nhân loại xích lại gần nhau qua phương tiện điện tử. Jean Baudrillard cực đoan hóa những suy ngẫm này: trong lý thuyết mô phỏng (1981), ông lập luận rằng các ký hiệu đã tách khỏi đối tượng quy chiếu và chúng ta sống trong thế giới của 'simulacrum' — bản sao không có bản gốc. 'Siêu thực tại' (Hyperrealität) mô tả trạng thái mà sự mô phỏng có vẻ thực hơn chính thực tại. Tuyên bố khiêu khích của Baudrillard rằng Chiến tranh Vùng Vịnh đã 'không diễn ra' minh họa cho việc kiến tạo thực tại qua truyền thông.",
      },
      {
        type: "vocabulary",
        titleDe: "Fachbegriffe der Medientheorie",
        titleVi: "Thuật ngữ chuyên ngành lý thuyết truyền thông",
        words: [
          { de: "das Simulakrum (Pl. Simulakren)", vi: "simulacrum, bản mô phỏng" },
          { de: "die Hyperrealität", vi: "siêu thực tại" },
          { de: "das globale Dorf", vi: "ngôi làng toàn cầu" },
          { de: "die Medienwirkungsforschung", vi: "nghiên cứu tác động truyền thông" },
          { de: "die Zeichenreferenz", vi: "sự quy chiếu ký hiệu" },
          { de: "der Signifikant ohne Signifikat", vi: "cái biểu đạt không có cái được biểu đạt" },
          { de: "die Implosion der Bedeutung", vi: "sự nổ vào trong của ý nghĩa" },
          { de: "die Medialisierung", vi: "sự truyền thông hóa" },
          { de: "das Dispositiv", vi: "thiết chế, cơ chế (theo Foucault)" },
          { de: "die Mediatisierung", vi: "sự mediatize hóa, truyền thông hóa xã hội" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Seminar: Medientheorie im digitalen Zeitalter",
        titleVi: "Hội thảo: Lý thuyết truyền thông trong thời đại số",
        lines: [
          {
            speaker: "Prof. Hartmann",
            de: "McLuhan behauptete, das Medium sei die Botschaft. Inwiefern lässt sich diese These auf soziale Medien übertragen, Frau Tran?",
            vi: "McLuhan khẳng định phương tiện chính là thông điệp. Luận đề này có thể áp dụng cho mạng xã hội ở mức độ nào, chị Trần?",
          },
          {
            speaker: "Mai",
            de: "Die These ist aktueller denn je. TikTok etwa formt durch sein algorithmisches Kurzvideoformat nicht nur die Art der Informationsaufnahme, sondern das Denken selbst — die Aufmerksamkeitsspanne verkürzt sich, komplexe Sachverhalte werden auf fünfzehn Sekunden reduziert. Das Medium determiniert die epistemische Struktur.",
            vi: "Luận đề này thời sự hơn bao giờ hết. Ví dụ TikTok, với định dạng video ngắn theo thuật toán, không chỉ định hình cách tiếp nhận thông tin mà còn định hình chính tư duy — khoảng chú ý bị rút ngắn, các vấn đề phức tạp bị giản lược thành mười lăm giây. Phương tiện quyết định cấu trúc nhận thức luận.",
          },
          {
            speaker: "Prof. Hartmann",
            de: "Ausgezeichnet. Und Baudrillards Simulationstheorie — sehen Sie Parallelen in der vietnamesischen Medienlandschaft?",
            vi: "Xuất sắc. Và lý thuyết mô phỏng của Baudrillard — chị có thấy những tương đồng trong bối cảnh truyền thông Việt Nam không?",
          },
          {
            speaker: "Mai",
            de: "Durchaus. Die vietnamesische Internetkultur — insbesondere auf Zalo und Facebook — erzeugt zunehmend Hyperrealitäten: Inszenierte Lebensentwürfe, konstruierte Identitäten und eine mediale Wirklichkeit, die von der gelebten Erfahrung entkoppelt ist. Baudrillards Diagnose trifft hier mit voller Wucht zu.",
            vi: "Chắc chắn rồi. Văn hóa internet Việt Nam — đặc biệt trên Zalo và Facebook — ngày càng tạo ra siêu thực tại: những lối sống được dàn dựng, bản sắc được kiến tạo và một thực tại truyền thông tách rời khỏi trải nghiệm sống. Chẩn đoán của Baudrillard ở đây hoàn toàn trúng đích.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Medientheoretische Analyse eines Phänomens",
        titleVi: "Bài tập: Phân tích lý thuyết truyền thông về một hiện tượng",
        instruction:
          "Wählen Sie ein aktuelles Medienphänomen (z. B. Deepfakes, Influencer-Kultur, Livestream-Commerce in Vietnam) und analysieren Sie es unter Rückgriff auf McLuhan und Baudrillard. Erörtern Sie, inwiefern das Medium die Botschaft formt und ob das Phänomen als 'Simulakrum' im Sinne Baudrillards gelten kann. Verfassen Sie einen akademischen Aufsatz (ca. 500 Wörter).",
        instructionVi:
          "Chọn một hiện tượng truyền thông hiện tại (ví dụ: Deepfake, văn hóa influencer, thương mại livestream ở Việt Nam) và phân tích dựa trên McLuhan và Baudrillard. Thảo luận xem phương tiện định hình thông điệp như thế nào và liệu hiện tượng đó có thể được coi là 'simulacrum' theo nghĩa Baudrillard hay không. Viết một bài luận học thuật (khoảng 500 từ).",
      },
    ],
  },

  // --- Kapitel 9, Lektion 2: Digitale Transformation & Gesellschaft ---
  {
    id: "c2-ch9-l2",
    chapterId: 9,
    lessonNumber: 2,
    title: "Digitale Transformation & gesellschaftlicher Wandel",
    titleVi: "Chuyển đổi số & Biến đổi xã hội",
    type: "Einführung",
    objectives: [
      "Phân tích tác động của chuyển đổi số đối với xã hội Đức và Việt Nam",
      "Thảo luận về khái niệm 'Industrie 4.0' và 'Arbeit 4.0' bằng tiếng Đức học thuật",
      "Sử dụng các cấu trúc ngữ pháp phức hợp (Nominalisierung, erweitertes Partizip) để diễn đạt",
      "So sánh chiến lược số hóa của Đức và Việt Nam",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Industrie 4.0 und die digitale Transformation der Gesellschaft",
        titleVi: "Công nghiệp 4.0 và chuyển đổi số xã hội",
        textDe:
          "Die digitale Transformation bezeichnet den tiefgreifenden Wandel von Wirtschaft, Gesellschaft und Kultur durch digitale Technologien. In Deutschland manifestiert sich dies im Konzept 'Industrie 4.0' — der Verschmelzung von physischer Produktion und digitaler Vernetzung. Doch die Auswirkungen gehen weit über die Industrie hinaus: Die Digitalisierung verändert Arbeitsformen (Homeoffice, Plattformökonomie), demokratische Prozesse (E-Government, digitale Partizipation), Bildungssysteme und soziale Beziehungen. Der Soziologe Hartmut Rosa spricht in diesem Zusammenhang von einer 'Beschleunigungsgesellschaft', in der die technologische Beschleunigung eine soziale Beschleunigung nach sich zieht — mit der Gefahr der Entfremdung.",
        textVi:
          "Chuyển đổi số chỉ sự biến đổi sâu sắc của kinh tế, xã hội và văn hóa thông qua công nghệ số. Tại Đức, điều này thể hiện trong khái niệm 'Công nghiệp 4.0' — sự hợp nhất giữa sản xuất vật lý và kết nối số. Nhưng tác động vượt xa ngành công nghiệp: số hóa thay đổi hình thức lao động (làm việc từ xa, kinh tế nền tảng), quy trình dân chủ (chính phủ điện tử, tham gia số), hệ thống giáo dục và các mối quan hệ xã hội. Nhà xã hội học Hartmut Rosa nói về một 'xã hội tăng tốc', trong đó sự tăng tốc công nghệ kéo theo sự tăng tốc xã hội — với nguy cơ tha hóa.",
      },
      {
        type: "vocabulary",
        titleDe: "Wortschatz: Digitale Transformation",
        titleVi: "Từ vựng: Chuyển đổi số",
        words: [
          { de: "die digitale Transformation", vi: "chuyển đổi số" },
          { de: "die Plattformökonomie", vi: "kinh tế nền tảng" },
          { de: "die Beschleunigungsgesellschaft", vi: "xã hội tăng tốc" },
          { de: "die Entfremdung", vi: "sự tha hóa, sự xa lánh" },
          { de: "die digitale Souveränität", vi: "chủ quyền số" },
          { de: "das E-Government", vi: "chính phủ điện tử" },
          { de: "die Plattformarbeit", vi: "lao động nền tảng (gig economy)" },
          { de: "der digitale Graben", vi: "khoảng cách số" },
          { de: "die Datenökonomie", vi: "kinh tế dữ liệu" },
          { de: "die Vernetzung", vi: "sự kết nối, sự liên kết mạng" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Podiumsdiskussion: Digitalisierung — Chance oder Bedrohung?",
        titleVi: "Thảo luận bàn tròn: Số hóa — Cơ hội hay mối đe dọa?",
        lines: [
          {
            speaker: "Moderator",
            de: "Deutschland gilt als digitaler Nachzügler unter den Industrienationen. Herr Pham, Sie kennen beide Kontexte — wie sehen Sie das?",
            vi: "Đức được coi là nước đi sau trong lĩnh vực số hóa trong số các quốc gia công nghiệp. Anh Phạm, anh biết cả hai bối cảnh — anh nhìn nhận điều này như thế nào?",
          },
          {
            speaker: "Minh",
            de: "Ein paradoxer Befund: Deutschland verfügt über eine hervorragende industrielle Infrastruktur, hinkt aber bei der Verwaltungsdigitalisierung hinterher. Vietnam hingegen hat — gleichsam als Leapfrogging-Phänomen — bestimmte analoge Entwicklungsstufen übersprungen. Mobile Payment etwa ist in Hanoi weitaus verbreiteter als in Berlin.",
            vi: "Một phát hiện nghịch lý: Đức có hạ tầng công nghiệp xuất sắc nhưng lại tụt hậu trong số hóa hành chính. Ngược lại, Việt Nam — như một hiện tượng nhảy vọt (leapfrogging) — đã bỏ qua một số giai đoạn phát triển analog. Ví dụ, thanh toán di động phổ biến ở Hà Nội hơn nhiều so với ở Berlin.",
          },
          {
            speaker: "Moderator",
            de: "Und die gesellschaftlichen Folgen? Rosa spricht von Beschleunigung und Entfremdung.",
            vi: "Còn hậu quả xã hội? Rosa nói về tăng tốc và tha hóa.",
          },
          {
            speaker: "Minh",
            de: "Die Beschleunigungsthese ist empirisch gut belegt. In beiden Gesellschaften beobachte ich eine zunehmende Prekarisierung durch die Plattformökonomie — ob Grab-Fahrer in Saigon oder Lieferando-Kuriere in München, die Mechanismen der digitalen Ausbeutung sind strukturell identisch.",
            vi: "Luận đề tăng tốc được chứng minh thực nghiệm rõ ràng. Ở cả hai xã hội, tôi quan sát thấy sự bấp bênh hóa ngày càng tăng do kinh tế nền tảng — dù là tài xế Grab ở Sài Gòn hay shipper Lieferando ở München, các cơ chế bóc lột số về mặt cấu trúc là giống hệt nhau.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Vergleichende Analyse der Digitalisierung",
        titleVi: "Bài tập: Phân tích so sánh về số hóa",
        instruction:
          "Verfassen Sie einen vergleichenden Essay (ca. 500 Wörter) über die digitale Transformation in Deutschland und Vietnam. Berücksichtigen Sie mindestens drei Dimensionen (z. B. Wirtschaft, Verwaltung, Bildung, soziale Beziehungen). Verwenden Sie Nominalisierungen, erweiterte Partizipialattribute und Funktionsverbgefüge.",
        instructionVi:
          "Viết một bài luận so sánh (khoảng 500 từ) về chuyển đổi số ở Đức và Việt Nam. Xem xét ít nhất ba khía cạnh (ví dụ: kinh tế, hành chính, giáo dục, quan hệ xã hội). Sử dụng danh từ hóa, định ngữ phân từ mở rộng và cụm động từ chức năng.",
      },
    ],
  },

  // --- Kapitel 9, Lektion 3: Algorithmen & Meinungsbildung ---
  {
    id: "c2-ch9-l3",
    chapterId: 9,
    lessonNumber: 3,
    title: "Algorithmen, Filterblasen und die Krise der Öffentlichkeit",
    titleVi: "Thuật toán, bong bóng lọc và khủng hoảng không gian công cộng",
    type: "Fertigkeit",
    objectives: [
      "Phân tích tác động của thuật toán đối với quá trình hình thành ý kiến công chúng",
      "Thảo luận về khái niệm 'Filterblase' và 'Echokammer' bằng tiếng Đức học thuật",
      "So sánh tự do báo chí và kiểm duyệt truyền thông tại Đức và Việt Nam",
      "Viết một bài nghị luận phê bình về dân chủ trong thời đại thuật toán",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Algorithmische Öffentlichkeit und die Erosion des Diskurses",
        titleVi: "Không gian công cộng thuật toán hóa và sự xói mòn diễn ngôn",
        textDe:
          "Jürgen Habermas konzipierte die 'Öffentlichkeit' als Raum des rationalen Diskurses, in dem sich die öffentliche Meinung durch den 'zwanglosen Zwang des besseren Arguments' bildet. Algorithmen unterminieren dieses Ideal grundlegend: Personalisierte Newsfeeds erzeugen 'Filterblasen' (Eli Pariser, 2011), in denen Nutzer vorwiegend Informationen erhalten, die ihre bestehenden Überzeugungen bestätigen. 'Echokammern' verstärken diesen Effekt durch soziale Rückkopplung. Die Folge ist eine Fragmentierung der Öffentlichkeit, die Polarisierung begünstigt und den deliberativen Diskurs erschwert. Hinzu kommt die Problematik algorithmischer Manipulation: Desinformation, Deepfakes und Bot-Netzwerke können demokratische Prozesse gezielt unterwandern.",
        textVi:
          "Jürgen Habermas đã hình dung 'không gian công cộng' như một không gian diễn ngôn lý tính, nơi dư luận được hình thành qua 'sức ép không cưỡng ép của lập luận tốt hơn'. Thuật toán phá hoại lý tưởng này một cách căn bản: các bản tin cá nhân hóa tạo ra 'bong bóng lọc' (Eli Pariser, 2011), trong đó người dùng chủ yếu nhận thông tin xác nhận niềm tin hiện có. 'Buồng vọng' khuếch đại hiệu ứng này qua phản hồi xã hội. Hệ quả là sự phân mảnh không gian công cộng, thúc đẩy phân cực và cản trở diễn ngôn thương thảo. Thêm vào đó là vấn đề thao túng thuật toán: tin sai lệch, deepfake và mạng lưới bot có thể ngầm phá hoại có chủ đích các quy trình dân chủ.",
      },
      {
        type: "vocabulary",
        titleDe: "Wortschatz: Algorithmen & öffentliche Meinung",
        titleVi: "Từ vựng: Thuật toán & dư luận",
        words: [
          { de: "die Filterblase", vi: "bong bóng lọc" },
          { de: "die Echokammer", vi: "buồng vọng, phòng vọng" },
          { de: "der Algorithmus (Pl. Algorithmen)", vi: "thuật toán" },
          { de: "die Desinformation", vi: "thông tin sai lệch, tin giả" },
          { de: "der deliberative Diskurs", vi: "diễn ngôn thương thảo" },
          { de: "die Fragmentierung der Öffentlichkeit", vi: "sự phân mảnh không gian công cộng" },
          { de: "die algorithmische Kuratierung", vi: "sự tuyển chọn thuật toán" },
          { de: "die Polarisierung", vi: "sự phân cực" },
          { de: "das Bot-Netzwerk", vi: "mạng lưới bot" },
          { de: "die Meinungsmanipulation", vi: "sự thao túng dư luận" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Debatte: Algorithmen als Gefahr für die Demokratie?",
        titleVi: "Tranh luận: Thuật toán — mối nguy cho dân chủ?",
        lines: [
          {
            speaker: "Dr. Krause",
            de: "Habermas' Konzept der deliberativen Demokratie setzt einen funktionierenden öffentlichen Diskurs voraus. Ist dieser im Zeitalter algorithmischer Kuratierung noch möglich?",
            vi: "Khái niệm dân chủ thương thảo của Habermas đòi hỏi một diễn ngôn công khai hoạt động tốt. Điều này còn khả thi trong thời đại tuyển chọn thuật toán không?",
          },
          {
            speaker: "Lan",
            de: "Ich bezweifle es. Die algorithmische Logik der Aufmerksamkeitsökonomie privilegiert das Emotionale, das Polarisierende — eben das Gegenteil des rationalen Diskurses. In Vietnam beobachte ich, wie virale Falschmeldungen auf Facebook innerhalb von Stunden die öffentliche Meinung kippen können.",
            vi: "Tôi nghi ngờ điều đó. Logic thuật toán của kinh tế chú ý ưu tiên cảm xúc, phân cực — chính là điều ngược lại với diễn ngôn lý tính. Ở Việt Nam, tôi quan sát thấy tin giả lan truyền trên Facebook có thể lật đổ dư luận trong vòng vài giờ.",
          },
          {
            speaker: "Dr. Krause",
            de: "Gibt es denn Gegenstrategien? Wie lässt sich die digitale Öffentlichkeit demokratisch gestalten?",
            vi: "Vậy có chiến lược đối phó nào không? Làm thế nào để thiết kế không gian công cộng số một cách dân chủ?",
          },
          {
            speaker: "Lan",
            de: "Medienkompetenz ist der Schlüssel — und hier gibt es sowohl in Deutschland als auch in Vietnam enormen Nachholbedarf. Zudem müssen algorithmische Systeme reguliert und transparent gemacht werden. Die europäische KI-Verordnung ist ein erster, wenn auch unzureichender Schritt.",
            vi: "Năng lực truyền thông là chìa khóa — và ở đây cả Đức lẫn Việt Nam đều có nhu cầu bắt kịp rất lớn. Ngoài ra, các hệ thống thuật toán phải được quản lý và minh bạch hóa. Quy định AI châu Âu là bước đầu tiên, dù chưa đầy đủ.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Kritischer Essay — Demokratie im Algorithmus-Zeitalter",
        titleVi: "Bài tập: Luận văn phê bình — Dân chủ trong thời đại thuật toán",
        instruction:
          "Verfassen Sie einen kritischen Essay (ca. 500 Wörter) zum Thema 'Können Algorithmen die Demokratie gefährden?'. Beziehen Sie sich auf Habermas' Öffentlichkeitskonzept und diskutieren Sie die Phänomene Filterblase, Echokammer und Desinformation. Ziehen Sie Beispiele aus dem deutschen und vietnamesischen Kontext heran.",
        instructionVi:
          "Viết một bài luận phê bình (khoảng 500 từ) về chủ đề 'Thuật toán có thể đe dọa dân chủ không?'. Tham chiếu đến khái niệm không gian công cộng của Habermas và thảo luận các hiện tượng bong bóng lọc, buồng vọng và tin sai lệch. Sử dụng ví dụ từ bối cảnh Đức và Việt Nam.",
      },
    ],
  },

  // --- Kapitel 9, Lektion 4: Übersetzungswissenschaft (Deutsch-Vietnamesisch) ---
  {
    id: "c2-ch9-l4",
    chapterId: 9,
    lessonNumber: 4,
    title: "Übersetzungswissenschaft — Zwischen Deutsch und Vietnamesisch",
    titleVi: "Dịch thuật học — Giữa tiếng Đức và tiếng Việt",
    type: "Fertigkeit",
    objectives: [
      "Nắm vững các lý thuyết dịch thuật cơ bản (Schleiermacher, Nida, Vermeer)",
      "Phân tích các thách thức đặc thù khi dịch Đức-Việt và Việt-Đức",
      "Thực hành dịch văn bản học thuật và văn học giữa hai ngôn ngữ",
      "Phản ánh về vai trò của dịch thuật trong giao lưu văn hóa Đức-Việt",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Translationswissenschaft: Theorie und Praxis der Übersetzung Deutsch-Vietnamesisch",
        titleVi: "Khoa học dịch thuật: Lý thuyết và thực hành dịch Đức-Việt",
        textDe:
          "Friedrich Schleiermacher unterschied 1813 zwei grundlegende Übersetzungsstrategien: die 'einbürgernde' Übersetzung (die den Text an die Zielkultur anpasst) und die 'verfremdende' Übersetzung (die die Fremdheit des Originals bewahrt). Eugene Nida differenzierte zwischen 'formaler Äquivalenz' (wortgetreue Übersetzung) und 'dynamischer Äquivalenz' (wirkungsgleiche Übersetzung). Hans Vermeers Skopostheorie rückt den Zweck der Übersetzung in den Mittelpunkt. Die Übersetzung zwischen Deutsch und Vietnamesisch stellt besondere Herausforderungen dar: fundamentale typologische Unterschiede (flektierende vs. isolierende Sprache), divergierende Höflichkeitssysteme, unterschiedliche Metaphorik und kulturspezifische Konzepte, die keine direkten Entsprechungen besitzen.",
        textVi:
          "Friedrich Schleiermacher đã phân biệt hai chiến lược dịch thuật cơ bản năm 1813: dịch 'nhập tịch' (điều chỉnh văn bản theo văn hóa đích) và dịch 'ngoại hóa' (giữ nguyên tính xa lạ của bản gốc). Eugene Nida phân biệt giữa 'tương đương hình thức' (dịch sát từ) và 'tương đương động' (dịch cùng tác động). Lý thuyết Skopos của Hans Vermeer đặt mục đích dịch thuật vào trung tâm. Dịch thuật giữa tiếng Đức và tiếng Việt đặt ra những thách thức đặc biệt: sự khác biệt loại hình căn bản (ngôn ngữ biến hình vs. ngôn ngữ đơn lập), hệ thống kính ngữ phân kỳ, ẩn dụ khác nhau và các khái niệm đặc thù văn hóa không có tương đương trực tiếp.",
      },
      {
        type: "vocabulary",
        titleDe: "Fachbegriffe der Übersetzungswissenschaft",
        titleVi: "Thuật ngữ dịch thuật học",
        words: [
          { de: "die formale Äquivalenz", vi: "tương đương hình thức" },
          { de: "die dynamische Äquivalenz", vi: "tương đương động" },
          { de: "die Skopostheorie", vi: "lý thuyết Skopos (mục đích)" },
          { de: "die einbürgernde Übersetzung", vi: "dịch nhập tịch, bản địa hóa" },
          { de: "die verfremdende Übersetzung", vi: "dịch ngoại hóa" },
          { de: "die Kulturspezifik", vi: "tính đặc thù văn hóa" },
          { de: "das Übersetzungsproblem", vi: "vấn đề dịch thuật" },
          { de: "die Unübersetzbarkeit", vi: "tính không thể dịch" },
          { de: "die Translationskultur", vi: "văn hóa dịch thuật" },
          { de: "der Zieltext / der Ausgangstext", vi: "văn bản đích / văn bản nguồn" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Workshop: Herausforderungen der Übersetzung Deutsch-Vietnamesisch",
        titleVi: "Hội thảo thực hành: Thách thức dịch thuật Đức-Việt",
        lines: [
          {
            speaker: "Prof. Müller",
            de: "Nehmen wir das deutsche Wort 'Gemütlichkeit'. Wie würden Sie es ins Vietnamesische übersetzen, Herr Le?",
            vi: "Lấy ví dụ từ 'Gemütlichkeit' trong tiếng Đức. Anh Lê sẽ dịch nó sang tiếng Việt như thế nào?",
          },
          {
            speaker: "Hung",
            de: "Das ist ein Paradebeispiel für ein kulturspezifisches Konzept. 'Gemütlichkeit' umfasst Behaglichkeit, Wärme, Geselligkeit — es gibt keine eins-zu-eins-Entsprechung im Vietnamesischen. Man könnte 'sự ấm cúng' oder 'không khí thân mật' verwenden, doch beides erfasst nur Teilaspekte.",
            vi: "Đó là ví dụ điển hình cho một khái niệm đặc thù văn hóa. 'Gemütlichkeit' bao gồm sự dễ chịu, ấm áp, tính xã giao — không có tương đương một-một trong tiếng Việt. Có thể dùng 'sự ấm cúng' hoặc 'không khí thân mật', nhưng cả hai chỉ nắm bắt được một phần.",
          },
          {
            speaker: "Prof. Müller",
            de: "Und umgekehrt — gibt es vietnamesische Konzepte, die im Deutschen schwer wiederzugeben sind?",
            vi: "Và ngược lại — có khái niệm tiếng Việt nào khó chuyển sang tiếng Đức không?",
          },
          {
            speaker: "Hung",
            de: "Zahlreiche. 'Tình nghĩa' etwa — eine tiefe, moralisch aufgeladene Verbundenheit, die über Freundschaft und Liebe hinausgeht. Oder die differenzierten Verwandtschaftsbezeichnungen, die sowohl Alter als auch familiäre Linie kodieren. Im Deutschen muss man umschreiben, was im Vietnamesischen ein einziges Wort leistet.",
            vi: "Rất nhiều. Ví dụ 'tình nghĩa' — một sự gắn bó sâu sắc, mang tính đạo đức, vượt xa tình bạn và tình yêu. Hoặc các danh xưng thân tộc tinh vi, mã hóa cả tuổi tác lẫn dòng họ. Trong tiếng Đức phải diễn giải dài dòng điều mà tiếng Việt diễn đạt bằng một từ duy nhất.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Übersetzungsanalyse und -praxis",
        titleVi: "Bài tập: Phân tích và thực hành dịch thuật",
        instruction:
          "Übersetzen Sie den folgenden Satz ins Vietnamesische und reflektieren Sie Ihre Übersetzungsentscheidungen theoretisch: 'Die sich aus der Wechselwirkung zwischen technologischer Innovation und gesellschaftlicher Transformation ergebenden, bislang unzureichend erforschten Konsequenzen bedürfen einer interdisziplinären Analyse.' Diskutieren Sie: Welche Strategie (einbürgernd oder verfremdend) haben Sie gewählt und warum? Welche grammatischen Strukturen mussten Sie auflösen?",
        instructionVi:
          "Dịch câu sau sang tiếng Việt và phản ánh lý thuyết về các quyết định dịch thuật của bạn: 'Die sich aus der Wechselwirkung zwischen technologischer Innovation und gesellschaftlicher Transformation ergebenden, bislang unzureichend erforschten Konsequenzen bedürfen einer interdisziplinären Analyse.' Thảo luận: Bạn chọn chiến lược nào (nhập tịch hay ngoại hóa) và tại sao? Những cấu trúc ngữ pháp nào bạn phải phân tách?",
      },
    ],
  },

  // ============================================================
  // KAPITEL 10: Meisterklasse Deutsch
  // ============================================================

  // --- Kapitel 10, Lektion 1: C2-Prüfungsvorbereitung (GDS) ---
  {
    id: "c2-ch10-l1",
    chapterId: 10,
    lessonNumber: 1,
    title: "C2-Prüfungsvorbereitung — Großes Deutsches Sprachdiplom (GDS)",
    titleVi: "Luyện thi C2 — Đại chứng chỉ tiếng Đức (GDS)",
    type: "Einführung",
    objectives: [
      "Hiểu cấu trúc và yêu cầu của kỳ thi GDS (Goethe-Zertifikat C2)",
      "Luyện tập chiến lược cho các phần thi: Lesen, Hören, Schreiben, Sprechen",
      "Phân tích các tiêu chí đánh giá và ngưỡng đạt cho từng phần thi",
      "Áp dụng kỹ thuật quản lý thời gian trong phòng thi",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das Goethe-Zertifikat C2: GDS — Aufbau und Anforderungen",
        titleVi: "Goethe-Zertifikat C2: GDS — Cấu trúc và yêu cầu",
        textDe:
          "Das Goethe-Zertifikat C2: Großes Deutsches Sprachdiplom (GDS) ist die höchste vom Goethe-Institut angebotene Sprachprüfung und weist Sprachkompetenz auf dem Niveau C2 des Gemeinsamen Europäischen Referenzrahmens (GER) nach. Die Prüfung gliedert sich in vier Module: Lesen (ca. 80 Minuten), Hören (ca. 35 Minuten), Schreiben (80 Minuten) und Sprechen (ca. 15 Minuten). Im Modul Schreiben muss ein argumentativer Text zu einem komplexen Thema verfasst werden; im Modul Sprechen wird ein monologischer Vortrag mit anschließender Diskussion erwartet. Das GDS berechtigt zur Aufnahme eines Studiums an deutschen Hochschulen und wird von vielen Arbeitgebern als Nachweis muttersprachlicher Kompetenz anerkannt.",
        textVi:
          "Goethe-Zertifikat C2: Großes Deutsches Sprachdiplom (GDS) là kỳ thi ngôn ngữ cao nhất do Viện Goethe cung cấp và chứng nhận năng lực ngôn ngữ ở trình độ C2 theo Khung tham chiếu chung châu Âu (GER). Kỳ thi gồm bốn phần: Đọc (khoảng 80 phút), Nghe (khoảng 35 phút), Viết (80 phút) và Nói (khoảng 15 phút). Ở phần Viết, phải soạn một văn bản lập luận về một chủ đề phức tạp; ở phần Nói, yêu cầu trình bày độc thoại kèm thảo luận sau đó. GDS cho phép nhập học tại các trường đại học Đức và được nhiều nhà tuyển dụng công nhận như bằng chứng năng lực tiếng bản ngữ.",
      },
      {
        type: "vocabulary",
        titleDe: "Prüfungswortschatz GDS",
        titleVi: "Từ vựng thi GDS",
        words: [
          { de: "das Große Deutsche Sprachdiplom (GDS)", vi: "Đại chứng chỉ tiếng Đức" },
          { de: "der Gemeinsame Europäische Referenzrahmen (GER)", vi: "Khung tham chiếu chung châu Âu" },
          { de: "das Prüfungsmodul", vi: "phần thi, mô-đun thi" },
          { de: "die Bewertungskriterien", vi: "tiêu chí đánh giá" },
          { de: "der monologische Vortrag", vi: "bài trình bày độc thoại" },
          { de: "die Stellungnahme", vi: "bài phát biểu ý kiến, lập trường" },
          { de: "die Erörterung", vi: "bài nghị luận" },
          { de: "die Sprachkompetenz auf muttersprachlichem Niveau", vi: "năng lực ngôn ngữ trình độ bản ngữ" },
          { de: "die Kohärenz und Kohäsion", vi: "tính mạch lạc và tính liên kết" },
          { de: "die Bestehensnorm", vi: "ngưỡng đạt, tiêu chuẩn đỗ" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Prüfungssimulation: Mündlicher Teil — Vortrag und Diskussion",
        titleVi: "Mô phỏng thi: Phần nói — Trình bày và thảo luận",
        lines: [
          {
            speaker: "Prüfer",
            de: "Sie haben fünf Minuten für Ihren Vortrag zum Thema 'Künstliche Intelligenz und ihre Auswirkungen auf den Arbeitsmarkt'. Bitte beginnen Sie.",
            vi: "Bạn có năm phút cho bài trình bày về chủ đề 'Trí tuệ nhân tạo và tác động đối với thị trường lao động'. Xin mời bắt đầu.",
          },
          {
            speaker: "Thanh",
            de: "Sehr geehrte Damen und Herren, die rasante Entwicklung künstlicher Intelligenz stellt uns vor eine der drängendsten Fragen unserer Zeit: Wie wird sich der Arbeitsmarkt transformieren? Ich möchte diese Frage anhand dreier Aspekte erörtern: erstens die Substitution menschlicher Arbeit durch Automatisierung, zweitens die Entstehung neuer Berufsfelder und drittens die sozialpolitischen Implikationen.",
            vi: "Kính thưa quý vị, sự phát triển nhanh chóng của trí tuệ nhân tạo đặt ra cho chúng ta một trong những câu hỏi cấp bách nhất thời đại: Thị trường lao động sẽ biến đổi như thế nào? Tôi muốn thảo luận câu hỏi này theo ba khía cạnh: thứ nhất, sự thay thế lao động con người bởi tự động hóa; thứ hai, sự xuất hiện các lĩnh vực nghề nghiệp mới; và thứ ba, các hàm ý chính sách xã hội.",
          },
          {
            speaker: "Prüfer",
            de: "Vielen Dank. Sie erwähnten die sozialpolitischen Implikationen. Welche konkreten Maßnahmen schlagen Sie vor?",
            vi: "Cảm ơn. Bạn đã đề cập đến các hàm ý chính sách xã hội. Bạn đề xuất những biện pháp cụ thể nào?",
          },
          {
            speaker: "Thanh",
            de: "Eine grundlegende Neugestaltung des Bildungssystems ist unabdingbar — weg von der reinen Wissensvermittlung hin zur Förderung von Kompetenzen, die Maschinen nicht replizieren können: kritisches Denken, kreative Problemlösung und interkulturelle Kommunikation. Darüber hinaus halte ich ein bedingungsloses Grundeinkommen für diskussionswürdig.",
            vi: "Việc cải tổ căn bản hệ thống giáo dục là không thể thiếu — từ chỗ chỉ truyền đạt kiến thức sang phát triển các năng lực mà máy móc không thể sao chép: tư duy phản biện, giải quyết vấn đề sáng tạo và giao tiếp liên văn hóa. Ngoài ra, tôi cho rằng thu nhập cơ bản vô điều kiện đáng để thảo luận.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: GDS-Schreibmodul — Argumentativer Text",
        titleVi: "Bài tập: Phần viết GDS — Văn bản lập luận",
        instruction:
          "Verfassen Sie einen argumentativen Text (ca. 350 Wörter) zum Thema: 'Sollte der Staat den Zugang zu sozialen Medien für Minderjährige regulieren?' Strukturieren Sie Ihren Text mit Einleitung, Hauptteil (mindestens zwei Argumente und Gegenargumente) und Schluss. Achten Sie besonders auf Kohärenz, stilistische Varianz und die Einhaltung der C2-Schreibkonventionen.",
        instructionVi:
          "Viết một văn bản lập luận (khoảng 350 từ) về chủ đề: 'Nhà nước có nên quản lý việc truy cập mạng xã hội đối với người chưa thành niên?' Cấu trúc bài viết gồm mở bài, thân bài (ít nhất hai luận điểm và phản biện) và kết bài. Đặc biệt chú ý tính mạch lạc, đa dạng phong cách và tuân thủ quy ước viết C2.",
      },
    ],
  },

  // --- Kapitel 10, Lektion 2: Akademisches Publizieren ---
  {
    id: "c2-ch10-l2",
    chapterId: 10,
    lessonNumber: 2,
    title: "Akademisches Publizieren auf Deutsch",
    titleVi: "Xuất bản học thuật bằng tiếng Đức",
    type: "Fertigkeit",
    objectives: [
      "Nắm vững cấu trúc và quy ước của bài báo khoa học tiếng Đức",
      "Sử dụng thành thạo các cụm từ học thuật (Wissenschaftssprache) chuẩn mực",
      "Phân biệt phong cách viết học thuật Đức với tiếng Anh và tiếng Việt",
      "Thực hành viết tóm tắt (Abstract) và phần phương pháp nghiên cứu",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Konventionen des akademischen Publizierens im deutschsprachigen Raum",
        titleVi: "Quy ước xuất bản học thuật trong không gian tiếng Đức",
        textDe:
          "Das akademische Publizieren auf Deutsch folgt spezifischen Konventionen, die sich teils erheblich von angloamerikanischen Standards unterscheiden. Deutsche wissenschaftliche Texte tendieren zu komplexerer Syntax (Schachtelsätze, Nominalstil), einer stärkeren theoretischen Fundierung und einer ausgeprägteren Auseinandersetzung mit dem Forschungsstand. Der typische Aufbau eines Fachartikels umfasst: Abstract, Einleitung (mit Forschungsfrage und Hypothese), theoretischer Rahmen, Methodik, Ergebnisse, Diskussion und Fazit. Im Gegensatz zum angloamerikanischen 'hedging' ('it might suggest') neigt die deutsche Wissenschaftssprache zu direkteren Formulierungen, wenngleich auch hier der Konjunktiv und modalisierende Ausdrücke ('es ist davon auszugehen', 'es lässt sich feststellen') eine wichtige Rolle spielen.",
        textVi:
          "Xuất bản học thuật bằng tiếng Đức tuân theo các quy ước đặc thù, phần nào khác biệt đáng kể so với tiêu chuẩn Anh-Mỹ. Văn bản khoa học Đức có xu hướng cú pháp phức tạp hơn (câu lồng ghép, phong cách danh từ hóa), nền tảng lý thuyết mạnh hơn và phân tích tình trạng nghiên cứu sâu hơn. Cấu trúc điển hình của bài báo chuyên ngành gồm: Tóm tắt, Mở đầu (câu hỏi nghiên cứu và giả thuyết), Khung lý thuyết, Phương pháp, Kết quả, Thảo luận và Kết luận. Khác với 'hedging' Anh-Mỹ ('it might suggest'), ngôn ngữ khoa học Đức có xu hướng diễn đạt trực tiếp hơn, dù giả định cách và các biểu đạt tình thái ('es ist davon auszugehen', 'es lässt sich feststellen') cũng đóng vai trò quan trọng.",
      },
      {
        type: "vocabulary",
        titleDe: "Wissenschaftssprachliche Formulierungen",
        titleVi: "Các cụm từ ngôn ngữ khoa học",
        words: [
          { de: "der Forschungsstand", vi: "tình trạng nghiên cứu" },
          { de: "die Forschungslücke", vi: "khoảng trống nghiên cứu" },
          { de: "die Hypothesenbildung", vi: "việc hình thành giả thuyết" },
          { de: "der theoretische Rahmen", vi: "khung lý thuyết" },
          { de: "die Operationalisierung", vi: "sự thao tác hóa (biến)" },
          { de: "das Abstract (die Zusammenfassung)", vi: "tóm tắt (bài báo)" },
          { de: "die Peer-Review", vi: "bình duyệt đồng nghiệp" },
          { de: "der Nominalstil", vi: "phong cách danh từ hóa" },
          { de: "die Zitierkonvention", vi: "quy ước trích dẫn" },
          { de: "es lässt sich feststellen, dass …", vi: "có thể xác nhận rằng …" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Doktorandenkolloquium: Feedback zum Fachartikel",
        titleVi: "Colloquium nghiên cứu sinh: Phản hồi bài báo chuyên ngành",
        lines: [
          {
            speaker: "Prof. Fischer",
            de: "Frau Nguyen, Ihr Artikel weist eine solide theoretische Fundierung auf. Allerdings fällt mir auf, dass Sie im Methodenteil zu knapp bleiben. Können Sie die Operationalisierung Ihrer Variablen ausführlicher darlegen?",
            vi: "Chị Nguyễn, bài báo của chị có nền tảng lý thuyết vững chắc. Tuy nhiên, tôi nhận thấy phần phương pháp còn quá ngắn gọn. Chị có thể trình bày chi tiết hơn việc thao tác hóa các biến không?",
          },
          {
            speaker: "Linh",
            de: "Vielen Dank für den Hinweis. Ich werde die Operationalisierung der abhängigen Variable — Sprachkompetenz, gemessen anhand des GER-Rasters — im nächsten Entwurf präzisieren. Zudem ergänze ich eine Begründung der Stichprobenwahl.",
            vi: "Cảm ơn giáo sư đã chỉ ra. Tôi sẽ làm rõ việc thao tác hóa biến phụ thuộc — năng lực ngôn ngữ, đo lường theo thang GER — trong bản nháp tiếp theo. Ngoài ra tôi sẽ bổ sung lý do chọn mẫu.",
          },
          {
            speaker: "Prof. Fischer",
            de: "Gut. Noch eine stilistische Anmerkung: Im deutschsprachigen akademischen Diskurs wird das generische Maskulinum zunehmend durch gendergerechte Sprache ersetzt. Achten Sie auf Konsistenz.",
            vi: "Tốt. Thêm một ghi chú về phong cách: trong diễn ngôn học thuật tiếng Đức, giống đực chung ngày càng được thay thế bằng ngôn ngữ bình đẳng giới. Hãy chú ý tính nhất quán.",
          },
          {
            speaker: "Linh",
            de: "Selbstverständlich. Ich verwende durchgängig den Genderstern — also 'Teilnehmer*innen', 'Forscher*innen' — und passe den gesamten Text entsprechend an.",
            vi: "Tất nhiên. Tôi sẽ sử dụng nhất quán dấu sao giới — tức 'Teilnehmer*innen', 'Forscher*innen' — và điều chỉnh toàn bộ văn bản cho phù hợp.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Abstract und Einleitung eines Fachartikels verfassen",
        titleVi: "Bài tập: Viết tóm tắt và mở đầu bài báo chuyên ngành",
        instruction:
          "Verfassen Sie ein Abstract (ca. 150 Wörter) und eine Einleitung (ca. 300 Wörter) für einen fiktiven Fachartikel zum Thema 'Der Einfluss der Muttersprache Vietnamesisch auf den Erwerb der deutschen Syntax'. Formulieren Sie eine klare Forschungsfrage, skizzieren Sie den Forschungsstand und verwenden Sie wissenschaftssprachliche Konventionen (Nominalstil, Konjunktiv, Fachterminologie).",
        instructionVi:
          "Viết một bản tóm tắt (khoảng 150 từ) và phần mở đầu (khoảng 300 từ) cho một bài báo chuyên ngành giả định về chủ đề 'Ảnh hưởng của tiếng mẹ đẻ tiếng Việt đối với việc thụ đắc cú pháp tiếng Đức'. Đặt một câu hỏi nghiên cứu rõ ràng, phác thảo tình trạng nghiên cứu và sử dụng các quy ước ngôn ngữ khoa học (phong cách danh từ hóa, giả định cách, thuật ngữ chuyên ngành).",
      },
    ],
  },

  // --- Kapitel 10, Lektion 3: Simultandolmetschen & Konferenzdeutsch ---
  {
    id: "c2-ch10-l3",
    chapterId: 10,
    lessonNumber: 3,
    title: "Simultandolmetschen & Konferenzdeutsch",
    titleVi: "Phiên dịch đồng thời & Tiếng Đức hội nghị",
    type: "Fertigkeit",
    objectives: [
      "Hiểu các nguyên tắc cơ bản của phiên dịch đồng thời và liên tiếp",
      "Luyện tập kỹ thuật ghi chú (Notizentechnik) cho phiên dịch liên tiếp",
      "Nắm vững ngôn ngữ hội nghị và ngoại giao tiếng Đức",
      "Thực hành chuyển đổi nhanh giữa tiếng Đức và tiếng Việt trong bối cảnh chuyên nghiệp",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Dolmetscharten und die Kunst des Simultandolmetschens",
        titleVi: "Các hình thức phiên dịch và nghệ thuật dịch đồng thời",
        textDe:
          "Das Simultandolmetschen gilt als die anspruchsvollste Form der Sprachmittlung: Der Dolmetscher überträgt die Aussage des Redners nahezu zeitgleich in die Zielsprache — ein kognitiver Balanceakt, der simultanes Zuhören, Analysieren, Reformulieren und Sprechen erfordert. Das Konsekutivdolmetschen hingegen erfolgt in Abschnitten; der Dolmetscher hört zunächst zu, macht sich Notizen (Notizentechnik nach Jean-François Rozan) und gibt den Inhalt anschließend wieder. Konferenzdeutsch zeichnet sich durch formelle Register, diplomatische Wendungen und eine hohe Informationsdichte aus. Für vietnamesische Dolmetscher*innen ergeben sich besondere Herausforderungen: die extreme Verdichtung deutscher Nominalphrasen, die im Vietnamesischen aufgelöst werden müssen, sowie die unterschiedlichen Höflichkeitskonventionen in diplomatischen Kontexten.",
        textVi:
          "Phiên dịch đồng thời được coi là hình thức chuyển ngữ đòi hỏi nhất: phiên dịch viên chuyển phát ngôn của diễn giả gần như đồng thời sang ngôn ngữ đích — một cân bằng nhận thức đòi hỏi nghe, phân tích, tái cấu trúc và nói cùng lúc. Phiên dịch liên tiếp diễn ra theo đoạn: phiên dịch viên nghe trước, ghi chú (kỹ thuật ghi chú theo Jean-François Rozan) và sau đó truyền đạt nội dung. Tiếng Đức hội nghị đặc trưng bởi thanh ngữ trang trọng, lối diễn đạt ngoại giao và mật độ thông tin cao. Đối với phiên dịch viên Việt Nam, có những thách thức đặc biệt: sự cô đọng cực kỳ của cụm danh từ tiếng Đức phải được phân tách trong tiếng Việt, cũng như các quy ước lịch sự khác nhau trong bối cảnh ngoại giao.",
      },
      {
        type: "vocabulary",
        titleDe: "Konferenz- und Diplomatiesprache",
        titleVi: "Ngôn ngữ hội nghị và ngoại giao",
        words: [
          { de: "das Simultandolmetschen", vi: "phiên dịch đồng thời" },
          { de: "das Konsekutivdolmetschen", vi: "phiên dịch liên tiếp" },
          { de: "die Notizentechnik", vi: "kỹ thuật ghi chú (phiên dịch)" },
          { de: "die Sprachmittlung", vi: "sự chuyển ngữ, trung gian ngôn ngữ" },
          { de: "das diplomatische Protokoll", vi: "nghi thức ngoại giao" },
          { de: "die bilateralen Beziehungen", vi: "quan hệ song phương" },
          { de: "der Verhandlungsjargon", vi: "biệt ngữ đàm phán" },
          { de: "die interkulturelle Mediation", vi: "hòa giải liên văn hóa" },
          { de: "die Kabine (Dolmetschkabine)", vi: "buồng (phiên dịch)" },
          { de: "das Flüsterdolmetschen (Chuchotage)", vi: "dịch thì thầm (chuchotage)" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Simulation: Deutsch-vietnamesische Wirtschaftskonferenz",
        titleVi: "Mô phỏng: Hội nghị kinh tế Đức-Việt",
        lines: [
          {
            speaker: "Botschafter Schmidt",
            de: "Die Bundesrepublik Deutschland misst der strategischen Partnerschaft mit der Sozialistischen Republik Vietnam allergrößte Bedeutung bei. Wir streben eine Vertiefung der wirtschaftlichen Zusammenarbeit insbesondere in den Bereichen erneuerbare Energien, Berufsbildung und Digitalisierung an.",
            vi: "Cộng hòa Liên bang Đức đặc biệt coi trọng quan hệ đối tác chiến lược với Cộng hòa Xã hội Chủ nghĩa Việt Nam. Chúng tôi hướng tới đào sâu hợp tác kinh tế, đặc biệt trong các lĩnh vực năng lượng tái tạo, đào tạo nghề và số hóa.",
          },
          {
            speaker: "Dolmetscherin Hoa",
            de: "(Konsekutivdolmetschung) Kính thưa quý vị, Đại sứ Schmidt nhấn mạnh rằng Cộng hòa Liên bang Đức gắn tầm quan trọng lớn nhất với quan hệ đối tác chiến lược với Việt Nam. Phía Đức mong muốn mở rộng hợp tác kinh tế, đặc biệt trong năng lượng tái tạo, đào tạo nghề và chuyển đổi số.",
            vi: "(Phiên dịch liên tiếp) Mẫu phiên dịch từ tiếng Đức sang tiếng Việt trong bối cảnh ngoại giao.",
          },
          {
            speaker: "Botschafter Schmidt",
            de: "Ferner möchten wir die von beiden Seiten als prioritär erachtete Fachkräftezuwanderung auf eine solide institutionelle Grundlage stellen. Das im vergangenen Jahr unterzeichnete Migrationsabkommen bildet hierfür einen vielversprechenden Rahmen.",
            vi: "Ngoài ra, chúng tôi muốn đặt việc thu hút nhân lực chuyên môn — mà cả hai bên đều coi là ưu tiên — trên nền tảng thể chế vững chắc. Hiệp định di cư ký năm ngoái tạo khuôn khổ đầy hứa hẹn cho điều này.",
          },
          {
            speaker: "Dolmetscherin Hoa",
            de: "(Interne Reflexion) Hier muss ich die komplexe Nominalphrase 'die von beiden Seiten als prioritär erachtete Fachkräftezuwanderung' im Vietnamesischen in einen Relativsatz auflösen — eine typische Herausforderung beim Dolmetschen aus dem Deutschen.",
            vi: "(Suy ngẫm nội bộ) Ở đây tôi phải phân tách cụm danh từ phức 'die von beiden Seiten als prioritär erachtete Fachkräftezuwanderung' thành mệnh đề quan hệ trong tiếng Việt — một thách thức điển hình khi dịch từ tiếng Đức.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Konsekutivdolmetschen — Notizentechnik",
        titleVi: "Bài tập: Phiên dịch liên tiếp — Kỹ thuật ghi chú",
        instruction:
          "Lesen Sie den folgenden Abschnitt einer fiktiven Konferenzrede zweimal und erstellen Sie Notizen nach der Rozan-Methode. Geben Sie anschließend den Inhalt frei auf Vietnamesisch wieder: 'Die bilateralen Beziehungen zwischen Deutschland und Vietnam haben sich in den vergangenen drei Jahrzehnten dynamisch entwickelt. Insbesondere die wirtschaftliche Verflechtung — Deutschland ist Vietnams wichtigster Handelspartner in der EU — hat an Bedeutung gewonnen. Gleichwohl bestehen in der Frage der Menschenrechte weiterhin Differenzen, die einen offenen und konstruktiven Dialog erfordern.'",
        instructionVi:
          "Đọc đoạn diễn văn hội nghị giả định sau đây hai lần và ghi chú theo phương pháp Rozan. Sau đó truyền đạt nội dung tự do bằng tiếng Việt: 'Die bilateralen Beziehungen zwischen Deutschland und Vietnam haben sich in den vergangenen drei Jahrzehnten dynamisch entwickelt. Insbesondere die wirtschaftliche Verflechtung — Deutschland ist Vietnams wichtigster Handelspartner in der EU — hat an Bedeutung gewonnen. Gleichwohl bestehen in der Frage der Menschenrechte weiterhin Differenzen, die einen offenen und konstruktiven Dialog erfordern.'",
      },
    ],
  },

  // --- Kapitel 10, Lektion 4: Abschluss — Vom Lernenden zum Sprachexperten ---
  {
    id: "c2-ch10-l4",
    chapterId: 10,
    lessonNumber: 4,
    title: "Abschluss: Vom Lernenden zum Sprachexperten",
    titleVi: "Kết thúc: Từ người học đến chuyên gia ngôn ngữ",
    type: "Fertigkeit",
    objectives: [
      "Phản ánh về hành trình học tiếng Đức từ A1 đến C2",
      "Xây dựng chiến lược duy trì và phát triển ngôn ngữ sau C2",
      "Khám phá các con đường sự nghiệp với năng lực Đức-Việt song ngữ",
      "Viết một bài luận phản ánh tổng kết về trải nghiệm học ngôn ngữ",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Jenseits von C2: Lebenslanges Sprachlernen und professionelle Expertise",
        titleVi: "Vượt xa C2: Học ngôn ngữ suốt đời và chuyên môn nghề nghiệp",
        textDe:
          "Das Erreichen des C2-Niveaus markiert nicht das Ende, sondern einen Wendepunkt der Sprachbiografie. Jenseits formaler Zertifikate eröffnen sich Felder der Spezialisierung: akademisches Schreiben, literarische Übersetzung, Konferenzdolmetschen, Fachjournalismus oder Sprachdidaktik. Der Übergang vom 'Lernenden' zum 'Sprachexperten' erfordert eine Neuausrichtung der Lernstrategie: Statt systematischen Grammatikerwerbs tritt nun die immersive Vertiefung in Fachdomänen, die regelmäßige Auseinandersetzung mit anspruchsvollen Texten (Literatur, Philosophie, Recht) und die aktive Teilnahme an deutschsprachigen Diskursgemeinschaften in den Vordergrund. Für vietnamesische Deutschsprecher*innen bieten sich einzigartige Möglichkeiten als Brückenbauer zwischen zwei Sprach- und Kulturräumen — in Wirtschaft, Diplomatie, Wissenschaft und Kultur.",
        textVi:
          "Đạt được trình độ C2 không phải là kết thúc mà là bước ngoặt trong tiểu sử ngôn ngữ. Vượt xa các chứng chỉ chính thức, mở ra các lĩnh vực chuyên môn hóa: viết học thuật, dịch văn học, phiên dịch hội nghị, báo chí chuyên ngành hay phương pháp giảng dạy ngôn ngữ. Sự chuyển đổi từ 'người học' thành 'chuyên gia ngôn ngữ' đòi hỏi tái định hướng chiến lược học: thay vì thụ đắc ngữ pháp có hệ thống, giờ đây ưu tiên đào sâu nhập vai vào các lĩnh vực chuyên môn, tiếp xúc thường xuyên với văn bản đòi hỏi cao (văn học, triết học, luật) và tham gia tích cực vào các cộng đồng diễn ngôn tiếng Đức. Đối với người Việt nói tiếng Đức, có những cơ hội độc đáo với vai trò cầu nối giữa hai không gian ngôn ngữ và văn hóa — trong kinh tế, ngoại giao, khoa học và văn hóa.",
      },
      {
        type: "vocabulary",
        titleDe: "Wortschatz: Sprachexpertise und Karrierewege",
        titleVi: "Từ vựng: Chuyên môn ngôn ngữ và con đường sự nghiệp",
        words: [
          { de: "die Sprachbiografie", vi: "tiểu sử ngôn ngữ" },
          { de: "die Diskursgemeinschaft", vi: "cộng đồng diễn ngôn" },
          { de: "die Sprachdidaktik", vi: "phương pháp giảng dạy ngôn ngữ" },
          { de: "die Fachsprache", vi: "ngôn ngữ chuyên ngành" },
          { de: "die immersive Vertiefung", vi: "đào sâu nhập vai" },
          { de: "der Brückenbauer / die Brückenbauerin", vi: "người xây cầu nối" },
          { de: "die interkulturelle Kompetenz", vi: "năng lực liên văn hóa" },
          { de: "die Sprachmittlungskompetenz", vi: "năng lực chuyển ngữ" },
          { de: "das lebenslange Lernen", vi: "học tập suốt đời" },
          { de: "die Mehrsprachigkeit als Ressource", vi: "đa ngữ như một nguồn lực" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Abschlussgespräch: Rückblick und Ausblick",
        titleVi: "Trò chuyện kết thúc: Nhìn lại và hướng tới",
        lines: [
          {
            speaker: "KI-Lehrer",
            de: "Sie haben eine bemerkenswerte Reise zurückgelegt — von 'Hallo, ich heiße...' bis zur Analyse von Baudrillards Simulationstheorie. Was war der entscheidende Wendepunkt?",
            vi: "Bạn đã trải qua một hành trình đáng chú ý — từ 'Hallo, ich heiße...' đến phân tích lý thuyết mô phỏng của Baudrillard. Bước ngoặt quyết định là gì?",
          },
          {
            speaker: "Lernende/r",
            de: "Rückblickend war es der Moment, als ich aufhörte, Deutsch als Fremdsprache zu betrachten, und begann, in ihr zu denken. Ab dem B2-Niveau etwa träumte ich erstmals auf Deutsch — und das war ein Paradigmenwechsel.",
            vi: "Nhìn lại, đó là khoảnh khắc tôi ngừng coi tiếng Đức là ngoại ngữ và bắt đầu suy nghĩ bằng nó. Khoảng từ trình độ B2, tôi mơ bằng tiếng Đức lần đầu — và đó là một sự chuyển đổi mô hình.",
          },
          {
            speaker: "KI-Lehrer",
            de: "Und wie sehen Sie Ihre Zukunft als Sprachexperte?",
            vi: "Và bạn nhìn nhận tương lai của mình với tư cách chuyên gia ngôn ngữ như thế nào?",
          },
          {
            speaker: "Lernende/r",
            de: "Ich möchte die Brücke zwischen Deutschland und Vietnam stärken — sei es durch akademisches Publizieren, durch Übersetzungsarbeit oder durch die Ausbildung der nächsten Generation vietnamesischer Deutschlernender. Die Sprache ist nicht nur ein Werkzeug; sie ist ein Zugang zu einer Denkwelt, die meine eigene erweitert hat.",
            vi: "Tôi muốn củng cố cầu nối giữa Đức và Việt Nam — dù thông qua xuất bản học thuật, công việc dịch thuật hay đào tạo thế hệ người Việt học tiếng Đức tiếp theo. Ngôn ngữ không chỉ là công cụ; nó là lối vào một thế giới tư duy đã mở rộng thế giới của chính tôi.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Abschlussübung: Reflexionsessay — Meine Sprachbiografie",
        titleVi: "Bài tập kết thúc: Luận văn phản ánh — Tiểu sử ngôn ngữ của tôi",
        instruction:
          "Verfassen Sie einen reflektierenden Essay (ca. 600 Wörter) über Ihre persönliche Sprachbiografie als vietnamesischer Deutschlernender. Gliedern Sie Ihren Text in: (1) Motivation und Anfänge, (2) Wendepunkte und Durchbrüche, (3) Herausforderungen als vietnamesischer Muttersprachler beim Deutscherwerb, (4) Identität zwischen zwei Sprachen und Kulturen, (5) Zukunftsvision. Verwenden Sie das gesamte stilistische und grammatische Repertoire, das Sie auf Ihrem Weg von A1 bis C2 erworben haben.",
        instructionVi:
          "Viết một bài luận phản ánh (khoảng 600 từ) về tiểu sử ngôn ngữ cá nhân của bạn với tư cách người Việt học tiếng Đức. Cấu trúc bài viết: (1) Động lực và khởi đầu, (2) Bước ngoặt và đột phá, (3) Thách thức với tư cách người bản ngữ tiếng Việt khi học tiếng Đức, (4) Bản sắc giữa hai ngôn ngữ và văn hóa, (5) Tầm nhìn tương lai. Sử dụng toàn bộ kho tàng phong cách và ngữ pháp mà bạn đã tích lũy trên hành trình từ A1 đến C2.",
      },
    ],
  },
];
