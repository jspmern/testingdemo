import React, { Component } from 'react'
import { Context, Context2 } from './ContextPratice'
import First from './First'
import Secound from './Secound'

export default class App extends Component {
  render() {
    return (
      <Context.Provider value="utsav kumar jha">
        <Context2.Provider value="delhi">
       <First/>
       <Secound/>
       </Context2.Provider>
      </Context.Provider>
    )
  }
}
