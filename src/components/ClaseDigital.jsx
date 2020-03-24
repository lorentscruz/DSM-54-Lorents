import React, { Component } from 'react';


class ClaseDijital extends Component {

constructor ( props ) {
    super( props );
    this.state = {
        hello: 'Pero debo pasarle a ClasertsRomm'
    }
}

render () {
    return (
        <h1>{this.state.hello}</h1>
    )
}
};

export default ClaseDijital;