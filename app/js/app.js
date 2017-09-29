import React from 'react';
import ReactDOM from 'react-dom';
import { ColorInputData } from './component/colorInputData.js';
import { ColorOutputData } from './component/colorOnputData.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            rgb: "",
            hex : "",
            hsl : "",
            background: "",
        }
        this.colorSumbit = this.colorSumbit.bind(this)
    }

    colorSumbit(initialColor, rgbColor, hexColor, hslColor){
        this.setState({
            rgb: rgbColor,
            hex : hexColor,
            hsl : hslColor,
            background: initialColor,
        });
    }

    render() {
        return(
            <div>
                <h1>Color Reader</h1>
                <ColorInputData onClick={this.colorSumbit} />
                <ColorOutputData background={this.state.background} hex={this.state.hex} rgb={this.state.rgb} hsl={this.state.hsl} />
            </div>
        );
    }
}

React.render(<App />, window.domcunt.getElementById('app'));