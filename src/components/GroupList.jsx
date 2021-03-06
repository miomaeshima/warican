import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import ToggleButton from "@material-ui/lab/ToggleButton";

export default function GroupList(props) {
  console.log(props.list);
  // const [ selected, setSelected ] = useState(false);
  return (
    <>
      <h1>Group Setting</h1>
      {props.list.map((friend, i) => (
        <>
          {friend.name}
          <ToggleButton
            value="check"
            key={i}
            selected={friend.selected}
            className="add"
            onChange={() => {
              console.log(friend.selected, i);
              let newList = props.list;
              newList[i].selected = !props.list[i].selected;
              props.setList(newList);
            }}
          >
            <CheckIcon />
          </ToggleButton>
        </>
      ))}
      <div>{`Number of members is ${
        props.list.filter((friend) => friend.selected === true).length
      }`}</div>
      <button
        type="button"
        className="confirm"
        onClick={() => {
          props.setView("Payment");
        }}
      >
        confirm
      </button>
    </>
  );
}
