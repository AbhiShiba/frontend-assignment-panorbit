import React from 'react'
import { ComingSoon } from '../ComingSoon/ComingSoon'
import { HomePageHead } from '../HomePageHead/HomePageHead'

import './Posts.css'

export function Posts() {
  return (
    <div className="posts-container">
        <HomePageHead />
        <ComingSoon/>
    </div>
  )
}
