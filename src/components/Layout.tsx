import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Home, User, Settings, Menu, X } from 'lucide-react'

const links = [
  { to: '/overview', label: 'Overview', Icon: Home },
  { to: '/users', label: 'Users', Icon: User },
  { to: '/settings', label: 'Settings', Icon: Settings },
]

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const baseClass = 'flex gap-2 text-lg font-medium transition-colors'
  const activeClass = 'text-accent'
  const inactiveClass = 'text-text-gray hover:text-accent-light'

  return (
    <div className="flex h-screen bg-bg-darker text-text-light font-sans">
      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-bg-dark p-6 flex flex-col space-y-4 shadow-lg z-50 transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-primary">UnilimeApp</h1>
          <button
            className="md:hidden text-text-light"
            onClick={() => setSidebarOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        {links.map(({ to, label, Icon }) => (
          <NavLink
            key={to}
            to={to}
            onClick={() => setSidebarOpen(false)}
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            <Icon size={20} />
            {label}
          </NavLink>
        ))}
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Top bar with menu button on mobile */}
        <div className="md:hidden flex items-center justify-between bg-bg-dark px-4 py-3 shadow-md">
          <h1 className="text-xl font-bold text-primary">UnilimeApp</h1>
          <button
            className="text-text-light"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
