import React from "react";
// import Link from "next/link";
import { Divider, Icon } from "semantic-ui-react";

const MovieCard = () => (
  <div>
    <div className="container-fluid bg-grey">
      <div className="row  px-4 pt-4">
        <div className="col d-flex justify-content-between">
          <div className="div text-white logo-font-size d-flex">
            <span> MOVIE</span> <span className="font-weight-bold">BOX</span>
          </div>

          <div className="d-flex my-auto text-white">
            <span className="mr-2">About </span>
            <span className="mr-2">Movies </span>
            <span className="mr-2">Ratings </span>
            <span className="mr-2">Contact </span>
          </div>
        </div>
      </div>
      <Divider section className="bg-white" color="white" />
      <div className="row footer-bottom px-4">
        <div className="col d-flex justify-content-between">
          <div className="div text-white  d-flex">
            <span className="small text-white-50"> All rights reserved </span>
          </div>

          <div className="d-flex my-auto">
            <Icon color="white" inverted name="facebook" />
            <Icon color="white" inverted name="twitter" />
            <Icon color="white" inverted name="google plus" />
            <Icon color="white" inverted name="instagram" />
            <Icon color="white" inverted name="youtube" />
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
