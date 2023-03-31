import { Link } from '../Link'

export default function HomePage () {
  return (
    <>
      <h1>Home</h1>
      <p>Example homepage to create React-router</p>
      <Link to='/about'>Go to About Me</Link>
    </>
  )
}
