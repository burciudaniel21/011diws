import {useState, useEffect} from 'react'

const useFetch = (url ) =>{
    const[data, setData] = useState(null);
    const[isLoading, setIsLoading] = useState(true);
    const[error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
          .then(res => {
              if(!res.ok){
                 throw Error('Data could not be loaded.'); 
              }
              return res.json();
          })
          .then(data => {       
              console.log(data);
              setData(data);
              setIsLoading(false);
              setError(null);
          })
          .catch(err => {
              setIsLoading(false);
              setError(err.message);
          })
        }, 1000);  
  
      }, [url]);
      return {data, isLoading, error}
}


export default useFetch;