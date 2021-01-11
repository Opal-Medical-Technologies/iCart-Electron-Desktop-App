import React from 'react';
import { useSelector } from 'react-redux';
import {selectInfo} from '../../Store/MedSlice/MedSlice';
import styled from 'styled-components';

import PreviewPane from './PreviewPane/PreviewPane';
import InputPane from './InputPane/InputPane';

const StyledEditPage_Base = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`;

const StyledEditPage_CenterPanel = styled.div`
    border-right: 1px solid;
    position: absolute;
    top: 0%;
    left: 0%;
    height: 100%;
    width: 50%;
`;

const StyledEditPage_RightPanel = styled.div`
    position: absolute;
    top: 0%;
    right: 0%;
    height: 100%;
    width: 50%;
`;
  
const StyledEditPage_Empty = styled.div`
    text-align: center;
    font-size: 500%;
    font-weight: 600;
    margin: auto;
    margin-top: 20%;
`;

export default function EditPage() {
    const medInfo = useSelector(selectInfo)
    return (medInfo.medList.length > 0) ? (
        <StyledEditPage_Base>
            <StyledEditPage_CenterPanel>
                <InputPane/>
            </StyledEditPage_CenterPanel>
            <StyledEditPage_RightPanel>
                <PreviewPane/>
            </StyledEditPage_RightPanel>
        </StyledEditPage_Base>
    ) 
    : (
        <StyledEditPage_Empty> Press + to add a medication. </StyledEditPage_Empty>
    )
}