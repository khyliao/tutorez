import toast from "react-hot-toast";

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    duration: 3000,
    style: {
      background: "#f8fcf6",
    },
  });
};

export const showErrorToast = (message: string) => {
  toast.error(message, {
    duration: 3000,
    style: {
      background: "#fcf6f6",
    },
  });
};
