// Oxford 3000 Auto-Generator
// Paste the Oxford 3000 text into the textarea and click Generate

const GENERATOR_HTML = `
<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<title>Oxford 3000 Generator</title>
<style>
  body { font-family: Arial; padding: 20px; background: #1a1a2e; color: #eee; }
  h1 { color: #6366f1; }
  textarea { width: 100%; height: 200px; background: #16213e; color: #eee; border: 1px solid #6366f1; padding: 10px; font-size: 12px; }
  button { margin: 10px 0; padding: 12px 24px; background: #6366f1; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; }
  button:hover { background: #4f46e5; }
  #output { width: 100%; height: 300px; background: #16213e; color: #0f0; border: 1px solid #333; padding: 10px; font-size: 11px; font-family: monospace; }
  #stats { color: #10b981; margin: 10px 0; font-size: 14px; }
</style>
</head>
<body>
<h1>Oxford 3000 → data-extra.js Generator</h1>
<p>Dán toàn bộ text Oxford 3000 vào đây, rồi bấm Generate:</p>
<textarea id="input" placeholder="Dán nội dung Oxford 3000 vào đây..."></textarea>
<br>
<button onclick="generate()">⚡ Generate data-extra.js</button>
<button onclick="copyOutput()">📋 Copy Output</button>
<div id="stats"></div>
<textarea id="output" readonly placeholder="Output sẽ xuất hiện ở đây..."></textarea>

<script>
// Vietnamese meaning lookup table
const VN = {
  "a":"một","abandon":"từ bỏ","ability":"khả năng","able":"có thể","about":"về","above":"phía trên",
  "abroad":"ở nước ngoài","absolute":"tuyệt đối","absolutely":"hoàn toàn","accept":"chấp nhận",
  "acceptable":"chấp nhận được","access":"tiếp cận","accident":"tai nạn","accompany":"đi cùng",
  "account":"tài khoản","accuse":"buộc tội","achieve":"đạt được","achievement":"thành tích",
  "acknowledge":"thừa nhận","acquire":"đạt được","across":"qua","act":"hành động","action":"hành động",
  "active":"tích cực","activity":"hoạt động","actor":"diễn viên","actual":"thực sự","actually":"thực ra",
  "adapt":"thích nghi","add":"thêm","address":"địa chỉ","admire":"ngưỡng mộ","admit":"thừa nhận",
  "adopt":"chấp nhận","adult":"người lớn","advance":"tiến bộ","advantage":"lợi thế","adventure":"phiêu lưu",
  "advertise":"quảng cáo","advice":"lời khuyên","advise":"khuyên","affect":"ảnh hưởng",
  "afford":"có đủ tiền","afraid":"sợ","age":"tuổi","agency":"cơ quan","agree":"đồng ý",
  "agreement":"thỏa thuận","aid":"viện trợ","aim":"mục tiêu","air":"không khí","aircraft":"máy bay",
  "airport":"sân bay","alarm":"báo động","alcohol":"rượu","alive":"còn sống","allow":"cho phép",
  "almost":"hầu như","alone":"một mình","although":"mặc dù","always":"luôn luôn","amazing":"tuyệt vời",
  "ambition":"tham vọng","amount":"số lượng","analysis":"phân tích","analyze":"phân tích",
  "ancient":"cổ đại","anger":"sự tức giận","angry":"tức giận","animal":"động vật","announce":"thông báo",
  "annoy":"làm phiền","annual":"hàng năm","answer":"câu trả lời","anxious":"lo lắng","apartment":"căn hộ",
  "apologize":"xin lỗi","appear":"xuất hiện","apple":"quả táo","apply":"nộp đơn","appreciate":"trân trọng",
  "approach":"phương pháp","appropriate":"phù hợp","argue":"tranh luận","argument":"lý lẽ","army":"quân đội",
  "arrange":"sắp xếp","arrest":"bắt giữ","arrive":"đến nơi","art":"nghệ thuật","article":"bài báo",
  "artist":"nghệ sĩ","ask":"hỏi","assess":"đánh giá","assessment":"đánh giá","assignment":"bài tập",
  "assist":"hỗ trợ","assume":"giả định","attack":"tấn công","attend":"tham dự","attention":"sự chú ý",
  "attract":"thu hút","attractive":"hấp dẫn","audience":"khán giả","author":"tác giả","authority":"thẩm quyền",
  "automatic":"tự động","available":"có sẵn","average":"trung bình","avoid":"tránh","award":"giải thưởng",
  "awful":"kinh khủng","baby":"em bé","back":"phía sau","background":"nền tảng","bad":"xấu",
  "bag":"túi xách","bake":"nướng","balance":"cân bằng","ball":"quả bóng","ban":"cấm",
  "bank":"ngân hàng","barrier":"rào cản","base":"cơ sở","basic":"cơ bản","bath":"bắm tắm",
  "battery":"pin","battle":"trận chiến","beach":"bãi biển","beat":"đánh bại","beautiful":"đẹp",
  "beauty":"vẻ đẹp","become":"trở thành","behave":"cư xử","belief":"niềm tin","believe":"tin tưởng",
  "belong":"thuộc về","below":"phía dưới","benefit":"lợi ích","between":"giữa","beyond":"ngoài",
  "big":"to lớn","bill":"hóa đơn","biology":"sinh học","bird":"con chim","birth":"sự sinh ra",
  "birthday":"sinh nhật","bite":"cắn","black":"màu đen","blood":"máu","blow":"thổi",
  "board":"hội đồng","boat":"thuyền","body":"cơ thể","boil":"đun sôi","bomb":"bom",
  "book":"sách","border":"biên giới","boring":"nhàm chán","borrow":"mượn","boss":"sếp",
  "bother":"làm phiền","bottle":"chai","brain":"não","brave":"dũng cảm","bread":"bánh mì",
  "break":"phá vỡ","breakfast":"bữa sáng","bridge":"cây cầu","bright":"sáng","brilliant":"xuất sắc",
  "bring":"mang đến","broken":"hỏng","brother":"anh em trai","brown":"màu nâu","build":"xây dựng",
  "building":"tòa nhà","burn":"đốt cháy","bus":"xe buýt","business":"kinh doanh","busy":"bận rộn",
  "buy":"mua","cake":"bánh","call":"gọi","calm":"bình tĩnh","camera":"máy ảnh","campaign":"chiến dịch",
  "cancer":"ung thư","capital":"thủ đô","captain":"đội trưởng","car":"xe ô tô","care":"chăm sóc",
  "career":"sự nghiệp","careful":"cẩn thận","carry":"mang","cause":"nguyên nhân","celebrate":"kỷ niệm",
  "celebration":"lễ kỷ niệm","century":"thế kỷ","ceremony":"nghi lễ","certain":"chắc chắn",
  "challenge":"thách thức","change":"thay đổi","character":"nhân vật","charge":"tính phí",
  "cheap":"rẻ","check":"kiểm tra","cheese":"phô mai","chemistry":"hóa học","child":"đứa trẻ",
  "choice":"sự lựa chọn","choose":"chọn","church":"nhà thờ","circle":"vòng tròn","citizen":"công dân",
  "city":"thành phố","claim":"tuyên bố","class":"lớp học","clean":"sạch sẽ","clear":"rõ ràng",
  "climate":"khí hậu","climb":"leo trèo","close":"đóng","cloth":"vải","clothes":"quần áo",
  "cloud":"đám mây","club":"câu lạc bộ","coach":"huấn luyện viên","coast":"bờ biển","coffee":"cà phê",
  "cold":"lạnh","collect":"thu thập","college":"trường đại học","color":"màu sắc","come":"đến",
  "comfort":"sự thoải mái","comfortable":"thoải mái","comment":"nhận xét","commit":"cam kết",
  "common":"phổ biến","communicate":"giao tiếp","communication":"giao tiếp","community":"cộng đồng",
  "company":"công ty","compare":"so sánh","compete":"cạnh tranh","competition":"cuộc thi",
  "complain":"phàn nàn","complete":"hoàn thành","complex":"phức tạp","computer":"máy tính",
  "concentrate":"tập trung","confidence":"sự tự tin","confident":"tự tin","confirm":"xác nhận",
  "conflict":"xung đột","confuse":"làm bối rối","connect":"kết nối","conscious":"có ý thức",
  "consequence":"hậu quả","consider":"xem xét","consist":"bao gồm","constant":"liên tục",
  "construct":"xây dựng","consume":"tiêu thụ","contain":"chứa","context":"ngữ cảnh",
  "continue":"tiếp tục","contrast":"tương phản","contribute":"đóng góp","control":"kiểm soát",
  "convenient":"thuận tiện","conversation":"cuộc trò chuyện","convince":"thuyết phục","cook":"nấu ăn",
  "copy":"sao chép","cost":"chi phí","count":"đếm","country":"đất nước","couple":"cặp đôi",
  "courage":"can đảm","course":"khóa học","cover":"bao phủ","create":"tạo ra","creative":"sáng tạo",
  "crime":"tội phạm","crisis":"khủng hoảng","criticize":"chỉ trích","crowd":"đám đông",
  "cruel":"tàn nhẫn","cultural":"thuộc văn hóa","culture":"văn hóa","cure":"chữa trị",
  "current":"hiện tại","custom":"phong tục","customer":"khách hàng","cut":"cắt","cycle":"chu kỳ",
  "damage":"thiệt hại","dance":"nhảy múa","danger":"nguy hiểm","dangerous":"nguy hiểm",
  "dark":"tối tăm","data":"dữ liệu","date":"ngày tháng","daughter":"con gái","deal":"giao dịch",
  "death":"cái chết","debate":"tranh luận","decide":"quyết định","decision":"quyết định",
  "decline":"suy giảm","deep":"sâu","defend":"bảo vệ","define":"định nghĩa","degree":"bằng cấp",
  "deliver":"giao hàng","demand":"nhu cầu","demonstrate":"chứng minh","deny":"phủ nhận",
  "describe":"mô tả","design":"thiết kế","desire":"mong muốn","destroy":"phá hủy",
  "detail":"chi tiết","detect":"phát hiện","determine":"xác định","develop":"phát triển",
  "development":"sự phát triển","device":"thiết bị","diet":"chế độ ăn","difference":"sự khác biệt",
  "different":"khác nhau","difficult":"khó khăn","difficulty":"khó khăn","digital":"kỹ thuật số",
  "dinner":"bữa tối","direction":"hướng","dirty":"bẩn thỉu","disadvantage":"bất lợi",
  "disagree":"không đồng ý","disappear":"biến mất","disaster":"thảm họa","discover":"khám phá",
  "discuss":"thảo luận","disease":"bệnh tật","display":"hiển thị","distance":"khoảng cách",
  "divide":"chia","doctor":"bác sĩ","document":"tài liệu","donate":"quyên góp","doubt":"nghi ngờ",
  "dream":"giấc mơ","drink":"uống","drive":"lái xe","drop":"nhỏ giọt","drug":"thuốc",
  "dry":"khô ráo","during":"trong suốt","earn":"kiếm được","easily":"dễ dàng","easy":"dễ dàng",
  "eat":"ăn","economy":"kinh tế","edge":"cạnh","education":"giáo dục","educational":"thuộc giáo dục",
  "effect":"hiệu quả","effort":"nỗ lực","element":"yếu tố","employ":"thuê","enable":"cho phép",
  "encourage":"khuyến khích","end":"kết thúc","energy":"năng lượng","enjoy":"tận hưởng",
  "enough":"đủ","enter":"vào","entertain":"giải trí","equal":"bình đẳng","equipment":"thiết bị",
  "error":"lỗi","escape":"thoát khỏi","essay":"bài luận","essential":"thiết yếu","establish":"thành lập",
  "estimate":"ước tính","evaluate":"đánh giá","evening":"buổi tối","evidence":"bằng chứng",
  "exact":"chính xác","examine":"kiểm tra","example":"ví dụ","excellent":"xuất sắc",
  "exchange":"trao đổi","exercise":"tập thể dục","exist":"tồn tại","expect":"mong đợi",
  "expensive":"đắt tiền","experience":"kinh nghiệm","experiment":"thí nghiệm","expert":"chuyên gia",
  "explain":"giải thích","explore":"khám phá","export":"xuất khẩu","express":"diễn đạt",
  "extreme":"cực đoan","face":"khuôn mặt","facility":"cơ sở vật chất","fact":"sự thật",
  "factory":"nhà máy","fail":"thất bại","fair":"công bằng","faith":"đức tin","fall":"ngã",
  "family":"gia đình","famous":"nổi tiếng","farm":"nông trại","fascinating":"hấp dẫn",
  "fashion":"thời trang","fast":"nhanh","father":"người cha","fear":"sợ hãi","feature":"đặc điểm",
  "feel":"cảm thấy","festival":"lễ hội","few":"một vài","fiction":"tiểu thuyết","fight":"chiến đấu",
  "find":"tìm kiếm","finish":"hoàn thành","fire":"lửa","first":"đầu tiên","fish":"cá",
  "fit":"phù hợp","fix":"sửa chữa","flight":"chuyến bay","flow":"chảy","flower":"bông hoa",
  "focus":"tập trung","follow":"theo dõi","food":"thức ăn","force":"sức mạnh","foreign":"nước ngoài",
  "forest":"rừng","forget":"quên","form":"hình thức","formal":"trang trọng","free":"tự do",
  "friend":"bạn bè","friendly":"thân thiện","friendship":"tình bạn","fruit":"trái cây",
  "fun":"vui vẻ","function":"chức năng","funny":"buồn cười","future":"tương lai",
  "gain":"đạt được","game":"trò chơi","garden":"khu vườn","general":"chung","generate":"tạo ra",
  "generation":"thế hệ","generous":"rộng lượng","gift":"quà tặng","give":"cho","global":"toàn cầu",
  "goal":"mục tiêu","government":"chính phủ","grade":"điểm số","gradually":"dần dần",
  "great":"tuyệt vời","green":"màu xanh lá","grow":"phát triển","growth":"sự tăng trưởng",
  "guide":"hướng dẫn","habit":"thói quen","happen":"xảy ra","happiness":"hạnh phúc","happy":"hạnh phúc",
  "hard":"khó khăn","harmful":"có hại","head":"cái đầu","health":"sức khỏe","healthy":"khỏe mạnh",
  "hear":"nghe","heart":"trái tim","help":"giúp đỡ","high":"cao","history":"lịch sử",
  "hope":"hi vọng","house":"ngôi nhà","idea":"ý tưởng","identify":"xác định","ignore":"bỏ qua",
  "image":"hình ảnh","impact":"tác động","improve":"cải thiện","include":"bao gồm",
  "increase":"tăng","influence":"ảnh hưởng","information":"thông tin","ingredient":"nguyên liệu",
  "inspire":"truyền cảm hứng","interest":"mối quan tâm","invent":"phát minh","invest":"đầu tư",
  "investigate":"điều tra","involve":"liên quan","issue":"vấn đề","job":"công việc",
  "join":"tham gia","judge":"phán xét","keep":"giữ","kind":"tử tế","knowledge":"kiến thức",
  "language":"ngôn ngữ","large":"lớn","leader":"lãnh đạo","learn":"học","leave":"rời khỏi",
  "library":"thư viện","life":"cuộc sống","limit":"giới hạn","listen":"lắng nghe",
  "local":"địa phương","long":"dài","lose":"mất","luck":"may mắn","main":"chính",
  "maintain":"duy trì","major":"lớn","manage":"quản lý","matter":"vấn đề","meaning":"ý nghĩa",
  "media":"truyền thông","medical":"y tế","meet":"gặp gỡ","mental":"tinh thần",
  "method":"phương pháp","modern":"hiện đại","money":"tiền bạc","move":"di chuyển",
  "national":"quốc gia","natural":"tự nhiên","need":"cần thiết","negative":"tiêu cực",
  "network":"mạng lưới","news":"tin tức","normal":"bình thường","note":"ghi chú",
  "ocean":"đại dương","offer":"đề nghị","opportunity":"cơ hội","opinion":"ý kiến",
  "organize":"tổ chức","original":"nguyên bản","own":"sở hữu","pain":"đau đớn",
  "participate":"tham gia","particular":"cụ thể","peace":"hòa bình","perform":"biểu diễn",
  "period":"thời kỳ","person":"người","plan":"kế hoạch","play":"chơi","political":"chính trị",
  "popular":"phổ biến","population":"dân số","positive":"tích cực","potential":"tiềm năng",
  "practice":"thực hành","present":"hiện tại","prevent":"ngăn ngừa","primary":"chính yếu",
  "principle":"nguyên tắc","private":"riêng tư","process":"quá trình","produce":"sản xuất",
  "program":"chương trình","property":"tài sản","protect":"bảo vệ","provide":"cung cấp",
  "public":"công cộng","purpose":"mục đích","quality":"chất lượng","question":"câu hỏi",
  "range":"phạm vi","reach":"đạt được","read":"đọc","reason":"lý do","recognize":"nhận ra",
  "recover":"hồi phục","recycle":"tái chế","reflect":"suy nghĩ","region":"khu vực",
  "relation":"mối quan hệ","relationship":"mối quan hệ","religion":"tôn giáo","rely":"phụ thuộc",
  "remove":"loại bỏ","report":"báo cáo","require":"yêu cầu","respect":"tôn trọng",
  "respond":"phản hồi","result":"kết quả","reveal":"tiết lộ","revolution":"cách mạng",
  "rise":"tăng lên","risk":"rủi ro","role":"vai trò","rule":"quy tắc","safe":"an toàn",
  "save":"tiết kiệm","science":"khoa học","scientific":"khoa học","search":"tìm kiếm",
  "section":"phần","select":"chọn lựa","sense":"giác quan","serious":"nghiêm trọng",
  "share":"chia sẻ","similar":"tương tự","situation":"tình huống","skill":"kỹ năng",
  "society":"xã hội","solve":"giải quyết","source":"nguồn gốc","specific":"cụ thể",
  "spread":"lan rộng","standard":"tiêu chuẩn","statement":"tuyên bố","succeed":"thành công",
  "suggest":"đề xuất","support":"hỗ trợ","survive":"sống sót","symbol":"biểu tượng",
  "system":"hệ thống","target":"mục tiêu","technology":"công nghệ","tend":"có xu hướng",
  "theory":"lý thuyết","tradition":"truyền thống","transport":"vận chuyển","trend":"xu hướng",
  "trust":"tin tưởng","truth":"sự thật","typical":"điển hình","understand":"hiểu biết",
  "unique":"độc đáo","value":"giá trị","various":"đa dạng","violence":"bạo lực","vision":"tầm nhìn",
  "volunteer":"tình nguyện","vote":"bỏ phiếu","waste":"lãng phí","wealth":"sự giàu có",
  "wildlife":"động vật hoang dã","wonder":"tự hỏi","worry":"lo lắng"
};

// Topic assignment
function getTopic(word, pos) {
  const eduWords = ["academic","curriculum","scholarship","tuition","student","teacher","school","university","education","learn","study","exam","grade","assignment","discipline","knowledge","intelligence","achieve","concentrate","analysis","theory","research","lecture","classroom","training"];
  const envWords = ["environment","climate","pollution","forest","ocean","species","wildlife","ecosystem","sustainability","carbon","emission","recycle","waste","flood","disaster","atmosphere","biodiversity","renewable","deforestation","contaminate","temperature","drought","nature"];
  const techWords = ["technology","internet","digital","software","computer","device","network","algorithm","artificial","data","innovation","virtual","robot","application","automate","cybersecurity","database","engineer","science","system","program","electronic","online"];
  const healthWords = ["health","disease","medicine","hospital","doctor","mental","physical","cancer","recovery","nutrition","obesity","epidemic","vaccine","exercise","diet","symptom","surgery","therapy","stress","anxiety","immune","chronic","diagnosis"];
  const cultureWords = ["culture","tradition","heritage","community","society","festival","ceremony","language","religion","identity","diversity","multicultural","indigenous","authentic","art","music","custom","celebration"];
  
  if (eduWords.some(w => word.includes(w))) return "education";
  if (envWords.some(w => word.includes(w))) return "environment";
  if (techWords.some(w => word.includes(w))) return "technology";
  if (healthWords.some(w => word.includes(w))) return "health";
  if (cultureWords.some(w => word.includes(w))) return "culture";
  return "education"; // default
}

function generate() {
  const text = document.getElementById('input').value;
  if (!text.trim()) { alert('Vui lòng dán nội dung Oxford 3000!'); return; }
  
  // Get existing words to skip duplicates
  const existing = new Set();
  // Common words already in DB
  const skipWords = "absorb,academic,curriculum,elaborate,evaluate,facilitate,scholarship,tuition,biodiversity,contaminate,deforestation,emission,renewable,sustainable,ecosystem,algorithm,artificial,automate,cybersecurity,database,innovation,virtual,chronic,diagnose,epidemic,immunise,nutrition,obesity,authentic,heritage,indigenous,multicultural,tradition,diversity,achieve,benefit,collaborate,consequence,demand,efficient,emerge,global,implement,inevitable,infrastructure,initiative,minority,motivate,overcome,phenomenon,pollute,poverty,preserve,promote,reliable,significant,strategy,sufficient,transform,widespread,ability,adapt,aware,challenge,communicate,concern,contribute,create,cultural,decline,determined,effective,environment,explore,generate,impact,opportunity,reduce,research,solution,achievement,analysis,attitude,concentrate,discipline,effort,intelligence,knowledge,participate,succeed,atmosphere,collapse,consume,crisis,damage,flood,protect,species,waste,wildlife,accurate,application,device,network,software,disease,mental,recover,stress,community".split(',');
  skipWords.forEach(w => existing.add(w.toLowerCase().trim()));
  
  // Parse Oxford 3000 text
  const posMap = {'n.':'noun','v.':'verb','adj.':'adjective','adv.':'adverb','prep.':'preposition','conj.':'conjunction','pron.':'pronoun','det.':'determiner','modal v.':'modal verb','exclam.':'exclamation','number':'noun','adj./adv.':'adjective'};
  
  const lines = text.split('\\n');
  const results = [];
  let id = 111;
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('©') || trimmed.startsWith('The Oxford')) continue;
    
    // Match pattern: word pos. level
    const match = trimmed.match(/^([a-z][a-z\\s\\-']*?)\\s+(n\\.|v\\.|adj\\.|adv\\.|prep\\.|conj\\.|pron\\.|det\\.|modal v\\.|exclam\\.|number|indefinite article|definite article).*?\\s+(A1|A2|B1|B2)/i);
    if (!match) continue;
    
    const word = match[1].trim().toLowerCase();
    if (existing.has(word)) continue;
    if (word.includes(' ') && word.length > 15) continue; // skip very long phrases
    
    existing.add(word);
    
    const posRaw = match[2].trim();
    const level = match[3];
    const pos = posMap[posRaw] || 'noun';
    const meaning_vn = VN[word] || 'đang cập nhật';
    const topic = getTopic(word, pos);
    
    results.push({id, word, pos, ipa:'', level, topic, meaning_vn, meaning_en:'', collocations:[], examples:[], synonyms:[]});
    id++;
  }
  
  // Generate JS output
  const js = results.map(w => 
    \`  {id:\${w.id},word:"\${w.word}",pos:"\${w.pos}",ipa:"",level:"\${w.level}",topic:"\${w.topic}",meaning_vn:"\${w.meaning_vn}",meaning_en:"",collocations:[],examples:[],synonyms:[]}\`
  ).join(',\\n');
  
  const output = \`// Oxford 3000 - Auto Generated (\${results.length} words)
const VOCAB_OXFORD = [
\${js}
];
if (typeof VOCABULARY !== 'undefined') VOCABULARY.push(...VOCAB_OXFORD);
\`;
  
  document.getElementById('output').value = output;
  document.getElementById('stats').textContent = \`✅ Đã tạo \${results.length} từ mới! Copy nội dung và lưu vào file js/data-oxford.js\`;
}

function copyOutput() {
  const el = document.getElementById('output');
  el.select();
  document.execCommand('copy');
  alert('Đã copy! Paste vào file js/data-oxford.js');
}
</script>
</body>
</html>`;

// Write the generator tool as a standalone HTML file
// This is a utility - open oxford-generator.html in browser to use
