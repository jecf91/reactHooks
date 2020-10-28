import React, { useContext } from 'react';
import { UserContext } from '../Context/userContext';

export default function About() {

  const {state, setstate} = useContext(UserContext);

  return (  
    <div>
      <h1>About</h1>
      <h2>{state}</h2>
      <div>
        <button onClick={() => setstate('New change in About')}>Change context</button>
      </div>
    </div>
  )
}
