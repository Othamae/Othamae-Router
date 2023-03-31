import { POPSTATE, PUSHSTATE } from './const'
import { useState, useEffect } from 'react'
import './App.css'

function navigate (href) {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Example homepage to create React-router</p>
      <button onClick={() => { navigate('/about') }}>Go to About Me</button>
    </>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About Me</h1>
      <div>
        <img src='https://scontent-prg1-1.xx.fbcdn.net/v/t1.18169-9/396541_4113580391221_1467209008_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=9yBonAYvOQMAX8ZRVbE&_nc_ht=scontent-prg1-1.xx&oh=00_AfDY3cXnfHKhtgzSDwMm21Zc3n9EjC5Kw2bn3XoCneXTmQ&oe=644E0F10' alt='Othamae picture' />
        <p>Hi!! I am Othamae and I created a React-Router clone</p>
      </div>
      <button onClick={() => { navigate('/') }}>Go to Home</button>
    </>
  )
}

function App () {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(PUSHSTATE, onLocationChange)
    window.addEventListener(POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(PUSHSTATE, onLocationChange)
      window.removeEventListener(POPSTATE, onLocationChange)
    }
  }, [])

  return (
    <main>
      {currentPath === '/' && <HomePage />}
      {currentPath === '/about' && <AboutPage />}

    </main>
  )
}

export default App
