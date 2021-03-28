import styled from "styled-components";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Notifications: React.FC<{
  notifStatus: boolean;
  setNotifStatus: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ notifStatus, setNotifStatus }) => {
  //State
  const [messages, setMessages] = useState([
    "Laundry Services available on Monday and Thursday from 3-5PM",
    "Electrical Assignment-2 Due on Friday",
  ]);

  //Handlers
  const closeNotifications = () => setNotifStatus(false);
  const deleteNotification = (i: number) => {
    setMessages(messages.filter((message, index) => index !== i));
  };

  return notifStatus ? (
    <StyledNotification>
      <header>
        <FontAwesomeIcon icon={faTimes} onClick={closeNotifications} />
      </header>
      <div className="content">
        <h3>Notifications</h3>
        <ul>
          {messages.map((message, index) => (
            <li onClick={() => deleteNotification(index)}>
              <p>{message}</p>

              <FontAwesomeIcon icon={faTrashAlt} />
            </li>
          ))}
        </ul>
      </div>
    </StyledNotification>
  ) : null;
};

const StyledNotification = styled.div`
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
  flex-direction: column;
  @media (max-width: 700px) {
    width: 100%;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(2px);
  }
  header {
    width: 100%;
    height: var(--navBarHeight);
    width: 100%;
    padding: clamp(0.5rem, 2vw, 1rem);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: clamp(1rem, 2vw, 1.45rem);
    svg {
      cursor: pointer;
    }
  }
  .content {
    width: 100%;
    flex: 1;
    padding: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    font-size: clamp(0.8rem, 3vw, 1rem);
    h3 {
      font-size: 1.5rem;
    }
    ul {
      list-style-type: none;
      font-size: clamp(0.8rem, 2vw, 1rem);
      padding: 0.5rem;
      li {
        margin-top: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        svg {
          cursor: pointer;
          color: red;
          font-size: clamp(1rem, 2vw, 1.2rem);
          &:hover {
            text-decoration: line-through;
          }
        }
      }
    }
  }
`;

export default Notifications;
