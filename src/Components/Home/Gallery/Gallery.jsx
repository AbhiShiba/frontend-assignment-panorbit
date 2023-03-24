import React from 'react'
import { ComingSoon } from '../ComingSoon/ComingSoon'
import { HomePageHead } from '../HomePageHead/HomePageHead'

import './Gallery.css'

export function Gallery() {
  return (
    <div className="gallery-container">
        <HomePageHead/>
        <ComingSoon/>
    </div>
  )
}
