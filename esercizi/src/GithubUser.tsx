import { useEffect, useState } from "react"

interface User {
    name: string
    login: string
    avatar_url: string
}

interface Props {
    username: string
}

export function GithubUser({ username }: Props) {
    const [user, setUser] = useState<User | null>(null)
    
    useEffect(() => {
        if (!username) return
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [username])

    if (!user) return <p>Loading...</p>

    return (
        <div>
            <h3>{user.name}</h3>
            <p>{user.login}</p>
            <img src={user.avatar_url} alt={user.login} width="120" />
        </div>
    )
}