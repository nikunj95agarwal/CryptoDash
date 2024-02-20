import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <p className="footer" style={{ textAlign: 'center', color:'red' }}>
                <NavLink to="/MeetDeveloper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{fontWeight:'bolder', fontSize:'4rem'}}>MEET DEVELOPER</span>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-user-6555548-5505868.png" alt="Developer" style={{ marginLeft: '5px', width: '60px', height: '60px' }} />
                </NavLink>
            </p>
        </>
    );
}

export default Footer;
