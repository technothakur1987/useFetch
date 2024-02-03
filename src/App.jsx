import React  from "react";
import "./App.css";
import useFetchApi from "./useFetchApi";

function App() {

 let[apidata] = useFetchApi('https://jsonplaceholder.typicode.com/todos/1')  
  return (
    <>
      <h1>this is parent</h1>
    </>
  );
}

export default App;
