import { twMerge } from "tailwind-merge";

function Container({ className, children }) {
  return (
    <div
      className={`${twMerge(
        "font-primaryFont  mx-auto mt-8 max-w-screen-2xl px-6 lg:mt-20  ",
        className,
      )}`}
    >
      {children}
    </div>
  );
}

export default Container;
