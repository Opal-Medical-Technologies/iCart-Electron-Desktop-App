import styled from 'styled-components';

import {FiEdit} from 'react-icons/fi';
import './ExportPage.css'

const StyledExportPage = styled.div`
    float: right;
`


const StyledExpandingButton = styled.button`
    
    &span {
        max-width: 0;
        -webkit-transition: max-width 1s;
        transition: max-width 1s;
        display: inline-block;
        vertical-align: top;
        white-space: nowrap;
        overflow: hidden;
    }

    &:hover span {
        max-width: 7rem;
        color: blue;
    }

    &:focus span {
        color: green;
    }



`;



export default function ExportPage() {
    return (
        <StyledExportPage>
            <StyledExpandingButton>
                <span>Different text</span>
                <FiEdit/>
            </StyledExpandingButton>
        </StyledExportPage>
    )
}

