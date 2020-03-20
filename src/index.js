import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux' // Componenet that helps us connect react and redux --> surrownd the root component
import rootReducer from './reducers/rootReducer'


// create redux Store 
const store = createStore(rootReducer);


// passing the store inside our App --> so we can acces it 
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// registerServiceWorker();