import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Toast from "../../../components/Toast";
import { toast } from "../../../components/Toast";
import { EyeIcon, EyeSlashIcon } from "../../../components/Icons";
import { registerUser } from "../../../services/apis/userService";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);

  const navigate = useNavigate();

  const handleOnChangeName = (e) => {
    const value = e.target.value;
    setName(value);
  };

  const handleOnChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleOnChangeEmail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleShowHidePassword = () => {
    setIsPasswordShowed(!isPasswordShowed);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleRegisterUser = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error("Please fill all info");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please input valid email");
      return;
    }

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }
    try {
      await registerUser({ name, email, password });
      navigate("/auth/verify-email-notice", {
        state: {
          email,
          message: "We've sent a verification email. Please check your email.",
        },
      });
    } catch (error) {
      toast.error("Register failed!");
    }
  };

  return (
    <div className="w-full max-w-lg h-auto px-9 mx-auto mt-5">
      <Toast />
      {/* Sign in part */}
      <div>
        <div className="mb-5">
          <Link to="/" className="font-bold text-4xl">
            2DAYOUTFIT
          </Link>
          <p className="font-medium text-[25px]">
            Now let's make you a 2DAYOUTFIT Member.
          </p>
        </div>
        <form onSubmit={handleRegisterUser} method="" className="">
          <div className="flex flex-col mb-5">
            <label for="name-input" className="text-base pb-2">
              Full Name
            </label>
            <input
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="text"
              id="name-input"
              required
              value={name}
              onChange={handleOnChangeName}
            ></input>
          </div>

          <div className="flex flex-col mb-5">
            <label for="email-input" className="text-base pb-2">
              Email
            </label>
            <input
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="text"
              id="email-input"
              required
              value={email}
              onChange={handleOnChangeEmail}
            ></input>
          </div>

          <div className="relative flex flex-col mt-2">
            <label for="password-input" className="text-base pb-2">
              Your Password
            </label>
            <input
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type={isPasswordShowed ? "text" : "password"}
              id="password-input"
              required
              value={password}
              onChange={handleOnChangePassword}
            ></input>

            {/* Show/ hide password */}
            <div
              className="absolute flex right-0 bottom-2 px-2 cursor-pointer"
              onClick={handleShowHidePassword}
            >
              <span>{isPasswordShowed ? <EyeIcon /> : <EyeSlashIcon />}</span>
            </div>
          </div>

          <br></br>

          {/* Term part */}
          <p className="text-sm mb-3">
            By clicking 'Create Account' you agree to the{" "}
            <Link to="#" className="text-blue-600 underline">
              Terms and Conditions
            </Link>{" "}
            and{" "}
            <Link to="#" className="text-blue-600 underline">
              Privacy and Cookie Policy
            </Link>
            .
          </p>

          <input
            className="mt-5 w-full bg-blue-500 text-white rounded-full p-1 cursor-pointer hover:bg-blue-700 mb-5"
            type="submit"
            value="Create Account"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default Register;
