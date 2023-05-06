import React, {useEffect, useState} from 'react';
import Hero from "../images/minecraftHero.png"
import "../styles/MinecraftLink.css"

const MinecraftLink = () => {

    const [data, setData] = useState([])

    const getMcServerInfo = async () => {
      return await fetch('https://api.mcsrvstat.us/2/mc.epiclands.cz', {
        cache: 'no-cache'
      })
          .then(res => res.json())
          .then((result) => {
              setData(result.players.online)
          });
    };

    useEffect(() => {
        getMcServerInfo()
    }, [])


    return (
        <div className={"minecraft-container"}>
            <div>
                <div className="minecraft-content">
                    <div>
                        <h3>Minecraft Server</h3>
                        <p>Na serveru hraje {data} hráčů</p>
                        <a onClick={() => {navigator.clipboard.writeText("mc.epiclands.com")}}>Skopírovat IP</a>
                    </div>
                    <div>
                        <img src={Hero} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MinecraftLink;