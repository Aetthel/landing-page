import React from "react";

export function VSCodium(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="m16.5 3.5 5 2.5v12l-5 2.5-9-9.5 9-7.5Z" />
      <path d="m16.5 3.5-12 10 3 3 14-13" />
      <path d="M4.5 13.5 2 12l2.5-1.5" />
    </svg>
  );
}
