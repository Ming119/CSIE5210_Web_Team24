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

- 在 GitHub 中建立一個 Repository 以你們的組別命名，如： Team03 。如：Web 程式設計與應用 - 第三組 (中文 Repo 名稱無法使用)
- 在 GitHub 中放一個 HW_Report 資料夾
- 裡面放每一週的作業檔之外，還要放這一周做了什麼的 Report，請依週次命名如：Week03.md
- 內容分三段
  - 練習了哪些當週上課的主題
  - 額外找了與當週上課的主題相關的程式技術
  - 組員分工情況 (共 100%)，並清楚的標示你們是哪一組 (組別)
    - 王小明 25% html 設計
    - 李小華 25% css 設計
    - 王小美 15% 不知道
    - 吳名式 35% html+CSS 救火
- 內容包含當周做的內容，以上講的當週上課的主題及額外找了與當週上課的主題相關的程式技術都必須實做在專案之中並 commit 進去。
- 每週上傳該周最後一次 commit 的網址，ex: https://github.com/shiunyi71/Web_APP_HW/commit/643101979cd8b6304310b75f85e0f8c8ef9c6b2f

※ 請加老師及助教的帳號進 Collaborator: shiunyi71@gmail.com, annie8528@gmail.com, pe.lotoya93@gmail.com

</details>

# Week13 Report

## 練習了哪些當週上課的主題

### 串接 LLM

- 使用 Gemini 作為網站的客服
- 在首頁右上角啟動 Gemini 對話視窗
- 到/backend/app/
  - 執行"python3 manage.py runserver"
- 到/backend/app/app/
  - 執行"python3 socketio_server.py"

### JSON Web Token (JWT)

- 在登入時使用 JWT
- http://localhost:8000/api/token/

### Django Rest Framework (DRF)

- 實裝 DRF 來管理貼文
- http://localhost:8000/api/posts/

## 組員分工情況 (共 100%)，Group 24

- 李浩銘 25% Finish `my_posts` and `edit_post` funcationality.
- 杜孟聰 25%
- 邱志偉 25% Connecting Gemini LLM, Implement JWT with Login, Implement the DRF with Post, Report
- 劉晧安 25%
