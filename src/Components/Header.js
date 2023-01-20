import React from "react";
import '../App.css';

function Header (props) {
    return (
        <header style={{padding:"10px 10px", backgroundColor: "darkgray"}}>
            <p style={{color:"black", fontSize:"25px", fontWeight:"bold", textAlign:"center"}}>{props.title}</p>
        </header>
    )
};

export default Header;