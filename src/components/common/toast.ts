import { Bounce, toast } from "react-toastify";

export enum EToastType {
  SUCCESS = "success",
  ERROR = "error",
  INFO = "info",
  WARNING = "warning",
}

type NotificationType = {
  message: string;
  type: EToastType;
};

export const notification = ({ message, type }: NotificationType) => {
  enum ToastPosition {
    TOP_LEFT = "top-left",
    TOP_RIGHT = "top-right",
    TOP_CENTER = "top-center",
    BOTTOM_LEFT = "bottom-left",
    BOTTOM_RIGHT = "bottom-right",
    BOTTOM_CENTER = "bottom-center",
  }

  const settings = {
    position: ToastPosition.TOP_RIGHT,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };

  const getToastType = (type: EToastType) => {
    switch (type) {
      case EToastType.ERROR:
        return toast.error(message, { ...settings });
      case EToastType.INFO:
        return toast.info(message, { ...settings });
      case EToastType.SUCCESS:
        return toast.success(message, { ...settings });
      case EToastType.WARNING:
        return toast.warn(message, { ...settings });
      default:
        return toast(message, { ...settings });
    }
  };

  return getToastType(type);
};
