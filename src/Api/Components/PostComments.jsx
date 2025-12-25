import { useState } from "react";
import axios from "axios";

export default function PostComments({ postId }) {
  const [comments, setComments] = useState([]);
  const [visible, setVisible] = useState(false);

  const Comments = () => {
    if (!visible) {
      axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => setComments(res.data))
        .catch(err => console.error(err));
    }
    setVisible(!visible);
  };

  return (
    <div>
      <button className="btn btn-sm btn-info mb-2" onClick={Comments}>
        {visible ? "Masquer les commentaires" : "Afficher les commentaires"} ({comments.length})
      </button>
      {visible && comments.map(c => (
        <div key={c.id} className="border p-2 mb-1">
          <strong>{c.name} ({c.email})</strong>
          <p>{c.body}</p>
        </div>
      ))}
    </div>
  );
}
