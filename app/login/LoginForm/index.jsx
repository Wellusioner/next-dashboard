"use client";
import React from 'react';
import { useFormState } from 'react-dom';
import { authenticate } from 'lib/actions';

const LoginForm = () => {
  const [state, handleForm] = useFormState(authenticate, undefined);

  return (
    <form action={handleForm}>
      <div>
        <input type="text" className={"mb-5 outline-none py-3 px-5 text-lg border border-2 border-gray bg-primary"} name={"username"} placeholder={"Username"}/>
      </div>
      <div>
        <input type="text" className={"mb-5 outline-none py-3 px-5 text-lg border border-2 border-gray bg-primary"} name={"password"} placeholder={"Password"}/>
      </div>
      <button className={"bg-gray bg-opacity-80 hover:bg-opacity-100 w-full px-4 py-3 rounded-md"}>Login</button>
      {
        state && <div className={"text-center pt-2"}>{state}</div>
      }
    </form>
  );
};

export default LoginForm;