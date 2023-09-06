import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.scss";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { UserProvider } from "./contexts/user.context.jsx";
import { AuthProvider } from "./contexts/authentication.context.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { RecommendationProvider } from "./contexts/recommendations.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <AuthProvider>
        <UserProvider>
          <RecommendationProvider>
            <App />
          </RecommendationProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
    <ReactQueryDevtools />
  </QueryClientProvider>
);
