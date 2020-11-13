import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.css";


import ListCounter from "./components/listcounter";

//display component to root div
//listcounter will have other components
ReactDOM.render( <ListCounter/>, document.getElementById('root')
);

//ReactDOM.render(<MyInfo/>, document.getElementById("root"));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
