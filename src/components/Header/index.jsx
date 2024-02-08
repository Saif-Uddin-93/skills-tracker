import React from "react";
import "./style.css"
import Login from "../Login"
import SignIn from "../SignIn";
import Hero from "../Hero";

function Header(props) {
    return(<header>
        Header
        <Hero />
        <Login />
    </header>)
}

export default Header