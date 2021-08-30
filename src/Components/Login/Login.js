import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {BeatLoader} from 'react-spinners';
import { css } from "@emotion/react";
import { FirebaseContext } from '../../Store/Context'
import NavBar from '../NavBar/NavBar'
import './Login.css'
function Login() {
    const override = css`
    display: block;
    size:15;`;
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("red");
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [blockAlert, setBlockAlert] = useState(false)
    const [emailAlert, setEmailAlert] = useState(false)
    const [passwordAlert, setPasswordAlert] = useState(false)
   const [loader, setLoader] = useState(false)
   const {firebase}= useContext(FirebaseContext)
   const history = useHistory()
   const handleLogin=(e)=>{
   e.preventDefault()
   setLoader(true)
   setBlockAlert(false)
   setPasswordAlert(false)
   setEmailAlert(false)
   firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
    // alert('Login Successful')
     history.push('/')
   }).catch((error)=>{
     console.log(error)
     switch(error.code){
        case 'auth/user-not-found':
          setEmailAlert(true)
         // setPasswordAlert(false)
          setLoader(false)
          break;
          case 'auth/wrong-password':
            setPasswordAlert(true)
           // setEmailAlert(false)
            setLoader(false)
            break;
            case 'auth/too-many-requests':
            setBlockAlert(true)
           // setEmailAlert(false)
            setLoader(false)
            break;
            
      }
   })
   }
    return (
        <div>
     <NavBar/>    
     
     <div className='form'>
     <div className='form_logo'>
     <img width="160px" src="https://www.codbus.com/images/kottaka/kottaka.png" alt="" />
     </div>
     <div className='form_title'>
       Log<span>I</span>n
     </div>
     {blockAlert && <span className="alert">Account is disabled try after sometime</span>}
     <form onSubmit={handleLogin} className='form_items'>
       <div className='form_inputs'>
         <input 
           type='text'
           name="email"
           required
           value={email}
           onChange={(e)=>{
             setEmail(e.target.value)
           }}
           />
         <label>Email</label>
       </div>
       {emailAlert && <span className="alert">User does not exist</span>}
       <div className='form_inputs'>
         <input
           type='password'
           name="password"
           value={password}
           onChange={(e)=>{
             setPassword(e.target.value)
           }}
           required
           />
         <label>Password</label>
       </div>
       {passwordAlert && <span className="alert">Password incorrect</span>}
       { loader ? <button disabled={true} className='form_button1'>Sign Up</button> : <button className='form_button' >Sign Up</button> }
    
     </form>
     <div className='form_others'>
     {loader && <BeatLoader color={color} loading={loading} css={override} size={15} /> }
       {loader ? "" : <Link className="authLink" to="/signup">Sign Up</Link> }
     </div>
   </div>
        </div>
    )
}

export default Login
