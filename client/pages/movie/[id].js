import React, { useState, useEffect } from "react";
import Link from "next/link";
import Default from "../../components/layout/Default";
import { connect } from "react-redux";
import initialize from "../../utils/initialize";
import { setAuth, persistAuth } from "../../redux/actions/auth";
import { Icon, Popup } from "semantic-ui-react";
const MovieDetail = props => {
  useEffect(() => {
    // console.log("setTokem", props.TokenData);
    props.setAuthT(props.TokenData);
  }, [props.TokenData]);
  return (
    <div>
      <Default bg auth={props.userData}>
        <div className="container-fluid py-5 custom_bg ">
          <div className="row pt-5 ">
            <div className="col-lg-4">
              <div className="div content mx-auto"></div>
            </div>
            <div className="col-lg-8 d-flex flex-column mx-auto mt-5">
              <div>
                <Popup
                  content="Play Thriller"
                  trigger={
                    <Icon
                      className="cursor-pointer"
                      name="play circle outline"
                      color="white"
                      inverted
                      size="huge"
                    />
                  }
                />
              </div>
              <h2 className="text-white"> A rainy day in newyork</h2>
              <h4 className="text-white">Overview</h4>
              <p className="lead text-white">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde,
                facere. Excepturi iure blanditiis quod quisquam, quia eius,
                reprehenderit dolore velit error dolores vel cum alias
                distinctio voluptatem voluptatum. Error, quisquam.
              </p>
              <h4 className="text-white">Featured Crew</h4>

              <h5 className="text-white font-weight-bold">Woody Allen</h5>
              <p className="text-white">Director , Writer</p>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-9 py-3 d-flex overflow-auto h-auto">
              {[1, 2, 3, 4, 5, 6].map(() => {
                return (
                  <div className="card-movies">
                    <Link href="/">
                      <img
                        src="https://image.tmdb.org/t/p/w138_and_h175_face/taemN1znIWgkahgu80gG1DLv5gC.jpg"
                        className=""
                        sizes="138px"
                      />
                    </Link>
                    <div className="m-auto d-flex flex-column align-items-center py-3">
                      {" "}
                      <h6 className="font-weight-bold  ">Elle Fanning</h6>
                      <p className="lead">Annie Joy</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col-lg-3 bg-fact"></div>
          </div>
        </div>
      </Default>
      <style jsx>{`
        .bg-fact {
          background-color: #f1f1f1;
          min-height: 500px;
          width: -web-kit-availaible-;
        }
        .card-movies {
          width: 140px;
          height: 250px;
          background-color: #fff;
          box-sizing: border-box;
          margin-right: 10px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        .content {
          height: 350px;
          width: 250px;
          background: black;
        }
        .custom_bg {
          background-image: radial-gradient(
            circle at 20% 50%,
            rgba(29.02%, 18.04%, 19.61%, 0.98) 0%,
            rgba(34.51%, 26.27%, 27.45%, 0.88) 100%
          );
        }
      `}</style>
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
