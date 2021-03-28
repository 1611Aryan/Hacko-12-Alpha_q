import styled from "styled-components";

const Button: React.FC<{
  m: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
  active?: boolean;
}> = ({ m, onClick = undefined, active = false }) => {
  return (
    <StyledButton onClick={onClick}>
      <div className={active ? "activeDiv" : "cover"}></div>
      <span className={active ? "activeSpan" : ""}>{m}</span>
    </StyledButton>
  );
};

const StyledButton = styled.li`
  position: relative;
  overflow: hidden;
  padding: clamp(0.5rem, 2vw, 1rem) clamp(0.6rem, 3vw, 2rem);
  background: var(--color);
  color: var(--bg);
  border-radius: 30px;
  font-size: clamp(0.7rem, 2vw, 1rem);
  text-align: center;
  cursor: pointer;
  transition: all ease-in-out 0.3s;
  .cover {
    position: absolute;
    top: 0;
    left: 0;
    width: 110%;
    height: 110%;
    transform: translate(-100%);
    background: var(--bg);
    transition: all ease-in-out 0.3s;
  }
  span {
    position: relative;
    z-index: 2;
  }
  &:hover {
    color: var(--color);
    .cover {
      transform: translate(0);
    }
  }
  .activeDiv {
    position: absolute;
    top: 0;
    left: 0;
    width: 110%;
    height: 110%;
    background: var(--bg);
  }
  .activeSpan {
    color: var(--color);
  }
`;

export default Button;
