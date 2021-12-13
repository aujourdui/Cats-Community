import React from "react";
import Sidebar from "../components/Sidebar";
import MessagePage from "../components/MessagePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
// import Login from "./Login";
import { useStateValue } from "../components/StateProvider";

const MessageRouter = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {/* {!user ? (
        <Login />
      ) : ( */}
      <div className="app__body">
        <Router>
          <Header user={user} />
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
