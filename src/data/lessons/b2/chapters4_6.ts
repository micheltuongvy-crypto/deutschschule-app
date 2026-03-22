// B2 Chapters 4-6: Geschichte & Erinnerungskultur, Philosophie & Ethik, Medizin & Gesundheitswesen

import type { ContentBlock, Lesson } from "../a1/chapters1_3";

export const b2LessonsCh4_6: Lesson[] = [
  // ============================================================
  // CHAPTER 4: Geschichte & Erinnerungskultur
  // ============================================================

  // --- Chapter 4, Lesson 1: Deutsche Geschichte im 20. Jahrhundert ---
  {
    id: "b2-ch4-l1",
    chapterId: 4,
    lessonNumber: 1,
    title: "Deutsche Geschichte im 20. Jahrhundert",
    titleVi: "Lịch sử Đức thế kỷ 20",
    type: "Einführung",
    objectives: [
      "Nắm được các sự kiện lịch sử quan trọng của Đức trong thế kỷ 20",
      "Sử dụng từ vựng chuyên ngành lịch sử để mô tả các giai đoạn lịch sử",
      "Hiểu và phân tích văn bản lịch sử bằng tiếng Đức"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Deutschland im 20. Jahrhundert — Ein Überblick",
        titleVi: "Đức trong thế kỷ 20 — Tổng quan",
        textDe: "Das 20. Jahrhundert war für Deutschland eine Zeit tiefgreifender Umbrüche. Vom Kaiserreich über die Weimarer Republik, die nationalsozialistische Diktatur, die Teilung in BRD und DDR bis hin zur Wiedervereinigung 1990 — kein anderes europäisches Land hat in so kurzer Zeit so viele politische Systemwechsel erlebt. Diese Geschichte prägt die deutsche Gesellschaft und Politik bis heute.",
        textVi: "Thế kỷ 20 là thời kỳ của những biến động sâu sắc đối với nước Đức. Từ Đế chế Đức qua Cộng hòa Weimar, chế độ độc tài Quốc xã, sự chia cắt thành Tây Đức (BRD) và Đông Đức (DDR) cho đến thống nhất năm 1990 — không có quốc gia châu Âu nào trải qua nhiều thay đổi hệ thống chính trị đến vậy trong thời gian ngắn. Lịch sử này định hình xã hội và chính trị Đức cho đến ngày nay."
      },
      {
        type: "vocabulary",
        titleDe: "Historische Begriffe",
        titleVi: "Thuật ngữ lịch sử",
        words: [
          { de: "Kaiserreich", vi: "Đế chế (Đức)", article: "das" },
          { de: "Weimarer Republik", vi: "Cộng hòa Weimar", article: "die" },
          { de: "Nationalsozialismus", vi: "Chủ nghĩa Quốc xã", article: "der" },
          { de: "Diktatur", vi: "chế độ độc tài", article: "die" },
          { de: "Weltkrieg", vi: "chiến tranh thế giới", article: "der" },
          { de: "Teilung", vi: "sự chia cắt", article: "die" },
          { de: "Besatzungszone", vi: "vùng chiếm đóng", article: "die" },
          { de: "Wirtschaftswunder", vi: "phép màu kinh tế", article: "das" },
          { de: "Kalter Krieg", vi: "Chiến tranh Lạnh", article: "der" },
          { de: "Wiedervereinigung", vi: "sự thống nhất", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Gespräch über die deutsche Geschichte",
        titleVi: "Cuộc trò chuyện về lịch sử Đức",
        lines: [
          { speaker: "Professor", de: "Können Sie die wichtigsten politischen Systeme Deutschlands im 20. Jahrhundert nennen?", vi: "Bạn có thể kể tên những hệ thống chính trị quan trọng nhất của Đức trong thế kỷ 20 không?" },
          { speaker: "Minh", de: "Zunächst gab es das Kaiserreich, das 1918 endete. Dann kam die Weimarer Republik, die leider scheiterte.", vi: "Trước tiên có Đế chế Đức, kết thúc năm 1918. Sau đó là Cộng hòa Weimar, tiếc là đã thất bại." },
          { speaker: "Professor", de: "Richtig. Und was folgte auf die Weimarer Republik?", vi: "Đúng vậy. Và điều gì theo sau Cộng hòa Weimar?" },
          { speaker: "Minh", de: "Die nationalsozialistische Diktatur unter Hitler von 1933 bis 1945, die zum Zweiten Weltkrieg und zum Holocaust führte.", vi: "Chế độ độc tài Quốc xã dưới thời Hitler từ 1933 đến 1945, dẫn đến Chiến tranh Thế giới thứ hai và Holocaust." },
          { speaker: "Professor", de: "Und nach dem Krieg wurde Deutschland geteilt. Die BRD im Westen und die DDR im Osten existierten bis 1990.", vi: "Và sau chiến tranh, nước Đức bị chia cắt. Tây Đức (BRD) ở phía Tây và Đông Đức (DDR) ở phía Đông tồn tại cho đến năm 1990." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Temporale Konnektoren für historische Erzählungen",
        titleVi: "Liên từ thời gian cho tường thuật lịch sử",
        rule: "Nachdem + Nebensatz (Plusquamperfekt), Hauptsatz (Präteritum). Bevor + Nebensatz (Präteritum), Hauptsatz (Präteritum). Während + Nebensatz drückt Gleichzeitigkeit aus.",
        ruleVi: "Nachdem (sau khi) + mệnh đề phụ (thì quá khứ hoàn thành), mệnh đề chính (thì quá khứ đơn). Bevor (trước khi) + mệnh đề phụ (quá khứ đơn), mệnh đề chính (quá khứ đơn). Während (trong khi) + mệnh đề phụ diễn tả sự đồng thời.",
        examples: [
          { de: "Nachdem der Krieg geendet hatte, wurde Deutschland in vier Besatzungszonen aufgeteilt.", vi: "Sau khi chiến tranh kết thúc, nước Đức bị chia thành bốn vùng chiếm đóng." },
          { de: "Bevor die Mauer fiel, lebten die Menschen in Ost und West jahrzehntelang getrennt.", vi: "Trước khi bức tường sụp đổ, người dân Đông và Tây sống cách biệt hàng thập kỷ." },
          { de: "Während die BRD ein Wirtschaftswunder erlebte, baute die DDR eine sozialistische Planwirtschaft auf.", vi: "Trong khi Tây Đức trải qua phép màu kinh tế, Đông Đức xây dựng nền kinh tế kế hoạch xã hội chủ nghĩa." }
        ]
      },
      {
        type: "practice",
        titleDe: "Historische Ereignisse einordnen",
        titleVi: "Sắp xếp các sự kiện lịch sử",
        instruction: "Wählen Sie ein historisches Ereignis aus der deutschen Geschichte des 20. Jahrhunderts und beschreiben Sie es in 5-8 Sätzen. Verwenden Sie dabei temporale Konnektoren (nachdem, bevor, während) und das Präteritum.",
        instructionVi: "Hãy chọn một sự kiện lịch sử từ lịch sử Đức thế kỷ 20 và mô tả nó trong 5-8 câu. Sử dụng các liên từ thời gian (nachdem, bevor, während) và thì quá khứ đơn (Präteritum)."
      }
    ]
  },

  // --- Chapter 4, Lesson 2: Wiedervereinigung & Mauerfall ---
  {
    id: "b2-ch4-l2",
    chapterId: 4,
    lessonNumber: 2,
    title: "Wiedervereinigung & Mauerfall",
    titleVi: "Thống nhất nước Đức & Sự sụp đổ Bức tường Berlin",
    type: "Fertigkeit",
    objectives: [
      "Hiểu bối cảnh lịch sử của sự chia cắt nước Đức và Bức tường Berlin",
      "Phân tích các nguyên nhân và hệ quả của sự kiện Mauerfall",
      "Trình bày quan điểm cá nhân về các sự kiện lịch sử bằng tiếng Đức"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Der Mauerfall — 9. November 1989",
        titleVi: "Sự sụp đổ Bức tường Berlin — 9 tháng 11 năm 1989",
        textDe: "Am 9. November 1989 fiel die Berliner Mauer, die seit 1961 Ost- und West-Berlin getrennt hatte. Massendemonstrationen in der DDR, besonders die Montagsdemonstrationen in Leipzig, hatten den Druck auf die Regierung erhöht. Als der SED-Sprecher Günter Schabowski auf einer Pressekonferenz versehentlich die sofortige Öffnung der Grenzen verkündete, strömten Tausende zu den Grenzübergängen. Dieses Ereignis leitete das Ende der DDR und die deutsche Wiedervereinigung am 3. Oktober 1990 ein.",
        textVi: "Vào ngày 9 tháng 11 năm 1989, Bức tường Berlin sụp đổ — bức tường đã chia cắt Đông và Tây Berlin từ năm 1961. Các cuộc biểu tình lớn ở Đông Đức, đặc biệt là các cuộc biểu tình ngày thứ Hai ở Leipzig, đã gia tăng áp lực lên chính quyền. Khi phát ngôn viên đảng SED Günter Schabowski vô tình tuyên bố mở cửa biên giới ngay lập tức trong một buổi họp báo, hàng ngàn người đã đổ xô đến các cửa khẩu. Sự kiện này mở đầu cho sự kết thúc của Đông Đức và sự thống nhất nước Đức vào ngày 3 tháng 10 năm 1990."
      },
      {
        type: "vocabulary",
        titleDe: "Wortschatz zur Wiedervereinigung",
        titleVi: "Từ vựng về thống nhất nước Đức",
        words: [
          { de: "Berliner Mauer", vi: "Bức tường Berlin", article: "die" },
          { de: "Grenzübergang", vi: "cửa khẩu biên giới", article: "der" },
          { de: "Montagsdemonstration", vi: "biểu tình ngày thứ Hai", article: "die" },
          { de: "Pressekonferenz", vi: "họp báo", article: "die" },
          { de: "Mauerfall", vi: "sự sụp đổ bức tường", article: "der" },
          { de: "Grenzöffnung", vi: "mở cửa biên giới", article: "die" },
          { de: "Wiedervereinigung", vi: "sự thống nhất", article: "die" },
          { de: "Einheit", vi: "sự thống nhất/đoàn kết", article: "die" },
          { de: "Wende", vi: "bước ngoặt (chỉ sự kiện 1989)", article: "die" },
          { de: "Ostalgie", vi: "nỗi nhớ Đông Đức (Ostalgie)", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Zeitzeugen berichten",
        titleVi: "Nhân chứng kể lại",
        lines: [
          { speaker: "Moderator", de: "Frau Müller, Sie haben den Mauerfall persönlich erlebt. Wie war das für Sie?", vi: "Bà Müller, bà đã trực tiếp trải qua sự sụp đổ bức tường. Điều đó như thế nào đối với bà?" },
          { speaker: "Frau Müller", de: "Das war der emotionalste Moment meines Lebens. Ich stand am Brandenburger Tor und konnte es nicht fassen.", vi: "Đó là khoảnh khắc xúc động nhất cuộc đời tôi. Tôi đứng ở Cổng Brandenburg và không thể tin nổi." },
          { speaker: "Moderator", de: "Und wie haben Sie die Zeit danach erlebt? Die Wiedervereinigung war ja nicht nur Freude.", vi: "Và bà đã trải qua thời gian sau đó như thế nào? Thống nhất không chỉ toàn niềm vui." },
          { speaker: "Frau Müller", de: "Das stimmt. Viele Menschen in der ehemaligen DDR verloren ihre Arbeit. Die Anpassung an das westdeutsche System war schwierig.", vi: "Đúng vậy. Nhiều người ở Đông Đức cũ mất việc. Việc thích nghi với hệ thống Tây Đức rất khó khăn." },
          { speaker: "Moderator", de: "Gibt es heute noch Unterschiede zwischen Ost und West?", vi: "Ngày nay vẫn còn sự khác biệt giữa Đông và Tây không?" },
          { speaker: "Frau Müller", de: "Leider ja. Man spricht von der 'Mauer in den Köpfen'. Aber die jüngere Generation wächst zunehmend zusammen.", vi: "Tiếc là có. Người ta nói về 'bức tường trong đầu'. Nhưng thế hệ trẻ ngày càng gắn kết với nhau hơn." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Partizipialattribute",
        titleVi: "Phân từ làm tính từ bổ nghĩa",
        rule: "Partizip I (Infinitiv + d) als Attribut: die demonstrierenden Menschen. Partizip II als Attribut: die geteilte Stadt. Diese erweiterten Attribute sind typisch für formelle Texte und Nachrichten.",
        ruleVi: "Phân từ I (Infinitiv + d) làm tính từ: die demonstrierenden Menschen (những người đang biểu tình). Phân từ II làm tính từ: die geteilte Stadt (thành phố bị chia cắt). Các tính từ mở rộng này đặc trưng cho văn bản trang trọng và tin tức.",
        examples: [
          { de: "Die demonstrierenden Bürger forderten freie Wahlen.", vi: "Những công dân đang biểu tình đòi bầu cử tự do." },
          { de: "Die geteilte Stadt wurde wieder vereint.", vi: "Thành phố bị chia cắt đã được thống nhất trở lại." },
          { de: "Die neu gewonnene Freiheit begeisterte die Menschen.", vi: "Sự tự do mới giành được đã làm mọi người phấn khích." },
          { de: "Die aus der DDR fliehenden Familien suchten ein besseres Leben.", vi: "Những gia đình đang chạy trốn khỏi Đông Đức tìm kiếm cuộc sống tốt hơn." }
        ]
      },
      {
        type: "practice",
        titleDe: "Einen historischen Bericht schreiben",
        titleVi: "Viết một bài tường thuật lịch sử",
        instruction: "Schreiben Sie einen kurzen Bericht (8-10 Sätze) über den Mauerfall oder die Wiedervereinigung aus der Perspektive eines Zeitzeugen. Verwenden Sie Partizipialattribute und Vergangenheitsformen.",
        instructionVi: "Hãy viết một bài tường thuật ngắn (8-10 câu) về sự sụp đổ bức tường hoặc sự thống nhất nước Đức từ góc nhìn của một nhân chứng. Sử dụng phân từ làm tính từ bổ nghĩa và các thì quá khứ."
      }
    ]
  },

  // --- Chapter 4, Lesson 3: Erinnerungskultur & Gedenkstätten ---
  {
    id: "b2-ch4-l3",
    chapterId: 4,
    lessonNumber: 3,
    title: "Erinnerungskultur & Gedenkstätten",
    titleVi: "Văn hóa tưởng niệm & Đài tưởng niệm",
    type: "Fertigkeit",
    objectives: [
      "Hiểu khái niệm Erinnerungskultur (văn hóa tưởng niệm) đặc trưng của Đức",
      "Nắm được từ vựng về các đài tưởng niệm và bảo tàng lịch sử",
      "Thảo luận về vai trò của tưởng niệm trong xã hội hiện đại"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Erinnerungskultur in Deutschland",
        titleVi: "Văn hóa tưởng niệm ở Đức",
        textDe: "Deutschland hat eine besondere Erinnerungskultur, die sich vor allem mit der Aufarbeitung des Nationalsozialismus und des Holocaust beschäftigt. Gedenkstätten wie das Holocaust-Mahnmal in Berlin, die KZ-Gedenkstätte Dachau oder die Stolpersteine in vielen Städten erinnern an die Opfer. Diese Kultur des Erinnerns gilt international als vorbildlich und ist ein wichtiger Teil der deutschen Identität.",
        textVi: "Đức có một nền văn hóa tưởng niệm đặc biệt, chủ yếu liên quan đến việc đối mặt với quá khứ Quốc xã và Holocaust. Các đài tưởng niệm như Đài tưởng niệm Holocaust ở Berlin, khu tưởng niệm trại tập trung Dachau hay những viên đá Stolpersteine ở nhiều thành phố nhắc nhớ về các nạn nhân. Văn hóa tưởng niệm này được quốc tế coi là mẫu mực và là một phần quan trọng trong bản sắc Đức."
      },
      {
        type: "vocabulary",
        titleDe: "Erinnerungskultur — Schlüsselbegriffe",
        titleVi: "Văn hóa tưởng niệm — Thuật ngữ chính",
        words: [
          { de: "Gedenkstätte", vi: "đài/khu tưởng niệm", article: "die" },
          { de: "Mahnmal", vi: "tượng đài cảnh tỉnh", article: "das" },
          { de: "Stolperstein", vi: "viên đá vấp (tưởng niệm)", article: "der" },
          { de: "Aufarbeitung", vi: "sự đối mặt/xử lý quá khứ", article: "die" },
          { de: "Vergangenheitsbewältigung", vi: "việc vượt qua quá khứ", article: "die" },
          { de: "Zeitzeuge", vi: "nhân chứng lịch sử", article: "der" },
          { de: "Gedenktag", vi: "ngày tưởng niệm", article: "der" },
          { de: "Opfer", vi: "nạn nhân", article: "das" },
          { de: "Schuld", vi: "tội lỗi/trách nhiệm", article: "die" },
          { de: "Versöhnung", vi: "sự hòa giải", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Diskussion über Erinnerungskultur",
        titleVi: "Thảo luận về văn hóa tưởng niệm",
        lines: [
          { speaker: "Lan", de: "Ich habe gestern das Holocaust-Mahnmal in Berlin besucht. Das hat mich tief berührt.", vi: "Hôm qua tôi đã thăm Đài tưởng niệm Holocaust ở Berlin. Điều đó đã khiến tôi rất xúc động." },
          { speaker: "Thomas", de: "Ja, die Erinnerungskultur ist in Deutschland sehr wichtig. Wir glauben, dass man aus der Geschichte lernen muss.", vi: "Vâng, văn hóa tưởng niệm rất quan trọng ở Đức. Chúng tôi tin rằng phải học từ lịch sử." },
          { speaker: "Lan", de: "In Vietnam haben wir auch Gedenkstätten, zum Beispiel für den Vietnamkrieg. Aber der Umgang mit der Geschichte ist anders.", vi: "Ở Việt Nam chúng tôi cũng có đài tưởng niệm, ví dụ cho chiến tranh Việt Nam. Nhưng cách đối mặt với lịch sử khác nhau." },
          { speaker: "Thomas", de: "Das ist ein interessanter Vergleich. Jede Gesellschaft muss ihren eigenen Weg finden, mit schmerzhaften Erinnerungen umzugehen.", vi: "Đó là một so sánh thú vị. Mỗi xã hội phải tìm con đường riêng để đối mặt với những ký ức đau thương." },
          { speaker: "Lan", de: "Ich finde die Stolpersteine besonders eindrucksvoll. Sie machen die Geschichte im Alltag sichtbar.", vi: "Tôi thấy những viên đá Stolpersteine đặc biệt ấn tượng. Chúng làm cho lịch sử hiện diện trong đời sống hàng ngày." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nominalisierung von Verben und Adjektiven",
        titleVi: "Danh từ hóa động từ và tính từ",
        rule: "Verben werden zu Nomen: erinnern → die Erinnerung, gedenken → das Gedenken. Adjektive werden zu Nomen: schuldig → die Schuld, versöhnlich → die Versöhnung. Nominalisierungen sind typisch für gehobene Sprache und Fachtexte.",
        ruleVi: "Động từ thành danh từ: erinnern (nhớ) → die Erinnerung (ký ức), gedenken (tưởng niệm) → das Gedenken (sự tưởng niệm). Tính từ thành danh từ: schuldig (có tội) → die Schuld (tội lỗi), versöhnlich (hòa giải) → die Versöhnung (sự hòa giải). Danh từ hóa đặc trưng cho ngôn ngữ trang trọng và văn bản chuyên ngành.",
        examples: [
          { de: "Das Erinnern an die Opfer ist eine gesellschaftliche Pflicht.", vi: "Việc tưởng nhớ các nạn nhân là nghĩa vụ của xã hội." },
          { de: "Die Aufarbeitung der Vergangenheit dauert bis heute an.", vi: "Việc đối mặt với quá khứ kéo dài cho đến ngày nay." },
          { de: "Das Vergessen wäre ein Verrat an den Opfern.", vi: "Sự lãng quên sẽ là sự phản bội đối với các nạn nhân." },
          { de: "Die Versöhnung zwischen den Völkern ist das wichtigste Ziel.", vi: "Sự hòa giải giữa các dân tộc là mục tiêu quan trọng nhất." }
        ]
      },
      {
        type: "practice",
        titleDe: "Erinnerungskultur vergleichen",
        titleVi: "So sánh văn hóa tưởng niệm",
        instruction: "Vergleichen Sie die Erinnerungskultur in Deutschland mit der in Vietnam oder einem anderen Land. Wie geht man dort mit der Vergangenheit um? Welche Gedenkstätten gibt es? Schreiben Sie einen Text (8-10 Sätze) und verwenden Sie Nominalisierungen.",
        instructionVi: "Hãy so sánh văn hóa tưởng niệm ở Đức với Việt Nam hoặc một quốc gia khác. Người ta đối mặt với quá khứ như thế nào? Có những đài tưởng niệm nào? Viết một bài (8-10 câu) và sử dụng danh từ hóa."
      }
    ]
  },

  // --- Chapter 4, Lesson 4: Erweiterte Passivformen ---
  {
    id: "b2-ch4-l4",
    chapterId: 4,
    lessonNumber: 4,
    title: "Erweiterte Passivformen",
    titleVi: "Các dạng bị động mở rộng",
    type: "Grammatik",
    objectives: [
      "Nắm vững Vorgangspassiv và Zustandspassiv ở tất cả các thì",
      "Sử dụng Passiv với Modalverben",
      "Hiểu và áp dụng các dạng thay thế cho câu bị động"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Passiv in allen Zeitformen",
        titleVi: "Câu bị động ở tất cả các thì",
        textDe: "Im Deutschen unterscheidet man zwischen dem Vorgangspassiv (werden + Partizip II) und dem Zustandspassiv (sein + Partizip II). Das Vorgangspassiv beschreibt einen Prozess, das Zustandspassiv ein Ergebnis. Beide können in verschiedenen Zeitformen stehen. Besonders in wissenschaftlichen und historischen Texten wird das Passiv häufig verwendet.",
        textVi: "Trong tiếng Đức, người ta phân biệt giữa bị động quá trình (werden + Partizip II) và bị động trạng thái (sein + Partizip II). Bị động quá trình mô tả một quá trình, bị động trạng thái mô tả một kết quả. Cả hai đều có thể ở các thì khác nhau. Đặc biệt trong văn bản khoa học và lịch sử, câu bị động được sử dụng rất thường xuyên."
      },
      {
        type: "grammar",
        titleDe: "Vorgangspassiv vs. Zustandspassiv",
        titleVi: "Bị động quá trình vs. Bị động trạng thái",
        rule: "Vorgangspassiv: werden + Partizip II (Die Mauer wird gebaut). Zustandspassiv: sein + Partizip II (Die Mauer ist gebaut). Passiv Präteritum: wurde + Partizip II. Passiv Perfekt: ist + Partizip II + worden. Passiv mit Modalverb: Modalverb + Partizip II + werden.",
        ruleVi: "Bị động quá trình: werden + Partizip II (Bức tường đang được xây). Bị động trạng thái: sein + Partizip II (Bức tường đã được xây xong). Bị động quá khứ: wurde + Partizip II. Bị động hoàn thành: ist + Partizip II + worden. Bị động với động từ khiếm khuyết: Modalverb + Partizip II + werden.",
        examples: [
          { de: "Die Mauer wurde 1961 gebaut. (Vorgangspassiv Präteritum)", vi: "Bức tường được xây năm 1961. (Bị động quá trình, quá khứ)" },
          { de: "Die Stadt ist heute wieder vereint. (Zustandspassiv)", vi: "Thành phố ngày nay đã thống nhất trở lại. (Bị động trạng thái)" },
          { de: "Die Gedenkstätte ist 2005 eröffnet worden. (Vorgangspassiv Perfekt)", vi: "Đài tưởng niệm đã được khánh thành năm 2005. (Bị động quá trình, hoàn thành)" },
          { de: "Die Geschichte darf nicht vergessen werden. (Passiv mit Modalverb)", vi: "Lịch sử không được phép bị lãng quên. (Bị động với động từ khiếm khuyết)" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Passiv-Alternativen",
        titleVi: "Các cách thay thế câu bị động",
        rule: "1) sich lassen + Infinitiv: Das lässt sich erklären. 2) sein + zu + Infinitiv: Das ist zu beachten. 3) Adjektive auf -bar/-lich: Das ist erklärbar/verständlich. Diese Alternativen klingen oft natürlicher als das Passiv.",
        ruleVi: "1) sich lassen + Infinitiv: Das lässt sich erklären (Điều đó có thể giải thích được). 2) sein + zu + Infinitiv: Das ist zu beachten (Điều đó cần được chú ý). 3) Tính từ đuôi -bar/-lich: Das ist erklärbar/verständlich (Điều đó có thể giải thích/hiểu được). Các cách thay thế này thường nghe tự nhiên hơn câu bị động.",
        examples: [
          { de: "Die Vergangenheit lässt sich nicht ändern. (= kann nicht geändert werden)", vi: "Quá khứ không thể thay đổi được. (= không thể bị thay đổi)" },
          { de: "Dieses Kapitel der Geschichte ist nicht zu vergessen. (= darf nicht vergessen werden)", vi: "Chương lịch sử này không được phép quên. (= không được phép bị lãng quên)" },
          { de: "Die Folgen des Krieges waren unübersehbar. (= konnten nicht übersehen werden)", vi: "Hậu quả của chiến tranh không thể không nhìn thấy. (= không thể bị bỏ qua)" }
        ]
      },
      {
        type: "practice",
        titleDe: "Passivformen in historischen Texten",
        titleVi: "Các dạng bị động trong văn bản lịch sử",
        instruction: "Schreiben Sie einen kurzen historischen Text (6-8 Sätze) über ein Ereignis und verwenden Sie dabei mindestens drei verschiedene Passivformen: Vorgangspassiv, Zustandspassiv, Passiv mit Modalverb und eine Passiv-Alternative.",
        instructionVi: "Hãy viết một văn bản lịch sử ngắn (6-8 câu) về một sự kiện và sử dụng ít nhất ba dạng bị động khác nhau: bị động quá trình, bị động trạng thái, bị động với động từ khiếm khuyết và một cách thay thế bị động."
      }
    ]
  },

  // ============================================================
  // CHAPTER 5: Philosophie & Ethik
  // ============================================================

  // --- Chapter 5, Lesson 1: Ethische Dilemmata diskutieren ---
  {
    id: "b2-ch5-l1",
    chapterId: 5,
    lessonNumber: 1,
    title: "Ethische Dilemmata diskutieren",
    titleVi: "Thảo luận về các tình huống đạo đức khó xử",
    type: "Einführung",
    objectives: [
      "Nắm được từ vựng về đạo đức và triết học cơ bản",
      "Thảo luận về các tình huống đạo đức phức tạp bằng tiếng Đức",
      "Diễn đạt quan điểm cá nhân về các vấn đề đạo đức"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Was ist ein ethisches Dilemma?",
        titleVi: "Tình huống đạo đức khó xử là gì?",
        textDe: "Ein ethisches Dilemma ist eine Situation, in der man zwischen zwei oder mehr moralisch vertretbaren, aber sich widersprechenden Handlungsoptionen wählen muss. Es gibt keine eindeutig richtige Lösung. Solche Dilemmata begegnen uns im Alltag, in der Medizin, in der Politik und in der Wirtschaft. Die Fähigkeit, ethische Fragen differenziert zu diskutieren, ist eine wichtige Kompetenz in der deutschen Gesellschaft.",
        textVi: "Tình huống đạo đức khó xử là một tình huống mà trong đó người ta phải chọn giữa hai hoặc nhiều lựa chọn hành động có thể chấp nhận được về mặt đạo đức nhưng lại mâu thuẫn với nhau. Không có giải pháp nào rõ ràng là đúng. Những tình huống khó xử như vậy xuất hiện trong đời sống hàng ngày, y học, chính trị và kinh tế. Khả năng thảo luận có chiều sâu về các câu hỏi đạo đức là một năng lực quan trọng trong xã hội Đức."
      },
      {
        type: "vocabulary",
        titleDe: "Ethik & Moral — Grundbegriffe",
        titleVi: "Đạo đức & Luân lý — Thuật ngữ cơ bản",
        words: [
          { de: "Ethik", vi: "đạo đức học", article: "die" },
          { de: "Moral", vi: "luân lý/đạo đức", article: "die" },
          { de: "Gewissen", vi: "lương tâm", article: "das" },
          { de: "Dilemma", vi: "tình huống khó xử", article: "das" },
          { de: "Verantwortung", vi: "trách nhiệm", article: "die" },
          { de: "Gerechtigkeit", vi: "công bằng/chính nghĩa", article: "die" },
          { de: "Würde", vi: "nhân phẩm/phẩm giá", article: "die" },
          { de: "Wertvorstellung", vi: "hệ giá trị", article: "die" },
          { de: "Handlungsoption", vi: "lựa chọn hành động", article: "die" },
          { de: "Abwägung", vi: "sự cân nhắc", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Das Trolley-Problem",
        titleVi: "Bài toán xe điện (Trolley Problem)",
        lines: [
          { speaker: "Dozentin", de: "Stellen Sie sich vor: Ein Zug rast auf fünf Personen zu. Sie können eine Weiche umstellen, dann stirbt nur eine Person. Was tun Sie?", vi: "Hãy tưởng tượng: Một đoàn tàu đang lao vào năm người. Bạn có thể chuyển ghi, khi đó chỉ một người chết. Bạn sẽ làm gì?" },
          { speaker: "Minh", de: "Ich würde die Weiche umstellen. Ein Menschenleben ist weniger als fünf.", vi: "Tôi sẽ chuyển ghi. Một mạng người ít hơn năm." },
          { speaker: "Lan", de: "Aber darf man aktiv entscheiden, wer stirbt? Das macht einen doch zum Mörder.", vi: "Nhưng có được phép chủ động quyết định ai chết không? Điều đó biến mình thành kẻ giết người." },
          { speaker: "Dozentin", de: "Genau das ist das Dilemma. Utilitaristen würden sagen: Das Ergebnis zählt. Andere argumentieren: Man darf nie einen Menschen als Mittel zum Zweck benutzen.", vi: "Chính xác đó là tình huống khó xử. Người theo chủ nghĩa vị lợi sẽ nói: Kết quả mới quan trọng. Người khác lập luận: Không bao giờ được dùng con người như phương tiện cho mục đích." },
          { speaker: "Minh", de: "Das erinnert mich an Kant: 'Handle so, dass du die Menschheit niemals bloß als Mittel gebrauchst.'", vi: "Điều này nhắc tôi về Kant: 'Hãy hành động sao cho bạn không bao giờ chỉ dùng con người như phương tiện.'" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Konjunktiv II für hypothetische Situationen",
        titleVi: "Konjunktiv II cho tình huống giả định",
        rule: "Konjunktiv II Gegenwart: würde + Infinitiv / wäre / hätte / könnte / dürfte / müsste / sollte. Konjunktiv II Vergangenheit: hätte/wäre + Partizip II. Für ethische Diskussionen unverzichtbar!",
        ruleVi: "Konjunktiv II hiện tại: würde + Infinitiv / wäre (sẽ là) / hätte (sẽ có) / könnte (có thể) / dürfte (được phép) / müsste (phải) / sollte (nên). Konjunktiv II quá khứ: hätte/wäre + Partizip II. Không thể thiếu trong các cuộc thảo luận đạo đức!",
        examples: [
          { de: "Was würden Sie in dieser Situation tun?", vi: "Bạn sẽ làm gì trong tình huống này?" },
          { de: "Ich hätte die Weiche nicht umgestellt.", vi: "Tôi đã không chuyển ghi (giả định)." },
          { de: "Man dürfte einen Menschen nicht einfach opfern.", vi: "Người ta không được phép hy sinh một con người một cách đơn giản." },
          { de: "Wäre es nicht besser gewesen, gar nicht einzugreifen?", vi: "Liệu sẽ không tốt hơn nếu hoàn toàn không can thiệp?" }
        ]
      },
      {
        type: "practice",
        titleDe: "Ein ethisches Dilemma diskutieren",
        titleVi: "Thảo luận một tình huống đạo đức khó xử",
        instruction: "Wählen Sie ein ethisches Dilemma (z.B. Sterbehilfe, Datenschutz vs. Sicherheit, Tierversuche) und diskutieren Sie Pro und Contra. Verwenden Sie den Konjunktiv II und Redemittel wie: Einerseits... andererseits... / Man könnte argumentieren, dass... / Meiner Meinung nach...",
        instructionVi: "Hãy chọn một tình huống đạo đức khó xử (ví dụ: an tử, bảo vệ dữ liệu vs. an ninh, thí nghiệm trên động vật) và thảo luận ủng hộ và phản đối. Sử dụng Konjunktiv II và các mẫu câu như: Một mặt... mặt khác... / Người ta có thể lập luận rằng... / Theo ý kiến tôi..."
      }
    ]
  },

  // --- Chapter 5, Lesson 2: Philosophische Grundbegriffe ---
  {
    id: "b2-ch5-l2",
    chapterId: 5,
    lessonNumber: 2,
    title: "Philosophische Grundbegriffe",
    titleVi: "Các khái niệm triết học cơ bản",
    type: "Fertigkeit",
    objectives: [
      "Nắm được từ vựng triết học cơ bản bằng tiếng Đức",
      "Hiểu các trường phái triết học chính của Đức",
      "Đọc hiểu và tóm tắt văn bản triết học đơn giản"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Deutsche Philosophie — Eine Tradition",
        titleVi: "Triết học Đức — Một truyền thống",
        textDe: "Deutschland hat eine lange philosophische Tradition. Denker wie Immanuel Kant, Georg Wilhelm Friedrich Hegel, Karl Marx, Friedrich Nietzsche und Martin Heidegger haben die westliche Philosophie maßgeblich geprägt. Viele philosophische Fachbegriffe, die weltweit verwendet werden, stammen aus dem Deutschen: Weltanschauung, Zeitgeist, Angst, Dasein.",
        textVi: "Đức có một truyền thống triết học lâu đời. Các nhà tư tưởng như Immanuel Kant, Georg Wilhelm Friedrich Hegel, Karl Marx, Friedrich Nietzsche và Martin Heidegger đã định hình triết học phương Tây một cách quyết định. Nhiều thuật ngữ triết học được sử dụng trên toàn thế giới bắt nguồn từ tiếng Đức: Weltanschauung (thế giới quan), Zeitgeist (tinh thần thời đại), Angst (nỗi lo hiện sinh), Dasein (sự hiện hữu)."
      },
      {
        type: "vocabulary",
        titleDe: "Philosophische Fachbegriffe",
        titleVi: "Thuật ngữ triết học",
        words: [
          { de: "Aufklärung", vi: "Khai sáng (thời kỳ Ánh sáng)", article: "die" },
          { de: "Vernunft", vi: "lý trí", article: "die" },
          { de: "Erkenntnis", vi: "nhận thức", article: "die" },
          { de: "Weltanschauung", vi: "thế giới quan", article: "die" },
          { de: "Dasein", vi: "sự hiện hữu/tồn tại", article: "das" },
          { de: "Freiheit", vi: "tự do", article: "die" },
          { de: "Wahrheit", vi: "chân lý/sự thật", article: "die" },
          { de: "Sein", vi: "sự tồn tại", article: "das" },
          { de: "Pflicht", vi: "nghĩa vụ/bổn phận", article: "die" },
          { de: "Kategorischer Imperativ", vi: "mệnh lệnh tuyệt đối (Kant)", article: "der" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Über Kant und die Aufklärung",
        titleVi: "Về Kant và thời kỳ Khai sáng",
        lines: [
          { speaker: "Professor", de: "Was versteht Kant unter Aufklärung?", vi: "Kant hiểu gì về Khai sáng?" },
          { speaker: "Lan", de: "Kant definiert Aufklärung als den Ausgang des Menschen aus seiner selbstverschuldeten Unmündigkeit.", vi: "Kant định nghĩa Khai sáng là sự thoát khỏi tình trạng chưa trưởng thành do chính mình gây ra." },
          { speaker: "Professor", de: "Genau. Und was bedeutet 'selbstverschuldete Unmündigkeit'?", vi: "Đúng vậy. Và 'sự chưa trưởng thành do chính mình gây ra' có nghĩa là gì?" },
          { speaker: "Lan", de: "Es bedeutet, dass man sich nicht traut, seinen eigenen Verstand zu benutzen, obwohl man dazu fähig wäre.", vi: "Nó có nghĩa là người ta không dám sử dụng lý trí của chính mình, mặc dù có khả năng làm điều đó." },
          { speaker: "Professor", de: "Richtig. Kants Motto war: 'Sapere aude! — Habe Mut, dich deines eigenen Verstandes zu bedienen!'", vi: "Đúng rồi. Khẩu hiệu của Kant là: 'Sapere aude! — Hãy dũng cảm sử dụng lý trí của chính bạn!'" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Indirekte Rede mit Konjunktiv I",
        titleVi: "Câu gián tiếp với Konjunktiv I",
        rule: "Konjunktiv I wird für die indirekte Rede verwendet: er/sie/es sei, habe, könne, wisse, gehe. Wenn Konjunktiv I = Indikativ, benutzt man Konjunktiv II: sie seien (nicht: sie sind). Typisch für akademische Texte und Nachrichten.",
        ruleVi: "Konjunktiv I dùng cho câu gián tiếp: er/sie/es sei (là), habe (có), könne (có thể), wisse (biết), gehe (đi). Khi Konjunktiv I trùng với Indikativ, dùng Konjunktiv II: sie seien (không phải: sie sind). Đặc trưng cho văn bản học thuật và tin tức.",
        examples: [
          { de: "Kant sagte, der Mensch solle seinen eigenen Verstand benutzen.", vi: "Kant nói rằng con người nên sử dụng lý trí của chính mình." },
          { de: "Hegel behauptete, die Wahrheit sei das Ganze.", vi: "Hegel khẳng định rằng chân lý là toàn thể." },
          { de: "Nietzsche schrieb, Gott sei tot.", vi: "Nietzsche viết rằng Chúa đã chết." },
          { de: "Marx argumentierte, die Geschichte aller bisherigen Gesellschaft sei die Geschichte von Klassenkämpfen.", vi: "Marx lập luận rằng lịch sử của tất cả xã hội cho đến nay là lịch sử của đấu tranh giai cấp." }
        ]
      },
      {
        type: "practice",
        titleDe: "Einen Philosophen vorstellen",
        titleVi: "Giới thiệu một nhà triết học",
        instruction: "Wählen Sie einen deutschen Philosophen (Kant, Hegel, Marx, Nietzsche, Heidegger oder einen anderen) und stellen Sie seine wichtigsten Ideen in 6-8 Sätzen vor. Verwenden Sie die indirekte Rede mit Konjunktiv I: Er/Sie behauptete, dass... / Laut ihm/ihr sei...",
        instructionVi: "Hãy chọn một nhà triết học Đức (Kant, Hegel, Marx, Nietzsche, Heidegger hoặc người khác) và giới thiệu những ý tưởng quan trọng nhất của họ trong 6-8 câu. Sử dụng câu gián tiếp với Konjunktiv I: Ông/Bà ấy khẳng định rằng... / Theo ông/bà ấy..."
      }
    ]
  },

  // --- Chapter 5, Lesson 3: Debattieren & Argumentieren ---
  {
    id: "b2-ch5-l3",
    chapterId: 5,
    lessonNumber: 3,
    title: "Debattieren & Argumentieren",
    titleVi: "Tranh luận & Lập luận",
    type: "Fertigkeit",
    objectives: [
      "Nắm được các mẫu câu tranh luận học thuật bằng tiếng Đức",
      "Xây dựng lập luận logic có cấu trúc",
      "Phản bác quan điểm đối phương một cách lịch sự và thuyết phục"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Die Kunst des Argumentierens",
        titleVi: "Nghệ thuật lập luận",
        textDe: "In Deutschland wird großer Wert auf sachliche Argumentation gelegt. Eine gute Argumentation besteht aus einer These (Behauptung), Argumenten (Begründungen) und Belegen (Beispielen, Daten, Zitaten). In akademischen und beruflichen Kontexten ist es wichtig, auch Gegenargumente zu berücksichtigen und höflich, aber bestimmt zu widersprechen.",
        textVi: "Ở Đức, người ta rất coi trọng lập luận khách quan. Một lập luận tốt bao gồm luận đề (khẳng định), luận cứ (lý do) và bằng chứng (ví dụ, dữ liệu, trích dẫn). Trong bối cảnh học thuật và nghề nghiệp, việc xem xét cả phản biện và phản đối một cách lịch sự nhưng kiên quyết là rất quan trọng."
      },
      {
        type: "vocabulary",
        titleDe: "Redemittel für Diskussionen",
        titleVi: "Mẫu câu cho thảo luận",
        words: [
          { de: "These", vi: "luận đề", article: "die" },
          { de: "Argument", vi: "luận cứ/lập luận", article: "das" },
          { de: "Gegenargument", vi: "phản biện", article: "das" },
          { de: "Beleg", vi: "bằng chứng/minh chứng", article: "der" },
          { de: "Schlussfolgerung", vi: "kết luận", article: "die" },
          { de: "Standpunkt", vi: "quan điểm/lập trường", article: "der" },
          { de: "Einwand", vi: "sự phản đối", article: "der" },
          { de: "Kompromiss", vi: "thỏa hiệp", article: "der" },
          { de: "Konsens", vi: "sự đồng thuận", article: "der" },
          { de: "Widerspruch", vi: "sự mâu thuẫn/phản bác", article: "der" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Eine akademische Debatte",
        titleVi: "Một cuộc tranh luận học thuật",
        lines: [
          { speaker: "Moderator", de: "Unser heutiges Thema: Sollte künstliche Intelligenz in Schulen eingesetzt werden?", vi: "Chủ đề hôm nay: Trí tuệ nhân tạo có nên được sử dụng trong trường học không?" },
          { speaker: "Minh", de: "Meiner Ansicht nach bietet KI große Chancen für individuelles Lernen. Schüler könnten in ihrem eigenen Tempo lernen.", vi: "Theo quan điểm tôi, AI mang lại cơ hội lớn cho học tập cá nhân hóa. Học sinh có thể học theo tốc độ riêng." },
          { speaker: "Lan", de: "Da muss ich widersprechen. Es besteht die Gefahr, dass der persönliche Kontakt zwischen Lehrern und Schülern verloren geht.", vi: "Ở đây tôi phải phản đối. Có nguy cơ mất đi sự tiếp xúc cá nhân giữa giáo viên và học sinh." },
          { speaker: "Minh", de: "Diesen Einwand kann ich nachvollziehen, aber KI soll Lehrer nicht ersetzen, sondern ergänzen.", vi: "Tôi có thể hiểu phản biện này, nhưng AI không nên thay thế giáo viên mà bổ sung cho họ." },
          { speaker: "Lan", de: "Darüber hinaus gibt es auch datenschutzrechtliche Bedenken. Wer hat Zugang zu den Lernprofilen der Kinder?", vi: "Ngoài ra còn có lo ngại về bảo vệ dữ liệu. Ai có quyền truy cập hồ sơ học tập của trẻ em?" },
          { speaker: "Minh", de: "Das ist ein berechtigter Punkt. Hier müssten strenge Datenschutzrichtlinien gelten.", vi: "Đó là một điểm hợp lý. Ở đây phải áp dụng các quy định bảo vệ dữ liệu nghiêm ngặt." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Konzessive Satzverbindungen",
        titleVi: "Câu nhượng bộ",
        rule: "Obwohl/Obgleich + Nebensatz: Obwohl das Argument stark ist, überzeugt es mich nicht. Trotzdem/Dennoch + Hauptsatz: Das Argument ist stark. Trotzdem überzeugt es mich nicht. Zwar... aber...: Die Idee ist zwar gut, aber schwer umsetzbar.",
        ruleVi: "Obwohl/Obgleich (mặc dù) + mệnh đề phụ: Mặc dù lập luận mạnh, nó không thuyết phục tôi. Trotzdem/Dennoch (tuy vậy) + mệnh đề chính: Lập luận mạnh. Tuy vậy nó không thuyết phục tôi. Zwar... aber... (tuy... nhưng...): Ý tưởng tuy tốt nhưng khó thực hiện.",
        examples: [
          { de: "Obwohl KI viele Vorteile bietet, gibt es auch Risiken.", vi: "Mặc dù AI mang lại nhiều lợi ích, cũng có những rủi ro." },
          { de: "Die Technologie entwickelt sich schnell. Dennoch sollten wir vorsichtig sein.", vi: "Công nghệ phát triển nhanh. Tuy vậy chúng ta nên thận trọng." },
          { de: "Zwar ist die Idee innovativ, aber die Umsetzung wäre sehr teuer.", vi: "Tuy ý tưởng đổi mới, nhưng việc thực hiện sẽ rất tốn kém." },
          { de: "Trotz aller Kritik hat das Projekt auch positive Seiten.", vi: "Bất chấp mọi chỉ trích, dự án cũng có mặt tích cực." }
        ]
      },
      {
        type: "practice",
        titleDe: "Eine Debatte führen",
        titleVi: "Tiến hành một cuộc tranh luận",
        instruction: "Wählen Sie eines der folgenden Themen und schreiben Sie sowohl Pro- als auch Contra-Argumente (je 3): a) Sollte das Grundeinkommen eingeführt werden? b) Ist Fleischkonsum ethisch vertretbar? c) Sollte Social Media für Kinder verboten werden? Verwenden Sie konzessive Satzverbindungen.",
        instructionVi: "Hãy chọn một trong các chủ đề sau và viết cả lập luận ủng hộ lẫn phản đối (mỗi bên 3): a) Có nên áp dụng thu nhập cơ bản không? b) Ăn thịt có chấp nhận được về mặt đạo đức không? c) Có nên cấm mạng xã hội đối với trẻ em không? Sử dụng các câu nhượng bộ."
      }
    ]
  },

  // --- Chapter 5, Lesson 4: Subjektive Bedeutung der Modalverben ---
  {
    id: "b2-ch5-l4",
    chapterId: 5,
    lessonNumber: 4,
    title: "Subjektive Bedeutung der Modalverben",
    titleVi: "Nghĩa chủ quan của động từ khiếm khuyết",
    type: "Grammatik",
    objectives: [
      "Phân biệt nghĩa khách quan và chủ quan của động từ khiếm khuyết",
      "Sử dụng Modalverben để diễn đạt sự phỏng đoán và đánh giá",
      "Áp dụng trong văn bản học thuật và báo chí"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Objektive vs. subjektive Bedeutung",
        titleVi: "Nghĩa khách quan vs. nghĩa chủ quan",
        textDe: "Modalverben haben neben ihrer objektiven Bedeutung (Fähigkeit, Erlaubnis, Notwendigkeit) auch eine subjektive Bedeutung. In der subjektiven Verwendung drücken sie eine Vermutung, eine Behauptung oder eine Einschätzung des Sprechers aus. Diese Verwendung ist besonders in Nachrichten, wissenschaftlichen Texten und gehobener Sprache üblich.",
        textVi: "Động từ khiếm khuyết ngoài nghĩa khách quan (khả năng, sự cho phép, sự cần thiết) còn có nghĩa chủ quan. Khi sử dụng theo nghĩa chủ quan, chúng diễn đạt sự phỏng đoán, khẳng định hoặc đánh giá của người nói. Cách sử dụng này đặc biệt phổ biến trong tin tức, văn bản khoa học và ngôn ngữ trang trọng."
      },
      {
        type: "grammar",
        titleDe: "Modalverben — Subjektive Bedeutung (Gegenwart)",
        titleVi: "Động từ khiếm khuyết — Nghĩa chủ quan (hiện tại)",
        rule: "müssen: logische Schlussfolgerung (95% sicher). dürfte: Vermutung (80% sicher). kann/könnte: Möglichkeit (50%). mag: Einräumung. soll/will: Behauptung eines Dritten / Behauptung über sich selbst.",
        ruleVi: "müssen: kết luận logic (95% chắc chắn). dürfte: phỏng đoán (80% chắc). kann/könnte: khả năng (50%). mag: thừa nhận. soll: ai đó khẳng định (theo người khác nói). will: tự khẳng định về bản thân.",
        examples: [
          { de: "Er muss krank sein. (Ich bin fast sicher.)", vi: "Anh ấy chắc hẳn bị bệnh. (Tôi gần như chắc chắn.)" },
          { de: "Sie dürfte etwa 40 Jahre alt sein. (Ich vermute es.)", vi: "Cô ấy có lẽ khoảng 40 tuổi. (Tôi phỏng đoán.)" },
          { de: "Das könnte stimmen. (Es ist möglich.)", vi: "Điều đó có thể đúng. (Có khả năng.)" },
          { de: "Er soll sehr reich sein. (Man sagt das.)", vi: "Nghe nói anh ấy rất giàu. (Người ta nói vậy.)" },
          { de: "Sie will alles allein geschafft haben. (Sie behauptet das.)", vi: "Cô ấy tự nhận đã làm mọi thứ một mình. (Cô ấy tự khẳng định.)" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Modalverben — Subjektive Bedeutung (Vergangenheit)",
        titleVi: "Động từ khiếm khuyết — Nghĩa chủ quan (quá khứ)",
        rule: "Struktur: Modalverb (Präsens) + Partizip II + haben/sein. Er muss krank gewesen sein. Sie dürfte das gewusst haben. Er soll dort gearbeitet haben. Sie will nichts davon gewusst haben.",
        ruleVi: "Cấu trúc: Động từ khiếm khuyết (hiện tại) + Partizip II + haben/sein. Er muss krank gewesen sein (Anh ấy chắc hẳn đã bị bệnh). Sie dürfte das gewusst haben (Cô ấy có lẽ đã biết điều đó). Er soll dort gearbeitet haben (Nghe nói anh ấy đã làm việc ở đó). Sie will nichts davon gewusst haben (Cô ấy tự nhận không biết gì về điều đó).",
        examples: [
          { de: "Er muss das Buch gelesen haben. (Ich bin fast sicher.)", vi: "Anh ấy chắc hẳn đã đọc cuốn sách. (Tôi gần như chắc chắn.)" },
          { de: "Sie dürfte schon abgefahren sein. (Ich vermute.)", vi: "Cô ấy có lẽ đã đi rồi. (Tôi phỏng đoán.)" },
          { de: "Der Philosoph soll das gesagt haben. (Angeblich.)", vi: "Nghe nói nhà triết học đã nói điều đó. (Được cho là.)" },
          { de: "Er will das Problem allein gelöst haben. (Er behauptet es.)", vi: "Anh ấy tự nhận đã giải quyết vấn đề một mình. (Anh ấy tự khẳng định.)" }
        ]
      },
      {
        type: "practice",
        titleDe: "Vermutungen und Behauptungen formulieren",
        titleVi: "Diễn đạt phỏng đoán và khẳng định",
        instruction: "Formulieren Sie die folgenden Sätze mithilfe der subjektiven Modalverben um: 1) Ich bin sicher, dass er die Wahrheit kennt. 2) Man sagt, dass der Politiker korrupt ist. 3) Es ist möglich, dass die Theorie falsch war. 4) Sie behauptet, dass sie das Geld gespendet hat. Schreiben Sie dann 4 eigene Beispielsätze.",
        instructionVi: "Hãy viết lại các câu sau bằng cách sử dụng nghĩa chủ quan của động từ khiếm khuyết: 1) Tôi chắc chắn rằng anh ấy biết sự thật. 2) Người ta nói rằng chính trị gia đó tham nhũng. 3) Có thể lý thuyết đó sai. 4) Cô ấy tự nhận đã quyên góp tiền. Sau đó viết 4 câu ví dụ của riêng bạn."
      }
    ]
  },

  // ============================================================
  // CHAPTER 6: Medizin & Gesundheitswesen
  // ============================================================

  // --- Chapter 6, Lesson 1: Medizinische Fachsprache (Grundlagen) ---
  {
    id: "b2-ch6-l1",
    chapterId: 6,
    lessonNumber: 1,
    title: "Medizinische Fachsprache (Grundlagen)",
    titleVi: "Tiếng Đức y khoa (Cơ bản)",
    type: "Einführung",
    objectives: [
      "Nắm được từ vựng y khoa cơ bản bằng tiếng Đức",
      "Hiểu tên các bộ phận cơ thể và triệu chứng bệnh ở trình độ B2",
      "Đọc hiểu các văn bản y khoa đơn giản"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Medizinische Fachsprache im Deutschen",
        titleVi: "Tiếng Đức y khoa",
        textDe: "Die medizinische Fachsprache im Deutschen basiert zu einem großen Teil auf Latein und Griechisch, verwendet aber auch viele deutsche Begriffe im Alltag. Für vietnamesische Pflegekräfte und Ärzte, die in Deutschland arbeiten möchten, ist das Erlernen der medizinischen Fachsprache besonders wichtig. Man unterscheidet zwischen der Arzt-Arzt-Kommunikation (Fachsprache) und der Arzt-Patient-Kommunikation (vereinfachte Sprache).",
        textVi: "Tiếng Đức y khoa dựa phần lớn trên tiếng Latin và tiếng Hy Lạp, nhưng cũng sử dụng nhiều thuật ngữ tiếng Đức trong giao tiếp hàng ngày. Đối với điều dưỡng và bác sĩ Việt Nam muốn làm việc tại Đức, việc học tiếng Đức y khoa đặc biệt quan trọng. Người ta phân biệt giữa giao tiếp bác sĩ-bác sĩ (ngôn ngữ chuyên ngành) và giao tiếp bác sĩ-bệnh nhân (ngôn ngữ đơn giản hóa)."
      },
      {
        type: "vocabulary",
        titleDe: "Körperteile & Organe (Fachsprache)",
        titleVi: "Bộ phận cơ thể & Cơ quan (Chuyên ngành)",
        words: [
          { de: "Thorax / Brustkorb", vi: "lồng ngực", article: "der" },
          { de: "Abdomen / Bauchraum", vi: "ổ bụng", article: "das" },
          { de: "Wirbelsäule", vi: "cột sống", article: "die" },
          { de: "Leber", vi: "gan", article: "die" },
          { de: "Niere", vi: "thận", article: "die" },
          { de: "Lunge", vi: "phổi", article: "die" },
          { de: "Blutgefäß", vi: "mạch máu", article: "das" },
          { de: "Schilddrüse", vi: "tuyến giáp", article: "die" },
          { de: "Knochenmark", vi: "tủy xương", article: "das" },
          { de: "Schleimhaut", vi: "niêm mạc", article: "die" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Symptome & Beschwerden",
        titleVi: "Triệu chứng & Phàn nàn",
        words: [
          { de: "Atemnot", vi: "khó thở", article: "die" },
          { de: "Schwindel", vi: "chóng mặt", article: "der" },
          { de: "Übelkeit", vi: "buồn nôn", article: "die" },
          { de: "Bluthochdruck", vi: "huyết áp cao", article: "der" },
          { de: "Entzündung", vi: "viêm", article: "die" },
          { de: "Fieber", vi: "sốt", article: "das" },
          { de: "Ausschlag", vi: "phát ban", article: "der" },
          { de: "Schwellung", vi: "sưng", article: "die" },
          { de: "Taubheitsgefühl", vi: "cảm giác tê", article: "das" },
          { de: "Herzrhythmusstörung", vi: "rối loạn nhịp tim", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Arzt-Arzt-Kommunikation vs. Arzt-Patient-Kommunikation",
        titleVi: "Giao tiếp bác sĩ-bác sĩ vs. bác sĩ-bệnh nhân",
        lines: [
          { speaker: "Arzt (zu Kollegen)", de: "Der Patient weist eine Hypertonie sowie eine beginnende Nephropathie auf.", vi: "Bệnh nhân có biểu hiện tăng huyết áp cùng với bệnh thận giai đoạn đầu." },
          { speaker: "Arzt (zu Patient)", de: "Ihr Blutdruck ist zu hoch, und Ihre Nieren zeigen erste Auffälligkeiten.", vi: "Huyết áp của ông quá cao, và thận của ông cho thấy những bất thường đầu tiên." },
          { speaker: "Patient", de: "Was bedeutet das genau? Ist das gefährlich?", vi: "Điều đó có nghĩa chính xác là gì? Có nguy hiểm không?" },
          { speaker: "Arzt", de: "Wenn wir den Blutdruck nicht senken, können die Nieren langfristig geschädigt werden. Aber mit Medikamenten und einer Ernährungsumstellung bekommen wir das in den Griff.", vi: "Nếu chúng ta không hạ huyết áp, thận có thể bị tổn thương lâu dài. Nhưng với thuốc và thay đổi chế độ ăn, chúng ta sẽ kiểm soát được." }
        ]
      },
      {
        type: "practice",
        titleDe: "Medizinische Begriffe erklären",
        titleVi: "Giải thích thuật ngữ y khoa",
        instruction: "Wählen Sie 5 medizinische Fachbegriffe aus der Wortliste und erklären Sie sie in einfacher Sprache, wie ein Arzt es einem Patienten erklären würde. Beispiel: 'Hypertonie' → 'Ihr Blutdruck ist dauerhaft zu hoch.'",
        instructionVi: "Hãy chọn 5 thuật ngữ y khoa từ danh sách từ vựng và giải thích chúng bằng ngôn ngữ đơn giản, như cách bác sĩ giải thích cho bệnh nhân. Ví dụ: 'Hypertonie' → 'Huyết áp của bạn liên tục quá cao.'"
      }
    ]
  },

  // --- Chapter 6, Lesson 2: Das deutsche Gesundheitssystem ---
  {
    id: "b2-ch6-l2",
    chapterId: 6,
    lessonNumber: 2,
    title: "Das deutsche Gesundheitssystem",
    titleVi: "Hệ thống y tế Đức",
    type: "Fertigkeit",
    objectives: [
      "Hiểu cấu trúc hệ thống y tế Đức (bảo hiểm công và tư)",
      "Nắm được từ vựng về bảo hiểm y tế và các cơ sở y tế",
      "So sánh hệ thống y tế Đức và Việt Nam"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das Gesundheitssystem in Deutschland",
        titleVi: "Hệ thống y tế ở Đức",
        textDe: "Deutschland hat ein duales Krankenversicherungssystem: die gesetzliche Krankenversicherung (GKV) und die private Krankenversicherung (PKV). Etwa 90% der Bevölkerung sind gesetzlich versichert. Die GKV funktioniert nach dem Solidaritätsprinzip: Die Beiträge richten sich nach dem Einkommen, nicht nach dem Gesundheitszustand. Jeder Versicherte hat Anspruch auf eine umfassende medizinische Versorgung.",
        textVi: "Đức có hệ thống bảo hiểm y tế kép: bảo hiểm y tế công (GKV) và bảo hiểm y tế tư (PKV). Khoảng 90% dân số có bảo hiểm công. Bảo hiểm công hoạt động theo nguyên tắc đoàn kết: mức đóng phí dựa trên thu nhập, không dựa trên tình trạng sức khỏe. Mọi người được bảo hiểm đều có quyền được chăm sóc y tế toàn diện."
      },
      {
        type: "vocabulary",
        titleDe: "Gesundheitssystem — Schlüsselbegriffe",
        titleVi: "Hệ thống y tế — Thuật ngữ chính",
        words: [
          { de: "Krankenversicherung", vi: "bảo hiểm y tế", article: "die" },
          { de: "Krankenkasse", vi: "quỹ bảo hiểm y tế", article: "die" },
          { de: "Versicherungsbeitrag", vi: "phí bảo hiểm", article: "der" },
          { de: "Hausarzt", vi: "bác sĩ gia đình", article: "der" },
          { de: "Facharzt", vi: "bác sĩ chuyên khoa", article: "der" },
          { de: "Überweisung", vi: "giấy chuyển viện", article: "die" },
          { de: "Rezept", vi: "đơn thuốc", article: "das" },
          { de: "Zuzahlung", vi: "khoản đồng chi trả", article: "die" },
          { de: "Pflegeversicherung", vi: "bảo hiểm chăm sóc dài hạn", article: "die" },
          { de: "Notaufnahme", vi: "phòng cấp cứu", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Beim Hausarzt",
        titleVi: "Tại phòng khám bác sĩ gia đình",
        lines: [
          { speaker: "Sprechstundenhilfe", de: "Guten Tag, haben Sie einen Termin?", vi: "Xin chào, bạn có hẹn không?" },
          { speaker: "Minh", de: "Ja, ich habe um 10 Uhr einen Termin bei Dr. Weber. Hier ist meine Versichertenkarte.", vi: "Vâng, tôi có hẹn lúc 10 giờ với bác sĩ Weber. Đây là thẻ bảo hiểm của tôi." },
          { speaker: "Sprechstundenhilfe", de: "Danke. Waren Sie schon einmal bei uns? Wir brauchen noch Ihre Anamnese.", vi: "Cảm ơn. Bạn đã đến đây lần nào chưa? Chúng tôi cần tiền sử bệnh của bạn." },
          { speaker: "Minh", de: "Nein, das ist mein erster Besuch. Ich bin vor Kurzem nach Deutschland gezogen und brauche auch eine Überweisung zum Facharzt.", vi: "Không, đây là lần đầu. Tôi mới chuyển đến Đức gần đây và cũng cần giấy chuyển viện đến bác sĩ chuyên khoa." },
          { speaker: "Sprechstundenhilfe", de: "Kein Problem. Füllen Sie bitte diesen Anamnesebogen aus. Der Arzt kann Ihnen dann eine Überweisung ausstellen.", vi: "Không vấn đề gì. Xin hãy điền phiếu tiền sử bệnh này. Bác sĩ có thể cấp giấy chuyển viện cho bạn." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Funktionsverbgefüge im medizinischen Kontext",
        titleVi: "Cụm động từ chức năng trong bối cảnh y tế",
        rule: "Funktionsverbgefüge bestehen aus einem Nomen und einem 'leeren' Verb: eine Diagnose stellen (diagnostizieren), in Behandlung sein (behandelt werden), eine Überweisung ausstellen (überweisen), Anspruch haben auf (beanspruchen können).",
        ruleVi: "Cụm động từ chức năng gồm một danh từ và một động từ 'rỗng': eine Diagnose stellen (chẩn đoán), in Behandlung sein (đang được điều trị), eine Überweisung ausstellen (cấp giấy chuyển viện), Anspruch haben auf (có quyền yêu cầu).",
        examples: [
          { de: "Der Arzt stellt eine Diagnose. (= Der Arzt diagnostiziert.)", vi: "Bác sĩ đưa ra chẩn đoán. (= Bác sĩ chẩn đoán.)" },
          { de: "Der Patient befindet sich in Behandlung. (= Der Patient wird behandelt.)", vi: "Bệnh nhân đang trong quá trình điều trị. (= Bệnh nhân đang được điều trị.)" },
          { de: "Sie hat Anspruch auf eine Zweitmeinung. (= Sie kann eine Zweitmeinung beanspruchen.)", vi: "Cô ấy có quyền yêu cầu ý kiến thứ hai. (= Cô ấy có thể yêu cầu ý kiến thứ hai.)" },
          { de: "Die Krankenkasse übernimmt die Kosten. (= Die Kosten werden von der Krankenkasse bezahlt.)", vi: "Quỹ bảo hiểm y tế chi trả chi phí. (= Chi phí được bảo hiểm chi trả.)" }
        ]
      },
      {
        type: "practice",
        titleDe: "Gesundheitssysteme vergleichen",
        titleVi: "So sánh các hệ thống y tế",
        instruction: "Vergleichen Sie das deutsche Gesundheitssystem mit dem vietnamesischen. Schreiben Sie 8-10 Sätze und verwenden Sie Funktionsverbgefüge. Berücksichtigen Sie: Versicherungssystem, Zugang zur Versorgung, Kosten, Qualität.",
        instructionVi: "Hãy so sánh hệ thống y tế Đức với hệ thống y tế Việt Nam. Viết 8-10 câu và sử dụng cụm động từ chức năng. Xem xét: hệ thống bảo hiểm, tiếp cận dịch vụ y tế, chi phí, chất lượng."
      }
    ]
  },

  // --- Chapter 6, Lesson 3: Patientengespräche & Arztberichte ---
  {
    id: "b2-ch6-l3",
    chapterId: 6,
    lessonNumber: 3,
    title: "Patientengespräche & Arztberichte",
    titleVi: "Hội thoại bệnh nhân & Báo cáo y tế",
    type: "Fertigkeit",
    objectives: [
      "Tiến hành cuộc hỏi bệnh (Anamnese) bằng tiếng Đức",
      "Đọc hiểu và viết báo cáo y tế đơn giản",
      "Sử dụng ngôn ngữ chuyên ngành trong giao tiếp y tế"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das Anamnesegespräch",
        titleVi: "Cuộc hỏi tiền sử bệnh",
        textDe: "Die Anamnese ist das wichtigste diagnostische Werkzeug. Ein strukturiertes Anamnesegespräch umfasst: aktuelle Beschwerden, Vorerkrankungen, Medikamenteneinnahme, Allergien, Familienanamnese und Sozialanamnese. Der Arzt muss dabei sowohl empathisch als auch systematisch vorgehen. Die Dokumentation erfolgt im Arztbericht.",
        textVi: "Hỏi tiền sử bệnh là công cụ chẩn đoán quan trọng nhất. Một cuộc hỏi bệnh có cấu trúc bao gồm: triệu chứng hiện tại, tiền sử bệnh, thuốc đang dùng, dị ứng, tiền sử gia đình và tiền sử xã hội. Bác sĩ phải vừa đồng cảm vừa có hệ thống. Việc ghi chép được thực hiện trong báo cáo y tế."
      },
      {
        type: "vocabulary",
        titleDe: "Anamnese & Arztbericht",
        titleVi: "Tiền sử bệnh & Báo cáo y tế",
        words: [
          { de: "Anamnese", vi: "tiền sử bệnh", article: "die" },
          { de: "Vorerkrankung", vi: "bệnh nền/tiền sử bệnh", article: "die" },
          { de: "Befund", vi: "kết quả khám", article: "der" },
          { de: "Diagnose", vi: "chẩn đoán", article: "die" },
          { de: "Therapie", vi: "liệu pháp/điều trị", article: "die" },
          { de: "Blutbild", vi: "xét nghiệm máu", article: "das" },
          { de: "Medikament", vi: "thuốc", article: "das" },
          { de: "Dosierung", vi: "liều lượng", article: "die" },
          { de: "Nebenwirkung", vi: "tác dụng phụ", article: "die" },
          { de: "Entlassungsbrief", vi: "giấy xuất viện", article: "der" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Ein Anamnesegespräch",
        titleVi: "Một cuộc hỏi tiền sử bệnh",
        lines: [
          { speaker: "Ärztin", de: "Guten Tag, Herr Nguyen. Was führt Sie heute zu mir?", vi: "Xin chào, ông Nguyen. Điều gì đưa ông đến đây hôm nay?" },
          { speaker: "Patient", de: "Ich habe seit etwa zwei Wochen starke Kopfschmerzen und fühle mich ständig müde.", vi: "Tôi bị đau đầu dữ dội khoảng hai tuần nay và luôn cảm thấy mệt mỏi." },
          { speaker: "Ärztin", de: "Wo genau sind die Schmerzen? Eher an der Stirn oder im Hinterkopf? Wie würden Sie den Schmerz beschreiben — stechend, dumpf, pochend?", vi: "Đau ở đâu chính xác? Ở trán hay sau đầu? Bạn mô tả cơn đau như thế nào — nhói, âm ỉ, đập?" },
          { speaker: "Patient", de: "Eher im Hinterkopf, ein dumpfer, drückender Schmerz. Besonders morgens nach dem Aufwachen.", vi: "Chủ yếu ở sau đầu, đau âm ỉ, tức nặng. Đặc biệt vào buổi sáng sau khi thức dậy." },
          { speaker: "Ärztin", de: "Nehmen Sie regelmäßig Medikamente ein? Haben Sie bekannte Vorerkrankungen oder Allergien?", vi: "Ông có uống thuốc thường xuyên không? Có bệnh nền hoặc dị ứng nào đã biết không?" },
          { speaker: "Patient", de: "Ich nehme seit einem Jahr Medikamente gegen Bluthochdruck. Allergien habe ich keine.", vi: "Tôi uống thuốc huyết áp cao từ một năm nay. Tôi không bị dị ứng." },
          { speaker: "Ärztin", de: "Gut. Ich werde Ihren Blutdruck messen und ein Blutbild anordnen. Außerdem überweise ich Sie an den Neurologen.", vi: "Tốt. Tôi sẽ đo huyết áp và yêu cầu xét nghiệm máu. Ngoài ra tôi sẽ chuyển ông đến bác sĩ thần kinh." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Unpersönliche Ausdrücke im medizinischen Bericht",
        titleVi: "Diễn đạt phi cá nhân trong báo cáo y tế",
        rule: "Arztberichte verwenden: Passiv (Es wurde ein Blutbild angefertigt), unpersönliche Konstruktionen (Es zeigt sich eine Auffälligkeit), Partizipialattribute (der oben beschriebene Befund), Nominalstil (nach Durchführung der Untersuchung).",
        ruleVi: "Báo cáo y tế sử dụng: Bị động (Xét nghiệm máu đã được thực hiện), cấu trúc phi cá nhân (Cho thấy một bất thường), phân từ làm tính từ (kết quả đã mô tả ở trên), phong cách danh từ hóa (sau khi tiến hành kiểm tra).",
        examples: [
          { de: "Es wurde ein großes Blutbild angefertigt.", vi: "Xét nghiệm máu tổng quát đã được thực hiện." },
          { de: "Bei der Untersuchung zeigte sich eine Schwellung im rechten Knie.", vi: "Khi khám phát hiện sưng ở đầu gối phải." },
          { de: "Der oben genannte Patient stellte sich mit Kopfschmerzen vor.", vi: "Bệnh nhân nêu trên đến khám vì đau đầu." },
          { de: "Nach Durchführung der diagnostischen Maßnahmen wurde folgende Therapie eingeleitet.", vi: "Sau khi thực hiện các biện pháp chẩn đoán, liệu pháp sau đã được bắt đầu." }
        ]
      },
      {
        type: "practice",
        titleDe: "Einen Arztbericht schreiben",
        titleVi: "Viết một báo cáo y tế",
        instruction: "Schreiben Sie einen kurzen Arztbericht (8-10 Sätze) basierend auf dem Anamnesegespräch oben. Verwenden Sie den Nominalstil, Passiv und Partizipialattribute. Strukturieren Sie den Bericht in: Anamnese, Befund, Diagnose, Therapieempfehlung.",
        instructionVi: "Hãy viết một báo cáo y tế ngắn (8-10 câu) dựa trên cuộc hỏi tiền sử bệnh ở trên. Sử dụng phong cách danh từ hóa, bị động và phân từ làm tính từ. Cấu trúc báo cáo thành: Tiền sử bệnh, Kết quả khám, Chẩn đoán, Khuyến nghị điều trị."
      }
    ]
  },

  // --- Chapter 6, Lesson 4: Erweiterte Konnektoren ---
  {
    id: "b2-ch6-l4",
    chapterId: 6,
    lessonNumber: 4,
    title: "Erweiterte Konnektoren",
    titleVi: "Liên từ mở rộng",
    type: "Grammatik",
    objectives: [
      "Nắm vững các liên từ nâng cao cho văn bản học thuật và chuyên ngành",
      "Phân biệt và sử dụng đúng các loại liên từ: kausal, konsekutiv, konzessiv, final",
      "Viết văn bản phức tạp với cấu trúc câu đa dạng"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Konnektoren auf B2-Niveau",
        titleVi: "Liên từ trình độ B2",
        textDe: "Auf B2-Niveau sollten Sie neben den grundlegenden Konnektoren (weil, obwohl, wenn) auch erweiterte Konnektoren beherrschen. Diese machen Ihre Texte differenzierter und akademischer. Man unterscheidet: kausale (Grund), konsekutive (Folge), konzessive (Einräumung), finale (Ziel/Zweck), konditionale (Bedingung) und modale (Art und Weise) Konnektoren.",
        textVi: "Ở trình độ B2, bên cạnh các liên từ cơ bản (weil, obwohl, wenn), bạn cũng cần thành thạo các liên từ mở rộng. Chúng làm cho văn bản của bạn có chiều sâu và mang tính học thuật hơn. Phân loại: liên từ nguyên nhân (kausal), liên từ kết quả (konsekutiv), liên từ nhượng bộ (konzessiv), liên từ mục đích (final), liên từ điều kiện (konditional) và liên từ cách thức (modal)."
      },
      {
        type: "grammar",
        titleDe: "Kausale & konsekutive Konnektoren",
        titleVi: "Liên từ nguyên nhân & kết quả",
        rule: "Kausal (Grund): da, zumal, nämlich, aufgrund + Genitiv, wegen + Genitiv. Konsekutiv (Folge): sodass, folglich, infolgedessen, demzufolge, so... dass...",
        ruleVi: "Nguyên nhân: da (vì — đầu câu), zumal (nhất là vì), nämlich (bởi vì — giữa câu), aufgrund + Genitiv (do), wegen + Genitiv (vì). Kết quả: sodass (để đến nỗi), folglich (do đó), infolgedessen (hậu quả là), demzufolge (theo đó), so... dass... (quá... đến nỗi...).",
        examples: [
          { de: "Da der Patient unter Bluthochdruck leidet, muss er regelmäßig Medikamente nehmen.", vi: "Vì bệnh nhân bị huyết áp cao, anh ấy phải uống thuốc thường xuyên." },
          { de: "Die Behandlung war erfolgreich, zumal der Patient sehr kooperativ war.", vi: "Điều trị thành công, nhất là vì bệnh nhân rất hợp tác." },
          { de: "Aufgrund der schweren Symptome wurde der Patient sofort eingeliefert.", vi: "Do triệu chứng nặng, bệnh nhân được nhập viện ngay lập tức." },
          { de: "Der Blutdruck war so hoch, dass sofortige Maßnahmen ergriffen werden mussten.", vi: "Huyết áp cao đến nỗi phải thực hiện biện pháp ngay lập tức." },
          { de: "Die Werte waren besorgniserregend. Folglich ordnete der Arzt weitere Untersuchungen an.", vi: "Các chỉ số đáng lo ngại. Do đó bác sĩ yêu cầu thêm xét nghiệm." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Konzessive, finale & konditionale Konnektoren",
        titleVi: "Liên từ nhượng bộ, mục đích & điều kiện",
        rule: "Konzessiv: obgleich, wenngleich, wenn auch, trotz + Genitiv, ungeachtet + Genitiv. Final: damit, um... zu..., zwecks + Genitiv. Konditional: falls, sofern, vorausgesetzt (dass), es sei denn.",
        ruleVi: "Nhượng bộ: obgleich (mặc dù), wenngleich (dẫu rằng), wenn auch (cho dù), trotz + Genitiv (bất chấp), ungeachtet + Genitiv (bất kể). Mục đích: damit (để cho), um... zu... (để), zwecks + Genitiv (nhằm mục đích). Điều kiện: falls (nếu), sofern (nếu như), vorausgesetzt dass (với điều kiện là), es sei denn (trừ khi).",
        examples: [
          { de: "Obgleich die Therapie Nebenwirkungen hat, ist sie die beste Option.", vi: "Mặc dù liệu pháp có tác dụng phụ, nó là lựa chọn tốt nhất." },
          { de: "Ungeachtet der Risiken entschied sich der Patient für die Operation.", vi: "Bất kể rủi ro, bệnh nhân quyết định phẫu thuật." },
          { de: "Die Dosis wurde erhöht, damit die Symptome schneller abklingen.", vi: "Liều lượng được tăng lên để triệu chứng thuyên giảm nhanh hơn." },
          { de: "Sofern keine Komplikationen auftreten, kann der Patient morgen entlassen werden.", vi: "Nếu như không có biến chứng, bệnh nhân có thể xuất viện ngày mai." },
          { de: "Der Patient darf keine schweren Lasten heben, es sei denn, der Arzt erlaubt es.", vi: "Bệnh nhân không được nâng vật nặng, trừ khi bác sĩ cho phép." }
        ]
      },
      {
        type: "practice",
        titleDe: "Einen medizinischen Fachtext schreiben",
        titleVi: "Viết một văn bản y khoa chuyên ngành",
        instruction: "Schreiben Sie einen kurzen Fachtext (10-12 Sätze) über ein Gesundheitsthema Ihrer Wahl (z.B. Diabetes, psychische Gesundheit, Prävention). Verwenden Sie mindestens 6 verschiedene erweiterte Konnektoren aus dieser Lektion.",
        instructionVi: "Hãy viết một văn bản chuyên ngành ngắn (10-12 câu) về một chủ đề sức khỏe tùy chọn (ví dụ: tiểu đường, sức khỏe tâm thần, phòng bệnh). Sử dụng ít nhất 6 liên từ mở rộng khác nhau từ bài học này."
      }
    ]
  }
];
