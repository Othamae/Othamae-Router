import { navigate } from '../Link'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Example homepage to create React-router</p>
      <button onClick={() => { navigate('/about') }}>Go to About Me</button>
    </>
  )
}
