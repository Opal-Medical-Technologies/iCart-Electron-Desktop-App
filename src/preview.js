import React from 'react';
import "./preview.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

class PreviewPane extends React.Component{
    render() {

        return (<div className="PreviewPane">
            <div className="PreviewText" style={{"margin-top": "3%"}}>
                Front
            </div>
            <div className="PreviewBox">
                Preview Box 1
            </div>

            <div className="PreviewText">
                Back
            </div>
            <div className="PreviewBox">
                Preview Box 2
            </div>

            <div className="PreviewText">
                Weights (kg)
            </div>
            <div className="WeightButtons">
                <button className='w3'>
                    3
                </button>
                <button className='w4'>
                    4
                </button>
                <button className='w5'>
                    5
                </button>
                <button className='w6-7'>
                    6-7
                </button>
                <button className='w8-9'>
                    8-9
                </button>
                <button className='w10-11'>
                    10-11
                </button>
                <button className='w12-14'>
                    12-14
                </button>
                <button className='w15-18'>
                    15-18
                </button>
                <button className='w19-23'>
                    19-23
                </button>
                <button className='w24-29'>
                    24-29
                </button>
                <button className='w30-36'>
                    30-36
                </button>
            </div>
        </div>);
    }
}

export default PreviewPane;