import {useNavigate } from 'react-router-dom'

const ProfileCard = () => {
    const navigate = useNavigate();
  const workers = [
    {
      id: 1,
      imageUrl:
        'https://images.generated.photos/JsZ6FCX6kbpL6id9M5fw5ultu4l38desEHri2WebQOw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDk1Mzc5LmpwZw.jpg',
      name: 'Gladys xray',
      jobTitle: 'Human Resources',
      description:
        'Passionate about creating amazing web experiences and solving complex problems.',
    },
    {
      id: 2,
      imageUrl:
        'https://images.generated.photos/EBSGiH5RsI-Cp6N4Zn9lxaQ9tJJGg8I5C4PXxhtwvrQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjcxNzQzLmpwZw.jpg',
      name: 'harriette sevilla',
      jobTitle: 'Software Engineer',
      description:
        'Passionate about creating amazing web experiences and solving complex problems.',
    },
    {
      id: 3,
      imageUrl:
        'https://images.generated.photos/8-fmGFMXRZ5M1vLmwH5mXAag7drF05waVTdw2xBSdjk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Nzg2OTA4LmpwZw.jpg',
      name: 'wonder sykes',
      jobTitle: 'marketing',
      description:
        'Passionate about creating amazing web experiences and solving complex problems.',
    },
  ];

  return (
    <div className=' grid grid-cols-1 md:grid-cols-3 gap-3 overflow-hidden bg-white p-8'>
          {workers.map((worker,id) => (
              <div key={id} className='flex flex-col items-center gap-4 p-6 border hover:scale-110 shadow-xl transition ease-out duration-300'>
                  <img src={worker.imageUrl} alt="" className="rounded-full p-2 " />
                  <p className="font-bold">{worker.name}</p>
                  <p className="text-sm text-gray-500">{worker.jobTitle}</p>
                  <p className="">{worker.description}</p>
                  <div className="mt-6 flex justify-center space-x-4">
          <button onClick={()=>navigate('/contact')} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
            Contact
          </button>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300">
            View Profile
          </button>
        </div>
              </div>
              
     ))}
     
        
    </div>
  );
};

export default ProfileCard;
