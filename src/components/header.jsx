import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink to='/'>Cards</NavLink>
            <NavLink to='/albums'>Albums</NavLink>
        </nav>
    );
}

export default Header;
