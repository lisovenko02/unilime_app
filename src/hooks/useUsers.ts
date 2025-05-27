import { useEffect, useState } from 'react'
import type { User } from '../types'

/**
 * Fetches and returns a list of users from a public API.
 *
 * @returns {{
 *   users: User[],
 *   loading: boolean,
 *   error: string | null
 * }}
 */
export function useUsers() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch users')
        return res.json()
      })
      .then((data) => setUsers(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { users, loading, error }
}
