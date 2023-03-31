import { Link } from '../Link'

export default function Page404 () {
  return (
    <>
      <div>
        <h1>Page not found</h1>
        <img src='https://digitalid.cl/wp-content/uploads/2020/12/NoFound-1024x1024.jpg' alt='Page not found' />

      </div>
      <Link to='/'>Come back to Home</Link>
    </>
  )
}
