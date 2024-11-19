import { useState } from "react";
import { nanoid } from "nanoid";

interface Props {
  onClick: () => void;
}

function Heart({ onClick }: Props) {
  const [liked, setLiked] = useState(false);
  const color = liked ? "red" : "black";

  return (
    <span
      key={nanoid()}
      onClick={() => {
        setLiked(!liked);
        onClick();
      }}
    >
      <i
        style={{ width: 30, height: 30, color: color }}
        className={liked ? "fa-heart fa-solid" : "fa-heart fa-regular"}
      ></i>
    </span>
  );
}

export default Heart;
