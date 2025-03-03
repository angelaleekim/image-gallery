import { Homepage } from "./Homepage.jsx";
import { AccountSettings } from "./AccountSettings.jsx";
import { ImageGallery } from "./images/ImageGallery.jsx";
import { ImageDetails } from "./images/ImageDetails.jsx";
import { Routes, Route } from "react-router";
import React from "react";
import { useState } from "react";
import { MainLayout } from "./MainLayout.jsx";
import { useImageFetching } from "./images/useImageFetching.js";

function App() {
  const [userName, setUserName] = useState("John Doe");
  const { isLoading, fetchedImages } = useImageFetching("");

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Homepage userName={userName} />} />
        <Route
          path="account"
          element={
            <AccountSettings userName={userName} setUserName={setUserName} />
          }
        />
        <Route
          path="images"
          element={
            <ImageGallery isLoading={isLoading} fetchedImages={fetchedImages} />
          }
        />
        <Route path="images/:imageId" element={<ImageDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
