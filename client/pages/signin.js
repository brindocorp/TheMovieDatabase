import React from "react";
import Link from "next/link";
import { Button } from "semantic-ui-react";

const Default = props => (
  <span>
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-lg-6 d-none d-lg-block d-md-block p-0">
          <div className="container-fluid bg-login-grad p-0 m-0 h-100">
            <div className="d-flex flex-column bg-url justify-content-around h-100">
              <div className="overlay-block"></div>

              <Link href="/">
                <div className="div text-white logo-font-size d-flex ml-5">
                  {" "}
                  <span> MOVIE</span>{" "}
                  <span className="font-weight-bold">BOX</span>
                </div>
              </Link>

              <div className="z-index-5">
                <h4 className="ml-5 text-white">Welcome Back</h4>
              </div>
              <div className="position-relative z-index-5 pt-5 mt-5 mr-5">
                <p className="text-white banner-credit text-right">
                  <span className="text-capitalize font-weight-bold">
                    GODZILLA
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 p-0 my-auto">
          <div className="container-fluid h-100 bg-white center">
            <div className="row">
              <div className="col m-sm-4 m-md-5 p-5">
                <Link href="/">
                  <div className="text-center d-md-none d-sm-block">
                    <div className="div text-black justify-content-center logo-font-size d-flex">
                      {" "}
                      <span> MOVIE</span>{" "}
                      <span className="font-weight-bold">BOX</span>
                    </div>
                  </div>
                </Link>

                <div className="text-center text-black lead font-weight-bold mb-4">
                  SIGN IN TO YOUR ACCOUNT
                </div>

                <p className="text-center mb-4">
                  New to MovieBox ?
                  <Link href="/signup" className="text-primary">
                    <a className=" font-weight-bold">Create a free account</a>
                  </Link>
                </p>
                <form>
                  <div className="form-group">
                    <div className="col">
                      <input
                        v-model="form.email"
                        placeholder="Username or Email"
                        type="email"
                        name="email"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col">
                      <input
                        v-model="form.password"
                        placeholder="Password"
                        type="password"
                        name="password"
                        className="form-control"
                      />
                    </div>
                  </div>

                  <div className="form-group mb-2">
                    <div className="col-12 text-center">
                      <div className="form-switch">
                        <label
                          className="form-check-label switch small"
                          for="remember"
                        >
                          <input
                            className="form-check-input"
                            type="checkbox"
                            v-model="remember"
                            name="remember"
                            id="remember"
                          />
                          <span className="slider round"></span>
                        </label>
                        <span>remember me</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-center">
                    <Link href="/">
                      <a className="mr-1">
                        <span className="mr-1"> Forgot your </span>
                        <span className="text-primary mr-2">username or</span>
                        <span className="text-primary mr-2">password</span>
                      </a>
                    </Link>
                  </p>

                  <div className="form-group">
                    <div className="col">
                      <Button
                        inverted
                        color="red"
                        className="btn btn-primary d-block w-100"
                      >
                        Login
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .side-img {
        background-size: cover;
      }
      .logo-font-size {
        font-size: 2rem;
      }
      .bg-url {
        background: url("/cinema_bg.jpg");
        min-height: 100vh;
        background-size: cover;
      }

      .bg-login-grad {
        background: linear-gradient(180deg, #ae276d 0%, #000000 100%);
        /* background:url('/signin/TECH4TEEN-51.svg') */
      }
    `}</style>
  </span>
);

export default Default;