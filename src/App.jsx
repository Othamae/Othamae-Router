
import './App.css'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import Router from './Router'
import Page404 from './pages/Page404'
import SearchPage from './pages/Search'
import Route from './pages/Route'

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      <Router routes={routes} defaultComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/about' Component={AboutPage} />
      </Router>

    </main>
  )
}

export default App
