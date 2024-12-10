import { Link } from "react-router-dom";



const Nav = () => {
  return (
    <div className='flex items-center justify-center gap-4 [&_button]:border [&_button]:bg-blue-600 [&_button]:text-white [&_button]:font-bold [&_button]:hover:scale-110 [&_button]:rounded-sm border-b border-2 p-6 transition ease-in-out duration-300'>
    <button className='border-2 border-white py-2 px-4  flex gap-2 place-items-center'>
      <Link to='/rent'>Rent</Link> 
    </button>
    <button className='border-2 border-white py-2 px-4 flex gap-2 place-items-center'>
      <Link to='/listing'>Listings</Link> 
    </button>
    <button className='border-2 border-white py-2 px-4  flex gap-2 place-items-center'>
      <Link to='/sign-in'>Sign in</Link> 
    </button>
  </div>
  )
}

export default Nav