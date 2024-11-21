import { ReactNode, useState } from "react";

interface Props {
  maxChars?: number;
  children: ReactNode;
}

function TextExpandable({ maxChars = 100, children }: Props) {
  const [buttonText, setButtonText] = useState("more");

  const handleClick = () => {
    buttonText === "more" ? setButtonText("less") : setButtonText("more");
  };

  // let str = children.toString();
  // str.substring(0, maxChars);

  return (
    <>
      <p>max chars: {maxChars}</p>
      <p>
        {buttonText === "more" ? children.toString().substring(0, maxChars) + "..." : children}
        <button className="btn btn-sm btn-primary ms-2" onClick={handleClick}>
          {buttonText}
        </button>
      </p>
    </>
  );
}

export default TextExpandable;
