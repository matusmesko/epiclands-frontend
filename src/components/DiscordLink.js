import React from 'react';
import "../styles/DiscordLink.css"
import Background from "../images/discord.png"
import Hero from "../images/discord1.png"

const DiscordLink = () => {
    return (
        <div className={"discord-container"}>
                <div className="discord-content">
                    <div>
                        <h3>Discord</h3>
                        <a href="https://discord.com/invite/FUYXZmEBWY">Připojit se</a>
                    </div>
                    <div>
                        <img src={Hero} alt=""/>
                    </div>
                </div>

        </div>
    );
};

export default DiscordLink;