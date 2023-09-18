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

function Text({ className, children, animation = true, ...props }) {
  return !animation ? (
    <p
      className={twMerge(
        "mb-8  w-full text-lg text-stone-600  lg:text-[1.0rem]",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  ) : (
    <motion.p
      variants={animationStyle}
      initial="hidden"
      whileInView="active"
      viewport={{ once: true, amount: 0.7 }}
      className={twMerge(
        "mb-8  w-full text-lg text-stone-600  lg:text-[1.0rem]",
        className,
      )}
      {...props}
    >
      {children}
    </motion.p>
  );
}

export default Text;
