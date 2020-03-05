import React from "react";
import { connect } from "react-redux";
import { setAuth } from "../redux/actions/auth";
// import Link from "next/link";

import Footer from "../components/footer";
import Navbar from "../components/Navbar";
const Layout = props => {
  return (
    <span>
      <Navbar bg={props.bg ? true : false} />

      {props.children}
      <Footer />
      <style jsx>{``}</style>
    </span>
  );
};
Layout.getInitialProps = async ctx => {
  // console.log(ds);
  return { check: "check" };
};

// const mapStateToProps = state => {
//   auth: state.auth;
// };

// const mapDispatchToProps = {
//   setAuth
// };
export default Layout;
// export default connect()(Default);
