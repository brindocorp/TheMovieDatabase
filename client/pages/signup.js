import React, { useState } from "react";
import Router from "next/router";
import { connect } from "react-redux";
import { startRegister } from "../redux/actions/users";
import Link from "next/link";
import { Button, Dimmer, Loader, Modal } from "semantic-ui-react";
import initialize from "../utils/initialize";

const Default = props => {
  const [show, setShow] = useState({
    size: "",
    open: false
  });
  let [close, setClose] = useState(false);
  // useEffect(() => {
  //   console.log("setTokem", props.TokenData);
  //   props.setAuthT(props.TokenData);
  // }, [props.TokenData]);
  const showA = size => setShow({ size, open: true });
  const closeA = () => setShow({ ...show, open: false });
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    name: "",
    password: ""
  });

  const onChangeEmail = event => {
    setUserData({ ...userData, email: event.target.value });
  };

  const onChangeName = event => {
    setUserData({ ...userData, name: event.target.value });
  };

  const onChangePassword = event => {
    setUserData({ ...userData, password: event.target.value });
  };

  function submitForm(event) {
    setLoading(true);
    event.preventDefault();
    props
      .startRegister(userData)
      .then(data => {
        if (data) {
          showA("mini");
          Router.push("/");
        } else {
          // showA("mini");
          console.log("data", data);

          setLoading(false);
        }
      })
      .catch(e => {
        // showA("mini");
        setLoading(false);
        console.log(e);
      });
  }

  return (
    <span>
      <div className="container-fluid">
        <div className="row">
          <Modal size={show.size} open={show.open} onClose={closeA}>
            <Modal.Header>Success</Modal.Header>
            <Modal.Content>
              <p>Account created</p>
            </Modal.Content>
          </Modal>
          <div className="col-lg-6 d-none d-lg-block d-md-block p-0">
            <div className="container-fluid bg-login-grad p-0 m-0 h-100">
              <div className="d-flex flex-column bg-url justify-content-around h-100">
                <div className="overlay-block"></div>
                <div className="z-index-5">
                  <Link href="/" className="logo light">
                    <a>
                      <div className="div text-white justify-content-center logo-font-size d-flex">
                        {" "}
                        <span> MOVIE</span>{" "}
                        <span className="font-weight-bold">BOX</span>
                      </div>
                    </a>
                  </Link>
                </div>

                <div className="z-index-5">
                  <h4 className="ml-5 text-white">
                    Stream and watch your darling movies
                    <br />
                    In Hd Quality
                  </h4>
                  <br />
                  <p
                    className="ml-5 text-white text-capitalize text-justify"
                    style={{ "max-width": "300px" }}
                  >
                    Get in touch with all your favourite movies in one click
                  </p>
                </div>
                <div className="position-relative pt-5 mt-5 mr-5">
                  <p className="text-white banner-credit text-right">
                    <span className="text-capitalize font-weight-bold lead">
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
                    SIGN UP FOR A FREE ACCOUNT
                  </div>

                  <p className="text-center mb-4">
                    Already have an account ?
                    <Link href="/signin" className="text-primary">
                      <a>Sign In</a>
                    </Link>
                  </p>

                  <form>
                    <div className="form-group">
                      <div className="col">
                        <input
                          value={userData.email}
                          onChange={onChangeEmail}
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col">
                        <input
                          value={userData.name}
                          onChange={onChangeName}
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="Username"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col">
                        <input
                          value={userData.password}
                          onChange={onChangePassword}
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col">
                        <Button
                          onClick={submitForm}
                          color="red"
                          className="w-100"
                        >
                          {loading ? (
                            <Dimmer active>
                              <Loader size="mini"></Loader>
                            </Dimmer>
                          ) : (
                            "Sign Up"
                          )}
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
};

Default.getInitialProps = async ctx => {
  initialize(ctx);
};
const mapDispatchToProps = {
  startRegister
};
export default connect(undefined, mapDispatchToProps)(Default);
// export default Default;
