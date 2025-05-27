import UserTable from '../components/UserTable'
import { useUsers } from '../hooks/useUsers'

export default function Users() {
  const { users, loading, error } = useUsers()

  if (loading) return <p>Loading users...</p>
  if (error) return <p className="text-red-500">Error: {error}</p>
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-primary">Users</h2>
      <UserTable users={users} />
    </div>
  )
}
