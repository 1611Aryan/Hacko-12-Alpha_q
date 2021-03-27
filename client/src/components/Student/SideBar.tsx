import styled from "styled-components";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import placeholderImage from "./../../img/placeholder.png";
import { useUser } from "../../Context/userProvider";

interface SideBarInterface {
  sideBarStatus: boolean;
  setSideBarStatus: React.Dispatch<React.SetStateAction<boolean>>;

  setLogin: any;
}

const SideBar: React.FC<SideBarInterface> = ({
  setSideBarStatus,
  sideBarStatus,
  setLogin,
}) => {
  //
  const { user, setUser } = useUser();

  const logout = () => {
    setLogin({
      status: false,
      access: null,
    });
    setUser(null);
    window.history.pushState({}, "", "/");
    window.location.reload();
  };

  const HideSideBar = () => {
    setSideBarStatus(!sideBarStatus);
  };
  return sideBarStatus ? (
    <StyledSideBar>
      <StyledHeader>
        <div className="profile">
          <img src={placeholderImage} alt="profile" />
          <span>{user?.name}</span>
        </div>
        <FontAwesomeIcon icon={faTimes} onClick={HideSideBar} />
      </StyledHeader>
      <StyledOtherLinks>
        <ul>
          {user && user.access === "student" ? (
            <>
              <li onClick={HideSideBar}>
                <Link to="/slot">Book Time Slot</Link>
              </li>
              <li onClick={HideSideBar}>
                <Link to="/menu"> View Menu</Link>
              </li>
              <li onClick={HideSideBar}>
                <Link to="/request-service"> Request for cleaning</Link>
              </li>
              <li onClick={HideSideBar}>
                <Link to="/attendance">Attendance</Link>
              </li>
            </>
          ) : (
            ""
          )}

          <li
            onClick={() => {
              HideSideBar();
              logout();
            }}
          >
            Logout <FontAwesomeIcon icon={faSignOutAlt} />
          </li>
        </ul>
      </StyledOtherLinks>
      <StyledFooter>
        <p>CareTaker: +91 1234567890</p>
        <p>Warden: +91 0987654321</p>
      </StyledFooter>
    </StyledSideBar>
  ) : null;
};

const StyledSideBar = styled.menu`
  z-index: 99;
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 30%;
  background: rgba(238, 238, 238, 0.9);
  color: #252a32;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 700px) {
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(2px);
  }
`;

const StyledHeader = styled.div`
  min-height: var(--navBarHeight);
  width: 100%;
  padding: clamp(0.5rem, 2vw, 1rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: clamp(1rem, 2vw, 1.35rem);
  svg {
    cursor: pointer;
    font-size: 1.45rem;
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
`;

const StyledOtherLinks = styled.div`
  width: 100%;
  height: 100%;
  padding: 6rem 4rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  font-size: clamp(0.8rem, 3vw, 1rem);
  ul {
    list-style-type: none;
  }
  li {
    transition: transform ease 0.3s;
    cursor: pointer;
    a {
      padding: 0.5rem;
    }
  }
  li:hover {
    transform: scale(1.1);
  }
  li + li {
    margin-top: 3rem;
  }
`;

const StyledFooter = styled.div`
  font-size: clamp(0.6rem, 3vw, 0.9rem);
  width: 100%;
  padding: 2rem 4rem;
`;

export default SideBar;
