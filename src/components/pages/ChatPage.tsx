import * as React from "react";
import Sidebar from "../features/chat/Sidebar";
import Chat from "../features/chat/Chat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../common/Header";

const ChatPage = () => {
  return (
    <div>
      <Header />
      <div className="chatPage">
        <div className="chatPage__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/chat">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
