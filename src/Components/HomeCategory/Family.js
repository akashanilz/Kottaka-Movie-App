import React from 'react'
import { family } from '../../Urls'
import Category from '../Category/Category'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import RowPost from '../RowPost/RowPost'

function Family() {
    return (
        <div>
               <NavBar/>
            <Category/>
          
            <RowPost url={family} title="Family"/>
            <br />
                 <Footer/>
        </div>
    )
}

export default Family
