import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const onChangeData = (e) => {
    setEmail(e.target.value);
  };

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center mx-auto">
        {/* image */}
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 px-6 py-12 max-w-6xl">
          <img
            src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
            alt="key"
            className="w-full rounded-xl"
          />
        </div>

        {/* login form */}
        <div className="w-[90%] md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className="mb-6 w-full form-input px-4 py-2 text-xl 
              text-gray-700 bg-white border-gray-300 rounded 
              transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={onChangeData}
              placeholder="Email Address"
            />

            <div
              className="flex justify-between items-center 
            whitespace-nowrap text-xs sm:text-lg"
            >
              <p>
                Have an account?{" "}
                <Link
                  to="/sign-in"
                  className="text-red-500 hover:text-red-600 transition duration-300 ease-in-out"
                >
                  Sign In
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
                >
                  Sign In Instead
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-400 
          text-white px-7 py-2 font-semibold rounded shadow-md 
          mt-3 hover:bg-blue-600"
            >
              SEND RESET PASSWORD
            </button>
            <div className="flex items-center  my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
