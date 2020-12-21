import React from 'react';
import './AppPreview.css'

export function AppPreview() {
    return(
        <div>
            <div className = 'TopBar'>
            </div>
            <div className = 'PreviewTopDivider'>
            </div>
            <div className = "TimelineText">
                TIMELINE
            </div>
            <div className = 'AgeandWeight'>
                38 kg, 10 yrs
            </div>
            <div className = 'PreviewSideDivider'>
            </div>
            <div className = 'DefibrillationText'>
                Defibrillation (2 J/kg)
            </div>
            <div className = 'DefibrillationValue'>
            </div>
            <div className = 'CardioversionText'>
                Cardioversion (Synchronized) (.5 J/kg)
            </div>
            <div className = 'CardioversionValue'> 
            </div>
            <div className = 'PreviewBottomDivider'>
            </div>
        </div>
    );
}