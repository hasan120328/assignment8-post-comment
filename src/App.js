import React from 'react';


import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './Components/PostDetails.js/PostDetails';
import NoMatch from './Components/NoMatch/NoMatch';


function App() {
  return (
    <div>
      
      <Router>
        <Switch>
          <Route path="/home" >
          <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about/:userId">
           <PostDetails/>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
