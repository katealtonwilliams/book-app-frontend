import { FC } from "react";
import "../index.css";
import { SubSignProps } from "../types/components";

const SubSign: FC<SubSignProps> = ({ text }) => {
  return <div className="sign sub-sign">{text}</div>;
};

export default SubSign;
