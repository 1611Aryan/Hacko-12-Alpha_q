import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import DecideToEat from "./components/DecideToEat";
import Menu from "./components/Menu";
import RequestService from "./components/RequestService";
import Attendance from "./components/Attendance";

import Login from "./components/login";
import useLocalStorage from "./Hooks/useLocalStorage";
import AdminPanel from "./components/Admin/AdminPanel";
import MessStatus from "./components/Admin/MessStatus";
import AttendanceAdmin from "./components/Admin/AttendanceAdmin";
import Complaints from "./components/Admin/Complaints";

import Students from "./components/Admin/Students";
import Staff from "./components/Admin/Staff";
import Hungry from "./components/Hungry";
import Laundry from "./components/Laundry";

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
          />
          <SideBar
            user={user}
            sideBarStatus={sideBarStatus}
            setSideBarStatus={setSideBarStatus}
            setLogin={setLogin}
            setUser={setUser}
          />
          <Switch>
            <Route path="/" exact>
              <Home user={user} />
            </Route>
            <Route path="/hunger" exact>
              <Hungry />
            </Route>
            <Route path="/choose" exact>
              <DecideToEat setUser={setUser} user={user} />
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
            <Route path="/laundry" exact>
              <Laundry />
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
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
