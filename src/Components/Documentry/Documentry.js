import React from 'react'
import { drama } from '../../Urls'
import Banner from '../Banner/Banner'
import Category from '../Category/Category'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import RowPost from '../RowPost/RowPost'

function Documentry() {
    return (
        <div>
            <NavBar/>
            <Category/>
          
            <RowPost url={drama} title="Documentry"/>
                 
                 <br />
                 <Footer/>
        </div>
    )
}

export default Documentry
