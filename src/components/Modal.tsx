import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence, easeIn, easeOut } from "framer-motion";

const SignModal: React.FC<SignModalProps> = ({ children, onClose }) => {
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
          {children}
          <button className="button" onClick={onClose}></button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SignModal;
