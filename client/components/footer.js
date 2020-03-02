import React from "react";
// import Link from "next/link";
import { Divider, Icon } from "semantic-ui-react";

const MovieCard = () => (
  <div>
    <div className="container">
      <div className="row mt-4">
        <div className="col d-flex justify-content-between">
          <div className="div text-black logo-font-size d-flex">
            <span> MOVIE</span> <span className="font-weight-bold">BOX</span>
          </div>

          <div className="d-flex my-auto">
            <span className="mr-2">About </span>
            <span className="mr-2">Movies </span>
            <span className="mr-2">Ratings </span>
            <span className="mr-2">Contact </span>
          </div>
        </div>
      </div>
      <Divider section />
      <div className="row footer-bottom">
        <div className="col d-flex justify-content-between">
          <div className="div text-black  d-flex">
            <span className="small text-black-50"> All rights reserved </span>
          </div>

          <div className="d-flex my-auto">
            <Icon name="facebook" />
            <Icon name="twitter" />
            <Icon name="google plus" />
            <Icon name="instagram" />
            <Icon name="youtube" />
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .footer-bottom {
        padding-bottom: 150px;
      }
    `}</style>
  </div>
);

export default MovieCard;
