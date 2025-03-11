<details>
<summary>作業說明</summary>

# 作業說明

## 實作演練
各組自行訂定主題進行實作演練 (可中途更改題目，只要合理就行)
- 練習當週上課的主題 20%
- 額外找的與當週上課的主題相關的程式技術 15%
- 將這些技術合併到實作演練的主題的合理性 15%

將諸多元件與技術放在一起顯得相當牽強，但在一定得用到的前提下，構思如何合理安排在同一網站中相當具有挑戰性。

## 作業繳交方式：

1. 在GitHub中建立一個Repository以你們的組別命名，如： Team03 。如：Web程式設計與應用 - 第三組 (中文Repo名稱無法使用)
2. 在GitHub中放一個HW_Report資料夾
3. 裡面放每一週的作業檔之外，還要放這一周做了什麼的Report，請依週次命名如：Week03.md

## 內容分三段
1. 練習了哪些當週上課的主題
2. 額外找了與當週上課的主題相關的程式技術
3. 組員分工情況 (共100%)，並清楚的標示你們是哪一組 (組別)
    - 王小明 25% html設計
    - 李小華 25% css設計
    - 王小美 15% 不知道
    - 吳名式 35% html+CSS救火

內容包含當周做的內容，以上講的當週上課的主題及額外找了與當週上課的主題相關的程式技術都必須實做在專案之中並commit進去。

每週上傳該周最後一次commit的網址，ex: https://github.com/shiunyi71/Web_APP_HW/commit/643101979cd8b6304310b75f85e0f8c8ef9c6b2f

※請加老師及助教的帳號進Collaborator: shiunyi71@gmail.com, annie8528@gmail.com
</details>

# Week03 Report

## 練習了哪些當週上課的主題
- **HTML 基礎結構**：創建了包括登入頁面(login.html)、註冊頁面(register.html)、主題列表頁面(my_topics.html)以及首頁(index.html)的基本HTML架構
- **HTML 元素應用**：運用了表單(`<form>`)、表格(`<table>`)、列表(`<ul>`, `<li>`)等標籤元素
- **語意化HTML**：適當地使用`<header>`, `<footer>`, `<nav>`等語意化標籤
- **CSS 選擇器**：應用了標籤選擇器、類別選擇器進行樣式定義
- **CSS Box模型**：使用margin、padding、border來控制元素間距和邊框
- **CSS Flexbox**：運用flex布局實現頁面排版，特別是在首頁的分類區域和內容區域
- **CSS 轉場效果**：在按鈕和連結上添加了hover效果和過渡動畫

## 額外找了與當週上課的主題相關的程式技術
- **響應式設計(Responsive Design)**：
    - 使用媒體查詢(`@media`)實現不同螢幕尺寸下的適配
    - 在login.css、register.css和my_topics.css中都加入了針對小螢幕(最大寬度480px)的樣式調整
- **動態分頁功能**：
    - 使用JavaScript實現了主題列表的分頁功能(my_topics.js)
    - 每頁顯示固定數量(5筆)的主題資料
    - 動態生成分頁按鈕，並添加當前頁面的視覺提示
- **表單處理**：
    - 添加了基本的表單提交處理函數
    - 實現了表單提交後的頁面跳轉功能

## 組員分工情況 (共100%)，Group 24
- 李浩銘 25% Register, Login, My Topics HTML & CSS
- 杜孟聰 25% Profile Page
- 邱志偉 25% UI Design, Homepage HTML & CSS
- 劉晧安 25% Report