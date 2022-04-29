import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../Firebase/Firebase.init'
import { useLocation, useNavigate } from "react-router-dom";

const LogIn = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [user] = useAuthState(auth)
  const [signInWithGoogle] = useSignInWithGoogle(auth);

  let from = location.state?.from?.pathname || "/";
  if (user) {
    
    fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ email: user.email }),
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then((response) => response.json())
      .then((json) => {
      localStorage.setItem("accessToken", json.token)
      navigate(from, { replace: true })
    });
  }
  return (
    <div className="flex items-center justify-center h-[70vh]">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-10">
          You Can Sign in with
          <span className="text-blue-500"> G</span>
          <span className="text-red-400">o</span>
          <span className="text-yellow-500">o</span>
          <span className="text-blue-500">g</span>
          <span className="text-green-500">l</span>
          <span className="text-red-500">e</span>
        </h2>
        <button onClick={() => signInWithGoogle()} className="flex items-center rounded-md border border-blue-700 bg-blue-200 py-3 mx-auto w-[200px] justify-center text-2xl">
          <FcGoogle className="text-4xl mr-3" />
          <span className="font-bold">Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default LogIn;
