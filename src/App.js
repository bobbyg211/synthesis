import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users.json").then((users) => setUsers(users.data));
  });

  return (
    <div>
      <h1>Hello users!</h1>
      <ul className="users">
        {users.map((user) => (
          <li className="user">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>
            <p>
              <strong>City:</strong> {user.address.city}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
