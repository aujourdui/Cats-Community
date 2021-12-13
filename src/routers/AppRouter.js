import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";
import MessagePage from "../components/MessagePage";
// import FavoritePage from "../components/FavoritePage";
// import ProfilePage from "../components/ProfilePage";
import NotFoundPage from "../components/NotFoundPage";
import { useStateValue } from "../components/StateProvider";

const AppRouter = () => {
  // const [{ user }, dispatch] = useStateValue();

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
            <Header />
            <Route path="/message" component={MessagePage} exact={true} />
            <Header />
            {/* <Route path="/favorite" component={FavoritePage} /> */}
            {/* <Route path="/profile" component={ProfilePage} /> */}
            <Route component={NotFoundPage} />
            <Header />
          </Switch>
        </BrowserRouter>
      </div>
      {/* } */}
    </div>
  );
  // );
};

export default AppRouter;
