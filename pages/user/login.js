export default function Login() {
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
            <h1 className="lg:text-2xl text-xl font-semibold mb-6"> Login </h1>
            <div>
              <label className="mb-0" htmlFor="username">
                {" "}
                Username{" "}
              </label>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
              />
            </div>
            <div>
              <label className="mb-0" htmlFor="email">
                {" "}
                Email Address{" "}
              </label>
              <input
                type="email"
                id="email"
                placeholder="Info@example.com"
                className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
              />
            </div>
            <div>
              <label className="mb-0" htmlFor="password">
                {" "}
                Password{" "}
              </label>
              <input
                type="password"
                id="password"
                placeholder="******"
                className="bg-gray-100 h-12 mt-2 px-3 rounded-md w-full"
              />
            </div>
            <div>
              <button
                type="button"
                className="bg-blue-600 font-semibold p-2.5 mt-5 rounded-md text-center text-white w-full"
              >
                Get Started
              </button>
            </div>
            <div className="uk-heading-line uk-text-center py-5">
              <span> Or, connect with </span>
            </div>
            <a
              href="/login/facebook"
              className="hidden relative lg:flex items-center justify-start w-full py-3 mt-2 overflow-hidden text-lg font-medium text-white bg-indigo-600 rounded-lg cursor-pointer"
            >
              <span className="absolute left-0 flex items-center justify-center w-16 h-full mr-3 fill-current">
                <svg
                  viewBox="0 0 24 24"
                  className="left-0 w-8 h-8 ml-1 text-white fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z" />
                </svg>
              </span>
              <span className="inline-block pl-5 text-base text-center w-full">
                Signup with Facebook
              </span>
            </a>
            <div className="flex items-center space-x-2 justify-center">
              <a href="#">
                <ion-icon
                  name="logo-facebook"
                  className="p-2 rounded-full text-2xl bg-gray-100 text-blue-600"
                />
              </a>
              <a href="#">
                <ion-icon
                  name="logo-twitter"
                  className="p-2 rounded-full text-2xl bg-gray-100 text-indigo-500"
                />
              </a>
              <a href="#">
                <ion-icon
                  name="logo-github"
                  className="p-2 rounded-full text-2xl bg-gray-100"
                />
              </a>
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
