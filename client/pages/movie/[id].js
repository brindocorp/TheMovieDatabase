import React, { useState, useEffect } from "react";
// import Link from "next/link";
import Default from "../../components/layout/Default";
import { connect } from "react-redux";
import initialize from "../../utils/initialize";
import { setAuth, persistAuth } from "../../redux/actions/auth";
const MovieDetail = props => {
  useEffect(() => {
    console.log("setTokem", props.TokenData);
    props.setAuthT(props.TokenData);
  }, [props.TokenData]);
  return (
    <div>
      <Default bg auth={props.userData}>
        <div className="py-5"></div>
      </Default>
      <style jsx>{``}</style>
    </div>
  );
};

MovieDetail.getInitialProps = async ctx => {
  // let token = await getCookieFromServer("moviesBoxDatabase", ctx.req);
  // console.log("ini index;");
  let state = await initialize(ctx);

  let user = ctx.store.getState().auth;
  let tokenData = ctx.store.getState().token;

  return { userData: user, TokenData: tokenData };
};
const mapStateToProps = state => ({
  user: state.auth._id,
  token: state.token
});
const mapDispatchToProps = {
  setAuthT: setAuth
};
export default connect(mapStateToProps, mapDispatchToProps)(MovieDetail);
