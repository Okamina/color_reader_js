import React from 'react';
import { RgbToHex, RgbToHsl, HexToRgb, HslToRgb } from './colorConverterFunctions.js';
import { validateColor } from './validationColor.js'

export class ColorInputData extends React.Component {

	constructor(props) {
    	super(props);
		this.getColorInput = this.getColorInput.bind(this);
	}

	getColorInput(event) {
		event.preventDefault();
		const color = this.input.value;
		if (validationColor(initialColor)) {
			let hex, hsl, rgb;
			if (color.indexOf('rgb') > -1) {
				rgb = initialColor;
				hex = RgbToHex(initialColor);
				hsl = RgbToHsl(rgb);
			}
			else if (color.indexOf('#') === 0) {
				rgb = HexToRgb(initialColor);
				hex = initialColor;
				hsl = RgbToHsl(rgb);
			}
			else {
				rgb = HslToRgb(initialColor);
				hex = RgbToHex(rgb);
				hsl = initialColor;
			}
			this.props.onClick(initialColor, rgb, hex, hsl);
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
	            <label>Enter the color.
	              <h3>Hex, Rgb or Hsl</h3>
	            </label>
	          </div>
	          <input ref={(input) => this.input = input} />
	          <button onClick={this.handleGetColor}>Display color</button>
	        </form>
	      </div>
	    )
  }
}