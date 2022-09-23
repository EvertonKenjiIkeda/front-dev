import {
  InfoContainer,
  InfoRow,
  InfoRowMultiple,
  InfoRowRight,
  MainProfileContainer,
  ProfileIncrementContainer,
} from "./styles";

export function ProfileIncrement() {
  return (
    <ProfileIncrementContainer>
      <h1>PROFILE INCREMENT</h1>

      <MainProfileContainer>
        <div className="mainContainerHeader">
          <div className="cardOut">IM347</div>
          <div>
            <h2>PROFILE TEST</h2>
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
              <span>
                Candidata não foi aprovada pelo clientes, porém possui bons
                conhecimentos técnicos em DEV.
              </span>
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
            <InfoRowMultiple>
              <InfoRow>
                <h3>Email</h3>
                <span>No data available</span>
              </InfoRow>
              <InfoRow>
                <h3>GitHub URL</h3>
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
              <h3>Resolved on:</h3>
              <span>09/03/2022</span>
            </InfoRowRight>
            <InfoRowRight>
              <h3>Feedback:</h3>
              <span>Not Approved - Does Not Meet the Requeriments</span>
            </InfoRowRight>
          </div>
        </InfoContainer>
      </MainProfileContainer>
    </ProfileIncrementContainer>
  );
}
