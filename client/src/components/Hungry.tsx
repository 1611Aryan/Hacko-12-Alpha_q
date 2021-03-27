import styled from "styled-components";
import { useState, useEffect } from "react";
import hostel from "./../img/hostel.jpg";
import Divider from "./Divider";
import { Link } from "react-router-dom";

const Hungry: React.FC = () => {
  //State
  const [meal, setMeal] = useState("Breakfast");
  const [time, setTime] = useState([""]);
  const [message, setMessage] = useState("Confirm the slot for 7-7:20AM");
  const [modal, setModal] = useState(false);

  //Component did mount
  useEffect(() => {
    const time = new Date().getHours();
    console.log(time);
    if (time <= 8) {
      setMeal("Breakfast");
      setTime(["7-7:20AM", "7:20-7:40AM", "7:40-8:00AM"]);
    } else if (time <= 14) {
      setMeal("Lunch");
      setTime([
        "12-12:20PM",
        "12:20-12:40PM",
        "12:40-1:00PM",
        "1-1:20PM",
        "1:20-1:40PM",
        "1:40-2:00PM",
      ]);
    } else {
      setMeal("Dinner");
      setTime([
        "8-8:20PM",
        "8:20-8:40PM",
        "8:40-9:00PM",
        "9-9:20PM",
        "9:20-9:40PM",
        "9:40-10:00PM",
      ]);
    }
  }, []);

  //Handlers
  const openModal = (t: number, m?: string) => {
    if (t === 0) {
      setMessage(`Confirm the slot for ${m}`);
    } else {
      setMessage(`Are you sure you won't eat ${meal}`);
    }
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <StyledHome>
      <img src={hostel} alt="hostel-hero" />
      <div className="overlay"></div>
      <div className="content">
        <div className="slot">
          <h3>Confirm Your Slot for {meal}</h3>
          <Divider />
          <ul>
            {time.map((t, index) => (
              <li key={index} onClick={() => openModal(0, t)}>
                <div className="cover"></div>
                <span> {t}</span>
              </li>
            ))}
          </ul>
          <p>
            If no slot is confirmed, you'll automatically be assigned the last
            given slot.
          </p>
        </div>
        <div className="eating">
          <h3>Not having {meal} today?</h3>
          <Divider />
          <ul>
            <li onClick={() => openModal(1)}>
              <div className="cover"></div>
              <span>Skip</span>
            </li>
          </ul>
        </div>
      </div>
      {modal && (
        <StyledModal>
          <div className="alert">
            <p>{message}</p>
            <div className="btnContainer">
              <button className="yes" onClick={closeModal}>
                <span>Yes</span>
              </button>
              <button className="cancel" onClick={closeModal}>
                <span>Cancel</span>
              </button>
            </div>
          </div>
        </StyledModal>
      )}
    </StyledHome>
  );
};

const StyledHome = styled.main`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: calc(100vh - var(--navBarHeight));
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1px);
    z-index: 2;
  }
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 3;
    color: white;
    padding: 1rem;
    h3 {
      font-size: 1.5rem;
    }
    ul {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      list-style-type: none;
    }
    li {
      position: relative;
      overflow: hidden;
      padding: 1rem 2rem;
      background: #fff;
      color: teal;
      border-radius: 30px;
      cursor: pointer;
      transition: all ease-in-out 0.3s;
      .cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 110%;
        height: 110%;
        transform: translate(-100%);
        background: teal;
        transition: all ease-in-out 0.3s;
      }
      span {
        position: relative;
        z-index: 2;
      }
      &:hover {
        color: white;
        .cover {
          transform: translate(0);
        }
      }
    }
    li + li {
      margin-left: 1rem;
    }
    p {
      margin: 1rem 0;
      color: #fff238;
      &:hover {
        color: #fff45d;
      }
    }
    .eating {
      padding: 2rem 0;
    }
  }
`;

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 95;
  display: flex;
  justify-content: center;
  align-items: center;
  .alert {
    width: 30%;
    min-height: 45%;
    padding: 3rem 2rem 2rem;
    background: rgba(44, 44, 44, 0.8);
    border-radius: 20px;
    color: white;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    p {
      width: 100%;
      text-align: center;
      font-size: 1.5rem;
    }
    .btnContainer {
      margin-top: 1rem;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      button {
        width: 40%;
        padding: 0.7rem 1rem;
        position: relative;
        overflow: hidden;
        transition: all ease-out 0.1s;
        border-radius: 5px;
        border: 1px solid black;
        span {
          font-size: 1rem;
        }
      }
      .cancel:hover {
        color: red;
        background-color: #ffebeb;
      }
      .yes:hover {
        color: green;
        background-color: #efffeb;
      }
    }
  }
`;

export default Hungry;
