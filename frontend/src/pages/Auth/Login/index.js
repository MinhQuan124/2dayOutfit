import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Toast from "../../../components/Toast";
import { toast } from "../../../components/Toast";
import { EyeIcon, EyeSlashIcon } from "../../../components/Icons";
import { loginUser } from "../../../services/apis/userService";
import { useAuth } from "../../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);
  const { login } = useAuth();

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleShowHidePassword = () => {
    setIsPasswordShowed(!isPasswordShowed);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
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
      const res = await loginUser({ email, password });

      if (!res.token) {
        toast.error(res.message || "Login failed");
        return;
      }

      localStorage.setItem("token", res.token);

      const userData = res.user;
      login(userData);

      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
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
          <p className="font-medium text-[28px]">
            Enter your email to join us or sign in.
          </p>
        </div>
        {/* form */}
        <form onSubmit={handleSubmit} method="" className="">
          {/* Email input */}
          <div className="flex flex-col mb-5">
            <label for="email-input" className="text-base pb-2">
              Your Email Address
            </label>
            <input
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="email"
              name="email"
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
              name="password"
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

          <Link className="text-sm text-blue-600">Forgot password?</Link>
          <br></br>
          <input
            className="mt-5 w-full bg-blue-500 text-white rounded-full p-1 cursor-pointer hover:bg-blue-700 mb-5"
            type="submit"
            value="Login"
          ></input>
        </form>
      </div>

      {/* Link to sign up part */}
      <div className="text-[15px] mt-4">
        <span>New customers? </span>
        <Link
          to="/auth/register"
          className="text-blue-500 hover:underline font-medium"
        >
          Register now!
        </Link>
      </div>
    </div>
  );
}

export default Login;
