// B1 Chapters 9-10: Reisen & Mobilität, Zukunft & Visionen

import type { ContentBlock, Lesson } from "../a1/chapters9_10";

export const b1LessonsCh9_10: Lesson[] = [
  // ============================================================
  // CHAPTER 9: Reisen & Mobilität
  // ============================================================

  // --- Chapter 9, Lesson 1: Reiseplanung & Buchung ---
  {
    id: "b1-ch9-l1",
    chapterId: 9,
    lessonNumber: 1,
    title: "Reiseplanung & Buchung",
    titleVi: "Lập kế hoạch & Đặt chỗ du lịch",
    type: "Einführung",
    objectives: [
      "Có thể lên kế hoạch cho một chuyến du lịch bằng tiếng Đức",
      "Biết cách đặt phòng khách sạn, vé tàu/máy bay qua điện thoại hoặc email",
      "Nắm vững từ vựng chuyên ngành du lịch ở trình độ B1",
      "Viết được email đặt phòng hoặc hỏi thông tin du lịch"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Reiseplanung in Deutschland",
        titleVi: "Lập kế hoạch du lịch ở Đức",
        textDe: "Deutsche planen ihre Reisen oft sehr sorgfältig. Viele buchen ihre Unterkunft und Transportmittel Wochen oder sogar Monate im Voraus. Beliebte Reiseziele der Deutschen sind Spanien, Italien, die Türkei und Österreich. Innerhalb Deutschlands sind die Küsten an Nord- und Ostsee sowie die Alpen sehr beliebt. Für die Buchung nutzt man häufig Online-Portale, aber auch Reisebüros sind noch verbreitet. Bei der Deutschen Bahn kann man mit einer BahnCard Rabatte auf Zugtickets bekommen.",
        textVi: "Người Đức thường lên kế hoạch du lịch rất cẩn thận. Nhiều người đặt chỗ ở và phương tiện di chuyển trước hàng tuần hoặc thậm chí hàng tháng. Các điểm đến yêu thích của người Đức là Tây Ban Nha, Ý, Thổ Nhĩ Kỳ và Áo. Trong nước Đức, bờ biển Bắc và Baltic cũng như dãy Alps rất được ưa chuộng. Để đặt chỗ, người ta thường dùng các cổng thông tin trực tuyến, nhưng các đại lý du lịch vẫn còn phổ biến. Với Deutsche Bahn (Đường sắt Đức), bạn có thể được giảm giá vé tàu khi có BahnCard."
      },
      {
        type: "vocabulary",
        titleDe: "Reiseplanung",
        titleVi: "Lập kế hoạch du lịch",
        words: [
          { de: "Reiseziel", vi: "điểm đến du lịch", article: "das" },
          { de: "Unterkunft", vi: "chỗ ở", article: "die" },
          { de: "Ferienwohnung", vi: "căn hộ nghỉ dưỡng", article: "die" },
          { de: "Jugendherberge", vi: "nhà nghỉ thanh niên", article: "die" },
          { de: "Pension", vi: "nhà trọ nhỏ", article: "die" },
          { de: "Einzelzimmer", vi: "phòng đơn", article: "das" },
          { de: "Doppelzimmer", vi: "phòng đôi", article: "das" },
          { de: "Halbpension", vi: "bán trú (bao gồm bữa sáng và tối)", article: "die" },
          { de: "Vollpension", vi: "nội trú (bao gồm 3 bữa ăn)", article: "die" },
          { de: "Hin- und Rückfahrt", vi: "khứ hồi", article: "die" },
          { de: "Pauschalreise", vi: "du lịch trọn gói", article: "die" },
          { de: "Reiseversicherung", vi: "bảo hiểm du lịch", article: "die" },
          { de: "Buchungsbestätigung", vi: "xác nhận đặt chỗ", article: "die" },
          { de: "Stornierung", vi: "hủy đặt chỗ", article: "die" },
          { de: "Anzahlung", vi: "tiền đặt cọc", article: "die" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Transportmittel",
        titleVi: "Phương tiện giao thông",
        words: [
          { de: "Fernbus", vi: "xe buýt đường dài", article: "der" },
          { de: "ICE (Intercity-Express)", vi: "tàu cao tốc ICE", article: "der" },
          { de: "Regionalzug", vi: "tàu vùng", article: "der" },
          { de: "Direktflug", vi: "chuyến bay thẳng", article: "der" },
          { de: "Zwischenstopp", vi: "điểm dừng trung chuyển", article: "der" },
          { de: "Mietwagen", vi: "xe thuê", article: "der" },
          { de: "Fahrplan", vi: "lịch trình/bảng giờ tàu xe", article: "der" },
          { de: "Gleis", vi: "đường ray/sân ga", article: "das" },
          { de: "Verspätung", vi: "sự chậm trễ", article: "die" },
          { de: "Anschluss", vi: "chuyến nối tiếp", article: "der" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Ein Hotelzimmer buchen",
        titleVi: "Đặt phòng khách sạn",
        lines: [
          { speaker: "Rezeption", de: "Hotel Sonnenhof, guten Tag! Wie kann ich Ihnen helfen?", vi: "Khách sạn Sonnenhof, xin chào! Tôi có thể giúp gì cho quý khách?" },
          { speaker: "Linh", de: "Guten Tag! Ich möchte gern ein Doppelzimmer reservieren, vom 15. bis zum 20. Juli.", vi: "Xin chào! Tôi muốn đặt một phòng đôi, từ ngày 15 đến ngày 20 tháng 7." },
          { speaker: "Rezeption", de: "Einen Moment bitte... Ja, wir hätten noch ein Zimmer mit Balkon und Bergblick frei. Das kostet 89 Euro pro Nacht inklusive Frühstück.", vi: "Xin đợi một chút... Vâng, chúng tôi còn một phòng có ban công và tầm nhìn ra núi. Giá 89 Euro mỗi đêm bao gồm bữa sáng." },
          { speaker: "Linh", de: "Das klingt gut. Gibt es auch die Möglichkeit, Halbpension zu buchen?", vi: "Nghe tốt đấy. Có thể đặt thêm bán trú (bao gồm bữa tối) không ạ?" },
          { speaker: "Rezeption", de: "Ja, natürlich. Mit Halbpension wären es 115 Euro pro Nacht. Die Stornierung ist bis 48 Stunden vor Anreise kostenlos.", vi: "Vâng, tất nhiên. Với bán trú thì giá là 115 Euro mỗi đêm. Hủy miễn phí đến 48 giờ trước ngày đến." },
          { speaker: "Linh", de: "Sehr gut. Dann nehme ich das Zimmer mit Halbpension. Kann ich per Überweisung bezahlen?", vi: "Rất tốt. Vậy tôi lấy phòng với bán trú. Tôi có thể thanh toán bằng chuyển khoản không?" },
          { speaker: "Rezeption", de: "Ja, kein Problem. Ich schicke Ihnen eine Buchungsbestätigung per E-Mail. Darf ich Ihren vollen Namen und Ihre E-Mail-Adresse haben?", vi: "Vâng, không vấn đề gì. Tôi sẽ gửi xác nhận đặt chỗ qua email cho quý khách. Xin cho tôi họ tên đầy đủ và địa chỉ email?" },
          { speaker: "Linh", de: "Linh Nguyen, linh.nguyen@email.de. Vielen Dank für Ihre Hilfe!", vi: "Linh Nguyen, linh.nguyen@email.de. Cảm ơn chị rất nhiều!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Konjunktiv II für höfliche Bitten",
        titleVi: "Konjunktiv II dùng cho yêu cầu lịch sự",
        rule: "Der Konjunktiv II wird oft benutzt, um höfliche Bitten, Wünsche oder Vorschläge auszudrücken. Wichtige Formen: ich hätte (haben), ich wäre (sein), ich würde ... (werden + Infinitiv), ich könnte (können), ich möchte (mögen).",
        ruleVi: "Konjunktiv II (giả định cách II) thường được dùng để diễn đạt yêu cầu lịch sự, mong muốn hoặc đề xuất. Các dạng quan trọng: ich hätte (tôi muốn có), ich wäre (tôi sẽ là), ich würde ... (tôi sẽ + động từ nguyên mẫu), ich könnte (tôi có thể), ich möchte (tôi muốn). Đây là cách nói lịch sự hơn so với dùng thể trực tiếp (Indikativ). Trong tiếng Việt, tương đương với việc thêm 'ạ', 'có thể...được không', 'xin phép'.",
        examples: [
          { de: "Ich hätte gern ein Einzelzimmer.", vi: "Tôi muốn một phòng đơn ạ." },
          { de: "Könnten Sie mir bitte den Fahrplan schicken?", vi: "Chị có thể gửi cho tôi lịch trình được không ạ?" },
          { de: "Wäre es möglich, das Zimmer zu wechseln?", vi: "Liệu có thể đổi phòng được không ạ?" },
          { de: "Würden Sie mir bitte bei der Buchung helfen?", vi: "Anh có thể giúp tôi đặt chỗ được không ạ?" },
          { de: "Ich würde gern einen Fensterplatz reservieren.", vi: "Tôi muốn đặt một chỗ ngồi cạnh cửa sổ ạ." }
        ]
      },
      {
        type: "practice",
        titleDe: "Übung: Eine Reise planen",
        titleVi: "Bài tập: Lên kế hoạch cho một chuyến du lịch",
        instruction: "Schreiben Sie eine E-Mail an ein Hotel. Reservieren Sie ein Zimmer für 3 Nächte. Fragen Sie nach dem Preis, dem Frühstück und den Stornierungsbedingungen. Benutzen Sie den Konjunktiv II für höfliche Bitten.",
        instructionVi: "Viết một email cho khách sạn. Đặt một phòng cho 3 đêm. Hỏi về giá cả, bữa sáng và điều kiện hủy phòng. Sử dụng Konjunktiv II cho các yêu cầu lịch sự."
      }
    ]
  },

  // --- Chapter 9, Lesson 2: Beschwerden & Reklamationen ---
  {
    id: "b1-ch9-l2",
    chapterId: 9,
    lessonNumber: 2,
    title: "Beschwerden & Reklamationen",
    titleVi: "Khiếu nại & Phàn nàn",
    type: "Fertigkeit",
    objectives: [
      "Có thể phàn nàn một cách lịch sự bằng tiếng Đức",
      "Biết cách viết thư/email khiếu nại",
      "Nắm vững cấu trúc ngữ pháp cho việc diễn đạt sự không hài lòng",
      "Hiểu quyền lợi của khách hàng khi đi du lịch ở Đức"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Beschwerden auf Reisen",
        titleVi: "Khiếu nại khi đi du lịch",
        textDe: "Auf Reisen kann es immer mal wieder zu Problemen kommen: Das Hotelzimmer entspricht nicht der Beschreibung, der Flug hat Verspätung, oder der Service ist schlecht. In Deutschland ist es üblich und akzeptiert, sich in solchen Fällen zu beschweren — aber auf eine sachliche und höfliche Art. Man beschreibt zuerst das Problem, erklärt dann, was man erwartet hat, und fordert schließlich eine Lösung. Bei der Bahn hat man zum Beispiel Anspruch auf Entschädigung bei Verspätungen ab 60 Minuten.",
        textVi: "Khi đi du lịch luôn có thể xảy ra vấn đề: phòng khách sạn không đúng mô tả, chuyến bay bị trễ, hoặc dịch vụ kém. Ở Đức, việc khiếu nại trong những trường hợp như vậy là bình thường và được chấp nhận — nhưng phải theo cách khách quan và lịch sự. Người ta mô tả vấn đề trước, sau đó giải thích mình đã kỳ vọng gì, và cuối cùng yêu cầu giải pháp. Với đường sắt, bạn có quyền được bồi thường khi tàu trễ từ 60 phút trở lên."
      },
      {
        type: "vocabulary",
        titleDe: "Beschwerden & Reklamationen",
        titleVi: "Khiếu nại & Phàn nàn",
        words: [
          { de: "Beschwerde", vi: "lời phàn nàn", article: "die" },
          { de: "Reklamation", vi: "khiếu nại (chính thức)", article: "die" },
          { de: "Entschädigung", vi: "bồi thường", article: "die" },
          { de: "Erstattung", vi: "hoàn tiền", article: "die" },
          { de: "Mängel", vi: "khuyết điểm/thiếu sót (số nhiều)", article: "die (Pl.)" },
          { de: "Beanstandung", vi: "sự khiếu nại/phản đối", article: "die" },
          { de: "Kundenservice", vi: "dịch vụ khách hàng", article: "der" },
          { de: "Schadenersatz", vi: "bồi thường thiệt hại", article: "der" },
          { de: "Frist", vi: "thời hạn", article: "die" },
          { de: "Fahrgastrechte", vi: "quyền lợi hành khách", article: "die (Pl.)" },
          { de: "enttäuschend", vi: "đáng thất vọng" },
          { de: "mangelhaft", vi: "thiếu sót/kém chất lượng" },
          { de: "unzumutbar", vi: "không thể chấp nhận được" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Beschwerde im Hotel",
        titleVi: "Phàn nàn tại khách sạn",
        lines: [
          { speaker: "Hoa", de: "Entschuldigung, ich muss mich leider beschweren. Ich habe ein Zimmer mit Meerblick gebucht, aber mein Zimmer geht auf den Parkplatz.", vi: "Xin lỗi, tôi rất tiếc phải phàn nàn. Tôi đã đặt phòng có tầm nhìn ra biển, nhưng phòng tôi nhìn ra bãi đỗ xe." },
          { speaker: "Rezeption", de: "Oh, das tut mir wirklich leid. Lassen Sie mich das überprüfen.", vi: "Ôi, tôi thật sự xin lỗi. Để tôi kiểm tra lại." },
          { speaker: "Hoa", de: "Außerdem funktioniert die Klimaanlage nicht richtig. Es ist sehr warm im Zimmer.", vi: "Ngoài ra, máy lạnh không hoạt động đúng cách. Phòng rất nóng." },
          { speaker: "Rezeption", de: "Das ist natürlich nicht in Ordnung. Ich kann Ihnen ein anderes Zimmer anbieten — im fünften Stock mit Meerblick. Und ich lasse sofort einen Techniker kommen.", vi: "Điều đó tất nhiên không ổn rồi. Tôi có thể đề nghị cho quý khách một phòng khác — ở tầng năm có tầm nhìn ra biển. Và tôi sẽ cho gọi thợ kỹ thuật ngay." },
          { speaker: "Hoa", de: "Wäre es auch möglich, einen Preisnachlass zu bekommen? Ich habe schließlich eine Nacht in einem Zimmer verbracht, das nicht der Buchung entsprach.", vi: "Liệu có thể được giảm giá không ạ? Dù sao tôi cũng đã ở một đêm trong phòng không đúng như đặt." },
          { speaker: "Rezeption", de: "Selbstverständlich. Ich spreche mit dem Manager. Wir können Ihnen 20% Rabatt auf die erste Nacht geben.", vi: "Tất nhiên rồi ạ. Tôi sẽ nói chuyện với quản lý. Chúng tôi có thể giảm 20% cho đêm đầu tiên." },
          { speaker: "Hoa", de: "Das finde ich fair. Vielen Dank für Ihr Verständnis.", vi: "Tôi thấy như vậy là hợp lý. Cảm ơn sự thông cảm của chị." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Redemittel für Beschwerden",
        titleVi: "Các mẫu câu dùng cho khiếu nại",
        rule: "Bei Beschwerden benutzt man höfliche, aber bestimmte Formulierungen. Man beschreibt das Problem sachlich, drückt seine Erwartung aus und fordert eine Lösung. Wichtige Strukturen: 'Ich muss mich leider beschweren, weil...' / 'Leider entspricht... nicht...' / 'Ich hätte gern eine Lösung.' / 'Wäre es möglich, dass...?'",
        ruleVi: "Khi khiếu nại, người ta dùng các cách diễn đạt lịch sự nhưng kiên quyết. Mô tả vấn đề một cách khách quan, diễn đạt kỳ vọng và yêu cầu giải pháp. Các cấu trúc quan trọng: 'Ich muss mich leider beschweren, weil...' (Rất tiếc tôi phải phàn nàn vì...) / 'Leider entspricht... nicht...' (Rất tiếc... không đúng với...) / 'Ich hätte gern eine Lösung.' (Tôi muốn có giải pháp.) / 'Wäre es möglich, dass...?' (Liệu có thể... không?). Lưu ý: Người Đức đánh giá cao sự trực tiếp nhưng lịch sự. Không nên quá nhẹ nhàng (sẽ bị bỏ qua) cũng không nên quá gay gắt (sẽ bị phản cảm).",
        examples: [
          { de: "Ich muss mich leider beschweren, weil das Zimmer nicht sauber war.", vi: "Rất tiếc tôi phải phàn nàn vì phòng không sạch." },
          { de: "Leider entspricht der Service nicht meinen Erwartungen.", vi: "Rất tiếc dịch vụ không đáp ứng kỳ vọng của tôi." },
          { de: "Ich möchte Sie bitten, das Problem so schnell wie möglich zu lösen.", vi: "Tôi muốn nhờ anh/chị giải quyết vấn đề này càng sớm càng tốt." },
          { de: "Ich erwarte eine angemessene Entschädigung.", vi: "Tôi mong đợi một khoản bồi thường thỏa đáng." },
          { de: "Könnten Sie mir bitte eine schriftliche Bestätigung geben?", vi: "Anh/chị có thể cho tôi xác nhận bằng văn bản được không ạ?" }
        ]
      },
      {
        type: "practice",
        titleDe: "Übung: Beschwerdebrief schreiben",
        titleVi: "Bài tập: Viết thư khiếu nại",
        instruction: "Schreiben Sie einen Beschwerdebrief an ein Reisebüro. Situation: Ihr Hotelzimmer war schmutzig, das Essen war schlecht und der Pool war geschlossen. Fordern Sie eine teilweise Erstattung. Benutzen Sie die Redemittel aus der Lektion.",
        instructionVi: "Viết một thư khiếu nại gửi đại lý du lịch. Tình huống: Phòng khách sạn bẩn, đồ ăn dở và bể bơi đóng cửa. Yêu cầu hoàn lại một phần tiền. Sử dụng các mẫu câu trong bài."
      }
    ]
  },

  // --- Chapter 9, Lesson 3: Kulturelle Unterschiede auf Reisen ---
  {
    id: "b1-ch9-l3",
    chapterId: 9,
    lessonNumber: 3,
    title: "Kulturelle Unterschiede auf Reisen",
    titleVi: "Khác biệt văn hóa khi đi du lịch",
    type: "Fertigkeit",
    objectives: [
      "Có thể nói về sự khác biệt văn hóa giữa Việt Nam và Đức",
      "Hiểu và sử dụng các cấu trúc so sánh nâng cao",
      "Nắm vững từ vựng về phong tục, tập quán và hành vi xã hội",
      "Phát triển kỹ năng giao tiếp liên văn hóa"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Kulturelle Unterschiede zwischen Deutschland und Vietnam",
        titleVi: "Khác biệt văn hóa giữa Đức và Việt Nam",
        textDe: "Wenn Vietnamesen nach Deutschland reisen oder dort leben, gibt es einige kulturelle Unterschiede, die man kennen sollte. Deutsche gelten als pünktlich, direkt und regelorientiert. In Vietnam legt man mehr Wert auf Harmonie, indirekte Kommunikation und Hierarchie. Das Verständnis dieser Unterschiede hilft, Missverständnisse zu vermeiden und sich in der deutschen Gesellschaft wohlzufühlen. Zum Beispiel: In Deutschland teilt man oft die Rechnung im Restaurant ('getrennt zahlen'), während man in Vietnam häufig füreinander bezahlt.",
        textVi: "Khi người Việt đi du lịch hoặc sống ở Đức, có một số khác biệt văn hóa cần biết. Người Đức được coi là đúng giờ, thẳng thắn và tuân thủ quy tắc. Ở Việt Nam, người ta coi trọng sự hài hòa, giao tiếp gián tiếp và trật tự thứ bậc hơn. Hiểu những khác biệt này giúp tránh hiểu lầm và cảm thấy thoải mái trong xã hội Đức. Ví dụ: Ở Đức, người ta thường chia bill trong nhà hàng ('getrennt zahlen' - trả riêng), trong khi ở Việt Nam, người ta thường mời nhau."
      },
      {
        type: "vocabulary",
        titleDe: "Kulturelle Begriffe",
        titleVi: "Thuật ngữ văn hóa",
        words: [
          { de: "Pünktlichkeit", vi: "sự đúng giờ", article: "die" },
          { de: "Gastfreundschaft", vi: "lòng hiếu khách", article: "die" },
          { de: "Höflichkeit", vi: "sự lịch sự", article: "die" },
          { de: "Trinkgeld", vi: "tiền tip/tiền boa", article: "das" },
          { de: "Benehmen", vi: "cách cư xử", article: "das" },
          { de: "Fettnäpfchen", vi: "gây mất lịch sự (không cố ý)", article: "das" },
          { de: "Anpassung", vi: "sự thích nghi", article: "die" },
          { de: "Missverständnis", vi: "sự hiểu lầm", article: "das" },
          { de: "Gepflogenheit", vi: "phong tục/tập quán", article: "die" },
          { de: "Umgangsform", vi: "cách ứng xử xã hội", article: "die" },
          { de: "Vorurteil", vi: "định kiến", article: "das" },
          { de: "Toleranz", vi: "sự bao dung", article: "die" },
          { de: "interkulturell", vi: "liên văn hóa" },
          { de: "aufgeschlossen", vi: "cởi mở" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Kulturelle Unterschiede besprechen",
        titleVi: "Thảo luận về khác biệt văn hóa",
        lines: [
          { speaker: "Anna", de: "Sag mal, Tuan, was hat dich am meisten überrascht, als du nach Deutschland gekommen bist?", vi: "Này Tuấn, điều gì khiến bạn ngạc nhiên nhất khi đến Đức?" },
          { speaker: "Tuan", de: "Ehrlich gesagt, die Pünktlichkeit! In Vietnam ist es ganz normal, 15 Minuten zu spät zu kommen. Hier wird man schief angeguckt, wenn man nur 5 Minuten zu spät ist.", vi: "Thành thật mà nói, sự đúng giờ! Ở Việt Nam, đến trễ 15 phút là bình thường. Ở đây người ta nhìn bạn khó chịu nếu trễ chỉ 5 phút." },
          { speaker: "Anna", de: "Ja, das stimmt. Pünktlichkeit ist uns Deutschen sehr wichtig. Was noch?", vi: "Ừ, đúng vậy. Đúng giờ rất quan trọng với người Đức. Còn gì nữa?" },
          { speaker: "Tuan", de: "In Vietnam fragt man ganz offen nach dem Alter, dem Gehalt oder ob jemand verheiratet ist. Hier in Deutschland sind das Tabuthemen!", vi: "Ở Việt Nam, người ta hỏi thẳng về tuổi, lương hay đã kết hôn chưa. Ở Đức đây là những chủ đề cấm kỵ!" },
          { speaker: "Anna", de: "Stimmt, das empfinden wir als zu persönlich. Aber was gefällt dir hier besonders gut?", vi: "Đúng vậy, chúng tôi thấy đó là quá riêng tư. Nhưng bạn đặc biệt thích gì ở đây?" },
          { speaker: "Tuan", de: "Ich finde es toll, dass man hier so direkt sagen kann, was man denkt. In Vietnam muss man immer um den heißen Brei herumreden, um niemanden zu verletzen.", vi: "Tôi thấy tuyệt vời là ở đây có thể nói thẳng suy nghĩ. Ở Việt Nam phải vòng vo tam quốc để không làm ai mất mặt." },
          { speaker: "Anna", de: "Das ist interessant. Ich glaube, beide Kulturen können viel voneinander lernen.", vi: "Thú vị thật. Tôi nghĩ cả hai nền văn hóa đều có thể học hỏi nhiều từ nhau." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Vergleichssätze: je ... desto / je ... umso",
        titleVi: "Câu so sánh: je ... desto / je ... umso (càng... càng...)",
        rule: "Die Konstruktion 'je + Komparativ, desto/umso + Komparativ' drückt eine proportionale Beziehung aus. Nach 'je' steht das Verb am Ende (Nebensatz), nach 'desto/umso' steht das Verb an zweiter Stelle (Hauptsatz). Beispiel: Je länger man in Deutschland lebt, desto besser versteht man die Kultur.",
        ruleVi: "Cấu trúc 'je + so sánh hơn, desto/umso + so sánh hơn' diễn đạt mối quan hệ tỷ lệ thuận (càng... càng...). Sau 'je', động từ đứng cuối (mệnh đề phụ); sau 'desto/umso', động từ đứng vị trí thứ hai (mệnh đề chính). Ví dụ: Je länger man in Deutschland lebt, desto besser versteht man die Kultur. (Sống ở Đức càng lâu, càng hiểu văn hóa hơn.) Đây là cấu trúc rất phổ biến trong tiếng Đức, tương đương với 'càng...càng...' trong tiếng Việt.",
        examples: [
          { de: "Je mehr man reist, desto offener wird man.", vi: "Càng đi du lịch nhiều, càng trở nên cởi mở hơn." },
          { de: "Je früher man bucht, desto günstiger ist der Flug.", vi: "Đặt vé càng sớm, giá vé càng rẻ." },
          { de: "Je besser man die Sprache spricht, umso leichter findet man Freunde.", vi: "Nói tiếng Đức càng giỏi, càng dễ tìm bạn bè." },
          { de: "Je länger man im Ausland lebt, desto mehr vermisst man die Heimat.", vi: "Sống ở nước ngoài càng lâu, càng nhớ quê hương." },
          { de: "Je mehr kulturelle Unterschiede man kennt, desto weniger Missverständnisse gibt es.", vi: "Biết càng nhiều khác biệt văn hóa, càng ít hiểu lầm." }
        ]
      },
      {
        type: "practice",
        titleDe: "Übung: Kulturelle Unterschiede beschreiben",
        titleVi: "Bài tập: Mô tả khác biệt văn hóa",
        instruction: "Beschreiben Sie mindestens 5 kulturelle Unterschiede zwischen Vietnam und Deutschland. Benutzen Sie die Struktur 'je ... desto ...' in mindestens 3 Sätzen. Themen: Essen, Begrüßung, Familie, Arbeit, Freizeit.",
        instructionVi: "Mô tả ít nhất 5 khác biệt văn hóa giữa Việt Nam và Đức. Sử dụng cấu trúc 'je ... desto ...' trong ít nhất 3 câu. Chủ đề: Ăn uống, Chào hỏi, Gia đình, Công việc, Giải trí."
      }
    ]
  },

  // --- Chapter 9, Lesson 4: Präpositionen mit Genitiv ---
  {
    id: "b1-ch9-l4",
    chapterId: 9,
    lessonNumber: 4,
    title: "Präpositionen mit Genitiv",
    titleVi: "Giới từ đi với Genitiv",
    type: "Grammatik",
    objectives: [
      "Nắm vững các giới từ đi với Genitiv thường gặp",
      "Phân biệt được khi nào dùng Genitiv và khi nào dùng Dativ trong văn nói",
      "Áp dụng giới từ Genitiv trong ngữ cảnh du lịch và giao tiếp trang trọng",
      "Viết được văn bản chính thức sử dụng Genitiv đúng cách"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Der Genitiv — der vergessene Fall",
        titleVi: "Genitiv — cách bị lãng quên",
        textDe: "Der Genitiv ist der vierte Fall im Deutschen und wird oft als 'schwierig' oder 'altmodisch' empfunden. In der Umgangssprache wird er häufig durch 'von + Dativ' ersetzt: 'das Auto von meinem Vater' statt 'das Auto meines Vaters'. In der Schriftsprache und in formellen Kontexten ist der Genitiv aber nach wie vor wichtig. Bestimmte Präpositionen verlangen immer den Genitiv: während, wegen, trotz, innerhalb, außerhalb, aufgrund, statt, anstatt, mithilfe.",
        textVi: "Genitiv là cách (Fall) thứ tư trong tiếng Đức và thường bị coi là 'khó' hoặc 'lỗi thời'. Trong ngôn ngữ nói, nó thường được thay bằng 'von + Dativ': 'das Auto von meinem Vater' (xe của bố tôi) thay vì 'das Auto meines Vaters'. Tuy nhiên trong văn viết và ngữ cảnh trang trọng, Genitiv vẫn rất quan trọng. Một số giới từ luôn đi với Genitiv: während (trong khi/suốt), wegen (vì), trotz (mặc dù), innerhalb (bên trong), außerhalb (bên ngoài), aufgrund (do), statt/anstatt (thay vì), mithilfe (nhờ/với sự giúp đỡ của). Lưu ý: Ở Việt Nam không có khái niệm 'cách' (Fall), nên bạn cần nhớ Genitiv thường biểu thị sự sở hữu hoặc quan hệ."
      },
      {
        type: "grammar",
        titleDe: "Genitiv-Endungen",
        titleVi: "Đuôi Genitiv",
        rule: "Maskulin/Neutrum: des Mannes, des Kindes (Artikel 'des' + Nomen mit -s/-es). Feminin/Plural: der Frau, der Kinder (Artikel 'der', Nomen ohne Endung). Bei Eigennamen: Annas Buch (ohne Artikel, mit -s). Adjektive im Genitiv bekommen die Endung -en: während des langen Fluges.",
        ruleVi: "Giống đực/trung: des Mannes, des Kindes (mạo từ 'des' + danh từ thêm -s/-es). Giống cái/số nhiều: der Frau, der Kinder (mạo từ 'der', danh từ không thêm đuôi). Với tên riêng: Annas Buch (không có mạo từ, thêm -s). Tính từ trong Genitiv luôn có đuôi -en: während des langen Fluges (trong suốt chuyến bay dài). Quy tắc đơn giản: Danh từ giống đực và trung thêm -(e)s, giống cái và số nhiều giữ nguyên.",
        examples: [
          { de: "Während des Fluges habe ich gelesen.", vi: "Trong suốt chuyến bay, tôi đã đọc sách." },
          { de: "Wegen des schlechten Wetters sind wir zu Hause geblieben.", vi: "Vì thời tiết xấu, chúng tôi đã ở nhà." },
          { de: "Trotz der langen Reise war ich nicht müde.", vi: "Mặc dù chuyến đi dài, tôi không mệt." },
          { de: "Innerhalb eines Jahres hat sie Deutsch gelernt.", vi: "Trong vòng một năm, cô ấy đã học tiếng Đức." },
          { de: "Außerhalb der Stadt gibt es schöne Wanderwege.", vi: "Bên ngoài thành phố có những con đường đi bộ đẹp." }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Präpositionen mit Genitiv",
        titleVi: "Giới từ đi với Genitiv",
        words: [
          { de: "während", vi: "trong khi, suốt" },
          { de: "wegen", vi: "vì, do" },
          { de: "trotz", vi: "mặc dù" },
          { de: "innerhalb", vi: "bên trong, trong vòng" },
          { de: "außerhalb", vi: "bên ngoài" },
          { de: "aufgrund", vi: "do, bởi vì" },
          { de: "statt / anstatt", vi: "thay vì" },
          { de: "mithilfe", vi: "nhờ, với sự giúp đỡ của" },
          { de: "infolge", vi: "do hậu quả của" },
          { de: "laut", vi: "theo (nguồn tin)" },
          { de: "hinsichtlich", vi: "về mặt, liên quan đến" },
          { de: "anlässlich", vi: "nhân dịp" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Reisebericht",
        titleVi: "Báo cáo du lịch",
        lines: [
          { speaker: "Mai", de: "Wie war deine Reise nach Österreich?", vi: "Chuyến đi Áo của bạn thế nào?" },
          { speaker: "Duc", de: "Trotz des Regens war es wunderschön. Wir haben Salzburg und Wien besucht.", vi: "Mặc dù trời mưa nhưng rất tuyệt vời. Chúng tôi đã thăm Salzburg và Wien." },
          { speaker: "Mai", de: "Und wie war das Wetter während der ganzen Reise?", vi: "Và thời tiết trong suốt chuyến đi thế nào?" },
          { speaker: "Duc", de: "Wegen des schlechten Wetters konnten wir leider nicht wandern. Aber statt einer Wanderung haben wir viele Museen besucht.", vi: "Vì thời tiết xấu nên tiếc là không thể đi bộ đường dài. Nhưng thay vì đi bộ, chúng tôi đã thăm nhiều bảo tàng." },
          { speaker: "Mai", de: "Das klingt trotzdem toll! Aufgrund deiner Empfehlung möchte ich auch nach Wien fahren.", vi: "Nghe vẫn tuyệt lắm! Nhờ lời giới thiệu của bạn, tôi cũng muốn đi Wien." },
          { speaker: "Duc", de: "Innerhalb von drei Tagen kann man die wichtigsten Sehenswürdigkeiten sehen. Außerhalb der Innenstadt gibt es auch viel Natur.", vi: "Trong vòng ba ngày có thể xem được các điểm tham quan chính. Bên ngoài trung tâm thành phố cũng có nhiều thiên nhiên." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Genitiv vs. Dativ in der Umgangssprache",
        titleVi: "Genitiv và Dativ trong ngôn ngữ nói",
        rule: "In der Umgangssprache wird der Genitiv oft durch den Dativ ersetzt: 'wegen dem Regen' statt 'wegen des Regens'. In der Schriftsprache und in Prüfungen sollte man aber den Genitiv verwenden. 'Trotz' und 'wegen' akzeptieren in der Umgangssprache auch den Dativ, in formellen Texten aber nur den Genitiv.",
        ruleVi: "Trong ngôn ngữ nói, Genitiv thường được thay bằng Dativ: 'wegen dem Regen' thay vì 'wegen des Regens' (vì mưa). Nhưng trong văn viết và trong các kỳ thi, bạn nên dùng Genitiv. 'Trotz' (mặc dù) và 'wegen' (vì) chấp nhận Dativ trong ngôn ngữ nói, nhưng trong văn bản trang trọng chỉ dùng Genitiv. Mẹo: Trong bài thi B1 (Goethe/ÖSD), hãy luôn dùng Genitiv với các giới từ này để ghi điểm!",
        examples: [
          { de: "Schriftsprache: Wegen des Staus kam ich zu spät. / Umgangssprache: Wegen dem Stau kam ich zu spät.", vi: "Văn viết: Vì kẹt xe tôi đến trễ. / Văn nói: (cùng nghĩa, dùng Dativ)" },
          { de: "Schriftsprache: Trotz des Lärms konnte ich schlafen. / Umgangssprache: Trotz dem Lärm konnte ich schlafen.", vi: "Văn viết: Mặc dù ồn ào tôi vẫn ngủ được. / Văn nói: (cùng nghĩa, dùng Dativ)" },
          { de: "Nur Genitiv: Innerhalb eines Monats / Außerhalb der Stadt", vi: "Chỉ dùng Genitiv: Trong vòng một tháng / Bên ngoài thành phố" }
        ]
      },
      {
        type: "practice",
        titleDe: "Übung: Genitiv-Präpositionen anwenden",
        titleVi: "Bài tập: Áp dụng giới từ Genitiv",
        instruction: "Schreiben Sie einen kurzen Reisebericht (ca. 100 Wörter). Benutzen Sie mindestens 6 verschiedene Genitiv-Präpositionen: während, wegen, trotz, innerhalb, außerhalb, aufgrund, statt, mithilfe. Beschreiben Sie eine echte oder fiktive Reise.",
        instructionVi: "Viết một bài tường thuật du lịch ngắn (khoảng 100 từ). Sử dụng ít nhất 6 giới từ Genitiv khác nhau: während, wegen, trotz, innerhalb, außerhalb, aufgrund, statt, mithilfe. Mô tả một chuyến đi thật hoặc tưởng tượng."
      }
    ]
  },

  // ============================================================
  // CHAPTER 10: Zukunft & Visionen
  // ============================================================

  // --- Chapter 10, Lesson 1: Lebensplanung & Ziele ---
  {
    id: "b1-ch10-l1",
    chapterId: 10,
    lessonNumber: 1,
    title: "Lebensplanung & Ziele",
    titleVi: "Kế hoạch cuộc sống & Mục tiêu",
    type: "Einführung",
    objectives: [
      "Có thể nói về kế hoạch và mục tiêu tương lai bằng tiếng Đức",
      "Sử dụng thành thạo thì tương lai (Futur I) và cách diễn đạt dự định",
      "Nắm vững từ vựng về cuộc sống, sự nghiệp và ước mơ",
      "Viết được một bài luận ngắn về kế hoạch tương lai"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Über die Zukunft sprechen",
        titleVi: "Nói về tương lai",
        textDe: "Über Zukunftspläne zu sprechen ist ein wichtiges Thema auf B1-Niveau. Man kann verschiedene Strukturen benutzen: das Futur I (werden + Infinitiv), das Präsens mit Zeitangabe ('Nächstes Jahr ziehe ich um'), oder Ausdrücke wie 'Ich habe vor...', 'Ich plane...', 'Ich beabsichtige...'. Für Ziele und Wünsche benutzt man oft den Konjunktiv II: 'Ich würde gern...' In Deutschland ist es üblich, dass junge Menschen nach dem Abitur ein 'Gap Year' machen, studieren oder eine Ausbildung beginnen.",
        textVi: "Nói về kế hoạch tương lai là một chủ đề quan trọng ở trình độ B1. Có thể dùng nhiều cấu trúc khác nhau: thì tương lai Futur I (werden + động từ nguyên mẫu), thì hiện tại với chỉ thời gian ('Nächstes Jahr ziehe ich um' - Năm sau tôi chuyển nhà), hoặc các cách diễn đạt như 'Ich habe vor...' (Tôi dự định...), 'Ich plane...' (Tôi lên kế hoạch...), 'Ich beabsichtige...' (Tôi có ý định...). Cho mục tiêu và mong muốn, thường dùng Konjunktiv II: 'Ich würde gern...' (Tôi muốn...). Ở Đức, nhiều người trẻ sau khi tốt nghiệp phổ thông (Abitur) sẽ nghỉ một năm (Gap Year), đi học đại học hoặc bắt đầu học nghề."
      },
      {
        type: "vocabulary",
        titleDe: "Lebensplanung",
        titleVi: "Kế hoạch cuộc sống",
        words: [
          { de: "Zukunftsplan", vi: "kế hoạch tương lai", article: "der" },
          { de: "Lebensziel", vi: "mục tiêu cuộc sống", article: "das" },
          { de: "Traum", vi: "ước mơ", article: "der" },
          { de: "Karriere", vi: "sự nghiệp", article: "die" },
          { de: "Weiterbildung", vi: "đào tạo nâng cao", article: "die" },
          { de: "Selbstständigkeit", vi: "tự kinh doanh", article: "die" },
          { de: "Aufenthaltsgenehmigung", vi: "giấy phép cư trú", article: "die" },
          { de: "Niederlassung", vi: "định cư", article: "die" },
          { de: "Existenzgründung", vi: "khởi nghiệp", article: "die" },
          { de: "Work-Life-Balance", vi: "cân bằng công việc-cuộc sống", article: "die" },
          { de: "verwirklichen", vi: "thực hiện/biến thành hiện thực" },
          { de: "anstreben", vi: "phấn đấu đạt được" },
          { de: "erreichen", vi: "đạt được" },
          { de: "scheitern", vi: "thất bại" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Futur I: werden + Infinitiv",
        titleVi: "Thì tương lai I: werden + động từ nguyên mẫu",
        rule: "Das Futur I bildet man mit 'werden' (konjugiert) + Infinitiv am Satzende. Konjugation: ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden. Das Futur I drückt Pläne, Vorhersagen und Versprechen aus. Im Deutschen benutzt man aber oft das Präsens + Zeitangabe für Zukunftspläne: 'Morgen fahre ich nach Berlin.'",
        ruleVi: "Thì tương lai I được tạo bằng 'werden' (chia theo chủ ngữ) + động từ nguyên mẫu ở cuối câu. Chia 'werden': ich werde, du wirst, er/sie/es wird, wir werden, ihr werdet, sie/Sie werden. Futur I diễn đạt kế hoạch, dự đoán và lời hứa. Tuy nhiên trong tiếng Đức, người ta thường dùng thì hiện tại + chỉ thời gian cho kế hoạch tương lai: 'Morgen fahre ich nach Berlin.' (Ngày mai tôi đi Berlin.) Mẹo: Futur I nghe trang trọng hơn và thường dùng trong bài viết hoặc khi muốn nhấn mạnh.",
        examples: [
          { de: "Ich werde nächstes Jahr nach Deutschland ziehen.", vi: "Năm sau tôi sẽ chuyển đến Đức." },
          { de: "Wir werden zusammen ein Unternehmen gründen.", vi: "Chúng tôi sẽ cùng nhau thành lập doanh nghiệp." },
          { de: "Er wird die B1-Prüfung bestehen.", vi: "Anh ấy sẽ đậu kỳ thi B1." },
          { de: "Sie werden viel Erfolg haben.", vi: "Họ sẽ rất thành công." },
          { de: "Ich werde mein Bestes tun.", vi: "Tôi sẽ cố gắng hết sức." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Zukunftspläne besprechen",
        titleVi: "Thảo luận về kế hoạch tương lai",
        lines: [
          { speaker: "Lan", de: "Was hast du nach der B1-Prüfung vor, Minh?", vi: "Sau kỳ thi B1, bạn dự định gì, Minh?" },
          { speaker: "Minh", de: "Ich habe vor, mich an der Universität München für Informatik zu bewerben. Und du?", vi: "Tôi dự định nộp đơn vào Đại học München ngành Tin học. Còn bạn?" },
          { speaker: "Lan", de: "Ich werde zuerst B2 machen und dann eine Ausbildung als Krankenpflegerin anfangen. Es gibt in Deutschland einen großen Bedarf an Pflegekräften.", vi: "Tôi sẽ học B2 trước rồi bắt đầu học nghề điều dưỡng. Ở Đức đang rất cần nhân lực ngành điều dưỡng." },
          { speaker: "Minh", de: "Das ist ein guter Plan! Hast du auch langfristige Ziele?", vi: "Đó là kế hoạch tốt! Bạn có mục tiêu dài hạn không?" },
          { speaker: "Lan", de: "Auf lange Sicht möchte ich meine Familie nach Deutschland holen und hier ein gutes Leben aufbauen. Ich träume davon, eines Tages eine eigene Pflegeeinrichtung zu eröffnen.", vi: "Về lâu dài, tôi muốn đưa gia đình sang Đức và xây dựng cuộc sống tốt ở đây. Tôi mơ ước một ngày nào đó mở cơ sở điều dưỡng riêng." },
          { speaker: "Minh", de: "Das finde ich beeindruckend! Ich plane auch, nach dem Studium ein Start-up zu gründen — vielleicht eine App, die Vietnamesen beim Deutschlernen hilft.", vi: "Tôi thấy ấn tượng lắm! Tôi cũng lên kế hoạch sau khi tốt nghiệp sẽ thành lập start-up — có lẽ là một ứng dụng giúp người Việt học tiếng Đức." },
          { speaker: "Lan", de: "Das wäre großartig! Ich drücke dir die Daumen!", vi: "Tuyệt vời quá! Tôi chúc bạn may mắn!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Ausdrücke für Pläne und Absichten",
        titleVi: "Các cách diễn đạt kế hoạch và ý định",
        rule: "Neben dem Futur I gibt es viele Ausdrücke für Pläne: 'vorhaben' (Ich habe vor, ...), 'planen' (Ich plane, ...), 'beabsichtigen' (Ich beabsichtige, ...), 'träumen von' (Ich träume davon, ...), 'sich vornehmen' (Ich nehme mir vor, ...). Nach diesen Ausdrücken folgt oft ein Infinitiv mit 'zu': 'Ich habe vor, Deutsch zu lernen.'",
        ruleVi: "Ngoài Futur I, có nhiều cách diễn đạt kế hoạch: 'vorhaben' (dự định: Ich habe vor, ...), 'planen' (lên kế hoạch: Ich plane, ...), 'beabsichtigen' (có ý định: Ich beabsichtige, ...), 'träumen von' (mơ ước: Ich träume davon, ...), 'sich vornehmen' (tự đặt mục tiêu: Ich nehme mir vor, ...). Sau các cách diễn đạt này thường là động từ nguyên mẫu với 'zu': 'Ich habe vor, Deutsch zu lernen.' (Tôi dự định học tiếng Đức.) Mẹo: 'vorhaben' dùng nhiều nhất trong giao tiếp hàng ngày, 'beabsichtigen' trang trọng hơn.",
        examples: [
          { de: "Ich habe vor, nächstes Jahr nach Vietnam zu reisen.", vi: "Tôi dự định năm sau đi Việt Nam." },
          { de: "Wir planen, ein Haus zu kaufen.", vi: "Chúng tôi lên kế hoạch mua nhà." },
          { de: "Sie beabsichtigt, sich selbstständig zu machen.", vi: "Cô ấy có ý định tự kinh doanh." },
          { de: "Ich träume davon, fließend Deutsch zu sprechen.", vi: "Tôi mơ ước nói tiếng Đức trôi chảy." },
          { de: "Er nimmt sich vor, jeden Tag eine Stunde zu lernen.", vi: "Anh ấy tự đặt mục tiêu mỗi ngày học một tiếng." }
        ]
      },
      {
        type: "practice",
        titleDe: "Übung: Meine Zukunftspläne",
        titleVi: "Bài tập: Kế hoạch tương lai của tôi",
        instruction: "Schreiben Sie einen Text (ca. 150 Wörter) über Ihre Zukunftspläne. Benutzen Sie das Futur I, Ausdrücke wie 'vorhaben', 'planen', 'träumen von' und den Konjunktiv II. Beschreiben Sie: 1) Ihre Pläne für das nächste Jahr, 2) Ihre beruflichen Ziele, 3) Ihren größten Traum.",
        instructionVi: "Viết một bài (khoảng 150 từ) về kế hoạch tương lai của bạn. Sử dụng Futur I, các cách diễn đạt như 'vorhaben', 'planen', 'träumen von' và Konjunktiv II. Mô tả: 1) Kế hoạch cho năm tới, 2) Mục tiêu nghề nghiệp, 3) Ước mơ lớn nhất."
      }
    ]
  },

  // --- Chapter 10, Lesson 2: Prüfungsvorbereitung B1 ---
  {
    id: "b1-ch10-l2",
    chapterId: 10,
    lessonNumber: 2,
    title: "Prüfungsvorbereitung B1",
    titleVi: "Chuẩn bị thi B1",
    type: "Fertigkeit",
    objectives: [
      "Biết cấu trúc và yêu cầu của kỳ thi B1",
      "Luyện tập các dạng bài thi: Lesen, Hören, Schreiben, Sprechen",
      "Nắm vững chiến lược làm bài thi hiệu quả",
      "Tự tin đối mặt với kỳ thi B1"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Die B1-Prüfung — Überblick",
        titleVi: "Kỳ thi B1 — Tổng quan",
        textDe: "Die B1-Prüfung (Goethe-Zertifikat B1 oder ÖSD Zertifikat B1) besteht aus vier Modulen: Lesen (65 Minuten), Hören (40 Minuten), Schreiben (60 Minuten) und Sprechen (ca. 15 Minuten, zu zweit). Jedes Modul kann einzeln abgelegt und bestanden werden. Man braucht mindestens 60% in jedem Modul. Das B1-Zertifikat ist wichtig für die Einbürgerung in Deutschland und wird auch für viele Berufe und Ausbildungen verlangt.",
        textVi: "Kỳ thi B1 (Goethe-Zertifikat B1 hoặc ÖSD Zertifikat B1) gồm bốn phần: Đọc hiểu (65 phút), Nghe hiểu (40 phút), Viết (60 phút) và Nói (khoảng 15 phút, thi theo cặp). Mỗi phần có thể thi và đạt riêng. Cần đạt ít nhất 60% ở mỗi phần. Chứng chỉ B1 quan trọng cho việc nhập quốc tịch Đức và cũng được yêu cầu cho nhiều nghề nghiệp và chương trình đào tạo."
      },
      {
        type: "grammar",
        titleDe: "Modul Lesen — Strategien",
        titleVi: "Phần Đọc hiểu — Chiến lược",
        rule: "Das Modul Lesen hat 5 Teile: Teil 1 (Blog/Forum, richtig/falsch), Teil 2 (Zeitungsartikel, Multiple Choice), Teil 3 (Anzeigen zuordnen), Teil 4 (Kommentare, Meinungen zuordnen), Teil 5 (Vorschriften/Regeln, richtig/falsch). Wichtige Strategien: Schlüsselwörter markieren, Synonyme erkennen, auf Negationen achten, erst die Fragen lesen und dann den Text.",
        ruleVi: "Phần Đọc hiểu có 5 phần: Phần 1 (Blog/Diễn đàn, đúng/sai), Phần 2 (Bài báo, trắc nghiệm), Phần 3 (Ghép quảng cáo), Phần 4 (Bình luận, ghép ý kiến), Phần 5 (Quy định/Nội quy, đúng/sai). Chiến lược quan trọng: Đánh dấu từ khóa, nhận diện từ đồng nghĩa, chú ý phủ định, đọc câu hỏi trước rồi mới đọc bài văn. Lưu ý đặc biệt cho người Việt: Cẩn thận với các từ phủ định kép trong tiếng Đức (nicht un-) vì chúng khẳng định chứ không phủ định.",
        examples: [
          { de: "Schlüsselwort im Text: 'günstig' → in der Frage: 'billig' oder 'preiswert'", vi: "Từ khóa trong bài: 'günstig' (rẻ) → trong câu hỏi: 'billig' hoặc 'preiswert' (cùng nghĩa)" },
          { de: "Negation: 'Es ist nicht unwichtig' = 'Es ist wichtig'", vi: "Phủ định: 'Es ist nicht unwichtig' (không phải không quan trọng) = 'Es ist wichtig' (quan trọng)" },
          { de: "Vorsicht bei 'fast', 'beinahe', 'kaum' — sie verändern die Bedeutung!", vi: "Cẩn thận với 'fast' (gần như), 'beinahe' (suýt), 'kaum' (hầu như không) — chúng thay đổi nghĩa!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Modul Schreiben — Tipps",
        titleVi: "Phần Viết — Mẹo",
        rule: "Das Modul Schreiben besteht aus 3 Aufgaben: Aufgabe 1 (formelle/halbformelle E-Mail, ca. 80 Wörter), Aufgabe 2 (Beitrag in einem Forum, eigene Meinung, ca. 80 Wörter), Aufgabe 3 (halbformelle Nachricht, ca. 40 Wörter). Wichtig: Alle Aufgabenpunkte bearbeiten, korrekte Anrede und Gruß, logischer Aufbau, Konnektoren benutzen (deshalb, trotzdem, obwohl, weil, damit).",
        ruleVi: "Phần Viết gồm 3 bài: Bài 1 (email trang trọng/bán trang trọng, khoảng 80 từ), Bài 2 (bài đăng diễn đàn, nêu ý kiến, khoảng 80 từ), Bài 3 (tin nhắn bán trang trọng, khoảng 40 từ). Quan trọng: Xử lý tất cả các điểm trong đề bài, dùng đúng cách xưng hô và chào, cấu trúc logic, sử dụng liên từ (deshalb - vì vậy, trotzdem - tuy vậy, obwohl - mặc dù, weil - vì, damit - để mà). Mẹo cho người Việt: Đừng dịch từ tiếng Việt sang, hãy dùng các mẫu câu đã học.",
        examples: [
          { de: "Formelle Anrede: Sehr geehrte Damen und Herren, / Sehr geehrte Frau Müller,", vi: "Cách xưng hô trang trọng: Kính thưa quý bà quý ông, / Kính thưa bà Müller," },
          { de: "Formeller Schluss: Mit freundlichen Grüßen", vi: "Kết thúc trang trọng: Trân trọng kính chào (Mit freundlichen Grüßen)" },
          { de: "Meinung ausdrücken: Meiner Meinung nach... / Ich bin der Meinung, dass...", vi: "Diễn đạt ý kiến: Theo ý kiến tôi... / Tôi có ý kiến rằng..." },
          { de: "Konnektoren: Einerseits..., andererseits... / Zwar..., aber...", vi: "Liên từ: Một mặt..., mặt khác... / Tuy... nhưng..." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Modul Sprechen — Übung (Teil 1: Gemeinsam planen)",
        titleVi: "Phần Nói — Luyện tập (Phần 1: Cùng lên kế hoạch)",
        lines: [
          { speaker: "Prüfer", de: "Sie und Ihr Partner möchten zusammen einen Ausflug machen. Planen Sie den Ausflug.", vi: "(Đề bài) Bạn và bạn cùng thi muốn đi chơi cùng nhau. Hãy lên kế hoạch cho chuyến đi." },
          { speaker: "Linh", de: "Also, wir sollen einen Ausflug planen. Hast du eine Idee, wohin wir fahren könnten?", vi: "Vậy, chúng ta cần lên kế hoạch cho chuyến đi. Bạn có ý tưởng đi đâu không?" },
          { speaker: "Tuan", de: "Wie wäre es mit einem Tagesausflug nach Neuschwanstein? Das Schloss soll sehr schön sein.", vi: "Đi chơi một ngày ở Neuschwanstein thì sao? Nghe nói lâu đài rất đẹp." },
          { speaker: "Linh", de: "Gute Idee! Wann sollen wir fahren? Am Wochenende oder unter der Woche?", vi: "Ý tưởng hay! Khi nào mình đi? Cuối tuần hay trong tuần?" },
          { speaker: "Tuan", de: "Ich würde das Wochenende vorschlagen, weil wir dann mehr Zeit haben. Was meinst du?", vi: "Tôi đề xuất cuối tuần, vì mình có nhiều thời gian hơn. Bạn nghĩ sao?" },
          { speaker: "Linh", de: "Einverstanden. Und wie kommen wir dorthin? Mit dem Zug oder mit dem Auto?", vi: "Đồng ý. Và mình đi bằng gì? Tàu hay ô tô?" },
          { speaker: "Tuan", de: "Mit dem Zug wäre es entspannter, und wir müssen keinen Parkplatz suchen. Wir könnten auch ein Bayern-Ticket kaufen.", vi: "Đi tàu thì thoải mái hơn, và không cần tìm chỗ đậu xe. Mình cũng có thể mua vé Bayern-Ticket." },
          { speaker: "Linh", de: "Perfekt! Dann sollten wir auch überlegen, was wir zum Essen mitnehmen oder ob wir dort essen.", vi: "Tuyệt! Vậy mình cũng nên suy nghĩ mang đồ ăn theo hay ăn ở đó." }
        ]
      },
      {
        type: "practice",
        titleDe: "Übung: Prüfungssimulation Schreiben",
        titleVi: "Bài tập: Mô phỏng thi phần Viết",
        instruction: "Aufgabe 1: Schreiben Sie eine formelle E-Mail an eine Sprachschule. Sie möchten sich für einen B2-Kurs anmelden. Fragen Sie nach: Kurstermine, Kosten, benötigte Unterlagen. (ca. 80 Wörter) Aufgabe 2: In einem Forum wird diskutiert: 'Soll man im Ausland studieren oder in der Heimat bleiben?' Schreiben Sie Ihre Meinung. (ca. 80 Wörter)",
        instructionVi: "Bài 1: Viết email trang trọng cho trường ngôn ngữ. Bạn muốn đăng ký khóa B2. Hỏi về: lịch học, chi phí, giấy tờ cần thiết. (khoảng 80 từ) Bài 2: Trên diễn đàn đang thảo luận: 'Nên du học nước ngoài hay ở lại quê hương?' Viết ý kiến của bạn. (khoảng 80 từ)"
      }
    ]
  },

  // --- Chapter 10, Lesson 3: Goethe-/ÖSD-Prüfungsformat ---
  {
    id: "b1-ch10-l3",
    chapterId: 10,
    lessonNumber: 3,
    title: "Goethe-/ÖSD-Prüfungsformat",
    titleVi: "Định dạng thi Goethe/ÖSD",
    type: "Fertigkeit",
    objectives: [
      "Hiểu chi tiết từng phần thi Goethe-Zertifikat B1 và ÖSD Zertifikat B1",
      "So sánh được hai định dạng thi phổ biến nhất",
      "Luyện tập phần thi Hören và Sprechen chuyên sâu",
      "Biết cách quản lý thời gian trong phòng thi"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Goethe-Zertifikat B1 vs. ÖSD Zertifikat B1",
        titleVi: "Goethe-Zertifikat B1 so với ÖSD Zertifikat B1",
        textDe: "Die beiden bekanntesten B1-Prüfungen sind das Goethe-Zertifikat B1 (vom Goethe-Institut) und das ÖSD Zertifikat B1 (vom Österreichischen Sprachdiplom). Beide Prüfungen sind international anerkannt und haben ein ähnliches Format mit vier Modulen: Lesen, Hören, Schreiben und Sprechen. Der Hauptunterschied: Beim ÖSD kann auch österreichisches Deutsch vorkommen, und einige Aufgabenformate unterscheiden sich leicht. Für die Einbürgerung in Deutschland werden beide anerkannt. Viele Vietnamesen in Deutschland legen das Goethe-Zertifikat ab, da die Goethe-Institute weltweit vertreten sind.",
        textVi: "Hai kỳ thi B1 nổi tiếng nhất là Goethe-Zertifikat B1 (của Viện Goethe) và ÖSD Zertifikat B1 (của Chứng chỉ Ngôn ngữ Áo). Cả hai đều được công nhận quốc tế và có định dạng tương tự với bốn phần: Đọc, Nghe, Viết và Nói. Khác biệt chính: ÖSD có thể xuất hiện tiếng Đức Áo, và một số dạng bài hơi khác. Để nhập quốc tịch Đức, cả hai đều được công nhận. Nhiều người Việt ở Đức thi Goethe-Zertifikat vì Viện Goethe có mặt trên toàn thế giới."
      },
      {
        type: "grammar",
        titleDe: "Modul Hören — Aufbau und Strategien",
        titleVi: "Phần Nghe — Cấu trúc và Chiến lược",
        rule: "Das Modul Hören (ca. 40 Minuten) hat 4 Teile: Teil 1 (Alltagsgespräche, richtig/falsch, 1x hören), Teil 2 (Radiobeitrag, Multiple Choice, 1x hören), Teil 3 (Alltagsgespräch, Multiple Choice, 1x hören), Teil 4 (Kurze Durchsagen, was ist richtig, 2x hören). Strategien: Vor dem Hören die Aufgaben genau lesen, Schlüsselwörter unterstreichen, auf Zahlen/Daten/Orte achten, Notizen machen.",
        ruleVi: "Phần Nghe (khoảng 40 phút) có 4 phần: Phần 1 (hội thoại đời thường, đúng/sai, nghe 1 lần), Phần 2 (bài phát thanh, trắc nghiệm, nghe 1 lần), Phần 3 (hội thoại đời thường, trắc nghiệm, nghe 1 lần), Phần 4 (thông báo ngắn, chọn đáp án đúng, nghe 2 lần). Chiến lược: Trước khi nghe, đọc kỹ đề bài, gạch chân từ khóa, chú ý số/ngày/địa điểm, ghi chú nhanh. Mẹo cho người Việt: Luyện nghe podcast tiếng Đức hàng ngày (Deutsche Welle, Easy German). Chú ý phân biệt các âm khó: ü/u, ö/o, ch/sch.",
        examples: [
          { de: "Teil 1 Beispiel: Sie hören eine Nachricht auf dem Anrufbeantworter. Richtig oder falsch?", vi: "Ví dụ Phần 1: Bạn nghe một tin nhắn trên máy trả lời. Đúng hay sai?" },
          { de: "Teil 2 Beispiel: Sie hören einen Radiobeitrag über Umweltschutz. Was ist richtig?", vi: "Ví dụ Phần 2: Bạn nghe một bài phát thanh về bảo vệ môi trường. Đáp án nào đúng?" },
          { de: "Tipp: Bei Teil 4 hören Sie 2x — beim ersten Mal Überblick, beim zweiten Mal Details.", vi: "Mẹo: Phần 4 nghe 2 lần — lần đầu nắm tổng quan, lần hai nghe chi tiết." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Modul Sprechen — Aufbau und Tipps",
        titleVi: "Phần Nói — Cấu trúc và Mẹo",
        rule: "Das Modul Sprechen (ca. 15 Minuten, zu zweit) hat 3 Teile: Teil 1 (Gemeinsam etwas planen, mit Partner), Teil 2 (Ein Thema präsentieren: persönliche Erfahrung, Situation im Heimatland, Vor-/Nachteile, eigene Meinung), Teil 3 (Feedback zu der Präsentation des Partners, Fragen stellen). Vorbereitungszeit: 15 Minuten für alle 3 Teile.",
        ruleVi: "Phần Nói (khoảng 15 phút, thi theo cặp) có 3 phần: Phần 1 (Cùng lên kế hoạch với bạn thi), Phần 2 (Trình bày một chủ đề: kinh nghiệm cá nhân, tình hình ở quê nhà, ưu/nhược điểm, ý kiến riêng), Phần 3 (Phản hồi bài trình bày của bạn thi, đặt câu hỏi). Thời gian chuẩn bị: 15 phút cho cả 3 phần. Mẹo quan trọng: Phần 2 cần có cấu trúc rõ ràng — mở bài, thân bài (4 điểm theo đề), kết bài. Nói rõ ràng, không cần nhanh.",
        examples: [
          { de: "Einleitung Teil 2: 'Mein Thema heute ist... / Ich möchte über ... sprechen.'", vi: "Mở bài Phần 2: 'Chủ đề hôm nay của tôi là... / Tôi muốn nói về...'" },
          { de: "Persönliche Erfahrung: 'In meinem Leben habe ich die Erfahrung gemacht, dass...'", vi: "Kinh nghiệm cá nhân: 'Trong cuộc sống, tôi đã có trải nghiệm rằng...'" },
          { de: "Vor-/Nachteile: 'Ein Vorteil ist, dass... Ein Nachteil könnte sein, dass...'", vi: "Ưu/nhược điểm: 'Một ưu điểm là... Một nhược điểm có thể là...'" },
          { de: "Eigene Meinung: 'Meiner Meinung nach... / Ich persönlich finde, dass...'", vi: "Ý kiến cá nhân: 'Theo ý kiến tôi... / Cá nhân tôi nghĩ rằng...'" },
          { de: "Abschluss: 'Zum Schluss möchte ich sagen, dass... Vielen Dank für Ihre Aufmerksamkeit.'", vi: "Kết bài: 'Cuối cùng tôi muốn nói rằng... Cảm ơn sự chú ý của quý vị.'" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Prüfungsvokabular",
        titleVi: "Từ vựng trong phòng thi",
        words: [
          { de: "Aufgabenblatt", vi: "đề thi/phiếu bài tập", article: "das" },
          { de: "Antwortbogen", vi: "phiếu trả lời", article: "der" },
          { de: "Lösungsschlüssel", vi: "đáp án", article: "der" },
          { de: "Bewertungskriterien", vi: "tiêu chí đánh giá", article: "die (Pl.)" },
          { de: "Punktzahl", vi: "số điểm", article: "die" },
          { de: "bestehen", vi: "đậu/vượt qua" },
          { de: "durchfallen", vi: "trượt/rớt" },
          { de: "Prüfer / Prüferin", vi: "giám khảo (nam/nữ)", article: "der/die" },
          { de: "Hilfsmittel", vi: "dụng cụ hỗ trợ", article: "das" },
          { de: "ankreuzen", vi: "đánh dấu (x)" },
          { de: "zuordnen", vi: "ghép/nối" },
          { de: "Zeitmanagement", vi: "quản lý thời gian", article: "das" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Modul Sprechen — Teil 2 üben (Thema: Soziale Medien)",
        titleVi: "Phần Nói — Luyện Phần 2 (Chủ đề: Mạng xã hội)",
        lines: [
          { speaker: "Kandidat (Hoa)", de: "Mein Thema heute ist 'Soziale Medien'. Ich möchte über meine persönlichen Erfahrungen berichten, die Situation in meinem Heimatland Vietnam beschreiben, Vor- und Nachteile nennen und meine eigene Meinung sagen.", vi: "Chủ đề hôm nay của tôi là 'Mạng xã hội'. Tôi muốn kể về kinh nghiệm cá nhân, mô tả tình hình ở quê hương Việt Nam, nêu ưu và nhược điểm, và nói ý kiến riêng." },
          { speaker: "Kandidat (Hoa)", de: "Zuerst zu meiner persönlichen Erfahrung: Ich benutze soziale Medien seit etwa 10 Jahren. Am Anfang fand ich es toll, mit Freunden in Kontakt zu bleiben. Aber mit der Zeit habe ich gemerkt, dass ich zu viel Zeit damit verbringe.", vi: "Trước hết về kinh nghiệm cá nhân: Tôi dùng mạng xã hội khoảng 10 năm. Ban đầu tôi thấy tuyệt vời để giữ liên lạc với bạn bè. Nhưng dần dần tôi nhận ra mình dành quá nhiều thời gian cho nó." },
          { speaker: "Kandidat (Hoa)", de: "In Vietnam sind soziale Medien sehr beliebt, besonders Facebook und Zalo. Fast jeder junge Mensch benutzt sie täglich. Viele Geschäfte nutzen Facebook auch zum Verkaufen.", vi: "Ở Việt Nam, mạng xã hội rất phổ biến, đặc biệt Facebook và Zalo. Hầu như mọi người trẻ đều dùng hàng ngày. Nhiều cửa hàng cũng dùng Facebook để bán hàng." },
          { speaker: "Kandidat (Hoa)", de: "Ein großer Vorteil ist, dass man mit Familie und Freunden in der Heimat in Kontakt bleiben kann. Ein Nachteil könnte sein, dass man süchtig werden kann und weniger persönliche Gespräche führt.", vi: "Một ưu điểm lớn là có thể giữ liên lạc với gia đình và bạn bè ở quê. Một nhược điểm có thể là bị nghiện và ít trò chuyện trực tiếp hơn." },
          { speaker: "Kandidat (Hoa)", de: "Meiner Meinung nach sind soziale Medien nützlich, wenn man sie bewusst nutzt. Man sollte sich Zeitlimits setzen. Vielen Dank für Ihre Aufmerksamkeit.", vi: "Theo ý kiến tôi, mạng xã hội hữu ích nếu dùng có ý thức. Nên đặt giới hạn thời gian cho mình. Cảm ơn sự chú ý của quý vị." }
        ]
      },
      {
        type: "practice",
        titleDe: "Übung: Sprechen Teil 2 — Eigene Präsentation",
        titleVi: "Bài tập: Nói Phần 2 — Tự trình bày",
        instruction: "Bereiten Sie eine Präsentation zum Thema 'Fremdsprachen lernen' vor. Sprechen Sie über: 1) Ihre persönliche Erfahrung beim Deutschlernen, 2) Fremdsprachenlernen in Vietnam, 3) Vor- und Nachteile des Online-Lernens, 4) Ihre Meinung. Dauer: ca. 3-4 Minuten. Benutzen Sie die Redemittel aus der Lektion.",
        instructionVi: "Chuẩn bị bài trình bày về chủ đề 'Học ngoại ngữ'. Nói về: 1) Kinh nghiệm cá nhân học tiếng Đức, 2) Việc học ngoại ngữ ở Việt Nam, 3) Ưu và nhược điểm học trực tuyến, 4) Ý kiến của bạn. Thời gian: khoảng 3-4 phút. Sử dụng các mẫu câu trong bài."
      }
    ]
  },

  // --- Chapter 10, Lesson 4: Rückblick & Ausblick auf B2 ---
  {
    id: "b1-ch10-l4",
    chapterId: 10,
    lessonNumber: 4,
    title: "Rückblick & Ausblick auf B2",
    titleVi: "Nhìn lại & Hướng tới B2",
    type: "Integration",
    objectives: [
      "Tổng kết lại toàn bộ kiến thức ngữ pháp và từ vựng B1",
      "Tự đánh giá năng lực tiếng Đức hiện tại",
      "Biết được B2 yêu cầu gì và cách chuẩn bị",
      "Xây dựng kế hoạch học tập tiếp theo"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Rückblick: Was Sie auf B1-Niveau können",
        titleVi: "Nhìn lại: Bạn có thể làm gì ở trình độ B1",
        textDe: "Herzlichen Glückwunsch! Sie haben das B1-Niveau erreicht! Das bedeutet, dass Sie sich in den meisten Alltagssituationen verständigen können, die Hauptpunkte verstehen, wenn Standardsprache verwendet wird, und zusammenhängend über vertraute Themen sprechen können. Sie können über Erfahrungen berichten, Meinungen äußern, Pläne beschreiben und einfache Texte schreiben. Sie haben wichtige Grammatikthemen gelernt: Perfekt, Präteritum, Nebensätze (weil, dass, obwohl, wenn, als, damit, um...zu), Konjunktiv II, Passiv, Relativsätze, Genitiv und vieles mehr.",
        textVi: "Xin chúc mừng! Bạn đã đạt trình độ B1! Điều này có nghĩa là bạn có thể giao tiếp trong hầu hết các tình huống hàng ngày, hiểu các điểm chính khi ngôn ngữ chuẩn được sử dụng, và nói mạch lạc về các chủ đề quen thuộc. Bạn có thể kể về trải nghiệm, bày tỏ ý kiến, mô tả kế hoạch và viết các văn bản đơn giản. Bạn đã học các chủ đề ngữ pháp quan trọng: Perfekt, Präteritum, mệnh đề phụ (weil, dass, obwohl, wenn, als, damit, um...zu), Konjunktiv II, bị động, mệnh đề quan hệ, Genitiv và nhiều hơn nữa."
      },
      {
        type: "grammar",
        titleDe: "Grammatik-Zusammenfassung B1",
        titleVi: "Tổng kết Ngữ pháp B1",
        rule: "Wichtige B1-Grammatikthemen: 1) Zeitformen: Präsens, Perfekt, Präteritum, Futur I. 2) Nebensätze: weil, dass, obwohl, wenn, als, damit, um...zu, bevor, nachdem. 3) Relativsätze: der/die/das + Verb am Ende. 4) Konjunktiv II: höfliche Bitten, irreale Wünsche. 5) Passiv: werden + Partizip II. 6) Genitiv und Genitivpräpositionen. 7) Vergleichssätze: je...desto. 8) Indirekte Fragen: ob / W-Frage + Verb am Ende.",
        ruleVi: "Các chủ đề ngữ pháp B1 quan trọng: 1) Các thì: Hiện tại, Perfekt, Präteritum, Tương lai I. 2) Mệnh đề phụ: weil (vì), dass (rằng), obwohl (mặc dù), wenn (nếu/khi), als (khi - quá khứ), damit (để mà), um...zu (để), bevor (trước khi), nachdem (sau khi). 3) Mệnh đề quan hệ: der/die/das + động từ cuối câu. 4) Konjunktiv II: yêu cầu lịch sự, mong muốn không thực. 5) Bị động: werden + Partizip II. 6) Genitiv và giới từ Genitiv. 7) Câu so sánh: je...desto (càng...càng). 8) Câu hỏi gián tiếp: ob / từ hỏi W + động từ cuối câu.",
        examples: [
          { de: "Perfekt: Ich habe Deutsch gelernt. / Ich bin nach Deutschland geflogen.", vi: "Perfekt: Tôi đã học tiếng Đức. / Tôi đã bay đến Đức." },
          { de: "Nebensatz: Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.", vi: "Mệnh đề phụ: Tôi học tiếng Đức vì tôi muốn làm việc ở Đức." },
          { de: "Konjunktiv II: Ich würde gern in München wohnen.", vi: "Konjunktiv II: Tôi muốn sống ở München." },
          { de: "Passiv: Deutsch wird in vielen Ländern gesprochen.", vi: "Bị động: Tiếng Đức được nói ở nhiều nước." },
          { de: "Relativsatz: Das ist der Kurs, den ich besucht habe.", vi: "Mệnh đề quan hệ: Đó là khóa học mà tôi đã tham gia." }
        ]
      },
      {
        type: "explanation",
        titleDe: "Ausblick: Was kommt auf B2?",
        titleVi: "Hướng tới: B2 có gì?",
        textDe: "Auf B2-Niveau werden die Themen komplexer und die Sprache anspruchsvoller. Sie werden lernen: längere und komplexere Texte zu verstehen (auch abstrakte Themen), sich spontan und fließend zu unterhalten, detaillierte Texte zu schreiben (Aufsätze, Berichte), Ihre Meinung differenziert auszudrücken. Neue Grammatikthemen auf B2 sind unter anderem: Partizipialattribute, Nominalisierung, komplexe Konnektoren, erweitertes Passiv, Konjunktiv I (indirekte Rede). Das B2-Zertifikat öffnet viele Türen: Studium an deutschen Universitäten, bessere Berufschancen, und es zeigt eine fortgeschrittene Sprachkompetenz.",
        textVi: "Ở trình độ B2, các chủ đề phức tạp hơn và ngôn ngữ đòi hỏi cao hơn. Bạn sẽ học: hiểu các văn bản dài và phức tạp hơn (kể cả chủ đề trừu tượng), trò chuyện một cách tự nhiên và trôi chảy, viết các văn bản chi tiết (bài luận, báo cáo), diễn đạt ý kiến một cách sâu sắc. Các chủ đề ngữ pháp mới ở B2 bao gồm: tính từ phân từ mở rộng (Partizipialattribute), danh từ hóa (Nominalisierung), liên từ phức tạp, bị động mở rộng, Konjunktiv I (lời nói gián tiếp). Chứng chỉ B2 mở ra nhiều cơ hội: học đại học ở Đức, cơ hội nghề nghiệp tốt hơn, và chứng minh trình độ ngôn ngữ nâng cao."
      },
      {
        type: "vocabulary",
        titleDe: "Wichtige Wörter für das Weiterlernen",
        titleVi: "Từ vựng quan trọng cho việc học tiếp",
        words: [
          { de: "Sprachniveau", vi: "trình độ ngôn ngữ", article: "das" },
          { de: "Lernstrategie", vi: "chiến lược học tập", article: "die" },
          { de: "Fortschritt", vi: "tiến bộ", article: "der" },
          { de: "Herausforderung", vi: "thử thách", article: "die" },
          { de: "Ausdauer", vi: "sự kiên trì", article: "die" },
          { de: "Motivation", vi: "động lực", article: "die" },
          { de: "Sprachkompetenz", vi: "năng lực ngôn ngữ", article: "die" },
          { de: "Immersion", vi: "môi trường ngôn ngữ hoàn toàn", article: "die" },
          { de: "Selbststudium", vi: "tự học", article: "das" },
          { de: "Tandempartner", vi: "đối tác học ngôn ngữ trao đổi", article: "der" },
          { de: "sich verbessern", vi: "cải thiện bản thân" },
          { de: "dranbleiben", vi: "kiên trì tiếp tục" },
          { de: "fließend", vi: "trôi chảy" },
          { de: "fortgeschritten", vi: "nâng cao" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Gespräch über das Weiterlernen",
        titleVi: "Trò chuyện về việc học tiếp",
        lines: [
          { speaker: "Lehrerin", de: "Herzlichen Glückwunsch, Klasse! Sie haben B1 geschafft! Was sind Ihre Pläne für die Zukunft?", vi: "Xin chúc mừng cả lớp! Các bạn đã hoàn thành B1! Kế hoạch tương lai của các bạn là gì?" },
          { speaker: "Minh", de: "Ich werde sofort mit B2 weitermachen. Ich brauche B2 für mein Informatikstudium an der TU München.", vi: "Tôi sẽ học B2 ngay. Tôi cần B2 cho ngành Tin học ở Đại học Kỹ thuật München." },
          { speaker: "Hoa", de: "Ich möchte zuerst die B1-Prüfung ablegen und dann einen Monat Pause machen. Danach fange ich mit B2 an.", vi: "Tôi muốn thi B1 trước rồi nghỉ một tháng. Sau đó bắt đầu học B2." },
          { speaker: "Lehrerin", de: "Das ist auch gut. Aber vergessen Sie nicht, in der Pause weiter Deutsch zu hören und zu lesen — sonst vergisst man schnell!", vi: "Vậy cũng tốt. Nhưng đừng quên trong thời gian nghỉ vẫn nghe và đọc tiếng Đức — nếu không sẽ quên nhanh lắm!" },
          { speaker: "Tuan", de: "Ich habe vor, mir einen Tandempartner zu suchen. So kann ich mein Sprechen verbessern, ohne extra für einen Kurs zu zahlen.", vi: "Tôi dự định tìm một đối tác trao đổi ngôn ngữ. Như vậy tôi có thể cải thiện kỹ năng nói mà không cần trả thêm tiền cho khóa học." },
          { speaker: "Lehrerin", de: "Sehr gute Idee! Und denken Sie daran: Je mehr Sie Deutsch im Alltag benutzen, desto schneller werden Sie Fortschritte machen. Ich bin stolz auf Sie alle!", vi: "Ý tưởng rất hay! Và hãy nhớ: Càng sử dụng tiếng Đức trong cuộc sống hàng ngày, bạn càng tiến bộ nhanh hơn. Tôi tự hào về tất cả các bạn!" },
          { speaker: "Klasse", de: "Danke, Frau Lehrerin! Auf Wiedersehen und bis bald im B2-Kurs!", vi: "Cảm ơn cô! Tạm biệt và hẹn gặp lại ở khóa B2!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Tipps für den Übergang B1 → B2",
        titleVi: "Mẹo chuyển tiếp B1 → B2",
        rule: "5 Tipps für den erfolgreichen Übergang von B1 zu B2: 1) Lesen Sie regelmäßig deutsche Texte (Nachrichten, Bücher, Blogs). 2) Hören Sie deutsche Podcasts und schauen Sie Filme/Serien auf Deutsch. 3) Schreiben Sie ein Tagebuch auf Deutsch. 4) Suchen Sie einen Tandempartner oder eine Sprachgruppe. 5) Wiederholen Sie regelmäßig die B1-Grammatik — sie ist die Grundlage für B2.",
        ruleVi: "5 mẹo chuyển tiếp thành công từ B1 sang B2: 1) Đọc đều đặn các văn bản tiếng Đức (tin tức, sách, blog). 2) Nghe podcast tiếng Đức và xem phim/series bằng tiếng Đức. 3) Viết nhật ký bằng tiếng Đức. 4) Tìm đối tác trao đổi ngôn ngữ hoặc nhóm học. 5) Ôn lại thường xuyên ngữ pháp B1 — đó là nền tảng cho B2. Gợi ý cụ thể: Deutsche Welle (dw.com) có khóa học miễn phí, Easy German trên YouTube rất phù hợp, và ứng dụng Anki giúp học từ vựng hiệu quả.",
        examples: [
          { de: "Lesetipp: 'Nachrichten leicht' auf dw.com — einfache Nachrichten auf Deutsch.", vi: "Gợi ý đọc: 'Nachrichten leicht' trên dw.com — tin tức tiếng Đức đơn giản." },
          { de: "Hörtipp: 'Easy German' Podcast — authentisches Deutsch mit Untertiteln.", vi: "Gợi ý nghe: Podcast 'Easy German' — tiếng Đức thực tế có phụ đề." },
          { de: "Schreibtipp: Jeden Tag 5 Sätze auf Deutsch schreiben — über Ihren Tag, Ihre Gefühle.", vi: "Gợi ý viết: Mỗi ngày viết 5 câu tiếng Đức — về ngày của bạn, cảm xúc của bạn." },
          { de: "Sprechtipp: Mit sich selbst auf Deutsch sprechen — beim Kochen, beim Spazierengehen.", vi: "Gợi ý nói: Nói chuyện với chính mình bằng tiếng Đức — khi nấu ăn, khi đi dạo." }
        ]
      },
      {
        type: "practice",
        titleDe: "Abschlussübung: Mein B1-Rückblick und B2-Plan",
        titleVi: "Bài tập cuối khóa: Nhìn lại B1 và Kế hoạch B2",
        instruction: "Schreiben Sie einen Text (ca. 200 Wörter) mit zwei Teilen: Teil 1 — Rückblick: Was haben Sie auf B1 gelernt? Was war schwierig? Was hat Ihnen am meisten Spaß gemacht? Teil 2 — Ausblick: Was sind Ihre Ziele für B2? Wie werden Sie sich vorbereiten? Benutzen Sie verschiedene Zeitformen (Perfekt für die Vergangenheit, Futur I oder Präsens für die Zukunft) und mindestens 3 verschiedene Nebensatztypen.",
        instructionVi: "Viết một bài (khoảng 200 từ) gồm hai phần: Phần 1 — Nhìn lại: Bạn đã học được gì ở B1? Điều gì khó? Điều gì thú vị nhất? Phần 2 — Hướng tới: Mục tiêu B2 của bạn là gì? Bạn sẽ chuẩn bị như thế nào? Sử dụng các thì khác nhau (Perfekt cho quá khứ, Futur I hoặc hiện tại cho tương lai) và ít nhất 3 loại mệnh đề phụ khác nhau."
      }
    ]
  }
];
