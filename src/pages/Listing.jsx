const Listing = () => {
  return (
    <div className='border space-y-4 mx-auto p-12 w-1/2 rounded-xl mt-8 '>
      <h2 className='text-2xl font-bold text-center'>Add Property</h2>
      <form
        action=''
        className='flex flex-col gap-4 items-center [&_input]:w-[400px] [&_input]:p-4 [&_input]:border [&_input]:rounded'
      >
        <label htmlFor='' className=''>
          Add property title
        </label>
        <input
          type='text'
          name='title'
          className='border'
          placeholder='Names'
        />
        <input
          type='text'
          name='title'
          className='border'
          placeholder='Add property location'
        />
        <input
          type='email'
          name='title'
          className='border'
          placeholder='Email'
        />
        <input
          type='number'
          name='price'
          className=''
          placeholder='Price'
        />
        <label htmlFor='' className=''>
          No of bedrooms
        </label>
        <select
          name=''
          id=''
          className='w-[400px] p-4 border rounded'
          placeholder='No of bedrooms'
        >
          <option >No of bedrooms</option>
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
        >
          <option >Type of house</option>
          <option value='1'>Bungalow</option>
          <option value='2'>Apartments</option>
          <option value='3'>Bedsitter</option>
        </select>
        <textarea
          className='w-[400px] p-4 border rounded'
          name='description'
          placeholder='Add product description'
        />
        <input type='file' className='' />
      </form>
    </div>
  );
};

export default Listing;
