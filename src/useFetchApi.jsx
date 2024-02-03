import React,{ useEffect , useState} from 'react'
import axios from 'axios';

const useFetchApi = (url) => {
    let [apidata, setApiData] = useState('')
    useEffect(()=>{
   

        let interval =  setInterval(() => {
           axios.get(url)
           .then(function (response) {
             // handle success
             console.log(response.data);
             setApiData(response.data)
           })
           .catch(function (error) {
             // handle error
             console.log(error);
           })
           
         }, 60000);
     
         return ()=>{(clearInterval(interval))}
     
         
     
       },[])
  return (
    [apidata]
  )
}

export default useFetchApi
