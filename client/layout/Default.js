import React from 'react';
import { connect } from 'react-redux';
import { setAuth } from '../redux/actions/auth';
// import Link from "next/link";

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
const Default = props => {
  return (
    <span>
      <Navbar bg={props.bg ? true : false} />

      {props.children}
      <Footer />
      <style jsx>{``}</style>
    </span>
  );
};
Default.getInitialProps = async ctx => {
  // let data = await console.log(ctx.store.dispatch(setAuth()));
  // let ds = await store.dispatch(setAuth());
  // console.log(ds);
  return { check: 'check' };
};

// const mapStateToProps = state => {
//   auth: state.auth;
// };

// const mapDispatchToProps = {
//   setAuth
// };
export default Default;
// export default connect()(Default);
