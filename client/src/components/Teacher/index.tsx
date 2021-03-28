import { Switch } from "react-router";
import TeacherRoute from "../../Routes/TeacherRoute";
import Error from "../Error";
import Alerts from "./Alerts";
import Assignments from "./Assignments";
import Dashboard from "./Dashboard";
import Marks from "./Marks";
import Schedule from "./Schedule";
import Students from "./Students";

const Teacher: React.FC<{ setLogin: any }> = ({ setLogin }) => {
  return (
    <Switch>
      <TeacherRoute path="/teacher" exact>
        <Dashboard setLogin={setLogin} />
      </TeacherRoute>
      <TeacherRoute path="/teacher/schedule" exact>
        <Schedule />
      </TeacherRoute>
      <TeacherRoute path="/teacher/students" exact>
        <Students />
      </TeacherRoute>
      <TeacherRoute path="/teacher/assignment" exact>
        <Assignments />
      </TeacherRoute>
      <TeacherRoute path="/teacher/addMarks" exact>
        <Marks />
      </TeacherRoute>
      <TeacherRoute path="/teacher/alert" exact>
        <Alerts />
      </TeacherRoute>
      <TeacherRoute path="/teacher">
        <Error />
      </TeacherRoute>
    </Switch>
  );
};

export default Teacher;
