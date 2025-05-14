import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function VerifySuccess() {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          navigate("/auth/login");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [navigate]);

  return (
    <div className="text-center py-5">
      <h2 className="text-blue-600">Your account has been verified!</h2>
      <p className="text-sm mt-2">Redirecting to login page ... {count}s </p>
    </div>
  );
}
export default VerifySuccess;
