import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export { toast };

const Toast = () => (
  <ToastContainer
    position="top-right"
    autoClose={3000}
    newestOnTop
    closeOnClick
    pauseOnFocusLoss
    draggable
    pauseOnHover
  />
);

export default Toast;
