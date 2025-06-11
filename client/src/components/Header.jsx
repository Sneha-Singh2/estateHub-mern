import {FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import '../App.css'; 

export default function Header() {
  const {currentUser} = useSelector(state => state.user)
  return (
    <header className='bg-olive-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
              <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-olive-700'>Estate</span>
                <span className='text-orange-900'>Hub</span>
              </h1>
            </Link>
        
        <form className='bg-orange-100 p-3 rounded-lg flex items-center'>
            <input 
            type="text" 
            placeholder='Search...' 
            className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <FaSearch className='text-olive-700'/>
        </form>
        <ul className='flex gap-4 '>
            <Link to='/'>
                <li className='hidden sm:inline text-olive-900 hover:underline font-bold'>
                   Home
                </li>
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-olive-900 hover:underline font-bold'>
            About</li>
            </Link>
            <Link to='/profile'>
            {currentUser ? (
              <img className='rounded-full h-7 w-7 object-cover' src={currentUser.avatar} alt="profile" />
            ) : (
            <li className='text-olive-900 hover:underline font-bold'> Sign In</li>
            )}            
             </Link>

        </ul>
        </div>
 
    </header>
  )
}
