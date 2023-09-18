import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const animationStyle = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

function Header({ className, children, animation = false }) {
  return (
    <>
      {!animation ? (
        <h1
          className={twMerge(
            "font-primaryFont text-[1.75rem] leading-tight text-stone-800 sm:text-[2.0rem] xl:text-[2.5rem]",
            className,
          )}
        >
          {children}
        </h1>
      ) : (
        <motion.h1
          variants={animationStyle}
          initial="hidden"
          whileInView="active"
          viewport={{ once: true, amount: 0.7 }}
          className={twMerge(
            "font-primaryFont text-[1.75rem] leading-tight text-stone-800 sm:text-[2.0rem] xl:text-[2.5rem]",
            className,
          )}
        >
          {children}
        </motion.h1>
      )}
    </>
  );
}

export default Header;
