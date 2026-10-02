import type { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block max-w-full rounded-full border border-current/25 px-3 py-1 text-xs leading-relaxed text-[#6B6B6B]">
      {children}
    </span>
  );
}
