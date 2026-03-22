// A2 Chapters 9-10: Geld & Einkaufen, Zukunftspläne

import type { ContentBlock, Lesson } from "../a1/chapters9_10";

export const a2LessonsCh9_10: Lesson[] = [
  // ============================================================
  // CHAPTER 9: Geld & Einkaufen
  // ============================================================

  // --- Chapter 9, Lesson 1: Bankgeschäfte ---
  {
    id: "a2-ch9-l1",
    chapterId: 9,
    lessonNumber: 1,
    title: "Bankgeschäfte",
    titleVi: "Giao dịch ngân hàng",
    type: "Einführung",
    objectives: [
      "Nắm được từ vựng về ngân hàng và giao dịch tài chính",
      "Biết cách mở tài khoản ngân hàng ở Đức",
      "Giao tiếp cơ bản tại ngân hàng: hỏi thông tin, yêu cầu dịch vụ"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Bankgeschäfte in Deutschland",
        titleVi: "Giao dịch ngân hàng ở Đức",
        textDe: "In Deutschland braucht man ein Bankkonto (Girokonto) für viele Dinge: Miete zahlen, Gehalt empfangen, Rechnungen bezahlen. Man kann ein Konto bei einer Bank oder Sparkasse eröffnen. Dafür braucht man einen Ausweis (Pass oder Personalausweis) und eine Meldebescheinigung. Viele Deutsche bezahlen mit EC-Karte (Girokarte) oder machen eine Überweisung. Bargeld kann man am Geldautomaten abheben. Online-Banking wird immer beliebter.",
        textVi: "Ở Đức, bạn cần một tài khoản ngân hàng (Girokonto — tài khoản vãng lai) cho nhiều việc: trả tiền thuê nhà, nhận lương, thanh toán hóa đơn. Bạn có thể mở tài khoản ở một ngân hàng (Bank) hoặc quỹ tiết kiệm (Sparkasse). Để mở tài khoản, bạn cần giấy tờ tùy thân (hộ chiếu hoặc thẻ căn cước) và giấy đăng ký cư trú (Meldebescheinigung). Nhiều người Đức thanh toán bằng thẻ EC (Girokarte) hoặc chuyển khoản (Überweisung). Tiền mặt có thể rút ở máy ATM (Geldautomat). Ngân hàng trực tuyến (Online-Banking) ngày càng phổ biến."
      },
      {
        type: "vocabulary",
        titleDe: "Bankwortschatz",
        titleVi: "Từ vựng ngân hàng",
        words: [
          { de: "Konto", vi: "tài khoản", article: "das" },
          { de: "Girokonto", vi: "tài khoản vãng lai", article: "das" },
          { de: "Sparkonto", vi: "tài khoản tiết kiệm", article: "das" },
          { de: "Überweisung", vi: "chuyển khoản", article: "die" },
          { de: "Geldautomat", vi: "máy ATM", article: "der" },
          { de: "Bargeld", vi: "tiền mặt", article: "das" },
          { de: "EC-Karte / Girokarte", vi: "thẻ ghi nợ", article: "die" },
          { de: "Kreditkarte", vi: "thẻ tín dụng", article: "die" },
          { de: "Kontoauszug", vi: "sao kê tài khoản", article: "der" },
          { de: "Zinsen", vi: "lãi suất", article: "die (Pl.)" },
          { de: "Gebühr", vi: "phí", article: "die" },
          { de: "Dauerauftrag", vi: "lệnh chuyển khoản định kỳ", article: "der" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Verben rund ums Geld",
        titleVi: "Động từ liên quan đến tiền bạc",
        words: [
          { de: "eröffnen", vi: "mở (tài khoản)" },
          { de: "abheben", vi: "rút (tiền)" },
          { de: "einzahlen", vi: "nạp (tiền)" },
          { de: "überweisen", vi: "chuyển khoản" },
          { de: "sparen", vi: "tiết kiệm" },
          { de: "bezahlen", vi: "thanh toán" },
          { de: "unterschreiben", vi: "ký tên" },
          { de: "kündigen", vi: "hủy / chấm dứt" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Ein Konto eröffnen",
        titleVi: "Mở tài khoản",
        lines: [
          { speaker: "Hoa", de: "Guten Tag, ich möchte gern ein Girokonto eröffnen.", vi: "Xin chào, tôi muốn mở một tài khoản vãng lai." },
          { speaker: "Bankangestellte", de: "Guten Tag! Haben Sie Ihren Ausweis und Ihre Meldebescheinigung dabei?", vi: "Xin chào! Bạn có mang theo giấy tờ tùy thân và giấy đăng ký cư trú không?" },
          { speaker: "Hoa", de: "Ja, hier bitte. Ich habe meinen Reisepass und die Meldebescheinigung.", vi: "Có, đây ạ. Tôi có hộ chiếu và giấy đăng ký cư trú." },
          { speaker: "Bankangestellte", de: "Sehr gut. Möchten Sie auch Online-Banking nutzen?", vi: "Rất tốt. Bạn có muốn sử dụng ngân hàng trực tuyến không?" },
          { speaker: "Hoa", de: "Ja, bitte. Und was kostet das Konto im Monat?", vi: "Có, vâng ạ. Và tài khoản tốn bao nhiêu một tháng?" },
          { speaker: "Bankangestellte", de: "Das Girokonto kostet 3,90 Euro pro Monat. Dafür bekommen Sie eine EC-Karte und können kostenlos Geld abheben.", vi: "Tài khoản vãng lai tốn 3,90 Euro mỗi tháng. Với đó bạn nhận được một thẻ EC và có thể rút tiền miễn phí." },
          { speaker: "Hoa", de: "Das klingt gut. Kann ich auch Geld nach Vietnam überweisen?", vi: "Nghe hay đấy. Tôi có thể chuyển tiền về Việt Nam không?" },
          { speaker: "Bankangestellte", de: "Ja, Auslandsüberweisungen sind möglich. Dafür gibt es aber eine Gebühr.", vi: "Có, chuyển khoản quốc tế là có thể. Nhưng có phí cho việc đó." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Höfliche Bitten mit 'möchte' und 'könnte'",
        titleVi: "Yêu cầu lịch sự với 'möchte' và 'könnte'",
        rule: "Ich möchte + Infinitiv (Tôi muốn...). Könnte ich + Infinitiv? (Tôi có thể... không?). Ich hätte gern + Akkusativ (Tôi muốn có...).",
        ruleVi: "Ở ngân hàng và trong các tình huống lịch sự, chúng ta dùng: 'Ich möchte...' (Tôi muốn...) — lịch sự hơn 'Ich will'. 'Könnte ich...?' (Tôi có thể... không?) — lịch sự hơn 'Kann ich...?'. 'Ich hätte gern...' (Tôi muốn có...) — cách nói rất lịch sự. Đây là các dạng Konjunktiv II, dùng để thể hiện sự lịch sự.",
        examples: [
          { de: "Ich möchte ein Konto eröffnen.", vi: "Tôi muốn mở một tài khoản." },
          { de: "Könnte ich bitte den Kontoauszug bekommen?", vi: "Tôi có thể xin bản sao kê tài khoản không ạ?" },
          { de: "Ich hätte gern Informationen über ein Sparkonto.", vi: "Tôi muốn có thông tin về tài khoản tiết kiệm." },
          { de: "Könnten Sie mir bitte helfen?", vi: "Bạn có thể giúp tôi được không ạ?" }
        ]
      },
      {
        type: "practice",
        titleDe: "Rollenspiel: Bei der Bank",
        titleVi: "Nhập vai: Ở ngân hàng",
        instruction: "Du gehst zur Bank und möchtest: 1) ein Konto eröffnen, 2) Geld abheben, 3) eine Überweisung machen. Benutze höfliche Formulierungen (Ich möchte..., Könnte ich..., Ich hätte gern...). Schreibe für jede Situation 2-3 Sätze.",
        instructionVi: "Bạn đến ngân hàng và muốn: 1) mở tài khoản, 2) rút tiền, 3) chuyển khoản. Sử dụng cách nói lịch sự (Ich möchte..., Könnte ich..., Ich hätte gern...). Viết 2-3 câu cho mỗi tình huống."
      }
    ]
  },

  // --- Chapter 9, Lesson 2: Online-Shopping ---
  {
    id: "a2-ch9-l2",
    chapterId: 9,
    lessonNumber: 2,
    title: "Online-Shopping",
    titleVi: "Mua sắm trực tuyến",
    type: "Grammatik",
    objectives: [
      "Nắm được từ vựng về mua sắm trực tuyến",
      "Hiểu và sử dụng tính từ so sánh (Komparativ und Superlativ)",
      "Đọc và hiểu mô tả sản phẩm bằng tiếng Đức"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Online-Shopping in Deutschland",
        titleVi: "Mua sắm trực tuyến ở Đức",
        textDe: "Online-Shopping ist in Deutschland sehr beliebt. Viele Deutsche kaufen bei Amazon, Zalando, Otto oder eBay ein. Man kann fast alles online bestellen: Kleidung, Elektronik, Lebensmittel und mehr. Die Lieferung dauert oft nur 1-3 Tage. Man kann per Rechnung, Kreditkarte, PayPal oder Lastschrift bezahlen. Wenn man etwas nicht mag, kann man es innerhalb von 14 Tagen zurückschicken — das ist das Widerrufsrecht.",
        textVi: "Mua sắm trực tuyến ở Đức rất phổ biến. Nhiều người Đức mua hàng ở Amazon, Zalando, Otto hoặc eBay. Bạn có thể đặt mua gần như mọi thứ: quần áo, điện tử, thực phẩm và nhiều hơn nữa. Giao hàng thường chỉ mất 1-3 ngày. Bạn có thể thanh toán bằng hóa đơn (Rechnung), thẻ tín dụng, PayPal hoặc ghi nợ trực tiếp (Lastschrift). Nếu bạn không thích sản phẩm, bạn có thể trả lại trong vòng 14 ngày — đó là quyền hủy đơn (Widerrufsrecht). Đây là quyền lợi người tiêu dùng rất mạnh ở Đức."
      },
      {
        type: "vocabulary",
        titleDe: "Online-Shopping Wortschatz",
        titleVi: "Từ vựng mua sắm trực tuyến",
        words: [
          { de: "Bestellung", vi: "đơn đặt hàng", article: "die" },
          { de: "Warenkorb", vi: "giỏ hàng", article: "der" },
          { de: "Lieferung", vi: "giao hàng", article: "die" },
          { de: "Versandkosten", vi: "phí vận chuyển", article: "die (Pl.)" },
          { de: "Rechnung", vi: "hóa đơn", article: "die" },
          { de: "Rabatt", vi: "giảm giá", article: "der" },
          { de: "Angebot", vi: "khuyến mãi / ưu đãi", article: "das" },
          { de: "Kundenbewertung", vi: "đánh giá của khách hàng", article: "die" },
          { de: "Rücksendung", vi: "trả hàng", article: "die" },
          { de: "Widerrufsrecht", vi: "quyền hủy đơn", article: "das" },
          { de: "Gutschein", vi: "phiếu giảm giá", article: "der" },
          { de: "Zahlungsart", vi: "phương thức thanh toán", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Komparativ und Superlativ",
        titleVi: "So sánh hơn và so sánh nhất",
        rule: "Komparativ: Adjektiv + -er (+ als). Superlativ: am + Adjektiv + -sten / der/die/das + Adjektiv + -ste. Umlaut bei: alt → älter, groß → größer, billig → billiger.",
        ruleVi: "So sánh hơn (Komparativ): Tính từ + -er (+ als = hơn). So sánh nhất (Superlativ): am + tính từ + -sten / der/die/das + tính từ + -ste. Một số tính từ có Umlaut khi so sánh: alt → älter (già hơn), groß → größer (lớn hơn), jung → jünger (trẻ hơn). Nhưng KHÔNG phải tất cả: billig → billiger (KHÔNG có Umlaut). Bất quy tắc: gut → besser → am besten, viel → mehr → am meisten, gern → lieber → am liebsten.",
        examples: [
          { de: "Das Handy ist billiger als der Laptop.", vi: "Điện thoại rẻ hơn laptop." },
          { de: "Amazon ist größer als Zalando.", vi: "Amazon lớn hơn Zalando." },
          { de: "Dieses Angebot ist am besten.", vi: "Ưu đãi này là tốt nhất." },
          { de: "Ich kaufe lieber online als im Geschäft.", vi: "Tôi thích mua trực tuyến hơn ở cửa hàng." },
          { de: "Das ist das teuerste Produkt im Shop.", vi: "Đó là sản phẩm đắt nhất trong cửa hàng." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Vergleiche mit so...wie und als",
        titleVi: "So sánh bằng với so...wie và so sánh hơn với als",
        rule: "Gleichheit: so + Adjektiv + wie (genauso...wie). Unterschied: Komparativ + als.",
        ruleVi: "So sánh ngang bằng: so + tính từ + wie (= ... bằng / giống như). Cũng có thể dùng genauso...wie. So sánh hơn: tính từ so sánh + als (= hơn). Lưu ý: tiếng Đức dùng 'als' (KHÔNG dùng 'wie') cho so sánh hơn — đây là lỗi phổ biến!",
        examples: [
          { de: "Die Jacke ist genauso teuer wie die Hose.", vi: "Áo khoác đắt bằng quần." },
          { de: "Online-Shopping ist bequemer als Einkaufen im Laden.", vi: "Mua sắm trực tuyến tiện hơn mua ở cửa hàng." },
          { de: "Die Qualität ist nicht so gut wie erwartet.", vi: "Chất lượng không tốt như mong đợi." },
          { de: "Dieser Shop ist besser als der andere.", vi: "Cửa hàng này tốt hơn cửa hàng kia." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Ein Geschenk online kaufen",
        titleVi: "Mua quà trực tuyến",
        lines: [
          { speaker: "Minh", de: "Ich suche ein Geschenk für meine Mutter. Hast du eine Idee?", vi: "Tôi đang tìm quà cho mẹ. Bạn có ý tưởng gì không?" },
          { speaker: "Lisa", de: "Was mag sie denn? Schmuck? Kleidung? Bücher?", vi: "Mẹ bạn thích gì? Trang sức? Quần áo? Sách?" },
          { speaker: "Minh", de: "Sie mag Schmuck. Aber der Schmuck im Kaufhaus ist teurer als online.", vi: "Mẹ tôi thích trang sức. Nhưng trang sức ở trung tâm thương mại đắt hơn trực tuyến." },
          { speaker: "Lisa", de: "Stimmt. Schau mal bei Zalando, die haben gerade Rabatt. Bis zu 30 Prozent!", vi: "Đúng rồi. Xem ở Zalando đi, họ đang giảm giá. Lên đến 30 phần trăm!" },
          { speaker: "Minh", de: "Oh, diese Kette ist schön! Und sie ist billiger als die andere. Nur 25 Euro.", vi: "Ồ, sợi dây chuyền này đẹp! Và nó rẻ hơn cái kia. Chỉ 25 Euro." },
          { speaker: "Lisa", de: "Die Kundenbewertungen sind auch gut. Am besten bestellst du gleich!", vi: "Đánh giá của khách hàng cũng tốt. Tốt nhất bạn đặt hàng luôn đi!" },
          { speaker: "Minh", de: "Okay! Und die Versandkosten sind kostenlos ab 20 Euro. Perfekt!", vi: "Được! Và phí vận chuyển miễn phí từ 20 Euro. Hoàn hảo!" }
        ]
      },
      {
        type: "practice",
        titleDe: "Produkte vergleichen",
        titleVi: "So sánh sản phẩm",
        instruction: "Vergleiche diese Produkte: Handy A (300€, gut, klein) vs. Handy B (500€, sehr gut, groß). Schreibe 5 Sätze mit Komparativ, Superlativ und so...wie. Benutze: teurer als, billiger als, besser als, größer als, am besten.",
        instructionVi: "So sánh các sản phẩm: Điện thoại A (300€, tốt, nhỏ) với Điện thoại B (500€, rất tốt, lớn). Viết 5 câu với so sánh hơn, so sánh nhất và so...wie. Sử dụng: teurer als, billiger als, besser als, größer als, am besten."
      }
    ]
  },

  // --- Chapter 9, Lesson 3: Reklamation & Umtausch ---
  {
    id: "a2-ch9-l3",
    chapterId: 9,
    lessonNumber: 3,
    title: "Reklamation & Umtausch",
    titleVi: "Khiếu nại và đổi trả hàng",
    type: "Fertigkeit",
    objectives: [
      "Biết cách khiếu nại khi sản phẩm bị lỗi",
      "Viết email khiếu nại đơn giản",
      "Hiểu quyền lợi người tiêu dùng cơ bản ở Đức"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Reklamation und Umtausch in Deutschland",
        titleVi: "Khiếu nại và đổi trả hàng ở Đức",
        textDe: "In Deutschland haben Kunden viele Rechte. Wenn ein Produkt kaputt ist oder nicht funktioniert, kann man es reklamieren. Bei Online-Käufen hat man 14 Tage Widerrufsrecht — man kann die Ware ohne Grund zurückschicken. Bei defekten Produkten gibt es eine Gewährleistung von 2 Jahren. Man kann den Artikel umtauschen, reparieren lassen oder das Geld zurückbekommen. Wichtig: Immer den Kassenbon (Quittung) aufbewahren!",
        textVi: "Ở Đức, khách hàng có nhiều quyền lợi. Khi sản phẩm bị hỏng hoặc không hoạt động, bạn có thể khiếu nại (reklamieren). Khi mua trực tuyến, bạn có 14 ngày quyền hủy đơn (Widerrufsrecht) — bạn có thể gửi trả hàng mà không cần lý do. Với sản phẩm bị lỗi, có bảo hành (Gewährleistung) 2 năm. Bạn có thể đổi hàng (umtauschen), cho sửa chữa (reparieren lassen) hoặc nhận lại tiền (Geld zurückbekommen). Quan trọng: Luôn giữ hóa đơn (Kassenbon / Quittung)!"
      },
      {
        type: "vocabulary",
        titleDe: "Reklamation und Umtausch",
        titleVi: "Từ vựng khiếu nại và đổi trả",
        words: [
          { de: "Reklamation", vi: "khiếu nại", article: "die" },
          { de: "Umtausch", vi: "đổi hàng", article: "der" },
          { de: "Rückgabe", vi: "trả hàng", article: "die" },
          { de: "Kassenbon / Quittung", vi: "hóa đơn mua hàng", article: "der / die" },
          { de: "Gewährleistung", vi: "bảo hành (theo luật)", article: "die" },
          { de: "Garantie", vi: "bảo hành (của nhà sản xuất)", article: "die" },
          { de: "Mangel / Defekt", vi: "lỗi / hỏng", article: "der" },
          { de: "Erstattung", vi: "hoàn tiền", article: "die" },
          { de: "Beschwerde", vi: "lời phàn nàn", article: "die" },
          { de: "kaputt", vi: "hỏng" },
          { de: "beschädigt", vi: "bị hư hại" },
          { de: "zurückschicken", vi: "gửi trả lại" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Reklamation im Geschäft",
        titleVi: "Khiếu nại ở cửa hàng",
        lines: [
          { speaker: "Lan", de: "Entschuldigung, ich habe ein Problem. Ich habe diese Jacke letzte Woche gekauft, aber der Reißverschluss ist kaputt.", vi: "Xin lỗi, tôi có vấn đề. Tôi đã mua áo khoác này tuần trước, nhưng dây kéo bị hỏng." },
          { speaker: "Verkäuferin", de: "Oh, das tut mir leid. Haben Sie den Kassenbon dabei?", vi: "Ồ, tôi rất tiếc. Bạn có mang hóa đơn theo không?" },
          { speaker: "Lan", de: "Ja, hier bitte. Kann ich die Jacke umtauschen?", vi: "Có, đây ạ. Tôi có thể đổi áo khoác không?" },
          { speaker: "Verkäuferin", de: "Natürlich. Möchten Sie eine neue Jacke oder lieber das Geld zurück?", vi: "Tất nhiên. Bạn muốn áo khoác mới hay muốn nhận lại tiền?" },
          { speaker: "Lan", de: "Ich hätte gern eine neue Jacke in der gleichen Größe, bitte.", vi: "Tôi muốn một áo khoác mới cùng cỡ, xin vui lòng." },
          { speaker: "Verkäuferin", de: "Kein Problem. Ich hole Ihnen sofort eine neue. Größe M, richtig?", vi: "Không vấn đề. Tôi lấy cho bạn một cái mới ngay. Cỡ M, đúng không?" },
          { speaker: "Lan", de: "Ja, genau. Vielen Dank für Ihre Hilfe!", vi: "Vâng, đúng rồi. Cảm ơn bạn rất nhiều vì sự giúp đỡ!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Eine Reklamations-E-Mail schreiben",
        titleVi: "Viết email khiếu nại",
        rule: "Struktur: 1) Anrede (Sehr geehrte Damen und Herren), 2) Problem beschreiben (Ich habe am... bestellt/gekauft. Leider...), 3) Wunsch äußern (Ich möchte... / Bitte...), 4) Grußformel (Mit freundlichen Grüßen).",
        ruleVi: "Cấu trúc email khiếu nại: 1) Lời chào mở đầu: 'Sehr geehrte Damen und Herren,' (Kính gửi quý ông bà). 2) Mô tả vấn đề: 'Ich habe am [ngày] ... bestellt/gekauft. Leider ist/hat...' (Tôi đã đặt/mua vào ngày... Đáng tiếc...). 3) Nêu yêu cầu: 'Ich möchte den Artikel umtauschen / Ich bitte um Erstattung.' (Tôi muốn đổi hàng / Tôi yêu cầu hoàn tiền). 4) Kết thúc: 'Mit freundlichen Grüßen' (Trân trọng). Lưu ý: Luôn ghi kèm số đơn hàng (Bestellnummer) và ngày mua.",
        examples: [
          { de: "Sehr geehrte Damen und Herren, am 15. März habe ich eine Waschmaschine bestellt (Bestellnr. 12345). Leider ist sie beschädigt angekommen.", vi: "Kính gửi quý ông bà, vào ngày 15 tháng 3 tôi đã đặt một máy giặt (số đơn 12345). Đáng tiếc nó đã đến bị hư hại." },
          { de: "Ich möchte den Artikel bitte umtauschen oder eine Erstattung bekommen.", vi: "Tôi muốn đổi sản phẩm hoặc nhận hoàn tiền." },
          { de: "Bitte kontaktieren Sie mich unter: hoa.nguyen@email.de.", vi: "Vui lòng liên hệ tôi qua: hoa.nguyen@email.de." },
          { de: "Mit freundlichen Grüßen, Hoa Nguyen", vi: "Trân trọng, Hoa Nguyen" }
        ]
      },
      {
        type: "explanation",
        titleDe: "Verbraucherrechte in Deutschland",
        titleVi: "Quyền người tiêu dùng ở Đức — Thông tin văn hóa",
        textDe: "Deutsche Verbraucher haben starke Rechte: 14 Tage Widerrufsrecht bei Online-Käufen, 2 Jahre Gewährleistung bei neuen Produkten, kostenlose Reparatur oder Ersatz bei Mängeln in der Gewährleistungszeit. Tipp: Viele Geschäfte tauschen auch ohne Kassenbon um, aber sie müssen es nicht. Bei Problemen kann die Verbraucherzentrale helfen.",
        textVi: "Người tiêu dùng ở Đức có quyền lợi mạnh mẽ: 14 ngày quyền hủy đơn khi mua trực tuyến, 2 năm bảo hành cho sản phẩm mới, sửa chữa hoặc thay thế miễn phí khi có lỗi trong thời gian bảo hành. Mẹo: Nhiều cửa hàng vẫn đổi hàng ngay cả khi không có hóa đơn, nhưng họ không bắt buộc phải làm vậy. Khi gặp vấn đề, bạn có thể liên hệ trung tâm tư vấn người tiêu dùng (Verbraucherzentrale) — đây là tổ chức bảo vệ quyền lợi người tiêu dùng, có ở mỗi bang của Đức. So với Việt Nam, quyền trả hàng ở Đức rất mạnh và bạn nên tận dụng."
      },
      {
        type: "practice",
        titleDe: "Schreibe eine Reklamations-E-Mail",
        titleVi: "Viết một email khiếu nại",
        instruction: "Du hast online einen Fernseher bestellt (Bestellnummer: 78910, am 1. März). Der Fernseher hat einen Kratzer auf dem Bildschirm. Schreibe eine Reklamations-E-Mail. Benutze: Sehr geehrte Damen und Herren / Ich habe am... bestellt / Leider... / Ich möchte... / Mit freundlichen Grüßen.",
        instructionVi: "Bạn đã đặt mua một tivi trực tuyến (số đơn: 78910, ngày 1 tháng 3). Tivi bị trầy xước trên màn hình. Viết một email khiếu nại. Sử dụng: Sehr geehrte Damen und Herren / Ich habe am... bestellt / Leider... / Ich möchte... / Mit freundlichen Grüßen."
      }
    ]
  },

  // --- Chapter 9, Lesson 4: Nebensätze mit weil, dass, wenn ---
  {
    id: "a2-ch9-l4",
    chapterId: 9,
    lessonNumber: 4,
    title: "Nebensätze mit weil, dass, wenn",
    titleVi: "Mệnh đề phụ với weil, dass, wenn",
    type: "Integration",
    objectives: [
      "Hiểu cấu trúc mệnh đề phụ (Nebensatz) trong tiếng Đức",
      "Sử dụng weil (vì), dass (rằng), wenn (nếu/khi) đúng cách",
      "Áp dụng trật tự từ đặc biệt trong mệnh đề phụ: động từ chia đứng cuối"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Nebensätze: Verb am Ende!",
        titleVi: "Mệnh đề phụ: Động từ ở cuối!",
        textDe: "In deutschen Nebensätzen steht das konjugierte Verb am Ende. Das ist die wichtigste Regel! Ein Nebensatz beginnt mit einer Konjunktion (weil, dass, wenn, obwohl...) und das Verb geht ans Ende. Hauptsatz: Ich lerne Deutsch. Ich möchte in Deutschland arbeiten. → Nebensatz: Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte. Beachte: 'möchte' steht jetzt am Ende!",
        textVi: "Trong mệnh đề phụ tiếng Đức, động từ chia đứng ở CUỐI câu. Đây là quy tắc quan trọng nhất! Mệnh đề phụ bắt đầu bằng liên từ (weil, dass, wenn, obwohl...) và động từ chia được đẩy xuống cuối. So sánh: Mệnh đề chính: Ich lerne Deutsch. Ich möchte in Deutschland arbeiten. → Mệnh đề phụ: Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte. Chú ý: 'möchte' giờ đứng ở cuối! Đây là điểm rất khác so với tiếng Việt và tiếng Anh — trong tiếng Việt chúng ta nói 'vì tôi muốn làm việc ở Đức' (động từ ở giữa), nhưng tiếng Đức đẩy động từ xuống cuối."
      },
      {
        type: "grammar",
        titleDe: "Nebensatz mit 'weil' (Grund)",
        titleVi: "Mệnh đề phụ với 'weil' (lý do)",
        rule: "weil = vì. Hauptsatz, weil + Subjekt + ... + Verb (am Ende). Oder: Weil + Subjekt + ... + Verb, Verb + Subjekt (invertiert).",
        ruleVi: "'weil' = vì, bởi vì. Dùng để nêu lý do. Cấu trúc: Mệnh đề chính + , weil + chủ ngữ + ... + động từ (ở cuối). Hoặc đảo ngược: Weil + chủ ngữ + ... + động từ, động từ + chủ ngữ (đảo ngữ). Khi mệnh đề weil đứng đầu, mệnh đề chính bắt đầu bằng động từ chia (vì mệnh đề phụ chiếm vị trí 1, động từ chia phải ở vị trí 2).",
        examples: [
          { de: "Ich kaufe online, weil es billiger ist.", vi: "Tôi mua trực tuyến vì nó rẻ hơn." },
          { de: "Sie spart Geld, weil sie ein Auto kaufen möchte.", vi: "Cô ấy tiết kiệm tiền vì muốn mua ô tô." },
          { de: "Weil das Produkt kaputt war, habe ich es zurückgeschickt.", vi: "Vì sản phẩm bị hỏng, tôi đã gửi trả lại." },
          { de: "Er geht zur Bank, weil er Geld abheben muss.", vi: "Anh ấy đi ngân hàng vì phải rút tiền." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nebensatz mit 'dass' (Aussage)",
        titleVi: "Mệnh đề phụ với 'dass' (nội dung phát biểu)",
        rule: "dass = rằng. Hauptsatz + , dass + Subjekt + ... + Verb (am Ende). Oft nach: Ich denke/glaube/finde/hoffe/weiß, dass...",
        ruleVi: "'dass' = rằng. Dùng để diễn đạt nội dung suy nghĩ, ý kiến, cảm xúc. Cấu trúc: Mệnh đề chính + , dass + chủ ngữ + ... + động từ (ở cuối). Thường đi sau: Ich denke (tôi nghĩ), Ich glaube (tôi tin), Ich finde (tôi thấy), Ich hoffe (tôi hy vọng), Ich weiß (tôi biết), Es ist wichtig (điều quan trọng là). 'dass' tương tự 'that' trong tiếng Anh: 'I think that...'",
        examples: [
          { de: "Ich finde, dass Online-Shopping praktisch ist.", vi: "Tôi thấy rằng mua sắm trực tuyến rất tiện lợi." },
          { de: "Ich hoffe, dass die Lieferung morgen kommt.", vi: "Tôi hy vọng rằng hàng sẽ đến vào ngày mai." },
          { de: "Er weiß, dass er die Rechnung bezahlen muss.", vi: "Anh ấy biết rằng anh ấy phải trả hóa đơn." },
          { de: "Es ist wichtig, dass man den Kassenbon aufbewahrt.", vi: "Điều quan trọng là phải giữ hóa đơn." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Nebensatz mit 'wenn' (Bedingung / Zeit)",
        titleVi: "Mệnh đề phụ với 'wenn' (điều kiện / thời gian)",
        rule: "wenn = nếu / khi. Hauptsatz, wenn + Subjekt + ... + Verb (am Ende). Oder: Wenn + Subjekt + ... + Verb, (dann) + Verb + Subjekt.",
        ruleVi: "'wenn' = nếu / khi (lặp lại). Dùng cho điều kiện và sự kiện lặp lại. Cấu trúc: Mệnh đề chính, wenn + chủ ngữ + ... + động từ (ở cuối). Hoặc: Wenn + chủ ngữ + ... + động từ, (dann) + động từ + chủ ngữ. Có thể thêm 'dann' (thì) ở mệnh đề chính nhưng không bắt buộc. Lưu ý phân biệt: 'wenn' (nếu/khi lặp lại) khác 'als' (khi — quá khứ, một lần duy nhất).",
        examples: [
          { de: "Wenn ich Geld brauche, gehe ich zum Geldautomaten.", vi: "Khi tôi cần tiền, tôi đi đến máy ATM." },
          { de: "Ich kaufe es, wenn es billiger wird.", vi: "Tôi sẽ mua nó nếu nó rẻ hơn." },
          { de: "Wenn das Produkt nicht gefällt, kann man es zurückschicken.", vi: "Nếu sản phẩm không vừa ý, bạn có thể gửi trả." },
          { de: "Wenn ich online einkaufe, bezahle ich immer mit PayPal.", vi: "Khi tôi mua sắm trực tuyến, tôi luôn thanh toán bằng PayPal." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Warum kaufst du online?",
        titleVi: "Tại sao bạn mua hàng trực tuyến?",
        lines: [
          { speaker: "Tuan", de: "Ich kaufe fast alles online. Und du?", vi: "Tôi mua gần như mọi thứ trực tuyến. Còn bạn?" },
          { speaker: "Sabine", de: "Naja, ich finde, dass man im Geschäft besser sehen kann, ob etwas passt.", vi: "Hmm, tôi thấy rằng ở cửa hàng thì nhìn rõ hơn xem đồ có hợp không." },
          { speaker: "Tuan", de: "Das stimmt. Aber ich kaufe online, weil es oft billiger ist.", vi: "Đúng vậy. Nhưng tôi mua trực tuyến vì nó thường rẻ hơn." },
          { speaker: "Sabine", de: "Und wenn die Sachen nicht passen? Was machst du dann?", vi: "Và nếu đồ không vừa? Lúc đó bạn làm gì?" },
          { speaker: "Tuan", de: "Dann schicke ich sie einfach zurück. Ich weiß, dass man 14 Tage Widerrufsrecht hat.", vi: "Thì tôi gửi trả lại thôi. Tôi biết rằng mình có 14 ngày quyền hủy đơn." },
          { speaker: "Sabine", de: "Das ist praktisch. Ich glaube, dass ich das auch mal probieren sollte.", vi: "Tiện thật. Tôi nghĩ rằng tôi cũng nên thử." },
          { speaker: "Tuan", de: "Ja! Wenn du einen Gutschein brauchst, sag mir Bescheid!", vi: "Đúng rồi! Nếu bạn cần phiếu giảm giá, nói cho tôi biết nhé!" }
        ]
      },
      {
        type: "practice",
        titleDe: "Sätze mit weil, dass, wenn verbinden",
        titleVi: "Nối câu với weil, dass, wenn",
        instruction: "Verbinde die Sätze mit weil, dass oder wenn: 1) Ich spare Geld. Ich möchte ein neues Handy kaufen. (weil) 2) Ich glaube. Die Preise werden bald sinken. (dass) 3) Du hast Probleme mit dem Produkt. Du kannst es reklamieren. (wenn) 4) Er bezahlt immer bar. Er hat keine Kreditkarte. (weil) 5) Es ist wichtig. Man vergleicht die Preise. (dass)",
        instructionVi: "Nối các câu bằng weil, dass hoặc wenn (nhớ: động từ chia đứng cuối trong mệnh đề phụ!): 1) Ich spare Geld. + Ich möchte ein neues Handy kaufen. (weil) 2) Ich glaube. + Die Preise werden bald sinken. (dass) 3) Du hast Probleme mit dem Produkt. + Du kannst es reklamieren. (wenn) 4) Er bezahlt immer bar. + Er hat keine Kreditkarte. (weil) 5) Es ist wichtig. + Man vergleicht die Preise. (dass)"
      }
    ]
  },

  // ============================================================
  // CHAPTER 10: Zukunftspläne
  // ============================================================

  // --- Chapter 10, Lesson 1: Träume & Wünsche ---
  {
    id: "a2-ch10-l1",
    chapterId: 10,
    lessonNumber: 1,
    title: "Träume & Wünsche",
    titleVi: "Ước mơ và mong muốn",
    type: "Einführung",
    objectives: [
      "Nắm được từ vựng về ước mơ, mong muốn và kế hoạch tương lai",
      "Sử dụng 'würde + Infinitiv' để nói về điều mình muốn làm",
      "Nói về kế hoạch tương lai của bản thân"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Über Träume und Wünsche sprechen",
        titleVi: "Nói về ước mơ và mong muốn",
        textDe: "Jeder Mensch hat Träume und Wünsche für die Zukunft. Man kann über die Zukunft mit verschiedenen Ausdrücken sprechen: 'Ich möchte...' (Wunsch), 'Ich würde gern...' (höflicher Wunsch), 'Ich will...' (starker Wille), 'Ich habe vor,...' (Plan), 'Mein Traum ist es,...' (Traum). In Deutschland ist es normal, über seine Zukunftspläne zu sprechen, besonders über Beruf, Reisen und persönliche Ziele.",
        textVi: "Mỗi người đều có ước mơ và mong muốn cho tương lai. Bạn có thể nói về tương lai bằng nhiều cách diễn đạt: 'Ich möchte...' (tôi muốn — mong muốn), 'Ich würde gern...' (tôi muốn — lịch sự hơn, nhẹ nhàng hơn), 'Ich will...' (tôi muốn — ý chí mạnh), 'Ich habe vor,...' (tôi dự định), 'Mein Traum ist es,...' (ước mơ của tôi là). Ở Đức, việc nói về kế hoạch tương lai là bình thường, đặc biệt về nghề nghiệp, du lịch và mục tiêu cá nhân."
      },
      {
        type: "vocabulary",
        titleDe: "Träume und Zukunft",
        titleVi: "Ước mơ và tương lai",
        words: [
          { de: "Traum", vi: "ước mơ / giấc mơ", article: "der" },
          { de: "Wunsch", vi: "mong muốn / điều ước", article: "der" },
          { de: "Zukunft", vi: "tương lai", article: "die" },
          { de: "Ziel", vi: "mục tiêu", article: "das" },
          { de: "Plan", vi: "kế hoạch", article: "der" },
          { de: "Hoffnung", vi: "hy vọng", article: "die" },
          { de: "Erfahrung", vi: "kinh nghiệm", article: "die" },
          { de: "Erfolg", vi: "thành công", article: "der" },
          { de: "Chance", vi: "cơ hội", article: "die" },
          { de: "Ausbildung", vi: "đào tạo nghề", article: "die" },
          { de: "Studium", vi: "việc học đại học", article: "das" },
          { de: "Karriere", vi: "sự nghiệp", article: "die" }
        ]
      },
      {
        type: "grammar",
        titleDe: "'würde' + Infinitiv (Konjunktiv II)",
        titleVi: "'würde' + động từ nguyên mẫu (Konjunktiv II)",
        rule: "ich würde | du würdest | er/sie/es würde | wir würden | ihr würdet | sie/Sie würden + Infinitiv am Ende. Für irreale Wünsche und höfliche Aussagen.",
        ruleVi: "Dạng 'würde + Infinitiv' dùng cho mong muốn không thật (giả định) và cách nói lịch sự: ich würde | du würdest | er/sie/es würde | wir würden | ihr würdet | sie/Sie würden + động từ nguyên mẫu ở cuối. Ví dụ: 'Ich würde gern nach Japan reisen' = Tôi muốn đi Nhật (nhưng chưa chắc sẽ đi). So sánh: 'Ich möchte' (muốn — thực tế hơn) vs 'Ich würde gern' (muốn — giả định, lịch sự hơn). Tương tự 'would' trong tiếng Anh: 'I would like to...'",
        examples: [
          { de: "Ich würde gern eine Weltreise machen.", vi: "Tôi muốn đi du lịch vòng quanh thế giới." },
          { de: "Er würde gern in Deutschland studieren.", vi: "Anh ấy muốn du học ở Đức." },
          { de: "Wir würden gern ein Haus kaufen.", vi: "Chúng tôi muốn mua một ngôi nhà." },
          { de: "Was würdest du machen, wenn du viel Geld hättest?", vi: "Bạn sẽ làm gì nếu có nhiều tiền?" },
          { de: "Ich würde ein Restaurant in Vietnam eröffnen.", vi: "Tôi sẽ mở một nhà hàng ở Việt Nam." }
        ]
      },
      {
        type: "grammar",
        titleDe: "Zukunftspläne ausdrücken",
        titleVi: "Diễn đạt kế hoạch tương lai",
        rule: "Ich habe vor, ... zu + Infinitiv. Ich plane, ... zu + Infinitiv. Mein Traum ist es, ... zu + Infinitiv. In Zukunft möchte ich... Nächstes Jahr werde ich...",
        ruleVi: "Các cách nói về kế hoạch tương lai: 1) 'Ich habe vor, ... zu + Infinitiv' (Tôi dự định...). 2) 'Ich plane, ... zu + Infinitiv' (Tôi lên kế hoạch...). 3) 'Mein Traum ist es, ... zu + Infinitiv' (Ước mơ của tôi là...). 4) 'In Zukunft möchte ich...' (Trong tương lai tôi muốn...). 5) 'Nächstes Jahr werde ich...' (Năm tới tôi sẽ...). Lưu ý cấu trúc 'zu + Infinitiv': 'zu' đứng ngay trước động từ nguyên mẫu ở cuối câu. Với động từ tách: 'vor|haben' → 'Ich habe vor, anzufangen' ('zu' chèn vào giữa tiền tố và thân từ).",
        examples: [
          { de: "Ich habe vor, nächstes Jahr die B1-Prüfung zu machen.", vi: "Tôi dự định năm sau thi B1." },
          { de: "Sie plant, nach dem Studium nach Vietnam zurückzukehren.", vi: "Cô ấy dự định sau khi tốt nghiệp sẽ quay về Việt Nam." },
          { de: "Mein Traum ist es, ein eigenes Geschäft zu eröffnen.", vi: "Ước mơ của tôi là mở một cửa hàng riêng." },
          { de: "In Zukunft möchte ich als Dolmetscherin arbeiten.", vi: "Trong tương lai tôi muốn làm phiên dịch viên." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Was sind deine Träume?",
        titleVi: "Ước mơ của bạn là gì?",
        lines: [
          { speaker: "Anna", de: "Sag mal, Hoa, was sind deine Pläne für die Zukunft?", vi: "Này Hoa, kế hoạch tương lai của bạn là gì?" },
          { speaker: "Hoa", de: "Ich habe vor, zuerst die B1-Prüfung zu bestehen. Dann möchte ich an einer Uni studieren.", vi: "Tôi dự định trước tiên thi đậu B1. Sau đó tôi muốn học đại học." },
          { speaker: "Anna", de: "Was würdest du gern studieren?", vi: "Bạn muốn học ngành gì?" },
          { speaker: "Hoa", de: "Ich würde gern Betriebswirtschaft studieren. Mein Traum ist es, später eine Firma zwischen Deutschland und Vietnam aufzubauen.", vi: "Tôi muốn học quản trị kinh doanh. Ước mơ của tôi là sau này xây dựng một công ty giữa Đức và Việt Nam." },
          { speaker: "Anna", de: "Das klingt toll! Und was noch?", vi: "Nghe tuyệt vời! Và còn gì nữa?" },
          { speaker: "Hoa", de: "Ich würde auch gern mehr reisen. Wenn ich genug Geld habe, möchte ich ganz Europa sehen.", vi: "Tôi cũng muốn đi du lịch nhiều hơn. Nếu có đủ tiền, tôi muốn đi khắp châu Âu." },
          { speaker: "Anna", de: "Das schaffen wir! Ich glaube, dass du alles erreichen kannst, wenn du fleißig bist.", vi: "Chúng ta sẽ làm được! Tôi tin rằng bạn có thể đạt được mọi thứ nếu bạn chăm chỉ." }
        ]
      },
      {
        type: "practice",
        titleDe: "Meine Zukunftspläne",
        titleVi: "Kế hoạch tương lai của tôi",
        instruction: "Schreibe einen kurzen Text (5-8 Sätze) über deine Träume und Zukunftspläne. Benutze: Ich möchte... / Ich würde gern... / Ich habe vor, ... zu... / Mein Traum ist es,... / In Zukunft... / Wenn ich..., dann...",
        instructionVi: "Viết một đoạn văn ngắn (5-8 câu) về ước mơ và kế hoạch tương lai của bạn. Sử dụng: Ich möchte... / Ich würde gern... / Ich habe vor, ... zu... / Mein Traum ist es,... / In Zukunft... / Wenn ich..., dann..."
      }
    ]
  },

  // --- Chapter 10, Lesson 2: Ziele setzen ---
  {
    id: "a2-ch10-l2",
    chapterId: 10,
    lessonNumber: 2,
    title: "Ziele setzen",
    titleVi: "Đặt mục tiêu",
    type: "Grammatik",
    objectives: [
      "Sử dụng thì tương lai (Futur I) với 'werden + Infinitiv'",
      "Phân biệt các cách nói về tương lai trong tiếng Đức",
      "Đặt và mô tả mục tiêu học tập và cuộc sống"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Ziele setzen und erreichen",
        titleVi: "Đặt và đạt mục tiêu",
        textDe: "Ziele sind wichtig im Leben. Man unterscheidet zwischen kurzfristigen Zielen (nächste Woche, nächsten Monat), mittelfristigen Zielen (nächstes Jahr) und langfristigen Zielen (in 5-10 Jahren). Um über die Zukunft zu sprechen, benutzt man im Deutschen oft das Präsens mit Zeitangabe ('Nächste Woche lerne ich...') oder das Futur I ('Ich werde lernen'). Das Futur I drückt auch Versprechen, Vorsätze und Vermutungen aus.",
        textVi: "Mục tiêu rất quan trọng trong cuộc sống. Người ta phân biệt giữa mục tiêu ngắn hạn (tuần tới, tháng tới), mục tiêu trung hạn (năm tới) và mục tiêu dài hạn (trong 5-10 năm). Để nói về tương lai, tiếng Đức thường dùng thì hiện tại kèm trạng từ thời gian ('Nächste Woche lerne ich...' — Tuần tới tôi học...) hoặc thì tương lai Futur I ('Ich werde lernen' — Tôi sẽ học). Futur I còn diễn đạt lời hứa, quyết tâm và phỏng đoán."
      },
      {
        type: "grammar",
        titleDe: "Futur I: werden + Infinitiv",
        titleVi: "Thì tương lai Futur I: werden + động từ nguyên mẫu",
        rule: "ich werde | du wirst | er/sie/es wird | wir werden | ihr werdet | sie/Sie werden + Infinitiv am Ende.",
        ruleVi: "Cấu trúc Futur I: ich werde | du wirst | er/sie/es wird | wir werden | ihr werdet | sie/Sie werden + động từ nguyên mẫu ở cuối câu. 'werden' chia theo chủ ngữ và đứng ở vị trí 2, động từ chính ở dạng nguyên mẫu đứng cuối. Tương tự 'will' trong tiếng Anh. Lưu ý: Trong giao tiếp hàng ngày, người Đức thường dùng thì hiện tại + trạng từ thời gian thay vì Futur I. Futur I dùng nhiều khi muốn nhấn mạnh lời hứa, quyết tâm hoặc phỏng đoán.",
        examples: [
          { de: "Ich werde die A2-Prüfung bestehen.", vi: "Tôi sẽ thi đậu A2." },
          { de: "Du wirst einen guten Job finden.", vi: "Bạn sẽ tìm được công việc tốt." },
          { de: "Wir werden nächstes Jahr nach Vietnam fliegen.", vi: "Năm tới chúng tôi sẽ bay về Việt Nam." },
          { de: "Er wird bestimmt Erfolg haben.", vi: "Anh ấy chắc chắn sẽ thành công." },
          { de: "Ich verspreche, ich werde mehr lernen!", vi: "Tôi hứa, tôi sẽ học nhiều hơn!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Drei Wege, über die Zukunft zu sprechen",
        titleVi: "Ba cách nói về tương lai",
        rule: "1) Präsens + Zeitangabe: Morgen gehe ich einkaufen. 2) möchte/will + Infinitiv: Ich möchte Deutsch lernen. 3) Futur I (werden + Inf.): Ich werde Deutsch lernen.",
        ruleVi: "Ba cách nói về tương lai trong tiếng Đức: 1) Thì hiện tại + trạng từ thời gian: 'Morgen gehe ich einkaufen' (Ngày mai tôi đi mua sắm) — cách phổ biến nhất trong giao tiếp. 2) möchte/will + nguyên mẫu: 'Ich möchte Deutsch lernen' (Tôi muốn học tiếng Đức) — diễn đạt mong muốn. 3) Futur I (werden + nguyên mẫu): 'Ich werde Deutsch lernen' (Tôi sẽ học tiếng Đức) — nhấn mạnh, trang trọng hơn, hoặc dự đoán. Mẹo: Dùng Präsens cho kế hoạch cụ thể, Futur I cho lời hứa và dự đoán.",
        examples: [
          { de: "Nächste Woche habe ich eine Prüfung. (Präsens)", vi: "Tuần tới tôi có bài thi. (Thì hiện tại)" },
          { de: "Ich will besser Deutsch sprechen. (Wille)", vi: "Tôi muốn nói tiếng Đức giỏi hơn. (Ý chí)" },
          { de: "Es wird morgen regnen. (Futur I — Vermutung)", vi: "Ngày mai trời sẽ mưa. (Futur I — phỏng đoán)" },
          { de: "Ich werde dich nie vergessen! (Futur I — Versprechen)", vi: "Tôi sẽ không bao giờ quên bạn! (Futur I — lời hứa)" }
        ]
      },
      {
        type: "vocabulary",
        titleDe: "Ziele und Motivation",
        titleVi: "Mục tiêu và động lực",
        words: [
          { de: "Ziel erreichen", vi: "đạt mục tiêu" },
          { de: "sich verbessern", vi: "cải thiện bản thân" },
          { de: "sich anstrengen", vi: "cố gắng / nỗ lực" },
          { de: "schaffen", vi: "làm được / đạt được" },
          { de: "aufgeben", vi: "bỏ cuộc" },
          { de: "weitermachen", vi: "tiếp tục" },
          { de: "Fortschritt", vi: "tiến bộ", article: "der" },
          { de: "Herausforderung", vi: "thử thách", article: "die" },
          { de: "Motivation", vi: "động lực", article: "die" },
          { de: "Geduld", vi: "kiên nhẫn", article: "die" },
          { de: "fleißig", vi: "chăm chỉ" },
          { de: "ehrgeizig", vi: "tham vọng / có chí tiến thủ" }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Meine Ziele für dieses Jahr",
        titleVi: "Mục tiêu của tôi cho năm nay",
        lines: [
          { speaker: "Lehrerin", de: "Heute sprechen wir über Ziele. Was wollt ihr dieses Jahr erreichen?", vi: "Hôm nay chúng ta nói về mục tiêu. Các em muốn đạt được gì năm nay?" },
          { speaker: "Minh", de: "Ich werde die A2-Prüfung im Juni bestehen! Das ist mein wichtigstes Ziel.", vi: "Em sẽ thi đậu A2 vào tháng 6! Đó là mục tiêu quan trọng nhất." },
          { speaker: "Lehrerin", de: "Sehr gut, Minh! Und wie wirst du das schaffen?", vi: "Rất tốt, Minh! Và em sẽ làm được bằng cách nào?" },
          { speaker: "Minh", de: "Ich habe vor, jeden Tag eine Stunde Deutsch zu üben. Und ich werde mehr deutsche Filme schauen.", vi: "Em dự định mỗi ngày luyện tiếng Đức một giờ. Và em sẽ xem nhiều phim Đức hơn." },
          { speaker: "Lehrerin", de: "Das ist ein guter Plan! Und du, Lan?", vi: "Đó là kế hoạch tốt! Còn em, Lan?" },
          { speaker: "Lan", de: "Ich möchte einen Nebenjob finden. Ich glaube, dass ich dann schneller Deutsch lernen werde.", vi: "Em muốn tìm một công việc làm thêm. Em tin rằng khi đó em sẽ học tiếng Đức nhanh hơn." },
          { speaker: "Lehrerin", de: "Richtig! Wenn man arbeitet, spricht man automatisch mehr Deutsch. Ihr werdet das schaffen!", vi: "Đúng vậy! Khi làm việc, tự nhiên sẽ nói nhiều tiếng Đức hơn. Các em sẽ làm được!" }
        ]
      },
      {
        type: "practice",
        titleDe: "Mein Zielplan",
        titleVi: "Kế hoạch mục tiêu của tôi",
        instruction: "Schreibe deine Ziele auf: 1) Ein kurzfristiges Ziel (diese Woche/diesen Monat) mit Präsens 2) Ein mittelfristiges Ziel (dieses Jahr) mit Futur I 3) Ein langfristiges Ziel (in 5 Jahren) mit 'Ich möchte' oder 'würde gern'. Für jedes Ziel: Was ist das Ziel? Wie wirst du es erreichen? Warum ist es wichtig?",
        instructionVi: "Viết ra các mục tiêu của bạn: 1) Mục tiêu ngắn hạn (tuần này/tháng này) dùng thì hiện tại 2) Mục tiêu trung hạn (năm nay) dùng Futur I 3) Mục tiêu dài hạn (trong 5 năm) dùng 'Ich möchte' hoặc 'würde gern'. Cho mỗi mục tiêu: Mục tiêu là gì? Bạn sẽ đạt được bằng cách nào? Tại sao nó quan trọng?"
      }
    ]
  },

  // --- Chapter 10, Lesson 3: Prüfungsvorbereitung A2 ---
  {
    id: "a2-ch10-l3",
    chapterId: 10,
    lessonNumber: 3,
    title: "Prüfungsvorbereitung A2",
    titleVi: "Ôn thi A2",
    type: "Fertigkeit",
    objectives: [
      "Hiểu cấu trúc bài thi A2 (Goethe-Zertifikat A2)",
      "Luyện tập chiến lược làm bài cho từng phần thi",
      "Ôn tập các chủ đề và ngữ pháp trọng tâm A2"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Die A2-Prüfung: Überblick",
        titleVi: "Bài thi A2: Tổng quan",
        textDe: "Die Goethe-Zertifikat A2 Prüfung besteht aus vier Teilen: Lesen (ca. 30 Minuten), Hören (ca. 30 Minuten), Schreiben (ca. 30 Minuten) und Sprechen (ca. 15 Minuten). Man braucht mindestens 60% in jedem Teil, um zu bestehen. Die Prüfung testet Alltagsthemen: Einkaufen, Wohnen, Arbeit, Freizeit, Gesundheit, Reisen und mehr.",
        textVi: "Bài thi Goethe-Zertifikat A2 gồm 4 phần: Đọc hiểu (Lesen — khoảng 30 phút), Nghe hiểu (Hören — khoảng 30 phút), Viết (Schreiben — khoảng 30 phút) và Nói (Sprechen — khoảng 15 phút). Bạn cần ít nhất 60% ở mỗi phần để đậu. Bài thi kiểm tra các chủ đề hàng ngày: mua sắm, nhà ở, công việc, giải trí, sức khỏe, du lịch và nhiều hơn nữa. Lưu ý: Khác với A1, A2 yêu cầu bạn hiểu được các văn bản dài hơn và có thể viết các tin nhắn, email ngắn."
      },
      {
        type: "grammar",
        titleDe: "Tipps für den Prüfungsteil Lesen",
        titleVi: "Mẹo cho phần Đọc hiểu",
        rule: "1) Lies zuerst die Fragen, dann den Text. 2) Suche Schlüsselwörter. 3) Lies den ganzen Text, nicht nur einzelne Wörter. 4) Bei Richtig/Falsch: Vorsicht bei 'nicht' und Verneinungen!",
        ruleVi: "Chiến lược phần Đọc hiểu: 1) Đọc câu hỏi trước, sau đó đọc bài — biết mình cần tìm gì. 2) Tìm từ khóa (Schlüsselwörter) — gạch chân các từ quan trọng trong câu hỏi và tìm chúng trong bài đọc. 3) Đọc cả đoạn, không chỉ từng từ đơn lẻ — nắm ý chính. 4) Với Richtig/Falsch: Cẩn thận với từ phủ định 'nicht', 'kein', 'nie' — chúng có thể thay đổi hoàn toàn ý nghĩa! 5) Nếu không chắc, loại trừ đáp án sai trước.",
        examples: [
          { de: "Frage: Öffnet das Museum am Montag? → Text: 'Das Museum ist montags geschlossen.' → Falsch!", vi: "Câu hỏi: Bảo tàng mở cửa thứ Hai không? → Bài đọc: 'Bảo tàng đóng cửa thứ Hai.' → Sai!" },
          { de: "Schlüsselwörter finden: 'Wann?', 'Wo?', 'Wie viel?' — immer zuerst nach Zahlen, Orten und Zeiten suchen.", vi: "Tìm từ khóa: 'Wann?' (Khi nào?), 'Wo?' (Ở đâu?), 'Wie viel?' (Bao nhiêu?) — luôn tìm số, địa điểm và thời gian trước." },
          { de: "Der Text sagt: 'Man darf nicht fotografieren.' Frage: 'Darf man im Museum fotografieren?' → Nein!", vi: "Bài viết: 'Không được chụp ảnh.' Câu hỏi: 'Có được chụp ảnh trong bảo tàng không?' → Không!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Tipps für den Prüfungsteil Hören",
        titleVi: "Mẹo cho phần Nghe hiểu",
        rule: "1) Lies die Aufgaben vor dem Hören. 2) Konzentriere dich auf die wichtigen Informationen. 3) Beim zweiten Hören: überprüfe deine Antworten. 4) Wenn du etwas nicht verstehst, rate!",
        ruleVi: "Chiến lược phần Nghe hiểu: 1) Đọc đề bài trước khi nghe — bạn thường có thời gian đọc trước. 2) Tập trung vào thông tin quan trọng — không cần hiểu mọi từ, chỉ cần thông tin trả lời câu hỏi. 3) Lần nghe thứ hai: kiểm tra lại đáp án — đặc biệt các phần chưa chắc chắn. 4) Nếu không nghe được, hãy đoán — đừng để trống! 5) Chú ý ngữ điệu — câu hỏi, bất ngờ, phủ định thường có ngữ điệu đặc biệt.",
        examples: [
          { de: "Du hörst: 'Der Zug fährt um 14 Uhr 30.' Frage: Wann fährt der Zug? → 14:30.", vi: "Bạn nghe: 'Tàu chạy lúc 14 giờ 30.' Câu hỏi: Tàu chạy lúc mấy giờ? → 14:30." },
          { de: "Du hörst: 'Nein, morgen nicht, übermorgen.' → Achte auf die Verneinung!", vi: "Bạn nghe: 'Không, không phải ngày mai, ngày kia.' → Chú ý phủ định!" },
          { de: "Tipp: Bei Zahlen (Telefonnummern, Preise, Uhrzeiten) sofort mitschreiben!", vi: "Mẹo: Với số (số điện thoại, giá, giờ giấc) hãy ghi lại ngay!" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Tipps für den Prüfungsteil Schreiben",
        titleVi: "Mẹo cho phần Viết",
        rule: "1) Lies die Aufgabe genau — beantworte alle Punkte! 2) Benutze Anrede und Grußformel. 3) Schreibe einfache, korrekte Sätze. 4) Achte auf Groß- und Kleinschreibung.",
        ruleVi: "Chiến lược phần Viết: 1) Đọc kỹ đề bài — trả lời TẤT CẢ các điểm được yêu cầu, nếu thiếu sẽ bị trừ điểm! 2) Dùng lời chào mở đầu (Liebe/r..., Sehr geehrte/r...) và kết thúc (Liebe Grüße / Mit freundlichen Grüßen). 3) Viết câu đơn giản và đúng — tốt hơn là câu phức tạp nhưng sai. 4) Chú ý viết hoa danh từ và đầu câu. 5) Mẹo quan trọng: Đếm số từ — bài viết phải đạt số từ tối thiểu (thường 40-50 từ).",
        examples: [
          { de: "Aufgabe: Schreiben Sie an Ihren Freund. Sagen Sie: 1) warum Sie schreiben, 2) wann Sie kommen, 3) was Sie mitbringen.", vi: "Đề bài: Viết cho bạn của bạn. Nói: 1) tại sao bạn viết, 2) bạn đến khi nào, 3) bạn mang theo gì. → Phải trả lời cả 3 điểm!" },
          { de: "Lieber Tom, ich schreibe dir, weil ich am Samstag zu deiner Party kommen möchte. Ich komme um 18 Uhr. Ich bringe einen Kuchen mit. Bis dann! Liebe Grüße, Hoa", vi: "Tom thân mến, mình viết cho bạn vì mình muốn đến bữa tiệc thứ Bảy. Mình sẽ đến lúc 18 giờ. Mình mang theo một cái bánh. Hẹn gặp nhé! Thân, Hoa" }
        ]
      },
      {
        type: "grammar",
        titleDe: "Tipps für den Prüfungsteil Sprechen",
        titleVi: "Mẹo cho phần Nói",
        rule: "1) Teil 1: Sich vorstellen (Name, Herkunft, Wohnort, Beruf, Hobbys). Teil 2: Ein Thema besprechen und gemeinsam planen. Teil 3: Bildbeschreibung.",
        ruleVi: "Phần Nói gồm 3 phần: Phần 1: Tự giới thiệu (tên, quê quán, nơi ở, nghề nghiệp, sở thích) — luyện tập trước và học thuộc! Phần 2: Thảo luận một chủ đề và lên kế hoạch cùng nhau — dùng: 'Ich schlage vor,...' (Tôi đề xuất), 'Was meinst du?' (Bạn nghĩ sao?), 'Gute Idee!' (Ý hay!), 'Einverstanden' (Đồng ý). Phần 3: Mô tả hình ảnh — dùng: 'Auf dem Bild sehe ich...' (Trong hình tôi thấy...), 'Die Person...' (Người đó...). Mẹo: Nói chậm và rõ ràng, tốt hơn là nói nhanh và sai!",
        examples: [
          { de: "Ich heiße Hoa Nguyen. Ich komme aus Vietnam und wohne jetzt in Berlin. Ich bin Studentin und lerne Deutsch. In meiner Freizeit koche ich gern vietnamesisch.", vi: "Tôi tên Hoa Nguyen. Tôi đến từ Việt Nam và hiện sống ở Berlin. Tôi là sinh viên và đang học tiếng Đức. Thời gian rảnh tôi thích nấu ăn Việt Nam." },
          { de: "Ich schlage vor, dass wir am Samstag ins Kino gehen. Was meinst du?", vi: "Tôi đề xuất thứ Bảy mình đi xem phim. Bạn nghĩ sao?" },
          { de: "Auf dem Bild sehe ich einen Mann. Er sitzt in einem Café und liest eine Zeitung.", vi: "Trong hình tôi thấy một người đàn ông. Anh ấy ngồi trong quán cà phê và đọc báo." }
        ]
      },
      {
        type: "practice",
        titleDe: "Prüfungssimulation: Schreiben",
        titleVi: "Giả lập bài thi: Phần Viết",
        instruction: "Schreibe eine E-Mail an deinen Freund / deine Freundin. Situation: Du möchtest am Wochenende zusammen etwas unternehmen. Schreibe über: 1) Was möchtest du machen? 2) Wann und wo sollt ihr euch treffen? 3) Was soll dein Freund / deine Freundin mitbringen? Schreibe mindestens 40 Wörter. Benutze Anrede und Grußformel!",
        instructionVi: "Viết email cho bạn. Tình huống: Bạn muốn làm gì đó cùng nhau vào cuối tuần. Viết về: 1) Bạn muốn làm gì? 2) Gặp nhau khi nào và ở đâu? 3) Bạn của bạn nên mang theo gì? Viết ít nhất 40 từ. Dùng lời chào mở đầu và kết thúc! Nhớ: Trả lời đủ 3 điểm, viết hoa danh từ!"
      }
    ]
  },

  // --- Chapter 10, Lesson 4: Rückblick & Ausblick auf B1 ---
  {
    id: "a2-ch10-l4",
    chapterId: 10,
    lessonNumber: 4,
    title: "Rückblick & Ausblick auf B1",
    titleVi: "Nhìn lại và hướng tới B1",
    type: "Integration",
    objectives: [
      "Ôn tập tổng hợp các chủ đề và ngữ pháp quan trọng nhất của A2",
      "Tự đánh giá năng lực hiện tại theo CEFR A2",
      "Hiểu những gì sẽ học ở trình độ B1 và cách chuẩn bị"
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Was du in A2 gelernt hast",
        titleVi: "Những gì bạn đã học ở A2",
        textDe: "Herzlichen Glückwunsch! Du hast das A2-Niveau fast geschafft! In A2 hast du gelernt: über die Vergangenheit zu sprechen (Perfekt, Präteritum von sein/haben), Nebensätze zu bilden (weil, dass, wenn, als, obwohl), Vergleiche zu machen (Komparativ, Superlativ), über Zukunftspläne zu sprechen (Futur I, würde + Infinitiv), und viele Alltagsthemen zu bewältigen: Wohnen, Gesundheit, Reisen, Arbeit, Einkaufen und mehr.",
        textVi: "Chúc mừng! Bạn gần hoàn thành trình độ A2! Ở A2 bạn đã học: nói về quá khứ (Perfekt, Präteritum của sein/haben), tạo mệnh đề phụ (weil, dass, wenn, als, obwohl), so sánh (Komparativ, Superlativ), nói về kế hoạch tương lai (Futur I, würde + Infinitiv), và xử lý nhiều chủ đề hàng ngày: nhà ở, sức khỏe, du lịch, công việc, mua sắm và nhiều hơn nữa. Bạn đã đi được một chặng đường dài từ A1!"
      },
      {
        type: "grammar",
        titleDe: "Grammatik-Zusammenfassung A2",
        titleVi: "Tóm tắt ngữ pháp A2",
        rule: "Wichtige A2-Grammatik: 1) Perfekt (haben/sein + Partizip II), 2) Nebensätze (weil, dass, wenn, als, obwohl — Verb am Ende!), 3) Komparativ/Superlativ, 4) Futur I (werden + Infinitiv), 5) Konjunktiv II (würde, könnte, sollte), 6) Reflexive Verben, 7) zu + Infinitiv.",
        ruleVi: "Ngữ pháp quan trọng nhất của A2: 1) Thì hoàn thành Perfekt (haben/sein + Partizip II) — nói về quá khứ. 2) Mệnh đề phụ (weil, dass, wenn, als, obwohl — động từ ở cuối!) — nối câu phức. 3) So sánh hơn/nhất (Komparativ/Superlativ) — mô tả và so sánh. 4) Futur I (werden + Infinitiv) — nói về tương lai. 5) Konjunktiv II (würde, könnte, sollte) — giả định, lịch sự. 6) Động từ phản thân (sich waschen, sich freuen...). 7) zu + Infinitiv (Ich habe vor, ... zu lernen). Nếu bạn nắm vững 7 điểm này, bạn sẵn sàng cho B1!",
        examples: [
          { de: "Ich bin gestern ins Kino gegangen. (Perfekt)", vi: "Hôm qua tôi đã đi xem phim. (Perfekt)" },
          { de: "Ich lerne Deutsch, weil ich in Deutschland leben möchte. (Nebensatz)", vi: "Tôi học tiếng Đức vì muốn sống ở Đức. (Mệnh đề phụ)" },
          { de: "Berlin ist größer als München. (Komparativ)", vi: "Berlin lớn hơn München. (So sánh hơn)" },
          { de: "Ich werde nächstes Jahr B1 machen. (Futur I)", vi: "Năm tới tôi sẽ thi B1. (Futur I)" },
          { de: "Ich würde gern besser sprechen. (Konjunktiv II)", vi: "Tôi muốn nói giỏi hơn. (Konjunktiv II)" }
        ]
      },
      {
        type: "explanation",
        titleDe: "Selbsteinschätzung: Kann ich das?",
        titleVi: "Tự đánh giá: Tôi đã làm được chưa?",
        textDe: "Teste dich selbst! Auf A2-Niveau solltest du: 1) Einfache Gespräche über Alltagsthemen führen können, 2) Kurze Texte (E-Mails, Nachrichten, Anzeigen) lesen und verstehen können, 3) Eine kurze Nachricht oder E-Mail schreiben können, 4) Durchsagen und kurze Gespräche verstehen können, 5) Über Vergangenheit und Zukunft sprechen können, 6) Deine Meinung einfach ausdrücken können.",
        textVi: "Tự kiểm tra bản thân! Ở trình độ A2, bạn nên: 1) Có thể giao tiếp đơn giản về các chủ đề hàng ngày (mua sắm, hỏi đường, đi bác sĩ...). 2) Đọc và hiểu được các văn bản ngắn (email, tin nhắn, thông báo, quảng cáo). 3) Viết được tin nhắn hoặc email ngắn. 4) Nghe hiểu được thông báo và cuộc hội thoại ngắn. 5) Nói về quá khứ và tương lai. 6) Diễn đạt ý kiến đơn giản (Ich finde, dass... / Ich glaube, dass...). Nếu bạn chưa tự tin ở điểm nào, hãy ôn lại bài học liên quan!"
      },
      {
        type: "explanation",
        titleDe: "Ausblick auf B1: Was kommt?",
        titleVi: "Hướng tới B1: Điều gì sẽ đến?",
        textDe: "Auf B1-Niveau wirst du lernen: 1) Längere Texte lesen und verstehen (Zeitungsartikel, Briefe), 2) Über abstrakte Themen sprechen (Politik, Gesellschaft, Kultur), 3) Deine Meinung ausführlich begründen, 4) Präteritum (Imperfekt) für alle Verben, 5) Passiv (Das Haus wird gebaut), 6) Relativsätze (Der Mann, der dort steht,...), 7) Indirekte Rede, 8) Konjunktiv II mit wäre/hätte. B1 ist das Niveau für die Einbürgerung in Deutschland!",
        textVi: "Ở trình độ B1, bạn sẽ học: 1) Đọc và hiểu văn bản dài hơn (bài báo, thư từ). 2) Nói về các chủ đề trừu tượng (chính trị, xã hội, văn hóa). 3) Trình bày và lý giải ý kiến chi tiết. 4) Thì quá khứ Präteritum cho tất cả động từ (không chỉ sein/haben). 5) Câu bị động (Das Haus wird gebaut — Ngôi nhà được xây). 6) Mệnh đề quan hệ (Der Mann, der dort steht,... — Người đàn ông đứng ở kia...). 7) Lời nói gián tiếp. 8) Konjunktiv II đầy đủ với wäre/hätte. B1 là trình độ yêu cầu để nhập quốc tịch Đức! Đây cũng là trình độ mà nhiều nhà tuyển dụng yêu cầu."
      },
      {
        type: "vocabulary",
        titleDe: "Nützliche Ausdrücke für B1-Vorbereitung",
        titleVi: "Cụm từ hữu ích để chuẩn bị cho B1",
        words: [
          { de: "Meiner Meinung nach...", vi: "Theo ý kiến của tôi..." },
          { de: "Ich bin der Meinung, dass...", vi: "Tôi có ý kiến rằng..." },
          { de: "Einerseits... andererseits...", vi: "Một mặt... mặt khác..." },
          { de: "Zum Beispiel...", vi: "Ví dụ..." },
          { de: "Deshalb / Deswegen", vi: "Vì vậy / Do đó" },
          { de: "Trotzdem", vi: "Tuy nhiên / Mặc dù vậy" },
          { de: "Außerdem", vi: "Ngoài ra" },
          { de: "Zusammenfassend kann man sagen,...", vi: "Tóm lại có thể nói rằng..." },
          { de: "Im Vergleich zu...", vi: "So với..." },
          { de: "Es kommt darauf an, ob...", vi: "Điều đó tùy thuộc vào việc..." }
        ]
      },
      {
        type: "dialogue",
        titleDe: "Rückblick und Motivation",
        titleVi: "Nhìn lại và động lực",
        lines: [
          { speaker: "Lehrerin", de: "Heute ist unser letzter Tag in A2. Wie fühlt ihr euch?", vi: "Hôm nay là ngày cuối cùng ở A2. Các em cảm thấy thế nào?" },
          { speaker: "Hoa", de: "Ich bin ein bisschen traurig, aber auch stolz! Ich habe so viel gelernt.", vi: "Em hơi buồn, nhưng cũng tự hào! Em đã học được rất nhiều." },
          { speaker: "Minh", de: "Am Anfang konnte ich fast nichts sagen. Jetzt kann ich Emails schreiben und einkaufen gehen!", vi: "Ban đầu em gần như không nói được gì. Giờ em có thể viết email và đi mua sắm!" },
          { speaker: "Lehrerin", de: "Ihr habt alle große Fortschritte gemacht. Ich bin sehr stolz auf euch.", vi: "Các em đều tiến bộ rất nhiều. Cô rất tự hào về các em." },
          { speaker: "Lan", de: "Was wird in B1 anders sein? Wird es viel schwerer?", vi: "B1 sẽ khác như thế nào? Có khó hơn nhiều không?" },
          { speaker: "Lehrerin", de: "Es wird anspruchsvoller, aber ihr seid gut vorbereitet. In B1 werdet ihr lernen, eure Meinung zu sagen und längere Texte zu verstehen.", vi: "Sẽ đòi hỏi hơn, nhưng các em đã chuẩn bị tốt. Ở B1 các em sẽ học cách nêu ý kiến và hiểu các văn bản dài hơn." },
          { speaker: "Hoa", de: "Ich freue mich darauf! Ich weiß, dass es schwer wird, aber ich werde nicht aufgeben.", vi: "Em mong chờ lắm! Em biết sẽ khó, nhưng em sẽ không bỏ cuộc." },
          { speaker: "Lehrerin", de: "Das ist die richtige Einstellung! Denkt daran: Jeder Fehler ist eine Chance zu lernen. Viel Erfolg bei der A2-Prüfung und bei B1!", vi: "Đó là thái độ đúng đắn! Hãy nhớ: Mỗi lỗi sai là một cơ hội để học. Chúc các em thi A2 tốt và thành công ở B1!" }
        ]
      },
      {
        type: "practice",
        titleDe: "Mein Lerntagebuch: Rückblick A2",
        titleVi: "Nhật ký học tập: Nhìn lại A2",
        instruction: "Schreibe einen Rückblick über dein A2-Lernen (6-10 Sätze). Beantworte: 1) Was hast du in A2 gelernt? (Perfekt benutzen!) 2) Was war schwierig? Was war leicht? 3) Was kannst du jetzt, was du vorher nicht konntest? 4) Was sind deine Ziele für B1? (Futur I benutzen!) Benutze: Nebensätze mit weil/dass/wenn, Komparativ, Perfekt und Futur I.",
        instructionVi: "Viết bài nhìn lại quá trình học A2 (6-10 câu). Trả lời: 1) Bạn đã học được gì ở A2? (Dùng Perfekt!) 2) Gì khó? Gì dễ? 3) Bạn có thể làm gì bây giờ mà trước đây không thể? 4) Mục tiêu của bạn cho B1 là gì? (Dùng Futur I!) Sử dụng: Mệnh đề phụ với weil/dass/wenn, so sánh hơn, Perfekt và Futur I. Đây là bài tập tổng hợp — hãy cố gắng dùng càng nhiều ngữ pháp A2 càng tốt!"
      }
    ]
  }
];
