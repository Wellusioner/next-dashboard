import React from 'react';

import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className={"h-screen flex items-center justify-center"}>
      <div className={"bg-secondary rounded-lg p-12"}>
        <h1 className={"font-bold text-3xl uppercase text-center mb-5"}>Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;