import React, { useEffect, useState } from 'react';
import axios from "axios";
import Card from '../card/Card';
import "./logements.css"
import listLogements from "../../db/logements.json";

const Logements = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("/db/logements.json")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));

    },/*callback*/[]);
    return (

        <div className="logements-background">
            <div className="cards">
                {data.map((logement, index) => (

                    <Card key={index} logement={logement}></Card>

                ))}
            </div>
        </div>
    );
};

export default Logements;