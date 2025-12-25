import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PostComments from "./PostComments";

export default function UserPosts() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState(
    { title: "", body: "" }
     );

  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => setUser(res.data))
      .catch(err => console.error('Erreur utilisateur :', err));

    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(res => setPosts(res.data))
      .catch(err => console.error('Erreur posts :', err));
  }, [userId]);

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.body) return;

     const post = {
      id: Date.now(),  
      title: newPost.title,
      body: newPost.body
    };

    setPosts([post, ...posts]);  
    setNewPost({ title: "", body: "" });
  };

  if (!user) return <div>Chargement...</div>;

  return (
    <div className="container mt-4">
      <Link to="/" className="btn btn-secondary mb-3">Retour</Link>
      <h2>Posts de l'utilisateur {user.name}</h2>

      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Titre du post"
          value={newPost.title}
          onChange={e => setNewPost({ ...newPost, title: e.target.value })}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Contenu du post"
          value={newPost.body}
          onChange={e => setNewPost({ ...newPost, body: e.target.value })}
        />
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>

      {posts.map(post => (
        <div key={post.id} className="card mb-3">
          <div className="card-body">
            <h5>{post.title}</h5>
            <p>{post.body}</p>
            <PostComments postId={post.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
