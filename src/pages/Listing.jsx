import { useForm } from 'react-hook-form';
import { useState } from 'react';
import supabase from '../supabaseConfig';

const Listing = () => {
  const [listings, setListings] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  const getListings = async () => {
    const { data, error } = await supabase.from('homeretail').select('*');
    if (error) {
      console.log('error in fetching todo list', error);
    } else {
      setListings(data);
    }
  };

  return (
    <div className='border space-y-4 mx-auto p-12 w-1/2 rounded-xl mt-8 '>
      <h2 className='text-2xl font-bold text-center'>Add Property</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='p-4 flex flex-col gap-4  items-center [&_input]:w-[400px] [&_input]:p-4 [&_input]:border [&_input]:rounded'
      >
        <label htmlFor='' className=''>
          Add property title
        </label>
        <input
          type='text'
          name='title'
          className='border'
          placeholder='Names'
          {...register('title', { required: true })}
        />
        {errors.title && (
          <p className='text-red-500'>{`${errors.title.message}`}</p>
        )}
        <input
          type='email'
          name='email'
          className='border'
          placeholder='Email'
          {...register('email', { required: true })}
        />
        <input
          type='text'
          name='location'
          className='border'
          placeholder='Add property location'
          {...register('location', { required: true })}
        />

        <input
          type='number'
          name='price'
          className=''
          placeholder='Price'
          {...register('price', { required: true })}
        />
        <label htmlFor='' className=''>
          No of bedrooms
        </label>
        <select
          name=''
          id=''
          className='w-[400px] p-4 border rounded'
          placeholder='No of bedrooms'
          {...register('bedrooms', { required: true })}
        >
          <option>No of bedrooms</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='3'>more</option>
          <option value='3'>Bedsitter</option>
        </select>

        <select
          name=''
          id=''
          className=' w-[400px] p-4 border rounded'
          placeholder='Add house type'
          {...register('houseType', { required: true })}
        >
          <option>Type of house</option>
          <option value='1'>Bungalow</option>
          <option value='2'>Apartments</option>
          <option value='3'>Bedsitter</option>
        </select>
        <textarea
          className='w-[400px] p-4 border rounded'
          name='description'
          placeholder='Add product description'
          {...register('description', { required: true })}
        />
        <input
          type='file'
          className=''
          {...register('file', { required: true })}
        />
        <button
          disabled={isSubmitting}
          className='py-2 px-4 rounded font-bold w-1/2 text-white bg-orange-500 mt-4'
        >
          Add Listing
        </button>
      </form>
    </div>
  );
};

export default Listing;
