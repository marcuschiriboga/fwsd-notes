// PlayerCard one player
export const PlayerCard = ({player}) => {
  return (
    <>
      <ul style={{ outline: "2px solid black" }}>
        <div>First Name: {player.firstName}</div>
        <div>Last Name: {player.lastName}</div>
        <div>Jersey Number: {player.jerseyNum}</div>

        { player.pos ? <div>Position: {player.pos}</div>: ""}
        {/* for the forward */}
        {player.style ? <div>Style: {player.style}</div>: ""}
        {/* for the goalie */}
      </ul>
    </>
  );
};
