import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../context/DarkModeContext';
import '../assets/css/my_topics.css';

const MyTopicsPage = () => {
    const { darkMode } = useDarkMode();
    const topics = [
        { id: 1, title: 'Topic 1', lastUpdate: '2025-03-01', username: 'user1' },
        { id: 2, title: 'Topic 2', lastUpdate: '2025-03-01', username: 'user1' },
        { id: 3, title: 'Topic 3', lastUpdate: '2025-03-01', username: 'user1' },
        { id: 4, title: 'Topic 4', lastUpdate: '2025-03-01', username: 'user1' },
        { id: 5, title: 'Topic 5', lastUpdate: '2025-03-01', username: 'user1' },
        { id: 6, title: 'Topic 6', lastUpdate: '2025-03-01', username: 'user1' },
        { id: 7, title: 'Topic 7', lastUpdate: '2025-03-01', username: 'user1' },
        { id: 8, title: 'Topic 8', lastUpdate: '2025-03-01', username: 'user1' },
        { id: 9, title: 'Topic 9', lastUpdate: '2025-03-01', username: 'user1' },
        { id: 10, title: 'Topic 10', lastUpdate: '2025-03-01', username: 'user1' },
    ];
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 5;
    const totalPages = Math.ceil(topics.length / rowsPerPage);

    useEffect(() => {
        displayPage(1);
    }, []);

    const getCurrentTopics = () => {
        const startIndex = (currentPage - 1) * rowsPerPage;
        const endIndex = startIndex + rowsPerPage;
        return topics.slice(startIndex, endIndex);
    };

    const displayPage = (page) => {
        setCurrentPage(page);
    };

    const renderPagination = () => {
        const pageButtons = [];

        for (let i = 1; i <= totalPages; i++) {
            pageButtons.push(
                <button
                    key={i}
                    className={i === currentPage ? 'active' : ''}
                    onClick={() => displayPage(i)}
                >
                    {i}
                </button>
            );
        }

        return pageButtons;
    };

    return (
        <div className={darkMode ? 'dark-mode' : ''}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>My Topics</title>
            </head>

            <body>
            <div className="my-topics-container">
                <h1>My Topics</h1>
                <table id="topicsTable">
                    <thead>
                    <tr>
                        <th>Topic</th>
                        <th>Last Update</th>
                        <th>Username</th>
                    </tr>
                    </thead>
                    <tbody id="topicsBody">
                    {getCurrentTopics().map((topic) => (
                        <tr key={topic.id}>
                            <td>{topic.title}</td>
                            <td>{topic.lastUpdate}</td>
                            <td>{topic.username}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {/* 分頁 */}
                <div className="pagination" id="pagination">
                    {renderPagination()}
                </div>
            </div>
            </body>
        </div>
    );
};

export default MyTopicsPage;