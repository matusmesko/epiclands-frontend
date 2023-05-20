import React from 'react';
import "../styles/Home.css"
import HomeHeader from "../components/HomeHeader";
import DiscordLink from "../components/DiscordLink";
import MinecraftLink from "../components/MinecraftLink";
import MinigamesList from "../components/MinigamesList";



const Home = () => {
    const copy = async () => {
        await navigator.clipboard.writeText("mc.epiclands.com");
        alert('Text copied');
    }
    return (
        <>
            <HomeHeader/>

            <main className={"home-main"}>
                <div className="main-container">
                    <div className="main-links">
                        <DiscordLink/>
                        <MinecraftLink/>
                    </div>
                    <div className="games">
                        <MinigamesList/>
                    </div>
                    <div className={"vote-links"}>
                        <div className="vote-container">
                            <form action="https://craftlist.org/epiclands" >
                                <div className="vote-content">
                                    <h3>Hlasuj pro nás!</h3>
                                    <input type="text" name="nick" placeholder="Přezdívka"/>
                                    <div className="vote-buttons">
                                        <input type="submit" value="Hlasovat pro craftlist"/>
                                        <a href="https://minecraftservery.eu/server/epiclands">Hlasovat pro minecraftservery</a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;