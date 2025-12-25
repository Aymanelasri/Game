import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";

export default function Axios(){
    const [Data , setData] = useState([])
    const [Search , setSearch] = useState("")
 
    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => setData(response.data))
    
    },[])
    
    const supprimer = (id)=> {
        setData(Data.filter(e => e.id !== id))
    }
    const recherger = Data.filter(e => 
        e.name.toLowerCase().includes(Search.toLowerCase())
    )
  
    return(
        <div>
            <div>
                <input type="search" name="search" value={Search} className='form-control mb-3' placeholder='Rechercher par nom' onChange={(e) => setSearch(e.target.value)} />
                <h1>Liste of Users : </h1>
                {recherger.length===0 ? (
                    <p>there no user...</p>
                ):(
                recherger.map((e)=> (
                    <div key={e.id} style={{border : "1px solid black"}}>
                        <p>{e.name}</p>
                        <p>{e.username}</p>
                        <p>{e.email}</p>
                        <button onClick={()=>supprimer(e.id)} >Delete</button>
                    </div>
                    
                ))
                )}
              
                
            </div>
            
        </div>
    )
}