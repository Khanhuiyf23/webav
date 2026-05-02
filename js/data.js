// ============================================================
// DATA.JS — Vocabulary Database + Grammar Rules + Quiz Data
// ============================================================

// ---- VOCABULARY DATABASE (Oxford 3000 subset – 80 words) ----
const VOCABULARY = [
  // EDUCATION TOPIC
  { id:1, word:"absorb", pos:"verb", ipa:"/əbˈzɔːb/", level:"B2", topic:"education", meaning_vn:"hấp thụ, tiếp thu", meaning_en:"to take in information, ideas, or experiences and understand them", collocations:["absorb information","absorb knowledge","fully absorbed","absorb a lesson"], examples:["Students need time to absorb all the information in the lesson.","Children absorb language naturally when surrounded by native speakers."], synonyms:["take in","assimilate","soak up"] },
  { id:2, word:"academic", pos:"adjective", ipa:"/ˌækəˈdemɪk/", level:"B1", topic:"education", meaning_vn:"học thuật, thuộc về học viện", meaning_en:"relating to education, especially at college or university level", collocations:["academic year","academic achievement","academic performance","academic record"], examples:["Her academic performance has improved significantly this semester.","The academic year starts in September in most universities."], synonyms:["scholarly","educational","intellectual"] },
  { id:3, word:"curriculum", pos:"noun", ipa:"/kəˈrɪkjʊləm/", level:"B2", topic:"education", meaning_vn:"chương trình học, giáo trình", meaning_en:"the subjects studied in a school, college, etc.", collocations:["national curriculum","design a curriculum","curriculum development","follow a curriculum"], examples:["The new national curriculum places greater emphasis on critical thinking skills.","Schools are redesigning their curriculum to include more digital literacy."], synonyms:["syllabus","course","program of study"] },
  { id:4, word:"elaborate", pos:"verb", ipa:"/ɪˈlæbəreɪt/", level:"B2", topic:"education", meaning_vn:"giải thích chi tiết, diễn giải", meaning_en:"to add more details or information to something", collocations:["elaborate on","elaborate further","elaborate a plan","elaborate in detail"], examples:["Could you elaborate on your answer?","The teacher asked students to elaborate on their ideas in the essay."], synonyms:["expand","explain","detail"] },
  { id:5, word:"evaluate", pos:"verb", ipa:"/ɪˈvæljueɪt/", level:"B2", topic:"education", meaning_vn:"đánh giá, định giá trị", meaning_en:"to judge or calculate the quality, importance, amount, or value of something", collocations:["evaluate performance","evaluate results","critically evaluate","evaluate progress"], examples:["Teachers evaluate students' progress through regular assessments.","It is important to evaluate the effectiveness of new teaching methods."], synonyms:["assess","appraise","judge"] },
  { id:6, word:"facilitate", pos:"verb", ipa:"/fəˈsɪlɪteɪt/", level:"B2", topic:"education", meaning_vn:"tạo điều kiện, hỗ trợ", meaning_en:"to make something possible or easier", collocations:["facilitate learning","facilitate communication","facilitate access","facilitate discussion"], examples:["Technology can facilitate learning by providing access to vast resources.","The teacher's role is to facilitate discussion, not simply deliver information."], synonyms:["enable","assist","promote"] },
  { id:7, word:"scholarship", pos:"noun", ipa:"/ˈskɒlərʃɪp/", level:"B1", topic:"education", meaning_vn:"học bổng; học vấn uyên thâm", meaning_en:"an amount of money given by a school, university, etc. to a student to help pay for their education", collocations:["win a scholarship","scholarship program","academic scholarship","apply for a scholarship"], examples:["She was awarded a scholarship to study at Oxford University.","Many talented students from rural areas benefit from scholarship programs."], synonyms:["grant","award","bursary"] },
  { id:8, word:"tuition", pos:"noun", ipa:"/tjuːˈɪʃn/", level:"B2", topic:"education", meaning_vn:"học phí; sự dạy học", meaning_en:"teaching, especially of individuals or small groups; also money paid for education", collocations:["tuition fee","private tuition","pay tuition","tuition costs"], examples:["University tuition fees have risen dramatically over the past decade.","Private tuition can help students who struggle with certain subjects."], synonyms:["instruction","teaching","coaching"] },

  // ENVIRONMENT TOPIC
  { id:9, word:"biodiversity", pos:"noun", ipa:"/ˌbaɪəʊdaɪˈvɜːsəti/", level:"B2", topic:"environment", meaning_vn:"đa dạng sinh học", meaning_en:"the existence of a large number of different kinds of animals and plants in their natural environment", collocations:["protect biodiversity","loss of biodiversity","biodiversity hotspot","maintain biodiversity"], examples:["The Amazon rainforest is one of the most important areas for biodiversity on Earth.","Deforestation is a major threat to biodiversity in tropical regions."], synonyms:["ecological variety","species diversity"] },
  { id:10, word:"contaminate", pos:"verb", ipa:"/kənˈtæmɪneɪt/", level:"B2", topic:"environment", meaning_vn:"làm ô nhiễm, làm bẩn", meaning_en:"to make a place or substance dirty or harmful by adding something dangerous", collocations:["contaminate water","contaminate food","contaminate the soil","heavily contaminated"], examples:["Industrial waste has contaminated the river, making the water unsafe to drink.","Pesticides can contaminate groundwater if used excessively."], synonyms:["pollute","taint","poison"] },
  { id:11, word:"deforestation", pos:"noun", ipa:"/diːˌfɒrɪˈsteɪʃn/", level:"B2", topic:"environment", meaning_vn:"nạn phá rừng", meaning_en:"the cutting down of trees in a large area, or the destruction of forests by people", collocations:["stop deforestation","cause of deforestation","illegal deforestation","combat deforestation"], examples:["Deforestation contributes significantly to climate change and species extinction.","Brazil has implemented stricter laws to combat illegal deforestation in the Amazon."], synonyms:["logging","forest clearance","tree felling"] },
  { id:12, word:"emission", pos:"noun", ipa:"/ɪˈmɪʃn/", level:"B2", topic:"environment", meaning_vn:"sự phát thải, khí thải", meaning_en:"an amount of gas, heat, light, etc. that is sent out", collocations:["carbon emission","reduce emissions","greenhouse gas emissions","emission targets"], examples:["Countries must reduce their carbon emissions to slow down global warming.","The Paris Agreement aims to limit greenhouse gas emissions worldwide."], synonyms:["discharge","release","output"] },
  { id:13, word:"renewable", pos:"adjective", ipa:"/rɪˈnjuːəbl/", level:"B2", topic:"environment", meaning_vn:"có thể tái tạo, tái sinh được", meaning_en:"a form of energy that can be replaced naturally and will never run out", collocations:["renewable energy","renewable resources","renewable source","transition to renewable"], examples:["Solar and wind power are the most commonly used forms of renewable energy.","Vietnam is rapidly expanding its renewable energy capacity."], synonyms:["sustainable","clean","inexhaustible"] },
  { id:14, word:"sustainable", pos:"adjective", ipa:"/səˈsteɪnəbl/", level:"B2", topic:"environment", meaning_vn:"bền vững, có thể duy trì lâu dài", meaning_en:"causing little or no damage to the environment and therefore able to continue for a long time", collocations:["sustainable development","sustainable agriculture","sustainable living","environmentally sustainable"], examples:["Sustainable development means meeting our needs without compromising future generations.","Organic farming is considered a more sustainable form of agriculture."], synonyms:["eco-friendly","green","long-term"] },
  { id:15, word:"ecosystem", pos:"noun", ipa:"/ˈiːkəʊsɪstəm/", level:"B2", topic:"environment", meaning_vn:"hệ sinh thái", meaning_en:"all the plants and animals in a particular area together with the relationship between them and their environment", collocations:["fragile ecosystem","protect the ecosystem","aquatic ecosystem","damage an ecosystem"], examples:["Coral reefs support one of the most diverse ecosystems on the planet.","Human activities are disrupting ecosystems around the world."], synonyms:["habitat","biome","natural system"] },

  // TECHNOLOGY TOPIC
  { id:16, word:"algorithm", pos:"noun", ipa:"/ˈælɡərɪðəm/", level:"B2", topic:"technology", meaning_vn:"thuật toán", meaning_en:"a set of rules that must be followed when solving a particular problem", collocations:["search algorithm","design an algorithm","run an algorithm","machine learning algorithm"], examples:["Social media platforms use algorithms to decide what content you see.","The algorithm was designed to process large amounts of data quickly."], synonyms:["procedure","formula","method"] },
  { id:17, word:"artificial", pos:"adjective", ipa:"/ˌɑːtɪˈfɪʃl/", level:"B1", topic:"technology", meaning_vn:"nhân tạo, giả tạo", meaning_en:"made or produced by human beings rather than occurring naturally", collocations:["artificial intelligence","artificial light","artificial flavour","artificial limb"], examples:["Artificial intelligence is transforming the way we work and communicate.","Many processed foods contain artificial flavourings and colourings."], synonyms:["synthetic","man-made","manufactured"] },
  { id:18, word:"automate", pos:"verb", ipa:"/ˈɔːtəmeɪt/", level:"B2", topic:"technology", meaning_vn:"tự động hóa", meaning_en:"to use machines or computers to do work that was previously done by people", collocations:["automate a process","automate production","fully automated","automate tasks"], examples:["Many factories have automated their production lines to increase efficiency.","Automation is replacing repetitive jobs previously done by humans."], synonyms:["mechanise","computerize","robotize"] },
  { id:19, word:"cybersecurity", pos:"noun", ipa:"/ˌsaɪbəsɪˈkjʊərɪti/", level:"B2", topic:"technology", meaning_vn:"an ninh mạng", meaning_en:"the practice of protecting computers, servers, mobile devices, and networks from digital attacks", collocations:["cybersecurity threat","improve cybersecurity","cybersecurity expert","data cybersecurity"], examples:["Companies are investing heavily in cybersecurity to protect customer data.","Cybersecurity is becoming increasingly important as more services move online."], synonyms:["information security","data protection","network security"] },
  { id:20, word:"database", pos:"noun", ipa:"/ˈdeɪtəbeɪs/", level:"B1", topic:"technology", meaning_vn:"cơ sở dữ liệu", meaning_en:"an organized set of data that is stored in a computer and can be looked at and used in various ways", collocations:["database management","store in a database","access a database","update a database"], examples:["The hospital maintains a database of all patient records.","Customer information is stored in a secure, encrypted database."], synonyms:["data store","repository","data bank"] },
  { id:21, word:"innovation", pos:"noun", ipa:"/ˌɪnəˈveɪʃn/", level:"B2", topic:"technology", meaning_vn:"sự đổi mới, cải tiến", meaning_en:"a new idea, method, or product; the introduction of new things", collocations:["technological innovation","drive innovation","foster innovation","innovation in design"], examples:["Silicon Valley is known as a hub of technological innovation.","Innovation is essential for companies to stay competitive in today's market."], synonyms:["invention","advancement","breakthrough"] },
  { id:22, word:"virtual", pos:"adjective", ipa:"/ˈvɜːtʃuəl/", level:"B2", topic:"technology", meaning_vn:"ảo, trên mạng (không tồn tại trực tiếp)", meaning_en:"created by a computer to appear real or to simulate a real thing", collocations:["virtual reality","virtual meeting","virtual classroom","virtual environment"], examples:["Virtual reality technology is revolutionising the gaming and education industries.","Many companies have shifted to virtual meetings since the pandemic."], synonyms:["simulated","digital","computer-generated"] },

  // HEALTH TOPIC
  { id:23, word:"chronic", pos:"adjective", ipa:"/ˈkrɒnɪk/", level:"B2", topic:"health", meaning_vn:"mãn tính, kinh niên", meaning_en:"a chronic disease or illness is one that continues for a long time", collocations:["chronic disease","chronic pain","chronic condition","chronic stress"], examples:["Chronic stress can lead to serious health problems if not managed properly.","Diabetes is a chronic condition that requires lifelong management."], synonyms:["persistent","long-term","prolonged"] },
  { id:24, word:"diagnose", pos:"verb", ipa:"/ˈdaɪəɡnəʊz/", level:"B2", topic:"health", meaning_vn:"chẩn đoán (bệnh)", meaning_en:"to say exactly what illness or the cause of a problem is", collocations:["diagnose a disease","early diagnosis","be diagnosed with","diagnose a condition"], examples:["The doctor diagnosed the patient with type 2 diabetes.","Early diagnosis is crucial for successful treatment of most cancers."], synonyms:["identify","determine","detect"] },
  { id:25, word:"epidemic", pos:"noun", ipa:"/ˌepɪˈdemɪk/", level:"B2", topic:"health", meaning_vn:"dịch bệnh", meaning_en:"a large number of cases of a particular disease happening at the same time", collocations:["obesity epidemic","control an epidemic","epidemic of disease","spread of an epidemic"], examples:["The 2020 COVID-19 epidemic quickly became a global pandemic.","Health officials are working to control the measles epidemic in the region."], synonyms:["outbreak","plague","pandemic"] },
  { id:26, word:"immunise", pos:"verb", ipa:"/ˈɪmjʊnaɪz/", level:"B2", topic:"health", meaning_vn:"tiêm phòng, miễn dịch hóa", meaning_en:"to protect a person or animal from disease by vaccination", collocations:["immunise children","immunise against","immunisation programme","fully immunised"], examples:["All children should be immunised against common diseases such as measles.","The government launched a national campaign to immunise the population."], synonyms:["vaccinate","inoculate","protect"] },
  { id:27, word:"nutrition", pos:"noun", ipa:"/njuːˈtrɪʃn/", level:"B2", topic:"health", meaning_vn:"dinh dưỡng", meaning_en:"the process by which living things receive the food necessary for them to grow and be healthy", collocations:["good nutrition","poor nutrition","nutrition plan","sports nutrition"], examples:["Good nutrition is essential for maintaining a healthy lifestyle.","Poor nutrition in childhood can affect physical and mental development."], synonyms:["diet","nourishment","sustenance"] },
  { id:28, word:"obesity", pos:"noun", ipa:"/əˈbiːsɪti/", level:"B2", topic:"health", meaning_vn:"béo phì", meaning_en:"the state of being very overweight in a way that is dangerous to health", collocations:["childhood obesity","tackle obesity","obesity rate","cause of obesity"], examples:["Childhood obesity is a growing public health concern in many countries.","Lack of exercise and poor diet are the main causes of obesity."], synonyms:["overweight","excessive weight"] },

  // CULTURE TOPIC
  { id:29, word:"authentic", pos:"adjective", ipa:"/ɔːˈθentɪk/", level:"B2", topic:"culture", meaning_vn:"đích thực, xác thực", meaning_en:"real, true, and accurate; made in the traditional or original way", collocations:["authentic culture","authentic food","authentic experience","authentic style"], examples:["Tourists often seek authentic cultural experiences when visiting foreign countries.","The restaurant serves authentic Vietnamese cuisine using traditional recipes."], synonyms:["genuine","real","original"] },
  { id:30, word:"heritage", pos:"noun", ipa:"/ˈherɪtɪdʒ/", level:"B2", topic:"culture", meaning_vn:"di sản văn hóa, gia sản", meaning_en:"features belonging to the culture of a particular society, such as traditions, languages, or buildings", collocations:["cultural heritage","world heritage","heritage site","preserve heritage"], examples:["Vietnam's cultural heritage includes over 4,000 years of history and tradition.","Ha Long Bay is recognised as a UNESCO World Heritage Site."], synonyms:["tradition","legacy","inheritance"] },
  { id:31, word:"indigenous", pos:"adjective", ipa:"/ɪnˈdɪdʒɪnəs/", level:"B2", topic:"culture", meaning_vn:"bản địa, bản xứ", meaning_en:"used to describe people who originally lived in a place before others came", collocations:["indigenous people","indigenous culture","indigenous language","indigenous community"], examples:["Efforts are being made to preserve the languages of indigenous communities.","Indigenous peoples have a deep connection to their ancestral lands."], synonyms:["native","aboriginal","original"] },
  { id:32, word:"multicultural", pos:"adjective", ipa:"/ˌmʌltiˈkʌltʃərəl/", level:"B2", topic:"culture", meaning_vn:"đa văn hóa", meaning_en:"including people who have many different customs and beliefs", collocations:["multicultural society","multicultural city","multicultural education","multicultural environment"], examples:["London is one of the most multicultural cities in the world.","A multicultural classroom enriches students' understanding of the world."], synonyms:["diverse","cosmopolitan","pluralistic"] },
  { id:33, word:"tradition", pos:"noun", ipa:"/trəˈdɪʃn/", level:"A2", topic:"culture", meaning_vn:"truyền thống, phong tục", meaning_en:"a belief, custom, or way of doing something that has existed for a long time", collocations:["long-standing tradition","cultural tradition","break with tradition","keep a tradition"], examples:["The Tet festival is the most important cultural tradition in Vietnam.","Some traditions are passed down from generation to generation."], synonyms:["custom","practice","ritual"] },
  { id:34, word:"diversity", pos:"noun", ipa:"/daɪˈvɜːsɪti/", level:"B2", topic:"culture", meaning_vn:"sự đa dạng", meaning_en:"a range of different things or people", collocations:["cultural diversity","celebrate diversity","diversity of opinion","promote diversity"], examples:["Cultural diversity is one of humanity's greatest strengths.","The school celebrates the diversity of its students' backgrounds."], synonyms:["variety","range","difference"] },

  // MORE MIXED WORDS (A1-B2)
  { id:35, word:"achieve", pos:"verb", ipa:"/əˈtʃiːv/", level:"A2", topic:"education", meaning_vn:"đạt được, hoàn thành", meaning_en:"to succeed in doing or having something after trying hard", collocations:["achieve a goal","achieve success","achieve results","achieve potential"], examples:["With hard work and dedication, you can achieve your academic goals.","Vietnam achieved significant economic growth over the past decade."], synonyms:["accomplish","attain","reach"] },
  { id:36, word:"benefit", pos:"noun", ipa:"/ˈbenɪfɪt/", level:"A2", topic:"education", meaning_vn:"lợi ích, lợi nhuận", meaning_en:"an advantage that something gives you; a helpful or useful effect", collocations:["benefit from","health benefit","mutual benefit","financial benefit"], examples:["Exercise has numerous health benefits for people of all ages.","Students can benefit greatly from learning a second language."], synonyms:["advantage","gain","profit"] },
  { id:37, word:"collaborate", pos:"verb", ipa:"/kəˈlæbəreɪt/", level:"B1", topic:"education", meaning_vn:"hợp tác, cộng tác", meaning_en:"to work with someone else to produce or create something", collocations:["collaborate with","collaborate on a project","closely collaborate","collaborate effectively"], examples:["Students are encouraged to collaborate on group projects.","Scientists from different countries collaborate to find solutions to global problems."], synonyms:["cooperate","work together","partner"] },
  { id:38, word:"consequence", pos:"noun", ipa:"/ˈkɒnsɪkwəns/", level:"B1", topic:"environment", meaning_vn:"hậu quả, kết quả", meaning_en:"a result or effect of something, usually bad", collocations:["serious consequence","consequence of","face the consequences","long-term consequence"], examples:["Climate change will have serious consequences for future generations.","Students must understand the consequences of not studying regularly."], synonyms:["result","outcome","effect"] },
  { id:39, word:"demand", pos:"noun", ipa:"/dɪˈmɑːnd/", level:"A2", topic:"technology", meaning_vn:"nhu cầu; sự đòi hỏi", meaning_en:"a very firm request for something; the desire of people for a particular product", collocations:["growing demand","meet demand","supply and demand","high demand"], examples:["The demand for renewable energy is growing rapidly worldwide.","There is an increasing demand for workers with digital skills."], synonyms:["need","requirement","request"] },
  { id:40, word:"efficient", pos:"adjective", ipa:"/ɪˈfɪʃnt/", level:"B1", topic:"technology", meaning_vn:"hiệu quả, có năng suất cao", meaning_en:"doing something well and thoroughly with no waste of time or energy", collocations:["fuel efficient","efficient use","highly efficient","cost efficient"], examples:["Electric vehicles are more fuel-efficient than petrol-powered cars.","We need more efficient methods of producing clean energy."], synonyms:["effective","productive","economical"] },
  { id:41, word:"emerge", pos:"verb", ipa:"/ɪˈmɜːdʒ/", level:"B2", topic:"technology", meaning_vn:"xuất hiện, nảy sinh", meaning_en:"to come out from somewhere or to start to be known", collocations:["emerge from","emerge as","gradually emerge","new threats emerge"], examples:["New technologies are continuously emerging to address global challenges.","Vietnam has emerged as one of Southeast Asia's fastest-growing economies."], synonyms:["appear","arise","come out"] },
  { id:42, word:"global", pos:"adjective", ipa:"/ˈɡləʊbl/", level:"A2", topic:"environment", meaning_vn:"toàn cầu, mang tính quốc tế", meaning_en:"covering or affecting the whole world", collocations:["global warming","global economy","global issue","global community"], examples:["Global warming is one of the most pressing issues of our time.","We need a global solution to tackle climate change effectively."], synonyms:["international","worldwide","universal"] },
  { id:43, word:"implement", pos:"verb", ipa:"/ˈɪmplɪment/", level:"B2", topic:"education", meaning_vn:"thực hiện, triển khai", meaning_en:"to put a plan or system into operation", collocations:["implement a policy","implement a plan","successfully implemented","implement changes"], examples:["The government will implement new education policies next year.","Schools have implemented online learning platforms during the pandemic."], synonyms:["carry out","execute","apply"] },
  { id:44, word:"inevitable", pos:"adjective", ipa:"/ɪnˈevɪtəbl/", level:"B2", topic:"environment", meaning_vn:"không thể tránh khỏi, tất yếu", meaning_en:"that you cannot avoid or prevent", collocations:["seem inevitable","almost inevitable","inevitable consequence","inevitable result"], examples:["The rise of artificial intelligence seems inevitable in modern society.","Climate scientists say some level of global warming is now inevitable."], synonyms:["unavoidable","certain","inescapable"] },
  { id:45, word:"infrastructure", pos:"noun", ipa:"/ˈɪnfrəstrʌktʃə(r)/", level:"B2", topic:"technology", meaning_vn:"cơ sở hạ tầng", meaning_en:"the basic systems and services that a country or organization needs in order to work properly", collocations:["develop infrastructure","digital infrastructure","infrastructure investment","transport infrastructure"], examples:["The government is investing billions in improving digital infrastructure.","Poor infrastructure is a major barrier to economic development in rural areas."], synonyms:["framework","foundation","base"] },
  { id:46, word:"initiative", pos:"noun", ipa:"/ɪˈnɪʃətɪv/", level:"B2", topic:"education", meaning_vn:"sáng kiến, chủ động", meaning_en:"a new plan or action to improve something or solve a problem", collocations:["take the initiative","government initiative","launch an initiative","peace initiative"], examples:["The school launched a new initiative to promote reading among students.","Taking initiative is an important quality in both education and the workplace."], synonyms:["plan","scheme","programme"] },
  { id:47, word:"minority", pos:"noun", ipa:"/maɪˈnɒrɪti/", level:"B1", topic:"culture", meaning_vn:"thiểu số, nhóm thiểu số", meaning_en:"a small group of people who are different from the rest of the community", collocations:["ethnic minority","minority group","minority rights","small minority"], examples:["Vietnam has 54 ethnic groups, with 53 considered ethnic minorities.","It is important to protect the rights of minority communities."], synonyms:["small group","lesser number","sub-group"] },
  { id:48, word:"motivate", pos:"verb", ipa:"/ˈməʊtɪveɪt/", level:"B1", topic:"education", meaning_vn:"khích lệ, tạo động lực", meaning_en:"to cause someone to want to do something or work harder", collocations:["motivate students","motivate employees","highly motivated","motivate to learn"], examples:["Good teachers know how to motivate their students to love learning.","Setting clear goals can help motivate you to study more effectively."], synonyms:["inspire","encourage","drive"] },
  { id:49, word:"overcome", pos:"verb", ipa:"/ˌəʊvəˈkʌm/", level:"B1", topic:"education", meaning_vn:"vượt qua, khắc phục", meaning_en:"to succeed in dealing with a problem or difficulty", collocations:["overcome challenges","overcome fear","overcome obstacles","overcome difficulties"], examples:["Students who overcome language barriers often become stronger communicators.","With determination, you can overcome almost any obstacle."], synonyms:["conquer","defeat","deal with"] },
  { id:50, word:"phenomenon", pos:"noun", ipa:"/fɪˈnɒmɪnən/", level:"B2", topic:"environment", meaning_vn:"hiện tượng", meaning_en:"a fact or event in nature or society, especially one that is studied by scientists", collocations:["natural phenomenon","social phenomenon","rare phenomenon","explain a phenomenon"], examples:["Climate change is a complex natural phenomenon caused largely by human activity.","The migration of monarch butterflies is a remarkable natural phenomenon."], synonyms:["event","occurrence","happening"] },
  { id:51, word:"pollute", pos:"verb", ipa:"/pəˈluːt/", level:"B1", topic:"environment", meaning_vn:"gây ô nhiễm", meaning_en:"to make air, water, soil, etc. dirty and unsafe or harmful to people, animals, and plants", collocations:["pollute the air","pollute rivers","heavily polluted","industrial pollution"], examples:["Factories that pollute the air and water must face heavy fines.","Car exhaust fumes pollute the air in major cities around the world."], synonyms:["contaminate","taint","dirty"] },
  { id:52, word:"poverty", pos:"noun", ipa:"/ˈpɒvɪti/", level:"B1", topic:"culture", meaning_vn:"đói nghèo, tình trạng nghèo khổ", meaning_en:"the state of being poor", collocations:["reduce poverty","extreme poverty","poverty line","live in poverty"], examples:["Education is one of the most powerful tools for lifting people out of poverty.","Despite economic growth, many people still live in extreme poverty."], synonyms:["destitution","hardship","deprivation"] },
  { id:53, word:"preserve", pos:"verb", ipa:"/prɪˈzɜːv/", level:"B2", topic:"environment", meaning_vn:"bảo tồn, giữ gìn", meaning_en:"to keep something as it is, especially in order to prevent it from decaying or losing quality", collocations:["preserve the environment","preserve culture","preserve food","well-preserved"], examples:["It is our responsibility to preserve the natural environment for future generations.","Measures must be taken to preserve endangered species from extinction."], synonyms:["protect","conserve","maintain"] },
  { id:54, word:"promote", pos:"verb", ipa:"/prəˈməʊt/", level:"B1", topic:"education", meaning_vn:"thúc đẩy, cổ vũ; thăng chức", meaning_en:"to help something develop and be successful; to advertise something", collocations:["promote health","promote education","promote tourism","promote awareness"], examples:["Schools should promote creativity and critical thinking among students.","The government is promoting the use of renewable energy sources."], synonyms:["encourage","support","advance"] },
  { id:55, word:"reliable", pos:"adjective", ipa:"/rɪˈlaɪəbl/", level:"B1", topic:"technology", meaning_vn:"đáng tin cậy, chắc chắn", meaning_en:"that can be trusted to do something well; that is likely to give correct information", collocations:["reliable information","reliable source","highly reliable","reliable service"], examples:["It is important to use reliable sources when doing research online.","A reliable internet connection is essential for remote learning."], synonyms:["dependable","trustworthy","consistent"] },
  { id:56, word:"significant", pos:"adjective", ipa:"/sɪɡˈnɪfɪkənt/", level:"B1", topic:"education", meaning_vn:"quan trọng, có ý nghĩa", meaning_en:"important or large enough to have an effect or to be noticed", collocations:["significant progress","significant impact","significant difference","statistically significant"], examples:["Technology has had a significant impact on the way we learn and communicate.","There has been a significant improvement in the student's grades this semester."], synonyms:["important","notable","considerable"] },
  { id:57, word:"strategy", pos:"noun", ipa:"/ˈstrætɪdʒi/", level:"B1", topic:"education", meaning_vn:"chiến lược, kế hoạch", meaning_en:"a plan that you use to achieve something", collocations:["develop a strategy","learning strategy","marketing strategy","national strategy"], examples:["Developing a good study strategy is key to success in exams.","The government has introduced a new strategy to tackle youth unemployment."], synonyms:["plan","approach","method"] },
  { id:58, word:"sufficient", pos:"adjective", ipa:"/səˈfɪʃnt/", level:"B1", topic:"health", meaning_vn:"đủ, đầy đủ", meaning_en:"enough for a particular purpose", collocations:["sufficient evidence","sufficient time","sufficient resources","not sufficient"], examples:["Students must ensure they get sufficient sleep to perform well in exams.","The body needs sufficient nutrients to function properly."], synonyms:["adequate","enough","ample"] },
  { id:59, word:"transform", pos:"verb", ipa:"/trænsˈfɔːm/", level:"B2", topic:"technology", meaning_vn:"biến đổi, thay đổi hoàn toàn", meaning_en:"to change the form of something completely, especially so that it is better", collocations:["transform society","digitally transform","transform education","economic transformation"], examples:["Digital technology has transformed the way people communicate and work.","Micro-finance programmes have transformed the lives of many rural families."], synonyms:["change","convert","revolutionize"] },
  { id:60, word:"widespread", pos:"adjective", ipa:"/ˈwaɪdspred/", level:"B2", topic:"health", meaning_vn:"phổ biến, lan rộng", meaning_en:"existing or happening over a large area or among many people", collocations:["widespread use","widespread support","widespread damage","become widespread"], examples:["Smartphones have become widespread among Vietnamese teenagers.","Widespread vaccination is essential to achieve herd immunity."], synonyms:["extensive","prevalent","common"] },

  // A1-A2 BASIC WORDS
  { id:61, word:"ability", pos:"noun", ipa:"/əˈbɪlɪti/", level:"A2", topic:"education", meaning_vn:"khả năng, năng lực", meaning_en:"the fact that someone or something is able to do something", collocations:["natural ability","ability to learn","improve ability","exceptional ability"], examples:["Her ability to speak multiple languages is impressive.","Hard work can develop your natural ability further."], synonyms:["skill","capacity","talent"] },
  { id:62, word:"adapt", pos:"verb", ipa:"/əˈdæpt/", level:"B1", topic:"education", meaning_vn:"thích nghi, điều chỉnh", meaning_en:"to change your behaviour or ideas to suit a new situation", collocations:["adapt to change","adapt to a new environment","quickly adapt","adapt well"], examples:["Students must learn to adapt to different learning environments.","It takes time to adapt when you move to a new country."], synonyms:["adjust","alter","modify"] },
  { id:63, word:"aware", pos:"adjective", ipa:"/əˈweə(r)/", level:"A2", topic:"environment", meaning_vn:"nhận thức được, ý thức về", meaning_en:"knowing that something exists, or having knowledge or experience of a particular thing", collocations:["be aware of","environmentally aware","raise awareness","fully aware"], examples:["People need to be more aware of the impact of their actions on the environment.","The campaign aims to make young people aware of the dangers of pollution."], synonyms:["conscious","informed","knowledgeable"] },
  { id:64, word:"challenge", pos:"noun", ipa:"/ˈtʃælɪndʒ/", level:"A2", topic:"education", meaning_vn:"thách thức, khó khăn", meaning_en:"something that needs great mental or physical effort in order to be done successfully", collocations:["face a challenge","overcome challenges","major challenge","present a challenge"], examples:["Learning a foreign language is a challenge, but it is very rewarding.","Climate change is one of the biggest challenges facing humanity today."], synonyms:["difficulty","obstacle","test"] },
  { id:65, word:"communicate", pos:"verb", ipa:"/kəˈmjuːnɪkeɪt/", level:"A2", topic:"culture", meaning_vn:"giao tiếp, truyền đạt", meaning_en:"to share or exchange information, news, or ideas with someone", collocations:["communicate effectively","communicate clearly","communicate ideas","communicate in English"], examples:["The ability to communicate in English is highly valued by employers.","Technology has made it easier to communicate with people around the world."], synonyms:["convey","express","interact"] },
  { id:66, word:"concern", pos:"noun", ipa:"/kənˈsɜːn/", level:"B1", topic:"environment", meaning_vn:"mối lo ngại, sự quan tâm", meaning_en:"a feeling of worry about something, especially one that many people share", collocations:["major concern","environmental concern","express concern","cause for concern"], examples:["The rising sea level is a major concern for coastal communities.","Air pollution is a growing concern for public health in big cities."], synonyms:["worry","issue","problem"] },
  { id:67, word:"contribute", pos:"verb", ipa:"/kənˈtrɪbjuːt/", level:"B1", topic:"environment", meaning_vn:"đóng góp, góp phần", meaning_en:"to give something, such as money, help, or ideas, to a shared goal", collocations:["contribute to","contribute significantly","contribute resources","contribute ideas"], examples:["Everyone can contribute to protecting the environment in small ways.","Deforestation contributes significantly to greenhouse gas emissions."], synonyms:["add","give","donate"] },
  { id:68, word:"create", pos:"verb", ipa:"/kriˈeɪt/", level:"A1", topic:"technology", meaning_vn:"tạo ra, sáng tạo", meaning_en:"to make something new exist that did not exist before", collocations:["create opportunities","create jobs","create content","create awareness"], examples:["Technology can create new opportunities for people in rural areas.","The internet has created a global platform for sharing information."], synonyms:["make","produce","generate"] },
  { id:69, word:"cultural", pos:"adjective", ipa:"/ˈkʌltʃərəl/", level:"B1", topic:"culture", meaning_vn:"thuộc về văn hóa", meaning_en:"relating to the customs, ideas, values, etc. of a society or country", collocations:["cultural exchange","cultural identity","cultural differences","cultural event"], examples:["Cultural exchange programs help young people understand different perspectives.","Music is an important part of our cultural identity."], synonyms:["social","traditional","ethnic"] },
  { id:70, word:"decline", pos:"verb", ipa:"/dɪˈklaɪn/", level:"B1", topic:"environment", meaning_vn:"suy giảm, giảm sút", meaning_en:"to decrease in quality, quantity, or importance", collocations:["sharp decline","decline in numbers","gradual decline","economic decline"], examples:["The number of certain wild animals has declined dramatically in recent years.","Biodiversity is declining at an alarming rate due to human activity."], synonyms:["decrease","fall","drop"] },
  { id:71, word:"determined", pos:"adjective", ipa:"/dɪˈtɜːmɪnd/", level:"B1", topic:"education", meaning_vn:"quyết tâm, kiên quyết", meaning_en:"having made a firm decision to do something and not letting anything stop you", collocations:["highly determined","determined to succeed","determined effort","remain determined"], examples:["She was determined to pass the national exam despite many difficulties.","Determined students usually achieve better results than naturally talented but lazy ones."], synonyms:["resolute","committed","persistent"] },
  { id:72, word:"effective", pos:"adjective", ipa:"/ɪˈfektɪv/", level:"B1", topic:"education", meaning_vn:"có hiệu quả", meaning_en:"producing the result that is wanted or intended; working well", collocations:["effective method","highly effective","cost effective","effective solution"], examples:["Spaced repetition is one of the most effective methods for memorizing vocabulary.","Regular exercise is an effective way to improve both physical and mental health."], synonyms:["successful","efficient","productive"] },
  { id:73, word:"environment", pos:"noun", ipa:"/ɪnˈvaɪrənmənt/", level:"A2", topic:"environment", meaning_vn:"môi trường", meaning_en:"the natural world, especially as affected by human activity; the conditions that affect someone's life", collocations:["protect the environment","natural environment","school environment","healthy environment"], examples:["We must all take responsibility for protecting the environment.","A positive school environment helps students learn more effectively."], synonyms:["surroundings","habitat","nature"] },
  { id:74, word:"explore", pos:"verb", ipa:"/ɪkˈsplɔː(r)/", level:"A2", topic:"education", meaning_vn:"khám phá, tìm hiểu", meaning_en:"to travel through a place to learn about it; to think carefully about something", collocations:["explore opportunities","explore ideas","explore the world","explore a topic"], examples:["Students should explore different subjects before choosing a career path.","Technology allows us to explore the world from the comfort of our homes."], synonyms:["investigate","discover","examine"] },
  { id:75, word:"generate", pos:"verb", ipa:"/ˈdʒenəreɪt/", level:"B2", topic:"technology", meaning_vn:"tạo ra, sinh ra (điện, năng lượng)", meaning_en:"to produce or create something, such as electricity, profit, or interest", collocations:["generate electricity","generate income","generate ideas","generate heat"], examples:["Solar panels generate electricity from sunlight without producing emissions.","The new factory will generate hundreds of jobs in the local community."], synonyms:["produce","create","yield"] },
  { id:76, word:"impact", pos:"noun", ipa:"/ˈɪmpækt/", level:"B1", topic:"environment", meaning_vn:"tác động, ảnh hưởng", meaning_en:"the powerful effect that something has on a situation or person", collocations:["have an impact","environmental impact","negative impact","significant impact"], examples:["Human activities have a significant negative impact on the natural environment.","Social media has a huge impact on how young people see themselves."], synonyms:["effect","influence","consequence"] },
  { id:77, word:"opportunity", pos:"noun", ipa:"/ˌɒpəˈtjuːnɪti/", level:"A2", topic:"education", meaning_vn:"cơ hội", meaning_en:"a time when a particular situation makes it possible to do something or achieve something", collocations:["opportunity to learn","equal opportunity","take an opportunity","miss an opportunity"], examples:["Studying English opens up many opportunities for Vietnamese students.","Every failure is an opportunity to learn and grow stronger."], synonyms:["chance","possibility","opening"] },
  { id:78, word:"reduce", pos:"verb", ipa:"/rɪˈdjuːs/", level:"A2", topic:"environment", meaning_vn:"giảm, giảm bớt", meaning_en:"to make something smaller in size, amount, degree, importance, etc.", collocations:["reduce pollution","reduce waste","reduce costs","reduce carbon footprint"], examples:["We should all try to reduce the amount of plastic we use every day.","Renewable energy helps to reduce carbon emissions significantly."], synonyms:["decrease","cut","lower"] },
  { id:79, word:"research", pos:"noun", ipa:"/rɪˈsɜːtʃ/", level:"A2", topic:"education", meaning_vn:"nghiên cứu", meaning_en:"careful study of a subject, especially to discover new facts or test new ideas", collocations:["scientific research","conduct research","research findings","carry out research"], examples:["Research shows that bilingual students often outperform monolingual students.","New research suggests that exercise can improve memory and concentration."], synonyms:["investigation","study","inquiry"] },
  { id:80, word:"solution", pos:"noun", ipa:"/səˈluːʃn/", level:"A2", topic:"environment", meaning_vn:"giải pháp", meaning_en:"a way of solving a problem or dealing with a difficult situation", collocations:["find a solution","practical solution","long-term solution","innovative solution"], examples:["Finding sustainable solutions to environmental problems requires global cooperation.","There is no simple solution to the problem of climate change."], synonyms:["answer","resolution","remedy"] },
];

