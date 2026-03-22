// A2 German Lessons — Chapters 1–3
// Complete lesson content for Vietnamese learners

import type { ContentBlock, Lesson } from "../a1/chapters1_3";

export const a2LessonsCh1_3: Lesson[] = [
  // =====================================================================
  // CHAPTER 1: Reisen & Urlaub
  // =====================================================================

  // --- Chapter 1, Lesson 1 ---
  {
    id: "a2-ch1-l1",
    chapterId: 1,
    lessonNumber: 1,
    title: "Urlaubsarten und Reiseziele",
    titleVi: "Các loại kỳ nghỉ và điểm đến du lịch",
    type: "Einführung",
    objectives: [
      "Mô tả các loại kỳ nghỉ khác nhau bằng tiếng Đức",
      "Nói về điểm đến du lịch yêu thích",
      "Sử dụng từ vựng chủ đề du lịch",
      "Hiểu các quảng cáo du lịch đơn giản",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Urlaubsarten",
        titleVi: "Các loại kỳ nghỉ",
        textDe:
          "Es gibt viele verschiedene Urlaubsarten: Strandurlaub, Städtereise, Wanderurlaub, Skiurlaub, Kreuzfahrt und Campingurlaub. Jede Art hat ihre Vorteile. In Deutschland reisen die Menschen gerne nach Spanien, Italien, Österreich und in die Türkei.",
        textVi:
          "Có rất nhiều loại kỳ nghỉ khác nhau: nghỉ biển (Strandurlaub), du lịch thành phố (Städtereise), nghỉ đi bộ đường dài (Wanderurlaub), nghỉ trượt tuyết (Skiurlaub), du thuyền (Kreuzfahrt) và cắm trại (Campingurlaub). Mỗi loại đều có ưu điểm riêng. Ở Đức, mọi người thích đi du lịch đến Tây Ban Nha, Ý, Áo và Thổ Nhĩ Kỳ. Lưu ý: Từ ghép trong tiếng Đức rất phổ biến — 'Strandurlaub' = Strand (bãi biển) + Urlaub (kỳ nghỉ).",
      },
      {
        type: "vocabulary",
        titleDe: "Urlaubsarten",
        titleVi: "Các loại kỳ nghỉ",
        words: [
          { de: "der Urlaub", vi: "kỳ nghỉ", article: "der" },
          { de: "die Reise", vi: "chuyến đi", article: "die" },
          { de: "der Strandurlaub", vi: "nghỉ biển", article: "der" },
          { de: "die Städtereise", vi: "du lịch thành phố", article: "die" },
          { de: "der Wanderurlaub", vi: "nghỉ đi bộ đường dài", article: "der" },
          { de: "der Skiurlaub", vi: "nghỉ trượt tuyết", article: "der" },
          { de: "die Kreuzfahrt", vi: "du thuyền", article: "die" },
          { de: "der Campingurlaub", vi: "nghỉ cắm trại", article: "der" },
          { de: "das Reiseziel", vi: "điểm đến du lịch", article: "das" },
          { de: "die Sehenswürdigkeit", vi: "danh lam thắng cảnh", article: "die" },
          { de: "der Reiseführer", vi: "hướng dẫn viên / sách hướng dẫn du lịch", article: "der" },
          { de: "das Souvenir", vi: "quà lưu niệm", article: "das" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Urlaubspläne besprechen",
        titleVi: "Bàn về kế hoạch nghỉ",
        lines: [
          {
            speaker: "Lan",
            de: "Hast du schon Pläne für den Urlaub?",
            vi: "Bạn đã có kế hoạch gì cho kỳ nghỉ chưa?",
          },
          {
            speaker: "Thomas",
            de: "Ja, ich möchte dieses Jahr nach Italien fahren. Und du?",
            vi: "Có, năm nay tôi muốn đi Ý. Còn bạn?",
          },
          {
            speaker: "Lan",
            de: "Ich plane eine Städtereise nach Barcelona.",
            vi: "Tôi lên kế hoạch đi du lịch thành phố Barcelona.",
          },
          {
            speaker: "Thomas",
            de: "Oh, toll! Wie lange bleibst du dort?",
            vi: "Ồ, tuyệt! Bạn ở đó bao lâu?",
          },
          {
            speaker: "Lan",
            de: "Ungefähr eine Woche. Ich möchte die Sagrada Família sehen.",
            vi: "Khoảng một tuần. Tôi muốn xem nhà thờ Sagrada Família.",
          },
          {
            speaker: "Thomas",
            de: "Das klingt super! Ich mache lieber Strandurlaub.",
            vi: "Nghe tuyệt quá! Tôi thích nghỉ biển hơn.",
          },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Reiseziele und Länder",
        titleVi: "Điểm đến và các quốc gia",
        words: [
          { de: "nach Deutschland fahren", vi: "đi Đức" },
          { de: "nach Italien fliegen", vi: "bay đi Ý" },
          { de: "in die Türkei reisen", vi: "đi du lịch Thổ Nhĩ Kỳ" },
          { de: "in die Schweiz fahren", vi: "đi Thụy Sĩ" },
          { de: "ans Meer fahren", vi: "đi biển" },
          { de: "in die Berge fahren", vi: "đi lên núi" },
          { de: "auf eine Insel reisen", vi: "đi du lịch đảo" },
          { de: "der Flug", vi: "chuyến bay", article: "der" },
          { de: "die Unterkunft", vi: "chỗ ở", article: "die" },
        ],
      },
      {
        type: "explanation",
        titleDe: "Kulturelle Hinweise: Urlaub in Deutschland",
        titleVi: "Ghi chú văn hóa: Kỳ nghỉ ở Đức",
        textDe:
          "Deutsche haben in der Regel 24–30 Urlaubstage pro Jahr. Viele fahren im Sommer in den Süden (Spanien, Italien, Griechenland). Die Schulferien sind in jedem Bundesland anders.",
        textVi:
          "Người Đức thường có 24–30 ngày nghỉ phép mỗi năm — nhiều hơn rất nhiều so với nhiều nước khác! Nhiều người đi về phía nam vào mùa hè (Tây Ban Nha, Ý, Hy Lạp). Kỳ nghỉ học đường khác nhau ở mỗi bang liên bang. Từ 'Urlaub' dùng cho kỳ nghỉ phép (đi chơi), còn 'Ferien' dùng cho kỳ nghỉ học đường.",
      },
      {
        type: "practice",
        titleDe: "Übung: Mein Traumurlaub",
        titleVi: "Bài tập: Kỳ nghỉ mơ ước của tôi",
        instruction:
          "Beschreibe deinen Traumurlaub: Wohin möchtest du reisen? Was für einen Urlaub machst du gern? Wie lange bleibst du?",
        instructionVi:
          "Hãy mô tả kỳ nghỉ mơ ước của bạn: Bạn muốn đi đâu? Bạn thích loại kỳ nghỉ nào? Bạn ở bao lâu? Sử dụng: 'Ich möchte nach... fahren/fliegen. Ich mache gern... Ich bleibe... Tage/Wochen.'",
      },
    ],
  },

  // --- Chapter 1, Lesson 2 ---
  {
    id: "a2-ch1-l2",
    chapterId: 1,
    lessonNumber: 2,
    title: "Im Hotel / In der Unterkunft",
    titleVi: "Ở khách sạn / Nơi lưu trú",
    type: "Grammatik",
    objectives: [
      "Đặt phòng khách sạn bằng tiếng Đức",
      "Sử dụng Wechselpräpositionen (giới từ hai cách) với Dativ",
      "Mô tả phòng khách sạn và tiện nghi",
      "Giải quyết vấn đề tại nơi lưu trú",
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Wechselpräpositionen mit Dativ (Wo?)",
        titleVi: "Giới từ hai cách với Dativ (Ở đâu?)",
        rule:
          "Die Wechselpräpositionen (in, an, auf, über, unter, vor, hinter, neben, zwischen) stehen mit Dativ bei der Frage 'Wo?' (Position/Ort).",
        ruleVi:
          "Giới từ hai cách (Wechselpräpositionen) là 9 giới từ đặc biệt: in (trong), an (ở/tại), auf (trên), über (phía trên), unter (phía dưới), vor (phía trước), hinter (phía sau), neben (bên cạnh), zwischen (giữa). Khi trả lời câu hỏi 'Wo?' (Ở đâu?) — chỉ vị trí — dùng Dativ. Ví dụ: der Tisch → auf dem Tisch (trên bàn), die Tasche → in der Tasche (trong túi), das Bett → auf dem Bett (trên giường). Mẹo: Wo? → Dativ (đứng yên, không di chuyển).",
        examples: [
          { de: "Das Handtuch ist im Badezimmer.", vi: "Khăn tắm ở trong phòng tắm. (im = in dem)" },
          { de: "Der Schlüssel liegt auf dem Tisch.", vi: "Chìa khóa nằm trên bàn." },
          { de: "Die Koffer stehen neben dem Bett.", vi: "Những chiếc vali đứng bên cạnh giường." },
          { de: "Das Bild hängt an der Wand.", vi: "Bức tranh treo trên tường." },
          { de: "Die Lampe steht zwischen dem Bett und dem Schrank.", vi: "Đèn đứng giữa giường và tủ." },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Im Hotel",
        titleVi: "Ở khách sạn",
        words: [
          { de: "das Hotel", vi: "khách sạn", article: "das" },
          { de: "die Rezeption", vi: "lễ tân", article: "die" },
          { de: "das Einzelzimmer", vi: "phòng đơn", article: "das" },
          { de: "das Doppelzimmer", vi: "phòng đôi", article: "das" },
          { de: "die Reservierung", vi: "đặt phòng", article: "die" },
          { de: "der Schlüssel", vi: "chìa khóa", article: "der" },
          { de: "die Klimaanlage", vi: "điều hòa", article: "die" },
          { de: "das Frühstück", vi: "bữa sáng", article: "das" },
          { de: "die Halbpension", vi: "bán trú (bao gồm sáng + tối)", article: "die" },
          { de: "die Vollpension", vi: "toàn trú (bao gồm 3 bữa)", article: "die" },
          { de: "auschecken", vi: "trả phòng" },
          { de: "einchecken", vi: "nhận phòng" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "An der Hotelrezeption",
        titleVi: "Tại quầy lễ tân khách sạn",
        lines: [
          {
            speaker: "Rezeptionist",
            de: "Guten Tag! Willkommen im Hotel Seeblick. Wie kann ich Ihnen helfen?",
            vi: "Xin chào! Chào mừng đến khách sạn Seeblick. Tôi có thể giúp gì cho quý khách?",
          },
          {
            speaker: "Minh",
            de: "Guten Tag! Ich habe ein Doppelzimmer reserviert. Mein Name ist Nguyen.",
            vi: "Xin chào! Tôi đã đặt một phòng đôi. Tên tôi là Nguyen.",
          },
          {
            speaker: "Rezeptionist",
            de: "Einen Moment bitte... Ja, ich sehe die Reservierung. Drei Nächte, mit Frühstück.",
            vi: "Xin chờ một chút... Vâng, tôi thấy đơn đặt phòng rồi. Ba đêm, bao gồm bữa sáng.",
          },
          {
            speaker: "Minh",
            de: "Genau. Gibt es WLAN im Zimmer?",
            vi: "Đúng rồi. Trong phòng có WiFi không?",
          },
          {
            speaker: "Rezeptionist",
            de: "Ja, das WLAN ist kostenlos. Das Passwort steht auf der Karte im Zimmer.",
            vi: "Có, WiFi miễn phí. Mật khẩu ghi trên thẻ trong phòng.",
          },
          {
            speaker: "Minh",
            de: "Wunderbar. Um wie viel Uhr gibt es Frühstück?",
            vi: "Tuyệt vời. Mấy giờ có bữa sáng?",
          },
          {
            speaker: "Rezeptionist",
            de: "Das Frühstück ist von 7 bis 10 Uhr im Restaurant im Erdgeschoss.",
            vi: "Bữa sáng từ 7 đến 10 giờ ở nhà hàng tầng trệt.",
          },
        ],
      },
      {
        type: "grammar",
        titleDe: "Wechselpräpositionen mit Akkusativ (Wohin?)",
        titleVi: "Giới từ hai cách với Akkusativ (Đi đâu?)",
        rule:
          "Die gleichen Präpositionen stehen mit Akkusativ bei der Frage 'Wohin?' (Richtung/Bewegung).",
        ruleVi:
          "Cùng 9 giới từ đó, khi trả lời câu hỏi 'Wohin?' (Đi đâu?) — chỉ hướng di chuyển — dùng Akkusativ. So sánh: Wo ist der Schlüssel? → auf dem Tisch (Dativ). Wohin legst du den Schlüssel? → auf den Tisch (Akkusativ). Mẹo nhớ: Wo? = Dativ (đứng yên). Wohin? = Akkusativ (di chuyển).",
        examples: [
          { de: "Ich lege das Buch auf den Tisch.", vi: "Tôi đặt quyển sách lên bàn. (di chuyển → Akk)" },
          { de: "Das Buch liegt auf dem Tisch.", vi: "Quyển sách nằm trên bàn. (vị trí → Dat)" },
          { de: "Ich gehe ins Badezimmer.", vi: "Tôi đi vào phòng tắm. (ins = in das)" },
          { de: "Ich bin im Badezimmer.", vi: "Tôi ở trong phòng tắm. (im = in dem)" },
          { de: "Stell den Koffer neben den Schrank.", vi: "Đặt vali bên cạnh tủ. (di chuyển → Akk)" },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Ein Hotelzimmer beschreiben",
        titleVi: "Bài tập: Mô tả phòng khách sạn",
        instruction:
          "Beschreibe dein Hotelzimmer. Wo sind die Möbel? Benutze Wechselpräpositionen mit Dativ.",
        instructionVi:
          "Hãy mô tả phòng khách sạn của bạn. Đồ đạc ở đâu? Sử dụng giới từ hai cách với Dativ. Ví dụ: Das Bett steht an der Wand. Der Fernseher hängt über dem Schreibtisch. Die Lampe steht auf dem Nachttisch.",
      },
    ],
  },

  // --- Chapter 1, Lesson 3 ---
  {
    id: "a2-ch1-l3",
    chapterId: 1,
    lessonNumber: 3,
    title: "Wegbeschreibung & Verkehrsmittel",
    titleVi: "Chỉ đường & Phương tiện giao thông",
    type: "Fertigkeit",
    objectives: [
      "Hỏi và chỉ đường bằng tiếng Đức",
      "Sử dụng mệnh lệnh thức (Imperativ) để chỉ dẫn",
      "Mô tả các phương tiện giao thông",
      "Mua vé và hỏi thông tin tại ga tàu / bến xe",
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Verkehrsmittel",
        titleVi: "Phương tiện giao thông",
        words: [
          { de: "der Zug", vi: "tàu hỏa", article: "der" },
          { de: "die S-Bahn", vi: "tàu ngoại ô", article: "die" },
          { de: "die U-Bahn", vi: "tàu điện ngầm", article: "die" },
          { de: "die Straßenbahn", vi: "xe điện", article: "die" },
          { de: "der Bus", vi: "xe buýt", article: "der" },
          { de: "das Flugzeug", vi: "máy bay", article: "das" },
          { de: "das Fahrrad", vi: "xe đạp", article: "das" },
          { de: "das Auto", vi: "ô tô", article: "das" },
          { de: "das Taxi", vi: "taxi", article: "das" },
          { de: "die Fahrkarte", vi: "vé đi lại", article: "die" },
          { de: "der Bahnhof", vi: "ga tàu", article: "der" },
          { de: "die Haltestelle", vi: "trạm dừng (xe buýt/xe điện)", article: "die" },
          { de: "der Flughafen", vi: "sân bay", article: "der" },
          { de: "umsteigen", vi: "chuyển tàu/xe" },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Wegbeschreibung",
        titleVi: "Chỉ đường",
        words: [
          { de: "geradeaus gehen", vi: "đi thẳng" },
          { de: "links abbiegen", vi: "rẽ trái" },
          { de: "rechts abbiegen", vi: "rẽ phải" },
          { de: "die Kreuzung", vi: "ngã tư", article: "die" },
          { de: "die Ampel", vi: "đèn giao thông", article: "die" },
          { de: "die Brücke", vi: "cầu", article: "die" },
          { de: "gegenüber", vi: "đối diện" },
          { de: "an ... vorbei", vi: "đi qua (ngang qua)" },
          { de: "die erste/zweite Straße", vi: "con đường thứ nhất/thứ hai" },
        ],
      },
      {
        type: "grammar",
        titleDe: "Imperativ für Wegbeschreibungen",
        titleVi: "Mệnh lệnh thức để chỉ đường",
        rule:
          "Du-Form: Geh geradeaus! Bieg links ab! Sie-Form: Gehen Sie geradeaus! Biegen Sie links ab!",
        ruleVi:
          "Mệnh lệnh thức (Imperativ) dùng để chỉ dẫn, ra lệnh. Khi chỉ đường: Dạng 'du' (thân mật): bỏ '-st', không dùng đại từ. gehen → Geh! abbiegen → Bieg ab! nehmen → Nimm! Dạng 'Sie' (trang trọng): giữ nguyên động từ, đặt 'Sie' sau. gehen → Gehen Sie! abbiegen → Biegen Sie ab! Lưu ý: Với động từ tách (trennbare Verben) như 'abbiegen', phần tách ra đặt cuối câu.",
        examples: [
          { de: "Gehen Sie geradeaus bis zur Ampel.", vi: "Đi thẳng đến đèn giao thông." },
          { de: "Biegen Sie an der Kreuzung links ab.", vi: "Rẽ trái ở ngã tư." },
          { de: "Nehmen Sie die zweite Straße rechts.", vi: "Lấy con đường thứ hai bên phải." },
          { de: "Geh über die Brücke!", vi: "Đi qua cầu!" },
          { de: "Fahr mit der U-Bahn bis Alexanderplatz.", vi: "Đi tàu điện ngầm đến Alexanderplatz." },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Am Bahnhof",
        titleVi: "Tại ga tàu",
        lines: [
          {
            speaker: "Lan",
            de: "Entschuldigung, wie komme ich zum Brandenburger Tor?",
            vi: "Xin lỗi, tôi đi đến Cổng Brandenburg bằng cách nào?",
          },
          {
            speaker: "Passant",
            de: "Nehmen Sie die U-Bahn Linie U5 bis Brandenburger Tor. Das sind nur drei Stationen.",
            vi: "Đi tàu điện ngầm tuyến U5 đến Brandenburger Tor. Chỉ có ba trạm thôi.",
          },
          {
            speaker: "Lan",
            de: "Wo kann ich eine Fahrkarte kaufen?",
            vi: "Tôi có thể mua vé ở đâu?",
          },
          {
            speaker: "Passant",
            de: "Da drüben ist ein Fahrkartenautomat. Eine Einzelfahrkarte kostet 3,20 Euro.",
            vi: "Ở kia có máy bán vé. Một vé lượt đi giá 3,20 Euro.",
          },
          {
            speaker: "Lan",
            de: "Muss ich umsteigen?",
            vi: "Tôi có phải chuyển tàu không?",
          },
          {
            speaker: "Passant",
            de: "Nein, Sie fahren direkt. Steigen Sie am Brandenburger Tor aus.",
            vi: "Không, bạn đi thẳng. Xuống tàu ở trạm Brandenburger Tor.",
          },
          {
            speaker: "Lan",
            de: "Vielen Dank für Ihre Hilfe!",
            vi: "Cảm ơn rất nhiều vì sự giúp đỡ của bạn!",
          },
        ],
      },
      {
        type: "explanation",
        titleDe: "Kulturelle Hinweise: Öffentliche Verkehrsmittel in Deutschland",
        titleVi: "Ghi chú văn hóa: Giao thông công cộng ở Đức",
        textDe:
          "Deutschland hat ein sehr gutes öffentliches Verkehrsnetz. In Städten gibt es U-Bahn, S-Bahn, Straßenbahn und Bus. Man braucht immer eine gültige Fahrkarte — Kontrolleure prüfen regelmäßig!",
        textVi:
          "Đức có hệ thống giao thông công cộng rất tốt. Trong thành phố có U-Bahn (tàu ngầm), S-Bahn (tàu ngoại ô), Straßenbahn (xe điện) và Bus (xe buýt). Bạn luôn cần có vé hợp lệ — nhân viên kiểm soát (Kontrolleure) kiểm tra thường xuyên! Nếu bị bắt không có vé, phạt 60 Euro. Deutschlandticket (49€/tháng) cho phép đi tất cả phương tiện công cộng trong cả nước. Mẹo cho người Việt mới đến: Tải app DB Navigator để tra cứu lịch trình.",
      },
      {
        type: "practice",
        titleDe: "Übung: Weg beschreiben",
        titleVi: "Bài tập: Chỉ đường",
        instruction:
          "Beschreibe den Weg von deiner Wohnung zum nächsten Supermarkt. Benutze den Imperativ (Sie-Form).",
        instructionVi:
          "Hãy mô tả đường đi từ nhà bạn đến siêu thị gần nhất. Dùng mệnh lệnh thức (dạng Sie). Ví dụ: Gehen Sie aus dem Haus und biegen Sie links ab. Gehen Sie geradeaus bis zur Ampel...",
      },
    ],
  },

  // --- Chapter 1, Lesson 4 ---
  {
    id: "a2-ch1-l4",
    chapterId: 1,
    lessonNumber: 4,
    title: "Erlebnisse erzählen (Perfekt)",
    titleVi: "Kể về trải nghiệm (Thì hoàn thành)",
    type: "Integration",
    objectives: [
      "Sử dụng thì Perfekt để kể về chuyến đi",
      "Phân biệt trợ động từ 'haben' và 'sein' trong Perfekt",
      "Kể về trải nghiệm du lịch một cách mạch lạc",
      "Viết bưu thiếp / tin nhắn về kỳ nghỉ",
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Perfekt mit 'haben'",
        titleVi: "Thì Perfekt với 'haben'",
        rule:
          "Perfekt = haben/sein (konjugiert) + Partizip II (am Ende). Die meisten Verben bilden Perfekt mit 'haben'.",
        ruleVi:
          "Thì Perfekt (thì hoàn thành) dùng để nói về hành động đã xảy ra trong quá khứ. Cấu trúc: Chủ ngữ + haben/sein (chia) + ... + Partizip II (cuối câu). Đa số động từ dùng 'haben'. Partizip II của động từ thường (regelmäßig): ge- + gốc từ + -t. Ví dụ: machen → gemacht, kaufen → gekauft, besuchen → besucht (không có ge- vì 'be-' là tiền tố không tách). Partizip II của động từ bất quy tắc (unregelmäßig): ge- + gốc từ (biến đổi) + -en. Ví dụ: essen → gegessen, trinken → getrunken, sehen → gesehen.",
        examples: [
          { de: "Ich habe viele Fotos gemacht.", vi: "Tôi đã chụp nhiều ảnh." },
          { de: "Wir haben das Museum besucht.", vi: "Chúng tôi đã thăm bảo tàng." },
          { de: "Hast du den Eiffelturm gesehen?", vi: "Bạn đã thấy tháp Eiffel chưa?" },
          { de: "Sie hat Souvenirs gekauft.", vi: "Cô ấy đã mua quà lưu niệm." },
          { de: "Wir haben Pizza gegessen.", vi: "Chúng tôi đã ăn pizza." },
        ],
      },
      {
        type: "grammar",
        titleDe: "Perfekt mit 'sein'",
        titleVi: "Thì Perfekt với 'sein'",
        rule:
          "Verben der Bewegung (gehen, fahren, fliegen, kommen) und Zustandsänderung (werden, sterben) bilden Perfekt mit 'sein'.",
        ruleVi:
          "Một số động từ dùng 'sein' thay vì 'haben' trong Perfekt. Quy tắc: Dùng 'sein' cho: 1) Động từ chỉ sự di chuyển có hướng: gehen → gegangen, fahren → gefahren, fliegen → geflogen, kommen → gekommen, reisen → gereist. 2) Động từ chỉ sự thay đổi trạng thái: werden → geworden, einschlafen → eingeschlafen. 3) Ngoại lệ: sein → gewesen, bleiben → geblieben. Mẹo cho người Việt: Hãy nhớ — nếu động từ liên quan đến 'di chuyển' hoặc 'thay đổi', dùng 'sein'.",
        examples: [
          { de: "Ich bin nach Italien geflogen.", vi: "Tôi đã bay đi Ý." },
          { de: "Wir sind mit dem Zug gefahren.", vi: "Chúng tôi đã đi bằng tàu hỏa." },
          { de: "Bist du schon mal in Paris gewesen?", vi: "Bạn đã từng ở Paris chưa?" },
          { de: "Sie ist um 8 Uhr angekommen.", vi: "Cô ấy đã đến lúc 8 giờ." },
          { de: "Er ist drei Tage geblieben.", vi: "Anh ấy đã ở lại ba ngày." },
          { de: "Die Kinder sind im Pool geschwommen.", vi: "Bọn trẻ đã bơi trong bể bơi." },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Nach dem Urlaub",
        titleVi: "Sau kỳ nghỉ",
        lines: [
          {
            speaker: "Thomas",
            de: "Na, wie war dein Urlaub in Vietnam?",
            vi: "Này, kỳ nghỉ ở Việt Nam của bạn thế nào?",
          },
          {
            speaker: "Anna",
            de: "Es war fantastisch! Ich bin zuerst nach Hanoi geflogen.",
            vi: "Tuyệt vời! Đầu tiên tôi đã bay đến Hà Nội.",
          },
          {
            speaker: "Thomas",
            de: "Was hast du dort gemacht?",
            vi: "Bạn đã làm gì ở đó?",
          },
          {
            speaker: "Anna",
            de: "Ich habe die Altstadt besucht und Phở gegessen. So lecker!",
            vi: "Tôi đã thăm phố cổ và ăn Phở. Ngon lắm!",
          },
          {
            speaker: "Thomas",
            de: "Bist du auch in die Ha-Long-Bucht gefahren?",
            vi: "Bạn cũng đã đi Vịnh Hạ Long chứ?",
          },
          {
            speaker: "Anna",
            de: "Ja! Ich habe eine Bootstour gemacht. Die Landschaft war wunderschön.",
            vi: "Có! Tôi đã đi tour bằng thuyền. Phong cảnh đẹp tuyệt vời.",
          },
          {
            speaker: "Thomas",
            de: "Hast du viele Fotos gemacht?",
            vi: "Bạn đã chụp nhiều ảnh chứ?",
          },
          {
            speaker: "Anna",
            de: "Natürlich! Ich habe über 500 Fotos gemacht!",
            vi: "Tất nhiên! Tôi đã chụp hơn 500 tấm ảnh!",
          },
        ],
      },
      {
        type: "explanation",
        titleDe: "Eine Postkarte aus dem Urlaub schreiben",
        titleVi: "Viết bưu thiếp từ kỳ nghỉ",
        textDe:
          "Eine typische Urlaubspostkarte: Liebe/Lieber..., Viele Grüße aus [Ort]! Das Wetter ist [toll/schön]. Ich habe [Aktivität] gemacht. Es war [super/wunderbar]. Bis bald! Dein/Deine [Name].",
        textVi:
          "Cách viết bưu thiếp kỳ nghỉ: 'Liebe' (cho nữ) / 'Lieber' (cho nam) + tên, 'Viele Grüße aus [nơi]!' (Nhiều lời chào từ...). Nội dung: kể bạn đã làm gì (dùng Perfekt), thời tiết, cảm nhận. Kết thúc: 'Bis bald!' (Hẹn gặp lại!), 'Dein/Deine' (Của bạn) + tên. Ví dụ: Lieber Minh, viele Grüße aus Rom! Das Wetter ist super. Ich habe das Kolosseum besucht und viel Eis gegessen. Bis bald! Deine Anna.",
      },
      {
        type: "practice",
        titleDe: "Übung: Von deiner letzten Reise erzählen",
        titleVi: "Bài tập: Kể về chuyến đi gần nhất",
        instruction:
          "Erzähle von deiner letzten Reise im Perfekt. Wohin bist du gereist? Was hast du gemacht? Wie war es?",
        instructionVi:
          "Hãy kể về chuyến đi gần nhất bằng thì Perfekt. Bạn đã đi đâu? Bạn đã làm gì? Chuyến đi thế nào? Sử dụng: Ich bin nach... gefahren/geflogen. Ich habe... besucht/gesehen/gemacht. Es war...",
      },
    ],
  },

  // =====================================================================
  // CHAPTER 2: Medien & Kommunikation
  // =====================================================================

  // --- Chapter 2, Lesson 1 ---
  {
    id: "a2-ch2-l1",
    chapterId: 2,
    lessonNumber: 1,
    title: "Internet & soziale Medien",
    titleVi: "Internet & mạng xã hội",
    type: "Einführung",
    objectives: [
      "Mô tả thói quen sử dụng internet bằng tiếng Đức",
      "Nói về các mạng xã hội và ứng dụng",
      "Hiểu từ vựng kỹ thuật số cơ bản",
      "Bày tỏ tần suất với các trạng từ chỉ thời gian",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Digitale Medien im Alltag",
        titleVi: "Phương tiện kỹ thuật số trong đời sống",
        textDe:
          "Das Internet und soziale Medien sind ein wichtiger Teil unseres Lebens. Wir benutzen sie zum Kommunizieren, für Informationen und zur Unterhaltung. In Deutschland sind WhatsApp, Instagram und YouTube sehr beliebt.",
        textVi:
          "Internet và mạng xã hội là phần quan trọng trong cuộc sống của chúng ta. Chúng ta sử dụng chúng để giao tiếp, tìm thông tin và giải trí. Ở Đức, WhatsApp, Instagram và YouTube rất phổ biến. Khác với Việt Nam (dùng Zalo, Facebook nhiều), người Đức dùng WhatsApp để nhắn tin là chủ yếu. Facebook ngày càng ít phổ biến ở giới trẻ Đức. Lưu ý: Đức rất coi trọng quyền riêng tư (Datenschutz) — không được tự ý đăng ảnh người khác lên mạng!",
      },
      {
        type: "vocabulary",
        titleDe: "Internet und digitale Medien",
        titleVi: "Internet và phương tiện kỹ thuật số",
        words: [
          { de: "das Internet", vi: "internet", article: "das" },
          { de: "die Website", vi: "trang web", article: "die" },
          { de: "die App", vi: "ứng dụng", article: "die" },
          { de: "das Passwort", vi: "mật khẩu", article: "das" },
          { de: "die E-Mail", vi: "email", article: "die" },
          { de: "die Nachricht", vi: "tin nhắn / tin tức", article: "die" },
          { de: "das Smartphone", vi: "điện thoại thông minh", article: "das" },
          { de: "der Laptop", vi: "máy tính xách tay", article: "der" },
          { de: "herunterladen", vi: "tải xuống" },
          { de: "hochladen", vi: "tải lên" },
          { de: "posten", vi: "đăng bài" },
          { de: "teilen", vi: "chia sẻ" },
          { de: "liken", vi: "thích (like)" },
          { de: "folgen", vi: "theo dõi (follow)" },
          { de: "der Follower", vi: "người theo dõi", article: "der" },
        ],
      },
      {
        type: "grammar",
        titleDe: "Häufigkeitsadverbien",
        titleVi: "Trạng từ chỉ tần suất",
        rule:
          "immer (100%) – oft/häufig – manchmal – selten – nie/niemals (0%). Position: nach dem Verb oder nach dem Subjekt in Inversionen.",
        ruleVi:
          "Trạng từ chỉ tần suất (Häufigkeitsadverbien) cho biết mức độ thường xuyên: immer (luôn luôn, 100%), oft / häufig (thường xuyên), manchmal (thỉnh thoảng), selten (hiếm khi), nie / niemals (không bao giờ, 0%). Vị trí trong câu: thường đứng sau động từ chia. Ví dụ: Ich benutze oft Instagram. Manchmal có thể đứng đầu câu (đảo ngữ): Manchmal chatte ich mit Freunden.",
        examples: [
          { de: "Ich benutze immer mein Smartphone.", vi: "Tôi luôn sử dụng điện thoại." },
          { de: "Sie schaut oft YouTube-Videos.", vi: "Cô ấy thường xem video YouTube." },
          { de: "Manchmal lese ich Nachrichten online.", vi: "Thỉnh thoảng tôi đọc tin tức trực tuyến." },
          { de: "Er postet selten Fotos auf Instagram.", vi: "Anh ấy hiếm khi đăng ảnh lên Instagram." },
          { de: "Meine Oma benutzt nie soziale Medien.", vi: "Bà tôi không bao giờ dùng mạng xã hội." },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Über soziale Medien sprechen",
        titleVi: "Nói về mạng xã hội",
        lines: [
          {
            speaker: "Minh",
            de: "Welche sozialen Medien benutzt du?",
            vi: "Bạn dùng mạng xã hội nào?",
          },
          {
            speaker: "Lisa",
            de: "Ich bin oft auf Instagram und schaue YouTube-Videos. Und du?",
            vi: "Tôi thường vào Instagram và xem video YouTube. Còn bạn?",
          },
          {
            speaker: "Minh",
            de: "In Vietnam benutzen alle Zalo und Facebook. Hier in Deutschland chatte ich aber meistens auf WhatsApp.",
            vi: "Ở Việt Nam ai cũng dùng Zalo và Facebook. Nhưng ở Đức tôi nhắn tin chủ yếu qua WhatsApp.",
          },
          {
            speaker: "Lisa",
            de: "Stimmt, WhatsApp ist hier sehr wichtig. Wie viele Stunden bist du pro Tag online?",
            vi: "Đúng, WhatsApp rất quan trọng ở đây. Bạn online bao nhiêu giờ mỗi ngày?",
          },
          {
            speaker: "Minh",
            de: "Ungefähr drei Stunden. Manchmal zu viel!",
            vi: "Khoảng ba tiếng. Đôi khi quá nhiều!",
          },
          {
            speaker: "Lisa",
            de: "Ja, ich auch. Ich versuche, weniger am Handy zu sein.",
            vi: "Ừ, tôi cũng vậy. Tôi cố gắng ít dùng điện thoại hơn.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Meine Mediennutzung",
        titleVi: "Bài tập: Thói quen sử dụng media của tôi",
        instruction:
          "Beschreibe deine Mediennutzung. Welche Apps benutzt du? Wie oft? Benutze Häufigkeitsadverbien.",
        instructionVi:
          "Hãy mô tả thói quen sử dụng media của bạn. Bạn dùng ứng dụng nào? Bao lâu một lần? Dùng trạng từ chỉ tần suất. Ví dụ: Ich benutze immer WhatsApp. Ich schaue oft Videos auf TikTok. Ich poste selten Fotos.",
      },
    ],
  },

  // --- Chapter 2, Lesson 2 ---
  {
    id: "a2-ch2-l2",
    chapterId: 2,
    lessonNumber: 2,
    title: "Nachrichten verstehen",
    titleVi: "Hiểu tin tức",
    type: "Grammatik",
    objectives: [
      "Đọc hiểu tiêu đề và đoạn tin ngắn bằng tiếng Đức",
      "Sử dụng Nebensatz với 'weil' và 'dass'",
      "Tóm tắt thông tin từ tin tức đơn giản",
      "Phân biệt sự thật và ý kiến trong văn bản",
    ],
    content: [
      {
        type: "grammar",
        titleDe: "Nebensatz mit 'weil' (Begründung)",
        titleVi: "Mệnh đề phụ với 'weil' (lý do)",
        rule:
          "Hauptsatz + weil + Subjekt + ... + Verb (am Ende). 'weil' leitet einen Grund ein. Das konjugierte Verb steht am Ende des Nebensatzes.",
        ruleVi:
          "Liên từ 'weil' (vì) dùng để nêu lý do. Khi dùng 'weil', động từ chia đặt ở cuối mệnh đề phụ — đây là quy tắc quan trọng nhất! Cấu trúc: Hauptsatz (mệnh đề chính), weil + Subjekt + ... + Verb (cuối). So sánh với tiếng Việt: 'Tôi ở nhà vì tôi bị ốm' → Ich bleibe zu Hause, weil ich krank bin. Lưu ý: Trong tiếng Việt, thứ tự từ không thay đổi. Trong tiếng Đức, động từ phải nhảy xuống cuối!",
        examples: [
          { de: "Ich lese die Nachrichten, weil ich informiert sein möchte.", vi: "Tôi đọc tin tức vì tôi muốn được thông tin." },
          { de: "Er schaut kein Fernsehen, weil er keine Zeit hat.", vi: "Anh ấy không xem tivi vì anh ấy không có thời gian." },
          { de: "Wir lernen Deutsch, weil wir in Deutschland leben.", vi: "Chúng tôi học tiếng Đức vì chúng tôi sống ở Đức." },
          { de: "Sie liest die Zeitung, weil sie sich für Politik interessiert.", vi: "Cô ấy đọc báo vì cô ấy quan tâm đến chính trị." },
        ],
      },
      {
        type: "grammar",
        titleDe: "Nebensatz mit 'dass'",
        titleVi: "Mệnh đề phụ với 'dass'",
        rule:
          "Hauptsatz + dass + Subjekt + ... + Verb (am Ende). 'dass' leitet eine Aussage ein. Oft nach: Ich denke/glaube/finde, dass...",
        ruleVi:
          "Liên từ 'dass' (rằng) dùng để truyền đạt thông tin, ý kiến, suy nghĩ. Giống 'weil', động từ chia đặt ở cuối mệnh đề phụ. Thường dùng sau: Ich denke, dass... (Tôi nghĩ rằng...), Ich glaube, dass... (Tôi tin rằng...), Ich finde, dass... (Tôi thấy rằng...), Ich habe gehört, dass... (Tôi nghe nói rằng...), Es ist wichtig, dass... (Điều quan trọng là...). Mẹo: 'dass' giống 'that' trong tiếng Anh — I think that... = Ich denke, dass...",
        examples: [
          { de: "Ich denke, dass die Nachrichten wichtig sind.", vi: "Tôi nghĩ rằng tin tức quan trọng." },
          { de: "Er glaubt, dass das Wetter morgen schön wird.", vi: "Anh ấy tin rằng ngày mai thời tiết sẽ đẹp." },
          { de: "Ich habe gehört, dass ein neues Café eröffnet hat.", vi: "Tôi nghe nói rằng một quán cà phê mới đã mở." },
          { de: "Es ist wichtig, dass man verschiedene Quellen liest.", vi: "Điều quan trọng là đọc nhiều nguồn khác nhau." },
        ],
      },
      {
        type: "vocabulary",
        titleDe: "Nachrichten und Medien",
        titleVi: "Tin tức và truyền thông",
        words: [
          { de: "die Nachricht", vi: "tin tức / tin nhắn", article: "die" },
          { de: "die Zeitung", vi: "báo (giấy)", article: "die" },
          { de: "die Zeitschrift", vi: "tạp chí", article: "die" },
          { de: "das Fernsehen", vi: "truyền hình", article: "das" },
          { de: "das Radio", vi: "đài phát thanh", article: "das" },
          { de: "der Artikel", vi: "bài báo", article: "der" },
          { de: "die Schlagzeile", vi: "tiêu đề báo", article: "die" },
          { de: "der Bericht", vi: "bản tin / báo cáo", article: "der" },
          { de: "die Meldung", vi: "thông báo / tin ngắn", article: "die" },
          { de: "die Quelle", vi: "nguồn tin", article: "die" },
          { de: "berichten", vi: "đưa tin" },
          { de: "informieren", vi: "thông tin" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Über Nachrichten sprechen",
        titleVi: "Nói về tin tức",
        lines: [
          {
            speaker: "Lan",
            de: "Hast du die Nachrichten heute gelesen?",
            vi: "Hôm nay bạn đọc tin tức chưa?",
          },
          {
            speaker: "Thomas",
            de: "Ja, ich habe gelesen, dass es am Wochenende regnen soll.",
            vi: "Rồi, tôi đọc thấy rằng cuối tuần trời sẽ mưa.",
          },
          {
            speaker: "Lan",
            de: "Schade! Ich wollte eigentlich wandern gehen.",
            vi: "Tiếc quá! Tôi định đi bộ đường dài mà.",
          },
          {
            speaker: "Thomas",
            de: "Wo liest du normalerweise Nachrichten?",
            vi: "Bạn thường đọc tin tức ở đâu?",
          },
          {
            speaker: "Lan",
            de: "Meistens online, weil es schneller ist. Ich benutze die Tagesschau-App.",
            vi: "Chủ yếu online vì nhanh hơn. Tôi dùng app Tagesschau.",
          },
          {
            speaker: "Thomas",
            de: "Ich finde, dass man verschiedene Quellen lesen sollte.",
            vi: "Tôi thấy rằng nên đọc nhiều nguồn khác nhau.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Nebensätze bilden",
        titleVi: "Bài tập: Tạo mệnh đề phụ",
        instruction:
          "Bilde Sätze mit 'weil' und 'dass'. Beispiel: Ich lerne Deutsch. Ich brauche es für die Arbeit. → Ich lerne Deutsch, weil ich es für die Arbeit brauche.",
        instructionVi:
          "Hãy tạo câu với 'weil' và 'dass'. Nhớ quy tắc: động từ chia đặt cuối mệnh đề phụ! Thử nói: 1) Tại sao bạn đọc tin tức? (Ich lese Nachrichten, weil...) 2) Bạn nghĩ gì về mạng xã hội? (Ich denke, dass...) 3) Tại sao bạn thích/không thích xem tivi? (..., weil...)",
      },
    ],
  },

  // --- Chapter 2, Lesson 3 ---
  {
    id: "a2-ch2-l3",
    chapterId: 2,
    lessonNumber: 3,
    title: "Briefe und E-Mails schreiben",
    titleVi: "Viết thư và email",
    type: "Fertigkeit",
    objectives: [
      "Viết email trang trọng và thân mật bằng tiếng Đức",
      "Sử dụng đúng cách mở đầu và kết thúc thư",
      "Phân biệt văn phong trang trọng (Sie) và thân mật (du)",
      "Viết thư phản hồi đơn giản",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Formelle und informelle E-Mails",
        titleVi: "Email trang trọng và thân mật",
        textDe:
          "In Deutschland ist es sehr wichtig, die richtige Anrede in E-Mails zu benutzen. Formelle E-Mails beginnen mit 'Sehr geehrte/r...' und enden mit 'Mit freundlichen Grüßen'. Informelle E-Mails beginnen mit 'Liebe/r...' und enden mit 'Liebe Grüße'.",
        textVi:
          "Ở Đức, cách xưng hô trong email rất quan trọng. Email trang trọng (formell): Dùng khi viết cho cơ quan, sếp, người không quen. Mở đầu: 'Sehr geehrte Frau [tên],' / 'Sehr geehrter Herr [tên],' / 'Sehr geehrte Damen und Herren,' (khi không biết tên). Kết thúc: 'Mit freundlichen Grüßen' (Trân trọng). Email thân mật (informell): Dùng cho bạn bè, người thân. Mở đầu: 'Liebe [tên nữ],' / 'Lieber [tên nam],' / 'Hallo [tên],'. Kết thúc: 'Liebe Grüße' / 'Viele Grüße'. LƯU Ý: Sau lời chào, luôn dùng dấu phẩy, và dòng tiếp theo viết thường!",
      },
      {
        type: "vocabulary",
        titleDe: "E-Mail-Wortschatz",
        titleVi: "Từ vựng email",
        words: [
          { de: "der Betreff", vi: "tiêu đề (subject)", article: "der" },
          { de: "der Absender", vi: "người gửi", article: "der" },
          { de: "der Empfänger", vi: "người nhận", article: "der" },
          { de: "der Anhang", vi: "tệp đính kèm", article: "der" },
          { de: "Sehr geehrte Damen und Herren", vi: "Kính thưa quý ông bà (không biết tên)" },
          { de: "Sehr geehrte Frau...", vi: "Kính thưa bà..." },
          { de: "Sehr geehrter Herr...", vi: "Kính thưa ông..." },
          { de: "Mit freundlichen Grüßen", vi: "Trân trọng" },
          { de: "Liebe Grüße", vi: "Thân ái" },
          { de: "Viele Grüße", vi: "Nhiều lời chào" },
          { de: "Ich schreibe Ihnen, weil...", vi: "Tôi viết cho ông/bà vì..." },
          { de: "Vielen Dank für Ihre Antwort.", vi: "Cảm ơn rất nhiều vì phản hồi của ông/bà." },
        ],
      },
      {
        type: "explanation",
        titleDe: "Beispiel: Eine formelle E-Mail",
        titleVi: "Ví dụ: Một email trang trọng",
        textDe:
          "Betreff: Frage zur Anmeldung\n\nSehr geehrte Frau Schmidt,\n\nich schreibe Ihnen, weil ich eine Frage zur Anmeldung für den Deutschkurs habe. Ich möchte gern wissen, ob der Kurs am Montag beginnt.\n\nKönnten Sie mir bitte die Kursinformationen schicken?\n\nVielen Dank im Voraus.\n\nMit freundlichen Grüßen\nNguyen Thi Lan",
        textVi:
          "Tiêu đề: Câu hỏi về đăng ký\n\nKính thưa bà Schmidt,\n\ntôi viết cho bà vì tôi có một câu hỏi về việc đăng ký khóa học tiếng Đức. Tôi muốn biết khóa học có bắt đầu vào thứ Hai không.\n\nBà có thể gửi cho tôi thông tin khóa học được không?\n\nXin cảm ơn trước.\n\nTrân trọng\nNguyen Thi Lan\n\nLưu ý cấu trúc: 1) Betreff (tiêu đề ngắn gọn), 2) Anrede (lời chào), 3) Einleitung (mở đầu — lý do viết), 4) Hauptteil (nội dung chính), 5) Schluss (kết thúc — cảm ơn), 6) Grußformel + Name.",
      },
      {
        type: "dialogue",
        titleDe: "Über eine E-Mail sprechen",
        titleVi: "Nói về một email",
        lines: [
          {
            speaker: "Minh",
            de: "Ich muss eine E-Mail an meinen Vermieter schreiben. Kannst du mir helfen?",
            vi: "Tôi phải viết email cho chủ nhà. Bạn giúp tôi được không?",
          },
          {
            speaker: "Lisa",
            de: "Klar! Worum geht es?",
            vi: "Được chứ! Về vấn đề gì?",
          },
          {
            speaker: "Minh",
            de: "Die Heizung in meiner Wohnung funktioniert nicht.",
            vi: "Lò sưởi trong căn hộ của tôi không hoạt động.",
          },
          {
            speaker: "Lisa",
            de: "OK. Schreib: Sehr geehrter Herr Braun, ich schreibe Ihnen, weil die Heizung in meiner Wohnung nicht funktioniert.",
            vi: "OK. Viết: Kính thưa ông Braun, tôi viết cho ông vì lò sưởi trong căn hộ của tôi không hoạt động.",
          },
          {
            speaker: "Minh",
            de: "Und dann? Wie bitte ich um Hilfe?",
            vi: "Rồi sao? Tôi nhờ giúp đỡ thế nào?",
          },
          {
            speaker: "Lisa",
            de: "Schreib: Könnten Sie bitte einen Techniker schicken? Vielen Dank im Voraus. Mit freundlichen Grüßen.",
            vi: "Viết: Ông có thể vui lòng gửi thợ kỹ thuật đến không? Xin cảm ơn trước. Trân trọng.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Eine E-Mail schreiben",
        titleVi: "Bài tập: Viết email",
        instruction:
          "Schreibe eine formelle E-Mail an deine Sprachschule. Du möchtest den Kurstermin ändern. Benutze die formelle Anrede und Grußformel.",
        instructionVi:
          "Hãy viết một email trang trọng gửi trường ngoại ngữ. Bạn muốn đổi lịch học. Sử dụng lời chào và kết thúc trang trọng. Cấu trúc: 1) Betreff, 2) Sehr geehrte Damen und Herren, 3) Lý do viết (weil-Satz), 4) Yêu cầu lịch sự (Könnten Sie bitte...?), 5) Vielen Dank im Voraus, 6) Mit freundlichen Grüßen + tên.",
      },
    ],
  },

  // --- Chapter 2, Lesson 4 ---
  {
    id: "a2-ch2-l4",
    chapterId: 2,
    lessonNumber: 4,
    title: "Meinungen äußern",
    titleVi: "Bày tỏ ý kiến",
    type: "Integration",
    objectives: [
      "Bày tỏ ý kiến cá nhân bằng tiếng Đức",
      "Đồng ý và không đồng ý một cách lịch sự",
      "Sử dụng các cấu trúc 'Ich finde, dass...', 'Meiner Meinung nach...'",
      "Tham gia cuộc thảo luận đơn giản về chủ đề quen thuộc",
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Meinungen ausdrücken",
        titleVi: "Bày tỏ ý kiến",
        words: [
          { de: "Ich finde, dass...", vi: "Tôi thấy rằng..." },
          { de: "Ich denke, dass...", vi: "Tôi nghĩ rằng..." },
          { de: "Ich glaube, dass...", vi: "Tôi tin rằng..." },
          { de: "Meiner Meinung nach...", vi: "Theo ý kiến của tôi..." },
          { de: "Ich bin der Meinung, dass...", vi: "Tôi có ý kiến rằng..." },
          { de: "Da hast du recht.", vi: "Bạn nói đúng." },
          { de: "Ich stimme dir/Ihnen zu.", vi: "Tôi đồng ý với bạn." },
          { de: "Das sehe ich anders.", vi: "Tôi thấy khác." },
          { de: "Ich bin nicht einverstanden.", vi: "Tôi không đồng ý." },
          { de: "Das stimmt (nicht).", vi: "Đúng (Không đúng)." },
          { de: "Einerseits..., andererseits...", vi: "Một mặt..., mặt khác..." },
        ],
      },
      {
        type: "grammar",
        titleDe: "Satzstrukturen für Meinungen",
        titleVi: "Cấu trúc câu để bày tỏ ý kiến",
        rule:
          "Ich finde/denke/glaube, dass + Nebensatz (Verb am Ende). Meiner Meinung nach + Verb + Subjekt (Inversion!).",
        ruleVi:
          "Có hai cách chính để bày tỏ ý kiến: 1) Với 'dass': Ich finde, dass soziale Medien nützlich sind. (động từ cuối mệnh đề phụ). 2) Với 'Meiner Meinung nach': Meiner Meinung nach sind soziale Medien nützlich. (đảo ngữ — động từ đứng vị trí 2, trước chủ ngữ). Cách nói đồng ý: Da hast du recht. / Ich stimme dir zu. / Genau! / Ja, das finde ich auch. Cách nói không đồng ý (lịch sự): Das sehe ich anders. / Ich bin nicht sicher. / Ja, aber... Trong văn hóa Đức, bày tỏ ý kiến khác biệt là bình thường và được tôn trọng — không coi là bất lịch sự như trong văn hóa Việt Nam.",
        examples: [
          { de: "Ich finde, dass Deutsch eine schöne Sprache ist.", vi: "Tôi thấy tiếng Đức là ngôn ngữ đẹp." },
          { de: "Meiner Meinung nach ist Sport sehr wichtig.", vi: "Theo ý kiến tôi, thể thao rất quan trọng." },
          { de: "Ich glaube, dass soziale Medien auch Nachteile haben.", vi: "Tôi tin rằng mạng xã hội cũng có nhược điểm." },
          { de: "Ich bin der Meinung, dass man weniger Plastik benutzen sollte.", vi: "Tôi có ý kiến rằng nên dùng ít nhựa hơn." },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Eine Diskussion über soziale Medien",
        titleVi: "Một cuộc thảo luận về mạng xã hội",
        lines: [
          {
            speaker: "Lehrer",
            de: "Was denkt ihr über soziale Medien? Sind sie gut oder schlecht?",
            vi: "Các bạn nghĩ gì về mạng xã hội? Tốt hay xấu?",
          },
          {
            speaker: "Minh",
            de: "Ich finde, dass soziale Medien sehr nützlich sind, weil man mit der Familie in Kontakt bleiben kann.",
            vi: "Tôi thấy mạng xã hội rất hữu ích vì có thể giữ liên lạc với gia đình.",
          },
          {
            speaker: "Lisa",
            de: "Da hast du recht. Aber ich glaube auch, dass viele Leute zu viel Zeit online verbringen.",
            vi: "Bạn nói đúng. Nhưng tôi cũng tin rằng nhiều người dành quá nhiều thời gian online.",
          },
          {
            speaker: "Minh",
            de: "Ja, das stimmt. Einerseits sind sie praktisch, andererseits können sie süchtig machen.",
            vi: "Ừ, đúng vậy. Một mặt chúng tiện lợi, mặt khác chúng có thể gây nghiện.",
          },
          {
            speaker: "Thomas",
            de: "Meiner Meinung nach sollte man das Handy beim Essen weglegen.",
            vi: "Theo ý kiến tôi, nên để điện thoại đi khi ăn.",
          },
          {
            speaker: "Lisa",
            de: "Ich stimme dir zu! Das finde ich auch.",
            vi: "Tôi đồng ý! Tôi cũng nghĩ vậy.",
          },
        ],
      },
      {
        type: "explanation",
        titleDe: "Kulturelle Hinweise: Diskussionskultur in Deutschland",
        titleVi: "Ghi chú văn hóa: Văn hóa thảo luận ở Đức",
        textDe:
          "In Deutschland ist es normal, offen seine Meinung zu sagen. Man kann höflich widersprechen. Das ist kein Zeichen von Unhöflichkeit.",
        textVi:
          "Ở Đức, việc nói thẳng ý kiến của mình là bình thường và được khuyến khích. Bạn có thể lịch sự phản đối — điều này KHÔNG bị coi là bất lịch sự. Đây là khác biệt lớn với văn hóa Việt Nam, nơi thường tránh xung đột trực tiếp. Mẹo: Dùng 'Ja, aber...' (Vâng, nhưng...) hoặc 'Das sehe ich ein bisschen anders' (Tôi thấy hơi khác) để phản đối nhẹ nhàng. Người Đức đánh giá cao sự trung thực và lập luận rõ ràng.",
      },
      {
        type: "practice",
        titleDe: "Übung: Deine Meinung sagen",
        titleVi: "Bài tập: Nói ý kiến của bạn",
        instruction:
          "Äußere deine Meinung zu diesen Themen: 1) Soziale Medien, 2) Online-Lernen vs. Präsenzunterricht, 3) Fernsehen vs. YouTube. Benutze verschiedene Strukturen.",
        instructionVi:
          "Hãy nói ý kiến về các chủ đề: 1) Mạng xã hội, 2) Học online vs. học trực tiếp, 3) Tivi vs. YouTube. Sử dụng các cấu trúc khác nhau: Ich finde, dass... / Meiner Meinung nach... / Ich glaube, dass... Thử thêm lý do với 'weil'!",
      },
    ],
  },

  // =====================================================================
  // CHAPTER 3: Ausbildung & Beruf
  // =====================================================================

  // --- Chapter 3, Lesson 1 ---
  {
    id: "a2-ch3-l1",
    chapterId: 3,
    lessonNumber: 1,
    title: "Schulsystem in Deutschland",
    titleVi: "Hệ thống giáo dục ở Đức",
    type: "Einführung",
    objectives: [
      "Hiểu cấu trúc hệ thống giáo dục Đức",
      "So sánh với hệ thống giáo dục Việt Nam",
      "Sử dụng từ vựng về trường học và giáo dục",
      "Mô tả quá trình học tập của mình",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Das deutsche Schulsystem",
        titleVi: "Hệ thống trường học Đức",
        textDe:
          "In Deutschland gehen Kinder zuerst in die Grundschule (Klasse 1–4). Danach gibt es verschiedene weiterführende Schulen: Hauptschule, Realschule und Gymnasium. Das Gymnasium endet mit dem Abitur, das für die Universität nötig ist. Es gibt auch die Gesamtschule, die alle Schulformen kombiniert.",
        textVi:
          "Ở Đức, trẻ em đầu tiên đi Grundschule (tiểu học, lớp 1–4). Sau đó có nhiều loại trường: Hauptschule (trường nghề cơ bản, lớp 5–9), Realschule (trường trung cấp, lớp 5–10), Gymnasium (trường phổ thông, lớp 5–12/13 → Abitur). Abitur là kỳ thi tốt nghiệp phổ thông, cần để vào đại học. Hệ thống này rất khác Việt Nam! Ở Việt Nam, tất cả học sinh đi cùng một loại trường. Ở Đức, trẻ em được phân loại từ 10 tuổi. Ngoài ra còn có Ausbildung (đào tạo nghề) — rất phổ biến và được tôn trọng ở Đức, khác với Việt Nam nơi đại học thường được ưu tiên.",
      },
      {
        type: "vocabulary",
        titleDe: "Schule und Bildung",
        titleVi: "Trường học và giáo dục",
        words: [
          { de: "die Grundschule", vi: "trường tiểu học", article: "die" },
          { de: "die Hauptschule", vi: "trường nghề cơ bản", article: "die" },
          { de: "die Realschule", vi: "trường trung cấp", article: "die" },
          { de: "das Gymnasium", vi: "trường phổ thông (dẫn đến Abitur)", article: "das" },
          { de: "die Gesamtschule", vi: "trường tổng hợp", article: "die" },
          { de: "das Abitur", vi: "bằng tốt nghiệp phổ thông", article: "das" },
          { de: "die Universität", vi: "đại học", article: "die" },
          { de: "die Ausbildung", vi: "đào tạo nghề", article: "die" },
          { de: "das Studium", vi: "việc học đại học", article: "das" },
          { de: "der Abschluss", vi: "bằng cấp / tốt nghiệp", article: "der" },
          { de: "die Note", vi: "điểm số", article: "die" },
          { de: "das Zeugnis", vi: "bảng điểm / chứng chỉ", article: "das" },
          { de: "der Schüler / die Schülerin", vi: "học sinh (nam / nữ)" },
          { de: "der Student / die Studentin", vi: "sinh viên (nam / nữ)" },
        ],
      },
      {
        type: "grammar",
        titleDe: "Komparativ und Superlativ (Einführung)",
        titleVi: "So sánh hơn và so sánh nhất (Giới thiệu)",
        rule:
          "Komparativ: Adjektiv + -er (+ als). Superlativ: am + Adjektiv + -sten. Einsilbige Adjektive mit a/o/u bekommen oft Umlaut.",
        ruleVi:
          "So sánh hơn (Komparativ): thêm '-er' vào tính từ. 'als' = hơn. Ví dụ: groß → größer (lớn hơn), klein → kleiner (nhỏ hơn). So sánh nhất (Superlativ): 'am' + tính từ + '-sten'. Ví dụ: groß → am größten (lớn nhất). Tính từ một âm tiết có a/o/u thường đổi thành ä/ö/ü: alt → älter → am ältesten, groß → größer → am größten. Bất quy tắc: gut → besser → am besten, viel → mehr → am meisten, gern → lieber → am liebsten. So sánh bằng: so... wie (cũng... như). Ví dụ: Deutsch ist so schwer wie Japanisch.",
        examples: [
          { de: "Das Gymnasium ist schwerer als die Realschule.", vi: "Gymnasium khó hơn Realschule." },
          { de: "Die Universität ist am schwersten.", vi: "Đại học khó nhất." },
          { de: "In Vietnam sind die Klassen größer als in Deutschland.", vi: "Ở Việt Nam, lớp học lớn hơn ở Đức." },
          { de: "Welches Fach magst du am liebsten?", vi: "Bạn thích môn nào nhất?" },
          { de: "Mathe ist genauso wichtig wie Deutsch.", vi: "Toán cũng quan trọng như tiếng Đức." },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Über Schule sprechen",
        titleVi: "Nói về trường học",
        lines: [
          {
            speaker: "Lisa",
            de: "Wie ist das Schulsystem in Vietnam?",
            vi: "Hệ thống trường học ở Việt Nam thế nào?",
          },
          {
            speaker: "Minh",
            de: "In Vietnam gehen alle Kinder zuerst 5 Jahre in die Grundschule, dann 4 Jahre in die Mittelschule und 3 Jahre ins Gymnasium.",
            vi: "Ở Việt Nam, tất cả trẻ em đầu tiên đi 5 năm tiểu học, rồi 4 năm trung học cơ sở và 3 năm trung học phổ thông.",
          },
          {
            speaker: "Lisa",
            de: "Das ist anders als in Deutschland. Hier werden die Kinder nach der Grundschule getrennt.",
            vi: "Khác với Đức nhỉ. Ở đây trẻ em được phân loại sau tiểu học.",
          },
          {
            speaker: "Minh",
            de: "Ja, ich finde das Ausbildungssystem hier besser als in Vietnam. Man lernt einen Beruf direkt in einer Firma.",
            vi: "Ừ, tôi thấy hệ thống đào tạo nghề ở đây tốt hơn Việt Nam. Người ta học nghề trực tiếp trong công ty.",
          },
          {
            speaker: "Lisa",
            de: "Stimmt! Die duale Ausbildung ist sehr beliebt. Man verdient sogar Geld während der Ausbildung.",
            vi: "Đúng! Đào tạo nghề kép rất phổ biến. Thậm chí được trả lương trong thời gian học.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Vergleiche die Schulsysteme",
        titleVi: "Bài tập: So sánh hệ thống giáo dục",
        instruction:
          "Vergleiche das Schulsystem in Deutschland und Vietnam. Benutze den Komparativ und 'als'.",
        instructionVi:
          "Hãy so sánh hệ thống giáo dục ở Đức và Việt Nam. Dùng so sánh hơn và 'als'. Ví dụ: Die Schule in Vietnam ist strenger als in Deutschland. Die Ausbildung in Deutschland ist praktischer als in Vietnam. Thử nói về: kích thước lớp, môn học, thi cử, đào tạo nghề.",
      },
    ],
  },

  // --- Chapter 3, Lesson 2 ---
  {
    id: "a2-ch3-l2",
    chapterId: 3,
    lessonNumber: 2,
    title: "Berufe beschreiben",
    titleVi: "Mô tả nghề nghiệp",
    type: "Grammatik",
    objectives: [
      "Mô tả các nghề nghiệp phổ biến bằng tiếng Đức",
      "Sử dụng Modalverben: müssen, können, sollen",
      "Nói về yêu cầu và kỹ năng cho các nghề khác nhau",
      "Hiểu dạng nam/nữ của danh từ chỉ nghề nghiệp",
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Berufe",
        titleVi: "Nghề nghiệp",
        words: [
          { de: "der Arzt / die Ärztin", vi: "bác sĩ (nam / nữ)" },
          { de: "der Ingenieur / die Ingenieurin", vi: "kỹ sư (nam / nữ)" },
          { de: "der Lehrer / die Lehrerin", vi: "giáo viên (nam / nữ)" },
          { de: "der Krankenpfleger / die Krankenpflegerin", vi: "y tá (nam / nữ)" },
          { de: "der Programmierer / die Programmiererin", vi: "lập trình viên (nam / nữ)" },
          { de: "der Koch / die Köchin", vi: "đầu bếp (nam / nữ)" },
          { de: "der Verkäufer / die Verkäuferin", vi: "nhân viên bán hàng (nam / nữ)" },
          { de: "der Mechaniker / die Mechanikerin", vi: "thợ máy (nam / nữ)" },
          { de: "der Anwalt / die Anwältin", vi: "luật sư (nam / nữ)" },
          { de: "der Friseur / die Friseurin", vi: "thợ cắt tóc (nam / nữ)" },
          { de: "der Elektriker / die Elektrikerin", vi: "thợ điện (nam / nữ)" },
          { de: "der Buchhalter / die Buchhalterin", vi: "kế toán (nam / nữ)" },
        ],
      },
      {
        type: "grammar",
        titleDe: "Modalverben: müssen, können, sollen",
        titleVi: "Động từ khiếm khuyết: müssen, können, sollen",
        rule:
          "Modalverb (konjugiert, Position 2) + Infinitiv (am Ende). müssen = phải, können = có thể, sollen = nên.",
        ruleVi:
          "Động từ khiếm khuyết (Modalverben) diễn tả khả năng, nghĩa vụ, lời khuyên. Cấu trúc: Chủ ngữ + Modalverb (chia, vị trí 2) + ... + Infinitiv (cuối câu). müssen (phải — bắt buộc): ich muss, du musst, er/sie muss, wir müssen, ihr müsst, sie müssen. können (có thể — khả năng): ich kann, du kannst, er/sie kann, wir können, ihr könnt, sie können. sollen (nên — lời khuyên/yêu cầu): ich soll, du sollst, er/sie soll, wir sollen, ihr sollt, sie sollen. Lưu ý: Ngôi 1 (ich) và ngôi 3 (er/sie/es) giống nhau — không có đuôi!",
        examples: [
          { de: "Ein Arzt muss viele Jahre studieren.", vi: "Bác sĩ phải học nhiều năm." },
          { de: "Eine Lehrerin muss gut erklären können.", vi: "Một giáo viên phải có thể giải thích tốt." },
          { de: "Ein Programmierer kann von zu Hause arbeiten.", vi: "Lập trình viên có thể làm việc từ nhà." },
          { de: "Du sollst pünktlich zur Arbeit kommen.", vi: "Bạn nên đến đúng giờ đi làm." },
          { de: "Man muss kreativ sein, wenn man Koch werden will.", vi: "Phải sáng tạo nếu muốn trở thành đầu bếp." },
        ],
      },
      {
        type: "explanation",
        titleDe: "Berufsbezeichnungen: maskulin und feminin",
        titleVi: "Tên nghề nghiệp: dạng nam và nữ",
        textDe:
          "Die meisten Berufsbezeichnungen haben eine maskuline und eine feminine Form. Die feminine Form endet oft auf '-in': der Lehrer → die Lehrerin, der Arzt → die Ärztin.",
        textVi:
          "Hầu hết tên nghề nghiệp trong tiếng Đức có dạng nam và nữ. Dạng nữ thường thêm '-in': der Lehrer → die Lehrerin, der Koch → die Köchin (thường có Umlaut). Một số thay đổi đặc biệt: der Arzt → die Ärztin, der Anwalt → die Anwältin (thêm Umlaut). Khi nói về nghề nghiệp: 'Ich bin Lehrer.' (KHÔNG dùng 'ein' — đây là quy tắc đặc biệt! Khác với tiếng Anh: 'I am a teacher'). Nhưng với tính từ: 'Ich bin ein guter Lehrer.'",
      },
      {
        type: "dialogue",
        titleDe: "Über Berufe sprechen",
        titleVi: "Nói về nghề nghiệp",
        lines: [
          {
            speaker: "Thomas",
            de: "Was bist du von Beruf, Lan?",
            vi: "Bạn làm nghề gì, Lan?",
          },
          {
            speaker: "Lan",
            de: "Ich bin Krankenpflegerin. Ich arbeite im Krankenhaus.",
            vi: "Tôi là y tá. Tôi làm việc ở bệnh viện.",
          },
          {
            speaker: "Thomas",
            de: "Das ist ein wichtiger Beruf! Musst du auch am Wochenende arbeiten?",
            vi: "Đó là nghề quan trọng! Bạn cũng phải làm cuối tuần à?",
          },
          {
            speaker: "Lan",
            de: "Ja, leider. Ich muss manchmal Nachtschicht machen. Aber ich kann vielen Menschen helfen.",
            vi: "Vâng, tiếc là vậy. Đôi khi tôi phải làm ca đêm. Nhưng tôi có thể giúp được nhiều người.",
          },
          {
            speaker: "Thomas",
            de: "Was muss man können, um Krankenpflegerin zu werden?",
            vi: "Cần biết gì để trở thành y tá?",
          },
          {
            speaker: "Lan",
            de: "Man muss eine dreijährige Ausbildung machen. Man soll geduldig und einfühlsam sein.",
            vi: "Phải hoàn thành đào tạo ba năm. Nên kiên nhẫn và đồng cảm.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Deinen Traumberuf beschreiben",
        titleVi: "Bài tập: Mô tả nghề mơ ước",
        instruction:
          "Beschreibe deinen Traumberuf. Was muss man können? Was kann man in diesem Beruf machen? Benutze Modalverben.",
        instructionVi:
          "Hãy mô tả nghề mơ ước của bạn. Cần biết gì? Có thể làm gì trong nghề đó? Dùng Modalverben. Ví dụ: Ich möchte Programmierer werden. Man muss gut mit Computern umgehen können. Man kann von zu Hause arbeiten. Man soll kreativ sein.",
      },
    ],
  },

  // --- Chapter 3, Lesson 3 ---
  {
    id: "a2-ch3-l3",
    chapterId: 3,
    lessonNumber: 3,
    title: "Bewerbung & Lebenslauf",
    titleVi: "Đơn xin việc & Sơ yếu lý lịch",
    type: "Fertigkeit",
    objectives: [
      "Hiểu cấu trúc đơn xin việc (Bewerbung) của Đức",
      "Viết sơ yếu lý lịch (Lebenslauf) đơn giản",
      "Sử dụng thì Präteritum của 'haben' và 'sein'",
      "Mô tả kinh nghiệm làm việc và trình độ học vấn",
    ],
    content: [
      {
        type: "explanation",
        titleDe: "Die deutsche Bewerbung",
        titleVi: "Đơn xin việc kiểu Đức",
        textDe:
          "Eine deutsche Bewerbung besteht aus: Anschreiben (Motivationsschreiben), Lebenslauf (tabellarisch), Zeugnisse und Zertifikate. Der Lebenslauf ist in Deutschland tabellarisch — nicht als Fließtext.",
        textVi:
          "Đơn xin việc Đức gồm: 1) Anschreiben (thư xin việc — giải thích tại sao bạn muốn làm và tại sao bạn phù hợp), 2) Lebenslauf (sơ yếu lý lịch — dạng bảng, KHÔNG viết thành đoạn văn), 3) Zeugnisse (bảng điểm, chứng chỉ). Khác biệt lớn với Việt Nam: Ở Đức, Lebenslauf thường có ảnh thẻ (Bewerbungsfoto), viết theo thứ tự thời gian ngược (gần nhất trước). Phải luôn trung thực — người Đức kiểm tra rất kỹ! Mẹo: Anschreiben nên ngắn gọn (1 trang), thể hiện động lực và kỹ năng phù hợp với vị trí.",
      },
      {
        type: "vocabulary",
        titleDe: "Bewerbung und Lebenslauf",
        titleVi: "Đơn xin việc và sơ yếu lý lịch",
        words: [
          { de: "die Bewerbung", vi: "đơn xin việc", article: "die" },
          { de: "das Anschreiben", vi: "thư xin việc", article: "das" },
          { de: "der Lebenslauf", vi: "sơ yếu lý lịch", article: "der" },
          { de: "die Berufserfahrung", vi: "kinh nghiệm làm việc", article: "die" },
          { de: "die Ausbildung", vi: "đào tạo / học vấn", article: "die" },
          { de: "die Kenntnisse (Pl.)", vi: "kiến thức / kỹ năng" },
          { de: "die Stelle", vi: "vị trí (công việc)", article: "die" },
          { de: "die Stellenanzeige", vi: "tin tuyển dụng", article: "die" },
          { de: "das Vorstellungsgespräch", vi: "phỏng vấn xin việc", article: "das" },
          { de: "sich bewerben (um/für)", vi: "nộp đơn xin (việc)" },
          { de: "einstellen", vi: "tuyển dụng" },
          { de: "die Qualifikation", vi: "trình độ / bằng cấp", article: "die" },
        ],
      },
      {
        type: "grammar",
        titleDe: "Präteritum von 'haben' und 'sein'",
        titleVi: "Thì quá khứ đơn của 'haben' và 'sein'",
        rule:
          "sein: ich war, du warst, er/sie war, wir waren, ihr wart, sie/Sie waren. haben: ich hatte, du hattest, er/sie hatte, wir hatten, ihr hattet, sie/Sie hatten.",
        ruleVi:
          "Trong văn viết (và đặc biệt trong Lebenslauf), thường dùng Präteritum (quá khứ đơn) thay vì Perfekt. Hai động từ quan trọng nhất: 'sein' (Präteritum): ich war (tôi đã là/ở), du warst, er/sie/es war, wir waren, ihr wart, sie/Sie waren. 'haben' (Präteritum): ich hatte (tôi đã có), du hattest, er/sie/es hatte, wir hatten, ihr hattet, sie/Sie hatten. Trong Lebenslauf: 'Ich war Praktikant bei BMW.' (Tôi đã là thực tập sinh ở BMW). 'Ich hatte gute Noten.' (Tôi đã có điểm tốt). Lưu ý: Trong văn nói, người Đức thường dùng Perfekt. Nhưng 'war' và 'hatte' luôn dùng Präteritum, kể cả khi nói!",
        examples: [
          { de: "Ich war drei Jahre lang Studentin in Hanoi.", vi: "Tôi đã là sinh viên ở Hà Nội ba năm." },
          { de: "Er hatte viel Berufserfahrung.", vi: "Anh ấy đã có nhiều kinh nghiệm làm việc." },
          { de: "Wir waren bei einer großen Firma.", vi: "Chúng tôi đã ở một công ty lớn." },
          { de: "Sie hatte gute Deutschkenntnisse.", vi: "Cô ấy đã có trình độ tiếng Đức tốt." },
          { de: "Warst du schon mal bei einem Vorstellungsgespräch?", vi: "Bạn đã từng đi phỏng vấn chưa?" },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Über die Bewerbung sprechen",
        titleVi: "Nói về đơn xin việc",
        lines: [
          {
            speaker: "Minh",
            de: "Ich möchte mich bei einer IT-Firma bewerben. Kannst du meinen Lebenslauf prüfen?",
            vi: "Tôi muốn nộp đơn ở công ty IT. Bạn kiểm tra sơ yếu lý lịch giúp tôi được không?",
          },
          {
            speaker: "Lisa",
            de: "Klar! Hm, du solltest dein Foto oben rechts einfügen. Das ist in Deutschland üblich.",
            vi: "Được! Hm, bạn nên chèn ảnh ở góc phải phía trên. Đó là thông lệ ở Đức.",
          },
          {
            speaker: "Minh",
            de: "OK. Ich war zwei Jahre lang Praktikant in Vietnam. Soll ich das reinschreiben?",
            vi: "OK. Tôi đã thực tập hai năm ở Việt Nam. Tôi có nên ghi vào không?",
          },
          {
            speaker: "Lisa",
            de: "Ja, unbedingt! Berufserfahrung ist sehr wichtig. Schreib auch deine Sprachkenntnisse rein.",
            vi: "Có, chắc chắn! Kinh nghiệm làm việc rất quan trọng. Ghi cả trình độ ngoại ngữ vào nữa.",
          },
          {
            speaker: "Minh",
            de: "Ich hatte B1-Niveau in Deutsch und gute Englischkenntnisse.",
            vi: "Tôi đã có trình độ B1 tiếng Đức và giỏi tiếng Anh.",
          },
          {
            speaker: "Lisa",
            de: "Super! Vergiss nicht das Anschreiben. Da musst du erklären, warum du dich für die Stelle interessierst.",
            vi: "Tuyệt! Đừng quên thư xin việc. Ở đó bạn phải giải thích tại sao bạn quan tâm đến vị trí này.",
          },
        ],
      },
      {
        type: "practice",
        titleDe: "Übung: Einen kurzen Lebenslauf schreiben",
        titleVi: "Bài tập: Viết sơ yếu lý lịch ngắn",
        instruction:
          "Schreibe einen kurzen tabellarischen Lebenslauf. Kategorien: Persönliche Daten, Schulbildung, Berufserfahrung, Sprachkenntnisse, Besondere Kenntnisse.",
        instructionVi:
          "Hãy viết một sơ yếu lý lịch ngắn dạng bảng. Các mục: Persönliche Daten (thông tin cá nhân: tên, ngày sinh, địa chỉ), Schulbildung (học vấn), Berufserfahrung (kinh nghiệm: dùng Präteritum), Sprachkenntnisse (ngoại ngữ: Vietnamesisch — Muttersprache, Deutsch — B1, Englisch — gut), Besondere Kenntnisse (kỹ năng đặc biệt: máy tính, bằng lái...).",
      },
    ],
  },

  // --- Chapter 3, Lesson 4 ---
  {
    id: "a2-ch3-l4",
    chapterId: 3,
    lessonNumber: 4,
    title: "Am Arbeitsplatz",
    titleVi: "Tại nơi làm việc",
    type: "Integration",
    objectives: [
      "Giao tiếp cơ bản tại nơi làm việc bằng tiếng Đức",
      "Hiểu và sử dụng từ vựng văn phòng / nơi làm việc",
      "Yêu cầu và đề nghị lịch sự với Konjunktiv II",
      "Hiểu quy tắc ứng xử tại nơi làm việc ở Đức",
    ],
    content: [
      {
        type: "vocabulary",
        titleDe: "Am Arbeitsplatz",
        titleVi: "Tại nơi làm việc",
        words: [
          { de: "der Arbeitsplatz", vi: "nơi làm việc", article: "der" },
          { de: "das Büro", vi: "văn phòng", article: "das" },
          { de: "der Kollege / die Kollegin", vi: "đồng nghiệp (nam / nữ)" },
          { de: "der Chef / die Chefin", vi: "sếp (nam / nữ)" },
          { de: "die Besprechung", vi: "cuộc họp", article: "die" },
          { de: "der Termin", vi: "cuộc hẹn", article: "der" },
          { de: "die Überstunden (Pl.)", vi: "giờ làm thêm" },
          { de: "die Pause", vi: "giờ nghỉ", article: "die" },
          { de: "der Feierabend", vi: "hết giờ làm việc", article: "der" },
          { de: "das Gehalt", vi: "lương", article: "das" },
          { de: "der Vertrag", vi: "hợp đồng", article: "der" },
          { de: "die Arbeitszeit", vi: "giờ làm việc", article: "die" },
          { de: "kündigen", vi: "nghỉ việc / sa thải" },
          { de: "der Urlaub nehmen", vi: "nghỉ phép" },
        ],
      },
      {
        type: "grammar",
        titleDe: "Konjunktiv II: höfliche Bitten",
        titleVi: "Konjunktiv II: yêu cầu lịch sự",
        rule:
          "Konjunktiv II von 'können': könnte, 'werden': würde. Für höfliche Bitten: Könnten Sie bitte...? Würden Sie bitte...?",
        ruleVi:
          "Konjunktiv II dùng để nói lịch sự, giả định. Quan trọng nhất cho A2: 'können' → könnte (có thể — lịch sự): ich könnte, du könntest, er/sie könnte, wir könnten, Sie könnten. 'werden' → würde (sẽ — lịch sự): ich würde, du würdest, er/sie würde, wir würden, Sie würden. Cấu trúc yêu cầu lịch sự: Könnten Sie bitte + Infinitiv? (Ông/bà có thể vui lòng...?) Würden Sie bitte + Infinitiv? (Ông/bà vui lòng...?) Ich hätte gern... (Tôi muốn... — lịch sự). Mẹo: Dùng 'Könnten Sie...?' thay vì 'Können Sie...?' để lịch sự hơn — rất quan trọng trong công việc!",
        examples: [
          { de: "Könnten Sie mir bitte helfen?", vi: "Ông/bà có thể vui lòng giúp tôi không?" },
          { de: "Würden Sie bitte die Tür schließen?", vi: "Ông/bà vui lòng đóng cửa được không?" },
          { de: "Ich hätte gern einen Termin.", vi: "Tôi muốn đặt một cuộc hẹn." },
          { de: "Könntest du mir die Datei schicken?", vi: "Bạn có thể gửi tôi file đó không?" },
          { de: "Ich würde gern mit dem Chef sprechen.", vi: "Tôi muốn nói chuyện với sếp." },
        ],
      },
      {
        type: "dialogue",
        titleDe: "Ein Tag im Büro",
        titleVi: "Một ngày ở văn phòng",
        lines: [
          {
            speaker: "Minh",
            de: "Guten Morgen! Könnten Sie mir sagen, wo die Besprechung stattfindet?",
            vi: "Chào buổi sáng! Ông/bà có thể cho tôi biết cuộc họp diễn ra ở đâu không?",
          },
          {
            speaker: "Kollegin",
            de: "Guten Morgen! Die Besprechung ist um 10 Uhr in Raum 302.",
            vi: "Chào buổi sáng! Cuộc họp lúc 10 giờ ở phòng 302.",
          },
          {
            speaker: "Minh",
            de: "Danke! Ich hätte noch eine Frage. Wann ist die Mittagspause?",
            vi: "Cảm ơn! Tôi còn một câu hỏi. Khi nào là giờ nghỉ trưa?",
          },
          {
            speaker: "Kollegin",
            de: "Die Mittagspause ist von 12 bis 13 Uhr. Die Kantine ist im Erdgeschoss.",
            vi: "Giờ nghỉ trưa từ 12 đến 13 giờ. Nhà ăn ở tầng trệt.",
          },
          {
            speaker: "Minh",
            de: "Würden Sie mir bitte zeigen, wie der Drucker funktioniert?",
            vi: "Bạn có thể chỉ tôi cách dùng máy in không?",
          },
          {
            speaker: "Kollegin",
            de: "Natürlich! Kommen Sie mit, ich zeige es Ihnen.",
            vi: "Tất nhiên! Đi theo tôi, tôi chỉ cho bạn.",
          },
          {
            speaker: "Minh",
            de: "Vielen Dank! Sie sind sehr nett.",
            vi: "Cảm ơn rất nhiều! Bạn rất tốt.",
          },
          {
            speaker: "Kollegin",
            de: "Gern geschehen! Wenn Sie Fragen haben, kommen Sie einfach zu mir.",
            vi: "Không có gì! Nếu bạn có câu hỏi, cứ đến chỗ tôi.",
          },
        ],
      },
      {
        type: "explanation",
        titleDe: "Kulturelle Hinweise: Arbeitskultur in Deutschland",
        titleVi: "Ghi chú văn hóa: Văn hóa làm việc ở Đức",
        textDe:
          "In Deutschland ist Pünktlichkeit am Arbeitsplatz sehr wichtig. Man sagt 'Sie' zu Vorgesetzten und neuen Kollegen. Die typische Arbeitszeit ist 8 Stunden pro Tag, 40 Stunden pro Woche.",
        textVi:
          "Văn hóa làm việc ở Đức có nhiều khác biệt với Việt Nam: 1) Pünktlichkeit (đúng giờ): ĐẾN ĐÚNG GIỜ là quy tắc số 1! 5 phút trễ đã bị coi là không chuyên nghiệp. 2) Xưng hô: Dùng 'Sie' với sếp và đồng nghiệp mới. Chỉ chuyển sang 'du' khi người kia đề nghị ('Wir können uns duzen'). 3) Feierabend (hết giờ): Người Đức tách biệt rõ ràng giữa công việc và cuộc sống riêng. Khi hết giờ, họ về nhà — không bị kỳ vọng phải ở lại như ở Việt Nam. 4) Mittagspause: Thường 30–60 phút. 5) Arbeitsvertrag (hợp đồng lao động): Rất quan trọng — đọc kỹ trước khi ký!",
      },
      {
        type: "practice",
        titleDe: "Übung: Höflich am Arbeitsplatz",
        titleVi: "Bài tập: Lịch sự tại nơi làm việc",
        instruction:
          "Formuliere höfliche Bitten für diese Situationen: 1) Du brauchst Hilfe. 2) Du möchtest Urlaub nehmen. 3) Du verstehst eine Aufgabe nicht. Benutze 'Könnten Sie...?' und 'Würden Sie...?'",
        instructionVi:
          "Hãy tạo các yêu cầu lịch sự cho các tình huống: 1) Bạn cần giúp đỡ. 2) Bạn muốn xin nghỉ phép. 3) Bạn không hiểu nhiệm vụ. Dùng 'Könnten Sie bitte...?' và 'Würden Sie bitte...?' Ví dụ: Könnten Sie mir bitte erklären, was ich machen soll? Ich würde gern nächste Woche Urlaub nehmen. Würden Sie mir bitte noch einmal die Aufgabe erklären?",
      },
    ],
  },
];
