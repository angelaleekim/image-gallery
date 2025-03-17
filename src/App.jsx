import { Homepage } from "./Homepage.jsx";
import { AccountSettings } from "./AccountSettings.jsx";
import { ImageGallery } from "./images/ImageGallery.jsx";
import { ImageDetails } from "./images/ImageDetails.jsx";
import { RegisterPage } from "./auth/RegisterPage.jsx";
import { LoginPage } from "./auth/LoginPage.jsx";
import { Routes, Route } from "react-router";
import React from "react";
import { useState } from "react";
import { MainLayout } from "./MainLayout.jsx";
import { useImageFetching } from "./images/useImageFetching.js";
import { useNavigate } from "react-router";
import { ProtectedRoute } from "./auth/ProtectedRoute";

function App() {
  const [userName, setUserName] = useState("Angela");
  const [authToken, setAuthToken] = useState(null);
  const { isLoading, fetchedImages } = useImageFetching("", authToken);
  const navigate = useNavigate();

  const handleLoginSuccess = (token) => {
    setAuthToken(token);
    navigate("/");
  };

  const handleRegisterSuccess = (token) => {
    setAuthToken(token);
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          path="/"
          element={
            <ProtectedRoute authToken={authToken}>
              <Homepage userName={userName} />
            </ProtectedRoute>
          }
        />
        <Route
          path="account"
          element={
            <ProtectedRoute authToken={authToken}>
              <AccountSettings userName={userName} setUserName={setUserName} />
            </ProtectedRoute>
          }
        />
        <Route
          path="images"
          element={
            <ProtectedRoute authToken={authToken}>
              <ImageGallery
                isLoading={isLoading}
                fetchedImages={fetchedImages}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="images/:imageId"
          element={
            <ProtectedRoute authToken={authToken}>
              <ImageDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="register"
          element={<RegisterPage onRegisterSuccess={handleRegisterSuccess} />}
        />
        <Route
          path="login"
          element={<LoginPage onLoginSuccess={handleLoginSuccess} />}
        />
      </Route>
    </Routes>
  );
}

export default App;
