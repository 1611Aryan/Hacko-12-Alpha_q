import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Student/Home";
import SideBar from "./components/Student/SideBar";
import Menu from "./components/Student/Menu";
import RequestService from "./components/Student/RequestService";
import Attendance from "./components/Student/Attendance";

import Login from "./components/login";
import useLocalStorage from "./Hooks/useLocalStorage";
import AdminPanel from "./components/Admin/AdminPanel";
import MessStatus from "./components/Admin/MessStatus";
import SlotAdmin from "./components/Admin/Slots";
import Complaints from "./components/Admin/Complaints";

import Students from "./components/Admin/Students";
import Alert from "./components/Admin/Alert";
import Error from "./components/Error";
import Slot from "./components/Student/Slot";
import Notifications from "./components/Student/Notifications";
import AdminRoute from "./Routes/AdminRoute";
import StudentRoute from "./Routes/StudentRoute";

function App() {
  //state
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const [notifStatus, setNotifStatus] = useState(false);
  const [login, setLogin] = useLocalStorage("login", {
    status: false,
    access: "none",
  });

  return (
    <div className="App">
      {!login.status ? (
        <Login setLogin={setLogin} />
      ) : (
        <>
          <Nav
            sideBarStatus={sideBarStatus}
            setSideBarStatus={setSideBarStatus}
            setLogin={setLogin}
            setNotifStatus={setNotifStatus}
          />

          <SideBar
            sideBarStatus={sideBarStatus}
            setSideBarStatus={setSideBarStatus}
            setLogin={setLogin}
          />

          <Notifications
            notifStatus={notifStatus}
            setNotifStatus={setNotifStatus}
          />
          <Switch>
            <StudentRoute path="/" exact>
              <Home />
            </StudentRoute>
            <StudentRoute path="/slot" exact>
              <Slot />
            </StudentRoute>
            <StudentRoute path="/menu" exact>
              <Menu />
            </StudentRoute>
            <StudentRoute path="/request-service" exact>
              <RequestService />
            </StudentRoute>
            <StudentRoute path="/attendance" exact>
              <Attendance />
            </StudentRoute>
            {/*Admin Routes*/}
            <AdminRoute path="/admin" exact>
              <AdminPanel setLogin={setLogin} />
            </AdminRoute>
            <AdminRoute path="/admin/mess" exact>
              <MessStatus />
            </AdminRoute>
            <AdminRoute path="/admin/slots" exact>
              <SlotAdmin />
            </AdminRoute>
            <AdminRoute path="/admin/complaints" exact>
              <Complaints />
            </AdminRoute>
            <AdminRoute path="/admin/students" exact>
              <Students />
            </AdminRoute>
            <AdminRoute path="/admin/alert" exact>
              <Alert />
            </AdminRoute>
            <Route path="/">
              <Error />
            </Route>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
