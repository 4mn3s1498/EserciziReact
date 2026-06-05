import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function GithubUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      const response = await fetch(
        "https://api.github.com/users"
      );

      const data = await response.json();

      setUsers(data);
    }

    getUsers();
  }, []);

  return (
    <div>
      <h2>Utenti Github</h2>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={user.login}>
              {user.login}
            </Link>
          </li>
        ))}
      </ul>

      <Outlet />
    </div>
  );
}