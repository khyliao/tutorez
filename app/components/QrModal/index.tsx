import { motion } from "framer-motion";
import FormApplication from "../FormApplication";
import { useEffect } from "react";
import { useLang } from "@/hooks/useLang";

interface IQrModal {
  onClose: () => void;
}

const QrModal = ({ onClose }: IQrModal) => {
  const { t, lang } = useLang();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/50'>
      <div className='relative bg-white p-6 pt-7 rounded-lg shadow-lg max-w-sm text-center'>
        <FormApplication />
        <motion.button
          initial={{
            y: -5,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1.2,
            },
          }}
          viewport={{ once: true }}
          onClick={onClose}
          className='absolute right-2 top-1 leading-4 text-xl p-2 bg-white rounded-full text-black'
        >
          x
        </motion.button>
        {/* <motion.button
          initial={{
            y: 20,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: {
              duration: 1.2,
              delay: 0.2,
            },
          }}
          viewport={{ once: true }}
          className='w-[164px] md:w-[176px] xl:w-[200px] inline-block p-3 xl:p-4 text-center font-semibold tracking-wide font-open-sans text-sm md:text-base lg:text-lg md:font-semibold md:-tracking-tight leading-6 transition-colors duration-300 text-white bg-[#000000] hover:bg-[#19191b]  rounded-lg'
          type='submit'
        >
          {t[lang].form.submitBtn}
        </motion.button> */}
      </div>
    </div>
  );
};

export default QrModal;
