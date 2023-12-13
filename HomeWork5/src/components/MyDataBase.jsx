import React, { useEffect, useState } from 'react'
import axios from 'axios';

const url = "http://localhost:3000/"

const Mydatabase = () => {
  const [mydata, setMydata] = useState([])
  useEffect(()=> {
    axios.get(url).then(({data})=> {
      setMydata(data)
    });
  },[])

  const deletedata = (id)=> {
    axios.delete(url + id).then((res)=> {
      if (res.statusText==="OK") {
        alert("Data Deleted")
      }
    })
  };
  return( 
    <ul>
      {
      mydata.map(({id, brand, model, carbody, color, price, year})=> {
        return (<li key={id}>{brand} {model} {carbody} {color} {price} {year} <button onClick={()=> deletedata(id)}>❌</button></li>);
      })
      }
    </ul>
  )
}

export default Mydatabase;