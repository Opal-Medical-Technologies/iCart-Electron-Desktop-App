import React from 'react';
import {Link} from 'react-router-dom';
import "./TopBar.css"

export default function TopBar(){
    return(
        <div className = "Top-Bar">
            
            <div className = "Top-Bar__HospitalName">
                Helen DeVos Children's Hospital - Pharmacy A21
            </div>

            <div className = "Top-Bar__Export">
            Export
            </div>

            <nav>
                <ul>
                    <Link className = 'Top-Bar__Preview' to = "/AppPreview">
                    <div> Preview </div>
                    </Link>
                </ul>
            </nav>

            <div className = "Top-Bar__AccountImage">
                <img src = "/images/accountvector.png" alt =""/>
            </div>
        </div>
    )
}