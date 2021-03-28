import styled from "styled-components";
import { useState } from "react";

import blackboard from "./../../img/blackboard.jpg";

const Schedule = () => {
  const [day, setDay] = useState(() => {
    let day = new Date().getDay();
    if (day === 6 || day === 0) return 1;
    else return day;
  });

  const Classes = [
    [
      {
        time: "8-9:40AM",
        link: "https://www.zoom.com/myclass",
        batch: "ENC-5",
        type: "Practical",
      },
      {
        time: "1-1:50AM",
        link: "https://www.zoom.com/myclass",
        batch: "ENC",
        type: "Lecture",
      },
    ],
    [
      {
        time: "10:50-11:40AM",
        link: "https://www.zoom.com/myclass",
        batch: "ENC-7",
        type: "Tutorial",
      },
      {
        time: "2-2:50AM",
        link: "https://www.zoom.com/myclass",
        batch: "ENC",
        type: "Lecture",
      },
    ],
    [
      {
        time: "10:50-11:40AM",
        link: "https://www.zoom.com/myclass",
        batch: "ENC",
        type: "Lecture",
      },
      {
        time: "2-3:40AM",
        link: "https://www.zoom.com/myclass",
        batch: "ENC-4",
        type: "Practical",
      },
    ],
    [
      {
        time: "10:50-12:30AM",
        link: "https://www.zoom.com/myclass",
        batch: "ENC-1",
        type: "Practical",
      },
      {
        time: "5:10-6:00AM",
        link: "https://www.zoom.com/myclass",
        batch: "ENC",
        type: "Lecture",
      },
    ],
    [
      {
        time: "8-8:50AM",
        link: "https://www.zoom.com/myclass",
        batch: "ENCs",
        type: "Lecture",
      },
      {
        time: "2-2:50AM",
        link: "https://www.zoom.com/myclass",
        batch: "ENC",
        type: "Lecture",
      },
    ],
  ];

  const ChangeDay = (d: number) => {
    setDay(d);
  };

  return (
    <StyledSchedule>
      <img src={blackboard} alt="" />
      <div className="overlay"></div>
      <h1>Schedule</h1>
      <div className="divider"></div>
      <StyledContent>
        <div className="column1">
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
          </ul>
        </div>
        <div className="column2">
          <ul>
            {Classes[day - 1].map((c, index) => (
              <li key={index}>
                <h4>{c.time}</h4>
                <h4>{c.batch}</h4>
                <h4>{c.type}</h4>
                <h4>
                  <a href={c.link}>{c.link}</a>
                </h4>
              </li>
            ))}
          </ul>
        </div>
      </StyledContent>
    </StyledSchedule>
  );
};

const StyledSchedule = styled.div`
  width: 100vw;
  height: calc(100vh - var(--navBarHeight));
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -2;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1px);
    z-index: -1;
  }
  h1 {
    z-index: 3;
    padding: 0.5rem 1rem;
    color: white;
    font-weight: 300;
    font-size: clamp(1.25rem, 3vw, 2rem);
  }
  .divider {
    width: 100%;
    height: 2px;
    background: white;
  }
`;

const StyledContent = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  .activeDay {
    background: rgba(255, 255, 255, 0.1);
  }
  .column1 {
    width: 25%;
    height: 100%;
    overflow: hidden;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      font-size: clamp(0.7rem, 3vw, 1rem);
      li {
        width: 100%;
        flex: 1;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        height: auto;
        border-bottom: 2px solid #fff;
        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
      }
    }
    border-right: 3px solid #fff;
  }
  .column2 {
    flex: 1;
    height: 100%;
    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      font-size: clamp(0.7rem, 3vw, 1rem);
      li {
        width: 100%;
        padding: 2rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        color: white;
        height: auto;
        border-bottom: 2px solid #fff;
        &:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        a {
          text-decoration: underline;
          &:hover {
            color: #ffff76;
          }
        }
      }
    }
  }
  @media (max-width: 500px) {
    .column1 {
      width: 40% !important;
    }
  }
`;

export default Schedule;
