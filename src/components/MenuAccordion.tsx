import { useState } from "react";
import MainSign from "./MainSign";
import { motion, AnimatePresence, Variants } from "framer-motion";
import SubSign from "./SubSigns";

const MenuAccordion = () => {
  const [expanded, setExpanded] = useState(false);
  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: -50, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="sign-container">
      <MainSign onClick={() => setExpanded(!expanded)} />
      <AnimatePresence>
        {expanded && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            style={{ display: "flex", flexDirection: "column", gap: 5 }}
          >
            {["Summary", "Stats", "All Books"].map((text) => (
              <motion.div key={text} variants={itemVariants}>
                <SubSign text={text} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MenuAccordion;
