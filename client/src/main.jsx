import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.scss";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { UserProvider } from "./setup/contexts/user.context.jsx";
import { AuthProvider } from "./setup/contexts/authentication.context.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { RecommendationProvider } from "./setup/contexts/recommendations.context.jsx";
import { FavoritesProvider } from "./setup/contexts/favorites.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <AuthProvider>
        <UserProvider>
          <RecommendationProvider>
            <FavoritesProvider>
              <App />
            </FavoritesProvider>
          </RecommendationProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  </QueryClientProvider>
);
