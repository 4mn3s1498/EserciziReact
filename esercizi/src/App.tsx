import { useCounter } from "./components/useCounter";
import { useCustom } from "./components/useCustom";
import { useGithubUser } from "./components/useGithubUser";
import { useCurrentLocation } from "./components/useLocation";

function App() {
  const { counter, increment, decrement, reset } = useCounter();

  const { username, password, handleChange } = useCustom();

  const {
    user,
    loading: githubLoading,
    error: githubError
  } = useGithubUser(username);

  const {
    position,
    loading: locationLoading,
    error: locationError,
    getLocation
  } = useCurrentLocation();

  return (
    <div>

      {/* COUNTER */}
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      {/* FORM */}
      <div>
        <input
          name="username"
          type="text"
          value={username}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />

        <button>Accedi</button>
      </div>

      {/* GITHUB USER */}
      <div>
        {githubLoading && <p>Loading GitHub...</p>}
        {githubError && <p>Errore GitHub</p>}

        {user && (
          <div>
            <h3>{user.name}</h3>
            <p>{user.login}</p>
            <img src={user.avatar_url} width="120" />
          </div>
        )}
      </div>

      {/* GEOLOCATION */}
      <div>
        <button onClick={getLocation}>Posizione</button>

        {locationLoading && <p>Sto prendendo posizione...</p>}
        {locationError && <p>Errore posizione</p>}

        {position && (
          <div>
            <p>Lat: {position.coords.latitude}</p>
            <p>Lng: {position.coords.longitude}</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default App;