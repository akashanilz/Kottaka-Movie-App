import React from 'react'
import { webseries } from '../../Urls'
import Category from '../Category/Category'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import RowPost from '../RowPost/RowPost'

function WebShows() {
    return (
        <div>
              <NavBar/>
            <Category/>
          
            <RowPost url={webseries} title="Web Shows"/>
            <br />
                 <Footer/>
        </div>
    )
}

export default WebShows
