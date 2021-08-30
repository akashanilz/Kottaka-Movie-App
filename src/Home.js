import React from 'react'
import './App.css';
import Banner from './Components/Banner/Banner';
import Category from './Components/Category/Category';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WebShows from './Components/WebShows/WebShows';
import { actions, comedy, drama, family, orginals } from './Urls';
import Footer from './Components/Footer/Footer';
function Home() {
    return (
        <div className="App" >
      <NavBar/>
      <Category/>
      <Banner/>
     
      <RowPost home url={orginals}  slug='popular' title='Popular' />
      <RowPost home url={actions} slug='action' title='Action'  />
      <RowPost home url={comedy} slug='comedy' title='Comedy'  />
      <RowPost home url={drama} slug='drama' title='Drama'  />
      <RowPost home url={family} slug='family' title='Family' />
    <Footer/>
    <br />
        </div>
    )
}

export default Home
