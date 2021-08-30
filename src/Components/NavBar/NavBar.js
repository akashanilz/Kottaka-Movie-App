import React, { useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import {useHistory} from 'react-router-dom'
import userEvent from '@testing-library/user-event';
import { AuthContext, FirebaseContext } from '../../Store/Context';
function NavBar() {
    const history = useHistory();
    const {firebase}=useContext(FirebaseContext)
    const{user}= useContext(AuthContext)
  useEffect(() => {
    console.log(user)
  }, [])
    return (
        <div className="navbar">
            <img onClick={()=>history.push('/')} className="kottaka" src="https://codbus.com/images/kottaka/kottaka.png" alt="Kottaka Logo" />
            {user ? <div className="dropdown">
           <img className="avatar" src="https://codbus.com/images/kottaka/user.png" alt="Avatar" />
            <div className="dropdown-content">
           <Link className="dropLink1" to="/signup" > hai {user.displayName}</Link>
            <br />
            <br />
            {user && <span className="dropLink" onClick={()=>{
          firebase.auth().signOut();
          history.push('/')
        }}> Logout
          </span>}
            </div>
            </div> : 
           
            <div onClick={()=>{
                history.push('/signup')
            }} className='form_title'>
             Sign<span>U</span>p
               </div>
    
            
            }
         
        </div>
    )
}

export default NavBar
