import React from 'react'
import { Link } from 'react-router-dom';

export default function Register() {
      
      
  return (
    <div>
       <div className="account-page">    
            <div className="container_a">
                <div className="row_a">
                    <div className="col-2_a">
                        <div className="form-container_a text-white">
                            <div className="form-btn_a">
                                <h5 className="text-center">Register</h5>
                                <hr className="w-30 p-1 mx-auto" />
                            </div>
                            
                            <form id="RegForm">
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Email" />
                                <input type="number" placeholder="Number" />
                                <input type="password" placeholder="Password" />
                                <input type="password" placeholder="Confirm Password" />
                                
                                <Link type="submit" className="btn btn-outline-dark ms-2 px-4 rounded-pill bg-dark text-white-50" to="/">Register</Link>
                            </form>
                        </div>
                    </div>
                </div>
              </div>
            </div>
                  <section_a className="login-with">
                    <li><a href="https://www.facebook.com/?_rdr=p"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>

                    <li><a href="welcome.html"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>

                    <li><a href="#"><i className="fa fa-google" aria-hidden="true"></i></a></li>

                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>

                    <li><a href="#"><i className="fa fa-github" aria-hidden="true"></i></a></li>
                  </section_a>
    </div>
  )
}



var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");

function register(){
  RegForm.style.transform ="translateX(0px)";
  LoginForm.style.transform ="translateX(0px)";  
}
