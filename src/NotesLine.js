import React from 'react';
import "./NotesLine.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export class NotesLine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: "",
            order: "",
        }
    this.handleNotesChange = this.handleNotesChange.bind(this);
    }
    
    handleNotesChange = (event) => {
        this.setState({notes: event.target.notes});
    }
    
    render(){
        return(
            <div>
                <form>
                    <div className="notesLine">
                        <label>Line {this.props.lineNum}:</label>
                        <input type="text" value={this.state.notes} onChange={this.handleNotesChange} style= {{width: "79%"}}/>
                    </div>
                </form>
            </div>

        )
    }
}