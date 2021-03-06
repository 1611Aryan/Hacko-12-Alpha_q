import styled from "styled-components";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBuilding, faBell } from "@fortawesome/free-solid-svg-icons";
import placeholderImage from "./../img/placeholder.png";
import { useUser } from "../Context/userProvider";

interface NavInterface {
  sideBarStatus: boolean;
  setSideBarStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setLogin: any;
  setNotifStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<NavInterface> = ({
  setSideBarStatus,
  sideBarStatus,
  setLogin,
  setNotifStatus,
}) => {
  //
  const { user } = useUser();

  //Handlers
  const showSideBar = () => {
    setSideBarStatus(true);
  };
  const showNotifications = () => {
    setNotifStatus(true);
  };

  return (
    <StyledNav>
      <Link to={user?.access === "student" ? "/" : "/warden"}>
        <h1>
          ThaparDaze&nbsp;
          <FontAwesomeIcon icon={faBuilding} />
        </h1>
      </Link>
      {!sideBarStatus && (
        <StyledOptions>
          <div className="profile">
            <img src={placeholderImage} alt="profile" />
            <span>{user?.name}</span>
          </div>
          {user?.access === "student" ? (
            <div className="buttons">
              <FontAwesomeIcon icon={faBell} onClick={showNotifications} />
              <FontAwesomeIcon icon={faBars} onClick={showSideBar} />
            </div>
          ) : (
            ""
          )}
        </StyledOptions>
      )}
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  z-index: 90;
  width: 100vw;
  height: var(--navBarHeight);
  padding: clamp(0.35rem, 2vw, 1rem);
  background: rgba(34, 40, 49, 0.95);
  color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
  }
  h1 {
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

const StyledOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: clamp(0.9rem, 2vw, 1.35rem);
  @media (max-width: 500px) {
    width: 50%;
  }
  svg {
    cursor: pointer;
  }
  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 10%;
    aspect-ratio: 1/1;
    object-fit: cover;
    margin-right: 1rem;
    cursor: pointer;
  }
  span {
    cursor: pointer;
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    svg + svg {
      margin-left: clamp(0.7rem, 3vw, 2rem);
    }
  }
`;

export default Nav;
