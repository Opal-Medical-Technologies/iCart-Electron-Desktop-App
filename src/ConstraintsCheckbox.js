import React from 'react';
import "./ConstraintsCheckbox.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export class ConstraintsCheckbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checkboxState: true,
            value: "",
            type: "",
            units: "",
        }
    this.handleChange = this.handleChange.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);
    }
    
    handleChange = (event) => {
        this.setState({checkboxState: !this.state.checkboxState});
      }
    
    handleValueChange = (event) => {
        this.setState({value: event.target.value});
    }
    
    render(){
        return(
            <div>
                <form>
                    <div className="constraintsCheckbox">
                        <input type = "checkbox" onChange={this.handleChange}/>
                        <label>{this.props.constraintType}:</label>
                        <input type="text" value={this.state.value} disabled={this.state.checkboxState} onChange={this.handleValueChange} style={{ width: "26%", textAlign: 'center'}}/>
                        <label>{this.props.unitType}</label>
                    </div>
                </form>
            </div>

        )
    }
}