import React from 'react';
import './nav.scss';

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
    <li><a href="#0">Home ww</a></li>
    <li><a href="#0">About</a></li>
    <li><a href="#0">Contact</a></li>
    <li><a href="#0">Dance</a></li>
  </ul>
</nav>

            </>
        );
    }
}

export default NavComponent;