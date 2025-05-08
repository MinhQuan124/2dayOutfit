import { useLocation } from "react-router-dom";

function VerifyEmailNotice() {
  const { state } = useLocation();

  return (
    <div className="text-center py-10">
      <h2>Verify Your Email</h2>
      <p>
        {state?.message ||
          "A verification email has been sent to your email address."}
      </p>
      <p>Email: {state?.email}</p>
      <button
        onClick={() => {
          /* Xử lý gửi lại email */
        }}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Resend Verification Email
      </button>
    </div>
  );
}

export default VerifyEmailNotice;
