import React from "react";

export function LogoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2L2 22h20L12 2zm0 4.5L17.5 19h-11L12 6.5z" />
    </svg>
  );
}
