import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
const ModalOverlay = (props) => {
  return <div className={classes.modalOverlay}>{props.children}</div>;
};
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default Modal;
