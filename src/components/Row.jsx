import React, { useState } from "react";
import { useEffect } from "react";
import axios from "../axios";
import "./Row.css"
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { motion } from 'framer-motion'

const imageUrl='https://image.tmdb.org/t/p/w500/'

function Row({ title, fetchUrl }) {

  const [trailer,setTrailer] = useState('')
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    async function fetchData() {

      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);

      return request;
    }

    fetchData();
  }, [fetchUrl]);

  function handleClick(movie) {

    if (trailer) {
      setTrailer('')
    }
    else {
      movieTrailer(movie.original_name || movie.name || movie.original_title)
      .then((url) => {

        const urlParams = new URLSearchParams(new URL(url).search)
        setTrailer(urlParams.get('v'))
      }).catch((error) => {console.log(error)})
    }
  }

  const opts = {height:'600px' , width:'1000px', playerVars:{autoplay:1}}

  return (

    <div className="row">
      <h2>{title}</h2>
      <div className="allposters">
        {movies.map((movie)=> {
          return (
            <img key={movie.id} onClick={() =>  handleClick(movie)}className="posters" src={`${imageUrl}${movie.poster_path}`} alt={movie.original_name} />
          )  
        })}
      </div>
      {trailer && <motion.div onClick={handleClick} animate={{backgroundColor: 'rgba(1, 1, 1, 0.4)'}} className="window">
         <YouTube className="video" videoId={trailer} opts={opts}/>
      </motion.div>}
    </div>
  )
}

export default Row;
