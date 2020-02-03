import React from "react";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, clickable, movieId }) => (
  <StyledMovieThumb clickable={clickable}>
    {clickable ? (
      <Link to={`/${movieId} `}>
        <img src={image} className="clickable" alt="moviethumb" />
      </Link>
      
    ) : (
      <img src={image} alt="moviethumb" />
    )}
  </StyledMovieThumb>
);

MovieThumb.propTypes = {
  clickable: PropTypes.bool,
  image: PropTypes.string,
  movieId: PropTypes.number
}

export default MovieThumb;
