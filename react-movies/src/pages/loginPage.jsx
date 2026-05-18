import { useContext, useState } from "react";
import { Navigate, useLocation, Link } from "react-router";
import { AuthContext } from '../contexts/authContext';

const LoginPage = () => {
    const context = useContext(AuthContext);

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        await context.authenticate(userName, password);
    };

    let location = useLocation();

    // Set 'from' to path where browser is redirected after a successful login - either / or the protected path user requested
    const { from } = location.state ? { from: location.state.from.pathname } : { from: "/" };

    if (context.isAuthenticated === true) {
        return <Navigate to={from} />;
    }

    return (
        <>
            <h2>Login page</h2>
            <p>You must log in to view the protected pages </p>
            {context.authError && <p style={{ color: 'red' }}>Error: {context.authError}</p>}
            <input id="username" placeholder="user name" value={userName} onChange={e => {
                setUserName(e.target.value);
            }}></input><br />
            <input id="password" type="password" placeholder="password" value={password} onChange={e => {
                setPassword(e.target.value);
            }}></input><br />
            {/* Login web form  */}
            <button onClick={login}>Log in</button>
            <p>Not Registered?
                <Link to="/signup">Sign Up!</Link></p>
        </>
    );
};

export default LoginPage;
