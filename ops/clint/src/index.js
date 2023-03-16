import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PlayerContext from './component/player/player_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    (<>
    <PlayerContext><App /></PlayerContext>
    </>)

    
);
reportWebVitals();
