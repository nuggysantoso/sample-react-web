import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import MainMenu from './MainMenu';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MainMenu />, document.getElementById('root'));
registerServiceWorker();
