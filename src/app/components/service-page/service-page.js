import React from 'react';
import './service-page.scss';

import salonApi from '../../api/salon-api';

import { TopImage } from '../top-image/top-image';

const Service = ({ data }) => <div className="serviceRow">
<span className="serviceName">{data.name}</span>
{data.duration && <span className="serviceDuration">{data.duration} min</span>}
{data.price && <span className="servicePrice">{data.price} Kč</span>}
</div>;

const ServiceGroup = ({ info }) => (
    <div className="serviceGroup">
        <h3>{info.name}</h3>
        {info.services.map(service => (
            <Service key={service.id} data={service} />
        ))}
    </div>
);

export const ServicePage = ({ location }) => {
    const subsidiary = salonApi.getSubsidiaryByUrl(location.pathname);
    return (
        <div className="subsidiary">
            <TopImage image={subsidiary.topImage} />
            <div className="servicesList">
                {subsidiary.serviceGroups.map(serviceGroup => (
                    <ServiceGroup key={serviceGroup.id} info={serviceGroup} />
                ))}
            </div>
        </div>
    );
};
