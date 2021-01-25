import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { ItemDetails } from './cmps/ItemDetails.jsx'
import { LoginSignup } from './pages/LoginSignup'
import { Chat } from './pages/Chat'
import { UserDetails } from './pages/UserDetails'
import { Footer } from './pages/Footer.jsx'
import { Header } from './cmps/Header'
import { Cart } from './cmps/Cart'
import { AppStore } from './pages/AppStore'
import { ThankYou } from './cmps/ThankYou'



export function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/user/:id" component={UserDetails} />
            <Route path="/order/:id" component={Cart} />
            <Route path="/login" component={LoginSignup} />
            <Route path="/thankyou" component={ThankYou} />
            <Route path="/item/:itemId" component={ItemDetails} />
            <Route path="/" component={AppStore} />
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

