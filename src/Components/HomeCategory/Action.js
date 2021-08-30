import React from 'react'
import { actions } from '../../Urls'
import Category from '../Category/Category'
import Footer from '../Footer/Footer'
import NavBar from '../NavBar/NavBar'
import RowPost from '../RowPost/RowPost'

function Action() {
    return (
        <div>
               <NavBar/>
            <Category/>
          
            <RowPost url={actions} title="Action"/>
            <br />
                 <Footer/>
        </div>
    )
}

export default Action
