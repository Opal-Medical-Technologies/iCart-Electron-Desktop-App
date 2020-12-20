import React from 'react';
import "./index.css";
import {Link} from 'react-router-dom';

function Export(){
    return(
        <div className = "Export">
            Export
        </div>
    )
}

function Preview(){
    return(
        <nav>
            <ul>
                <Link className = 'Preview' to = "/AppPreview">
                <div> Preview </div>
                </Link>
            </ul>
        </nav>
    )
}

function HospitalName(){
    return(
        <div className = "HospitalName">
            Helen DeVos Children's Hospital - Pharmacy A21
        </div>
    )
}

function AccountImage(){
    return(
        <div className = "AccountImage">
            <img src = "/images/accountvector.png" alt =""/>
        </div>
    )
}

export function TopBar(){
    return(
        <div className = "TopBar">
            <HospitalName />
            <Export />
            <Preview />
            <AccountImage />
        </div>
    )
}