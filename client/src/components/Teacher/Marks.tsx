import styled from "styled-components";
import Button from "../Styled/Button";
import blackboard from "./../../img/blackboard.jpg";
import axios from "axios";
import { useState, useEffect } from "react";

const Marks = () => {
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
    <StyledMarks>
      <img src={blackboard} alt="" />
      <div className="overlay"></div>
      <h1>Marks</h1>
      <div className="divider"></div>
      <StyledContent>
        <ul className="type">
          <Button
            m={"MST"}
            onClick={() => ClickHandler(0)}
            active={selected === 0 ? true : false}
          />
          <Button
            m={"Sessional"}
            onClick={() => ClickHandler(1)}
            active={selected === 1 ? true : false}
          />
          <Button
            m={"EST"}
            onClick={() => ClickHandler(2)}
            active={selected === 2 ? true : false}
          />
        </ul>
        <div className="formContainer">
          <StyledForm>
            <label htmlFor="name">Name:</label>
            <input type="text" list="students" required name="name" />
            <datalist id="students">
              {students &&
                students.map((s, i) => (
                  <option key={i} value={s.name}></option>
                ))}
            </datalist>
            <label htmlFor="marksObt">Marks Obtained:</label>
            <input type="number" min={0} max={50} required name="marksObt" />
            <label htmlFor="marksTotal">Total Marks:</label>
            <input type="number" min={0} max={50} required name="marksTotal" />
            <button>Add Marks</button>
          </StyledForm>
        </div>
      </StyledContent>
    </StyledMarks>
  );
};

const StyledMarks = styled.div`
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
  height: 100%;
  display: flex;
  flex-direction: column;
  ul {
    width: 100%;
    padding: 1rem;
    --bg: coral;
    --color: white;
    display: flex;
    gap: 1rem;
  }
  .formContainer {
    width: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const StyledForm = styled.form`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 15px;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.4);
  font-weight: 500;
  input,
  button {
    padding: 0.5rem 0.7rem;
    font-size: 1rem;
  }
  input {
    background: transparent;
    border: 0;
    border-bottom: 2px solid #004910;
    border-radius: 5px;
    &:hover,
    &:focus {
      background: rgba(255, 255, 255, 0.3);
      outline: none;
    }
  }
  button {
    align-self: center;
    width: 12ch;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    border: 2px solid #004910;
  }
  @media (max-width: 500px) {
    width: 85%;
  }
`;
export default Marks;
