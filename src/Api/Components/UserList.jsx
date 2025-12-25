import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));
  }, []);

      const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()));
 
   

  return (
    <div className="container mt-5">
      <h3>Liste des utilisateurs</h3>
      <input type="search" name="search" className='form-control mb-3' placeholder='Rechercher par nom' value={search} onChange={ (e) => setSearch(e.target.value)} />
      <ul className="list-group">
        {filteredUsers.map(user => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            {user.name} 
            <Link to={`/UserPost/${user.id}`} className="btn btn-primary btn-sm">
              Voir les posts
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
