import salonData from './data.json';
import getImage from './images-api'

console.log(salonData);

const getUrl = (id) => {
    switch(id) {
        case '1070':
            return '/masaze';
        case '1076':
            return '/kadernictvi';
        case '1079':
            return '/kosmetika';
        case '1276':
            return '/cambridge-weight-plan';
        default:
            return '';
    }
}

const extractServices = (item) => {
    return item.ServiceListPage && item.ServiceListPage.ServiceHeader.map(serviceHeader => {
        return {
            name: serviceHeader["-nodeName"],
            id: serviceHeader["-id"],
            services: Array.isArray(serviceHeader.Service) ? serviceHeader.Service.map(service => {
                return {
                    name: service["-nodeName"],
                    id: service["-id"],
                    price: service.servicePrice,
                    duration: service.serviceTime
                };
            }) : serviceHeader.Service && [{
                name: serviceHeader.Service["-nodeName"],
                id: serviceHeader.Service["-id"],
                price: serviceHeader.servicePrice,
                duration: serviceHeader.serviceTime
            }]
        };
    });
}

const getSubsidiaries = () => salonData.root.HomePage.SubsidiaryHomePage.map(item => {
    return {
        name: item["-nodeName"],
        id: item["-id"],
        url: getUrl(item["-id"]),
        pageIcon: getImage(item.pageIcon),
        topImage: getImage(item.topImage),
        serviceGroups: extractServices(item)
    }
})

const salonApi = {
    subsidiaries: getSubsidiaries(),
    getSubsidiaryByUrl: (url) => getSubsidiaries().find((item) => item.url === url)
}

export default salonApi;

