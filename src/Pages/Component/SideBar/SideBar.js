import React from 'react';
import "./SideBar.css";


export default function SideBar() {
    return(
        <div className = "Side-Bar">
            <div className = "Side-Bar__Bottom-Bar">

                <div className = "Side-Bar__Bottom-Bar__Logo">
                    <img src = "/images/Logo.png"/>
                </div>

                <div className = "Side-Bar__Bottom-Bar__Version-Text">
                    <div>Version 1.0</div>
                    <div>Updated 12/20/2021</div>
                </div>
            </div>
        </div>
    )
}