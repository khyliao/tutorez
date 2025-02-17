import toast from "react-hot-toast";

const isDarkTheme = () =>
  typeof window !== "undefined" &&
  document.documentElement.classList.contains("dark");

export const showSuccessToast = (message: string) => {
  toast.success(message, {
    duration: 3000,
    style: {
      background: isDarkTheme() ? "#2A2D3A" : "#f8fcf6",
      color: isDarkTheme() ? "#fff" : "#000",
    },
  });
};

export const showErrorToast = (message: string) => {
  toast.error(message, {
    duration: 3000,
    style: {
      background: isDarkTheme() ? "#3A2A2A" : "#fcf6f6",
      color: isDarkTheme() ? "#fff" : "#000",
    },
  });
};
