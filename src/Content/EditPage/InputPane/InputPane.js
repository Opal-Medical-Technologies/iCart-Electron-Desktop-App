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
    updateDosageWeightsAll,

    addConstraintsSet,
    deleteConstraintsSet,
    updateConstraintsWeights,
    updateConstraintsWeightsAll,
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
    updateNotesWeightsAll,
    updateNotesText,
} from '../../../Store/MedSlice/MedSlice';
import RenderWeightsToggle from './RenderWeightsToggle';
import DosageButtonInput from './DosageButtonInput';

const UNITS = ['mg', 'g', 'mcg', 'mEq', 'Eq'];


export default function InputPane() {
    const medData = useSelector(selectMed);
    const dispatch = useDispatch();
    console.log(medData)

    return (
        <div className="InputPane">
            {TitleBox({ medData: medData, dispatch: dispatch })}
            {UnitsBox({ medData: medData, dispatch: dispatch })}
            {ConcentrationBox({ medData: medData, dispatch: dispatch })}
            {DosageBox({ medData: medData, dispatch: dispatch })}
            {ConstraintsBox({ medData: medData, dispatch: dispatch })}
            {NotesBox({ medData: medData, dispatch: dispatch })}
            <div style={{ "height": "10vw" }} />
        </div>
    );
}

function TitleBox(props) {
    return (
        <div className="InputPane_TitleBox">
            <input className="InputPane_TitleBox_Name" type='text' value={props.medData.name} onChange={e => props.dispatch(updateMedName(e.target.value))} />
            <div className="InputPane_TitleBox_FolderPath">
                ACTIVE/MEDICATIONS
            </div>
            <hr className="InputPane_TitleBox_Divider" />
        </div>
    )
}

function UnitsBox(props) {
    return (
        <div className="InputPane_WidgetBox">
            <div className="InputPane_WidgetBox_Title">
                Units:
            </div>
            <hr className="InputPane_WidgetBox_Divider" />
            <div className="InputPane_UnitsBox_Units">
                {UNITS.map(unit => (
                    <button className={unit === props.medData.units ? "Active-Unit-Button" : "Inactive-Unit-Button"} onClick={() => props.dispatch(updateMedUnits(unit))}>
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
            <hr className="InputPane_WidgetBox_Divider" />
            <div className='InputPane_ConcentrationBox_Input'>
                <input type='text' value={props.medData.conc} onChange={e => props.dispatch(updateMedConc(e.target.value))} style={{ width: "3.5vw", textAlign: 'center' }} />
            </div>
            <div className="InputPane_ConcentrationBox_Units">
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
                <hr className="InputPane_WidgetBox_Divider" />
                {props.medData.dosages.map((dosage, index) => (
                    <div>
                        <RenderWeightsToggle weights={dosage.weights} updateWeightsFunction={updateDosageWeights} updateAllWeightsFunction={updateDosageWeightsAll} dispatch={props.dispatch} setIndex={index} />
                        <DosageButtonInput first={dosage.first} sequential={dosage.sequential} dispatch={props.dispatch} setIndex={index} length={props.medData.dosages.length} units={props.medData.units} />
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
                <hr className="InputPane_WidgetBox_Divider" />
                {props.medData.constraints.map((constraint, index) => (
                    <div>
                        <RenderWeightsToggle weights={constraint.weights} updateWeightsFunction={updateConstraintsWeights} updateAllWeightsFunction={updateConstraintsWeightsAll} dispatch={props.dispatch} setIndex={index} />
                        <div className="InputPane_Constraints">
                            <div className="InputPane_ConstraintsBlockWrapper">
                                <div className="InputPane_ConstraintsRowWrapper">
                                    <div className="InputPane_ContraintsText" style={{ "fontWeight": "600", "fontSize": "150%" }}>
                                        Single Dose
                                        </div>
                                    {ConstraintsLine(constraint, index, props.medData.units, props.dispatch, "smin")}
                                    {ConstraintsLine(constraint, index, props.medData.units, props.dispatch, "smax")}
                                </div>
                                <div className="InputPane_ConstraintsRowWrapper">
                                    <div className="InputPane_ContraintsText" style={{ "fontWeight": "600", "fontSize": "150%" }}>
                                        {"Cuml. Dose"}
                                    </div>
                                    {ConstraintsLine(constraint, index, props.medData.units, props.dispatch, "cmin")}
                                    {ConstraintsLine(constraint, index, props.medData.units, props.dispatch, "cmax")}
                                </div>
                            </div>
                            <div className="InputPane_DeleteConstraints">
                                <button className="InputPane_DeleteConstraintsButton" onClick={() => props.dispatch(deleteConstraintsSet(index))}>
                                    x
                                    </button>
                            </div>
                        </div>
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
                <hr className="InputPane_WidgetBox_Divider" />
                {props.medData.notes.map((note, index) => (
                    <div>
                        <div>
                            <RenderWeightsToggle weights={note.weights} updateWeightsFunction={updateNotesWeights} updateAllWeightsFunction={updateNotesWeightsAll} dispatch={props.dispatch} setIndex={index} />
                        </div>
                        <div className="InputPane_NotesBlock">
                            <div className="InputPane_NotesBlockText">
                                <input type='text' value={note.note} onChange={e => props.dispatch(updateNotesText({ setIndex: index, text: e.target.value }))} style={{ width: "90%", textAlign: 'center' }} />
                            </div>
                            <div className="InputPane_DeleteNotes">
                                <button className="InputPane_DeleteNotesButton" onClick={() => props.dispatch(deleteNotesSet(index))}>
                                    x
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="InputPane_WidgetBox_PlusButton" onClick={() => props.dispatch(addNotesSet())}>
                +
            </button>
        </div>
    )
}

function ConstraintsLine(constraint, index, units, dispatch, type) {
    let addConstraint, deleteConstraint, updateConstraint, typestring;
    if (type === "smin") {
        addConstraint = addSingleMinConstraint;
        deleteConstraint = deleteSingleMinConstraint;
        updateConstraint = updateSingleMinConstraint;
        typestring = "Min";
    }
    else if (type === "smax") {
        addConstraint = addSingleMaxConstraint;
        deleteConstraint = deleteSingleMaxConstraint;
        updateConstraint = updateSingleMaxConstraint;
        typestring = "Max";
    }
    else if (type === "cmin") {
        addConstraint = addCumulativeMinConstraint;
        deleteConstraint = deleteCumulativeMinConstraint;
        updateConstraint = updateCumulativeMinConstraint;
        typestring = "Min";
    }
    else if (type === "cmax") {
        addConstraint = addCumulativeMaxConstraint;
        deleteConstraint = deleteCumulativeMaxConstraint;
        updateConstraint = updateCumulativeMaxConstraint;
        typestring = "Max";
    }

    return (
        <div className="InputPane_ConstraintsUnit">
            <div className="InputPane_ConstraintsUnit_Text">
                {typestring}
            </div>
            <div className="InputPane_ConstraintsCheckBox">
                <input type="checkbox" checked={constraint[type] != null} onClick={() => {
                    dispatch(
                        (constraint[type] == null) ? addConstraint(index) : deleteConstraint(index)
                    )
                }} />
            </div>
            <div className="InputPane_ConstraintsInput">
                <input type='text' disabled={constraint[type] == null} value={(constraint[type] == null) ? "" : constraint[type]} onChange={e => dispatch(updateConstraint({ setIndex: index, amount: e.target.value }))} style={{ width: "3.5vw", textAlign: 'center' }} />
            </div>
            <div className="InputPane_ConstraintsUnit_Text">
                {units}
            </div>
        </div>
    )
}