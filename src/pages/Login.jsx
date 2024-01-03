const Login = () => {
  return (
    <div>
      
      <div className="min-h-screen flex items-center justify-center bg-orange-transparent">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6">Login</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="text-sm block font-semibold mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="text-sm block font-semibold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white p-2 rounded hover:bg-orange-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login