import { Welcome } from "./Welcome";
import { Counter } from "./counter";
import { GithubUserList } from "./userList";
import { ShowGithubUser } from "./ShowGithubUser";
import { UsersIndex } from "./userIndex";

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function NotFound() {
  return <h1>404 - Pagina non trovata</h1>;
}

function App() {
  return (
    <div>
      <nav>
        <Link to="/">
          Welcome
        </Link>

        {" | "}

        <Link to="/counter">
          Counter
        </Link>

        {" | "}

        <Link to="/users">
          Github Users
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <Welcome
              name="Mario"
              age={20}
            />
          }
        />

        <Route
          path="/counter"
          element={
            <Counter
              vIniziale={0}
              incremento={0}
            />
          }
        />

        <Route
          path="/users"
          element={<GithubUserList />}
        >
          <Route
            index
            element={<UsersIndex />}
          />

          <Route
            path=":username"
            element={<ShowGithubUser />}
          />
        </Route>

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;