import React , { useState } from 'react';
import { useForm } from './useForm';

/*function intialExpensiveState() {
  return 10
}*/

const App = () => {

// const [initialValue, setValue] = useState(() => intialExpensiveState());

// const [ { count, count2 } , setValue] = useState({ count:10, count2: 20 });

/* return (
    <div>
      <h1>Count 1:</h1>
      <p>{count}</p>
      <h1>Count 2:</h1>
      <p>{count2}</p>
      <button onClick={() => setValue(initialState => ({
        ...initialState,
        count: initialState.count + 1,
      }))}>Increment count 1</button>
      <button onClick={() => setValue(initialState => ({
        ...initialState,
        count2: initialState.count2 - 1,
      }))}>Decrement count 2</button>
    </div>
  );*/

  //const [name, setName] = useState('');
  //const [password, setPassword] = useState('');

  const [ values, defineValues ] = useForm({email:'', password:''});

  return(
    <div>
      <input name="email" type="text" value={values.email} onChange={defineValues} />
      <input name="password" type="password" value={values.password} onChange={defineValues} />
      <p>{values.email}</p>
      <p>{values.password}</p>
    </div>
  )
}

export default App;
