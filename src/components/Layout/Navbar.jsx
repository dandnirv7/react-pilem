import { Link } from "react-router-dom";
import { initFlowbite } from "flowbite";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    initFlowbite();
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <nav className="bg-transparent border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-auto">
          <Link to="/" className="flex items-center">
            <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">
              PILEM
            </span>
          </Link>
          <div className="flex lg:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="lg:hidden text-gray-500 dark:text-gray-400  dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5 md:h-7 md:w-7"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden lg:block">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm  border border-transparent rounded-lg bg-[#272e41] focus:ring-0 focus:border-transparent text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <button
              data-collapse-toggle="navbar-search"
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 px-2 py-6 text-sm text-gray-500 rounded-lg lg:hidden focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded={isNavOpen}
            >
              <span className="sr-only">Toggle navigation</span>
              {isNavOpen ? (
                <svg
                  className="w-5 h-5 md:w-8 md:h-8"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l12 12M1 13l12-12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 md:w-8 md:h-8"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 lg:hidden">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 md:w-6 md:h-6 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm md:p-3 md:pl-12 md:text-base  border border-transparent rounded-lg bg-[#272e41] focus:ring-0 focus:border-transparent text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul className="flex flex-col p-4 mt-4 lg:space-y-0 space-y-2 font-medium border border-[#272e41] rounded-lg lg:p-0 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/tv-series"
                  className="block py-2 pl-3 pr-4 text-gray-600 hover:text-white rounded hover:bg-[#111839]  md:hover:text-white lg:hover:bg-transparent    dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  TV Series
                </Link>
              </li>
              <li>
                <Link
                  to="/movies"
                  className="block py-2 pl-3 pr-4 text-gray-600 hover:text-white rounded hover:bg-[#111839]  md:hover:text-white lg:hover:bg-transparent    dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link
                  to="/category"
                  className="block py-2 pl-3 pr-4 text-gray-600 hover:text-white rounded hover:bg-[#111839]  md:hover:text-white lg:hover:bg-transparent   dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  Category
                </Link>
              </li>
              <li>
                <Link
                  to="/upcoming"
                  className="block py-2 pl-3 pr-4 text-gray-600 hover:text-white rounded hover:bg-[#111839]  md:hover:text-white lg:hover:bg-transparent    dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  New Coming
                </Link>
              </li>
              <li>
                <Link
                  to="/popular"
                  className="block py-2 pl-3 pr-4 text-gray-600 hover:text-white rounded hover:bg-[#111839]  md:hover:text-white lg:hover:bg-transparent   dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Popular
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
