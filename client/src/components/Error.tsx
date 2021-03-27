import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Error = () => {
  return (
    <StyledError>
      <h1>Page Not Found</h1>
      <Link to="/">
        <FontAwesomeIcon icon={faArrowLeft} />
        Go Back
      </Link>
    </StyledError>
  );
};

const StyledError = styled.div`
  padding: 1rem;
  a {
    svg {
      margin-right: 1rem;
    }
    &:hover {
      text-decoration: underline;
      color: blue;
    }
  }
`;

export default Error;
