import FormApplication from "../FormApplication";

interface IQrModal {
  onClose: () => void;
}

const QrModal = ({ onClose }: IQrModal) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="relative bg-white p-6 pt-7 rounded-lg shadow-lg max-w-sm text-center">
        <FormApplication />
        <button
          onClick={onClose}
          className="absolute right-2 top-1 leading-4 text-xl p-2 bg-white rounded-full text-black"
        >
          x
        </button>
      </div>
    </div>
  );
};

export default QrModal;
