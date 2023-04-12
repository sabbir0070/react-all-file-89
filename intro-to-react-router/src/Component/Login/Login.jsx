import React from 'react';

const Login = () => {
    return (
        <div>
           <h3>This is login option </h3>
           <label htmlFor="email">
            Email:
           <input type="email" id='email' placeholder='Enter your email' />
           </label>
           <br/>
           <label htmlFor="pass">
            password:
            <input type="password" placeholder='Enter your password' id='pass' />
           </label>
        </div>
    );
};

export default Login;