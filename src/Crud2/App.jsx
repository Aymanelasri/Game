import { useDispatch, useSelector } from "react-redux";
import { add, update, remove } from "./appSlice";
import { useState } from "react";

export default function App() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users.users);

  const [edit, setEdit] = useState(null);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    if (!nom || !prenom || !email) return ;

    if (edit) {
      dispatch(update({ edit, nom, prenom, email }));
      setEdit(null);
    } else {
      dispatch(add({
        id: Date.now(),
        nom,
        prenom,
        email
      }));
    }

    setNom(""); setPrenom(""); setEmail("");
  };

  const handleEdit = (user) => {
    setEdit(user.id);
    setNom(user.nom);
    setPrenom(user.prenom);
    setEmail(user.email);
  };

  return (
    <div style={{ padding: 20 , textAlign: "center", border: "1px solid black", margin: "auto", width: "50%"}}>
      <h2>CRUD Simple</h2>

      <input placeholder="Nom" value={nom} onChange={e => setNom(e.target.value)} /><br/>
      <input placeholder="Prénom" value={prenom} onChange={e => setPrenom(e.target.value)} /><br/>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} /><br/>

      <button onClick={handleSubmit}>
        {edit ? "Modifier" : "Ajouter"}
      </button>

      <hr/>

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.nom} {u.prenom} — {u.email}

            <button onClick={() => handleEdit(u)}>Modifier</button>
            <button onClick={() => dispatch(remove(u.id))}>Suppr</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
