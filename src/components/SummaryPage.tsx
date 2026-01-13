import { FC } from "react";

const Summary: FC = () => {
  return (
    <>
      <div className="pages left-page">
        <h1>Your Book Personality</h1>
        What you read says a lot about you! <br></br> <br></br>
        Whether you like romantic books, adventure books, fiction, non-fiction,
        or all of the above. <br></br> <br></br>
        Click below to get a personalised summary of your personality based on
        the books you've read! <br></br> <br></br>
        <button> Click here to find out your book personality </button>
      </div>
      <div className="pages right-page">Some words</div>

    </>
  );
};

export default Summary;
