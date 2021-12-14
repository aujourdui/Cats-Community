import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";
import ChatPage from "../components/chat/ChatPage";
// import FavoritePage from "../components/FavoritePage";
// import ProfilePage from "../components/ProfilePage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={LoginPage} exact={true} />
          <Route path="/home" component={HomePage} />
          <Route path="/chat" component={ChatPage} />
          {/* <Route path="/favorite" component={FavoritePage} /> */}
          {/* <Route path="/profile" component={ProfilePage} /> */}
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
