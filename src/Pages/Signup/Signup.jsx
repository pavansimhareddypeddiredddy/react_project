
// import React, { useState } from 'react';
// // import './Signup.css'; // Import the CSS file for styling

// function Signup() {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch('http://localhost/php/signup.php', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ username, password, email })
//         });
//         const data = await response.json();
//         setMessage(data.message);
//     };

//     return (
//         <div className="auth-container">
//             <h2>Signup</h2>
//             <form onSubmit={handleSubmit} className="auth-form">
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Signup</button>
//             </form>
//             {message && <p className="message">{message}</p>}
//         </div>
//     );
// }

// export default Signup;

import React, { useState } from 'react';
// import './Auth.css'; // Import the CSS file for styling

function Signup() {
    const [isSignup, setIsSignup] = useState(true); // State to toggle between Signup and Login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = isSignup ? 'http://localhost/php/signup.php' : 'http://localhost/php/login.php'; // URL based on form type
        const body = isSignup ? { username, password, email } : { username, password }; // Body based on form type
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        });
        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <div className="auth-container">
            <h2>{isSignup ? 'Signup' : 'Login'}</h2>
            <form onSubmit={handleSubmit} className="auth-form">
                {isSignup && (
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                )}
                {!isSignup && (
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                )}
                {isSignup && (
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                )}
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isSignup ? 'Signup' : 'Login'}</button>
            </form>
            {message && <p className="message">{message}</p>}
            <p className="toggle-link" onClick={() => setIsSignup(!isSignup)}>
                {isSignup ? 'Already have an account? Login' : 'Need an account? Signup'}
            </p>
        </div>
    );
}

export default Signup;
