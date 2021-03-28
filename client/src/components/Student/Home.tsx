import styled from "styled-components";

import books from "./../../img/book1.jpg";

import Divider from "../Styled/Divider";
import illus from "./../../img/5 SCENE 1.png";
import { useUser } from "../../Context/userProvider";

const Home: React.FC = () => {
  const { user } = useUser();

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
    padding: 1rem 1rem clamp(0rem, 1vw, 1rem) 1rem;
    z-index: 2;
    h1 {
      font-size: 1.2rem;
    }
  }

  .information {
    width: 100%;
    height: auto;
    padding: 1rem clamp(2rem, 3vw, 4rem) 1rem 1rem;
    border: 2px solid #fff;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    color: black;
    font-size: clamp(0.8rem, 3vw, 1rem);
    .row {
      width: 100%;
      display: flex;
      justify-content: space-between;
      padding: 1rem 0;
    }
  }
  .illus {
    z-index: -1;
    object-fit: cover;
    margin-top: auto;
    @media (max-width: 500px) {
      transform: scale(1.6);
    }
  }
`;

export default Home;
