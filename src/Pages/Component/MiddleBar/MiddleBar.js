import React from 'react';
import "./MiddleBar.css";
import { ConstraintsCheckbox } from './ConstraintsCheckbox'
import { NotesLine } from './NotesLine'

import { useSelector, useDispatch } from 'react-redux'
import { 
    selectMed, 
    updateMedName,
    updateMedUnits,
    updateMedConc,
} from '../../../Store/Slices/MedSlice';

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
                Constraints
            </div>
            {renderUnitButtons(medData.units, dispatch)}
            <div className = 'ConcentrationText'>
                <input type = 'text' value = {medData.conc} onChange = {e => dispatch(updateMedConc(e.target.value))} style={{ width: "3.5vw", textAlign: 'center' } }/>
            </div>
                {/* <div className = 'FirstDosageText'>
                    <input type = 'text' value = {this.state.firstDosage} onChange = {this.handlefirstDosageChange} style={{ width: "3.5vw", textAlign: 'center'}}/>
                </div>
                <div className = 'SubsequentDosageText'>
                    <input type = 'text' value = {this.state.subsequentDosage} onChange = {this.handlesubsequentDosageChange} style ={{ width: "3.5vw", textAlign: 'center'}}/>
                </div> */}
            {/* <div className = "FirstDosageTitle">
                FIRST:
            </div>
            <div className = "FirstDosageUnits">
                {medData.units}/kg
            </div>
            <div className = "SubsequentTitle">
                SUBSEQUENT:
            </div>
            <div className = "SubsequentDosageUnits">
                {medData.units}/kg
            </div> */}
            {/* <div className = 'SingleDoseHeader'>
                Single Dose
            </div> */}
            {/* <div className = 'SingleMin'>
                <ConstraintsCheckbox unitType = {medData.units} constraintType = "MIN"/>
            </div>
            <div className = 'SingleMax'>
                <ConstraintsCheckbox unitType = {medData.units} constraintType = "MAX"/>
            </div> */}
            {/* <div className = 'CumlDoseHeader'>
                Cuml. Dose
            </div> */}
            {/* <div className = 'CumlMin'>
                <ConstraintsCheckbox unitType = {medData.units} constraintType = "MIN"/>
            </div>
            <div className = 'CumlMax'>
                <ConstraintsCheckbox unitType = {medData.units} constraintType = "MAX"/>
            </div> */}
            <div className= 'NotesHeader'>
                Notes:
            </div>
            {/* <div className = 'NotesLines'>
                <NotesLine lineNum = "1"/>
                <NotesLine lineNum = "2"/>
                <NotesLine lineNum = "3"/>
            </div> */}
            {/* <div className = 'HistoryTracking'>
                <input type = "checkbox" onChange = {this.handlehistoryTrackingChange}/>
                <label> ENABLE HISTORY TRACKING </label>
            </div>
            <div className = 'AdditionalInformation'>
                <input type = "checkbox" onChange = {this.additionalInformationChange}/>
                <label> ADD ADDITIONAL INFORMATION </label>
            </div> */}
            <div className = 'bottomPadding'>
            </div>
            <div className = 'Background'>
            </div>
        </div>
    );
}

