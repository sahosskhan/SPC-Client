import { useContext} from "react";
import { AuthContext } from "../Auth/AuthProvider";
import useUserData from "../Hooks/useUserData";

const Navbar = () => {
  const { user, logOut  } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut();
  };
  const {userList}=useUserData();
  const FilterUserList = userList?.filter(item => item.email === user?.email);
  const roleFilter = FilterUserList.map(user => user.role);
  console.log(roleFilter);
  return (
    <div>
<div className="navbar bg-sky-900">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-sky-900 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
        <details>
          <summary className="text-white ">Club</summary>
          <ul className="p-2 rounded-lg">
            <li className="text-white hover:bg-black rounded-lg"><a>About</a></li>
            <li className="text-white hover:bg-black rounded-lg"><a>News</a></li>
            <li className="text-white hover:bg-black rounded-lg"><a>Standings</a></li>
            <li className="text-white hover:bg-black rounded-lg"><a>Results</a></li>
            <li className="text-white hover:bg-black rounded-lg"><a>Schedule</a></li>
            <li className="text-white hover:bg-black rounded-lg"><a>Photos</a></li>
          </ul>
        </details>
      </li>
      <li className="text-white hover:bg-black rounded-lg"><a>Team</a></li>
        <li className="text-white hover:bg-black rounded-lg"><a>Reels</a></li>
        <li className="text-white hover:bg-black rounded-lg"><a>Resource</a></li>
        <li className="text-white hover:bg-black rounded-lg"><a>Shop</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">
        <img className="h-10" src="logo.png" alt="" />
    </a>
    <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
        <details>
          <summary className="text-white">Club</summary>
          <ul className="p-2 bg-sky-900 rounded-lg ">
            <li className="text-white hover:bg-black rounded-lg"><a>About</a></li>
            <li className="text-white hover:bg-black rounded-lg"><a>News</a></li>
            <li className="text-white hover:bg-black rounded-lg"><a>Standings</a></li>
            <li className="text-white hover:bg-black rounded-lg"><a>Results</a></li>
            <li className="text-white hover:bg-black rounded-lg"><a>Schedule</a></li>
            <li className="text-white hover:bg-black rounded-lg"><a>Photos</a></li>
          </ul>
        </details>
      </li>
      <li className="text-white hover:bg-black rounded-lg"><a>Team</a></li>
        <li className="text-white hover:bg-black rounded-lg"><a>Reels</a></li>
        <li className="text-white hover:bg-black rounded-lg"><a>Resource</a></li>
        <li className="text-white hover:bg-black rounded-lg"><a>Shop</a></li>
    </ul>
  </div>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-208 rounded-full">
                    {
                        user? (
                          <img
                            alt="Tailwind CSS Navbar component"
                            src={user?.photoURL}
                          />
                        ) : (
                          <img
                            alt="Tailwind CSS Navbar component"
                            src="man.png"
                          />
                        )
                    }
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
                {
                    user?<>
                    <li className="text-white hover:bg-black rounded-box">
                  <a className="justify-between">
                    Profile
                    <span className="badge badge-secondary">New</span>
                  </a>
                </li>

{
  roleFilter=="admin"?<>
  <li>
        <details>
          <summary className="text-white">Add</summary>
          <ul className="p-2 bg-sky-900 rounded-lg ">
          <li className="text-white hover:bg-black rounded-box">
                  <a >Add Player</a>
                </li>
                <li className="text-white hover:bg-black rounded-box">
                  <a >Add Resource</a>
                </li>
                <li className="text-white hover:bg-black rounded-box">
                  <a >Add Reels</a>
                </li>
                <li className="text-white hover:bg-black rounded-box">
                  <a >Add News</a>
                </li>
          </ul>
        </details>
      </li>
  
  </>
  :<>
      <li className="text-white hover:bg-black rounded-box">
                  <a >My Cart</a>
                </li>
  </>
}

                <li onClick={handleSignOut} className="text-white hover:bg-black rounded-box">
                  <a >Logout</a>
                </li>
                    </>

                    :<>
                        
                <li className="text-white hover:bg-black rounded-box">
                  <a href="/register">Register</a>
                </li>
                <li className="text-white hover:bg-black rounded-box">
                  <a href="/login">Login</a>
                </li>
                    </>
                }
            
           
              </ul>
            </div>
  </div>
</div>
    </div>
  );
};

export default Navbar;
