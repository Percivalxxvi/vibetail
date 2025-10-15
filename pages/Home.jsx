import React, { useState } from 'react'
import "../src/App.css"

const Home = () => {
    const [color,setColor]=useState(false)
  return (
    <div>
        <h1 className={`text-9xl ${color===true ? 'text-[red]': 'text-[blue]'}`}>Home</h1>
        <button onClick={()=>setColor(!color)}>
            change color
        </button>
    </div>
  )
}

export default Home