import React from "react";
import "../App.js";
import "../styles/header.css";
import { BrowserRouter, NavLink, Route, Switch, useLocation } from "react-router-dom";
import HeaderOrnament from "../res/charmanteDividerWider.png";
import Moi from "../res/headerMoi.png";
import MoiHover from "../res/headerMoiHover.gif";

class HeaderItem extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            hovered: false
        }
        this.mouseOver = this.mouseOver.bind(this)
        this.mouseLeave = this.mouseLeave.bind(this)
    }
    mouseOver(event) {
        this.setState({
            hovered: true
        })
    }
    mouseLeave(event) {
        this.setState({
            hovered: false
        })
    }
    render(){
        if(!this.state.hovered){
            return(
                <div className="headerItem">
                    <img src={this.props.image} onMouseOver={this.mouseOver}/>
                    {this.props.text}
                </div>
            )
        }
        else{
            return(
                <div className="headerItem">
                    <img src={this.props.imageOnHover} onMouseLeave={this.mouseLeave} />
                    {this.props.text}
                </div>
            )
        }
    }
}

class Header extends React.Component{
    constructor(props){
        super(props)
        //this.state = {
        //    location: window.location.pathname
        //};
    }
    render(){
        //let location = window.location.pathname
        return(
            <header> 
                <div className="headerBase">
                    {/* <NavLink to="/arrows" activeClassName="active"> */}
                        <HeaderItem image={Moi} imageOnHover={MoiHover} text="Arrows"/>
                    {/* </NavLink> */}
                    {/* <NavLink to="/bubbles" activeClassName="active"> */}
                        <HeaderItem image={Moi} imageOnHover={MoiHover} text="Bubbles"/>
                    {/* </NavLink> */}
                    <div className = "headerTitle">
                        ThreeJS Playground 
                    </div>
                    {/* <NavLink to="/cursor" activeClassName="active"> */}
                        <HeaderItem image={Moi} imageOnHover={MoiHover} text="Cursor"/>
                    {/* </NavLink> */}
                    {/* <NavLink to="/text" activeClassName="active"> */}
                        <HeaderItem image={Moi} imageOnHover={MoiHover} text="Text"/>
                    {/* </NavLink> */}
                </div>
                <div className="headerOrnament" style={{ backgroundImage: `url(${HeaderOrnament})` }}></div>
            </header>
        )
    }
}

export default Header;