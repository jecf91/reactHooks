import React, { useState } from 'react';
import { Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import { UserContext } from './Context/userContext';

import Home from './Components/Home';
import About from './Components/About';

const App = () => {

  const [ state, setstate ] = useState('hello from state')

  return(
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
       <UserContext.Provider value={{state, setstate}}> 
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  )   
}

export default App;
