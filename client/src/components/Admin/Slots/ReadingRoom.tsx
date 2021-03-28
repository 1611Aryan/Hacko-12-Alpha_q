import styled from "styled-components";
import Button from "../../Styled/Button";
import Divider from "../../Styled/Divider";

const ReadingRoom: React.FC<{
  students:
    | {
        name: string;
        rollNumber: string;
        meal: string;
        ground: string;
        reading: string;
      }[]
    | null;
}> = ({ students }) => {
  const time = [
    "8-9AM",
    "9-10AM",
    "10-11AM",
    "11-12PM",
    "12-1PM",
    "1-2PM",
    "2-3PM",
    "3-4PM",
    "4-5PM",
    "5-6PM",
    "6-7PM",
    "7-8PM",
    "8-9PM",
    "9-10PM",
    "10-11PM",
    "11-12AM",
    "12-1AM",
  ];

  return (
    <StyledReadingRoom>
      <h1>
        Reading Room
        <Divider />
      </h1>
      <ul>
        {time.map((t, index) => (
          <Button key={index} m={t} />
        ))}
      </ul>
      <ul className="students">
        {students &&
          students
            .filter(student => student.reading !== "")
            .map((student, index) => (
              <li key={index}>
                <div>
                  <span>{student.reading}</span>
                  <span>{student.name}</span>
                  <span>{student.rollNumber}</span>
                </div>
              </li>
            ))}
      </ul>
    </StyledReadingRoom>
  );
};

const StyledReadingRoom = styled.div`
  h1 {
    display: flex;
    justify-content: stretch;
    align-items: center;
    div {
      background: black;
    }
  }
  ul {
    --bg: #4e4e4e;
    --color: white;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
    flex-wrap: wrap;
    gap: 1rem;
    li {
      padding: 0.5rem 0.7rem;
      font-size: 0.8rem;
    }
  }
  .students {
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    li {
      width: 100%;
      padding: 1.5rem 1rem;
      border-bottom: 0.5px solid black;
      font-size: clamp(0.7rem, 1vw, 1rem);
      div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span {
          min-width: 20%;
          max-width: 23%;
        }
      }
    }
  }
`;
export default ReadingRoom;
