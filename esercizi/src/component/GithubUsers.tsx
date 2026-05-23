import { useEffect, useState } from "react"
import { GithubUser } from "./GithubUser"

interface User {
    id: number
    login: string
}

export function GithubUsers() {
    const [users, setUsers] = useState<User[]>([])
    const [selectedUser, setSelectedUser] = useState<string | null>(null)

    useEffect(() => {
        fetch("https://api.github.com/users?per_page=10")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <>
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={() => setSelectedUser(user.login)}>
                        {user.login}
                    </li>
                ))}
            </ul>
            {selectedUser && <GithubUser username={selectedUser} />}
        </>
    )
}