import React from 'react';
import "../styles/DiscordLink.css"
import Background from "../images/discord.png"
import Hero from "../images/discord1.png"

const DiscordLink = () => {
    return (
        <div className={"discord-container"}>
            <div>
                <div className="discord-content">
                    <div>
                        <h3>Discord</h3>
                        <a href="">Připojit se</a>
                    </div>
                    <div>
                        <img src={Hero} alt=""/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DiscordLink;