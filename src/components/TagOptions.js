import { TAGS } from "../datas/Tags";
import styles from "./TagOptions.module.css";
const TagOptions = (props) => {
  const tagOptions = Object.values(TAGS);
  const tagOptionHandler = (event) => {
    props.onSetTagOption(event.target.value);
  };
  return (
    <>
      <div className={styles["tag-options-container"]}>
        <select className={styles["select"]} onChange={tagOptionHandler}>
          {tagOptions.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default TagOptions;
