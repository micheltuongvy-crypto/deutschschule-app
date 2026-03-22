// A1 Chapters 7-8: Körper & Gesundheit, Stadt & Verkehr

export type ContentBlock =
  | { type: "explanation"; titleDe: string; titleVi: string; textDe: string; textVi: string }
  | { type: "dialogue"; titleDe: string; titleVi: string; lines: { speaker: string; de: string; vi: string }[] }
  | { type: "grammar"; titleDe: string; titleVi: string; rule: string; ruleVi: string; examples: { de: string; vi: string }[] }
  | { type: "vocabulary"; titleDe: string; titleVi: string; words: { de: string; vi: string; article?: string }[] }
  | { type: "practice"; titleDe: string; titleVi: string; instruction: string; instructionVi: string };

export interface Lesson {
  id: string;
  chapterId: number;
  lessonNumber: number;
  title: string;
  titleVi: string;
  type: "Einführung" | "Grammatik" | "Fertigkeit" | "Integration";
  objectives: string[];
  content: ContentBlock[];
}

export const a1Chapters7_8: Lesson[] = [
  // ============================================================
  // CHAPTER 7: Körper & Gesundheit
  // ============================================================

  // --- Chapter 7, Lesson 1: Körperteile ---
  {
    id: "a1-ch7-l1",
    chapterId: 7,
    lessonNumber: 1,
    title: "Körperteile",
    titleVi: "Các bộ phận cơ thể",
    type: "Einführung",
    objectives: [
      "Nắm được từ vựng về các bộ phận cơ thể",
      "Diễn đạt cảm giác đau: 'Mir tut ... weh'",
      "Hỏi và trả lời về tình trạng sức khỏe"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Der menschliche Körper",
        titleVi: "Cơ thể con người",
        textDe: "Unser Körper hat viele Teile. Wenn wir krank sind oder Schmerzen haben, müssen wir die Körperteile benennen können. So können wir dem Arzt sagen, wo es wehtut. In Deutschland geht man zuerst zum Hausarzt. Der Hausarzt überweist dann an einen Facharzt, wenn nötig.",
        textVi: "Cơ thể chúng ta có nhiều bộ phận. Khi bị bệnh hoặc đau, chúng ta cần biết tên các bộ phận cơ thể. Như vậy, chúng ta có thể nói cho bác sĩ biết chỗ nào đau. Ở Đức, đầu tiên người ta đến bác sĩ gia đình (Hausarzt). Bác sĩ gia đình sẽ giới thiệu đến bác sĩ chuyên khoa nếu cần."
      },
      {
        type: "vocabulary",
        titleDe: "Körperteile",
        titleVi: "Các bộ phận cơ thể",
        words: [
          { de: "Kopf", vi: "đầu", article: "der" },
          { de: "Haar", vi: "tóc", article: "das" },
          { de: "Auge", vi: "mắt", article: "das" },
          { de: "Ohr", vi: "tai", article: "das" },
          { de: "Nase", vi: "mũi", article: "die" },
          { de: "Mund", vi: "miệng", article: "der" },
          { de: "Zahn", vi: "răng", article: "der" },
          { de: "Hals", vi: "cổ / họng", article: "der" },
          { de: "Schulter", vi: "vai", article: "die" },
          { de: "Arm", vi: "cánh tay", article: "der" },
          { de: "Hand", vi: "bàn tay", article: "die" },
          { de: "Finger", vi: "ngón tay", article: "der" },
          { de: "Brust", vi: "ngực", article: "die" },
          { de: "Bauch", vi: "bụng", article: "der" },
          { de: "Rücken", vi: "lưng", article: "der" },
          { de: "Bein", vi: "chân (cả chân)", article: "das" },
          { de: "Knie", vi: "đầu gối", article: "das" },
          { de: "Fuß", vi: "bàn chân", article: "der" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Gesundheit und Krankheit",
        titleVi: "Sức khỏe và bệnh tật",
        words: [
          { de: "Schmerzen", vi: "cơn đau", article: "die (Pl.)" },
          { de: "Kopfschmerzen", vi: "đau đầu", article: "die (Pl.)" },
          { de: "Bauchschmerzen", vi: "đau bụng", article: "die (Pl.)" },
          { de: "Halsschmerzen", vi: "đau họng", article: "die (Pl.)" },
          { de: "Rückenschmerzen", vi: "đau lưng", article: "die (Pl.)" },
          { de: "Fieber", vi: "sốt", article: "das" },
          { de: "Husten", vi: "ho", article: "der" },
          { de: "Schnupfen", vi: "sổ mũi", article: "der" },
          { de: "Erkältung", vi: "cảm lạnh", article: "die" },
          { de: "Grippe", vi: "cúm", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Mir tut ... weh / Mir tun ... weh",
        titleVi: "Tôi bị đau ...",
        rule: "Singular: Mir tut + der/die/das [Körperteil] weh. Plural: Mir tun die [Körperteile] weh. Das Verb 'wehtun' ist trennbar. Man kann auch sagen: Ich habe [Körperteil]schmerzen.",
        ruleVi: "Số ít: Mir tut + der/die/das [bộ phận] weh. Số nhiều: Mir tun die [bộ phận] weh. Động từ 'wehtun' là động từ tách được. Bạn cũng có thể nói: Ich habe [bộ phận]schmerzen. Lưu ý: 'Mir' là Dativ của 'ich' — trong tiếng Việt không có dạng này, chỉ cần hiểu là 'tôi bị đau'.",
        examples: [
          { de: "Mir tut der Kopf weh.", vi: "Tôi bị đau đầu." },
          { de: "Mir tut der Bauch weh.", vi: "Tôi bị đau bụng." },
          { de: "Mir tun die Augen weh.", vi: "Tôi bị đau mắt." },
          { de: "Mir tun die Beine weh.", vi: "Tôi bị đau chân." },
          { de: "Ich habe Kopfschmerzen.", vi: "Tôi bị đau đầu." },
          { de: "Ich habe Halsschmerzen.", vi: "Tôi bị đau họng." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Wie geht es dir?",
        titleVi: "Bạn khỏe không?",
        lines: [
          { speaker: "Lan", de: "Hallo Minh! Wie geht es dir?", vi: "Chào Minh! Bạn khỏe không?" },
          { speaker: "Minh", de: "Nicht so gut. Mir tut der Kopf weh.", vi: "Không tốt lắm. Tôi bị đau đầu." },
          { speaker: "Lan", de: "Oh nein! Hast du auch Fieber?", vi: "Ôi không! Bạn có bị sốt không?" },
          { speaker: "Minh", de: "Ja, ein bisschen. Und ich habe Halsschmerzen.", vi: "Có, hơi sốt. Và tôi bị đau họng." },
          { speaker: "Lan", de: "Du hast bestimmt eine Erkältung. Du solltest zum Arzt gehen.", vi: "Chắc chắn bạn bị cảm lạnh. Bạn nên đi khám bác sĩ." },
          { speaker: "Minh", de: "Ja, du hast recht. Ich rufe morgen beim Arzt an.", vi: "Ừ, bạn nói đúng. Ngày mai tôi sẽ gọi điện cho phòng khám." }
        ]
      },
      {
        type: "practice",
        titleDe: "Was tut dir weh?",
        titleVi: "Bạn bị đau ở đâu?",
        instruction: "Beschreibe, wie du dich fühlst. Benutze: Mir tut ... weh / Mir tun ... weh / Ich habe ... Schmerzen. Beispiel: Mir tut der Rücken weh. Ich habe Kopfschmerzen.",
        instructionVi: "Hãy mô tả cảm giác của bạn. Sử dụng: Mir tut ... weh / Mir tun ... weh / Ich habe ... Schmerzen. Ví dụ: Mir tut der Rücken weh. Ich habe Kopfschmerzen."
      }
    ]
  },

  // --- Chapter 7, Lesson 2: Perfekt ---
  {
    id: "a1-ch7-l2",
    chapterId: 7,
    lessonNumber: 2,
    title: "Perfekt",
    titleVi: "Thì hoàn thành (Perfekt)",
    type: "Grammatik",
    objectives: [
      "Hiểu cách chia thì Perfekt với haben và sein",
      "Phân biệt Partizip II của động từ có quy tắc và bất quy tắc",
      "Sử dụng Perfekt để kể về sự việc đã xảy ra"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das Perfekt",
        titleVi: "Thì hoàn thành (Perfekt)",
        textDe: "Das Perfekt benutzen wir im Deutschen, um über die Vergangenheit zu sprechen. Das Perfekt besteht aus zwei Teilen: haben oder sein (konjugiert) + Partizip II (am Ende vom Satz). Wir benutzen das Perfekt oft in der gesprochenen Sprache.",
        textVi: "Thì Perfekt được sử dụng trong tiếng Đức để nói về quá khứ. Perfekt gồm hai phần: haben hoặc sein (được chia) + Partizip II (ở cuối câu). Chúng ta dùng Perfekt thường xuyên trong giao tiếp hàng ngày. Lưu ý: Tiếng Việt không có thì, chỉ dùng từ 'đã' để chỉ quá khứ. Tiếng Đức bắt buộc phải dùng thì Perfekt."
      },
      {
        type: "grammar",
        titleDe: "Perfekt mit 'haben' — regelmäßige Verben",
        titleVi: "Perfekt với 'haben' — động từ có quy tắc",
        rule: "Regelmäßige Verben: ge- + Stamm + -t. Beispiel: machen → gemacht, lernen → gelernt, kaufen → gekauft. Verben mit -ieren: kein ge-! studieren → studiert, telefonieren → telefoniert. Trennbare Verben: Präfix + ge- + Stamm + -t. einkaufen → eingekauft.",
        ruleVi: "Động từ có quy tắc: ge- + gốc từ + -t. Ví dụ: machen → gemacht, lernen → gelernt, kaufen → gekauft. Động từ kết thúc bằng -ieren: KHÔNG có ge-! studieren → studiert, telefonieren → telefoniert. Động từ tách được: tiền tố + ge- + gốc từ + -t. einkaufen → eingekauft.",
        examples: [
          { de: "Ich habe Deutsch gelernt.", vi: "Tôi đã học tiếng Đức." },
          { de: "Er hat Fußball gespielt.", vi: "Anh ấy đã chơi bóng đá." },
          { de: "Wir haben eingekauft.", vi: "Chúng tôi đã đi mua sắm." },
          { de: "Sie hat telefoniert.", vi: "Cô ấy đã gọi điện thoại." },
          { de: "Hast du die Hausaufgaben gemacht?", vi: "Bạn đã làm bài tập chưa?" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Perfekt mit 'haben' — unregelmäßige Verben",
        titleVi: "Perfekt với 'haben' — động từ bất quy tắc",
        rule: "Unregelmäßige Verben: ge- + veränderter Stamm + -en. Man muss diese Formen auswendig lernen. Wichtige Verben: essen → gegessen, trinken → getrunken, schreiben → geschrieben, lesen → gelesen, sprechen → gesprochen, nehmen → genommen, sehen → gesehen, finden → gefunden, schlafen → geschlafen.",
        ruleVi: "Động từ bất quy tắc: ge- + gốc từ thay đổi + -en. Bạn phải học thuộc lòng các dạng này. Các động từ quan trọng: essen → gegessen, trinken → getrunken, schreiben → geschrieben, lesen → gelesen, sprechen → gesprochen, nehmen → genommen, sehen → gesehen, finden → gefunden, schlafen → geschlafen.",
        examples: [
          { de: "Ich habe einen Apfel gegessen.", vi: "Tôi đã ăn một quả táo." },
          { de: "Er hat Wasser getrunken.", vi: "Anh ấy đã uống nước." },
          { de: "Wir haben ein Buch gelesen.", vi: "Chúng tôi đã đọc một cuốn sách." },
          { de: "Hast du gut geschlafen?", vi: "Bạn đã ngủ ngon không?" },
          { de: "Sie hat eine E-Mail geschrieben.", vi: "Cô ấy đã viết một email." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Perfekt mit 'sein'",
        titleVi: "Perfekt với 'sein'",
        rule: "Einige Verben bilden das Perfekt mit 'sein' statt 'haben'. Diese Verben zeigen eine Bewegung (von A nach B) oder eine Veränderung. Wichtige Verben: gehen → gegangen, kommen → gekommen, fahren → gefahren, fliegen → geflogen, laufen → gelaufen, aufstehen → aufgestanden, sein → gewesen, bleiben → geblieben, passieren → passiert.",
        ruleVi: "Một số động từ dùng 'sein' thay vì 'haben' để tạo Perfekt. Các động từ này chỉ sự di chuyển (từ A đến B) hoặc sự thay đổi trạng thái. Các động từ quan trọng: gehen → gegangen, kommen → gekommen, fahren → gefahren, fliegen → geflogen, laufen → gelaufen, aufstehen → aufgestanden, sein → gewesen, bleiben → geblieben, passieren → passiert.",
        examples: [
          { de: "Ich bin nach Berlin gefahren.", vi: "Tôi đã đi (bằng xe) đến Berlin." },
          { de: "Er ist nach Hause gegangen.", vi: "Anh ấy đã đi về nhà." },
          { de: "Wir sind um 7 Uhr aufgestanden.", vi: "Chúng tôi đã thức dậy lúc 7 giờ." },
          { de: "Bist du schon in Deutschland gewesen?", vi: "Bạn đã từng ở Đức chưa?" },
          { de: "Sie ist aus Vietnam gekommen.", vi: "Cô ấy đến từ Việt Nam (đã đến)." },
          { de: "Was ist passiert?", vi: "Chuyện gì đã xảy ra?" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Was hast du gestern gemacht?",
        titleVi: "Hôm qua bạn đã làm gì?",
        lines: [
          { speaker: "Anna", de: "Was hast du gestern gemacht?", vi: "Hôm qua bạn đã làm gì?" },
          { speaker: "Minh", de: "Ich bin morgens zum Arzt gegangen.", vi: "Buổi sáng tôi đã đi khám bác sĩ." },
          { speaker: "Anna", de: "Oh! Was ist passiert?", vi: "Ôi! Chuyện gì đã xảy ra?" },
          { speaker: "Minh", de: "Ich habe Bauchschmerzen gehabt. Der Arzt hat mich untersucht.", vi: "Tôi đã bị đau bụng. Bác sĩ đã khám cho tôi." },
          { speaker: "Anna", de: "Und? Hat er dir Medikamente gegeben?", vi: "Rồi sao? Bác sĩ đã cho bạn thuốc chưa?" },
          { speaker: "Minh", de: "Ja, ich habe Tabletten bekommen. Jetzt geht es mir besser.", vi: "Rồi, tôi đã được cho thuốc viên. Bây giờ tôi đã khỏe hơn." }
        ]
      },
      {
        type: "practice",
        titleDe: "Was hast du letzte Woche gemacht?",
        titleVi: "Tuần trước bạn đã làm gì?",
        instruction: "Schreibe 5 Sätze im Perfekt über letzte Woche. Benutze verschiedene Verben mit 'haben' und 'sein'. Beispiel: Am Montag habe ich Deutsch gelernt. Am Dienstag bin ich ins Kino gegangen.",
        instructionVi: "Viết 5 câu ở thì Perfekt về tuần trước. Sử dụng các động từ khác nhau với 'haben' và 'sein'. Ví dụ: Am Montag habe ich Deutsch gelernt. Am Dienstag bin ich ins Kino gegangen."
      }
    ]
  },

  // --- Chapter 7, Lesson 3: Beim Arzt ---
  {
    id: "a1-ch7-l3",
    chapterId: 7,
    lessonNumber: 3,
    title: "Beim Arzt",
    titleVi: "Đi khám bác sĩ",
    type: "Fertigkeit",
    objectives: [
      "Giao tiếp khi đi khám bác sĩ ở Đức",
      "Mô tả triệu chứng bệnh cho bác sĩ",
      "Hiểu chỉ dẫn của bác sĩ và mua thuốc ở hiệu thuốc"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Beim Arzt in Deutschland",
        titleVi: "Đi khám bác sĩ ở Đức",
        textDe: "In Deutschland muss man zuerst einen Termin beim Arzt machen. Man ruft in der Praxis an und sagt, welche Beschwerden man hat. Am Empfang zeigt man die Versichertenkarte (Krankenversicherungskarte). Dann wartet man im Wartezimmer. Der Arzt fragt nach den Symptomen und untersucht den Patienten.",
        textVi: "Ở Đức, trước tiên bạn phải đặt lịch hẹn với bác sĩ. Bạn gọi điện đến phòng khám và nói bạn có triệu chứng gì. Tại quầy lễ tân, bạn xuất trình thẻ bảo hiểm y tế (Versichertenkarte). Sau đó bạn ngồi chờ ở phòng chờ. Bác sĩ sẽ hỏi về triệu chứng và khám cho bệnh nhân."
      },
      {
        type: "vocabulary",
        titleDe: "Beim Arzt",
        titleVi: "Ở phòng khám",
        words: [
          { de: "Arzt / Ärztin", vi: "bác sĩ (nam/nữ)", article: "der / die" },
          { de: "Praxis", vi: "phòng khám", article: "die" },
          { de: "Termin", vi: "lịch hẹn", article: "der" },
          { de: "Wartezimmer", vi: "phòng chờ", article: "das" },
          { de: "Versichertenkarte", vi: "thẻ bảo hiểm y tế", article: "die" },
          { de: "Rezept", vi: "đơn thuốc", article: "das" },
          { de: "Medikament", vi: "thuốc", article: "das" },
          { de: "Tablette", vi: "thuốc viên", article: "die" },
          { de: "Tropfen", vi: "thuốc nhỏ (giọt)", article: "die (Pl.)" },
          { de: "Salbe", vi: "thuốc mỡ", article: "die" },
          { de: "Krankschreibung", vi: "giấy nghỉ bệnh", article: "die" },
          { de: "Apotheke", vi: "hiệu thuốc", article: "die" },
          { de: "Untersuchung", vi: "kiểm tra / khám", article: "die" },
          { de: "Sprechstunde", vi: "giờ khám bệnh", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Einen Termin machen",
        titleVi: "Đặt lịch hẹn",
        lines: [
          { speaker: "Sprechstundenhilfe", de: "Praxis Dr. Müller, guten Tag!", vi: "Phòng khám bác sĩ Müller, xin chào!" },
          { speaker: "Lan", de: "Guten Tag. Ich möchte gerne einen Termin machen.", vi: "Xin chào. Tôi muốn đặt lịch hẹn." },
          { speaker: "Sprechstundenhilfe", de: "Was für Beschwerden haben Sie?", vi: "Bạn có triệu chứng gì?" },
          { speaker: "Lan", de: "Ich habe seit drei Tagen Halsschmerzen und Fieber.", vi: "Tôi bị đau họng và sốt ba ngày rồi." },
          { speaker: "Sprechstundenhilfe", de: "Können Sie morgen um 10 Uhr kommen?", vi: "Bạn có thể đến lúc 10 giờ ngày mai không?" },
          { speaker: "Lan", de: "Ja, das passt. Vielen Dank!", vi: "Vâng, được ạ. Cảm ơn nhiều!" },
          { speaker: "Sprechstundenhilfe", de: "Bitte bringen Sie Ihre Versichertenkarte mit.", vi: "Xin hãy mang theo thẻ bảo hiểm y tế." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Beim Arzt",
        titleVi: "Tại phòng khám bác sĩ",
        lines: [
          { speaker: "Arzt", de: "Guten Tag, Frau Nguyen. Was fehlt Ihnen?", vi: "Xin chào, chị Nguyễn. Chị bị sao ạ?" },
          { speaker: "Lan", de: "Guten Tag, Herr Doktor. Mir tut der Hals sehr weh. Und ich habe Fieber.", vi: "Xin chào, bác sĩ. Tôi bị đau họng rất nhiều. Và tôi bị sốt." },
          { speaker: "Arzt", de: "Seit wann haben Sie die Beschwerden?", vi: "Bạn có triệu chứng từ khi nào?" },
          { speaker: "Lan", de: "Seit drei Tagen. Ich habe auch Husten und Schnupfen.", vi: "Từ ba ngày nay. Tôi cũng bị ho và sổ mũi." },
          { speaker: "Arzt", de: "Machen Sie bitte den Mund auf. ... Sie haben eine Erkältung. Ich schreibe Ihnen ein Rezept.", vi: "Hãy mở miệng ra. ... Bạn bị cảm lạnh. Tôi sẽ kê đơn thuốc cho bạn." },
          { speaker: "Lan", de: "Muss ich zu Hause bleiben?", vi: "Tôi có phải ở nhà không?" },
          { speaker: "Arzt", de: "Ja, ich schreibe Sie drei Tage krank. Trinken Sie viel Tee und ruhen Sie sich aus.", vi: "Vâng, tôi cho bạn nghỉ bệnh ba ngày. Hãy uống nhiều trà và nghỉ ngơi." },
          { speaker: "Lan", de: "Danke, Herr Doktor.", vi: "Cảm ơn bác sĩ." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "In der Apotheke",
        titleVi: "Ở hiệu thuốc",
        lines: [
          { speaker: "Apotheker", de: "Guten Tag! Kann ich Ihnen helfen?", vi: "Xin chào! Tôi có thể giúp gì cho bạn?" },
          { speaker: "Lan", de: "Guten Tag. Ich habe ein Rezept vom Arzt.", vi: "Xin chào. Tôi có đơn thuốc từ bác sĩ." },
          { speaker: "Apotheker", de: "Moment bitte. ... So, hier sind Ihre Medikamente: Halstabletten und Nasentropfen.", vi: "Xin chờ một chút. ... Đây, đây là thuốc của bạn: thuốc viên trị đau họng và thuốc nhỏ mũi." },
          { speaker: "Lan", de: "Wie oft muss ich die Tabletten nehmen?", vi: "Tôi phải uống thuốc viên bao nhiêu lần?" },
          { speaker: "Apotheker", de: "Dreimal am Tag, nach dem Essen. Die Nasentropfen: morgens und abends.", vi: "Ba lần một ngày, sau bữa ăn. Thuốc nhỏ mũi: sáng và tối." },
          { speaker: "Lan", de: "Alles klar. Was muss ich bezahlen?", vi: "Tôi hiểu rồi. Tôi phải trả bao nhiêu?" },
          { speaker: "Apotheker", de: "Fünf Euro Zuzahlung, bitte.", vi: "Năm Euro phần đồng chi trả, xin mời." }
        ]
      },
      {
        type: "practice",
        titleDe: "Rollenspiel: Beim Arzt",
        titleVi: "Đóng vai: Đi khám bác sĩ",
        instruction: "Spiele eine Situation beim Arzt. Du hast seit zwei Tagen Kopfschmerzen und Bauchschmerzen. Beschreibe dem Arzt deine Symptome. Benutze: Mir tut ... weh. Ich habe ... Seit ... Tagen.",
        instructionVi: "Hãy đóng vai tình huống đi khám bác sĩ. Bạn bị đau đầu và đau bụng hai ngày rồi. Mô tả triệu chứng cho bác sĩ. Sử dụng: Mir tut ... weh. Ich habe ... Seit ... Tagen."
      }
    ]
  },

  // --- Chapter 7, Lesson 4: Krankschreibung ---
  {
    id: "a1-ch7-l4",
    chapterId: 7,
    lessonNumber: 4,
    title: "Krankschreibung",
    titleVi: "Giấy nghỉ bệnh",
    type: "Integration",
    objectives: [
      "Gọi điện xin nghỉ bệnh tại nơi làm việc hoặc trường học",
      "Hiểu đơn thuốc và hướng dẫn sử dụng thuốc",
      "Nắm kiến thức cơ bản về bảo hiểm y tế ở Đức"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Krankmeldung in Deutschland",
        titleVi: "Xin nghỉ bệnh ở Đức",
        textDe: "Wenn man krank ist, muss man seinen Arbeitgeber oder die Schule so früh wie möglich informieren. Man ruft morgens an und sagt, dass man krank ist. Wenn man mehr als drei Tage krank ist, braucht man eine Krankschreibung (AU — Arbeitsunfähigkeitsbescheinigung) vom Arzt. Die Krankenkasse bezahlt die Arztkosten.",
        textVi: "Khi bị bệnh, bạn phải thông báo cho nơi làm việc hoặc trường học càng sớm càng tốt. Bạn gọi điện vào buổi sáng và nói rằng bạn bị bệnh. Nếu bạn bệnh hơn ba ngày, bạn cần giấy nghỉ bệnh (AU — Arbeitsunfähigkeitsbescheinigung) từ bác sĩ. Bảo hiểm y tế sẽ chi trả chi phí khám bệnh."
      },
      {
        type: "vocabulary",
        titleDe: "Krankmeldung und Versicherung",
        titleVi: "Nghỉ bệnh và bảo hiểm",
        words: [
          { de: "Krankmeldung", vi: "thông báo nghỉ bệnh", article: "die" },
          { de: "Krankschreibung", vi: "giấy nghỉ bệnh (từ bác sĩ)", article: "die" },
          { de: "Arbeitsunfähigkeitsbescheinigung (AU)", vi: "giấy chứng nhận không có khả năng lao động", article: "die" },
          { de: "Krankenversicherung", vi: "bảo hiểm y tế", article: "die" },
          { de: "Krankenkasse", vi: "quỹ bảo hiểm y tế", article: "die" },
          { de: "Gesundheitskarte", vi: "thẻ sức khỏe", article: "die" },
          { de: "Zuzahlung", vi: "phần đồng chi trả", article: "die" },
          { de: "Beipackzettel", vi: "tờ hướng dẫn sử dụng thuốc", article: "der" },
          { de: "Nebenwirkung", vi: "tác dụng phụ", article: "die" },
          { de: "Dosierung", vi: "liều lượng", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Krankmeldung bei der Arbeit",
        titleVi: "Gọi điện xin nghỉ bệnh",
        lines: [
          { speaker: "Sekretärin", de: "Firma Schmidt, guten Morgen!", vi: "Công ty Schmidt, chào buổi sáng!" },
          { speaker: "Minh", de: "Guten Morgen. Hier ist Minh Nguyen. Ich bin heute leider krank und kann nicht zur Arbeit kommen.", vi: "Chào buổi sáng. Đây là Minh Nguyễn. Hôm nay tôi bị bệnh nên không thể đi làm được." },
          { speaker: "Sekretärin", de: "Oh, das tut mir leid. Was haben Sie denn?", vi: "Ôi, tôi rất tiếc. Bạn bị sao vậy?" },
          { speaker: "Minh", de: "Ich habe Fieber und starke Kopfschmerzen. Ich war gestern beim Arzt.", vi: "Tôi bị sốt và đau đầu dữ dội. Hôm qua tôi đã đi khám bác sĩ." },
          { speaker: "Sekretärin", de: "Haben Sie eine Krankschreibung?", vi: "Bạn có giấy nghỉ bệnh không?" },
          { speaker: "Minh", de: "Ja, der Arzt hat mich bis Freitag krankgeschrieben.", vi: "Vâng, bác sĩ đã cho tôi nghỉ bệnh đến thứ Sáu." },
          { speaker: "Sekretärin", de: "Bitte schicken Sie die Krankschreibung per Post oder geben Sie sie am Montag ab.", vi: "Xin hãy gửi giấy nghỉ bệnh qua bưu điện hoặc nộp vào thứ Hai." },
          { speaker: "Minh", de: "Mache ich. Danke und auf Wiederhören!", vi: "Tôi sẽ làm. Cảm ơn và tạm biệt!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nützliche Sätze für die Krankmeldung",
        titleVi: "Các câu hữu ích khi xin nghỉ bệnh",
        rule: "Wichtige Redemittel: Ich bin krank. / Ich kann heute nicht kommen. / Ich war beim Arzt. / Der Arzt hat mich ... Tage krankgeschrieben. / Ich habe eine Krankschreibung. / Ich komme am [Tag] wieder.",
        ruleVi: "Các mẫu câu quan trọng: Ich bin krank. (Tôi bị bệnh.) / Ich kann heute nicht kommen. (Hôm nay tôi không thể đến.) / Ich war beim Arzt. (Tôi đã đi khám bác sĩ.) / Der Arzt hat mich ... Tage krankgeschrieben. (Bác sĩ cho tôi nghỉ bệnh ... ngày.) / Ich habe eine Krankschreibung. (Tôi có giấy nghỉ bệnh.) / Ich komme am [Tag] wieder. (Tôi sẽ quay lại vào [ngày].)",
        examples: [
          { de: "Ich bin krank und kann heute nicht zur Arbeit kommen.", vi: "Tôi bị bệnh và hôm nay không thể đi làm." },
          { de: "Ich war gestern beim Arzt.", vi: "Hôm qua tôi đã đi khám bác sĩ." },
          { de: "Der Arzt hat mich drei Tage krankgeschrieben.", vi: "Bác sĩ cho tôi nghỉ bệnh ba ngày." },
          { de: "Ich komme am Montag wieder.", vi: "Thứ Hai tôi sẽ quay lại." }
        ]
      },
      {
        type: "explanation",
        titleDe: "Krankenversicherung in Deutschland",
        titleVi: "Bảo hiểm y tế ở Đức",
        textDe: "In Deutschland muss jeder Mensch eine Krankenversicherung haben. Es gibt die gesetzliche Krankenversicherung (GKV) und die private Krankenversicherung (PKV). Die meisten Menschen haben eine gesetzliche Krankenversicherung, zum Beispiel bei der AOK, TK oder Barmer. Man bezahlt jeden Monat einen Beitrag. Der Arbeitgeber bezahlt die Hälfte. Beim Arzt zeigt man die Gesundheitskarte. Für Medikamente bezahlt man manchmal eine Zuzahlung von 5 bis 10 Euro.",
        textVi: "Ở Đức, mọi người đều phải có bảo hiểm y tế. Có bảo hiểm y tế theo luật định (GKV) và bảo hiểm y tế tư nhân (PKV). Hầu hết mọi người có bảo hiểm theo luật định, ví dụ tại AOK, TK hoặc Barmer. Bạn đóng phí hàng tháng. Người sử dụng lao động trả một nửa. Khi đi khám bác sĩ, bạn xuất trình thẻ sức khỏe. Đối với thuốc, đôi khi bạn phải đồng chi trả từ 5 đến 10 Euro."
      },
      {
        type: "practice",
        titleDe: "Krankmeldung schreiben",
        titleVi: "Viết thông báo nghỉ bệnh",
        instruction: "Du bist krank: Du hast Fieber (38,5°C), Husten und Schnupfen. Schreibe: 1) Einen kurzen Anruf bei der Arbeit (3-4 Sätze). 2) Was hat der Arzt gesagt? (2-3 Sätze im Perfekt). Benutze die Redemittel aus der Lektion.",
        instructionVi: "Bạn bị bệnh: Bạn sốt (38,5°C), ho và sổ mũi. Viết: 1) Một cuộc gọi ngắn đến nơi làm việc (3-4 câu). 2) Bác sĩ đã nói gì? (2-3 câu ở thì Perfekt). Sử dụng các mẫu câu từ bài học."
      }
    ]
  },

  // ============================================================
  // CHAPTER 8: Stadt & Verkehr
  // ============================================================

  // --- Chapter 8, Lesson 1: In der Stadt ---
  {
    id: "a1-ch8-l1",
    chapterId: 8,
    lessonNumber: 1,
    title: "In der Stadt",
    titleVi: "Trong thành phố",
    type: "Einführung",
    objectives: [
      "Nắm từ vựng về các địa điểm trong thành phố",
      "Hỏi đường: 'Wo ist...?' và 'Wie komme ich zum/zur...?'",
      "Hiểu các chỉ dẫn phương hướng cơ bản"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Die Stadt",
        titleVi: "Thành phố",
        textDe: "In einer deutschen Stadt gibt es viele wichtige Orte: den Bahnhof, das Rathaus, die Post, die Bibliothek, das Krankenhaus, den Supermarkt und viele mehr. Wenn man neu in einer Stadt ist, muss man nach dem Weg fragen können. Die Deutschen sind meistens hilfsbereit und erklären gerne den Weg.",
        textVi: "Trong một thành phố ở Đức có nhiều địa điểm quan trọng: nhà ga, tòa thị chính, bưu điện, thư viện, bệnh viện, siêu thị và nhiều nơi khác. Khi mới đến một thành phố, bạn cần biết cách hỏi đường. Người Đức thường rất sẵn lòng giúp đỡ và thích chỉ đường."
      },
      {
        type: "vocabulary",
        titleDe: "Orte in der Stadt",
        titleVi: "Các địa điểm trong thành phố",
        words: [
          { de: "Bahnhof", vi: "nhà ga", article: "der" },
          { de: "Haltestelle", vi: "trạm (xe buýt/tàu điện)", article: "die" },
          { de: "Rathaus", vi: "tòa thị chính", article: "das" },
          { de: "Post", vi: "bưu điện", article: "die" },
          { de: "Bank", vi: "ngân hàng", article: "die" },
          { de: "Supermarkt", vi: "siêu thị", article: "der" },
          { de: "Bäckerei", vi: "tiệm bánh mì", article: "die" },
          { de: "Apotheke", vi: "hiệu thuốc", article: "die" },
          { de: "Krankenhaus", vi: "bệnh viện", article: "das" },
          { de: "Bibliothek", vi: "thư viện", article: "die" },
          { de: "Museum", vi: "bảo tàng", article: "das" },
          { de: "Kirche", vi: "nhà thờ", article: "die" },
          { de: "Park", vi: "công viên", article: "der" },
          { de: "Marktplatz", vi: "quảng trường chợ", article: "der" },
          { de: "Parkhaus", vi: "nhà để xe", article: "das" },
          { de: "Polizei", vi: "cảnh sát / đồn cảnh sát", article: "die" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Richtungen",
        titleVi: "Phương hướng",
        words: [
          { de: "links", vi: "bên trái" },
          { de: "rechts", vi: "bên phải" },
          { de: "geradeaus", vi: "đi thẳng" },
          { de: "hier", vi: "ở đây" },
          { de: "dort", vi: "ở đó" },
          { de: "gegenüber", vi: "đối diện" },
          { de: "neben", vi: "bên cạnh" },
          { de: "an der Ecke", vi: "ở góc" },
          { de: "die erste/zweite Straße", vi: "đường thứ nhất/thứ hai" },
          { de: "Kreuzung", vi: "ngã tư", article: "die" },
          { de: "Ampel", vi: "đèn giao thông", article: "die" },
          { de: "Brücke", vi: "cầu", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Wo ist...? / Wie komme ich zum/zur...?",
        titleVi: "...ở đâu? / Làm sao tôi đến...?",
        rule: "Frage: Wo ist der/die/das ...? — Frage: Wie komme ich zum [maskulin/neutrum] ...? / Wie komme ich zur [feminin] ...? — 'zum' = zu + dem (Dativ, maskulin/neutrum). 'zur' = zu + der (Dativ, feminin). Entschuldigung, wo ist hier der Bahnhof? / Entschuldigung, wie komme ich zur Post?",
        ruleVi: "Câu hỏi: Wo ist der/die/das ...? (... ở đâu?) — Câu hỏi: Wie komme ich zum [giống đực/trung] ...? / Wie komme ich zur [giống cái] ...? (Làm sao tôi đến ...?) — 'zum' = zu + dem (Dativ, giống đực/trung). 'zur' = zu + der (Dativ, giống cái). Lưu ý cho người Việt: Trong tiếng Việt chỉ cần nói 'đến' + địa điểm, nhưng tiếng Đức phải dùng giới từ đúng theo giống.",
        examples: [
          { de: "Wo ist der Bahnhof?", vi: "Nhà ga ở đâu?" },
          { de: "Wie komme ich zum Bahnhof?", vi: "Làm sao tôi đến nhà ga?" },
          { de: "Wie komme ich zur Post?", vi: "Làm sao tôi đến bưu điện?" },
          { de: "Wie komme ich zum Krankenhaus?", vi: "Làm sao tôi đến bệnh viện?" },
          { de: "Entschuldigung, wo ist hier die nächste Apotheke?", vi: "Xin lỗi, hiệu thuốc gần nhất ở đâu?" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Nach dem Weg fragen",
        titleVi: "Hỏi đường",
        lines: [
          { speaker: "Lan", de: "Entschuldigung, wie komme ich zum Rathaus?", vi: "Xin lỗi, làm sao tôi đến tòa thị chính?" },
          { speaker: "Passant", de: "Gehen Sie hier geradeaus, dann die zweite Straße links.", vi: "Bạn đi thẳng ở đây, rồi rẽ trái ở đường thứ hai." },
          { speaker: "Lan", de: "Geradeaus und dann die zweite links?", vi: "Đi thẳng rồi rẽ trái ở đường thứ hai?" },
          { speaker: "Passant", de: "Genau. Dann sehen Sie das Rathaus auf der rechten Seite. Es ist gegenüber vom Park.", vi: "Đúng vậy. Sau đó bạn sẽ thấy tòa thị chính ở bên phải. Nó đối diện công viên." },
          { speaker: "Lan", de: "Ist es weit von hier?", vi: "Có xa từ đây không?" },
          { speaker: "Passant", de: "Nein, nur fünf Minuten zu Fuß.", vi: "Không, chỉ năm phút đi bộ." },
          { speaker: "Lan", de: "Vielen Dank!", vi: "Cảm ơn nhiều!" }
        ]
      },
      {
        type: "practice",
        titleDe: "Beschreibe den Weg",
        titleVi: "Mô tả đường đi",
        instruction: "Beschreibe den Weg von deiner Wohnung zum Supermarkt. Benutze: geradeaus gehen, links/rechts abbiegen, die erste/zweite Straße, an der Ampel, gegenüber von...",
        instructionVi: "Mô tả đường đi từ nhà bạn đến siêu thị. Sử dụng: geradeaus gehen (đi thẳng), links/rechts abbiegen (rẽ trái/phải), die erste/zweite Straße (đường thứ nhất/nhì), an der Ampel (ở đèn giao thông), gegenüber von... (đối diện...)."
      }
    ]
  },

  // --- Chapter 8, Lesson 2: Imperativ ---
  {
    id: "a1-ch8-l2",
    chapterId: 8,
    lessonNumber: 2,
    title: "Imperativ",
    titleVi: "Câu mệnh lệnh (Imperativ)",
    type: "Grammatik",
    objectives: [
      "Hiểu và sử dụng câu mệnh lệnh ở dạng du, ihr, và Sie",
      "Dùng Imperativ để chỉ đường",
      "Phân biệt Imperativ của động từ có quy tắc và bất quy tắc"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Der Imperativ",
        titleVi: "Câu mệnh lệnh (Imperativ)",
        textDe: "Den Imperativ benutzen wir, um Bitten, Aufforderungen oder Anweisungen zu geben. Es gibt drei Formen: du-Form (informell, eine Person), ihr-Form (informell, mehrere Personen) und Sie-Form (formell). Den Imperativ brauchen wir oft, wenn wir jemandem den Weg erklären.",
        textVi: "Chúng ta dùng Imperativ để đưa ra yêu cầu, lời đề nghị hoặc hướng dẫn. Có ba dạng: du-Form (thân mật, một người), ihr-Form (thân mật, nhiều người) và Sie-Form (trang trọng). Chúng ta thường cần Imperativ khi chỉ đường cho ai. Lưu ý: Tiếng Việt dùng 'hãy' để ra lệnh, tiếng Đức thì phải chia động từ theo dạng Imperativ."
      },
      {
        type: "grammar",
        titleDe: "Imperativ — regelmäßige Verben",
        titleVi: "Imperativ — động từ có quy tắc",
        rule: "du-Form: Stamm (+ e). Beispiel: gehen → Geh! / machen → Mach! / warten → Warte! ihr-Form: Stamm + t. Beispiel: gehen → Geht! / machen → Macht! Sie-Form: Infinitiv + Sie. Beispiel: gehen → Gehen Sie! / machen → Machen Sie! Trennbare Verben: Präfix geht ans Ende. abbiegen → Bieg(e) ab! / Biegt ab! / Biegen Sie ab!",
        ruleVi: "du-Form: gốc từ (+ e). Ví dụ: gehen → Geh! / machen → Mach! / warten → Warte! ihr-Form: gốc từ + t. Ví dụ: gehen → Geht! / machen → Macht! Sie-Form: nguyên thể + Sie. Ví dụ: gehen → Gehen Sie! / machen → Machen Sie! Động từ tách được: tiền tố đi về cuối câu. abbiegen → Bieg(e) ab! / Biegt ab! / Biegen Sie ab!",
        examples: [
          { de: "Geh geradeaus! (du)", vi: "Đi thẳng! (bạn)" },
          { de: "Geht nach links! (ihr)", vi: "Đi sang trái! (các bạn)" },
          { de: "Gehen Sie nach rechts! (Sie)", vi: "Xin hãy đi sang phải! (quý vị)" },
          { de: "Warte hier! (du)", vi: "Chờ ở đây! (bạn)" },
          { de: "Biegen Sie an der Ampel ab! (Sie)", vi: "Xin hãy rẽ ở đèn giao thông! (quý vị)" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Imperativ — unregelmäßige Verben",
        titleVi: "Imperativ — động từ bất quy tắc",
        rule: "Verben mit e→i/ie Wechsel behalten diese Änderung im du-Imperativ: nehmen → Nimm! / lesen → Lies! / sprechen → Sprich! / geben → Gib! / sehen → Sieh! ABER: Verben mit a→ä haben KEINEN Umlaut im Imperativ: fahren → Fahr! (nicht: Fähr!). Sonderformen: sein → Sei! / Seid! / Seien Sie! haben → Hab! / Habt! / Haben Sie!",
        ruleVi: "Động từ với biến âm e→i/ie giữ nguyên thay đổi này ở du-Imperativ: nehmen → Nimm! / lesen → Lies! / sprechen → Sprich! / geben → Gib! / sehen → Sieh! NHƯNG: Động từ với biến âm a→ä KHÔNG có Umlaut ở Imperativ: fahren → Fahr! (không phải: Fähr!). Dạng đặc biệt: sein → Sei! / Seid! / Seien Sie! haben → Hab! / Habt! / Haben Sie!",
        examples: [
          { de: "Nimm die erste Straße links! (du)", vi: "Rẽ vào đường đầu tiên bên trái! (bạn)" },
          { de: "Lies die Straßenschilder! (du)", vi: "Đọc các biển đường! (bạn)" },
          { de: "Fahr langsam! (du)", vi: "Lái chậm thôi! (bạn)" },
          { de: "Sei vorsichtig! (du)", vi: "Cẩn thận nhé! (bạn)" },
          { de: "Gib mir bitte die Karte! (du)", vi: "Cho tôi bản đồ nhé! (bạn)" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Wegbeschreibung mit dem Imperativ",
        titleVi: "Chỉ đường bằng Imperativ",
        lines: [
          { speaker: "Minh", de: "Entschuldigung, wie komme ich zur Bibliothek?", vi: "Xin lỗi, làm sao tôi đến thư viện?" },
          { speaker: "Frau Meier", de: "Gehen Sie hier geradeaus bis zur Ampel.", vi: "Đi thẳng ở đây đến đèn giao thông." },
          { speaker: "Minh", de: "Und dann?", vi: "Rồi sau đó?" },
          { speaker: "Frau Meier", de: "Biegen Sie an der Ampel rechts ab. Dann gehen Sie über die Brücke.", vi: "Rẽ phải ở đèn giao thông. Sau đó đi qua cầu." },
          { speaker: "Minh", de: "Rechts abbiegen und über die Brücke...", vi: "Rẽ phải và qua cầu..." },
          { speaker: "Frau Meier", de: "Genau. Nehmen Sie dann die zweite Straße links. Die Bibliothek ist auf der linken Seite, neben der Kirche.", vi: "Đúng rồi. Sau đó rẽ vào đường thứ hai bên trái. Thư viện ở bên trái, cạnh nhà thờ." },
          { speaker: "Minh", de: "Vielen Dank, Frau Meier!", vi: "Cảm ơn nhiều, bà Meier!" },
          { speaker: "Frau Meier", de: "Gern geschehen! Und passen Sie auf den Verkehr auf!", vi: "Không có gì! Và hãy cẩn thận giao thông nhé!" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Imperativ im Alltag",
        titleVi: "Imperativ trong đời sống hàng ngày",
        lines: [
          { speaker: "Mutter", de: "Minh, steh auf! Es ist schon 7 Uhr!", vi: "Minh, dậy đi! 7 giờ rồi!" },
          { speaker: "Minh", de: "Noch fünf Minuten...", vi: "Cho con thêm năm phút..." },
          { speaker: "Mutter", de: "Nein! Steh jetzt auf und mach dich fertig! Vergiss nicht deine Tasche!", vi: "Không! Dậy ngay và chuẩn bị đi! Đừng quên cặp sách!" },
          { speaker: "Minh", de: "Ja, ja, ich komme schon...", vi: "Vâng, vâng, con đi đây..." },
          { speaker: "Mutter", de: "Und iss bitte dein Frühstück!", vi: "Và ăn sáng nha con!" }
        ]
      },
      {
        type: "practice",
        titleDe: "Gib Anweisungen!",
        titleVi: "Hãy đưa ra hướng dẫn!",
        instruction: "Erkläre den Weg von der Schule zum Bahnhof. Benutze den Imperativ (Sie-Form): Gehen Sie..., Biegen Sie ... ab, Nehmen Sie..., Überqueren Sie... Schreibe mindestens 5 Sätze.",
        instructionVi: "Chỉ đường từ trường đến nhà ga. Sử dụng Imperativ (dạng Sie): Gehen Sie..., Biegen Sie ... ab, Nehmen Sie..., Überqueren Sie... Viết ít nhất 5 câu."
      }
    ]
  },

  // --- Chapter 8, Lesson 3: Öffentliche Verkehrsmittel ---
  {
    id: "a1-ch8-l3",
    chapterId: 8,
    lessonNumber: 3,
    title: "Öffentliche Verkehrsmittel",
    titleVi: "Phương tiện giao thông công cộng",
    type: "Fertigkeit",
    objectives: [
      "Mua vé tàu/xe buýt tại Đức",
      "Đọc lịch trình và hiểu thông báo trên tàu/xe buýt",
      "Sử dụng phương tiện giao thông công cộng một cách tự tin"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Öffentliche Verkehrsmittel in Deutschland",
        titleVi: "Giao thông công cộng ở Đức",
        textDe: "In Deutschland gibt es viele öffentliche Verkehrsmittel: den Bus, die Straßenbahn (Tram), die U-Bahn (Untergrundbahn), die S-Bahn (Stadtschnellbahn) und den Zug. Man kauft Fahrkarten am Automaten, im Internet oder in der App. Es gibt Einzelfahrkarten, Tageskarten und Monatskarten. Wichtig: Man muss die Fahrkarte vor der Fahrt entwerten (stempeln)! In vielen Städten gibt es das Deutschlandticket für 49 Euro pro Monat.",
        textVi: "Ở Đức có nhiều phương tiện giao thông công cộng: xe buýt, tàu điện (Tram), tàu điện ngầm (U-Bahn), tàu ngoại ô (S-Bahn) và tàu hỏa. Bạn mua vé tại máy bán vé tự động, trên internet hoặc trong ứng dụng. Có vé lẻ (Einzelfahrkarte), vé ngày (Tageskarte) và vé tháng (Monatskarte). Quan trọng: Bạn phải đóng dấu vé trước khi đi! Ở nhiều thành phố có Deutschlandticket giá 49 Euro/tháng."
      },
      {
        type: "vocabulary",
        titleDe: "Verkehrsmittel und Fahrkarten",
        titleVi: "Phương tiện giao thông và vé",
        words: [
          { de: "Bus", vi: "xe buýt", article: "der" },
          { de: "Straßenbahn / Tram", vi: "tàu điện", article: "die" },
          { de: "U-Bahn", vi: "tàu điện ngầm", article: "die" },
          { de: "S-Bahn", vi: "tàu ngoại ô", article: "die" },
          { de: "Zug", vi: "tàu hỏa", article: "der" },
          { de: "Fahrrad", vi: "xe đạp", article: "das" },
          { de: "Fahrkarte", vi: "vé xe", article: "die" },
          { de: "Einzelfahrkarte", vi: "vé lẻ (một lượt)", article: "die" },
          { de: "Tageskarte", vi: "vé ngày", article: "die" },
          { de: "Monatskarte", vi: "vé tháng", article: "die" },
          { de: "Fahrplan", vi: "lịch trình", article: "der" },
          { de: "Fahrkartenautomat", vi: "máy bán vé tự động", article: "der" },
          { de: "Gleis", vi: "đường ray / sân ga", article: "das" },
          { de: "Umsteigen", vi: "chuyển tàu/xe" },
          { de: "Abfahrt", vi: "khởi hành", article: "die" },
          { de: "Ankunft", vi: "đến nơi", article: "die" },
          { de: "Verspätung", vi: "trễ / chậm trễ", article: "die" },
          { de: "Endhaltestelle", vi: "trạm cuối cùng", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Am Fahrkartenschalter",
        titleVi: "Tại quầy bán vé",
        lines: [
          { speaker: "Lan", de: "Guten Tag. Ich möchte eine Fahrkarte nach München, bitte.", vi: "Xin chào. Tôi muốn mua một vé đi München." },
          { speaker: "Angestellter", de: "Einfach oder hin und zurück?", vi: "Một chiều hay khứ hồi?" },
          { speaker: "Lan", de: "Hin und zurück, bitte. Für morgen.", vi: "Khứ hồi, xin mời. Cho ngày mai." },
          { speaker: "Angestellter", de: "Zweite Klasse?", vi: "Hạng hai?" },
          { speaker: "Lan", de: "Ja, zweite Klasse. Was kostet das?", vi: "Vâng, hạng hai. Giá bao nhiêu?" },
          { speaker: "Angestellter", de: "Das macht 89 Euro. Der Zug fährt um 8:45 Uhr ab Gleis 3.", vi: "89 Euro. Tàu khởi hành lúc 8 giờ 45 từ sân ga 3." },
          { speaker: "Lan", de: "Muss ich umsteigen?", vi: "Tôi có phải chuyển tàu không?" },
          { speaker: "Angestellter", de: "Nein, das ist eine Direktverbindung. Ankunft in München um 13:20 Uhr.", vi: "Không, đây là chuyến trực tiếp. Đến München lúc 13 giờ 20." },
          { speaker: "Lan", de: "Super, danke!", vi: "Tuyệt, cảm ơn!" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Im Bus",
        titleVi: "Trên xe buýt",
        lines: [
          { speaker: "Minh", de: "Entschuldigung, fährt dieser Bus zum Hauptbahnhof?", vi: "Xin lỗi, xe buýt này có đi đến ga chính không?" },
          { speaker: "Fahrer", de: "Nein, Sie müssen die Linie 5 nehmen. Steigen Sie an der nächsten Haltestelle um.", vi: "Không, bạn phải đi tuyến 5. Bạn chuyển xe ở trạm tiếp theo." },
          { speaker: "Minh", de: "An der nächsten Haltestelle? Und wie viele Haltestellen sind es dann noch?", vi: "Ở trạm tiếp theo? Và sau đó còn bao nhiêu trạm nữa?" },
          { speaker: "Fahrer", de: "Drei Haltestellen. In etwa zehn Minuten sind Sie da.", vi: "Ba trạm. Khoảng mười phút bạn sẽ đến." },
          { speaker: "Minh", de: "Danke schön!", vi: "Cảm ơn!" },
          { speaker: "Ansage", de: "Nächste Haltestelle: Marktplatz. Bitte aussteigen für Linie 5 Richtung Hauptbahnhof.", vi: "Trạm tiếp theo: Marktplatz. Xin xuống để chuyển tuyến 5 hướng ga chính." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nützliche Sätze für den Nahverkehr",
        titleVi: "Các câu hữu ích khi đi phương tiện công cộng",
        rule: "Wichtige Redemittel: Fährt dieser Bus/Zug nach...? / Wo muss ich umsteigen? / Welche Linie fährt zum/zur...? / Wann fährt der nächste Bus/Zug? / Wie viele Haltestellen sind es bis...? / Eine Einzelfahrkarte / Tageskarte, bitte.",
        ruleVi: "Các mẫu câu quan trọng: Fährt dieser Bus/Zug nach...? (Xe buýt/tàu này có đi đến... không?) / Wo muss ich umsteigen? (Tôi phải chuyển xe ở đâu?) / Welche Linie fährt zum/zur...? (Tuyến nào đi đến...?) / Wann fährt der nächste Bus/Zug? (Khi nào có chuyến xe buýt/tàu tiếp theo?) / Wie viele Haltestellen sind es bis...? (Còn bao nhiêu trạm nữa đến...?) / Eine Einzelfahrkarte / Tageskarte, bitte. (Cho tôi một vé lẻ / vé ngày.)",
        examples: [
          { de: "Fährt dieser Bus zum Krankenhaus?", vi: "Xe buýt này có đi đến bệnh viện không?" },
          { de: "Wo muss ich umsteigen?", vi: "Tôi phải chuyển xe ở đâu?" },
          { de: "Wann fährt der nächste Zug nach Berlin?", vi: "Khi nào có chuyến tàu tiếp theo đi Berlin?" },
          { de: "Zwei Einzelfahrkarten, bitte.", vi: "Cho tôi hai vé lẻ." },
          { de: "Der Zug hat 10 Minuten Verspätung.", vi: "Tàu bị trễ 10 phút." }
        ]
      },
      {
        type: "practice",
        titleDe: "Am Fahrkartenautomat",
        titleVi: "Tại máy bán vé tự động",
        instruction: "Du bist am Bahnhof und möchtest nach Hamburg fahren. Schreibe einen Dialog am Schalter: Frage nach dem Preis, der Abfahrtszeit, dem Gleis und ob du umsteigen musst. Benutze die Redemittel aus der Lektion.",
        instructionVi: "Bạn đang ở nhà ga và muốn đi Hamburg. Viết một đoạn hội thoại tại quầy: Hỏi về giá, giờ khởi hành, sân ga và có phải chuyển tàu không. Sử dụng các mẫu câu từ bài học."
      }
    ]
  },

  // --- Chapter 8, Lesson 4: Stadtplan lesen ---
  {
    id: "a1-ch8-l4",
    chapterId: 8,
    lessonNumber: 4,
    title: "Stadtplan lesen",
    titleVi: "Đọc bản đồ thành phố",
    type: "Integration",
    objectives: [
      "Đọc và hiểu bản đồ thành phố bằng tiếng Đức",
      "Mô tả đường đi chi tiết dùng Imperativ",
      "Kết hợp kiến thức chỉ đường, phương tiện giao thông và địa điểm"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Einen Stadtplan lesen",
        titleVi: "Đọc bản đồ thành phố",
        textDe: "Einen Stadtplan zu lesen ist sehr nützlich, wenn man in einer neuen Stadt ist. Man kann den Stadtplan im Internet finden (zum Beispiel Google Maps) oder einen Papierplan am Bahnhof oder bei der Touristeninformation bekommen. Auf dem Stadtplan sieht man Straßen, Plätze, Gebäude und Haltestellen. Man kann den Weg planen und die Entfernung einschätzen.",
        textVi: "Đọc bản đồ thành phố rất hữu ích khi bạn ở một thành phố mới. Bạn có thể tìm bản đồ trên internet (ví dụ Google Maps) hoặc lấy bản đồ giấy tại nhà ga hoặc trung tâm thông tin du lịch. Trên bản đồ, bạn thấy các đường phố, quảng trường, tòa nhà và trạm xe. Bạn có thể lên kế hoạch đường đi và ước tính khoảng cách."
      },
      {
        type: "vocabulary",
        titleDe: "Orientierung auf dem Stadtplan",
        titleVi: "Định hướng trên bản đồ",
        words: [
          { de: "Stadtplan", vi: "bản đồ thành phố", article: "der" },
          { de: "Straße", vi: "đường phố", article: "die" },
          { de: "Platz", vi: "quảng trường", article: "der" },
          { de: "Weg", vi: "đường đi", article: "der" },
          { de: "Gebäude", vi: "tòa nhà", article: "das" },
          { de: "Eingang", vi: "lối vào", article: "der" },
          { de: "Ausgang", vi: "lối ra", article: "der" },
          { de: "Fußgängerzone", vi: "khu phố đi bộ", article: "die" },
          { de: "Einbahnstraße", vi: "đường một chiều", article: "die" },
          { de: "Zebrastreifen", vi: "vạch sang đường", article: "der" },
          { de: "Entfernung", vi: "khoảng cách", article: "die" },
          { de: "Touristeninformation", vi: "trung tâm thông tin du lịch", article: "die" },
          { de: "zu Fuß", vi: "đi bộ" },
          { de: "mit dem Bus/Zug", vi: "bằng xe buýt/tàu" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Bei der Touristeninformation",
        titleVi: "Tại trung tâm thông tin du lịch",
        lines: [
          { speaker: "Lan", de: "Guten Tag! Ich bin zum ersten Mal in dieser Stadt. Können Sie mir helfen?", vi: "Xin chào! Tôi đến thành phố này lần đầu tiên. Bạn có thể giúp tôi không?" },
          { speaker: "Angestellte", de: "Natürlich! Hier ist ein Stadtplan. Was möchten Sie sehen?", vi: "Tất nhiên! Đây là bản đồ thành phố. Bạn muốn xem gì?" },
          { speaker: "Lan", de: "Ich möchte zum Museum und zum Marktplatz. Wie komme ich dorthin?", vi: "Tôi muốn đến bảo tàng và quảng trường chợ. Làm sao tôi đến đó?" },
          { speaker: "Angestellte", de: "Schauen Sie hier auf den Plan. Wir sind hier, am Bahnhof. Gehen Sie geradeaus die Bahnhofstraße entlang.", vi: "Xem trên bản đồ nè. Chúng ta ở đây, tại nhà ga. Đi thẳng dọc theo đường Bahnhofstraße." },
          { speaker: "Lan", de: "Die Bahnhofstraße entlang, okay.", vi: "Dọc theo Bahnhofstraße, được rồi." },
          { speaker: "Angestellte", de: "An der großen Kreuzung biegen Sie links ab in die Schillerstraße. Nach 200 Metern sehen Sie das Museum rechts.", vi: "Ở ngã tư lớn, rẽ trái vào Schillerstraße. Sau 200 mét bạn sẽ thấy bảo tàng bên phải." },
          { speaker: "Lan", de: "Und der Marktplatz?", vi: "Còn quảng trường chợ?" },
          { speaker: "Angestellte", de: "Vom Museum gehen Sie weiter geradeaus. Der Marktplatz ist am Ende der Schillerstraße. Sie können auch den Bus Linie 3 nehmen — zwei Haltestellen.", vi: "Từ bảo tàng đi tiếp thẳng. Quảng trường chợ ở cuối Schillerstraße. Bạn cũng có thể đi xe buýt tuyến 3 — hai trạm." },
          { speaker: "Lan", de: "Wie weit ist es zu Fuß?", vi: "Đi bộ bao xa?" },
          { speaker: "Angestellte", de: "Vom Bahnhof zum Museum sind es ungefähr 15 Minuten zu Fuß. Zum Marktplatz noch einmal 10 Minuten.", vi: "Từ nhà ga đến bảo tàng khoảng 15 phút đi bộ. Đến quảng trường chợ thêm 10 phút nữa." },
          { speaker: "Lan", de: "Wunderbar! Vielen Dank für Ihre Hilfe!", vi: "Tuyệt vời! Cảm ơn nhiều!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Wegbeschreibung — Zusammenfassung",
        titleVi: "Mô tả đường đi — Tổng hợp",
        rule: "Wichtige Strukturen: Gehen Sie die [Straße] entlang. (Đi dọc theo...) / Biegen Sie an der Kreuzung links/rechts ab. (Rẽ trái/phải ở ngã tư.) / Überqueren Sie die Straße. (Băng qua đường.) / Gehen Sie über die Brücke. (Đi qua cầu.) / Gehen Sie an [Dativ] vorbei. (Đi ngang qua...) / Es ist auf der linken/rechten Seite. (Nó ở bên trái/phải.) / Es ist ungefähr ... Minuten zu Fuß. (Đi bộ khoảng ... phút.)",
        ruleVi: "Các cấu trúc quan trọng khi mô tả đường đi — đây là tổng hợp tất cả mẫu câu bạn cần biết để chỉ đường và hiểu người khác chỉ đường bằng tiếng Đức. Hãy học thuộc các mẫu câu này vì chúng rất thường dùng trong đời sống hàng ngày.",
        examples: [
          { de: "Gehen Sie die Hauptstraße entlang bis zur Ampel.", vi: "Đi dọc theo đường chính đến đèn giao thông." },
          { de: "Biegen Sie an der Kreuzung rechts ab.", vi: "Rẽ phải ở ngã tư." },
          { de: "Überqueren Sie die Brücke und gehen Sie geradeaus.", vi: "Đi qua cầu và đi thẳng." },
          { de: "Gehen Sie am Park vorbei. Das Museum ist auf der linken Seite.", vi: "Đi ngang qua công viên. Bảo tàng ở bên trái." },
          { de: "Es ist ungefähr 10 Minuten zu Fuß von hier.", vi: "Từ đây đi bộ khoảng 10 phút." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Auf der Straße nach dem Weg fragen",
        titleVi: "Hỏi đường trên phố",
        lines: [
          { speaker: "Minh", de: "Entschuldigung! Ich suche die Goethestraße. Können Sie mir helfen?", vi: "Xin lỗi! Tôi đang tìm đường Goethestraße. Bạn có thể giúp tôi không?" },
          { speaker: "Passantin", de: "Die Goethestraße? Die ist nicht weit. Sehen Sie die Ampel dort?", vi: "Đường Goethestraße? Không xa đâu. Bạn thấy đèn giao thông kia không?" },
          { speaker: "Minh", de: "Ja, ich sehe sie.", vi: "Vâng, tôi thấy." },
          { speaker: "Passantin", de: "Gehen Sie bis zur Ampel und biegen Sie links ab. Dann gehen Sie am Supermarkt vorbei und nehmen Sie die erste Straße rechts. Das ist die Goethestraße.", vi: "Đi đến đèn giao thông và rẽ trái. Sau đó đi ngang qua siêu thị và rẽ vào đường đầu tiên bên phải. Đó là Goethestraße." },
          { speaker: "Minh", de: "Also: Ampel links, am Supermarkt vorbei, erste rechts?", vi: "Vậy: đèn giao thông rẽ trái, ngang qua siêu thị, đường đầu tiên rẽ phải?" },
          { speaker: "Passantin", de: "Genau! Es dauert ungefähr fünf Minuten.", vi: "Đúng rồi! Khoảng năm phút." },
          { speaker: "Minh", de: "Kann ich auch mit dem Bus fahren?", vi: "Tôi có thể đi xe buýt không?" },
          { speaker: "Passantin", de: "Ja, Sie können auch die Linie 7 nehmen. Die Haltestelle ist gleich hier. Zwei Stationen, dann sind Sie da.", vi: "Có, bạn cũng có thể đi tuyến 7. Trạm xe ở ngay đây. Hai trạm là đến." },
          { speaker: "Minh", de: "Danke vielmals! Ich gehe lieber zu Fuß, das Wetter ist schön.", vi: "Cảm ơn nhiều! Tôi thích đi bộ hơn, thời tiết đẹp." }
        ]
      },
      {
        type: "practice",
        titleDe: "Deine Stadt beschreiben",
        titleVi: "Mô tả thành phố của bạn",
        instruction: "Beschreibe den Weg von deiner Wohnung zu drei verschiedenen Orten in deiner Stadt (z.B. Supermarkt, Bahnhof, Schule). Benutze den Imperativ (Sie-Form) und die Wegbeschreibungen aus den Lektionen. Schreibe für jeden Weg mindestens 3 Sätze. Benutze auch Verkehrsmittel: Man kann auch mit dem Bus/der U-Bahn fahren.",
        instructionVi: "Mô tả đường đi từ nhà bạn đến ba địa điểm khác nhau trong thành phố (ví dụ: siêu thị, nhà ga, trường học). Sử dụng Imperativ (dạng Sie) và các mẫu mô tả đường đi từ các bài học. Viết ít nhất 3 câu cho mỗi đường đi. Cũng đề cập đến phương tiện giao thông: Man kann auch mit dem Bus/der U-Bahn fahren."
      }
    ]
  }
];
