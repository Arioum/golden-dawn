// import { useState } from "react";

const Login = ({ username, setUsername, password, setPassword }) => {
  console.log(username);
  
  return (
    <div className=''>
      <h2>Enter your Credentials </h2>
      <form className=''>
        <div className=''>
          <label htmlFor=''>Username</label>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className=''>
          <label htmlFor=''>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
