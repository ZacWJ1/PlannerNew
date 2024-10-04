import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../services/AuthService'
import { AuthContext } from '../context/AuthContext'
import React from 'react';
import './navbar.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logoo from './G.png'

function Navbar(props) {
    const { isAuthenticated, setIsAuthenticated, user, setUser} = useContext(AuthContext)
    
    function handleLogout(){
        AuthService.logout().then(data => {
            if(data.success){
                setUser(data.user)
                setIsAuthenticated(false)
            }
        })
    }

    function unauthenticatedNavBar(){
        return (
            <>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link>
                <Link to="/login">
                    <li className="nav-item nav-link">
                        Login
                    </li>
                </Link>
                <Link to="/register">
                    <li className="nav-item nav-link">
                        Register
                    </li>
                </Link>
            </>
        )
    }

    function authenticatedNavBar(){
        return(
            <>
                <h4>User: {user.username}</h4>
                <Link to="/">
                    <li className="nav-item nav-link">
                        Home
                    </li>
                </Link>
                <Link to="/todos">
                    <li className="nav-item nav-link">
                        Todos
                    </li>
                </Link>
                {
                user.role === 'admin' ?
                    <Link to="/admin">
                        <li className="nav-item nav-link">
                            Admin
                        </li>
                    </Link> 
                    : null
                }
                <button type="button" 
                        className="nav-item nav-link btn btn-link" 
                        onClick={handleLogout}>
                    Logout
                </button>
            </>
        )
    }

    console.log(user)

    return (
        /*<nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                <div className="navbar-brand">CatchdiGiorno</div>
            </Link>
            {/* <div className="collapse navbar-collapse" id="navbarText"> }
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar() }
                </ul>
            {/* </div> }
        </nav>*/
        <Navbar expand="xl" className=" gradient_bg navi">
      <Container>
      <Navbar.Brand href="#home" className='font-bold'>
      <img
              alt=""
              src={logoo}
              width="50"
              height="50"
              className="d-inline-block align-top rounded"
      />
       </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto underline">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Recipes</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Logout</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Navbar

