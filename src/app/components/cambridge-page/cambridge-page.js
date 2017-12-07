
import React from 'react';
import './cambridge-page.scss';

import salonApi from '../../api/salon-api';

import { TopImage } from '../top-image/top-image';

export const CambridgePage = ({ location }) => {
    const subsidiary = salonApi.getSubsidiaryByUrl(location.pathname);
    return (
        <div className="subsidiary">
            <TopImage image={subsidiary.topImage} />
            <div className="cambridge-text">
                <p>
                    Změnit životní styl není nikdy jednoduché. Tento krok je ještě složitější, když znamená převzít zodpovědnost za zdraví vlastního těla. To je také důvod, proč je odborná porada na začátku a soustavná podpora během celého období držení diety a přechodu na pevnou stravu tak důležitá pro získání požadovaného výsledku.
                </p>

                <h2>Co je Cambridge Weight Plan?</h2>

                <p>
                    Cambridge Weight Plan je bezpečný, efektivní a účinný program pro redukci hmotnosti, tvarování postavy a podporu zdraví. Unikátní výživový program, který vám umožní trvalý a bezpečný úbytek tuků. Klinicky testované produkty Cambridge Weight Plan jsou určeny všem, kteří chtějí rychle, zdravě a především bezpečně snížit svoji nadváhu a získanou váhu si udržet. Cílem Cambridge Weight Plan je také navést člověka ke zdravému a aktivnímu způsobu života s pravidelnou a vyváženou stravou.
                </p>
                
                <h2>Jak mi Cambridge Weight Plan pomůže?</h2>

                <p>
                    Výživový program s Cambridge Weight Plan je ideální pro:
                </p>

                <ul>
                    <li>detoxikaci celého těla</li>
                    <li>nastartování metabolismu a zlepšení zdraví</li>
                    <li>získání více energie</li>
                    <li>snížení tělesné váhy</li>
                    <li>osoby, které nemají dostatek času jako náhrada jednoho a více jídel</li>
                </ul>

                <h2>Z čeho se výživový plán skládá?</h2>

                <p>
                    Cambridge Diet obsahuje vysoce hodnotné bílkoviny a minimální množství sacharidů a tuků. Jedna porce obsahuje 33% DDD (doporučená denní dávka) vitaminů, minerálů a stopových prvků. Dieta může nahradit jedno nebo více denních jídel. Denní příjem od 700 kcal znamená, že v nejkratším možném čase ztratíte nadbytečné kilogramy a rychle získáte zpět ideální váhu.
                </p>

                <h2>Jak to celé funguje?</h2>

                <p>
                    Je to velmi jednoduché, nic nevážíte a nepočítáte žádné kalorie. Vše je baleno po porcích, které si můžete kdykoliv a kdekoli jednoduše připravit. Postačí vám k tomu voda a vaše Cambridge Diet. Každá porce obsahuje 1/3 DDD (doporučená denní dávka) vitaminů, minerálů a stopových prvků.
                </p> 
                <p>
                    Prvních pár dnů pro vás bude nejtěžších, ale jakmile si zvyknete na jinou stravu, vše se vám změní. Po prvním týdnu ztratíte první centimetry a budete se cítit „lehčí“. Po prvních čtrnácti dnech už budete vidět další úspěchy. Zmenší se vám obvod pasu, vaše oblíbené a možná pro některé ,,jediné" oblečení, do kterého jste se vešli, vám začne být volnější a vy se budete cítit lépe. Nesmíte však usnout na vavřínech a pokračovat dál.
                </p>
                <p>
                    Na nic nečekejte, kdykoli je ten pravý čas začít.
                </p>
            </div>
        </div>
    )
}




