import React from 'react'
import { ComingSoon } from '../ComingSoon/ComingSoon'
import { HomePageHead } from '../HomePageHead/HomePageHead'

import './Todos.css'

export function Todos() {
  return (
    <div className="todo-container">
        <HomePageHead/>
        <ComingSoon/>
    </div>
  )
}
