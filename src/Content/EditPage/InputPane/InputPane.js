import React from 'react';
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
    deleteSequentialDosage,
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



class RenderWeightsToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
    }

    render() {
        let activeWeights = [];
    
        for (let i = 0; i < this.props.weights.length; ++i) {
            if (this.props.weights[i]) {
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
                        this.state.showMenu ? (
                            <div>
                                {this.props.weights.map((weightBool, index) => (
                                    <div className="InputPane_WeightSelectCheckboxWrapper" style={{"backgroundColor": BUTTON_COLORS[index], "color": TEXT_COLORS[index]}}>
                                        <input className = "InputPane_WeightSelectCheckbox" type="checkbox" checked={weightBool} onClick={() => this.props.dispatch(this.props.updateWeightsFunction({
                                            setIndex: this.props.setIndex,
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
                    <button className = "InputPane_WeightSelectorButton" onClick={() => this.setState({showMenu: !this.state.showMenu})}>
                        {this.state.showMenu ? "Done" : "Edit"}
                    </button>
                </div>
            </div>
        )
    }
}

class DosageButtonInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
    }

    renderDosageButtons(amounts, first) {
        let updateButton, deleteButton, addButton;
        if (first) {
            updateButton = updateFirstDosageButton;
            deleteButton = deleteFirstDosageButton;
            addButton = addFirstDosageButton;
        }
        else {
            updateButton = updateSequentialDosageButton;
            deleteButton = deleteSequentialDosageButton;
            addButton = addSequentialDosageButton;
        }

        return (
            <div className="InputPane_DosageInputTextWrapper">
            {amounts.map((dose, index) => (
                <div className="InputPane_DosageInput">
                    <input className="InputPane_DosageInputText" type ='text' value = {dose} onChange = {e => this.props.dispatch(updateButton({setIndex: this.props.setIndex, updateIndex: index, amount: e.target.value}))} style={{ width: "3.5vw", textAlign: 'center'} }/>
                    <button className="InputPane_DeleteDosageButton" onClick={() => this.props.dispatch(deleteButton({setIndex: this.props.setIndex, deleteIndex: index}))}>
                    x
                    </button>
                </div>
            ))}
            {
                (this.props.first.amounts.length < 6) ? (
                    <button className="InputPane_AddDosageInputButton" onClick={() => this.props.dispatch(addButton(this.props.setIndex))}>
                    +
                    </button>
                )
                : (
                    null
                )
            }
        </div>
        )
    }

    render() {
        return (
            <div className="InputPane_DosageButtonInputWrapper">
                <div className="InputPane_DosageButtons">
                    {
                        (this.props.sequential==null) ? (
                            <div>
                                <div className="InputPane_DosageButtonText">
                                    Dosages:
                                </div>
                                {this.renderDosageButtons(this.props.first.amounts, true)}
                            </div>
                        )
                        : (
                            <div>
                                <div className="InputPane_DosageButtonText">
                                    First Dosages:
                                </div>
                                {this.renderDosageButtons(this.props.first.amounts, true)}
                                <div className="InputPane_DosageButtonText">
                                    Sequential Dosages:
                                </div>
                                {this.renderDosageButtons(this.props.sequential.amounts, false)}
                            </div>
                        )
                    }
                </div>
                <div className="InputPane_DosageOptions">
                    <button className="InputPane_DosageOptionsButton" onClick={() => this.setState({showMenu: !this.state.showMenu})}>
                        . . .
                    </button>
                    {
                        (this.state.showMenu) ? (
                            <div className="InputPane_DosageOptionDropdown">
                                <button className="InputPane_DosageOptionDropdownButton" onClick={() => 
                                {this.props.dispatch(deleteDosageSet(this.props.setIndex));
                                this.setState({showMenu: !this.state.showMenu});}
                                }>
                                    Delete
                                </button>
                                <button className="InputPane_DosageOptionDropdownButton" onClick={() => 
                                    {
                                        (this.props.sequential==null) ? this.props.dispatch(addSequentialDosage(this.props.setIndex)) : this.props.dispatch(deleteSequentialDosage(this.props.setIndex));
                                        this.setState({showMenu: !this.state.showMenu});
                                    }
                                }>
                                    {(this.props.sequential==null) ? "Add Sequential" : "Remove Sequential"}
                                </button>
                            </div>
                        )
                        : (
                            null
                        )
                    }
                </div>
            </div>
        )
    }
}