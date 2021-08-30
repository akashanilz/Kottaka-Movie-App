import './App.css';
import Banner from './Components/Banner/Banner';
import Category from './Components/Category/Category';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import WebShows from './Components/WebShows/WebShows';
import TV from './Components/TV/TV';
import News from './Components/News/News';
import Documentry from './Components/Documentry/Documentry';
import Home from './Home';
import Movies from './Components/Movies/Movies';
import Video from './Components/Video/Video';
import SignUp from './Components/SignUp/SignUp';
import Popular from './Components/HomeCategory/Popular';
import Action from './Components/HomeCategory/Action';
import Comedy from './Components/HomeCategory/Comedy';
import Drama from './Components/HomeCategory/Drama';
import Family from './Components/HomeCategory/Family';
import Login from './Components/Login/Login';
import { useContext, useEffect } from 'react';
import { AuthContext, FirebaseContext } from './Store/Context';

function App() {
  const {setUser}= useContext(AuthContext)
  const {firebase}= useContext(FirebaseContext)
  useEffect(() => {
      firebase.auth().onAuthStateChanged((user)=>{
        setUser(user)
      })
  }, [])
  return (
    <div className="App">
    
      <Router>
      <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/webshows">
          <WebShows></WebShows>
        </Route>
        <Route path="/tv">
          <TV></TV>
        </Route>
        <Route path="/short-films">
         <News></News>
        </Route>
        <Route path="/video/:id/">
         <Video></Video>
        </Route> 
        <Route path="/movies">
          <Movies></Movies>
        </Route>
        <Route path="/documentary">
          <Documentry></Documentry>
        </Route>
        <Route path="/popular">
          <Popular></Popular>
        </Route>
        <Route path="/action">
          <Action></Action>
        </Route>
        <Route path="/comedy">
          <Comedy></Comedy>
        </Route>
        <Route path="/drama">
          <Drama></Drama>
        </Route>
        <Route path="/family">
          <Family></Family>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Router>
    </div>
  );
}

export default App;
