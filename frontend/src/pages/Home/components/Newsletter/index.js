import { Link } from "react-router-dom";

function Newsletter() {
  return (
    <div className="text-center py-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-full size-11"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        />
      </svg>

      <h2 className="font-bold">Be In The Know</h2>
      <p className="text-base mt-2 mb-4">
        Keep up to date with the latest 2dayOutfit news, including exclusive
        offers and not to be missed sale and store events.
        <br />
        Enter your email address below to opt in to email marketing.
      </p>
      <form>
        <input
          className="rounded-full"
          type="email"
          placeholder="Enter your email address"
        />
        <br />
        <button
          className="mt-5 w-44 rounded-full p-2 text-lg text-white bg-[#007a7a] hover:bg-[#4b5454]"
          type="submit"
        >
          Subscribe
        </button>
      </form>
      <p className="text-sm mt-3">
        See 2dayOutfit's{" "}
        <Link className="text-blue-500" to="#">
          Terms and Conditions
        </Link>{" "}
        and{" "}
        <Link className="text-blue-500" to="#">
          Privacy Policy
        </Link>{" "}
        to find out more.
      </p>
    </div>
  );
}

export default Newsletter;
