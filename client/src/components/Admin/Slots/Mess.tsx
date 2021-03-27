import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../Styled/Button";
import Divider from "../../Styled/Divider";

const Mess = () => {
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
`;

export default Mess;
