import React, {Component} from 'react';
import "./TextBoxes.css";

export class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            concentration: '',
            firstDosage: '',
            subsequentDosage: '',

        }
    }

    handleConcentrationChange = (event) => {
        this.setState({
            concentration: event.target.value
        })
    }
    handlefirstDosageChange = (event) => {
        this.setState({
            firstDosage: event.target.value
        })
    }
    handlesubsequentDosageChange = (event) => {
        this.setState({
            subsequentDosage: event.target.value
        })
    }
    render() {
        return(
            <form>
                <div className = 'ConcentrationText'>
                    <input type = 'text' value = {this.state.concentration} onChange = {this.handleConcentrationChange} style={{ width: "26%", textAlign: 'center'}}/>
                </div>
                <div className = 'FirstDosageText'>
                    <input type = 'text' value = {this.state.firstDosage} onChange = {this.handlefirstDosageChange} style={{ width: "26%", textAlign: 'center'}}/>
                </div>
                <div className = 'SubsequentDosageText'>
                    <input type = 'text' value = {this.state.subsequentDosage} onChange = {this.handlesubsequentDosageChange} style ={{ width: "26%", textAlign: 'center'}}/>
                </div>
            </form>
        )
    }
}