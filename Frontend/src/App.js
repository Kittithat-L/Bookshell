import React, { useState } from "react";
import "./App.css";

function App() {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container">
      <aside className="sidebar">
        <h1 className="logo">BOOKSHELL</h1>
        <nav>
          <button className="nav-btn">🏠 HOME</button>
          <button className="nav-btn">🔍 SEARCH</button>
        </nav>
        <div className="shelves">
          <h2>#MY SHELVES</h2>
          <button className="shelf-btn">MY LIBRARY</button>
          <button className="shelf-btn">FAVORITES</button>
        </div>
        <div className="account-section">
          <button className="account-btn">👤 My account</button>
          <button className="account-btn">❓ Help</button>
          <button className="account-btn">📖 Feedback</button>
        </div>
      </aside>

      <main className="content">
        <div className="account-container">
          <h2 className="account-title">MY ACCOUNT</h2>

          <div className="profile-section">
            <p className="edit-text">edit profile</p>
            <label htmlFor="profile-upload" className="profile-pic">
              {profileImage ? (
                <img src={profileImage} alt="Profile" />
              ) : (
                "Upload"
              )}
            </label>
            <input
              type="file"
              id="profile-upload"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>

          <div className="input-section">
            <label className="input-label">Enter username</label>
            <input type="text" className="input-box" placeholder="Username" />
          </div>

          <div className="input-section">
            <label className="input-label">Enter email</label>
            <input type="email" className="input-box" placeholder="Email" />
          </div>

          <button className="signout-btn">Sign Out</button>
        </div>
      </main>
    </div>
  );
}

export default App;
