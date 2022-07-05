import React,{useState} from 'react';

export default function Login() {

  var LoginForm = document.getElementById("LoginForm");
            
            
            function login(){
                LoginForm.style.transform ="translateX(300px)";
            }
            
  return (
    <div>
        <div className="account-page">    
            <div className="container_a">
                <div className="row_a">
                    <div className="col-2_a">
                        <div className="form-container_a text-white">
                            <div className="form-btn_a">
                                <a onClick={console.log(login)}>Login</a>
                                <hr className="w-30 p-1 mx-auto" />
                            </div>
                            
                            <form id="LoginForm">
                                <input type="text" placeholder="Username" />
                                <input type="password" placeholder="Password" />
                                <button type="submit" className="btn btn-outline-dark ms-auto px-4 rounded-pill btn-sm bg-dark text-white-50" href="welcome.html">Login</button>
                                <a type="submit" to="#">Forgot passord</a>
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

