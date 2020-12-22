import React from 'react';
import "./MiddleBar.css";
import { ConstraintsCheckbox } from './ConstraintsCheckbox'
import { NotesLine } from './NotesLine'

import { useSelector, useDispatch } from 'react-redux'
import { 
    selectMed, 
    updateMedName,
    updateMedUnits, 
} from '../../../Store/Slices/MedSlice';

// class MiddleBar extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             title: 'Untitled',
//             active : 'mg',
//             concentration: '',
//             firstDosage: '',
//             subsequentDosage: '',
//             historyTracking: false,
//             additionalInformation: false,
//         }
//         this.handleMedicationTitleChange = this.handleMedicationTitleChange.bind(this)
//         this.toggleUnit = this.toggleUnit.bind(this)
//         this.handleConcentrationChange = this.handleConcentrationChange.bind(this)
//         this.handlefirstDosageChange = this.handlefirstDosageChange.bind(this)
//         this.handlesubsequentDosageChange = this.handlesubsequentDosageChange.bind(this)
//         this.handlehistoryTrackingChange = this.handlehistoryTrackingChange.bind(this)
//     }

//     units = ['mg', 'g', 'mcg', 'mEq', 'Eq'];

//     toggleUnit (unit) {
//         this.setState({active : unit});
//     }

//     handleMedicationTitleChange = (event) => {
//         this.setState({
//             title: event.target.value
//         })
//     }

//     handleConcentrationChange = (event) => {
//         this.setState({
//             concentration: event.target.value
//         })
//     }

//     handlefirstDosageChange = (event) => {
//         this.setState({
//             firstDosage: event.target.value
//         })
//     }

//     handlesubsequentDosageChange = (event) => {
//         this.setState({
//             subsequentDosage: event.target.value
//         })
//     }

//     handlehistoryTrackingChange = (event) => {
//         this.setState({
//             historyTracking: !this.state.historyTracking
//         });
//     }

//     handleAdditionalInformationChange = (event) => {
//         this.setState({
//             additionalInformation: !this.state.additionalInformation
//         })
//     }

//     renderUnitButtons() {
//         return(
//             <div className = "Units">
//                 {this.units.map(unit => (
//                     <button className={unit == this.state.active ? "Active-Unit-Button" : "Inactive-Unit-Button"} onClick = {() => this.toggleUnit(unit)}>
//                         {unit}
//                     </button>
//                 ))}
//             </div>
//         )
//     }

