import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.scss";
import { UserProvider } from "./contexts/user.context.jsx";
import { AuthProvider } from "./contexts/authentication.context.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { RecommendationProvider } from "./contexts/recommendations.context.jsx";
// import { AuthProvider } from "./contexts/authentication.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <AuthProvider>
      <UserProvider>
        <RecommendationProvider>
          <App />
        </RecommendationProvider>
      </UserProvider>
    </AuthProvider>
  </Router>
);
