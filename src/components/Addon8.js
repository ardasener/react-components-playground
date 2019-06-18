import React, { Component } from 'react';
import FiddleComponent from "./FiddleComponent";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

const scope = {ButtonGroup, Button}

class Addon8 extends Component {
    render() {
        return (
            <div>
                <FiddleComponent code='
                    <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">One</Button>
                    <Button variant="primary">Two</Button>
                    <Button variant="secondary">Three</Button>
                    </ButtonGroup>'
                scope={scope} ></FiddleComponent>
            </div>
        );
    }
}

export default Addon8;