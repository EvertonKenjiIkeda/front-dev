import { ArrowRight, Funnel, MagnifyingGlass, PencilSimple, UserCircle} from "phosphor-react";
import { ProfileContainer } from "../../styles/Routes/Profile.styles";

export default function Profile() {
  return (
    <ProfileContainer>
      <div>
        <tr id="filterHeader">
          <td id="profile">
            <label>
            <h1>PROFILE</h1>
            Last updated by Mapfre on 09/03/2022 09:23 AM</label>
          </td>
          <td id="tableFilter">
            <label id="filterInput">
              <MagnifyingGlass size={25} />
              <input type="text" placeholder="Search for profile..."/>
              <ArrowRight size={25} />
            </label>
            <button id="filter">
            <Funnel size={32} />
            </button>
            <button id="newProfile">
              <h3>NEW PROFILE</h3>
            </button>
          </td>
        </tr>
      </div>
      <table>
        <tr id="tableHead">
          <th>S.No</th>
          <th>Title</th>
          <th>Discription</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Actions</th>
        </tr>
        <tr id="tableBody">
          <td>1</td>
          <td>Giovanni Teste</td>
          <td>Profile Shared</td>
          <td><label className="done">DONE</label></td>
          <td><UserCircle size={32} /><label> Mapfre</label></td>
          <td><button><PencilSimple size={25} /></button></td>
        </tr>
        <tr id="tableBody">
          <td>2</td>
          <td>Giba</td>
          <td>Cv não aprovado por cliente</td>
          <td><label className="undone">UNDONE</label></td>
          <td><UserCircle size={32} /><label> Mapfre</label></td>
          <td><button><PencilSimple size={25} /></button></td>
        </tr>
      </table>
    </ProfileContainer>
  );
}