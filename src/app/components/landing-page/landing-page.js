import React from 'react';
import './landing-page.scss';
import { Link, NavLink } from 'react-router-dom';

import salonApi from '../../api/salon-api';

export const LandingPage = () => (
    <div className="subsidiaries">
        {salonApi.subsidiaries.map(subsidiary => <Subsidiary key={subsidiary.id} name={subsidiary.name} image={subsidiary.pageIcon} url={subsidiary.url} />)}
    </div>
)

const Subsidiary = ({ name, image, url }) => (
    <Link to={url}>
        <div className="subsidiaryBox">
            <h2>{name}</h2>
            <img src={image} />
        </div>
    </Link>
)
