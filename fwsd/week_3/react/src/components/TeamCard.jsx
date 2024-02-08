import { DisplayTeam } from "./DisplayTeam";
import { TeamForm } from "./TeamForm"
export const TeamCard = (props) => {
  return (
    <div className="teamCard">
      <DisplayTeam team={props.team}/>
      <TeamForm handleInputChange={props.handleInputChange}/>
    </div>
  );
};
