import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
import AdminHome from "./components/adminHome";
import AddProperties from "./components/addProperties";
import EditProperties from "./components/editProperties";
import Inquiries from "./components/inquiries";
import Users from "./components/user";
import SendInquiries from "./components/sampleSendInquiries";
// import ImageUpload from "./components/imageUpload.";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "false" ? <UserDetails /> : <Login />}
          />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/addproperties" element={<AddProperties />} />
          <Route path="/editproperties" element={<EditProperties />} />
          <Route path="/inquiries" element={<Inquiries />} />
          <Route path="/users" element={<Users />} />
          <Route path="/sendinquiry" element={<SendInquiries />} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
  );
}

export default App;
