import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { ItemDetails } from './cmps/ItemDetails.jsx'
import { Home } from './pages/Home'
import { LoginSignup } from './pages/LoginSignup'
import { Chat } from './pages/Chat'
import { UserDetails } from './pages/UserDetails'
import { Footer } from './pages/Footer.jsx'
import { Header } from './cmps/Header'
import { AppStore } from './pages/AppStore'


export function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <main>
          <Switch>
            <Route path="/user/:id" component={UserDetails} />
            <Route path="/login" component={LoginSignup} />
            <Route path="/chat" component={Chat} />
            <Route path="/item/:itemId" render={({match}) => {
              const { itemId } = match.params
              return <ItemDetails itemId={itemId} />
            }} />
            <Route path="/" component={AppStore} />
            {/* <Route path="/" component={Home} /> */}
          </Switch>
        </main>
      <Footer/>
      </Router>
    </div>
  )
}




//const item = items.find(item => item._id === itemId) || {}
              // item={item}