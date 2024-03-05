interface TickIconProps {
  className?: string;
}

export const TickIcon = ({ className }: TickIconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <title>TickIcon</title>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
};
