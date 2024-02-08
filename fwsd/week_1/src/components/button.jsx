export const NewButton = (props) => {
   return <button
    style={{ backgroundColor: props.color }}
    onClick={props.doMaths}
  >
    {props.text}
  </button>
}