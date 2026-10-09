import { useState } from 'react'
import { Typography } from '@mui/material'
import { AppHeader, WarriorForm, WarriorTable } from './components'
import type { NewWarrior, Warrior } from './types/warrior'

function App() {
  const [warriors, setWarriors] = useState<Warrior[]>([])

  const handleRegister = (warrior: NewWarrior) => {
    setWarriors((currentWarriors) => [
      ...currentWarriors,
      { ...warrior, id: crypto.randomUUID() },
    ])
  }

  const handleDelete = (warriorId: string) => {
    setWarriors((currentWarriors) =>
      currentWarriors.filter((warrior) => warrior.id !== warriorId),
    )
  }

  return (
    <>
      <AppHeader />
      <main className="container py-4 py-md-5">
        <div className="row g-4">
          <div className="col-12">
            <Typography component="h1" variant="h4">
              Administración de tropas
            </Typography>
            <Typography variant="body2" color="text.secondary" aria-live="polite">
              {warriors.length}{' '}
              {warriors.length === 1 ? 'guerrero registrado' : 'guerreros registrados'}
            </Typography>
          </div>
          <div className="col-12">
            <WarriorForm onRegister={handleRegister} />
          </div>
          <div className="col-12">
            <WarriorTable warriors={warriors} onDelete={handleDelete} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
