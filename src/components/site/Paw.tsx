import type { CSSProperties } from "react";
export const BOOK = "https://theloyalcompanion.franpos.co/appointment/";
export function Paw({ size, style, hover }: { size: number; style?: CSSProperties; hover?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="-12.5 -13.5 25 25" aria-hidden="true" className={hover ? "pw" : undefined} style={{ display: "inline-block", verticalAlign: "middle", ...style }}>
      <ellipse cx="0" cy="6" rx="7" ry="6" /><ellipse cx="-9" cy="-3" rx="3" ry="4" /><ellipse cx="-3.5" cy="-9" rx="3" ry="4" /><ellipse cx="3.5" cy="-9" rx="3" ry="4" /><ellipse cx="9" cy="-3" rx="3" ry="4" />
    </svg>
  );
}
