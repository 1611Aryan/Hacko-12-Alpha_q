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
import AttendanceAdmin from "./components/Admin/AttendanceAdmin";
import Complaints from "./components/Admin/Complaints";

import Students from "./components/Admin/Students";
import Staff from "./components/Admin/Staff";
import Error from "./components/Error";
import Slot from "./components/Slot";
import Notifications from "./components/Notifications";

function App() {
  //state
  const [sideBarStatus, setSideBarStatus] = useState(false);
  const [notifStatus, setNotifStatus] = useState(false);
  const [login, setLogin] = useLocalStorage("login", {
    status: false,
    access: "none",
  });
  const [user, setUser] = useLocalStorage("user", null);

  return (
    <div className="App">
      {!login.status ? (
        <Login setLogin={setLogin} setUser={setUser} />
      ) : (
        <>
          <Nav
            sideBarStatus={sideBarStatus}
            setSideBarStatus={setSideBarStatus}
            setLogin={setLogin}
            user={user}
            setUser={setUser}
            setNotifStatus={setNotifStatus}
          />
          <SideBar
            user={user}
            sideBarStatus={sideBarStatus}
            setSideBarStatus={setSideBarStatus}
            setLogin={setLogin}
            setUser={setUser}
          />

          <Notifications
            notifStatus={notifStatus}
            setNotifStatus={setNotifStatus}
          />
          <Switch>
            <Route path="/" exact>
              <Home user={user} />
            </Route>
            <Route path="/slot" exact>
              <Slot />
            </Route>

            <Route path="/menu" exact>
              <Menu />
            </Route>
            <Route path="/request-service" exact>
              <RequestService user={user} />
            </Route>
            <Route path="/attendance" exact>
              <Attendance />
            </Route>

            <Route path="/admin" exact>
              <AdminPanel login={login} setLogin={setLogin} setUser={setUser} />
            </Route>
            <Route path="/admin/mess" exact>
              <MessStatus />
            </Route>
            <Route path="/admin/attendance" exact>
              <AttendanceAdmin />
            </Route>
            <Route path="/admin/complaints" exact>
              <Complaints />
            </Route>
            <Route path="/admin/students" exact>
              <Students />
            </Route>
            <Route path="/admin/staff" exact>
              <Staff />
            </Route>
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
