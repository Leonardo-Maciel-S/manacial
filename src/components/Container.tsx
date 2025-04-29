import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const container = tv({
  base: "container grid lg:justify-center lg:items-center text-white",
  variants: {
    columns: {
      1: "lg:grid-cols-1",
      2: "lg:grid-cols-2",
      3: "lg:grid-cols-3",
      4: "lg:grid-cols-4",
    },
    rows: {
      1: "lg:grid-rows-1",
      2: "lg:grid-rows-2",
      3: "lg:grid-rows-3",
      4: "lg:grid-rows-4",
    },
  },
  defaultVariants: {
    columns: 2,
    rows: 1,
  },
});

interface ContainerProps {
  children?: ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  rows?: 1 | 2 | 3 | 4;
}

export const Container = ({
  children,
  className,
  columns,
  rows,
}: ContainerProps) => {
  return (
    <div className="bg-gradient-to-l from-black to-80% to-[#242222] w-full flex justify-center items-center">
      <div className={container({ className, columns, rows })}>{children}</div>
    </div>
  );
};
