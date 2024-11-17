import { FC } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { TagBoxProps } from "../../../types";

const TagBox: FC<TagBoxProps> = ({ tags, onRemove }) => (
  <div className="tag-box">
    {tags.map((value) => (
      <div key={value} className="input-field__tag">
        <p>{value.length > 20 ? `${value.slice(0, 20)}...` : value}</p>
        <IoCloseOutline
          size={16}
          strokeWidth={5}
          color="black"
          onClick={() => onRemove(value)}
        />
      </div>
    ))}
  </div>
);

export default TagBox