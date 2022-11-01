import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from '../card/Card';
import "./logements.css"

const Logements = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("/db/logements.json")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));

    })
    return (
        /*<div className="background">
            <div className="location-card-info">
                {locations.map((location) => <LocationCard key={location.id} location={location} />)}
            </div>
        </div>*/

        <div className="logements-background">
            {data.map((logement, index) => (
                <div className="cards">
                    <Card key={index} logement={logement}></Card>
                </div>
            ))}

        </div>
    );
};

export default Logements;