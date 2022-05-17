import React from 'react'
import { useState, useEffect } from "react";

function Shop() {

  //useeffect
  useEffect(() => {
    fetch_api();
  },[])

  const [items, setItems] = useState('Lines');

  const fetch_api = async ()=> {
    const data = await fetch('https://catfact.ninja/fact');
    const items = await data.json();    
    console.log(items.fact);
    setItems(items.fact);
  }

  return (
    <div>
      {
        <h1>{items.fact}</h1>        
      }
    </div>
  )
}

export default Shop