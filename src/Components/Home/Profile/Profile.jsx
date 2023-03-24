import React from 'react'
import { HomePageHead } from '../HomePageHead/HomePageHead'
import './Profile.css'
import { ProfileInfo } from './ProfileInfo/ProfileInfo'

export function Profile() {
  return (
    <div className="profile-container">
        <HomePageHead/>
        <ProfileInfo/>
    </div>
  )
}
