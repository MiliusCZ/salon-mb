
import React from 'react';
import './service-page.scss';

import salonApi from '../../api/salon-api';

import { TopImage } from '../top-image/top-image';

const Service = ({ data }) => (
    <div>
        {data.name}
    </div>
)

const ServiceGroup = ({ info }) => (
    <div>
        <h3>{info.name}</h3>
        {info.services.map(service => <Service key={service.id} data={service} />)}
    </div>
)

export const ServicePage = ({ location }) => {
    const subsidiary = salonApi.getSubsidiaryByUrl(location.pathname);
    return (
        <div className="subsidiary">
            <TopImage image={subsidiary.topImage} />
            {subsidiary.serviceGroups.map(serviceGroup => <ServiceGroup key={serviceGroup.id} info={serviceGroup} />)}
        </div>
    )
}



