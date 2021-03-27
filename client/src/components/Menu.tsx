import { useState } from "react";
import styled from "styled-components";
import menuBG from "./../img/menuBg.jpg";

const food = [
  [
    ["Coffee", "Tea", "Sandwhich", "Omlette"],
    ["Pav Bhaji", "Daal", "Roti", "Raita"],
    ["Paneer", "Dal", "Kheer", "Roti"],
  ],
  [
    ["Coffee", "Tea", "Idli", "Dosa"],
    ["Chane Bhature", "Daal", "Roti", "Raita"],
    ["Manchurian", "Dal", "Ice-Cream", "Roti"],
  ],
  [
    ["Coffee", "Tea", "Sandwhich", "Omlette"],
    ["Curry", "Daal", "Roti", "Raita", "Rice"],
    ["Paneer", "Dal", "Gulab Jamun", "Roti"],
  ],
  [
    ["Coffee", "Tea", "Idli", "Dosa"],
    ["Amritsari Kulcha", "Daal", "Roti", "Raita"],
    ["Cheese Chilly", "Dal", "Kulfi", "Roti"],
  ],
  [
    ["Coffee", "Tea", "Sandwhich", "Omlette"],
    ["Saag", "Makki Roti", "Daal", "Roti", "Raita"],
    ["Channe", "Dal", "Pastry", "Roti"],
  ],
  [
    [" Cold Coffee", "Tea", "Idli", "Dosa"],
    ["Chane", "Daal", "Roti", "Raita"],
    ["Paneer", "Dal", "Gulab Jamun"],
  ],
  [
    [" Cold Coffee", "Tea", "Idli", "Dosa"],
    ["Paneer", "Daal", "Roti", "Raita"],
    ["Palak Paneer", "Dal", "Kheer", "Roti"],
  ],
];

const Menu = () => {
  const [day, setDay] = useState(() => new Date().getDay());
  const [time, setTime] = useState(() => {
    const time = new Date().getHours();
    if (time <= 8) return 0;
    if (time <= 14) return 1;
    else return 2;
  });

  const ChangeDay = (d: number) => {
    setDay(d);
  };

  const ChangeTime = (t: number) => {
    setTime(t);
  };

  return (
    <StyledMenu>
      <img src={menuBG} alt="" />
      <div className="overlay"></div>
      <StyledSidePanel>
        <ul>
          <li
            onClick={() => ChangeDay(1)}
            className={day === 1 ? "activeDay" : ""}
          >
            <p> Monday</p>
          </li>
          <li
            onClick={() => ChangeDay(2)}
            className={day === 2 ? "activeDay" : ""}
          >
            Tuesday
          </li>
          <li
            onClick={() => ChangeDay(3)}
            className={day === 3 ? "activeDay" : ""}
          >
            Wednesday
          </li>
          <li
            onClick={() => ChangeDay(4)}
            className={day === 4 ? "activeDay" : ""}
          >
            Thursday
          </li>
          <li
            onClick={() => ChangeDay(5)}
            className={day === 5 ? "activeDay" : ""}
          >
            Friday
          </li>
          <li
            onClick={() => ChangeDay(6)}
            className={day === 6 ? "activeDay" : ""}
          >
            Saturday
          </li>
          <li
            onClick={() => ChangeDay(0)}
            className={day === 0 ? "activeDay" : ""}
          >
            Sunday
          </li>
        </ul>
      </StyledSidePanel>
      <StyledFood>
        <div className="time">
          <ul>
            <li
              onClick={() => ChangeTime(0)}
              className={time === 0 ? "activeTime" : ""}
            >
              BreakFast
              <br />
              (7:00-9:00A.M.)
            </li>
            <li
              onClick={() => ChangeTime(1)}
              className={time === 1 ? "activeTime" : ""}
            >
              Lunch
              <br />
              (12:00-2:00P.M.)
            </li>
            <li
              onClick={() => ChangeTime(2)}
              className={time === 2 ? "activeTime" : ""}
            >
              Dinner
              <br />
              (8:00-10:00P.M.)
            </li>
          </ul>
        </div>
        <div className="content">
          <p>{food[day][time].join(", ")}</p>
        </div>
      </StyledFood>
    </StyledMenu>
  );
};

const StyledMenu = styled.section`
  width: 100vw;
  height: calc(100vh - var(--navBarHeight));
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  .activeDay {
    background: #eee;
    color: #2d333c;
    &:hover {
      background: #eee;
      color: #2d333c;
    }
  }
  .activeTime {
    background: #eee !important;
    color: #2d333c !important;
    &:hover {
      background: #eee !important;
      color: #2d333c !important;
    }
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 1;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1px);
    z-index: 2;
  }
`;
const StyledSidePanel = styled.div`
  width: 30%;
  height: 100%;
  z-index: 5;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    list-style-type: none;
    border-right: 2px solid #2d333c;
    background: rgba(87, 87, 87, 0.9);
    color: #eee;
  }

  li {
    text-align: center;
    border-bottom: 2px solid #2d333c;
    width: 100%;
    height: calc(100% % 7);
    padding: 2rem 4rem;
    cursor: pointer;
    font-size: clamp(0.7rem, 2vw, 1rem);
    transition: background ease-in-out 0.2s, color ease-in-out 0.2s;
    &:hover {
      background: rgba(255, 255, 255, 0.4);
      color: black;
    }
  }
  li + li {
    border-bottom: 2px solid #2d333c;
    border-top: 0;
  }
  @media (max-width: 550px) {
    width: 40%;
    li {
      padding: 1.5rem 0;
    }
  }
  @media (max-width: 550px) {
    width: 45%;
  }
`;
const StyledFood = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  .time {
    width: 100%;
    ul {
      width: auto;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      list-style-type: none;
      border-bottom: 2px solid #2d333c;

      li {
        font-size: clamp(0.7rem, 2vw, 1rem);
        text-align: center;
        padding: 0.7rem 2rem;
        border-right: 2px solid #2d333c;
        background: rgba(87, 87, 87, 0.9);
        color: #eee;
        cursor: pointer;
        transition: background ease-in-out 0.3s, color ease-in-out 0.3s;
        &:hover {
          background: rgba(255, 255, 255, 0.4);
          color: black;
        }
      }
    }
  }
  .content {
    z-index: 5;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: clamp(1.25rem, 3vw, 2rem);
    text-align: center;
    padding: 1rem;
    color: white;
  }
  @media (max-width: 600px) {
    .time {
      li {
        padding: 0.5rem 1rem !important;
      }
    }
  }
  @media (max-width: 450px) {
    .time {
      li {
        padding: 0.5rem !important;
      }
    }
  }
`;

export default Menu;
