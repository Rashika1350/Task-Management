import React from "react"
import { Toaster } from "react-hot-toast"
import { Link } from "react-router-dom"

const Navbar = ()=>{
  return(
    <>
    <Toaster/>
   <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Task Manager</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="btn btn-outline-success mx-2" aria-current="page" to="/">All Task</Link>
        </li>
        <li className="nav-item">
          <Link className="btn btn-outline-danger mx-2" aria-current="page" to="/add">Add Task</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar