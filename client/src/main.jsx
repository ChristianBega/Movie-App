import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.scss";
import { UserProvider } from "./contexts/user.context.jsx";
import { AuthProvider } from "./contexts/authentication.context.jsx";
import { BrowserRouter as Router } from "react-router-dom";
// import { AuthProvider } from "./contexts/authentication.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
