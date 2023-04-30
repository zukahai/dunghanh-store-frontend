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
              <img src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/245569353_3064134053830716_4735031199952644001_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=76dDYpcaKZgAX-iB89x&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCzqkakDwOHheRs9VqQ0n4xusvdw_pagxSYQnJtvLGAtA&oe=6452A1FC' className="App-logo" alt="logo" />
            </>
        );
    }
}

export default HomeComponent;