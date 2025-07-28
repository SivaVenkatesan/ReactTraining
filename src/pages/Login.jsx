import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const validateLUserLogin = (e) => {
        e.preventDefault();
        if(email === 'admin@gmail.com' && password === '123456') { 
            const userDetails = {
                email: email,
                password: password
            }
            console.log(userDetails);
            // Navigate to home page with user details
            navigate('/home', { state: { userDetails } });
            setError(''); 
        } else {
            setError('Invalid email or password');
        }
    }

    // form submit using react form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple validation
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        setError('');
        // Handle login logic here
        alert(`Logged in as: ${email}`);
        const userDetails = {
            email: email,
            password: password
        }
        console.log(userDetails);
        // Navigate to home page with user details
        navigate('/home', { state: { userDetails } });
    };

    return (
        <div className="login-container flex flex-col items-center justify-center h-[calc(100vh-200px)] bg-white">
            <form className="bg-gray-100 p-8 rounded shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                {error && <div className="mb-4 text-red-500">{error}</div>}
                <div className="mb-4">
                    <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={validateLUserLogin}>Login</button>
            </form>
        </div>
    );
}

export default Login; 