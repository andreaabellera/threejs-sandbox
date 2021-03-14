import React from "react";
import "../styles/header.css";
import { BrowserRouter, NavLink, Route, Switch, useLocation } from "react-router-dom";
import HeaderOrnament from "../res/charmanteDividerWider.png";
import Moi from "../res/headerMoi.png";
import MoiHover from "../res/headerMoiHover.gif";

function Header() 
{
    return (
        <header> 
            <div className="headerBase">
                <div className = "headerItem">
                    <img src={Moi} />
                    Moi
                </div>
                <div className = "headerItem">
                    <img src={Moi} />
                    CV
                </div>

                <div className = "headerTitle">
                    La Ruelle Charmante 
                </div>
                
                <div className = "headerItem">
                    <img src={Moi} />
                    1003
                </div>
                <div className = "headerItem">
                    <img src={Moi} />
                    Site Specs
                </div>
            </div>
            <div className="headerOrnament" style={{ backgroundImage: `url(${HeaderOrnament})` }}></div>
        </header>
    );

}

export default Header;