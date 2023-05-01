import React from 'react'
import {NavLink, withRouter} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

class DetailProductComponent extends React.Component {
    state={
        id: this.props.match.params.id,
        urlImage: 'https://picsum.photos/200/',
    }
    componentDidMount() {
        document.title = "Product Detail id: " + this.state.id;
        const urlImage = 'https://picsum.photos/200/' + (100 + Math.floor(this.props.match.params.id));
        this.setState({
            urlImage: urlImage
        })
    }
    render() {
        return(
            <>
                Detail User
                <div>Id: {this.state.id}</div>
                <img src= {(this.state.urlImage)} alt='' />
                <NavLink to={"/products" } exact="true">
                        <span
                            className={"btn btn-primary mx-1"}
                            title="Back to list"
                        >
                        <h3><FontAwesomeIcon icon={faArrowLeft} /></h3>
                    </span>
                </NavLink>
            </>
        )
    }
}

export default withRouter(DetailProductComponent)