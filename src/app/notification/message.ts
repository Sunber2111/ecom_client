import { toast } from "react-toastify";

export const messageSuccess = (message: string, autoClose = 5000) => {
  toast.success(message, {
    position: "top-right",
    autoClose: autoClose,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const messageError = (message: string,autoClose = 5000) => {
    toast.error(message, {
      position: "top-right",
      autoClose: autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  
