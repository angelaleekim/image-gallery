export async function sendPostRequest(url, payload) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log(response.status);

    if (response.status === 200) {
      const data = await response.json();
      console.log("Authentication Token:", data.token);
      return {
        type: "success",
        message: "You have successfully logged in!",
        token: data.token,
      };
    } else if (response.status === 201) {
      const data = await response.json();
      console.log("Authentication Token:", data.token);
      return {
        type: "success",
        message: "You have successfully registered!",
        token: data.token,
      };
    } else if (response.status === 400) {
      return {
        type: "error",
        message: "Missing username or password.",
      };
    } else if (response.status === 401) {
      return {
        type: "error",
        message: "Incorrect username or password.",
      };
    } else if (response.status === 500) {
      return {
        type: "error",
        message: "Server error. Please try again later.",
      };
    }

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // Check if the response body is empty
    const text = await response.text();
    return text ? JSON.parse(text) : {};
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    throw error;
  }
}
