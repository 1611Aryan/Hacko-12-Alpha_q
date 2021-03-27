import styled from "styled-components";

const Alert = () => {
  return (
    <StyledAlert>
      <h1>Create an Alert </h1>
      <form>
        <label htmlFor="to">To:</label>
        <select name="to">
          <option value="All">All</option>
          <option value="A-Block">A-Block</option>
          <option value="B-Block">B-Block</option>
          <option value="C-Block">C-Block</option>
          <option value="D-Block">D-Block</option>
          <option value="E-Block">E-Block</option>
        </select>
        <label htmlFor="message">Message</label>
        <textarea name="message"></textarea>
        <button>Send Alert</button>
      </form>
    </StyledAlert>
  );
};

const StyledAlert = styled.section`
  width: 100%;
  height: calc(100vh - var(--navBarHeight));
  background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.15) 0%,
      rgba(0, 0, 0, 0.15) 100%
    ),
    radial-gradient(
        at top center,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(0, 0, 0, 0.4) 120%
      )
      #989898;
  background-blend-mode: multiply, multiply;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  form {
    border-radius: 15px;
    width: 40%;
    height: 70%;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background: #2b2b2b;
    border: 2px solid white;
    font-size: 1rem;
    color: white;
    select,
    option,
    textarea,
    button {
      padding: 0.5rem 0.7rem;
      &:focus {
        outline: 0;
      }
    }
    textarea {
      flex: 0.6;
      resize: none;
    }
  }
`;

export default Alert;
