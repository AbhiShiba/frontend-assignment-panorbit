import React from 'react'
import './Home.css'

export function Home(props) {
  return (
    <div className='home-container'>
        {props.children}
    </div>
  )
}
