import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="top">
                <h1>{this.props.tagline}</h1>
            </header>
        )
    }
}

export default Header; 