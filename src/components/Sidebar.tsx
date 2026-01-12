import { useState } from "react";
import MainSign from "./MainSign";
import { motion, AnimatePresence, Variants } from "framer-motion";
import SignModal from "./Modal";
import SubSign from "./SubSigns";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [openModal, setOpenModal] = useState<string | null>(null);

  const sidebarItems = ["Summary", "Stats", "All Books"];

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
    <div className="App" style={{ display: "flex", minHeight: "100vh" }}>
      <div className="sidebar">
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
              {sidebarItems.map((text) => (
                <motion.div key={text} variants={itemVariants}>
                  <SubSign onClick={() => setOpenModal(text)} text={text} />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {openModal && (
        <SignModal text={openModal} onClose={() => setOpenModal(null)} />
      )}
    </div>
  );
};

export default Sidebar;
