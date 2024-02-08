export const TeamForm = props => {
  return (
    <div className="teamForm">
      <label>
        Team Location:
        <input type="text" name="location" onChange={props.handleInputChange} />
      </label>
      <br />
      <label>
        Team Name:
        <input type="text" name="name" onChange={props.handleInputChange} />
      </label>
      <br />
      <label>
        Team Stadium:
        <input type="text" name="stadium" onChange={props.handleInputChange} />
      </label>
    </div>
  );
};
