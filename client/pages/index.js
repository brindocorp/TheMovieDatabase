import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { Button } from "semantic-ui-react";

const Home = () => {
  const [activeItem, setActiveItem] = useState("HOME");
  const [isOpen, setIsOpen] = useState(false);
  function handleItemClick(e, { name }) {
    setActiveItem(name);
  }
  function toggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <div className="container-fluid bg-image p-0 p-md-5 ">
          <div className="row px-sm-1 px-3">
            <div className="col d-flex justify-content-between mt-5 ">
              <div className="div text-white logo-font-size d-flex">
                {" "}
                <span> MOVIE</span>{" "}
                <span className="font-weight-bold">BOX</span>
              </div>
              <div className="div d-flex text-white justify-content-between">
                <Button basic color="white" inverted className="mr-2 mr-lg-3">
                  Log in
                </Button>
                <Button className="text-white " color="red">
                  Sign up
                </Button>
              </div>
            </div>
          </div>
          <div className="row px-3 mb-4">
            <div className="col d-flex justify-content-between mt-5 ">
              <div className="div text-white logo-font-size ">
                {" "}
                <p className="font-weight-bolder bg-title my-auto">
                  {" "}
                  WRATH OF THE TITANS
                </p>
                <div className="div text-white">
                  <span className="text-white small mr-2 bg-genre">
                    Fantasy
                  </span>
                  <span className="text-white small mr-2 bg-genre">
                    Fantasy
                  </span>
                  <span className="text-white small mr-2 bg-genre">
                    Fantasy
                  </span>

                  <span className="text-white small mr-2 bg-genre">
                    Duration : 1hr 30mins
                  </span>
                </div>
                <div>
                  <Button className="text-white mr-3" color="red">
                    <span className="text-white">Watch Movie</span>
                  </Button>

                  <Button basic inverted content="View Info" />

                  <Button className="text-white mr-3" inverted basic>
                    <span className="text-white">Add To WishList</span>
                  </Button>
                </div>
              </div>

              <div className="div d-flex text-white"></div>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @media (max-width: 768px) {
          .bg-image {
            min-height: 100vh;
          }
          .bg-title {
            font-size: 20px !important;
          }
          .bg-genre {
            font-size: 10px;
          }
          .logo-font-size {
            font-size: 20px !important;
          }
        }
        .bg-genre {
          opacity: 0.9;
          font-weight: 800;
        }
        .bg-image {
          background: url("/cinema_bg.jpg");
          min-height: 100vh;
          background-size: cover;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .bg-title {
          font-size: 35px;
          opacity: 0.9;
        }
        .logo-font-size {
          font-size: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Home;
