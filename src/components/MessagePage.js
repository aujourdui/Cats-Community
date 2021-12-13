import React from "react";
import Sidebar from "../components/Sidebar";
import Message from "./Message";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Header from "../components/Header";
// import Login from "./Login";
import { useStateValue } from "../components/StateProvider";
import Header from "./Header";

const MessagePage = () => {
  // const [{ user }, dispatch] = useStateValue();
  return (
    <div>
      <Header />
      <div className="messagePage">
        <div className="messagePage__body">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Message />
              </Route>
              <Route path="/message">
                <Message />
              </Route>
            </Switch>
          </Router>
        </div>
        {/* } */}
      </div>
    </div>
  );
};

export default MessagePage;
