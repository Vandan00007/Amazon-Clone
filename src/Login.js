import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './login.css'
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = e => {
        e.preventDefault();
    }

    const register = e => {
        e.preventDefault();
    }
    return (
        <div className='login'>
            <Link to = '/'>
            <img 
            className="login__logo"
            src='https://pngimg.com/uploads/amazon/amazon_PNG24.png'/>
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange=
                    {e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} 
                    onChange={e => setPassword(e.target.value)}/>
                    
                    <button type ='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the amazon clone conditions to use & sale. Please see our privacy notice, our cookies notice and our interest-based ads notice. 
                </p>
                <button
                onClick={register}
                className='login__register'>Create your Amazon Account</button>

       
            </div>
        </div>
    )
}

export default Login
