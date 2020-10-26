import React , { useState } from 'react';
import { useForm } from './useForm';
import { useFetch } from './useFetch';


const App = () => {

  const [ values, defineValues ] = useForm({email:'', password:''});

  const [counter , setCounter ] = useState(0);

  const {response, loading} = useFetch(`http://numbersapi.com/${counter}/trivia`);

  return(
    <div>
      <input name="email" type="text" value={values.email} onChange={defineValues} />
      <input name="password" type="password" value={values.password} onChange={defineValues} />
      <button onClick={() => setCounter(counter+1)}>Change number</button>
      <p>{values.email}</p>
      <p>{values.password}</p>
      <p>{loading ? "loading..." : response}</p>
    </div>
  )
}

export default App;
