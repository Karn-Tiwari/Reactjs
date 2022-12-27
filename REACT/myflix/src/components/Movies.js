import React, { Component } from "react";
import { movies } from "./getMovies";

export default class Movies extends Component {
  render() {
    return (
      <>
        {movies.length == 0 ? (
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        ) : (
          <div>
            <h3 className="text-center">
              <strong>Trending</strong>
            </h3>
            <div>
              {movies.map((movieObj) => {
                <div className="card movies-card">
                  <img
                    src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                    alt={movieObj.title}
                    //className="card-img-top banner-img"
                  />
                  {/* <div className="card-body"> */}
                  <h2 className="card-title movies-title">
                    {movieObj.original_title}
                  </h2>
                  {/* <p class="card-text movies-text">{movieObj.overview}</p> */}
                 <div className="button-wrapper">
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                  {/* </div> */}
                </div>;
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}
