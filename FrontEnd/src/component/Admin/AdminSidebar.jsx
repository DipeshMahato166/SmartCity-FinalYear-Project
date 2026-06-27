import { FaSignOutAlt, FaUser, FaCalendarAlt, FaExclamationTriangle, FaExternalLinkSquareAlt  } from "react-icons/fa"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { MdApartment } from "react-icons/md";


const AdminSidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate("/")
    }

  return (
    <div className="p-6">
        <div className="mb-4">
            <Link to={"/admin"} className="text-2xl font-medium">
                Smart City
            </Link>
        </div>
        <h2 className="text-xl  font-medium mb-6">Admin Dashboard</h2>

        <nav className="flex flex-col space-y-2">
            <NavLink to={"/admin/users"} className={({isActive}) => isActive ? "bg-gray-700 text-white hover:bg-gray-700 py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"} >
                <FaUser />
                <span>Users</span>
            </NavLink> 
            <NavLink to={"/admin/Services"} className={({isActive}) => isActive ? "bg-gray-700 text-white hover:bg-gray-700 py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"} >
                <HiMiniSquares2X2 />
                <span>Services/Notices</span>
            </NavLink> 
            <NavLink to={"/admin/events"} className={({isActive}) => isActive ? "bg-gray-700 text-white hover:bg-gray-700 py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"} >
                <FaCalendarAlt />
                <span>Events</span>
            </NavLink> 
            <NavLink to={"/admin/complaints"} className={({isActive}) => isActive ? "bg-gray-700 text-white hover:bg-gray-700 py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"} >
                <FaExclamationTriangle />
                <span>Complaints</span>
            </NavLink> 
            <NavLink to={"/admin/departments"} className={({isActive}) => isActive ? "bg-gray-700 text-white hover:bg-gray-700 py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"} >
                <MdApartment />
                <span>Departments</span>
            </NavLink> 
            <NavLink to={"/"} className={({isActive}) => isActive ? "bg-gray-700 text-white hover:bg-gray-700 py-3 px-4 rounded flex items-center space-x-2" : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"} >
                <FaExternalLinkSquareAlt />
                <span>Return Website</span>
            </NavLink> 
        </nav>

        <div className="mt-6">
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 px-4 items-center flex rounded justify-center space-x-2 cursor-pointer" onClick={handleLogout} >
                <FaSignOutAlt />
                <span>Logout</span>
            </button>
        </div>
    </div>
  )
}

export default AdminSidebar
