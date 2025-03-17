import { useState } from "react";

import { Search, Menu } from "lucide-react";

import "./App.css"; // นำเข้าไฟล์ CSS

export default function HelpCenter() {

  const categories = [

    { name: "Archive.org", count: 74 },

    { name: "Donations", count: 25 },

    { name: "Internet Archive Organization", count: 2 },

    { name: "Reports", count: 1 },

    { name: "Resource Guides", count: 15 },

    { name: "The Wayback Machine", count: 10 },

  ];

  const [search, setSearch] = useState("");

  return (
<div className="container">
<div className="card">

        {/* Header */}
<div className="header">
<div>
<h1>Internet Archive Help Center</h1>
<p>How can we help you?</p>
</div>
<Menu className="menu-icon" />
</div>

        {/* Search Bar */}
<div className="search-bar">
<div className="search-box">
<Search className="search-icon" />
<input

              type="text"

              placeholder="Search ..."

              value={search}

              onChange={(e) => setSearch(e.target.value)}

            />
</div>
<button className="search-btn">Search</button>
</div>

        {/* Category List */}
<div className="content">
<ul>

            {categories.map((item, index) => (
<li key={index} className="category">
<a href="#" className="category-name">

                  📂 {item.name}
</a>
<span className="count">{item.count}</span>
</li>

            ))}
</ul>
</div>
</div>
</div>

  );

}