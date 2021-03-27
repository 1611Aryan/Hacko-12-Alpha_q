import { useState } from "react";
import styled from "styled-components";
import Button from "../../Styled/Button";
import Ground from "./Ground";
import Mess from "./Mess";
import ReadingRoom from "./ReadingRoom";

const Slots = () => {
  //State
  const [selected, setSelected] = useState("");

  //Handlers
  const clickHandler = (t: string) => {
    setSelected(t);
  };

  return (
    <StyledSlots>
      <h1>Slots</h1>
      <div className="divider"></div>
      <ul className="slots">
        <Button m={"Mess"} onClick={() => clickHandler("mess")} />
        <Button m={"Hostel Ground"} onClick={() => clickHandler("ground")} />
        <Button m={"Reading Room "} onClick={() => clickHandler("reading")} />
      </ul>
      {selected === "mess" ? (
        <Mess />
      ) : selected === "ground" ? (
        <Ground />
      ) : selected === "reading" ? (
        <ReadingRoom />
      ) : null}
    </StyledSlots>
  );
};
const StyledSlots = styled.section`
  width: 100%;
  height: calc(100vh - var(--navBarHeight));
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: linear-gradient(
    to left,
    #ffffff,
    #fffd88 80%
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  .divider {
    width: 100%;
    height: 2px;
    background: #000;
  }
  ul {
    width: 100%;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
    padding: 1rem 0;
    --bg: #004b4b;
    --color: #ffffff;
    li + li {
      margin-left: 1rem;
    }
  }
`;

export default Slots;
