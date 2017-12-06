import salonData from "./data.json";

console.log(salonData);

const extractServices = (item) => {
    return item.ServiceListPage && item.ServiceListPage.ServiceHeader.map(serviceHeader => {
        return {
            name: serviceHeader["-nodeName"],
            services: Array.isArray(serviceHeader.Service) ? serviceHeader.Service.map(service => {
                return {
                    name: service["-nodeName"],
                    price: service.servicePrice,
                    duration: service.serviceTime
                };
            }) : serviceHeader.Service && {
                name: serviceHeader.Service["-nodeName"],
                price: serviceHeader.servicePrice,
                duration: serviceHeader.serviceTime
            }

        };
    });
}

const salonApi = {
    subsidiaries: salonData.root.HomePage.SubsidiaryHomePage.map(item => {
        return {
            name: item["-nodeName"],
            id: item["-id"],
            pageIcon: item.pageIcon,
            topImage: item.topImage,
            serviceGroups: extractServices(item)
        }
    })
}

export default salonApi;

