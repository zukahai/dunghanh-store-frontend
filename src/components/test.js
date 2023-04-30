import React from 'react';
import {withRouter} from "react-router-dom";

class TestComponent extends React.Component {
        render() {
                return (
                    <h1> TestComponet </h1>
                )
        }
}
export default withRouter(TestComponent)