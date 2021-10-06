import { NavLink, withRouter } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import { FaUserFriends } from "react-icons/fa"
import { FaUserPlus } from "react-icons/fa"
import { RiUserStarFill} from "react-icons/ri"



function Navigation() {
    return (
        <nav>
            <ul className="p-4 w-full text-lg font-semibold ">

                <li className="w-full my-4">
                    <NavLink className="inline-flex items-center px-2 " to="/" activeClassName="ActiveNav" exact={true} ><FaHome className="mr-2"/>Home</NavLink>
                </li>

                <li className="w-full my-4">
                    <NavLink className="inline-flex items-center  px-2 " to="/contactlist" activeClassName="ActiveNav"  > <FaUserFriends className="mr-2" />Contact List</NavLink>
                </li>

                <li className="w-full my-4  ">
                    <NavLink className="inline-flex items-center  px-2 " to="/add" activeClassName="ActiveNav"  ><FaUserPlus className="mr-2" />Add Contact</NavLink>
                </li>

                <li className="w-full my-4  ">
                    <NavLink className="inline-flex items-center  px-2 " to="/myfavourites" activeClassName="ActiveNav"  > <RiUserStarFill className="mr-2" />My Favourites</NavLink>
                </li>

            </ul>
        </nav>
    )
}

export default withRouter(Navigation)
