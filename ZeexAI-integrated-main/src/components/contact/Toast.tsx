import { useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';


interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

function Toast({ message, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="toast-container">
      <div className="toast-content">
        <div className="toast-icon-wrapper">
          <div className="toast-icon-box">
            <CheckCircle size={24} style={{ color: '#4ade80' }} />
          </div>
        </div>
        <div className="toast-message">
          <p>{message}</p>
        </div>
        <button onClick={onClose} className="toast-close">
          <X size={20} />
        </button>
      </div>
    </div>
  );
}

export default Toast;