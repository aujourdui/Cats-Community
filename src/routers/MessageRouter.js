import React from "react";
import Sidebar from "../components/Sidebar";
import MessagePage from "../components/MessagePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
// import Login from "./Login";

const MessageRouter = () => {
  return (
    <div className="app">
      {/* {!user ? (
        <Login />
      ) : ( */}
      <div className="app__body">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/message/rooms/:roomId">
              <MessagePage />
            </Route>
            <Route path="/message">
              <MessagePage />
            </Route>
          </Switch>
        </Router>
      </div>
      {/* } */}
    </div>
  );
};

export default MessageRouter;
