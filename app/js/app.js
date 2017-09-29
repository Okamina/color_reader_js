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
            rgbColor: "",
            hexColor : "",
            hslColor : "",
            background: "",
        }
    }

    newColor(color){
        this.setState({
            initialColor : color
        });
    }

    render() {
        return(
            <div>
                <h1>Color Reader</h1>
            </div>
        );
    }
}

React.render(<App/>, window.domcunt.getElementById('app'));