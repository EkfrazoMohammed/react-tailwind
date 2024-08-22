import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const SignUpComponent = ({handleSignUpSuccess}) => {
  return (

    <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
    <div className="bg-gray-100 text-gray-500 p-4 rounded-3xl shadow-md w-full overflow-hidden max-w-[500px]">

      <div className="w-full">
        <div className="text-center mb-10">
          <h1 className="font-bold text-3xl text-gray-900">Sign Up </h1>
        </div>
        <div>
          <div className="flex">
            <div className="w-full px-3 mb-5">
              <label htmlFor="" className="text-xs font-semibold px-1">Email</label>
              <div className="flex">
                <input type="email" className="w-full p-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-full px-3 mb-6">
              <label htmlFor="" className="text-xs font-semibold px-1">Password</label>
              <div className="flex m-auto items-center">
                <input type="password" className="w-full p-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="w-full px-3 mb-5">
              <button onClick={handleSignUpSuccess} className="block w-full max-w-xs mx-auto bg-blue-500 hover:bg-blue-700 text-white rounded-lg p-2 font-semibold">Sign Up</button>
            </div>
          </div>
          <div className="flex justify-center m-auto items-center">
            <div>

            <Link to="/">Have an account? Go to Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignUpComponent