import React from 'react';

import './top-image.scss';

export const TopImage = ({ image }) => (
    <div className="topImage">
        <img src={image} />
    </div>
);
