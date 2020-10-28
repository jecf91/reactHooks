import React, { useContext } from 'react'

import { UserContext } from '../Context/userContext';

export default function Home() {

  const {state, setstate} = useContext(UserContext);

  return (
    <div>
      <h1>Home</h1>
      <h2>{state}</h2>
      <div>
        <button onClick={() => setstate('Changed state in Home')}>Change context</button>
      </div>
    </div>
  )
}
