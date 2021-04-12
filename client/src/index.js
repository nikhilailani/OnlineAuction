import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js'
// import ActiveBids from './components/Active-bids'

import { Provider } from 'react-redux'
import { createStore } from "redux";
import UserDataReducer from "./common/UserReducer";

import { Router } from "react-router-dom"
import createHistory from 'history/createBrowserHistory'

const history = createHistory()

// function formatName(user) {
//   return user.address.city  
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez',
//   address : {
//     city :"nadiad"

//   }
// };
// function abc(){
//   return new Date().toLocaleTimeString()
// }
// const element = (
//   <div>
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
//   <h2>It is {abc()}.</h2>

//   </div>
// );

// function Welcome(props) {
//   return (<div>
//   <h1>Hello, {props.name}</h1>
//   <p>Welcome</p></div>);
// }

// // function App() {
// //   return (
// //     <div>
// //       <Welcome name="Sara" />
// //       <Welcome name="Cahal" />
// //       <Welcome name="Edite" />
// //     </div>
// //   );
// // }


// ReactDOM.render(<Welcome name="vatsal" />, document.getElementById('root'));


//setInterval(tick, 1000);

// ReactDOM.render(
//    // <React.StrictMode>
//      //  <App />
//    // </React.StrictMode>,
//    element,
//    document.getElementById('root')
// );

// setInterval(abc,10)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
//const Completionist = () => <span>You are good to go!</span>;


const store = createStore(UserDataReducer);

ReactDOM.render(  <Provider store={store}>
  <App /></Provider>, document.getElementById('root'));
