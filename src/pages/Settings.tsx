import { useState } from 'react'
import { useTheme } from '../hooks/useTheme'

const Settings = () => {
  const [notifications, setNotifications] = useState(false)
  const [username, setUsername] = useState('')

  const { theme, toggleTheme } = useTheme()

  return (
    <div className="p-4 text-gray-900 dark:text-text-light bg-accent-dark dark:bg-bg-dark min-h-screen transition-colors duration-300">
      <h1 className="text-2xl font-bold mb-4 text-primary">Settings</h1>

      <form className="space-y-6 max-w-md">
        {/* Theme Toggle */}
        <div className="flex items-center justify-between">
          <label className="font-medium">Dark Mode</label>
          <button
            type="button"
            onClick={toggleTheme}
            className="bg-primary hover:bg-primary-dark text-black px-4 py-1 rounded transition-colors duration-200"
          >
            {theme === 'dark' ? 'Disable' : 'Enable'}
          </button>
        </div>

        {/* Checkbox */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="notifications"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            className="accent-primary"
          />
          <label htmlFor="notifications" className="font-medium">
            Enable Notifications
          </label>
        </div>

        {/* Text Input */}
        <div>
          <label htmlFor="username" className="block mb-1 font-medium">
            Username
          </label>
          <input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 rounded border border-accent-dark bg-gray-100 dark:bg-bg-darker text-black dark:text-text-light placeholder-gray-500 dark:placeholder-text-gray transition-colors duration-300"
            placeholder="Enter your username"
          />
        </div>
      </form>
    </div>
  )
}

export default Settings
