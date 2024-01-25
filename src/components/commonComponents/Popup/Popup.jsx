import "./Popup.css";

const Popup = ({ text, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div className="popup-header">
          <button className="close-button" onClick={onClose}>
            Закрыть
          </button>
        </div>
        <div className="popup-body">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Popup;
