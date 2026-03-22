// B1 German Lessons — Chapter 1: Arbeitswelt & Karriere
// Complete lesson content for Vietnamese learners

import type { Lesson, ContentBlock } from "../a1/chapters1_3";

export const b1LessonsCh1: Lesson[] = [
  // =====================================================================
  // CHAPTER 1: Arbeitswelt & Karriere
  // =====================================================================

  // --- Chapter 1, Lesson 1 ---
  {
    id: "b1-ch1-l1",
    chapterId: 1,
    lessonNumber: 1,
    title: "Berufserfahrung beschreiben",
    titleVi: "Mô tả kinh nghiệm nghề nghiệp",
    type: "Einführung",
    objectives: [
      "Mô tả kinh nghiệm làm việc trước đây bằng tiếng Đức",
      "Sử dụng từ vựng liên quan đến CV (Lebenslauf) và hồ sơ xin việc",
      "Nói về các vị trí công việc, nhiệm vụ và thành tích",
      "Sử dụng thì quá khứ (Perfekt/Präteritum) để kể về công việc cũ",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Der Lebenslauf — Berufserfahrung auf Deutsch",
        titleVi: "Sơ yếu lý lịch — Kinh nghiệm nghề nghiệp bằng tiếng Đức",
        textDe:
          "In Deutschland ist der Lebenslauf (CV) ein wichtiges Dokument bei der Jobsuche. Er enthält persönliche Daten, Berufserfahrung, Ausbildung und besondere Kenntnisse. Wenn man über seine Berufserfahrung spricht, verwendet man häufig das Perfekt oder das Präteritum. Man beschreibt seine Aufgaben, Verantwortlichkeiten und Erfolge. Ein tabellarischer Lebenslauf ist in Deutschland Standard — er ist klar strukturiert und chronologisch aufgebaut.",
        textVi:
          "Ở Đức, Lebenslauf (CV/sơ yếu lý lịch) là tài liệu quan trọng khi tìm việc. Nó bao gồm thông tin cá nhân, kinh nghiệm nghề nghiệp, trình độ học vấn và các kỹ năng đặc biệt. Khi nói về kinh nghiệm làm việc, người ta thường dùng thì Perfekt hoặc Präteritum. Người ta mô tả các nhiệm vụ, trách nhiệm và thành tích của mình. CV dạng bảng (tabellarischer Lebenslauf) là tiêu chuẩn ở Đức — nó được cấu trúc rõ ràng và sắp xếp theo thứ tự thời gian.",
      },
      {
        type: "vocabulary",
        titleDe: "Rund um den Lebenslauf",
        titleVi: "Từ vựng liên quan đến CV",
        words: [
          { de: "der Lebenslauf", vi: "sơ yếu lý lịch / CV", article: "der" },
          { de: "die Berufserfahrung", vi: "kinh nghiệm nghề nghiệp", article: "die" },
          { de: "die Ausbildung", vi: "đào tạo / học vấn", article: "die" },
          { de: "das Studium", vi: "việc học đại học", article: "das" },
          { de: "der Abschluss", vi: "bằng tốt nghiệp", article: "der" },
          { de: "die Kenntnisse (Pl.)", vi: "kiến thức / kỹ năng" },
          { de: "die Fähigkeit", vi: "khả năng / năng lực", article: "die" },
          { de: "die Stelle", vi: "vị trí công việc", article: "die" },
          { de: "die Bewerbung", vi: "đơn xin việc", article: "die" },
          { de: "das Bewerbungsschreiben", vi: "thư xin việc", article: "das" },
          { de: "das Zeugnis", vi: "giấy chứng nhận / bảng điểm", article: "das" },
          { de: "die Referenz", vi: "người tham chiếu / thư giới thiệu", article: "die" },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Berufe und Positionen",
        titleVi: "Nghề nghiệp và vị trí",
        words: [
          { de: "der/die Angestellte", vi: "nhân viên" },
          { de: "der/die Vorgesetzte", vi: "cấp trên / sếp" },
          { de: "der Abteilungsleiter", vi: "trưởng phòng", article: "der" },
          { de: "der Geschäftsführer", vi: "giám đốc điều hành", article: "der" },
          { de: "der/die Kollege/Kollegin", vi: "đồng nghiệp" },
          { de: "der Praktikant", vi: "thực tập sinh", article: "der" },
          { de: "die Abteilung", vi: "phòng ban", article: "die" },
          { de: "das Unternehmen", vi: "doanh nghiệp / công ty", article: "das" },
          { de: "die Firma", vi: "công ty / hãng", article: "die" },
          { de: "die Branche", vi: "ngành nghề", article: "die" },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Aufgaben und Tätigkeiten",
        titleVi: "Nhiệm vụ và hoạt động công việc",
        words: [
          { de: "verantwortlich sein für", vi: "chịu trách nhiệm về" },
          { de: "zuständig sein für", vi: "phụ trách về" },
          { de: "betreuen", vi: "chăm sóc / quản lý" },
          { de: "leiten", vi: "dẫn dắt / quản lý" },
          { de: "organisieren", vi: "tổ chức" },
          { de: "koordinieren", vi: "phối hợp" },
          { de: "entwickeln", vi: "phát triển" },
          { de: "unterstützen", vi: "hỗ trợ" },
          { de: "zusammenarbeiten mit", vi: "hợp tác với" },
          { de: "sich bewerben um", vi: "ứng tuyển vào" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Im Gespräch: Berufserfahrung erzählen",
        titleVi: "Trò chuyện: Kể về kinh nghiệm nghề nghiệp",
        lines: [
          {
            speaker: "Linh",
            de: "Ich habe drei Jahre als Projektmanagerin bei einer IT-Firma in Hanoi gearbeitet.",
            vi: "Tôi đã làm quản lý dự án ba năm tại một công ty IT ở Hà Nội.",
          },
          {
            speaker: "Thomas",
            de: "Oh, interessant! Was waren Ihre Aufgaben dort?",
            vi: "Ồ, thú vị quá! Nhiệm vụ của chị ở đó là gì?",
          },
          {
            speaker: "Linh",
            de: "Ich war verantwortlich für die Koordination von Software-Projekten. Ich habe ein Team von zehn Entwicklern geleitet.",
            vi: "Tôi chịu trách nhiệm điều phối các dự án phần mềm. Tôi đã quản lý một đội gồm mười lập trình viên.",
          },
          {
            speaker: "Thomas",
            de: "Das klingt nach einer verantwortungsvollen Position. Warum haben Sie sich entschieden, nach Deutschland zu kommen?",
            vi: "Nghe có vẻ là một vị trí có nhiều trách nhiệm. Tại sao chị quyết định sang Đức?",
          },
          {
            speaker: "Linh",
            de: "Ich wollte mich beruflich weiterentwickeln und internationale Erfahrung sammeln.",
            vi: "Tôi muốn phát triển nghề nghiệp hơn nữa và tích lũy kinh nghiệm quốc tế.",
          },
          {
            speaker: "Thomas",
            de: "Haben Sie bereits Ihren Lebenslauf aktualisiert?",
            vi: "Chị đã cập nhật CV chưa?",
          },
          {
            speaker: "Linh",
            de: "Ja, ich habe meinen Lebenslauf auf Deutsch geschrieben und auch ein Bewerbungsschreiben vorbereitet.",
            vi: "Rồi, tôi đã viết CV bằng tiếng Đức và cũng chuẩn bị thư xin việc rồi.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Beschreibe deine Berufserfahrung",
        titleVi: "Bài tập: Mô tả kinh nghiệm nghề nghiệp của bạn",
        instruction:
          "Schreibe einen kurzen Text (5–7 Sätze) über deine bisherige Berufserfahrung. Benutze das Perfekt. Beschreibe: Wo hast du gearbeitet? Was waren deine Aufgaben? Was hast du gelernt?",
        instructionVi:
          "Viết một đoạn văn ngắn (5–7 câu) về kinh nghiệm nghề nghiệp của bạn cho đến nay. Sử dụng thì Perfekt. Mô tả: Bạn đã làm việc ở đâu? Nhiệm vụ của bạn là gì? Bạn đã học được gì? Ví dụ: 'Ich habe zwei Jahre bei... gearbeitet. Ich war zuständig für... Dort habe ich gelernt, wie man...'",
      },
    ],
  },

  // --- Chapter 1, Lesson 2 ---
  {
    id: "b1-ch1-l2",
    chapterId: 1,
    lessonNumber: 2,
    title: "Vorstellungsgespräch",
    titleVi: "Phỏng vấn xin việc",
    type: "Fertigkeit",
    objectives: [
      "Chuẩn bị cho buổi phỏng vấn xin việc bằng tiếng Đức",
      "Trả lời các câu hỏi phỏng vấn phổ biến một cách tự tin",
      "Sử dụng ngôn ngữ trang trọng (formelles Register) trong bối cảnh công việc",
      "Biết cách nói về điểm mạnh, điểm yếu và mục tiêu nghề nghiệp",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das Vorstellungsgespräch in Deutschland",
        titleVi: "Phỏng vấn xin việc ở Đức",
        textDe:
          "Ein Vorstellungsgespräch in Deutschland folgt meistens einer festen Struktur: Begrüßung, Smalltalk, Vorstellung des Unternehmens, Fragen an den Bewerber, Fragen des Bewerbers, Verabschiedung. Man sollte pünktlich sein (5 Minuten vorher), sich formell kleiden und die Firma vorher recherchieren. Wichtig ist, dass man höflich spricht und das formelle 'Sie' verwendet. Man sollte seine Stärken und Schwächen kennen und konkrete Beispiele aus der Berufserfahrung geben können.",
        textVi:
          "Phỏng vấn xin việc ở Đức thường theo một cấu trúc cố định: Chào hỏi, nói chuyện xã giao, giới thiệu công ty, câu hỏi cho ứng viên, câu hỏi của ứng viên, tạm biệt. Bạn nên đến đúng giờ (trước 5 phút), mặc trang trọng và tìm hiểu về công ty trước. Điều quan trọng là bạn nói lịch sự và sử dụng đại từ trang trọng 'Sie'. Bạn nên biết điểm mạnh và điểm yếu của mình và có thể đưa ra ví dụ cụ thể từ kinh nghiệm làm việc.",
      },
      {
        type: "vocabulary",
        titleDe: "Rund ums Vorstellungsgespräch",
        titleVi: "Từ vựng liên quan đến phỏng vấn",
        words: [
          { de: "das Vorstellungsgespräch", vi: "buổi phỏng vấn xin việc", article: "das" },
          { de: "der Bewerber / die Bewerberin", vi: "ứng viên (nam/nữ)" },
          { de: "der Personalleiter", vi: "trưởng phòng nhân sự", article: "der" },
          { de: "die Stärke", vi: "điểm mạnh", article: "die" },
          { de: "die Schwäche", vi: "điểm yếu", article: "die" },
          { de: "die Gehaltsvorstellung", vi: "mức lương mong muốn", article: "die" },
          { de: "die Motivation", vi: "động lực", article: "die" },
          { de: "der Einstellungstermin", vi: "ngày bắt đầu làm việc", article: "der" },
          { de: "teamfähig", vi: "có khả năng làm việc nhóm" },
          { de: "belastbar", vi: "chịu được áp lực" },
          { de: "zuverlässig", vi: "đáng tin cậy" },
          { de: "eigenverantwortlich", vi: "tự chịu trách nhiệm" },
          { de: "kommunikativ", vi: "có kỹ năng giao tiếp" },
          { de: "flexibel", vi: "linh hoạt" },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Häufige Fragen im Vorstellungsgespräch",
        titleVi: "Các câu hỏi phổ biến trong phỏng vấn",
        words: [
          { de: "Erzählen Sie etwas über sich.", vi: "Hãy kể về bản thân bạn." },
          { de: "Warum haben Sie sich bei uns beworben?", vi: "Tại sao bạn ứng tuyển vào công ty chúng tôi?" },
          { de: "Was sind Ihre Stärken und Schwächen?", vi: "Điểm mạnh và điểm yếu của bạn là gì?" },
          { de: "Wo sehen Sie sich in fünf Jahren?", vi: "Bạn thấy mình ở đâu trong năm năm nữa?" },
          { de: "Warum möchten Sie Ihren aktuellen Job wechseln?", vi: "Tại sao bạn muốn đổi công việc hiện tại?" },
          { de: "Was wissen Sie über unser Unternehmen?", vi: "Bạn biết gì về công ty chúng tôi?" },
          { de: "Wie gehen Sie mit Stress um?", vi: "Bạn đối phó với áp lực như thế nào?" },
          { de: "Haben Sie noch Fragen an uns?", vi: "Bạn còn câu hỏi nào cho chúng tôi không?" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Ein Vorstellungsgespräch bei einer deutschen Firma",
        titleVi: "Phỏng vấn tại một công ty Đức",
        lines: [
          {
            speaker: "Frau Weber (HR)",
            de: "Guten Tag, Herr Tran! Schön, dass Sie da sind. Hatten Sie eine gute Anreise?",
            vi: "Xin chào, anh Trần! Rất vui vì anh đã đến. Anh đi đường có tốt không?",
          },
          {
            speaker: "Herr Tran",
            de: "Guten Tag, Frau Weber! Ja, vielen Dank, die Anreise war problemlos.",
            vi: "Xin chào, bà Weber! Vâng, cảm ơn nhiều, đi đường rất thuận lợi.",
          },
          {
            speaker: "Frau Weber",
            de: "Wunderbar. Erzählen Sie doch bitte etwas über sich und Ihren beruflichen Werdegang.",
            vi: "Tuyệt. Xin hãy kể về bản thân anh và quá trình nghề nghiệp của anh.",
          },
          {
            speaker: "Herr Tran",
            de: "Gerne. Ich habe in Vietnam Informatik studiert und danach fünf Jahre als Softwareentwickler gearbeitet. Seit zwei Jahren lebe ich in Deutschland und habe meine Deutschkenntnisse auf B1-Niveau verbessert.",
            vi: "Vâng, rất sẵn lòng. Tôi đã học ngành Công nghệ thông tin ở Việt Nam và sau đó làm lập trình viên năm năm. Hai năm nay tôi sống ở Đức và đã nâng trình độ tiếng Đức lên mức B1.",
          },
          {
            speaker: "Frau Weber",
            de: "Sehr gut. Warum haben Sie sich bei uns beworben?",
            vi: "Rất tốt. Tại sao anh ứng tuyển vào công ty chúng tôi?",
          },
          {
            speaker: "Herr Tran",
            de: "Ihr Unternehmen ist führend im Bereich Cloud-Technologie. Ich möchte meine Erfahrung einbringen und mich gleichzeitig in einem internationalen Team weiterentwickeln.",
            vi: "Công ty của bà là hàng đầu trong lĩnh vực công nghệ đám mây. Tôi muốn đóng góp kinh nghiệm của mình và đồng thời phát triển bản thân trong một đội ngũ quốc tế.",
          },
          {
            speaker: "Frau Weber",
            de: "Was würden Sie als Ihre größte Stärke bezeichnen?",
            vi: "Anh sẽ cho điều gì là điểm mạnh lớn nhất của mình?",
          },
          {
            speaker: "Herr Tran",
            de: "Ich bin sehr lösungsorientiert und arbeite gerne im Team. In meiner letzten Position habe ich erfolgreich ein Projekt geleitet, bei dem wir die Deadline trotz Schwierigkeiten eingehalten haben.",
            vi: "Tôi rất hướng đến giải pháp và thích làm việc nhóm. Ở vị trí trước, tôi đã quản lý thành công một dự án mà chúng tôi đã giữ đúng hạn dù gặp nhiều khó khăn.",
          },
          {
            speaker: "Frau Weber",
            de: "Haben Sie noch Fragen an uns?",
            vi: "Anh còn câu hỏi nào cho chúng tôi không?",
          },
          {
            speaker: "Herr Tran",
            de: "Ja, mich würde interessieren, wie die Einarbeitung bei Ihnen abläuft und ob es Möglichkeiten zur Weiterbildung gibt.",
            vi: "Vâng, tôi muốn biết quá trình đào tạo hội nhập diễn ra như thế nào và có cơ hội đào tạo nâng cao không.",
          },
        ],
      },
      {
        type: "grammar",
        titleDe: "Formelle Sprache im Beruf",
        titleVi: "Ngôn ngữ trang trọng trong công việc",
        rule:
          "Im formellen Kontext benutzt man 'Sie' und höfliche Formulierungen: 'Ich würde gerne...', 'Könnten Sie mir sagen...?', 'Ich hätte eine Frage zu...'. Indirekte Fragen sind höflicher: 'Mich würde interessieren, ob/wie/wann...'",
        ruleVi:
          "Trong bối cảnh trang trọng, người ta dùng 'Sie' và các cách diễn đạt lịch sự: 'Ich würde gerne...' (Tôi muốn...), 'Könnten Sie mir sagen...?' (Bà/Ông có thể cho tôi biết...?), 'Ich hätte eine Frage zu...' (Tôi có một câu hỏi về...). Câu hỏi gián tiếp lịch sự hơn: 'Mich würde interessieren, ob/wie/wann...' (Tôi muốn biết liệu/như thế nào/khi nào...). Đây là cách nói chuyên nghiệp cần thiết trong phỏng vấn và môi trường làm việc ở Đức.",
        examples: [
          { de: "Könnten Sie mir mehr über die Stelle erzählen?", vi: "Bà có thể kể thêm cho tôi về vị trí này không?" },
          { de: "Ich würde gerne wissen, wann ich anfangen kann.", vi: "Tôi muốn biết khi nào tôi có thể bắt đầu." },
          { de: "Dürfte ich fragen, wie hoch das Gehalt ist?", vi: "Tôi có thể hỏi mức lương là bao nhiêu không?" },
          { de: "Mich würde interessieren, ob Homeoffice möglich ist.", vi: "Tôi muốn biết liệu có thể làm việc từ nhà không." },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Bereite dich auf ein Vorstellungsgespräch vor",
        titleVi: "Bài tập: Chuẩn bị cho một buổi phỏng vấn",
        instruction:
          "Beantworte die folgenden Fragen auf Deutsch in ganzen Sätzen: 1) Erzählen Sie etwas über sich. 2) Was sind Ihre Stärken? 3) Warum haben Sie sich bei uns beworben? 4) Wo sehen Sie sich in fünf Jahren? Benutze formelle Sprache (Sie-Form).",
        instructionVi:
          "Trả lời các câu hỏi sau bằng tiếng Đức (viết câu hoàn chỉnh): 1) Hãy kể về bản thân bạn. 2) Điểm mạnh của bạn là gì? 3) Tại sao bạn ứng tuyển vào công ty chúng tôi? 4) Bạn thấy mình ở đâu trong năm năm nữa? Dùng ngôn ngữ trang trọng (dạng Sie). Gợi ý: Bắt đầu bằng 'Ich habe... studiert/gearbeitet. Meine größte Stärke ist...'",
      },
    ],
  },

  // --- Chapter 1, Lesson 3 ---
  {
    id: "b1-ch1-l3",
    chapterId: 1,
    lessonNumber: 3,
    title: "Arbeitsrecht & Verträge",
    titleVi: "Luật lao động & Hợp đồng",
    type: "Fertigkeit",
    objectives: [
      "Hiểu các thuật ngữ quan trọng trong hợp đồng lao động Đức",
      "Nắm vững quyền lợi cơ bản của người lao động tại Đức",
      "Biết các khái niệm: Kündigungsfrist, Probezeit, Urlaubsanspruch",
      "Đọc hiểu và thảo luận về các điều khoản hợp đồng bằng tiếng Đức",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Der Arbeitsvertrag in Deutschland",
        titleVi: "Hợp đồng lao động ở Đức",
        textDe:
          "In Deutschland regelt der Arbeitsvertrag die Rechte und Pflichten von Arbeitnehmer und Arbeitgeber. Er enthält wichtige Informationen wie Arbeitszeit, Gehalt, Urlaubstage, Kündigungsfrist und Probezeit. Die Probezeit dauert meistens sechs Monate — in dieser Zeit kann das Arbeitsverhältnis mit einer Frist von zwei Wochen gekündigt werden. Nach der Probezeit gelten längere Kündigungsfristen. Arbeitnehmer in Deutschland haben Anspruch auf mindestens 20 Urlaubstage bei einer 5-Tage-Woche (gesetzlicher Mindesturlaub). Viele Firmen bieten 25–30 Tage an.",
        textVi:
          "Ở Đức, hợp đồng lao động quy định quyền và nghĩa vụ của người lao động và người sử dụng lao động. Nó chứa các thông tin quan trọng như thời gian làm việc, lương, ngày phép, thời hạn báo trước khi nghỉ việc và thời gian thử việc. Thời gian thử việc (Probezeit) thường kéo dài sáu tháng — trong thời gian này, quan hệ lao động có thể bị chấm dứt với thời hạn báo trước hai tuần. Sau thời gian thử việc, thời hạn báo trước khi nghỉ việc sẽ dài hơn. Người lao động ở Đức có quyền được ít nhất 20 ngày phép với tuần làm việc 5 ngày (phép năm tối thiểu theo luật). Nhiều công ty cung cấp 25–30 ngày.",
      },
      {
        type: "vocabulary",
        titleDe: "Arbeitsvertrag & Arbeitsrecht",
        titleVi: "Hợp đồng lao động & Luật lao động",
        words: [
          { de: "der Arbeitsvertrag", vi: "hợp đồng lao động", article: "der" },
          { de: "der Arbeitnehmer", vi: "người lao động", article: "der" },
          { de: "der Arbeitgeber", vi: "người sử dụng lao động", article: "der" },
          { de: "die Probezeit", vi: "thời gian thử việc", article: "die" },
          { de: "die Kündigungsfrist", vi: "thời hạn báo trước khi nghỉ việc", article: "die" },
          { de: "die Kündigung", vi: "việc sa thải / nghỉ việc", article: "die" },
          { de: "der Urlaubsanspruch", vi: "quyền nghỉ phép", article: "der" },
          { de: "die Arbeitszeit", vi: "thời gian làm việc", article: "die" },
          { de: "die Überstunde", vi: "giờ làm thêm", article: "die" },
          { de: "das Gehalt", vi: "lương (hàng tháng)", article: "das" },
          { de: "der Lohn", vi: "lương (theo giờ/tuần)", article: "der" },
          { de: "das Bruttogehalt", vi: "lương gộp (trước thuế)", article: "das" },
          { de: "das Nettogehalt", vi: "lương ròng (sau thuế)", article: "das" },
          { de: "die Sozialversicherung", vi: "bảo hiểm xã hội", article: "die" },
          { de: "die Krankenversicherung", vi: "bảo hiểm y tế", article: "die" },
          { de: "befristet", vi: "có thời hạn (hợp đồng)" },
          { de: "unbefristet", vi: "không thời hạn (hợp đồng)" },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Rechte und Pflichten",
        titleVi: "Quyền và nghĩa vụ",
        words: [
          { de: "das Recht", vi: "quyền", article: "das" },
          { de: "die Pflicht", vi: "nghĩa vụ", article: "die" },
          { de: "der Mutterschutz", vi: "chế độ bảo vệ thai sản", article: "der" },
          { de: "die Elternzeit", vi: "thời gian nghỉ chăm con", article: "die" },
          { de: "der Betriebsrat", vi: "hội đồng lao động (công đoàn)", article: "der" },
          { de: "die Krankschreibung", vi: "giấy nghỉ ốm", article: "die" },
          { de: "kündigen", vi: "nghỉ việc / sa thải" },
          { de: "unterschreiben", vi: "ký (tên)" },
          { de: "verlängern", vi: "gia hạn" },
          { de: "einhalten", vi: "tuân thủ" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Gespräch über den Arbeitsvertrag",
        titleVi: "Trò chuyện về hợp đồng lao động",
        lines: [
          {
            speaker: "Hoa",
            de: "Ich habe gerade meinen ersten Arbeitsvertrag in Deutschland bekommen! Aber ich verstehe nicht alles.",
            vi: "Tôi vừa nhận hợp đồng lao động đầu tiên ở Đức! Nhưng tôi không hiểu hết.",
          },
          {
            speaker: "Maria",
            de: "Zeig mal! Also, hier steht: Die Probezeit beträgt sechs Monate. Das ist ganz normal.",
            vi: "Cho xem nào! À, ở đây viết: Thời gian thử việc là sáu tháng. Điều này hoàn toàn bình thường.",
          },
          {
            speaker: "Hoa",
            de: "Und was bedeutet 'Kündigungsfrist von vier Wochen zum Monatsende'?",
            vi: "Và 'Kündigungsfrist von vier Wochen zum Monatsende' nghĩa là gì?",
          },
          {
            speaker: "Maria",
            de: "Das heißt: Wenn du oder dein Arbeitgeber kündigen will, muss man vier Wochen vorher Bescheid sagen, und die Kündigung gilt dann zum Ende des nächsten Monats.",
            vi: "Nghĩa là: Nếu bạn hoặc người sử dụng lao động muốn chấm dứt hợp đồng, phải thông báo trước bốn tuần, và việc nghỉ việc sẽ có hiệu lực vào cuối tháng tiếp theo.",
          },
          {
            speaker: "Hoa",
            de: "Verstehe. Und ich bekomme 28 Urlaubstage — ist das viel?",
            vi: "Hiểu rồi. Và tôi được 28 ngày phép — nhiều không?",
          },
          {
            speaker: "Maria",
            de: "Ja, das ist mehr als der gesetzliche Mindestanspruch von 20 Tagen. Dein Arbeitgeber ist großzügig!",
            vi: "Ừ, đó là nhiều hơn quyền phép tối thiểu theo luật là 20 ngày. Chủ lao động của bạn rộng rãi đấy!",
          },
          {
            speaker: "Hoa",
            de: "Eine letzte Frage: Ist mein Vertrag befristet oder unbefristet?",
            vi: "Một câu hỏi cuối: Hợp đồng của tôi có thời hạn hay không thời hạn?",
          },
          {
            speaker: "Maria",
            de: "Hier steht 'unbefristet'. Das ist super — das bedeutet, du hast eine feste Stelle ohne zeitliche Begrenzung!",
            vi: "Ở đây viết 'unbefristet'. Tuyệt vời — nghĩa là bạn có một vị trí cố định không giới hạn thời gian!",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Verstehe deinen Arbeitsvertrag",
        titleVi: "Bài tập: Hiểu hợp đồng lao động của bạn",
        instruction:
          "Lies die folgenden Sätze und erkläre auf Deutsch, was sie bedeuten: 1) 'Die Probezeit beträgt 6 Monate.' 2) 'Das monatliche Bruttogehalt beträgt 3.500 Euro.' 3) 'Der Arbeitnehmer hat Anspruch auf 26 Urlaubstage pro Jahr.' 4) 'Die Kündigungsfrist beträgt drei Monate zum Quartalsende.'",
        instructionVi:
          "Đọc các câu sau và giải thích bằng tiếng Đức xem chúng có nghĩa gì: 1) 'Thời gian thử việc là 6 tháng.' 2) 'Lương gộp hàng tháng là 3.500 Euro.' 3) 'Người lao động có quyền 26 ngày phép mỗi năm.' 4) 'Thời hạn báo trước khi nghỉ việc là ba tháng tính đến cuối quý.' Gợi ý: Dùng cấu trúc 'Das bedeutet, dass...' (Điều đó có nghĩa là...)",
      },
    ],
  },

  // --- Chapter 1, Lesson 4 ---
  {
    id: "b1-ch1-l4",
    chapterId: 1,
    lessonNumber: 4,
    title: "Konjunktiv II — Wünsche & irreale Bedingungen",
    titleVi: "Konjunktiv II — Ước muốn & điều kiện không thực",
    type: "Grammatik",
    objectives: [
      "Hiểu và sử dụng Konjunktiv II để diễn đạt ước muốn và điều kiện không thực",
      "Chia đúng würde + Infinitiv, wäre và hätte",
      "Xây dựng câu điều kiện với wenn (wenn-Sätze)",
      "Phân biệt giữa thực tế và mong muốn/giả định",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Was ist der Konjunktiv II?",
        titleVi: "Konjunktiv II là gì?",
        textDe:
          "Der Konjunktiv II drückt irreale Situationen, Wünsche, höfliche Bitten und hypothetische Bedingungen aus. Man verwendet ihn, wenn man über Dinge spricht, die nicht real sind oder die man sich wünscht. Die häufigsten Formen sind: würde + Infinitiv (allgemeine Form), wäre (von 'sein') und hätte (von 'haben'). In wenn-Sätzen beschreibt man eine irreale Bedingung und ihre hypothetische Folge.",
        textVi:
          "Konjunktiv II diễn đạt tình huống không thực, ước muốn, yêu cầu lịch sự và điều kiện giả định. Người ta dùng nó khi nói về những điều không có thật hoặc những điều mong muốn. Các dạng phổ biến nhất là: würde + động từ nguyên mẫu (dạng chung), wäre (từ 'sein') và hätte (từ 'haben'). Trong câu wenn (nếu), người ta mô tả một điều kiện không thực và hệ quả giả định của nó. So sánh với tiếng Việt: Konjunktiv II tương tự như khi ta nói 'Nếu tôi là...thì tôi sẽ...' hoặc 'Giá mà tôi có thể...'",
      },
      {
        type: "grammar",
        titleDe: "würde + Infinitiv",
        titleVi: "würde + Động từ nguyên mẫu",
        rule:
          "ich würde, du würdest, er/sie/es würde, wir würden, ihr würdet, sie/Sie würden + Infinitiv. Diese Form wird für die meisten Verben im Konjunktiv II benutzt.",
        ruleVi:
          "Bảng chia 'würde': ich würde (tôi sẽ), du würdest (bạn sẽ), er/sie/es würde (anh ấy/cô ấy sẽ), wir würden (chúng tôi sẽ), ihr würdet (các bạn sẽ), sie/Sie würden (họ sẽ / quý ông/bà sẽ) + động từ nguyên mẫu. Dạng này được dùng cho hầu hết các động từ trong Konjunktiv II. Nó tương đương với 'would + verb' trong tiếng Anh.",
        examples: [
          { de: "Ich würde gerne in Berlin arbeiten.", vi: "Tôi muốn làm việc ở Berlin." },
          { de: "Würdest du mir helfen?", vi: "Bạn có giúp tôi được không?" },
          { de: "Er würde am liebsten den Job wechseln.", vi: "Anh ấy muốn nhất là đổi việc." },
          { de: "Wir würden gerne mehr Urlaub haben.", vi: "Chúng tôi muốn có nhiều ngày phép hơn." },
        ],
      },
      {
        type: "grammar",
        titleDe: "wäre und hätte",
        titleVi: "wäre và hätte",
        rule:
          "wäre (Konjunktiv II von 'sein'): ich wäre, du wärst, er/sie/es wäre, wir wären, ihr wärt, sie/Sie wären. hätte (Konjunktiv II von 'haben'): ich hätte, du hättest, er/sie/es hätte, wir hätten, ihr hättet, sie/Sie hätten. Diese Formen werden direkt benutzt, nicht mit 'würde'.",
        ruleVi:
          "wäre (Konjunktiv II của 'sein'/là): ich wäre (tôi sẽ là), du wärst, er/sie/es wäre, wir wären, ihr wärt, sie/Sie wären. hätte (Konjunktiv II của 'haben'/có): ich hätte (tôi sẽ có), du hättest, er/sie/es hätte, wir hätten, ihr hättet, sie/Sie hätten. Các dạng này được dùng trực tiếp, KHÔNG kết hợp với 'würde'. Ví dụ: Nói 'Ich wäre froh' chứ KHÔNG nói 'Ich würde froh sein'.",
        examples: [
          { de: "Ich wäre gern Abteilungsleiter.", vi: "Tôi muốn là trưởng phòng." },
          { de: "Wärst du an meiner Stelle zufrieden?", vi: "Nếu ở vị trí tôi, bạn có hài lòng không?" },
          { de: "Ich hätte gern einen unbefristeten Vertrag.", vi: "Tôi muốn có một hợp đồng không thời hạn." },
          { de: "Hätten Sie einen Moment Zeit?", vi: "Quý ông/bà có một chút thời gian không? (lịch sự)" },
          { de: "Wir wären froh, wenn die Firma mehr Urlaub anbieten würde.", vi: "Chúng tôi sẽ vui nếu công ty cung cấp nhiều ngày phép hơn." },
        ],
      },
      {
        type: "grammar",
        titleDe: "Irreale wenn-Sätze (Bedingungssätze)",
        titleVi: "Câu điều kiện không thực với wenn",
        rule:
          "Struktur: Wenn + Subjekt + ... + Konjunktiv-II-Verb, Hauptsatz mit würde/wäre/hätte. Oder: Hauptsatz, wenn + Nebensatz. Die wenn-Klausel beschreibt die irreale Bedingung, der Hauptsatz die hypothetische Folge.",
        ruleVi:
          "Cấu trúc: Wenn (Nếu) + Chủ ngữ + ... + Động từ Konjunktiv II (ở cuối), Mệnh đề chính với würde/wäre/hätte. Hoặc: Mệnh đề chính, wenn + Mệnh đề phụ. Mệnh đề wenn mô tả điều kiện không thực, mệnh đề chính mô tả hệ quả giả định. Lưu ý: Trong mệnh đề wenn, động từ luôn ở cuối câu!",
        examples: [
          {
            de: "Wenn ich mehr Geld hätte, würde ich ein Haus kaufen.",
            vi: "Nếu tôi có nhiều tiền hơn, tôi sẽ mua một căn nhà.",
          },
          {
            de: "Wenn ich Deutsch perfekt sprechen könnte, wäre die Jobsuche leichter.",
            vi: "Nếu tôi nói tiếng Đức hoàn hảo, việc tìm việc sẽ dễ hơn.",
          },
          {
            de: "Ich würde sofort kündigen, wenn ich eine bessere Stelle finden würde.",
            vi: "Tôi sẽ nghỉ việc ngay nếu tôi tìm được một vị trí tốt hơn.",
          },
          {
            de: "Wenn wir in Vietnam wären, würden wir unsere Familie jeden Tag sehen.",
            vi: "Nếu chúng tôi ở Việt Nam, chúng tôi sẽ gặp gia đình mỗi ngày.",
          },
          {
            de: "Wenn ich der Chef wäre, hätten alle Mitarbeiter 30 Urlaubstage.",
            vi: "Nếu tôi là sếp, tất cả nhân viên sẽ có 30 ngày phép.",
          },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Wünsche und Träume — Gespräch unter Freunden",
        titleVi: "Ước mơ và mong muốn — Trò chuyện giữa bạn bè",
        lines: [
          {
            speaker: "Duc",
            de: "Manchmal wünsche ich mir, ich wäre wieder in Vietnam. Ich vermisse meine Familie.",
            vi: "Đôi khi tôi ước mình lại ở Việt Nam. Tôi nhớ gia đình.",
          },
          {
            speaker: "Trang",
            de: "Das verstehe ich. Wenn ich könnte, würde ich meine Eltern öfter besuchen.",
            vi: "Tôi hiểu. Nếu có thể, tôi sẽ thăm bố mẹ thường xuyên hơn.",
          },
          {
            speaker: "Duc",
            de: "Wenn ich eine gut bezahlte Stelle hätte, würde ich jedes Jahr nach Vietnam fliegen.",
            vi: "Nếu tôi có một công việc lương cao, tôi sẽ bay về Việt Nam mỗi năm.",
          },
          {
            speaker: "Trang",
            de: "Ich auch! Aber weißt du, was ich mir am meisten wünschen würde? Einen unbefristeten Vertrag!",
            vi: "Tôi cũng vậy! Nhưng bạn biết tôi mong muốn gì nhất không? Một hợp đồng không thời hạn!",
          },
          {
            speaker: "Duc",
            de: "Ja, das wäre wirklich toll. Wenn wir beide unbefristete Verträge hätten, wären wir viel entspannter.",
            vi: "Ừ, điều đó thật sự tuyệt. Nếu cả hai chúng ta có hợp đồng không thời hạn, chúng ta sẽ thư giãn hơn nhiều.",
          },
          {
            speaker: "Trang",
            de: "Stimmt. Aber ich bin trotzdem dankbar, dass wir hier sind. Wenn wir nicht nach Deutschland gekommen wären, hätten wir diese Chancen nicht.",
            vi: "Đúng. Nhưng tôi vẫn biết ơn vì chúng ta ở đây. Nếu chúng ta không đến Đức, chúng ta sẽ không có những cơ hội này.",
          },
          {
            speaker: "Duc",
            de: "Da hast du recht. Also — auf unsere Zukunft!",
            vi: "Bạn nói đúng. Vậy — vì tương lai của chúng ta!",
          },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Nützliche Ausdrücke mit Konjunktiv II",
        titleVi: "Các cách diễn đạt hữu ích với Konjunktiv II",
        words: [
          { de: "Ich wünsche mir...", vi: "Tôi ước / Tôi mong muốn..." },
          { de: "Wenn ich ... wäre, ...", vi: "Nếu tôi là..., ..." },
          { de: "Wenn ich ... hätte, ...", vi: "Nếu tôi có..., ..." },
          { de: "An deiner Stelle würde ich...", vi: "Ở vị trí bạn, tôi sẽ..." },
          { de: "Es wäre schön, wenn...", vi: "Sẽ tốt đẹp nếu..." },
          { de: "Ich hätte gern...", vi: "Tôi muốn có..." },
          { de: "Könnten Sie mir bitte helfen?", vi: "Bạn có thể giúp tôi được không? (lịch sự)" },
          { de: "Das wäre toll!", vi: "Điều đó sẽ tuyệt vời!" },
          { de: "Wenn ich nur könnte!", vi: "Giá mà tôi có thể!" },
          { de: "Ich würde am liebsten...", vi: "Tôi muốn nhất là..." },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Konjunktiv II — Wünsche und Bedingungen",
        titleVi: "Bài tập: Konjunktiv II — Ước muốn và điều kiện",
        instruction:
          "Bilde Sätze im Konjunktiv II. 1) Schreibe 3 Wünsche mit 'Ich wünsche mir, ich wäre/hätte/würde...'. 2) Bilde 3 irreale wenn-Sätze zum Thema Arbeit, z.B. 'Wenn ich der Chef wäre, würde ich...'. 3) Formuliere 2 höfliche Bitten mit 'Könnten Sie...?' oder 'Hätten Sie...?'.",
        instructionVi:
          "Đặt câu với Konjunktiv II. 1) Viết 3 ước muốn với 'Ich wünsche mir, ich wäre/hätte/würde...' (Tôi ước tôi là/có/sẽ...). 2) Đặt 3 câu điều kiện không thực về chủ đề công việc, ví dụ: 'Wenn ich der Chef wäre, würde ich...' (Nếu tôi là sếp, tôi sẽ...). 3) Đặt 2 yêu cầu lịch sự với 'Könnten Sie...?' (Bạn có thể...?) hoặc 'Hätten Sie...?' (Bạn có...?). Nhớ: Trong mệnh đề wenn, động từ luôn ở cuối!",
      },
    ],
  },
];
