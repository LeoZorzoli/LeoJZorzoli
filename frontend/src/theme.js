import { useEffect, useState } from 'react'

const STORAGE_KEY = 'theme'
const media = window.matchMedia('(prefers-color-scheme: dark)')

const readStored = () => {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return value === 'light' || value === 'dark' ? value : null
  } catch {
    return null
  }
}

const systemTheme = () => (media.matches ? 'dark' : 'light')

// El script inline de index.html aplica el tema antes del primer render;
// este hook lo mantiene sincronizado y guarda la elección del usuario.
export const useTheme = () => {
  const [theme, setTheme] = useState(() => readStored() ?? systemTheme())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const onChange = () => {
      if (!readStored()) setTheme(systemTheme())
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Sin localStorage el cambio vale solo para esta visita.
    }
    setTheme(next)
  }

  return { theme, toggleTheme }
}
