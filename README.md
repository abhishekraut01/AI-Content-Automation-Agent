# 🤖 DevSync AI Social Media Agent

Automated content generator and poster for DevSync’s Twitter, LinkedIn, and Instagram.  
This AI-powered agent generates motivational or trending tech content, designs a branded image, and posts it daily.

---

## 🚀 Features

- 🔍 Scrapes trending topics (tech + career)
- 🧠 Generates quotes, captions & hashtags using ChatGPT
- 🖼️ Creates branded images using DALL·E or custom overlays
- 📅 Auto-schedules posts on:
  - Twitter (via API)
  - LinkedIn (via API or automation)
  - Instagram (via Graph API or Buffer)

---


## 🛠️ Tech Stack

| Layer       | Tools/Libs                        |
|-------------|-----------------------------------|
| Language    | TypeScript                        |
| AI Engine   | OpenAI GPT-4 (via API)            |
| Image Gen   | DALL·E / Midjourney (optional)    |
| Image Edit  | `sharp` / `pillow`                |
| Scheduling  | `node-cron`, `Zapier`, or Buffer  |
| APIs Used   | Twitter API, LinkedIn API, Meta Graph API |

---

## ⚙️ Setup Instructions

1. **Clone the repo**
```bash
git clone https://github.com/abhishekraut01/AI-Content-Automation-Agent
cd AI-Content-Automation-Agent
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment**
Create a `.env` file with:
```
OPENAI_API_KEY=your-openai-key
TWITTER_BEARER_TOKEN=...
LINKEDIN_ACCESS_TOKEN=...
INSTAGRAM_ACCESS_TOKEN=...
```

4. **Build and Run**
```bash
npm run build
npm start
```

---

## 🧠 Future Scope

- Admin dashboard for post approval
- Analytics dashboard for engagement tracking
- Multi-language support
- Post queue with priority tags

---

## 💙 Maintained by

**Team DevSync**  
[https://devsync.in](https://devsync.in)  
Join us — Build the future. Build yours.

---

## 📜 License

MIT License. Open to contributions and forks for non-commercial use.