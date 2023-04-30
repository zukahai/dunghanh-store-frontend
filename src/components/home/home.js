import React from 'react';
import './home.css';

class HomeComponent extends React.Component {
    componentDidMount() {
        document.title = "Home"
    }
    render() {
        return (
            <>
              <h1>Home</h1>
            </>
        );
    }
}

export default HomeComponent;