import styled from "styled-components";

const AttendanceAdmin = () => {
  return (
    <StyledAttendance>
      <StyledHeader>
        <h1>Attendance</h1>
      </StyledHeader>
      <StyledContent>
        <ul>
          <li>
            <span>Name: Julio Mann</span>
            <span>Room No.: B-205 </span>
            <span>Roll No.: 101915124 </span>
            <span>Attendance Percentage: 21%</span>
          </li>
          <li>
            <span>Name: Christy Lambert</span>
            <span>Room No.: D-115 </span>
            <span>Roll No.: 109815064 </span>
            <span>Attendance Percentage: 25%</span>
          </li>
          <li>
            <span>Name: Tommy Rodgers</span>
            <span>Room No.: B-215 </span>
            <span>Roll No.: 108935424 </span>
            <span>Attendance Percentage: 33%</span>
          </li>
          <li>
            <span>Name: Willis Ball</span>
            <span>Room No.: A-315 </span>
            <span>Roll No.: 204935829 </span>
            <span>Attendance Percentage: 41%</span>
          </li>
          <li>
            <span>Name: Frank Lopez</span>
            <span>Room No.: C-420 </span>
            <span>Roll No.: 106258039 </span>
            <span>Attendance Percentage: 44%</span>
          </li>
          <li>
            <span>Name: Johnny Turner</span>
            <span>Room No.: B-101 </span>
            <span>Roll No.: 105927310 </span>
            <span>Attendance Percentage: 53%</span>
          </li>
        </ul>
      </StyledContent>
    </StyledAttendance>
  );
};
const StyledAttendance = styled.section`
  width: 100%;
  height: calc(100vh - var(--navBarHeight));
  overflow: hidden;
  display: flex;
  flex-direction: column;

  background: linear-gradient(
    to left,
    #ffffff,
    #fffd88 80%
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;
const StyledHeader = styled.header`
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  font-size: clamp(0.8rem, 3vw, 1.2rem);
  z-index: 5;
  border-bottom: 2px solid #000;
`;
const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  z-index: 5;
  ul {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  li {
    width: 100%;
    padding: clamp(0.7rem, 2vw, 2rem);
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid #000;
    align-items: center;
    font-size: clamp(0.5rem, 3vw, 1rem);
    transition: background ease 0.3s;
    span {
      min-width: 20%;
    }
    &:hover {
      background: #ffffff60;
    }
  }
`;

export default AttendanceAdmin;
