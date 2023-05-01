import React from 'react';
import './home.css';
import ButtonComponent from '../button';

class HomeComponent extends React.Component {

    state = {
        urlImage: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/245569353_3064134053830716_4735031199952644001_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=76dDYpcaKZgAX-iB89x&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfCzqkakDwOHheRs9VqQ0n4xusvdw_pagxSYQnJtvLGAtA&oe=6452A1FC',
    }

    randomImage = () => {
        const random = Math.ceil(Math.random() * 100 + 100);
        this.setState({
            urlImage: 'https://picsum.photos/200/'+random
        })
    }
    componentDidMount() {
        document.title = "Home"
    }
    render() {
        return (
            <>
              <h1>{(this.state.urlImage.length > 30) ? 'My Linh' : this.state.urlImage}</h1>
              <img src={this.state.urlImage} className="App-logo" alt="logo" />
              <ButtonComponent
                randomImage={this.randomImage}
              />
            </>
        );
    }
}

export default HomeComponent;