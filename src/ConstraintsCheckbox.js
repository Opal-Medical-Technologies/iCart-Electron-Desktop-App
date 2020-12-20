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
        let textBox;
        if(this.state.checkboxState){
            textBox = <input className ='text2' type="text" value="" disabled={this.state.checkboxState} onChange={this.handleValueChange} style={{ textAlign: 'center'}}/> 
        } else{
            textBox = <input className = 'text2' type="text" value={this.state.value} disabled={this.state.checkboxState} onChange={this.handleValueChange} style={{ textAlign: 'center'}}/>
        }
        return(
            <div>
                <form>
                    <div className="constraintsCheckbox">
                        <input className = "checkBox" type = "checkbox" onChange={this.handleChange}/>
                        <div className = "MaxMin">
                            <label>{this.props.constraintType}:</label>
                            <div className = 'textbox'>
                                {textBox}
                                <div className = 'units'>
                                <label>{this.props.unitType}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}