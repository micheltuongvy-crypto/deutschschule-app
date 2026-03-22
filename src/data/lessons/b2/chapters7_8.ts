// B2 Chapters 7-8: Recht & Justiz, Architektur & Stadtplanung

import type { ContentBlock, Lesson } from "../a1/chapters1_3";

export const b2LessonsCh7_8: Lesson[] = [
  // ============================================================
  // CHAPTER 7: Recht & Justiz
  // ============================================================

  // --- Chapter 7, Lesson 1: Rechtssystem in Deutschland ---
  {
    id: "b2-ch7-l1",
    chapterId: 7,
    lessonNumber: 1,
    title: "Rechtssystem in Deutschland",
    titleVi: "Hệ thống pháp luật ở Đức",
    type: "Einführung",
    objectives: [
      "Hiểu cấu trúc hệ thống tư pháp Đức: tòa án, cấp xét xử",
      "Nắm từ vựng chuyên ngành pháp lý cơ bản ở trình độ B2",
      "Phân biệt các nhánh luật: Zivilrecht, Strafrecht, Öffentliches Recht"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Aufbau des deutschen Rechtssystems",
        titleVi: "Cấu trúc hệ thống pháp luật Đức",
        textDe: "Das deutsche Rechtssystem basiert auf dem Grundgesetz (GG), der Verfassung der Bundesrepublik Deutschland. Es gliedert sich in drei große Bereiche: das Zivilrecht (Privatrecht), das Strafrecht und das Öffentliche Recht. Die Gerichtsbarkeit ist in fünf Zweige unterteilt: ordentliche Gerichtsbarkeit, Verwaltungsgerichtsbarkeit, Finanzgerichtsbarkeit, Arbeitsgerichtsbarkeit und Sozialgerichtsbarkeit. An der Spitze steht das Bundesverfassungsgericht in Karlsruhe, das über Verfassungsbeschwerden entscheidet.",
        textVi: "Hệ thống pháp luật Đức dựa trên Grundgesetz (GG) — Hiến pháp của Cộng hòa Liên bang Đức. Nó chia thành ba lĩnh vực lớn: Zivilrecht (luật dân sự/tư pháp), Strafrecht (luật hình sự) và Öffentliches Recht (luật công). Hệ thống tòa án chia thành 5 nhánh: tòa án thường, tòa hành chính, tòa tài chính, tòa lao động và tòa xã hội. Đứng đầu là Tòa án Hiến pháp Liên bang ở Karlsruhe, nơi xử lý các khiếu nại vi hiến."
      },
      {
        type: "vocabulary",
        titleDe: "Rechtsbegriffe",
        titleVi: "Thuật ngữ pháp lý",
        words: [
          { de: "Grundgesetz", vi: "Hiến pháp (Đức)", article: "das" },
          { de: "Verfassung", vi: "hiến pháp", article: "die" },
          { de: "Zivilrecht", vi: "luật dân sự", article: "das" },
          { de: "Strafrecht", vi: "luật hình sự", article: "das" },
          { de: "Öffentliches Recht", vi: "luật công", article: "das" },
          { de: "Gerichtsbarkeit", vi: "thẩm quyền tòa án", article: "die" },
          { de: "Bundesverfassungsgericht", vi: "Tòa án Hiến pháp Liên bang", article: "das" },
          { de: "Richter", vi: "thẩm phán", article: "der" },
          { de: "Staatsanwalt", vi: "công tố viên", article: "der" },
          { de: "Rechtsanwalt", vi: "luật sư", article: "der" },
          { de: "Angeklagte", vi: "bị cáo", article: "der/die" },
          { de: "Urteil", vi: "bản án / phán quyết", article: "das" },
          { de: "Berufung", vi: "kháng cáo", article: "die" },
          { de: "Klage", vi: "đơn kiện", article: "die" },
          { de: "Zeuge", vi: "nhân chứng", article: "der" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Gespräch über eine Gerichtsverhandlung",
        titleVi: "Cuộc trò chuyện về một phiên tòa",
        lines: [
          { speaker: "Minh", de: "Ich musste letzte Woche als Zeuge vor Gericht aussagen.", vi: "Tuần trước tôi phải ra tòa làm chứng." },
          { speaker: "Katrin", de: "Wirklich? Um was für einen Fall ging es denn?", vi: "Thật sao? Đó là vụ gì vậy?" },
          { speaker: "Minh", de: "Es war ein Zivilprozess — ein Nachbarschaftsstreit wegen Lärmbelästigung.", vi: "Đó là một vụ kiện dân sự — tranh chấp hàng xóm về tiếng ồn." },
          { speaker: "Katrin", de: "Und wie lief die Verhandlung ab?", vi: "Và phiên tòa diễn ra thế nào?" },
          { speaker: "Minh", de: "Zuerst hat der Richter die Anklage verlesen, dann wurden die Zeugen befragt. Am Ende hat das Gericht ein Urteil gesprochen.", vi: "Đầu tiên thẩm phán đọc cáo trạng, sau đó nhân chứng được thẩm vấn. Cuối cùng tòa đưa ra phán quyết." },
          { speaker: "Katrin", de: "Hattest du vorher schon mal mit dem Rechtssystem zu tun?", vi: "Trước đó bạn đã từng liên quan đến hệ thống tư pháp chưa?" },
          { speaker: "Minh", de: "Nein, das war das erste Mal. In Vietnam läuft so etwas ganz anders ab.", vi: "Chưa, đó là lần đầu tiên. Ở Việt Nam những chuyện như vậy diễn ra khác hẳn." }
        ]
      },
      {
        type: "practice",
        titleDe: "Diskussion: Rechtssystem vergleichen",
        titleVi: "Thảo luận: So sánh hệ thống pháp luật",
        instruction: "Vergleichen Sie das deutsche Rechtssystem mit dem vietnamesischen. Welche Unterschiede und Gemeinsamkeiten fallen Ihnen auf? Verwenden Sie die gelernten Fachbegriffe.",
        instructionVi: "Hãy so sánh hệ thống pháp luật Đức với hệ thống pháp luật Việt Nam. Bạn nhận thấy những điểm khác biệt và tương đồng nào? Sử dụng các thuật ngữ chuyên ngành đã học."
      }
    ]
  },

  // --- Chapter 7, Lesson 2: Verträge verstehen & analysieren ---
  {
    id: "b2-ch7-l2",
    chapterId: 7,
    lessonNumber: 2,
    title: "Verträge verstehen & analysieren",
    titleVi: "Hiểu và phân tích hợp đồng",
    type: "Fertigkeit",
    objectives: [
      "Đọc hiểu các điều khoản phổ biến trong hợp đồng tiếng Đức",
      "Nắm từ vựng pháp lý liên quan đến hợp đồng",
      "Phân tích cấu trúc và nội dung của Mietvertrag, Arbeitsvertrag"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Verträge im deutschen Alltag",
        titleVi: "Hợp đồng trong đời sống hàng ngày ở Đức",
        textDe: "In Deutschland spielt das Vertragsrecht eine zentrale Rolle im Alltag. Ob Mietvertrag, Arbeitsvertrag, Kaufvertrag oder Handyvertrag — nahezu jede wichtige Vereinbarung wird schriftlich festgehalten. Ein Vertrag besteht in der Regel aus Vertragsparteien, Vertragsgegenstand, Laufzeit, Kündigungsfrist und Allgemeinen Geschäftsbedingungen (AGB). Es ist wichtig, vor der Unterschrift alle Klauseln genau zu lesen.",
        textVi: "Ở Đức, luật hợp đồng đóng vai trò trung tâm trong đời sống hàng ngày. Dù là hợp đồng thuê nhà, hợp đồng lao động, hợp đồng mua bán hay hợp đồng điện thoại — hầu như mọi thỏa thuận quan trọng đều được ghi nhận bằng văn bản. Một hợp đồng thường bao gồm: các bên hợp đồng, đối tượng hợp đồng, thời hạn, thời hạn chấm dứt và Điều kiện chung (AGB). Điều quan trọng là phải đọc kỹ tất cả các điều khoản trước khi ký."
      },
      {
        type: "vocabulary",
        titleDe: "Vertragsbegriffe",
        titleVi: "Thuật ngữ hợp đồng",
        words: [
          { de: "Vertrag", vi: "hợp đồng", article: "der" },
          { de: "Vertragspartei", vi: "bên hợp đồng", article: "die" },
          { de: "Klausel", vi: "điều khoản", article: "die" },
          { de: "Laufzeit", vi: "thời hạn hiệu lực", article: "die" },
          { de: "Kündigungsfrist", vi: "thời hạn chấm dứt hợp đồng", article: "die" },
          { de: "Allgemeine Geschäftsbedingungen (AGB)", vi: "điều kiện chung", article: "die (Pl.)" },
          { de: "Mietvertrag", vi: "hợp đồng thuê nhà", article: "der" },
          { de: "Arbeitsvertrag", vi: "hợp đồng lao động", article: "der" },
          { de: "Kaufvertrag", vi: "hợp đồng mua bán", article: "der" },
          { de: "Unterschrift", vi: "chữ ký", article: "die" },
          { de: "Widerruf", vi: "hủy bỏ / thu hồi", article: "der" },
          { de: "Vertragsbruch", vi: "vi phạm hợp đồng", article: "der" },
          { de: "Schadensersatz", vi: "bồi thường thiệt hại", article: "der" },
          { de: "Haftung", vi: "trách nhiệm pháp lý", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Beratungsgespräch zum Mietvertrag",
        titleVi: "Tư vấn về hợp đồng thuê nhà",
        lines: [
          { speaker: "Linh", de: "Ich habe einen Mietvertrag bekommen, aber ich verstehe einige Klauseln nicht.", vi: "Tôi nhận được một hợp đồng thuê nhà, nhưng tôi không hiểu một số điều khoản." },
          { speaker: "Berater", de: "Lassen Sie mich mal sehen. Zunächst: Die Laufzeit beträgt zwei Jahre — das ist ein Zeitmietvertrag.", vi: "Để tôi xem. Trước hết: Thời hạn là hai năm — đây là hợp đồng thuê có thời hạn." },
          { speaker: "Linh", de: "Und was bedeutet diese Klausel zur Schönheitsreparatur?", vi: "Và điều khoản về sửa chữa thẩm mỹ này nghĩa là gì?" },
          { speaker: "Berater", de: "Das heißt, dass Sie beim Auszug die Wohnung streichen müssen. Aber Achtung: Starre Fristen in Schönheitsreparaturklauseln sind laut Bundesgerichtshof unwirksam.", vi: "Nghĩa là khi dọn ra bạn phải sơn lại căn hộ. Nhưng lưu ý: các thời hạn cứng nhắc trong điều khoản sửa chữa thẩm mỹ đã bị Tòa án Tối cao Liên bang tuyên bố vô hiệu." },
          { speaker: "Linh", de: "Gut zu wissen! Und die Kündigungsfrist?", vi: "Tốt khi biết điều đó! Còn thời hạn chấm dứt hợp đồng?" },
          { speaker: "Berater", de: "Die gesetzliche Kündigungsfrist beträgt drei Monate. Das steht auch so im Vertrag.", vi: "Thời hạn chấm dứt hợp đồng theo luật là ba tháng. Điều này cũng ghi trong hợp đồng." }
        ]
      },
      {
        type: "practice",
        titleDe: "Vertragsanalyse",
        titleVi: "Phân tích hợp đồng",
        instruction: "Lesen Sie den folgenden Auszug aus einem Arbeitsvertrag und beantworten Sie die Fragen: Wie lange ist die Probezeit? Welche Kündigungsfrist gilt? Welche Pflichten hat der Arbeitnehmer? Formulieren Sie Ihre Antworten in vollständigen Sätzen.",
        instructionVi: "Đọc đoạn trích từ hợp đồng lao động sau và trả lời các câu hỏi: Thời gian thử việc bao lâu? Thời hạn chấm dứt hợp đồng nào áp dụng? Người lao động có những nghĩa vụ gì? Viết câu trả lời thành câu hoàn chỉnh."
      }
    ]
  },

  // --- Chapter 7, Lesson 3: Rechte & Pflichten als Ausländer ---
  {
    id: "b2-ch7-l3",
    chapterId: 7,
    lessonNumber: 3,
    title: "Rechte & Pflichten als Ausländer",
    titleVi: "Quyền và nghĩa vụ của người nước ngoài",
    type: "Fertigkeit",
    objectives: [
      "Nắm các quyền cơ bản của người nước ngoài tại Đức",
      "Hiểu nghĩa vụ pháp lý: đăng ký cư trú, bảo hiểm, thuế",
      "Thảo luận về Aufenthaltsgesetz và các loại giấy phép cư trú"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Rechte und Pflichten für Ausländer in Deutschland",
        titleVi: "Quyền và nghĩa vụ của người nước ngoài tại Đức",
        textDe: "Ausländer in Deutschland haben Rechte und Pflichten, die im Aufenthaltsgesetz (AufenthG) geregelt sind. Zu den Grundrechten gehören das Recht auf Menschenwürde, Meinungsfreiheit und Gleichbehandlung. Zu den Pflichten gehören die Anmeldung beim Einwohnermeldeamt, die Krankenversicherungspflicht und die Steuerpflicht. Der Aufenthaltstitel bestimmt, welche Arbeits- und Aufenthaltsrechte man hat. Es gibt verschiedene Arten: Visum, Aufenthaltserlaubnis, Blaue Karte EU und Niederlassungserlaubnis.",
        textVi: "Người nước ngoài tại Đức có các quyền và nghĩa vụ được quy định trong Luật Cư trú (AufenthG). Các quyền cơ bản bao gồm quyền về nhân phẩm, tự do ngôn luận và bình đẳng. Các nghĩa vụ bao gồm đăng ký tại Einwohnermeldeamt (cơ quan đăng ký cư trú), nghĩa vụ bảo hiểm y tế và nghĩa vụ thuế. Loại giấy phép cư trú quyết định quyền lao động và cư trú. Có nhiều loại: Visum (thị thực), Aufenthaltserlaubnis (giấy phép cư trú), Blaue Karte EU (Thẻ Xanh EU) và Niederlassungserlaubnis (giấy phép định cư vĩnh viễn)."
      },
      {
        type: "vocabulary",
        titleDe: "Aufenthaltsrecht & Behörden",
        titleVi: "Luật cư trú & cơ quan hành chính",
        words: [
          { de: "Aufenthaltsgesetz", vi: "Luật Cư trú", article: "das" },
          { de: "Aufenthaltstitel", vi: "giấy phép cư trú (chung)", article: "der" },
          { de: "Aufenthaltserlaubnis", vi: "giấy phép cư trú (tạm thời)", article: "die" },
          { de: "Niederlassungserlaubnis", vi: "giấy phép định cư vĩnh viễn", article: "die" },
          { de: "Blaue Karte EU", vi: "Thẻ Xanh EU", article: "die" },
          { de: "Einwohnermeldeamt", vi: "cơ quan đăng ký cư trú", article: "das" },
          { de: "Ausländerbehörde", vi: "cơ quan quản lý người nước ngoài", article: "die" },
          { de: "Krankenversicherungspflicht", vi: "nghĩa vụ bảo hiểm y tế", article: "die" },
          { de: "Steuerpflicht", vi: "nghĩa vụ thuế", article: "die" },
          { de: "Meldepflicht", vi: "nghĩa vụ đăng ký cư trú", article: "die" },
          { de: "Gleichbehandlung", vi: "đối xử bình đẳng", article: "die" },
          { de: "Menschenwürde", vi: "nhân phẩm", article: "die" },
          { de: "Abschiebung", vi: "trục xuất", article: "die" },
          { de: "Einbürgerung", vi: "nhập quốc tịch", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Bei der Ausländerbehörde",
        titleVi: "Tại cơ quan quản lý người nước ngoài",
        lines: [
          { speaker: "Sachbearbeiterin", de: "Guten Tag. Wie kann ich Ihnen helfen?", vi: "Chào anh/chị. Tôi có thể giúp gì?" },
          { speaker: "Tuan", de: "Guten Tag. Ich möchte meine Aufenthaltserlaubnis verlängern lassen.", vi: "Xin chào. Tôi muốn gia hạn giấy phép cư trú." },
          { speaker: "Sachbearbeiterin", de: "Haben Sie alle erforderlichen Unterlagen dabei? Ich brauche Ihren Reisepass, den aktuellen Aufenthaltstitel, einen Nachweis über Krankenversicherung und Ihren Arbeitsvertrag.", vi: "Anh đã mang đầy đủ giấy tờ chưa? Tôi cần hộ chiếu, giấy phép cư trú hiện tại, giấy xác nhận bảo hiểm y tế và hợp đồng lao động." },
          { speaker: "Tuan", de: "Ja, hier sind alle Dokumente. Ich arbeite seit zwei Jahren als Ingenieur mit einer Blauen Karte EU. Kann ich auch eine Niederlassungserlaubnis beantragen?", vi: "Vâng, đây là tất cả giấy tờ. Tôi đã làm kỹ sư hai năm với Thẻ Xanh EU. Tôi có thể xin giấy phép định cư vĩnh viễn không?" },
          { speaker: "Sachbearbeiterin", de: "Dafür benötigen Sie in der Regel Deutschkenntnisse auf B1-Niveau und 33 Monate Beschäftigung. Wenn Sie B2 nachweisen, reichen 21 Monate.", vi: "Để được cấp giấy đó, thông thường anh cần trình độ tiếng Đức B1 và 33 tháng làm việc. Nếu anh chứng minh được trình độ B2, chỉ cần 21 tháng." },
          { speaker: "Tuan", de: "Das ist gut zu wissen. Ich mache gerade meinen B2-Kurs.", vi: "Tốt khi biết điều đó. Tôi đang học khóa B2." }
        ]
      },
      {
        type: "practice",
        titleDe: "Rechte und Pflichten zuordnen",
        titleVi: "Phân loại quyền và nghĩa vụ",
        instruction: "Ordnen Sie die folgenden Begriffe den Kategorien 'Recht' oder 'Pflicht' zu und erklären Sie jeweils in einem Satz, was sie bedeuten: Meinungsfreiheit, Meldepflicht, Gleichbehandlung, Steuerpflicht, Recht auf Arbeit, Krankenversicherungspflicht.",
        instructionVi: "Phân loại các khái niệm sau vào nhóm 'Quyền' hoặc 'Nghĩa vụ' và giải thích mỗi khái niệm bằng một câu: Meinungsfreiheit, Meldepflicht, Gleichbehandlung, Steuerpflicht, Recht auf Arbeit, Krankenversicherungspflicht."
      }
    ]
  },

  // --- Chapter 7, Lesson 4: Verben mit Präpositionen (fortgeschritten) ---
  {
    id: "b2-ch7-l4",
    chapterId: 7,
    lessonNumber: 4,
    title: "Verben mit Präpositionen (fortgeschritten)",
    titleVi: "Động từ với giới từ (nâng cao)",
    type: "Grammatik",
    objectives: [
      "Nắm vững các động từ đi kèm giới từ ở trình độ B2",
      "Phân biệt Akkusativ và Dativ sau giới từ cố định",
      "Sử dụng Pronominaladverbien: darauf, worüber, dafür..."
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Verben mit festen Präpositionen",
        titleVi: "Động từ với giới từ cố định",
        rule: "Viele deutsche Verben verlangen eine bestimmte Präposition mit einem bestimmten Kasus (Akkusativ oder Dativ). Diese Verbindungen muss man auswendig lernen, da sie sich nicht logisch ableiten lassen. Bei Sachen verwendet man Pronominaladverbien (da(r)- + Präposition), bei Personen Präposition + Pronomen.",
        ruleVi: "Nhiều động từ tiếng Đức đòi hỏi một giới từ nhất định với một cách nhất định (Akkusativ hoặc Dativ). Những kết hợp này phải học thuộc vì không thể suy luận logic. Với sự vật, dùng Pronominaladverb (da(r)- + giới từ), với người dùng giới từ + đại từ. Ví dụ: 'Ich denke an die Prüfung' → 'Ich denke daran' (sự vật). 'Ich denke an meinen Vater' → 'Ich denke an ihn' (người).",
        examples: [
          { de: "sich bewerben um + Akk. — Er bewirbt sich um die Stelle.", vi: "nộp đơn xin — Anh ấy nộp đơn xin vị trí đó." },
          { de: "bestehen auf + Dat. — Der Anwalt besteht auf seinem Recht.", vi: "kiên quyết đòi — Luật sư kiên quyết đòi quyền của mình." },
          { de: "verfügen über + Akk. — Das Unternehmen verfügt über ausreichend Kapital.", vi: "có / sở hữu — Doanh nghiệp có đủ vốn." },
          { de: "sich einsetzen für + Akk. — Sie setzt sich für die Rechte der Migranten ein.", vi: "đấu tranh cho — Cô ấy đấu tranh cho quyền lợi của người nhập cư." },
          { de: "abhängen von + Dat. — Das hängt von der Entscheidung des Richters ab.", vi: "phụ thuộc vào — Điều đó phụ thuộc vào quyết định của thẩm phán." },
          { de: "klagen über + Akk. — Die Mieter klagen über den Lärm.", vi: "phàn nàn về — Người thuê nhà phàn nàn về tiếng ồn." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Pronominaladverbien: da(r)- und wo(r)-",
        titleVi: "Đại từ trạng từ: da(r)- và wo(r)-",
        rule: "Pronominaladverbien ersetzen 'Präposition + Sache'. Aussagesatz: da(r) + Präposition (dafür, darüber, damit). Fragesatz: wo(r) + Präposition (wofür, worüber, womit). Das 'r' wird eingefügt, wenn die Präposition mit einem Vokal beginnt (auf → darauf, worauf).",
        ruleVi: "Pronominaladverb thay thế 'giới từ + sự vật'. Câu trần thuật: da(r) + giới từ (dafür, darüber, damit). Câu hỏi: wo(r) + giới từ (wofür, worüber, womit). Chữ 'r' được thêm vào khi giới từ bắt đầu bằng nguyên âm (auf → darauf, worauf). Lưu ý cho người Việt: Tiếng Việt không có cấu trúc tương đương — hãy hiểu đây là cách 'rút gọn' thay vì lặp lại cả cụm giới từ.",
        examples: [
          { de: "Worauf wartest du? — Ich warte darauf, dass der Anwalt anruft.", vi: "Bạn đang chờ gì? — Tôi đang chờ luật sư gọi điện." },
          { de: "Wovon hängt das Urteil ab? — Es hängt davon ab, welche Beweise vorliegen.", vi: "Phán quyết phụ thuộc vào gì? — Nó phụ thuộc vào bằng chứng nào được đưa ra." },
          { de: "Worum geht es in dem Vertrag? — Es geht darum, die Rechte beider Parteien zu schützen.", vi: "Hợp đồng nói về gì? — Nó nhằm bảo vệ quyền lợi của cả hai bên." },
          { de: "Worüber beschwert sich der Kläger? — Er beschwert sich darüber, dass sein Nachbar zu laut ist.", vi: "Nguyên đơn phàn nàn về gì? — Anh ấy phàn nàn rằng hàng xóm quá ồn." }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Wichtige Verb-Präposition-Kombinationen (B2)",
        titleVi: "Các kết hợp động từ-giới từ quan trọng (B2)",
        words: [
          { de: "ankommen auf + Akk.", vi: "quan trọng là / tùy thuộc vào" },
          { de: "sich auseinandersetzen mit + Dat.", vi: "đối mặt / nghiên cứu kỹ" },
          { de: "beruhen auf + Dat.", vi: "dựa trên" },
          { de: "sich bemühen um + Akk.", vi: "cố gắng đạt được" },
          { de: "beitragen zu + Dat.", vi: "góp phần vào" },
          { de: "hinweisen auf + Akk.", vi: "chỉ ra / lưu ý đến" },
          { de: "sich verlassen auf + Akk.", vi: "tin tưởng vào" },
          { de: "verstoßen gegen + Akk.", vi: "vi phạm" },
          { de: "sich wehren gegen + Akk.", vi: "chống lại / phản đối" },
          { de: "sich richten nach + Dat.", vi: "tuân theo / hướng theo" }
        ]
      },
      {
        type: "practice",
        titleDe: "Verben mit Präpositionen im Kontext",
        titleVi: "Động từ với giới từ trong ngữ cảnh",
        instruction: "Ergänzen Sie die Sätze mit der richtigen Präposition und dem passenden Pronominaladverb: 1) Der Richter besteht ___ einer genauen Prüfung. 2) ___ kommt es bei einem guten Vertrag an? 3) Die Anwältin setzt sich ___ ein, dass ihr Mandant freigesprochen wird. 4) Das Urteil beruht ___, dass der Zeuge glaubwürdig ausgesagt hat.",
        instructionVi: "Điền giới từ đúng và Pronominaladverb phù hợp: 1) Der Richter besteht ___ einer genauen Prüfung. 2) ___ kommt es bei einem guten Vertrag an? 3) Die Anwältin setzt sich ___ ein, dass ihr Mandant freigesprochen wird. 4) Das Urteil beruht ___, dass der Zeuge glaubwürdig ausgesagt hat."
      }
    ]
  },

  // ============================================================
  // CHAPTER 8: Architektur & Stadtplanung
  // ============================================================

  // --- Chapter 8, Lesson 1: Berühmte deutsche Architektur ---
  {
    id: "b2-ch8-l1",
    chapterId: 8,
    lessonNumber: 1,
    title: "Berühmte deutsche Architektur",
    titleVi: "Kiến trúc nổi tiếng của Đức",
    type: "Einführung",
    objectives: [
      "Tìm hiểu các công trình kiến trúc nổi tiếng của Đức",
      "Nắm từ vựng về phong cách kiến trúc và lịch sử xây dựng",
      "Mô tả công trình kiến trúc bằng tiếng Đức ở trình độ B2"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Deutsche Architektur im Wandel der Zeit",
        titleVi: "Kiến trúc Đức qua các thời kỳ",
        textDe: "Deutschland besitzt ein reiches architektonisches Erbe, das von der Romanik über die Gotik und den Barock bis zur modernen Architektur reicht. Der Kölner Dom ist ein Meisterwerk der Gotik, das Schloss Neuschwanstein verkörpert die Romantik des 19. Jahrhunderts, und das Bauhaus in Dessau revolutionierte die moderne Architektur. Nach dem Zweiten Weltkrieg mussten viele Städte wiederaufgebaut werden. Heute prägen Architekten wie Daniel Libeskind (Jüdisches Museum Berlin) und das Büro Herzog & de Meuron (Elbphilharmonie Hamburg) das Bild deutscher Architektur.",
        textVi: "Đức sở hữu di sản kiến trúc phong phú, trải dài từ phong cách Roman, Gothic, Baroque cho đến kiến trúc hiện đại. Nhà thờ Cologne (Kölner Dom) là kiệt tác Gothic, Lâu đài Neuschwanstein thể hiện chủ nghĩa Lãng mạn thế kỷ 19, và trường Bauhaus ở Dessau đã cách mạng hóa kiến trúc hiện đại. Sau Thế chiến II, nhiều thành phố phải xây dựng lại. Ngày nay, các kiến trúc sư như Daniel Libeskind (Bảo tàng Do Thái Berlin) và văn phòng Herzog & de Meuron (Elbphilharmonie Hamburg) định hình diện mạo kiến trúc Đức."
      },
      {
        type: "vocabulary",
        titleDe: "Architektur & Baustile",
        titleVi: "Kiến trúc & phong cách xây dựng",
        words: [
          { de: "Architektur", vi: "kiến trúc", article: "die" },
          { de: "Bauwerk", vi: "công trình kiến trúc", article: "das" },
          { de: "Baustil", vi: "phong cách kiến trúc", article: "der" },
          { de: "Gotik", vi: "phong cách Gothic", article: "die" },
          { de: "Romanik", vi: "phong cách Roman", article: "die" },
          { de: "Barock", vi: "phong cách Baroque", article: "der/das" },
          { de: "Jugendstil", vi: "phong cách Art Nouveau", article: "der" },
          { de: "Bauhaus", vi: "trường phái Bauhaus", article: "das" },
          { de: "Fassade", vi: "mặt tiền (tòa nhà)", article: "die" },
          { de: "Gewölbe", vi: "vòm", article: "das" },
          { de: "Säule", vi: "cột", article: "die" },
          { de: "Denkmalschutz", vi: "bảo vệ di tích", article: "der" },
          { de: "Wiederaufbau", vi: "tái thiết", article: "der" },
          { de: "Entwurf", vi: "bản thiết kế", article: "der" },
          { de: "Wahrzeichen", vi: "biểu tượng (của thành phố)", article: "das" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Stadtführung in Berlin",
        titleVi: "Tham quan thành phố Berlin",
        lines: [
          { speaker: "Stadtführer", de: "Wir stehen hier vor dem Reichstagsgebäude. Es wurde 1894 fertiggestellt und nach der Wiedervereinigung von Norman Foster mit einer modernen Glaskuppel versehen.", vi: "Chúng ta đang đứng trước tòa nhà Reichstag. Nó được hoàn thành năm 1894 và sau thống nhất được Norman Foster lắp thêm mái vòm kính hiện đại." },
          { speaker: "Hoa", de: "Die Verbindung von alter und neuer Architektur ist beeindruckend. Gibt es in Deutschland viele solche Beispiele?", vi: "Sự kết hợp giữa kiến trúc cũ và mới rất ấn tượng. Ở Đức có nhiều ví dụ như vậy không?" },
          { speaker: "Stadtführer", de: "Ja, sehr viele. Nach dem Krieg gab es eine große Debatte: originalgetreu wiederaufbauen oder modern gestalten? In Dresden hat man die Frauenkirche originalgetreu rekonstruiert, während Berlin eher auf moderne Architektur setzt.", vi: "Có, rất nhiều. Sau chiến tranh có cuộc tranh luận lớn: xây lại nguyên bản hay thiết kế hiện đại? Ở Dresden, người ta đã phục dựng nguyên bản nhà thờ Frauenkirche, trong khi Berlin thiên về kiến trúc hiện đại." },
          { speaker: "Hoa", de: "Das erinnert mich an Saigon — dort werden auch viele koloniale Gebäude durch Hochhäuser ersetzt.", vi: "Điều đó làm tôi nhớ đến Sài Gòn — ở đó nhiều tòa nhà thuộc địa cũng bị thay thế bằng nhà cao tầng." },
          { speaker: "Stadtführer", de: "Ein interessanter Vergleich! Der Denkmalschutz spielt in Deutschland eine sehr wichtige Rolle.", vi: "So sánh thú vị! Bảo vệ di tích đóng vai trò rất quan trọng ở Đức." }
        ]
      },
      {
        type: "practice",
        titleDe: "Ein Bauwerk beschreiben",
        titleVi: "Mô tả một công trình kiến trúc",
        instruction: "Wählen Sie ein berühmtes Bauwerk (aus Deutschland oder Vietnam) und beschreiben Sie es in einem kurzen Text (80–100 Wörter). Gehen Sie auf folgende Punkte ein: Baustil, Baujahr, Besonderheiten, Bedeutung.",
        instructionVi: "Chọn một công trình nổi tiếng (ở Đức hoặc Việt Nam) và mô tả bằng một đoạn văn ngắn (80–100 từ). Đề cập đến: phong cách kiến trúc, năm xây dựng, đặc điểm nổi bật, ý nghĩa."
      }
    ]
  },

  // --- Chapter 8, Lesson 2: Stadtentwicklung & Urbanisierung ---
  {
    id: "b2-ch8-l2",
    chapterId: 8,
    lessonNumber: 2,
    title: "Stadtentwicklung & Urbanisierung",
    titleVi: "Phát triển đô thị & đô thị hóa",
    type: "Fertigkeit",
    objectives: [
      "Thảo luận về xu hướng đô thị hóa ở Đức và toàn cầu",
      "Nắm từ vựng về quy hoạch đô thị và hạ tầng",
      "So sánh quá trình đô thị hóa ở Đức và Việt Nam"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Urbanisierung und Stadtentwicklung in Deutschland",
        titleVi: "Đô thị hóa và phát triển đô thị ở Đức",
        textDe: "Deutschland ist ein stark urbanisiertes Land — etwa 77 Prozent der Bevölkerung lebt in Städten. Die Stadtentwicklung wird durch Bebauungspläne und Flächennutzungspläne gesteuert. Aktuelle Herausforderungen sind der Wohnungsmangel in Großstädten, die Gentrifizierung, der Ausbau des öffentlichen Nahverkehrs und die Schaffung von Grünflächen. Gleichzeitig gibt es in ländlichen Regionen das Problem der Landflucht. Viele Kommunen versuchen, die Lebensqualität durch eine Mischung aus Wohnen, Arbeit und Freizeit in den Stadtvierteln zu verbessern.",
        textVi: "Đức là một quốc gia đô thị hóa cao — khoảng 77% dân số sống ở thành phố. Phát triển đô thị được điều tiết bởi Bebauungsplan (quy hoạch xây dựng) và Flächennutzungsplan (quy hoạch sử dụng đất). Các thách thức hiện tại gồm: thiếu nhà ở tại các thành phố lớn, hiện tượng gentrifizierung (quý tộc hóa khu phố), mở rộng giao thông công cộng nội thành và tạo không gian xanh. Đồng thời, các vùng nông thôn đối mặt với hiện tượng Landflucht (di cư khỏi nông thôn). Nhiều địa phương cố gắng cải thiện chất lượng sống bằng cách kết hợp nhà ở, nơi làm việc và giải trí trong các khu phố."
      },
      {
        type: "vocabulary",
        titleDe: "Stadtplanung & Infrastruktur",
        titleVi: "Quy hoạch đô thị & hạ tầng",
        words: [
          { de: "Stadtentwicklung", vi: "phát triển đô thị", article: "die" },
          { de: "Urbanisierung", vi: "đô thị hóa", article: "die" },
          { de: "Bebauungsplan", vi: "quy hoạch xây dựng", article: "der" },
          { de: "Flächennutzungsplan", vi: "quy hoạch sử dụng đất", article: "der" },
          { de: "Gentrifizierung", vi: "quý tộc hóa khu phố", article: "die" },
          { de: "Wohnungsmangel", vi: "thiếu nhà ở", article: "der" },
          { de: "Landflucht", vi: "di cư khỏi nông thôn", article: "die" },
          { de: "Nahverkehr", vi: "giao thông nội thành", article: "der" },
          { de: "Grünfläche", vi: "không gian xanh", article: "die" },
          { de: "Stadtviertel", vi: "khu phố", article: "das" },
          { de: "Infrastruktur", vi: "hạ tầng", article: "die" },
          { de: "Ballungsraum", vi: "vùng đô thị tập trung", article: "der" },
          { de: "Verdichtung", vi: "nén đô thị", article: "die" },
          { de: "Lebensqualität", vi: "chất lượng sống", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Diskussion über Stadtentwicklung",
        titleVi: "Thảo luận về phát triển đô thị",
        lines: [
          { speaker: "Professor", de: "Welche Herausforderungen sehen Sie bei der Urbanisierung in Ihren Heimatländern?", vi: "Bạn thấy những thách thức nào trong quá trình đô thị hóa ở quê hương mình?" },
          { speaker: "Nga", de: "In Vietnam, besonders in Ho-Chi-Minh-Stadt, wächst die Bevölkerung rasant. Die Infrastruktur kann kaum Schritt halten — Staus und Überschwemmungen sind alltäglich.", vi: "Ở Việt Nam, đặc biệt TP. Hồ Chí Minh, dân số tăng nhanh chóng. Hạ tầng hầu như không theo kịp — kẹt xe và ngập lụt là chuyện hàng ngày." },
          { speaker: "Professor", de: "Das kennen wir in Deutschland auch, allerdings mit anderen Schwerpunkten. Hier geht es eher um bezahlbaren Wohnraum und die Gentrifizierung.", vi: "Ở Đức cũng có vấn đề tương tự, nhưng với trọng tâm khác. Ở đây vấn đề chính là nhà ở giá phải chăng và hiện tượng gentrifizierung." },
          { speaker: "Nga", de: "Was genau versteht man unter Gentrifizierung?", vi: "Gentrifizierung chính xác nghĩa là gì?" },
          { speaker: "Professor", de: "Das bedeutet, dass ein Stadtviertel durch Sanierung und Zuzug wohlhabenderer Bewohner aufgewertet wird, sodass die ursprünglichen Mieter sich die steigenden Mieten nicht mehr leisten können.", vi: "Nghĩa là một khu phố được nâng cấp qua việc cải tạo và người dân giàu có hơn chuyển đến, khiến người thuê nhà ban đầu không còn đủ khả năng chi trả tiền thuê tăng cao." },
          { speaker: "Nga", de: "Das passiert in Saigon auch — alte Viertel werden abgerissen und durch Luxuswohnungen ersetzt.", vi: "Điều đó cũng xảy ra ở Sài Gòn — các khu phố cũ bị phá hủy và thay thế bằng căn hộ cao cấp." }
        ]
      },
      {
        type: "practice",
        titleDe: "Vergleich: Urbanisierung in Deutschland und Vietnam",
        titleVi: "So sánh: Đô thị hóa ở Đức và Việt Nam",
        instruction: "Schreiben Sie einen Vergleich (100–120 Wörter) über die Urbanisierung in Deutschland und Vietnam. Gehen Sie auf Gemeinsamkeiten und Unterschiede ein. Verwenden Sie Vergleichsstrukturen wie: 'Während in Deutschland ..., ist in Vietnam ...', 'Sowohl ... als auch ...', 'Im Gegensatz zu ...'.",
        instructionVi: "Viết một đoạn so sánh (100–120 từ) về đô thị hóa ở Đức và Việt Nam. Đề cập đến điểm tương đồng và khác biệt. Sử dụng các cấu trúc so sánh như: 'Während in Deutschland ..., ist in Vietnam ...', 'Sowohl ... als auch ...', 'Im Gegensatz zu ...'."
      }
    ]
  },

  // --- Chapter 8, Lesson 3: Nachhaltig bauen & wohnen ---
  {
    id: "b2-ch8-l3",
    chapterId: 8,
    lessonNumber: 3,
    title: "Nachhaltig bauen & wohnen",
    titleVi: "Xây dựng & cư trú bền vững",
    type: "Fertigkeit",
    objectives: [
      "Nắm từ vựng về xây dựng bền vững và tiết kiệm năng lượng",
      "Thảo luận về xu hướng Passivhaus và Energiewende",
      "Trình bày ý kiến về nhà ở bền vững bằng tiếng Đức"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Nachhaltiges Bauen in Deutschland",
        titleVi: "Xây dựng bền vững tại Đức",
        textDe: "Deutschland ist Vorreiter beim nachhaltigen Bauen. Das Passivhaus-Konzept wurde hier entwickelt und weltweit exportiert. Ein Passivhaus verbraucht bis zu 90 Prozent weniger Heizenergie als ein konventionelles Gebäude. Die Energieeinsparverordnung (EnEV) — heute Gebäudeenergiegesetz (GEG) — legt strenge Standards für den Energieverbrauch von Neubauten fest. Nachhaltige Materialien wie Holz, Recyclingbeton und Dämmung aus nachwachsenden Rohstoffen gewinnen an Bedeutung. Auch begrünte Dächer und Solaranlagen werden immer häufiger eingesetzt.",
        textVi: "Đức là quốc gia tiên phong trong xây dựng bền vững. Khái niệm Passivhaus (nhà thụ động) được phát triển ở đây và xuất khẩu ra toàn thế giới. Một Passivhaus tiêu thụ ít hơn đến 90% năng lượng sưởi so với nhà thông thường. Gebäudeenergiegesetz (GEG — Luật Năng lượng Tòa nhà) đặt ra tiêu chuẩn nghiêm ngặt về tiêu thụ năng lượng cho công trình mới. Vật liệu bền vững như gỗ, bê tông tái chế và cách nhiệt từ nguyên liệu tái tạo ngày càng quan trọng. Mái xanh và hệ thống năng lượng mặt trời cũng được sử dụng ngày càng phổ biến."
      },
      {
        type: "vocabulary",
        titleDe: "Nachhaltiges Bauen & Wohnen",
        titleVi: "Xây dựng & cư trú bền vững",
        words: [
          { de: "Nachhaltigkeit", vi: "tính bền vững", article: "die" },
          { de: "Passivhaus", vi: "nhà thụ động (tiết kiệm năng lượng)", article: "das" },
          { de: "Energieverbrauch", vi: "tiêu thụ năng lượng", article: "der" },
          { de: "Gebäudeenergiegesetz (GEG)", vi: "Luật Năng lượng Tòa nhà", article: "das" },
          { de: "Dämmung", vi: "cách nhiệt", article: "die" },
          { de: "Solaranlage", vi: "hệ thống năng lượng mặt trời", article: "die" },
          { de: "Photovoltaik", vi: "quang điện", article: "die" },
          { de: "Wärmepumpe", vi: "máy bơm nhiệt", article: "die" },
          { de: "Gründach", vi: "mái xanh", article: "das" },
          { de: "Recyclingbeton", vi: "bê tông tái chế", article: "der" },
          { de: "CO₂-Ausstoß", vi: "lượng phát thải CO₂", article: "der" },
          { de: "Ressourcenschonung", vi: "bảo tồn tài nguyên", article: "die" },
          { de: "Energiewende", vi: "chuyển đổi năng lượng", article: "die" },
          { de: "Sanierung", vi: "cải tạo (công trình)", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Gespräch über nachhaltiges Wohnen",
        titleVi: "Cuộc trò chuyện về cư trú bền vững",
        lines: [
          { speaker: "Duc", de: "Ich habe gehört, dass in Deutschland immer mehr Passivhäuser gebaut werden. Was genau ist das?", vi: "Tôi nghe nói ở Đức ngày càng nhiều Passivhaus được xây. Chính xác đó là gì?" },
          { speaker: "Anna", de: "Ein Passivhaus ist so gut gedämmt, dass es fast keine Heizung braucht. Die Wärme kommt von Sonneneinstrahlung, Geräten und den Bewohnern selbst.", vi: "Passivhaus được cách nhiệt tốt đến mức gần như không cần hệ thống sưởi. Nhiệt đến từ ánh nắng, thiết bị và chính cư dân." },
          { speaker: "Duc", de: "Das klingt interessant, aber sind solche Häuser nicht viel teurer?", vi: "Nghe hay đấy, nhưng những ngôi nhà như vậy không đắt hơn nhiều sao?" },
          { speaker: "Anna", de: "Die Baukosten sind etwa 10 bis 15 Prozent höher, aber die Energiekosten sind so niedrig, dass sich die Investition nach einigen Jahren amortisiert.", vi: "Chi phí xây dựng cao hơn khoảng 10–15%, nhưng chi phí năng lượng thấp đến mức khoản đầu tư được hoàn lại sau vài năm." },
          { speaker: "Duc", de: "In Vietnam ist das Thema nachhaltiges Bauen noch relativ neu. Die meisten Häuser werden ohne Dämmung gebaut, weil es so heiß ist.", vi: "Ở Việt Nam, chủ đề xây dựng bền vững còn khá mới. Phần lớn nhà được xây không có cách nhiệt vì trời quá nóng." },
          { speaker: "Anna", de: "Aber auch in heißen Regionen kann Dämmung helfen — sie hält nicht nur Wärme drinnen, sondern auch Hitze draußen. Und Solaranlagen funktionieren in Vietnam bestimmt noch besser als hier!", vi: "Nhưng ở vùng nóng cách nhiệt cũng có ích — nó không chỉ giữ ấm bên trong mà còn ngăn nóng bên ngoài. Và hệ thống năng lượng mặt trời ở Việt Nam chắc chắn hoạt động tốt hơn ở đây!" }
        ]
      },
      {
        type: "practice",
        titleDe: "Stellungnahme: Nachhaltiges Wohnen",
        titleVi: "Trình bày quan điểm: Cư trú bền vững",
        instruction: "Nehmen Sie Stellung zu der Aussage: 'Nachhaltiges Bauen sollte in allen Ländern gesetzlich vorgeschrieben werden.' Schreiben Sie einen strukturierten Text (Einleitung – Argumente dafür – Argumente dagegen – eigene Meinung) mit 120–150 Wörtern.",
        instructionVi: "Trình bày quan điểm về phát biểu: 'Xây dựng bền vững nên được quy định bắt buộc bằng luật ở tất cả các nước.' Viết đoạn văn có cấu trúc (Mở bài – Lý lẽ ủng hộ – Lý lẽ phản đối – Ý kiến cá nhân) khoảng 120–150 từ."
      }
    ]
  },

  // --- Chapter 8, Lesson 4: Indirekte Rede (Konjunktiv I erweitert) ---
  {
    id: "b2-ch8-l4",
    chapterId: 8,
    lessonNumber: 4,
    title: "Indirekte Rede (Konjunktiv I erweitert)",
    titleVi: "Câu gián tiếp (Konjunktiv I nâng cao)",
    type: "Grammatik",
    objectives: [
      "Nắm vững cách chia Konjunktiv I cho tất cả các ngôi",
      "Phân biệt khi nào dùng Konjunktiv I và khi nào thay bằng Konjunktiv II",
      "Áp dụng câu gián tiếp trong văn viết trang trọng và báo chí"
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Konjunktiv I — Bildung und Verwendung",
        titleVi: "Konjunktiv I — Cách chia và cách dùng",
        rule: "Der Konjunktiv I wird hauptsächlich in der indirekten Rede verwendet, besonders in formellen Texten und in der Presse. Bildung: Stamm des Infinitivs + Endungen: -e, -est, -e, -en, -et, -en. Wenn die Form des Konjunktiv I mit dem Indikativ identisch ist (z.B. 'sie haben' = Konjunktiv I und Indikativ), verwendet man stattdessen den Konjunktiv II (z.B. 'sie hätten'). Besonders wichtig: 'sein' → er/sie sei (einzige häufig erkennbare Form in der 3. Person Singular).",
        ruleVi: "Konjunktiv I chủ yếu dùng trong câu gián tiếp, đặc biệt trong văn bản trang trọng và báo chí. Cách chia: Gốc động từ nguyên thể + đuôi: -e, -est, -e, -en, -et, -en. Khi dạng Konjunktiv I trùng với Indikativ (ví dụ: 'sie haben' = giống nhau), thì dùng Konjunktiv II thay thế ('sie hätten'). Đặc biệt quan trọng: 'sein' → er/sie sei (dạng duy nhất thường nhận ra được ở ngôi thứ 3 số ít). Lưu ý cho người Việt: Tiếng Việt không có Konjunktiv — đây là cách tiếng Đức 'đánh dấu' rằng người nói đang thuật lại lời người khác, không phải khẳng định sự thật.",
        examples: [
          { de: "Direkt: 'Ich bin zufrieden.' → Indirekt: Er sagte, er sei zufrieden.", vi: "Trực tiếp: 'Tôi hài lòng.' → Gián tiếp: Anh ấy nói rằng anh ấy hài lòng." },
          { de: "Direkt: 'Wir haben genug Zeit.' → Indirekt: Sie sagten, sie hätten genug Zeit. (Konj. II, weil Konj. I = Indikativ)", vi: "Trực tiếp: 'Chúng tôi có đủ thời gian.' → Gián tiếp: Họ nói rằng họ có đủ thời gian. (Dùng Konj. II vì Konj. I trùng với Indikativ)" },
          { de: "Direkt: 'Das Gebäude wird nächstes Jahr fertig.' → Indirekt: Der Architekt sagte, das Gebäude werde nächstes Jahr fertig.", vi: "Trực tiếp: 'Tòa nhà sẽ hoàn thành năm tới.' → Gián tiếp: Kiến trúc sư nói rằng tòa nhà sẽ hoàn thành năm tới." },
          { de: "Direkt: 'Ich habe den Plan geändert.' → Indirekt: Sie erklärte, sie habe den Plan geändert.", vi: "Trực tiếp: 'Tôi đã thay đổi kế hoạch.' → Gián tiếp: Cô ấy giải thích rằng cô ấy đã thay đổi kế hoạch." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Konjunktiv I in der Vergangenheit",
        titleVi: "Konjunktiv I ở thì quá khứ",
        rule: "Für die Vergangenheit verwendet man im Konjunktiv I das Perfekt: 'haben/sein' im Konjunktiv I + Partizip II. Beispiel: Er sagte, er habe das Haus gebaut. / Sie berichtete, sie sei nach Berlin gefahren. In der Zukunft: 'werden' im Konjunktiv I (werde) + Infinitiv.",
        ruleVi: "Cho thì quá khứ, Konjunktiv I dùng dạng Perfekt: 'haben/sein' ở Konjunktiv I + Partizip II. Ví dụ: Er sagte, er habe das Haus gebaut. (Anh ấy nói rằng anh ấy đã xây ngôi nhà.) Cho tương lai: 'werden' ở Konjunktiv I (werde) + nguyên thể. Quy tắc chung: Nếu Konjunktiv I trùng Indikativ → dùng Konjunktiv II thay thế.",
        examples: [
          { de: "Er sagte, er habe das Projekt bereits abgeschlossen.", vi: "Anh ấy nói rằng anh ấy đã hoàn thành dự án." },
          { de: "Die Zeitung berichtete, der Bürgermeister sei zurückgetreten.", vi: "Báo đưa tin rằng thị trưởng đã từ chức." },
          { de: "Der Minister erklärte, die Regierung werde mehr in nachhaltige Architektur investieren.", vi: "Bộ trưởng tuyên bố rằng chính phủ sẽ đầu tư nhiều hơn vào kiến trúc bền vững." },
          { de: "Die Bewohner behaupteten, sie hätten nie eine Baugenehmigung erhalten. (Konj. II als Ersatz)", vi: "Cư dân khẳng định rằng họ chưa bao giờ nhận được giấy phép xây dựng. (Dùng Konj. II thay thế)" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Verben der Redewiedergabe",
        titleVi: "Động từ tường thuật",
        words: [
          { de: "behaupten", vi: "khẳng định / tuyên bố" },
          { de: "berichten", vi: "báo cáo / đưa tin" },
          { de: "erklären", vi: "giải thích / tuyên bố" },
          { de: "betonen", vi: "nhấn mạnh" },
          { de: "hinzufügen", vi: "bổ sung thêm" },
          { de: "zugeben", vi: "thừa nhận" },
          { de: "bestreiten", vi: "phủ nhận" },
          { de: "versichern", vi: "cam đoan / đảm bảo" },
          { de: "anmerken", vi: "lưu ý / nhận xét" },
          { de: "darauf hinweisen", vi: "chỉ ra / lưu ý rằng" }
        ]
      },
      {
        type: "practice",
        titleDe: "Zeitungsartikel in indirekte Rede umwandeln",
        titleVi: "Chuyển bài báo sang câu gián tiếp",
        instruction: "Wandeln Sie die folgenden direkten Zitate in indirekte Rede um. Verwenden Sie Konjunktiv I (oder Konjunktiv II als Ersatzform): 1) Der Architekt: 'Das neue Museum wird 2027 eröffnet.' 2) Die Bürgermeisterin: 'Wir haben 50 Millionen Euro in den Wohnungsbau investiert.' 3) Die Bewohner: 'Wir sind mit der Stadtplanung nicht einverstanden.' 4) Der Stadtplaner: 'Die Stadt braucht mehr Grünflächen und weniger Parkplätze.'",
        instructionVi: "Chuyển các câu trích dẫn trực tiếp sau sang câu gián tiếp. Dùng Konjunktiv I (hoặc Konjunktiv II thay thế): 1) Kiến trúc sư: 'Bảo tàng mới sẽ khai trương năm 2027.' 2) Nữ thị trưởng: 'Chúng tôi đã đầu tư 50 triệu Euro vào xây dựng nhà ở.' 3) Cư dân: 'Chúng tôi không đồng ý với quy hoạch đô thị.' 4) Nhà quy hoạch: 'Thành phố cần nhiều không gian xanh hơn và ít bãi đỗ xe hơn.'"
      }
    ]
  }
];
