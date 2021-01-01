import React from 'react';

import './DosageButtonInput.css';
import { 
    deleteDosageSet,
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
} from '../../../Store/MedSlice/MedSlice';

class DosageButtonInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
    }

    renderDosageButtons(amounts, weightScale, first) {
        let updateButton, deleteButton, addButton, updateWeightScale;
        if (first) {
            updateButton = updateFirstDosageButton;
            deleteButton = deleteFirstDosageButton;
            addButton = addFirstDosageButton;
            updateWeightScale = updateFirstDosageWeightScale;
        }
        else {
            updateButton = updateSequentialDosageButton;
            deleteButton = deleteSequentialDosageButton;
            addButton = addSequentialDosageButton;
            updateWeightScale = updateSequentialDosageWeightScale;
        }

        return (
            <div className="InputPane_DosageInputTextWrapper">
            {amounts.map((dose, index) => (
                <div className="InputPane_DosageInput">
                    <input className="InputPane_DosageInputText" type ='text' value = {dose} onChange = {e => this.props.dispatch(updateButton({setIndex: this.props.setIndex, updateIndex: index, amount: e.target.value}))} style={{ width: "2.75vw", textAlign: 'center'} }/>
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
            <button className="InputPane_WeightScaleButton" onClick={() => this.props.dispatch(updateWeightScale({setIndex: this.props.setIndex, weightScale: !weightScale}))}>
                {(weightScale) ? "mg/kg" : "mg"}
            </button>
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
                                {this.renderDosageButtons(this.props.first.amounts, this.props.first.weightScale, true)}
                            </div>
                        )
                        : (
                            <div>
                                <div className="InputPane_DosageButtonText">
                                    First Dosages:
                                </div>
                                {this.renderDosageButtons(this.props.first.amounts, this.props.first.weightScale, true)}
                                <div className="InputPane_DosageButtonText">
                                    Sequential Dosages:
                                </div>
                                {this.renderDosageButtons(this.props.sequential.amounts, this.props.sequential.weightScale, false)}
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
                                {(this.props.length > 1) ? (
                                    <button className="InputPane_DosageOptionDropdownButton" onClick={() => 
                                    {this.props.dispatch(deleteDosageSet(this.props.setIndex));
                                    this.setState({showMenu: !this.state.showMenu});}
                                    }>
                                        Delete
                                    </button>
                                ) : (null)}
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

export default DosageButtonInput