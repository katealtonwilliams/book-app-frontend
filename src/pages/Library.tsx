import { FC } from "react";
import "../index.css";
import MenuAccordion from "../components/MenuAccordion";
import SimpleModal from "../components/Modal";

const Library: FC = () => {
  return (
      <div>
        <MenuAccordion />
        <SimpleModal/>
      </div>
  );
};

export default Library;
