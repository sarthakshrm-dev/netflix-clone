import React, { useEffect,useState } from 'react'
import "./banner.css"
import axios from '../axios'
import requests from '../request'
import { motion } from 'framer-motion'

function Banner() {

  const imageUrl='https://image.tmdb.org/t/p/w500/'

  const [banner,setBanner] = useState([])

  useEffect(() => {
    
    async function changeBanner() {

      const request = await axios.get(requests.fetchTrending);

      setBanner(request.data.results[Math.floor(Math.random() * request.data.results.length-1)])
    }
    changeBanner()
    // setInterval(changeBanner, 6000);
  }, [setBanner]);

  const bannerAnim = {hidden: {opacity:0}, visible: {opacity:1, transition: {duration: 0.5}}}

  return (

    <motion.header variants={bannerAnim} initial='hidden' animate='visible' className='banner'
            style={{backgroundImage:`url('${imageUrl}${banner.backdrop_path}')`,
                    backgroundSize:'cover',
                    backgroundPosition:'center center'}}>
      <div className='bannercontent'>
        <h1>{banner.original_name || banner.name || banner.original_title}</h1>
        <button>PLAY</button>
        <button>LIST</button>
        <p>{banner.overview}</p>   
      </div>    
      <div className='fade'></div>          
    </motion.header>
  )
}

export default Banner