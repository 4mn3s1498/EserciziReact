import { useEffect, useState } from 'react';

export function useGithubUser(username) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!username) {
            return
        }
        setError(null)
        setLoading(true)
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => setUser(data))
            .catch((error) => setError(null))
            .finally(() => {
                setLoading(false)
            })
    }, [username])
    return {
        user,
        loading,
        error
    }
}