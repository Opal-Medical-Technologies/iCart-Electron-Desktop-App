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
            history: [],
            total: 0,
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

    administerButtonClick(dosage) {
        let d = new Date();
        d = d.toLocaleTimeString();
        let historyCopy = this.state.history.slice();
        historyCopy.unshift({
            amount: dosage.toFixed(2),
            time: d
        })
        let newTotal = this.state.total + dosage;
        this.setState({
            history: historyCopy,
            total: newTotal,
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
        return (<div>
            {notesList.map(n => (
                <div>{n.note}</div>
            ))}
        </div>);
    }

    timeline(historyList) {
        return (<div>
            {historyList.map(h => (
                <div className="HistoryBox">
                    <div style={{"font-size": "30px", "text-align": "center"}}>{h.amount}</div>
                    <div style={{"text-align": "center"}}>{h.time}</div>
                </div>
            ))}
        </div>);
    }


    render() {
        let dose = parseFloat(this.props.medData.dosages[0].amounts[this.state.activeDosage]);
        if (this.props.medData.dosages[0].weightScale) {
            dose *= this.state.weight;
        }
        let administerAmount = dose / parseFloat(this.props.medData.conc)

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
                        {this.notes(this.props.medData.notes)}
                    </div>
                    <div className="AdministerButtonBlock">
                        <div style={{"text-align": "center"}}>DOSE (mL)</div>
                        <button className="AdministerButton" style={{"width": "100%", "border": "3px solid black"}}
                        onClick={() => this.administerButtonClick(dose)}>
                            <div style={{"font-size": "30px", "text-align": "center"}}>{administerAmount.toFixed(2)}</div>
                            <div style={{"text-align": "center"}}>MAX</div>
                        </button>
                    </div>
                </div>
            </div>
            <div className="PreviewBox">
                <div>
                    <span>
                        {this.props.medData.name}
                    </span>
                    <span style={{"margin": "5%"}}>
                        {this.props.medData.conc + " " + this.props.medData.units + "/mL"}
                    </span>
                </div>

                <div className="Totals">
                    <div>Total:</div>
                    <div className="TotalBox">
                        <div style={{"font-size": "30px", "text-align": "center"}}>{this.state.total.toFixed(2)}</div>
                        <div style={{"text-align": "center"}}>{this.props.medData.units}</div>
                    </div>
                </div>
                <div className="History">
                    <div>History:</div>
                    <div className="HistoryBoxes">
                    {this.timeline(this.state.history)}
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