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
        <div className="container-fluid bg-image">
          <div className="row">
            <div className="col d-flex justify-content-between">
              <div className="div text-white"> THE MOVIEBOX</div>
              <div className="div d-flex text-white">
                <Button className="text-white" basic>
                  <span className="text-white">Log in</span>
                </Button>
                <Button className="text-white" basic>
                  <span className="text-white">Log in</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        .bg-image {
          background: url("/cinema_bg.jpg");
          min-height: 80vh;
          background-size: cover;
        }
      `}</style>
    </div>
  );
};

export default Home;
