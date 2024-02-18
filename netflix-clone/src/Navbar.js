import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {

    const [show,setShow] = useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY>100){
            setShow(true);
        }else{
            setShow(false);
        }
    }


    useEffect(()=>{
       window.addEventListener("scroll",transitionNavBar);
       return () => window.removeEventListener("scroll",transitionNavBar);
    },[])

  return (
    <div class={`navbar ${show && 'navbar_black'}`}>
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
