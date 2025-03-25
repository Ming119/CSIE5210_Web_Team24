# 閒聊討論區 React 版本

這是將原本的HTML/CSS/JS網站轉換為React應用的版本。

## 專案結構

```
forum-app/
├── public/
├── src/
│   ├── assets/
│   │   ├── css/
│   │   │   ├── darkmode.css
│   │   │   ├── global.css
│   │   │   ├── homepage.css
│   │   │   ├── login.css
│   │   │   ├── my_topics.css
│   │   │   └── register.css
│   ├── components/
│   │   └── DarkModeToggle.js
│   ├── context/
│   │   └── DarkModeContext.js
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── MyTopicsPage.js
│   │   └── RegisterPage.js
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## 安裝與啟動

1. 安裝依賴套件：

```bash
npm install
```

2. 啟動開發伺服器：

```bash
npm start
```

3. 瀏覽器會自動開啟 `http://localhost:3000`，您就可以看到應用的運行結果。

## 功能說明

- **首頁**：顯示所有討論主題分類
- **登入頁面**：使用者登入功能
- **註冊頁面**：新用戶註冊功能
- **主題列表**：查看特定分類下的所有主題
- **深色模式**：支援全應用的深色模式切換

## 需要安裝的套件

創建這個React應用需要安裝以下套件：

```bash
npm install react-router-dom
```
