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
              <img src='./logo.svg' className="App-logo" alt="logo" />
            </>
        );
    }
}

export default HomeComponent;