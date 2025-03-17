import React from "react";
import "./my library.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="title">BOOKSHELL</h1>
      <div className="menu">
        <button className="menu-button">🏠 HOME</button>
        <button className="menu-button">🔍 SEARCH</button>
      </div>
      <h2 className="shelves-title">#MY SHELVES</h2>
      <div className="shelves">
        <button className="shelves-button">MY LIBRARY</button>
        <button className="shelves-button">FAVORITES</button>
      </div>
      <div className="account-section">
        <button className="account-button">👤 My account</button>
        <button className="account-button">❓ Help</button>
        <button className="account-button">📖 Feedback</button>
      </div>
    </div>
  );
};

const MyLibrary = () => {
  return (
    <div className="library">
      <h1 className="library-title">MY LIBRARY</h1>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Sidebar />
      <MyLibrary />
    </div>
  );
};

export default App;
