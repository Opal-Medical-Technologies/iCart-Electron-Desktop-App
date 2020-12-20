import React from 'react';
import "./MiddleBar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { ConstraintsCheckbox } from './ConstraintsCheckbox'
import { NotesLine } from './NotesLine'

class MiddleBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: 'Untitled',
            active : 'mg',
            concentration: '',
            firstDosage: '',
            subsequentDosage: '',
            historyTracking: false,
            additionalInformation: false,
        }
        this.handleMedicationTitleChange = this.handleMedicationTitleChange.bind(this)
        this.toggleUnit = this.toggleUnit.bind(this)
        this.handleConcentrationChange = this.handleConcentrationChange.bind(this)
        this.handlefirstDosageChange = this.handlefirstDosageChange.bind(this)
        this.handlesubsequentDosageChange = this.handlesubsequentDosageChange.bind(this)
        this.handlehistoryTrackingChange = this.handlehistoryTrackingChange.bind(this)
    }
    toggleUnit (unit) {
        this.setState({active : unit});
    }

    handleMedicationTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleConcentrationChange = (event) => {
        this.setState({
            concentration: event.target.value
        })
    }

    handlefirstDosageChange = (event) => {
        this.setState({
            firstDosage: event.target.value
        })
    }

    handlesubsequentDosageChange = (event) => {
        this.setState({
            subsequentDosage: event.target.value
        })
    }

    handlehistoryTrackingChange = (event) => {
        this.setState({
            historyTracking: !this.state.historyTracking
        });
    }

    handleAdditionalInformationChange = (event) => {
        this.setState({
            additionalInformation: !this.state.additionalInformation
        })
    }

    render(){
        return(
            <div className = "MiddleBar">
                <form>
                    <div className = 'MedicationTitleText'>
                        <input type = 'text' value = {this.state.title} onChange = {this.handleMedicationTitleChange} />
                    </div>
                </form>
                <FolderPath />
                <Divider />
                <UnitsTitle />
                <ConcentrationTitle />
                <ConcentrationUnits unitType = {this.state.active}/>
                <DosageConfigurationTitle />
                <ConstraintsTitle />
                <UnitsToggle activeUnit = {this.state.active} toggleUnit = {this.toggleUnit} />
                <form>
                    <div className = 'ConcentrationText'>
                        <input type = 'text' value = {this.state.concentration} onChange = {this.handleConcentrationChange} style={{ width: "3.5vw", textAlign: 'center' } }/>
                    </div>
                    <div className = 'FirstDosageText'>
                        <input type = 'text' value = {this.state.firstDosage} onChange = {this.handlefirstDosageChange} style={{ width: "3.5vw", textAlign: 'center'}}/>
                    </div>
                    <div className = 'SubsequentDosageText'>
                        <input type = 'text' value = {this.state.subsequentDosage} onChange = {this.handlesubsequentDosageChange} style ={{ width: "3.5vw", textAlign: 'center'}}/>
                    </div>
                </form>
                <FirstDosageTitle />
                <FirstDosageUnits unitType = {this.state.active}/>
                <SubsequentTitle />
                <SubsequentDosageUnits  unitType = {this.state.active}/>
                <div className = 'SingleDoseHeader'>
                    Single Dose
                </div>
                <div className = 'SingleMin'>
                    <ConstraintsCheckbox unitType = {this.state.active} constraintType = "MIN"/>
                </div>
                <div className = 'SingleMax'>
                    <ConstraintsCheckbox unitType = {this.state.active} constraintType = "MAX"/>
                </div>
                <div className = 'CumlDoseHeader'>
                    Cuml. Dose
                </div>
                <div className = 'CumlMin'>
                    <ConstraintsCheckbox unitType = {this.state.active} constraintType = "MIN"/>
                </div>
                <div className = 'CumlMax'>
                    <ConstraintsCheckbox unitType = {this.state.active} constraintType = "MAX"/>
                </div>
                <div className= 'NotesHeader'>
                    Notes:
                </div>
                <div className = 'NotesLines'>
                    <NotesLine lineNum = "1"/>
                    <NotesLine lineNum = "2"/>
                    <NotesLine lineNum = "3"/>
                </div>
                <div className = 'HistoryTracking'>
                    <input type = "checkbox" onChange = {this.handlehistoryTrackingChange}/>
                    <label> ENABLE HISTORY TRACKING </label>
                </div>
                <div className = 'AdditionalInformation'>
                    <input type = "checkbox" onChange = {this.additionalInformationChange}/>
                    <label> ADD ADDITIONAL INFORMATION </label>
                </div>
                <div className = 'bottomPadding'>
                </div>
                <div className = 'Background'>
                </div>
            </div>
        );
    }
}
    export default MiddleBar;

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
width: 3.9vw;
height: 4.9vh;
transition: ease background-color 250ms;
transition: ease color 250ms;
margin: .8vw;
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

/* Button.defaultProps = {
    theme: 'white'
} */

/* export function MiddleBar() {
    return(
        <div className = "MiddleBar">
            <MedicationTitle />
            <FolderPath />
            <Divider />
            <UnitsTitle />
            <Background />
            <ConcentrationTitle />
            <ConcentrationUnits />
            <DosageConfigurationTitle />
            <ConstraintsTitle />
            <UnitButtons />
            <Form />
            <FirstDosageTitle />
            <FirstDosageUnits />
            <SubsequentTitle />
            <SubsequentDosageUnits />
        </div>
    )
} */