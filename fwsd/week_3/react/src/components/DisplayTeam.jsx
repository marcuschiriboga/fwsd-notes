export const DisplayTeam = ({team}) => {
    return (
    <div style={{outline: "2px solid black"}}>
        <p>Team: {team.name}</p>
        <p>Founded: {team.founded}</p>
        <p>Location: {team.location}</p>
        <p>Stadium: {team.stadium}</p>
    </div>
    )
}