import { useState } from 'react'
import { ArrowDown, ArrowUp } from 'lucide-react'
import { SortField, type User } from '../types'

const UserTable = ({ users }: { users: User[] }) => {
  const [sortField, setSortField] = useState<SortField>(SortField.NAME)
  const [ascending, setAscending] = useState(true)

  // Toggle sort field and direction (asc/desc)
  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setAscending(!ascending)
    } else {
      setSortField(field)
      setAscending(true)
    }
  }

  const sortedUsers = [...users].sort((a, b) => {
    const aValue = a[sortField].toLowerCase()
    const bValue = b[sortField].toLowerCase()
    return ascending
      ? aValue.localeCompare(bValue)
      : bValue.localeCompare(aValue)
  })

  return (
    <div className="overflow-x-auto rounded-xl shadow-md">
      <table className="min-w-full text-text-light bg-bg-dark border border-accent-dark">
        <thead className="bg-bg-darker text-primary">
          <tr>
            <th
              className="px-4 py-3 border-r border-bg-darker cursor-pointer"
              onClick={() => toggleSort(SortField.NAME)}
            >
              <div className="flex items-center gap-2">
                Name
                {sortField === SortField.NAME &&
                  (ascending ? <ArrowUp size={16} /> : <ArrowDown size={16} />)}
              </div>
            </th>
            <th
              className="px-4 py-3 cursor-pointer"
              onClick={() => toggleSort(SortField.EMAIL)}
            >
              <div className="flex items-center gap-2">
                Email
                {sortField === SortField.EMAIL &&
                  (ascending ? <ArrowUp size={16} /> : <ArrowDown size={16} />)}
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user, index) => (
            <tr
              key={user.id}
              className={
                index % 2 === 0
                  ? 'bg-bg-dark hover:bg-bg-darker'
                  : 'bg-bg-darker hover:bg-bg-dark'
              }
            >
              <td className="px-4 py-3 border-t border-bg-darker">
                {user.name}
              </td>
              <td className="px-4 py-3 border-t border-bg-darker">
                {user.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable
