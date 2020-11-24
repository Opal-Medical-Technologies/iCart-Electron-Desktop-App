import React from 'react';
import "./preview.css";

class PreviewPane extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            weight: 0,
        }
    }

    weightButtonClick(weight) {
        this.setState({
            weight: weight,
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


    render() {
        return (<div className="PreviewPane">
            {"The weight is: "}
            {this.state.weight}
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

export default PreviewPane;