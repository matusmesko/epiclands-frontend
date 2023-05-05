import React from 'react';
import "../styles/Home.css"
import Background from "../images/background.png"
import {TbClipboardCopy} from "react-icons/tb";
import HomeHeader from "../components/HomeHeader";
import DiscordLink from "../components/DiscordLink";


const Home = () => {
    const copy = async () => {
        await navigator.clipboard.writeText("mc.epiclands.com");
        alert('Text copied');
    }
    return (
        <div>
            <HomeHeader/>

            <main className={"home-main"}>
                <div className="main-links">
                    <DiscordLink/>
                </div>
            </main>

        </div>
    );
};

export default Home;