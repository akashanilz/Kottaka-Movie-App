import React from 'react'
import { tvShow } from '../../Urls'
import Category from '../Category/Category'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import RowPost from '../RowPost/RowPost'

function TV() {
    return (
        <div>
              <NavBar/>
            <Category/>
          
            <RowPost url={tvShow} title="TV Shows"/>
            <br />
                 <Footer/>
        </div>
    )
}

export default TV
