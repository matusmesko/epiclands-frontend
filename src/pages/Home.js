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
                <div className="main-links">
                    <DiscordLink/>
                    <MinecraftLink/>
                </div>
                <div className="games">
                    <MinigamesList/>
                </div>
            </main>
        </>
    );
};

export default Home;