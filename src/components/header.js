import React from "react"
import { Link } from "gatsby"
import "./header.css"

function Header({headerText}) {

  return (
    <>
        <h1>{headerText}</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about/">About</Link></li>
          <li><Link to="/product/">Product</Link></li>
        </ul>
    </>
  )
}



export default Header
