import { useState } from 'react'
import { useGithubUser } from './component/query'

function App() {
  const [username, setUsername] = useState("")

  const { user, loading, error, refetch } = useGithubUser(username)

  return (
    <>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username github"
      />

      <button onClick={refetch}>Ricarica</button>

      {loading && <p>Loading...</p>}
      {error && <p>Errore</p>}

      {user && (
        <div>
          <h3>{user.login}</h3>
          <img src={user.avatar_url} width="100" />
        </div>
      )}
    </>
  )
}

export default App