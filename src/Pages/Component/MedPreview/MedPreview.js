import React from 'react';
import {connect} from 'react-redux';

import {selectMed} from '../../../Store/Slices/MedSlice';
import "./MedPreview.css";

const mapStateToProps = state => ({
    medData: state.med.medList[state.med.currentMedId]
})

class PreviewPane extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            weight: 0,
            activeDosage: 0,
        }
    }

    weightButtonClick(weight) {
        this.setState({
            weight: weight,
        })
    }

    dosageButtonClick(index) {
        this.setState({
            activeDosage: index,
        })
    }

    renderWeightButton(text, textColor, backgroundColor, weight) {
        return (
            <button
                style={{
                    "background": backgroundColor,
                    "color": textColor
                }}
                onClick={() => this.weightButtonClick(weight)}>
                {text}
            </button>
        );
    }

    dosageButtons(dosageList) {
        if (dosageList.length == 1) {
            return (<div style={{"font-size": "20px"}}>
                {dosageList[0] + ' ' + this.props.medData.units + '/mL'}
            </div>)
        }
        else if (dosageList.length > 1 && dosageList.length < 4) {
            return (<div>
                {dosageList.map((d, index) => (
                    <button className={index == this.state.activeDosage ? "ActiveDoseButton" : "InactiveDoseButton"}
                    onClick = {() => this.dosageButtonClick(index)}>
                        {d}
                    </button>
                ))}
            </div>);
        }
        else if (dosageList.length >= 4 && dosageList.length <= 6) {
            return (
                <div>
                    <div>
                        {dosageList.slice(0, 3).map((d, index) => (
                            <button className={index == this.state.activeDosage ? "ActiveDoseButton" : "InactiveDoseButton"}
                            onClick = {() => this.dosageButtonClick(index)}>
                                {d}
                            </button>
                        ))}
                    </div>
                    <div>
                        {dosageList.slice(3).map((d, index) => (
                            <button className={index+3 == this.state.activeDosage ? "ActiveDoseButton" : "InactiveDoseButton"}
                            onClick = {() => this.dosageButtonClick(index+3)}>
                                {d}
                            </button>
                        ))}
                    </div>
                </div>
            );
        }
    }

    notes(notesList) {

    }


    render() {
        return (<div className="PreviewPane">
            <div className="PreviewBox">
                <div>
                    <div className="Heading">
                        <div className="MedName">
                            {this.props.medData.name}
                        </div>
                        <div className="Concentration">
                            {this.props.medData.conc + " " + this.props.medData.units + "/mL"}
                        </div>
                    </div>
                    <button className="InfoButton">i</button>
                </div>
                <div>
                    <div className="NotesBlock">
                        <div style={{"text-align": "center"}}>NOTES</div>
                        {this.dosageButtons(this.props.medData.dosages[0].amounts)}
                        <div>
                            Rapid IV Push <br/>
                            Lower dose for heart transplant or central line.
                        </div>
                    </div>
                    <div className="AdministerButtonBlock">
                        <div style={{"text-align": "center"}}>DOSE (ml)</div>
                        <button className="AdministerButton" style={{"width": "100%", "border": "3px solid black"}}>
                            <div style={{"font-size": "30px", "text-align": "center"}}>2</div>
                            <div style={{"text-align": "center"}}>MAX</div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="PreviewBox">
                <div>
                    <div className="Heading">
                        <div className="MedName">
                            {"Adenosine (IV)"}
                        </div>
                        <div className="Concentration">
                            {"3 mg/ml"}
                        </div>
                    </div>
                    <button className="InfoButton">i</button>
                </div>
                <div>
                    <div className="NotesBlock">
                        <div style={{"text-align": "center"}}>NOTES</div>
                        <div style={{"font-size": "20px"}}>0.1 mg/kg, 6mg MAX</div>
                        <div>
                            Rapid IV Push <br/>
                            Lower dose for heart transplant or central line.
                        </div>
                    </div>
                    <div className="AdministerButtonBlock">
                        <div style={{"text-align": "center"}}>DOSE (ml)</div>
                        <button className="AdministerButton" style={{"width": "100%", "border": "3px solid black"}}>
                            <div style={{"font-size": "30px", "text-align": "center"}}>2</div>
                            <div style={{"text-align": "center"}}>MAX</div>
                        </button>
                    </div>
                </div>
            </div>

            <div className="PreviewText">
                Weights (kg)
            </div>
            <div className="WeightButtons">
                {this.renderWeightButton("3", "white", "grey", 3)}
                {this.renderWeightButton("4", "white", "grey", 4)}
                {this.renderWeightButton("5", "white", "grey", 5)}
                {this.renderWeightButton("6-7", "white", "pink", 6.5)}
                {this.renderWeightButton("8-9", "white", "red", 8.5)}
                {this.renderWeightButton("10-11", "white", "purple", 10.5)}
                {this.renderWeightButton("12-14", "black", "yellow", 13)}
                {this.renderWeightButton("15-18", "black", "white", 16.5)}
                {this.renderWeightButton("19-23", "white", "blue", 21)}
                {this.renderWeightButton("24-29", "white", "orange", 26.5)}
                {this.renderWeightButton("30-36", "white", "green", 33)}
            </div>
        </div>);
    }
}

export default connect(
    mapStateToProps,
)(PreviewPane);