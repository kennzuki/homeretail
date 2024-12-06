

const Contact = () => {
  return (
    <div className=" bg-gray-100  ">
    <div className="flex flex-col gap-4 px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <form className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="text"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              id="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            type="submit"
          >
            Send Message
          </button>
        </form>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Office</h2>
          <div className="text-gray-600">
            <p>123 Real Estate Street</p>
            <p>Beverly Hills, CA 90210</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@dreamhomes.com</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default Contact