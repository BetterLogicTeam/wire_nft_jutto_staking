import React from 'react'

function Register_main() {
  return (
    <div class="theme-orange pt-5 mt-5">
        <div class="wrapper">
        <section class="login-content">
            <div class="container h-100">
                <div class="row align-items-center justify-content-center h-100">
                    <div class="col-12">
                        <div class="row align-items-center">
                            <div class="col-lg-6 ">
                                <h2 class="mb-2">Sign Up</h2>
                                <p>Enter your personal details and start journey with us.</p>
                                <div id="error-msg"></div>
                                 <form action="#" class="login-signup-form form-signin" method="post">  <div class="alert alert-block alert-danger error-login-t" id="ajax_message" style={{display:"none"}}>
                                     
                                 </div>
                                    <div class="form-group">
                                        <div id="ajax_loading" align="center"></div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <div class="floating-label form-group">
                                                <input class="form-control mb-3" data-val="true" data-val-length="The field sponser_id must be a string with a minimum length of 4 and a maximum length of 12." data-val-length-max="12" data-val-length-min="4" data-val-required="Sponser Id is required" id="sponser_id" maxlength="6" name="sponser_id" oninput="return numbervalidation(this)" placeholder="Enter Sponsor Id" required="required" type="text" value=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="floating-label form-group">
                                                <input class="form-control mb-3 floating-input" id="sponsername" name="sponsername" placeholder="Sponsor Name" readonly="true" type="text" value=""/>
                                            </div>
                                        </div>
                                        
                                        <div class="col-lg-6">
                                            <div class="floating-label form-group">
                                                <input class="form-control mb-3" data-val="true" data-val-length="The field User name must be a string with a minimum length of 1 and a maximum length of 50." data-val-length-max="50" data-val-length-min="1" data-val-required="The User name field is required." id="f_name" name="f_name" oninput="return namevalidation(this)" placeholder="User Name" required="required" type="text" value=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="floating-label form-group">
                                                <input class="floating-input mb-3 form-control" data-val="true" data-val-required="Mobile number is required" id="mobile" maxlength="10" name="mobile" oninput="return numbervalidation(this)" placeholder="Mobile Number" required="required" type="text" value=""/>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="floating-label form-group">
                                                <input class="form-control mb-3 input-log-cls" data-val="true" data-val-email="Invalid Email Address" id="email" name="email" placeholder="example@gmail.com" required="required" type="text" value=""/>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="row">
                                                <div class="col-md-12 mb-3 col-lg-12" id="sendbtndiv">
                                                    <button type="button" id="sendotpbtn" class="btn btn-success btn-md">Send OTP For Email Verification</button>
                                                </div>
                                                <div class="col-md-6" id="resendbtndiv" style={{display:"none"}}>
                                                    <button type="button" id="resendotpbtn" class="btn btn-success btn-md">Resend OTP</button>
                                                </div>
                                                <div class="col-md-6" id="otpdiv" style={{display:"none"}}>
                                                    <div class="floating-label form-group">
                                                        <input class="floating-input mb-3 form-control" id="otp" maxlength="8" name="otp" oninput="return numbervalidation(this)" placeholder="Enter OTP" type="text" value=""/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="floating-label form-group">
                                                <input class="floating-input mb-3 form-control" data-val="true" data-val-length="Enter minimum 5 character" data-val-length-max="50" data-val-length-min="5" data-val-required="The password field is required." id="password" name="password" placeholder="Password" required="required" type="password"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="floating-label form-group">
                                                <input class="floating-input mb-3 form-control" data-val="true" data-val-equalto="The password and confirmation password do not match." data-val-equalto-other="*.password" data-val-required="The confirmpassword field is required." id="confirmpassword" name="confirmpassword" placeholder="Confirm Password" required="required" type="password"/>
                                            </div>
                                        </div>
                                        <div class="col-lg-12">
                                            <div class="custom-control custom-checkbox mb-3">
                                                <input class="" data-val="true" data-val-required="The TermsAndConditions field is required." id="TermsAndConditions" name="TermsAndConditions" type="checkbox" value="true"/><input name="TermsAndConditions" type="hidden" value="false"/>
                                                <label class="" for="customCheck1">I Agree Your <a href="#">Terms and Conditions</a></label>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Sign Up</button>
                                    <p class="mt-3">
                                        Already have an Account <a href="login.html" class="text-primary">Sign In</a>
                                    </p>
                                </form>                            
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

export default Register_main