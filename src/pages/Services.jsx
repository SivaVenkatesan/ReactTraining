import React, { useState, useEffect } from 'react';


function Services() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");
    // https://dummyjson.com/posts
    // https://jsonplaceholder.typicode.com/posts
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response?.json();
            })
            .then((data) => {
                // Add a timer to simulate delay before setting users
                setLoading(true);
                setTimeout(() => {
                    if (Array.isArray(data)) {
                        setUsers(data);
                    } else {
                        setUsers([]);
                    }
                    setLoading(false);
                }, 500);

            })
            .catch((error) => {
                setLoading(false);
                setError(error?.message || 'Failed to fetch users');
            })
    }, [])

    // Filter users based on search input
    const filteredUsers = users.filter(user => {
        const searchTerm = search.toLowerCase();
        return (
            user.name.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm) ||
            user.phone.toLowerCase().includes(searchTerm) ||
            user.company.name.toLowerCase().includes(searchTerm) ||
            user.website.toLowerCase().includes(searchTerm)
        );
    });

    return (
        <>
            <h2>User List Page with API Integration</h2>
            <h2>API Integration for useEffect for API calls, error handling and Loading state management</h2>
            <div className="mb-4 mt-4">
                <input
                    type="text"
                    className="border border-gray-300 rounded px-3 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Search by name, email, phone, company, or website..."
                    value={search}
                    onChange={e => {
                        const value = e.target.value;
                        // Only update if not empty or not just whitespace
                        if (value.trim() === "" && value !== "") return;
                        setSearch(value.trimStart());
                    }}
                />
            </div>
            <table className="min-w-full divide-y divide-gray-200 mt-4 border">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Website</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">

                    {loading && (
                        <tr>
                            <td colSpan="5" className="px-6 py-4 text-center">Data is Loading...</td>
                        </tr>
                    )}
                    {error && !loading && (
                        <tr>
                            <td colSpan="5" className="px-6 py-4 text-center">Error: {error}</td>
                        </tr>
                    )}
                    {!loading && !error && filteredUsers.length === 0 && (
                        <tr>
                            <td colSpan="5" className="px-6 py-4 text-center">No users found</td>
                        </tr>
                    )}
                    {!loading && !error && filteredUsers.length > 0 && filteredUsers.map((user) => (
                        <tr key={user.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{user.company.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <a href={`http://${user.website}`} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">{user.website}</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Services;