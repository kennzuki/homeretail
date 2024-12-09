import { Link } from "react-router-dom";

const Banner = () => {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
    <section className="flex flex-col gap-6">
      <h1 className="sm:text-4xl md:text-8xl font-bold text-center">Getting your home dreams come true</h1>
      <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium expedita voluptates sapiente nostrum voluptatibus repellat modi. Reprehenderit, nisi consequuntur accusamus velit dolor incidunt explicabo alias eius maxime unde porro atque excepturi, laudantium illum odit?</p>
      <button className="mx-auto py-2 px-4 bg-orange-500 text-white font-bold rounded w-1/2 "><Link to={'/properties'}>Explore Properties</Link></button>
    </section>
    <section className="">
      <img src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="rounded-xl object-cover transition hover:scale-110 ease-out mx-auto sm:mt-8" />
    </section>
    
  </div>;
};

export default Banner;
