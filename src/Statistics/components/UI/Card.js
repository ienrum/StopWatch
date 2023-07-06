import { TAGS } from "../../../datas/Tags";
import styles from "./Card.module.css";

const Card = (props) => {
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
    borderColor: `${colors[tag]}90`, // set border color to be darker
  };

  return (
    <div
      onClick={props.onClick}
      className={`${props.className} ${styles.card}`}
      style={style}
    >
      {props.children}
    </div>
  );
};

export default Card;
