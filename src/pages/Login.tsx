
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthModal } from "@/components/modals/AuthModal";

const Login = () => {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      navigate("/tasks");
    }
  }, [navigate]);

  const handleLoginSuccess = (token: string) => {
    sessionStorage.setItem("token", token);
    navigate("/tasks");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSuccess={handleLoginSuccess}
      />
    </div>
  );
};

export default Login;
