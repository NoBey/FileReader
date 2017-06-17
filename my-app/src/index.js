import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import Gg  from 'gg'

ReactDOM.render(<Gg />, document.getElementById('root'));
registerServiceWorker();
