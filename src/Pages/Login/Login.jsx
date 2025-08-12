import './Login.css'
import logo from '../../assets/logo.png'
import { useState } from 'react';
import { login, signup } from '../../firebase';

function Login() {
  const [signState, setSignState] = useState('Sign In');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async(event) => {
    event.preventDefault();
    if(signState === "Sign In"){
      await login(email, password);
    }else{
      await signup(name, email, password);
    }
  }
  return (
    <div className="login">
      <img src={logo} className='login-logo' />
      <div className="login-form">
        <h1>{signState}</h1>
        <form action="">
        {
          signState === "Sign Up" ? 
          <input type="text" placeholder='Your name' 
            value={name} onChange={(event) => setName(event.target.value)}
          /> : <></>
        }
          <input type="email" placeholder='email'
          value={email} onChange={(event) => setEmail(event.target.value)} />
          <input type="password" placeholder='Enter a password' 
          value={password} onChange={(event) => setPassword(event.target.value)}/>
          <button onClick={user_auth} type='submit'>{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>

        </form>
        <div className="form-switch">
        {
          signState === "Sign In" ? <p>New to Netflix?<span
          onClick={ () => setSignState("Sign Up")}>Sign Up Now</span></p> 
          : <p>Already have account?<span onClick={ () => setSignState("Sign In")}>Sign In Now</span></p>
        }          
        </div>
      </div>
    </div>
  )
}

export default Login;