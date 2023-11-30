import React from "react";
import { motion } from "framer-motion";

const NotAccess = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      NotAccess
    </motion.div>
  );
};

export { NotAccess };
