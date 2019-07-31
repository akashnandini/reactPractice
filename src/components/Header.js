import React from "react";
import "./style.css"
function Header(props) {
  return (
        <div>
            <h3>{props.state} {props.country}</h3>
        </div>
  );
}

export default Header;
