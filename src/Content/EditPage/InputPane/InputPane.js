import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

import "./InputPane.css";
import { 
    selectMed,
    updateMedName, 
    updateMedUnits,
    updateMedConc,
    addDosageSet,
    updateDosageWeights,

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
import RenderWeightsToggle from './RenderWeightsToggle';
import DosageButtonInput from './DosageButtonInput';

const UNITS = ['mg', 'g', 'mcg', 'mEq', 'Eq'];


export default function InputPane() {
    const medData = useSelector(selectMed);
    const dispatch = useDispatch();
    console.log(medData)

    return(
        <div className = "InputPane">
            {TitleBox({medData: medData, dispatch:dispatch})}
            {UnitsBox({medData: medData, dispatch:dispatch})}
            {ConcentrationBox({medData: medData, dispatch:dispatch})}
            {DosageBox({medData: medData, dispatch:dispatch})}
            {ConstraintsBox({medData: medData, dispatch:dispatch})}
            {NotesBox({medData: medData, dispatch:dispatch})}
        </div>
    );
}

function TitleBox(props) {
    return (
        <div className="InputPane_TitleBox">
            <input className="InputPane_TitleBox_Name" type='text' value={props.medData.name} onChange={e => props.dispatch(updateMedName(e.target.value))}/>
            <div className="InputPane_TitleBox_FolderPath">
                ACTIVE/MEDICATIONS
            </div>
            <hr className="InputPane_TitleBox_Divider"/>
        </div>
    )
}

function UnitsBox(props) {
    return (
        <div className="InputPane_WidgetBox">
            <div className="InputPane_WidgetBox_Title">
                Units:
            </div>
            <hr className="InputPane_WidgetBox_Divider"/>
            <div className = "InputPane_UnitsBox_Units">
                {UNITS.map(unit => (
                    <button className={unit == props.medData.units ? "Active-Unit-Button" : "Inactive-Unit-Button"} onClick = {() => props.dispatch(updateMedUnits(unit))}>
                        {unit}
                    </button>
                ))}
            </div>
        </div>
    )
}

function ConcentrationBox(props) {
    return (
        <div className="InputPane_WidgetBox">
            <div className="InputPane_WidgetBox_Title">
                Concentration:
            </div>
            <hr className="InputPane_WidgetBox_Divider"/>
            <div className = 'InputPane_ConcentrationBox_Input'>
                <input type ='text' value = {props.medData.conc} onChange = {e => props.dispatch(updateMedConc(e.target.value))} style={{ width: "3.5vw", textAlign: 'center' } }/>
            </div>
            <div className = "InputPane_ConcentrationBox_Units">
                {props.medData.units}/mL
            </div>

        </div>
    )
}

function DosageBox(props) {
    return (
        <div className="InputPane_WidgetBox_Wrapper">
            <div className="InputPane_WidgetBox_Plus">
                <div className="InputPane_WidgetBox_Title">
                    Dosage:
                </div>
                <hr className="InputPane_WidgetBox_Divider"/>
                {props.medData.dosages.map((dosage, index) => (
                        <div>
                            <RenderWeightsToggle weights={dosage.weights} updateWeightsFunction={updateDosageWeights} dispatch={props.dispatch} setIndex={index}/>
                            <DosageButtonInput first={dosage.first} sequential={dosage.sequential} dispatch={props.dispatch} setIndex={index}/>
                        </div>
                ))}
            </div>
            <button className="InputPane_WidgetBox_PlusButton" onClick={() => props.dispatch(addDosageSet())}>
                +
            </button>
        </div>
    )
}

function ConstraintsBox(props) {
    return (
        <div className="InputPane_WidgetBox_Wrapper">
            <div className="InputPane_WidgetBox_Plus">
                <div className="InputPane_WidgetBox_Title">
                    Constraints:
                </div>
                <hr className="InputPane_WidgetBox_Divider"/>
                {props.medData.constraints.map((constraint, index) => (
                        <div>
                            <RenderWeightsToggle weights={constraint.weights} updateWeightsFunction={updateConstraintsWeights} dispatch={props.dispatch} setIndex={index}/>
                        </div>
                ))}
            </div>
            <button className="InputPane_WidgetBox_PlusButton" onClick={() => props.dispatch(addConstraintsSet())}>
                +
            </button>
        </div>
    )
}

function NotesBox(props) {
    return (
        <div className="InputPane_WidgetBox_Wrapper">
            <div className="InputPane_WidgetBox_Plus">
                <div className="InputPane_WidgetBox_Title">
                    Notes:
                </div>
                <hr className="InputPane_WidgetBox_Divider"/>
                {props.medData.notes.map((note, index) => (
                        <div>
                            <RenderWeightsToggle weights={note.weights} updateWeightsFunction={updateNotesWeights} dispatch={props.dispatch} setIndex={index}/>
                        </div>
                ))}
            </div>
            <button className="InputPane_WidgetBox_PlusButton" onClick={() => props.dispatch(addNotesSet())}>
                +
            </button>
        </div>
    )
}