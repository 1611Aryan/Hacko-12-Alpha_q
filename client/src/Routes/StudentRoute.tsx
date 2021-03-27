import { useUser } from "../Context/userProvider";
import { Route, Redirect } from "react-router-dom";

const StudentRoute: React.FC<{
  children: JSX.Element;
  path: string;
  exact: boolean;
}> = props => {
  const { user } = useUser();
  return user.access === "student" ? (
    <Route
      path={props.path}
      exact={props.exact}
      render={() => props.children}
    />
  ) : (
    <Redirect to="/" />
  );
};
export default StudentRoute;
