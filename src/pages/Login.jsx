import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  const [rememberLogin, setRememberLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(password);
  }

  return (
    <>
    <div className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover' 
        src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/f5a613af-ff99-444d-8305-e4cecd6d6cf6/US-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_591dffe8-33f4-4fb4-a734-9ff362a96145_medium.jpg"
        alt="///" 
      />
      <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />

    <div className='fixed w-full px-4 py-24 z-20'>
      <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
        <div className='max-w-[320px] mx-auto py-16'>
          <h1 className='text-3xl font-nsans-bold'>Login</h1>

          <form 
          onSubmit={handleFormSubmit} 
          className='w-full flex flex-col py-4'>

            <input 
              className='p-3 my-2 bg-gray-700 rounded' 
              type='email' 
              placeholder='Email' 
              autoComplete='Email' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input 
              className='p-3 my-2 bg-gray-700 rounded' 
              type='password' 
              placeholder='Password' 
              autoComplete='current-password' 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className='bg-red-600 py-3 my-6 rounded font-nsans-bold'>
              Login
            </button>

            <div className='flex justify-between items-center text-gray-600'>
              <p>
                <input 
                type='checkbox' 
                className='mr-2' 
                checked={rememberLogin} 
                onChange={(e) => setRememberLogin(!rememberLogin)} />
                 Remember Me
              </p>
              <p>Need Help?</p>
            </div>
            <p className='my-4'>
              <span className='text-gray-600 mr-2'>New to Netflix?</span>
              <Link className='' to='/Signup'>Sign Up Now!</Link>
            </p>
          </form>

        </div>
      </div>

    </div>
    </div>
    </>
  )
}
export default Login