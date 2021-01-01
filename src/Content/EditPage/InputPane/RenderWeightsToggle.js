import React from 'react';
import './RenderWeightsToggle.css'


const WEIGHTS = ["3", "4", "5", "6-7", "8-9", "10-11", "12-14", "15-18", "19-23", "24-29", "30-36"]
const BUTTON_COLORS = ["grey", "grey", "grey", "pink", "red", "purple", "yellow", "white", "blue", "orange", "green"]
const TEXT_COLORS = ["white", "white", "white", "white", "white", "white", "black", "black", "white", "white", "white"]

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

export default RenderWeightsToggle;