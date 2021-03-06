
import ReactDOM from "react-dom";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import React from "react";
import store from "./redux/redux-store";
import {Provider} from "react-redux";




    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

