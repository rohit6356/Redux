import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
 const amount = useSelector(state => state.amount)
//  const quantity = useSelector(state => state.quantity)
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/main">bank of mars</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>

      </ul>
      <form className="d-flex" role="search">
        {/* <button className="btn btn-primary mx-1" type="submit" disabled >Quantity: {quantity}</button> */}
        <button className="btn btn-primary" type="submit" disabled >Payment: {amount}</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
