import React from 'react';
import {Link} from 'react-router-dom';
import "./NavBar.css";

export default function NavBar(props) {
    let hospitalIDString = props.hospitalName + ': ' + props.hospitalUnitName;
    
    return(
        <div className = "NavBar_Base">
            <div className = "NavBar_LeftPanel">
                <img className = "NavBar_AccountMenuImage" src = "/images/accountvector.png" alt =""/>
                <text className = "NavBar_HospitalHeader">{hospitalIDString}</text>
            </div>
            <div className = "NavBar_RightPanel">
                <nav><Link className = "NavBar_MenuLink" to = "/edit">EDIT</Link></nav>
                <nav><Link className = "NavBar_MenuLink" to = "/edit">PREVIEW</Link></nav>
                <nav><Link className = "NavBar_MenuLink" to = "/edit">EXPORT</Link></nav>
            </div>
        </div>
    )
}