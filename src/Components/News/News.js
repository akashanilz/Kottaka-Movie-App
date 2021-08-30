import React from 'react'
import { comedy } from '../../Urls'
import Category from '../Category/Category'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import RowPost from '../RowPost/RowPost'

function News() {
    return (
        <div>
              <NavBar/>
            <Category/>
          
            <RowPost url={comedy} title="Short Films"/>
            <br />
                 <Footer/>
        </div>
    )
}

export default News
