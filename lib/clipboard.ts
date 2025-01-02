import { toast } from "react-toastify";

export const notifySuccess = (message: string) => toast.success(message);

export const notifyError = (message: string) => toast.error(message);

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);

    notifySuccess(`ID was copied!`);
  } catch (err) {
    notifyError("Failed to copy text!");
  }
};
