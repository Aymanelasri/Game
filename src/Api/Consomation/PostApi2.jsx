
import { useState } from "react";
import axios from 'axios'

export default function PostApi2() {
    const [posts,setPosts]=useState([])
    const [loading,setLoading]=useState(false)
    const [search ,setSearch]=useState("")

    const charger =() =>{
        setLoading(true)
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            setTimeout(()=>{
                setPosts(response.data.slice(0,20));
                setLoading(false)

            },800)
            
        }
        
    )
    }
    const filterSearch=posts.filter(post=>post.title.toLowerCase().includes(search.toLowerCase()))

     
    return (
        <>
        <div className="container justify-content-center w-50">
            <div className="card shadow">
                <h2 className="text-info ">Liste des Articles (API)</h2>

                
                <button className="btn btn-success form-control " onClick={charger} disabled={loading}>
                    {loading ? "Chargements en cours... " : "Charger les Articles"}
                </button>


                <input type="search" name="search" onChange={(e)=>setSearch(e.target.value)} className="form-control  mt-2" placeholder="Rechercher par title" /><br />
            </div>

            <div>
                <h2>Article trouve : ( {filterSearch.length} )</h2>
                {filterSearch.map((post,id)=>(
                    

                    <div className="card shadow mb-2 p-2" key={id}>

                        <p><b className="text-info">{post.title}</b></p>
                        <p>{post.body}</p>
                    </div>

                ))}
            </div>
        </div>
        </>
      
    
    );
}