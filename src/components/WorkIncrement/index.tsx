import {
  InfoContainer,
  InfoRow,
  InfoRowMultiple,
  InfoRowRight,
  MainWorkContainer,
  WorkIncrementContainer,
} from "./styles";

export function WorkIncrement() {
  return (
    <WorkIncrementContainer>
      <h1>WORKITEM INCREMENT</h1>

      <MainWorkContainer>
        <div className="mainContainerHeader">
          <div>
            <h2>ANALISTA DE SISTEMAS - LONDRINA</h2>
            <span>Created by Leonardo Serrão on 09/03/2022</span>
          </div>

          <button>EDIT</button>
        </div>

        <InfoContainer>
          <div className="leftSide">
            <InfoRow>
              <h3>Description</h3>
              <span>No data available</span>
            </InfoRow>
            <InfoRow>
              <h3>Resolution Comments</h3>
              <span>No data available</span>
            </InfoRow>
            <InfoRowMultiple>
              <InfoRow>
                <h3>Skill</h3>
                <span>No data available</span>
              </InfoRow>
              <InfoRow>
                <h3>Linkedin URL</h3>
                <span>No data available</span>
              </InfoRow>
            </InfoRowMultiple>
          </div>
          <div className="rightSide">
            <InfoRowRight>
              <h3>Status:</h3>
              <span>DONE</span>
            </InfoRowRight>
            <InfoRowRight>
              <h3>Owner:</h3>
              <span>Mapfre</span>
            </InfoRowRight>
            <InfoRowRight>
              <h3>Profile:</h3>
              <span>Mapfre</span>
            </InfoRowRight>
            <InfoRowRight>
              <h3>Feedback:</h3>
              <span>Not Approved - Does Not Meet the Requeriments</span>
            </InfoRowRight>
            <InfoRowRight>
              <h3>Feedback RH:</h3>
              <span>Not Approved - Does Not Meet the Requeriments</span>
            </InfoRowRight>
          </div>
        </InfoContainer>
      </MainWorkContainer>
    </WorkIncrementContainer>
  );
}
