import { Spinner } from "react-bootstrap";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="text-center my-4">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default Loader;