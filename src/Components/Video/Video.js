import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import YouTube from 'react-youtube'
import './Video.css'
import {useParams} from 'react-router-dom'
import axios from '../../axios'
import { useEffect } from 'react'
import { API_KEY } from '../../constants/constants'
import Category from '../Category/Category'
import Footer from '../Footer/Footer'
function Video(props) {
  const {id} =useParams()
  const [url, setUrl] = useState('')
 
  console.log(axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`))
  useEffect(() => {
    //alert(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data)
      if(response.data.results.length !==0){
        setUrl(response.data.results[0])
        
      }
      else{
          console.log('Video not available')
      }
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
  const handleMovie=(idh)=>{
   alert(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
        console.log(response.data)
        if(response.data.results.length !==0){
          setUrl(response.data.results[0])
          //  
          
        }
        else{
          console.log('video not available')
        }
    })
}
    return (
<div>
<NavBar/>
<div className="Post">
            <div  className="video">
            { url ? <YouTube videoId={url.key} opts={opts}  /> : <YouTube videoId="xOrXpK-rUaI" opts={opts}  /> } 
            </div>
         
        <h1 className="videodetails"> Name : <span className="videodetails">{ url.name ? url.name : "Movie Name"}</span></h1> 
     <div className="containerr">
         <div className="card">
           <div className="box">
                  <div className="content">
                  <h3>
                  { url.name ? url.name : "Movie Name"}
                  </h3>
                  <p> Streaming now on Kottaka Movie App
                  </p>

                  </div>
               </div>
         </div>
       </div>
       

    </div>
    <br />
    <Footer/>
</div>
       
  
            )
}

            export default Video
