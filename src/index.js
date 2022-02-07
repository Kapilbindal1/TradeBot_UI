import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsersView from "./usersView";
import TransactionsList from "./usersView/TransactionsList";
import UsersList from "./usersView/UsersList";
import LogsList from "./usersView/LogsList";

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="dev-eazptihx.us.auth0.com"
      clientId="Pp1zfgYrkuRxQzCbp5gyuILqs6qw49w9"
      redirectUri={window.location.origin}
    >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<UsersView />} />
        <Route path="/transactions/:user" element={<UsersView />} />
        <Route path="/logs/:user" element={<LogsList />} />
        {/* <Route path="/transactions/:username" element={} /> */}
      </Routes>
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
