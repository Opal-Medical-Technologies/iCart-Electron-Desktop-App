import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import {selectInfo} from '../../Store/MedSlice/MedSlice'
import './NavigationBar.css';

export default function NavigationBar() {
    const pharmaInfo = useSelector(selectInfo)
    let hospitalIDString = pharmaInfo.hospitalName + ': ' + pharmaInfo.hospitalUnit;
    
    return(
        <div className = 'NavBar_Base'>
            <div className = 'NavBar_LeftPanel'>
                <img className = 'NavBar_AccountMenuImage' src = '/images/accountvector.png'/>
                <text className = 'NavBar_HospitalHeader'>{hospitalIDString}</text>
            </div>
            {/* <div className = 'NavBar_RightPanel'>
                <nav><Link className = 'NavBar_MenuLink' to = '/edit'>EDIT</Link></nav>
                <nav><Link className = 'NavBar_MenuLink' to = '/edit'>PREVIEW</Link></nav>
                <nav><Link className = 'NavBar_MenuLink' to = '/edit'>EXPORT</Link></nav>
            </div> */}
        </div>
    )
}