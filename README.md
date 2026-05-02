# EnglishPro THPT

Nền tảng luyện thi Tiếng Anh THPT Quốc Gia miễn phí cho học sinh Việt Nam.

## Tính năng

- **Oxford 3000 Từ vựng** — 3000+ từ vựng Oxford với phiên âm IPA, âm thanh Anh-Mỹ, ví dụ thực tế
- **14 Chuyên đề Ngữ pháp** — Đầy đủ công thức, dấu hiệu nhận biết, bẫy thi, mini-quiz
- **Flashcard Spaced Repetition** — Thuật toán ôn tập khoa học giúp nhớ từ lâu hơn
- **Thi thử THPT** — Format chuẩn Bộ GD&ĐT với đồng hồ đếm ngược 50 phút
- **Dashboard cá nhân** — Heatmap học tập, streak, thống kê tiến độ
- **5 Chủ đề trọng tâm** — Education, Environment, Technology, Culture, Health

## Cấu trúc

```
├── index.html          # Trang chủ
├── vocabulary.html     # Từ vựng Oxford 3000
├── grammar.html        # 14 chuyên đề ngữ pháp
├── practice.html       # Flashcard & Thi thử
├── about.html          # Giới thiệu & Liên hệ
├── css/
│   ├── main.css        # Design system chung
│   ├── homepage.css    # Style trang chủ
│   ├── vocabulary.css  # Style trang từ vựng
│   ├── grammar.css     # Style trang ngữ pháp
│   └── practice.css    # Style trang luyện đề
├── js/
│   ├── app.js          # Logic chung (auth, navigation, toast)
│   ├── homepage.js     # Word/Grammar of the Day, search
│   ├── vocabulary.js   # Filter, search, pagination từ vựng
│   ├── grammar.js      # Render topic, quiz ngữ pháp
│   ├── practice.js     # Flashcard & Exam mode
│   ├── data.js         # 80 từ core + 14 grammar topics + exam questions
│   ├── data-extra.js   # 30 từ bổ sung
│   └── data-oxford.js  # 2871 từ Oxford 3000
├── robots.txt
└── sitemap.xml
```

## Công nghệ

- Vanilla HTML/CSS/JavaScript (không framework)
- localStorage cho authentication & progress tracking
- Web Speech API cho phát âm
- CSS Variables + Dark Theme
- Responsive Design

## Cách chạy

Mở file `index.html` trực tiếp trong trình duyệt, hoặc dùng Live Server:

```bash
# Dùng Python
python3 -m http.server 8000

# Dùng Node.js
npx serve .
```

## License

MIT
