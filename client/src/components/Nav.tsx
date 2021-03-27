import styled from "styled-components";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBuilding, faBell } from "@fortawesome/free-solid-svg-icons";
import placeholderImage from "./../img/placeholder.png";

interface NavInterface {
  sideBarStatus: boolean;
  setSideBarStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setLogin: any;
  user: {
    name: string;
    rollNumber: string;
    year: string;
    hostel: string;
    password: string;
    access: string;
  } | null;
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
      rollNumber: string;
      year: string;
      hostel: string;
      password: string;
      access: string;
    } | null>
  >;
}

const Nav: React.FC<NavInterface> = ({
  setSideBarStatus,
  sideBarStatus,
  setLogin,
  user,
  setUser,
}) => {
  //Handlers

  const showSideBar = () => {
    setSideBarStatus(!sideBarStatus);
  };

  return (
    <StyledNav>
      <Link to={user?.access === "student" ? "/" : "/admin"}>
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
              <FontAwesomeIcon icon={faBell} />
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
  padding: clamp(0.5rem, 2vw, 1rem);
  background: rgba(34, 40, 49, 0.95);
  color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    width: 100%;
  }
  h1 {
    width: 100%;
    font-size: clamp(1.15rem, 3vw, 2rem);
  }
`;

const StyledOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: clamp(0.9rem, 2vw, 1.35rem);

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
