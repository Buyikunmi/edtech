export default function Register() {
  return (
    <div id="wrapper" className="flex flex-col justify-between h-screen">
      {/* header*/}
      <div className="bg-white py-4 shadow dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center lg:justify-between justify-around">
            <a href="index-1.html">
              <img src="../assets/images/logo-2.png" alt="" className="w-32" />
            </a>
            <div className="capitalize flex font-semibold hidden lg:block my-2 space-x-3 text-center text-sm">
              <a href="form-login-1.html" className="py-3 px-4">
                Login
              </a>
              <a
                href="form-register-1.html"
                className="bg-purple-500 purple-500 px-6 py-3 rounded-md shadow text-white"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Content*/}
      <div>
        <div className="lg:p-12 max-w-xl lg:my-0 my-12 mx-auto p-6 space-y-">
          <form className="lg:p-10 p-6 space-y-3 relative bg-white shadow-xl rounded-md">
            <h1 className="lg:text-2xl text-xl font-semibold mb-6">Register</h1>
            <div className="grid lg:grid-cols-2 gap-3">
              <div>
                <label className="mb-0" htmlFor="first-name">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  id="first-name"
                  className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                  required
                />
              </div>
              <div>
                <label className="mb-0" htmlFor="last-name">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last  Name"
                  id="last-name"
                  className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                  required
                />
              </div>
            </div>
            <div>
              <label className="mb-0" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                id="username"
                className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                required
              />
            </div>
            <div>
              <label className="mb-0" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Info@example.com"
                id="email"
                className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                required
              />
            </div>
            <div>
              <label className="mb-0" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                placeholder="******"
                id="password"
                className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-3">
              <div>
                <label className="mb-0"> Gender </label>
                <select className="selectpicker mt-2">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label className="mb-0"> Phone: optional</label>
                <input
                  type="phone"
                  placeholder="+234 705 493 6008"
                  className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
                  required
                />
              </div>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="chekcbox1" defaultChecked />
              <label htmlFor="chekcbox1">
                <span className="checkbox-icon" /> I agree to the
                <a
                  href="pages-terms.html"
                  target="_blank"
                  className="uk-text-bold uk-text-small uk-link-reset"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-600 font-semibold p-2 mt-5 rounded-md text-center text-white w-full"
              >
                Get Started
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Footer */}
      <div className="lg:mb-5 py-3 uk-link-reset">
        <div className="flex flex-col items-center justify-between lg:flex-row max-w-6xl mx-auto lg:space-y-0 space-y-3">
          <div className="flex space-x-2 text-gray-700 uppercase">
            <a href="#"> About</a>
            <a href="#"> Help</a>
            <a href="#"> Terms</a>
            <a href="#"> Privacy</a>
          </div>
          <p className="capitalize"> © copyright 2021 by Courseplus</p>
        </div>
      </div>
    </div>
  );
}
