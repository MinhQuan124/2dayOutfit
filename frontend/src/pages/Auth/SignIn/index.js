import { Link } from "react-router-dom";
import { EyeIcon, EyeSlashIcon, GoogleIcon } from "../../../components/Icons";
import { useState } from "react";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShowed, setIsPasswordShowed] = useState(false);

  const handleOnChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleShowHidePassword = () => {
    setIsPasswordShowed(!isPasswordShowed);
  };

  return (
    <div className="w-full max-w-lg h-auto px-9 mx-auto mt-5">
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
        {/* Email input */}
        <form method="" className="">
          <div className="flex flex-col mb-5">
            <label for="username-input" className="text-base pb-2">
              Your Username
            </label>
            <input
              className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="text"
              id="username-input"
              required
              value={username}
              onChange={handleOnChangeUsername}
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

          <Link className="text-sm text-blue-600">Forgot password?</Link>
          <br></br>
          <input
            className="mt-5 w-full bg-blue-500 text-white rounded-full p-1 cursor-pointer hover:bg-blue-700 mb-5"
            type="submit"
            value="Sign in"
          ></input>
        </form>
        <div className="text-center">
          <p className="text-lg">Or Login With:</p>
          <Link className="flex justify-center mt-2">
            <GoogleIcon />
          </Link>
        </div>
      </div>

      {/* Link to sign up part */}
      <div className="text-[15px] mt-4">
        <span>New customers? </span>
        <Link
          to="/signup"
          className="text-blue-500 hover:underline font-medium"
        >
          Sign up now!
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
