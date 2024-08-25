import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import CricketProvider from "./context/CricketProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <CricketProvider>
        <App />
    </CricketProvider>
    
    
)

