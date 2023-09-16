import { twMerge } from "tailwind-merge";

function Header({ className, children }) {
  return (
    <h1
      className={twMerge(
        "font-primaryFont text-[1.75rem]  leading-tight sm:text-[2.0rem] lg:text-[2.5rem]   ",
        className
      )}
    >
      {children}
    </h1>
  );
}

export default Header;
