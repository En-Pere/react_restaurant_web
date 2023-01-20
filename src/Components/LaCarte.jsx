import React from "react";
import "../Styles/lacarte.css";

function LaCarte() {
  return (
    <div className="lacarte-background">
      : La Carte :
      <div className="main-container-lacarte">
        <div className="menu1">menu 1</div>
        <div className="menu2y3">
          <div className="menu2">menu 2</div>
          <div className="menu3">menu 3</div>
        </div>
        <div className="menu4y5y6">
          <div className="menu4">menu 4</div>
          <div className="menu5y6">
            <div className="menu5">menu 5</div>
            <div className="menu6">menu 6</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaCarte;
