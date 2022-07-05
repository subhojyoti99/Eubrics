import React from 'react';
import { Link } from 'react-router-dom';

export default function navbar() {
  return (
    <div>
            <nav className="navbar navbar-expand-lg bg-secondary shadow">
        <div className="container-fluid shadow">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <Link to="/" type="submit" className="navbar-brand fw-bolder fs-4 mx-auto text-dark">AssignmenT_ClickMe</Link>
            <Link to="/assignment/login" className="btn btn-outline-dark ms-auto px-4 rounded-pill btn-sm bg-dark text-white-50">
                <i className="fa fa-sign-in me-2"></i>Login</Link>
            <Link to="/assignment/register" className="btn btn-outline-dark ms-2 px-4 rounded-pill bg-dark text-white-50">
                <i className="fa fa-user-plus me-2"></i>Register</Link>
            </div>
        </div>
        </nav>
    
    </div>
  )
}
