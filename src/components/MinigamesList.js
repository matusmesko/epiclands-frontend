import React from 'react';
import "../styles/MinigamesList.css"
import Survival from "../images/survival.png"
import Bridge from "../images/thebridge.png"
import BedWars from "../images/bedwars.png"

const MinigamesList = () => {
    return (
        <div  className={"games-container"}>
            <h1>Naše <span>Minihry</span></h1>
            <div className={"games-content"}>

                <div className="game-card">
                    <div className="game-card-haeder">
                        <img src={Survival} alt="Survival"/>
                        <h1>Survival</h1>
                    </div>
                    <div className="game-card-info">
                        <h3>Survival</h3>
                        <p>Survival je, kde hráči musí shromažďovat suroviny, stavět a přežít v nebezpečném světě plném příšer a dalších výzev. Na našem serveru může být režim přežití ještě zajímavější a poutavější s dalšími funkcemi.</p>
                    </div>
                </div>

                <div className="game-card">
                    <div className="game-card-haeder">
                        <img src={Bridge} alt="Survival"/>
                        <h1>The Bridge</h1>
                    </div>
                    <div className="game-card-info">
                        <h3>The Bridge</h3>
                        <p>The Bridge je rychlá minihra, která testuje schopnost hráčů vytvářet strategie a rychle reagovat. Cílem hry je překročit most a vstoupit do nepřátelské základny.</p>
                    </div>
                </div>

                <div className="game-card">
                    <div className="game-card-haeder">
                        <img src={BedWars} alt="Survival"/>
                        <h1>BedWars</h1>
                    </div>
                    <div className="game-card-info">
                        <h3>BedWars</h3>
                        <p>Hra začíná tím, že hráči jsou umístěni na různých ostrovech, každý s vlastní postelí. Postel fungují jako bod opětovného objevení hráče, a pokud je hráčovo postel zničena, již se nebude moci znovu objevit. Díky tomu je postel klíčovým prvkem hry a hráči musí pracovat na její ochraně za každou cenu.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MinigamesList;