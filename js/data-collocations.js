// ============================================================
// DATA-COLLOCATIONS.JS — Collocations by Topic + Sample Essays
// ============================================================

const COLLOCATION_TOPICS = [
  {
    id: 'education',
    title: 'Education',
    icon: '\ud83c\udf93',
    subtopics: [
      {
        id: 'edu-school',
        title: 'Tr\u01b0\u1eddng h\u1ecdc & L\u1edbp h\u1ecdc',
        collocations: [
          { phrase: 'attend school', meaning: '\u0111\u1ebfn tr\u01b0\u1eddng', example: 'All children must attend school until the age of 16.' },
          { phrase: 'take an exam', meaning: 'thi, l\u00e0m b\u00e0i thi', example: 'Students will take an exam at the end of the semester.' },
          { phrase: 'pass/fail an exam', meaning: '\u0111\u1ed7/tr\u01b0\u1ee3t k\u1ef3 thi', example: 'She studied hard and passed the exam with flying colors.' },
          { phrase: 'do homework', meaning: 'l\u00e0m b\u00e0i t\u1eadp', example: 'He always does his homework before dinner.' },
          { phrase: 'pay attention', meaning: 'ch\u00fa \u00fd', example: 'Please pay attention to the teacher\'s instructions.' },
          { phrase: 'make progress', meaning: '\u0111\u1ea1t ti\u1ebfn b\u1ed9', example: 'She has made great progress in English this year.' },
          { phrase: 'gain knowledge', meaning: '\u0111\u1ea1t \u0111\u01b0\u1ee3c ki\u1ebfn th\u1ee9c', example: 'Reading helps us gain knowledge about the world.' },
          { phrase: 'academic performance', meaning: 'k\u1ebft qu\u1ea3 h\u1ecdc t\u1eadp', example: 'His academic performance has improved significantly.' },
          { phrase: 'drop out of school', meaning: 'b\u1ecf h\u1ecdc', example: 'Many children in rural areas drop out of school early.' },
          { phrase: 'school curriculum', meaning: 'ch\u01b0\u01a1ng tr\u00ecnh h\u1ecdc', example: 'The school curriculum includes both academic and practical subjects.' }
        ],
        essay: {
          title: 'T\u1ea7m quan tr\u1ecdng c\u1ee7a gi\u00e1o d\u1ee5c',
          content: 'Education plays a vital role in shaping an individual\'s future and the development of society. When students attend school regularly, they gain knowledge and develop essential skills for their careers. Academic performance is not the only measure of success; learning to pay attention, make progress, and overcome challenges are equally important life skills.\n\nHowever, many students in developing countries still drop out of school due to financial difficulties. This is a serious problem because without education, they cannot break the cycle of poverty. The school curriculum should be designed to not only prepare students for exams but also equip them with practical skills for real-life situations.\n\nIn conclusion, education is the foundation of personal growth and social progress. Every child deserves the opportunity to attend school and reach their full potential.'
        }
      },
      {
        id: 'edu-career',
        title: 'Ngh\u1ec1 nghi\u1ec7p & T\u01b0\u01a1ng lai',
        collocations: [
          { phrase: 'pursue a career', meaning: 'theo \u0111u\u1ed5i s\u1ef1 nghi\u1ec7p', example: 'She decided to pursue a career in medicine.' },
          { phrase: 'earn a living', meaning: 'ki\u1ebfm s\u1ed1ng', example: 'It is difficult to earn a living without proper qualifications.' },
          { phrase: 'job opportunity', meaning: 'c\u01a1 h\u1ed9i vi\u1ec7c l\u00e0m', example: 'Big cities offer more job opportunities than rural areas.' },
          { phrase: 'apply for a job', meaning: 'n\u1ed9p \u0111\u01a1n xin vi\u1ec7c', example: 'He applied for a job at several companies after graduation.' },
          { phrase: 'gain experience', meaning: 'tích l\u0169y kinh nghi\u1ec7m', example: 'Internships help students gain experience before entering the workforce.' },
          { phrase: 'set goals', meaning: '\u0111\u1eb7t m\u1ee5c ti\u00eau', example: 'It is important to set goals for your future career.' },
          { phrase: 'achieve success', meaning: '\u0111\u1ea1t \u0111\u01b0\u1ee3c th\u00e0nh c\u00f4ng', example: 'Hard work and determination are key to achieving success.' },
          { phrase: 'professional development', meaning: 'ph\u00e1t tri\u1ec3n chuy\u00ean m\u00f4n', example: 'Companies should invest in professional development for their employees.' }
        ],
        essay: {
          title: 'Chu\u1ea9n b\u1ecb cho s\u1ef1 nghi\u1ec7p t\u01b0\u01a1ng lai',
          content: 'Choosing the right career path is one of the most important decisions in a person\'s life. To pursue a career successfully, students need to set clear goals and work towards them consistently. Education provides the foundation, but gaining experience through internships and part-time jobs is equally valuable.\n\nIn today\'s competitive job market, having qualifications alone is not enough. Employers look for candidates who can demonstrate professional development, problem-solving skills, and the ability to work in teams. Therefore, students should actively seek job opportunities and apply for positions that align with their interests and strengths.\n\nUltimately, achieving success requires dedication, continuous learning, and the willingness to adapt to new challenges. Those who earn a living doing what they love are truly fortunate.'
        }
      }
    ]
  },
  {
    id: 'environment',
    title: 'Environment',
    icon: '\ud83c\udf0d',
    subtopics: [
      {
        id: 'env-pollution',
        title: '\u00d4 nhi\u1ec5m M\u00f4i tr\u01b0\u1eddng',
        collocations: [
          { phrase: 'air pollution', meaning: '\u00f4 nhi\u1ec5m kh\u00f4ng kh\u00ed', example: 'Air pollution is a major problem in many large cities.' },
          { phrase: 'greenhouse gases', meaning: 'kh\u00ed nh\u00e0 k\u00ednh', example: 'Greenhouse gases contribute to global warming.' },
          { phrase: 'carbon emissions', meaning: 'kh\u00ed th\u1ea3i carbon', example: 'We need to reduce carbon emissions to slow down climate change.' },
          { phrase: 'toxic waste', meaning: 'ch\u1ea5t th\u1ea3i \u0111\u1ed9c h\u1ea1i', example: 'Factories must not dump toxic waste into rivers.' },
          { phrase: 'pollute the environment', meaning: 'g\u00e2y \u00f4 nhi\u1ec5m m\u00f4i tr\u01b0\u1eddng', example: 'Burning fossil fuels pollutes the environment.' },
          { phrase: 'environmental impact', meaning: 't\u00e1c \u0111\u1ed9ng m\u00f4i tr\u01b0\u1eddng', example: 'Every product has an environmental impact.' },
          { phrase: 'global warming', meaning: 's\u1ef1 n\u00f3ng l\u00ean to\u00e0n c\u1ea7u', example: 'Global warming is causing ice caps to melt rapidly.' },
          { phrase: 'climate change', meaning: 'bi\u1ebfn \u0111\u1ed5i kh\u00ed h\u1eadu', example: 'Climate change threatens biodiversity worldwide.' }
        ],
        essay: {
          title: '\u00d4 nhi\u1ec5m m\u00f4i tr\u01b0\u1eddng v\u00e0 gi\u1ea3i ph\u00e1p',
          content: 'Environmental pollution has become one of the most pressing issues of our time. Air pollution from factories and vehicles releases greenhouse gases into the atmosphere, contributing to global warming. Meanwhile, toxic waste from industrial activities contaminates water sources and soil, harming both wildlife and human health.\n\nThe environmental impact of human activities is evident everywhere: rising temperatures, melting ice caps, and extreme weather events are all consequences of climate change. Carbon emissions continue to increase despite international agreements to reduce them.\n\nTo address this crisis, governments must enforce stricter regulations on industries that pollute the environment. Individuals can also make a difference by reducing waste, using public transport, and supporting renewable energy. Only through collective action can we hope to protect our planet for future generations.'
        }
      },
      {
        id: 'env-nature',
        title: 'B\u1ea3o v\u1ec7 Thi\u00ean nhi\u00ean',
        collocations: [
          { phrase: 'protect the environment', meaning: 'b\u1ea3o v\u1ec7 m\u00f4i tr\u01b0\u1eddng', example: 'We all have a responsibility to protect the environment.' },
          { phrase: 'renewable energy', meaning: 'n\u0103ng l\u01b0\u1ee3ng t\u00e1i t\u1ea1o', example: 'Solar and wind power are forms of renewable energy.' },
          { phrase: 'natural resources', meaning: 't\u00e0i nguy\u00ean thi\u00ean nhi\u00ean', example: 'We must use natural resources wisely.' },
          { phrase: 'endangered species', meaning: 'lo\u00e0i c\u00f3 nguy c\u01a1 tuy\u1ec7t ch\u1ee7ng', example: 'Many endangered species are losing their habitats.' },
          { phrase: 'wildlife conservation', meaning: 'b\u1ea3o t\u1ed3n \u0111\u1ed9ng v\u1eadt hoang d\u00e3', example: 'Wildlife conservation programs have helped save many species.' },
          { phrase: 'plant trees', meaning: 'tr\u1ed3ng c\u00e2y', example: 'Communities should plant trees to improve air quality.' },
          { phrase: 'reduce waste', meaning: 'gi\u1ea3m r\u00e1c th\u1ea3i', example: 'Recycling helps reduce waste in landfills.' },
          { phrase: 'sustainable development', meaning: 'ph\u00e1t tri\u1ec3n b\u1ec1n v\u1eefng', example: 'Sustainable development balances economic growth with environmental protection.' }
        ],
        essay: {
          title: 'B\u1ea3o v\u1ec7 thi\u00ean nhi\u00ean cho th\u1ebf h\u1ec7 t\u01b0\u01a1ng lai',
          content: 'The natural world provides us with everything we need to survive: clean air, fresh water, food, and natural resources. However, human activities are destroying the very ecosystems that sustain us. Many endangered species are disappearing because of habitat loss, poaching, and pollution.\n\nTo protect the environment, we need to adopt sustainable development practices that balance economic growth with conservation. This includes investing in renewable energy sources like solar and wind power, which do not pollute the atmosphere. Wildlife conservation programs play a crucial role in preserving biodiversity.\n\nSimple actions can make a big difference: plant trees in your community, reduce waste by recycling, and choose products that are environmentally friendly. If we all take responsibility for our planet, we can ensure that future generations inherit a healthy and beautiful world.'
        }
      }
    ]
  },
  {
    id: 'technology',
    title: 'Technology',
    icon: '\ud83d\udcbb',
    subtopics: [
      {
        id: 'tech-internet',
        title: 'Internet & M\u1ea1ng x\u00e3 h\u1ed9i',
        collocations: [
          { phrase: 'social media', meaning: 'm\u1ea1ng x\u00e3 h\u1ed9i', example: 'Social media has changed the way people communicate.' },
          { phrase: 'surf the internet', meaning: 'l\u01b0\u1edbt internet', example: 'Many teenagers spend hours surfing the internet every day.' },
          { phrase: 'online learning', meaning: 'h\u1ecdc tr\u1ef1c tuy\u1ebfn', example: 'Online learning became popular during the pandemic.' },
          { phrase: 'digital literacy', meaning: 'ki\u1ebfn th\u1ee9c s\u1ed1', example: 'Digital literacy is an essential skill in the 21st century.' },
          { phrase: 'access information', meaning: 'truy c\u1eadp th\u00f4ng tin', example: 'The internet allows people to access information easily.' },
          { phrase: 'personal data', meaning: 'd\u1eef li\u1ec7u c\u00e1 nh\u00e2n', example: 'We must protect our personal data from hackers.' },
          { phrase: 'cyber bullying', meaning: 'b\u1eaft n\u1ea1t tr\u00ean m\u1ea1ng', example: 'Cyber bullying can have serious effects on young people\'s mental health.' },
          { phrase: 'spread misinformation', meaning: 'lan truy\u1ec1n tin gi\u1ea3', example: 'Social media makes it easy to spread misinformation.' }
        ],
        essay: {
          title: 'Internet v\u00e0 gi\u1edbi tr\u1ebb',
          content: 'The internet has revolutionized every aspect of our lives, from how we access information to how we communicate with others. Social media platforms like Facebook, Instagram, and TikTok have become integral parts of young people\'s daily lives.\n\nWhile the internet offers many benefits, including online learning opportunities and the ability to connect with people worldwide, it also poses significant risks. Cyber bullying is a growing concern, and many young people struggle with the negative effects of social media on their mental health. Additionally, the ability to spread misinformation quickly can lead to confusion and distrust.\n\nTo use the internet responsibly, young people need to develop digital literacy skills. This means learning to evaluate sources critically, protect their personal data, and maintain a healthy balance between online and offline activities. Parents and educators play an important role in guiding teenagers to surf the internet safely and productively.'
        }
      },
      {
        id: 'tech-innovation',
        title: 'C\u00f4ng ngh\u1ec7 & \u0110\u1ed5i m\u1edbi',
        collocations: [
          { phrase: 'artificial intelligence', meaning: 'tr\u00ed tu\u1ec7 nh\u00e2n t\u1ea1o', example: 'Artificial intelligence is transforming many industries.' },
          { phrase: 'scientific research', meaning: 'nghi\u00ean c\u1ee9u khoa h\u1ecdc', example: 'Scientific research has led to many important discoveries.' },
          { phrase: 'technological advancement', meaning: 'ti\u1ebfn b\u1ed9 c\u00f4ng ngh\u1ec7', example: 'Technological advancement has improved our quality of life.' },
          { phrase: 'cutting-edge technology', meaning: 'c\u00f4ng ngh\u1ec7 ti\u00ean ti\u1ebfn', example: 'This company uses cutting-edge technology to develop new products.' },
          { phrase: 'solve problems', meaning: 'gi\u1ea3i quy\u1ebft v\u1ea5n \u0111\u1ec1', example: 'Technology can help solve problems in healthcare and education.' },
          { phrase: 'make a breakthrough', meaning: '\u0111\u1ea1t b\u01b0\u1edbc \u0111\u1ed9t ph\u00e1', example: 'Scientists made a breakthrough in cancer treatment.' },
          { phrase: 'develop software', meaning: 'ph\u00e1t tri\u1ec3n ph\u1ea7n m\u1ec1m', example: 'Many young Vietnamese are learning to develop software.' },
          { phrase: 'automate tasks', meaning: 't\u1ef1 \u0111\u1ed9ng h\u00f3a c\u00f4ng vi\u1ec7c', example: 'Robots can automate tasks that are dangerous for humans.' }
        ],
        essay: {
          title: 'C\u00f4ng ngh\u1ec7 thay \u0111\u1ed5i cu\u1ed9c s\u1ed1ng',
          content: 'Technological advancement has transformed the world in ways that were unimaginable just a few decades ago. From artificial intelligence to biotechnology, cutting-edge technology continues to make breakthroughs that solve problems and improve lives.\n\nIn Vietnam, the technology sector is growing rapidly. Many young people are learning to develop software and build innovative applications. Scientific research at universities is contributing to solutions for healthcare, agriculture, and environmental challenges. The ability to automate tasks has increased productivity in factories and offices.\n\nHowever, technology also brings challenges. Automation may lead to job losses in some sectors, and the rapid pace of change can be overwhelming. It is essential that education systems prepare students for the digital future by teaching them critical thinking, creativity, and adaptability alongside technical skills.'
        }
      }
    ]
  },
  {
    id: 'culture',
    title: 'Culture',
    icon: '\ud83c\udfad',
    subtopics: [
      {
        id: 'cul-tradition',
        title: 'V\u0103n h\u00f3a & Truy\u1ec1n th\u1ed1ng',
        collocations: [
          { phrase: 'cultural heritage', meaning: 'di s\u1ea3n v\u0103n h\u00f3a', example: 'Vietnam has a rich cultural heritage dating back thousands of years.' },
          { phrase: 'traditional customs', meaning: 'phong t\u1ee5c truy\u1ec1n th\u1ed1ng', example: 'Traditional customs are an important part of Vietnamese identity.' },
          { phrase: 'celebrate festivals', meaning: 't\u1ed5 ch\u1ee9c l\u1ec5 h\u1ed9i', example: 'Vietnamese people celebrate festivals like Tet and Mid-Autumn.' },
          { phrase: 'cultural diversity', meaning: '\u0111a d\u1ea1ng v\u0103n h\u00f3a', example: 'Cultural diversity enriches society and promotes understanding.' },
          { phrase: 'preserve traditions', meaning: 'gi\u1eef g\u00ecn truy\u1ec1n th\u1ed1ng', example: 'It is important to preserve traditions for future generations.' },
          { phrase: 'folk music', meaning: '\u00e2m nh\u1ea1c d\u00e2n gian', example: 'Folk music reflects the soul of Vietnamese culture.' },
          { phrase: 'national identity', meaning: 'b\u1ea3n s\u1eafc d\u00e2n t\u1ed9c', example: 'Language and customs are key elements of national identity.' },
          { phrase: 'cultural exchange', meaning: 'giao l\u01b0u v\u0103n h\u00f3a', example: 'Cultural exchange programs help young people understand different perspectives.' }
        ],
        essay: {
          title: 'Gi\u1eef g\u00ecn v\u0103n h\u00f3a truy\u1ec1n th\u1ed1ng trong th\u1eddi \u0111\u1ea1i hi\u1ec7n \u0111\u1ea1i',
          content: 'Vietnam possesses a rich cultural heritage that has been shaped over thousands of years. From traditional customs like celebrating Tet to folk music that tells stories of the land and its people, Vietnamese culture is diverse and vibrant.\n\nIn the age of globalization, preserving traditions has become both more challenging and more important. Young people are increasingly influenced by Western culture through social media and entertainment, which can lead to a gradual loss of national identity. However, cultural exchange can also be positive when it promotes mutual understanding and respect.\n\nTo maintain cultural diversity while embracing modernity, Vietnam should invest in cultural education, support local artists and craftspeople, and organize festivals that celebrate traditional customs. By doing so, we can ensure that our cultural heritage continues to thrive and inspire future generations.'
        }
      },
      {
        id: 'cul-society',
        title: 'X\u00e3 h\u1ed9i & Gia \u0111\u00ecnh',
        collocations: [
          { phrase: 'family values', meaning: 'gi\u00e1 tr\u1ecb gia \u0111\u00ecnh', example: 'Family values are deeply rooted in Vietnamese society.' },
          { phrase: 'generation gap', meaning: 'kho\u1ea3ng c\u00e1ch th\u1ebf h\u1ec7', example: 'The generation gap can cause misunderstandings between parents and children.' },
          { phrase: 'social responsibility', meaning: 'tr\u00e1ch nhi\u1ec7m x\u00e3 h\u1ed9i', example: 'Every citizen has a social responsibility to help those in need.' },
          { phrase: 'community service', meaning: 'ho\u1ea1t \u0111\u1ed9ng c\u1ed9ng \u0111\u1ed3ng', example: 'Students should participate in community service to develop empathy.' },
          { phrase: 'raise awareness', meaning: 'n\u00e2ng cao nh\u1eadn th\u1ee9c', example: 'Campaigns help raise awareness about social issues.' },
          { phrase: 'equal opportunity', meaning: 'c\u01a1 h\u1ed9i b\u00ecnh \u0111\u1eb3ng', example: 'Everyone deserves equal opportunity regardless of background.' },
          { phrase: 'human rights', meaning: 'quy\u1ec1n con ng\u01b0\u1eddi', example: 'Respecting human rights is fundamental to a just society.' },
          { phrase: 'quality of life', meaning: 'ch\u1ea5t l\u01b0\u1ee3ng cu\u1ed9c s\u1ed1ng', example: 'Economic growth should lead to a better quality of life for all.' }
        ],
        essay: {
          title: 'Gia \u0111\u00ecnh v\u00e0 x\u00e3 h\u1ed9i Vi\u1ec7t Nam hi\u1ec7n \u0111\u1ea1i',
          content: 'Vietnamese society has undergone significant changes in recent decades. While family values remain deeply important, the generation gap between parents and children has widened due to rapid modernization and exposure to global influences.\n\nIn modern Vietnam, young people are increasingly aware of social responsibility and human rights. Community service activities, volunteer programs, and awareness campaigns have become popular among students. These activities help raise awareness about important issues such as poverty, education inequality, and environmental protection.\n\nTo improve the quality of life for all citizens, society must ensure equal opportunity in education and employment. By combining traditional family values with modern concepts of social justice, Vietnam can build a harmonious and progressive society where every individual has the chance to reach their full potential.'
        }
      }
    ]
  },
  {
    id: 'health',
    title: 'Health',
    icon: '\ud83c\udfe5',
    subtopics: [
      {
        id: 'health-lifestyle',
        title: 'L\u1ed1i s\u1ed1ng L\u00e0nh m\u1ea1nh',
        collocations: [
          { phrase: 'balanced diet', meaning: 'ch\u1ebf \u0111\u1ed9 \u0103n c\u00e2n b\u1eb1ng', example: 'A balanced diet includes fruits, vegetables, and protein.' },
          { phrase: 'regular exercise', meaning: 't\u1eadp th\u1ec3 d\u1ee5c \u0111\u1ec1u \u0111\u1eb7n', example: 'Regular exercise helps maintain physical and mental health.' },
          { phrase: 'mental health', meaning: 's\u1ee9c kh\u1ecfe tinh th\u1ea7n', example: 'Mental health is just as important as physical health.' },
          { phrase: 'get enough sleep', meaning: 'ng\u1ee7 \u0111\u1ee7 gi\u1ea5c', example: 'Teenagers need to get enough sleep for proper development.' },
          { phrase: 'reduce stress', meaning: 'gi\u1ea3m stress', example: 'Meditation and yoga can help reduce stress effectively.' },
          { phrase: 'healthy lifestyle', meaning: 'l\u1ed1i s\u1ed1ng l\u00e0nh m\u1ea1nh', example: 'Adopting a healthy lifestyle can prevent many diseases.' },
          { phrase: 'bad habits', meaning: 'th\u00f3i quen x\u1ea5u', example: 'Smoking and excessive drinking are bad habits that harm your health.' },
          { phrase: 'boost immunity', meaning: 't\u0103ng c\u01b0\u1eddng mi\u1ec5n d\u1ecbch', example: 'Eating vitamin-rich foods helps boost immunity.' }
        ],
        essay: {
          title: 'X\u00e2y d\u1ef1ng l\u1ed1i s\u1ed1ng l\u00e0nh m\u1ea1nh',
          content: 'A healthy lifestyle is the foundation of a happy and productive life. Maintaining a balanced diet, getting regular exercise, and ensuring enough sleep are three pillars of physical wellbeing. However, many Vietnamese students struggle to follow these habits due to academic pressure and busy schedules.\n\nMental health is equally important but often overlooked. The pressure to perform well in exams can lead to stress, anxiety, and even depression among students. Learning to reduce stress through activities like sports, meditation, or spending time with friends is essential.\n\nTo build healthier habits, students should avoid bad habits such as staying up late, eating junk food, and spending too much time on screens. Instead, focus on activities that boost immunity and improve overall wellbeing. Remember: a healthy body supports a healthy mind, which leads to better academic results.'
        }
      },
      {
        id: 'health-medical',
        title: 'Y t\u1ebf & B\u1ec7nh t\u1eadt',
        collocations: [
          { phrase: 'public health', meaning: 'y t\u1ebf c\u00f4ng c\u1ed9ng', example: 'The government invests heavily in public health programs.' },
          { phrase: 'healthcare system', meaning: 'h\u1ec7 th\u1ed1ng y t\u1ebf', example: 'A strong healthcare system is vital for any country.' },
          { phrase: 'medical treatment', meaning: '\u0111i\u1ec1u tr\u1ecb y t\u1ebf', example: 'Everyone should have access to affordable medical treatment.' },
          { phrase: 'prevent diseases', meaning: 'ph\u00f2ng b\u1ec7nh', example: 'Vaccination helps prevent diseases effectively.' },
          { phrase: 'spread of disease', meaning: 's\u1ef1 l\u00e2y lan b\u1ec7nh', example: 'Washing hands regularly can slow the spread of disease.' },
          { phrase: 'physical fitness', meaning: 'th\u1ec3 l\u1ef1c', example: 'Physical fitness is important for students\' overall development.' },
          { phrase: 'first aid', meaning: 's\u01a1 c\u1ee9u', example: 'Everyone should learn basic first aid skills.' },
          { phrase: 'health insurance', meaning: 'b\u1ea3o hi\u1ec3m y t\u1ebf', example: 'Health insurance helps cover the cost of medical treatment.' }
        ],
        essay: {
          title: 'H\u1ec7 th\u1ed1ng y t\u1ebf v\u00e0 s\u1ee9c kh\u1ecfe c\u1ed9ng \u0111\u1ed3ng',
          content: 'A well-functioning healthcare system is essential for the wellbeing of any nation. In Vietnam, the government has made significant investments in public health, including expanding health insurance coverage and building more hospitals in rural areas.\n\nPreventing diseases is always better than treating them. Vaccination programs, health education campaigns, and promoting physical fitness in schools are effective ways to reduce the spread of disease. Teaching first aid skills to students can also save lives in emergency situations.\n\nHowever, challenges remain. Access to quality medical treatment is still uneven between urban and rural areas, and many families struggle to afford healthcare even with insurance. To build a healthier society, Vietnam needs to continue investing in its healthcare system while also promoting healthy lifestyles and disease prevention among all citizens.'
        }
      }
    ]
  }
];
