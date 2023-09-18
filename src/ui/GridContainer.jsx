import { twMerge } from "tailwind-merge";

function GridContainer({ className, children }) {
  return (
    <div
      className={twMerge(
        "grid grid-cols-1 justify-center gap-4 md:px-10 lg:grid lg:grid-cols-[1fr_1.75fr] lg:p-0",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default GridContainer;
