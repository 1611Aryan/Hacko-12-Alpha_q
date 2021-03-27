import styled from "styled-components";
import Button from "../../Styled/Button";
import Divider from "../../Styled/Divider";

const Ground = () => {
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
    <StyledGround>
      <h1>
        Hostel Grounds
        <Divider />
      </h1>
      <ul>
        {time.map((t, index) => (
          <Button key={index} m={t} />
        ))}
      </ul>
    </StyledGround>
  );
};
const StyledGround = styled.div`
  h1 {
    display: flex;
    justify-content: stretch;
    align-items: center;
    div {
      background: black;
    }
  }
  ul {
    --bg: coral;
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
`;
export default Ground;
