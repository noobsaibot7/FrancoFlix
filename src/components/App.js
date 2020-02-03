import React, { useState , useEffect} from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { GlobalStyle } from "./styles/GlobalStyle";

import Header from "./elements/Header";
import Home from "./Home";
import Movie from "./Movie";
import Notfound from "./Notfound";

const App = () => {
  
    function initialMode(){
      const isInStore = "mode" in window.localStorage;
      const defaultMode = window.matchMedia("(prefers-color-scheme:dark)").matches;
      console.log(isInStore, defaultMode);
  
      if(defaultMode){
        return defaultMode
      }else if(isInStore){
        return JSON.parse(window.localStorage.mode)
      }else{
        return false
      }
  }

  console.log(initialMode());

  const [mode, setMode] = useState(initialMode());
  const changeState = () => setMode(prevMode => !prevMode);

  useEffect(()=>{
    localStorage.setItem('mode', JSON.stringify(mode));
  }, [mode])

  return (
    <>
      <Router>
        <Header changeMode={changeState} theme={mode} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:movieId">
            <Movie />
          </Route>
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </Router>
      <GlobalStyle theme={mode} />
    </>
  );
};

export default App;
