import { movies } from "./getMovies";
import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
   
    // let movie =''
    let movie = movies.results[0]
    return (
        <>
       { movie===""?<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>:<div className="card banner-card">
        <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}   alt={movie.title} className="card-img-top banner-img"/>
        {/* <div className="card-body"> */}
            <h2 className="card-title banner-title">{movie.original_title}</h2>
            <p class="card-text banner-text">{movie.overview}</p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
        {/* </div> */}
        </div>
  }
 </>
    
    )
  }
}
