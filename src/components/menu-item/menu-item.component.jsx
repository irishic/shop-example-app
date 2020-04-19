import React from "react";
import { withRouter } from "react-router-dom";

import "./menu-item.scss";

function MenuItem({ title, imageUrl, size, history, match, linkUrl }) {
  return (
	<div 
		className={`menu-item ${size}`}
		onClick={()=>{history.push(`/shop/${linkUrl}`)}}
	>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1>{title.toUpperCase()}</h1>
        <span>Subtitle</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
