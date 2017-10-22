import React from 'react';
import './header.scss';
import { Link, NavLink } from 'react-router-dom';

import image from '../../../assets/images/logo-krivky-orig-header.png';

const navData = [
    { to: '/masaze', display: 'Masáže' },
    { to: '/kadernictvi', display: 'Kadeřnictví' },
    { to: '/kosmetika', display: 'Kosmetika' },
    { to: '/cambridge-weight-plan', display: 'Cambridge Weight Plan' }
];

const links = navData.map((link, index) => (
    <li key={index}>
        <NavLink
            to={link.to}
            activeClassName="active"
        >
            {link.display}
        </NavLink>
    </li>
));

export const Header = () => (
    <div className="header">
        <div className="logo">
            <Link to={''}>
                <img src={image} alt="logo" />
            </Link>
        </div>
        <nav>
            <ul>{links}</ul>
        </nav>
    </div>
);
