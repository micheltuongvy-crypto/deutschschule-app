// B1 Chapters 7-8: Kunst & Literatur, Recht & Bürokratie

import type { ContentBlock, Lesson } from "../a1/chapters7_8";

export const b1LessonsCh7_8: Lesson[] = [
  // ============================================================
  // CHAPTER 7: Kunst & Literatur
  // ============================================================

  // --- Chapter 7, Lesson 1: Deutsche Literaturgeschichte ---
  {
    id: "b1-ch7-l1",
    chapterId: 7,
    lessonNumber: 1,
    title: "Deutsche Literaturgeschichte",
    titleVi: "Lịch sử văn học Đức",
    type: "Einführung",
    objectives: [
      "Tìm hiểu các thời kỳ văn học quan trọng của Đức",
      "Nắm được tên các tác giả và tác phẩm nổi tiếng",
      "Sử dụng từ vựng chuyên ngành về văn học",
      "Diễn đạt ý kiến về sách và tác phẩm văn học"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Überblick: Deutsche Literatur",
        titleVi: "Tổng quan: Văn học Đức",
        textDe: "Die deutsche Literatur hat eine lange und reiche Geschichte, die vom Mittelalter bis in die Gegenwart reicht. Deutschland wird oft als das 'Land der Dichter und Denker' bezeichnet — eine Tradition, die mit Goethe, Schiller, Heine und vielen anderen großen Schriftstellern verbunden ist. Die wichtigsten Epochen sind die Aufklärung, die Klassik, die Romantik, der Realismus, der Expressionismus und die Nachkriegsliteratur. Auch heute spielt Literatur in Deutschland eine große Rolle: Jedes Jahr im Oktober findet die Frankfurter Buchmesse statt, die größte Buchmesse der Welt.",
        textVi: "Văn học Đức có lịch sử lâu đời và phong phú, trải dài từ thời Trung cổ đến hiện đại. Nước Đức thường được gọi là 'đất nước của thi sĩ và nhà tư tưởng' (Land der Dichter und Denker) — một truyền thống gắn liền với Goethe, Schiller, Heine và nhiều nhà văn lớn khác. Các thời kỳ văn học quan trọng nhất là Khai sáng (Aufklärung), Cổ điển (Klassik), Lãng mạn (Romantik), Hiện thực (Realismus), Biểu hiện (Expressionismus) và Văn học hậu chiến (Nachkriegsliteratur). Ngày nay, văn học vẫn đóng vai trò quan trọng ở Đức: Hàng năm vào tháng 10 diễn ra Hội chợ Sách Frankfurt — hội chợ sách lớn nhất thế giới."
      },
      {
        type: "vocabulary",
        titleDe: "Literarische Begriffe",
        titleVi: "Thuật ngữ văn học",
        words: [
          { de: "Literatur", vi: "văn học", article: "die" },
          { de: "Dichter / Dichterin", vi: "nhà thơ", article: "der / die" },
          { de: "Schriftsteller / Schriftstellerin", vi: "nhà văn", article: "der / die" },
          { de: "Roman", vi: "tiểu thuyết", article: "der" },
          { de: "Gedicht", vi: "bài thơ", article: "das" },
          { de: "Erzählung", vi: "truyện ngắn", article: "die" },
          { de: "Drama", vi: "kịch", article: "das" },
          { de: "Epoche", vi: "thời kỳ / thời đại", article: "die" },
          { de: "Handlung", vi: "cốt truyện", article: "die" },
          { de: "Hauptfigur", vi: "nhân vật chính", article: "die" },
          { de: "Verlag", vi: "nhà xuất bản", article: "der" },
          { de: "Bestseller", vi: "sách bán chạy nhất", article: "der" },
          { de: "Literaturpreis", vi: "giải thưởng văn học", article: "der" },
          { de: "Buchmesse", vi: "hội chợ sách", article: "die" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Wichtige Epochen und Autoren",
        titleVi: "Các thời kỳ và tác giả quan trọng",
        words: [
          { de: "Aufklärung (18. Jh.)", vi: "Thời kỳ Khai sáng (thế kỷ 18)" },
          { de: "Klassik (ca. 1786–1832)", vi: "Thời kỳ Cổ điển (khoảng 1786–1832)" },
          { de: "Romantik (ca. 1795–1848)", vi: "Thời kỳ Lãng mạn (khoảng 1795–1848)" },
          { de: "Johann Wolfgang von Goethe", vi: "Goethe — tác giả 'Faust'" },
          { de: "Friedrich Schiller", vi: "Schiller — tác giả 'Wilhelm Tell'" },
          { de: "Heinrich Heine", vi: "Heine — nhà thơ lãng mạn nổi tiếng" },
          { de: "Franz Kafka", vi: "Kafka — tác giả 'Die Verwandlung'" },
          { de: "Thomas Mann", vi: "Thomas Mann — Nobel Văn học 1929" },
          { de: "Hermann Hesse", vi: "Hesse — Nobel Văn học 1946" },
          { de: "Günter Grass", vi: "Grass — Nobel Văn học 1999" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Über Literatur sprechen — Redemittel",
        titleVi: "Nói về văn học — Các mẫu câu",
        rule: "Um über Literatur zu sprechen, benutzen wir bestimmte Redemittel: 'Der Roman handelt von ...' (nói về nội dung), 'Die Hauptfigur ist ...' (nhân vật chính), 'Das Buch wurde von ... geschrieben' (Passiv — ai viết), 'Der Autor beschreibt ...' (tác giả mô tả). Man kann auch seine Meinung äußern: 'Ich finde das Buch spannend/langweilig/interessant.'",
        ruleVi: "Để nói về văn học, chúng ta sử dụng các mẫu câu nhất định: 'Der Roman handelt von ...' (Tiểu thuyết nói về...), 'Die Hauptfigur ist ...' (Nhân vật chính là...), 'Das Buch wurde von ... geschrieben' (Cuốn sách được viết bởi... — câu bị động), 'Der Autor beschreibt ...' (Tác giả mô tả...). Bạn cũng có thể bày tỏ ý kiến: 'Ich finde das Buch spannend/langweilig/interessant.' (Tôi thấy cuốn sách hấp dẫn/nhàm chán/thú vị.)",
        examples: [
          { de: "Der Roman 'Faust' handelt von einem Gelehrten, der einen Pakt mit dem Teufel schließt.", vi: "Tiểu thuyết 'Faust' kể về một học giả ký giao ước với quỷ dữ." },
          { de: "Die Hauptfigur in 'Die Verwandlung' ist Gregor Samsa.", vi: "Nhân vật chính trong 'Hóa thân' là Gregor Samsa." },
          { de: "Das Buch wurde von Thomas Mann geschrieben.", vi: "Cuốn sách được viết bởi Thomas Mann." },
          { de: "Ich finde Kafkas Erzählungen sehr interessant, aber manchmal schwer zu verstehen.", vi: "Tôi thấy truyện của Kafka rất thú vị, nhưng đôi khi khó hiểu." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Im Buchladen",
        titleVi: "Ở hiệu sách",
        lines: [
          { speaker: "Lan", de: "Ich suche ein gutes Buch auf Deutsch. Kannst du mir etwas empfehlen?", vi: "Mình tìm một cuốn sách tiếng Đức hay. Bạn có thể gợi ý gì không?" },
          { speaker: "Thomas", de: "Was liest du gern? Romane, Krimis oder eher Sachbücher?", vi: "Bạn thích đọc gì? Tiểu thuyết, truyện trinh thám hay sách chuyên đề?" },
          { speaker: "Lan", de: "Am liebsten Romane. Aber nicht zu schwierig — ich bin auf B1-Niveau.", vi: "Mình thích tiểu thuyết nhất. Nhưng đừng quá khó — mình đang ở trình độ B1." },
          { speaker: "Thomas", de: "Dann empfehle ich dir 'Der Vorleser' von Bernhard Schlink. Der Stil ist klar und die Geschichte ist sehr spannend.", vi: "Vậy mình gợi ý cuốn 'Người đọc' của Bernhard Schlink. Văn phong rõ ràng và câu chuyện rất hấp dẫn." },
          { speaker: "Lan", de: "Worum geht es in dem Buch?", vi: "Cuốn sách nói về gì?" },
          { speaker: "Thomas", de: "Es handelt von einem jungen Mann, der sich in eine ältere Frau verliebt. Später erfährt er ein schreckliches Geheimnis über ihre Vergangenheit.", vi: "Nó kể về một chàng trai yêu một phụ nữ lớn tuổi hơn. Sau này anh ta phát hiện ra một bí mật khủng khiếp về quá khứ của cô." },
          { speaker: "Lan", de: "Das klingt interessant! Ich kaufe es.", vi: "Nghe hay đấy! Mình mua nó." }
        ]
      },
      {
        type: "practice",
        titleDe: "Dein Lieblingsbuch",
        titleVi: "Cuốn sách yêu thích của bạn",
        instruction: "Erzähle von deinem Lieblingsbuch. Benutze die Redemittel: Das Buch heißt ... / Es wurde von ... geschrieben. / Es handelt von ... / Die Hauptfigur ist ... / Ich finde das Buch ..., weil ...",
        instructionVi: "Hãy kể về cuốn sách yêu thích của bạn. Sử dụng các mẫu câu: Das Buch heißt ... / Es wurde von ... geschrieben. / Es handelt von ... / Die Hauptfigur ist ... / Ich finde das Buch ..., weil ..."
      }
    ]
  },

  // --- Chapter 7, Lesson 2: Filme & Theater ---
  {
    id: "b1-ch7-l2",
    chapterId: 7,
    lessonNumber: 2,
    title: "Filme & Theater",
    titleVi: "Phim ảnh & Sân khấu",
    type: "Einführung",
    objectives: [
      "Nắm được từ vựng về phim ảnh và sân khấu",
      "Mô tả và đánh giá phim, vở kịch",
      "Hiểu biết về nền điện ảnh và sân khấu Đức",
      "Sử dụng các mẫu câu để bày tỏ ý kiến về nghệ thuật"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Film und Theater in Deutschland",
        titleVi: "Phim ảnh và Sân khấu ở Đức",
        textDe: "Deutschland hat eine lebendige Film- und Theaterszene. Deutsche Filme gewinnen regelmäßig internationale Preise — zum Beispiel hat 'Das Leben der Anderen' (2006) den Oscar für den besten fremdsprachigen Film gewonnen. Auch das Theater hat in Deutschland eine lange Tradition. Fast jede größere Stadt hat ein eigenes Stadttheater. Die Berliner Volksbühne und das Hamburger Thalia Theater sind weltbekannt. Theater ist in Deutschland relativ günstig, weil es vom Staat subventioniert wird. Viele Theater bieten auch Ermäßigungen für Studenten an.",
        textVi: "Nước Đức có một nền điện ảnh và sân khấu sống động. Phim Đức thường xuyên đoạt giải quốc tế — ví dụ phim 'Cuộc sống của những người khác' (Das Leben der Anderen, 2006) đã đoạt giải Oscar cho phim nước ngoài hay nhất. Sân khấu kịch cũng có truyền thống lâu đời ở Đức. Hầu hết mọi thành phố lớn đều có nhà hát riêng (Stadttheater). Volksbühne Berlin và Thalia Theater Hamburg nổi tiếng thế giới. Vé xem kịch ở Đức tương đối rẻ vì được nhà nước trợ cấp. Nhiều nhà hát cũng giảm giá cho sinh viên."
      },
      {
        type: "vocabulary",
        titleDe: "Film & Kino",
        titleVi: "Phim & Rạp chiếu",
        words: [
          { de: "Film", vi: "phim", article: "der" },
          { de: "Regisseur / Regisseurin", vi: "đạo diễn", article: "der / die" },
          { de: "Schauspieler / Schauspielerin", vi: "diễn viên", article: "der / die" },
          { de: "Drehbuch", vi: "kịch bản phim", article: "das" },
          { de: "Komödie", vi: "phim hài", article: "die" },
          { de: "Krimi", vi: "phim trinh thám", article: "der" },
          { de: "Dokumentarfilm", vi: "phim tài liệu", article: "der" },
          { de: "Untertitel", vi: "phụ đề", article: "der" },
          { de: "Originalfassung (OV)", vi: "phiên bản gốc (OV)", article: "die" },
          { de: "Vorstellung", vi: "buổi diễn / suất chiếu", article: "die" },
          { de: "Szene", vi: "cảnh phim", article: "die" },
          { de: "Handlung", vi: "cốt truyện / nội dung", article: "die" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Theater & Bühne",
        titleVi: "Sân khấu & Nhà hát",
        words: [
          { de: "Theater", vi: "nhà hát / kịch", article: "das" },
          { de: "Bühne", vi: "sân khấu", article: "die" },
          { de: "Stück", vi: "vở kịch", article: "das" },
          { de: "Aufführung", vi: "buổi biểu diễn", article: "die" },
          { de: "Premiere", vi: "buổi công chiếu đầu tiên", article: "die" },
          { de: "Oper", vi: "nhà hát opera / vở opera", article: "die" },
          { de: "Ballett", vi: "ba-lê", article: "das" },
          { de: "Publikum", vi: "khán giả", article: "das" },
          { de: "Kritik", vi: "bài phê bình", article: "die" },
          { de: "Ermäßigung", vi: "giảm giá", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Über Filme und Theater sprechen",
        titleVi: "Nói về phim ảnh và sân khấu",
        rule: "Um Filme zu beschreiben, benutzen wir: Adjektive (spannend, lustig, langweilig, bewegend, beeindruckend), Redemittel wie 'Der Film handelt von ...' / 'In dem Film geht es um ...' / 'Der Film spielt in ...' (thời gian/nơi chốn) / 'Der Film wurde von ... gedreht' (đạo diễn). Meinung: 'Mir hat der Film (nicht) gefallen, weil ...' / 'Ich fand den Film ...'",
        ruleVi: "Để mô tả phim, chúng ta dùng: Tính từ (spannend — hồi hộp, lustig — vui nhộn, langweilig — nhàm chán, bewegend — cảm động, beeindruckend — ấn tượng), các mẫu câu như 'Der Film handelt von ...' (Phim nói về...) / 'In dem Film geht es um ...' (Trong phim, vấn đề là về...) / 'Der Film spielt in ...' (Phim diễn ra tại...) / 'Der Film wurde von ... gedreht' (Phim được quay bởi...). Ý kiến: 'Mir hat der Film (nicht) gefallen, weil ...' (Tôi (không) thích phim, vì...) / 'Ich fand den Film ...' (Tôi thấy phim...)",
        examples: [
          { de: "Der Film 'Good Bye, Lenin!' handelt von einer Familie in der DDR nach dem Mauerfall.", vi: "Phim 'Good Bye, Lenin!' kể về một gia đình ở Đông Đức sau khi Bức tường Berlin sụp đổ." },
          { de: "In dem Film geht es um eine Mutter, die nichts vom Ende der DDR erfahren darf.", vi: "Phim nói về một người mẹ không được biết về sự kết thúc của Đông Đức." },
          { de: "Mir hat der Film sehr gut gefallen, weil er lustig und gleichzeitig bewegend war.", vi: "Tôi rất thích bộ phim, vì nó vừa hài hước vừa cảm động." },
          { de: "Ich fand die Aufführung im Theater beeindruckend.", vi: "Tôi thấy buổi biểu diễn ở nhà hát rất ấn tượng." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Nach dem Kinobesuch",
        titleVi: "Sau khi đi xem phim",
        lines: [
          { speaker: "Minh", de: "Und? Wie fandest du den Film?", vi: "Thế nào? Bạn thấy phim sao?" },
          { speaker: "Sarah", de: "Ich fand ihn wirklich gut! Die Geschichte war sehr spannend.", vi: "Mình thấy phim rất hay! Câu chuyện rất hồi hộp." },
          { speaker: "Minh", de: "Ja, und die Schauspieler waren auch super. Besonders die Hauptdarstellerin.", vi: "Ừ, và diễn viên cũng tuyệt vời. Đặc biệt là nữ diễn viên chính." },
          { speaker: "Sarah", de: "Stimmt! Hast du schon andere Filme von dem Regisseur gesehen?", vi: "Đúng vậy! Bạn đã xem phim khác của đạo diễn đó chưa?" },
          { speaker: "Minh", de: "Nein, das war mein erster. Aber ich möchte jetzt mehr sehen.", vi: "Chưa, đây là phim đầu tiên. Nhưng giờ mình muốn xem thêm." },
          { speaker: "Sarah", de: "Wollen wir nächste Woche ins Theater gehen? Es gibt ein neues Stück im Stadttheater.", vi: "Tuần sau mình đi xem kịch không? Có một vở mới ở nhà hát thành phố." },
          { speaker: "Minh", de: "Gute Idee! Gibt es Ermäßigungen für Studenten?", vi: "Ý hay! Có giảm giá cho sinh viên không?" },
          { speaker: "Sarah", de: "Ja, mit dem Studentenausweis bekommt man 50 Prozent Rabatt.", vi: "Có, với thẻ sinh viên được giảm 50 phần trăm." }
        ]
      },
      {
        type: "practice",
        titleDe: "Filmempfehlung",
        titleVi: "Giới thiệu phim",
        instruction: "Empfehle deinem Partner einen Film oder ein Theaterstück. Beschreibe: Wie heißt der Film/das Stück? Worum geht es? Wo spielt er/es? Wie fandest du ihn/es? Warum empfiehlst du ihn/es?",
        instructionVi: "Hãy giới thiệu cho bạn học một bộ phim hoặc một vở kịch. Mô tả: Phim/vở kịch tên gì? Nội dung về gì? Diễn ra ở đâu? Bạn thấy thế nào? Tại sao bạn giới thiệu?"
      }
    ]
  },

  // --- Chapter 7, Lesson 3: Rezensionen schreiben ---
  {
    id: "b1-ch7-l3",
    chapterId: 7,
    lessonNumber: 3,
    title: "Rezensionen schreiben",
    titleVi: "Viết bài đánh giá",
    type: "Fertigkeit",
    objectives: [
      "Hiểu cấu trúc của một bài đánh giá (Rezension)",
      "Viết bài đánh giá về sách, phim hoặc sự kiện văn hóa",
      "Sử dụng các liên từ và mẫu câu nối ý phức tạp hơn",
      "Bày tỏ ý kiến có lập luận"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Was ist eine Rezension?",
        titleVi: "Bài đánh giá là gì?",
        textDe: "Eine Rezension ist ein Text, in dem man ein Buch, einen Film, ein Theaterstück oder ein Konzert bewertet. Eine gute Rezension hat drei Teile: Erstens eine kurze Zusammenfassung (worum geht es?), zweitens eine persönliche Bewertung (was hat mir gefallen / nicht gefallen?) und drittens eine Empfehlung (für wen ist es geeignet?). Man sollte nicht zu viel über die Handlung verraten — Spoiler will niemand lesen! Im Internet schreibt man oft kurze Rezensionen, zum Beispiel auf Amazon oder bei Google. Aber auch Zeitungen und Zeitschriften veröffentlichen professionelle Rezensionen.",
        textVi: "Bài đánh giá (Rezension) là một bài viết trong đó bạn nhận xét về sách, phim, vở kịch hoặc buổi hòa nhạc. Một bài đánh giá tốt có ba phần: Thứ nhất, tóm tắt ngắn gọn (nội dung về gì?); thứ hai, đánh giá cá nhân (điều gì hay / không hay?); thứ ba, lời khuyên (phù hợp cho ai?). Bạn không nên tiết lộ quá nhiều về cốt truyện — không ai muốn đọc spoiler! Trên Internet, người ta thường viết đánh giá ngắn, ví dụ trên Amazon hoặc Google. Nhưng báo và tạp chí cũng đăng các bài đánh giá chuyên nghiệp."
      },
      {
        type: "grammar",
        titleDe: "Aufbau einer Rezension",
        titleVi: "Cấu trúc bài đánh giá",
        rule: "1. Einleitung: Titel, Autor/Regisseur, Genre, Erscheinungsjahr nennen. 2. Zusammenfassung: Kurze Beschreibung der Handlung (ohne Spoiler!). 3. Bewertung: Persönliche Meinung mit Begründung. 4. Empfehlung: Für wen ist das Buch/der Film geeignet? Wichtige Konnektoren: obwohl (mặc dù), trotzdem (tuy nhiên), außerdem (ngoài ra), einerseits ... andererseits (một mặt ... mặt khác), sowohl ... als auch (cả ... lẫn).",
        ruleVi: "1. Mở bài: Nêu tên tác phẩm, tác giả/đạo diễn, thể loại, năm xuất bản. 2. Tóm tắt: Mô tả ngắn gọn nội dung (không spoiler!). 3. Đánh giá: Ý kiến cá nhân có lý do. 4. Khuyến nghị: Tác phẩm phù hợp cho ai? Các liên từ quan trọng: obwohl (mặc dù), trotzdem (tuy nhiên), außerdem (ngoài ra), einerseits ... andererseits (một mặt ... mặt khác), sowohl ... als auch (cả ... lẫn).",
        examples: [
          { de: "Obwohl der Film sehr lang war, wurde es nie langweilig.", vi: "Mặc dù phim rất dài, nhưng không bao giờ nhàm chán." },
          { de: "Die Geschichte war einerseits lustig, andererseits auch sehr traurig.", vi: "Câu chuyện một mặt hài hước, mặt khác cũng rất buồn." },
          { de: "Der Autor schreibt sowohl spannend als auch poetisch.", vi: "Tác giả viết vừa hấp dẫn vừa giàu chất thơ." },
          { de: "Das Buch ist nicht einfach zu lesen. Trotzdem kann ich es sehr empfehlen.", vi: "Cuốn sách không dễ đọc. Tuy nhiên, tôi rất khuyến khích đọc." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Redemittel für Rezensionen",
        titleVi: "Mẫu câu cho bài đánh giá",
        rule: "Einleitung: 'Ich möchte das Buch/den Film ... vorstellen.' / 'Der Roman ... wurde von ... geschrieben und ist ... erschienen.' Bewertung positiv: 'Besonders gut hat mir ... gefallen.' / 'Was mich beeindruckt hat, war ...' / 'Der Autor versteht es, ... zu ...' Bewertung negativ: 'Was mich gestört hat, war ...' / 'Leider war ... enttäuschend.' / 'Ich hätte mir gewünscht, dass ...' Empfehlung: 'Ich kann das Buch allen empfehlen, die ...' / 'Der Film ist geeignet für ...' / 'Ich gebe dem Buch 4 von 5 Sternen.'",
        ruleVi: "Mở bài: 'Ich möchte das Buch/den Film ... vorstellen.' (Tôi muốn giới thiệu cuốn sách/bộ phim...) / 'Der Roman ... wurde von ... geschrieben und ist ... erschienen.' (Tiểu thuyết... được viết bởi... và xuất bản năm...) Đánh giá tích cực: 'Besonders gut hat mir ... gefallen.' (Tôi đặc biệt thích...) / 'Was mich beeindruckt hat, war ...' (Điều ấn tượng với tôi là...) Đánh giá tiêu cực: 'Was mich gestört hat, war ...' (Điều làm tôi khó chịu là...) / 'Leider war ... enttäuschend.' (Tiếc là... đáng thất vọng.) Khuyến nghị: 'Ich kann das Buch allen empfehlen, die ...' (Tôi giới thiệu cuốn sách cho tất cả những ai...) / 'Ich gebe dem Buch 4 von 5 Sternen.' (Tôi cho cuốn sách 4 trên 5 sao.)",
        examples: [
          { de: "Ich möchte den Film 'Das Leben der Anderen' vorstellen.", vi: "Tôi muốn giới thiệu bộ phim 'Cuộc sống của những người khác'." },
          { de: "Besonders gut hat mir die Atmosphäre im Film gefallen.", vi: "Tôi đặc biệt thích bầu không khí trong phim." },
          { de: "Was mich gestört hat, war das Ende — es kam zu plötzlich.", vi: "Điều làm tôi khó chịu là cái kết — nó đến quá đột ngột." },
          { de: "Ich kann das Buch allen empfehlen, die sich für deutsche Geschichte interessieren.", vi: "Tôi giới thiệu cuốn sách cho tất cả những ai quan tâm đến lịch sử Đức." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Eine Rezension besprechen",
        titleVi: "Thảo luận về một bài đánh giá",
        lines: [
          { speaker: "Lehrerin", de: "Lan, du hast eine Rezension über 'Der Vorleser' geschrieben. Erzähl uns kurz davon.", vi: "Lan, em đã viết bài đánh giá về 'Người đọc'. Hãy kể ngắn gọn cho chúng tôi." },
          { speaker: "Lan", de: "Ja, also der Roman wurde von Bernhard Schlink geschrieben und ist 1995 erschienen.", vi: "Vâng, tiểu thuyết được viết bởi Bernhard Schlink và xuất bản năm 1995." },
          { speaker: "Lan", de: "Es handelt von einem 15-jährigen Jungen, der sich in eine ältere Frau verliebt. Er liest ihr regelmäßig vor.", vi: "Nó kể về một cậu bé 15 tuổi yêu một phụ nữ lớn tuổi hơn. Cậu thường xuyên đọc sách cho cô nghe." },
          { speaker: "Lan", de: "Besonders beeindruckt hat mich, wie der Autor die Themen Schuld und Verantwortung behandelt.", vi: "Điều đặc biệt ấn tượng với em là cách tác giả xử lý chủ đề tội lỗi và trách nhiệm." },
          { speaker: "Lehrerin", de: "Sehr gut! Und wem würdest du das Buch empfehlen?", vi: "Rất tốt! Và em sẽ giới thiệu cuốn sách cho ai?" },
          { speaker: "Lan", de: "Ich empfehle es allen, die sich für deutsche Geschichte interessieren. Außerdem ist die Sprache nicht zu schwierig für B1-Lernende.", vi: "Em giới thiệu nó cho tất cả những ai quan tâm đến lịch sử Đức. Ngoài ra, ngôn ngữ không quá khó cho người học B1." }
        ]
      },
      {
        type: "practice",
        titleDe: "Schreibe eine Rezension!",
        titleVi: "Hãy viết một bài đánh giá!",
        instruction: "Schreibe eine Rezension (ca. 150–200 Wörter) über ein Buch, einen Film oder ein Theaterstück. Struktur: 1) Einleitung (Titel, Autor, Genre), 2) Zusammenfassung (worum geht es?), 3) Bewertung (was hat dir gefallen/nicht gefallen und warum?), 4) Empfehlung. Benutze mindestens drei Konnektoren: obwohl, trotzdem, außerdem, einerseits ... andererseits.",
        instructionVi: "Viết một bài đánh giá (khoảng 150–200 từ) về một cuốn sách, bộ phim hoặc vở kịch. Cấu trúc: 1) Mở bài (tiêu đề, tác giả, thể loại), 2) Tóm tắt (nội dung về gì?), 3) Đánh giá (bạn thích / không thích gì và tại sao?), 4) Khuyến nghị. Sử dụng ít nhất ba liên từ: obwohl, trotzdem, außerdem, einerseits ... andererseits."
      }
    ]
  },

  // --- Chapter 7, Lesson 4: Partizip I & II als Adjektive ---
  {
    id: "b1-ch7-l4",
    chapterId: 7,
    lessonNumber: 4,
    title: "Partizip I & II als Adjektive",
    titleVi: "Partizip I & II dùng như tính từ",
    type: "Grammatik",
    objectives: [
      "Hiểu cách tạo Partizip I (hiện tại phân từ) và Partizip II (quá khứ phân từ)",
      "Sử dụng Partizip I và II như tính từ đứng trước danh từ",
      "Phân biệt ý nghĩa giữa Partizip I (đang xảy ra) và Partizip II (đã xảy ra)",
      "Áp dụng quy tắc biến cách tính từ cho Partizip"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Partizip I und Partizip II als Adjektive",
        titleVi: "Partizip I và Partizip II dùng như tính từ",
        textDe: "Im Deutschen können wir Partizipien wie Adjektive benutzen. Das Partizip I (Partizip Präsens) beschreibt einen Vorgang, der gerade stattfindet — es ist aktiv. Beispiel: 'ein schlafendes Kind' (= ein Kind, das schläft). Das Partizip II (Partizip Perfekt) beschreibt einen abgeschlossenen Vorgang — es ist oft passiv. Beispiel: 'ein gelesenes Buch' (= ein Buch, das gelesen wurde). Wenn Partizipien vor einem Nomen stehen, bekommen sie die gleichen Endungen wie normale Adjektive.",
        textVi: "Trong tiếng Đức, chúng ta có thể dùng phân từ (Partizip) như tính từ. Partizip I (phân từ hiện tại) mô tả hành động đang diễn ra — mang nghĩa chủ động. Ví dụ: 'ein schlafendes Kind' (= một đứa trẻ đang ngủ). Partizip II (phân từ quá khứ) mô tả hành động đã hoàn thành — thường mang nghĩa bị động. Ví dụ: 'ein gelesenes Buch' (= một cuốn sách đã được đọc). Khi Partizip đứng trước danh từ, chúng nhận đuôi giống như tính từ thông thường. So sánh với tiếng Việt: tiếng Việt dùng 'đang' (Partizip I) và 'đã được' (Partizip II), nhưng đặt SAU danh từ. Tiếng Đức đặt TRƯỚC danh từ."
      },
      {
        type: "grammar",
        titleDe: "Partizip I: Bildung und Verwendung",
        titleVi: "Partizip I: Cách tạo và cách dùng",
        rule: "Bildung: Infinitiv + -d. Beispiele: schlafend (đang ngủ), lachend (đang cười), spielend (đang chơi), lesend (đang đọc). Vor einem Nomen bekommt das Partizip I eine Adjektivendung: der schlafende Hund, ein spielendes Kind, die lachenden Kinder. Partizip I = aktiv, gleichzeitig: Das Kind, das gerade schläft → das schlafende Kind.",
        ruleVi: "Cách tạo: Nguyên mẫu + -d. Ví dụ: schlafend (đang ngủ), lachend (đang cười), spielend (đang chơi), lesend (đang đọc). Trước danh từ, Partizip I nhận đuôi tính từ: der schlafende Hund (con chó đang ngủ), ein spielendes Kind (một đứa trẻ đang chơi), die lachenden Kinder (những đứa trẻ đang cười). Partizip I = chủ động, đồng thời: 'Das Kind, das gerade schläft' → 'das schlafende Kind'.",
        examples: [
          { de: "der schlafende Hund = der Hund, der schläft", vi: "con chó đang ngủ = con chó mà đang ngủ" },
          { de: "ein weinendes Kind = ein Kind, das weint", vi: "một đứa trẻ đang khóc = một đứa trẻ mà đang khóc" },
          { de: "die singenden Vögel = die Vögel, die singen", vi: "những con chim đang hót = những con chim mà đang hót" },
          { de: "Er beobachtete das spielende Kind im Park.", vi: "Anh ấy quan sát đứa trẻ đang chơi trong công viên." },
          { de: "Die lachende Frau war meine Lehrerin.", vi: "Người phụ nữ đang cười là cô giáo của tôi." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Partizip II: Bildung und Verwendung als Adjektiv",
        titleVi: "Partizip II: Cách tạo và cách dùng như tính từ",
        rule: "Bildung: Regelmäßig: ge- + Stamm + -t (gemacht, gekauft). Unregelmäßig: ge- + veränderter Stamm + -en (geschrieben, gelesen). Vor einem Nomen mit Adjektivendung: das geschriebene Buch, der gekaufte Mantel, ein gebrochenes Herz. Partizip II = passiv, abgeschlossen: Das Buch, das geschrieben wurde → das geschriebene Buch. Bei intransitiven Verben mit sein: aktive Bedeutung! Der angekommene Zug = der Zug, der angekommen ist.",
        ruleVi: "Cách tạo: Có quy tắc: ge- + gốc từ + -t (gemacht, gekauft). Bất quy tắc: ge- + gốc từ thay đổi + -en (geschrieben, gelesen). Trước danh từ với đuôi tính từ: das geschriebene Buch (cuốn sách đã được viết), der gekaufte Mantel (chiếc áo khoác đã mua), ein gebrochenes Herz (một trái tim tan vỡ). Partizip II = bị động, đã hoàn thành: 'Das Buch, das geschrieben wurde' → 'das geschriebene Buch'. Với động từ không ngoại động dùng sein: nghĩa CHỦ ĐỘNG! Der angekommene Zug = con tàu đã đến.",
        examples: [
          { de: "das gelesene Buch = das Buch, das gelesen wurde", vi: "cuốn sách đã được đọc = cuốn sách mà đã được đọc" },
          { de: "der reparierte Computer = der Computer, der repariert wurde", vi: "chiếc máy tính đã được sửa" },
          { de: "die geschlossene Tür = die Tür, die geschlossen wurde", vi: "cánh cửa đã được đóng" },
          { de: "der angekommene Zug = der Zug, der angekommen ist", vi: "chuyến tàu đã đến" },
          { de: "Ich lese gern gut geschriebene Romane.", vi: "Tôi thích đọc những tiểu thuyết được viết hay." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Partizip I vs. Partizip II — Vergleich",
        titleVi: "Partizip I so với Partizip II — So sánh",
        rule: "Partizip I (aktiv, gleichzeitig): der lesende Mann = der Mann, der gerade liest. Partizip II (passiv, abgeschlossen): das gelesene Buch = das Buch, das gelesen wurde. Vergleich: der kochende Mann (der Mann kocht gerade) ≠ das gekochte Ei (das Ei wurde gekocht). Die lachende Frau (sie lacht gerade) ≠ das gelachte ... (gibt es NICHT — lachen ist intransitiv, kein passives Partizip II als Adjektiv möglich!).",
        ruleVi: "Partizip I (chủ động, đang diễn ra): der lesende Mann = người đàn ông đang đọc. Partizip II (bị động, đã hoàn thành): das gelesene Buch = cuốn sách đã được đọc. So sánh: der kochende Mann (người đàn ông đang nấu) ≠ das gekochte Ei (quả trứng đã được luộc). Die lachende Frau (cô ấy đang cười) ≠ 'das gelachte ...' (KHÔNG TỒN TẠI — lachen là nội động từ, không thể dùng Partizip II bị động làm tính từ!).",
        examples: [
          { de: "der kochende Mann → das gekochte Essen", vi: "người đàn ông đang nấu → bữa ăn đã nấu xong" },
          { de: "die singende Frau → das gesungene Lied", vi: "người phụ nữ đang hát → bài hát đã được hát" },
          { de: "der fahrende Zug → der abgefahrene Zug", vi: "chuyến tàu đang chạy → chuyến tàu đã khởi hành" },
          { de: "ein bellender Hund ist laut, aber ein gut erzogener Hund ist ruhig.", vi: "một con chó đang sủa thì ồn ào, nhưng một con chó được dạy tốt thì yên lặng." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Im Kunstmuseum",
        titleVi: "Ở bảo tàng nghệ thuật",
        lines: [
          { speaker: "Lan", de: "Schau mal, das Bild zeigt eine tanzende Frau in einem roten Kleid.", vi: "Nhìn kìa, bức tranh vẽ một người phụ nữ đang nhảy múa trong chiếc váy đỏ." },
          { speaker: "Peter", de: "Ja, und daneben hängt ein sehr bekanntes Gemälde — ein verwundeter Soldat.", vi: "Ừ, và bên cạnh treo một bức tranh rất nổi tiếng — một người lính bị thương." },
          { speaker: "Lan", de: "Die leuchtenden Farben in diesem Bild gefallen mir besonders.", vi: "Tôi đặc biệt thích những màu sắc rực rỡ trong bức tranh này." },
          { speaker: "Peter", de: "Mir auch. Das ist typisch für den Expressionismus — überraschende, starke Farben.", vi: "Tôi cũng vậy. Đó là đặc trưng của trường phái Biểu hiện — những màu sắc bất ngờ, mạnh mẽ." },
          { speaker: "Lan", de: "Hier steht: 'Gemälde einer vergessenen Stadt'. Das klingt poetisch.", vi: "Ở đây ghi: 'Bức tranh của một thành phố bị lãng quên'. Nghe thật thơ mộng." },
          { speaker: "Peter", de: "Ja, die hier ausgestellten Werke sind alle aus der Zeit um 1920.", vi: "Ừ, các tác phẩm được trưng bày ở đây đều từ khoảng năm 1920." }
        ]
      },
      {
        type: "practice",
        titleDe: "Partizipien erkennen und bilden",
        titleVi: "Nhận biết và tạo Partizip",
        instruction: "1) Bilde das Partizip I und Partizip II von diesen Verben: lesen, schreiben, tanzen, öffnen, brechen. 2) Setze das passende Partizip ein: a) Der ___ (schlafen) Hund liegt auf dem Sofa. b) Das ___ (öffnen) Fenster lässt frische Luft herein. c) Die ___ (brechen) Vase kann nicht repariert werden. d) Der ___ (lesen) Mann sitzt im Park.",
        instructionVi: "1) Hãy tạo Partizip I và Partizip II từ các động từ: lesen, schreiben, tanzen, öffnen, brechen. 2) Điền Partizip phù hợp: a) Der ___ (schlafen) Hund liegt auf dem Sofa. b) Das ___ (öffnen) Fenster lässt frische Luft herein. c) Die ___ (brechen) Vase kann nicht repariert werden. d) Der ___ (lesen) Mann sitzt im Park."
      }
    ]
  },

  // ============================================================
  // CHAPTER 8: Recht & Bürokratie
  // ============================================================

  // --- Chapter 8, Lesson 1: Behördengänge in Deutschland ---
  {
    id: "b1-ch8-l1",
    chapterId: 8,
    lessonNumber: 1,
    title: "Behördengänge in Deutschland",
    titleVi: "Thủ tục hành chính ở Đức",
    type: "Einführung",
    objectives: [
      "Nắm được từ vựng quan trọng về các cơ quan hành chính ở Đức",
      "Hiểu quy trình đăng ký cư trú (Anmeldung) và các thủ tục cần thiết",
      "Viết và hiểu thư giao tiếp với cơ quan nhà nước",
      "Biết các giấy tờ quan trọng cho người nước ngoài ở Đức"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Bürokratie in Deutschland",
        titleVi: "Thủ tục hành chính ở Đức",
        textDe: "Deutschland ist bekannt für seine Bürokratie. Für fast alles braucht man ein Formular oder einen Antrag. Wenn man nach Deutschland kommt, muss man sich innerhalb von 14 Tagen bei der Meldebehörde (Einwohnermeldeamt oder Bürgeramt) anmelden. Man braucht dafür die Wohnungsgeberbestätigung (Bescheinigung vom Vermieter), den Reisepass und das ausgefüllte Anmeldeformular. Die Anmeldung ist kostenlos und sehr wichtig — ohne Meldebescheinigung kann man kein Bankkonto eröffnen, keinen Handyvertrag abschließen und keine Sozialleistungen beantragen. Für Ausländer ist auch die Ausländerbehörde (Ausländeramt) wichtig — dort beantragt man Aufenthaltserlaubnis und Visum-Verlängerungen.",
        textVi: "Nước Đức nổi tiếng với thủ tục hành chính phức tạp. Hầu hết mọi thứ đều cần đơn hoặc mẫu đơn. Khi đến Đức, bạn phải đăng ký cư trú trong vòng 14 ngày tại cơ quan đăng ký cư trú (Einwohnermeldeamt hoặc Bürgeramt). Bạn cần: giấy xác nhận chỗ ở (Wohnungsgeberbestätigung) từ chủ nhà, hộ chiếu và mẫu đăng ký đã điền. Đăng ký cư trú miễn phí và rất quan trọng — không có giấy đăng ký cư trú (Meldebescheinigung), bạn không thể mở tài khoản ngân hàng, ký hợp đồng điện thoại hay xin trợ cấp xã hội. Với người nước ngoài, Sở Ngoại kiều (Ausländerbehörde) cũng rất quan trọng — nơi đó bạn nộp đơn xin giấy phép cư trú và gia hạn visa."
      },
      {
        type: "vocabulary",
        titleDe: "Behörden und Ämter",
        titleVi: "Các cơ quan hành chính",
        words: [
          { de: "Behörde", vi: "cơ quan nhà nước", article: "die" },
          { de: "Amt", vi: "cơ quan / sở", article: "das" },
          { de: "Bürgeramt", vi: "văn phòng công dân", article: "das" },
          { de: "Einwohnermeldeamt", vi: "sở đăng ký cư trú", article: "das" },
          { de: "Ausländerbehörde", vi: "sở ngoại kiều", article: "die" },
          { de: "Finanzamt", vi: "sở thuế", article: "das" },
          { de: "Standesamt", vi: "văn phòng hộ tịch", article: "das" },
          { de: "Arbeitsamt / Agentur für Arbeit", vi: "cơ quan việc làm", article: "das / die" },
          { de: "Termin", vi: "cuộc hẹn", article: "der" },
          { de: "Wartezeit", vi: "thời gian chờ", article: "die" },
          { de: "Sachbearbeiter / Sachbearbeiterin", vi: "nhân viên phụ trách hồ sơ", article: "der / die" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Wichtige Dokumente und Formulare",
        titleVi: "Giấy tờ và mẫu đơn quan trọng",
        words: [
          { de: "Anmeldung", vi: "đăng ký cư trú", article: "die" },
          { de: "Abmeldung", vi: "hủy đăng ký cư trú", article: "die" },
          { de: "Meldebescheinigung", vi: "giấy xác nhận đăng ký cư trú", article: "die" },
          { de: "Aufenthaltserlaubnis", vi: "giấy phép cư trú", article: "die" },
          { de: "Aufenthaltsgenehmigung", vi: "giấy phép lưu trú", article: "die" },
          { de: "Antrag", vi: "đơn đăng ký / yêu cầu", article: "der" },
          { de: "Formular", vi: "mẫu đơn", article: "das" },
          { de: "Bescheinigung", vi: "giấy chứng nhận", article: "die" },
          { de: "Wohnungsgeberbestätigung", vi: "xác nhận chỗ ở từ chủ nhà", article: "die" },
          { de: "Personalausweis", vi: "chứng minh nhân dân (Đức)", article: "der" },
          { de: "Reisepass", vi: "hộ chiếu", article: "der" },
          { de: "Geburtsurkunde", vi: "giấy khai sinh", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Formelle Sprache bei Behörden",
        titleVi: "Ngôn ngữ trang trọng khi giao tiếp với cơ quan",
        rule: "Bei Behörden benutzt man formelle Sprache: 'Ich möchte einen Antrag stellen.' (nộp đơn) / 'Ich möchte mich anmelden/abmelden.' (đăng ký / hủy đăng ký) / 'Welche Unterlagen brauche ich?' (cần giấy tờ gì?) / 'Ich habe einen Termin am ...' (tôi có hẹn vào...) / 'Könnten Sie mir bitte helfen?' (Anh/chị có thể giúp tôi không?) / 'Wo muss ich unterschreiben?' (Tôi ký ở đâu?). In Briefen: 'Sehr geehrte Damen und Herren' (Thưa quý ông bà) / 'Mit freundlichen Grüßen' (Trân trọng).",
        ruleVi: "Khi giao tiếp với cơ quan, dùng ngôn ngữ trang trọng: 'Ich möchte einen Antrag stellen.' (Tôi muốn nộp đơn.) / 'Ich möchte mich anmelden/abmelden.' (Tôi muốn đăng ký / hủy đăng ký cư trú.) / 'Welche Unterlagen brauche ich?' (Tôi cần giấy tờ gì?) / 'Ich habe einen Termin am ...' (Tôi có hẹn vào ngày...) / 'Könnten Sie mir bitte helfen?' (Anh/chị có thể giúp tôi không?) / 'Wo muss ich unterschreiben?' (Tôi ký ở đâu?). Trong thư: 'Sehr geehrte Damen und Herren' (Thưa quý ông bà) / 'Mit freundlichen Grüßen' (Trân trọng).",
        examples: [
          { de: "Guten Tag, ich möchte mich anmelden. Ich bin gerade nach Berlin gezogen.", vi: "Xin chào, tôi muốn đăng ký cư trú. Tôi vừa chuyển đến Berlin." },
          { de: "Welche Unterlagen brauche ich für die Aufenthaltserlaubnis?", vi: "Tôi cần giấy tờ gì để xin giấy phép cư trú?" },
          { de: "Könnten Sie mir bitte sagen, wo ich das Formular abgeben muss?", vi: "Anh/chị có thể cho tôi biết nộp mẫu đơn ở đâu không?" },
          { de: "Ich habe einen Termin am 15. März um 10 Uhr.", vi: "Tôi có hẹn vào ngày 15 tháng 3 lúc 10 giờ." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Beim Bürgeramt — Anmeldung",
        titleVi: "Ở văn phòng công dân — Đăng ký cư trú",
        lines: [
          { speaker: "Lan", de: "Guten Tag, ich möchte mich anmelden. Ich bin vor einer Woche nach München gezogen.", vi: "Xin chào, tôi muốn đăng ký cư trú. Tôi đã chuyển đến München cách đây một tuần." },
          { speaker: "Beamter", de: "Haben Sie einen Termin?", vi: "Chị có hẹn trước không?" },
          { speaker: "Lan", de: "Ja, um 9:30 Uhr. Hier ist meine Terminbestätigung.", vi: "Vâng, lúc 9:30. Đây là xác nhận cuộc hẹn của tôi." },
          { speaker: "Beamter", de: "Gut. Haben Sie alle Unterlagen dabei? Ich brauche Ihren Reisepass und die Wohnungsgeberbestätigung.", vi: "Tốt. Chị có mang đầy đủ giấy tờ không? Tôi cần hộ chiếu và giấy xác nhận chỗ ở." },
          { speaker: "Lan", de: "Ja, hier bitte. Und hier ist auch das ausgefüllte Anmeldeformular.", vi: "Vâng, đây ạ. Và đây là mẫu đăng ký đã điền." },
          { speaker: "Beamter", de: "Alles in Ordnung. Bitte unterschreiben Sie hier. Sie bekommen die Meldebescheinigung per Post in etwa zwei Wochen.", vi: "Mọi thứ ổn cả. Xin ký vào đây. Chị sẽ nhận giấy xác nhận đăng ký cư trú qua bưu điện trong khoảng hai tuần." },
          { speaker: "Lan", de: "Vielen Dank! Brauche ich die Meldebescheinigung auch für die Ausländerbehörde?", vi: "Cảm ơn nhiều! Tôi có cần giấy đăng ký cư trú cho Sở Ngoại kiều không?" },
          { speaker: "Beamter", de: "Ja, unbedingt. Die brauchen Sie auch für Ihr Bankkonto.", vi: "Có, nhất định phải có. Chị cũng cần nó để mở tài khoản ngân hàng." }
        ]
      },
      {
        type: "practice",
        titleDe: "Rollenspiel: Beim Amt",
        titleVi: "Đóng vai: Ở cơ quan hành chính",
        instruction: "Spielen Sie ein Gespräch beim Bürgeramt. Person A ist ein/e Sachbearbeiter/in, Person B ist ein/e Ausländer/in, der/die sich anmelden möchte. Benutzen Sie formelle Sprache und die gelernten Redemittel: Ich möchte ..., Welche Unterlagen ..., Könnten Sie ..., Wo muss ich ...",
        instructionVi: "Hãy đóng vai một cuộc trò chuyện ở văn phòng công dân. Người A là nhân viên, Người B là người nước ngoài muốn đăng ký cư trú. Sử dụng ngôn ngữ trang trọng và các mẫu câu đã học: Ich möchte ..., Welche Unterlagen ..., Könnten Sie ..., Wo muss ich ..."
      }
    ]
  },

  // --- Chapter 8, Lesson 2: Mietrecht & Verträge ---
  {
    id: "b1-ch8-l2",
    chapterId: 8,
    lessonNumber: 2,
    title: "Mietrecht & Verträge",
    titleVi: "Luật thuê nhà & Hợp đồng",
    type: "Einführung",
    objectives: [
      "Hiểu các thuật ngữ quan trọng trong hợp đồng thuê nhà",
      "Nắm được quyền và nghĩa vụ cơ bản của người thuê nhà ở Đức",
      "Đọc hiểu một hợp đồng thuê nhà đơn giản",
      "Viết thư phản ánh vấn đề với chủ nhà"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Mietrecht in Deutschland",
        titleVi: "Luật thuê nhà ở Đức",
        textDe: "Das Mietrecht in Deutschland schützt Mieter sehr stark. Ein Mietvertrag kann befristet oder unbefristet sein. Bei einem unbefristeten Vertrag kann der Vermieter nur unter bestimmten Bedingungen kündigen (z.B. Eigenbedarf). Die Kündigungsfrist beträgt in der Regel drei Monate. Vor dem Einzug muss man oft eine Kaution zahlen — maximal drei Monatsmieten (Kaltmiete). Die Kaution muss der Vermieter auf einem separaten Konto anlegen. Wichtig: In Deutschland unterscheidet man zwischen Kaltmiete (nur die Miete) und Warmmiete (Miete plus Nebenkosten wie Heizung, Wasser, Müllabfuhr). Wenn die Wohnung Mängel hat, muss man den Vermieter schriftlich informieren — am besten per Einschreiben.",
        textVi: "Luật thuê nhà ở Đức bảo vệ người thuê rất mạnh. Hợp đồng thuê có thể có thời hạn (befristet) hoặc vô thời hạn (unbefristet). Với hợp đồng vô thời hạn, chủ nhà chỉ có thể hủy trong những điều kiện nhất định (ví dụ: cần dùng cho bản thân — Eigenbedarf). Thời hạn thông báo hủy thường là ba tháng. Trước khi dọn vào, thường phải trả tiền đặt cọc (Kaution) — tối đa ba tháng tiền thuê lạnh. Chủ nhà phải gửi tiền cọc vào tài khoản riêng. Quan trọng: Ở Đức phân biệt Kaltmiete (chỉ tiền thuê) và Warmmiete (tiền thuê cộng phí phụ như sưởi, nước, rác). Nếu nhà có lỗi, bạn phải thông báo cho chủ nhà bằng văn bản — tốt nhất bằng thư bảo đảm (Einschreiben)."
      },
      {
        type: "vocabulary",
        titleDe: "Mietvertrag und Wohnen",
        titleVi: "Hợp đồng thuê và nhà ở",
        words: [
          { de: "Mietvertrag", vi: "hợp đồng thuê nhà", article: "der" },
          { de: "Mieter / Mieterin", vi: "người thuê", article: "der / die" },
          { de: "Vermieter / Vermieterin", vi: "chủ nhà (cho thuê)", article: "der / die" },
          { de: "Kaltmiete", vi: "tiền thuê lạnh (chưa gồm phí phụ)", article: "die" },
          { de: "Warmmiete", vi: "tiền thuê nóng (gồm phí phụ)", article: "die" },
          { de: "Nebenkosten", vi: "phí phụ (nước, sưởi, rác...)", article: "die (Pl.)" },
          { de: "Kaution", vi: "tiền đặt cọc", article: "die" },
          { de: "Kündigungsfrist", vi: "thời hạn thông báo hủy hợp đồng", article: "die" },
          { de: "Eigenbedarf", vi: "nhu cầu sử dụng cho bản thân", article: "der" },
          { de: "Übergabeprotokoll", vi: "biên bản bàn giao nhà", article: "das" },
          { de: "Mangel / Mängel", vi: "lỗi / khuyết điểm", article: "der / die (Pl.)" },
          { de: "Mieterhöhung", vi: "tăng tiền thuê", article: "die" },
          { de: "befristet", vi: "có thời hạn" },
          { de: "unbefristet", vi: "vô thời hạn" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Einen formellen Brief schreiben — Mängelanzeige",
        titleVi: "Viết thư trang trọng — Thông báo lỗi nhà",
        rule: "Formeller Brief an den Vermieter: Absender (người gửi) oben links, Empfänger (người nhận) darunter, Datum rechts, Betreff (chủ đề), Anrede: 'Sehr geehrte/r Frau/Herr ...', Hauptteil: Problem beschreiben + Frist setzen, Schluss: 'Mit freundlichen Grüßen' + Unterschrift. Wichtige Formulierungen: 'Hiermit möchte ich Sie darauf hinweisen, dass ...' / 'Ich bitte Sie, ... bis zum [Datum] zu beheben.' / 'Sollte das Problem nicht behoben werden, behalte ich mir vor, die Miete zu mindern.'",
        ruleVi: "Thư trang trọng gửi chủ nhà: Người gửi (Absender) ở trên bên trái, Người nhận (Empfänger) bên dưới, Ngày tháng bên phải, Chủ đề (Betreff), Lời chào: 'Sehr geehrte/r Frau/Herr ...', Phần chính: Mô tả vấn đề + đặt thời hạn, Kết thúc: 'Mit freundlichen Grüßen' + chữ ký. Các cụm từ quan trọng: 'Hiermit möchte ich Sie darauf hinweisen, dass ...' (Qua đây tôi muốn thông báo rằng...) / 'Ich bitte Sie, ... bis zum [Datum] zu beheben.' (Tôi yêu cầu anh/chị sửa... trước ngày...) / 'Sollte das Problem nicht behoben werden, behalte ich mir vor, die Miete zu mindern.' (Nếu vấn đề không được khắc phục, tôi giữ quyền giảm tiền thuê.)",
        examples: [
          { de: "Sehr geehrter Herr Müller, hiermit möchte ich Sie darauf hinweisen, dass die Heizung in meiner Wohnung seit dem 5. Januar nicht funktioniert.", vi: "Thưa ông Müller, qua đây tôi muốn thông báo rằng hệ thống sưởi trong căn hộ của tôi không hoạt động từ ngày 5 tháng 1." },
          { de: "Ich bitte Sie, den Mangel bis zum 20. Januar zu beheben.", vi: "Tôi yêu cầu ông khắc phục lỗi trước ngày 20 tháng 1." },
          { de: "Sollte das Problem nicht behoben werden, behalte ich mir vor, die Miete zu mindern.", vi: "Nếu vấn đề không được khắc phục, tôi giữ quyền giảm tiền thuê." },
          { de: "Mit freundlichen Grüßen, Nguyen Thi Lan", vi: "Trân trọng, Nguyễn Thị Lan" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Probleme mit der Wohnung",
        titleVi: "Vấn đề với căn hộ",
        lines: [
          { speaker: "Lan", de: "Herr Schmidt, ich muss Ihnen leider mitteilen, dass es ein Problem mit der Heizung gibt.", vi: "Ông Schmidt, tiếc là tôi phải thông báo rằng có vấn đề với hệ thống sưởi." },
          { speaker: "Vermieter", de: "Was genau ist das Problem?", vi: "Cụ thể vấn đề là gì?" },
          { speaker: "Lan", de: "Die Heizung im Schlafzimmer funktioniert seit letzter Woche nicht mehr. Es ist sehr kalt.", vi: "Bộ sưởi trong phòng ngủ không hoạt động từ tuần trước. Rất lạnh." },
          { speaker: "Vermieter", de: "Das tut mir leid. Ich schicke morgen einen Handwerker vorbei.", vi: "Tôi xin lỗi. Ngày mai tôi sẽ gửi thợ đến." },
          { speaker: "Lan", de: "Vielen Dank. Könnten Sie mir bitte eine schriftliche Bestätigung schicken?", vi: "Cảm ơn nhiều. Anh có thể gửi cho tôi xác nhận bằng văn bản không?" },
          { speaker: "Vermieter", de: "Natürlich, ich schicke Ihnen eine E-Mail.", vi: "Tất nhiên, tôi sẽ gửi email cho chị." },
          { speaker: "Lan", de: "Gut. Und falls es länger dauert — laut Mietrecht habe ich das Recht auf Mietminderung, wenn die Heizung im Winter nicht funktioniert.", vi: "Tốt. Và nếu lâu hơn — theo luật thuê nhà, tôi có quyền giảm tiền thuê khi hệ thống sưởi không hoạt động vào mùa đông." },
          { speaker: "Vermieter", de: "Keine Sorge, das wird schnell repariert.", vi: "Đừng lo, sẽ được sửa nhanh thôi." }
        ]
      },
      {
        type: "practice",
        titleDe: "Mängelanzeige schreiben",
        titleVi: "Viết thư thông báo lỗi",
        instruction: "Schreiben Sie einen formellen Brief an Ihren Vermieter. Situation: In Ihrer Wohnung gibt es Schimmel (nấm mốc) im Badezimmer. Beschreiben Sie das Problem, setzen Sie eine Frist und weisen Sie auf Ihre Rechte als Mieter hin. Benutzen Sie: Sehr geehrte/r ..., hiermit möchte ich ..., Ich bitte Sie ..., Sollte ... nicht ..., Mit freundlichen Grüßen.",
        instructionVi: "Viết một lá thư trang trọng cho chủ nhà. Tình huống: Căn hộ của bạn có nấm mốc (Schimmel) trong phòng tắm. Mô tả vấn đề, đặt thời hạn và nhắc đến quyền lợi của bạn với tư cách người thuê. Sử dụng: Sehr geehrte/r ..., hiermit möchte ich ..., Ich bitte Sie ..., Sollte ... nicht ..., Mit freundlichen Grüßen."
      }
    ]
  },

  // --- Chapter 8, Lesson 3: Versicherungen ---
  {
    id: "b1-ch8-l3",
    chapterId: 8,
    lessonNumber: 3,
    title: "Versicherungen",
    titleVi: "Bảo hiểm",
    type: "Einführung",
    objectives: [
      "Nắm được các loại bảo hiểm quan trọng ở Đức",
      "Hiểu hệ thống bảo hiểm y tế (bắt buộc và tư nhân)",
      "Sử dụng từ vựng về bảo hiểm và hợp đồng",
      "Hiểu và so sánh các gói bảo hiểm"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das Versicherungssystem in Deutschland",
        titleVi: "Hệ thống bảo hiểm ở Đức",
        textDe: "In Deutschland gibt es viele Versicherungen. Einige sind Pflichtversicherungen (bắt buộc), andere sind freiwillig. Die wichtigste Pflichtversicherung ist die Krankenversicherung — jeder Mensch in Deutschland muss krankenversichert sein. Es gibt die gesetzliche Krankenversicherung (GKV) und die private Krankenversicherung (PKV). Die meisten Menschen sind gesetzlich versichert. Die Haftpflichtversicherung ist keine Pflicht, aber fast jeder hat eine — sie zahlt, wenn man aus Versehen etwas kaputt macht oder jemanden verletzt. Als Mieter ist eine Hausratversicherung sinnvoll — sie schützt Möbel und Elektronik bei Einbruch, Feuer oder Wasserschaden. Für Autobesitzer ist die Kfz-Versicherung Pflicht.",
        textVi: "Ở Đức có nhiều loại bảo hiểm. Một số là bảo hiểm bắt buộc (Pflichtversicherung), một số là tự nguyện. Bảo hiểm bắt buộc quan trọng nhất là bảo hiểm y tế (Krankenversicherung) — mọi người ở Đức đều phải có bảo hiểm y tế. Có bảo hiểm y tế theo luật định (GKV — gesetzliche Krankenversicherung) và bảo hiểm y tế tư nhân (PKV — private Krankenversicherung). Phần lớn người dân có bảo hiểm theo luật định. Bảo hiểm trách nhiệm dân sự (Haftpflichtversicherung) không bắt buộc, nhưng hầu hết mọi người đều có — nó chi trả khi bạn vô tình làm hỏng đồ hoặc gây thương tích cho người khác. Người thuê nhà nên có bảo hiểm đồ gia dụng (Hausratversicherung) — bảo vệ nội thất và thiết bị điện tử khi bị trộm, cháy hoặc ngập nước. Chủ xe ô tô bắt buộc phải có bảo hiểm xe (Kfz-Versicherung)."
      },
      {
        type: "vocabulary",
        titleDe: "Versicherungsbegriffe",
        titleVi: "Thuật ngữ bảo hiểm",
        words: [
          { de: "Versicherung", vi: "bảo hiểm", article: "die" },
          { de: "Krankenversicherung", vi: "bảo hiểm y tế", article: "die" },
          { de: "Haftpflichtversicherung", vi: "bảo hiểm trách nhiệm dân sự", article: "die" },
          { de: "Hausratversicherung", vi: "bảo hiểm đồ gia dụng", article: "die" },
          { de: "Kfz-Versicherung", vi: "bảo hiểm xe cơ giới", article: "die" },
          { de: "Rentenversicherung", vi: "bảo hiểm hưu trí", article: "die" },
          { de: "Arbeitslosenversicherung", vi: "bảo hiểm thất nghiệp", article: "die" },
          { de: "Pflichtversicherung", vi: "bảo hiểm bắt buộc", article: "die" },
          { de: "Beitrag", vi: "phí đóng (hàng tháng)", article: "der" },
          { de: "Leistung", vi: "quyền lợi / dịch vụ bảo hiểm", article: "die" },
          { de: "Selbstbeteiligung", vi: "phần tự trả", article: "die" },
          { de: "Schadensfall", vi: "trường hợp thiệt hại", article: "der" },
          { de: "Versicherungsnehmer", vi: "người mua bảo hiểm", article: "der" },
          { de: "Versicherungsschein", vi: "giấy chứng nhận bảo hiểm", article: "der" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Vergleiche und Empfehlungen — Komparativ und Superlativ",
        titleVi: "So sánh và khuyến nghị — So sánh hơn và so sánh nhất",
        rule: "Um Versicherungen zu vergleichen, brauchen wir Komparativ und Superlativ: günstig → günstiger → am günstigsten / teuer → teurer → am teuersten. Redemittel: 'Die GKV ist günstiger als die PKV.' / 'Diese Versicherung bietet die besten Leistungen.' / 'Ich würde Ihnen empfehlen, eine ... abzuschließen.' / 'Es lohnt sich, verschiedene Angebote zu vergleichen.' / 'Je höher der Beitrag, desto besser die Leistungen.' (càng ... càng ...).",
        ruleVi: "Để so sánh bảo hiểm, chúng ta cần so sánh hơn (Komparativ) và so sánh nhất (Superlativ): günstig (rẻ) → günstiger (rẻ hơn) → am günstigsten (rẻ nhất) / teuer (đắt) → teurer (đắt hơn) → am teuersten (đắt nhất). Mẫu câu: 'Die GKV ist günstiger als die PKV.' (BH theo luật rẻ hơn BH tư nhân.) / 'Diese Versicherung bietet die besten Leistungen.' (BH này cung cấp dịch vụ tốt nhất.) / 'Ich würde Ihnen empfehlen, eine ... abzuschließen.' (Tôi khuyên bạn nên mua BH...) / 'Je höher der Beitrag, desto besser die Leistungen.' (Phí càng cao, quyền lợi càng tốt.)",
        examples: [
          { de: "Die gesetzliche Krankenversicherung ist günstiger als die private.", vi: "Bảo hiểm y tế theo luật rẻ hơn bảo hiểm tư nhân." },
          { de: "Diese Haftpflichtversicherung bietet die besten Leistungen zum niedrigsten Preis.", vi: "Bảo hiểm trách nhiệm dân sự này cung cấp quyền lợi tốt nhất với giá thấp nhất." },
          { de: "Ich würde Ihnen empfehlen, eine Haftpflichtversicherung abzuschließen.", vi: "Tôi khuyên bạn nên mua bảo hiểm trách nhiệm dân sự." },
          { de: "Je höher die Selbstbeteiligung, desto niedriger der monatliche Beitrag.", vi: "Phần tự trả càng cao, phí hàng tháng càng thấp." },
          { de: "Es lohnt sich, verschiedene Angebote zu vergleichen, bevor man einen Vertrag unterschreibt.", vi: "Đáng để so sánh các gói khác nhau trước khi ký hợp đồng." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Beratung bei einem Versicherungsmakler",
        titleVi: "Tư vấn với nhân viên bảo hiểm",
        lines: [
          { speaker: "Makler", de: "Guten Tag! Wie kann ich Ihnen helfen?", vi: "Xin chào! Tôi có thể giúp gì cho bạn?" },
          { speaker: "Lan", de: "Ich bin Studentin aus Vietnam und lebe seit einem Jahr in Deutschland. Ich möchte mich über Versicherungen informieren.", vi: "Tôi là sinh viên từ Việt Nam và sống ở Đức được một năm. Tôi muốn tìm hiểu về bảo hiểm." },
          { speaker: "Makler", de: "Haben Sie schon eine Krankenversicherung?", vi: "Bạn đã có bảo hiểm y tế chưa?" },
          { speaker: "Lan", de: "Ja, ich bin gesetzlich versichert bei der TK.", vi: "Rồi, tôi có bảo hiểm theo luật định ở TK." },
          { speaker: "Makler", de: "Sehr gut. Ich würde Ihnen außerdem eine Haftpflichtversicherung empfehlen. Die kostet nur etwa 5 Euro im Monat.", vi: "Rất tốt. Tôi cũng khuyên bạn nên mua bảo hiểm trách nhiệm dân sự. Chỉ khoảng 5 Euro mỗi tháng." },
          { speaker: "Lan", de: "Warum brauche ich die?", vi: "Tại sao tôi cần bảo hiểm đó?" },
          { speaker: "Makler", de: "Wenn Sie zum Beispiel aus Versehen den Laptop eines Freundes kaputt machen, zahlt die Haftpflichtversicherung den Schaden.", vi: "Ví dụ, nếu bạn vô tình làm hỏng laptop của bạn bè, bảo hiểm trách nhiệm dân sự sẽ chi trả thiệt hại." },
          { speaker: "Lan", de: "Das klingt sinnvoll. Gibt es Unterschiede zwischen den Anbietern?", vi: "Nghe hợp lý. Có khác biệt gì giữa các nhà cung cấp không?" },
          { speaker: "Makler", de: "Ja, je nach Anbieter unterscheiden sich die Leistungen und die Selbstbeteiligung. Ich empfehle Ihnen, auf Check24 verschiedene Angebote zu vergleichen.", vi: "Có, tùy nhà cung cấp mà quyền lợi và phần tự trả khác nhau. Tôi khuyên bạn nên so sánh các gói trên Check24." }
        ]
      },
      {
        type: "practice",
        titleDe: "Versicherungsvergleich",
        titleVi: "So sánh bảo hiểm",
        instruction: "Vergleichen Sie zwei Versicherungsangebote und schreiben Sie einen kurzen Text (100 Wörter). Angebot A: Haftpflichtversicherung, 4 Euro/Monat, Selbstbeteiligung 150 Euro, Deckungssumme 5 Mio. Euro. Angebot B: 7 Euro/Monat, keine Selbstbeteiligung, Deckungssumme 10 Mio. Euro. Benutzen Sie: Komparativ/Superlativ, 'je ... desto ...', Empfehlungen.",
        instructionVi: "So sánh hai gói bảo hiểm và viết một đoạn văn ngắn (100 từ). Gói A: Bảo hiểm trách nhiệm, 4 Euro/tháng, tự trả 150 Euro, bảo hiểm tối đa 5 triệu Euro. Gói B: 7 Euro/tháng, không tự trả, bảo hiểm tối đa 10 triệu Euro. Sử dụng: so sánh hơn/nhất, 'je ... desto ...', lời khuyến nghị."
      }
    ]
  },

  // --- Chapter 8, Lesson 4: Nominalisierung & Verbalisierung ---
  {
    id: "b1-ch8-l4",
    chapterId: 8,
    lessonNumber: 4,
    title: "Nominalisierung & Verbalisierung",
    titleVi: "Danh từ hóa & Động từ hóa",
    type: "Grammatik",
    objectives: [
      "Hiểu cách chuyển động từ/tính từ thành danh từ (Nominalisierung)",
      "Hiểu cách chuyển danh từ thành cấu trúc động từ (Verbalisierung)",
      "Nhận biết Nominalisierung trong văn bản hành chính và pháp lý",
      "Áp dụng Nominalisierung và Verbalisierung trong văn viết trang trọng"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Was ist Nominalisierung?",
        titleVi: "Danh từ hóa là gì?",
        textDe: "Nominalisierung bedeutet, dass man ein Verb oder ein Adjektiv in ein Nomen (Substantiv) umwandelt. Das ist sehr typisch für die deutsche Schriftsprache, besonders in offiziellen Texten, Verträgen und Behördenbriefen. Statt 'Bitte melden Sie sich an' schreibt man oft 'Die Anmeldung ist erforderlich.' Statt 'Er ist krank' sagt man 'Seine Krankheit dauert lange.' Verbalisierung ist das Gegenteil: Man wandelt ein Nomen zurück in ein Verb, um den Text einfacher und lebendiger zu machen. In der Alltagssprache benutzt man eher Verben, in der Behördensprache eher Nomen.",
        textVi: "Danh từ hóa (Nominalisierung) có nghĩa là chuyển một động từ hoặc tính từ thành danh từ. Điều này rất đặc trưng cho tiếng Đức viết, đặc biệt trong văn bản chính thức, hợp đồng và thư từ cơ quan. Thay vì 'Bitte melden Sie sich an' (Xin hãy đăng ký), người ta thường viết 'Die Anmeldung ist erforderlich.' (Việc đăng ký là cần thiết.) Thay vì 'Er ist krank' (Anh ấy ốm), người ta nói 'Seine Krankheit dauert lange.' (Bệnh của anh ấy kéo dài lâu.) Động từ hóa (Verbalisierung) là ngược lại: chuyển danh từ thành cấu trúc động từ, để văn bản đơn giản và sống động hơn. Trong giao tiếp hàng ngày, người ta dùng động từ nhiều hơn; trong ngôn ngữ hành chính, dùng danh từ nhiều hơn."
      },
      {
        type: "grammar",
        titleDe: "Nominalisierung von Verben",
        titleVi: "Danh từ hóa từ động từ",
        rule: "1) Infinitiv als Nomen: Das Verb wird großgeschrieben und bekommt den Artikel 'das'. lesen → das Lesen, lernen → das Lernen, wandern → das Wandern. 2) Mit Suffix -ung: anmelden → die Anmeldung, bewerben → die Bewerbung, kündigen → die Kündigung, versichern → die Versicherung, überweisen → die Überweisung. 3) Andere Formen: helfen → die Hilfe, bitten → die Bitte, antworten → die Antwort, anfangen → der Anfang. Merke: Nominalisierte Verben sind immer Nomen und werden großgeschrieben!",
        ruleVi: "1) Nguyên mẫu dùng làm danh từ: Động từ viết hoa và nhận mạo từ 'das'. lesen → das Lesen (việc đọc), lernen → das Lernen (việc học), wandern → das Wandern (việc đi bộ). 2) Với hậu tố -ung: anmelden → die Anmeldung (việc đăng ký), bewerben → die Bewerbung (đơn xin việc), kündigen → die Kündigung (việc hủy hợp đồng), versichern → die Versicherung (bảo hiểm), überweisen → die Überweisung (chuyển khoản). 3) Các dạng khác: helfen → die Hilfe (sự giúp đỡ), bitten → die Bitte (lời yêu cầu), antworten → die Antwort (câu trả lời), anfangen → der Anfang (sự bắt đầu). Lưu ý: Danh từ hóa luôn viết hoa!",
        examples: [
          { de: "Das Lesen von Verträgen ist wichtig. → Man sollte Verträge lesen.", vi: "Việc đọc hợp đồng là quan trọng. → Nên đọc hợp đồng." },
          { de: "Die Anmeldung muss innerhalb von 14 Tagen erfolgen. → Man muss sich innerhalb von 14 Tagen anmelden.", vi: "Việc đăng ký phải được thực hiện trong vòng 14 ngày. → Phải đăng ký trong vòng 14 ngày." },
          { de: "Die Kündigung des Vertrags ist schriftlich einzureichen. → Man muss den Vertrag schriftlich kündigen.", vi: "Việc hủy hợp đồng phải nộp bằng văn bản. → Phải hủy hợp đồng bằng văn bản." },
          { de: "Nach der Überweisung erhalten Sie eine Bestätigung. → Nachdem Sie überwiesen haben, erhalten Sie eine Bestätigung.", vi: "Sau khi chuyển khoản, bạn sẽ nhận được xác nhận." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nominalisierung von Adjektiven",
        titleVi: "Danh từ hóa từ tính từ",
        rule: "Adjektive können auch nominalisiert werden: 1) Mit Suffix -heit/-keit/-igkeit: krank → die Krankheit, sicher → die Sicherheit, möglich → die Möglichkeit, zufrieden → die Zufriedenheit, arbeitslos → die Arbeitslosigkeit, abhängig → die Abhängigkeit. 2) Adjektive als Nomen für Personen: krank → der/die Kranke, arbeitslos → der/die Arbeitslose, deutsch → der/die Deutsche, erwachsen → der/die Erwachsene. Diese werden wie Adjektive dekliniert!",
        ruleVi: "Tính từ cũng có thể danh từ hóa: 1) Với hậu tố -heit/-keit/-igkeit: krank (ốm) → die Krankheit (bệnh tật), sicher (an toàn) → die Sicherheit (sự an toàn), möglich (có thể) → die Möglichkeit (khả năng), zufrieden (hài lòng) → die Zufriedenheit (sự hài lòng), arbeitslos (thất nghiệp) → die Arbeitslosigkeit (tình trạng thất nghiệp). 2) Tính từ làm danh từ chỉ người: krank → der/die Kranke (bệnh nhân), arbeitslos → der/die Arbeitslose (người thất nghiệp), deutsch → der/die Deutsche (người Đức). Những danh từ này được biến cách như tính từ!",
        examples: [
          { de: "Die Krankheit des Mieters ist kein Kündigungsgrund. → Wenn der Mieter krank ist, kann man ihm nicht kündigen.", vi: "Bệnh của người thuê không phải là lý do hủy hợp đồng. → Nếu người thuê bị bệnh, không thể hủy hợp đồng." },
          { de: "Die Sicherheit der Wohnung muss gewährleistet sein.", vi: "Sự an toàn của căn hộ phải được đảm bảo." },
          { de: "Die Arbeitslosigkeit in Deutschland liegt bei etwa 5 Prozent.", vi: "Tỷ lệ thất nghiệp ở Đức khoảng 5 phần trăm." },
          { de: "Der Kranke muss ein ärztliches Attest vorlegen.", vi: "Bệnh nhân phải xuất trình giấy chứng nhận bác sĩ." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Verbalisierung — vom Nomen zum Verb",
        titleVi: "Động từ hóa — từ danh từ sang động từ",
        rule: "Verbalisierung macht einen Text einfacher und verständlicher. Behördensprache → Alltagssprache: 'Die Bearbeitung Ihres Antrags dauert drei Wochen.' → 'Wir bearbeiten Ihren Antrag in drei Wochen.' / 'Zur Vermeidung von Problemen ...' → 'Um Probleme zu vermeiden, ...' / 'Bei Nichteinhaltung der Frist ...' → 'Wenn Sie die Frist nicht einhalten, ...' Tipp: Wenn ein Text zu viele Nominalisierungen hat, klingt er kompliziert. Verbalisierung hilft!",
        ruleVi: "Động từ hóa làm văn bản đơn giản và dễ hiểu hơn. Ngôn ngữ hành chính → Ngôn ngữ thường ngày: 'Die Bearbeitung Ihres Antrags dauert drei Wochen.' (Việc xử lý đơn của bạn mất ba tuần.) → 'Wir bearbeiten Ihren Antrag in drei Wochen.' (Chúng tôi xử lý đơn của bạn trong ba tuần.) / 'Zur Vermeidung von Problemen ...' (Để tránh vấn đề...) → 'Um Probleme zu vermeiden, ...' (Để tránh vấn đề...) / 'Bei Nichteinhaltung der Frist ...' (Khi không tuân thủ thời hạn...) → 'Wenn Sie die Frist nicht einhalten, ...' (Nếu bạn không tuân thủ thời hạn...) Mẹo: Nếu văn bản có quá nhiều danh từ hóa, nó sẽ nghe phức tạp. Động từ hóa giúp ích!",
        examples: [
          { de: "Die Bezahlung der Miete erfolgt monatlich. → Man bezahlt die Miete monatlich.", vi: "Việc thanh toán tiền thuê được thực hiện hàng tháng. → Người ta trả tiền thuê hàng tháng." },
          { de: "Zur Verlängerung des Visums wenden Sie sich an die Ausländerbehörde. → Wenn Sie Ihr Visum verlängern möchten, wenden Sie sich an die Ausländerbehörde.", vi: "Để gia hạn visa, xin liên hệ Sở Ngoại kiều. → Nếu bạn muốn gia hạn visa, hãy liên hệ Sở Ngoại kiều." },
          { de: "Bei Beschädigung der Wohnung haftet der Mieter. → Wenn der Mieter die Wohnung beschädigt, muss er dafür haften.", vi: "Khi căn hộ bị hư hại, người thuê chịu trách nhiệm. → Nếu người thuê làm hỏng căn hộ, anh ta phải chịu trách nhiệm." },
          { de: "Die Einreichung der Unterlagen muss fristgerecht erfolgen. → Sie müssen die Unterlagen fristgerecht einreichen.", vi: "Việc nộp giấy tờ phải đúng hạn. → Bạn phải nộp giấy tờ đúng hạn." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Einen Behördenbrief verstehen",
        titleVi: "Hiểu thư từ cơ quan",
        lines: [
          { speaker: "Lan", de: "Minh, ich habe einen Brief von der Ausländerbehörde bekommen, aber ich verstehe ihn nicht ganz.", vi: "Minh, mình nhận được thư từ Sở Ngoại kiều, nhưng không hiểu hết." },
          { speaker: "Minh", de: "Zeig mal. Hier steht: 'Zur Verlängerung Ihrer Aufenthaltserlaubnis ist die Vorlage folgender Unterlagen erforderlich.'", vi: "Cho mình xem. Ở đây ghi: 'Để gia hạn giấy phép cư trú, cần xuất trình các giấy tờ sau.'" },
          { speaker: "Lan", de: "Das ist so kompliziert! Was bedeutet 'Vorlage folgender Unterlagen'?", vi: "Phức tạp quá! 'Vorlage folgender Unterlagen' nghĩa là gì?" },
          { speaker: "Minh", de: "Das ist Nominalisierung. Einfacher gesagt: Du musst bestimmte Dokumente mitbringen und vorlegen.", vi: "Đó là danh từ hóa. Nói đơn giản: Bạn phải mang theo và xuất trình một số giấy tờ." },
          { speaker: "Lan", de: "Aha! Und was bedeutet 'Bei Nichteinhaltung der Frist erlischt Ihre Aufenthaltserlaubnis'?", vi: "À! Và 'Bei Nichteinhaltung der Frist erlischt Ihre Aufenthaltserlaubnis' nghĩa là gì?" },
          { speaker: "Minh", de: "Das heißt: Wenn du die Frist nicht einhältst, verlierst du deine Aufenthaltserlaubnis. Also beeil dich!", vi: "Nghĩa là: Nếu bạn không tuân thủ thời hạn, bạn sẽ mất giấy phép cư trú. Nhanh lên nhé!" },
          { speaker: "Lan", de: "Danke! Jetzt verstehe ich es. Behördendeutsch ist wie eine eigene Sprache!", vi: "Cảm ơn! Giờ mình hiểu rồi. Tiếng Đức hành chính giống như một ngôn ngữ riêng!" }
        ]
      },
      {
        type: "practice",
        titleDe: "Nominalisierung ↔ Verbalisierung",
        titleVi: "Danh từ hóa ↔ Động từ hóa",
        instruction: "Übung 1 — Nominalisierung: Wandle die Sätze um. a) Man muss den Vertrag kündigen. → Die ___ des Vertrags ... b) Der Mieter muss die Miete bezahlen. → Die ___ der Miete ... c) Sie müssen sich beim Amt anmelden. → Die ___ beim Amt ... Übung 2 — Verbalisierung: Vereinfache die Sätze. a) Die Bearbeitung des Antrags dauert 4 Wochen. → Wir ... b) Zur Vermeidung von Schäden ... → Um ... c) Bei Nichterscheinen zum Termin ... → Wenn Sie ...",
        instructionVi: "Bài tập 1 — Danh từ hóa: Chuyển đổi câu. a) Man muss den Vertrag kündigen. → Die ___ des Vertrags ... b) Der Mieter muss die Miete bezahlen. → Die ___ der Miete ... c) Sie müssen sich beim Amt anmelden. → Die ___ beim Amt ... Bài tập 2 — Động từ hóa: Đơn giản hóa câu. a) Die Bearbeitung des Antrags dauert 4 Wochen. → Wir ... b) Zur Vermeidung von Schäden ... → Um ... c) Bei Nichterscheinen zum Termin ... → Wenn Sie ..."
      }
    ]
  }
];
