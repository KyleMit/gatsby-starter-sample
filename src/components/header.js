import React from "react"
import { Link } from "gatsby"

function Header(props) {

  return (
    <>
        <h1>{props.headerText}</h1>
        <Link to="/">Home</Link>
        <Link to="/about/">About</Link>
    </>
  )
}



export default Header
