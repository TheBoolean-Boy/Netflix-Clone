import './Login.css'
import logo from '../../assets/logo.png'

function Login() {
  return (
    <div className="login">
      <img src={logo} className='login-logo' />
      <div className="login-form">
        <h1>Sign Up</h1>
        <form action="">

          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='email' />
          <input type="password" placeholder='Enter a password' />
          <button>Sign Up</button>

          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember me</label>
            </div>
            <p>Need help?</p>
          </div>

        </form>
        <div className="form-switch">
          <p>New to Netflix?<span>Sign Up Now</span></p>
          <p>Already have account?<span>Sign In Now</span></p>
        </div>
      </div>
    </div>
  )
}

export default Login;