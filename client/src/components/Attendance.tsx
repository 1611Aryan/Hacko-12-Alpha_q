import styled from "styled-components";

const Attendance = () => {
  const studentAttendance = {
    total: 120,
    present: 92,
  };

  return (
    <StyledAttendance>
      <StyledHeader>
        <h1>Attendance</h1>
      </StyledHeader>
      <StyledContent>
        <div className="totalDays">
          Total number of Hostel Days: <span>{studentAttendance.total}</span>
        </div>
        <div className="present">
          Days Present in Hostel: <span>{studentAttendance.present}</span>
        </div>
        <div className="absent">
          Days Absent:{" "}
          <span>{studentAttendance.total - studentAttendance.present}</span>
        </div>
        <div className="percentage">
          Percentage of Days Absent:{" "}
          <span>
            {Math.round(
              ((studentAttendance.total - studentAttendance.present) /
                studentAttendance.total) *
                100
            )}
            %
          </span>
        </div>
      </StyledContent>
    </StyledAttendance>
  );
};

const StyledAttendance = styled.section`
  width: 100vw;
  height: calc(100vh - var(--navBarHeight));
  overflow: hidden;
  background: #cfb899;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;
const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem;
  text-align: center;
  font-size: clamp(1rem, 3vw, 1.5rem);
`;
const StyledContent = styled.main`
  width: 100%;
  height: 100%;
  padding: 4rem;
  font-size: clamp(0.9rem, 3vw, 1.35rem);
  div {
    margin: 2rem 0;
  }
`;
export default Attendance;
