import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const container = tv({
  base: "container grid justify-center items-center ",
  variants: {
    columns: {
      1: "md:grid-cols-1",
      2: "md:grid-cols-2",
      3: "md:grid-cols-3",
      4: "md:grid-cols-4",
    },
    rows: {
      1: "md:grid-rows-1",
      2: "md:grid-rows-2",
      3: "md:grid-rows-3",
      4: "md:grid-rows-4",
    },
  },
  defaultVariants: {
    columns: 2,
    rows: 1,
  },
});

interface ContainerProps {
  children: ReactNode;
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
    <div className="bg-gradient-to-tl from-black to-50% to-[#242222] w-full flex justify-center items-center">
      <div className={container({ className, columns, rows })}>{children}</div>
    </div>
  );
};
