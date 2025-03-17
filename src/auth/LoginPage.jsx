import React from "react";
import { Link } from "react-router";
import { UsernamePasswordForm } from "./UsernamePasswordForm";
import { sendPostRequest } from "./sendPostRequest";
import { useNavigate } from "react-router";

export function LoginPage({ onLoginSuccess }) {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const response = await sendPostRequest("/auth/login", {
        username,
        password,
      });
      if (response.type === "success") {
        onLoginSuccess(response.token);
      }
      return response;
    } catch (error) {
      return {
        type: "error",
        message: "Server error. Please try again later.",
      };
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <UsernamePasswordForm onSubmit={handleLogin} />
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
}
