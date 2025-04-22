import { useState } from 'react'
import './App.css'
import Header from './header'
import Content from './Content'
import Footer from './Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />    
      <Content />
      <Footer/>
      
    </>
  )
}

export default App
