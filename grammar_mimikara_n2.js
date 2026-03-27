const grammarN2 = [
  {
    "structure": "～ことだ",
    "meaning": "Nên/không nên làm gì (lời khuyên, nhắc nhở nhẹ nhàng)",
    "usage": "Dùng để đưa ra lời khuyên, chỉ dẫn nhẹ nhàng.",
    "examples": [
      { "jp": "健康のためには十分な睡眠をとることだ。", "vi": "Vì sức khỏe, nên ngủ đủ giấc." }
    ],
    "notes": "Thường dùng để khuyên bảo người khác."
  },
  {
    "structure": "～ことだから",
    "meaning": "Chính vì... (dựa vào đặc điểm/tính cách ai đó để suy đoán)",
    "usage": "Dùng khi phán đoán dựa trên tính cách, đặc điểm quen thuộc của người/vật.",
    "examples": [
      { "jp": "あの子のことだから、きっと合格すると思います。", "vi": "Chính vì là đứa trẻ đó nên tôi nghĩ chắc chắn sẽ đậu." }
    ],
    "notes": "Thường dùng ở đầu câu để nhấn mạnh lý do."
  },
  {
    "structure": "～ことに",
    "meaning": "Thật là... (cảm xúc mạnh của người nói về sự việc nào đó)",
    "usage": "Dùng để nhấn mạnh cảm xúc của người nói đối với một sự việc.",
    "examples": [
      { "jp": "残念なことに、試験に落ちてしまった。", "vi": "Thật đáng tiếc, tôi đã trượt kỳ thi." }
    ],
    "notes": "Thường đi với các từ chỉ cảm xúc như うれしい、悔しい、残念."
  },
  {
    "structure": "～ことなく",
    "meaning": "Không làm gì đó mà...",
    "usage": "Diễn tả việc không làm một hành động nào đó mà thực hiện hành động khác.",
    "examples": [
      { "jp": "彼は休むことなく働き続けた。", "vi": "Anh ấy tiếp tục làm việc mà không nghỉ." }
    ],
    "notes": "Thường dùng trong văn viết, nhấn mạnh sự liên tục."
  },
  {
    "structure": "～ものの",
    "meaning": "Dù là... nhưng...",
    "usage": "Diễn tả sự trái ngược giữa hai vế câu.",
    "examples": [
      { "jp": "試験には合格したものの、あまり嬉しくない。", "vi": "Dù đã đậu kỳ thi nhưng tôi không mấy vui." }
    ],
    "notes": "Thường dùng trong văn viết."
  },
  {
    "structure": "～ものだ",
    "meaning": [
      "Nên / Không nên (đạo lý, lẽ thường)",
      "Thật là... (cảm thán)",
      "Nhớ lại quá khứ",
      "Mong muốn mạnh mẽ (dùng với たい)"
    ],
    "usage": "Dùng để diễn tả lẽ thường, cảm xúc hoặc hồi tưởng, lời khuyên, nhắc nhở nhẹ nhàng, mong muốn mạnh mẽ (dùng với たい).",
    "examples": [
      { "jp": "人間は誰でも間違えるものだ。", "vi": "Con người thì ai cũng có lúc mắc sai lầm." },
      { "jp": "子どものころ、公園で兄と遊んだものだ。", "vi": "Hồi nhỏ, tôi thường chơi với anh trai ở công viên." },
      { "jp": "子どもは愛情で育てるものだ。", "vi": "Trẻ con thì nên được nuôi dạy bằng tình yêu thương." },
      { "jp": "一度でいいから、桜を見てみたいものだ。", "vi": "Chỉ một lần thôi cũng được, tôi thật sự muốn được ngắm hoa anh đào." },
      { "jp": "学生のころは、よく深夜まで勉強したものだ。", "vi": "Khi còn là sinh viên, tôi thường học đến khuya." }
    ],
    "notes": "Thường dùng trong văn nói. Có thể mang sắc thái đạo lý, cảm thán, hồi tưởng hoặc thể hiện mong muốn mạnh mẽ (khi đi với ～たいものだ)."
  },
  {
    "structure": "～ないものか／～ないものだろうか",
    "meaning": "Mong muốn, nguyện vọng điều khó xảy ra.",
    "usage": "Dùng để thể hiện mong muốn hoặc nguyện vọng khó thực hiện.",
    "examples": [
      { "jp": "何とかして母の病気が治らないものか。", "vi": "Không biết có cách nào chữa khỏi bệnh của mẹ không." }
    ],
    "notes": "Thường dùng trong văn viết, sắc thái mạnh."
  },
  {
    "structure": "～ばかりか",
    "meaning": "Không chỉ... mà còn...",
    "usage": "Dùng khi muốn nói ngoài A còn có B (B thường hơn A).",
    "examples": [
      { "jp": "彼は英語ばかりか中国語も話せる。", "vi": "Anh ấy không chỉ nói tiếng Anh mà còn nói tiếng Trung." }
    ],
    "notes": "Câu văn trang trọng, thường dùng trong văn viết."
  },
  {
    "structure": "～ばかりだ",
    "meaning": "Càng ngày càng... (biến đổi xấu)",
    "usage": "Diễn tả trạng thái nào đó ngày càng xấu đi.",
    "examples": [
      { "jp": "仕事が忙しくなるばかりで、休む暇もない。", "vi": "Công việc ngày càng bận rộn, chẳng có thời gian nghỉ." }
    ],
    "notes": "Thường dùng với câu tiêu cực."
  },
  {
    "structure": "～上に",
    "meaning": "Không chỉ... mà còn...",
    "usage": "Dùng để bổ sung thêm một đặc điểm tốt/xấu của chủ thể.",
    "examples": [
      { "jp": "この店は味が良い上に値段も安い。", "vi": "Quán này không chỉ ngon mà giá cũng rẻ." }
    ],
    "notes": "Thường dùng trong văn viết."
  },
  {
    "structure": "～以上（は）／～上（は）",
    "meaning": "Một khi đã... thì phải...",
    "usage": "Diễn tả trách nhiệm hoặc nghĩa vụ khi đã quyết định làm gì đó.",
    "examples": [
      { "jp": "約束した以上は、守るべきだ。", "vi": "Một khi đã hứa thì phải giữ lời." }
    ],
    "notes": "Thường dùng để nhấn mạnh nghĩa vụ."
  },
  {
    "structure": "～上で",
    "meaning": [
      "Sau khi làm A thì làm B (A là điều kiện)",
      "Trong quá trình/khía cạnh nào đó"
    ],
    "usage": "Dùng để nêu ra điều kiện hoặc hoàn cảnh về mặt thời gian, quá trình.",
    "examples": [
      { "jp": "家族と相談した上で、進路を決めたいと思います。", "vi": "Sau khi bàn với gia đình, tôi muốn quyết định con đường đi." },
      { "jp": "外国人が日本で生活する上で、習慣を知っておくことは大切だ。", "vi": "Khi sống ở Nhật, việc biết các tập quán là rất quan trọng." }
    ],
    "notes": "Có hai nghĩa chính, dùng tùy ngữ cảnh."
  },
  {
    "structure": "～まで",
    "meaning": "Đến mức... (làm đến mức cực đoan)",
    "usage": "Dùng khi nhấn mạnh mức độ, giới hạn của hành động.",
    "examples": [
      { "jp": "そのことは涙を流してまで訴えたいことだった。", "vi": "Đó là chuyện tôi muốn nói đến mức phải rơi nước mắt." }
    ],
    "notes": "Nhấn mạnh ý chí, mức độ."
  },
  {
    "structure": "～でも",
    "meaning": "Cho dù... cũng...",
    "usage": "Diễn tả quyết tâm làm điều gì đó dù phải hy sinh, làm bằng mọi giá.",
    "examples": [
      { "jp": "たとえ借金してでも、事業を成功させたい。", "vi": "Dù có phải vay tiền, tôi cũng muốn thành công." }
    ],
    "notes": "Thường đi cùng động từ chỉ hành động tiêu cực."
  },
  {
    "structure": "～ながら（も）",
    "meaning": "Mặc dù... nhưng...",
    "usage": "Diễn tả sự đối lập giữa hai vế câu.",
    "examples": [
      { "jp": "残念ながら、合格できませんでした。", "vi": "Thật đáng tiếc, tôi đã trượt." }
    ],
    "notes": "Thường dùng để diễn tả sự tiếc nuối."
  },
  {
    "structure": "～さえ～ば／～さえ～たら",
    "meaning": "Chỉ cần... thì...",
    "usage": "Dùng để nhấn mạnh chỉ cần một điều kiện là đủ.",
    "examples": [
      { "jp": "お金さえあれば、この車が買えるのに。", "vi": "Chỉ cần có tiền là tôi có thể mua chiếc xe này rồi." }
    ],
    "notes": "Thường dùng trong văn nói."
  },
  {
    "structure": "～を～として",
    "meaning": "Lấy... làm...",
    "usage": "Nêu ra mục đích, vai trò, tiêu chuẩn của một sự vật/sự việc.",
    "examples": [
      { "jp": "経験を生かして、教師として働きたい。", "vi": "Tôi muốn làm giáo viên, tận dụng kinh nghiệm của mình." }
    ],
    "notes": "Thường dùng trong văn viết."
  },
  {
    "structure": "～に応じて",
    "meaning": "Tùy theo, phù hợp với...",
    "usage": "Dùng khi kết quả thay đổi tương ứng với điều kiện nào đó.",
    "examples": [
      { "jp": "成績に応じて、クラスを分ける。", "vi": "Chia lớp theo thành tích." }
    ],
    "notes": "Thường dùng trong văn viết."
  },
  {
    "structure": "～に沿って",
    "meaning": "Dựa theo, phù hợp với...",
    "usage": "Dùng khi làm hành động dựa trên tiêu chuẩn, phương châm, quy tắc.",
    "examples": [
      { "jp": "ルールに沿って、試合を行う。", "vi": "Tiến hành trận đấu theo quy tắc." }
    ],
    "notes": "Thường dùng trong văn viết."
  },
  {
    "structure": "～をめぐって",
    "meaning": "Xoay quanh vấn đề gì đó...",
    "usage": "Dùng khi có nhiều ý kiến, tranh luận xoay quanh một chủ đề.",
    "examples": [
      { "jp": "政治家の発言をめぐって、議論が起こっている。", "vi": "Có cuộc tranh luận xoay quanh phát ngôn của chính trị gia." }
    ],
    "notes": "Chủ yếu dùng trong văn viết, báo chí."
  },
    {
    "structure": "～といった",
    "meaning": "Như là..., ví dụ như...",
    "usage": "Đưa ra ví dụ bổ sung, làm rõ ý kiến.",
    "examples": [
      { "jp": "この学校には中国や韓国といったアジアの国々からの留学生が多い。", "vi": "Trường này có nhiều du học sinh đến từ các nước châu Á như Trung Quốc, Hàn Quốc." }
    ],
    "notes": "Thường dùng để liệt kê ví dụ điển hình."
  },
  {
    "structure": "～てしょうがない／てしかたがない",
    "meaning": "Rất... (không chịu nổi, không có cách nào khác)",
    "usage": "Diễn tả cảm xúc rất mạnh, không kiềm chế được.",
    "examples": [
      { "jp": "朝早く起きたので眠くてしょうがない。", "vi": "Vì dậy sớm nên buồn ngủ không chịu nổi." }
    ],
    "notes": "Thường dùng với cảm xúc, trạng thái cơ thể."
  },
  {
    "structure": "～抜き／抜きにして",
    "meaning": "Bỏ qua..., không tính...",
    "usage": "Diễn tả việc loại bỏ một yếu tố nào đó ra khỏi hành động.",
    "examples": [
      { "jp": "冗談抜きで、真面目に話したい。", "vi": "Không đùa nữa, tôi muốn nói chuyện nghiêm túc." }
    ],
    "notes": "Hay dùng khi chuyển sang chủ đề nghiêm túc."
  },
  {
    "structure": "～に相違ない",
    "meaning": "Chắc chắn, không nghi ngờ gì...",
    "usage": "Dùng khi người nói tin chắc vào nhận định của mình dựa trên lý do khách quan.",
    "examples": [
      { "jp": "この絵は彼の作品に相違ない。", "vi": "Bức tranh này chắc chắn là của anh ấy." }
    ],
    "notes": "Văn viết, sắc thái khẳng định mạnh."
  },
  {
    "structure": "～得る／～得ない",
    "meaning": "Có thể / Không thể (khả năng xảy ra)",
    "usage": "Diễn tả khả năng xảy ra của một việc (khách quan, ngoài ý chí).",
    "examples": [
      { "jp": "この病気は治り得る。", "vi": "Bệnh này có thể chữa khỏi." },
      { "jp": "そんなことはあり得ない。", "vi": "Chuyện đó không thể xảy ra." }
    ],
    "notes": "Thường dùng trong văn viết, báo chí."
  },
  {
    "structure": "～やむを得ない",
    "meaning": "Không còn cách nào khác, đành phải...",
    "usage": "Diễn tả hành động không mong muốn nhưng buộc phải làm.",
    "examples": [
      { "jp": "事故で電車が止まったので、やむを得ずタクシーで帰った。", "vi": "Do tàu dừng vì tai nạn nên tôi đành phải về bằng taxi." }
    ],
    "notes": "Thường dùng trong văn viết, mang tính chính thức."
  },
  {
    "structure": "～がたい",
    "meaning": "Khó..., không thể...",
    "usage": "Diễn tả việc khó làm hoặc khó xảy ra về mặt cảm xúc, tinh thần.",
    "examples": [
      { "jp": "信じがたい話だが、本当らしい。", "vi": "Đó là chuyện khó tin nhưng có vẻ là thật." }
    ],
    "notes": "Thường đi với động từ thể hiện cảm xúc."
  },
  {
    "structure": "～一方（で）",
    "meaning": "Một mặt thì..., mặt khác thì...",
    "usage": "Diễn tả hai mặt đối lập hoặc song song của một vấn đề.",
    "examples": [
      { "jp": "会議では自分の意見を主張する一方、他の人の話にも耳を傾けるべきだ。", "vi": "Trong cuộc họp, một mặt phải trình bày ý kiến của mình, mặt khác cũng nên lắng nghe người khác." }
    ],
    "notes": "Thường dùng để so sánh, đối chiếu."
  },
  {
    "structure": "～につき",
    "meaning": "Vì... (chỉ lý do, dùng trong thông báo)",
    "usage": "Dùng để nêu lý do trong thông báo trang trọng.",
    "examples": [
      { "jp": "本日は祭日につき、休業します。", "vi": "Hôm nay nghỉ lễ nên chúng tôi đóng cửa." }
    ],
    "notes": "Chủ yếu dùng trong văn bản, thông báo."
  },
  {
    "structure": "～やら～やら",
    "meaning": "Nào là..., nào là... (liệt kê nhiều thứ)",
    "usage": "Dùng để liệt kê nhiều sự vật sự việc cùng lúc.",
    "examples": [
      { "jp": "テーブルの上には、ケーキやら果物やらがたくさん並んでいる。", "vi": "Trên bàn bày đầy nào là bánh, nào là hoa quả." }
    ],
    "notes": "Thường dùng trong văn nói, liệt kê ngẫu nhiên."
  },
  {
    "structure": "～のやら／ものやら",
    "meaning": "Không biết là... (nghi vấn, cảm xúc)",
    "usage": "Diễn tả sự không rõ ràng, nghi vấn, cảm xúc mơ hồ.",
    "examples": [
      { "jp": "息子はどこで何をしているのやら、全く連絡がない。", "vi": "Không biết con trai tôi đang làm gì ở đâu nữa, hoàn toàn không có liên lạc gì cả." }
    ],
    "notes": "Chủ yếu dùng trong văn nói."
  },
  {
    "structure": "～だの～だの",
    "meaning": "Nào là..., nào là... (liệt kê những ví dụ tiêu biểu, thường mang ý bất mãn)",
    "usage": "Liệt kê nhiều ví dụ tiêu biểu, thường dùng để than phiền, bất mãn.",
    "examples": [
      { "jp": "母は、勉強しろだの、早く寝ろだの、うるさい。", "vi": "Mẹ tôi nào là bảo học đi, nào là bảo đi ngủ sớm, thật phiền phức." }
    ],
    "notes": "Thường dùng trong văn nói, sắc thái than phiền."
  },
  {
    "structure": "～にこたえて",
    "meaning": "Đáp lại, theo đúng...",
    "usage": "Diễn tả việc thực hiện, đáp ứng lại nguyện vọng, yêu cầu của ai đó.",
    "examples": [
      { "jp": "皆様のご期待にこたえて、全力で頑張ります。", "vi": "Đáp lại kỳ vọng của mọi người, tôi sẽ cố gắng hết sức." }
    ],
    "notes": "Thường dùng trong phát biểu, thư cảm ơn."
  },
  {
    "structure": "～にしては",
    "meaning": "Dù là..., vậy mà...",
    "usage": "Diễn tả sự khác biệt giữa thực tế với dự đoán dựa trên thông tin cho trước.",
    "examples": [
      { "jp": "初めてにしては、上手ですね。", "vi": "Dù là lần đầu mà làm tốt nhỉ." }
    ],
    "notes": "Thường dùng trong văn nói."
  },
  {
    "structure": "～のもとで／～のもとに",
    "meaning": "Dưới sự..., trong điều kiện...",
    "usage": "Diễn tả việc chịu ảnh hưởng, dưới sự kiểm soát của ai đó hoặc điều kiện nào đó.",
    "examples": [
      { "jp": "子どもたちは親のもとで幸せに暮らしている。", "vi": "Trẻ em sống hạnh phúc dưới sự chăm sóc của cha mẹ." }
    ],
    "notes": "Thường dùng để nói về môi trường, điều kiện sống."
  },
  {
    "structure": "～はともかく／ならともかく",
    "meaning": "Khoan bàn đến..., chưa nói đến...",
    "usage": "Dùng để tạm thời bỏ qua vấn đề A, tập trung vào B.",
    "examples": [
      { "jp": "見た目はともかく、味は美味しい。", "vi": "Khoan nói đến vẻ ngoài, món này ăn rất ngon." }
    ],
    "notes": "Thường dùng trong văn nói."
  },
  {
    "structure": "～も～ば～も／も～なら～も",
    "meaning": "Cũng..., mà cũng...",
    "usage": "Liệt kê nhiều trạng thái, đối tượng khác nhau.",
    "examples": [
      { "jp": "人もいれば、嫌いな人もいる。", "vi": "Có người thích, cũng có người không thích." }
    ],
    "notes": "Thường dùng để diễn tả tính đa dạng."
  },
  {
    "structure": "～っぱなし",
    "meaning": "Để nguyên, suốt, cứ mãi...",
    "usage": "Diễn tả trạng thái giữ nguyên, không thay đổi, không xử lý.",
    "examples": [
      { "jp": "電気をつけっぱなしで寝てしまった。", "vi": "Tôi đã ngủ mà để đèn bật suốt." }
    ],
    "notes": "Thường dùng trong phàn nàn, khuyên bảo."
  },
  {
    "structure": "～っこない",
    "meaning": "Nhất định không..., tuyệt đối không thể...",
    "usage": "Dùng để phủ định mạnh mẽ khả năng xảy ra của việc gì đó.",
    "examples": [
      { "jp": "そんなこと、できっこないよ。", "vi": "Chuyện đó nhất định không thể làm được đâu." }
    ],
    "notes": "Thường dùng trong văn nói, sắc thái mạnh."
  },
  {
    "structure": "～きり",
    "meaning": "Sau khi..., cứ mãi không...",
    "usage": "Diễn tả trạng thái sau khi làm A thì không thay đổi, cứ mãi như vậy.",
    "examples": [
      { "jp": "彼は朝出かけたきり、まだ帰ってこない。", "vi": "Anh ấy đi từ sáng mà vẫn chưa về." }
    ],
    "notes": "Thường dùng trong văn nói, mang sắc thái lo lắng."
  },
  {
    "structure": "～げ",
    "meaning": "Có vẻ, trông có vẻ...",
    "usage": "Biểu thị dáng vẻ, cảm xúc của ai đó.",
    "examples": [
      { "jp": "彼女は寂しげな顔をしている。", "vi": "Cô ấy có vẻ mặt buồn." }
    ],
    "notes": "Thường dùng với các từ chỉ cảm xúc."
  },
    {
    "structure": "～なんて／とは",
    "meaning": "Nhấn mạnh cảm xúc bất ngờ, ngoài suy nghĩ, bất ngờ về một sự việc.",
    "usage": "Dùng để bày tỏ cảm xúc ngạc nhiên, bất ngờ, không thể tin về sự việc nào đó.",
    "examples": [
      { "jp": "君が優勝するなんて信じられない。", "vi": "Không thể tin được là cậu lại vô địch." }
    ],
    "notes": "Thường dùng trong văn nói, sắc thái cảm thán."
  },
  {
    "structure": "～にすぎない",
    "meaning": "Chỉ là..., không hơn...",
    "usage": "Nhấn mạnh mức độ nhỏ, không đáng kể.",
    "examples": [
      { "jp": "これは言い訳にすぎない。", "vi": "Đây chỉ là lời ngụy biện mà thôi." }
    ],
    "notes": "Thường dùng trong văn viết."
  },
  {
    "structure": "～あげく",
    "meaning": "Sau khi..., cuối cùng...",
    "usage": "Diễn tả sau một quá trình, kết quả (thường xấu) cuối cùng xảy ra.",
    "examples": [
      { "jp": "いろいろ悩んだあげく、会社を辞めることにした。", "vi": "Sau nhiều trăn trở, cuối cùng tôi quyết định nghỉ việc." }
    ],
    "notes": "Thường dùng với kết quả không mong muốn."
  },
  {
    "structure": "～べき",
    "meaning": "Nên, phải (làm gì đó là lẽ đương nhiên, đúng đắn)",
    "usage": "Diễn tả nghĩa vụ, việc nên làm, đạo lý.",
    "examples": [
      { "jp": "約束は守るべきだ。", "vi": "Nên giữ lời hứa." }
    ],
    "notes": "Dùng để khuyên bảo, nhắc nhở."
  },
  {
    "structure": "～というより",
    "meaning": "Nói đúng hơn là..., hơn là...",
    "usage": "So sánh, chỉnh sửa cách diễn đạt cho chính xác hơn.",
    "examples": [
      { "jp": "彼は勉強家というより仕事の虫だ。", "vi": "Nói là người ham học cũng được, nhưng đúng hơn là người nghiện việc." }
    ],
    "notes": "Thường dùng để điều chỉnh ý diễn đạt."
  },
  {
    "structure": "～にかかわらず／かかわりなく",
    "meaning": "Bất kể, không liên quan đến...",
    "usage": "Không quan tâm, không chú ý đến điều kiện nào đó.",
    "examples": [
      { "jp": "天候にかかわらず、試合は行われる。", "vi": "Trận đấu vẫn diễn ra bất kể thời tiết thế nào." }
    ],
    "notes": "Thường dùng trong thông báo, quy định."
  },
  {
    "structure": "～にもかかわらず",
    "meaning": "Mặc dù..., nhưng...",
    "usage": "Diễn tả kết quả trái ngược với điều kiện, dự đoán.",
    "examples": [
      { "jp": "雨にもかかわらず、多くの人が集まった。", "vi": "Dù trời mưa nhưng nhiều người vẫn tụ tập." }
    ],
    "notes": "Dùng trong văn viết, báo chí."
  },
  {
    "structure": "～あまり",
    "meaning": "Quá..., đến mức...",
    "usage": "Diễn tả trạng thái quá mức dẫn đến kết quả không mong muốn.",
    "examples": [
      { "jp": "心配するあまり、眠れなくなった。", "vi": "Lo lắng quá nên tôi không ngủ được." }
    ],
    "notes": "Thường dùng để diễn tả cảm xúc mạnh."
  },
  {
    "structure": "～にあたって／にあたり",
    "meaning": "Nhân dịp, vào lúc...",
    "usage": "Dùng khi bắt đầu việc quan trọng, chuẩn bị cho sự kiện đặc biệt.",
    "examples": [
      { "jp": "開店にあたり、関係者を招いて式を行った。", "vi": "Nhân dịp khai trương, tôi đã mời những người liên quan đến dự lễ." }
    ],
    "notes": "Thường dùng trong văn viết, sự kiện quan trọng."
  },
  {
    "structure": "～に際して／に際し",
    "meaning": "Khi..., vào lúc...",
    "usage": "Diễn tả thời điểm bắt đầu việc đặc biệt.",
    "examples": [
      { "jp": "留学に際して、いろいろ準備をした。", "vi": "Khi đi du học, tôi đã chuẩn bị nhiều thứ." }
    ],
    "notes": "Dùng trong văn viết, sự kiện quan trọng."
  },
  {
    "structure": "～末（に）",
    "meaning": "Sau khi..., cuối cùng...",
    "usage": "Sau một quá trình dài, kết quả cuối cùng xảy ra.",
    "examples": [
      { "jp": "悩んだ末、転職することにした。", "vi": "Sau nhiều trăn trở, cuối cùng tôi quyết định chuyển việc." }
    ],
    "notes": "Thường dùng với kết quả quan trọng, mang tính quyết định."
  },
  {
    "structure": "～を契機に（して）／～を契機として",
    "meaning": "Nhân dịp..., từ sự kiện...",
    "usage": "Sự việc A là nguyên nhân, cơ hội để xảy ra việc B.",
    "examples": [
      { "jp": "事故を契機に、安全対策を強化した。", "vi": "Nhân dịp xảy ra tai nạn, chúng tôi đã tăng cường biện pháp an toàn." }
    ],
    "notes": "Thường dùng trong văn viết, báo chí."
  },
  {
    "structure": "～問わず",
    "meaning": "Không kể, bất kể...",
    "usage": "Không phân biệt, bất kể đối tượng nào.",
    "examples": [
      { "jp": "年齢を問わず参加できます。", "vi": "Bất kể tuổi tác, đều có thể tham gia." }
    ],
    "notes": "Dùng trong quảng cáo, thông báo."
  },
  {
    "structure": "～かのようだ",
    "meaning": "Cứ như là..., giống như là...",
    "usage": "So sánh, diễn tả cảm giác như là điều gì đó thật sự đang xảy ra.",
    "examples": [
      { "jp": "彼は泥棒であるかのように見られてしまった。", "vi": "Anh ấy bị nhìn như thể là kẻ trộm vậy." }
    ],
    "notes": "Dùng trong văn viết, miêu tả cảm giác."
  },
  {
    "structure": "～からいうと／いえば／いって",
    "meaning": "Xét từ..., nếu nói từ...",
    "usage": "Đưa ra quan điểm, phán đoán từ một khía cạnh, tiêu chí nào đó.",
    "examples": [
      { "jp": "結果からいうと、成功だったと思う。", "vi": "Xét về kết quả thì tôi nghĩ đó là thành công." }
    ],
    "notes": "Thường dùng để phân tích, đánh giá."
  },
  {
    "structure": "～もかまわず",
    "meaning": "Không màng tới..., không để ý đến...",
    "usage": "Diễn tả việc làm gì mà không quan tâm đến xung quanh.",
    "examples": [
      { "jp": "彼は人目もかまわず、電車の中で弁当を食べている。", "vi": "Anh ấy ăn cơm hộp trên tàu mà không quan tâm đến ánh mắt mọi người." }
    ],
    "notes": "Thường dùng để nhấn mạnh sự bạo dạn."
  },
  {
    "structure": "～抜く",
    "meaning": "Làm tới cùng, làm đến hoàn thành.",
    "usage": "Diễn tả sự kiên trì, làm gì đó đến cùng.",
    "examples": [
      { "jp": "困難を乗り越えて、最後までやり抜いた。", "vi": "Vượt qua khó khăn, tôi đã làm đến cùng." }
    ],
    "notes": "Thường đi kèm sắc thái ca ngợi nỗ lực."
  },
  {
    "structure": "～ばかりに",
    "meaning": "Chỉ vì..., dẫn đến kết quả xấu.",
    "usage": "Dùng để diễn tả nguyên nhân dẫn đến kết quả không mong muốn.",
    "examples": [
      { "jp": "うそをついたばかりに、友達を失ってしまった。", "vi": "Chỉ vì nói dối mà tôi đã mất bạn." }
    ],
    "notes": "Thường dùng với cảm xúc hối tiếc."
  },
  {
    "structure": "～ところを",
    "meaning": "Đúng lúc..., trong khi...",
    "usage": "Dùng khi cảm ơn, xin lỗi, nhờ vả vào lúc người khác đang làm gì.",
    "examples": [
      { "jp": "お忙しいところをすみません。", "vi": "Xin lỗi đã làm phiền đúng lúc anh/chị đang bận." }
    ],
    "notes": "Thường dùng trong văn nói, lịch sự."
  },
  {
    "structure": "～たところで",
    "meaning": "Dù..., cũng không...",
    "usage": "Diễn tả việc gì đó dù có xảy ra cũng không có kết quả mong muốn.",
    "examples": [
      { "jp": "今さら謝ったところで、許してもらえないだろう。", "vi": "Bây giờ có xin lỗi thì chắc cũng không được tha thứ." }
    ],
    "notes": "Thường dùng với sắc thái tiêu cực, bi quan."
  },
  
  {
    "structure": "～ことから",
    "meaning": "Vì..., dựa trên..., từ việc...",
    "usage": "Dùng để nêu lý do, phán đoán dựa trên sự việc đã xảy ra.",
    "examples": [
      { "jp": "声が小さいことから、彼は自信がなさそうだ。", "vi": "Vì giọng nói nhỏ nên trông anh ấy có vẻ không tự tin." }
    ],
    "notes": "Thường dùng trong văn viết, báo chí."
  },
  {
    "structure": "～ことにする",
    "meaning": "Xem như..., quyết định là..., coi như...",
    "usage": "Dùng khi quyết định làm gì hoặc giả vờ như đã làm gì.",
    "examples": [
      { "jp": "今日は仕事を休むことにした。", "vi": "Hôm nay tôi quyết định nghỉ làm." }
    ],
    "notes": "Thường dùng trong văn nói."
  },
  {
    "structure": "～ことか／だろう",
    "meaning": "Biết bao..., thật là..., (cảm thán mạnh)",
    "usage": "Dùng để nhấn mạnh cảm xúc, mức độ, thường đi với từ nghi vấn.",
    "examples": [
      { "jp": "どんなに嬉しかったことか。", "vi": "Thật là vui biết bao." }
    ],
    "notes": "Thường dùng trong văn viết, cảm thán."
  },
  {
    "structure": "～ないことには",
    "meaning": "Nếu không..., thì không...",
    "usage": "Dùng để diễn tả điều kiện cần thiết để sự việc xảy ra.",
    "examples": [
      { "jp": "お金がないことには、この計画は進められない。", "vi": "Nếu không có tiền thì kế hoạch này không thể tiến hành." }
    ],
    "notes": "Thường dùng để nhấn mạnh điều kiện."
  },
  {
    "structure": "～というものだ",
    "meaning": "Đúng là..., hoàn toàn là...",
    "usage": "Dùng để nêu ý kiến, đánh giá, kết luận chủ quan của người nói.",
    "examples": [
      { "jp": "初対面であんなに話すのは失礼というものだ。", "vi": "Mới gặp lần đầu mà nói nhiều như vậy thì thật là bất lịch sự." }
    ],
    "notes": "Thường dùng trong văn nói, văn viết."
  },
  {
    "structure": "～ものなら",
    "meaning": [
      "Nếu có thể... thì muốn...",
      "Nếu làm... thì (kết quả xấu)"
    ],
    "usage": "Dùng để diễn tả điều khó xảy ra hoặc giả định (vế sau thường là kết quả xấu).",
    "examples": [
      { "jp": "やれるものならやってみろ。", "vi": "Nếu làm được thì thử xem." },
      { "jp": "忘れようものなら、母に叱られる。", "vi": "Nếu quên là bị mẹ mắng ngay." }
    ],
    "notes": "Thường dùng với giả định khó xảy ra."
  },
  {
    "structure": "～どころか",
    "meaning": "Không những không..., mà còn..., trái lại...",
    "usage": "Diễn tả điều hoàn toàn trái ngược với dự đoán, mong đợi.",
    "examples": [
      { "jp": "忙しくて、旅行どころか買い物にも行けない。", "vi": "Bận đến mức không chỉ du lịch mà mua sắm cũng không đi được." }
    ],
    "notes": "Thường dùng để nhấn mạnh sự trái ngược."
  },
  {
    "structure": "～どころではない",
    "meaning": "Không phải lúc..., không thể...",
    "usage": "Dùng khi có lý do gì đó nên không thể làm việc A.",
    "examples": [
      { "jp": "風邪がひどくて、遊びに行くどころではない。", "vi": "Bị cảm nặng, không phải lúc đi chơi." }
    ],
    "notes": "Thường dùng với lý do, hoàn cảnh."
  },
  {
    "structure": "～だけに",
    "meaning": "Chính vì..., cho nên...",
    "usage": "Dùng để nhấn mạnh vì lý do đặc biệt nên kết quả là đương nhiên.",
    "examples": [
      { "jp": "彼は子供だけに、好奇心が強い。", "vi": "Chính vì là trẻ con nên rất hiếu kỳ." }
    ],
    "notes": "Thường dùng trong văn nói, văn viết."
  },
  {
    "structure": "～だけあって／だけのことはある",
    "meaning": "Quả đúng là..., không hổ danh...",
    "usage": "Dùng để khen ngợi, đánh giá phù hợp với năng lực, vị trí.",
    "examples": [
      { "jp": "彼は経験者だけあって、説明がうまい。", "vi": "Anh ấy đúng là người có kinh nghiệm, giải thích rất tốt." }
    ],
    "notes": "Thường dùng để đánh giá, khen ngợi."
  },
  {
    "structure": "～上",
    "meaning": "Về mặt..., trên phương diện...",
    "usage": "Dùng để nêu quan điểm, đánh giá ở một phương diện cụ thể.",
    "examples": [
      { "jp": "法律上は成人だが、まだ子供っぽい。", "vi": "Về mặt pháp luật thì là người lớn, nhưng vẫn còn trẻ con." }
    ],
    "notes": "Thường dùng để nói về quy định, lý thuyết."
  },
  {
    "structure": "～上で",
    "meaning": "Trong phạm vi..., trên khía cạnh...",
    "usage": "Nói về phạm vi, lĩnh vực, khía cạnh nào đó.",
    "examples": [
      { "jp": "仕事上での付き合いしかない。", "vi": "Chỉ là mối quan hệ trong công việc." }
    ],
    "notes": "Dùng để nhấn mạnh phạm vi, lĩnh vực."
  },
  {
    "structure": "～まい",
    "meaning": "Quyết không..., không làm...",
    "usage": "Diễn tả ý chí phủ định, quyết không làm việc gì đó.",
    "examples": [
      { "jp": "もう二度と嘘をつくまい。", "vi": "Tôi quyết không nói dối lần nào nữa." }
    ],
    "notes": "Thường dùng để thể hiện sự quyết tâm."
  },
  {
    "structure": "～ないではいられない",
    "meaning": "Không thể không..., không kìm được...",
    "usage": "Diễn tả cảm xúc, trạng thái không thể kìm nén được.",
    "examples": [
      { "jp": "彼の話を聞いて、笑わないではいられなかった。", "vi": "Nghe chuyện của anh ấy, tôi không thể không cười." }
    ],
    "notes": "Thường dùng với cảm xúc mạnh."
  },
  {
    "structure": "～に限る",
    "meaning": "Chỉ trong..., là nhất...",
    "usage": "Chỉ giới hạn trong phạm vi nào đó; hoặc nhận định chủ quan là tốt nhất.",
    "examples": [
      { "jp": "寒い日は鍋に限る。", "vi": "Ngày lạnh thì ăn lẩu là nhất." }
    ],
    "notes": "Thường dùng để đưa ra kết luận cá nhân."
  },
  {
    "structure": "～に限らず",
    "meaning": "Không chỉ..., mà còn...",
    "usage": "Diễn tả phạm vi không giới hạn, còn mở rộng hơn.",
    "examples": [
      { "jp": "この映画は子供に限らず大人も楽しめる。", "vi": "Bộ phim này không chỉ trẻ em mà cả người lớn cũng thích." }
    ],
    "notes": "Thường dùng trong văn viết."
  },
  {
    "structure": "～か～ないかのうちに",
    "meaning": "Vừa mới... thì đã...",
    "usage": "Diễn tả một việc xảy ra ngay khi việc khác vừa kết thúc, gần như đồng thời.",
    "examples": [
      { "jp": "授業が終わるか終わらないかのうちに、学生たちは教室を出ていった。", "vi": "Vừa hết giờ học, sinh viên đã ra khỏi lớp ngay." }
    ],
    "notes": "Thường dùng với động từ diễn ra nhanh."
  },
  {
    "structure": "～かと思ったら／かと思うと",
    "meaning": "Vừa mới... thì đã...",
    "usage": "Diễn tả hai hành động gần như diễn ra đồng thời, liên tiếp.",
    "examples": [
      { "jp": "空が暗くなったかと思うと、雨が降り始めた。", "vi": "Vừa thấy trời tối thì mưa bắt đầu rơi." }
    ],
    "notes": "Thường dùng để miêu tả sự thay đổi nhanh."
  },
  {
    "structure": "～に先立って／に先立ち",
    "meaning": "Trước khi..., chuẩn bị cho...",
    "usage": "Dùng khi làm việc gì đó trước một sự kiện quan trọng.",
    "examples": [
      { "jp": "会議に先立ち、資料に目を通しておいてください。", "vi": "Trước khi họp, hãy xem qua tài liệu trước nhé." }
    ],
    "notes": "Thường dùng trong văn viết, sự kiện trang trọng."
  },
  {
    "structure": "～ずにすむ",
    "meaning": "Không cần phải..., may mắn không phải...",
    "usage": "Diễn tả việc tránh được một điều lẽ ra phải làm.",
    "examples": [
      { "jp": "時間が間に合ったので、タクシーに乗らずにすんだ。", "vi": "Vì kịp giờ nên không cần đi taxi." }
    ],
    "notes": "Thường dùng để chỉ sự may mắn khi tránh được điều phiền phức."
  },
    {
    "structure": "～にしたら／すれば／しても",
    "meaning": "Nếu nói từ lập trường..., đứng trên quan điểm của..., dù ở vị trí của...",
    "usage": "Diễn tả suy nghĩ, cảm xúc từ lập trường của ai đó.",
    "examples": [
      { "jp": "大人にすれば小さなことでも、子供には大問題かもしれない。", "vi": "Đối với người lớn chỉ là chuyện nhỏ, nhưng với trẻ con có thể là chuyện lớn." }
    ],
    "notes": "Thường dùng để đặt mình vào vị trí người khác."
  },
  {
    "structure": "～かねる",
    "meaning": "Không thể..., khó mà..., không dám...",
    "usage": "Diễn tả không thể thực hiện được một việc (văn trang trọng, lịch sự).",
    "examples": [
      { "jp": "そのご要望にはお応えかねます。", "vi": "Tôi không thể đáp ứng yêu cầu đó." }
    ],
    "notes": "Thường dùng trong thư từ, giao tiếp lịch sự."
  },
  {
    "structure": "～かねない",
    "meaning": "Có thể sẽ..., có nguy cơ...",
    "usage": "Diễn tả khả năng xảy ra điều xấu, tiêu cực.",
    "examples": [
      { "jp": "このままだと、倒産しかねない。", "vi": "Cứ như thế này thì có thể sẽ phá sản." }
    ],
    "notes": "Thường dùng để cảnh báo về khả năng xấu."
  },
  {
    "structure": "～次第",
    "meaning": "Ngay sau khi..., tùy vào...",
    "usage": "Diễn tả việc sẽ làm ngay sau khi sự việc nào đó xảy ra.",
    "examples": [
      { "jp": "到着次第、連絡してください。", "vi": "Ngay khi tới nơi hãy liên lạc." }
    ],
    "notes": "Thường dùng trong thông báo, lịch sự."
  },
  {
    "structure": "～次第で／次第では",
    "meaning": "Tùy vào..., phụ thuộc vào...",
    "usage": "Diễn tả kết quả sẽ thay đổi tùy vào điều kiện, tình huống.",
    "examples": [
      { "jp": "努力次第で合格できる。", "vi": "Tùy vào nỗ lực mà sẽ đậu được." }
    ],
    "notes": "Thường dùng để nhấn mạnh ý chí, điều kiện."
  },
  {
    "structure": "～次第だ",
    "meaning": "Vì..., do..., lý do là...",
    "usage": "Dùng để giải thích lý do, hoàn cảnh dẫn đến sự việc.",
    "examples": [
      { "jp": "申し込みが多かったため、抽選を行う次第です。", "vi": "Vì có nhiều người đăng ký nên chúng tôi tổ chức quay số." }
    ],
    "notes": "Thường dùng trong văn viết, giải thích lý do."
  },
  {
    "structure": "～限り",
    "meaning": [
      "Nếu... thì...",
      "Trong phạm vi...",
      "Đến mức giới hạn..."
    ],
    "usage": "Diễn tả điều kiện, phạm vi hoặc mức giới hạn của sự việc.",
    "examples": [
      { "jp": "学生である限り、勉強しなければならない。", "vi": "Chừng nào còn là học sinh thì phải học." },
      { "jp": "見た限りでは、問題はなさそうだ。", "vi": "Theo như tôi thấy thì không có vấn đề gì." },
      { "jp": "命ある限り君を愛し続ける。", "vi": "Chừng nào còn sống, anh sẽ mãi yêu em." }
    ],
    "notes": "Thường dùng để nhấn mạnh điều kiện hoặc phạm vi."
  },
  {
    "structure": "～に限って",
    "meaning": [
      "Chỉ riêng..., chỉ đúng vào lúc..., riêng trường hợp...",
      "Riêng trường hợp... thì tuyệt đối không..."
    ],
    "usage": "Dùng để nhấn mạnh chỉ đúng vào lúc nào đó, trường hợp nào đó.",
    "examples": [
      { "jp": "忙しい日に限って、電話が多い。", "vi": "Chỉ riêng những ngày bận rộn là có nhiều cuộc gọi." },
      { "jp": "うちの子に限ってそんなことはしない。", "vi": "Riêng con tôi thì tuyệt đối không làm chuyện đó." }
    ],
    "notes": "Thường dùng để nhấn mạnh trường hợp đặc biệt."
  },
  {
    "structure": "～見えて",
    "meaning": "Trông có vẻ..., nhìn như..., hình như...",
    "usage": "Dùng để diễn tả cảm nhận, phán đoán dựa trên quan sát.",
    "examples": [
      { "jp": "彼は元気そうに見えて、実は病気だった。", "vi": "Anh ấy trông có vẻ khỏe mạnh, nhưng thực ra đang bệnh." }
    ],
    "notes": "Thường dùng trong văn nói, cảm nhận chủ quan."
  },
  {
    "structure": "～というと／いえば／いったら",
    "meaning": "Nói về..., nếu nói đến..., nhắc đến...",
    "usage": "Dùng để đưa ra chủ đề, liên tưởng đến đối tượng nào đó.",
    "examples": [
      { "jp": "日本料理というと、寿司が有名だ。", "vi": "Nhắc đến món Nhật thì sushi nổi tiếng." }
    ],
    "notes": "Thường dùng để nêu chủ đề hoặc liên tưởng."
  },
  {
    "structure": "～といっても",
    "meaning": "Dù nói là..., nhưng thực ra...",
    "usage": "Diễn tả điều thực tế khác với dự đoán, nghĩa hẹp hơn ý nói.",
    "examples": [
      { "jp": "料理ができるといっても、簡単なものだけです。", "vi": "Dù nói là biết nấu ăn nhưng chỉ nấu được món đơn giản." }
    ],
    "notes": "Thường dùng để điều chỉnh, làm rõ sự thật."
  },
  {
    "structure": "～にかけては",
    "meaning": "Riêng về..., xét về mặt...",
    "usage": "Dùng để đánh giá cao năng lực, lĩnh vực nào đó.",
    "examples": [
      { "jp": "彼は数学にかけては誰にも負けない。", "vi": "Riêng về toán thì anh ấy không thua ai." }
    ],
    "notes": "Thường dùng để khen ngợi, đánh giá năng lực."
  },
  {
    "structure": "～か",
    "meaning": "Phản ngôn, phản biện (dạng nghi vấn, phủ định mạnh).",
    "usage": "Dùng để phủ định, bác bỏ ý kiến người khác.",
    "examples": [
      { "jp": "そんな話、誰が信じるか。", "vi": "Chuyện đó ai mà tin được chứ." }
    ],
    "notes": "Thường dùng trong văn nói, sắc thái phản bác."
  },
  {
    "structure": "～にしろ／にせよ／にしても",
    "meaning": [
      "Dù..., cho dù...",
      "Dù là cái này hay cái kia"
    ],
    "usage": "Dùng để đưa ra điều kiện giả định hoặc liệt kê các trường hợp khác nhau.",
    "examples": [
      { "jp": "行くにせよ行かないにせよ、早く決めてください。", "vi": "Dù đi hay không đi thì hãy quyết định sớm nhé." }
    ],
    "notes": "Thường dùng trong văn viết, liệt kê."
  },
  {
    "structure": "～のみ",
    "meaning": "Chỉ..., duy nhất...",
    "usage": "Nhấn mạnh chỉ có một đối tượng, sự việc.",
    "examples": [
      { "jp": "明日は関係者のみ入場できます。", "vi": "Ngày mai chỉ những người liên quan mới được vào." }
    ],
    "notes": "Thường dùng trong văn viết, trang trọng."
  },
  {
    "structure": "～のみならず",
    "meaning": "Không chỉ..., mà còn...",
    "usage": "Diễn tả phạm vi không chỉ dừng lại ở một đối tượng.",
    "examples": [
      { "jp": "彼は英語のみならず、フランス語も話せる。", "vi": "Anh ấy không chỉ nói tiếng Anh mà còn nói được tiếng Pháp." }
    ],
    "notes": "Thường dùng trong văn viết, trang trọng."
  },
  {
    "structure": "～にほかならない",
    "meaning": "Chính là..., không gì khác ngoài...",
    "usage": "Nhấn mạnh nguyên nhân, bản chất của sự việc.",
    "examples": [
      { "jp": "合格したのは努力の結果にほかならない。", "vi": "Việc đậu chính là kết quả của sự nỗ lực." }
    ],
    "notes": "Thường dùng để khẳng định, nhấn mạnh."
  },
  {
    "structure": "～ざるを得ない",
    "meaning": "Đành phải..., buộc phải..., không còn cách nào khác...",
    "usage": "Diễn tả việc không thích nhưng vẫn phải làm.",
    "examples": [
      { "jp": "台風で出発を延期せざるを得なくなった。", "vi": "Do bão nên chúng tôi buộc phải hoãn khởi hành." }
    ],
    "notes": "Thường dùng trong văn viết, sắc thái bắt buộc."
  },
  {
    "structure": "～ては～ては",
    "meaning": "Cứ... rồi lại..., lặp đi lặp lại...",
    "usage": "Diễn tả trạng thái, hành động lặp đi lặp lại nhiều lần.",
    "examples": [
      { "jp": "雨が降ってはやみ、降ってはやみしている。", "vi": "Mưa cứ rơi rồi lại tạnh, lặp đi lặp lại." }
    ],
    "notes": "Thường dùng để miêu tả trạng thái lặp đi lặp lại."
  },
  {
    "structure": "～矢先に／矢先の",
    "meaning": "Ngay sau khi..., ngay lúc định làm gì thì...",
    "usage": "Diễn tả sự việc xảy ra ngay sau khi hoặc đúng lúc chuẩn bị làm gì.",
    "examples": [
      { "jp": "家を出た矢先に雨が降り出した。", "vi": "Vừa ra khỏi nhà thì trời bắt đầu mưa." }
    ],
    "notes": "Thường dùng với những việc bất ngờ vừa xảy ra."
  },
    {
    "structure": "～にとどまらず",
    "meaning": "Không chỉ..., mà còn vượt ra ngoài...",
    "usage": "Diễn tả phạm vi không chỉ dừng lại ở một đối tượng mà còn mở rộng hơn nữa.",
    "examples": [
      { "jp": "彼の活躍は日本にとどまらず、世界でも有名だ。", "vi": "Thành tích của anh ấy không chỉ nổi tiếng ở Nhật mà còn trên thế giới." }
    ],
    "notes": "Thường dùng trong văn viết, nhấn mạnh phạm vi rộng."
  },
  {
    "structure": "～は～が／けど／ことは～が／けど",
    "meaning": "Thực tế thì... nhưng mà..., đúng là... nhưng...",
    "usage": "Diễn tả sự thừa nhận một thực tế nào đó nhưng có ý phủ nhận hoặc hạn chế.",
    "examples": [
      { "jp": "この料理は美味しいは美味しいが、値段が高い。", "vi": "Món này ngon thì ngon nhưng giá cao." }
    ],
    "notes": "Thường dùng để diễn đạt ý vừa khen vừa chê."
  },
  {
    "structure": "～からして",
    "meaning": "Ngay từ..., chỉ nhìn vào..., xét từ...",
    "usage": "Dùng để đưa ra ví dụ điển hình rồi phán đoán, nhận xét chung.",
    "examples": [
      { "jp": "彼は服装からして学生らしくない。", "vi": "Chỉ nhìn vào quần áo thôi đã thấy anh ấy không giống sinh viên." }
    ],
    "notes": "Thường dùng để nhấn mạnh phán đoán, nhận xét."
  },
  {
    "structure": "～というか～というか",
    "meaning": "Nói là... hay là..., vừa như... vừa như...",
    "usage": "Diễn tả việc không thể xác định rõ, liệt kê 2 đặc điểm hoặc trạng thái.",
    "examples": [
      { "jp": "彼は明るいというか、うるさいというか、とにかく元気だ。", "vi": "Cậu ấy vừa vui vẻ lại vừa ồn ào, nói chung là rất năng động." }
    ],
    "notes": "Thường dùng trong văn nói, khi không xác định rõ."
  },
  {
    "structure": "～に越したことはない",
    "meaning": "Thường thì... là tốt nhất..., có... vẫn hơn...",
    "usage": "Dùng để nói việc gì đó là tốt nhất, an toàn nhất.",
    "examples": [
      { "jp": "健康のためには運動するに越したことはない。", "vi": "Vì sức khỏe thì vẫn nên vận động là tốt nhất." }
    ],
    "notes": "Thường dùng để khuyên bảo, nhấn mạnh."
  },
  {
    "structure": "～ようにも～ない",
    "meaning": "Dù muốn... cũng không thể...",
    "usage": "Diễn tả việc muốn làm nhưng không thể thực hiện được vì lý do khách quan.",
    "examples": [
      { "jp": "連絡しようにも電話番号がわからない。", "vi": "Muốn liên lạc cũng không biết số điện thoại." }
    ],
    "notes": "Thường dùng khi gặp khó khăn ngoài ý muốn."
  },
  {
    "structure": "～を踏まえて",
    "meaning": "Dựa trên..., căn cứ vào...",
    "usage": "Dùng khi đưa ra quyết định, ý kiến dựa trên dữ liệu, kết quả nào đó.",
    "examples": [
      { "jp": "アンケートの結果を踏まえて、商品を改良した。", "vi": "Cải tiến sản phẩm dựa trên kết quả khảo sát." }
    ],
    "notes": "Thường dùng trong văn viết, báo cáo."
  },
  {
    "structure": "～は～にかかっている",
    "meaning": "... có hay không thì phụ thuộc vào...",
    "usage": "Diễn tả kết quả, sự việc tùy thuộc vào điều kiện phía sau.",
    "examples": [
      { "jp": "成功するかどうかは努力にかかっている。", "vi": "Thành công hay không phụ thuộc vào nỗ lực." }
    ],
    "notes": "Thường dùng để nhấn mạnh điều kiện quyết định."
  },
  {
    "structure": "～ようとする／している",
    "meaning": "Sắp..., định..., chuẩn bị...",
    "usage": "Diễn tả hành động, trạng thái sắp diễn ra hoặc chuẩn bị làm gì đó.",
    "examples": [
      { "jp": "電車が発車しようとしている。", "vi": "Tàu điện chuẩn bị xuất phát." }
    ],
    "notes": "Thường dùng để miêu tả trạng thái chuyển động."
  },
  {
    "structure": "～ようではないか",
    "meaning": "Hãy cùng..., cùng làm...",
    "usage": "Dùng để kêu gọi, rủ rê mọi người cùng làm gì đó.",
    "examples": [
      { "jp": "みんなで協力しようではないか。", "vi": "Mọi người hãy cùng hợp tác nào." }
    ],
    "notes": "Thường dùng trong phát biểu, kêu gọi."
  }
]