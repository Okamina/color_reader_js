import React from 'react';
import ReactDOM from 'react-dom';
import { ColorInputData } from './component/colorInputData.js';
import { ColorOutputData } from './component/colorOnputData.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            inputLabel : "Enter a color",
            outputLabel : "Selected color",
            initialColor : "",
            format1 : "",
            format2 : ""
        }
    }

    newColor(color){
        this.setState({
            initialColor : color
        });
    }

    HexToRgb(color){
        const hexresult = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        const r = parseInt(hexresult[1], 16).toString();
        const g = parseInt(hexresult[2], 16).toString();
        const b = parseInt(hexresult[3], 16).toString();
        this.setState({
            format1 : "rgb("+ r + ", " + g + ", " + b")"
        });
    }

    RgbToHex(color) {
        const rgbString = color.replace(/[^,\d]/g, "");
        const newString =  rgbString.split(",");

        let hexR = parseInt(newString[0]).toString(16);
        let hexG = parseInt(newString[1]).toString(16);
        let hexB = parseInt(newString[2]).toString(16);

        if(hexR.length == 1) {
            hexR = "0" + hexR
        }
        if(hexG.length == 1) {
            hexG = "0" + hexG
        }
        if(hexB.length == 1) {
            hexB = "0" + hexB
        }

        this.setState({
            format1: "#" + hexR + hexG + hexB;
        });
    }

    RgbToHsl(color){
        const rgbString = color.replace(/[^,\d]/g, "");
        const newString =  rgbString(",");

        let r = parseInt(newString[0]);
        let g = parseInt(newString[1]);
        let b = parseInt(newString[2]);

        r /= 255;
        g /= 255;
        b /= 255;

        const max = Math.max(r,g,b);
        const min = Math.min(r,g,b);
        let delta = max - min;

        let l = (max + min) / 2;

        if delta == 0 {
            let h = 0;
            let s = 0;
        }
        else {
            let s = delta / ( 1 - Math.abs(2 * l  - 1) );
            switch(max){
                case r: h = ((g - b) / delta)%6 ; break;
                case g: h = (b - r) / delta + 2; break;
                case b: h = (r - g) / delta + 4; break;
            }
            h *= 60;
        }

        const newHsl = "hsl(" + Math.round(h*360) + "," + Math.round(s*100) + "%," + Math.round(l*100) + "%)";
        this.setState({
            format2: newHsl
        });

    }

    HslToRgb(color){
        const hslString = color.replace(/[^,\d]/g, "");
        const newString =  hslString.split(",");

        let h = parseInt(newString[0]);
        let s = parseInt(newString[1]);
        let l = parseInt(newString[2]);

        let c = (1 - Math.abs(2 * l - 1)) * s;
        let x = c * (1 - Math.abs((h/60) % 2 - 1))
        let m = l - c / 2;

        if(h < 60){
            let r = (c + m) * 255;
            let g = (x + m) * 255;
            let b = (0 + m) * 255;
        }
        else if(h < 120){
            let r = (x + m) * 255;
            let g = (c + m) * 255;
            let b = (0 + m) * 255;
        }
        else if(h < 180){
            let r = (0 + m) * 255;
            let g = (c + m) * 255;
            let b = (x + m) * 255;
        }
        else if(h < 240){
            let r = (0 + m) * 255;
            let g = (x + m) * 255;
            let b = (c + m) * 255;
        }
        else if(h < 300){
            let r = (x + m) * 255;
            let g = (0 + m) * 255;
            let b = (c + m) * 255;
        }
        else{
            let r = (c + m) * 255;
            let g = (0 + m) * 255;
            let b = (x + m) * 255;
        }

        const newRgb = "rgb("+ Math.round(r) + ", " + Math.round(g) + ", " + Math.round(b)")"
        this.setState({
            format1 : newRgb
        });
    }

    HslToHex(color){
        const hslString = color.replace(/[^,\d]/g, "");
        const newString =  hslString.split(",");

        let h = parseInt(newString[0]);
        let s = parseInt(newString[1]);
        let l = parseInt(newString[2]);

        let c = (1 - Math.abs(2 * l - 1)) * s;
        let x = c * (1 - Math.abs((h/60) % 2 - 1))
        let m = l - c / 2;

        if(h < 60){
            let r = (c + m) * 255;
            let g = (x + m) * 255;
            let b = (0 + m) * 255;
        }
        else if(h < 120){
            let r = (x + m) * 255;
            let g = (c + m) * 255;
            let b = (0 + m) * 255;
        }
        else if(h < 180){
            let r = (0 + m) * 255;
            let g = (c + m) * 255;
            let b = (x + m) * 255;
        }
        else if(h < 240){
            let r = (0 + m) * 255;
            let g = (x + m) * 255;
            let b = (c + m) * 255;
        }
        else if(h < 300){
            let r = (x + m) * 255;
            let g = (0 + m) * 255;
            let b = (c + m) * 255;
        }
        else{
            let r = (c + m) * 255;
            let g = (0 + m) * 255;
            let b = (x + m) * 255;
        }

        const newRgb = "rgb("+ Math.round(r) + ", " + Math.round(g) + ", " + Math.round(b)")"
        const rgbString = newRgb.replace(/[^,\d]/g, "");
        const newString =  rgbString.split(",");

        let hexR = parseInt(newString[0]).toString(16);
        let hexG = parseInt(newString[1]).toString(16);
        let hexB = parseInt(newString[2]).toString(16);

        if(hexR.length == 1) {
            hexR = "0" + hexR
        }
        if(hexG.length == 1) {
            hexG = "0" + hexG
        }
        if(hexB.length == 1) {
            hexB = "0" + hexB
        }

        this.setState({
            format2: "#" + hexR + hexG + hexB;
        });
    }



    HexToHsl(color){
        const hexresult = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
        let r = parseInt(hexresult[1], 16);
        let g = parseInt(hexresult[2], 16);
        let b = parseInt(hexresult[3], 16);

        r /= 255;
        g /= 255;
        b /= 255;

        const max = Math.max(r,g,b);
        const min = Math.min(r,g,b);
        let delta = max - min;

        let l = (max + min) / 2;

        if delta == 0 {
            let h = 0;
            let s = 0;
        }
        else {
            let s = delta / ( 1 - Math.abs(2 * l  - 1) );
            switch(max){
                case r: h = ((g - b) / delta)%6 ; break;
                case g: h = (b - r) / delta + 2; break;
                case b: h = (r - g) / delta + 4; break;
            }
            h *= 60;
        }

        const hextohsl = "hsl(" + Math.round(h*360) + "," + Math.round(s*100) + "%," + Math.round(l*100) + "%)";
        this.setState({
            format2: hextohsl
        });
    }

    render() {
        return(
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-2"></div>
                    <div className="col-md-3"></div>
                        <colorInputData
                            inputLabel={this.state.inputLabel}
                            initialColor={this.state.initialColor}
                            newColor={this.newColor.bind(this)}
                            HexToHsl={this.HexToHsl.bind(this)}
                            HexToRgb={this.HexToRgb.bind(this)}
                            RgbToHsl={this.RgbToHsl.bind(this)}
                            RgbToHex={this.RgbToHex.bind(this)}
                            HslToHex={this.HslToHex.bind(this)}
                            HexToRgb={this.HexToRgb.bind(this)}
                        />
                    <div className="col-md-3"></div>
                        <ColorOutputData
                            outputLabel={this.state.outputLabel}
                            initialColor={this.state.initialColor}
                            format1={this.state.format1}
                            format2={this.state.format2}
                        />
                    <div className="col-md-4"></div>
            </div>
        );
    }
}

render(<App />, window.domcunt.getElementById('app'));