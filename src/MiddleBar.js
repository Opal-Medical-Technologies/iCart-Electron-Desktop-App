import React from 'react';
import "./MiddleBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Form } from './TextBoxes.js';


class MiddleBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active : 'mg'
        }
        this.toggleUnit = this.toggleUnit.bind(this)
    }
toggleUnit (unit) {
    this.setState({active : unit});
}
    render(){

        return(
            <div className = "MiddleBar">
                <MedicationTitle />
                <FolderPath />
                <Divider />
                <UnitsTitle />
                <Background />
                <ConcentrationTitle />
                <ConcentrationUnits unitType = {this.state.active}/>
                <DosageConfigurationTitle />
                <ConstraintsTitle />
                <UnitsToggle activeUnit = {this.state.active} toggleUnit = {this.toggleUnit} />
                <Form />
                <FirstDosageTitle />
                <FirstDosageUnits unitType = {this.state.active}/>
                <SubsequentTitle />
                <SubsequentDosageUnits  unitType = {this.state.active}/>
            </div>
        );
    }
}
    export default MiddleBar;


function MedicationTitle() {
    return(
        <div className = "MedicationTitle">
            Adenosine (IV)
        </div>
    )
}

function FolderPath() {
    return(
        <div className = "FolderPath">
            ACTIVE/MEDICATIONS
        </div>
    )
}

function Divider() {
    return(
        <div className = "Divider">
        </div>
    )
}

function UnitsTitle() {
    return(
        <div className = "UnitsTitle">
            Units:
        </div>
    )
}

function ConcentrationTitle() {
    return(
        <div className = "ConcentrationTitle">
            Concentration:
        </div>
    )
}

function DosageConfigurationTitle() {
    return(
        <div className = "DosageConfigurationTitle">
            Dosage Configuration:
        </div>
    )
}

function ConstraintsTitle() {
    return(
        <div className = "ConstraintsTitle">
            CONSTRAINTS
        </div>
    )
}

function Background() {
    return(
        <div className = "Background">
        </div>
    )
}

function FirstDosageTitle() {
    return(
        <div className = "FirstDosageTitle">
            FIRST:
        </div>
    )
}

function FirstDosageUnits(props) {
    return(
        <div className = "FirstDosageUnits">
            {props.unitType}/kg
        </div>
    )
}

function ConcentrationUnits(props) {
    return(
        <div className = "ConcentrationUnits">
            {props.unitType}/mL
        </div>
    )
}

function SubsequentTitle() {
    return(
        <div className = "SubsequentTitle">
            SUBSEQUENT:
        </div>
    )
}

function SubsequentDosageUnits(props) {
    return(
        <div className = "SubsequentDosageUnits">
            {props.unitType}/kg
        </div>
    )
}

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
function UnitsToggle (props) {
    //const [active, setActive] = useState(units[0]);
    return(
        <div className = "Units">
            {units.map(unit => (
                <ButtonToggle active = {props.activeUnit === unit} onClick = {() => props.toggleUnit(unit)}>
                    {unit}
                </ButtonToggle>
            ))}
        </div>
    )
}