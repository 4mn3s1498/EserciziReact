import { useQuery } from "react-query"

async function fetchGithubUser(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}`
  )

  const data = await response.json()

  return data
}

export function useGithubUser(username) {
  const query = useQuery({
    queryKey: ["githubUser", username],

    queryFn: () => fetchGithubUser(username),

    enabled: !!username
  })

  return {
    user: query.data,
    loading: query.isLoading,
    error: query.error,
    refetch: query.refetch
  }
}