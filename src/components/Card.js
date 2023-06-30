import "./Card.css";
import { TAGS } from "../datas/Tags";

const Card = (props) => {
  let className = "card";
  const tag = props.tag;

  const colors = {
    [TAGS.ALL]: "#e0e0e0",
    [TAGS.STUDY]: "#ffe0e0",
    [TAGS.EXERCISE]: "#e0f0ff",
    [TAGS.WORK]: "#e0ffe0",
    [TAGS.FRIENDS]: "#ffe0d0",
  };

  const style = {
    border: `4px solid ${colors[tag]}`, // set border to be thicker
    borderColor: `${colors[tag]}80`, // set border color to be darker
  };

  if (props.className) {
    className += `-${props.className}`;
  }

  return (
    <div onClick={props.onClick} className={className} style={style}>
      {props.children}
    </div>
  );
};

export default Card;
