import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div class="navbar navbar_black">
      <div class="navbar_contents">
        <img
          className="navbar_logo"
          src="https://toppng.com/uploads/preview/netflix-logo-png-download-11660600814vkfgjh8swu.png"
          alt=""
        />
        <img
          className="navbar_avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Navbar;
