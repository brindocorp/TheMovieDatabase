import React from "react";
// import Link from "next/link";

const MovieCard = () => (
  <div>
    <div className="col px-1 ">
      <figure
        className="ti-grid-img width-400 bg-cover"
        style={{
          background:
            'url("/cinema_bg2.jpg");height: 300px; background-size: auto;width: -webkit-fill-available; background-repeat:round; margin:0'
        }}
      ></figure>

      <div className="d-flex w-100 movie-card-bottom p-2 justify-content-between">
        <div>
          <p className="lead font-weight-bold"> Logan</p>
          <p className="small">Action , Adventory, Fantasy</p>
        </div>

        <div className="movie-card-rating">
          <div className="p-3">4.0 </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .movie-card-bottom {
        border: 1px solid grey;
      }

      .movie-card-genre {
      }
      .movie-card-rating {
        border: 1px solid red;
      }
    `}</style>
  </div>
);

export default MovieCard;
