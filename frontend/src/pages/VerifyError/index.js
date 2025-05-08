import { useSearchParams, useNavigate } from "react-router-dom";

function VerifyError() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const reason = searchParams.get("reason");

  const getErrorMessage = () => {
    switch (reason) {
      case "token_expired":
        return "Your verification is expired.";
      case "user_not_found":
        return "User not found";
      default:
        return "Invalid verification link.";
    }
  };

  return (
    <div className="text-center py-5">
      <h2 className="text-red-500 font-semibold">Verify failed!</h2>
      <p>{getErrorMessage()}</p>
      <button
        onClick={() => navigate("/auth/register")}
        className="bg-blue-700 text-white p-2 rounded-full mt-2"
      >
        Register again
      </button>
    </div>
  );
}

export default VerifyError;
