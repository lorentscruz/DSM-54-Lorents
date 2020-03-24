import React, { Component } from 'react';


class COLC extends Component {

constructor ( props ) {
    super( props );
    this.state = {
        hello: 'ME VOY'
    }
}

render () {
    return (
        <h1>{this.state.hello}</h1>
    )
}
};

export default COLC;