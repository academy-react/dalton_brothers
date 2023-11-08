import React from "react";
import { motion } from "framer-motion";
import { RegisterForm } from "./RegisterSection/RegisterForm";

const Register = () => {
  return (
    <motion.div
      dir="ltr"
      className={`xl:bg-[url("../../../src/assets/Images/register-bg.svg")] xl:justify-end md:px-[50px] justify-center bg-no-repeat bg-cover bg-center w-[100%] h-[100vh] pt-[100px]  flex flex-nowrap items-start `}
           initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <RegisterForm />
    </motion.div>
  );
};

export { Register };
