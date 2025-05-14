import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { verifyEmail } from "../../services/apis/userService";

function VerifyEmail() {
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");

    const verify = async () => {
      if (!token) {
        navigate("/auth/verify-error");
        return;
      }

      try {
        await verifyEmail(token);
        navigate("/auth/verify-success");
      } catch (error) {
        navigate("/auth/verify-error");
      }
    };

    verify();
  }, [searchParams, navigate]);
  return <div className="text-center mt-10">...</div>;
}

export default VerifyEmail;
