import React from 'react';
import {withRouter} from "react-router-dom";
class TestComponet2 extends React.Component {
        componentDidMount() {
                document.title = "Test 2"
        }
        render() {
                return (
                    <h1> TestComponet 2</h1>
                )
        }
}
export default withRouter(TestComponet2)