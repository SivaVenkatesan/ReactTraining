function UserList() {
  const userListData = [
    {
      id: 1,
      firstName: "Siva",
      lastName: "Venkatesan",
      email: "siva.venkatesan@example.com",
      phone: "+91-9876543210",
      role: "Software Engineer",
      teamName: "Team Alpha",
    },
    {
      id: 2,
      firstName: "Priya",
      lastName: "Sharma",
      email: "priya.sharma@example.com",
      phone: "+91-9123456789",
      role: "Product Manager",
      teamName: "Team Beta",
    },
    {
      id: 3,
      firstName: "Rahul",
      lastName: "Mehta",
      email: "rahul.mehta@example.com",
      phone: "+91-9988776655",
      role: "UX Designer",
      teamName: "Creative Hub",
    },
    {
      id: 4,
      firstName: "Anjali",
      lastName: "Kumar",
      email: "anjali.kumar@example.com",
      phone: "+91-8855223344",
      role: "QA Engineer",
      teamName: "Quality Team",
    },
    {
      id: 5,
      firstName: "Ravi",
      lastName: "Joshi",
      email: "ravi.joshi@example.com",
      phone: "+91-9001122334",
      role: "Team Lead",
      teamName: "Team Delta",
    },
  ];
  return (
    <div className="user-list-container container mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="user-list mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">User Details</h2>
        <p className="text-gray-600">Total Users: {userListData?.length}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Role</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Team Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {userListData.map((user, idx) => (
              <tr key={idx} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">{user.firstName} {user.lastName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">{user.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-900">{user.teamName}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200" onClick={() => alert(`User ID: ${user.id}`)}>
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserList;
