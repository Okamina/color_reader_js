import React from 'react';

export class ColorOutputData extends React.Component {
    
    render() {
        const rgbColor = this.props.rgbColor;
        const hexColor = this.props.rgbColor;
        const hslColor = this.props.rgbColor;
        const background = this.props.rgbColor;
        return(
            <div className="form-color">
                <div className="color-box" style={{ background : background }} ></div>
                <div className="color-list">
                    <p>{hexColor}</p>
                    <p>{rgbColor}</p>
                    <p>{hslColor}</p>
                </div>
            </div>
        );
    }
}