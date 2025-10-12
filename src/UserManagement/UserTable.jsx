import { upload } from "@testing-library/user-event/dist/upload";
import React from "react";
import UsersUpdate from "./UsersUpdate";

export default function UserTable({ users }) {
  return (
    <div className="container">
      <h1 className="m-5">User Table</h1>

      <table className="table table-striped">
        <thead className="thead-inverse">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Full Name</th>
            <th scope="col">Country</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fullname}</td>
                <td>{user.country}</td>
                <td>
                  <button className="btn btn-primary mx-3" onClick={UsersUpdate}>Update</button>
                  <button className="btn btn-danger">Delete</button>
                </td>
                
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" align="center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}