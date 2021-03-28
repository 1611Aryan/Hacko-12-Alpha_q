import axios from "axios";
import { url } from "node:inspector";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useUser } from "../../Context/userProvider";
import Divider from "../Styled/Divider";
import bg from "./../../img/table.jpg";

const Marks = () => {
  //URL
  const URL =
    process.env.NODE_ENV === "production"
      ? "/teacher"
      : "http://localhost:5000/teacher";

  const [student, setStudent] = useState<any>({
    marks: {
      Sessional: "",
      MST: "",
      EST: "",
    },
  });

  const { user } = useUser();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(URL);
        setStudent(
          res.data.filter((r: any) => r.rollNumber === user.rollNumber)[0]
        );
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <StyledMarks>
      <img src={bg} alt="" />
      <div className="overlay"></div>
      <h1>My Marks</h1>
      <Divider />
      <div className="content">
        <ul>
          <li>
            <h3>Electrical</h3>
            <p>
              <span>Sessional: 15/20</span>
              <span>MST: 24/30</span>
              <span>EST: 46/50</span>
            </p>
          </li>
          <li>
            <h3>Environment</h3>
            <p>
              <span>Sessional: 12/20</span>
              <span>MST: 17/30</span>
              <span>EST: 31/50</span>
            </p>
          </li>
          <li>
            <h3>Chemistry</h3>
            <p>
              <span>Sessional: {student.marks.Sessional}</span>
              <span>MST: {student.marks.MST}</span>
              <span>EST: {student.marks.EST}</span>
            </p>
          </li>
        </ul>
      </div>
    </StyledMarks>
  );
};

const StyledMarks = styled.div`
  position: relative;
  z-index: 2;
  overflow: hidden;
  width: 100vw;
  height: calc(100vh - var(--navBarHeight));
  padding:  1rem;
  display: flex;
    flex-direction: column;
  }
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
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    z-index: -1;
  }
  h1 {
    color: white;
    font-size: clamp(1.5rem, 3vw, 2rem);
  }
  .content {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    ul{
        width:100%;
        height:100%;
        overflow-x:hidden;
        overflow-y:auto;
        background:rgba(255,255,255,0.45);
        li{
            width:80%;
            padding:1rem;
            h3{
                font-size:clamp(1rem,3vw,1.5rem);
            }
            p{
                padding:1rem 0;
                width:100%;
                display:flex;
                justify-content:space-between;
                span{
                    font-size:clamp(0.8rem,2vw,1.2rem);
                }
            }
        }
    }
  }
`;

export default Marks;
