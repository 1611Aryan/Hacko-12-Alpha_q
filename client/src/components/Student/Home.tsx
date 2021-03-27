import styled from "styled-components";

import { useHistory } from "react-router-dom";
import books from "./../../img/book1.jpg";

import Divider from "../Styled/Divider";
import illus from "./../../img/5 SCENE 1.png";

const Home: React.FC<{ user: any }> = ({ user }) => {
  const history = useHistory();

  if (user.access === "student") {
    return (
      <StyledHome>
        <img className="bg" src={books} alt="" />
        <div className="overlay"></div>
        <div className="content">
          <h1>Hello {user?.name}</h1>
          <Divider />
          <div className="information">
            <div className="row">
              <span>Roll Number: {user?.rollNumber}</span>
              <span>Year: {user?.year}</span>
            </div>
            <div className="row">
              <span>Stream: {user?.stream}</span>
              <span>Batch: {user?.batch}</span>
            </div>
            <div className="row">
              <span>Hostel: {user?.hostel}</span>
            </div>
          </div>
          {/* <div className="quote">{quote}</div> */}{" "}
          <img className="illus" src={illus} alt="" />
        </div>
      </StyledHome>
    );
  } else {
    history.push("/");
    return null;
  }
};

const StyledHome = styled.main`
  z-index: -1;
  overflow: hidden;
  width: 100vw;
  height: calc(100vh - var(--navBarHeight));
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: white;
  .bg {
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
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(3px);
    z-index: 2;
  }
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    z-index: 2;
    h1 {
      font-size: 1.2rem;
    }
  }

  .information {
    width: 100%;
    height: auto;
    padding: 1rem 4rem 1rem 1rem;
    border: 2px solid #fff;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    color: black;
    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
    }
  }
  .quote {
    margin-top: auto;
    align-self: center;
    width: 60%;
    font-weight: 600;
    margin-bottom: 3rem;
    font-size: 2.5rem;
    text-align: center;
    font-family: "Satisfy", cursive;
    color: white;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  }
  .illus {
    z-index: -1;
    object-fit: cover;
  }
`;

export default Home;
