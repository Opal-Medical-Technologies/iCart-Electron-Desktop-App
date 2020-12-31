import React from 'react';

import './EditPage.css';
import PreviewPane from './PreviewPane/PreviewPane';

export default function EditPage() {
    return (
        <div className = 'EditPage_Base'>
            <div className = 'EditPage_CenterPanel'></div>
            <div className = 'EditPage_RightPanel'>
                <PreviewPane/>
            </div>
        </div>
    )
}