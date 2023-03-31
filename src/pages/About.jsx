import { navigate } from '../Link'

export default function AboutPage () {
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
