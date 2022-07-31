import React from 'react'

function Login_main() {
  return (
    <div class="theme-orange pt-5 mt-5">
        <div class="wrapper">
        <section class="login-content">
            <div class="container h-100">
                <div class="row align-items-center justify-content-center h-100">
                    <div class="col-12">
                        <div class="row align-items-center">
                            <div class="col-lg-6">
                                <h2 class="mb-2">Sign in your account</h2>
                                <p>To Keep connected with us please login with your personal info.</p>
                               
                                    <div class="row">
                                        <div id="error-msg"></div>
                                        <div class="col-lg-12">
                                            <div class="floating-label form-group">
                                                <input type="text" class="floating-input form-control" name="uid" id="uid" required/>

                                                <label>Login Id</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="floating-label form-group">
                                                <input type="password" class="floating-input  form-control" name="password" id="password" required/>
                                                <label>Password</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="custom-control custom-checkbox mb-3">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                                                <label class="custom-control-label" for="customCheck1">Remember Me</label>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 rtl-left">
                                            <a href="ForgotPassword.html" class="text-primary float-right">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary" value="1" id="dloginshine" name="submitRegisterMember">Sign In<span id="spinner1" style={{visibility: "hidden"}}><i class="fa fa-spinner fa-spin"></i></span></button>
                                
                                <p class="mt-3">
                                    Create an Account <a href="register.html" class="text-primary">Sign Up</a>
                                </p>

                            </div>
                            <div class="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4">
                                <img src="001.png" class="img-fluid w-80" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </div>
  )
}

export default Login_main