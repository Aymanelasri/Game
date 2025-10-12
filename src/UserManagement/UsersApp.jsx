import { useState } from "react";
import UserLayout from "./UserLayout";
import UserTable from "./UserTable";
import UsersAdd from "./UsersAdd";
import UsersUpdate from "./UsersUpdate";
import { Routes, Route } from "react-router-dom";



export default function UsersApp() {
  const [users, setUsers] = useState([]);
  const [currentId, setCurrentId] = useState(0);

  const addUser = (data) => {
    setUsers([...users, data.payload]);
    setCurrentId(currentId + 1);
  };
  const updateUser = (id, updatedData) => {
    setUsers(users.map((u) => (u.id === id ? updatedData : u)));
  };

  return (
    <>
   
         <UserLayout>
      <Routes>
        <Route
          path="/"
          element={<UserTable users={users} />}
        />
        <Route
          path="/user/create"
          element={<UsersAdd currentId={currentId} onAddUser={addUser} />}
        />
        <Route
          path="/user/:id/update"
          element={<UsersUpdate users={users}  onUpdateUser={updateUser} />}
        />
      </Routes>
    </UserLayout>
    
   
    </>
  );
}
