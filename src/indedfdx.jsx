// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [Data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const suppremer = (id) => {
    setData(Data.filter((e) => e.id !== id));
  };

  const filterData = Data.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        margin: "0 auto"
      }}
    >
      <h1>Liste of Users :</h1>

      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {filterData.length === 0 ? (
        <p>There are no users...</p>
      ) : (
        filterData.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid grey",
              borderRadius: "8px",
              padding: "15px",
              margin: "15px 0",
              boxShadow: "0 2px 6px rgba(0,0,0,0.15)"
            }}
          >
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>

            <button onClick={() => suppremer(user.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
