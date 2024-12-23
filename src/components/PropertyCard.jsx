import { useState, useEffect } from 'react';
import supabase from '../supabaseConfig';

const PropertyCard = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    getListings();
  }, []);

  const getListings = async () => {
    const { data, error } = await supabase.from('homeretail').select('*');
    if (error) {
      console.log('error in fetching todo list', error);
    } else {
      console.log(setListings(data));
    }
  };
  return (
    <section className='grid grid-cols-1 md:grid-cols-3 p-6  gap-4 mt-12 border'>
      {listings.map((list) => (
        <article className='p-4 border shadow-md ' key={list.id}>
          <img
            src={list.image}
            alt='housing'
            className='w-[200px] h-[200px] rounded-xl object-cover'
          />
          <div className='flex flex-col gap-4 [&_p]:text-sm [&_p]:text-gray-400 mt-4'>
            <h4 className='text-xl font-bold uppercase'>{list.location}</h4>
            <p className=''>Listed by:{list.names}</p>
            <p className=''>Contact: {list.email}</p>
            <p className=''>{list.description}</p>
            <p className=''>Poperty Type:{list.property_type}</p>
            <p className='font-bold'>Price: {list.price}</p>
            <p>Bedrooms: {list.bedroom}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default PropertyCard;
