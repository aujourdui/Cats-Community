import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../components/pages/HomePage";
import LoginPage from "../components/pages/LoginPage";
import ChatPage from "../components/pages/ChatPage";
import NotFoundPage from "../components/pages/NotFoundPage";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route element={<NotFoundPage />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
