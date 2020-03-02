import React from "react";
// import Link from "next/link";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Default = props => (
  <span>
    <Navbar />
    {props.children}
    <Footer />
    <style jsx>{``}</style>
  </span>
);

export default Default;
