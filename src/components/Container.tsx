import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const container = tv({
  base: "container px-10 min-h-screen border grid justify-center items-center",
  variants: {
    columns: {
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

export const Container = ({ children }: { children: ReactNode }) => {
  return <div className={container({})}>{children}</div>;
};
