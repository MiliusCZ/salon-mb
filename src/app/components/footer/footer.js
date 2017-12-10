import React from 'react';
import './footer.scss';

export const Footer = () => (
    <div className="footer">
        <div className="contactBlock">
            <h4>Kontakty</h4>
            <span>Web: </span>
            <a href="http://www.mysthic-beauty.cz">
                http://www.mysthic-beauty.cz
            </a>
            <br />
            <span>Facebook: </span>
            <a href="https://www.facebook.com/MysthicBeauty">
                facebook.com/MysthicBeauty
            </a>
        </div>
        <div className="contactBlock">
            <h4>Telefony</h4>
            <div className="footerItem">
                <span className="footerItemHeading">Masáže: </span>
                <a href="tel:+420 605 158 070">+420 605 158 070</a>
            </div>
            <div className="footerItem">
                <span className="footerItemHeading">Kadeřnictví: </span>
                <a href="tel:+420 608 264 421">+420 608 264 421</a>
            </div>
            <div className="footerItem">
                <span className="footerItemHeading">Kosmetika: </span>
                <a href="tel:+420 608 618 404">+420 608 618 404</a>
            </div>
            <div className="footerItem">
                <span className="footerItemHeading">Cambridge Weight Plan: </span>
                <a href="tel:+420 605 158 070">+420 605 158 070</a>
            </div>
        </div>
        <div className="contactBlock">
            <h4>Adresa</h4>
            <span>
                Mysthic Beauty<br />
                Víta Nejedlého 742<br />
                293 06, Kosmonosy<br />
            </span>
            <span>
                <a
                    target="_blank"
                    href="http://www.mapy.cz/#!q=Víta Nejedlého 742, 293 06, Kosmonosy&amp;x=14.934495&amp;y=50.435469&amp;z=15&amp;t=s&amp;d=addr_10524492_1"
                >
                    mapa
                </a>
            </span>
        </div>
        <div className="contactBlock right">
            <h4>Provozní doba</h4>
            <span>
                <p>dle telefonické dohody</p>
            </span>
        </div>
    </div>
);
