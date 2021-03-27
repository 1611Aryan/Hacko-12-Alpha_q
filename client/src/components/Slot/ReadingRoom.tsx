import styled from "styled-components";
import Button from "../Button";
import Divider from "../Divider";

const ReadingRoom = () => {
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
      <div>
        <h3>Confirm Your Slot for Reading Room</h3>
        <Divider />
        <ul>
          {time.map((t, index) => (
            <Button key={index} m={t} />
          ))}
        </ul>
      </div>
    </StyledReadingRoom>
  );
};

const StyledReadingRoom = styled.div`
  position: relative;
  z-index: 2;
  padding: 1rem;
  color: white;
  ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
    --bg: #4e4e4e;
    --color: white;
    flex-wrap: wrap;
    gap: 1rem;
  }

  /* li + li {
    margin-left: 1rem;
  } */
`;

export default ReadingRoom;
