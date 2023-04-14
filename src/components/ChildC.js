import React from 'react'
import { data_name } from '../App'
export default function ChildC() {
  return (
    <div>
      <data_name.Consumer>
        {
            (name)=> {
                return (
                    <p>Hello {name}</p>
                )
            }
        }
      </data_name.Consumer>
    </div>
  )
}
