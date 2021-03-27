import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { PieChart } from "react-minimal-pie-chart";

const LabelStyle = {
  fontSize: "3px",
  fontFamily: "poppins",
};

const MessStatus = () => {
  //url
  const URL =
    process.env.NODE_ENV === "production"
      ? "/student"
      : "http://localhost:5000/student";

  //State
  const [responses, setResponses] = useState<null | {
    total: number;
    eating: number;
    notEating: number;
  }>(null);

  //
  useEffect(() => {
    (async () => {
      try {
        let eating = 0;
        let notEating = 0;
        const res: any = await axios.get(URL);
        const students = res.data;

        students.forEach((student: any) => {
          if (student.response.sent)
            student.response.eating ? eating++ : notEating++;
        });
        setResponses({
          eating: eating + 7,
          notEating: notEating + 15,
          total: students.length + 22,
        });
      } catch (err) {
        throw err;
      }
    })();
  }, [URL]);

  return (
    <StyledMessStatus>
      <StyledHeader>
        <h1>Mess Status</h1>
      </StyledHeader>{" "}
      <div className="overlay"></div>
      <StyledContent>
        {responses && (
          <>
            <div className="responses">
              <div>
                <p>Total Students: {responses.total}</p>
                <p>Students Who will be Eating: {responses.eating}</p>
                <p>Students Who won't be Eating: {responses.notEating}</p>
                <p>
                  Students Who Haven't Submitted:
                  {responses.total - responses.notEating - responses.eating}
                </p>
              </div>
            </div>
            <PieChart
              data={[
                {
                  title: "Didn't Submit",
                  value:
                    responses?.total - responses.eating - responses.notEating,
                  color: "#62cbff",
                },
                {
                  title: "Not Eating",
                  value: responses?.notEating,
                  color: "yellow",
                },
                { title: "Eating", value: responses?.eating, color: "coral" },
              ]}
              radius={30}
              label={({ dataEntry }) => {
                if (dataEntry.value === 0) return null;
                if (
                  dataEntry.value ===
                  responses?.total - responses.eating - responses.notEating
                ) {
                  return "Didn't Respond";
                }
                if (dataEntry.value === responses.eating) return "Will Eat";
                if (dataEntry.value === responses.notEating)
                  return "Not Eating";
                return dataEntry.value;
              }}
              labelStyle={LabelStyle}
            />
          </>
        )}
        ;
      </StyledContent>
    </StyledMessStatus>
  );
};

const StyledMessStatus = styled.section`
  width: 100%;
  height: calc(100vh - var(--navBarHeight));
  overflow: hidden;
  display: flex;
  flex-direction: column;
  z-index: -1;
  background: linear-gradient(to right, #ffefba, #ffffff);
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
  }
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(1px);
    z-index: -1;
  }
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
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  .responses {
    width: 100%;
    padding: 2rem clamp(2rem, 3vw, 4rem);
    font-size: clamp(0.8rem, 2vw, 1.2rem);
    p {
      margin: 2rem 0;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    .responses {
      padding: 2rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p {
        margin: 1rem 0;
      }
    }
  }
`;

export default MessStatus;
