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
import { render } from '@testing-library/react';

const UNITS = ['mg', 'g', 'mcg', 'mEq', 'Eq'];
const WEIGHTS = ["3", "4", "5", "6-7", "8-9", "10-11", "12-14", "15-18", "19-23", "24-29", "30-36"]
const BUTTON_COLORS = ["grey", "grey", "grey", "pink", "red", "purple", "yellow", "white", "blue", "orange", "green"]
const TEXT_COLORS = ["white", "white", "white", "white", "white", "white", "black", "black", "white", "white", "white"]


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
                            {RenderWeightsToggle({weights:dosage.weights, updateWeightsFunction: updateDosageWeights, dispatch: props.dispatch, setIndex: index})}
                        </div>
                    ))}
            </div>
            <button className="InputPane_WidgetBox_PlusButton">
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
            </div>
            <button className="InputPane_WidgetBox_PlusButton">
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
            </div>
            <button className="InputPane_WidgetBox_PlusButton">
                +
            </button>
        </div>
    )
}

function RenderWeightsToggle(props) {
    const [showMenu, setShowMenu] = useState(false);
    let activeWeights = [];

    for (let i = 0; i < props.weights.length; ++i) {
        if (props.weights[i]) {
            activeWeights.push(
                <div className = "InputPane_SelectedWeight" style={{"backgroundColor": BUTTON_COLORS[i], "color": TEXT_COLORS[i]}}>
                    {WEIGHTS[i] + "kg"}
                </div>
            );

        }
    }

    return (
        <div className = "InputPane_WeightSelectionWrapper">
            <div className = "InputPane_SelectedWeights">
                {
                    showMenu ? (
                        <div>
                            {props.weights.map((weightBool, index) => (
                                <div className="InputPane_WeightSelectCheckboxWrapper" style={{"backgroundColor": BUTTON_COLORS[index], "color": TEXT_COLORS[index]}}>
                                    <input className = "InputPane_WeightSelectCheckbox" type="checkbox" checked={weightBool} onClick={() => props.dispatch(props.updateWeightsFunction({
                                        setIndex: props.setIndex,
                                        weightIndex: index,
                                        weight: !weightBool
                                    }))}/>
                                    <div className = "InputPane_WeightSelectCheckboxDisplay">
                                        {WEIGHTS[index] + "kg"}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                    : activeWeights
                }
            </div>
            <div className = "InputPane_WeightSelector">
                <button className = "InputPane_WeightSelectorButton" onClick={() => {
                    setShowMenu(!showMenu);
                }}>
                    {showMenu ? "Done" : "Edit"}
                </button>
            </div>
        </div>
    )
    
}