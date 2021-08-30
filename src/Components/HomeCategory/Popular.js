import React from 'react'
import { orginals } from '../../Urls'
import Category from '../Category/Category'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import RowPost from '../RowPost/RowPost'

function Popular() {
    return (
        <div>
               <NavBar/>
            <Category/>
          
            <RowPost url={orginals} title="Popular"/>
            <br />
                 <Footer/>
        </div>
    )
}

export default Popular
