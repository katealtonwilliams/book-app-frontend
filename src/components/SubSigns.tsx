import { FC } from "react";

const SubSign: FC<SignProps> = ({ title, onClick }) => {
  return (
    <div className="sign sub-sign" onClick={onClick}>
      {title}
    </div>
  );
};

export default SubSign;
