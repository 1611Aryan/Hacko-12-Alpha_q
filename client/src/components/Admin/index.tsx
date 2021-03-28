import { Switch } from "react-router-dom";

import Dashboard from "./Dashboard";
import WardenRoute from "./../../Routes/WardenRoute";
import MessStatus from "./MessStatus";
import SlotAdmin from "./Slots";
import Complaints from "./Complaints";
import Students from "./Students";
import Alert from "./Alert";
import Error from "../Error";

const AdminPanel: React.FC<{
  setLogin: any;
}> = ({ setLogin }) => {
  return (
    <Switch>
      <WardenRoute path="/warden" exact>
        <Dashboard setLogin={setLogin} />
      </WardenRoute>
      <WardenRoute path="/warden/mess" exact>
        <MessStatus />
      </WardenRoute>
      <WardenRoute path="/warden/slots" exact>
        <SlotAdmin />
      </WardenRoute>
      <WardenRoute path="/warden/complaints" exact>
        <Complaints />
      </WardenRoute>
      <WardenRoute path="/warden/students" exact>
        <Students />
      </WardenRoute>
      <WardenRoute path="/warden/alert" exact>
        <Alert />
      </WardenRoute>
      <WardenRoute path="/warden">
        <Error />
      </WardenRoute>
    </Switch>
  );
};

export default AdminPanel;
