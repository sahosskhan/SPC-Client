import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClubOpen, setIsClubOpen] = useState(false);

  return (
    <div>
      <nav className="relative bg-sky-900 shadow">
        <div className="container px-6 py-3 mx-auto md:flex">
          <div className="flex items-center justify-between">
            <a href="#">
              <img
                className="w-auto h-20"
                src="logo-big.png"
                alt=""
              />
            </a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500  hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-sky-900 md:mt-0 md:p-0 md:top-0 md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between ${
              isOpen
                ? "translate-x-0 opacity-100"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col px-2 -mx-4 md:flex-row md:mx-10 md:py-0">
              <div className="relative">
                <button
                  onClick={() => setIsClubOpen(!isClubOpen)}
                  className="flex items-center px-2.5 py-2 text-white transition-colors duration-300 transform rounded-lg  hover:bg-black md:mx-2 focus:outline-none"
                >
                  Club
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                {isClubOpen && (
                  <div className="absolute left-0 w-56  mt-2 bg-sky-900 border-sky-900  rounded-md shadow-lg">
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-black "
                    >
                      News
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-black "
                    >
                      Standings
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-black "
                    >
                      Results
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-black "
                    >
                      Schedule
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-black "
                    >
                      Photos
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-white hover:bg-black "
                    >
                      Videos
                    </a>
                  </div>
                )}
              </div>
              <a
                href="#"
                className="px-2.5 py-2 text-white transition-colors duration-300 transform rounded-lg  hover:bg-black md:mx-2"
              >
                Team
              </a>

              <a
                href="#"
                className="px-2.5 py-2 text-white transition-colors duration-300 transform rounded-lg  hover:bg-black md:mx-2"
              >
                About
              </a>
              <a
                href="#"
                className="px-2.5 py-2 text-white transition-colors duration-300 transform rounded-lg  hover:bg-black md:mx-2"
              >
                Reels
              </a>
              <a
                href="#"
                className="px-2.5 py-2 text-white transition-colors duration-300 transform rounded-lg  hover:bg-black md:mx-2"
              >
                Shop
              </a>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-208 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="man.png"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-sky-900 rounded-box z-[1] mt-3 w-52 p-2 shadow "
              >
                <li className="text-white hover:bg-black rounded-box">
                  <a className="justify-between">
                    Profile
                    <span className="badge badge-secondary">New</span>
                  </a>
                </li>
                <li className="text-white hover:bg-black rounded-box">
                  <a>Logout</a>
                </li>
                <li className="text-white hover:bg-black rounded-box">
                  <a href="/register">Register</a>
                </li>
                <li className="text-white hover:bg-black rounded-box">
                  <a>Login</a>
                </li>
           
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
