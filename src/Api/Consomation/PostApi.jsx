import axios from 'axios';
import {  useState } from 'react'
export default function PostApi() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handlecharger = () => {
        setLoading(true);
        setError("");
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            setTimeout(() => {
                setPosts(response.data.slice(0, 20));
                setLoading(false);
            }, 800);
        })
        .catch((error) => {
            setTimeout(() => {
                setError("Erreur lors du chargement des données.");
                setLoading(false);
            }, 800);
        });
    }

    

    const filteredPosts = posts.filter(post => 
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-lg">
                        <div className="card-header bg-primary text-white text-center">
                            <h2 className="mb-0">Liste des Articles (API)</h2>
                        </div>
                        <div className="card-body">
                            <div className="d-flex flex-column align-items-center gap-3">
                                
                                <button onClick={handlecharger} className="btn btn-success btn-lg px-4" disabled={loading}>
                                    {loading ? "Chargement en cours..." : "Charger les articles"}
                                </button>
                                
                                {error && (
                                    <div className="alert alert-danger" role="alert">
                                        {error}
                                    </div>
                                )}
                                
                                <div className="w-100 d-flex justify-content-center">
                                    <input 
                                        type="search" 
                                        name="search" 
                                        value={search}
                                        onChange={(e) => setSearch(e.target.value)}
                                        className="form-control w-75 text-center" 
                                        placeholder="Rechercher par titre"
                                    />
                                </div>
                                {filteredPosts.length > 0 && (
                                    <div className="w-100 mt-4">
                                        <h4 className="text-center mb-3">Articles  ({filteredPosts.length})</h4>
                                        <div className="row">
                                            {filteredPosts.map((post) => (
                                                <div key={post.id} className='mb-3' >
                                                    <div className="card h-100 ">
                                                        <div className="card-body">
                                                            <h5 className="card-title text-info">{post.title}</h5>
                                                            <p className="card-text">{post.body}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    );
}