import styled from "styled-components";
import { useState, useEffect } from "react";
import Divider from "../../Styled/Divider";
import Meal from "./Meal";
import hostel from "./../../../img/hostel.jpg";
import HostelGround from "./HostelGround";
import ReadingRoom from "./ReadingRoom";
import Button from "../../Styled/Button";

const Slot = () => {
  //State
  const [meal, setMeal] = useState("Breakfast");
  const [time, setTime] = useState([""]);
  const [selected, setSelected] = useState("meal");
  const [message, setMessage] = useState("");
  const [modal, setModal] = useState(false);

  //Component did Mount
  useEffect(() => {
    const time = new Date().getHours();
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
  const change = (t: string) => {
    setSelected(t);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <StyledSlot>
      <img src={hostel} alt="hostel-hero" />
      <div className="overlay"></div>
      <StyledSlotTypes>
        <Button m={meal} onClick={() => change("meal")} />
        <Button m={"Hostel Grounds"} onClick={() => change("ground")} />
        <Button m={"Reading Room"} onClick={() => change("reading")} />
      </StyledSlotTypes>
      <Divider />
      {selected === "meal" ? (
        <Meal
          meal={meal}
          time={time}
          setMessage={setMessage}
          setModal={setModal}
        />
      ) : selected === "ground" ? (
        <HostelGround setMessage={setMessage} setModal={setModal} />
      ) : (
        <ReadingRoom setMessage={setMessage} setModal={setModal} />
      )}
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
    </StyledSlot>
  );
};

const StyledSlot = styled.section`
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
`;

const StyledSlotTypes = styled.ul`
  width: 100%;
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  list-style-type: none;
  padding: 1rem;
  --bg: teal;
  --color: white;
  li + li {
    margin-left: 1rem;
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
export default Slot;
