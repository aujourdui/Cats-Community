import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "../components/pages/HomePage";
// import LoginPage from "../components/pages/LoginPage";
import ChatPage from "../components/pages/ChatPage";
import NotFoundPage from "../components/pages/NotFoundPage";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/">{LoginPage}</Route> */}
          <Route path="/">{HomePage}</Route>
          <Route path="/chat">{ChatPage}</Route>
          <Route>{NotFoundPage}</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

{
  /* <Route path="/" component={LoginPage} exact={true} /><Route/>
<Route path="/home" component={HomePage} />
<Route path="/chat" component={ChatPage} />
<Route component={NotFoundPage} /> */
}

{
  /* <Route path="/" element={<LoginPage />} />
<Route path="/home" element={<HomePage />} />
<Route path="/chat" element={<ChatPage />} />
<Route element={<NotFoundPage />} /> */
}

export default AppRouter;
