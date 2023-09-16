import { twMerge } from "tailwind-merge";

function Container({ className, children }) {
  return (
    <div className={`${twMerge("mx-auto  max-w-screen-xl  ", className)}`}>
      {children}
    </div>
  );
}

export default Container;
