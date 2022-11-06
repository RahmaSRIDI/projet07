import React from "react";
import "./server.css";


const Server = ({ host }) => {
    const isHostSplited = host.name.split(" ");
    const [name, lastname] = isHostSplited;

    return (
        <div className="server">
            <div className="server_name">
                <p className="server_firstname">{name.trim()}</p>
                <p className="server_lastname">{lastname.trim()}</p>
            </div>

            <img src={host.picture} alt="" className="server_picture" />
        </div>
    );
};

export default Server;