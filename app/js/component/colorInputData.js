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
		const initialColor = this.input.value;
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
	      <div className="input-color" style="width: 30%, float: left,">
	        <form style="padding-top: 15px,">
	          <div>
	            <label>Enter a color
	              <h3 style="color:gray">Hex, Rgb or Hsl</h3>
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
