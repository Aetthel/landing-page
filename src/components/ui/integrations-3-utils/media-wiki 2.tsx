import React from "react";

export function MediaWiki(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8L19.2 8 12 11.2 4.8 8 12 4.8zM4 9.6l7 3.1v6.5l-7-3.5V9.6zm16 6.1l-7 3.5v-6.5l7-3.1v6.1z" />
    </svg>
  );
}
