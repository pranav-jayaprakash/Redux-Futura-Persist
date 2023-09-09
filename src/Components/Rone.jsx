import React from 'react'
import { useSelector } from 'react-redux'


function Rone() {
    
    const take = useSelector(state=>state.Sample.Data)
    console.log(take,'XXXX')

  return (
    <div>
        <h1>Apollo</h1>
        
    </div>
  )
}

export default Rone