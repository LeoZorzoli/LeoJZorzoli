// Bloque "Ahora" de la página de inicio.
// `updated` es el mes en que escribiste esto (AAAA-MM): es la fecha que se muestra en el título.
// Cada texto va en `{ es, en }`; si falta `en`, se muestra el español. **Así** se muestra en negrita.

const now = {
  updated: '2026-10',
  items: [
    {
      es: 'Dando vida a **Rumbo**, un juego web diario para adivinar localidades argentinas por su plano.',
      en: 'Bringing **Rumbo** to life: a daily web game where you guess Argentine towns from their street map.',
    },
    {
      es: 'Construyendo **LoteosAPP**, un sistema de gestión de loteos para inmobiliarias, con Go, React y Supabase.',
      en: 'Building **LoteosAPP**, a land-lot management system for real estate agencies, with Go, React and Supabase.',
    },
    {
      es: 'Desarrollando con agentes de IA como Claude Code y Codex en todo el ciclo: diseño, código, tests y despliegue.',
      en: 'Developing with AI agents like Claude Code and Codex across the whole cycle: design, code, tests and deployment.',
    },
    {
      es: 'Acompañando como mentor a estudiantes de tecnología en **Junior Achievement**.',
      en: 'Mentoring tech students at **Junior Achievement**.',
    },
  ],
}

export default now
