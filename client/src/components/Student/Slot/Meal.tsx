import styled from "styled-components";
import Divider from "../../Styled/Divider";
import Button from "../../Styled/Button";

const Meal: React.FC<{
  meal: string;
  time: string[];
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ meal, time, setMessage, setModal }) => {
  //State

  //Handlers
  const openModal = (t: number, m?: string) => {
    if (t === 0) {
      setMessage(`Confirm the slot for ${m}`);
    } else {
      setMessage(`Are you sure you won't eat ${meal}`);
    }
    setModal(true);
  };

  return (
    <StyledMeal>
      <div>
        <h3>Confirm Your Slot for {meal}</h3>
        <Divider />
        <ul>
          {time.map((t, index) => (
            <Button key={index} m={t} onClick={() => openModal(0, t)} />
          ))}
        </ul>
        <p>
          If no slot is confirmed, you'll automatically be assigned the last
          given slot.
        </p>
      </div>
      <div className="eating">
        <h3>Not having {meal} today?</h3>
        <Divider />
        <ul>
          <Button m={"Skip"} onClick={() => openModal(1)} />
        </ul>
      </div>
    </StyledMeal>
  );
};

const StyledMeal = styled.main`
  position: relative;
  z-index: 2;
  overflow: hidden;
  width: 100vw;
  height: calc(100vh - var(--navBarHeight));
  color: white;
  padding: 0 1rem;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(1px);
    z-index: 2;
  }

  h3 {
    font-size: 1.5rem;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style-type: none;
    --bg: coral;
    --color: white;
  }

  li + li {
    margin-left: 1rem;
  }
  p {
    margin: 1rem 0;
    color: #fff238;
    &:hover {
      color: #fff45d;
    }

    .eating {
      padding: 2rem 0;
    }
  }
`;

export default Meal;
