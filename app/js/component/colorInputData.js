import React from 'react';
import ReactDOM from 'react-dom';
import { RgbToHex, RgbToHsl, HexToRgb, HslToRgb } from './colorConverterFunctions.js';

export class ColorInputData extends React.Component {

	constructor(props) {
    	super();
		this.state = {
			inputColorValue : "",
			activeColorValue : "",
			validateColor : false
		};
	}

	validateColor(){
		this.setState({
			invalidateColor: false
		});



		const hex = /^\#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})$/;
        const shortHex = /^\#([a-fA-F0-9]{3})$/;
        const hsl = /^hsl\((\d{1,3})\,(\d{1,3})\%\,(\d{1,3})\%\)$/i;
        const rgb = /^rgb\((\d{1,3})\,(\d{1,3})\,(\d{1,3})\)$/i;

        if(color.match(hex)){
        	this.HexColor(this.state.inputColorValue);
        }
        else if (color.match(shortHex)) {
        	const shortHexToHex = this.state.inputColorValue.substring(1);
        	const newHex = "#" + shortHexToHex[0] + shortHexToHex[0] + shortHexToHshortHexToHex[1] + shortHexToHex[1] + shortHexToHex[2] + shortHexToHex[2];
        	this.HexColor(newHex);
        }
        else if (color.match(hsl)) {
        	this.HslColor(this.state.inputColorValue);
        }
        else if (color.match(rgb)) {
        	this.RgbColor(this.state.inputColorValue);
        }
        else {
        	this.setState({
        		invalidateColor : true
        	});
        }
	}

	HexColor(color) {
		this.props.new
	}

    render() {
        return (

            <div className="inputColor">
                <lable>Enter Color</lable>
                <input type='text' value={this.state.inputColorValue} onChange={this.handleInputOnChange} />
                <button onClick={this.handleButtonOnClick}>go</button>
            </div>
        )
    }

}