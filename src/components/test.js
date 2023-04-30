import React from 'react';
import {withRouter} from "react-router-dom";

class TestComponent extends React.Component {
        componentDidMount() {
                document.title = "Test"
        }
        render() {
                return (
                    <h1> TestComponet </h1>
                )
        }
}
export default withRouter(TestComponent)