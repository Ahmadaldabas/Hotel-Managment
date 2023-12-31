import { motion } from "framer-motion";

import { twMerge } from "tailwind-merge";

function FlexContainer({
  className,
  children,
  innerRef = null,
  ...props
}) {
  return (
    <motion.div
      className={twMerge(
        "flex flex-col flex-wrap items-center gap-4   text-center text-stone-700 lg:order-none lg:items-stretch  lg:text-left",
        className
      )}
      {...props}
      ref={innerRef}
    >
      {children}
    </motion.div>
  );
}

export default FlexContainer;
