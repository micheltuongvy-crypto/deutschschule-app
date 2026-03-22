// B1 Chapter 2: Gesellschaft & Politik
// Lesson content for Vietnamese learners — CEFR B1, Kapitel 2

import type { ContentBlock, Lesson } from "../a1/chapters1_3";

export const b1LessonsCh2: Lesson[] = [
  // ============================================================
  // CHAPTER 2: Gesellschaft & Politik
  // ============================================================

  // --- Chapter 2, Lesson 1: Politisches System Deutschlands ---
  {
    id: "b1-ch2-l1",
    chapterId: 2,
    lessonNumber: 1,
    title: "Politisches System Deutschlands",
    titleVi: "Hệ thống chính trị của Đức",
    type: "Einführung",
    objectives: [
      "Hiểu cấu trúc hệ thống chính trị Đức: Bundestag, Bundesrat, Bundesregierung",
      "Nắm từ vựng về bầu cử, đảng phái và cơ quan nhà nước",
      "Mô tả hệ thống chính trị Đức bằng tiếng Đức ở mức B1",
      "So sánh cơ bản hệ thống chính trị Đức với Việt Nam",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das politische System der Bundesrepublik Deutschland",
        titleVi: "Hệ thống chính trị của Cộng hòa Liên bang Đức",
        textDe:
          "Deutschland ist eine parlamentarische Demokratie und ein Bundesstaat. Das bedeutet, dass das Land aus 16 Bundesländern besteht, die jeweils eigene Parlamente und Regierungen haben. Auf Bundesebene gibt es den Bundestag (das Parlament, von den Bürgern direkt gewählt), den Bundesrat (die Vertretung der Bundesländer), die Bundesregierung (der Bundeskanzler und die Minister) und den Bundespräsidenten (das Staatsoberhaupt). Der Bundeskanzler wird vom Bundestag gewählt und bestimmt die Richtlinien der Politik.",
        textVi:
          "Đức là một nền dân chủ nghị viện và một nhà nước liên bang. Điều đó có nghĩa là đất nước bao gồm 16 bang (Bundesländer), mỗi bang có nghị viện và chính phủ riêng. Ở cấp liên bang có Bundestag (Quốc hội, do công dân bầu trực tiếp), Bundesrat (Hội đồng Liên bang — đại diện của các bang), Bundesregierung (Chính phủ Liên bang — Thủ tướng và các bộ trưởng) và Bundespräsident (Tổng thống — nguyên thủ quốc gia). Thủ tướng được Quốc hội bầu và quyết định đường lối chính sách. Khác với Việt Nam, Đức có hệ thống đa đảng và bầu cử tự do.",
      },
      {
        type: "vocabulary",
        titleDe: "Politik & Staat",
        titleVi: "Chính trị & Nhà nước",
        words: [
          { de: "Demokratie", vi: "nền dân chủ", article: "die" },
          { de: "Bundesstaat", vi: "nhà nước liên bang", article: "der" },
          { de: "Bundestag", vi: "Quốc hội Liên bang", article: "der" },
          { de: "Bundesrat", vi: "Hội đồng Liên bang", article: "der" },
          { de: "Bundesregierung", vi: "Chính phủ Liên bang", article: "die" },
          { de: "Bundeskanzler", vi: "Thủ tướng Liên bang", article: "der" },
          { de: "Bundespräsident", vi: "Tổng thống Liên bang", article: "der" },
          { de: "Bundesland", vi: "bang (tiểu bang)", article: "das" },
          { de: "Parlament", vi: "nghị viện, quốc hội", article: "das" },
          { de: "Abgeordneter", vi: "nghị sĩ, đại biểu", article: "der" },
          { de: "Gesetz", vi: "luật, đạo luật", article: "das" },
          { de: "Grundgesetz", vi: "Hiến pháp (Luật cơ bản)", article: "das" },
          { de: "Verfassung", vi: "hiến pháp", article: "die" },
          { de: "Staatsoberhaupt", vi: "nguyên thủ quốc gia", article: "das" },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Wahlen & Parteien",
        titleVi: "Bầu cử & Đảng phái",
        words: [
          { de: "Wahl", vi: "cuộc bầu cử", article: "die" },
          { de: "Bundestagswahl", vi: "bầu cử Quốc hội Liên bang", article: "die" },
          { de: "Wahlrecht", vi: "quyền bầu cử", article: "das" },
          { de: "Stimmzettel", vi: "phiếu bầu", article: "der" },
          { de: "Erststimme", vi: "lá phiếu thứ nhất (bầu ứng viên trực tiếp)", article: "die" },
          { de: "Zweitstimme", vi: "lá phiếu thứ hai (bầu đảng)", article: "die" },
          { de: "Partei", vi: "đảng phái", article: "die" },
          { de: "Koalition", vi: "liên minh (chính phủ)", article: "die" },
          { de: "Opposition", vi: "phe đối lập", article: "die" },
          { de: "Wahlkampf", vi: "chiến dịch tranh cử", article: "der" },
          { de: "Kandidat", vi: "ứng cử viên", article: "der" },
          { de: "Wahlbeteiligung", vi: "tỷ lệ cử tri đi bầu", article: "die" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Im Integrationskurs: Das politische System",
        titleVi: "Trong lớp hội nhập: Hệ thống chính trị",
        lines: [
          {
            speaker: "Lehrerin",
            de: "Heute sprechen wir über das politische System Deutschlands. Wer kann mir sagen, was der Bundestag ist?",
            vi: "Hôm nay chúng ta nói về hệ thống chính trị của Đức. Ai có thể cho tôi biết Bundestag là gì?",
          },
          {
            speaker: "Minh",
            de: "Der Bundestag ist das Parlament von Deutschland. Die Bürger wählen die Abgeordneten direkt.",
            vi: "Bundestag là Quốc hội của Đức. Công dân bầu trực tiếp các nghị sĩ.",
          },
          {
            speaker: "Lehrerin",
            de: "Sehr gut! Und was ist der Unterschied zwischen dem Bundestag und dem Bundesrat?",
            vi: "Rất tốt! Và sự khác biệt giữa Bundestag và Bundesrat là gì?",
          },
          {
            speaker: "Linh",
            de: "Der Bundesrat vertritt die Bundesländer. Die Mitglieder werden nicht direkt gewählt, sondern von den Landesregierungen geschickt.",
            vi: "Bundesrat đại diện cho các bang. Các thành viên không được bầu trực tiếp mà được các chính phủ bang cử đến.",
          },
          {
            speaker: "Lehrerin",
            de: "Richtig! Und welche Parteien kennt ihr?",
            vi: "Đúng rồi! Và các bạn biết những đảng nào?",
          },
          {
            speaker: "Minh",
            de: "Ich kenne die CDU, die SPD, die Grünen und die FDP. Es gibt noch mehr, aber diese sind die größten.",
            vi: "Em biết CDU, SPD, đảng Xanh và FDP. Còn nhiều đảng nữa, nhưng đây là những đảng lớn nhất.",
          },
          {
            speaker: "Lehrerin",
            de: "Genau. In Deutschland gibt es viele Parteien. Das nennt man ein Mehrparteiensystem.",
            vi: "Chính xác. Ở Đức có nhiều đảng. Người ta gọi đó là hệ thống đa đảng.",
          },
        ],
      },
      {
        type: "explanation",
        titleDe: "Wahlen in Deutschland — Erststimme und Zweitstimme",
        titleVi: "Bầu cử ở Đức — Phiếu bầu thứ nhất và thứ hai",
        textDe:
          "Bei der Bundestagswahl hat jeder Wähler zwei Stimmen. Mit der Erststimme wählt man einen Kandidaten aus dem eigenen Wahlkreis (Direktmandat). Mit der Zweitstimme wählt man eine Partei. Die Zweitstimme ist besonders wichtig, weil sie bestimmt, wie viele Sitze eine Partei im Bundestag bekommt. Wählen dürfen alle deutschen Staatsbürger ab 18 Jahren.",
        textVi:
          "Trong bầu cử Quốc hội, mỗi cử tri có hai lá phiếu. Với lá phiếu thứ nhất (Erststimme), người ta bầu một ứng cử viên trong khu vực bầu cử của mình (ghế trực tiếp). Với lá phiếu thứ hai (Zweitstimme), người ta bầu cho một đảng. Lá phiếu thứ hai đặc biệt quan trọng vì nó quyết định số ghế mà một đảng có được trong Quốc hội. Tất cả công dân Đức từ 18 tuổi trở lên đều có quyền bầu cử.",
      },
      {
        type: "practice",
        titleDe: "Übung: Das politische System beschreiben",
        titleVi: "Bài tập: Mô tả hệ thống chính trị",
        instruction:
          "Beschreiben Sie das politische System Deutschlands in 5-6 Sätzen. Verwenden Sie die Wörter: Bundestag, Bundesrat, Bundeskanzler, Wahl, Partei.",
        instructionVi:
          "Hãy mô tả hệ thống chính trị của Đức trong 5-6 câu. Sử dụng các từ: Bundestag, Bundesrat, Bundeskanzler, Wahl, Partei. Gợi ý: 'Deutschland ist eine... Der Bundestag ist... Der Bundeskanzler wird...'",
      },
    ],
  },

  // --- Chapter 2, Lesson 2: Soziale Themen diskutieren ---
  {
    id: "b1-ch2-l2",
    chapterId: 2,
    lessonNumber: 2,
    title: "Soziale Themen diskutieren",
    titleVi: "Thảo luận các vấn đề xã hội",
    type: "Fertigkeit",
    objectives: [
      "Nắm từ vựng về các vấn đề xã hội quan trọng tại Đức",
      "Biết cách bày tỏ ý kiến, đồng ý và phản đối một cách lịch sự",
      "Sử dụng các cấu trúc để tranh luận và thảo luận ở mức B1",
      "Hiểu các chủ đề xã hội thường gặp trong đời sống và thi B1",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Soziale Themen in Deutschland",
        titleVi: "Các vấn đề xã hội ở Đức",
        textDe:
          "In Deutschland diskutiert man häufig über soziale Themen wie Wohnungsnot, Altersarmut, Integration, Bildungsgerechtigkeit und Gleichberechtigung. Es ist wichtig, seine Meinung höflich und klar ausdrücken zu können. In Diskussionen sollte man Argumente nennen und die Meinungen anderer respektieren.",
        textVi:
          "Ở Đức, người ta thường thảo luận về các vấn đề xã hội như thiếu nhà ở, nghèo đói ở tuổi già, hội nhập, công bằng giáo dục và bình đẳng giới. Điều quan trọng là biết cách bày tỏ ý kiến một cách lịch sự và rõ ràng. Trong các cuộc thảo luận, bạn nên đưa ra lập luận và tôn trọng ý kiến của người khác.",
      },
      {
        type: "vocabulary",
        titleDe: "Soziale Themen",
        titleVi: "Các vấn đề xã hội",
        words: [
          { de: "Wohnungsnot", vi: "khủng hoảng nhà ở", article: "die" },
          { de: "Armut", vi: "sự nghèo đói", article: "die" },
          { de: "Altersarmut", vi: "nghèo đói ở tuổi già", article: "die" },
          { de: "Arbeitslosigkeit", vi: "thất nghiệp", article: "die" },
          { de: "Gleichberechtigung", vi: "bình đẳng (giới)", article: "die" },
          { de: "Integration", vi: "sự hội nhập", article: "die" },
          { de: "Bildung", vi: "giáo dục", article: "die" },
          { de: "Gerechtigkeit", vi: "sự công bằng", article: "die" },
          { de: "Diskriminierung", vi: "sự phân biệt đối xử", article: "die" },
          { de: "Sozialstaat", vi: "nhà nước phúc lợi", article: "der" },
          { de: "Rente", vi: "lương hưu", article: "die" },
          { de: "Krankenversicherung", vi: "bảo hiểm y tế", article: "die" },
          { de: "Obdachlosigkeit", vi: "tình trạng vô gia cư", article: "die" },
          { de: "Chancengleichheit", vi: "bình đẳng cơ hội", article: "die" },
        ],
      },
      {
        type: "grammar",
        titleDe: "Meinungen ausdrücken",
        titleVi: "Bày tỏ ý kiến",
        rule:
          "Meinung sagen: Ich finde, dass... / Meiner Meinung nach... / Ich bin der Meinung, dass... / Ich denke, dass... / Ich glaube, dass...",
        ruleVi:
          "Để bày tỏ ý kiến trong tiếng Đức, bạn có thể dùng: 'Ich finde, dass...' (Tôi thấy rằng...), 'Meiner Meinung nach...' (Theo ý kiến của tôi...), 'Ich bin der Meinung, dass...' (Tôi có ý kiến rằng...), 'Ich denke/glaube, dass...' (Tôi nghĩ/tin rằng...). Lưu ý: Sau 'dass', động từ đứng ở cuối câu!",
        examples: [
          {
            de: "Ich finde, dass Bildung für alle kostenlos sein sollte.",
            vi: "Tôi thấy rằng giáo dục nên miễn phí cho tất cả mọi người.",
          },
          {
            de: "Meiner Meinung nach brauchen wir mehr bezahlbare Wohnungen.",
            vi: "Theo ý kiến của tôi, chúng ta cần thêm nhà ở giá phải chăng.",
          },
          {
            de: "Ich bin der Meinung, dass Integration wichtig für die Gesellschaft ist.",
            vi: "Tôi có ý kiến rằng hội nhập quan trọng đối với xã hội.",
          },
          {
            de: "Ich glaube, dass der Staat mehr für alte Menschen tun sollte.",
            vi: "Tôi tin rằng nhà nước nên làm nhiều hơn cho người già.",
          },
        ],
      },
      {
        type: "grammar",
        titleDe: "Zustimmen und Widersprechen",
        titleVi: "Đồng ý và phản đối",
        rule:
          "Zustimmen: Da hast du recht. / Ich stimme dir/Ihnen zu. / Das sehe ich auch so. / Genau! / Da bin ich ganz deiner/Ihrer Meinung. — Widersprechen: Das sehe ich anders. / Da bin ich anderer Meinung. / Ich bin nicht einverstanden. / Das stimmt so nicht ganz.",
        ruleVi:
          "Đồng ý: 'Da hast du recht.' (Bạn nói đúng), 'Ich stimme dir zu.' (Tôi đồng ý với bạn), 'Das sehe ich auch so.' (Tôi cũng thấy vậy), 'Genau!' (Chính xác!). — Phản đối lịch sự: 'Das sehe ich anders.' (Tôi thấy khác), 'Da bin ich anderer Meinung.' (Tôi có ý kiến khác), 'Ich bin nicht einverstanden.' (Tôi không đồng ý), 'Das stimmt so nicht ganz.' (Điều đó không hoàn toàn đúng). Trong tiếng Đức, phản đối một cách lịch sự rất quan trọng!",
        examples: [
          {
            de: "Da hast du recht, Wohnungen sind wirklich zu teuer.",
            vi: "Bạn nói đúng, nhà ở thực sự quá đắt.",
          },
          {
            de: "Ich stimme dir zu, aber man muss auch die andere Seite sehen.",
            vi: "Tôi đồng ý với bạn, nhưng cũng phải nhìn nhận mặt khác.",
          },
          {
            de: "Das sehe ich anders. Ich finde, der Staat tut schon viel.",
            vi: "Tôi thấy khác. Tôi thấy nhà nước đã làm nhiều rồi.",
          },
          {
            de: "Da bin ich anderer Meinung. Ich glaube, wir brauchen mehr Unterstützung.",
            vi: "Tôi có ý kiến khác. Tôi tin rằng chúng ta cần thêm hỗ trợ.",
          },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Diskussion im Deutschkurs: Wohnungsnot",
        titleVi: "Thảo luận trong lớp tiếng Đức: Khủng hoảng nhà ở",
        lines: [
          {
            speaker: "Lehrer",
            de: "Heute diskutieren wir über das Thema Wohnungsnot. Was denkt ihr darüber?",
            vi: "Hôm nay chúng ta thảo luận về chủ đề khủng hoảng nhà ở. Các bạn nghĩ gì về điều này?",
          },
          {
            speaker: "Linh",
            de: "Ich finde, dass die Mieten viel zu hoch sind. Besonders in Großstädten wie München oder Berlin.",
            vi: "Tôi thấy rằng tiền thuê nhà quá cao. Đặc biệt ở các thành phố lớn như München hoặc Berlin.",
          },
          {
            speaker: "Tuan",
            de: "Da stimme ich dir zu. Als ich nach Deutschland kam, war es sehr schwer, eine Wohnung zu finden.",
            vi: "Tôi đồng ý với bạn. Khi tôi đến Đức, rất khó để tìm được một căn hộ.",
          },
          {
            speaker: "Maria",
            de: "Meiner Meinung nach sollte der Staat mehr Sozialwohnungen bauen.",
            vi: "Theo ý kiến của tôi, nhà nước nên xây thêm nhà ở xã hội.",
          },
          {
            speaker: "Linh",
            de: "Das sehe ich auch so. Aber es dauert lange, bis neue Wohnungen fertig sind.",
            vi: "Tôi cũng thấy vậy. Nhưng phải mất lâu cho đến khi nhà mới xây xong.",
          },
          {
            speaker: "Tuan",
            de: "Da bin ich anderer Meinung. Ich glaube, man sollte auch die Mietpreise stärker kontrollieren.",
            vi: "Tôi có ý kiến khác. Tôi tin rằng người ta cũng nên kiểm soát giá thuê chặt chẽ hơn.",
          },
          {
            speaker: "Lehrer",
            de: "Gute Argumente! Es ist wichtig, verschiedene Lösungen zu diskutieren.",
            vi: "Lập luận tốt! Điều quan trọng là thảo luận về các giải pháp khác nhau.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Diskutieren Sie!",
        titleVi: "Bài tập: Hãy thảo luận!",
        instruction:
          "Wählen Sie ein soziales Thema (z.B. Bildung, Gleichberechtigung, Arbeitslosigkeit) und schreiben Sie 4 Sätze: 2 Sätze mit Ihrer Meinung und 2 Sätze, in denen Sie jemandem zustimmen oder widersprechen.",
        instructionVi:
          "Chọn một vấn đề xã hội (ví dụ: giáo dục, bình đẳng, thất nghiệp) và viết 4 câu: 2 câu bày tỏ ý kiến của bạn và 2 câu đồng ý hoặc phản đối ai đó. Sử dụng: 'Ich finde, dass...', 'Meiner Meinung nach...', 'Da stimme ich zu.', 'Das sehe ich anders.'",
      },
    ],
  },

  // --- Chapter 2, Lesson 3: Ehrenamt & Engagement ---
  {
    id: "b1-ch2-l3",
    chapterId: 2,
    lessonNumber: 3,
    title: "Ehrenamt & Engagement",
    titleVi: "Công việc tình nguyện & Sự tham gia cộng đồng",
    type: "Fertigkeit",
    objectives: [
      "Nắm từ vựng về công việc tình nguyện và hoạt động cộng đồng",
      "Hiểu vai trò quan trọng của Ehrenamt trong xã hội Đức",
      "Biết cách nói về trải nghiệm tình nguyện và mong muốn tham gia",
      "So sánh văn hóa tình nguyện giữa Đức và Việt Nam",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Ehrenamtliches Engagement in Deutschland",
        titleVi: "Hoạt động tình nguyện ở Đức",
        textDe:
          "In Deutschland engagieren sich etwa 30 Millionen Menschen ehrenamtlich. Das Ehrenamt spielt eine zentrale Rolle in der Gesellschaft. Menschen arbeiten freiwillig in Vereinen, bei der Feuerwehr, im Sportverein, in der Flüchtlingshilfe, in sozialen Einrichtungen oder in der Nachbarschaftshilfe. Man bekommt dafür kein Gehalt, aber oft eine Aufwandsentschädigung. Ehrenamtliches Engagement stärkt den Zusammenhalt in der Gesellschaft und hilft bei der Integration.",
        textVi:
          "Ở Đức, khoảng 30 triệu người tham gia hoạt động tình nguyện. Công việc tình nguyện (Ehrenamt) đóng vai trò trung tâm trong xã hội. Mọi người làm việc tình nguyện trong các hội đoàn, đội cứu hỏa tình nguyện, câu lạc bộ thể thao, hỗ trợ người tị nạn, các tổ chức xã hội hoặc hỗ trợ hàng xóm. Người ta không nhận lương nhưng thường được hoàn trả chi phí. Hoạt động tình nguyện tăng cường sự gắn kết xã hội và hỗ trợ quá trình hội nhập. Đây cũng là cách tốt để luyện tiếng Đức và kết bạn mới!",
      },
      {
        type: "vocabulary",
        titleDe: "Ehrenamt & Freiwilligenarbeit",
        titleVi: "Tình nguyện & Công việc tình nguyện",
        words: [
          { de: "Ehrenamt", vi: "công việc tình nguyện (danh dự)", article: "das" },
          { de: "Freiwilliger", vi: "người tình nguyện", article: "der" },
          { de: "Engagement", vi: "sự tham gia, cam kết", article: "das" },
          { de: "Verein", vi: "hội, câu lạc bộ", article: "der" },
          { de: "Mitglied", vi: "thành viên", article: "das" },
          { de: "Spende", vi: "khoản quyên góp", article: "die" },
          { de: "spenden", vi: "quyên góp" },
          { de: "sich engagieren", vi: "tham gia hoạt động (xã hội)" },
          { de: "unterstützen", vi: "hỗ trợ" },
          { de: "Hilfsorganisation", vi: "tổ chức cứu trợ", article: "die" },
          { de: "Nachbarschaftshilfe", vi: "hỗ trợ hàng xóm", article: "die" },
          { de: "Flüchtlingshilfe", vi: "hỗ trợ người tị nạn", article: "die" },
          { de: "Aufwandsentschädigung", vi: "khoản bồi hoàn chi phí", article: "die" },
          { de: "Zusammenhalt", vi: "sự gắn kết", article: "der" },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Bereiche des Ehrenamts",
        titleVi: "Các lĩnh vực tình nguyện",
        words: [
          { de: "Feuerwehr (freiwillige)", vi: "đội cứu hỏa (tình nguyện)", article: "die" },
          { de: "Sportverein", vi: "câu lạc bộ thể thao", article: "der" },
          { de: "Tafel", vi: "ngân hàng thực phẩm (cho người nghèo)", article: "die" },
          { de: "Tierheim", vi: "trại cứu hộ động vật", article: "das" },
          { de: "Jugendarbeit", vi: "công tác thanh thiếu niên", article: "die" },
          { de: "Seniorenbetreuung", vi: "chăm sóc người cao tuổi", article: "die" },
          { de: "Umweltschutz", vi: "bảo vệ môi trường", article: "der" },
          { de: "Kulturverein", vi: "hội văn hóa", article: "der" },
          { de: "Kirchengemeinde", vi: "giáo xứ, cộng đoàn nhà thờ", article: "die" },
          { de: "Deutsches Rotes Kreuz", vi: "Hội Chữ thập đỏ Đức", article: "das" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Gespräch: Ehrenamtlich arbeiten",
        titleVi: "Hội thoại: Làm việc tình nguyện",
        lines: [
          {
            speaker: "Hoa",
            de: "Sag mal, Sabine, du arbeitest doch ehrenamtlich, oder?",
            vi: "Này Sabine, bạn làm tình nguyện phải không?",
          },
          {
            speaker: "Sabine",
            de: "Ja, genau! Ich helfe zweimal pro Woche bei der Tafel. Wir verteilen Lebensmittel an Menschen, die wenig Geld haben.",
            vi: "Đúng vậy! Tôi giúp ở ngân hàng thực phẩm hai lần mỗi tuần. Chúng tôi phát thực phẩm cho những người có ít tiền.",
          },
          {
            speaker: "Hoa",
            de: "Das finde ich toll! Ich würde mich auch gerne engagieren, aber ich weiß nicht, wo ich anfangen soll.",
            vi: "Tôi thấy điều đó tuyệt vời! Tôi cũng muốn tham gia hoạt động tình nguyện, nhưng không biết bắt đầu từ đâu.",
          },
          {
            speaker: "Sabine",
            de: "Du könntest in einem Verein mitmachen. Es gibt zum Beispiel Sportvereine, Kulturvereine oder du hilfst in der Flüchtlingshilfe.",
            vi: "Bạn có thể tham gia một hội đoàn. Ví dụ có câu lạc bộ thể thao, hội văn hóa hoặc bạn giúp trong công tác hỗ trợ người tị nạn.",
          },
          {
            speaker: "Hoa",
            de: "Flüchtlingshilfe wäre interessant! Ich könnte Vietnamesisch-Unterricht für neue Migranten aus Vietnam anbieten.",
            vi: "Hỗ trợ người tị nạn sẽ thú vị! Tôi có thể dạy tiếng Việt cho những người di cư mới từ Việt Nam.",
          },
          {
            speaker: "Sabine",
            de: "Das ist eine super Idee! Auf der Website deiner Stadt findest du bestimmt passende Organisationen.",
            vi: "Đó là ý tưởng tuyệt vời! Trên trang web của thành phố bạn chắc chắn sẽ tìm được các tổ chức phù hợp.",
          },
          {
            speaker: "Hoa",
            de: "Danke für den Tipp! So kann ich auch mein Deutsch verbessern und neue Leute kennenlernen.",
            vi: "Cảm ơn bạn vì lời khuyên! Như vậy tôi cũng có thể cải thiện tiếng Đức và quen biết người mới.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Ehrenamtliches Engagement",
        titleVi: "Bài tập: Hoạt động tình nguyện",
        instruction:
          "Schreiben Sie einen kurzen Text (5-6 Sätze): In welchem Bereich würden Sie sich gerne ehrenamtlich engagieren? Warum? Was könnten Sie dort tun? Verwenden Sie: 'Ich würde gerne...', 'Ich könnte...', 'Ich interessiere mich für...'",
        instructionVi:
          "Viết một đoạn văn ngắn (5-6 câu): Bạn muốn tham gia tình nguyện trong lĩnh vực nào? Tại sao? Bạn có thể làm gì ở đó? Sử dụng: 'Ich würde gerne...' (Tôi muốn...), 'Ich könnte...' (Tôi có thể...), 'Ich interessiere mich für...' (Tôi quan tâm đến...)",
      },
    ],
  },

  // --- Chapter 2, Lesson 4: Passiv (Vorgangspassiv) ---
  {
    id: "b1-ch2-l4",
    chapterId: 2,
    lessonNumber: 4,
    title: "Passiv (Vorgangspassiv)",
    titleVi: "Câu bị động (Vorgangspassiv)",
    type: "Grammatik",
    objectives: [
      "Hiểu và tạo câu bị động với werden + Partizip II",
      "Sử dụng câu bị động ở các thì: Präsens, Präteritum, Perfekt",
      "Phân biệt tác nhân với 'von' (bởi ai) và 'durch' (bằng cách nào)",
      "Chuyển đổi câu chủ động sang câu bị động và ngược lại",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Was ist das Passiv?",
        titleVi: "Câu bị động là gì?",
        textDe:
          "Im Deutschen gibt es zwei Formen: Aktiv und Passiv. Im Aktiv steht die handelnde Person (wer etwas tut) im Vordergrund. Im Passiv steht die Handlung selbst im Vordergrund — es ist wichtiger, WAS passiert, nicht WER es tut. Das Vorgangspassiv (werden-Passiv) beschreibt einen Vorgang oder eine Handlung. Es wird mit 'werden' + Partizip II gebildet.",
        textVi:
          "Trong tiếng Đức có hai dạng: chủ động (Aktiv) và bị động (Passiv). Ở dạng chủ động, người thực hiện hành động (ai làm gì) là trọng tâm. Ở dạng bị động, bản thân hành động là trọng tâm — điều quan trọng là CÁI GÌ xảy ra, không phải AI làm. Vorgangspassiv (bị động với werden) mô tả một quá trình hoặc hành động. Nó được tạo thành bằng 'werden' + Partizip II (quá khứ phân từ). Trong tiếng Việt không có cấu trúc bị động rõ ràng như tiếng Đức, nhưng bạn có thể hiểu nó tương đương với 'được/bị' + động từ.",
      },
      {
        type: "grammar",
        titleDe: "Passiv Präsens: werden + Partizip II",
        titleVi: "Bị động thì hiện tại: werden + Partizip II",
        rule:
          "Aktiv: Der Bundestag beschließt das Gesetz. → Passiv: Das Gesetz wird (vom Bundestag) beschlossen. Konjugation von 'werden' im Präsens: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden + Partizip II am Satzende.",
        ruleVi:
          "Chủ động: Der Bundestag beschließt das Gesetz. (Quốc hội thông qua đạo luật.) → Bị động: Das Gesetz wird (vom Bundestag) beschlossen. (Đạo luật được (Quốc hội) thông qua.) Chia 'werden' ở thì hiện tại: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden + Partizip II ở cuối câu. Chủ ngữ của câu chủ động (Bundestag) trở thành tác nhân với 'von' + Dativ, và tân ngữ (Gesetz) trở thành chủ ngữ của câu bị động.",
        examples: [
          {
            de: "Der Kanzler wird vom Bundestag gewählt.",
            vi: "Thủ tướng được Quốc hội bầu.",
          },
          {
            de: "Die Gesetze werden im Parlament diskutiert.",
            vi: "Các đạo luật được thảo luận trong nghị viện.",
          },
          {
            de: "In Deutschland wird viel ehrenamtlich gearbeitet.",
            vi: "Ở Đức, nhiều công việc tình nguyện được thực hiện.",
          },
          {
            de: "Die Migranten werden von Freiwilligen unterstützt.",
            vi: "Những người di cư được các tình nguyện viên hỗ trợ.",
          },
        ],
      },
      {
        type: "grammar",
        titleDe: "Passiv Präteritum: wurde + Partizip II",
        titleVi: "Bị động thì quá khứ đơn: wurde + Partizip II",
        rule:
          "Im Präteritum wird 'werden' zu 'wurde': ich wurde, du wurdest, er/sie/es wurde, wir wurden, ihr wurdet, sie/Sie wurden + Partizip II.",
        ruleVi:
          "Ở thì quá khứ đơn (Präteritum), 'werden' chuyển thành 'wurde': ich wurde, du wurdest, er/sie/es wurde, wir wurden, ihr wurdet, sie/Sie wurden + Partizip II. Thì này thường dùng trong văn viết, báo chí và kể chuyện.",
        examples: [
          {
            de: "Das Grundgesetz wurde 1949 verabschiedet.",
            vi: "Hiến pháp được thông qua năm 1949.",
          },
          {
            de: "Die Berliner Mauer wurde 1989 geöffnet.",
            vi: "Bức tường Berlin được mở năm 1989.",
          },
          {
            de: "Viele Flüchtlinge wurden von Ehrenamtlichen betreut.",
            vi: "Nhiều người tị nạn được các tình nguyện viên chăm sóc.",
          },
          {
            de: "Die Wahl wurde am Sonntag durchgeführt.",
            vi: "Cuộc bầu cử được tiến hành vào Chủ nhật.",
          },
        ],
      },
      {
        type: "grammar",
        titleDe: "Passiv Perfekt: sein + Partizip II + worden",
        titleVi: "Bị động thì hoàn thành: sein + Partizip II + worden",
        rule:
          "Im Perfekt: sein + Partizip II + worden (nicht 'geworden'!). Beispiel: Das Gesetz ist beschlossen worden. Konjugation: ich bin ... worden, du bist ... worden, er/sie/es ist ... worden, usw.",
        ruleVi:
          "Ở thì hoàn thành (Perfekt): sein + Partizip II + worden (chú ý: 'worden', KHÔNG phải 'geworden'!). Ví dụ: Das Gesetz ist beschlossen worden. (Đạo luật đã được thông qua.) Chia: ich bin ... worden, du bist ... worden, er/sie/es ist ... worden, v.v. Thì này thường dùng trong khẩu ngữ khi nói về hành động đã hoàn thành.",
        examples: [
          {
            de: "Der Präsident ist gewählt worden.",
            vi: "Tổng thống đã được bầu.",
          },
          {
            de: "Die Spenden sind gesammelt worden.",
            vi: "Các khoản quyên góp đã được thu thập.",
          },
          {
            de: "Viele Wohnungen sind in den letzten Jahren gebaut worden.",
            vi: "Nhiều căn hộ đã được xây trong những năm gần đây.",
          },
          {
            de: "Die Probleme sind noch nicht gelöst worden.",
            vi: "Các vấn đề vẫn chưa được giải quyết.",
          },
        ],
      },
      {
        type: "grammar",
        titleDe: "Agens: 'von' und 'durch'",
        titleVi: "Tác nhân: 'von' và 'durch'",
        rule:
          "'von' + Dativ = wer die Handlung ausführt (Person oder Institution). 'durch' + Akkusativ = womit/wodurch etwas geschieht (Mittel, Ursache, Vermittler).",
        ruleVi:
          "'von' + Dativ = ai thực hiện hành động (người hoặc tổ chức). Ví dụ: 'vom Bundestag' (bởi Quốc hội), 'von den Bürgern' (bởi công dân). 'durch' + Akkusativ = bằng phương tiện gì / thông qua cái gì (phương tiện, nguyên nhân, trung gian). Ví dụ: 'durch eine Abstimmung' (thông qua một cuộc biểu quyết), 'durch das Internet' (qua internet). Mẹo nhớ: 'von' = bởi AI, 'durch' = bằng CÁI GÌ.",
        examples: [
          {
            de: "Das Gesetz wurde vom Parlament beschlossen.",
            vi: "Đạo luật được nghị viện thông qua. (bởi ai)",
          },
          {
            de: "Die Nachricht wurde durch die Medien verbreitet.",
            vi: "Tin tức được phổ biến qua truyền thông. (bằng cái gì)",
          },
          {
            de: "Die Hilfe wird von Freiwilligen organisiert.",
            vi: "Sự hỗ trợ được các tình nguyện viên tổ chức. (bởi ai)",
          },
          {
            de: "Das Ergebnis wurde durch eine Umfrage ermittelt.",
            vi: "Kết quả được xác định thông qua một cuộc khảo sát. (bằng cái gì)",
          },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Im Deutschkurs: Passiv üben",
        titleVi: "Trong lớp tiếng Đức: Luyện tập câu bị động",
        lines: [
          {
            speaker: "Lehrer",
            de: "Heute lernen wir das Passiv. Minh, kannst du diesen Satz ins Passiv umwandeln? 'Die Regierung baut neue Wohnungen.'",
            vi: "Hôm nay chúng ta học câu bị động. Minh, em có thể chuyển câu này sang bị động không? 'Chính phủ xây nhà mới.'",
          },
          {
            speaker: "Minh",
            de: "Neue Wohnungen werden von der Regierung gebaut.",
            vi: "Nhà mới được chính phủ xây.",
          },
          {
            speaker: "Lehrer",
            de: "Ausgezeichnet! Und jetzt im Präteritum?",
            vi: "Xuất sắc! Và bây giờ ở thì quá khứ đơn?",
          },
          {
            speaker: "Minh",
            de: "Neue Wohnungen wurden von der Regierung gebaut.",
            vi: "Nhà mới đã được chính phủ xây. (quá khứ đơn)",
          },
          {
            speaker: "Lehrer",
            de: "Perfekt! Linh, und im Perfekt?",
            vi: "Hoàn hảo! Linh, và ở thì hoàn thành?",
          },
          {
            speaker: "Linh",
            de: "Neue Wohnungen sind von der Regierung gebaut worden.",
            vi: "Nhà mới đã được chính phủ xây. (thì hoàn thành)",
          },
          {
            speaker: "Lehrer",
            de: "Sehr gut! Denkt daran: Im Perfekt benutzen wir 'sein' + Partizip II + 'worden', nicht 'geworden'!",
            vi: "Rất tốt! Nhớ nhé: Ở thì hoàn thành chúng ta dùng 'sein' + Partizip II + 'worden', không phải 'geworden'!",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Aktiv → Passiv",
        titleVi: "Bài tập: Chủ động → Bị động",
        instruction:
          "Wandeln Sie die folgenden Aktivsätze ins Passiv um (Präsens): 1) Die Bürger wählen den Bundestag. 2) Der Verein organisiert ein Fest. 3) Die Freiwilligen sammeln Spenden. 4) Die Regierung diskutiert das Problem. Bonusaufgabe: Schreiben Sie Satz 1 und 2 auch im Präteritum und Perfekt.",
        instructionVi:
          "Chuyển các câu chủ động sau sang bị động (thì hiện tại): 1) Die Bürger wählen den Bundestag. (Công dân bầu Quốc hội.) 2) Der Verein organisiert ein Fest. (Hội tổ chức một lễ hội.) 3) Die Freiwilligen sammeln Spenden. (Các tình nguyện viên thu thập quyên góp.) 4) Die Regierung diskutiert das Problem. (Chính phủ thảo luận vấn đề.) Bài tập thêm: Viết câu 1 và 2 ở thì quá khứ đơn (Präteritum) và thì hoàn thành (Perfekt).",
      },
    ],
  },
];
