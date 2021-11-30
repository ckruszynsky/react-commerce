import React from "react";
import { Spinner } from "react-bootstrap";
const Loader = () => {
  return (
    <>
      <Spinner
        animation="border"
        variant="primary"
        style={{ height: "100px", width: "100px", margin: "auto" }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    </>
  );
};
export default Loader;
