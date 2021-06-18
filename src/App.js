import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';

class LoginJs extends Component {
  render() {
    return( 
     
      <div class="login-page">
      <div class="container">
        <div class="row">
          <div class="col-xl-8 m-auto col-sm-8 col-12">
            <div class="log-box">
              <div class="row">
                <div class="col-xl-5 col-sm-5 col-12 pad-right-0">
                  <div class="logo-back">
                  </div>
                </div>
                <div class="col-xl-7 col-sm-7 col-12 pad-left-0">
                  <div class="log-content">
                    <h1>LOGIN </h1>
                    <div class="log-body">
                    <div class="form-group myr-top">
                    <label>Username</label>
                      <input type="text" class="form-control custom" placeholder="Username"/>
                    </div>
                    <div class="form-group myr-top">
                    <label>Password</label>
                      <input type="passowrd" class="form-control custom" placeholder="Password"/>
                    </div>
                    <div class="log-btn text-center">
                      <a href="buton" class="btn btn-theme1">Login</a>
                    </div>
                    <div class="log-bottom-cotent">
                    <p>Create an account? <a href="signup.html">Sign Up</a>
                    <br></br>
                    <a href="forgotpassword.html" class="pull-right">Forgot Password</a>
                    </p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
           
    );
  }
}

export default LoginJs;