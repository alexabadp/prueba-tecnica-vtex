import { BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import AppProvider from './context/AppProvider'
import Home from './views/Home/Home'
import Detail from './views/Detail/Detail'
import NavBar from './components/NavBar/NavBar'
import Search from './views/Search/Search'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
      <AppProvider>
        <div className='containerApp'>
          <div>
            <NavBar/>
            <div className='wrapper'>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/products" component={Search}/>
                <Route path="/:name" component={Detail}/>
              </Switch>
            </div>
          </div>
          <Footer />
        </div>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App
