import { useState } from 'react';

//A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.
export const useForm = initialValue => {
  const [values, setValues] = useState(initialValue);
  return [ values, e => {
      setValues({
        ...values,
        [e.target.name]:e.target.value,
      })
    }]
}