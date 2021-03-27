import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import loginBg from "./../img/login.jpg";
import logo from "./../img/thaparLogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";

const Login: React.FC<{
  setLogin: any;
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
      rollNumber: string;
      year: string;
      hostel: string;
      password: string;
      responded: boolean;
    } | null>
  >;
}> = ({ setLogin, setUser }) => {
  //urls
  const URL =
    process.env.NODE_ENV === "production"
      ? "/student/login"
      : "http://localhost:5000/student/login";

  //state

  const [credentials, setCredentials] = useState<{
    rollNumber: null | string;
    password: null | string;
  }>({
    rollNumber: null,
    password: null,
  });

  const [message, setMessage] = useState<null | string>(null);

  //handlers
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL, {
        rollNumber: credentials.rollNumber,
        password: credentials.password,
      });
      if (res.data.success) {
        setUser(res.data.user);
        setMessage(null);
        if (res.data.user.access === "admin") {
          setLogin({ status: true, access: "admin" });
          window.history.pushState({}, "", "/admin");
          window.location.reload();
        } else {
          setLogin({ status: true, access: "student" });
          window.history.pushState({}, "", "/");
        }
      } else {
        setMessage(res.data.message);
        setCredentials({
          rollNumber: null,
          password: null,
        });
      }
    } catch (err) {
      throw err;
    }
  };

  return (
    <StyledLogin>
      <StyledHeader>
        <h1>
          <a href="/">
            HostelDaze &nbsp; <FontAwesomeIcon icon={faBuilding} />
          </a>
        </h1>
        <a href="http://www.thapar.edu/" className="logo">
          <img src={logo} alt="thapar-logo" />
        </a>
      </StyledHeader>
      <img className="bg" src={loginBg} alt="hostel-background" />
      <div className="overlay"></div>

      <div className="content">
        <StyledForm onSubmit={submitHandler}>
          <p>{message && message}</p>
          <label htmlFor="rollNumber">Roll Number: </label>
          <input
            type="text"
            name="rollNumber"
            value={
              credentials.rollNumber !== null ? credentials.rollNumber : ""
            }
            onChange={changeHandler}
            required
            autoFocus
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={credentials.password !== null ? credentials.password : ""}
            required
            onChange={changeHandler}
          />
          <button>Login</button>
        </StyledForm>
      </div>
    </StyledLogin>
  );
};

const StyledLogin = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  .bg {
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
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledHeader = styled.header`
  z-index: 5;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: var(--navBarHeight);
  padding: 1rem 2rem;
  overflow: hidden;
  .logo {
    width: 10%;
    height: 100%;
    img {
      width: 100%;
      aspect-ratio: 3/1;
      object-fit: cover;
    }
  }
  @media (max-width: 900px) {
    .logo {
      width: 20%;
    }
  }
  @media (max-width: 700px) {
    .logo {
      width: 30%;
    }
  }
  @media (max-width: 500px) {
    .logo {
      width: 40%;
    }
  }
`;

const StyledForm = styled.form`
  z-index: 5;
  width: 40%;
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  padding: 3rem 4rem;
  font-size: clamp(1rem, 3vw, 1.45rem);
  background: rgba(226, 226, 226, 0.9);
  border-radius: 25px;
  p {
    color: red;
    font-size: 0.8rem;
  }
  input {
    width: 100%;
    padding: clamp(0.6rem, 2vw, 0.9rem) 0.5rem;
    border-radius: 10px;
    border: 0;
    background: rgba(255, 255, 255, 0.5);
    font-size: clamp(0.7rem, 2vw, 1rem);
    border: 2px solid #01105b;
    transition: all ease 0.2s;
    &:focus,
    &:hover {
      outline: 0;
      background: rgba(154, 201, 255, 0.5);
    }
  }
  span {
    font-size: clamp(0.7rem, 2vw, 0.8rem);
    align-self: flex-end;
    color: #01105b;
    cursor: pointer;
  }
  button {
    font-size: clamp(0.7rem, 2vw, 1rem);
    padding: clamp(0.6rem, 2vw, 0.9rem) clamp(1rem, 2vw, 1.5rem);
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.5);
    border: 2px solid #01105b;
    transition: all ease 0.2s;
    &:focus,
    &:hover {
      background: rgba(154, 201, 255, 0.5);
      transform: scale(1.1);
    }
  }
  @media (max-width: 900px) {
    padding: 2rem 3rem;
    width: 60%;
    height: 60%;
  }

  @media (max-width: 450px) {
    padding: 2rem;
    width: 80%;
    height: 60%;
  }
`;
export default Login;
