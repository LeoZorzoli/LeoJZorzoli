import { createContext, useContext, useEffect, useState } from 'react'

import translations from './translations'

const STORAGE_KEY = 'lang'
export const LANGUAGES = ['es', 'en']
const DEFAULT_LANG = 'es'
const LOCALES = { es: 'es-AR', en: 'en-US' }

const readStored = () => {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    return LANGUAGES.includes(value) ? value : null
  } catch {
    return null
  }
}

const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => readStored() ?? DEFAULT_LANG)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const setLang = next => {
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Sin localStorage el cambio vale solo para esta visita.
    }
    setLangState(next)
  }

  // Textos fijos: busca la clave en el idioma activo y, si falta, en español.
  const t = key => translations[lang]?.[key] ?? translations[DEFAULT_LANG][key] ?? key

  // Textos de los archivos de datos: `{ es, en }` o un texto que no se traduce.
  const tx = value =>
    value && typeof value === 'object' && !Array.isArray(value)
      ? value[lang] ?? value[DEFAULT_LANG]
      : value

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, tx, locale: LOCALES[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useI18n = () => useContext(LanguageContext)
