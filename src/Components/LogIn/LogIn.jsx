import React from "react";
import { FcGoogle } from "react-icons/fc";

const LogIn = () => {
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
        <button className="flex items-center rounded-md border border-blue-700 bg-blue-200 py-3 mx-auto w-[200px] justify-center text-2xl">
          <FcGoogle className="text-4xl mr-3" />
          <span className="font-bold">Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default LogIn;
