import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";

class Addon1 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code="<div>this is Addon1</div>" ></FiddleComponent>
            </div>
        );
    }
}

export default Addon1;