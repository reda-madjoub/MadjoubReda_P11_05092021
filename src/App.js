
import './App.css';
import React, { Component } from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import ErrorPage from './component/ErrorPage'
import Accueil from './component/Accueil'
import Rent from './component/Rent'
import About from './component/About'
import { BrowserRouter , Route, Switch } from 'react-router-dom';


export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
            <Switch>
              <Route exact path='/' component={Accueil} />
              <Route path='/about' component={About}/>
              <Route path='/rent/:id' component={Rent}/>
              <Route component={ErrorPage}/>
            </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    )
  }
}

