import { useUser } from "../Context/userProvider";
import { Route, Redirect } from "react-router-dom";

const TeacherRoute: React.FC<{
  children: JSX.Element;
  path: string;
  exact?: boolean;
}> = props => {
  const { user } = useUser();
  return user ? (
    user.access === "teacher" ? (
      <Route
        path={props.path}
        exact={props.exact}
        render={() => props.children}
      />
    ) : user.access === "warden" ? (
      <Redirect to="/warden" />
    ) : (
      <Redirect to="/" />
    )
  ) : (
    <Redirect to="/" />
  );
};

export default TeacherRoute;
