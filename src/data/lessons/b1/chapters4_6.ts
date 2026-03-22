// B1 Chapters 4-6: Medien & Meinungsbildung, Interkulturelle Erfahrungen, Umwelt & Nachhaltigkeit

import type { ContentBlock, Lesson } from "../a1/chapters4_6";

export const b1LessonsCh4_6: Lesson[] = [
  // ============================================================
  // CHAPTER 4: Medien & Meinungsbildung
  // ============================================================

  // --- Chapter 4, Lesson 1: Nachrichten analysieren ---
  {
    id: "b1-ch4-l1",
    chapterId: 4,
    lessonNumber: 1,
    title: "Nachrichten analysieren",
    titleVi: "Phân tích tin tức",
    type: "Einführung",
    objectives: [
      "Hiểu cấu trúc một bài báo tiếng Đức",
      "Phân biệt các loại hình truyền thông tại Đức",
      "Nắm được từ vựng chuyên ngành truyền thông và báo chí"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Medienlandschaft in Deutschland",
        titleVi: "Bức tranh truyền thông tại Đức",
        textDe: "Deutschland hat eine vielfältige Medienlandschaft. Es gibt öffentlich-rechtliche Sender wie ARD und ZDF, die durch Rundfunkbeiträge finanziert werden. Daneben existieren private Sender, Tageszeitungen, Wochenzeitungen und zahlreiche Online-Medien. Die Pressefreiheit ist im Grundgesetz verankert und gilt als wichtige Säule der Demokratie.",
        textVi: "Đức có một bức tranh truyền thông đa dạng. Có các đài truyền hình công cộng như ARD và ZDF, được tài trợ bằng phí truyền thông (Rundfunkbeitrag). Bên cạnh đó còn có các đài tư nhân, nhật báo, tuần báo và nhiều phương tiện truyền thông trực tuyến. Quyền tự do báo chí được ghi trong Hiến pháp (Grundgesetz) và được coi là trụ cột quan trọng của nền dân chủ."
      },
      {
        type: "vocabulary",
        titleDe: "Medien & Nachrichten",
        titleVi: "Truyền thông & Tin tức",
        words: [
          { de: "Nachricht", vi: "tin tức, thông tin", article: "die" },
          { de: "Bericht", vi: "bài tường thuật", article: "der" },
          { de: "Schlagzeile", vi: "tiêu đề lớn", article: "die" },
          { de: "Tageszeitung", vi: "nhật báo", article: "die" },
          { de: "Zeitschrift", vi: "tạp chí", article: "die" },
          { de: "Rundfunk", vi: "phát thanh truyền hình", article: "der" },
          { de: "Sender", vi: "đài, kênh", article: "der" },
          { de: "Journalist", vi: "nhà báo", article: "der" },
          { de: "Redaktion", vi: "tòa soạn", article: "die" },
          { de: "Quelle", vi: "nguồn tin", article: "die" },
          { de: "Leser", vi: "độc giả", article: "der" },
          { de: "Meldung", vi: "bản tin ngắn", article: "die" },
          { de: "Leitartikel", vi: "bài xã luận", article: "der" },
          { de: "Pressefreiheit", vi: "tự do báo chí", article: "die" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Über Nachrichten sprechen",
        titleVi: "Nói về tin tức",
        lines: [
          { speaker: "Linh", de: "Hast du heute die Nachrichten gelesen?", vi: "Hôm nay bạn đọc tin tức chưa?" },
          { speaker: "Thomas", de: "Ja, ich habe den Bericht über die neue Klimapolitik gelesen. Das war ein sehr ausführlicher Artikel.", vi: "Rồi, tôi đã đọc bài tường thuật về chính sách khí hậu mới. Đó là một bài báo rất chi tiết." },
          { speaker: "Linh", de: "In welcher Zeitung war das?", vi: "Bài đó ở tờ báo nào?" },
          { speaker: "Thomas", de: "In der Süddeutschen Zeitung. Ich lese sie jeden Tag online. Und du? Wo informierst du dich?", vi: "Trong tờ Süddeutsche Zeitung. Tôi đọc nó hàng ngày trên mạng. Còn bạn? Bạn tìm hiểu thông tin ở đâu?" },
          { speaker: "Linh", de: "Ich schaue meistens die Tagesschau und lese Artikel auf meinem Handy. Manchmal höre ich auch Podcasts.", vi: "Tôi thường xem Tagesschau và đọc bài trên điện thoại. Đôi khi tôi cũng nghe podcast." },
          { speaker: "Thomas", de: "Podcasts sind super. Man sollte aber immer mehrere Quellen vergleichen, um sich eine eigene Meinung zu bilden.", vi: "Podcast rất hay. Nhưng nên luôn so sánh nhiều nguồn tin để hình thành ý kiến riêng." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Über Medienkonsum sprechen",
        titleVi: "Nói về thói quen sử dụng truyền thông",
        rule: "Redemittel: Ich informiere mich über... / Ich lese regelmäßig... / Meiner Meinung nach... / Ich finde den Artikel... / Der Bericht handelt von...",
        ruleVi: "Các mẫu câu: Ich informiere mich über... (Tôi tìm hiểu về...) / Ich lese regelmäßig... (Tôi đọc thường xuyên...) / Meiner Meinung nach... (Theo ý kiến của tôi...) / Ich finde den Artikel... (Tôi thấy bài báo...) / Der Bericht handelt von... (Bài tường thuật nói về...)",
        examples: [
          { de: "Ich informiere mich täglich über das Weltgeschehen.", vi: "Tôi tìm hiểu hàng ngày về tình hình thế giới." },
          { de: "Der Artikel handelt von den steigenden Energiepreisen.", vi: "Bài báo nói về giá năng lượng tăng cao." },
          { de: "Meiner Meinung nach ist der Bericht sehr einseitig.", vi: "Theo ý kiến của tôi, bài tường thuật rất một chiều." },
          { de: "Ich finde, dass die Zeitung gut recherchiert hat.", vi: "Tôi thấy rằng tờ báo đã điều tra kỹ lưỡng." }
        ]
      },
      {
        type: "practice",
        titleDe: "Einen Nachrichtenartikel analysieren",
        titleVi: "Phân tích một bài báo",
        instruction: "Lies einen aktuellen Nachrichtenartikel auf Deutsch und beantworte: 1) Was ist das Thema? 2) Wer hat den Artikel geschrieben? 3) Welche Quellen werden genannt? 4) Ist der Artikel objektiv oder subjektiv? Benutze: Der Artikel handelt von... / Die Hauptaussage ist... / Der Journalist argumentiert, dass...",
        instructionVi: "Đọc một bài báo tiếng Đức hiện tại và trả lời: 1) Chủ đề là gì? 2) Ai viết bài? 3) Những nguồn tin nào được nêu? 4) Bài báo khách quan hay chủ quan? Sử dụng: Der Artikel handelt von... / Die Hauptaussage ist... / Der Journalist argumentiert, dass..."
      }
    ]
  },

  // --- Chapter 4, Lesson 2: Fake News erkennen ---
  {
    id: "b1-ch4-l2",
    chapterId: 4,
    lessonNumber: 2,
    title: "Fake News erkennen",
    titleVi: "Nhận biết tin giả",
    type: "Fertigkeit",
    objectives: [
      "Nhận biết các dấu hiệu của tin giả",
      "Biết cách kiểm tra nguồn tin và xác minh thông tin",
      "Sử dụng từ vựng phê phán và đánh giá truyền thông"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Was sind Fake News?",
        titleVi: "Tin giả là gì?",
        textDe: "Fake News sind bewusst falsche oder irreführende Informationen, die als echte Nachrichten verbreitet werden. Sie können in sozialen Medien, auf Webseiten oder in Messenger-Gruppen auftauchen. Oft haben sie reißerische Überschriften und spielen mit den Emotionen der Leser. In Deutschland gibt es Faktenchecking-Organisationen wie Correctiv, die fragwürdige Meldungen überprüfen.",
        textVi: "Fake News là những thông tin cố ý sai lệch hoặc gây hiểu nhầm, được phát tán dưới dạng tin tức thật. Chúng có thể xuất hiện trên mạng xã hội, trên các trang web hoặc trong các nhóm tin nhắn. Thường có tiêu đề giật gân và chơi với cảm xúc của người đọc. Ở Đức có các tổ chức kiểm chứng thông tin như Correctiv, chuyên kiểm tra những bản tin đáng ngờ."
      },
      {
        type: "vocabulary",
        titleDe: "Fake News & Medienkritik",
        titleVi: "Tin giả & Phê bình truyền thông",
        words: [
          { de: "Falschmeldung", vi: "tin sai, tin giả", article: "die" },
          { de: "Gerücht", vi: "tin đồn", article: "das" },
          { de: "Verschwörungstheorie", vi: "thuyết âm mưu", article: "die" },
          { de: "Faktencheck", vi: "kiểm chứng sự thật", article: "der" },
          { de: "Manipulation", vi: "sự thao túng", article: "die" },
          { de: "Desinformation", vi: "thông tin sai lệch", article: "die" },
          { de: "glaubwürdig", vi: "đáng tin cậy" },
          { de: "irreführend", vi: "gây hiểu lầm" },
          { de: "überprüfen", vi: "kiểm tra, xác minh" },
          { de: "verbreiten", vi: "phát tán, lan truyền" },
          { de: "täuschen", vi: "lừa dối" },
          { de: "hinterfragen", vi: "đặt câu hỏi, nghi vấn" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Ist das wirklich wahr?",
        titleVi: "Điều đó có thật không?",
        lines: [
          { speaker: "Hoa", de: "Hast du diesen Artikel über das neue Gesetz gesehen? Angeblich dürfen Ausländer nicht mehr reisen.", vi: "Bạn có thấy bài báo về luật mới không? Nghe nói người nước ngoài không được đi du lịch nữa." },
          { speaker: "Markus", de: "Das klingt unglaubwürdig. Wo hast du das gelesen?", vi: "Nghe có vẻ không đáng tin. Bạn đọc ở đâu?" },
          { speaker: "Hoa", de: "Jemand hat es in unserer WhatsApp-Gruppe geteilt.", vi: "Ai đó chia sẻ trong nhóm WhatsApp của mình." },
          { speaker: "Markus", de: "Das ist wahrscheinlich eine Falschmeldung. Ich würde das zuerst auf einer seriösen Nachrichtenseite überprüfen.", vi: "Đó có lẽ là tin giả. Tôi sẽ kiểm tra trước trên trang tin tức uy tín." },
          { speaker: "Hoa", de: "Du hast recht. Ich habe gerade bei der Tagesschau nachgeschaut — da steht nichts davon.", vi: "Bạn nói đúng. Tôi vừa kiểm tra trên Tagesschau — không có gì về chuyện đó." },
          { speaker: "Markus", de: "Siehst du! Man sollte immer die Quelle hinterfragen, bevor man etwas weiterleitet.", vi: "Thấy chưa! Nên luôn đặt câu hỏi về nguồn tin trước khi chuyển tiếp." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Zweifel und Skepsis ausdrücken",
        titleVi: "Diễn đạt sự nghi ngờ và hoài nghi",
        rule: "Redemittel für Skepsis: Das klingt unglaubwürdig. / Ich bezweifle, dass... / Ich bin mir nicht sicher, ob... / Das halte ich für übertrieben. / Angeblich... (nhấn mạnh chưa xác minh)",
        ruleVi: "Các mẫu câu diễn đạt sự hoài nghi: Das klingt unglaubwürdig. (Nghe không đáng tin.) / Ich bezweifle, dass... (Tôi nghi ngờ rằng...) / Ich bin mir nicht sicher, ob... (Tôi không chắc liệu...) / Das halte ich für übertrieben. (Tôi cho rằng điều đó phóng đại.) / Angeblich... (Nghe nói... — chưa xác minh)",
        examples: [
          { de: "Ich bezweifle, dass diese Information stimmt.", vi: "Tôi nghi ngờ rằng thông tin này đúng." },
          { de: "Das klingt sehr unglaubwürdig. Hast du die Quelle überprüft?", vi: "Nghe rất không đáng tin. Bạn đã kiểm tra nguồn tin chưa?" },
          { de: "Angeblich soll das Gesetz nächste Woche kommen.", vi: "Nghe nói luật sẽ có hiệu lực tuần tới." },
          { de: "Ich bin mir nicht sicher, ob der Bericht objektiv ist.", vi: "Tôi không chắc liệu bài tường thuật có khách quan không." }
        ]
      },
      {
        type: "practice",
        titleDe: "Fake News erkennen",
        titleVi: "Nhận biết tin giả",
        instruction: "Diskutiere mit einem Partner: 1) Hast du schon einmal eine Falschmeldung gelesen? Was war das? 2) Wie kann man Fake News erkennen? Nenne mindestens 3 Merkmale. 3) Was sollte man tun, bevor man einen Artikel teilt? Benutze: Ich bezweifle, dass... / Man sollte immer... / Es ist wichtig, dass...",
        instructionVi: "Thảo luận với bạn: 1) Bạn đã từng đọc tin giả chưa? Đó là gì? 2) Làm sao nhận biết tin giả? Nêu ít nhất 3 dấu hiệu. 3) Nên làm gì trước khi chia sẻ một bài báo? Sử dụng: Ich bezweifle, dass... / Man sollte immer... / Es ist wichtig, dass..."
      }
    ]
  },

  // --- Chapter 4, Lesson 3: Leserbriefe & Kommentare ---
  {
    id: "b1-ch4-l3",
    chapterId: 4,
    lessonNumber: 3,
    title: "Leserbriefe & Kommentare",
    titleVi: "Thư bạn đọc & Bình luận",
    type: "Fertigkeit",
    objectives: [
      "Viết thư bạn đọc phản hồi một bài báo",
      "Viết bình luận trực tuyến bày tỏ ý kiến",
      "Sử dụng cấu trúc lập luận: Einleitung, Hauptteil, Schluss"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Leserbriefe und Online-Kommentare",
        titleVi: "Thư bạn đọc và bình luận trực tuyến",
        textDe: "Ein Leserbrief ist eine schriftliche Reaktion auf einen Zeitungsartikel. Online-Kommentare erfüllen eine ähnliche Funktion. Beide geben dem Leser die Möglichkeit, seine Meinung zu äußern, Kritik zu üben oder Ergänzungen zu machen. Ein guter Leserbrief hat eine klare Struktur: Bezug auf den Artikel, eigene Meinung mit Begründung und ein kurzes Fazit.",
        textVi: "Thư bạn đọc (Leserbrief) là phản hồi bằng văn bản đối với một bài báo. Bình luận trực tuyến có chức năng tương tự. Cả hai cho phép người đọc bày tỏ ý kiến, phê bình hoặc bổ sung thông tin. Một thư bạn đọc tốt có cấu trúc rõ ràng: liên hệ đến bài báo, ý kiến cá nhân kèm lý do và kết luận ngắn."
      },
      {
        type: "vocabulary",
        titleDe: "Meinung äußern",
        titleVi: "Bày tỏ ý kiến",
        words: [
          { de: "Leserbrief", vi: "thư bạn đọc", article: "der" },
          { de: "Kommentar", vi: "bình luận", article: "der" },
          { de: "Stellungnahme", vi: "ý kiến, lập trường", article: "die" },
          { de: "Argument", vi: "lý lẽ, luận điểm", article: "das" },
          { de: "Begründung", vi: "lý do, giải thích", article: "die" },
          { de: "Standpunkt", vi: "quan điểm", article: "der" },
          { de: "zustimmen", vi: "đồng ý" },
          { de: "widersprechen", vi: "phản đối" },
          { de: "kritisieren", vi: "phê bình" },
          { de: "befürworten", vi: "ủng hộ" },
          { de: "ablehnen", vi: "từ chối, bác bỏ" },
          { de: "überzeugen", vi: "thuyết phục" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Aufbau eines Leserbriefs",
        titleVi: "Cấu trúc một thư bạn đọc",
        rule: "Einleitung: Bezug auf den Artikel (Ich beziehe mich auf Ihren Artikel vom...). Hauptteil: Eigene Meinung + Argumente (Ich bin der Meinung, dass... / Erstens... Zweitens... / Dafür spricht, dass...). Schluss: Fazit oder Appell (Zusammenfassend möchte ich sagen... / Ich fordere...).",
        ruleVi: "Mở đầu: Liên hệ đến bài báo (Ich beziehe mich auf Ihren Artikel vom... — Tôi đề cập đến bài báo của quý vị ngày...). Thân bài: Ý kiến + Lý lẽ (Ich bin der Meinung, dass... — Tôi cho rằng... / Erstens... Zweitens... — Thứ nhất... Thứ hai... / Dafür spricht, dass... — Điều ủng hộ cho việc này là...). Kết luận: Tóm tắt hoặc kêu gọi (Zusammenfassend möchte ich sagen... — Tóm lại tôi muốn nói... / Ich fordere... — Tôi yêu cầu...).",
        examples: [
          { de: "Ich beziehe mich auf Ihren Artikel vom 15. März zum Thema Bildung.", vi: "Tôi đề cập đến bài báo ngày 15 tháng 3 của quý vị về chủ đề giáo dục." },
          { de: "Ich bin der Meinung, dass die Digitalisierung der Schulen dringend nötig ist.", vi: "Tôi cho rằng số hóa trường học là vô cùng cần thiết." },
          { de: "Erstens fehlen moderne Geräte, zweitens sind die Lehrer nicht ausreichend geschult.", vi: "Thứ nhất thiếu thiết bị hiện đại, thứ hai giáo viên chưa được đào tạo đầy đủ." },
          { de: "Zusammenfassend möchte ich sagen, dass wir mehr in Bildung investieren müssen.", vi: "Tóm lại, tôi muốn nói rằng chúng ta phải đầu tư nhiều hơn vào giáo dục." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Über einen Artikel diskutieren",
        titleVi: "Thảo luận về một bài báo",
        lines: [
          { speaker: "Mai", de: "Hast du den Artikel über das Handyverbot an Schulen gelesen?", vi: "Bạn đọc bài báo về lệnh cấm điện thoại ở trường chưa?" },
          { speaker: "Jan", de: "Ja! Ich finde die Idee grundsätzlich gut. Handys lenken im Unterricht ab.", vi: "Rồi! Về cơ bản tôi thấy ý tưởng đó tốt. Điện thoại gây mất tập trung trong giờ học." },
          { speaker: "Mai", de: "Da bin ich anderer Meinung. Handys können auch als Lernwerkzeug genutzt werden.", vi: "Tôi có ý kiến khác. Điện thoại cũng có thể được sử dụng như công cụ học tập." },
          { speaker: "Jan", de: "Das stimmt zwar, aber die meisten Schüler nutzen sie nicht zum Lernen.", vi: "Đúng là vậy, nhưng đa số học sinh không dùng để học." },
          { speaker: "Mai", de: "Ich würde einen Leserbrief schreiben und argumentieren, dass ein Totalverbot übertrieben ist.", vi: "Tôi sẽ viết thư bạn đọc và lập luận rằng cấm hoàn toàn là thái quá." },
          { speaker: "Jan", de: "Gute Idee! Vielleicht schreibe ich auch einen — mit einem anderen Standpunkt.", vi: "Ý hay! Có lẽ tôi cũng viết một lá — với quan điểm khác." }
        ]
      },
      {
        type: "practice",
        titleDe: "Einen Leserbrief schreiben",
        titleVi: "Viết một thư bạn đọc",
        instruction: "Schreibe einen Leserbrief (ca. 120-150 Wörter) zu einem der folgenden Themen: a) Handyverbot an Schulen, b) Mehr Fahrradwege in der Stadt, c) Höhere Steuern auf Zucker. Benutze die Struktur: Einleitung → Hauptteil (mindestens 2 Argumente) → Schluss. Verwende: Ich beziehe mich auf... / Meiner Meinung nach... / Einerseits... andererseits... / Zusammenfassend...",
        instructionVi: "Viết một thư bạn đọc (khoảng 120-150 từ) về một trong các chủ đề sau: a) Cấm điện thoại ở trường, b) Thêm đường xe đạp trong thành phố, c) Tăng thuế đường. Sử dụng cấu trúc: Mở bài → Thân bài (ít nhất 2 luận điểm) → Kết luận. Dùng: Ich beziehe mich auf... / Meiner Meinung nach... / Einerseits... andererseits... / Zusammenfassend..."
      }
    ]
  },

  // --- Chapter 4, Lesson 4: Indirekte Rede (Konjunktiv I) ---
  {
    id: "b1-ch4-l4",
    chapterId: 4,
    lessonNumber: 4,
    title: "Indirekte Rede (Konjunktiv I)",
    titleVi: "Lời nói gián tiếp (Konjunktiv I)",
    type: "Grammatik",
    objectives: [
      "Hiểu khái niệm và cách chia Konjunktiv I",
      "Chuyển đổi từ lời nói trực tiếp sang gián tiếp",
      "Nhận biết Konjunktiv I trong văn bản báo chí"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Was ist die indirekte Rede?",
        titleVi: "Lời nói gián tiếp là gì?",
        textDe: "Die indirekte Rede wird verwendet, wenn man wiedergibt, was jemand anderes gesagt hat. In der geschriebenen Sprache, besonders in Zeitungsartikeln, benutzt man dafür den Konjunktiv I. Der Konjunktiv I zeigt, dass man die Aussage einer anderen Person berichtet, ohne sie als eigene Meinung darzustellen.",
        textVi: "Lời nói gián tiếp (indirekte Rede) được sử dụng khi thuật lại lời người khác nói. Trong văn viết, đặc biệt là báo chí, người ta dùng Konjunktiv I. Konjunktiv I cho thấy người viết đang tường thuật lời nói của người khác, không phải bày tỏ ý kiến cá nhân. Đây là điểm ngữ pháp rất đặc trưng của tiếng Đức, không có trong tiếng Việt."
      },
      {
        type: "grammar",
        titleDe: "Bildung des Konjunktiv I",
        titleVi: "Cách chia Konjunktiv I",
        rule: "Konjunktiv I wird vom Infinitiv-Stamm gebildet: ich -e, du -est, er/sie/es -e, wir -en, ihr -et, sie/Sie -en. Wichtigste Form: 3. Person Singular (er/sie/es). Wenn Konjunktiv I = Indikativ, nutzt man Konjunktiv II oder würde + Infinitiv.",
        ruleVi: "Konjunktiv I được chia từ gốc nguyên mẫu: ich -e, du -est, er/sie/es -e, wir -en, ihr -et, sie/Sie -en. Hình thức quan trọng nhất: ngôi thứ 3 số ít (er/sie/es). Khi Konjunktiv I trùng với Indikativ (thể bình thường), ta dùng Konjunktiv II hoặc würde + nguyên mẫu. Ví dụ: sein → er sei (K1), haben → er habe (K1), kommen → er komme (K1), gehen → er gehe (K1).",
        examples: [
          { de: "Er sagt: 'Ich bin krank.' → Er sagt, er sei krank.", vi: "Anh ấy nói: 'Tôi bị ốm.' → Anh ấy nói rằng anh ấy bị ốm." },
          { de: "Sie sagt: 'Ich habe keine Zeit.' → Sie sagt, sie habe keine Zeit.", vi: "Cô ấy nói: 'Tôi không có thời gian.' → Cô ấy nói rằng cô ấy không có thời gian." },
          { de: "Der Minister sagt: 'Wir brauchen neue Gesetze.' → Der Minister sagt, sie bräuchten neue Gesetze.", vi: "Bộ trưởng nói: 'Chúng ta cần luật mới.' → Bộ trưởng nói rằng họ cần luật mới. (dùng K2 vì K1 'brauchen' trùng Indikativ)" },
          { de: "Die Sprecherin erklärt: 'Die Regierung plant Reformen.' → Die Sprecherin erklärt, die Regierung plane Reformen.", vi: "Phát ngôn viên giải thích: 'Chính phủ lên kế hoạch cải cách.' → Phát ngôn viên giải thích rằng chính phủ lên kế hoạch cải cách." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Konjunktiv I: sein und haben",
        titleVi: "Konjunktiv I: sein và haben",
        rule: "sein: ich sei, du sei(e)st, er/sie/es sei, wir seien, ihr seiet, sie/Sie seien. haben: ich habe, du habest, er/sie/es habe, wir haben, ihr habet, sie/Sie haben.",
        ruleVi: "Hai động từ quan trọng nhất trong Konjunktiv I: sein (thì/là/ở): ich sei, du sei(e)st, er/sie/es sei, wir seien, ihr seiet, sie/Sie seien. haben (có): ich habe, du habest, er/sie/es habe, wir haben, ihr habet, sie/Sie haben. Lưu ý: 'sei' là hình thức được dùng nhiều nhất trong báo chí.",
        examples: [
          { de: "Der Arzt sagt, der Patient sei gesund.", vi: "Bác sĩ nói rằng bệnh nhân khỏe mạnh." },
          { de: "Die Lehrerin berichtet, das Kind habe gute Noten.", vi: "Cô giáo báo cáo rằng đứa trẻ có điểm tốt." },
          { de: "Laut dem Bericht seien die Ergebnisse positiv.", vi: "Theo bài tường thuật, kết quả là tích cực." },
          { de: "Der Sprecher betont, es sei eine wichtige Entscheidung.", vi: "Người phát ngôn nhấn mạnh rằng đó là một quyết định quan trọng." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Was hat der Politiker gesagt?",
        titleVi: "Chính trị gia đã nói gì?",
        lines: [
          { speaker: "Trang", de: "Was hat die Bundeskanzlerin in der Pressekonferenz gesagt?", vi: "Thủ tướng đã nói gì trong buổi họp báo?" },
          { speaker: "Felix", de: "Sie hat gesagt, die wirtschaftliche Lage sei stabil.", vi: "Bà ấy nói rằng tình hình kinh tế ổn định." },
          { speaker: "Trang", de: "Und was hat sie über die Inflation gesagt?", vi: "Và bà ấy nói gì về lạm phát?" },
          { speaker: "Felix", de: "Sie habe betont, dass die Regierung Maßnahmen gegen die hohen Preise plane.", vi: "Bà ấy nhấn mạnh rằng chính phủ lên kế hoạch các biện pháp chống giá cả cao." },
          { speaker: "Trang", de: "Glaubst du, dass die Maßnahmen funktionieren werden?", vi: "Bạn có tin rằng các biện pháp sẽ hiệu quả không?" },
          { speaker: "Felix", de: "Ich bin skeptisch. Aber laut Experten seien die Pläne vielversprechend.", vi: "Tôi hoài nghi. Nhưng theo các chuyên gia, kế hoạch rất triển vọng." }
        ]
      },
      {
        type: "practice",
        titleDe: "Direkte in indirekte Rede umwandeln",
        titleVi: "Chuyển lời nói trực tiếp sang gián tiếp",
        instruction: "Wandle die folgenden Sätze in die indirekte Rede um. Benutze den Konjunktiv I: 1) Der Lehrer sagt: 'Die Prüfung ist am Montag.' 2) Maria sagt: 'Ich habe das Buch gelesen.' 3) Die Polizei berichtet: 'Der Dieb ist geflohen.' 4) Der Chef erklärt: 'Wir stellen neue Mitarbeiter ein.' 5) Die Ärztin sagt: 'Die Patientin braucht mehr Ruhe.'",
        instructionVi: "Chuyển các câu sau sang lời nói gián tiếp, dùng Konjunktiv I: 1) Der Lehrer sagt: 'Die Prüfung ist am Montag.' 2) Maria sagt: 'Ich habe das Buch gelesen.' 3) Die Polizei berichtet: 'Der Dieb ist geflohen.' 4) Der Chef erklärt: 'Wir stellen neue Mitarbeiter ein.' 5) Die Ärztin sagt: 'Die Patientin braucht mehr Ruhe.'"
      }
    ]
  },

  // ============================================================
  // CHAPTER 5: Interkulturelle Erfahrungen
  // ============================================================

  // --- Chapter 5, Lesson 1: Leben als Ausländer in Deutschland ---
  {
    id: "b1-ch5-l1",
    chapterId: 5,
    lessonNumber: 1,
    title: "Leben als Ausländer in Deutschland",
    titleVi: "Cuộc sống người nước ngoài ở Đức",
    type: "Einführung",
    objectives: [
      "Mô tả trải nghiệm sống ở nước ngoài",
      "Nắm từ vựng về cuộc sống thường ngày của người nhập cư",
      "Nói về các thủ tục hành chính quan trọng tại Đức"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Als Ausländer in Deutschland leben",
        titleVi: "Sống ở Đức với tư cách người nước ngoài",
        textDe: "Deutschland ist ein Einwanderungsland. Über 13 Millionen Menschen mit ausländischer Staatsangehörigkeit leben hier. Das Leben als Ausländer bringt viele Herausforderungen mit sich: Man muss die Sprache lernen, sich bei Behörden anmelden, eine Wohnung finden und sich an neue kulturelle Regeln gewöhnen. Gleichzeitig bietet Deutschland viele Möglichkeiten für Bildung, Arbeit und persönliche Entwicklung.",
        textVi: "Đức là một quốc gia nhập cư. Hơn 13 triệu người có quốc tịch nước ngoài sống tại đây. Cuộc sống người nước ngoài mang theo nhiều thách thức: phải học ngôn ngữ, đăng ký tại cơ quan hành chính, tìm nhà ở và thích nghi với các quy tắc văn hóa mới. Đồng thời, Đức mang lại nhiều cơ hội về giáo dục, việc làm và phát triển cá nhân."
      },
      {
        type: "vocabulary",
        titleDe: "Leben im Ausland",
        titleVi: "Cuộc sống ở nước ngoài",
        words: [
          { de: "Aufenthaltserlaubnis", vi: "giấy phép cư trú", article: "die" },
          { de: "Ausländerbehörde", vi: "sở ngoại kiều", article: "die" },
          { de: "Einwanderung", vi: "nhập cư", article: "die" },
          { de: "Anmeldung", vi: "đăng ký (cư trú)", article: "die" },
          { de: "Heimweh", vi: "nỗi nhớ nhà", article: "das" },
          { de: "Eingewöhnung", vi: "sự thích nghi", article: "die" },
          { de: "Bürokratie", vi: "thủ tục hành chính", article: "die" },
          { de: "Staatsbürgerschaft", vi: "quốc tịch", article: "die" },
          { de: "Aufenthaltsgenehmigung", vi: "giấy phép lưu trú", article: "die" },
          { de: "sich einleben", vi: "hòa nhập, ổn định cuộc sống" },
          { de: "sich anpassen", vi: "thích nghi" },
          { de: "vermissen", vi: "nhớ (ai/cái gì)" },
          { de: "zurechtkommen", vi: "xoay xở, đối phó được" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Wie war der Anfang in Deutschland?",
        titleVi: "Thời gian đầu ở Đức thế nào?",
        lines: [
          { speaker: "Duc", de: "Wie lange lebst du schon in Deutschland, Linh?", vi: "Bạn sống ở Đức bao lâu rồi, Linh?" },
          { speaker: "Linh", de: "Seit drei Jahren. Am Anfang war es sehr schwer. Ich konnte kaum Deutsch und habe mich sehr allein gefühlt.", vi: "Ba năm rồi. Ban đầu rất khó khăn. Tôi hầu như không biết tiếng Đức và cảm thấy rất cô đơn." },
          { speaker: "Duc", de: "Das kann ich gut verstehen. Wie hast du dich eingelebt?", vi: "Tôi hiểu. Bạn đã hòa nhập thế nào?" },
          { speaker: "Linh", de: "Ich habe einen Integrationskurs besucht und dort viele nette Leute kennengelernt. Das hat mir sehr geholfen.", vi: "Tôi tham gia khóa học hòa nhập và quen được nhiều người tốt ở đó. Điều đó giúp tôi rất nhiều." },
          { speaker: "Duc", de: "Und die Bürokratie? Ich habe gehört, dass man viel Papierkram erledigen muss.", vi: "Còn thủ tục hành chính? Tôi nghe nói phải làm rất nhiều giấy tờ." },
          { speaker: "Linh", de: "Ja, das stimmt! Bei der Ausländerbehörde muss man lange warten. Aber wenn man alle Dokumente hat, klappt es meistens.", vi: "Đúng vậy! Ở sở ngoại kiều phải chờ rất lâu. Nhưng khi có đủ giấy tờ thì thường suôn sẻ." },
          { speaker: "Duc", de: "Vermisst du Vietnam manchmal?", vi: "Đôi khi bạn nhớ Việt Nam không?" },
          { speaker: "Linh", de: "Natürlich! Besonders das Essen und meine Familie. Aber ich fühle mich hier jetzt zu Hause.", vi: "Tất nhiên! Đặc biệt là đồ ăn và gia đình. Nhưng giờ tôi cảm thấy đây là nhà rồi." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Über Erfahrungen sprechen",
        titleVi: "Nói về trải nghiệm",
        rule: "Redemittel: Am Anfang war es... / Ich habe mich daran gewöhnt, dass... / Es fiel mir schwer, ... zu + Infinitiv / Inzwischen habe ich mich eingelebt. / Was mir am meisten fehlt, ist...",
        ruleVi: "Các mẫu câu nói về trải nghiệm: Am Anfang war es... (Ban đầu...) / Ich habe mich daran gewöhnt, dass... (Tôi đã quen với việc...) / Es fiel mir schwer, ... zu + Infinitiv (Tôi thấy khó... ) / Inzwischen habe ich mich eingelebt. (Giờ tôi đã hòa nhập.) / Was mir am meisten fehlt, ist... (Điều tôi nhớ nhất là...)",
        examples: [
          { de: "Am Anfang war es schwer, neue Freunde zu finden.", vi: "Ban đầu rất khó để tìm bạn mới." },
          { de: "Ich habe mich daran gewöhnt, dass die Geschäfte am Sonntag geschlossen sind.", vi: "Tôi đã quen với việc các cửa hàng đóng cửa ngày Chủ nhật." },
          { de: "Es fiel mir schwer, die deutsche Bürokratie zu verstehen.", vi: "Tôi thấy khó hiểu hệ thống hành chính Đức." },
          { de: "Was mir am meisten fehlt, ist das vietnamesische Essen.", vi: "Điều tôi nhớ nhất là đồ ăn Việt Nam." }
        ]
      },
      {
        type: "practice",
        titleDe: "Meine Erfahrungen erzählen",
        titleVi: "Kể về trải nghiệm của tôi",
        instruction: "Erzähle über deine Erfahrungen im Ausland oder stelle dir vor, du lebst in Deutschland. Beantworte: 1) Seit wann lebst du hier? 2) Was war am Anfang schwierig? 3) Was hat dir geholfen? 4) Was vermisst du? 5) Wie fühlst du dich jetzt? Benutze: Am Anfang... / Es fiel mir schwer... / Inzwischen...",
        instructionVi: "Kể về trải nghiệm sống ở nước ngoài hoặc tưởng tượng bạn sống ở Đức. Trả lời: 1) Bạn sống ở đây từ khi nào? 2) Ban đầu điều gì khó khăn? 3) Điều gì đã giúp bạn? 4) Bạn nhớ gì? 5) Bạn cảm thấy thế nào bây giờ? Dùng: Am Anfang... / Es fiel mir schwer... / Inzwischen..."
      }
    ]
  },

  // --- Chapter 5, Lesson 2: Kulturschock & Integration ---
  {
    id: "b1-ch5-l2",
    chapterId: 5,
    lessonNumber: 2,
    title: "Kulturschock & Integration",
    titleVi: "Sốc văn hóa & Hòa nhập",
    type: "Fertigkeit",
    objectives: [
      "Hiểu các giai đoạn của sốc văn hóa",
      "Nói về sự khác biệt văn hóa giữa Việt Nam và Đức",
      "Thảo luận về chủ đề hòa nhập và đa văn hóa"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Was ist ein Kulturschock?",
        titleVi: "Sốc văn hóa là gì?",
        textDe: "Ein Kulturschock ist das Gefühl von Verwirrung und Unsicherheit, das man erlebt, wenn man in einer fremden Kultur lebt. Der Kulturschock verläuft typischerweise in vier Phasen: 1) Die Honeymoon-Phase (Begeisterung), 2) Die Krisenphase (Frustration und Heimweh), 3) Die Erholungsphase (langsame Anpassung), 4) Die Anpassungsphase (sich zu Hause fühlen). Integration bedeutet, aktiv am gesellschaftlichen Leben teilzunehmen, ohne die eigene Kultur vollständig aufzugeben.",
        textVi: "Sốc văn hóa (Kulturschock) là cảm giác bối rối và bất an khi sống trong một nền văn hóa xa lạ. Sốc văn hóa thường trải qua 4 giai đoạn: 1) Giai đoạn trăng mật (hào hứng), 2) Giai đoạn khủng hoảng (thất vọng và nhớ nhà), 3) Giai đoạn hồi phục (thích nghi dần), 4) Giai đoạn thích nghi (cảm thấy như ở nhà). Hòa nhập (Integration) nghĩa là tham gia tích cực vào đời sống xã hội mà không từ bỏ hoàn toàn văn hóa gốc."
      },
      {
        type: "vocabulary",
        titleDe: "Kultur & Integration",
        titleVi: "Văn hóa & Hòa nhập",
        words: [
          { de: "Kulturschock", vi: "sốc văn hóa", article: "der" },
          { de: "Integration", vi: "hòa nhập", article: "die" },
          { de: "Anpassung", vi: "sự thích nghi", article: "die" },
          { de: "Missverständnis", vi: "sự hiểu lầm", article: "das" },
          { de: "Gewohnheit", vi: "thói quen", article: "die" },
          { de: "Wertvorstellung", vi: "hệ giá trị", article: "die" },
          { de: "Toleranz", vi: "sự khoan dung", article: "die" },
          { de: "Vielfalt", vi: "sự đa dạng", article: "die" },
          { de: "Zusammenleben", vi: "sự chung sống", article: "das" },
          { de: "sich anpassen", vi: "thích nghi" },
          { de: "sich integrieren", vi: "hòa nhập" },
          { de: "respektieren", vi: "tôn trọng" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Kulturelle Unterschiede",
        titleVi: "Sự khác biệt văn hóa",
        lines: [
          { speaker: "Tuan", de: "Weißt du, was mich am Anfang in Deutschland am meisten überrascht hat?", vi: "Bạn biết ban đầu ở Đức điều gì khiến tôi ngạc nhiên nhất không?" },
          { speaker: "Sabine", de: "Nein, erzähl mal!", vi: "Không, kể đi!" },
          { speaker: "Tuan", de: "Dass die Deutschen so direkt sind! In Vietnam sagt man nicht einfach 'Nein', sondern drückt es höflicher aus.", vi: "Người Đức thẳng thắn quá! Ở Việt Nam người ta không nói thẳng 'Không' mà diễn đạt lịch sự hơn." },
          { speaker: "Sabine", de: "Interessant! Und was hat dich noch überrascht?", vi: "Thú vị! Còn điều gì khiến bạn ngạc nhiên nữa?" },
          { speaker: "Tuan", de: "Die Pünktlichkeit! Wenn man um 14 Uhr verabredet ist, meint man wirklich 14 Uhr. In Vietnam ist man da flexibler.", vi: "Sự đúng giờ! Khi hẹn 2 giờ, nghĩa là thật sự 2 giờ. Ở Việt Nam linh hoạt hơn." },
          { speaker: "Sabine", de: "Ja, Pünktlichkeit ist uns sehr wichtig. Aber ich finde, wir können auch von anderen Kulturen lernen, zum Beispiel Gastfreundschaft.", vi: "Đúng, đúng giờ rất quan trọng với chúng tôi. Nhưng tôi thấy chúng tôi cũng có thể học từ các nền văn hóa khác, ví dụ lòng hiếu khách." },
          { speaker: "Tuan", de: "Das stimmt! Integration heißt ja nicht, dass man seine eigene Kultur vergisst.", vi: "Đúng vậy! Hòa nhập không có nghĩa là quên văn hóa của mình." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Vergleiche zwischen Kulturen",
        titleVi: "So sánh giữa các nền văn hóa",
        rule: "Vergleiche: In Deutschland ist es üblich, dass... / Im Vergleich zu Vietnam... / Während man in Vietnam..., ... man in Deutschland... / Anders als in Vietnam... / Im Gegensatz zu...",
        ruleVi: "Các cấu trúc so sánh: In Deutschland ist es üblich, dass... (Ở Đức thường...) / Im Vergleich zu Vietnam... (So với Việt Nam...) / Während man in Vietnam..., ... man in Deutschland... (Trong khi ở VN..., ở Đức...) / Anders als in Vietnam... (Khác với ở Việt Nam...) / Im Gegensatz zu... (Ngược lại với...)",
        examples: [
          { de: "In Deutschland ist es üblich, dass man die Schuhe in der Wohnung anbehält.", vi: "Ở Đức thường người ta đi giày trong nhà." },
          { de: "Im Vergleich zu Vietnam essen die Deutschen mehr Brot als Reis.", vi: "So với Việt Nam, người Đức ăn nhiều bánh mì hơn cơm." },
          { de: "Während man in Vietnam oft in großen Familien lebt, wohnen junge Deutsche meist allein.", vi: "Trong khi ở Việt Nam thường sống trong gia đình lớn, người Đức trẻ thường sống một mình." },
          { de: "Anders als in Vietnam begrüßt man sich in Deutschland oft mit einem Händedruck.", vi: "Khác với ở Việt Nam, ở Đức người ta thường chào nhau bằng cái bắt tay." }
        ]
      },
      {
        type: "practice",
        titleDe: "Kulturelle Unterschiede beschreiben",
        titleVi: "Mô tả sự khác biệt văn hóa",
        instruction: "Beschreibe mindestens 4 kulturelle Unterschiede zwischen Vietnam und Deutschland. Themen: Essen, Familie, Höflichkeit, Freizeit, Arbeit, Feste. Benutze Vergleichsstrukturen: In Deutschland... während in Vietnam... / Im Vergleich zu... / Anders als...",
        instructionVi: "Mô tả ít nhất 4 sự khác biệt văn hóa giữa Việt Nam và Đức. Chủ đề: ăn uống, gia đình, lịch sự, giải trí, công việc, lễ hội. Dùng cấu trúc so sánh: In Deutschland... während in Vietnam... / Im Vergleich zu... / Anders als..."
      }
    ]
  },

  // --- Chapter 5, Lesson 3: Vorurteile & Stereotypen ---
  {
    id: "b1-ch5-l3",
    chapterId: 5,
    lessonNumber: 3,
    title: "Vorurteile & Stereotypen",
    titleVi: "Định kiến & Khuôn mẫu",
    type: "Fertigkeit",
    objectives: [
      "Phân biệt giữa Vorurteile và Stereotypen",
      "Nói về phân biệt đối xử và cách đối phó",
      "Lập luận chống lại định kiến một cách lịch sự nhưng rõ ràng"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Vorurteile und Stereotypen",
        titleVi: "Định kiến và khuôn mẫu",
        textDe: "Stereotypen sind vereinfachte Vorstellungen über eine Gruppe von Menschen (z.B. 'Deutsche sind pünktlich'). Vorurteile gehen weiter: Sie sind negative Meinungen, die man hat, ohne die Person wirklich zu kennen. Diskriminierung entsteht, wenn Vorurteile zu ungerechtem Handeln führen. In Deutschland gibt es das Allgemeine Gleichbehandlungsgesetz (AGG), das Menschen vor Diskriminierung schützt.",
        textVi: "Khuôn mẫu (Stereotypen) là những hình dung đơn giản hóa về một nhóm người (ví dụ: 'Người Đức đúng giờ'). Định kiến (Vorurteile) đi xa hơn: là những ý kiến tiêu cực mà ta có mà không thực sự biết người đó. Phân biệt đối xử (Diskriminierung) xảy ra khi định kiến dẫn đến hành vi bất công. Ở Đức có Luật Bình đẳng Đối xử Chung (AGG) bảo vệ mọi người khỏi phân biệt đối xử."
      },
      {
        type: "vocabulary",
        titleDe: "Vorurteile & Gleichbehandlung",
        titleVi: "Định kiến & Bình đẳng đối xử",
        words: [
          { de: "Vorurteil", vi: "định kiến", article: "das" },
          { de: "Stereotyp", vi: "khuôn mẫu", article: "das" },
          { de: "Diskriminierung", vi: "phân biệt đối xử", article: "die" },
          { de: "Rassismus", vi: "phân biệt chủng tộc", article: "der" },
          { de: "Gleichberechtigung", vi: "bình đẳng", article: "die" },
          { de: "Benachteiligung", vi: "sự thiệt thòi", article: "die" },
          { de: "Verallgemeinerung", vi: "sự khái quát hóa", article: "die" },
          { de: "Klischee", vi: "sáo rỗng, khuôn sáo", article: "das" },
          { de: "beurteilen", vi: "đánh giá, phán xét" },
          { de: "verurteilen", vi: "lên án, kết tội" },
          { de: "ausgrenzen", vi: "loại trừ, tẩy chay" },
          { de: "akzeptieren", vi: "chấp nhận" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Gegen Vorurteile argumentieren",
        titleVi: "Lập luận chống định kiến",
        lines: [
          { speaker: "Hang", de: "Mir hat letztens jemand gesagt, dass alle Vietnamesen nur in Nagelstudios arbeiten. Das hat mich wirklich geärgert.", vi: "Gần đây ai đó nói với tôi rằng tất cả người Việt chỉ làm ở tiệm nail. Điều đó thực sự khiến tôi tức giận." },
          { speaker: "Stefan", de: "Das ist ein typisches Vorurteil. Es stimmt einfach nicht.", vi: "Đó là một định kiến điển hình. Đơn giản là không đúng." },
          { speaker: "Hang", de: "Genau! Ich studiere Informatik und kenne viele Vietnamesen, die Ärzte, Ingenieure oder Lehrer sind.", vi: "Đúng vậy! Tôi học ngành Tin học và biết nhiều người Việt là bác sĩ, kỹ sư hoặc giáo viên." },
          { speaker: "Stefan", de: "Man sollte Menschen nicht nach ihrer Herkunft beurteilen. Jeder Mensch ist anders.", vi: "Không nên đánh giá người ta theo nguồn gốc. Mỗi người đều khác nhau." },
          { speaker: "Hang", de: "Ich versuche, ruhig zu bleiben und die Leute aufzuklären. Manchmal wissen sie es einfach nicht besser.", vi: "Tôi cố giữ bình tĩnh và giải thích cho mọi người. Đôi khi họ đơn giản không biết hơn." },
          { speaker: "Stefan", de: "Das finde ich sehr reif. Es ist wichtig, im Gespräch zu bleiben, auch wenn es schwer ist.", vi: "Tôi thấy điều đó rất trưởng thành. Quan trọng là tiếp tục đối thoại, dù khó khăn." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Gegen Vorurteile argumentieren",
        titleVi: "Lập luận chống định kiến",
        rule: "Redemittel: Das ist ein Vorurteil / Klischee. / Man kann nicht verallgemeinern, dass... / Es stimmt nicht, dass alle... / Man sollte Menschen nicht nach... beurteilen. / Ich kenne viele Beispiele dafür, dass... / Das trifft nicht auf alle zu.",
        ruleVi: "Các mẫu câu phản bác định kiến: Das ist ein Vorurteil. (Đó là định kiến.) / Man kann nicht verallgemeinern, dass... (Không thể khái quát hóa rằng...) / Es stimmt nicht, dass alle... (Không đúng khi nói tất cả...) / Man sollte Menschen nicht nach... beurteilen. (Không nên đánh giá người ta theo...) / Ich kenne viele Beispiele dafür, dass... (Tôi biết nhiều ví dụ cho thấy...) / Das trifft nicht auf alle zu. (Điều đó không đúng với tất cả mọi người.)",
        examples: [
          { de: "Man kann nicht verallgemeinern, dass alle Deutschen kalt und unfreundlich sind.", vi: "Không thể khái quát hóa rằng tất cả người Đức đều lạnh lùng và không thân thiện." },
          { de: "Es stimmt nicht, dass alle Ausländer schlecht Deutsch sprechen.", vi: "Không đúng khi nói tất cả người nước ngoài đều nói tiếng Đức kém." },
          { de: "Man sollte Menschen nicht nach ihrem Aussehen beurteilen.", vi: "Không nên đánh giá người ta theo ngoại hình." },
          { de: "Ich kenne viele Beispiele dafür, dass Vielfalt eine Bereicherung ist.", vi: "Tôi biết nhiều ví dụ cho thấy sự đa dạng là một sự làm giàu." }
        ]
      },
      {
        type: "practice",
        titleDe: "Über Vorurteile diskutieren",
        titleVi: "Thảo luận về định kiến",
        instruction: "Diskutiere die folgenden Fragen: 1) Welche Stereotypen über Vietnamesen/Deutsche kennst du? Stimmen sie? 2) Hast du schon einmal Diskriminierung erlebt? Was ist passiert? 3) Was kann man gegen Vorurteile tun? Schreibe einen kurzen Text (100-120 Wörter). Benutze: Meiner Erfahrung nach... / Man kann nicht verallgemeinern... / Es ist wichtig, dass...",
        instructionVi: "Thảo luận các câu hỏi: 1) Bạn biết những khuôn mẫu nào về người Việt/người Đức? Chúng đúng không? 2) Bạn đã từng bị phân biệt đối xử chưa? Chuyện gì xảy ra? 3) Có thể làm gì để chống định kiến? Viết một đoạn văn ngắn (100-120 từ). Dùng: Meiner Erfahrung nach... / Man kann nicht verallgemeinern... / Es ist wichtig, dass..."
      }
    ]
  },

  // --- Chapter 5, Lesson 4: Konnektoren (obwohl, trotzdem, deshalb) ---
  {
    id: "b1-ch5-l4",
    chapterId: 5,
    lessonNumber: 4,
    title: "Konnektoren: obwohl, trotzdem, deshalb",
    titleVi: "Liên từ: obwohl, trotzdem, deshalb",
    type: "Grammatik",
    objectives: [
      "Phân biệt và sử dụng đúng obwohl, trotzdem, deshalb",
      "Hiểu sự khác nhau giữa Nebensatz và Hauptsatz với các liên từ này",
      "Viết câu phức hợp diễn đạt nguyên nhân và nhượng bộ"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Konnektoren: Grund und Gegengrund",
        titleVi: "Liên từ: Lý do và Nhượng bộ",
        textDe: "Im Deutschen gibt es verschiedene Konnektoren, um Gründe und Gegengründe auszudrücken. 'Deshalb' und 'deswegen' drücken eine Folge aus (Grund → Konsequenz). 'Obwohl' leitet einen Nebensatz ein, der einen Gegengrund nennt. 'Trotzdem' steht im Hauptsatz und drückt aus, dass etwas trotz eines Grundes passiert.",
        textVi: "Trong tiếng Đức có các liên từ khác nhau để diễn đạt lý do và nhượng bộ. 'Deshalb' và 'deswegen' diễn đạt hệ quả (lý do → kết quả). 'Obwohl' mở đầu mệnh đề phụ nêu lý do ngược lại. 'Trotzdem' đứng trong mệnh đề chính và diễn đạt rằng điều gì đó xảy ra bất chấp một lý do. Quan trọng: obwohl → động từ ở cuối câu (mệnh đề phụ); trotzdem/deshalb → động từ ở vị trí 2 (mệnh đề chính)."
      },
      {
        type: "grammar",
        titleDe: "deshalb / deswegen (Folge)",
        titleVi: "deshalb / deswegen (Hệ quả)",
        rule: "deshalb/deswegen = vì vậy, do đó. Steht im Hauptsatz, Verb auf Position 2. Satzstellung: Hauptsatz + deshalb + Verb + Rest. ODER: deshalb + Verb + Subjekt + Rest.",
        ruleVi: "deshalb/deswegen = vì vậy, do đó. Đứng trong mệnh đề chính, động từ ở vị trí 2. Cấu trúc: Mệnh đề chính + deshalb + động từ + phần còn lại. HOẶC: deshalb + động từ + chủ ngữ + phần còn lại. Lưu ý: deshalb nối hai mệnh đề chính, vì vậy động từ đứng ở vị trí thứ 2 ngay sau deshalb.",
        examples: [
          { de: "Es regnet. Deshalb bleibe ich zu Hause.", vi: "Trời mưa. Vì vậy tôi ở nhà." },
          { de: "Sie hat Kopfschmerzen, deshalb geht sie zum Arzt.", vi: "Cô ấy bị đau đầu, vì vậy cô ấy đi khám bác sĩ." },
          { de: "Er lernt viel. Deswegen besteht er die Prüfung.", vi: "Anh ấy học nhiều. Vì vậy anh ấy đỗ kỳ thi." },
          { de: "Ich vermisse meine Familie, deshalb telefoniere ich jeden Tag mit ihnen.", vi: "Tôi nhớ gia đình, vì vậy tôi gọi điện cho họ mỗi ngày." }
        ]
      },
      {
        type: "grammar",
        titleDe: "obwohl (Gegengrund — Nebensatz)",
        titleVi: "obwohl (Nhượng bộ — Mệnh đề phụ)",
        rule: "obwohl = mặc dù. Leitet einen Nebensatz ein → Verb am Ende! Satzstellung: Obwohl + Subjekt + ... + Verb(Ende), Hauptsatz. ODER: Hauptsatz, obwohl + Subjekt + ... + Verb(Ende).",
        ruleVi: "obwohl = mặc dù. Mở đầu mệnh đề phụ → động từ ở cuối câu! Cấu trúc: Obwohl + chủ ngữ + ... + động từ (cuối), mệnh đề chính. HOẶC: Mệnh đề chính, obwohl + chủ ngữ + ... + động từ (cuối). Đây là liên từ phụ thuộc (Subjunktion), giống wie weil, dass, wenn.",
        examples: [
          { de: "Obwohl es regnet, gehe ich spazieren.", vi: "Mặc dù trời mưa, tôi vẫn đi dạo." },
          { de: "Er geht zur Arbeit, obwohl er krank ist.", vi: "Anh ấy đi làm, mặc dù bị ốm." },
          { de: "Obwohl sie wenig Zeit hat, hilft sie immer ihren Freunden.", vi: "Mặc dù có ít thời gian, cô ấy luôn giúp bạn bè." },
          { de: "Ich lerne Deutsch, obwohl es manchmal schwer ist.", vi: "Tôi học tiếng Đức, mặc dù đôi khi khó." }
        ]
      },
      {
        type: "grammar",
        titleDe: "trotzdem (Gegengrund — Hauptsatz)",
        titleVi: "trotzdem (Nhượng bộ — Mệnh đề chính)",
        rule: "trotzdem = tuy vậy, bất chấp vậy. Steht im Hauptsatz, Verb auf Position 2. Bedeutung wie 'obwohl', aber andere Satzstruktur! Vergleich: Obwohl es regnet, gehe ich raus. = Es regnet. Trotzdem gehe ich raus.",
        ruleVi: "trotzdem = tuy vậy, bất chấp vậy. Đứng trong mệnh đề chính, động từ ở vị trí 2. Nghĩa giống 'obwohl', nhưng cấu trúc câu khác! So sánh: Obwohl es regnet, gehe ich raus. (mệnh đề phụ) = Es regnet. Trotzdem gehe ich raus. (mệnh đề chính). Lỗi thường gặp: KHÔNG viết 'trotzdem + Subjekt + ... + Verb(Ende)'! trotzdem KHÔNG phải liên từ phụ thuộc!",
        examples: [
          { de: "Es ist kalt. Trotzdem geht er ohne Jacke raus.", vi: "Trời lạnh. Tuy vậy anh ấy ra ngoài không mặc áo khoác." },
          { de: "Sie hat wenig Geld. Trotzdem reist sie gern.", vi: "Cô ấy có ít tiền. Tuy vậy cô ấy thích đi du lịch." },
          { de: "Die Prüfung war schwer, trotzdem habe ich bestanden.", vi: "Kỳ thi khó, tuy vậy tôi đã đỗ." },
          { de: "Er ist müde, trotzdem lernt er bis Mitternacht.", vi: "Anh ấy mệt, tuy vậy anh ấy học đến nửa đêm." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Konnektoren im Gespräch",
        titleVi: "Liên từ trong hội thoại",
        lines: [
          { speaker: "Phuong", de: "Warum lernst du Vietnamesisch? Das ist doch so schwer!", vi: "Sao bạn học tiếng Việt? Khó lắm mà!" },
          { speaker: "Anna", de: "Obwohl es schwer ist, macht es mir Spaß. Ich liebe die Kultur.", vi: "Mặc dù khó, tôi thấy vui. Tôi yêu văn hóa Việt Nam." },
          { speaker: "Phuong", de: "Und die Töne? Viele Ausländer haben Probleme damit.", vi: "Còn thanh điệu? Nhiều người nước ngoài gặp khó khăn với nó." },
          { speaker: "Anna", de: "Ja, die Töne sind sehr schwierig. Trotzdem gebe ich nicht auf!", vi: "Đúng, thanh điệu rất khó. Tuy vậy tôi không bỏ cuộc!" },
          { speaker: "Phuong", de: "Das finde ich toll! Ich habe auch am Anfang viele Fehler auf Deutsch gemacht.", vi: "Tôi thấy tuyệt! Tôi cũng mắc nhiều lỗi tiếng Đức ban đầu." },
          { speaker: "Anna", de: "Sprachen lernen braucht Zeit. Deshalb übe ich jeden Tag mindestens 30 Minuten.", vi: "Học ngôn ngữ cần thời gian. Vì vậy tôi luyện tập mỗi ngày ít nhất 30 phút." }
        ]
      },
      {
        type: "practice",
        titleDe: "obwohl, trotzdem oder deshalb?",
        titleVi: "obwohl, trotzdem hay deshalb?",
        instruction: "Ergänze die Sätze mit obwohl, trotzdem oder deshalb. Achte auf die Satzstellung! 1) ___ er krank ist, geht er zur Arbeit. 2) Es schneit. ___ ziehe ich warme Kleidung an. 3) Sie mag Schokolade. ___ isst sie sie nicht, weil sie eine Diät macht. 4) ___ die Mieten teuer sind, wohnen viele Studenten in München. 5) Das Wetter war schlecht, ___ sind wir zu Hause geblieben. Schreibe dann 3 eigene Sätze mit jedem Konnektor.",
        instructionVi: "Điền obwohl, trotzdem hoặc deshalb vào chỗ trống. Chú ý vị trí động từ! 1) ___ er krank ist, geht er zur Arbeit. 2) Es schneit. ___ ziehe ich warme Kleidung an. 3) Sie mag Schokolade. ___ isst sie sie nicht, weil sie eine Diät macht. 4) ___ die Mieten teuer sind, wohnen viele Studenten in München. 5) Das Wetter war schlecht, ___ sind wir zu Hause geblieben. Sau đó viết 3 câu riêng với mỗi liên từ."
      }
    ]
  },

  // ============================================================
  // CHAPTER 6: Umwelt & Nachhaltigkeit
  // ============================================================

  // --- Chapter 6, Lesson 1: Klimawandel & Umweltprobleme ---
  {
    id: "b1-ch6-l1",
    chapterId: 6,
    lessonNumber: 1,
    title: "Klimawandel & Umweltprobleme",
    titleVi: "Biến đổi khí hậu & Vấn đề môi trường",
    type: "Einführung",
    objectives: [
      "Nắm từ vựng về biến đổi khí hậu và môi trường",
      "Mô tả các vấn đề môi trường hiện tại",
      "Thảo luận về nguyên nhân và hậu quả của biến đổi khí hậu"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Der Klimawandel",
        titleVi: "Biến đổi khí hậu",
        textDe: "Der Klimawandel ist eine der größten Herausforderungen unserer Zeit. Durch den Ausstoß von Treibhausgasen wie CO₂ steigt die globale Durchschnittstemperatur. Die Folgen sind vielfältig: häufigere Extremwetterereignisse, steigende Meeresspiegel, Dürren und Überschwemmungen. Deutschland hat sich das Ziel gesetzt, bis 2045 klimaneutral zu werden. Die Energiewende — der Übergang von fossilen zu erneuerbaren Energien — ist ein wichtiger Teil dieser Strategie.",
        textVi: "Biến đổi khí hậu là một trong những thách thức lớn nhất của thời đại chúng ta. Do khí thải nhà kính như CO₂, nhiệt độ trung bình toàn cầu tăng lên. Hậu quả rất đa dạng: các hiện tượng thời tiết cực đoan thường xuyên hơn, mực nước biển dâng, hạn hán và lũ lụt. Đức đặt mục tiêu trung hòa khí hậu vào năm 2045. Chuyển đổi năng lượng (Energiewende) — chuyển từ năng lượng hóa thạch sang năng lượng tái tạo — là phần quan trọng của chiến lược này."
      },
      {
        type: "vocabulary",
        titleDe: "Klima & Umwelt",
        titleVi: "Khí hậu & Môi trường",
        words: [
          { de: "Klimawandel", vi: "biến đổi khí hậu", article: "der" },
          { de: "Treibhausgas", vi: "khí nhà kính", article: "das" },
          { de: "Erderwärmung", vi: "sự nóng lên toàn cầu", article: "die" },
          { de: "Überschwemmung", vi: "lũ lụt", article: "die" },
          { de: "Dürre", vi: "hạn hán", article: "die" },
          { de: "Meeresspiegel", vi: "mực nước biển", article: "der" },
          { de: "Ausstoß", vi: "sự phát thải", article: "der" },
          { de: "Umweltverschmutzung", vi: "ô nhiễm môi trường", article: "die" },
          { de: "Artensterben", vi: "sự tuyệt chủng các loài", article: "das" },
          { de: "Abholzung", vi: "phá rừng", article: "die" },
          { de: "Naturkatastrophe", vi: "thiên tai", article: "die" },
          { de: "CO₂-Fußabdruck", vi: "dấu chân carbon", article: "der" },
          { de: "klimaneutral", vi: "trung hòa khí hậu" },
          { de: "nachhaltig", vi: "bền vững" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Über den Klimawandel sprechen",
        titleVi: "Nói về biến đổi khí hậu",
        lines: [
          { speaker: "Nam", de: "Hast du von den Überschwemmungen in Süddeutschland gehört?", vi: "Bạn có nghe về lũ lụt ở miền Nam nước Đức không?" },
          { speaker: "Julia", de: "Ja, schrecklich! Die Experten sagen, dass solche Extremwetterereignisse durch den Klimawandel häufiger werden.", vi: "Có, kinh khủng! Các chuyên gia nói rằng các hiện tượng thời tiết cực đoan như vậy sẽ thường xuyên hơn do biến đổi khí hậu." },
          { speaker: "Nam", de: "In Vietnam haben wir auch immer stärkere Taifune. Der Klimawandel betrifft die ganze Welt.", vi: "Ở Việt Nam chúng tôi cũng có bão ngày càng mạnh hơn. Biến đổi khí hậu ảnh hưởng toàn thế giới." },
          { speaker: "Julia", de: "Was meinst du, was können wir dagegen tun?", vi: "Bạn nghĩ chúng ta có thể làm gì?" },
          { speaker: "Nam", de: "Ich glaube, jeder kann einen Beitrag leisten. Zum Beispiel weniger fliegen und mehr öffentliche Verkehrsmittel benutzen.", vi: "Tôi nghĩ mỗi người có thể đóng góp. Ví dụ bay ít hơn và sử dụng phương tiện công cộng nhiều hơn." },
          { speaker: "Julia", de: "Stimmt. Aber die Politik muss auch handeln. Ohne strengere Gesetze wird es nicht reichen.", vi: "Đúng. Nhưng chính trị cũng phải hành động. Không có luật nghiêm ngặt hơn sẽ không đủ." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Ursachen und Folgen beschreiben",
        titleVi: "Mô tả nguyên nhân và hậu quả",
        rule: "Ursache: Der Grund dafür ist... / Das liegt daran, dass... / ... ist auf ... zurückzuführen. Folge: Das führt dazu, dass... / Die Folge/Konsequenz davon ist... / Deshalb/Daher/Deswegen...",
        ruleVi: "Nguyên nhân: Der Grund dafür ist... (Lý do cho điều đó là...) / Das liegt daran, dass... (Đó là vì...) / ... ist auf ... zurückzuführen (... do... gây ra). Hậu quả: Das führt dazu, dass... (Điều đó dẫn đến việc...) / Die Folge davon ist... (Hậu quả là...) / Deshalb/Daher/Deswegen... (Vì vậy/Do đó...)",
        examples: [
          { de: "Der Grund für die Erderwärmung ist der hohe CO₂-Ausstoß.", vi: "Lý do cho sự nóng lên toàn cầu là lượng khí thải CO₂ cao." },
          { de: "Das liegt daran, dass wir zu viel fossile Brennstoffe verbrennen.", vi: "Đó là vì chúng ta đốt quá nhiều nhiên liệu hóa thạch." },
          { de: "Das führt dazu, dass der Meeresspiegel steigt.", vi: "Điều đó dẫn đến mực nước biển dâng." },
          { de: "Die Wälder werden abgeholzt. Die Folge davon ist das Artensterben.", vi: "Rừng bị phá. Hậu quả là sự tuyệt chủng các loài." }
        ]
      },
      {
        type: "practice",
        titleDe: "Umweltprobleme diskutieren",
        titleVi: "Thảo luận vấn đề môi trường",
        instruction: "Wähle ein Umweltproblem (z.B. Plastikmüll, Luftverschmutzung, Abholzung) und schreibe einen kurzen Text (100-130 Wörter): 1) Beschreibe das Problem. 2) Nenne die Ursachen. 3) Beschreibe die Folgen. 4) Schlage Lösungen vor. Benutze: Der Grund dafür ist... / Das führt dazu, dass... / Man könnte...",
        instructionVi: "Chọn một vấn đề môi trường (ví dụ: rác nhựa, ô nhiễm không khí, phá rừng) và viết đoạn văn ngắn (100-130 từ): 1) Mô tả vấn đề. 2) Nêu nguyên nhân. 3) Mô tả hậu quả. 4) Đề xuất giải pháp. Dùng: Der Grund dafür ist... / Das führt dazu, dass... / Man könnte..."
      }
    ]
  },

  // --- Chapter 6, Lesson 2: Nachhaltiger Lebensstil ---
  {
    id: "b1-ch6-l2",
    chapterId: 6,
    lessonNumber: 2,
    title: "Nachhaltiger Lebensstil",
    titleVi: "Lối sống bền vững",
    type: "Fertigkeit",
    objectives: [
      "Nói về lối sống bền vững và thân thiện với môi trường",
      "So sánh thói quen tiêu dùng ở Đức và Việt Nam",
      "Đưa ra lời khuyên về bảo vệ môi trường"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Nachhaltigkeit im Alltag",
        titleVi: "Bền vững trong đời sống hàng ngày",
        textDe: "Nachhaltigkeit bedeutet, so zu leben, dass auch zukünftige Generationen gute Lebensbedingungen haben. Im Alltag kann man vieles tun: Müll trennen, weniger Plastik verwenden, regional und saisonal einkaufen, Energie sparen und öfter das Fahrrad nehmen. In Deutschland ist Mülltrennung besonders wichtig — es gibt verschiedene Tonnen für Papier, Plastik, Biomüll, Restmüll und Glas. Das Pfandsystem für Flaschen und Dosen ist ein weiteres Beispiel für nachhaltiges Handeln.",
        textVi: "Bền vững nghĩa là sống sao cho các thế hệ tương lai cũng có điều kiện sống tốt. Trong đời thường có thể làm nhiều việc: phân loại rác, dùng ít nhựa hơn, mua hàng địa phương và theo mùa, tiết kiệm năng lượng và đi xe đạp nhiều hơn. Ở Đức, phân loại rác đặc biệt quan trọng — có các thùng khác nhau cho giấy, nhựa, rác hữu cơ, rác còn lại và thủy tinh. Hệ thống đặt cọc chai (Pfandsystem) cho chai và lon là một ví dụ khác về hành động bền vững."
      },
      {
        type: "vocabulary",
        titleDe: "Nachhaltigkeit & Umweltschutz",
        titleVi: "Bền vững & Bảo vệ môi trường",
        words: [
          { de: "Nachhaltigkeit", vi: "sự bền vững", article: "die" },
          { de: "Mülltrennung", vi: "phân loại rác", article: "die" },
          { de: "Recycling", vi: "tái chế", article: "das" },
          { de: "Pfandsystem", vi: "hệ thống đặt cọc chai", article: "das" },
          { de: "Einwegplastik", vi: "nhựa dùng một lần", article: "das" },
          { de: "Mehrwegtasche", vi: "túi dùng nhiều lần", article: "die" },
          { de: "Bioprodukt", vi: "sản phẩm hữu cơ", article: "das" },
          { de: "Energiesparen", vi: "tiết kiệm năng lượng", article: "das" },
          { de: "Stromverbrauch", vi: "mức tiêu thụ điện", article: "der" },
          { de: "Wasserverschwendung", vi: "lãng phí nước", article: "die" },
          { de: "CO₂-neutral", vi: "trung hòa CO₂" },
          { de: "umweltfreundlich", vi: "thân thiện với môi trường" },
          { de: "vermeiden", vi: "tránh, phòng ngừa" },
          { de: "wiederverwenden", vi: "tái sử dụng" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Im Unverpackt-Laden",
        titleVi: "Trong cửa hàng không bao bì",
        lines: [
          { speaker: "Lan", de: "Was ist das für ein Laden? Hier gibt es keine Verpackungen!", vi: "Đây là cửa hàng gì? Ở đây không có bao bì!" },
          { speaker: "Katrin", de: "Das ist ein Unverpackt-Laden. Man bringt seine eigenen Behälter mit und füllt alles selbst ab.", vi: "Đây là cửa hàng không bao bì. Mình mang theo hộp riêng và tự đổ đầy." },
          { speaker: "Lan", de: "Toll! So spart man viel Plastikmüll. Gibt es sowas auch in Vietnam?", vi: "Tuyệt! Vậy tiết kiệm được nhiều rác nhựa. Ở Việt Nam có loại này không?" },
          { speaker: "Katrin", de: "Das weiß ich nicht. Aber hier in Deutschland werden sie immer beliebter.", vi: "Tôi không biết. Nhưng ở Đức ngày càng nhiều người thích." },
          { speaker: "Lan", de: "In Vietnam kaufen viele Leute auf dem Markt ein. Das ist auch nachhaltiger als im Supermarkt.", vi: "Ở Việt Nam nhiều người mua ở chợ. Điều đó cũng bền vững hơn siêu thị." },
          { speaker: "Katrin", de: "Stimmt! Frische, regionale Produkte sind besser für die Umwelt. Jede Kultur hat ihre eigenen nachhaltigen Traditionen.", vi: "Đúng! Sản phẩm tươi, địa phương tốt hơn cho môi trường. Mỗi nền văn hóa có truyền thống bền vững riêng." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Ratschläge und Vorschläge geben",
        titleVi: "Đưa ra lời khuyên và đề xuất",
        rule: "Ratschläge: Man sollte... / Es wäre besser, wenn... / Ich würde empfehlen, ... zu + Infinitiv. / Statt ... zu + Infinitiv, könnte man... / Anstatt dass..., ... Vorschläge: Wie wäre es, wenn...? / Man könnte...",
        ruleVi: "Lời khuyên: Man sollte... (Nên...) / Es wäre besser, wenn... (Sẽ tốt hơn nếu...) / Ich würde empfehlen, ... zu + Infinitiv (Tôi khuyên nên...) / Statt ... zu + Infinitiv, könnte man... (Thay vì... có thể...) Đề xuất: Wie wäre es, wenn...? (Sao nếu...?) / Man könnte... (Có thể...)",
        examples: [
          { de: "Man sollte weniger Fleisch essen, um die Umwelt zu schützen.", vi: "Nên ăn ít thịt hơn để bảo vệ môi trường." },
          { de: "Statt mit dem Auto zu fahren, könnte man das Fahrrad nehmen.", vi: "Thay vì đi ô tô, có thể đi xe đạp." },
          { de: "Es wäre besser, wenn wir alle Mehrwegtaschen benutzen würden.", vi: "Sẽ tốt hơn nếu tất cả chúng ta dùng túi tái sử dụng." },
          { de: "Ich würde empfehlen, regionale Produkte zu kaufen.", vi: "Tôi khuyên nên mua sản phẩm địa phương." }
        ]
      },
      {
        type: "practice",
        titleDe: "Tipps für einen nachhaltigen Lebensstil",
        titleVi: "Mẹo cho lối sống bền vững",
        instruction: "Schreibe eine Liste mit 6-8 Tipps für einen nachhaltigen Lebensstil. Vergleiche auch, was in Vietnam und Deutschland anders oder gleich ist. Benutze: Man sollte... / Statt ... zu ..., könnte man... / In Vietnam/Deutschland... / Es wäre besser, wenn...",
        instructionVi: "Viết danh sách 6-8 mẹo cho lối sống bền vững. Cũng so sánh những gì khác hoặc giống giữa Việt Nam và Đức. Dùng: Man sollte... / Statt ... zu ..., könnte man... / In Vietnam/Deutschland... / Es wäre besser, wenn..."
      }
    ]
  },

  // --- Chapter 6, Lesson 3: Erneuerbare Energien ---
  {
    id: "b1-ch6-l3",
    chapterId: 6,
    lessonNumber: 3,
    title: "Erneuerbare Energien",
    titleVi: "Năng lượng tái tạo",
    type: "Fertigkeit",
    objectives: [
      "Nắm từ vựng về các nguồn năng lượng tái tạo và hóa thạch",
      "Thảo luận ưu và nhược điểm của các nguồn năng lượng",
      "Trình bày ý kiến về chính sách năng lượng"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Die Energiewende in Deutschland",
        titleVi: "Chuyển đổi năng lượng ở Đức",
        textDe: "Die Energiewende ist eines der wichtigsten politischen Projekte in Deutschland. Das Ziel ist es, von fossilen Brennstoffen (Kohle, Öl, Gas) und Atomenergie auf erneuerbare Energien umzusteigen. Dazu gehören Windenergie, Solarenergie, Wasserkraft und Biomasse. Deutschland hat 2023 alle Atomkraftwerke abgeschaltet. Erneuerbare Energien machen bereits über 50% der Stromerzeugung aus. Die Herausforderungen sind: Energiespeicherung, Netzausbau und die Kosten der Transformation.",
        textVi: "Chuyển đổi năng lượng (Energiewende) là một trong những dự án chính trị quan trọng nhất ở Đức. Mục tiêu là chuyển từ nhiên liệu hóa thạch (than, dầu, khí) và năng lượng hạt nhân sang năng lượng tái tạo. Bao gồm năng lượng gió, năng lượng mặt trời, thủy điện và sinh khối. Đức đã đóng cửa tất cả nhà máy điện hạt nhân năm 2023. Năng lượng tái tạo đã chiếm hơn 50% sản lượng điện. Thách thức gồm: lưu trữ năng lượng, mở rộng lưới điện và chi phí chuyển đổi."
      },
      {
        type: "vocabulary",
        titleDe: "Energiequellen",
        titleVi: "Nguồn năng lượng",
        words: [
          { de: "erneuerbare Energie", vi: "năng lượng tái tạo", article: "die" },
          { de: "fossiler Brennstoff", vi: "nhiên liệu hóa thạch", article: "der" },
          { de: "Windenergie", vi: "năng lượng gió", article: "die" },
          { de: "Solarenergie", vi: "năng lượng mặt trời", article: "die" },
          { de: "Wasserkraft", vi: "thủy điện", article: "die" },
          { de: "Atomenergie", vi: "năng lượng hạt nhân", article: "die" },
          { de: "Kohle", vi: "than", article: "die" },
          { de: "Windrad", vi: "tuabin gió", article: "das" },
          { de: "Solaranlage", vi: "hệ thống điện mặt trời", article: "die" },
          { de: "Stromerzeugung", vi: "sản xuất điện", article: "die" },
          { de: "Energiespeicher", vi: "bộ lưu trữ năng lượng", article: "der" },
          { de: "Energiewende", vi: "chuyển đổi năng lượng", article: "die" },
          { de: "Netzausbau", vi: "mở rộng lưới điện", article: "der" },
          { de: "Emissionen", vi: "khí thải" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Pro und Contra erneuerbare Energien",
        titleVi: "Ưu và nhược điểm năng lượng tái tạo",
        lines: [
          { speaker: "Minh", de: "Ich habe gelesen, dass Deutschland bis 2045 klimaneutral werden will. Ist das realistisch?", vi: "Tôi đọc rằng Đức muốn trung hòa khí hậu đến năm 2045. Có thực tế không?" },
          { speaker: "Lisa", de: "Das ist ambitioniert, aber machbar. Wir haben schon große Fortschritte gemacht.", vi: "Đó là tham vọng, nhưng khả thi. Chúng tôi đã đạt được nhiều tiến bộ." },
          { speaker: "Minh", de: "Was sind die größten Herausforderungen?", vi: "Thách thức lớn nhất là gì?" },
          { speaker: "Lisa", de: "Die Speicherung von Energie ist ein großes Problem. Wind und Sonne sind nicht immer verfügbar.", vi: "Lưu trữ năng lượng là vấn đề lớn. Gió và mặt trời không phải lúc nào cũng có." },
          { speaker: "Minh", de: "In Vietnam setzen wir auch auf Solarenergie. Die Sonneneinstrahlung ist viel stärker als hier.", vi: "Ở Việt Nam chúng tôi cũng đầu tư vào năng lượng mặt trời. Bức xạ mặt trời mạnh hơn nhiều so với ở đây." },
          { speaker: "Lisa", de: "Das ist ein großer Vorteil! Ich denke, jedes Land muss seine eigenen Stärken nutzen.", vi: "Đó là lợi thế lớn! Tôi nghĩ mỗi nước phải tận dụng thế mạnh riêng." },
          { speaker: "Minh", de: "Auf jeden Fall. Die Energiewende ist eine globale Aufgabe.", vi: "Chắc chắn. Chuyển đổi năng lượng là nhiệm vụ toàn cầu." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Vor- und Nachteile nennen",
        titleVi: "Nêu ưu và nhược điểm",
        rule: "Vorteile: Ein Vorteil von ... ist, dass... / ... hat den Vorteil, dass... / Dafür spricht, dass... Nachteile: Ein Nachteil ist, dass... / Dagegen spricht, dass... / Das Problem dabei ist, dass... / Allerdings...",
        ruleVi: "Ưu điểm: Ein Vorteil von ... ist, dass... (Một ưu điểm của... là...) / Dafür spricht, dass... (Điều ủng hộ là...) Nhược điểm: Ein Nachteil ist, dass... (Một nhược điểm là...) / Dagegen spricht, dass... (Điều phản đối là...) / Das Problem dabei ist, dass... (Vấn đề ở đây là...) / Allerdings... (Tuy nhiên...)",
        examples: [
          { de: "Ein Vorteil von Solarenergie ist, dass sie keine Emissionen verursacht.", vi: "Một ưu điểm của năng lượng mặt trời là không gây ra khí thải." },
          { de: "Ein Nachteil ist, dass die Sonne nicht immer scheint.", vi: "Một nhược điểm là mặt trời không phải lúc nào cũng chiếu sáng." },
          { de: "Dafür spricht, dass Windenergie relativ günstig ist.", vi: "Điều ủng hộ là năng lượng gió tương đối rẻ." },
          { de: "Allerdings braucht man viel Platz für Windräder.", vi: "Tuy nhiên cần nhiều không gian cho tuabin gió." }
        ]
      },
      {
        type: "practice",
        titleDe: "Debatte: Welche Energie ist die beste?",
        titleVi: "Tranh luận: Nguồn năng lượng nào tốt nhất?",
        instruction: "Wähle eine Energiequelle (Solar, Wind, Wasser, Atom) und schreibe einen Text (120-150 Wörter) mit: 1) Kurze Beschreibung der Energiequelle 2) Mindestens 2 Vorteile 3) Mindestens 2 Nachteile 4) Deine Meinung. Benutze: Ein Vorteil/Nachteil ist... / Dafür/Dagegen spricht... / Meiner Meinung nach...",
        instructionVi: "Chọn một nguồn năng lượng (mặt trời, gió, nước, hạt nhân) và viết bài (120-150 từ): 1) Mô tả ngắn nguồn năng lượng 2) Ít nhất 2 ưu điểm 3) Ít nhất 2 nhược điểm 4) Ý kiến của bạn. Dùng: Ein Vorteil/Nachteil ist... / Dafür/Dagegen spricht... / Meiner Meinung nach..."
      }
    ]
  },

  // --- Chapter 6, Lesson 4: Finalsätze (um...zu, damit) ---
  {
    id: "b1-ch6-l4",
    chapterId: 6,
    lessonNumber: 4,
    title: "Finalsätze: um...zu, damit",
    titleVi: "Câu mục đích: um...zu, damit",
    type: "Grammatik",
    objectives: [
      "Hiểu và sử dụng câu mục đích với um...zu và damit",
      "Phân biệt khi nào dùng um...zu và khi nào dùng damit",
      "Viết câu diễn đạt mục đích trong bối cảnh môi trường"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Finalsätze: Wozu? Zu welchem Zweck?",
        titleVi: "Câu mục đích: Để làm gì? Với mục đích gì?",
        textDe: "Finalsätze drücken ein Ziel oder einen Zweck aus. Sie beantworten die Frage: Wozu? / Zu welchem Zweck? Im Deutschen gibt es zwei Hauptstrukturen: 'um...zu + Infinitiv' und 'damit + Nebensatz'. Der wichtige Unterschied: 'um...zu' kann man nur verwenden, wenn das Subjekt im Hauptsatz und im Finalsatz gleich ist. Bei verschiedenen Subjekten muss man 'damit' benutzen.",
        textVi: "Câu mục đích (Finalsätze) diễn đạt mục tiêu hoặc mục đích. Trả lời câu hỏi: Wozu? / Zu welchem Zweck? (Để làm gì?) Trong tiếng Đức có hai cấu trúc chính: 'um...zu + nguyên mẫu' và 'damit + mệnh đề phụ'. Sự khác biệt quan trọng: 'um...zu' chỉ dùng được khi chủ ngữ ở mệnh đề chính và mệnh đề mục đích giống nhau. Khi chủ ngữ khác nhau, phải dùng 'damit'."
      },
      {
        type: "grammar",
        titleDe: "um...zu + Infinitiv (gleiches Subjekt)",
        titleVi: "um...zu + Nguyên mẫu (cùng chủ ngữ)",
        rule: "Struktur: Hauptsatz + um + ... + zu + Infinitiv. Das Subjekt ist in beiden Teilen gleich! Trennbare Verben: um + ... + Vorsilbe + zu + Verb (z.B. um einzukaufen). Bei Modalverben: um ... Infinitiv + zu + können/müssen etc. ist NICHT möglich → damit verwenden.",
        ruleVi: "Cấu trúc: Mệnh đề chính + um + ... + zu + nguyên mẫu. Chủ ngữ ở cả hai phần phải giống nhau! Động từ tách: um + ... + tiền tố + zu + động từ (ví dụ: um einzukaufen). Lưu ý: KHÔNG dùng um...zu với Modalverben → dùng damit thay thế.",
        examples: [
          { de: "Ich fahre mit dem Fahrrad, um die Umwelt zu schützen.", vi: "Tôi đi xe đạp để bảo vệ môi trường." },
          { de: "Sie trennt den Müll, um weniger Abfall zu produzieren.", vi: "Cô ấy phân loại rác để tạo ra ít rác hơn." },
          { de: "Er spart Strom, um Geld zu sparen.", vi: "Anh ấy tiết kiệm điện để tiết kiệm tiền." },
          { de: "Wir pflanzen Bäume, um CO₂ zu reduzieren.", vi: "Chúng tôi trồng cây để giảm CO₂." },
          { de: "Ich bringe meine eigene Tasche mit, um Plastik zu vermeiden.", vi: "Tôi mang theo túi riêng để tránh nhựa." }
        ]
      },
      {
        type: "grammar",
        titleDe: "damit + Nebensatz (verschiedene Subjekte)",
        titleVi: "damit + Mệnh đề phụ (chủ ngữ khác nhau)",
        rule: "Struktur: Hauptsatz + damit + Subjekt + ... + Verb(Ende). 'Damit' wird verwendet, wenn die Subjekte verschieden sind! Man kann 'damit' auch bei gleichem Subjekt verwenden (statt um...zu), aber um...zu ist eleganter.",
        ruleVi: "Cấu trúc: Mệnh đề chính + damit + chủ ngữ + ... + động từ (cuối). 'Damit' được dùng khi chủ ngữ khác nhau! Có thể dùng 'damit' cả khi chủ ngữ giống nhau (thay cho um...zu), nhưng um...zu hay hơn. So sánh: Ich lerne Deutsch, um eine Arbeit zu finden. (cùng chủ ngữ: ich) / Ich lerne Deutsch, damit mein Chef zufrieden ist. (khác chủ ngữ: ich ≠ mein Chef)",
        examples: [
          { de: "Ich erkläre es langsam, damit du es verstehst.", vi: "Tôi giải thích chậm để bạn hiểu." },
          { de: "Die Regierung investiert in Solarenergie, damit die Bürger günstigen Strom bekommen.", vi: "Chính phủ đầu tư vào năng lượng mặt trời để người dân có điện giá rẻ." },
          { de: "Wir recyclen Plastik, damit weniger Müll im Meer landet.", vi: "Chúng ta tái chế nhựa để ít rác hơn trôi ra biển." },
          { de: "Die Eltern sparen Energie, damit ihre Kinder eine bessere Zukunft haben.", vi: "Bố mẹ tiết kiệm năng lượng để con cái có tương lai tốt hơn." },
          { de: "Die Stadt baut Fahrradwege, damit die Leute weniger Auto fahren.", vi: "Thành phố xây đường xe đạp để mọi người ít đi ô tô hơn." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Was können wir für die Umwelt tun?",
        titleVi: "Chúng ta có thể làm gì cho môi trường?",
        lines: [
          { speaker: "Thao", de: "Warum bringst du immer deine eigene Flasche mit?", vi: "Sao bạn luôn mang theo chai riêng?" },
          { speaker: "Max", de: "Um Plastikflaschen zu vermeiden. Ich versuche, so wenig Einwegplastik wie möglich zu benutzen.", vi: "Để tránh chai nhựa. Tôi cố dùng càng ít nhựa dùng một lần càng tốt." },
          { speaker: "Thao", de: "Das ist eine gute Idee! Was machst du noch, um die Umwelt zu schützen?", vi: "Ý hay! Bạn còn làm gì nữa để bảo vệ môi trường?" },
          { speaker: "Max", de: "Ich kaufe Bioprodukte, damit weniger Pestizide in die Natur gelangen. Und ich fahre viel Fahrrad.", vi: "Tôi mua sản phẩm hữu cơ để ít thuốc trừ sâu hơn ra tự nhiên. Và tôi đi xe đạp nhiều." },
          { speaker: "Thao", de: "In Vietnam benutzen viele Leute Motorroller. Man müsste bessere öffentliche Verkehrsmittel schaffen, damit die Leute umsteigen.", vi: "Ở Việt Nam nhiều người dùng xe máy. Cần phải tạo phương tiện công cộng tốt hơn để mọi người chuyển đổi." },
          { speaker: "Max", de: "Genau! Die Politik muss die richtigen Rahmenbedingungen schaffen, damit Nachhaltigkeit für alle möglich wird.", vi: "Đúng! Chính trị phải tạo khuôn khổ đúng đắn để bền vững trở nên khả thi cho tất cả." }
        ]
      },
      {
        type: "practice",
        titleDe: "Finalsätze bilden",
        titleVi: "Tạo câu mục đích",
        instruction: "Bilde Sätze mit um...zu oder damit. Entscheide, welche Struktur passt! 1) Ich lerne Deutsch. Ich will in Deutschland studieren. 2) Die Lehrerin spricht langsam. Die Schüler sollen sie verstehen. 3) Wir sparen Wasser. Wir wollen die Umwelt schützen. 4) Die Stadt pflanzt Bäume. Die Luft soll sauberer werden. 5) Er kauft ein Elektroauto. Er will weniger CO₂ produzieren. Dann schreibe 4 eigene Sätze: 2 mit um...zu und 2 mit damit.",
        instructionVi: "Tạo câu với um...zu hoặc damit. Quyết định cấu trúc nào phù hợp! 1) Ich lerne Deutsch. Ich will in Deutschland studieren. 2) Die Lehrerin spricht langsam. Die Schüler sollen sie verstehen. 3) Wir sparen Wasser. Wir wollen die Umwelt schützen. 4) Die Stadt pflanzt Bäume. Die Luft soll sauberer werden. 5) Er kauft ein Elektroauto. Er will weniger CO₂ produzieren. Sau đó viết 4 câu riêng: 2 câu với um...zu và 2 câu với damit."
      }
    ]
  }
];
