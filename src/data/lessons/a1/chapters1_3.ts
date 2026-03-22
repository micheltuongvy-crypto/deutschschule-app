// A1 German Lessons — Chapters 1–3
// Complete lesson content for Vietnamese learners

export type ContentBlock =
  | {
      type: "explanation";
      titleDe: string;
      titleVi: string;
      textDe: string;
      textVi: string;
    }
  | {
      type: "dialogue";
      titleDe: string;
      titleVi: string;
      lines: { speaker: string; de: string; vi: string }[];
    }
  | {
      type: "grammar";
      titleDe: string;
      titleVi: string;
      rule: string;
      ruleVi: string;
      examples: { de: string; vi: string }[];
    }
  | {
      type: "vocabulary";
      titleDe: string;
      titleVi: string;
      words: { de: string; vi: string; article?: string }[];
    }
  | {
      type: "practice";
      titleDe: string;
      titleVi: string;
      instruction: string;
      instructionVi: string;
    };

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

export const a1Chapters1_3: Lesson[] = [
  // =====================================================================
  // CHAPTER 1: Begrüßung & Vorstellung
  // =====================================================================

  // --- Chapter 1, Lesson 1 ---
  {
    id: "a1-ch1-l1",
    chapterId: 1,
    lessonNumber: 1,
    title: "Hallo! Ich bin...",
    titleVi: "Xin chào! Tôi là...",
    type: "Einführung",
    objectives: [
      "Biết cách chào hỏi bằng tiếng Đức (trang trọng và thân mật)",
      "Giới thiệu bản thân: tên, quê quán",
      "Hiểu và sử dụng các câu hỏi cơ bản: Wie heißt du? Woher kommst du?",
      "Phân biệt giữa 'du' (bạn) và 'Sie' (quý ông/bà)",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Begrüßung und Abschied",
        titleVi: "Chào hỏi và tạm biệt",
        textDe:
          "In Deutschland begrüßt man sich je nach Tageszeit unterschiedlich. Unter Freunden sagt man 'Hallo' oder 'Hi'. Formell sagt man 'Guten Morgen', 'Guten Tag' oder 'Guten Abend'. Zum Abschied sagt man 'Tschüss' (informell) oder 'Auf Wiedersehen' (formell).",
        textVi:
          "Ở Đức, người ta chào nhau khác nhau tùy theo thời điểm trong ngày. Giữa bạn bè, người ta nói 'Hallo' (Xin chào) hoặc 'Hi'. Trong giao tiếp trang trọng, người ta nói 'Guten Morgen' (Chào buổi sáng), 'Guten Tag' (Chào buổi trưa/chiều) hoặc 'Guten Abend' (Chào buổi tối). Khi tạm biệt, người ta nói 'Tschüss' (thân mật) hoặc 'Auf Wiedersehen' (trang trọng). Lưu ý: Trong tiếng Đức, cách xưng hô rất quan trọng. 'Du' dùng cho bạn bè, người thân, trẻ em. 'Sie' (viết hoa) dùng cho người lạ, người lớn tuổi, trong công việc.",
      },
      {
        type: "vocabulary",
        titleDe: "Begrüßungen",
        titleVi: "Các cách chào hỏi",
        words: [
          { de: "Hallo", vi: "Xin chào (thân mật)" },
          { de: "Guten Morgen", vi: "Chào buổi sáng" },
          { de: "Guten Tag", vi: "Chào buổi trưa/chiều" },
          { de: "Guten Abend", vi: "Chào buổi tối" },
          { de: "Gute Nacht", vi: "Chúc ngủ ngon" },
          { de: "Tschüss", vi: "Tạm biệt (thân mật)" },
          { de: "Auf Wiedersehen", vi: "Tạm biệt (trang trọng)" },
          { de: "Bis bald", vi: "Hẹn gặp lại" },
          { de: "Bis morgen", vi: "Hẹn gặp ngày mai" },
          { de: "Willkommen", vi: "Chào mừng" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Auf einer Party",
        titleVi: "Tại một bữa tiệc",
        lines: [
          { speaker: "Anna", de: "Hallo! Ich bin Anna.", vi: "Xin chào! Tôi là Anna." },
          {
            speaker: "Minh",
            de: "Hallo Anna! Ich heiße Minh.",
            vi: "Xin chào Anna! Tôi tên là Minh.",
          },
          {
            speaker: "Anna",
            de: "Freut mich! Woher kommst du?",
            vi: "Rất vui được gặp bạn! Bạn đến từ đâu?",
          },
          {
            speaker: "Minh",
            de: "Ich komme aus Vietnam. Und du?",
            vi: "Tôi đến từ Việt Nam. Còn bạn?",
          },
          {
            speaker: "Anna",
            de: "Ich komme aus Deutschland, aus Berlin.",
            vi: "Tôi đến từ Đức, từ Berlin.",
          },
          {
            speaker: "Minh",
            de: "Oh, schön! Ich wohne jetzt auch in Berlin.",
            vi: "Ồ, hay quá! Tôi bây giờ cũng sống ở Berlin.",
          },
          {
            speaker: "Anna",
            de: "Toll! Willkommen in Berlin!",
            vi: "Tuyệt vời! Chào mừng đến Berlin!",
          },
          { speaker: "Minh", de: "Danke!", vi: "Cảm ơn!" },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Sich vorstellen",
        titleVi: "Tự giới thiệu",
        words: [
          { de: "Ich bin...", vi: "Tôi là..." },
          { de: "Ich heiße...", vi: "Tôi tên là..." },
          { de: "Mein Name ist...", vi: "Tên tôi là..." },
          { de: "Freut mich!", vi: "Rất vui được gặp bạn!" },
          { de: "Woher kommst du?", vi: "Bạn đến từ đâu? (thân mật)" },
          { de: "Woher kommen Sie?", vi: "Quý ông/bà đến từ đâu? (trang trọng)" },
          { de: "Ich komme aus...", vi: "Tôi đến từ..." },
          { de: "Wo wohnst du?", vi: "Bạn sống ở đâu?" },
          { de: "Ich wohne in...", vi: "Tôi sống ở..." },
          { de: "Danke", vi: "Cảm ơn" },
          { de: "Bitte", vi: "Không có gì / Xin mời" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Formelle Begrüßung",
        titleVi: "Chào hỏi trang trọng",
        lines: [
          {
            speaker: "Herr Müller",
            de: "Guten Tag! Mein Name ist Müller.",
            vi: "Xin chào! Tên tôi là Müller.",
          },
          {
            speaker: "Frau Nguyen",
            de: "Guten Tag, Herr Müller! Ich heiße Nguyen.",
            vi: "Xin chào, ông Müller! Tôi tên là Nguyen.",
          },
          {
            speaker: "Herr Müller",
            de: "Freut mich, Frau Nguyen. Woher kommen Sie?",
            vi: "Rất vui được gặp bà Nguyen. Bà đến từ đâu?",
          },
          {
            speaker: "Frau Nguyen",
            de: "Ich komme aus Vietnam, aus Ho-Chi-Minh-Stadt.",
            vi: "Tôi đến từ Việt Nam, từ Thành phố Hồ Chí Minh.",
          },
          {
            speaker: "Herr Müller",
            de: "Willkommen in Deutschland!",
            vi: "Chào mừng bà đến Đức!",
          },
          {
            speaker: "Frau Nguyen",
            de: "Vielen Dank, Herr Müller!",
            vi: "Cảm ơn ông rất nhiều, ông Müller!",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Stell dich vor!",
        titleVi: "Bài tập: Hãy giới thiệu bản thân!",
        instruction:
          "Stell dich vor: Sage deinen Namen und woher du kommst. Benutze 'Hallo, ich heiße... Ich komme aus...'",
        instructionVi:
          "Hãy giới thiệu bản thân: Nói tên bạn và bạn đến từ đâu. Sử dụng 'Hallo, ich heiße... Ich komme aus...' Sau đó thử lại với phiên bản trang trọng: 'Guten Tag, mein Name ist...'",
      },
    ],
  },

  // --- Chapter 1, Lesson 2 ---
  {
    id: "a1-ch1-l2",
    chapterId: 1,
    lessonNumber: 2,
    title: 'Verben "sein" und "heißen"',
    titleVi: 'Động từ "sein" (là) và "heißen" (tên là)',
    type: "Grammatik",
    objectives: [
      "Chia động từ 'sein' (là) ở tất cả các ngôi",
      "Chia động từ 'heißen' (tên là) ở tất cả các ngôi",
      "Đặt câu hỏi với W-Fragen: Wie? Wo? Woher? Was? Wer?",
      "Phân biệt cấu trúc câu hỏi và câu trả lời",
    ],
    content: [
      {
        type: "grammar",
        titleDe: 'Das Verb "sein"',
        titleVi: 'Động từ "sein" (là/ở)',
        rule:
          "ich bin, du bist, er/sie/es ist, wir sind, ihr seid, sie/Sie sind. 'sein' ist ein unregelmäßiges Verb und wird sehr häufig verwendet.",
        ruleVi:
          "Động từ 'sein' (là/ở) là động từ bất quy tắc quan trọng nhất trong tiếng Đức. Nó tương đương với 'to be' trong tiếng Anh hoặc 'là/ở' trong tiếng Việt. Khác với tiếng Việt (không chia động từ), tiếng Đức chia động từ theo từng ngôi. Bảng chia: ich bin (tôi là), du bist (bạn là), er/sie/es ist (anh ấy/cô ấy/nó là), wir sind (chúng tôi là), ihr seid (các bạn là), sie sind (họ là), Sie sind (quý ông/bà là — viết hoa).",
        examples: [
          { de: "Ich bin Minh.", vi: "Tôi là Minh." },
          { de: "Du bist nett.", vi: "Bạn tốt bụng." },
          { de: "Er ist Lehrer.", vi: "Anh ấy là giáo viên." },
          { de: "Sie ist Studentin.", vi: "Cô ấy là sinh viên." },
          { de: "Wir sind aus Vietnam.", vi: "Chúng tôi đến từ Việt Nam." },
          { de: "Ihr seid Freunde.", vi: "Các bạn là bạn bè." },
          { de: "Sie sind Frau Müller.", vi: "Bà là bà Müller. (trang trọng)" },
        ],
      },
      {
        type: "grammar",
        titleDe: 'Das Verb "heißen"',
        titleVi: 'Động từ "heißen" (tên là)',
        rule:
          "ich heiße, du heißt, er/sie/es heißt, wir heißen, ihr heißt, sie/Sie heißen.",
        ruleVi:
          "Động từ 'heißen' có nghĩa là 'tên là'. Đây là động từ thường (regelmäßig) nhưng có đuôi '-ßen'. Bảng chia: ich heiße (tôi tên là), du heißt (bạn tên là), er/sie/es heißt (anh ấy/cô ấy tên là), wir heißen (chúng tôi tên là), ihr heißt (các bạn tên là), sie/Sie heißen (họ tên là / quý ông/bà tên là). Lưu ý: 'ß' (Eszett) phát âm như 's' trong tiếng Việt.",
        examples: [
          { de: "Ich heiße Lan.", vi: "Tôi tên là Lan." },
          { de: "Wie heißt du?", vi: "Bạn tên là gì?" },
          { de: "Er heißt Thomas.", vi: "Anh ấy tên là Thomas." },
          { de: "Wie heißen Sie?", vi: "Quý ông/bà tên là gì? (trang trọng)" },
        ],
      },
      {
        type: "grammar",
        titleDe: "W-Fragen",
        titleVi: "Câu hỏi với từ hỏi W",
        rule:
          "W-Fragen beginnen mit einem Fragewort: Wie (how), Wo (where), Woher (where from), Was (what), Wer (who). Das Verb steht an Position 2.",
        ruleVi:
          "Câu hỏi W (W-Fragen) bắt đầu bằng một từ hỏi bắt đầu bằng chữ W. Động từ luôn đứng ở vị trí thứ 2. Cấu trúc: [Từ hỏi W] + [Động từ] + [Chủ ngữ] + ...? Các từ hỏi quan trọng: Wie = Như thế nào / Gì (hỏi tên), Wo = Ở đâu (vị trí), Woher = Từ đâu (nguồn gốc), Was = Cái gì, Wer = Ai. Lưu ý: Khác với tiếng Việt, từ hỏi luôn đứng đầu câu, không đứng cuối câu.",
        examples: [
          { de: "Wie heißt du?", vi: "Bạn tên là gì?" },
          { de: "Wo wohnst du?", vi: "Bạn sống ở đâu?" },
          { de: "Woher kommst du?", vi: "Bạn đến từ đâu?" },
          { de: "Was bist du von Beruf?", vi: "Bạn làm nghề gì?" },
          { de: "Wer ist das?", vi: "Đó là ai?" },
        ],
      },
      {
        type: "explanation",
        titleDe: "Ja/Nein-Fragen",
        titleVi: "Câu hỏi Có/Không",
        textDe:
          "Bei Ja/Nein-Fragen steht das Verb an Position 1. Beispiel: 'Bist du Student?' — 'Ja, ich bin Student.' / 'Nein, ich bin Lehrer.'",
        textVi:
          "Với câu hỏi Có/Không (Ja/Nein-Fragen), động từ đứng ở vị trí đầu tiên. Cấu trúc: [Động từ] + [Chủ ngữ] + ...? Đây là điểm khác biệt lớn với tiếng Việt. Trong tiếng Việt, ta thêm 'có...không?' nhưng không đổi vị trí từ. Trong tiếng Đức, ta phải đưa động từ lên đầu câu. Ví dụ: 'Bist du Student?' (Bạn là sinh viên không?) — 'Ja, ich bin Student.' (Vâng, tôi là sinh viên.) / 'Nein, ich bin Lehrer.' (Không, tôi là giáo viên.)",
      },
      {
        type: "practice",
        titleDe: "Übung: Fragen und Antworten",
        titleVi: "Bài tập: Hỏi và trả lời",
        instruction:
          "Bilde Fragen mit W-Fragewörtern und beantworte sie. 1) ___ heißt du? 2) ___ kommst du? 3) ___ wohnst du? 4) ___ bist du von Beruf?",
        instructionVi:
          "Hãy điền từ hỏi W phù hợp và trả lời các câu hỏi. 1) ___ heißt du? (Bạn tên là gì?) 2) ___ kommst du? (Bạn đến từ đâu?) 3) ___ wohnst du? (Bạn sống ở đâu?) 4) ___ bist du von Beruf? (Bạn làm nghề gì?) Đáp án từ hỏi: 1) Wie, 2) Woher, 3) Wo, 4) Was. Hãy trả lời bằng thông tin thật của bạn!",
      },
    ],
  },

  // --- Chapter 1, Lesson 3 ---
  {
    id: "a1-ch1-l3",
    chapterId: 1,
    lessonNumber: 3,
    title: "Zahlen 0–20 und das Alphabet",
    titleVi: "Số từ 0–20 và bảng chữ cái",
    type: "Fertigkeit",
    objectives: [
      "Đếm từ 0 đến 20 bằng tiếng Đức",
      "Nắm được bảng chữ cái tiếng Đức và cách phát âm",
      "Đánh vần tên của mình",
      "Hiểu và nói số điện thoại, tuổi",
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Zahlen 0 bis 20",
        titleVi: "Số từ 0 đến 20",
        words: [
          { de: "null", vi: "0 (không)" },
          { de: "eins", vi: "1 (một)" },
          { de: "zwei", vi: "2 (hai)" },
          { de: "drei", vi: "3 (ba)" },
          { de: "vier", vi: "4 (bốn)" },
          { de: "fünf", vi: "5 (năm)" },
          { de: "sechs", vi: "6 (sáu)" },
          { de: "sieben", vi: "7 (bảy)" },
          { de: "acht", vi: "8 (tám)" },
          { de: "neun", vi: "9 (chín)" },
          { de: "zehn", vi: "10 (mười)" },
          { de: "elf", vi: "11 (mười một)" },
          { de: "zwölf", vi: "12 (mười hai)" },
          { de: "dreizehn", vi: "13 (mười ba)" },
          { de: "vierzehn", vi: "14 (mười bốn)" },
          { de: "fünfzehn", vi: "15 (mười lăm)" },
          { de: "sechzehn", vi: "16 (mười sáu)" },
          { de: "siebzehn", vi: "17 (mười bảy)" },
          { de: "achtzehn", vi: "18 (mười tám)" },
          { de: "neunzehn", vi: "19 (mười chín)" },
          { de: "zwanzig", vi: "20 (hai mươi)" },
        ],
      },
      {
        type: "explanation",
        titleDe: "Das deutsche Alphabet",
        titleVi: "Bảng chữ cái tiếng Đức",
        textDe:
          "Das deutsche Alphabet hat 26 Buchstaben plus die Umlaute Ä, Ö, Ü und das ß (Eszett). A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z.",
        textVi:
          "Bảng chữ cái tiếng Đức có 26 chữ cái giống tiếng Anh, cộng thêm các chữ cái đặc biệt: Ä (e-Umlaut, phát âm gần giống 'e'), Ö (o-Umlaut, tròn môi rồi phát âm 'ơ'), Ü (u-Umlaut, tròn môi rồi phát âm 'uy'), và ß (Eszett, phát âm như 's'). Cách phát âm các chữ cái: A (a), B (bê), C (tsê), D (đê), E (ê), F (ép), G (ghê), H (ha), I (i), J (yốt), K (ka), L (en), M (em), N (en), O (ô), P (pê), Q (ku), R (e-rờ), S (ét), T (tê), U (u), V (phao), W (vê), X (ích), Y (ýp-xi-lon), Z (tsét). Để đánh vần tên, bạn đọc từng chữ cái một.",
      },
      {
        type: "dialogue",
        titleDe: "Name buchstabieren",
        titleVi: "Đánh vần tên",
        lines: [
          {
            speaker: "Sekretärin",
            de: "Wie heißen Sie?",
            vi: "Quý ông/bà tên là gì?",
          },
          { speaker: "Minh", de: "Ich heiße Nguyen Van Minh.", vi: "Tôi tên là Nguyễn Văn Minh." },
          {
            speaker: "Sekretärin",
            de: "Können Sie das buchstabieren, bitte?",
            vi: "Ông có thể đánh vần được không ạ?",
          },
          {
            speaker: "Minh",
            de: "Ja, natürlich. N-G-U-Y-E-N.",
            vi: "Vâng, được chứ. N-G-U-Y-E-N.",
          },
          { speaker: "Sekretärin", de: "Und der Vorname?", vi: "Và tên gọi?" },
          { speaker: "Minh", de: "Minh. M-I-N-H.", vi: "Minh. M-I-N-H." },
          { speaker: "Sekretärin", de: "Danke schön!", vi: "Cảm ơn nhiều!" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Wie alt bist du?",
        titleVi: "Bạn bao nhiêu tuổi?",
        lines: [
          { speaker: "Anna", de: "Wie alt bist du, Minh?", vi: "Bạn bao nhiêu tuổi, Minh?" },
          {
            speaker: "Minh",
            de: "Ich bin zwanzig Jahre alt. Und du?",
            vi: "Tôi hai mươi tuổi. Còn bạn?",
          },
          {
            speaker: "Anna",
            de: "Ich bin neunzehn.",
            vi: "Tôi mười chín tuổi.",
          },
          {
            speaker: "Minh",
            de: "Was ist deine Telefonnummer?",
            vi: "Số điện thoại của bạn là gì?",
          },
          {
            speaker: "Anna",
            de: "Meine Nummer ist null-eins-sieben-zwei — drei-vier-fünf-sechs-sieben-acht-neun.",
            vi: "Số của tôi là 0172 — 3456789.",
          },
        ],
      },
      {
        type: "explanation",
        titleDe: "Telefonnummern",
        titleVi: "Số điện thoại",
        textDe:
          "In Deutschland liest man Telefonnummern Ziffer für Ziffer. Die Vorwahl wird zusammen gelesen. Beispiel: 030 — 12 34 56 (null-drei-null — eins-zwei, drei-vier, fünf-sechs).",
        textVi:
          "Ở Đức, người ta đọc số điện thoại từng chữ số một, giống như ở Việt Nam. Mã vùng được đọc gộp. Lưu ý: 'zwei' (2) đôi khi được đọc là 'zwo' để tránh nhầm với 'drei' (3) khi nghe qua điện thoại. Ví dụ: 030 — 12 34 56 được đọc là 'null-drei-null — eins-zwei, drei-vier, fünf-sechs'. Số điện thoại di động ở Đức thường bắt đầu bằng 015, 016 hoặc 017.",
      },
      {
        type: "practice",
        titleDe: "Übung: Buchstabiere deinen Namen!",
        titleVi: "Bài tập: Đánh vần tên của bạn!",
        instruction:
          "Buchstabiere deinen Vornamen und Nachnamen auf Deutsch. Sage auch deine Telefonnummer und dein Alter.",
        instructionVi:
          "Hãy đánh vần tên và họ của bạn bằng tiếng Đức. Sau đó nói số điện thoại và tuổi của bạn. Ví dụ: 'Ich heiße Lan. L-A-N. Meine Telefonnummer ist null-eins-sieben-sechs — eins-zwei-drei-vier-fünf. Ich bin zweiundzwanzig Jahre alt.'",
      },
    ],
  },

  // --- Chapter 1, Lesson 4 ---
  {
    id: "a1-ch1-l4",
    chapterId: 1,
    lessonNumber: 4,
    title: "Im Deutschkurs",
    titleVi: "Trong khóa học tiếng Đức",
    type: "Integration",
    objectives: [
      "Sử dụng các cụm từ trong lớp học",
      "Đăng ký khóa học tiếng Đức",
      "Điền một mẫu đăng ký đơn giản",
      "Tổng hợp kiến thức chương 1: chào hỏi, giới thiệu, số, bảng chữ cái",
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Im Unterricht",
        titleVi: "Trong lớp học",
        words: [
          { de: "Wie bitte?", vi: "Xin lỗi, bạn nói gì?" },
          { de: "Noch einmal, bitte.", vi: "Xin nói lại lần nữa." },
          { de: "Langsam, bitte.", vi: "Xin nói chậm lại." },
          { de: "Wie sagt man ... auf Deutsch?", vi: "... nói bằng tiếng Đức là gì?" },
          { de: "Was bedeutet ...?", vi: "... nghĩa là gì?" },
          { de: "Ich verstehe.", vi: "Tôi hiểu." },
          { de: "Ich verstehe nicht.", vi: "Tôi không hiểu." },
          { de: "Können Sie das bitte wiederholen?", vi: "Ông/bà có thể nhắc lại không?" },
          { de: "Entschuldigung.", vi: "Xin lỗi." },
          { de: "Richtig.", vi: "Đúng." },
          { de: "Falsch.", vi: "Sai." },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Anmeldung zum Deutschkurs",
        titleVi: "Đăng ký khóa học tiếng Đức",
        lines: [
          {
            speaker: "Sekretärin",
            de: "Guten Tag! Willkommen bei der Volkshochschule.",
            vi: "Xin chào! Chào mừng đến Trung tâm giáo dục cộng đồng.",
          },
          {
            speaker: "Lan",
            de: "Guten Tag! Ich möchte einen Deutschkurs besuchen.",
            vi: "Xin chào! Tôi muốn tham gia một khóa học tiếng Đức.",
          },
          {
            speaker: "Sekretärin",
            de: "Sehr gut. Wie heißen Sie?",
            vi: "Rất tốt. Bà tên là gì?",
          },
          {
            speaker: "Lan",
            de: "Ich heiße Tran Thi Lan.",
            vi: "Tôi tên là Trần Thị Lan.",
          },
          {
            speaker: "Sekretärin",
            de: "Können Sie das buchstabieren?",
            vi: "Bà có thể đánh vần được không?",
          },
          {
            speaker: "Lan",
            de: "T-R-A-N. Thi: T-H-I. Lan: L-A-N.",
            vi: "T-R-A-N. Thi: T-H-I. Lan: L-A-N.",
          },
          {
            speaker: "Sekretärin",
            de: "Woher kommen Sie?",
            vi: "Bà đến từ đâu?",
          },
          { speaker: "Lan", de: "Aus Vietnam, aus Hanoi.", vi: "Từ Việt Nam, từ Hà Nội." },
          { speaker: "Sekretärin", de: "Wie alt sind Sie?", vi: "Bà bao nhiêu tuổi?" },
          { speaker: "Lan", de: "Ich bin fünfundzwanzig Jahre alt.", vi: "Tôi 25 tuổi." },
          {
            speaker: "Sekretärin",
            de: "Und Ihre Telefonnummer?",
            vi: "Và số điện thoại của bà?",
          },
          {
            speaker: "Lan",
            de: "Null-eins-sieben-sechs — acht-neun-null-eins-zwei-drei-vier.",
            vi: "0176 — 8901234.",
          },
          {
            speaker: "Sekretärin",
            de: "Danke. Der Kurs beginnt am Montag. Hier ist das Formular.",
            vi: "Cảm ơn. Khóa học bắt đầu vào thứ Hai. Đây là mẫu đơn.",
          },
          { speaker: "Lan", de: "Vielen Dank! Auf Wiedersehen!", vi: "Cảm ơn rất nhiều! Tạm biệt!" },
        ],
      },
      {
        type: "explanation",
        titleDe: "Ein Formular ausfüllen",
        titleVi: "Điền mẫu đơn",
        textDe:
          "Ein Anmeldeformular enthält typische Felder: Vorname, Nachname, Geburtsdatum, Adresse, Telefonnummer, E-Mail.",
        textVi:
          "Một mẫu đơn đăng ký (Anmeldeformular) thường có các trường sau: Vorname = Tên gọi, Nachname / Familienname = Họ, Geburtsdatum = Ngày sinh, Geburtsort = Nơi sinh, Adresse / Wohnort = Địa chỉ / Nơi ở, Straße = Đường, Hausnummer = Số nhà, Postleitzahl (PLZ) = Mã bưu điện, Stadt = Thành phố, Telefonnummer = Số điện thoại, E-Mail-Adresse = Địa chỉ email, Staatsangehörigkeit = Quốc tịch, Unterschrift = Chữ ký. Lưu ý: Ở Đức, họ (Nachname) rất quan trọng và thường được hỏi trước.",
      },
      {
        type: "vocabulary",
        titleDe: "Das Formular",
        titleVi: "Mẫu đơn",
        words: [
          { de: "Vorname", vi: "Tên gọi", article: "der" },
          { de: "Nachname / Familienname", vi: "Họ", article: "der" },
          { de: "Geburtsdatum", vi: "Ngày sinh", article: "das" },
          { de: "Adresse", vi: "Địa chỉ", article: "die" },
          { de: "Straße", vi: "Đường", article: "die" },
          { de: "Postleitzahl (PLZ)", vi: "Mã bưu điện", article: "die" },
          { de: "Telefonnummer", vi: "Số điện thoại", article: "die" },
          { de: "E-Mail-Adresse", vi: "Địa chỉ email", article: "die" },
          { de: "Staatsangehörigkeit", vi: "Quốc tịch", article: "die" },
          { de: "Unterschrift", vi: "Chữ ký", article: "die" },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Füll das Formular aus!",
        titleVi: "Bài tập: Điền mẫu đơn!",
        instruction:
          "Fülle das Anmeldeformular mit deinen Informationen aus: Vorname, Nachname, Geburtsdatum, Adresse, Telefonnummer, E-Mail, Staatsangehörigkeit.",
        instructionVi:
          "Hãy điền mẫu đơn đăng ký với thông tin của bạn: Vorname (Tên), Nachname (Họ), Geburtsdatum (Ngày sinh), Adresse (Địa chỉ), Telefonnummer (SĐT), E-Mail, Staatsangehörigkeit (Quốc tịch). Sau đó, hãy đọc thành tiếng: 'Mein Vorname ist... Mein Nachname ist... Ich wohne in...'",
      },
    ],
  },

  // =====================================================================
  // CHAPTER 2: Familie & Freunde
  // =====================================================================

  // --- Chapter 2, Lesson 1 ---
  {
    id: "a1-ch2-l1",
    chapterId: 2,
    lessonNumber: 1,
    title: "Meine Familie",
    titleVi: "Gia đình tôi",
    type: "Einführung",
    objectives: [
      "Học từ vựng về các thành viên trong gia đình",
      "Sử dụng đại từ sở hữu mein/dein (của tôi / của bạn)",
      "Giới thiệu gia đình bằng tiếng Đức",
      "Nói về tình trạng hôn nhân",
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Die Familie",
        titleVi: "Gia đình",
        words: [
          { de: "Familie", vi: "Gia đình", article: "die" },
          { de: "Vater / Papa", vi: "Bố / Ba", article: "der" },
          { de: "Mutter / Mama", vi: "Mẹ / Má", article: "die" },
          { de: "Eltern", vi: "Bố mẹ", article: "die (Pl.)" },
          { de: "Sohn", vi: "Con trai", article: "der" },
          { de: "Tochter", vi: "Con gái", article: "die" },
          { de: "Bruder", vi: "Anh/em trai", article: "der" },
          { de: "Schwester", vi: "Chị/em gái", article: "die" },
          { de: "Großvater / Opa", vi: "Ông", article: "der" },
          { de: "Großmutter / Oma", vi: "Bà", article: "die" },
          { de: "Großeltern", vi: "Ông bà", article: "die (Pl.)" },
          { de: "Onkel", vi: "Chú/bác/cậu", article: "der" },
          { de: "Tante", vi: "Cô/dì/bác gái", article: "die" },
          { de: "Cousin", vi: "Anh/em họ (nam)", article: "der" },
          { de: "Cousine", vi: "Chị/em họ (nữ)", article: "die" },
          { de: "Ehemann / Mann", vi: "Chồng", article: "der" },
          { de: "Ehefrau / Frau", vi: "Vợ", article: "die" },
          { de: "Kind", vi: "Đứa trẻ / Con", article: "das" },
          { de: "Kinder", vi: "Các con / Trẻ em", article: "die (Pl.)" },
          { de: "Baby", vi: "Em bé", article: "das" },
        ],
      },
      {
        type: "grammar",
        titleDe: "Possessivartikel: mein und dein",
        titleVi: "Đại từ sở hữu: mein (của tôi) và dein (của bạn)",
        rule:
          "mein/dein + maskulin/neutrum Nomen (keine Endung), meine/deine + feminin/Plural Nomen (Endung -e).",
        ruleVi:
          "Đại từ sở hữu 'mein' (của tôi) và 'dein' (của bạn) thay đổi theo giống của danh từ đi kèm. Với danh từ giống đực (der) và giống trung (das): mein / dein (không thêm đuôi). Với danh từ giống cái (die) và số nhiều: meine / deine (thêm -e). So sánh với tiếng Việt: trong tiếng Việt, 'của tôi' không thay đổi, nhưng trong tiếng Đức phải chia theo giống. Ví dụ: mein Vater (bố tôi — der Vater, giống đực), meine Mutter (mẹ tôi — die Mutter, giống cái), mein Kind (con tôi — das Kind, giống trung), meine Kinder (các con tôi — số nhiều).",
        examples: [
          { de: "Das ist mein Vater.", vi: "Đây là bố tôi." },
          { de: "Das ist meine Mutter.", vi: "Đây là mẹ tôi." },
          { de: "Mein Bruder heißt Tung.", vi: "Anh/em trai tôi tên là Tùng." },
          { de: "Meine Schwester ist Studentin.", vi: "Chị/em gái tôi là sinh viên." },
          { de: "Wie heißt dein Vater?", vi: "Bố bạn tên là gì?" },
          { de: "Ist das deine Tochter?", vi: "Đây có phải con gái bạn không?" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Meine Familie vorstellen",
        titleVi: "Giới thiệu gia đình tôi",
        lines: [
          {
            speaker: "Lan",
            de: "Hast du Geschwister, Anna?",
            vi: "Bạn có anh chị em không, Anna?",
          },
          {
            speaker: "Anna",
            de: "Ja, ich habe einen Bruder und eine Schwester.",
            vi: "Có, tôi có một anh/em trai và một chị/em gái.",
          },
          {
            speaker: "Lan",
            de: "Wie heißt dein Bruder?",
            vi: "Anh/em trai bạn tên là gì?",
          },
          {
            speaker: "Anna",
            de: "Mein Bruder heißt Max. Er ist fünfzehn Jahre alt.",
            vi: "Anh/em trai tôi tên Max. Anh ấy mười lăm tuổi.",
          },
          {
            speaker: "Lan",
            de: "Und deine Schwester?",
            vi: "Còn chị/em gái bạn?",
          },
          {
            speaker: "Anna",
            de: "Meine Schwester heißt Lisa. Sie ist zwanzig und studiert in München.",
            vi: "Chị/em gái tôi tên Lisa. Chị ấy hai mươi tuổi và đang học ở München.",
          },
          {
            speaker: "Anna",
            de: "Und du? Hast du Geschwister?",
            vi: "Còn bạn? Bạn có anh chị em không?",
          },
          {
            speaker: "Lan",
            de: "Ja, ich habe zwei Brüder. Sie wohnen in Vietnam.",
            vi: "Có, tôi có hai anh/em trai. Họ sống ở Việt Nam.",
          },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Familienstand",
        titleVi: "Tình trạng hôn nhân",
        words: [
          { de: "ledig", vi: "Độc thân" },
          { de: "verheiratet", vi: "Đã kết hôn" },
          { de: "geschieden", vi: "Đã ly hôn" },
          { de: "verwitwet", vi: "Góa" },
          { de: "Geschwister", vi: "Anh chị em", article: "die (Pl.)" },
          { de: "Einzelkind", vi: "Con một", article: "das" },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Beschreib deine Familie!",
        titleVi: "Bài tập: Hãy mô tả gia đình bạn!",
        instruction:
          "Beschreib deine Familie. Wie viele Personen sind in deiner Familie? Hast du Geschwister? Wie heißen sie?",
        instructionVi:
          "Hãy mô tả gia đình bạn bằng tiếng Đức. Trả lời các câu hỏi: Gia đình bạn có bao nhiêu người? Bạn có anh chị em không? Họ tên gì? Bao nhiêu tuổi? Ví dụ: 'Meine Familie hat fünf Personen: mein Vater, meine Mutter, meine zwei Brüder und ich. Mein Vater heißt... Er ist... Jahre alt.'",
      },
    ],
  },

  // --- Chapter 2, Lesson 2 ---
  {
    id: "a1-ch2-l2",
    chapterId: 2,
    lessonNumber: 2,
    title: "Bestimmter und unbestimmter Artikel",
    titleVi: "Mạo từ xác định và không xác định (der/die/das, ein/eine)",
    type: "Grammatik",
    objectives: [
      "Hiểu hệ thống giống (Genus) trong tiếng Đức: giống đực, giống cái, giống trung",
      "Sử dụng đúng mạo từ xác định: der, die, das",
      "Sử dụng đúng mạo từ không xác định: ein, eine",
      "Nhận biết một số quy tắc để đoán giống của danh từ",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das Genus: maskulin, feminin, neutral",
        titleVi: "Giống của danh từ: giống đực, giống cái, giống trung",
        textDe:
          "Jedes Nomen im Deutschen hat ein Genus: maskulin (der), feminin (die) oder neutral (das). Man muss das Genus mit dem Nomen zusammen lernen.",
        textVi:
          "Mỗi danh từ trong tiếng Đức đều có một giống (Genus): giống đực (maskulin — der), giống cái (feminin — die), hoặc giống trung (neutral — das). Đây là một khái niệm KHÔNG có trong tiếng Việt, nên đây là một trong những điều khó nhất khi học tiếng Đức. Quy tắc quan trọng nhất: LUÔN học danh từ cùng với mạo từ của nó! Không học 'Tisch = bàn', mà phải học 'der Tisch = cái bàn'. Một số mẹo để nhớ giống: Giống đực (der) thường là: ngày trong tuần (der Montag), tháng (der Januar), mùa (der Sommer), nghề nghiệp nam (-er: der Lehrer). Giống cái (die) thường là: danh từ đuôi -ung (die Wohnung), -heit/-keit (die Freiheit), -tion (die Information), nghề nghiệp nữ (-in: die Lehrerin). Giống trung (das) thường là: danh từ đuôi -chen (das Mädchen), -ment (das Dokument), động từ danh từ hóa (das Essen).",
      },
      {
        type: "grammar",
        titleDe: "Bestimmter Artikel: der, die, das",
        titleVi: "Mạo từ xác định: der, die, das",
        rule:
          "der = maskulin, die = feminin, das = neutral, die = Plural. Der bestimmte Artikel wird benutzt, wenn man über etwas Bekanntes spricht.",
        ruleVi:
          "Mạo từ xác định (bestimmter Artikel) tương đương với 'the' trong tiếng Anh, hay 'cái/con/chiếc...' trong tiếng Việt khi nói về một thứ cụ thể đã biết. der = giống đực (der Vater — người bố), die = giống cái (die Mutter — người mẹ), das = giống trung (das Kind — đứa trẻ), die = số nhiều cho tất cả các giống (die Kinder — những đứa trẻ). Dùng mạo từ xác định khi: nói về thứ cụ thể đã biết, hoặc khi nhắc lại lần thứ hai.",
        examples: [
          { de: "Der Mann ist groß.", vi: "Người đàn ông cao. (giống đực)" },
          { de: "Die Frau ist nett.", vi: "Người phụ nữ tốt bụng. (giống cái)" },
          { de: "Das Kind ist klein.", vi: "Đứa trẻ nhỏ. (giống trung)" },
          { de: "Die Kinder spielen.", vi: "Những đứa trẻ đang chơi. (số nhiều)" },
        ],
      },
      {
        type: "grammar",
        titleDe: "Unbestimmter Artikel: ein, eine",
        titleVi: "Mạo từ không xác định: ein, eine",
        rule:
          "ein = maskulin/neutral, eine = feminin. Im Plural gibt es keinen unbestimmten Artikel.",
        ruleVi:
          "Mạo từ không xác định (unbestimmter Artikel) tương đương với 'a/an' trong tiếng Anh, hay 'một' trong tiếng Việt. ein = giống đực và giống trung (ein Mann — một người đàn ông, ein Kind — một đứa trẻ), eine = giống cái (eine Frau — một người phụ nữ). Số nhiều KHÔNG có mạo từ không xác định (tương đương 'some' trong tiếng Anh). Dùng mạo từ không xác định khi: nói về thứ gì đó lần đầu tiên, hoặc nói chung chung. So sánh: 'Das ist ein Mann.' (Đây là một người đàn ông — lần đầu nhắc đến) vs. 'Der Mann ist groß.' (Người đàn ông ấy cao — đã biết ai).",
        examples: [
          { de: "Das ist ein Tisch.", vi: "Đây là một cái bàn. (der Tisch — giống đực)" },
          {
            de: "Das ist eine Lampe.",
            vi: "Đây là một cái đèn. (die Lampe — giống cái)",
          },
          { de: "Das ist ein Buch.", vi: "Đây là một quyển sách. (das Buch — giống trung)" },
          {
            de: "Das sind Bücher.",
            vi: "Đây là những quyển sách. (số nhiều — không có mạo từ)",
          },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Nomen und Artikel lernen",
        titleVi: "Học danh từ và mạo từ",
        words: [
          { de: "Mann", vi: "Người đàn ông", article: "der" },
          { de: "Frau", vi: "Người phụ nữ", article: "die" },
          { de: "Kind", vi: "Đứa trẻ", article: "das" },
          { de: "Tisch", vi: "Cái bàn", article: "der" },
          { de: "Lampe", vi: "Cái đèn", article: "die" },
          { de: "Buch", vi: "Quyển sách", article: "das" },
          { de: "Stuhl", vi: "Cái ghế", article: "der" },
          { de: "Tasche", vi: "Cái túi", article: "die" },
          { de: "Handy", vi: "Điện thoại di động", article: "das" },
          { de: "Computer", vi: "Máy tính", article: "der" },
          { de: "Uhr", vi: "Đồng hồ", article: "die" },
          { de: "Fenster", vi: "Cửa sổ", article: "das" },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: der, die oder das?",
        titleVi: "Bài tập: der, die hay das?",
        instruction:
          "Ergänze den richtigen Artikel: 1) ___ Vater 2) ___ Mutter 3) ___ Kind 4) ___ Tisch 5) ___ Lampe 6) ___ Buch 7) ___ Schwester 8) ___ Bruder",
        instructionVi:
          "Hãy điền mạo từ đúng (der, die, das): 1) ___ Vater (bố) 2) ___ Mutter (mẹ) 3) ___ Kind (đứa trẻ) 4) ___ Tisch (cái bàn) 5) ___ Lampe (cái đèn) 6) ___ Buch (quyển sách) 7) ___ Schwester (chị/em gái) 8) ___ Bruder (anh/em trai). Đáp án: 1) der, 2) die, 3) das, 4) der, 5) die, 6) das, 7) die, 8) der.",
      },
    ],
  },

  // --- Chapter 2, Lesson 3 ---
  {
    id: "a1-ch2-l3",
    chapterId: 2,
    lessonNumber: 3,
    title: "Personen beschreiben",
    titleVi: "Mô tả người",
    type: "Fertigkeit",
    objectives: [
      "Sử dụng tính từ để mô tả ngoại hình",
      "Sử dụng tính từ để mô tả tính cách",
      "Mô tả một người bằng các câu đơn giản",
      "Hiểu cấu trúc: Er/Sie ist + tính từ, Er/Sie hat + danh từ",
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Aussehen — Wie sieht er/sie aus?",
        titleVi: "Ngoại hình — Anh ấy/Cô ấy trông như thế nào?",
        words: [
          { de: "groß", vi: "Cao" },
          { de: "klein", vi: "Thấp / nhỏ" },
          { de: "schlank", vi: "Mảnh mai" },
          { de: "dick", vi: "Béo / mập" },
          { de: "dünn", vi: "Gầy / ốm" },
          { de: "jung", vi: "Trẻ" },
          { de: "alt", vi: "Già" },
          { de: "hübsch", vi: "Đẹp / xinh" },
          { de: "lange Haare", vi: "Tóc dài" },
          { de: "kurze Haare", vi: "Tóc ngắn" },
          { de: "schwarze Haare", vi: "Tóc đen" },
          { de: "blonde Haare", vi: "Tóc vàng" },
          { de: "braune Haare", vi: "Tóc nâu" },
          { de: "braune Augen", vi: "Mắt nâu" },
          { de: "blaue Augen", vi: "Mắt xanh" },
          { de: "eine Brille", vi: "Kính mắt" },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Charakter — Wie ist er/sie?",
        titleVi: "Tính cách — Anh ấy/Cô ấy như thế nào?",
        words: [
          { de: "nett", vi: "Tốt bụng / dễ thương" },
          { de: "freundlich", vi: "Thân thiện" },
          { de: "lustig", vi: "Vui tính / hài hước" },
          { de: "ruhig", vi: "Điềm tĩnh / yên lặng" },
          { de: "sportlich", vi: "Thể thao / năng động" },
          { de: "intelligent", vi: "Thông minh" },
          { de: "fleißig", vi: "Chăm chỉ" },
          { de: "faul", vi: "Lười biếng" },
          { de: "schüchtern", vi: "Nhút nhát" },
          { de: "streng", vi: "Nghiêm khắc" },
          { de: "lieb", vi: "Dễ thương / ngoan" },
          { de: "sympathisch", vi: "Dễ mến" },
        ],
      },
      {
        type: "grammar",
        titleDe: "Personen beschreiben: sein + Adjektiv / haben + Nomen",
        titleVi: "Mô tả người: sein + tính từ / haben + danh từ",
        rule:
          "Er/Sie ist + Adjektiv (z.B. Er ist groß). Er/Sie hat + Nomen (z.B. Sie hat lange Haare).",
        ruleVi:
          "Để mô tả người trong tiếng Đức, có hai cấu trúc chính: 1) 'sein' (là) + tính từ: dùng để nói về đặc điểm, tính cách. Ví dụ: Er ist groß. (Anh ấy cao.) Sie ist freundlich. (Cô ấy thân thiện.) 2) 'haben' (có) + danh từ: dùng để nói về đặc điểm thể chất mà người đó 'sở hữu'. Ví dụ: Er hat braune Augen. (Anh ấy có mắt nâu.) Sie hat lange Haare. (Cô ấy có tóc dài.) Chia động từ 'haben': ich habe, du hast, er/sie/es hat, wir haben, ihr habt, sie/Sie haben.",
        examples: [
          { de: "Mein Vater ist groß und sportlich.", vi: "Bố tôi cao và năng động." },
          {
            de: "Meine Mutter ist klein und sehr freundlich.",
            vi: "Mẹ tôi thấp và rất thân thiện.",
          },
          {
            de: "Mein Bruder hat schwarze Haare und braune Augen.",
            vi: "Anh trai tôi có tóc đen và mắt nâu.",
          },
          { de: "Meine Schwester ist jung und hübsch.", vi: "Em gái tôi trẻ và xinh đẹp." },
          {
            de: "Mein Opa hat eine Brille. Er ist sehr nett.",
            vi: "Ông tôi đeo kính. Ông ấy rất tốt bụng.",
          },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Über Freunde sprechen",
        titleVi: "Nói về bạn bè",
        lines: [
          {
            speaker: "Minh",
            de: "Mein bester Freund heißt Tuan.",
            vi: "Bạn thân nhất của tôi tên Tuấn.",
          },
          { speaker: "Anna", de: "Wie ist er?", vi: "Anh ấy như thế nào?" },
          {
            speaker: "Minh",
            de: "Er ist groß und schlank. Er hat kurze schwarze Haare.",
            vi: "Anh ấy cao và mảnh mai. Anh ấy có tóc đen ngắn.",
          },
          { speaker: "Anna", de: "Ist er nett?", vi: "Anh ấy tốt bụng không?" },
          {
            speaker: "Minh",
            de: "Ja, er ist sehr nett und lustig. Er ist auch sehr sportlich.",
            vi: "Có, anh ấy rất tốt bụng và vui tính. Anh ấy cũng rất thể thao.",
          },
          {
            speaker: "Anna",
            de: "Und wo wohnt er?",
            vi: "Và anh ấy sống ở đâu?",
          },
          {
            speaker: "Minh",
            de: "Er wohnt in Hanoi. Er ist Student.",
            vi: "Anh ấy sống ở Hà Nội. Anh ấy là sinh viên.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Beschreib eine Person!",
        titleVi: "Bài tập: Mô tả một người!",
        instruction:
          "Beschreib deinen besten Freund oder deine beste Freundin. Benutze 'ist + Adjektiv' und 'hat + Nomen'.",
        instructionVi:
          "Hãy mô tả bạn thân nhất của bạn. Sử dụng cấu trúc 'ist + tính từ' và 'hat + danh từ'. Viết ít nhất 5 câu. Ví dụ: 'Meine beste Freundin heißt Mai. Sie ist klein und schlank. Sie hat lange schwarze Haare und braune Augen. Sie ist sehr intelligent und fleißig. Sie ist auch sehr lustig.'",
      },
    ],
  },

  // --- Chapter 2, Lesson 4 ---
  {
    id: "a1-ch2-l4",
    chapterId: 2,
    lessonNumber: 4,
    title: "Foto beschreiben",
    titleVi: "Mô tả ảnh",
    type: "Integration",
    objectives: [
      "Mô tả một bức ảnh gia đình",
      "Tổng hợp từ vựng gia đình, tính từ mô tả, mạo từ",
      "Nói về gia đình mình một cách tự nhiên",
      "Sử dụng cấu trúc: Das ist... / Das sind... / Links/rechts ist...",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Ein Foto beschreiben",
        titleVi: "Mô tả một bức ảnh",
        textDe:
          "Wenn man ein Foto beschreibt, sagt man zuerst, was man sieht: 'Auf dem Foto sehe ich...' Dann beschreibt man die Personen: 'Das ist mein Vater. Er ist groß.' Man kann auch sagen, wo die Personen stehen: 'Links ist meine Mutter.'",
        textVi:
          "Khi mô tả một bức ảnh, đầu tiên hãy nói những gì bạn thấy: 'Auf dem Foto sehe ich...' (Trên bức ảnh tôi thấy...) hoặc 'Auf dem Foto sind...' (Trên bức ảnh có...). Sau đó mô tả từng người: 'Das ist mein Vater.' (Đây là bố tôi.) Để chỉ vị trí: links = bên trái, rechts = bên phải, in der Mitte = ở giữa, vorne = phía trước, hinten = phía sau. Ví dụ: 'Links ist meine Mutter.' (Bên trái là mẹ tôi.) 'In der Mitte bin ich.' (Ở giữa là tôi.)",
      },
      {
        type: "vocabulary",
        titleDe: "Position und Beschreibung",
        titleVi: "Vị trí và mô tả",
        words: [
          { de: "auf dem Foto", vi: "Trên bức ảnh" },
          { de: "links", vi: "Bên trái" },
          { de: "rechts", vi: "Bên phải" },
          { de: "in der Mitte", vi: "Ở giữa" },
          { de: "vorne", vi: "Phía trước" },
          { de: "hinten", vi: "Phía sau" },
          { de: "neben", vi: "Bên cạnh" },
          { de: "Das ist...", vi: "Đây là..." },
          { de: "Das sind...", vi: "Đây là (nhiều người)..." },
          { de: "Hier sieht man...", vi: "Ở đây ta thấy..." },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Mein Familienfoto",
        titleVi: "Ảnh gia đình tôi",
        lines: [
          {
            speaker: "Anna",
            de: "Zeig mal! Ist das deine Familie?",
            vi: "Cho xem nào! Đây có phải gia đình bạn không?",
          },
          {
            speaker: "Lan",
            de: "Ja! Auf dem Foto ist meine ganze Familie.",
            vi: "Đúng rồi! Trên bức ảnh là cả gia đình tôi.",
          },
          {
            speaker: "Anna",
            de: "Wer ist der Mann links?",
            vi: "Ai là người đàn ông bên trái?",
          },
          {
            speaker: "Lan",
            de: "Das ist mein Vater. Er heißt Tran Van Hai. Er ist fünfzig Jahre alt.",
            vi: "Đó là bố tôi. Bố tên Trần Văn Hải. Bố năm mươi tuổi.",
          },
          {
            speaker: "Anna",
            de: "Und die Frau neben ihm?",
            vi: "Và người phụ nữ bên cạnh ông ấy?",
          },
          {
            speaker: "Lan",
            de: "Das ist meine Mutter. Sie heißt Nguyen Thi Hoa. Sie ist siebenundvierzig.",
            vi: "Đó là mẹ tôi. Mẹ tên Nguyễn Thị Hoa. Mẹ bốn mươi bảy tuổi.",
          },
          {
            speaker: "Anna",
            de: "Deine Mutter ist sehr hübsch!",
            vi: "Mẹ bạn rất đẹp!",
          },
          { speaker: "Lan", de: "Danke! Ja, sie ist sehr nett und freundlich.", vi: "Cảm ơn! Đúng vậy, mẹ rất tốt bụng và thân thiện." },
          {
            speaker: "Anna",
            de: "Und wer ist das Kind in der Mitte?",
            vi: "Và ai là đứa trẻ ở giữa?",
          },
          {
            speaker: "Lan",
            de: "Das ist mein kleiner Bruder Duc. Er ist zehn Jahre alt. Er ist sehr lustig!",
            vi: "Đó là em trai tôi, Đức. Em ấy mười tuổi. Em ấy rất vui tính!",
          },
        ],
      },
      {
        type: "explanation",
        titleDe: "Über die Familie erzählen",
        titleVi: "Kể về gia đình",
        textDe:
          "Um über die Familie zu erzählen, kann man mehrere Sätze verbinden: 'Mein Vater heißt... Er ist... Jahre alt. Er ist... Er arbeitet als...'",
        textVi:
          "Để kể về gia đình, hãy nối nhiều câu lại. Mẫu kể về gia đình: 'Meine Familie hat ... Personen.' (Gia đình tôi có ... người.) 'Mein Vater heißt ...' (Bố tôi tên ...) 'Er ist ... Jahre alt.' (Ông ấy ... tuổi.) 'Er ist ... (tính từ).' 'Er arbeitet als ...' (Ông ấy làm nghề ...) 'Meine Mutter heißt ...' (Mẹ tôi tên ...) Và tương tự cho các thành viên khác. Để nói về sở thích: 'Er/Sie mag...' (Anh ấy/Cô ấy thích...) hoặc 'Er/Sie spielt gern...' (Anh ấy/Cô ấy thích chơi...).",
      },
      {
        type: "practice",
        titleDe: "Übung: Beschreib dein Familienfoto!",
        titleVi: "Bài tập: Mô tả ảnh gia đình bạn!",
        instruction:
          "Beschreib ein Familienfoto. Sage, wer auf dem Foto ist, wo die Personen stehen und wie sie aussehen. Schreib mindestens 8 Sätze.",
        instructionVi:
          "Hãy tưởng tượng hoặc dùng một bức ảnh gia đình thật, rồi mô tả bằng tiếng Đức. Nói ai ở trên ảnh, họ đứng ở đâu, và trông như thế nào. Viết ít nhất 8 câu. Bắt đầu với: 'Auf dem Foto ist meine Familie. Links ist mein Vater. Er heißt... Er ist... Jahre alt. Er ist groß und...' Dùng tất cả những gì bạn đã học: mạo từ, đại từ sở hữu, tính từ, động từ sein và haben.",
      },
    ],
  },

  // =====================================================================
  // CHAPTER 3: Essen & Trinken
  // =====================================================================

  // --- Chapter 3, Lesson 1 ---
  {
    id: "a1-ch3-l1",
    chapterId: 3,
    lessonNumber: 1,
    title: "Was möchtest du essen?",
    titleVi: "Bạn muốn ăn gì?",
    type: "Einführung",
    objectives: [
      "Học từ vựng về đồ ăn và đồ uống",
      "Sử dụng động từ 'mögen' (thích) và 'möchten' (muốn)",
      "Nói về sở thích ăn uống: Ich mag... / Ich mag... nicht",
      "So sánh một số món ăn Đức và Việt Nam",
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Essen — Lebensmittel",
        titleVi: "Đồ ăn — Thực phẩm",
        words: [
          { de: "Brot", vi: "Bánh mì", article: "das" },
          { de: "Brötchen", vi: "Bánh mì tròn nhỏ", article: "das" },
          { de: "Butter", vi: "Bơ", article: "die" },
          { de: "Käse", vi: "Phô mai", article: "der" },
          { de: "Wurst", vi: "Xúc xích", article: "die" },
          { de: "Schinken", vi: "Giăm bông", article: "der" },
          { de: "Ei", vi: "Trứng", article: "das" },
          { de: "Reis", vi: "Cơm / Gạo", article: "der" },
          { de: "Nudeln", vi: "Mì (số nhiều)", article: "die (Pl.)" },
          { de: "Suppe", vi: "Súp / Canh", article: "die" },
          { de: "Fleisch", vi: "Thịt", article: "das" },
          { de: "Hähnchen", vi: "Thịt gà", article: "das" },
          { de: "Fisch", vi: "Cá", article: "der" },
          { de: "Salat", vi: "Salad / Rau trộn", article: "der" },
          { de: "Obst", vi: "Trái cây", article: "das" },
          { de: "Apfel", vi: "Quả táo", article: "der" },
          { de: "Banane", vi: "Quả chuối", article: "die" },
          { de: "Kuchen", vi: "Bánh ngọt", article: "der" },
          { de: "Schokolade", vi: "Sô-cô-la", article: "die" },
          { de: "Gemüse", vi: "Rau", article: "das" },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Getränke",
        titleVi: "Đồ uống",
        words: [
          { de: "Wasser", vi: "Nước", article: "das" },
          { de: "Kaffee", vi: "Cà phê", article: "der" },
          { de: "Tee", vi: "Trà", article: "der" },
          { de: "Milch", vi: "Sữa", article: "die" },
          { de: "Saft", vi: "Nước ép", article: "der" },
          { de: "Orangensaft", vi: "Nước cam", article: "der" },
          { de: "Bier", vi: "Bia", article: "das" },
          { de: "Wein", vi: "Rượu vang", article: "der" },
          { de: "Cola", vi: "Coca-Cola", article: "die" },
          { de: "Limonade", vi: "Nước chanh", article: "die" },
        ],
      },
      {
        type: "grammar",
        titleDe: "mögen und möchten",
        titleVi: "mögen (thích) và möchten (muốn)",
        rule:
          "mögen: ich mag, du magst, er/sie/es mag, wir mögen, ihr mögt, sie/Sie mögen. möchten: ich möchte, du möchtest, er/sie/es möchte, wir möchten, ihr möchtet, sie/Sie möchten.",
        ruleVi:
          "'mögen' (thích) dùng để nói về sở thích chung chung, chỉ thích hay không thích một thứ gì đó. Chia: ich mag, du magst, er/sie/es mag, wir mögen, ihr mögt, sie/Sie mögen. Phủ định: ich mag ... nicht (tôi không thích...). 'möchten' (muốn) là dạng lịch sự của 'wollen', dùng để nói về điều bạn muốn làm hoặc muốn có (ngay lúc này). Chia: ich möchte, du möchtest, er/sie/es möchte, wir möchten, ihr möchtet, sie/Sie möchten. Sự khác biệt: 'Ich mag Kaffee.' = Tôi thích cà phê (nói chung). 'Ich möchte einen Kaffee.' = Tôi muốn một ly cà phê (lúc này). Lưu ý: 'möchten' lịch sự hơn 'wollen', giống như 'would like' vs 'want' trong tiếng Anh.",
        examples: [
          { de: "Ich mag Reis.", vi: "Tôi thích cơm. (sở thích chung)" },
          { de: "Ich mag keinen Käse.", vi: "Tôi không thích phô mai." },
          { de: "Magst du Schokolade?", vi: "Bạn có thích sô-cô-la không?" },
          {
            de: "Ich möchte einen Kaffee, bitte.",
            vi: "Tôi muốn một ly cà phê, xin vui lòng. (gọi món)",
          },
          {
            de: "Was möchtest du essen?",
            vi: "Bạn muốn ăn gì?",
          },
          {
            de: "Er möchte eine Suppe.",
            vi: "Anh ấy muốn một bát súp.",
          },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Was isst du gern?",
        titleVi: "Bạn thích ăn gì?",
        lines: [
          {
            speaker: "Anna",
            de: "Was isst du gern, Minh?",
            vi: "Bạn thích ăn gì, Minh?",
          },
          {
            speaker: "Minh",
            de: "Ich esse gern Reis mit Fisch. Das ist typisch vietnamesisch.",
            vi: "Tôi thích ăn cơm với cá. Đó là món Việt Nam điển hình.",
          },
          {
            speaker: "Anna",
            de: "Oh, lecker! Magst du auch deutsches Essen?",
            vi: "Ồ, ngon nhỉ! Bạn có thích đồ ăn Đức không?",
          },
          {
            speaker: "Minh",
            de: "Ja, ich mag Brot und Wurst. Aber ich mag keinen Käse.",
            vi: "Có, tôi thích bánh mì và xúc xích. Nhưng tôi không thích phô mai.",
          },
          {
            speaker: "Anna",
            de: "Was trinkst du gern?",
            vi: "Bạn thích uống gì?",
          },
          {
            speaker: "Minh",
            de: "Ich trinke gern vietnamesischen Kaffee. Und du?",
            vi: "Tôi thích uống cà phê Việt Nam. Còn bạn?",
          },
          {
            speaker: "Anna",
            de: "Ich trinke gern Tee. Und ich esse gern Kuchen!",
            vi: "Tôi thích uống trà. Và tôi thích ăn bánh ngọt!",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Was magst du?",
        titleVi: "Bài tập: Bạn thích gì?",
        instruction:
          "Schreib 5 Sätze: Was isst und trinkst du gern? Was magst du nicht? Benutze 'Ich mag... / Ich mag... nicht / Ich esse gern... / Ich trinke gern...'",
        instructionVi:
          "Viết 5 câu: Bạn thích ăn và uống gì? Bạn không thích gì? Sử dụng: 'Ich mag...' (Tôi thích...), 'Ich mag... nicht.' (Tôi không thích...), 'Ich esse gern...' (Tôi thích ăn...), 'Ich trinke gern...' (Tôi thích uống...). Ví dụ: 'Ich esse gern Reis. Ich mag Suppe. Ich trinke gern Tee. Ich mag keinen Käse. Ich esse nicht gern Wurst.'",
      },
    ],
  },

  // --- Chapter 3, Lesson 2 ---
  {
    id: "a1-ch3-l2",
    chapterId: 3,
    lessonNumber: 2,
    title: "Akkusativ — Ich nehme einen Kaffee",
    titleVi: "Cách Akkusativ — Tôi gọi một ly cà phê",
    type: "Grammatik",
    objectives: [
      "Hiểu cách Akkusativ (tân ngữ trực tiếp) trong tiếng Đức",
      "Biết mạo từ thay đổi thế nào ở cách Akkusativ",
      "Sử dụng phủ định 'kein/keine' với Akkusativ",
      "Áp dụng Akkusativ khi gọi món ăn, đồ uống",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Was ist der Akkusativ?",
        titleVi: "Cách Akkusativ là gì?",
        textDe:
          "Der Akkusativ ist der 4. Fall im Deutschen. Er wird benutzt für das direkte Objekt (Wen oder Was?). Beispiel: Ich trinke einen Kaffee. 'einen Kaffee' ist das direkte Objekt im Akkusativ.",
        textVi:
          "Akkusativ (cách 4) là một khái niệm ngữ pháp KHÔNG có trong tiếng Việt. Trong tiếng Việt, danh từ không thay đổi dù đóng vai trò gì trong câu. Nhưng trong tiếng Đức, mạo từ thay đổi khi danh từ là tân ngữ trực tiếp (direct object). Tân ngữ trực tiếp trả lời câu hỏi: Wen? (Ai?) hoặc Was? (Cái gì?) — tức là vật/người chịu tác động của hành động. Ví dụ: 'Ich trinke einen Kaffee.' — 'Tôi uống một ly cà phê.' Ở đây 'einen Kaffee' là tân ngữ trực tiếp (cái bị uống). Tin tốt: Chỉ giống ĐỰC thay đổi ở Akkusativ! Giống cái và giống trung giữ nguyên.",
      },
      {
        type: "grammar",
        titleDe: "Artikel im Akkusativ",
        titleVi: "Mạo từ ở cách Akkusativ",
        rule:
          "Nominativ → Akkusativ: der → den, ein → einen, kein → keinen. Die, das, eine, ein (neutral), keine bleiben gleich.",
        ruleVi:
          "Khi chuyển từ Nominativ (chủ ngữ) sang Akkusativ (tân ngữ), chỉ giống ĐỰC thay đổi: der → den, ein → einen, kein → keinen, mein → meinen. Giống cái: die → die, eine → eine, keine → keine (KHÔNG đổi). Giống trung: das → das, ein → ein, kein → kein (KHÔNG đổi). Số nhiều: die → die, keine → keine (KHÔNG đổi). Tóm tắt dễ nhớ: Chỉ cần nhớ 'giống đực thêm -en' ở Akkusativ!",
        examples: [
          {
            de: "Ich nehme den Salat. (der Salat → den Salat)",
            vi: "Tôi lấy món salad. (giống đực: der → den)",
          },
          {
            de: "Ich nehme die Suppe. (die Suppe → die Suppe)",
            vi: "Tôi lấy bát súp. (giống cái: không đổi)",
          },
          {
            de: "Ich nehme das Brot. (das Brot → das Brot)",
            vi: "Tôi lấy ổ bánh mì. (giống trung: không đổi)",
          },
          {
            de: "Ich möchte einen Kaffee. (ein Kaffee → einen Kaffee)",
            vi: "Tôi muốn một ly cà phê. (giống đực: ein → einen)",
          },
          {
            de: "Ich möchte eine Cola. (eine Cola → eine Cola)",
            vi: "Tôi muốn một ly Coca. (giống cái: không đổi)",
          },
          {
            de: "Ich möchte ein Wasser. (ein Wasser → ein Wasser)",
            vi: "Tôi muốn một ly nước. (giống trung: không đổi)",
          },
        ],
      },
      {
        type: "grammar",
        titleDe: 'Negation mit "kein"',
        titleVi: 'Phủ định với "kein"',
        rule:
          "kein/keine verneint Nomen mit unbestimmtem Artikel oder ohne Artikel. Akkusativ: keinen (maskulin), keine (feminin), kein (neutral), keine (Plural).",
        ruleVi:
          "'kein/keine' dùng để phủ định danh từ (tương đương 'không có' trong tiếng Việt). 'kein' dùng thay cho 'ein' trong câu phủ định. Ở Nominativ: kein (giống đực/trung), keine (giống cái/số nhiều). Ở Akkusativ: keinen (giống đực), keine (giống cái), kein (giống trung), keine (số nhiều). Phân biệt 'nicht' và 'kein': 'nicht' phủ định động từ, tính từ, trạng từ. 'kein' phủ định danh từ. Ví dụ: 'Ich trinke nicht.' (Tôi không uống.) vs 'Ich trinke keinen Kaffee.' (Tôi không uống cà phê.)",
        examples: [
          {
            de: "Ich habe keinen Hunger.",
            vi: "Tôi không đói. (der Hunger — giống đực → keinen)",
          },
          {
            de: "Ich möchte keine Suppe.",
            vi: "Tôi không muốn súp. (die Suppe — giống cái → keine)",
          },
          {
            de: "Ich trinke kein Bier.",
            vi: "Tôi không uống bia. (das Bier — giống trung → kein)",
          },
          {
            de: "Ich esse keine Nudeln.",
            vi: "Tôi không ăn mì. (die Nudeln — số nhiều → keine)",
          },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Im Café bestellen",
        titleVi: "Gọi đồ ở quán cà phê",
        lines: [
          {
            speaker: "Kellner",
            de: "Guten Tag! Was möchten Sie?",
            vi: "Xin chào! Quý khách muốn dùng gì?",
          },
          {
            speaker: "Lan",
            de: "Ich möchte einen Kaffee und ein Stück Kuchen, bitte.",
            vi: "Tôi muốn một ly cà phê và một miếng bánh, xin vui lòng.",
          },
          {
            speaker: "Kellner",
            de: "Möchten Sie Milch und Zucker zum Kaffee?",
            vi: "Quý khách có muốn sữa và đường cho cà phê không?",
          },
          {
            speaker: "Lan",
            de: "Ja, Milch bitte. Aber keinen Zucker.",
            vi: "Vâng, cho sữa. Nhưng không đường.",
          },
          {
            speaker: "Kellner",
            de: "Und für Sie?",
            vi: "Và cho quý ông/bà?",
          },
          {
            speaker: "Minh",
            de: "Ich nehme einen Orangensaft und einen Salat.",
            vi: "Tôi lấy một ly nước cam và một đĩa salad.",
          },
          {
            speaker: "Kellner",
            de: "Sehr gern. Kommt sofort!",
            vi: "Được ạ. Sẽ mang ra ngay!",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Akkusativ üben",
        titleVi: "Bài tập: Luyện tập Akkusativ",
        instruction:
          "Ergänze den richtigen Artikel im Akkusativ: 1) Ich trinke ___ Tee. (der Tee) 2) Ich esse ___ Banane. (die Banane) 3) Ich nehme ___ Brot. (das Brot) 4) Ich möchte ___ Salat. (der Salat) 5) Ich trinke ___ Bier. (kein)",
        instructionVi:
          "Điền mạo từ đúng ở cách Akkusativ: 1) Ich trinke ___ Tee. (der Tee — giống đực) 2) Ich esse ___ Banane. (die Banane — giống cái) 3) Ich nehme ___ Brot. (das Brot — giống trung) 4) Ich möchte ___ Salat. (der Salat — giống đực, dùng ein) 5) Ich trinke ___ Bier. (das Bier — phủ định). Đáp án: 1) den, 2) die, 3) das, 4) einen, 5) kein.",
      },
    ],
  },

  // --- Chapter 3, Lesson 3 ---
  {
    id: "a1-ch3-l3",
    chapterId: 3,
    lessonNumber: 3,
    title: "Im Restaurant bestellen",
    titleVi: "Gọi món trong nhà hàng",
    type: "Fertigkeit",
    objectives: [
      "Gọi món ăn và đồ uống trong nhà hàng",
      "Sử dụng các cụm từ lịch sự khi gọi món",
      "Hỏi và trả lời về thực đơn",
      "Thanh toán bằng tiếng Đức",
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Im Restaurant — Nützliche Wörter",
        titleVi: "Trong nhà hàng — Từ vựng hữu ích",
        words: [
          { de: "Speisekarte", vi: "Thực đơn", article: "die" },
          { de: "Vorspeise", vi: "Món khai vị", article: "die" },
          { de: "Hauptgericht", vi: "Món chính", article: "das" },
          { de: "Nachspeise / Dessert", vi: "Tráng miệng", article: "die / das" },
          { de: "Getränk", vi: "Đồ uống", article: "das" },
          { de: "Rechnung", vi: "Hóa đơn", article: "die" },
          { de: "Trinkgeld", vi: "Tiền boa", article: "das" },
          { de: "Kellner / Kellnerin", vi: "Phục vụ nam / nữ", article: "der / die" },
          { de: "bestellen", vi: "Gọi món" },
          { de: "bezahlen", vi: "Thanh toán" },
          { de: "Entschuldigung!", vi: "Xin lỗi! (gọi phục vụ)" },
          { de: "Die Rechnung, bitte.", vi: "Cho tôi hóa đơn." },
          { de: "Zusammen oder getrennt?", vi: "Trả chung hay riêng?" },
          { de: "Stimmt so.", vi: "Giữ tiền thừa. (tiền boa)" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Im Restaurant",
        titleVi: "Trong nhà hàng",
        lines: [
          {
            speaker: "Kellnerin",
            de: "Guten Abend! Haben Sie reserviert?",
            vi: "Xin chào! Quý khách đã đặt bàn chưa?",
          },
          {
            speaker: "Minh",
            de: "Nein, leider nicht. Haben Sie noch einen Tisch für zwei Personen?",
            vi: "Chưa ạ. Còn bàn cho hai người không?",
          },
          {
            speaker: "Kellnerin",
            de: "Ja, natürlich. Hier bitte. Hier ist die Speisekarte.",
            vi: "Vâng, dĩ nhiên. Mời ngồi đây. Đây là thực đơn.",
          },
          {
            speaker: "Minh",
            de: "Danke schön.",
            vi: "Cảm ơn nhiều.",
          },
          {
            speaker: "Kellnerin",
            de: "Möchten Sie schon etwas trinken?",
            vi: "Quý khách muốn gọi đồ uống trước không?",
          },
          {
            speaker: "Lan",
            de: "Ja, ich hätte gern ein Wasser, bitte.",
            vi: "Vâng, cho tôi một ly nước, xin vui lòng.",
          },
          {
            speaker: "Minh",
            de: "Und für mich ein Bier, bitte.",
            vi: "Và cho tôi một ly bia.",
          },
          {
            speaker: "Kellnerin",
            de: "Sehr gern. Und was möchten Sie essen?",
            vi: "Được ạ. Và quý khách muốn ăn gì?",
          },
          {
            speaker: "Lan",
            de: "Ich nehme die Tomatensuppe als Vorspeise und das Hähnchen mit Reis als Hauptgericht.",
            vi: "Tôi lấy súp cà chua làm khai vị và gà với cơm làm món chính.",
          },
          {
            speaker: "Minh",
            de: "Ich möchte den Salat und die Nudeln mit Gemüse, bitte.",
            vi: "Tôi muốn salad và mì với rau, xin vui lòng.",
          },
          {
            speaker: "Kellnerin",
            de: "Sehr gut. Kommt sofort!",
            vi: "Rất tốt. Sẽ mang ra ngay!",
          },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Bezahlen",
        titleVi: "Thanh toán",
        lines: [
          {
            speaker: "Minh",
            de: "Entschuldigung! Die Rechnung, bitte.",
            vi: "Xin lỗi! Cho tôi hóa đơn.",
          },
          {
            speaker: "Kellnerin",
            de: "Zusammen oder getrennt?",
            vi: "Trả chung hay riêng?",
          },
          {
            speaker: "Minh",
            de: "Zusammen, bitte.",
            vi: "Trả chung.",
          },
          {
            speaker: "Kellnerin",
            de: "Das macht zweiunddreißig Euro fünfzig.",
            vi: "Tổng cộng ba mươi hai Euro năm mươi cent.",
          },
          {
            speaker: "Minh",
            de: "Hier sind fünfunddreißig Euro. Stimmt so.",
            vi: "Đây là ba mươi lăm Euro. Giữ tiền thừa.",
          },
          {
            speaker: "Kellnerin",
            de: "Vielen Dank! Einen schönen Abend noch!",
            vi: "Cảm ơn nhiều! Chúc quý khách buổi tối vui vẻ!",
          },
          {
            speaker: "Minh",
            de: "Danke, ebenfalls! Auf Wiedersehen!",
            vi: "Cảm ơn, bạn cũng vậy! Tạm biệt!",
          },
        ],
      },
      {
        type: "explanation",
        titleDe: "Höflich bestellen",
        titleVi: "Gọi món lịch sự",
        textDe:
          "In Deutschland bestellt man höflich mit: 'Ich möchte...', 'Ich hätte gern...', 'Ich nehme...', 'Für mich bitte...' Am Ende sagt man immer 'bitte'.",
        textVi:
          "Ở Đức, khi gọi món cần sử dụng cách nói lịch sự. Các cách gọi món từ lịch sự nhất đến bình thường: 'Ich hätte gern...' (Tôi muốn... — lịch sự nhất), 'Ich möchte..., bitte.' (Tôi muốn..., xin vui lòng), 'Ich nehme...' (Tôi lấy...), 'Für mich..., bitte.' (Cho tôi..., xin vui lòng). Luôn thêm 'bitte' (xin vui lòng) ở cuối câu. Để gọi phục vụ, nói 'Entschuldigung!' (Xin lỗi!), KHÔNG vẫy tay hoặc gọi lớn. Về tiền boa: ở Đức, tiền boa thường khoảng 5-10% hóa đơn. Nói 'Stimmt so.' nghĩa là giữ tiền thừa làm tiền boa.",
      },
      {
        type: "practice",
        titleDe: "Übung: Bestelle im Restaurant!",
        titleVi: "Bài tập: Gọi món trong nhà hàng!",
        instruction:
          "Du bist im Restaurant. Bestelle eine Vorspeise, ein Hauptgericht, ein Dessert und ein Getränk. Benutze 'Ich möchte...', 'Ich nehme...', 'Für mich...'",
        instructionVi:
          "Bạn đang ở trong nhà hàng. Hãy gọi một món khai vị, một món chính, một món tráng miệng và một đồ uống. Sử dụng các cấu trúc: 'Ich möchte...', 'Ich nehme...', 'Für mich...' Nhớ dùng Akkusativ đúng cho giống đực! Ví dụ: 'Ich möchte die Suppe als Vorspeise. Als Hauptgericht nehme ich den Fisch mit Reis. Als Dessert möchte ich einen Kuchen. Und ich trinke einen Orangensaft, bitte.'",
      },
    ],
  },

  // --- Chapter 3, Lesson 4 ---
  {
    id: "a1-ch3-l4",
    chapterId: 3,
    lessonNumber: 4,
    title: "Einkaufen auf dem Markt",
    titleVi: "Mua sắm ở chợ",
    type: "Integration",
    objectives: [
      "Hỏi giá và nói giá bằng tiếng Đức",
      "Sử dụng từ chỉ số lượng và đơn vị đo lường",
      "Thực hành mua sắm: hỏi, chọn, trả tiền",
      "Tổng hợp từ vựng và ngữ pháp chương 3",
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Mengen und Verpackungen",
        titleVi: "Số lượng và đơn vị đóng gói",
        words: [
          { de: "ein Kilo (1 kg)", vi: "Một kilogram" },
          { de: "ein Pfund (500 g)", vi: "Một Pfund (nửa ký)" },
          { de: "100 Gramm", vi: "100 gram" },
          { de: "ein Liter", vi: "Một lít" },
          { de: "eine Flasche", vi: "Một chai", article: "die" },
          { de: "eine Dose", vi: "Một lon", article: "die" },
          { de: "eine Tüte", vi: "Một túi", article: "die" },
          { de: "ein Stück", vi: "Một miếng/cục", article: "das" },
          { de: "eine Packung", vi: "Một gói/hộp", article: "die" },
          { de: "eine Scheibe", vi: "Một lát", article: "die" },
          { de: "ein Becher", vi: "Một cốc/hộp (sữa chua)", article: "der" },
          { de: "ein Dutzend", vi: "Một tá (12 cái)" },
        ],
      },
      {
        type: "explanation",
        titleDe: "Preise und Geld",
        titleVi: "Giá cả và tiền tệ",
        textDe:
          "In Deutschland bezahlt man mit Euro (€) und Cent (ct). Man sagt: 'Das kostet zwei Euro fünfzig.' oder 'Das macht zwei fünfzig.'",
        textVi:
          "Ở Đức, người ta dùng Euro (€) và Cent (ct). 1 Euro = 100 Cent. Cách nói giá: 'Das kostet 2,50 €.' = 'Das kostet zwei Euro fünfzig.' (Cái đó giá hai Euro năm mươi.) Cách nói ngắn: 'Das macht zwei fünfzig.' (Hai năm mươi.) Để hỏi giá: 'Was kostet das?' (Cái đó giá bao nhiêu?) hoặc 'Wie viel kostet...?' (... giá bao nhiêu?) Số lớn: 21 = einundzwanzig (một-và-hai-mươi), 30 = dreißig, 40 = vierzig, 50 = fünfzig, 60 = sechzig, 70 = siebzig, 80 = achtzig, 90 = neunzig, 100 = (ein)hundert. Lưu ý: Tiếng Đức nói hàng đơn vị TRƯỚC hàng chục! 23 = dreiundzwanzig (ba-và-hai-mươi), khác với tiếng Việt.",
      },
      {
        type: "dialogue",
        titleDe: "Auf dem Markt",
        titleVi: "Ở chợ",
        lines: [
          {
            speaker: "Verkäufer",
            de: "Guten Morgen! Was darf es sein?",
            vi: "Chào buổi sáng! Quý khách cần gì?",
          },
          {
            speaker: "Lan",
            de: "Guten Morgen! Ich hätte gern ein Kilo Äpfel.",
            vi: "Chào buổi sáng! Tôi muốn mua một ký táo.",
          },
          {
            speaker: "Verkäufer",
            de: "Sehr gern. Die Äpfel sind sehr frisch heute. Noch etwas?",
            vi: "Được ạ. Táo hôm nay rất tươi. Còn gì nữa không?",
          },
          {
            speaker: "Lan",
            de: "Ja, ich brauche noch zwei Bananen und ein Pfund Tomaten.",
            vi: "Vâng, tôi cần thêm hai quả chuối và nửa ký cà chua.",
          },
          {
            speaker: "Verkäufer",
            de: "Bitte schön. Darf es sonst noch etwas sein?",
            vi: "Đây ạ. Còn cần gì khác không?",
          },
          {
            speaker: "Lan",
            de: "Was kosten die Erdbeeren?",
            vi: "Dâu tây giá bao nhiêu?",
          },
          {
            speaker: "Verkäufer",
            de: "Die Erdbeeren kosten drei Euro neunundneunzig das Kilo.",
            vi: "Dâu tây giá ba Euro chín mươi chín một ký.",
          },
          {
            speaker: "Lan",
            de: "Das ist ein bisschen teuer. Dann nehme ich keine Erdbeeren. Das ist alles.",
            vi: "Hơi đắt. Vậy tôi không lấy dâu tây. Vậy là đủ rồi.",
          },
          {
            speaker: "Verkäufer",
            de: "Gut. Das macht zusammen vier Euro fünfundsiebzig.",
            vi: "Được. Tổng cộng bốn Euro bảy mươi lăm.",
          },
          {
            speaker: "Lan",
            de: "Hier sind fünf Euro.",
            vi: "Đây là năm Euro.",
          },
          {
            speaker: "Verkäufer",
            de: "Und fünfundzwanzig Cent zurück. Vielen Dank und einen schönen Tag!",
            vi: "Và hai mươi lăm Cent tiền thừa. Cảm ơn nhiều và chúc một ngày tốt lành!",
          },
          {
            speaker: "Lan",
            de: "Danke, ebenfalls! Tschüss!",
            vi: "Cảm ơn, bạn cũng vậy! Tạm biệt!",
          },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Einkaufen — Nützliche Sätze",
        titleVi: "Mua sắm — Câu hữu ích",
        words: [
          { de: "Was darf es sein?", vi: "Quý khách cần gì? (người bán hỏi)" },
          { de: "Ich hätte gern...", vi: "Tôi muốn mua..." },
          { de: "Ich brauche...", vi: "Tôi cần..." },
          { de: "Was kostet das?", vi: "Cái đó giá bao nhiêu?" },
          { de: "Wie viel kostet...?", vi: "... giá bao nhiêu?" },
          { de: "Das ist billig.", vi: "Cái đó rẻ." },
          { de: "Das ist teuer.", vi: "Cái đó đắt." },
          { de: "Noch etwas?", vi: "Còn gì nữa không?" },
          { de: "Das ist alles.", vi: "Vậy là đủ rồi." },
          { de: "Danke, das war's.", vi: "Cảm ơn, vậy thôi." },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Im Supermarkt",
        titleVi: "Trong siêu thị",
        lines: [
          {
            speaker: "Minh",
            de: "Lan, was brauchen wir noch?",
            vi: "Lan, chúng ta cần mua gì nữa?",
          },
          {
            speaker: "Lan",
            de: "Wir brauchen eine Flasche Milch, eine Packung Butter und ein Dutzend Eier.",
            vi: "Chúng ta cần một chai sữa, một hộp bơ và một tá trứng.",
          },
          {
            speaker: "Minh",
            de: "Und Brot? Wir haben kein Brot mehr.",
            vi: "Còn bánh mì? Chúng ta hết bánh mì rồi.",
          },
          {
            speaker: "Lan",
            de: "Stimmt! Nimm bitte ein Brot und vier Brötchen.",
            vi: "Đúng rồi! Lấy giùm một ổ bánh mì và bốn chiếc bánh mì tròn nhé.",
          },
          {
            speaker: "Minh",
            de: "Möchtest du auch Obst?",
            vi: "Bạn có muốn mua trái cây không?",
          },
          {
            speaker: "Lan",
            de: "Ja, kauf bitte ein Kilo Äpfel und eine Tüte Weintrauben.",
            vi: "Có, mua giùm một ký táo và một túi nho nhé.",
          },
          {
            speaker: "Minh",
            de: "Okay! Und ich nehme noch eine Dose Cola für mich.",
            vi: "Được! Và tôi lấy thêm một lon Coca cho tôi.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Einkaufsliste und Einkaufsgespräch",
        titleVi: "Bài tập: Danh sách mua sắm và hội thoại mua sắm",
        instruction:
          "1) Schreib eine Einkaufsliste mit 8 Lebensmitteln (mit Mengenangaben). 2) Schreib einen kurzen Einkaufsdialog auf dem Markt: Begrüßung, bestellen, nach dem Preis fragen, bezahlen, verabschieden.",
        instructionVi:
          "1) Viết một danh sách mua sắm với 8 thực phẩm (kèm số lượng). Ví dụ: 'ein Kilo Reis, eine Flasche Wasser, 200 Gramm Käse...' 2) Viết một đoạn hội thoại ngắn khi mua sắm ở chợ gồm: chào hỏi, nói cần mua gì, hỏi giá, trả tiền, tạm biệt. Sử dụng các cấu trúc: 'Ich hätte gern...', 'Was kostet...?', 'Das macht...', 'Hier sind... Euro.' Hãy dùng tất cả những gì đã học: từ vựng thức ăn, Akkusativ, số đếm, cách phủ định kein/keine.",
      },
    ],
  },
];
