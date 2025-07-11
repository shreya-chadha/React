import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components.jsx'


function App() {
  return (
    <>
      <h1 className='bg-white text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card username="Shreya Chadha" btnTxt="click me!"/>
      <Card username="Tanishk Singhal" />
    </>
  )
}
export default App
