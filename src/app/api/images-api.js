import iconMassage from '../../assets/images/icons/icon-massage.jpg';
import iconCambridge from '../../assets/images/icons/icon_cambridge_new.jpg';
import iconHairCare from '../../assets/images/icons/icon-hair-care.jpg';
import iconCosmetics from '../../assets/images/icons/icon-cosmetics.jpg';

import topMassage from '../../assets/images/topimages/massage-top.jpg';
import topCambridge from '../../assets/images/topimages/cambridge-top.png';
import topHairCare from '../../assets/images/topimages/hair-care-top.jpg';
import topCosmetics from '../../assets/images/topimages/cosmetics-top.jpg';

const getImage = (id) => {
    switch (id) {
        case '1094': 
            return topMassage;
        case '1241': 
            return topHairCare;
        case '1240': 
            return topCosmetics;
        case '1302': 
            return topCambridge;
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

export default getImage;