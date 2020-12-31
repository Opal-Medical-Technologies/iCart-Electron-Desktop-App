import React from 'react';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import {selectInfo} from '../../Store/MedSlice/MedSlice'
import './NavigationBar.css';

export default function NavigationBar() {
    const pharmaInfo = useSelector(selectInfo)
    let hospitalIDString = pharmaInfo.hospitalName + ': ' + pharmaInfo.hospitalUnit;
    
    return(
        <div className = 'NavigationBar_Base'>
            <div className = 'NavigationBar_LeftPanel'>
                <img className = 'NavigationBar_AccountMenuImage' src = '/images/accountvector.png'/>
                <text className = 'NavigationBar_HospitalHeader'>{hospitalIDString}</text>
            </div>
            <div className = 'NavigationBar_RightPanel'>
                <Link className = 'NavigationBar_MenuLink' to = '/'>
                    <button className="NavigationBar_LinkButton">
                        Home
                    </button>
                </Link>
                <Link className = 'NavigationBar_MenuLink' to = '/edit'>
                    <button className="NavigationBar_LinkButton">
                        Edit
                    </button>
                </Link>
                <Link className = 'NavigationBar_MenuLink' to = '/preview'>
                    <button className="NavigationBar_LinkButton">
                        Preview
                    </button>
                </Link>
                <Link className = 'NavigationBar_MenuLink' to = '/export'>
                    <button className="NavigationBar_LinkButton">
                        Export
                    </button>
                </Link>
            </div>
        </div>
    )
}