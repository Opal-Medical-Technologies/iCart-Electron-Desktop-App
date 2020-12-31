import React from 'react';

import './EditPage.css';
import PreviewPane from './PreviewPane/PreviewPane';
import InputPane from './InputPane/InputPane';

export default function EditPage() {
    return (
        <div className = 'EditPage_Base'>
            <div className = 'EditPage_CenterPanel'>
                <InputPane/>
            </div>
            <div className = 'EditPage_RightPanel'>
                <PreviewPane/>
            </div>
        </div>
    )
}