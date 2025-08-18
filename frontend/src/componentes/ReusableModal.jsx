
import { IoIosCloseCircle } from "react-icons/io";
import '../assets/styles/promo.css'


export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <button  className="modalCloseBtn" onClick={onClose}><IoIosCloseCircle  /></button>
        {children}
      </div>
    </div>
  );
};
