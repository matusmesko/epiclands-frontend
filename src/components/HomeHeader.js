import React, {useEffect, useState} from 'react';
import Background from "../images/background.png";
import {TbClipboardCopy} from "react-icons/tb";
import "../styles/HomeHeader.css"
import {HiOutlineStatusOnline} from "react-icons/hi";

const HomeHeader = () => {

    const [data, setData] = useState("");

    const getMcServerInfo = async () => {
      return await fetch('https://api.craftlist.org/v1/6ax3k2xiggwzwibl0hh0/info', {
        cache: 'no-cache',
          mode: "no-cors"
      })
          .then(res => res.json())
          .then((result) => {

            setData(result.onlinePlayers)
            return result;
          });

    };

    useEffect(() => {
        getMcServerInfo()
    }, [])

    return (
        <header className={"home-header"}>
            <div className="home-haeder-background">
                <img src={Background} alt="Background" className={"background-image"}/>
            </div>
            <div className={"address-container"}>
                <div className={"address"}>
                    <div className={"address-info"}>
                        <h3>IP: <span>mc.epiclands.cz</span> <TbClipboardCopy/></h3>
                        <p><HiOutlineStatusOnline/> {data} hráčov online</p>
                    </div>
                    <a href="" style={{ textDecoration: 'none'}}>Jak se připojit</a>
                </div>

            </div>
        </header>
    );
};

export default HomeHeader;