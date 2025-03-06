import React from "react";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a href="">
        <div className="site-logo">
          <img
            className="chef-logo"
            src="./src/components/chefClaude/images/chef_claude_logo.svg"
            alt=""
          />
          <h1>Chef Claude</h1>
        </div>
      </a>
    </header>
  );
}

export default Header;
