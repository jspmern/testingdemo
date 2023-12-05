import React, { Component } from 'react'
import { Context, Context2 } from './ContextPratice'

export default class First extends Component {
  render() {
    return (
     <Context.Consumer >
        {
            (data)=>{
              return  <Context2.Consumer>
                { (data2)=>{
                    return <div>{data}{data2}</div>
                }}
              </Context2.Consumer>
            }
        }
    
      </Context.Consumer>
    )
  }
}
