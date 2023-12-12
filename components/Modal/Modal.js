import "@/components/Modal/Modal.css";
import { useEffect, useState } from "react";

export default function Modal({ children, isOpen, onClose, stars }) {
  const [animate, setAnimate] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  return (
    isOpen && (
      <div
        className={`react-modal-overlay ${isOpen ? "active" : ""}`}
        onClick={onClose}
      >
        <div
          className={`react-modal-wrapper ${animate ? "animate" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="react-modal-content">
            {children}

            <button className="" type="button" onClick={onClose}>
              <i className="bi bi-x-lg"></i>
            </button>

            <div className="rating_con">
              {Array.from({ length: stars }, (_, index) => (
                <i key={index} className="bi bi-star-fill"></i>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
