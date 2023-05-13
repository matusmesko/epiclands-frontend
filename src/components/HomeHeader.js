import React, {useEffect, useState} from 'react';
import Background from "../images/background.png";
import {TbClipboardCopy} from "react-icons/tb";
import "../styles/HomeHeader.css"
import {HiOutlineStatusOnline} from "react-icons/hi";
import Hero from "../images/lbs-player.png"
const HomeHeader = () => {


    return (
        <header className={"home-header"}>

            <div className="home-header-container">
                <div className="home-header-text">
                    <h1>EpicLands</h1>
                    <p>Jsme Minecraft server, kde si můžeš užít napínavou zábavu s našimi skvělými minihrami! Náš server nabízí Survival, The Bridge a Bedwars, což hráčům poskytuje nekonečné hodiny zábavy a výzev.</p>
                </div>
                <img src={Hero} alt="Hero"/>
            </div>



        </header>
    );
};

export default HomeHeader;