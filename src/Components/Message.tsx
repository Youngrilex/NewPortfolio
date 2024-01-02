const Message = () => {
    return (
      <div className="max-w-md mx-auto px-2  py-6 bg-white rounded-md shadow-md">
      <form>
      <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
           Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="flex gap-4">
        <div className="mb-4 ">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-600"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div></div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Message
          </label>
          <textarea
            id="message"
            className="mt-1 p-2 w-full border rounded-md"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#4AC7F0] text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      </div>
    );
  };
  
  export default Message;
  