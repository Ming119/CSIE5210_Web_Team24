import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDarkMode } from '../context/DarkModeContext';
import '../assets/css/homepage.css';
import { Helmet } from 'react-helmet';  // 如果需要設置 head 標籤，請安裝並使用 react-helmet

const HomePage = () => {
    const navigate = useNavigate();
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [categories, setCategories] = useState([]);

    // 將 generateDemoData 移到 useCallback 中
    const generateDemoData = useCallback(() => {
        const demoCategories = [];
        const users = ['Alice', 'Bob', 'Charles', 'Dennis', 'Emily'];

        for (let i = 0; i < 5; i++) {
            const topics = [];
            for (let j = 0; j < 5; j++) {
                topics.push({
                    subject: `主題${j + 1}`,
                    createdAt: formatDate(Date.now()),
                    user: getRandomUser(users)
                });
            }
            demoCategories.push({
                name: `分類${String.fromCharCode(65 + i)}`,
                topics: topics
            });
        }

        setCategories(demoCategories);
    }, []);

    useEffect(() => {
        generateDemoData();

        return () => {
        };
    }, [generateDemoData]);

    const handleLogin = () => {
        navigate('/login');
    };

    const goToCategory = () => {
        navigate('/my-topics');
    };

    const formatDate = (date) => {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    };

    const getRandomUser = (users) => {
        return users[Math.floor(Math.random() * users.length)];
    };

    return (
        <>
            {/* 使用 react-helmet 處理頭部標籤 */}
            <Helmet>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>閒聊討論區</title>
            </Helmet>

            <div className={darkMode ? 'dark-mode' : ''}>
                <nav className="navBar">
                    <button className="loginBtn" onClick={handleLogin}>登入</button>
                    <button className="darkModeContainer" onClick={toggleDarkMode}>
                        🌙 夜間模式
                    </button>
                </nav>

                <div className="container">
                    <div className="categories">
                        <ul id="categoryList" style={{ margin: 0 }}>
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <button
                                        className="category"
                                        onClick={goToCategory}
                                    >
                                        {category.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="boards" id="boardsContainer">
                        {categories.map((category, index) => (
                            <React.Fragment key={index}>
                                <div className="board">
                                    <h2 className="heading">{category.name}</h2>
                                    <table className="table">
                                        <thead>
                                        <tr className="tableHeader">
                                            <td>主題</td>
                                            <td>最後更新時間</td>
                                            <td>用戶</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {category.topics.map((topic, topicIndex) => (
                                            <tr key={topicIndex} className="tableRows">
                                                <td className="subject">{topic.subject}</td>
                                                <td className="lastUpdate">{topic.createdAt}</td>
                                                <td className="username">{topic.user}</td>
                                            </tr>
                                        ))}
                                        </tbody>
                                        <tfoot className="tableFooter">
                                        <tr>
                                            <td className="seeAll" colSpan="3">
                                                <button
                                                    className="seeAll"
                                                    onClick={goToCategory}
                                                >
                                                    全部
                                                </button>
                                            </td>
                                        </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                {index < categories.length - 1 && <hr />}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                <footer className="footer">
                    <p>Copyright© 2025 CSIE5210 Web程式設計與應用 113-2 Group 24. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
};

export default HomePage;