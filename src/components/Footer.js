import React from 'react';
import "../styles/Footer.css"
import Discord from "../images/discordLink.png"

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-links">
                        <h3>Užitečné odkazy</h3>
                        <ul>
                            <li><a href="/">Domů</a></li>
                            <li><a href="/pripojeni">Připojení</a></li>
                            <li><a href="https://epiclands.craftingstore.net/">Obchod</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h3>Pravidla a podmínky</h3>
                        <ul>
                            <li><a href="/pravidla">Pravidla</a></li>
                            <li><a href="">Ochrana osobních údajů</a></li>
                        </ul>
                    </div>

                    <div className="footer-socials">
                        <a href="https://discord.com/invite/FUYXZmEBWY"><img src={Discord} alt="Discord logo"/></a>
                    </div>
                </div>

                <div className="creator-container">
                    <p>© EpicLands Všechna práva vyhrazena! | Vytvořil <a href="https://github.com/M3SK1">M3SK1</a></p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;