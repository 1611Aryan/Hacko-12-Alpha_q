import styled from "styled-components";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import bg from "./../img/sky.jpg";
import axios from "axios";
import Divider from "./Divider";

const Home: React.FC<{ user: any }> = ({ user }) => {
  const history = useHistory();
  const [quote, setQuote] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://quotes.rest/qod.json?category=inspire"
        );
        setQuote(res.data.contents.quotes[0].quote);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  if (user.access === "student") {
    return (
      <StyledHome>
        <img src={bg} alt="" />
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
          <div className="quote">{quote}</div>
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
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
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
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
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
`;

export default Home;
