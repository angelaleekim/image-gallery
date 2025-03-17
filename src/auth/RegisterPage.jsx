import { UsernamePasswordForm } from "./UsernamePasswordForm";
import { sendPostRequest } from "./sendPostRequest";
import { useNavigate } from "react-router";

export function RegisterPage({ onRegisterSuccess }) {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await sendPostRequest("/auth/register", {
        username,
        password,
      });
      if (response.type === "success") {
        onRegisterSuccess(response.token);
      }
      return response;
    } catch (error) {
      return {
        type: "error",
        message: "User exists.",
      };
    }
  };

  return (
    <div className="outer-div">
      <h1>Register a New Account</h1>
      <UsernamePasswordForm onSubmit={handleRegister} />
    </div>
  );
}
