import { useState, useEffect } from "react";
import axios from "axios";

export default function Phone() {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [newContact, setNewContact] = useState({ name: "", phone: "" });

  
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setContacts(res.data))
      .catch(err => console.error(err));
  }, []);

  
  const handleAjouter = (e) => {
    e.preventDefault();
    if (!newContact.name || !newContact.phone) {
      return alert("Veuillez remplir tous les champs correctement.");
    }

    const newPost = {
      id: Date.now(),
      name: newContact.name,
      phone: newContact.phone
    };

    setContacts([newPost, ...contacts]);
    setNewContact({ name: "", phone: "" });
  }

  
  const hundleSupprimer = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce contact ?")) {
      setContacts(contacts.filter(contact => contact.id !== id));
    }
  }

  
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Répertoire Téléphonique</h1>

         
          <form onSubmit={handleAjouter}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Entrer votre nom"
                value={newContact.name}
                onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Entrer votre téléphone"
                value={newContact.phone}
                onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-3">
              Ajouter Contact
            </button>

            
            <input
              type="search"
              className="form-control"
              placeholder="Rechercher par nom"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </div>

       
        {filteredContacts.map((contact) => (
          <div key={contact.id} className="row justify-content-center mt-3">
            <div className="card w-50 p-3">
              <h5 className="card-title">{contact.name}</h5>
              <p className="card-text">{contact.phone}</p>
              <button
                className="btn btn-danger w-25"
                onClick={() => hundleSupprimer(contact.id)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
