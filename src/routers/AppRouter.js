import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import UploadPage from "../components/UploadPage";
import MessagePage from "../components/MessagePage";
import MessageOnePage from "../components/messages/MessageOnePage";
import MessageTwoPage from "../components/messages/MessageTwoPage";
import MessageThreePage from "../components/messages/MessageThreePage";
import FavoritePage from "../components/FavoritePage";
import ProfilePage from "../components/ProfilePage";
import NotFoundPage from "../components/NotFoundPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        {/* <Route path="/upload" component={UploadPage} exact={true} /> */}
        <Route path="/message" component={MessagePage} exact={true} />
        <Route path="/message/1" component={MessageOnePage} />
        <Route path="/message/2" component={MessageTwoPage} />
        <Route path="/message/3" component={MessageThreePage} />
        <Route path="/favorite" component={FavoritePage} />
        <Route path="/profile" component={ProfilePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
