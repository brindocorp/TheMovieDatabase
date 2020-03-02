import React from "react";
import Link from "next/link";
import { Button } from "semantic-ui-react";
const Nav = () => (
  <div className="container-fluid position-absolute zIndex">
    <div className="row ">
      <div className="col d-flex justify-content-between mt-3 ">
        <div className="div text-white logo-font-size d-flex">
          {" "}
          <span> MOVIE</span> <span className="font-weight-bold">BOX</span>
        </div>
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

export default Nav;
