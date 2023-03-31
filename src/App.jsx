import { lazy, Suspense } from 'react'
import './App.css'
import Router from './Router'
import Route from './Route'

const HomePage = lazy(() => import('./pages/Home'))
const AboutPage = lazy(() => import('./pages/About'))
const Page404 = lazy(() => import('./pages/Page404'))
const SearchPage = lazy(() => import('./pages/Search'))

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  },
  {
    path: '/:lang/about',
    Component: AboutPage
  }
]

function App () {
  return (
    <main>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router>
      </Suspense>
    </main>
  )
}

export default App
