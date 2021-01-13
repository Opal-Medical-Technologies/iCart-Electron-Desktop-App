import {React, useEffect } from 'react';
import styled from 'styled-components';
import * as eva from 'eva-icons';

const StyledExportPage = styled.div`
    float: right;
`

const StyledExpandingButton = styled.button`
    background-color: transparent;
    color: #088e80;
    border: 2px solid #088e80;
    shadow: none;
    border-radius: 20px;
    padding: 5px 10px;


    & span {
        max-width: 0;
        -webkit-transition: max-width 1s;
        transition: max-width 1s;
        display: inline-block;
        vertical-align: top;
        white-space: nowrap;
        overflow: hidden;
    }

    &:hover span{
        max-width: 7rem;
        color: #088e80;
    }

    &:focus span {
        color: lightgray;
    }

`;

export default function ExportPage() {
    
    useEffect(() => { eva.replace(); }, []);

    return (
        <StyledExportPage>
            <StyledExpandingButton>
                <span>ADD STAMPS</span>
                <i data-eva='checkmark-square-outline' data-eva-fill= '#088e80' />
            </StyledExpandingButton>
        </StyledExportPage>
    )
}

