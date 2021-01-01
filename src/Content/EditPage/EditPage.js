import React from 'react';
import { useSelector } from 'react-redux'
import {selectInfo} from '../../Store/MedSlice/MedSlice'

import './EditPage.css';
import PreviewPane from './PreviewPane/PreviewPane';
import InputPane from './InputPane/InputPane';

export default function EditPage() {
    const medInfo = useSelector(selectInfo)
    return (medInfo.medList.length > 0) ? (
        <div className = 'EditPage_Base'>
            <div className = 'EditPage_CenterPanel'>
                <InputPane/>
            </div>
            <div className = 'EditPage_RightPanel'>
                <PreviewPane/>
            </div>
        </div>
    ) 
    : (
        <div className="EditPage_Empty">
            Press + to add a medication.
        </div>
    )
}