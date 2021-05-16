import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("/users").then((users) => setUsers(users.data));
  }, []);

  console.log(users);

  return (
    <div>
      <h1>Hello users!</h1>
      <ul className="users">
        {users.map((user) => (
          <li key={user.id} className="user">
            <p>
              <strong>Name:</strong> {user.first_name} {user.last_name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
