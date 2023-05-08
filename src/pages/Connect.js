import React from 'react';
import SmallHeader from "../components/SmallHeader";
import "../styles/Connect.css"

const Connect = () => {
    return (
        <div>
            <SmallHeader title={"Připojení"}/>
            <main className={"connect-main"}>
                <div className="connect-container">
                    <ul>
                        <li>Zapněte si Minecraft launcher</li>
                        <li>Připojte se do Minecraftu s verzí 1.8 nebo novější</li>
                        <li>Klikněte na tlačítko Multiplayer a poté na Add server, kam do pole Server Adress vyplňte IP: <span>mc.epiclands.cz</span></li>
                        <li>Klikněte na tlačítko Done</li>
                        <li>Při prvním připojení se musíte zaregistrovat příkazem: <span>/register vaseheslo vaseheslo</span></li>
                        <li>Při dalším přihlášení na server použijte příkaz: <span>/login vaseheslo</span></li>
                    </ul>
                </div>
            </main>
        </div>
    );
};

export default Connect;