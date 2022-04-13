import React, { useState } from 'react';

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    const createUser = (e) => {
        e.preventDefault();
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>First Name:</label>
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                {firstName.length < 2 && firstName.length > 0? ( <p>First name must be at least 2 characters long.</p>) :  null}
                <div>
                    <label>Last Name:</label>
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                {lastName.length < 2 && lastName.length > 0? ( <p>Last name must be at least 2 characters long.</p>) :  null}
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                {email.length < 5? <p>Email must be at least 5 characters long</p> : null}
                <div>
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {password.length < 8 ? ( <p>Password must be at least 8 characters long.</p>) : null}
                <div>
                    <label>Confirm Password:</label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                {confirmPassword !== password ? <p>Passwords must matach</p> : null}
                <input type="submit" value="Create User" />
            </form>

            <div>
                <h2>Your Input:</h2>
                <label> First Name:</label>
                <p>{ firstName}</p>
                <label> Last Name:</label>
                <p>{ lastName}</p>
                <label> Email:</label>
                <p>{ email}</p>
                <label> Password: </label>
                <p>{ password}</p>
                <label> Confirm Password: </label>
                <p>{ confirmPassword}</p>
                
            </div>
        </div>
    )
};



            export default Form;