//     render(){
//         return(
//             <div className = "MiddleBar">
//                 <div className = 'MedicationTitleText'>
//                     <input type = 'text' value = {this.state.title} onChange = {this.handleMedicationTitleChange} />
//                 </div>
//                 <div className = "FolderPath">
//                     ACTIVE/MEDICATIONS
//                 </div>
//                 <div className = "Divider"></div>
//                 <div className = "UnitsTitle">
//                     Units:
//                 </div>
//                 <div className = "ConcentrationTitle">
//                     Concentration:
//                 </div>
//                 <div className = "ConcentrationUnits">
//                     {this.state.active}/mL
//                 </div>
//                 <div className = "DosageConfigurationTitle">
//                     Dosage Configuration:
//                 </div>
//                 <div className = "ConstraintsTitle">
//                     CONSTRAINTS
//                 </div>
//                 {this.renderUnitButtons()}
//                 <form>
//                     <div className = 'ConcentrationText'>
//                         <input type = 'text' value = {this.state.concentration} onChange = {this.handleConcentrationChange} style={{ width: "3.5vw", textAlign: 'center' } }/>
//                     </div>
//                     <div className = 'FirstDosageText'>
//                         <input type = 'text' value = {this.state.firstDosage} onChange = {this.handlefirstDosageChange} style={{ width: "3.5vw", textAlign: 'center'}}/>
//                     </div>
//                     <div className = 'SubsequentDosageText'>
//                         <input type = 'text' value = {this.state.subsequentDosage} onChange = {this.handlesubsequentDosageChange} style ={{ width: "3.5vw", textAlign: 'center'}}/>
//                     </div>
//                 </form>
//                 <div className = "FirstDosageTitle">
//                     FIRST:
//                 </div>
//                 <div className = "FirstDosageUnits">
//                     {this.state.active}/kg
//                 </div>
//                 <div className = "SubsequentTitle">
//                     SUBSEQUENT:
//                 </div>
//                 <div className = "SubsequentDosageUnits">
//                     {this.state.active}/kg
//                 </div>
//                 <div className = 'SingleDoseHeader'>
//                     Single Dose
//                 </div>
//                 <div className = 'SingleMin'>
//                     <ConstraintsCheckbox unitType = {this.state.active} constraintType = "MIN"/>
//                 </div>
//                 <div className = 'SingleMax'>
//                     <ConstraintsCheckbox unitType = {this.state.active} constraintType = "MAX"/>
//                 </div>
//                 <div className = 'CumlDoseHeader'>
//                     Cuml. Dose
//                 </div>
//                 <div className = 'CumlMin'>
//                     <ConstraintsCheckbox unitType = {this.state.active} constraintType = "MIN"/>
//                 </div>
//                 <div className = 'CumlMax'>
//                     <ConstraintsCheckbox unitType = {this.state.active} constraintType = "MAX"/>
//                 </div>
//                 <div className= 'NotesHeader'>
//                     Notes:
//                 </div>
//                 <div className = 'NotesLines'>
//                     <NotesLine lineNum = "1"/>
//                     <NotesLine lineNum = "2"/>
//                     <NotesLine lineNum = "3"/>
//                 </div>
//                 <div className = 'HistoryTracking'>
//                     <input type = "checkbox" onChange = {this.handlehistoryTrackingChange}/>
//                     <label> ENABLE HISTORY TRACKING </label>
//                 </div>
//                 <div className = 'AdditionalInformation'>
//                     <input type = "checkbox" onChange = {this.additionalInformationChange}/>
//                     <label> ADD ADDITIONAL INFORMATION </label>
//                 </div>
//                 <div className = 'bottomPadding'>
//                 </div>
//                 <div className = 'Background'>
//                 </div>
//             </div>
//         );
//     }
// }

const units = ['mg', 'g', 'mcg', 'mEq', 'Eq'];

function renderUnitButtons(activeUnits, dispatch) {
    return(
        <div className = "Units">
            {units.map(unit => (
                <button className={unit == activeUnits ? "Active-Unit-Button" : "Inactive-Unit-Button"} onClick = {() => dispatch(updateMedUnits(unit))}>
                    {unit}
                </button>
            ))}
        </div>
    )
}
    

export default function MiddleBar() {
    const medData = useSelector(selectMed);
    const dispatch = useDispatch();
    console.log(medData)

    return(
        <div className = "MiddleBar">
            <div className = 'MedicationTitleText'>
                <input type = 'text' value={medData.name} onChange={e => dispatch(updateMedName(e.target.value))}/>
            </div>
            <div className = "FolderPath">
                ACTIVE/MEDICATIONS
            </div>
            <div className = "Divider"></div>
            <div className = "UnitsTitle">
                Units:
            </div>
            <div className = "ConcentrationTitle">
                Concentration:
            </div>
            <div className = "ConcentrationUnits">
                {medData.units}/mL
            </div>
            <div className = "DosageConfigurationTitle">
                Dosage Configuration:
            </div>
            <div className = "ConstraintsTitle">
                CONSTRAINTS
            </div>
            {renderUnitButtons(medData.units, dispatch)}
            {/*<form>
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
            <div className = "FirstDosageTitle">
                FIRST:
            </div>
            <div className = "FirstDosageUnits">
                {this.state.active}/kg
            </div>
            <div className = "SubsequentTitle">
                SUBSEQUENT:
            </div>
            <div className = "SubsequentDosageUnits">
                {this.state.active}/kg
            </div>
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
            </div> */}
        </div>
    );
}

