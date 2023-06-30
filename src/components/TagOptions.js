import { TAGS } from "../datas/Tags";
import "./TagOptions.css";
const TagOptions = (props) => {
  const tagOptions = Object.values(TAGS);
  const tagOptionHandler = (event) => {
    props.onSetTagOption(event.target.value);
  };
  return (
    <div>
      <div className="tag-options-container">
        <select className="tag-options-select" onChange={tagOptionHandler}>
          {tagOptions.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
export default TagOptions;
