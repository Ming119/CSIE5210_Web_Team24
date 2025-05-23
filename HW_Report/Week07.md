<details>
<summary>作業說明</summary>

# 作業說明

## 實作演練
- 各組自行訂定主題進行實作演練 (可中途更改題目，只要合理就行)
- 練習當週上課的主題 20%
- 額外找的與當週上課的主題相關的程式技術 15%
- 將這些技術合併到實作演練的主題的合理性 15%
- 將諸多元件與技術放在一起顯得相當牽強，但在一定得用到的前提下，構思如何合理安排在同一網站中相當具有挑戰性。

## 作業繳交方式：
- 在GitHub中建立一個Repository以你們的組別命名，如： Team03 。如：Web程式設計與應用 - 第三組 (中文Repo名稱無法使用)
- 在GitHub中放一個HW_Report資料夾
- 裡面放每一週的作業檔之外，還要放這一周做了什麼的Report，請依週次命名如：Week07.md
- 內容分四段
    - 練習了哪些當週上課的主題
    -  額外找了與當週上課的主題相關的程式技術
    -  Docker Image Pull 連結及啟動方式說明
    -  組員分工情況 (共100%)，並清楚的標示你們是哪一組 (組別)
        - 王小明 25% html設計
        - 李小華 25% css設計
        - 王小美 15% 不知道
        - 吳名式 35% html+CSS救火
- 內容包含當周做的內容，以上講的當週上課的主題及額外找了與當週上課的主題相關的程式技術都必須實做在專案之中並commit進去。
- 每週上傳該周最後一次commit的網址，ex: https://github.com/shiunyi71/Web_APP_HW/commit/643101979cd8b6304310b75f85e0f8c8ef9c6b2f

※ 請加老師及助教的帳號進Collaborator: shiunyi71@gmail.com, annie8528@gmail.com, pe.lotoya93@gmail.com
</details>

# Week07 Report

## 練習了哪些當週上課的主題
### Docker
- 工作流程
- 安裝與配置
- 命令行
- Docker Hub
- 映像檔
- 創建與管理
- Docker Compose

### Docker Image Pull 連結
https://hub.docker.com/r/ming119/web_team24

### Docker啟動方式說明
```bash
# Run with docker pull
docker pull ming119/web_team24:latest
docker run -p 8000:8000 -d ming119/web_team24:latest
```

```bash
# build form source
docker compose up -d
```

Now the web is hosted on localhost:8000

### Django
- 安裝：Python, Visual Studio Code, Django
- 產生框架
- 安裝套件
- 建立資料庫：SQLite3
- Model, View, Template：把原來的網頁放入Django的框架
- 網址架構：首頁、註冊、登入、登出、新增貼文、分類
- 使用者管理：用戶註冊、登入、登出

## 額外找了與當週上課的主題相關的程式技術
### 資料庫
- SQLite3：用戶管理、新增貼文

## 組員分工情況 (共100%)，Group 24
- 李浩銘 25% 實作Django及Docker
- 杜孟聰 25% 不知道
- 邱志偉 25% 撰寫報告
- 劉晧安 25% 不知道