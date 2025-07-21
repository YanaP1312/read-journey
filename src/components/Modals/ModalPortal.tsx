import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root")!;
const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  return createPortal(children, modalRoot);
};

export default ModalPortal;
