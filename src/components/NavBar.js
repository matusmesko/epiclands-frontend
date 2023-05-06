import React, {useState} from 'react';
import "../styles/NavBar.css"
import { Link } from "react-router-dom";
import Logo from "../images/logo.png"

const NavBar = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <nav className={colorChange ? 'navbar sticky' : 'navbar'}>
            <div className={"navbar-logo"} >
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }} onClick={() => {window.scrollTo(0,0)}}>
                    <img src={Logo} alt="Logo"/>
                </Link>
            </div>

            <ul className={"navbar-links"}>
                <li>
                    <Link to={"/"} href="" style={{ textDecoration: 'none', color: 'white' }}>Domů</Link>
                </li>
                <li>
                    <Link to={"/pripojeni"} href="" style={{ textDecoration: 'none', color: 'white' }}>Připojení</Link>
                </li>
                <li>
                    <Link to={"/pravidla"} href="" style={{ textDecoration: 'none', color: 'white' }}>Pravidla</Link>
                </li>
                <li>
                    <Link href="" style={{ textDecoration: 'none', color: 'white' }}>Nábory</Link>
                </li>
                <li className={"navbar-store"}>
                    <Link href="" style={{ textDecoration: 'none', color: 'white' }}>Obchod</Link>
                </li>
            </ul>
            
        </nav>
    );
};

export default NavBar;