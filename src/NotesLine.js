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
            <div className="notesLine">
                <form>
                    <div>
                        <label>Line {this.props.lineNum}:</label>
                        <input type="text" value={this.state.notes} onChange={this.handleNotesChange} style= {{width: "200%"}}/>
                    </div>
                </form>
            </div>

        )
    }
}