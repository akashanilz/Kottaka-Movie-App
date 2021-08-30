import { Button } from 'react-bootstrap'
import React, { useContext } from 'react'
import { Link , useHistory} from 'react-router-dom'
import {BeatLoader} from 'react-spinners';
import { css } from "@emotion/react";
import NavBar from '../NavBar/NavBar'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css'
import { useState } from 'react'
import { FirebaseContext } from '../../Store/Context'
function SignUp() {
  const override = css`
  display: block;
  size:15;`;

  const notify = () => 
 
  toast.success(' 😜Account created !', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });{

  } 
let [loading, setLoading] = useState(true);
let [color, setColor] = useState("red");
  const history = useHistory()
  const {firebase} = useContext(FirebaseContext)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mobile, setMobile] = useState('')
  const [emailAlert, setEmailAlert] = useState(false)
  const [passwordAlert, setPasswordAlert] = useState(false)
 const [loader, setLoader] = useState(false)
  const handleSubmit = (e)=>{
    e.preventDefault()
    setLoader(true)
    setEmailAlert(false)
    setPasswordAlert(false)
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:name}).then(()=>{
        notify()
        firebase.firestore().collection('user').add({
          id:result.user.uid,
          username:name,
          phone:mobile
        }).then(()=>{
          history.push('/login')
        })
      })
    }).catch(error=>{
      console.log(error)
      switch(error.code){
        case 'auth/email-already-in-use':
          setEmailAlert(true)
          setLoader(false)
          break;
          case 'auth/weak-password':
            setPasswordAlert(true)
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
        Sign<span>U</span>p
      </div>
      <form onSubmit={handleSubmit} className='form_items'>
      <div className='form_inputs'>
          <input 
            type='text'
            name="name"
            value={name}
            onChange={(e)=>{
              setName(e.target.value)
            }}
            required
            />
          <label>Name</label>
        </div>
        {emailAlert && <span className="alert">Email already exist</span>}
        <div className='form_inputs'>
          <input 
            type='text'
            required
            name="email"
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            />
          <label>Email</label>
        </div>
        
        <div className='form_inputs'>
         
        
          <input
            type='number'
            value={mobile}
            name="mobile"
            onChange={(e)=>{
              setMobile(e.target.value)
            }}
            required
            />
          <label>Mobile</label>
        </div>
        <div className='form_inputs'>
          <input
            type='password'
            value={password}
            name="password"
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            required
            />
          <label>Password</label>
        </div>
        {passwordAlert && <span className="alert">Password must be six character long</span>}
        { loader ? <button disabled={true} className='form_button1'>Sign Up</button> : <button className='form_button' >Sign Up</button> }
      </form>
      <div className='form_others'>
      {loader && <BeatLoader color={color} loading={loading} css={override} size={15} /> }
     { loader ? "" : <Link to="/login" className="authLink">Login ?</Link>}
      </div>
    </div>
    <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} 
    newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
 
    </div>
    )
}

export default SignUp
