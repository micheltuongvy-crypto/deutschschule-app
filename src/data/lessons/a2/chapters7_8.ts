// A2 Chapters 7-8: Gefühle & Beziehungen, Gesundheit & Fitness

import type { ContentBlock, Lesson } from "../a1/chapters7_8";

export const a2LessonsCh7_8: Lesson[] = [
  // ============================================================
  // CHAPTER 7: Gefühle & Beziehungen
  // ============================================================

  // --- Chapter 7, Lesson 1: Gefühle ausdrücken ---
  {
    id: "a2-ch7-l1",
    chapterId: 7,
    lessonNumber: 1,
    title: "Gefühle ausdrücken",
    titleVi: "Diễn đạt cảm xúc",
    type: "Einführung",
    objectives: [
      "Nắm được từ vựng phong phú về cảm xúc và tâm trạng",
      "Diễn đạt cảm xúc bằng nhiều cách khác nhau",
      "Hỏi và trả lời về tâm trạng một cách chi tiết",
      "Hiểu sự khác biệt văn hóa trong việc bày tỏ cảm xúc giữa Đức và Việt Nam"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Gefühle und Emotionen",
        titleVi: "Cảm xúc và tình cảm",
        textDe: "Gefühle sind ein wichtiger Teil unseres Lebens. In Deutschland spricht man offener über negative Gefühle als in vielen asiatischen Kulturen. Es ist normal zu sagen: 'Mir geht es schlecht' oder 'Ich bin traurig'. Das bedeutet nicht, dass man schwach ist — es zeigt Ehrlichkeit. Gleichzeitig sind Deutsche oft zurückhaltender bei positiven Gefühlen als zum Beispiel Amerikaner.",
        textVi: "Cảm xúc là một phần quan trọng của cuộc sống. Ở Đức, người ta nói cởi mở hơn về cảm xúc tiêu cực so với nhiều nền văn hóa châu Á. Việc nói 'Tôi không khỏe' hoặc 'Tôi buồn' là bình thường. Điều đó không có nghĩa là yếu đuối — nó thể hiện sự thành thật. Đồng thời, người Đức thường dè dặt hơn khi bày tỏ cảm xúc tích cực so với ví dụ người Mỹ. So với văn hóa Việt Nam, nơi người ta thường giấu cảm xúc để giữ hòa khí, người Đức coi trọng sự thẳng thắn."
      },
      {
        type: "vocabulary",
        titleDe: "Positive Gefühle",
        titleVi: "Cảm xúc tích cực",
        words: [
          { de: "glücklich", vi: "hạnh phúc" },
          { de: "froh", vi: "vui mừng" },
          { de: "zufrieden", vi: "hài lòng" },
          { de: "begeistert", vi: "hào hứng, phấn khích" },
          { de: "dankbar", vi: "biết ơn" },
          { de: "stolz", vi: "tự hào" },
          { de: "erleichtert", vi: "nhẹ nhõm" },
          { de: "verliebt", vi: "đang yêu" },
          { de: "optimistisch", vi: "lạc quan" },
          { de: "motiviert", vi: "có động lực" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Negative Gefühle",
        titleVi: "Cảm xúc tiêu cực",
        words: [
          { de: "traurig", vi: "buồn" },
          { de: "wütend", vi: "tức giận" },
          { de: "ängstlich", vi: "lo sợ" },
          { de: "eifersüchtig", vi: "ghen tị" },
          { de: "enttäuscht", vi: "thất vọng" },
          { de: "einsam", vi: "cô đơn" },
          { de: "gestresst", vi: "căng thẳng" },
          { de: "frustriert", vi: "bực bội" },
          { de: "nervös", vi: "hồi hộp, lo lắng" },
          { de: "überfordert", vi: "quá tải" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Gefühle ausdrücken — verschiedene Strukturen",
        titleVi: "Diễn đạt cảm xúc — các cấu trúc khác nhau",
        rule: "1) Ich bin + Adjektiv: Ich bin glücklich. 2) Ich fühle mich + Adjektiv: Ich fühle mich einsam. 3) Ich habe + Nomen: Ich habe Angst. 4) Mir ist + Adjektiv: Mir ist langweilig. 5) Es macht mich + Adjektiv: Es macht mich wütend. 6) Ich freue mich über + Akk: Ich freue mich über das Geschenk.",
        ruleVi: "1) Ich bin + tính từ: Ich bin glücklich. (Tôi hạnh phúc.) 2) Ich fühle mich + tính từ: Ich fühle mich einsam. (Tôi cảm thấy cô đơn.) — 'fühle mich' là động từ phản thân. 3) Ich habe + danh từ: Ich habe Angst. (Tôi sợ.) 4) Mir ist + tính từ: Mir ist langweilig. (Tôi thấy chán.) — 'Mir' là Dativ. 5) Es macht mich + tính từ: Es macht mich wütend. (Điều đó làm tôi tức giận.) — 'mich' là Akkusativ. 6) Ich freue mich über + Akk: Ich freue mich über das Geschenk. (Tôi vui về món quà.)",
        examples: [
          { de: "Ich bin heute sehr glücklich.", vi: "Hôm nay tôi rất hạnh phúc." },
          { de: "Ich fühle mich ein bisschen einsam.", vi: "Tôi cảm thấy hơi cô đơn." },
          { de: "Ich habe Angst vor der Prüfung.", vi: "Tôi sợ kỳ thi." },
          { de: "Mir ist langweilig.", vi: "Tôi thấy chán." },
          { de: "Das Wetter macht mich traurig.", vi: "Thời tiết làm tôi buồn." },
          { de: "Ich freue mich über deinen Besuch.", vi: "Tôi vui vì bạn đến thăm." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Wie fühlst du dich?",
        titleVi: "Bạn cảm thấy thế nào?",
        lines: [
          { speaker: "Linh", de: "Du siehst heute anders aus. Ist alles in Ordnung?", vi: "Hôm nay trông bạn khác khác. Mọi thứ ổn chứ?" },
          { speaker: "Thomas", de: "Naja, ich fühle mich ein bisschen gestresst. Die Arbeit ist gerade sehr viel.", vi: "Ừm, tôi cảm thấy hơi căng thẳng. Công việc hiện tại rất nhiều." },
          { speaker: "Linh", de: "Das verstehe ich. Ich bin auch manchmal überfordert mit dem Studium.", vi: "Tôi hiểu. Tôi cũng đôi khi quá tải với việc học." },
          { speaker: "Thomas", de: "Wirklich? Du wirkst immer so fröhlich!", vi: "Thật sao? Bạn lúc nào trông cũng vui vẻ!" },
          { speaker: "Linh", de: "Ja, in Vietnam zeigt man negative Gefühle nicht so gern. Aber hier in Deutschland lerne ich, offener zu sein.", vi: "Ừ, ở Việt Nam người ta không thích thể hiện cảm xúc tiêu cực. Nhưng ở đây ở Đức tôi đang học cách cởi mở hơn." },
          { speaker: "Thomas", de: "Das finde ich gut. Es hilft, wenn man über seine Gefühle spricht.", vi: "Tôi thấy điều đó tốt. Nó giúp ích khi người ta nói về cảm xúc của mình." }
        ]
      },
      {
        type: "practice",
        titleDe: "Meine Gefühle heute",
        titleVi: "Cảm xúc của tôi hôm nay",
        instruction: "Beschreibe, wie du dich heute fühlst und warum. Benutze mindestens 3 verschiedene Strukturen. Beispiel: Ich bin heute zufrieden, weil ich gut geschlafen habe. Ich fühle mich motiviert. Aber ich habe ein bisschen Angst vor der Deutschprüfung.",
        instructionVi: "Hãy mô tả bạn cảm thấy thế nào hôm nay và tại sao. Sử dụng ít nhất 3 cấu trúc khác nhau. Ví dụ: Ich bin heute zufrieden, weil ich gut geschlafen habe. Ich fühle mich motiviert. Aber ich habe ein bisschen Angst vor der Deutschprüfung."
      }
    ]
  },

  // --- Chapter 7, Lesson 2: Freundschaft & Liebe ---
  {
    id: "a2-ch7-l2",
    chapterId: 7,
    lessonNumber: 2,
    title: "Freundschaft & Liebe",
    titleVi: "Tình bạn và tình yêu",
    type: "Fertigkeit",
    objectives: [
      "Nắm được từ vựng về các mối quan hệ",
      "Kể về bạn bè và người thân yêu",
      "Hiểu sự khác biệt văn hóa trong các mối quan hệ ở Đức",
      "Sử dụng mệnh đề phụ với 'weil' và 'dass' để diễn đạt lý do và ý kiến"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Beziehungen in Deutschland",
        titleVi: "Các mối quan hệ ở Đức",
        textDe: "In Deutschland unterscheidet man klar zwischen Bekannten und Freunden. Man kann viele Bekannte haben, aber nur wenige enge Freunde. Eine Freundschaft in Deutschland bedeutet tiefes Vertrauen. Deutsche brauchen oft länger, um jemanden als 'Freund' zu bezeichnen. In Liebesbeziehungen ist Gleichberechtigung sehr wichtig. Partner teilen sich oft die Hausarbeit und die Kosten.",
        textVi: "Ở Đức, người ta phân biệt rõ ràng giữa người quen (Bekannte) và bạn bè (Freunde). Bạn có thể có nhiều người quen, nhưng chỉ có ít bạn thân. Tình bạn ở Đức nghĩa là sự tin tưởng sâu sắc. Người Đức thường cần thời gian lâu hơn để gọi ai đó là 'bạn'. Khác với Việt Nam, nơi mà ai cũng có thể gọi là 'bạn', ở Đức từ 'Freund' mang ý nghĩa rất đặc biệt. Trong mối quan hệ tình yêu, sự bình đẳng rất quan trọng. Các đối tác thường chia sẻ việc nhà và chi phí."
      },
      {
        type: "vocabulary",
        titleDe: "Beziehungen und Freundschaft",
        titleVi: "Các mối quan hệ và tình bạn",
        words: [
          { de: "Bekannte(r)", vi: "người quen", article: "der/die" },
          { de: "Freund(in)", vi: "bạn / bạn trai/gái", article: "der/die" },
          { de: "bester Freund / beste Freundin", vi: "bạn thân nhất" },
          { de: "Partner(in)", vi: "đối tác / bạn đời", article: "der/die" },
          { de: "Beziehung", vi: "mối quan hệ", article: "die" },
          { de: "Vertrauen", vi: "sự tin tưởng", article: "das" },
          { de: "Freundschaft", vi: "tình bạn", article: "die" },
          { de: "Liebe", vi: "tình yêu", article: "die" },
          { de: "Streit", vi: "cuộc cãi nhau", article: "der" },
          { de: "Versöhnung", vi: "sự hòa giải", article: "die" },
          { de: "Verständnis", vi: "sự thông cảm", article: "das" },
          { de: "Eifersucht", vi: "sự ghen tuông", article: "die" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Verben für Beziehungen",
        titleVi: "Động từ về các mối quan hệ",
        words: [
          { de: "sich verlieben (in + Akk)", vi: "yêu (ai đó)" },
          { de: "sich trennen (von + Dat)", vi: "chia tay (ai đó)" },
          { de: "sich vertragen (mit + Dat)", vi: "hòa hợp (với ai)" },
          { de: "sich streiten (mit + Dat)", vi: "cãi nhau (với ai)" },
          { de: "vertrauen (+ Dat)", vi: "tin tưởng (ai)" },
          { de: "vermissen", vi: "nhớ (ai / cái gì)" },
          { de: "unterstützen", vi: "hỗ trợ, ủng hộ" },
          { de: "zusammen sein", vi: "ở bên nhau / hẹn hò" },
          { de: "heiraten", vi: "kết hôn" },
          { de: "sich scheiden lassen", vi: "ly hôn" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nebensätze mit 'weil' und 'dass'",
        titleVi: "Mệnh đề phụ với 'weil' và 'dass'",
        rule: "Bei Nebensätzen mit 'weil' (weil = vì) und 'dass' (dass = rằng) steht das konjugierte Verb am Ende des Nebensatzes. Hauptsatz + , weil/dass + ... + Verb (konjugiert). Achtung: Nach 'weil' und 'dass' kommt immer ein Komma im Hauptsatz.",
        ruleVi: "Trong mệnh đề phụ với 'weil' (vì) và 'dass' (rằng), động từ được chia đứng ở CUỐI mệnh đề phụ. Mệnh đề chính + , weil/dass + ... + động từ (chia). Đây là một quy tắc RẤT quan trọng trong tiếng Đức và khác hoàn toàn với tiếng Việt! Trong tiếng Việt, trật tự từ không thay đổi khi dùng 'vì' hoặc 'rằng'. Nhưng trong tiếng Đức, bạn PHẢI đẩy động từ chia về cuối.",
        examples: [
          { de: "Ich bin traurig, weil mein Freund weggezogen ist.", vi: "Tôi buồn vì bạn tôi đã chuyển đi." },
          { de: "Sie ist glücklich, weil sie verliebt ist.", vi: "Cô ấy hạnh phúc vì cô ấy đang yêu." },
          { de: "Ich glaube, dass Vertrauen sehr wichtig ist.", vi: "Tôi tin rằng sự tin tưởng rất quan trọng." },
          { de: "Er sagt, dass er mich vermisst.", vi: "Anh ấy nói rằng anh ấy nhớ tôi." },
          { de: "Wir wissen, dass Freundschaft Zeit braucht.", vi: "Chúng tôi biết rằng tình bạn cần thời gian." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Über Freundschaft sprechen",
        titleVi: "Nói về tình bạn",
        lines: [
          { speaker: "Hoa", de: "Hast du viele Freunde hier in Deutschland?", vi: "Bạn có nhiều bạn bè ở Đức không?" },
          { speaker: "Stefan", de: "Ich habe viele Bekannte, aber nur drei oder vier enge Freunde.", vi: "Tôi có nhiều người quen, nhưng chỉ có ba hoặc bốn người bạn thân." },
          { speaker: "Hoa", de: "Das ist interessant. In Vietnam sagen wir schneller 'Freund' zu jemandem.", vi: "Thú vị đấy. Ở Việt Nam chúng tôi gọi ai đó là 'bạn' nhanh hơn." },
          { speaker: "Stefan", de: "Ja, ich weiß. Mein Freund Minh hat mir das erklärt. Er sagt, dass es in Vietnam normal ist, neue Leute gleich 'Freund' zu nennen.", vi: "Ừ, tôi biết. Bạn tôi Minh đã giải thích cho tôi. Anh ấy nói rằng ở Việt Nam việc gọi người mới quen là 'bạn' là bình thường." },
          { speaker: "Hoa", de: "Genau! Und was macht für dich einen guten Freund aus?", vi: "Đúng vậy! Và điều gì tạo nên một người bạn tốt theo bạn?" },
          { speaker: "Stefan", de: "Ich glaube, dass Ehrlichkeit und Vertrauen am wichtigsten sind. Ein guter Freund ist da, wenn man ihn braucht.", vi: "Tôi tin rằng sự thành thật và tin tưởng là quan trọng nhất. Một người bạn tốt có mặt khi bạn cần." },
          { speaker: "Hoa", de: "Da stimme ich dir zu. Ich vermisse meine Freunde in Vietnam, weil wir uns so gut verstanden haben.", vi: "Tôi đồng ý với bạn. Tôi nhớ bạn bè ở Việt Nam, vì chúng tôi đã rất hợp nhau." }
        ]
      },
      {
        type: "practice",
        titleDe: "Mein bester Freund / Meine beste Freundin",
        titleVi: "Bạn thân nhất của tôi",
        instruction: "Erzähle von deinem besten Freund oder deiner besten Freundin. Benutze 'weil' und 'dass'. Beschreibe: Wie habt ihr euch kennengelernt? Warum ist diese Person dein bester Freund? Was macht ihr zusammen? Beispiel: Mein bester Freund heißt Tuan. Ich glaube, dass er ein toller Mensch ist. Wir sind Freunde, weil wir die gleichen Interessen haben.",
        instructionVi: "Hãy kể về bạn thân nhất của bạn. Sử dụng 'weil' và 'dass'. Mô tả: Bạn đã quen nhau như thế nào? Tại sao người đó là bạn thân nhất? Hai bạn làm gì cùng nhau? Ví dụ: Mein bester Freund heißt Tuan. Ich glaube, dass er ein toller Mensch ist. Wir sind Freunde, weil wir die gleichen Interessen haben."
      }
    ]
  },

  // --- Chapter 7, Lesson 3: Konflikte lösen ---
  {
    id: "a2-ch7-l3",
    chapterId: 7,
    lessonNumber: 3,
    title: "Konflikte lösen",
    titleVi: "Giải quyết xung đột",
    type: "Fertigkeit",
    objectives: [
      "Diễn đạt sự bất đồng một cách lịch sự",
      "Nắm được từ vựng và cấu trúc để giải quyết xung đột",
      "Hiểu văn hóa tranh luận và phản hồi ở Đức",
      "Sử dụng mệnh đề phụ với 'obwohl' (mặc dù)"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Konflikte in Deutschland",
        titleVi: "Xung đột ở Đức",
        textDe: "Deutsche kommunizieren oft direkt. Kritik wird sachlich ausgedrückt und ist nicht persönlich gemeint. Wenn jemand sagt: 'Ich bin nicht einverstanden', heißt das nicht, dass er dich nicht mag — er hat nur eine andere Meinung. In Deutschland ist es normal, über Probleme offen zu sprechen und gemeinsam Lösungen zu finden. Man sagt: 'Reden hilft!' Konflikte zu vermeiden wird oft als schwieriger angesehen als sie anzusprechen.",
        textVi: "Người Đức thường giao tiếp trực tiếp. Lời phê bình được diễn đạt một cách khách quan và không mang tính cá nhân. Khi ai đó nói: 'Tôi không đồng ý', điều đó không có nghĩa là họ không thích bạn — họ chỉ có ý kiến khác. Ở Đức, việc nói thẳng về vấn đề và cùng nhau tìm giải pháp là bình thường. Người ta nói: 'Nói chuyện giúp ích!' Trong văn hóa Việt Nam, chúng ta thường tránh xung đột để giữ hòa khí. Nhưng ở Đức, tránh né xung đột thường được coi là khó hơn việc nói ra."
      },
      {
        type: "vocabulary",
        titleDe: "Konflikte und Lösungen",
        titleVi: "Xung đột và giải pháp",
        words: [
          { de: "Konflikt", vi: "xung đột", article: "der" },
          { de: "Missverständnis", vi: "sự hiểu lầm", article: "das" },
          { de: "Kompromiss", vi: "sự thỏa hiệp", article: "der" },
          { de: "Lösung", vi: "giải pháp", article: "die" },
          { de: "Meinung", vi: "ý kiến", article: "die" },
          { de: "Vorwurf", vi: "lời trách móc", article: "der" },
          { de: "Entschuldigung", vi: "lời xin lỗi", article: "die" },
          { de: "Kritik", vi: "sự phê bình", article: "die" },
          { de: "Diskussion", vi: "cuộc thảo luận", article: "die" },
          { de: "Einigung", vi: "sự đồng thuận", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Meinung ausdrücken und widersprechen",
        titleVi: "Bày tỏ ý kiến và phản đối",
        rule: "Meinung sagen: Ich finde, dass... / Ich glaube, dass... / Meiner Meinung nach + Verb an Position 2. Zustimmen: Da hast du recht. / Das stimmt. / Ich bin einverstanden. Widersprechen (höflich): Ich sehe das anders. / Das finde ich nicht. / Ich bin nicht einverstanden, weil... Vorschläge: Wir könnten... / Wie wäre es, wenn...?",
        ruleVi: "Nói ý kiến: Ich finde, dass... (Tôi thấy rằng...) / Ich glaube, dass... (Tôi tin rằng...) / Meiner Meinung nach + động từ ở vị trí 2 (Theo ý kiến tôi...). Đồng ý: Da hast du recht. (Bạn nói đúng.) / Das stimmt. (Đúng vậy.) Phản đối (lịch sự): Ich sehe das anders. (Tôi thấy khác.) / Das finde ich nicht. (Tôi không thấy vậy.) / Ich bin nicht einverstanden, weil... (Tôi không đồng ý vì...). Đề xuất: Wir könnten... (Chúng ta có thể...) / Wie wäre es, wenn...? (Thế nào nếu...?)",
        examples: [
          { de: "Ich finde, dass du mehr zuhören solltest.", vi: "Tôi thấy rằng bạn nên lắng nghe nhiều hơn." },
          { de: "Meiner Meinung nach ist das nicht fair.", vi: "Theo ý kiến tôi, điều đó không công bằng." },
          { de: "Ich sehe das anders. Ich glaube, dass wir beide Fehler gemacht haben.", vi: "Tôi thấy khác. Tôi tin rằng cả hai chúng ta đều đã mắc lỗi." },
          { de: "Wir könnten einen Kompromiss finden.", vi: "Chúng ta có thể tìm một thỏa hiệp." },
          { de: "Wie wäre es, wenn wir morgen in Ruhe darüber sprechen?", vi: "Thế nào nếu ngày mai chúng ta nói chuyện bình tĩnh về việc đó?" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nebensätze mit 'obwohl'",
        titleVi: "Mệnh đề phụ với 'obwohl' (mặc dù)",
        rule: "'Obwohl' bedeutet 'mặc dù' und leitet einen Nebensatz ein. Das Verb steht am Ende. Obwohl + Subjekt + ... + Verb (konjugiert), Hauptsatz. Oder: Hauptsatz, obwohl + Subjekt + ... + Verb (konjugiert).",
        ruleVi: "'Obwohl' có nghĩa là 'mặc dù' và bắt đầu một mệnh đề phụ. Động từ chia đứng ở CUỐI. Obwohl + chủ ngữ + ... + động từ (chia), mệnh đề chính. Hoặc: Mệnh đề chính, obwohl + chủ ngữ + ... + động từ (chia). Giống như 'weil' và 'dass', trật tự từ trong mệnh đề phụ thay đổi — động từ chia về cuối.",
        examples: [
          { de: "Obwohl wir uns gestritten haben, sind wir immer noch Freunde.", vi: "Mặc dù chúng tôi đã cãi nhau, chúng tôi vẫn là bạn." },
          { de: "Ich mag ihn, obwohl er manchmal schwierig ist.", vi: "Tôi thích anh ấy, mặc dù anh ấy đôi khi khó tính." },
          { de: "Obwohl ich müde bin, höre ich dir zu.", vi: "Mặc dù tôi mệt, tôi lắng nghe bạn." },
          { de: "Sie hat mir verziehen, obwohl ich einen großen Fehler gemacht habe.", vi: "Cô ấy đã tha thứ cho tôi, mặc dù tôi đã mắc một lỗi lớn." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Ein Missverständnis klären",
        titleVi: "Giải quyết một hiểu lầm",
        lines: [
          { speaker: "Mai", de: "Tung, ich muss mit dir reden. Ich bin enttäuscht, weil du gestern nicht zu meiner Party gekommen bist.", vi: "Tung, tôi cần nói chuyện với bạn. Tôi thất vọng vì hôm qua bạn không đến bữa tiệc của tôi." },
          { speaker: "Tung", de: "Es tut mir wirklich leid, Mai. Ich war krank und konnte nicht kommen.", vi: "Tôi thực sự xin lỗi, Mai. Tôi bị ốm và không thể đến." },
          { speaker: "Mai", de: "Aber du hättest mir Bescheid sagen können! Ich habe den ganzen Abend auf dich gewartet.", vi: "Nhưng bạn có thể đã báo cho tôi biết! Tôi đã đợi bạn cả tối." },
          { speaker: "Tung", de: "Da hast du recht. Das war nicht fair von mir. Ich hätte dir eine Nachricht schreiben sollen.", vi: "Bạn nói đúng. Điều đó không công bằng từ phía tôi. Tôi lẽ ra nên nhắn tin cho bạn." },
          { speaker: "Mai", de: "Danke, dass du das verstehst. Beim nächsten Mal sag bitte einfach Bescheid.", vi: "Cảm ơn bạn đã hiểu. Lần sau xin hãy báo cho biết nhé." },
          { speaker: "Tung", de: "Versprochen! Obwohl ich krank war, hätte ich dir schreiben können. Es tut mir leid.", vi: "Tôi hứa! Mặc dù tôi bị ốm, tôi có thể đã nhắn tin cho bạn. Tôi xin lỗi." },
          { speaker: "Mai", de: "Schon gut. Ich bin froh, dass wir darüber gesprochen haben.", vi: "Không sao. Tôi vui vì chúng ta đã nói chuyện về điều này." }
        ]
      },
      {
        type: "practice",
        titleDe: "Einen Konflikt lösen",
        titleVi: "Giải quyết một xung đột",
        instruction: "Schreibe einen Dialog zwischen zwei Freunden, die ein Problem haben. Benutze: 'weil', 'dass', 'obwohl' und Ausdrücke für Meinung und Entschuldigung. Thema: Dein Freund hat dein Geheimnis weitererzählt.",
        instructionVi: "Hãy viết một đoạn hội thoại giữa hai người bạn đang có vấn đề. Sử dụng: 'weil', 'dass', 'obwohl' và các cách diễn đạt ý kiến và xin lỗi. Chủ đề: Bạn của bạn đã kể lại bí mật của bạn cho người khác."
      }
    ]
  },

  // --- Chapter 7, Lesson 4: Reflexive Verben ---
  {
    id: "a2-ch7-l4",
    chapterId: 7,
    lessonNumber: 4,
    title: "Reflexive Verben",
    titleVi: "Động từ phản thân",
    type: "Grammatik",
    objectives: [
      "Hiểu khái niệm động từ phản thân trong tiếng Đức",
      "Chia đúng đại từ phản thân (Reflexivpronomen) ở Akkusativ và Dativ",
      "Sử dụng động từ phản thân phổ biến trong giao tiếp hàng ngày",
      "Phân biệt động từ phản thân Akkusativ và Dativ"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Was sind reflexive Verben?",
        titleVi: "Động từ phản thân là gì?",
        textDe: "Reflexive Verben sind Verben mit einem Reflexivpronomen (mich, dich, sich, uns, euch, sich). Das Reflexivpronomen bezieht sich auf das Subjekt zurück. Beispiel: 'Ich wasche mich' — ich wasche mich selbst. Viele Verben, die Gefühle oder alltägliche Handlungen beschreiben, sind reflexiv: sich freuen, sich ärgern, sich waschen, sich anziehen.",
        textVi: "Động từ phản thân là động từ đi kèm với đại từ phản thân (mich, dich, sich, uns, euch, sich). Đại từ phản thân chỉ lại chính chủ ngữ. Ví dụ: 'Ich wasche mich' — tôi tự rửa mình. Trong tiếng Việt, chúng ta thường thêm 'tự' hoặc không cần từ nào thêm ('Tôi rửa mặt' thay vì 'Tôi tự rửa mình').. Nhưng trong tiếng Đức, đại từ phản thân là BẮT BUỘC. Nhiều động từ diễn tả cảm xúc hoặc hành động hàng ngày là phản thân: sich freuen, sich ärgern, sich waschen, sich anziehen."
      },
      {
        type: "grammar",
        titleDe: "Reflexivpronomen im Akkusativ",
        titleVi: "Đại từ phản thân ở Akkusativ",
        rule: "ich → mich, du → dich, er/sie/es → sich, wir → uns, ihr → euch, sie/Sie → sich. Die meisten reflexiven Verben benutzen den Akkusativ. Wortstellung: Ich freue mich. / Freust du dich? / Ich habe mich gefreut. (Perfekt: Reflexivpronomen nach dem konjugierten Verb.)",
        ruleVi: "ich → mich, du → dich, er/sie/es → sich, wir → uns, ihr → euch, sie/Sie → sich. Hầu hết động từ phản thân dùng Akkusativ. Trật tự từ: Ich freue mich. / Freust du dich? / Ich habe mich gefreut. (Perfekt: đại từ phản thân đứng SAU động từ chia.) Mẹo: mich/dich/sich khác nhau ở Akkusativ, nhưng uns/euch/sich giống nhau ở cả Akkusativ và Dativ.",
        examples: [
          { de: "Ich freue mich auf das Wochenende.", vi: "Tôi mong đợi cuối tuần." },
          { de: "Er ärgert sich über den Lärm.", vi: "Anh ấy bực mình vì tiếng ồn." },
          { de: "Wir setzen uns auf die Bank.", vi: "Chúng tôi ngồi xuống ghế băng." },
          { de: "Hast du dich schon entschieden?", vi: "Bạn đã quyết định chưa?" },
          { de: "Sie interessiert sich für Kunst.", vi: "Cô ấy quan tâm đến nghệ thuật." },
          { de: "Ich erinnere mich an dich.", vi: "Tôi nhớ bạn." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Reflexivpronomen im Dativ",
        titleVi: "Đại từ phản thân ở Dativ",
        rule: "ich → mir, du → dir, er/sie/es → sich, wir → uns, ihr → euch, sie/Sie → sich. Dativ wird benutzt, wenn es ein weiteres Akkusativ-Objekt im Satz gibt. Vergleich: Ich wasche mich. (Akk — kein weiteres Objekt) vs. Ich wasche mir die Hände. (Dat — 'die Hände' ist das Akk-Objekt.)",
        ruleVi: "ich → mir, du → dir, er/sie/es → sich, wir → uns, ihr → euch, sie/Sie → sich. Dativ được sử dụng khi câu CÓ THÊM một tân ngữ Akkusativ. So sánh: Ich wasche mich. (Akk — không có tân ngữ khác) vs. Ich wasche mir die Hände. (Dat — 'die Hände' là tân ngữ Akk.) Lưu ý: Chỉ 'mir' và 'dir' khác với dạng Akkusativ (mich/dich). Các dạng khác (sich, uns, euch) giống nhau.",
        examples: [
          { de: "Ich wasche mir die Hände.", vi: "Tôi rửa tay." },
          { de: "Er putzt sich die Zähne.", vi: "Anh ấy đánh răng." },
          { de: "Ich ziehe mir eine Jacke an.", vi: "Tôi mặc một cái áo khoác." },
          { de: "Kannst du dir das vorstellen?", vi: "Bạn có thể tưởng tượng điều đó không?" },
          { de: "Ich wünsche mir ein neues Handy.", vi: "Tôi ước có một chiếc điện thoại mới." }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Wichtige reflexive Verben",
        titleVi: "Các động từ phản thân quan trọng",
        words: [
          { de: "sich freuen (auf/über + Akk)", vi: "vui mừng (mong đợi / vui vì)" },
          { de: "sich ärgern (über + Akk)", vi: "bực mình (vì)" },
          { de: "sich fühlen", vi: "cảm thấy" },
          { de: "sich entschuldigen (bei + Dat, für + Akk)", vi: "xin lỗi (ai, vì điều gì)" },
          { de: "sich erinnern (an + Akk)", vi: "nhớ lại" },
          { de: "sich interessieren (für + Akk)", vi: "quan tâm đến" },
          { de: "sich entscheiden (für + Akk)", vi: "quyết định" },
          { de: "sich vorstellen", vi: "tưởng tượng / giới thiệu bản thân" },
          { de: "sich waschen", vi: "rửa, tắm" },
          { de: "sich anziehen", vi: "mặc quần áo" },
          { de: "sich umziehen", vi: "thay quần áo" },
          { de: "sich hinsetzen", vi: "ngồi xuống" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Ein ganz normaler Morgen",
        titleVi: "Một buổi sáng bình thường",
        lines: [
          { speaker: "Mutter", de: "Linh, steh auf! Es ist schon 7 Uhr!", vi: "Linh, dậy đi! 7 giờ rồi!" },
          { speaker: "Linh", de: "Ja, Mama. Ich wasche mich und ziehe mich an.", vi: "Vâng mẹ. Con rửa mặt rồi mặc đồ ạ." },
          { speaker: "Mutter", de: "Vergiss nicht, dir die Zähne zu putzen!", vi: "Đừng quên đánh răng nhé!" },
          { speaker: "Linh", de: "Natürlich! Ich beeile mich.", vi: "Tất nhiên rồi! Con sẽ nhanh ạ." },
          { speaker: "Mutter", de: "Und kämm dir die Haare! Du siehst aus wie ein Vogelnest.", vi: "Và chải tóc đi! Con trông như tổ chim vậy." },
          { speaker: "Linh", de: "Mama! Ich ärgere mich, wenn du das sagst!", vi: "Mẹ! Con bực mình khi mẹ nói vậy!" },
          { speaker: "Mutter", de: "Entschuldige, ich habe nur Spaß gemacht. Freust du dich auf die Schule?", vi: "Xin lỗi, mẹ chỉ đùa thôi. Con có mong đến trường không?" },
          { speaker: "Linh", de: "Ja, ich freue mich auf den Deutschkurs! Heute lernen wir reflexive Verben.", vi: "Có ạ, con mong đến giờ tiếng Đức! Hôm nay chúng con học động từ phản thân." }
        ]
      },
      {
        type: "practice",
        titleDe: "Mein Morgen",
        titleVi: "Buổi sáng của tôi",
        instruction: "Beschreibe deinen Morgen mit mindestens 6 reflexiven Verben. Beispiel: Ich wache um 6:30 Uhr auf. Zuerst wasche ich mich. Dann putze ich mir die Zähne. Ich ziehe mich an und setze mich an den Tisch. Ich freue mich auf den neuen Tag.",
        instructionVi: "Hãy mô tả buổi sáng của bạn với ít nhất 6 động từ phản thân. Ví dụ: Ich wache um 6:30 Uhr auf. Zuerst wasche ich mich. Dann putze ich mir die Zähne. Ich ziehe mich an und setze mich an den Tisch. Ich freue mich auf den neuen Tag."
      }
    ]
  },

  // ============================================================
  // CHAPTER 8: Gesundheit & Fitness
  // ============================================================

  // --- Chapter 8, Lesson 1: Beim Arzt (Fortgeschritten) ---
  {
    id: "a2-ch8-l1",
    chapterId: 8,
    lessonNumber: 1,
    title: "Beim Arzt (Fortgeschritten)",
    titleVi: "Ở phòng khám bác sĩ (Nâng cao)",
    type: "Einführung",
    objectives: [
      "Mô tả triệu chứng chi tiết cho bác sĩ",
      "Hiểu chỉ dẫn và đơn thuốc của bác sĩ",
      "Nắm được hệ thống bảo hiểm y tế ở Đức",
      "Sử dụng từ vựng y tế nâng cao"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das deutsche Gesundheitssystem",
        titleVi: "Hệ thống y tế Đức",
        textDe: "In Deutschland muss jeder eine Krankenversicherung haben. Es gibt die gesetzliche Krankenversicherung (GKV) und die private Krankenversicherung (PKV). Die meisten Menschen haben die GKV. Wenn man krank ist, geht man zuerst zum Hausarzt. Für einen Facharzt braucht man oft eine Überweisung. Im Notfall kann man direkt ins Krankenhaus oder den Notruf 112 anrufen. Wichtig: Man muss oft einen Termin machen und kann nicht einfach ohne Termin zum Arzt gehen.",
        textVi: "Ở Đức, mọi người BẮT BUỘC phải có bảo hiểm y tế. Có bảo hiểm y tế công (GKV - gesetzliche Krankenversicherung) và bảo hiểm y tế tư (PKV - private Krankenversicherung). Hầu hết mọi người có GKV. Khi bệnh, bạn đến bác sĩ gia đình (Hausarzt) trước. Để đến bác sĩ chuyên khoa, thường cần giấy giới thiệu (Überweisung). Trong trường hợp khẩn cấp, bạn có thể đến bệnh viện trực tiếp hoặc gọi số cấp cứu 112. Quan trọng: Bạn thường phải đặt lịch hẹn (Termin) và không thể đến phòng khám mà không có hẹn — rất khác với Việt Nam nơi bạn có thể đến bệnh viện bất cứ lúc nào."
      },
      {
        type: "vocabulary",
        titleDe: "Beim Arzt — Erweiterte Vokabeln",
        titleVi: "Ở phòng khám — Từ vựng nâng cao",
        words: [
          { de: "Krankenversicherung", vi: "bảo hiểm y tế", article: "die" },
          { de: "Versichertenkarte", vi: "thẻ bảo hiểm", article: "die" },
          { de: "Überweisung", vi: "giấy giới thiệu (bác sĩ)", article: "die" },
          { de: "Rezept", vi: "đơn thuốc", article: "das" },
          { de: "Krankschreibung", vi: "giấy nghỉ ốm", article: "die" },
          { de: "Untersuchung", vi: "cuộc khám bệnh", article: "die" },
          { de: "Blutdruck", vi: "huyết áp", article: "der" },
          { de: "Blutprobe", vi: "xét nghiệm máu", article: "die" },
          { de: "Sprechstunde", vi: "giờ khám bệnh", article: "die" },
          { de: "Wartezimmer", vi: "phòng chờ", article: "das" },
          { de: "Nebenwirkung", vi: "tác dụng phụ", article: "die" },
          { de: "Allergie", vi: "dị ứng", article: "die" },
          { de: "Symptom", vi: "triệu chứng", article: "das" },
          { de: "Diagnose", vi: "chẩn đoán", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Symptome beschreiben — erweiterte Strukturen",
        titleVi: "Mô tả triệu chứng — cấu trúc nâng cao",
        rule: "1) Seit + Dativ: Seit drei Tagen habe ich Fieber. 2) Immer wenn...: Immer wenn ich esse, habe ich Bauchschmerzen. 3) Es wird + Komparativ: Es wird immer schlimmer. 4) Ich kann nicht gut...: Ich kann nicht gut schlafen. 5) Ich habe Probleme mit + Dativ: Ich habe Probleme mit dem Rücken.",
        ruleVi: "1) Seit + Dativ: Seit drei Tagen habe ich Fieber. (Tôi bị sốt từ ba ngày nay.) — 'seit' luôn đi với Dativ. 2) Immer wenn...: Immer wenn ich esse, habe ich Bauchschmerzen. (Mỗi khi tôi ăn, tôi bị đau bụng.) 3) Es wird + so sánh hơn: Es wird immer schlimmer. (Nó ngày càng tệ hơn.) 4) Ich kann nicht gut...: Ich kann nicht gut schlafen. (Tôi không ngủ ngon được.) 5) Ich habe Probleme mit + Dativ: Ich habe Probleme mit dem Rücken. (Tôi có vấn đề về lưng.)",
        examples: [
          { de: "Seit einer Woche habe ich starke Kopfschmerzen.", vi: "Từ một tuần nay tôi bị đau đầu nặng." },
          { de: "Immer wenn ich Sport mache, tut mir das Knie weh.", vi: "Mỗi khi tôi tập thể thao, đầu gối tôi đau." },
          { de: "Der Schmerz wird abends immer schlimmer.", vi: "Cơn đau ngày càng tệ hơn vào buổi tối." },
          { de: "Ich kann seit zwei Nächten nicht richtig schlafen.", vi: "Tôi không ngủ đúng cách được từ hai đêm nay." },
          { de: "Ich habe Probleme mit der Verdauung.", vi: "Tôi có vấn đề về tiêu hóa." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Beim Hausarzt",
        titleVi: "Ở phòng khám bác sĩ gia đình",
        lines: [
          { speaker: "Empfang", de: "Guten Tag! Haben Sie einen Termin?", vi: "Xin chào! Ông/bà có hẹn không?" },
          { speaker: "Hung", de: "Ja, ich habe um 10 Uhr einen Termin bei Dr. Müller. Mein Name ist Nguyen Van Hung.", vi: "Vâng, tôi có hẹn lúc 10 giờ với bác sĩ Müller. Tôi tên là Nguyễn Văn Hùng." },
          { speaker: "Empfang", de: "Ihre Versichertenkarte bitte. Nehmen Sie im Wartezimmer Platz.", vi: "Xin cho xem thẻ bảo hiểm. Mời ngồi ở phòng chờ." },
          { speaker: "Dr. Müller", de: "Herr Nguyen, was kann ich für Sie tun?", vi: "Ông Nguyen, tôi có thể giúp gì cho ông?" },
          { speaker: "Hung", de: "Ich habe seit einer Woche starke Magenschmerzen. Immer wenn ich esse, wird es schlimmer.", vi: "Tôi bị đau dạ dày nặng từ một tuần nay. Mỗi khi tôi ăn, nó tệ hơn." },
          { speaker: "Dr. Müller", de: "Haben Sie auch Übelkeit oder Erbrechen?", vi: "Ông có bị buồn nôn hoặc nôn không?" },
          { speaker: "Hung", de: "Ja, mir ist oft übel, besonders morgens.", vi: "Vâng, tôi thường buồn nôn, đặc biệt vào buổi sáng." },
          { speaker: "Dr. Müller", de: "Nehmen Sie Medikamente? Haben Sie Allergien?", vi: "Ông có uống thuốc gì không? Ông có bị dị ứng không?" },
          { speaker: "Hung", de: "Nein, keine Medikamente. Aber ich bin allergisch gegen Penicillin.", vi: "Không, không uống thuốc. Nhưng tôi bị dị ứng với Penicillin." },
          { speaker: "Dr. Müller", de: "Gut, dass Sie das sagen. Ich untersuche Sie jetzt und wir machen eine Blutprobe. Ich schreibe Ihnen auch ein Rezept für ein Magenmittel und eine Krankschreibung für drei Tage.", vi: "Tốt khi ông nói điều đó. Tôi sẽ khám cho ông bây giờ và chúng ta sẽ làm xét nghiệm máu. Tôi cũng kê đơn thuốc dạ dày và viết giấy nghỉ ốm ba ngày cho ông." }
        ]
      },
      {
        type: "practice",
        titleDe: "Beim Arzt — Rollenspiel",
        titleVi: "Ở phòng khám — Đóng vai",
        instruction: "Stell dir vor, du bist beim Arzt. Beschreibe deine Symptome ausführlich: Was tut dir weh? Seit wann? Wann ist es schlimmer? Hast du Allergien? Benutze: seit + Dativ, immer wenn..., es wird schlimmer/besser.",
        instructionVi: "Hãy tưởng tượng bạn đang ở phòng khám. Mô tả triệu chứng của bạn chi tiết: Bạn đau ở đâu? Từ khi nào? Khi nào thì nặng hơn? Bạn có dị ứng không? Sử dụng: seit + Dativ, immer wenn..., es wird schlimmer/besser."
      }
    ]
  },

  // --- Chapter 8, Lesson 2: Sport & Bewegung ---
  {
    id: "a2-ch8-l2",
    chapterId: 8,
    lessonNumber: 2,
    title: "Sport & Bewegung",
    titleVi: "Thể thao và vận động",
    type: "Fertigkeit",
    objectives: [
      "Nắm được từ vựng về các môn thể thao và hoạt động thể chất",
      "Nói về sở thích thể thao và thói quen tập luyện",
      "Sử dụng cấu trúc so sánh hơn và so sánh nhất",
      "Hiểu văn hóa thể thao ở Đức (Sportverein)"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Sportkultur in Deutschland",
        titleVi: "Văn hóa thể thao ở Đức",
        textDe: "Sport spielt in Deutschland eine große Rolle. Etwa 27 Millionen Menschen sind Mitglied in einem Sportverein. Fußball ist die beliebteste Sportart, aber auch Turnen, Tennis, Schwimmen und Wandern sind sehr populär. Viele Deutsche machen regelmäßig Sport — im Fitnessstudio, im Sportverein oder einfach draußen in der Natur. Sportvereine sind auch soziale Treffpunkte. Man trifft Freunde, lernt neue Leute kennen und hat Spaß zusammen.",
        textVi: "Thể thao đóng vai trò lớn ở Đức. Khoảng 27 triệu người là thành viên của một câu lạc bộ thể thao (Sportverein). Bóng đá là môn thể thao phổ biến nhất, nhưng thể dục, tennis, bơi lội và đi bộ đường dài cũng rất được ưa thích. Nhiều người Đức tập thể thao thường xuyên — ở phòng gym, câu lạc bộ thể thao hoặc đơn giản là ngoài trời trong thiên nhiên. Sportverein cũng là nơi giao lưu xã hội. Người ta gặp bạn bè, làm quen người mới và vui vẻ cùng nhau. Ở Việt Nam, thể thao cộng đồng như cầu lông và đá cầu rất phổ biến — ở Đức thì tương đương là bóng đá và thể dục dụng cụ."
      },
      {
        type: "vocabulary",
        titleDe: "Sportarten und Aktivitäten",
        titleVi: "Các môn thể thao và hoạt động",
        words: [
          { de: "Fußball", vi: "bóng đá", article: "der" },
          { de: "Schwimmen", vi: "bơi lội", article: "das" },
          { de: "Joggen", vi: "chạy bộ", article: "das" },
          { de: "Radfahren", vi: "đạp xe", article: "das" },
          { de: "Wandern", vi: "đi bộ đường dài", article: "das" },
          { de: "Yoga", vi: "yoga", article: "das" },
          { de: "Fitnessstudio", vi: "phòng tập gym", article: "das" },
          { de: "Mannschaft", vi: "đội (thi đấu)", article: "die" },
          { de: "Sportverein", vi: "câu lạc bộ thể thao", article: "der" },
          { de: "Training", vi: "buổi tập", article: "das" },
          { de: "Ausdauer", vi: "sức bền", article: "die" },
          { de: "Kraft", vi: "sức mạnh", article: "die" },
          { de: "Dehnen", vi: "giãn cơ", article: "das" },
          { de: "Aufwärmen", vi: "khởi động", article: "das" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Komparativ und Superlativ",
        titleVi: "So sánh hơn và so sánh nhất",
        rule: "Komparativ: Adjektiv + -er (+ als). Superlativ: am + Adjektiv + -sten / der/die/das + Adjektiv + -ste. Einsilbige Adjektive mit a, o, u bekommen oft Umlaut: alt → älter → am ältesten. Unregelmäßig: gut → besser → am besten, viel → mehr → am meisten, gern → lieber → am liebsten.",
        ruleVi: "So sánh hơn: tính từ + -er (+ als). Ví dụ: schnell → schneller als (nhanh hơn). So sánh nhất: am + tính từ + -sten / der/die/das + tính từ + -ste. Ví dụ: am schnellsten (nhanh nhất). Tính từ một âm tiết với a, o, u thường thêm Umlaut: alt → älter → am ältesten. Bất quy tắc (phải học thuộc): gut → besser → am besten, viel → mehr → am meisten, gern → lieber → am liebsten. Trong tiếng Việt, chúng ta dùng 'hơn' và 'nhất' — tiếng Đức thay đổi chính tính từ.",
        examples: [
          { de: "Schwimmen ist gesünder als Fernsehen.", vi: "Bơi lội khỏe hơn xem tivi." },
          { de: "Fußball ist in Deutschland am beliebtesten.", vi: "Bóng đá phổ biến nhất ở Đức." },
          { de: "Ich laufe schneller als mein Bruder.", vi: "Tôi chạy nhanh hơn anh trai tôi." },
          { de: "Yoga ist am entspannendsten.", vi: "Yoga thư giãn nhất." },
          { de: "Ich spiele lieber Tennis als Fußball.", vi: "Tôi thích chơi tennis hơn bóng đá." },
          { de: "Am liebsten gehe ich wandern.", vi: "Tôi thích đi bộ đường dài nhất." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Im Sportverein",
        titleVi: "Ở câu lạc bộ thể thao",
        lines: [
          { speaker: "Trang", de: "Ich möchte gerne Sport machen, aber ich weiß nicht, welche Sportart.", vi: "Tôi muốn tập thể thao, nhưng tôi không biết môn nào." },
          { speaker: "Katrin", de: "Was machst du denn gern? Bist du lieber allein oder in einer Gruppe?", vi: "Bạn thích làm gì? Bạn thích một mình hay nhóm?" },
          { speaker: "Trang", de: "Eigentlich beides. In Vietnam habe ich Badminton gespielt.", vi: "Thực ra là cả hai. Ở Việt Nam tôi đã chơi cầu lông." },
          { speaker: "Katrin", de: "Super! Es gibt einen Badmintonverein hier in der Nähe. Aber hast du auch schon mal Wandern probiert?", vi: "Tuyệt! Có một câu lạc bộ cầu lông gần đây. Nhưng bạn đã thử đi bộ đường dài chưa?" },
          { speaker: "Trang", de: "Nein, noch nicht. Ist Wandern beliebt in Deutschland?", vi: "Chưa. Đi bộ đường dài có phổ biến ở Đức không?" },
          { speaker: "Katrin", de: "Ja, sehr! Es ist gesünder als joggen, weil es die Gelenke schont. Und die Natur hier ist wunderschön.", vi: "Có, rất phổ biến! Nó khỏe hơn chạy bộ vì nó bảo vệ các khớp. Và thiên nhiên ở đây rất đẹp." },
          { speaker: "Trang", de: "Das klingt gut! Welcher Sport ist am billigsten?", vi: "Nghe hay đấy! Môn thể thao nào rẻ nhất?" },
          { speaker: "Katrin", de: "Joggen ist am billigsten — du brauchst nur gute Schuhe! Aber ein Sportverein kostet auch nicht viel, meistens 10 bis 20 Euro im Monat.", vi: "Chạy bộ rẻ nhất — bạn chỉ cần giày tốt! Nhưng câu lạc bộ thể thao cũng không đắt lắm, thường 10 đến 20 Euro mỗi tháng." }
        ]
      },
      {
        type: "practice",
        titleDe: "Sportarten vergleichen",
        titleVi: "So sánh các môn thể thao",
        instruction: "Vergleiche drei Sportarten miteinander. Benutze Komparativ und Superlativ. Beispiel: Schwimmen ist gesünder als Fußball. Tennis ist teurer als Joggen. Am billigsten ist Wandern. Am liebsten spiele ich Badminton, weil es am meisten Spaß macht.",
        instructionVi: "Hãy so sánh ba môn thể thao với nhau. Sử dụng so sánh hơn và so sánh nhất. Ví dụ: Schwimmen ist gesünder als Fußball. Tennis ist teurer als Joggen. Am billigsten ist Wandern. Am liebsten spiele ich Badminton, weil es am meisten Spaß macht."
      }
    ]
  },

  // --- Chapter 8, Lesson 3: Ernährung & Diät ---
  {
    id: "a2-ch8-l3",
    chapterId: 8,
    lessonNumber: 3,
    title: "Ernährung & Diät",
    titleVi: "Dinh dưỡng và chế độ ăn",
    type: "Fertigkeit",
    objectives: [
      "Nắm được từ vựng về dinh dưỡng và chế độ ăn uống",
      "Nói về thói quen ăn uống lành mạnh và không lành mạnh",
      "Hiểu các xu hướng ẩm thực ở Đức (vegetarisch, vegan, bio)",
      "Sử dụng cấu trúc 'man sollte' để đưa ra lời khuyên chung"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Ernährung in Deutschland",
        titleVi: "Dinh dưỡng ở Đức",
        textDe: "Deutschland erlebt einen Wandel in der Ernährung. Traditionell essen Deutsche viel Fleisch, Brot und Kartoffeln. Aber immer mehr Menschen essen vegetarisch oder vegan. Bio-Lebensmittel sind sehr beliebt. In Supermärkten gibt es große Bio-Abteilungen. Viele Deutsche achten auf gesunde Ernährung: wenig Zucker, wenig Fett, viel Gemüse und Vollkornprodukte. Trotzdem ist Deutschland auch für Bier, Würstchen und Kuchen bekannt!",
        textVi: "Đức đang trải qua sự thay đổi trong ẩm thực. Truyền thống, người Đức ăn nhiều thịt, bánh mì và khoai tây. Nhưng ngày càng nhiều người ăn chay (vegetarisch) hoặc thuần chay (vegan). Thực phẩm hữu cơ (Bio) rất phổ biến. Trong siêu thị có khu vực Bio lớn. Nhiều người Đức chú ý đến dinh dưỡng lành mạnh: ít đường, ít mỡ, nhiều rau và sản phẩm ngũ cốc nguyên hạt. Tuy nhiên, Đức cũng nổi tiếng với bia, xúc xích và bánh ngọt! So với Việt Nam, bữa ăn Đức thường ít đa dạng hơn và ít gia vị hơn. Người Việt ở Đức thường nhớ đồ ăn Việt nhiều nhất."
      },
      {
        type: "vocabulary",
        titleDe: "Ernährung und Lebensmittel",
        titleVi: "Dinh dưỡng và thực phẩm",
        words: [
          { de: "Ernährung", vi: "dinh dưỡng", article: "die" },
          { de: "Diät", vi: "chế độ ăn kiêng", article: "die" },
          { de: "Kalorie", vi: "calo", article: "die" },
          { de: "Eiweiß / Protein", vi: "chất đạm / protein", article: "das" },
          { de: "Kohlenhydrat", vi: "carbohydrate / tinh bột", article: "das" },
          { de: "Fett", vi: "chất béo", article: "das" },
          { de: "Vitamin", vi: "vitamin", article: "das" },
          { de: "Ballaststoff", vi: "chất xơ", article: "der" },
          { de: "Vollkornbrot", vi: "bánh mì nguyên cám", article: "das" },
          { de: "Bio-Lebensmittel", vi: "thực phẩm hữu cơ", article: "die (Pl.)" },
          { de: "vegetarisch", vi: "ăn chay (có trứng, sữa)" },
          { de: "vegan", vi: "thuần chay (không sản phẩm động vật)" },
          { de: "gesund", vi: "lành mạnh, khỏe" },
          { de: "ungesund", vi: "không lành mạnh" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Ratschläge geben mit 'man sollte' und 'es ist wichtig, ... zu'",
        titleVi: "Đưa ra lời khuyên với 'man sollte' và 'es ist wichtig, ... zu'",
        rule: "1) 'Man sollte' + Infinitiv: allgemeiner Ratschlag. Man sollte viel Wasser trinken. 2) 'Es ist wichtig/gut/schlecht, ... zu + Infinitiv': Es ist wichtig, genug zu schlafen. 3) 'Zu viel / zu wenig': Man sollte nicht zu viel Zucker essen. 4) 'Statt ... zu': Statt Cola zu trinken, sollte man Wasser trinken.",
        ruleVi: "1) 'Man sollte' + động từ nguyên thể: lời khuyên chung. Man sollte viel Wasser trinken. (Người ta nên uống nhiều nước.) 'Man' = người ta nói chung. 2) 'Es ist wichtig/gut/schlecht, ... zu + động từ nguyên thể': Es ist wichtig, genug zu schlafen. (Quan trọng là ngủ đủ giấc.) 3) 'Zu viel / zu wenig': Man sollte nicht zu viel Zucker essen. (Không nên ăn quá nhiều đường.) 4) 'Statt ... zu': Statt Cola zu trinken, sollte man Wasser trinken. (Thay vì uống Cola, nên uống nước.)",
        examples: [
          { de: "Man sollte jeden Tag Obst und Gemüse essen.", vi: "Người ta nên ăn trái cây và rau mỗi ngày." },
          { de: "Es ist wichtig, genug Wasser zu trinken.", vi: "Quan trọng là uống đủ nước." },
          { de: "Man sollte nicht zu viel Süßigkeiten essen.", vi: "Không nên ăn quá nhiều đồ ngọt." },
          { de: "Es ist gut, regelmäßig zu essen und keine Mahlzeit auszulassen.", vi: "Tốt là ăn đều đặn và không bỏ bữa." },
          { de: "Statt Chips zu essen, könnte man Nüsse essen.", vi: "Thay vì ăn khoai tây chiên, có thể ăn hạt." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Gesund essen in Deutschland",
        titleVi: "Ăn uống lành mạnh ở Đức",
        lines: [
          { speaker: "Duc", de: "Ich vermisse vietnamesisches Essen so sehr! Phở, Bún chả, Bánh mì...", vi: "Tôi nhớ đồ ăn Việt Nam quá! Phở, Bún chả, Bánh mì..." },
          { speaker: "Julia", de: "Das glaube ich! Vietnamesisches Essen ist ja auch sehr gesund — viel Gemüse und frische Kräuter.", vi: "Tôi tin! Đồ ăn Việt Nam cũng rất lành mạnh — nhiều rau và rau thơm tươi." },
          { speaker: "Duc", de: "Stimmt. Hier in Deutschland esse ich leider zu viel Brot und Käse. Ich glaube, das ist nicht so gesund.", vi: "Đúng vậy. Ở đây ở Đức tôi tiếc là ăn quá nhiều bánh mì và phô mai. Tôi nghĩ điều đó không lành mạnh lắm." },
          { speaker: "Julia", de: "Vollkornbrot ist eigentlich sehr gesund! Es hat mehr Ballaststoffe als Weißbrot. Aber man sollte auch viel Gemüse essen.", vi: "Thực ra bánh mì nguyên cám rất lành mạnh! Nó có nhiều chất xơ hơn bánh mì trắng. Nhưng cũng nên ăn nhiều rau." },
          { speaker: "Duc", de: "Bist du vegetarisch?", vi: "Bạn có ăn chay không?" },
          { speaker: "Julia", de: "Ja, seit zwei Jahren. Es ist gut für die Gesundheit und für die Umwelt. Aber jeder muss selbst entscheiden.", vi: "Có, từ hai năm nay. Nó tốt cho sức khỏe và cho môi trường. Nhưng mỗi người phải tự quyết định." },
          { speaker: "Duc", de: "Interessant! In Vietnam essen auch viele Leute am ersten und fünfzehnten des Mondkalenders vegetarisch.", vi: "Thú vị! Ở Việt Nam cũng có nhiều người ăn chay vào ngày mùng một và rằm âm lịch." },
          { speaker: "Julia", de: "Das wusste ich nicht! Es ist schön, dass es in jeder Kultur Traditionen für gesundes Essen gibt.", vi: "Tôi không biết điều đó! Thật đẹp khi mỗi nền văn hóa đều có truyền thống ăn uống lành mạnh." }
        ]
      },
      {
        type: "practice",
        titleDe: "Meine Ernährung",
        titleVi: "Chế độ ăn của tôi",
        instruction: "Beschreibe deine Ernährungsgewohnheiten und gib drei Ratschläge für gesunde Ernährung. Benutze: 'man sollte', 'es ist wichtig, ... zu', Komparativ. Was isst du gern? Was ist gesund, was nicht? Was möchtest du ändern?",
        instructionVi: "Hãy mô tả thói quen ăn uống của bạn và đưa ra ba lời khuyên về dinh dưỡng lành mạnh. Sử dụng: 'man sollte', 'es ist wichtig, ... zu', so sánh hơn. Bạn thích ăn gì? Cái gì lành mạnh, cái gì không? Bạn muốn thay đổi gì?"
      }
    ]
  },

  // --- Chapter 8, Lesson 4: Ratschläge geben (Konjunktiv II Einführung) ---
  {
    id: "a2-ch8-l4",
    chapterId: 8,
    lessonNumber: 4,
    title: "Ratschläge geben (Konjunktiv II Einführung)",
    titleVi: "Đưa ra lời khuyên (Giới thiệu Konjunktiv II)",
    type: "Grammatik",
    objectives: [
      "Hiểu khái niệm Konjunktiv II cơ bản",
      "Sử dụng 'sollte', 'könnte', 'würde' để đưa ra lời khuyên lịch sự",
      "Phân biệt giữa lời khuyên mạnh và lời khuyên nhẹ nhàng",
      "Kết hợp chủ đề sức khỏe với ngữ pháp mới"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Der Konjunktiv II — Einführung",
        titleVi: "Konjunktiv II — Giới thiệu",
        textDe: "Der Konjunktiv II ist eine besondere Verbform in der deutschen Grammatik. Wir benutzen ihn für: 1) höfliche Bitten und Fragen, 2) Ratschläge, 3) Wünsche und irreale Situationen. In dieser Lektion konzentrieren wir uns auf Ratschläge. Die wichtigsten Formen für A2 sind: sollte (sollen), könnte (können), würde (werden), hätte (haben) und wäre (sein). Den Konjunktiv II benutzt man sehr oft in der Alltagssprache!",
        textVi: "Konjunktiv II là một dạng đặc biệt của động từ trong ngữ pháp tiếng Đức. Chúng ta dùng nó cho: 1) yêu cầu và câu hỏi lịch sự, 2) lời khuyên, 3) mong muốn và tình huống không có thật. Trong bài này, chúng ta tập trung vào lời khuyên. Các dạng quan trọng nhất cho A2: sollte (nên), könnte (có thể), würde (sẽ — giả định), hätte (có — giả định) và wäre (là — giả định). Tiếng Việt không có dạng ngữ pháp tương đương! Chúng ta dùng từ 'nên', 'có thể', 'giá mà' — nhưng không thay đổi động từ. Trong tiếng Đức, chính động từ thay đổi hình thức."
      },
      {
        type: "grammar",
        titleDe: "Konjunktiv II — wichtige Formen",
        titleVi: "Konjunktiv II — các dạng quan trọng",
        rule: "sollte: ich/er/sie/es sollte, du solltest, wir/sie/Sie sollten, ihr solltet. könnte: ich/er/sie/es könnte, du könntest, wir/sie/Sie könnten, ihr könntet. würde + Infinitiv: ich/er/sie/es würde, du würdest, wir/sie/Sie würden, ihr würdet + Infinitiv. hätte: ich/er/sie/es hätte, du hättest, wir/sie/Sie hätten, ihr hättet. wäre: ich/er/sie/es wäre, du wärst, wir/sie/Sie wären, ihr wärt.",
        ruleVi: "sollte (nên): ich/er/sie/es sollte, du solltest, wir/sie/Sie sollten, ihr solltet. könnte (có thể): ich/er/sie/es könnte, du könntest, wir/sie/Sie könnten, ihr könntet. würde + động từ nguyên thể (sẽ — giả định): ich/er/sie/es würde, du würdest, wir/sie/Sie würden, ihr würdet + Infinitiv. hätte (có — giả định): ich/er/sie/es hätte, du hättest, wir/sie/Sie hätten, ihr hättet. wäre (là — giả định): ich/er/sie/es wäre, du wärst, wir/sie/Sie wären, ihr wärt. Mẹo: Nhận ra pattern — Konjunktiv II thường có Umlaut (ö, ä) so với dạng gốc.",
        examples: [
          { de: "Du solltest mehr Wasser trinken.", vi: "Bạn nên uống nhiều nước hơn." },
          { de: "Sie könnten Yoga ausprobieren.", vi: "Bạn/Họ có thể thử yoga." },
          { de: "An deiner Stelle würde ich zum Arzt gehen.", vi: "Ở vị trí bạn, tôi sẽ đi khám bác sĩ." },
          { de: "Ich hätte gern einen Termin.", vi: "Tôi muốn đặt một lịch hẹn." },
          { de: "Es wäre gut, wenn du mehr schläfst.", vi: "Sẽ tốt nếu bạn ngủ nhiều hơn." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Ratschläge — von stark bis höflich",
        titleVi: "Lời khuyên — từ mạnh đến lịch sự",
        rule: "Stark: Du musst zum Arzt gehen! (Imperativ/Pflicht). Mittel: Du solltest mehr Sport machen. (Konjunktiv II — empfohlener Rat). Höflich: Du könntest mal Yoga probieren. / Wie wäre es mit Yoga? / An deiner Stelle würde ich... (sanfter Vorschlag). Frage: Hast du schon mal an Sport gedacht? (indirektester Vorschlag).",
        ruleVi: "Mạnh: Du musst zum Arzt gehen! (Bạn PHẢI đi khám bác sĩ! — mệnh lệnh/nghĩa vụ). Trung bình: Du solltest mehr Sport machen. (Bạn NÊN tập thể thao nhiều hơn. — Konjunktiv II — lời khuyên được đề xuất). Lịch sự: Du könntest mal Yoga probieren. (Bạn CÓ THỂ thử yoga.) / Wie wäre es mit Yoga? (Yoga thì sao?) / An deiner Stelle würde ich... (Ở vị trí bạn tôi sẽ...). Câu hỏi gián tiếp nhất: Hast du schon mal an Sport gedacht? (Bạn đã nghĩ đến thể thao chưa?). Trong văn hóa Đức, 'solltest' là mức lịch sự phổ biến nhất cho lời khuyên giữa bạn bè.",
        examples: [
          { de: "Du musst sofort ins Krankenhaus! (stark)", vi: "Bạn phải đến bệnh viện ngay! (mạnh)" },
          { de: "Du solltest weniger rauchen. (mittel)", vi: "Bạn nên hút thuốc ít hơn. (trung bình)" },
          { de: "Du könntest mal einen Tee trinken. (höflich)", vi: "Bạn có thể thử uống trà. (lịch sự)" },
          { de: "Wie wäre es mit einem Spaziergang? (höflich)", vi: "Đi dạo thì sao? (lịch sự)" },
          { de: "An deiner Stelle würde ich früher ins Bett gehen. (höflich)", vi: "Ở vị trí bạn, tôi sẽ đi ngủ sớm hơn. (lịch sự)" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Nützliche Ausdrücke für Ratschläge",
        titleVi: "Các cách diễn đạt hữu ích cho lời khuyên",
        words: [
          { de: "an deiner/Ihrer Stelle", vi: "ở vị trí bạn/ông bà" },
          { de: "Wie wäre es mit...?", vi: "... thì sao?" },
          { de: "Hast du schon mal ... probiert?", vi: "Bạn đã thử ... chưa?" },
          { de: "Es wäre besser, wenn...", vi: "Sẽ tốt hơn nếu..." },
          { de: "Ich würde dir empfehlen, ...", vi: "Tôi sẽ khuyên bạn..." },
          { de: "Vielleicht könntest du...", vi: "Có lẽ bạn có thể..." },
          { de: "Warum versuchst du nicht...?", vi: "Sao bạn không thử...?" },
          { de: "Das Wichtigste ist, dass...", vi: "Điều quan trọng nhất là..." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Ratschläge für einen gestressten Freund",
        titleVi: "Lời khuyên cho một người bạn bị căng thẳng",
        lines: [
          { speaker: "Nam", de: "Ich bin total gestresst und kann nachts nicht schlafen. Ich habe auch oft Kopfschmerzen.", vi: "Tôi căng thẳng quá và đêm không ngủ được. Tôi cũng hay bị đau đầu." },
          { speaker: "Laura", de: "Oh, das klingt nicht gut. Seit wann hast du die Probleme?", vi: "Ồ, nghe không tốt rồi. Bạn bị vấn đề này từ khi nào?" },
          { speaker: "Nam", de: "Seit ungefähr einem Monat. Ich arbeite zu viel und esse oft nur Fast Food.", vi: "Từ khoảng một tháng nay. Tôi làm việc quá nhiều và thường chỉ ăn đồ ăn nhanh." },
          { speaker: "Laura", de: "Du solltest unbedingt weniger arbeiten. Gesundheit ist wichtiger als Arbeit!", vi: "Bạn chắc chắn nên làm việc ít hơn. Sức khỏe quan trọng hơn công việc!" },
          { speaker: "Nam", de: "Ja, das weiß ich, aber es ist schwierig...", vi: "Ừ, tôi biết, nhưng khó lắm..." },
          { speaker: "Laura", de: "Wie wäre es, wenn du abends Yoga machst? Das hilft bei Stress und beim Schlafen.", vi: "Thế nào nếu tối bạn tập yoga? Nó giúp giảm căng thẳng và giúp ngủ." },
          { speaker: "Nam", de: "Yoga? Ich habe noch nie Yoga gemacht.", vi: "Yoga? Tôi chưa bao giờ tập yoga." },
          { speaker: "Laura", de: "Du könntest es mal ausprobieren. Es gibt tolle Videos im Internet. Und an deiner Stelle würde ich auch besser essen — statt Fast Food zum Beispiel Salat oder Suppe.", vi: "Bạn có thể thử. Có những video rất hay trên Internet. Và ở vị trí bạn, tôi cũng sẽ ăn tốt hơn — thay vì đồ ăn nhanh, ví dụ salad hoặc súp." },
          { speaker: "Nam", de: "Du hast recht. Es wäre besser, wenn ich besser auf mich aufpasse. Danke für die Ratschläge!", vi: "Bạn nói đúng. Sẽ tốt hơn nếu tôi chăm sóc bản thân tốt hơn. Cảm ơn lời khuyên!" },
          { speaker: "Laura", de: "Gern! Und wenn es nicht besser wird, solltest du zum Arzt gehen.", vi: "Không có gì! Và nếu không đỡ hơn, bạn nên đi khám bác sĩ." }
        ]
      },
      {
        type: "practice",
        titleDe: "Ratschläge für verschiedene Situationen",
        titleVi: "Lời khuyên cho các tình huống khác nhau",
        instruction: "Gib Ratschläge für diese drei Situationen. Benutze verschiedene Stärken (stark, mittel, höflich) und die Konjunktiv-II-Formen: sollte, könnte, würde, wäre. 1) Dein Freund hat 10 Kilo zugenommen. 2) Deine Kollegin hat immer Rückenschmerzen. 3) Dein Nachbar raucht zu viel.",
        instructionVi: "Hãy đưa ra lời khuyên cho ba tình huống sau. Sử dụng các mức độ khác nhau (mạnh, trung bình, lịch sự) và các dạng Konjunktiv II: sollte, könnte, würde, wäre. 1) Bạn của bạn tăng 10 kg. 2) Đồng nghiệp của bạn luôn bị đau lưng. 3) Hàng xóm của bạn hút thuốc quá nhiều."
      }
    ]
  }
];
