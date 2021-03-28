import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Button from "../Styled/Button";
import blackboard from "./../../img/blackboard.jpg";
import SearchBar from "../SearchBar";

const Assignments = () => {
  //URL
  const URL =
    process.env.NODE_ENV === "production"
      ? "/teacher"
      : "http://localhost:5000/teacher";

  //State
  const [students, setStudents] = useState<
    | {
        batch: string;
        name: string;
        rollNumber: string;
        year: string;
        submission: boolean[];
      }[]
    | null
  >(null);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(URL);
        setStudents(res.data);
      } catch (err) {
        throw err;
      }
    })();
  }, []);

  const ClickHandler = (i: number) => {
    setSelected(i);
  };

  return (
    <StyledAssignments>
      <img src={blackboard} alt="" />
      <div className="overlay"></div>
      <h1>Assignments</h1>
      <div className="divider"></div>
      <StyledContent>
        <ul className="type">
          <Button
            m={"Assignment 1"}
            onClick={() => ClickHandler(0)}
            active={selected === 0 ? true : false}
          />
          <Button
            m={"Assignment 2"}
            onClick={() => ClickHandler(1)}
            active={selected === 1 ? true : false}
          />
          <Button
            m={"Assignment 3"}
            onClick={() => ClickHandler(2)}
            active={selected === 2 ? true : false}
          />
          <Button
            m={"Assignment 4"}
            onClick={() => ClickHandler(3)}
            active={selected === 3 ? true : false}
          />
          <Button
            m={"Assignment 5"}
            onClick={() => ClickHandler(4)}
            active={selected === 4 ? true : false}
          />
        </ul>
        <SearchBar />
        <ul className="students">
          {students &&
            students.map((s, index) => (
              <li key={index}>
                <div>
                  <span>Name: {s.name}</span>
                  <span>Roll Number: {s.rollNumber}</span>
                  <span>Year: {s.year}</span>
                  <span>Batch: {s.batch}</span>
                  <span>
                    {s.submission[selected] ? "Submitted" : "Not Submitted"}
                  </span>
                </div>
              </li>
            ))}
        </ul>
      </StyledContent>
    </StyledAssignments>
  );
};

const StyledAssignments = styled.div`
  width: 100%;
  height: calc(100vh - var(--navBarHeight));
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
  .type {
    width: 100%;
    padding: 1rem;
    --bg: coral;
    --color: white;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .students {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    li {
      width: 100%;
      padding: 1.5rem 1rem;
      border-bottom: 0.5px solid white;
      font-size: clamp(0.7rem, 1vw, 1rem);
      color: white;
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          /* min-width: 20%;
          max-width: 23%; */
        }
      }
    }
  }
`;

export default Assignments;
