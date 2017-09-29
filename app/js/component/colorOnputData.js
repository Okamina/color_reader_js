import React from 'react';
import PropTypes from "prop-types";

export class ColorOutputData extends React.Component {
    constructor(props){
        super();
        this.state = {
            ResLabel: props.resultLabel
        }
    }
    render() {
        return(
            <div className="form-group" style={{textAlign: "center"}}>
                <div className="row">
                    <div className="col-md-12">
                        <h6>{this.state.ResLabel}</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8" style={{
                        backgroundColor: this.props.initialColor,
                        border: "2px solid black",
                        height: "100px",
                        width: "100px",
                    }}>
                    </div>
                    <div className="col-md-2">
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {this.props.format1}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {this.props.format2}
                    </div>
                </div>
            </div>
        );
    }
}

Result.PropTypes = {
    outputLabel: PropTypes.string,
    initialColor: PropTypes.string,
    format1: PropTypes.string,
    format2: PropTypes.string
};