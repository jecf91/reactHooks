import { useState, useEffect } from 'react';

export const useFetch = url => {
  
  const [ data, setData ] = useState({ response:null, loading:true });

  useEffect(() => {
    setData(state => ({response: state.response, loading:true }));
    fetch(url)
      .then(res => res.text())
      .then(data => {
        setData({response: data, loading: false})
      })
  }, [url]);

  return data;
}