import React from "react";
import { useAuth } from "../../context/AuthContext";
import "./Login.css";

const Login = () => {
  const { email, setEmail, password, setPassword, handleLogin, handleSignUp } =
    useAuth();
  return (
    <center>
      <div className="login-body">
        <div className="login-section">
          <div className="login-container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="login-section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3">
                    <span>Log In </span>
                    <span>Sign Up</span>
                  </h6>
                  <input
                    className="login-checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label for="reg-log"></label>
                  <div className="login-card-3d-wrap mx-auto">
                    <div className="login-card-3d-wrapper">
                      <div className="login-card-front">
                        <div className="login-center-wrap">
                          <div className="login-section text-center">
                            <h4 className="mb-4 pb-3">Log In</h4>
                            <div className="login-form-group">
                              <input
                                type="email"
                                name="logemail"
                                autoFocus
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="login-form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autocomplete="off"
                              />
                              <i className="login-input-icon uil uil-at"></i>
                            </div>
                            <div className="login-form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                autoFocus
                                required
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                                className="login-form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autocomplete="off"
                              />
                              <i className="login-input-icon uil uil-lock-alt"></i>
                            </div>
                            <a
                              onClick={handleLogin}
                              href="#"
                              className="login-btn mt-4"
                            >
                              submit
                            </a>
                            <p className="mb-0 mt-4 text-center">
                              <a href="#0" className="login-link">
                                Forgot your password?
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="login-card-back">
                        <div className="login-center-wrap">
                          <div className="login-section text-center">
                            <h4 className="mb-4 pb-3">Sign Up</h4>

                            <div className="login-form-group mt-2">
                              <input
                                type="email"
                                name="logemail"
                                autoFocus
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="login-form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autocomplete="off"
                              />
                              <i className="login-input-icon uil uil-at"></i>
                            </div>
                            <div className="login-form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                autoFocus
                                required
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}
                                className="login-form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autocomplete="off"
                              />
                              <i className="login-input-icon uil uil-lock-alt"></i>
                            </div>
                            <a
                              onClick={handleSignUp}
                              href="#"
                              className="login-btn mt-4"
                            >
                              submit
                            </a>
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
      </div>
    </center>
  );
};

export default Login;
