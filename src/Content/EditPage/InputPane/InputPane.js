import {React, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'

import "./InputPane.css";
import { 
    selectMed,
    updateMedName, 
    updateMedUnits,
    updateMedConc,
    addDosageSet,
    deleteDosageSet,
    updateDosageWeights,
    updateFirstDosageWeightScale,
    addFirstDosageButton,
    deleteFirstDosageButton,
    updateFirstDosageButton,
    addSequentialDosage,
    updateSequentialDosageWeightScale,
    addSequentialDosageButton,
    deleteSequentialDosageButton,
    updateSequentialDosageButton,

    addConstraintsSet,
    deleteConstraintsSet,
    updateConstraintsWeights,
    addSingleMinConstraint,
    addSingleMaxConstraint,
    addCumulativeMinConstraint,
    addCumulativeMaxConstraint,
    deleteSingleMinConstraint,
    deleteSingleMaxConstraint,
    deleteCumulativeMinConstraint,
    deleteCumulativeMaxConstraint,
    updateSingleMinConstraint,
    updateSingleMaxConstraint,
    updateCumulativeMinConstraint,
    updateCumulativeMaxConstraint,

    addNotesSet,
    deleteNotesSet,
    updateNotesWeights,
    updateNotesText,
} from '../../../Store/MedSlice/MedSlice';

const units = ['mg', 'g', 'mcg', 'mEq', 'Eq'];


export default function InputPane() {
    const medData = useSelector(selectMed);
    const dispatch = useDispatch();
    console.log(medData)

    return(
        <div className = "InputPane">
            {TitleBox(medData, dispatch)}
            {UnitsBox(medData, dispatch)}
            {ConcentrationBox(medData, dispatch)}
        </div>
    );
}

function TitleBox(medData, dispatch) {
    return (
        <div className="InputPane_TitleBox">
            <input className="InputPane_TitleBox_Name" type='text' value={medData.name} onChange={e => dispatch(updateMedName(e.target.value))}/>
            <div className="InputPane_TitleBox_FolderPath">
                ACTIVE/MEDICATIONS
            </div>
            <hr className="InputPane_TitleBox_Divider"/>
        </div>
    )
}

function UnitsBox(medData, dispatch) {
    return (
        <div className="InputPane_WidgetBox">
            <div className="InputPane_WidgetBox_Title">
                Units:
            </div>
            <hr className="InputPane_WidgetBox_Divider"/>
            <div className = "InputPane_UnitsBox_Units">
                {units.map(unit => (
                    <button className={unit == medData.units ? "Active-Unit-Button" : "Inactive-Unit-Button"} onClick = {() => dispatch(updateMedUnits(unit))}>
                        {unit}
                    </button>
                ))}
            </div>
        </div>
    )
}

function ConcentrationBox(medData, dispatch) {
    return (
        <div className="InputPane_WidgetBox">
            <div className="InputPane_WidgetBox_Title">
                Concentration:
            </div>
            <hr className="InputPane_WidgetBox_Divider"/>
            <div className = 'InputPane_ConcentrationBox_Input'>
                <input type ='text' value = {medData.conc} onChange = {e => dispatch(updateMedConc(e.target.value))} style={{ width: "3.5vw", textAlign: 'center' } }/>
            </div>
            <div className = "InputPane_ConcentrationBox_Units">
                {medData.units}/mL
            </div>

        </div>
    )
}

function DosageBox(medDat, dispatch) {

}