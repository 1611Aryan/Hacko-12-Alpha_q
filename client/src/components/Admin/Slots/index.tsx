import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../../Styled/Button";
import Ground from "./Ground";
import Mess from "./Mess";
import ReadingRoom from "./ReadingRoom";

const Slots = () => {
  //url
  const URL =
    process.env.NODE_ENV === "production"
      ? "/slots/all"
      : "http://localhost:5000/slots/all";
  //State
  const [selected, setSelected] = useState("");
  const [students, setStudents] = useState<
    | {
        name: string;
        rollNumber: string;
        meal: string;
        ground: string;
        reading: string;
      }[]
    | null
  >(null);

  //Handlers
  const clickHandler = (t: string) => {
    setSelected(t);
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(URL);
        console.log(res.data);
        setStudents(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

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
        <Mess students={students} />
      ) : selected === "ground" ? (
        <Ground students={students} />
      ) : selected === "reading" ? (
        <ReadingRoom students={students} />
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
