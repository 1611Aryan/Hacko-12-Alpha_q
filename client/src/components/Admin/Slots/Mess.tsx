import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../Styled/Button";
import Divider from "../../Styled/Divider";

const Mess: React.FC<{
  students:
    | {
        name: string;
        rollNumber: string;
        meal: string;
        ground: string;
        reading: string;
      }[]
    | null;
}> = ({ students }) => {
  //State
  const [meal, setMeal] = useState("Breakfast");
  const [time, setTime] = useState([""]);
  const [selected, setSelected] = useState("meal");

  //Component did Mount
  useEffect(() => {
    const time = new Date().getHours();
    if (time <= 8) {
      setMeal("Breakfast");
      setTime(["7-7:20AM", "7:20-7:40AM", "7:40-8:00AM"]);
    } else if (time > 14) {
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

  return (
    <StyledMess>
      <h1>
        Mess
        <Divider />
      </h1>
      <ul>
        {time.map((t, index) => (
          <Button key={index} m={t} onClick={() => change(t)} />
        ))}
      </ul>
      <ul className="students">
        {students &&
          students
            .filter(student => student.meal !== "")
            .map((student, index) => (
              <li key={index}>
                <div>
                  <span>{student.meal}</span>
                  <span>{student.name}</span>
                  <span>{student.rollNumber}</span>
                </div>
              </li>
            ))}
      </ul>
    </StyledMess>
  );
};

const StyledMess = styled.div`
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      background: black;
      margin-left: 1rem;
    }
  }
  li {
    padding: 0.5rem 0.7rem;
    font-size: 0.8rem;
  }
  .students {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    li {
      width: 100%;
      padding: 1.5rem 1rem;
      border-bottom: 0.5px solid black;
      font-size: clamp(0.7rem, 1vw, 1rem);
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          min-width: 20%;
          max-width: 23%;
        }
      }
    }
  }
`;

export default Mess;
