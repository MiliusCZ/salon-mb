import React from 'react';
import './landing-page.scss';
import { Link, NavLink } from 'react-router-dom';

import salonApi from '../../api/salon-api';

import iconMassage from '../../../assets/images/icons/icon-massage.jpg';
import iconCambridge from '../../../assets/images/icons/icon_cambridge_new.jpg';
import iconHairCare from '../../../assets/images/icons/icon-hair-care.jpg';
import iconCosmetics from '../../../assets/images/icons/icon-cosmetics.jpg';

export const LandingPage = () => (
    <div className="subsidiaries">
        {salonApi.subsidiaries.map(subsidiary => <Subsidiary key={subsidiary.id} name={subsidiary.name} image={subsidiary.pageIcon} />)}
    </div>
)

const Subsidiary = ({ name, image }) => (
    <div className="subsidiary">
        <h2>{name}</h2>
        <img src={getImage(image)} />
    </div>
)

const getImage = (id) => {
    switch (id) {
        case '1238':
            return iconMassage;
        case '1237':
            return iconHairCare;
        case '1239':
            return iconCosmetics;
        case '1276':
        default:
            return iconCambridge;
    }
}
