import { Link } from "react-router-dom";


export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto mt-12 rounded-xl shadow-md bg-amber-50'>
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username' 
        className='border p-3 rounded-lg bg-gray-50' id='username'/>
        <input type="email" placeholder='email' 
        className='border p-3 rounded-lg bg-gray-50' id='email'/>
        <input type="password" placeholder='password' 
        className='border p-3 rounded-lg bg-gray-50' id='password'/>
        <button className='bg-orange-900 text-white p-3
        rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Sign up</button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700 font-semibold">Sign in</span>
        </Link>
      </div>
      
    </div>
  )
}