// ---- 14 GRAMMAR TOPICS ----
const GRAMMAR_TOPICS = [
  {
    id: 1,
    title: "Thì Động Từ (Tenses)",
    english: "Verb Tenses",
    emoji: "⏰",
    color: "#6366f1",
    quizCount: 5,
    formulas: [
      "Quá khứ đơn: S + V2/ed + O",
      "Quá khứ hoàn thành: S + had + V3/ed + O",
      "Hiện tại đơn (mệnh đề thời gian): When/After/Before + S + V(s/es)"
    ],
    explanation: "Thi THPT thường kiểm tra sự phối hợp thì giữa mệnh đề chính và mệnh đề phụ, đặc biệt là Quá khứ đơn – Quá khứ hoàn thành và mệnh đề thời gian với thì Tương lai.",
    tips: [
      "Thấy 'when/after/before/as soon as' + mệnh đề tương lai → dùng Hiện tại đơn ở mệnh đề phụ.",
      "Hành động xảy ra TRƯỚC một hành động khác trong quá khứ → dùng Quá khứ hoàn thành.",
      "Tín hiệu Quá khứ đơn: yesterday, last week, ago, in 2020."
    ],
    traps: [
      "Đừng viết: 'When she will come, I will tell her.' → Sai! Đúng: 'When she comes, I will tell her.'",
      "Đừng nhầm 'I have gone' (đã đi và chưa về) vs 'I have been' (đã từng đến)."
    ],
    examples: [
      { label: "VD1", text: "She <strong>had already left</strong> when we <strong>arrived</strong> at the party." },
      { label: "VD2", text: "I <strong>will call</strong> you as soon as I <strong>finish</strong> the exam." }
    ],
    quiz: [
      { question: "By the time we arrived, the film ___.", options: ["A. starts", "B. had already started", "C. has started", "D. will start"], answer: 1, explanation: "Hành động của film xảy ra TRƯỚC khi chúng ta đến → Quá khứ hoàn thành: 'had already started'." },
      { question: "When she __ home tomorrow, I will be cooking dinner.", options: ["A. will come", "B. comes", "C. came", "D. has come"], answer: 1, explanation: "Mệnh đề thời gian với 'when' ở tương lai → dùng Hiện tại đơn: 'comes'." },
      { question: "I ___ English for 5 years before I moved to the UK.", options: ["A. studied", "B. have studied", "C. had studied", "D. was studying"], answer: 2, explanation: "Khoảng thời gian TRƯỚC một mốc quá khứ → Quá khứ hoàn thành: 'had studied'." },
      { question: "He ___ in Hanoi since 2015.", options: ["A. lives", "B. lived", "C. has lived", "D. had lived"], answer: 2, explanation: "'Since 2015' + hành động từ quá khứ đến hiện tại → Hiện tại hoàn thành: 'has lived'." },
      { question: "After she ___ the letter, she felt much better.", options: ["A. reads", "B. read", "C. has read", "D. had read"], answer: 3, explanation: "Hành động đọc thư xảy ra TRƯỚC khi cảm thấy tốt hơn → Quá khứ hoàn thành: 'had read'." }
    ]
  },
  {
    id: 2,
    title: "Câu Bị Động (Passive Voice)",
    english: "Passive Voice",
    emoji: "🔄",
    color: "#8b5cf6",
    quizCount: 5,
    formulas: [
      "Bị động cơ bản: S + be (chia) + V3/ed + (by O)",
      "Have/Get sth done: S + have/get + O + V3/ed",
      "Truyền khiến (It is said that): It + is + said/believed/reported + that + S + V"
    ],
    explanation: "Câu bị động biến tân ngữ thành chủ ngữ. 'By + tác nhân' dùng khi cần biết ai thực hiện. Cấu trúc 'have sth done' diễn tả việc nhờ người khác làm.",
    tips: [
      "Xác định thì của câu chủ động → chia 'be' theo thì đó → V3/ed.",
      "'have sth done' = nhờ/thuê ai làm (I had my hair cut → Tôi đã cắt tóc (bởi thợ cắt tóc)).",
      "Chủ ngữ câu bị động = tân ngữ câu chủ động."
    ],
    traps: [
      "Đừng quên chia đúng 'be': am/is/are/was/were/has been/had been/will be.",
      "Đừng nhầm: 'It is said that he is rich' → Không phải 'It says that he is rich'."
    ],
    examples: [
      { label: "VD1", text: "A new bridge <strong>is being built</strong> across the river. (Hiện tại tiếp diễn bị động)" },
      { label: "VD2", text: "She <strong>had her car repaired</strong> yesterday. (Nhờ người sửa xe)" }
    ],
    quiz: [
      { question: "The letter ___ by the secretary right now.", options: ["A. types", "B. is typed", "C. is being typed", "D. was typed"], answer: 2, explanation: "'Right now' → Hiện tại tiếp diễn bị động: 'is being typed'." },
      { question: "She ___ her house painted last month.", options: ["A. had", "B. has", "C. got", "D. made"], answer: 0, explanation: "Cấu trúc 'have + O + V3' với thời gian quá khứ: 'had her house painted'." },
      { question: "It ___ that the economy will improve next year.", options: ["A. says", "B. is saying", "C. is said", "D. said"], answer: 2, explanation: "Cấu trúc 'It is said that' → bị động truyền khiến." },
      { question: "English ___ by millions of people all over the world.", options: ["A. speaks", "B. is spoken", "C. spoke", "D. is speaking"], answer: 1, explanation: "Sự thật hiện tại + bị động → 'is spoken'." },
      { question: "The report ___ before the deadline yesterday.", options: ["A. was submitted", "B. is submitted", "C. submits", "D. has submitted"], answer: 0, explanation: "'Yesterday' → Quá khứ đơn bị động: 'was submitted'." }
    ]
  },
  {
    id: 3,
    title: "Câu Điều Kiện & Ước (Conditionals & Wish)",
    english: "Conditionals & Wish",
    emoji: "🌟",
    color: "#06b6d4",
    quizCount: 5,
    formulas: [
      "Loại 1 (có thể): If + S + V(s/es), S + will/can + V",
      "Loại 2 (không có thật ở HT): If + S + V2/ed, S + would/could + V",
      "Loại 3 (không có thật ở QK): If + S + had + V3, S + would have + V3",
      "Ước (Wish): S + wish + S + V2 (ước HT) | had + V3 (ước QK)"
    ],
    explanation: "Câu điều kiện diễn tả các tình huống 'nếu... thì...'. Loại 1: thực tế. Loại 2: không có thật ở hiện tại. Loại 3: không có thật ở quá khứ.",
    tips: [
      "Thấy giả định ở hiện tại (không thật) → Loại 2: 'If I were...'.",
      "Thấy tiếc nuối quá khứ → Loại 3: 'If I had known...'.",
      "Thấy 'wish' → 'wish + V2' (ước hiện tại), 'wish + had + V3' (ước quá khứ)."
    ],
    traps: [
      "Câu điều kiện Loại 2: Dùng 'were' cho tất cả ngôi, kể cả 'I': 'If I were you...'.",
      "Đừng nhầm Loại 1 và Loại 2: Loại 1 → 'will', Loại 2 → 'would'."
    ],
    examples: [
      { label: "Loại 1", text: "If it <strong>rains</strong> tomorrow, we <strong>will cancel</strong> the picnic." },
      { label: "Loại 3", text: "If she <strong>had studied</strong> harder, she <strong>would have passed</strong> the exam." }
    ],
    quiz: [
      { question: "If I ___ you, I would accept the offer immediately.", options: ["A. am", "B. was", "C. were", "D. had been"], answer: 2, explanation: "Điều kiện Loại 2 không thật ở hiện tại → 'If I were you' (luôn dùng 'were')." },
      { question: "She wishes she ___ harder for the exam last week.", options: ["A. studies", "B. studied", "C. had studied", "D. would study"], answer: 2, explanation: "Ước tiếc về quá khứ → 'wish + had + V3': 'had studied'." },
      { question: "If they had left earlier, they ___ the train.", options: ["A. catch", "B. caught", "C. would catch", "D. would have caught"], answer: 3, explanation: "Điều kiện Loại 3 → mệnh đề chính: 'would have + V3'." },
      { question: "Unless you ___ studying, you will fail the test.", options: ["A. stop", "B. stops", "C. stopped", "D. will stop"], answer: 0, explanation: "'Unless' = 'If not' → dùng như điều kiện Loại 1: Hiện tại đơn." },
      { question: "I wish I ___ fly like a bird!", options: ["A. can", "B. could", "C. will", "D. would"], answer: 1, explanation: "Ước điều không có thật (hiện tại) → 'wish + could' (quá khứ của can)." }
    ]
  },
  {
    id: 4,
    title: "Câu Gián Tiếp (Reported Speech)",
    english: "Reported Speech",
    emoji: "💬",
    color: "#f59e0b",
    quizCount: 5,
    formulas: [
      "Câu trần thuật: S + said (that) + S + V (lùi thì)",
      "Câu hỏi Yes/No: S + asked + O + if/whether + S + V (lùi thì)",
      "Suggest + V-ing: He suggested going to the cinema.",
      "Apologize for + V-ing: She apologized for being late."
    ],
    explanation: "Khi chuyển sang gián tiếp: lùi thì, đổi đại từ nhân xưng, đổi trạng từ thời gian/nơi chốn. Một số động từ đặc biệt: suggest, deny, apologize, admit, recommend.",
    tips: [
      "Hiện tại đơn → Quá khứ đơn. Hiện tại hoàn thành → Quá khứ hoàn thành.",
      "today → that day, tomorrow → the next day, here → there.",
      "'suggest + V-ing', không nói 'suggest to do'."
    ],
    traps: [
      "Đừng quên đổi đại từ: 'I' → 'he/she', 'we' → 'they', 'you' → 'I/he/she'.",
      "'Deny + V-ing': 'He denied stealing the money' (không dùng 'to steal')."
    ],
    examples: [
      { label: "VD1", text: "\"I am tired,\" she said. → She said (that) she <strong>was</strong> tired." },
      { label: "VD2", text: "\"Let's go for a walk,\" he said. → He <strong>suggested going</strong> for a walk." }
    ],
    quiz: [
      { question: "\"I will help you,\" he said. → He said that he ___ help me.", options: ["A. will", "B. would", "C. shall", "D. should"], answer: 1, explanation: "'will' lùi thì thành 'would' trong câu gián tiếp." },
      { question: "He suggested ___ to the park after school.", options: ["A. go", "B. to go", "C. going", "D. went"], answer: 2, explanation: "'Suggest' + V-ing: 'suggested going'." },
      { question: "She apologized for ___ late to the meeting.", options: ["A. be", "B. to be", "C. being", "D. been"], answer: 2, explanation: "'Apologize for' + V-ing: 'apologized for being'." },
      { question: "\"Don't touch that!\" she told him. → She told him ___ touch that.", options: ["A. don't", "B. not to", "C. to not", "D. didn't"], answer: 1, explanation: "Câu mệnh lệnh phủ định → 'told + O + not to V'." },
      { question: "He asked me where I ___ the day before.", options: ["A. go", "B. went", "C. had gone", "D. have gone"], answer: 2, explanation: "Câu hỏi gián tiếp: 'went' lùi thành 'had gone'; 'yesterday' → 'the day before'." }
    ]
  },
  {
    id: 5,
    title: "Mệnh Đề Quan Hệ (Relative Clauses)",
    english: "Relative Clauses",
    emoji: "🔗",
    color: "#10b981",
    quizCount: 5,
    formulas: [
      "Xác định: S + [who/which/that + V] + O",
      "Không xác định: S, + [which/who/whom + V] + O",
      "Rút gọn: V-ing (chủ động), V3/ed (bị động), To-V (mục đích)"
    ],
    explanation: "Mệnh đề quan hệ xác định (không dùng dấu phẩy) → cần thiết để hiểu. Không xác định (có dấu phẩy) → thông tin thêm, không dùng 'that'.",
    tips: [
      "'That' không dùng trong mệnh đề quan hệ không xác định.",
      "Tiền ngữ là toàn bộ mệnh đề → dùng 'which'.",
      "Rút gọn: nếu chủ ngữ mệnh đề quan hệ = tiền ngữ → thay bằng V-ing/V3/ed."
    ],
    traps: [
      "Đừng dùng 'that' sau dấu phẩy hoặc sau giới từ.",
      "Đừng để thừa đại từ: 'The man whom I met him' → Sai! Bỏ 'him'."
    ],
    examples: [
      { label: "VD1", text: "The student <strong>who studies</strong> hardest usually gets the best results. (Xác định)" },
      { label: "Rút gọn", text: "The book <strong>written by</strong> that author is very popular. (V3 – bị động)" }
    ],
    quiz: [
      { question: "The woman ___ helped me was very kind.", options: ["A. which", "B. whom", "C. who", "D. whose"], answer: 2, explanation: "Tiền ngữ là người ('woman'), làm chủ ngữ → dùng 'who'." },
      { question: "This is the house ___ I was born.", options: ["A. where", "B. which", "C. that", "D. when"], answer: 0, explanation: "Tiền ngữ là nơi chốn ('house') → dùng 'where'." },
      { question: "He failed the exam, ___ surprised everyone.", options: ["A. that", "B. which", "C. who", "D. whom"], answer: 1, explanation: "Tiền ngữ là cả mệnh đề → dùng 'which'. Không dùng 'that' sau dấu phẩy." },
      { question: "The girl ___ we met yesterday is a famous singer.", options: ["A. who", "B. which", "C. whom", "D. whose"], answer: 2, explanation: "Tiền ngữ là người, làm tân ngữ ('we met her') → dùng 'whom'." },
      { question: "The book ___ by Shakespeare is still read today.", options: ["A. writing", "B. written", "C. that writes", "D. which writing"], answer: 1, explanation: "Rút gọn mệnh đề quan hệ bị động: 'written by' = 'which was written by'." }
    ]
  },
  {
    id: 6,
    title: "So Sánh (Comparisons)",
    english: "Comparisons",
    emoji: "⚖️",
    color: "#ec4899",
    quizCount: 5,
    formulas: [
      "Bằng nhau: S + V + as + adj/adv + as + O",
      "So sánh hơn: S + V + adj-er/more adj + than + O",
      "So sánh nhất: S + V + the + adj-est/most adj",
      "So sánh kép: The + more..., the + more..."
    ],
    explanation: "So sánh bằng dùng 'as...as'. So sánh hơn ngắn +er, dài hơn dùng 'more'. 'The more...the more' diễn tả hai thứ thay đổi cùng nhau.",
    tips: [
      "Tính từ 1 âm tiết: +er/+est. Hai âm tiết trở lên: more/most.",
      "Ngoại lệ: good-better-best, bad-worse-worst, far-further-furthest.",
      "'The harder you study, the better your results will be.'"
    ],
    traps: [
      "Đừng viết: 'more smarter' hoặc 'the most highest' — chọn 1 dạng thôi!",
      "'As soon as possible' ≠ 'as soon as you can possible'."
    ],
    examples: [
      { label: "VD1", text: "Hanoi is <strong>larger than</strong> most cities in Vietnam." },
      { label: "VD2", text: "<strong>The more</strong> you practice, <strong>the more</strong> confident you become." }
    ],
    quiz: [
      { question: "This exercise is ___ difficult than I expected.", options: ["A. much more", "B. much", "C. more much", "D. the most"], answer: 0, explanation: "'Much more' dùng để nhấn mạnh so sánh hơn: 'much more difficult'." },
      { question: "She is ___ student in the class.", options: ["A. the most hard-working", "B. the most hardworking", "C. hardworking the most", "D. the hardworkinger"], answer: 1, explanation: "'Hard-working' → so sánh nhất: 'the most hardworking'." },
      { question: "The weather today is not ___ warm ___ yesterday.", options: ["A. so / as", "B. as / as", "C. more / than", "D. as / so"], answer: 1, explanation: "So sánh bằng phủ định: 'not as...as'." },
      { question: "___ you study, ___ results you get.", options: ["A. The more / the better", "B. More / more better", "C. The most / the best", "D. More / better"], answer: 0, explanation: "So sánh kép: 'The more...the more/better'." },
      { question: "Vietnam's economy is growing ___ than ever before.", options: ["A. fast", "B. faster", "C. fastest", "D. more fast"], answer: 1, explanation: "'Fast' là tính từ 1 âm tiết → so sánh hơn: 'faster'." }
    ]
  },
  {
    id: 7,
    title: "Thức Giả Định (Subjunctive Mood)",
    english: "Subjunctive Mood",
    emoji: "💭",
    color: "#f97316",
    quizCount: 5,
    formulas: [
      "It is essential/important/necessary + that + S + (should) V",
      "Would rather + S + V2 (hơn là)",
      "It's (high/about) time + S + V2 (đã đến lúc)"
    ],
    explanation: "Thức giả định diễn tả điều thiết yếu, mong muốn, hay đã đến lúc cần làm. Sau các cụm trên, động từ ở dạng nguyên mẫu (V bare) hoặc V2.",
    tips: [
      "'It is essential that he come...' (không thêm 's') hoặc 'should come'.",
      "'Would rather' + Verb bareform (I) hoặc +V2 (someone else).",
      "'It's time' → dùng V2 (quá khứ đơn): 'It's time we left'."
    ],
    traps: [
      "Đừng viết: 'It's time you go home.' → Sai! Đúng: 'It's time you <strong>went</strong> home.'",
      "Would rather I + V2 (bày tỏ mong muốn người khác làm gì)."
    ],
    examples: [
      { label: "VD1", text: "It is vital that every student <strong>be</strong> on time for the exam." },
      { label: "VD2", text: "It's high time the government <strong>took</strong> action on climate change." }
    ],
    quiz: [
      { question: "It is important that every student ___ the rules.", options: ["A. follows", "B. follow", "C. followed", "D. will follow"], answer: 1, explanation: "Sau 'It is important that' → Subjunctive (V dạng nguyên mẫu, không thêm 's'): 'follow'." },
      { question: "I would rather you ___ smoking in this room.", options: ["A. don't", "B. didn't", "C. won't", "D. not"], answer: 1, explanation: "'Would rather + someone + V2' → 'didn't smoke'." },
      { question: "It's high time we ___ a solution to this problem.", options: ["A. find", "B. found", "C. had found", "D. have found"], answer: 1, explanation: "'It's high time' + V2: 'found'." },
      { question: "The doctor recommended that she ___ more rest.", options: ["A. gets", "B. got", "C. get", "D. will get"], answer: 2, explanation: "'Recommend that' + Subjunctive (V bare): 'get'." },
      { question: "She would rather ___ at home than go to the party.", options: ["A. stays", "B. stay", "C. stayed", "D. to stay"], answer: 1, explanation: "'Would rather' + V bare (cùng chủ ngữ): 'stay'." }
    ]
  },
  {
    id: 8,
    title: "Đảo Ngữ (Inversions)",
    english: "Inversions",
    emoji: "🔀",
    color: "#14b8a6",
    quizCount: 5,
    formulas: [
      "Hardly + had + S + V3/ed + when + S + V2/ed",
      "No sooner + had + S + V3/ed + than + S + V2/ed",
      "Not only + did/was + S + V + but + S + also + V",
      "Never/Seldom/Rarely + aux + S + V"
    ],
    explanation: "Đảo ngữ dùng để nhấn mạnh, thường xuất hiện khi có từ phủ định hoặc trạng ngữ đặc biệt ở đầu câu. Cấu trúc câu bị đảo ngược giống câu hỏi.",
    tips: [
      "Thấy 'Hardly/No sooner/Not only/Never/Seldom' đầu câu → Đảo ngữ với trợ động từ.",
      "'Hardly...when' và 'No sooner...than' nghĩa giống nhau (vừa mới... thì...).",
      "Đảo ngữ thường dùng trong văn viết trang trọng và đề thi."
    ],
    traps: [
      "Đừng nhầm 'Hardly ever' (hiếm khi) với đảo ngữ 'Hardly had...'.",
      "Thứ tự: trợ động từ + S + V chính (không dùng dạng đầy đủ)."
    ],
    examples: [
      { label: "VD1", text: "<strong>Hardly had</strong> she arrived <strong>when</strong> the phone rang." },
      { label: "VD2", text: "<strong>Not only did</strong> he fail the test, but he also forgot to submit his homework." }
    ],
    quiz: [
      { question: "Hardly ___ I arrived home when it started to rain.", options: ["A. have", "B. had", "C. did", "D. was"], answer: 1, explanation: "'Hardly had + S + V3' → 'had I arrived'." },
      { question: "No sooner ___ he sat down than the phone rang.", options: ["A. had", "B. has", "C. did", "D. was"], answer: 0, explanation: "'No sooner had + S + V3 + than' → 'had he sat down'." },
      { question: "Not only ___ he study hard, but he also helped others.", options: ["A. does", "B. did", "C. had", "D. was"], answer: 1, explanation: "'Not only did' dùng trong quá khứ đơn: 'Not only did he study'." },
      { question: "Never ___ I seen such a beautiful sunset before.", options: ["A. did", "B. have", "C. had", "D. was"], answer: 2, explanation: "'Never + had + S + V3' → Quá khứ hoàn thành đảo ngữ." },
      { question: "___ had she finished her exam when she burst into tears.", options: ["A. No sooner", "B. Hardly", "C. Rarely", "D. Never"], answer: 1, explanation: "'Hardly had...when' = vừa mới xong thì..." }
    ]
  },
  {
    id: 9,
    title: "Động Từ Khuyết Thiếu (Modal Verbs)",
    english: "Modal Verbs",
    emoji: "🎯",
    color: "#6366f1",
    quizCount: 5,
    formulas: [
      "Must have V3: chắc chắn đã... (đoán HT về QK)",
      "Can't have V3: chắc chắn đã không... (phủ định chắc chắn QK)",
      "Should have V3: lẽ ra phải... (tiếc nuối QK)",
      "Could have V3: đáng lẽ có thể... (khả năng bỏ lỡ)"
    ],
    explanation: "Modal Perfect (Modal + have + V3) diễn tả đoán chắc, thái độ, hay hoàn cảnh về quá khứ. Đây là điểm thường ra trong đề THPT.",
    tips: [
      "'Must have been' → Chắc chắn đã là (đoán logic về quá khứ).",
      "'Should have done' → Lẽ ra phải làm (nhưng không làm, tiếc nuối).",
      "'Can't have done' → Phủ định chắc chắn: chắc chắn đã không làm."
    ],
    traps: [
      "Đừng nhầm: 'must have' (đoán chắc) vs 'had to' (bắt buộc).",
      "'Should have done' ≠ 'should do': một cái về quá khứ, một cái về hiện tại/tương lai."
    ],
    examples: [
      { label: "VD1", text: "She wasn't at the party. She <strong>must have been</strong> sick." },
      { label: "VD2", text: "You <strong>should have studied</strong> harder for the exam. (Lẽ ra...)" }
    ],
    quiz: [
      { question: "The lights are on. Someone ___ in the house.", options: ["A. must be", "B. must have been", "C. should be", "D. can be"], answer: 0, explanation: "Đoán chắc về hiện tại (lights are on NOW) → 'must be'." },
      { question: "She didn't win the race. She ___ faster.", options: ["A. should run", "B. must have run", "C. should have run", "D. could run"], answer: 2, explanation: "Tiếc nuối về quá khứ → 'should have run'." },
      { question: "He ___ the keys. He never loses anything.", options: ["A. must lose", "B. can't have lost", "C. mustn't have lost", "D. shouldn't lose"], answer: 1, explanation: "Phủ định chắc chắn về quá khứ → 'can't have lost'." },
      { question: "___ you help me with this exercise, please?", options: ["A. Must", "B. Should", "C. Could", "D. Might"], answer: 2, explanation: "'Could' dùng để nhờ vả lịch sự: 'Could you help me?'" },
      { question: "You look exhausted. You ___ all night.", options: ["A. must study", "B. must have studied", "C. should study", "D. had studied"], answer: 1, explanation: "Đoán chắc về quá khứ dựa trên bằng chứng hiện tại → 'must have studied'." }
    ]
  },
  {
    id: 10,
    title: "Mạo Từ & Giới Từ (Articles & Prepositions)",
    english: "Articles & Prepositions",
    emoji: "📌",
    color: "#64748b",
    quizCount: 5,
    formulas: [
      "A/An: lần đầu đề cập, không xác định (a dog, an apple)",
      "The: đã biết, duy nhất, cần xác định",
      "Zero article: tên riêng, môn học, bữa ăn, ngôn ngữ",
      "Prepositions: at night/noon, in the morning, on Monday"
    ],
    explanation: "Mạo từ và giới từ là những điểm dễ nhầm lẫn. 'The' dùng khi cả người nói và người nghe đều biết. Giới từ theo cụm cố định phải học thuộc.",
    tips: [
      "Tên sông, biển, dãy núi, nhạc cụ → dùng 'the': the Mekong river, the piano.",
      "Tên nước, tên người → KHÔNG dùng 'the': Vietnam (không phải 'the Vietnam').",
      "Phân biệt: interested IN, afraid OF, good AT, famous FOR."
    ],
    traps: [
      "'The United States', 'the Philippines' — có 'the' vì là tên tập hợp.",
      "Đừng nhầm: 'in time' (kịp giờ) vs 'on time' (đúng giờ)."
    ],
    examples: [
      { label: "VD1", text: "I saw <strong>a</strong> cat in the garden. <strong>The</strong> cat was white." },
      { label: "VD2", text: "She is very good <strong>at</strong> mathematics and interested <strong>in</strong> science." }
    ],
    quiz: [
      { question: "___ Nile is the longest river in Africa.", options: ["A. A", "B. An", "C. The", "D. (no article)"], answer: 2, explanation: "Tên sông dùng 'the': 'The Nile'." },
      { question: "She plays ___ piano very beautifully.", options: ["A. a", "B. an", "C. the", "D. (no article)"], answer: 2, explanation: "Tên nhạc cụ dùng 'the': 'play the piano'." },
      { question: "He is interested ___ learning new languages.", options: ["A. at", "B. in", "C. on", "D. about"], answer: 1, explanation: "Cụm cố định: 'interested in'." },
      { question: "The train will arrive ___ time if there are no delays.", options: ["A. in", "B. on", "C. at", "D. by"], answer: 1, explanation: "'On time' = đúng giờ theo lịch trình." },
      { question: "She is good ___ English but poor ___ Mathematics.", options: ["A. in/in", "B. at/at", "C. at/in", "D. in/at"], answer: 1, explanation: "'Good at' và 'poor at' là cụm cố định." }
    ]
  },
  {
    id: 11,
    title: "Liên Từ (Conjunctions)",
    english: "Conjunctions",
    emoji: "🔌",
    color: "#22c55e",
    quizCount: 5,
    formulas: [
      "Because + S + V (vì), Because of + N/V-ing",
      "Although/Though/Even though + S + V (mặc dù)",
      "Despite/In spite of + N/V-ing (mặc dù)",
      "Therefore/As a result/Consequently (vì vậy)"
    ],
    explanation: "Liên từ nối các ý, mệnh đề. Cần phân biệt liên từ đi trước mệnh đề (Because, Although) và giới từ đi trước danh từ/V-ing (Because of, Despite).",
    tips: [
      "Because + S+V / Because of + Noun: 'Because it rained' vs 'Because of the rain'.",
      "Although + S+V / Despite + N/V-ing: 'Although she was tired' vs 'Despite being tired'.",
      "'However' và 'Nevertheless' đứng đầu câu, theo sau là dấu phẩy."
    ],
    traps: [
      "Đừng nhầm 'despite of' — KHÔNG có dạng này! Chỉ có 'despite' (không có 'of').",
      "Đừng dùng 'although' và 'but' cùng lúc trong một câu."
    ],
    examples: [
      { label: "VD1", text: "<strong>Despite</strong> being tired, she continued to study. (Despite + V-ing)" },
      { label: "VD2", text: "<strong>Although</strong> it was cold, they went swimming. (Although + S+V)" }
    ],
    quiz: [
      { question: "___ his poor health, he still works very hard.", options: ["A. Although", "B. Despite", "C. Because", "D. Even though"], answer: 1, explanation: "'Despite' + N/V-ing: 'Despite his poor health'." },
      { question: "She passed the exam ___ she was sick.", options: ["A. because of", "B. despite", "C. although", "D. in spite of"], answer: 2, explanation: "'Although' + S+V clause." },
      { question: "He failed the test. ___, he tried again.", options: ["A. However", "B. Although", "C. Despite", "D. Because"], answer: 0, explanation: "'However' diễn tả sự tương phản, đứng đầu câu mới." },
      { question: "___ the heavy traffic, she arrived on time.", options: ["A. Although", "B. Because", "C. In spite of", "D. Even though"], answer: 2, explanation: "'In spite of' + N/V-ing = 'Despite'." },
      { question: "He studied hard; ___, he failed.", options: ["A. therefore", "B. however", "C. because", "D. although"], answer: 1, explanation: "'However' diễn tả nghịch lý sau dấu chấm phẩy." }
    ]
  },
  {
    id: 12,
    title: "Cấu Tạo Từ (Word Formation)",
    english: "Word Formation",
    emoji: "🏗️",
    color: "#a855f7",
    quizCount: 5,
    formulas: [
      "Danh từ: -tion, -ment, -ness, -er, -ist, -ity",
      "Động từ: -ize, -ify, -en",
      "Tính từ: -ful, -less, -ous, -able, -al, -ic",
      "Trạng từ: Adj + -ly"
    ],
    explanation: "Nhận biết vị trí của từ trong câu để xác định từ loại đúng. Chủ ngữ/Tân ngữ → Danh từ. Sau trợ động từ → Động từ. Trước danh từ → Tính từ. Sau động từ → Trạng từ.",
    tips: [
      "Sau 'be', 'seem', 'become' → Tính từ: 'She is beautiful'.",
      "Trước danh từ → Tính từ. Sau động từ hành động → Trạng từ.",
      "Học các tiền tố: un- (bất), dis- (phủ), im- (không), re- (lại)."
    ],
    traps: [
      "Đừng nhầm: 'a beauty' (danh từ) vs 'beautiful' (tính từ) vs 'beautifully' (trạng từ).",
      "'Economic' (thuộc kinh tế) vs 'economical' (tiết kiệm) — khác nghĩa!"
    ],
    examples: [
      { label: "VD1", text: "The <strong>development</strong> (develop → development) of technology has changed our lives." },
      { label: "VD2", text: "She plays the piano <strong>beautifully</strong>. (beautiful → beautifully)" }
    ],
    quiz: [
      { question: "The ___ of the new bridge will create jobs. (construct)", options: ["A. construct", "B. constructive", "C. construction", "D. constructor"], answer: 2, explanation: "Chủ ngữ câu → cần danh từ: 'construction'." },
      { question: "He ___ solved the problem. (real)", options: ["A. real", "B. really", "C. reality", "D. realize"], answer: 1, explanation: "Bổ nghĩa cho động từ → trạng từ: 'really'." },
      { question: "The weather was ___ yesterday. (beauty)", options: ["A. beauty", "B. beautifully", "C. beautiful", "D. beautify"], answer: 2, explanation: "Sau 'was' → tính từ: 'beautiful'." },
      { question: "She showed great ___ in her work. (dedicated)", options: ["A. dedicate", "B. dedicated", "C. dedication", "D. dedicatedly"], answer: 2, explanation: "Sau 'great' → danh từ: 'dedication'." },
      { question: "It is ___ to recycle plastic bottles. (necessity)", options: ["A. necessity", "B. necessary", "C. necessarily", "D. necessitate"], answer: 1, explanation: "Sau 'is' → tính từ: 'necessary'." }
    ]
  },
  {
    id: 13,
    title: "Collocation – Cụm Từ Cố Định",
    english: "Collocations",
    emoji: "🎪",
    color: "#f43f5e",
    quizCount: 5,
    formulas: [
      "Make: make an effort, make a decision, make progress",
      "Do: do harm, do damage, do the dishes, do research",
      "Take: take action, take place, take advantage",
      "Have: have an impact, have a conversation, have fun"
    ],
    explanation: "Collocation là những từ thường đi kèm tự nhiên với nhau. Đây là điểm phân loại học sinh giỏi trong đề THPT, thường ra ở dạng từ đồng nghĩa hoặc điền từ.",
    tips: [
      "'Make' thường đi với danh từ trừu tượng: decision, progress, effort.",
      "'Do' thường đi với hoạt động: homework, research, business.",
      "Học theo cụm, không học từng từ đơn lẻ."
    ],
    traps: [
      "'Do an effort' → Sai! Đúng: 'make an effort'.",
      "'Make a research' → Sai! Đúng: 'do research' (không có mạo từ)."
    ],
    examples: [
      { label: "VD1", text: "We need to <strong>make an effort</strong> to reduce our carbon footprint." },
      { label: "VD2", text: "Scientists <strong>do research</strong> to find cures for dangerous diseases." }
    ],
    quiz: [
      { question: "He ___ a mistake in the final exam.", options: ["A. did", "B. made", "C. had", "D. took"], answer: 1, explanation: "'Make a mistake' (không phải 'do a mistake')." },
      { question: "The accident ___ place yesterday evening.", options: ["A. made", "B. did", "C. took", "D. had"], answer: 2, explanation: "'Take place' = xảy ra." },
      { question: "We must ___ action against pollution immediately.", options: ["A. make", "B. take", "C. do", "D. have"], answer: 1, explanation: "'Take action' = hành động." },
      { question: "Smoking can ___ serious harm to your health.", options: ["A. make", "B. have", "C. do", "D. take"], answer: 2, explanation: "'Do harm' = gây hại." },
      { question: "She ___ great progress in her English studies.", options: ["A. did", "B. made", "C. took", "D. had"], answer: 1, explanation: "'Make progress' = tiến bộ." }
    ]
  },
  {
    id: 14,
    title: "Idioms & Phrasal Verbs",
    english: "Idioms & Phrasal Verbs",
    emoji: "🦋",
    color: "#0ea5e9",
    quizCount: 5,
    formulas: [
      "Phrasal Verbs: V + particle (có thể tách hoặc không)",
      "Common: take off, put off, look up to, give up, set up",
      "Idioms: break the ice, hit the books, under the weather"
    ],
    explanation: "Phrasal verb là động từ + giới từ/phó từ có nghĩa khác nghĩa đen. Idioms là thành ngữ cố định. Cả hai thường ra trong phần từ đồng nghĩa và đọc hiểu THPT.",
    tips: [
      "'Take off': máy bay cất cánh / cởi ra / thành công nhanh.",
      "'Put off': trì hoãn. 'Give up': từ bỏ. 'Look up to': ngưỡng mộ.",
      "Học theo ngữ cảnh, không chỉ học nghĩa đen."
    ],
    traps: [
      "'Look after' (chăm sóc) ≠ 'look for' (tìm kiếm) ≠ 'look up to' (ngưỡng mộ).",
      "Phrasal verb tách được: 'turn off the light' = 'turn the light off'."
    ],
    examples: [
      { label: "VD1", text: "Don't <strong>put off</strong> until tomorrow what you can do today. (trì hoãn)" },
      { label: "VD2", text: "She really <strong>looks up to</strong> her English teacher. (ngưỡng mộ, kính trọng)" }
    ],
    quiz: [
      { question: "He ___ smoking after his doctor's advice.", options: ["A. gave up", "B. gave away", "C. gave in", "D. gave out"], answer: 0, explanation: "'Give up' = từ bỏ (thói quen, hoạt động)." },
      { question: "The meeting was ___ because of the storm.", options: ["A. put off", "B. put up", "C. put on", "D. put in"], answer: 0, explanation: "'Put off' = postpone = trì hoãn." },
      { question: "The plane ___ on time despite the foggy weather.", options: ["A. took off", "B. broke down", "C. set off", "D. turned up"], answer: 0, explanation: "'Take off' = cất cánh (máy bay)." },
      { question: "She ___ her older sister and wants to be a doctor too.", options: ["A. looks after", "B. looks up to", "C. looks into", "D. looks for"], answer: 1, explanation: "'Look up to' = kính trọng, coi là thần tượng." },
      { question: "He's feeling ___ the weather, so he couldn't come to school.", options: ["A. over", "B. under", "C. with", "D. in"], answer: 1, explanation: "'Under the weather' = không khỏe (idiom)." }
    ]
  }
];

