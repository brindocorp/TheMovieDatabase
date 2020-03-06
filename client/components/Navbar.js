import React, { useEffect } from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { setAuth } from "../redux/actions/auth";
import { Button, Dropdown } from "semantic-ui-react";
const background = {
  background: "blue"
};

const Nav = props => {
  // useEffect(() => {
  //   console.log("setTokem", props.TokenData);
  //   props.setAuthT(props.TokenData);
  // }, [props.TokenData]);

  return (
    <div
      className="container-fluid position-absolute zIndex my-auto"
      style={
        props.bg ? { background: "#889590" } : { background: "transparent" }
      }
    >
      <div className="row ">
        <div className="col d-flex justify-content-between py-3 my-auto ">
          <Link href="/">
            <div className="div text-white logo-font-size d-flex cursor-pointer">
              <span> MOVIE</span> <span className="font-weight-bold">BOX</span>
            </div>
          </Link>
          {(props.auth && props.auth._id) || props.user._id ? (
            <div className="div d-flex text-white justify-content-between px-3 mx-3 n">
              <Dropdown text={props.auth.name || props.user.name}>
                <Dropdown.Menu>
                  <Dropdown.Item text="Log Out" />
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <div className="div d-flex text-white justify-content-between">
              <Link href="/signin">
                <Button basic inverted className="mr-2 mr-lg-3">
                  Log in
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="text-white " color="red">
                  Sign up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .logo-font-size {
          font-size: 2rem;
        }

        .zIndex {
          z-index: 100000;
        }
      `}</style>
    </div>
  );
};
const mapStateToProps = state => ({
  user: state.auth,
  token: state
});
const mapDispatchToProps = {
  setAuthT: setAuth
};
export default connect(mapStateToProps, mapDispatchToProps)(Nav);
