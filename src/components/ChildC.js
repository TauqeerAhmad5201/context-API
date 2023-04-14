import React from 'react'
import { data_name, data_age } from '../App'
export default function ChildC() {
  return (
    <div>
     
      <data_name.Consumer>
        {
            (name)=> {
                return (
                    <data_age.Consumer>{
                        (age)=> {
                            return (
                                <p>Hello {name} and my {age}</p>
                            )
                        }
                    }
                    </data_age.Consumer>
                    
                )
            }
        }
      </data_name.Consumer>
    </div>
  )
}
