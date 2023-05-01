import React from 'react';

class ButtonComponent extends React.Component {

    randomImage = () => {
        this.props.randomImage();
    }
    render() {
        return (
            <>
                <button type="submit" className="submit-button" onClick={() => {this.randomImage()}}>Random Image</button>
            </>
        );
    }
}

export default ButtonComponent;