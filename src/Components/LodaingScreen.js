import React from 'react'
import '../Css/Header.css'

const message = 'LOADING{...'
const end = '}'

export const Header = () => {
  return (
    <div className="header">
      <p className="p1">{message}</p>
      <p className="p7">|</p>
      <p className="p1">{end}</p>
    </div>
  )
}

export default Header
