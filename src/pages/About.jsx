import ProfileCard from '../components/ProfileCard'

const About = () => {
  return (
    <div className="min-h-screen px-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* title */}
      <h1 className="text-3xl font-bold mb-8">About Us</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600 mb-4">
          Dream Homes has been a trusted name in real estate for over 20 years. We specialize in helping
          our clients find their perfect home, whether you need a cozy starter home or a luxury estate.
        </p>
        <p className="text-gray-600 mb-4">
          Our team of experienced agents is dedicated to providing exceptional service and making your
          home buying or selling experience as smooth as possible.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">We believe in honest and transparent dealings</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold mb-2">Excellence</h3>
              <p className="text-gray-600">We strive for excellence in everything we do</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold mb-2">Client Focus</h3>
              <p className="text-gray-600">Your satisfaction is our top priority</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      
     
      <section className="py-8 px-12 ">
        <h2 className="mb-4 font-bold text-3xl">Our Staff</h2>
        <ProfileCard/>
            
        </section>
  </div>
);
}

export default About