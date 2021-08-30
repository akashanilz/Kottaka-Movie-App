import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { imageUrl } from '../../constants/constants'
import { useHistory } from 'react-router'
import Footer from '../Footer/Footer'

function RowPost(props) {
    console.log(props)
    const [movie, setMovie] = useState([])
    useEffect(() => {
       axios.get(props.url).then((response)=>{
           console.log(response.data)
           setMovie(response.data.results)
       })
    }, [])
const history =  useHistory()

    return (
      
   <div className="Post">
       {
           props.home ? <h1 className="posthead">{props.title}</h1> : <h1 className="posthead1">{props.title} videos</h1>
       }
       
    <div className={props.home ? "container" : "container1"} >
        {
            movie.map((obj)=>
              
            <div className="card" onClick={()=>{history.push(`video/${obj.id}`)}}>
            <div className="box">
              <div className="contenvt">
              <img className="imggg"  src={`${imageUrl+obj.backdrop_path}`} style={{ width:"220%" }} alt="poster" />
              <div className="centered"> {obj.title}
                  </div> 
              </div>
            </div>
          </div>
             ) }
  
 { props.slug && <div className="card" onClick={()=>{history.push(`/${props.slug}`)}}>
           <div className="box">
                  <div className="content"  >
                  <h3>
                  {props.title}
                  </h3>
                  <p> View all {props.title} videos
                  </p>
                  <br />
                  <img width="60px" src="https://codbus.com/images/kottaka/right-arrow.png" alt="" />
                  </div>
               </div>
         </div> }
      </div> 
    
   </div>
 
    )
}

export default RowPost
