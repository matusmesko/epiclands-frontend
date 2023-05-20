import React, {useState} from 'react';
import "../styles/NavBar.css"
import { Link } from "react-router-dom";
import Logo from "../images/logo.png"
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineClose} from "react-icons/ai";

const NavBar = () => {
    const [colorChange, setColorchange] = useState(false);
    const[clicked, setClicked] = useState(false)
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            setColorchange(true);
        }
        else{
            setColorchange(false);
        }
    };

    const handleClick = () => {
      setClicked(!clicked)
    }

    const close = () => {
      setClicked(false)
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0)
    }
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <nav className={colorChange ? 'navbar sticky' : 'navbar'}>
            <div className={clicked ? "navbar-container-active" : "navbar-container"}>
                <div className={clicked ? "navbar-logo-active" :"navbar-logo"} >
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }} onClick={() => {window.scrollTo(0,0)}}>
                        <img src={Logo} alt="Logo"/>
                    </Link>
                </div>

                <div className="navbar-buttons">
                    {
                        clicked ? <AiOutlineClose onClick={handleClick} size={30}/> : <AiOutlineMenu onClick={handleClick} size={30}/>
                    }
                </div>


                <ul className={clicked ? "navbar-links-active" :"navbar-links"}>
                    <li>
                        <Link to={"/"} href="" style={{ textDecoration: 'none', color: 'white' }} onClick={close}>Domů</Link>
                    </li>
                    <li>
                        <Link to={"/adminteam"} href="" style={{ textDecoration: 'none', color: 'white' }} onClick={close}>Admin Team</Link>
                    </li>
                    <li>
                        <Link to={"/pripojeni"}  href="" style={{ textDecoration: 'none', color: 'white' }} onClick={close}>Připojení</Link>
                    </li>
                    <li>
                        <Link to={"/pravidla"}  href="" style={{ textDecoration: 'none', color: 'white' }} onClick={close}>Pravidla</Link>
                    </li>
                    <li className={"navbar-store"}>
                        <a href="https://epiclands.craftingstore.net/" style={{ textDecoration: 'none', color: 'white' }}>Obchod</a>
                    </li>
                </ul>

            </div>


            
        </nav>
    );
};

export default NavBar;