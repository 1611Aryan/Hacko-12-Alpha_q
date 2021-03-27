import axios from "axios";
import styled from "styled-components";
import food from "./../img/food.jpg";

const DecideToEat: React.FC<{
  setUser: any;
  user: any;
}> = ({ setUser, user }) => {
  //url
  const URL =
    process.env.NODE_ENV === "production"
      ? "/student"
      : "http://localhost:5000/student";

  //handlers
  const clickHandler = async (sent: boolean, eating: boolean) => {
    try {
      const res = await axios.put(`${URL}/${user._id}`, { sent, eating });
      console.log(res.data);
      setUser({ ...user, response: { sent, eating } });
    } catch (err) {
      throw err;
    }
  };

  return (
    <StyledDecideToEat>
      <img src={food} alt="food" />
      <div className="overlay"></div>
      <div className="content">
        <p>
          I solemnly swear that I will be Having Dinner/Lunch in Mess Today{" "}
        </p>
        {!user.response.sent ? (
          <div className="buttonContainer">
            <button onClick={() => clickHandler(true, true)}>
              <div className="btnOverlay"></div>
              <span>Yes!!</span>
            </button>
            <button onClick={() => clickHandler(true, false)}>
              <div className="btnOverlay"></div>
              <span>No</span>
            </button>
          </div>
        ) : (
          <p className="response">Already Responded</p>
        )}
      </div>
    </StyledDecideToEat>
  );
};

const StyledDecideToEat = styled.section`
  z-index: -1;
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 1;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(1px);
    z-index: 2;
  }
  .content {
    width: 60%;
    z-index: 5;
    text-align: center;
    color: #fff;
    p {
      font-size: clamp(1.25rem, 4vw, 3rem);
      margin-bottom: clamp(2rem, 5vw, 5rem);
    }
    .response {
      font-size: clamp(1rem, 4vw, 2rem);
      margin-bottom: 0rem;
    }
    .buttonContainer {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    button {
      min-width: 15%;
      background: #222831;
      color: #fff;
      font-size: clamp(1rem, 4vw, 1.75rem);
      padding: 1rem;
      border-radius: 15px;
      margin: 0 1rem;
      position: relative;
      overflow: hidden;
      .btnOverlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: transform ease 0.3s;
        transform: translateX(-100%);
        background: #eee;
        z-index: 1;
      }
      span {
        position: relative;
        z-index: 5;
      }
      &:hover {
        span {
          color: black;
        }
        .btnOverlay {
          transform: translateX(0);
        }
      }
    }
    button + button {
      background: #393e46;
    }
  }
  @media (max-width: 600px) {
    .content {
      width: 80%;
      button {
        width: 20%;
      }
    }
  }
  @media (max-width: 400px) {
    .content {
      width: 90%;
      button {
        width: 30%;
      }
    }
  }
`;

export default DecideToEat;
