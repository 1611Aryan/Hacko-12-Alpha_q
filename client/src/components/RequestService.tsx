import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import yellowGradient from "./../img/yellow-gradient.jpg";

const RequestService: React.FC<{ user: any }> = ({ user }) => {
  //URL
  const URL =
    process.env.NODE_ENV === "production"
      ? "/administrator/complaints"
      : "http://localhost:5000/administrator/complaints";

  //State
  const [message, setMessage] = useState<null | string>(null);
  const [modal, setmodal] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [response, setResponse] = useState<{
    name: string | null;
    rollNumber: string | null;
    roomNumber: string | null;
    issue: string | null;
  }>({
    name: user.name,
    rollNumber: user.rollNumber,
    roomNumber: null,
    issue: null,
  });

  //Handlers

  const changeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setResponse({ ...response, [e.target.name]: e.target.value });
  };

  const SubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setProcessing(true);
    setmodal(true);
    try {
      const res = await axios.post(URL, {
        name: response.name,
        rollNumber: response.rollNumber,
        roomNumber: response.roomNumber,
        issue: response.issue,
      });
      setMessage(res.data);
    } catch (err) {
      throw err;
    } finally {
      setTimeout(() => setProcessing(false), 500);
      setResponse({ ...response, roomNumber: "", issue: "" });
    }
  };

  return (
    <StyledRequestService>
      <img src={yellowGradient} alt="" />
      <div className="overlay"></div>
      {modal && (
        <div className="loadingContainer">
          {processing ? (
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <>
              <p>{message}</p>
              <button onClick={() => setmodal(false)}>Ok</button>
            </>
          )}
        </div>
      )}

      <form onSubmit={SubmitHandler}>
        <label htmlFor="roomNumber">Room Number:</label>
        <input
          type="text"
          name="roomNumber"
          value={response.roomNumber ? response.roomNumber : ""}
          onChange={changeHandler}
          required
        />
        <label htmlFor="Issue">Issue:</label>
        <textarea
          name="issue"
          rows={10}
          value={response.issue ? response.issue : ""}
          onChange={changeHandler}
          required
        ></textarea>
        <button>
          <div className="btnOverlay"></div>
          <span>Submit</span>
        </button>
      </form>
    </StyledRequestService>
  );
};

const StyledRequestService = styled.section`
  width: 100vw;
  height: calc(100vh - var(--navBarHeight));
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  position: relative;
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
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(1px);
    z-index: 2;
  }
  .loadingContainer {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    color: white;
    p {
      text-align: center;
      font-size: clamp(1.2rem, 3vw, 2rem);
    }
    button {
      font-size: clamp(0.9rem, 3vw, 1.25rem);
      margin-top: 2rem;
      padding: 0.7rem clamp(1.5rem, 3vw, 2rem);
      border-radius: 10px;
    }
  }
  .lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #fff;
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  form {
    z-index: 5;
    width: 60%;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    input {
      font-size: clamp(0.9rem, 3vw, 1.25rem);
      width: 100%;
      padding: 0.6rem;
      margin: 0.5rem 0;
      border: 0;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.8);
      &:focus,
      &:hover {
        outline: 0;
        background: #f6ffa1;
      }
    }
    textarea {
      font-size: clamp(0.9rem, 3vw, 1.25rem);
      width: 100%;
      padding: 0.5rem;
      resize: none;
      margin: 0.5rem 0;
      border-radius: 5px;
      border: 0;
      background: rgba(255, 255, 255, 0.8);
      &:focus {
        outline: 0;
        background: rgba(255, 255, 255, 1);
      }
    }
    button {
      margin: 0.5rem 0;
      padding: clamp(0.8rem, 2vw, 1rem) clamp(1.2rem, 2vw, 1.5rem);
      font-size: clamp(0.9rem, 3vw, 1.25rem);
      background: rgba(238, 238, 238, 0.8);
      border-radius: 5px;
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
        background: #edff85;
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
  @media (max-width: 650px) {
    form {
      width: 70%;
    }
  }
  @media (max-width: 400px) {
    form {
      width: 85%;
    }
  }
`;
export default RequestService;
