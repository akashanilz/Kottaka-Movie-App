import React, { useState } from 'react'
import './Banner.css'
import { useEffect } from 'react'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../../constants/constants'
import { useHistory } from 'react-router-dom'

function Banner() {
const history = useHistory()
    const [movie, setMovie] = useState()
    const [video, setVideo] = useState([])
    useEffect(() => {
       axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
        const i= response.data.results
           console.log(i)
           setMovie(response.data.results[Math.floor(Math.random()*i.length)])
       })
    }, [])

const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  
    return (
        <div style={{ backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})` }} className="banner">
        
            <div className="content">
              <h1 className="title">{movie ? movie.title : ""}</h1>
                <div className="banner_buttons">
                
                   <button onClick={()=>{history.push(`video/${movie.id}`)}}  className="button">Play</button>
                
                  
               </div>
              <h1 className="description"></h1>
            </div>
            <div className="fade_bottom"></div>
           
        </div>
    )
}

export default Banner
