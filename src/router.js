import React from 'react'
import Top from './Top'
import Sell from './sell'
import Attributes from './attributes'
import Details from './tablet'
import Test from './test'
import Item from './item'
import Chating from './contact'







import {BrowserRouter as Router,Route,} from "react-router-dom";



  export default class AppRouter extends React.Component{
      render(){
          return(
              <Router>
                  <Route exact path="/" component={Top}/>
                  <Route exact path="/sell" component={Sell}/>
                  <Route exact path="/attributes" component={Attributes}/>
                  <Route exact path="/detail" component={Details}/>
                  <Route exact path="/test" component={Test}/>
                  <Route exact path="/item" component={Item}/>
                  <Route exact path="/chating" component={Chating}/>
                  
                 
                  
                 
                  
                  
                 
                  
                  
              </Router>
          )
      }
  }