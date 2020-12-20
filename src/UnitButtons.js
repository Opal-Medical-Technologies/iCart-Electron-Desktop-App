import React, {useState} from 'react';
import styled from 'styled-components';
import "./UnitButtons.css";

const Button = styled.button`
background-color: white;
color: black;
border-radius: 30px;
outline: none !important;
border-width: 1px;
width: 50px;
height: 29px;
transition: ease background-color 250ms;
transition: ease color 250ms;
margin: 10px;
cursor: pointer;
&: hover{
    background-color: grey;
    color: white;
`

const units = ['mg', 'g', 'mcg', 'mEq', 'Eq'];
const ButtonToggle = styled(Button)`
    ${({ active }) => 
        active &&
        `
        color: white;
        background-color: grey;
        outline: none;
        `}
`;
function UnitsToggle () {
    const [active, setActive] = useState(units[0]);
    return(
        <div>
            {units.map(unit => (
                <ButtonToggle active = {active === unit} onClick = {() => setActive(unit)}>
                    {unit}
                </ButtonToggle>
            ))}
        </div>
    )
}

/* Button.defaultProps = {
    theme: 'white'
} */

export function UnitButtons (){
    return(
        <div className = 'Units'>
            <UnitsToggle />
        </div>
    )
}