import { useEffect, useState } from 'react'

/**
 * Custom hook to manage and persist light/dark theme.
 * Adds or removes the `dark` class on the <html> element.
 *
 * @returns {{
 *   theme: 'light' | 'dark',
 *   toggleTheme: () => void
 * }}
 */
export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    updateDocumentClass(initialTheme)
  }, [])

  const updateDocumentClass = (newTheme: 'light' | 'dark') => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    updateDocumentClass(newTheme)
  }

  return { theme, toggleTheme }
}
