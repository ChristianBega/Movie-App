import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./reset.scss";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient();
import { UserProvider } from "./contexts/user.context.jsx";
import { AuthProvider } from "./contexts/authentication.context.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import { RecommendationProvider } from "./contexts/recommendations.context.jsx";
import { FavoritesProvider } from "./contexts/favorites.context.jsx";

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
