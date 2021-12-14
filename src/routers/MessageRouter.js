import React from "react";
import Sidebar from "../components/Sidebar";
import ChatPage from "../components/ChatPage";
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
            <Route path="/rooms/:roomId">
              <ChatPage />
            </Route>
            <Route path="/chat">
              <ChatPage />
            </Route>
          </Switch>
        </Router>
      </div>
      {/* } */}
    </div>
  );
};

export default MessageRouter;
