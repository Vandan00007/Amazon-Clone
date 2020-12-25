import React, {useEffect} from "react"
import './App.css';
import Header from './Header'
import Home from './Home'
import Login from './Login'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Checkout from './Checkout'
import {auth} from "./firebase"
import { useStateValue } from "./StateProvider";
import Payment from './Payment'
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    //only runs once when app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser){
          //user logged in
          dispatch({
            type: 'SET_USER',
            user: authUser
          })
      } else {
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])
  return (
    <Router>
    <div className="app">
    
      <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/checkout">
        <Header />
        <Checkout />
      </Route>
      <Route path="/payment">
        <Header />
        <Payment />
      </Route>

      <Route path="/">
        <Header />
        <Home />
      </Route>
      </Switch>
    </div>
    </Router>
    
  );
}

export default App;
