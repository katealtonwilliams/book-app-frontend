import { FC } from "react";
import "../index.css";

interface SignProps {
  text: string;
  imageUrl: string;
}

const MainSign: FC<SignProps> = ({ text, imageUrl }) => {
  return (
    <div className="sign" style={{ backgroundImage: `url(${imageUrl})` }}>
      {text}
    </div>
  );
};

export default MainSign;
