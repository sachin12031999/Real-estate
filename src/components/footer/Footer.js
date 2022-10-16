import React from "react";
import "./Footer.css";
import {FaFacebook, FaInstagram, FaTwitter, FaPinterest} from 'react-icons/fa'
const Footer=()=>{

    return(
        <div className="footer">
            <div className="social">
                <FaFacebook className="icon"/>
                <FaTwitter className="icon"/>
                <FaInstagram className="icon"/>
                <FaPinterest className="icon"/>
            </div>
                <div className="container">
                    <div className="col">
                        <h3>About</h3>
                        <p>Compant</p>
                        <p>Details</p>
                        <p>Planning</p>
                        <p>About Us</p>
                    </div>
                    <div className="col">
                        <h3>Company</h3>
                        <p>Compant</p>
                        <p>Details</p>
                        <p>Planning</p>
                        <p>About Us</p>
                    </div>
                    <div className="col">
                        <h3>Legal</h3>
                        <p>Compant</p>
                        <p>Details</p>
                        <p>Planning</p>
                        <p>About Us</p>
                    </div>
                    <div className="col">
                        <h3>Infomartion</h3>
                        <p>Compant</p>
                        <p>Details</p>
                        <p>Planning</p>
                        <p>About Us</p>
                    </div>
                </div>
        </div>
    )
}

export default Footer;