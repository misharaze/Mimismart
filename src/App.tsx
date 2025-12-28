import { Header } from './components/layout/Header/Header'
import { Hero } from './components/Hero/Hero'
import { useState } from 'react'
const App = () => {
  const [mode, setMode] = useState<'day' | 'night'>('day')

  return (
    <div className="w-full">
    <Header mode={mode} />
    <Hero mode={mode} setMode={setMode} />
      </div>
   
  )
}

export default App