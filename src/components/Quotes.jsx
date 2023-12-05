import React, { useState, useEffect } from "react";

const Quotes = () => {
    const url = "https://api.quotable.io/random";
    const [data, setData] = useState([]);
    const fetchInfo = () => { 
    return fetch(url) 
            .then((res) => res.json()) 
            .then((d) => setData(d)) 
    }
    useEffect(() => {
        fetchInfo();
    }, [])
    return (
        <div>Quotes</div>
    )
}

export default Quotes