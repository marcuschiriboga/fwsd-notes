export const BandMemberCard = (props) => {
    return <li key={props.i} style={{ outline: "2px solid black" }}>
    <div>
      Name: {props.member.firstName} {props.member.lastName}
    </div>
    <div>Age: {props.member.age}</div>
    <div>Instrument: {props.member.instrument}</div>
  </li>
}