import React from 'react';
import './nav.scss';
import {withRouter} from "react-router-dom";
import{
  NavLink
} from "react-router-dom";
class NavComponent extends React.Component {
    render() {
        return (
            <>
            <input id="page-nav-toggle" className="main-navigation-toggle" type="checkbox" />
              <label for="page-nav-toggle">
                <svg className="icon--menu-toggle" viewBox="0 0 60 30">
                  <g className="icon-group">
                    <g className="icon--menu">
                      <path d="M 6 0 L 54 0" />
                      <path d="M 6 15 L 54 15" />
                      <path d="M 6 30 L 54 30" />
                    </g>
                    <g className="icon--close">
                      <path d="M 15 0 L 45 30" />
                      <path d="M 15 30 L 45 0" />
                    </g>
                  </g>
                </svg>
              </label>

              <nav className="main-navigation">
                <ul>
                  <li><NavLink to="/" end activeClassName="active" exact="true">Home</NavLink></li>
                  <li><NavLink to="/products" end activeClassName="active" exact="true">Product</NavLink></li>
                  <li><NavLink to="/test1" end activeClassName="active">Test1</NavLink></li>
                  <li><NavLink to="/test2" end activeClassName="active">Test2</NavLink></li>
                  <li><NavLink to="/contact" end activeClassName="active">Contact</NavLink></li>
                </ul>
              </nav>

            </>
        );
    }
}

export default withRouter(NavComponent);