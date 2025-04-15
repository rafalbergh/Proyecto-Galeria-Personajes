import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Content from './Content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Content />
    </>
  )
}

export default App
