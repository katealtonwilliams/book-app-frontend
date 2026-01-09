import { FC } from "react";
import "../index.css";

const SubSign: FC<SignProps> = ({ text, onClick }) => {
  return (
    <div className="sign sub-sign" onClick={onClick}>
      {text}
    </div>
  );
};

export default SubSign;
