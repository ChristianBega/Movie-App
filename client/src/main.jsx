import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.scss";
import { UserProvider } from "./contexts/user.context.jsx";
import { AuthProvider } from "./contexts/authentication.context.jsx";
// import { AuthProvider } from "./contexts/authentication.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </AuthProvider>
  </React.StrictMode>
);
