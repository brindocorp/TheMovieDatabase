import React from 'react';
import { connect } from 'react-redux';
import { setAuth } from '../../redux/actions/auth';
// import Link from "next/link";

import Navbar from '../Navbar';
import Footer from '../footer';
const Default = props => {
  return (
    <span>
      <Navbar bg={props.bg ? true : false} auth={props.auth} />

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
