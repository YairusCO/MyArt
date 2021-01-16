import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { ItemDetails } from './cmps/ItemDetails.jsx'
import { Home } from './pages/Home'
import { LoginSignup } from './pages/LoginSignup'
import { Chat } from './pages/Chat'
import { UserDetails } from './pages/UserDetails'
// import { Footer } from './pages/Footer.jsx'
import { Header } from './cmps/Header'
import { AppStore } from './pages/AppStore'


export function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <main>
          <Switch>
            <Route path="/user/:id" component={UserDetails} />
            <Route path="/login" component={LoginSignup} />
            <Route path="/chat" component={Chat} />
<<<<<<< HEAD
            <Route path="/item/:itemId" component={ItemDetails} />
            <Route to path="/" component={AppStore} />
            {/* <Route path="/" component={Home} /> */}
=======
            <Route path="/item/:itemId" render={({match}) => {
              const { itemId } = match.params
              //const item = items.find(item => item._id === itemId) || {}
              // item={item}
              return <ItemDetails itemId={itemId} />
            }} />
            <Route path="/store" component={AppStore} />
            <Route path="/" component={Home} />
>>>>>>> 188957b571bb0a3cd0bc93165befedd4376b4e6c
          </Switch>
          {/* <Footer/> */}
        </main>
       
      </Router>
    </div>
  )
}

