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


    const copyIpServer = () => {
        let copyText = document.getElementById("copy");
        let textArea = document.createElement("textarea");
        textArea.value = copyText.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("Copy");
        textArea.remove();
    }


    return (
        <div className={"minecraft-container"}>

                <div className="minecraft-content">
                    <div>
                        <h3>Minecraft Server</h3>
                        <p>Na serveru hraje {data} hráčů</p>
                        <a onClick={() => copyIpServer()}>Skopírovat IP</a>
                        <p id="copy">mc.epiclands.com</p>
                    </div>
                    <div>
                        <img src={Hero} alt=""/>
                    </div>
                </div>
        </div>
    );
};

export default MinecraftLink;