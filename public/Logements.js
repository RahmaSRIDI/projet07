import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Logements = () => {
    const [data, setData] = useState([]);

    useEffect(() => {

        axios.get("./logements.json")
            .then((res) => setData(res.data));
    })
    return (
        <div>

        </div>
    );
};

export default Logements;