import React from 'react';

export class ColorOutputData extends React.Component {
    
    render() {
        const rgbColor = this.props.rgbColor;
        const hexColor = this.props.hexColor;
        const hslColor = this.props.hslColor;
        const background = this.props.background;
        return(
            <div className="form-color" style="float: left,">
                <label> Selected color
                <div className="color-box" style="width: 100px, height: 100px, border: 2px solid black, border-radius: 3px, float: left," style={{ background : background }} ></div>
                <div className="color-list" style="padding: 25px 0 0 25px, float: left,">
                    <p>{hexColor}</p>
                    <p>{rgbColor}</p>
                    <p>{hslColor}</p>
                </div>
                </label>
            </div>
        );
    }
}
