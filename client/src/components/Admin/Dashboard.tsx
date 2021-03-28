import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../../Context/userProvider";

const Dashboard: React.FC<{
  setLogin: any;
}> = ({ setLogin }) => {
  //
  const { setUser } = useUser();
  const history = useHistory();

  const logout = () => {
    setLogin({
      status: false,
      access: null,
    });
    setUser(null);
    history.push("/");
  };

  return (
    <StyledDashboard>
      <StyledOption
        style={{
          background: "#FF6E6E",
        }}
      >
        <div className="overlay"></div>
        <Link to="/warden/mess">
          <span> Mess Status</span>
        </Link>
      </StyledOption>
      <StyledOption
        style={{
          background: "#B8FF5D",
        }}
      >
        <div className="overlay"></div>
        <Link to="/warden/students">
          <span> Students</span>
        </Link>
      </StyledOption>

      <StyledOption
        style={{
          background: "#48D3FF",
        }}
      >
        <div className="overlay"></div>
        <Link to="/warden/complaints">
          <span> Complaints</span>
        </Link>
      </StyledOption>
      <StyledOption
        style={{
          background: "#FFF962",
        }}
      >
        <div className="overlay"></div>
        <Link to="/warden/slots">
          <span>Slots</span>
        </Link>
      </StyledOption>
      <StyledOption
        style={{
          background: "#FFAB48",
        }}
      >
        <div className="overlay"></div>
        <Link to="/warden/alert">
          <span>Send Alerts</span>
        </Link>
      </StyledOption>
      <StyledOption
        style={{
          background: "#C173FF",
        }}
      >
        <div className="overlay"></div>
        <Link to="/" onClick={logout}>
          <span>
            Logout &nbsp;
            <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
          </span>
        </Link>
      </StyledOption>
    </StyledDashboard>
  );
};

const StyledDashboard = styled.section`
  width: 100%;
  height: calc(100vh - var(--navBarHeight));
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: linear-gradient(
    109.6deg,
    rgb(204, 228, 247) 11.2%,
    rgb(237, 246, 250) 100.2%
  );
  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
`;

const StyledOption = styled.div`
  width: calc(100% / 3);
  height: calc(100% / 2);
  font-family: "Open Sans", sans-serif;
  cursor: pointer;
  font-size: clamp(1.2rem, 3vw, 2rem);
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  position: relative;
  overflow: hidden;
  .overlay {
    z-index: 2;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &:hover {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    width: 100%;
    height: 100%;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 600px) {
    width: calc(100% / 2);
    height: calc(100% / 3);
  }
`;

export default Dashboard;
