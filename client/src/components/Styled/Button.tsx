import styled from "styled-components";

const Button: React.FC<{
  m: string;
  onClick?: React.MouseEventHandler<HTMLLIElement>;
}> = ({ m, onClick = undefined }) => {
  return (
    <StyledButton onClick={onClick}>
      <div className="cover"></div>
      <span>{m}</span>
    </StyledButton>
  );
};

const StyledButton = styled.li`
  position: relative;
  overflow: hidden;
  padding: 1rem 2rem;
  background: var(--color);
  color: var(--bg);
  border-radius: 30px;
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
`;

export default Button;
