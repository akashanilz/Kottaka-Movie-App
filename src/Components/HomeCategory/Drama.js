import React from 'react'
import { drama } from '../../Urls'
import Category from '../Category/Category'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import RowPost from '../RowPost/RowPost'

function Drama() {
    return (
        <div>
               <NavBar/>
            <Category/>
          
            <RowPost url={drama} title="Drama"/>
            <br />
                 <Footer/>
        </div>
    )
}

export default Drama