// ---- EXAM QUESTIONS ----
const EXAM_QUESTIONS = {
  fill_in: [
    { id:1, passage:"Technology has (1)___ the way we communicate. Social media (2)___ people connect with others across the world. However, there are also (3)___ effects such as (4)___ of privacy. Therefore, it is (5)___ to use technology wisely.", blanks:["transformed","helps","negative","loss","essential"] },
  ],
  multiple_choice: [
    { id:1, question:"Choose the word that best completes the sentence: 'Students should ___ more time to reading books outside school.'", options:["A. spend", "B. spent", "C. spending", "D. to spend"], answer:0, explanation:"Modal 'should' + V bare: 'should spend'." },
    { id:2, question:"The report stated that deforestation ___ a major threat to biodiversity.", options:["A. was", "B. is", "C. has been", "D. will be"], answer:0, explanation:"Câu gián tiếp, lùi thì từ 'is' thành 'was'." },
    { id:3, question:"___ the difficulties, the students managed to complete the project ahead of time.", options:["A. Although", "B. Because", "C. Despite", "D. However"], answer:2, explanation:"'Despite' + N: 'despite the difficulties'." },
    { id:4, question:"Hardly ___ the teacher entered the classroom when the bell rang.", options:["A. has", "B. had", "C. did", "D. was"], answer:1, explanation:"Đảo ngữ 'Hardly had + S + V3'." },
    { id:5, question:"The environment ___ by pollution if immediate action is not taken.", options:["A. will be destroyed", "B. is destroyed", "C. destroys", "D. has destroyed"], answer:0, explanation:"Dự đoán tương lai bị động: 'will be destroyed'." },
    { id:6, question:"She wishes she ___ to the concert last night.", options:["A. goes", "B. went", "C. had gone", "D. has gone"], answer:2, explanation:"Ước tiếc về quá khứ: 'wish + had + V3'." },
    { id:7, question:"The museum, ___ was built in 1950, attracts thousands of tourists each year.", options:["A. that", "B. who", "C. which", "D. where"], answer:2, explanation:"Mệnh đề quan hệ không xác định (có dấu phẩy) → 'which', không dùng 'that'." },
    { id:8, question:"It is essential that every citizen ___ aware of environmental issues.", options:["A. is", "B. are", "C. be", "D. being"], answer:2, explanation:"'It is essential that' + Subjunctive (V bare): 'be'." },
    { id:9, question:"He must have ___ very hard to finish the project in one day.", options:["A. work", "B. worked", "C. working", "D. to work"], answer:1, explanation:"'Must have' + V3: 'must have worked' (đoán chắc về quá khứ)." },
    { id:10, question:"Not only ___ she win the first prize, but she also got a scholarship.", options:["A. does", "B. did", "C. had", "D. has"], answer:1, explanation:"'Not only did' + đảo ngữ (quá khứ)." },

    // Reading comprehension questions
    { id:11, question:"The word 'biodiversity' in paragraph 1 is closest in meaning to:", options:["A. variety of species in an ecosystem", "B. number of plants in a garden", "C. protection of rare animals", "D. study of biology"], answer:0, explanation:"Biodiversity = variety of life in a given area." },
    { id:12, question:"According to the passage, what is the main cause of deforestation?", options:["A. Natural disasters like floods and fire", "B. Human activities such as farming and logging", "C. Climate change and rising temperatures", "D. Disease spreading among trees"], answer:1, explanation:"Đọc hiểu: nguyên nhân chính của phá rừng là hoạt động con người." },
    { id:13, question:"The author's attitude towards renewable energy is:", options:["A. Strongly negative", "B. Indifferent", "C. Cautiously optimistic", "D. Extremely skeptical"], answer:2, explanation:"Tác giả ủng hộ năng lượng tái tạo một cách thận trọng." },
    { id:14, question:"What does the phrase 'make an effort' mean?", options:["A. To try hard", "B. To create a problem", "C. To ignore something", "D. To make a plan"], answer:0, explanation:"'Make an effort' = cố gắng, nỗ lực." },
    { id:15, question:"Choose the sentence that is grammatically CORRECT:", options:["A. The team have did their best in the match.", "B. The team has done their best in the match.", "C. The team done their best in the match.", "D. The team doing their best in the match."], answer:1, explanation:"Present perfect: 'has done'." },

    { id:16, question:"The word 'implement' in the context of education means:", options:["A. To ignore", "B. To carry out or put into action", "C. To remove from use", "D. To study carefully"], answer:1, explanation:"'Implement' = triển khai, thực hiện." },
    { id:17, question:"If the government ___ more in education, the country would develop faster.", options:["A. invests", "B. invested", "C. had invested", "D. will invest"], answer:1, explanation:"Điều kiện Loại 2 (không thật ở hiện tại): 'If + V2, would + V'." },
    { id:18, question:"She suggested ___ the meeting to next week due to the busy schedule.", options:["A. postpone", "B. to postpone", "C. postponing", "D. postponed"], answer:2, explanation:"'Suggest' + V-ing: 'suggested postponing'." },
    { id:19, question:"Choose the correct word form: 'Her performance was ___.' (impress)", options:["A. impress", "B. impressive", "C. impressively", "D. impression"], answer:1, explanation:"Sau 'was' → tính từ: 'impressive'." },
    { id:20, question:"The new law aims to ___ carbon emissions by 50% before 2030.", options:["A. increase", "B. produce", "C. reduce", "D. maintain"], answer:2, explanation:"'Reduce emissions' = giảm lượng khí thải — collocation chuẩn." }
  ]
};

// ---- WORD OF THE DAY / GRAMMAR OF THE DAY (daily rotation) ----
function getTodaysWord() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return VOCABULARY[dayOfYear % VOCABULARY.length];
}

function getTodaysGrammar() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return GRAMMAR_TOPICS[dayOfYear % GRAMMAR_TOPICS.length];
}

// ---- SEARCH INDEX ----
function buildSearchIndex() {
  return VOCABULARY.map(w => ({
    ...w,
    searchText: `${w.word} ${w.meaning_vn} ${w.meaning_en} ${w.pos} ${w.topic}`.toLowerCase()
  }));
}

const SEARCH_INDEX = buildSearchIndex();
