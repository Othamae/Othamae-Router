import { Link } from '../Link'

const i18n = {
  es: {
    title: 'Sobre Nosotros',
    desctiption: 'Hola! Soy Othamae y he creado un clon de React-Router',
    button: 'Ir a la Home'
  },
  en: {
    title: 'About me',
    desctiption: 'Hi!! I am Othamae and I created a clone of React-Router',
    button: 'Go to Home'

  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.es
}

export default function AboutPage ({ routeParams }) {
  const i18n = useI18n(routeParams.lang ?? 'en')
  return (
    <>
      <h1>{i18n.title}</h1>
      <div>
        <img src='https://scontent-prg1-1.xx.fbcdn.net/v/t1.18169-9/396541_4113580391221_1467209008_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=9yBonAYvOQMAX8ZRVbE&_nc_ht=scontent-prg1-1.xx&oh=00_AfDY3cXnfHKhtgzSDwMm21Zc3n9EjC5Kw2bn3XoCneXTmQ&oe=644E0F10' alt='Othamae picture' />
        <p>{i18n.desctiption}</p>
      </div>
      <Link to='/'>{i18n.button}</Link>
    </>
  )
}
