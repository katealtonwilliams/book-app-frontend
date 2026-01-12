import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, easeIn, easeOut } from "framer-motion";

interface SignModalProps {
  text: string;
  onClose: () => void;
}

const SignModal: React.FC<SignModalProps> = ({ text, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  const modalVariants = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
    exit: {
      scaleX: 0,
      opacity: 0,
      transition: { duration: 0.4, ease: easeIn },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        className="modal-area"
        key={text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          ref={modalRef}
          className="sign-modal"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          tabIndex={-1}
          style={{ transformOrigin: "center" }}
        >
          <h2>{text}</h2>
          <p>This modal opens like a book!</p>
          <button onClick={onClose}>Close</button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SignModal;
