import React from 'react'
import '../Css/Header.css'

const message = 'MESSAGE{...'
const end = '}'

export const Header = () => {
  return (
    <header className="header">
      <p className="p1">{message}</p>
      <p className="p7">|</p>
      <p className="p1">{end}</p>
    </header>
  )
}

export default Header
