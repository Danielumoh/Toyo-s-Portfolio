import type { ReactNode } from "react";

export default function Card({
  children,
  className = "",
  highlightOnHover = true,
}: {
  children: ReactNode;
  className?: string;
  highlightOnHover?: boolean;
}) {
  return (
    <div
      className={`${highlightOnHover ? "hover-card" : "motion-reduce:transition-none motion-reduce:hover:translate-y-0"} border border-[#E3E3E3] rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
}
