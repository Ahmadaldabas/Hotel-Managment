import { twMerge } from "tailwind-merge";

function HighLight({ className, children }) {
  return (
    <span className={twMerge("text-blue-600", className)}> {children} </span>
  );
}

export default HighLight;
