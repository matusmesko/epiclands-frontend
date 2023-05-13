import React from 'react';
import "../styles/Rules.css"
import SmallHeader from "../components/SmallHeader";

const Rules = () => {
    return (
        <>
            <SmallHeader title={"Pravidla"}/>

            <main className={"rules-main"}>
                <div className="rules-container">
                    <div className="rule">
                        <h3>Obecné</h3>
                            <ul>
                                <li>V případě že něco není napsáno v pravidlech, neznamená to že to je automaticky povolené.</li>
                                <li>V případě že váš účet sdílíte s vašima sourozencema, poté je za účet a veškeré činnosti konané na něm zodpovědný jeho originální majitel.</li>
                                <li>Hráč je povinen uposlechnout jakýkoliv rozkaz člena A-Teamu.</li>
                                <li>Je zakázáno používat jakékoliv modifikace, programy a resource packy které neférově zvýhodňují vaši hru oproti ostatním.</li>
                                <li>Je zakázáno cíleně hrát nebo vypadat jako Hacker. Toto bude trestáno úplně stejně jako kdyby jste hacky měli.</li>
                                <li>Je zakázáno využívat VPN / Proxy.</li>
                                <li>Je zakázáno na serveru využívat 2 nebo více účtů zároveň pro získání jakýchkoliv výhod.</li>
                                <li>Je zakázáno jakýmkoliv způsobem obcházet trest.</li>
                                <li>Je přísně zakázáno zveřejňovat osobní údaje jakéhokoliv hráče nebo člena A-Teamu.</li>
                                <li>Je zakázáno zneužívat nebo šířit jakékoliv chyby. V případě že naleznete bug, jste povinní jej nahlásit na našem webu nebo discordu.</li>
                            </ul>
                    </div>

                    <div className="rule">
                        <h3>Chat</h3>
                        <ul>
                            <li>Je zakázáno spamovat - psaní stejných nebo podobných zpráv v krátkém intervalu.</li>
                            <li>Je zakázáno používat vulgarismy.</li>
                            <li>Je zakázáno vytvářet hádky nebo se v nich účastnit, jakkoliv hráčům vyhrožovat nebo je zesměšňovat.</li>
                            <li>Je zakázáná jakákoliv reklama nesouvisející ze serverem EpicLands.</li>
                            <li>Je zakázáno nabádat hráče k porušování pravidel.</li>
                            <li>Je zakázáno žebrat o jakýkoliv rank, prefix nebo o OP.</li>
                            <li>Je zakázáno jakkoliv provokovat, obtěžovat nebo urážet členy A-Teamu.</li>
                            <li>Je zakázáno urážet server.</li>
                            <li>Je zakázaná jakákoliv forma Rasismu, Nacismu, Xenofobie, Pedofilie nebo sexuality.</li>
                        </ul>
                    </div>

                    <div className="rule">
                        <h3>Nick a skin</h3>
                        <ul>
                            <li>Váš nick ani skin nesmí obsahovat ani napodobovat jakéhokoliv člena A-Teamu nebo Vedení serveru</li>
                            <li>Váš nick nesmí obsahovat ani napodobovat YouTubera či jinou známou osobu</li>
                            <li>Váš skin nesmí jakkoliv vyjadřovat ani napodobovat: Rasismus, Nacismus, Xenofobii, Pedofilii nebo NSFW Kontent</li>
                            <li>Váš nick nesmí být vulgární ani nikoho urážet či provokovat</li>
                            <li>Váš nick nesmí obsahovat název serveru nebo hack clientu</li>
                            <li>Váš nick nesmí obsahovat falešný rank (př. "Hl.Helper_PostizenaOkurka")</li>
                        </ul>
                    </div>

                    <div className="rule">
                        <h3>Minihry</h3>
                        <ul>
                            <li>Je zakázáno provádět TPA-Kill</li>
                            <li>Je zakázáno zneužívat interních chyb minecraftu (př. Duplikace itemů, shazování serverů, apod..)</li>
                            <li>Je zakázán teaming na všech minihrách krom Survival.</li>
                        </ul>
                    </div>

                    <div className="rule">
                        <h3>Server</h3>
                        <ul>
                            <li>Vedení serveru si vyhrazuje právo potrestat libovolného hráče bez udání důvodu.</li>
                            <li>Je zakázáno jakkoliv poškozovat nebo shazovat servery EpicLands.</li>
                            <li>Je zakázáno kopírovat jakýkoliv majetek serveru EpicLands (Pravidla, Popisky místností na Discordu, Mapy, apod...).</li>
                            <li>Vedení serveru si vyhrazuje právo na jakýkoliv zákrok na celém serveru bez udání důvodu a informování hráče.</li>
                            <li>A-Team ani Vedení Serveru nemá povinnost uchovávat ani předkládat důkazy ohledně prohřešků hráče.</li>
                            <li>Vedení serveru si vyhrazuje právo na úpravu pravidel bez informování hráče.</li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Rules;