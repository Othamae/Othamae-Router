import { EVENTS } from './const'
import { useState, useEffect } from 'react'

export default function Router ({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname)

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(window.location.pathname)
    }

    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)

    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])
  const ComponentToRender = routes.find(({ path }) => path === currentPath)?.Component

  return (
    ComponentToRender ? <ComponentToRender /> : <DefaultComponent />

  )
}
