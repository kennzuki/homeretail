

const Header = () => {
 const menuItems=[{name:'home',path:'/home'},{name:'about',path:'/about'},{name:'properties',path:'/properties'}]
  return (
      <nav className="flex justify-around mt-8">
          <h1 className="text-3xl font-bold uppercase">kenki estates</h1>
          <ul className="flex place-items-center gap-2 uppercase font-bold">
              {menuItems.map((item, index)=>(
              <li key={index} className="">{item.name}</li>
              ))}
          </ul>

          <button className="border border-orange-500 rounded py-2 px-4">Contact us</button>
  
    </nav>
  )
}

export default Header