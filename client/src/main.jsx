import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./tailwind.css";
import { UserProvider } from "./context/UserContext.jsx";
import { UserDataProvider } from "./context/UserDataContext.jsx";
import { SendEmailProvider } from "./context/SendEmailContext.jsx";
import { ForgetPasswordProvider } from "./context/forgetPasswordContext.jsx";
import { ResetPasswordProvider } from "./context/ResetPasswordContext.jsx";
import { UserDashboardProvider } from "./context/UserDashboardContext.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ResetPasswordProvider>
    <ForgetPasswordProvider>
      <UserDashboardProvider>
        <UserDataProvider>
          <UserProvider>
            <SendEmailProvider>
              <App />
            </SendEmailProvider>
          </UserProvider>
        </UserDataProvider>
      </UserDashboardProvider>
    </ForgetPasswordProvider>
  </ResetPasswordProvider>,
);
