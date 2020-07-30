import React from 'react';
import logo from '/assets/images/logo.svg';

const Header = () => {
    return (
        <header className="header-wrapper">
            <div className="header-logo-box">
                <img className="header-logo" src={logo} />
            </div>
            <div className="header-title-box">
                <h2 className="header-title">Tradeshift Search</h2>
            </div>
        </header>
    )
}

export default Header
