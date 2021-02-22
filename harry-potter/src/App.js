import React, { useEffect } from 'react';
import axios from 'axios';

import './App.css';
const API_KEY = '12345';

const App = () => {
useEffect(() => {
const getData = async () => {
const res = await axios.get(
`https://www.potterapi.com/v1/houses?key=${API_KEY}`
);
console.log(res);
};
getData();
}, []);
    return (
        <div className="container">
            <h1>Characters</h1>
        </div>
    );
};
export default App;

