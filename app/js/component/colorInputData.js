import React from 'react';
import { RgbToHex, RgbToHsl, HexToRgb, HslToRgb } from './colorConverterFunctions.js';
import { validateColor } from './validationColor.js'

export class ColorInputData extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {inputLabel : "Enter a color"}
		this.getColorInput = this.getColorInput.bind(this);}

	getColorInput(event) {
		event.preventDefault();
		const color = this.input.value;
		if (validationColor(initialColor)) {
			let hexColor, hslColor, rgbColor;
			if (color.indexOf('rgb') > -1) {
				rgbColor = initialColor;
				hexColor = RgbToHex(initialColor);
				hslColor = RgbToHsl(rgbColor);
			}
			else if (color.indexOf('#') === 0) {
				rgbColor = HexToRgb(initialColor);
				hexColor = initialColor;
				hslColor = RgbToHsl(rgbColor);
			}
			else {
				rgbColor = HslToRgb(initialColor);
				hexColor = RgbToHex(rgbColor);
				hslColor = initialColor;
			}
			this.props.onClick(initialColor, rgbColor, hexColor, hslColor);
		}
		else {
			return alert('Wrong format');
		}
	}

	    render() {
	    return (
	      <div className="input-color">
	        <form>
	          <div>
	            <label>{ inputLabel }
	              <h3>Hex, Rgb or Hsl</h3>
	            }
	            </label>
	          </div>
	          <input ref={(input) => this.input = input} />
	          <button onClick={this.handleGetColor}>Display color</button>
	        </form>
	      </div>
	    )
  }
}