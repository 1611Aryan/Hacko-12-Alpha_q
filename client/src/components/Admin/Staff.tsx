import styled from "styled-components";

const Staff = () => {
  return (
    <StyledStaff>
      <StyledHeader>
        <h1>Staff</h1>
      </StyledHeader>
      <StyledContent>
        <ul>
          <li>
            <div>
              <p>Mess Staff</p>
            </div>
            <div>
              <p>Staff Member 1: +91 1234567890</p>
              <p>Staff Member 2: +91 7984357690</p>
              <p>Staff Member 3: +91 8244517990</p>
            </div>
          </li>
          <li>
            <div>
              <p>Cleaning Staff</p>
            </div>
            <div>
              <p>Staff Member 1: +91 1234567890</p>
              <p>Staff Member 2: +91 7984357690</p>
              <p>Staff Member 3: +91 8244517990</p>
            </div>
          </li>
          <li>
            <div>
              <p>Carpenter</p>
            </div>
            <div>
              <p>lorem: +91 1234567890</p>
              <p>epsum: +91 7984357690</p>
            </div>
          </li>
          <li>
            <div>
              <p>Guards</p>
            </div>
            <div>
              <p>Guard 1: +91 1234567890</p>
              <p>Guard 2: +91 7984357690</p>
              <p>Guard 3: +91 8244517990</p>
            </div>
          </li>
          <li>
            <div>
              <p>Caretaker</p>
            </div>
            <div>
              <p>Day Caretaker: +91 1234567890</p>
              <p>Night Caretaker: +91 7984357690</p>
            </div>
          </li>
        </ul>
      </StyledContent>
    </StyledStaff>
  );
};

const StyledStaff = styled.section`
  width: 100%;
  height: calc(100vh - var(--navBarHeight));
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #bbf0fd, #eaecc6);
`;
const StyledHeader = styled.header`
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  font-size: clamp(0.8rem, 3vw, 1.2rem);
  z-index: 5;
`;

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;

  ul {
    padding: clamp(2rem, 4vw, 4rem) 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  li {
    width: 50%;
    font-size: clamp(0.7rem, 2vw, 1rem);
    padding: 2rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: color ease 0.2s;
    p:hover {
      color: #535353;
    }
  }
  @media (max-width: 900px) {
    ul {
      li {
        width: 65%;
      }
    }
  }
  @media (max-width: 600px) {
    ul {
      li {
        width: 75%;
      }
    }
  }
  @media (max-width: 500px) {
    ul {
      li {
        width: 85%;
      }
    }
  }
  @media (max-width: 400px) {
    ul {
      li {
        width: 95%;
      }
    }
  }
`;

export default Staff;
