import { useUser } from "../Context/userProvider";
import { Route, Redirect } from "react-router-dom";

const AdminRoute: React.FC<{
  children: JSX.Element;
  path: string;
  exact: boolean;
}> = props => {
  const { user } = useUser();
  return user.access === "admin" ? (
    <Route
      path={props.path}
      exact={props.exact}
      render={() => props.children}
    />
  ) : (
    <Redirect to="/" />
  );
};
export default AdminRoute;