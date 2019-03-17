import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import '../public/src/custom.css';
import App from './App';
import configureStore from '../src/stores';
import { PersistGate } from 'redux-persist/integration/react';

// const store = configureStore();

const Loading = () => (
    <div id="loader2">
        Loading...
    </div>
);

ReactDOM.render(<App />, document.getElementById('root'));