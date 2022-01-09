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
          <Route path="/" component={LoginPage} exact={true} />
          <Route path="/home" component={HomePage} />
          <Route path="/chat" component={ChatPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
