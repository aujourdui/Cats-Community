import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";
import ChatPage from "../components/ChatPage";
// import FavoritePage from "../components/FavoritePage";
// import ProfilePage from "../components/ProfilePage";
import NotFoundPage from "../components/NotFoundPage";
import { useStateValue } from "../components/StateProvider";
import Sidebar from "../components/Sidebar";
import MessageRouter from "./MessageRouter";

const AppRouter = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div>
      {/* {!user ? ( */}
      {/* <LoginPage /> */}
      {/* ) : ( */}
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={LoginPage} exact={true} />
            <Route path="/home" component={HomePage} />
            <Route path="/chat" component={ChatPage} exact={true} />
            {/* <Route path="/message" component={MessagePage} exact={true} />
            <Sidebar /> */}
            {/* <Route path="/rooms/:roomId" component={MessagePage} exact={true}> */}
            {/* <Sidebar /> */}
            {/* </Route> */}
            {/* <Route path="/favorite" component={FavoritePage} /> */}
            {/* <Route path="/profile" component={ProfilePage} /> */}
            <Route component={NotFoundPage} />
          </Switch>
        </BrowserRouter>
      </div>
      {/* ) */}
      {/* } */}
    </div>
  );
};

export default AppRouter;
