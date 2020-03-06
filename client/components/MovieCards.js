import React from "react";
import Link from "next/link";

const MovieCard = () => (
  <div>
    <div>
      <div className="box">
        <Link href={`movie/${1}`}>
          <a>
            <figure
              className=" width-400 bg-cover"
              style={{
                background: `url("/cinema_bg2.jpg")`,
                height: "300px",
                backgroundSize: "auto",
                width: "-webkit-fill-available",
                backgroundRepeat: "round",
                margin: 0,
                borderRadius: "5px 5px 0 0"
              }}
            ></figure>
          </a>
        </Link>
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
    </div>
    <style jsx>{`
      .box {
        border-radius: 5px !important;
        box-shadow: 0 17px 50px 0 rgba(var(--shadow-rgb), 0.19),
          0 12px 15px 0 rgba(var(--shadow-rgb), 0.24) !important;
        background: #fff !important;
      }
      .bg-cover {
      }
      .bg-url {
      }
      .movie-card-bottom {
        // border: 1px solid grey;
        // background: white;
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
