import React from 'react'
import {NavLink, withRouter} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

class DetailProductComponent extends React.Component {
    state={
        id: this.props.match.params.id
    }
    componentDidMount() {
        document.title = "Product Detail id: " + this.state.id
    }
    render() {
        return(
            <>
                Detail User
                <div>Id: {this.state.id}</div>
                <img src='https://picsum.photos/200/400' alt='' />
                <NavLink to={"/products" } exact="true">
                        <span
                            className={"btn btn-primary mx-1"}
                            title="Back to list"
                        >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </span>
                </NavLink>
            </>
        )
    }
}

export default withRouter(DetailProductComponent)