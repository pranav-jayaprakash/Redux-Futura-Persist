import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { DataFile } from '../Redux/Api'
import Rone from './Rone'

function Rtwo() {

    const dispatch = useDispatch()

    const handleclick=(e)=>{
        e.preventDefault()
        
        DataFile(dispatch)


    }

  return (
    <div>
        <h1>Hello</h1>
        {/* <Link to={'about'}>Click to go</Link> */}
        <button onClick={handleclick}>Data GET</button>
        <Rone/>
    </div>
  )
}

export default Rtwo