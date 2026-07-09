import { LuUsersRound } from "react-icons/lu";
import { Link } from "react-router-dom";
import { GrDocumentText } from "react-icons/gr";
import { FaRegClock, FaRegCheckCircle, FaChevronRight, FaCalendarAlt, FaUser } from "react-icons/fa";
import { FcDepartment } from "react-icons/fc";
import { AiFillNotification } from "react-icons/ai";


const AdminHomePage = () => {
    const complaints = [
        {
            _id: 12312,
            title: "Street Light Not Working",
            department: "Electricity",
            location: "Surunga-10, saptari",
            status: "Pending",
            date: "2082/03/11",
        },
        {
            _id: 12312,
            title: "Street Light Not Working",
            department: "Electricity",
            location: "Surunga-10, saptari",
            status: "Pending",
            date: "2082/03/11",
        },
        {
            _id: 12312,
            title: "Street Light Not Working",
            department: "Electricity",
            location: "Surunga-10, saptari",
            status: "Pending",
            date: "2082/03/11",
        },
        {
            _id: 12312,
            title: "Street Light Not Working",
            department: "Electricity",
            location: "Surunga-10, saptari",
            status: "Pending",
            date: "2082/03/11",
        },
    ]

    return (
        <div className="max-w-7xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="p-4 shadow-md rounded-lg">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                        <GrDocumentText size={22} />
                    </div>

                    <h2 className="text-xl font-semibold">Total Complaints</h2>
                    <p className="text-2xl">100</p>
                    <Link to={"/admin/complaints"} className="text-blue-500  hover:underline">
                        View all
                    </Link>

                </div>
                <div className="p-4 shadow-md rounded-lg">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                        <FaRegClock size={22} />
                    </div>

                    <h2 className="text-xl font-semibold">Pending Complaints</h2>
                    <p className="text-2xl">100</p>

                </div>
                <div className="p-4 shadow-md rounded-lg">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                        <FaRegCheckCircle size={22} />
                    </div>

                    <h2 className="text-xl font-semibold">Resolved Complaints</h2>
                    <p className="text-2xl">100</p>

                </div>
                <div className="p-4 shadow-md rounded-lg">
                    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                        <LuUsersRound size={22} />
                    </div>

                    <h2 className="text-xl font-semibold">Registered Users</h2>
                    <p className="text-2xl">100</p>

                </div>
            </div>

            <div className="flex flex-col md:flex-row mt-10 gap-5">
                {/* Recent Complaints */}
                <div className="flex-2">
                    <h2 className="text-2xl font-bold mb-4 ">Recent Complaints</h2>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-gray-500">
                            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
                                <tr>
                                    <th className="py-3 px-4">CMP id</th>
                                    <th className="py-3 px-4">Title</th>
                                    <th className="py-3 px-4">Department</th>
                                    <th className="py-3 px-4">Location</th>
                                    <th className="py-3 px-4">Status</th>
                                    <th className="py-3 px-4">Date</th>
                                    <th className="py-3 px-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {complaints.length > 0 ? (
                                    complaints.map((complaint) => (
                                        <tr key={complaint._id} className="border-b hover:bg-gray-50">
                                            <td className="p-4">
                                                #{complaint._id}
                                            </td>
                                            <td className="p-4">
                                                {complaint.title}
                                            </td>
                                            <td className="p-4">
                                                {complaint.department}
                                            </td>
                                            <td className="p-4">
                                                {complaint.location}
                                            </td>
                                            <td className="px-4">
                                                <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-2xl">{complaint.status}</span>
                                                
                                            </td>
                                            <td className="p-4">
                                                {complaint.date}
                                            </td>
                                            <td className="text-center">
                                                <button className="px-3 py-1 bg-blue-500 rounded-xl text-white cursor-pointer">View</button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="7" className="text-center p-5">
                                            No recent complaints found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4 ml-2">Quick Actions</h2>
                    <div className="overflow-x-auto flex flex-col gap-3">
                        <Link to={"departments"} className="flex items-center justify-between border-2 hover:bg-gray-100 transition-colors  border-gray-200 py-5 ml-2 rounded-xl px-3">
                            <div className="flex items-center gap-2">
                                <FcDepartment size={18} />
                                <h3 className="text-blue-500 font-medium">Add Department</h3>
                            </div>
                            <FaChevronRight />
                        </Link>
                        <Link to={"services"} className="flex items-center justify-between border-2 hover:bg-gray-100 transition-colors  border-gray-200 py-5 ml-2 rounded-xl px-3">
                            <div className="flex items-center gap-2">
                                <AiFillNotification size={18} />
                                <h3 className="text-blue-500 font-medium">Add Notice/Service</h3>
                            </div>
                            <FaChevronRight />
                        </Link>
                        <Link to={"events"} className="flex items-center justify-between border-2 hover:bg-gray-100 transition-colors  border-gray-200 py-5 ml-2 rounded-xl px-3">
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt size={18} />
                                <h3 className="text-blue-500 font-medium">Add Event</h3>
                            </div>
                            <FaChevronRight />
                        </Link>
                        <Link to={"users"} className="flex items-center justify-between border-2 hover:bg-gray-100 transition-colors  border-gray-200 py-5 ml-2 rounded-xl px-3">
                            <div className="flex items-center gap-2">
                                <FaUser size={18} />
                                <h3 className="text-blue-500 font-medium">Add User</h3>
                            </div>
                            <FaChevronRight />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHomePage
