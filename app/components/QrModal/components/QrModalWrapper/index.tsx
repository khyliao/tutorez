import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const QrModalWrapper = ({
  setIsModalOpen,
}: {
  setIsModalOpen: (val: boolean) => void;
}) => {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("openModal") === "true") {
      setIsModalOpen(true);
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [searchParams]);

  return null;
};

export default QrModalWrapper;
